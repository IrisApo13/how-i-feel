// Fetch one open-access source and extract its text.
//
//   node scripts/fetch-source.mjs <url> [--full]
//
// Written from what actually went wrong assembling the head-injury packet by
// hand: three of four sources refused an automated fetch, and the one PDF that
// did come back defeated naive text extraction. So this does two things
// carefully -- it identifies itself like a browser (many publishers block
// unknown agents outright), and it uses pypdf rather than scraping PDF streams,
// because typeset journal PDFs use subsetted fonts whose bytes are glyph
// indices, not letters.
//
// SCOPE: open-access material only -- PMC, publisher-hosted preprints, public
// guidelines. Do not point it at anything paywalled or behind a login. It does
// not and must not defeat access controls.

import { writeFileSync, mkdirSync, existsSync, readFileSync, renameSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'

const CACHE = 'packets/.sources'

// Several packet-builder agents run at once and share this cache. Two of them
// fetching the same URL would otherwise interleave writes and leave a truncated
// file that the other reads as a complete source. Write to a unique temp name
// and rename -- rename is atomic on the same filesystem, so a reader either
// sees the old file or the whole new one, never half of one.
const writeAtomic = (path, data) => {
  const tmp = `${path}.${process.pid}.${Date.now()}.tmp`
  writeFileSync(tmp, data)
  renameSync(tmp, path)
}
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36'

// The cache key MUST be unique per URL. It used to be the sanitised URL
// truncated to 80 characters, and that silently returned the WRONG DOCUMENT:
// every NHS Greater Glasgow paediatric guideline URL is identical over its
// first 80 characters, so fetching guideline 180 (acute gastroenteritis)
// returned `{cached: true}` and the full text of guideline 336 (acute sore
// throat). A packet builder had no way to tell -- it asked for one guideline,
// got prose that read like a guideline, and would have quoted it verbatim
// under the citation it requested.
//
// A false citation is the one failure this whole pipeline exists to prevent,
// so the truncated name now carries an 8-character hash of the FULL url. Two
// urls that agree over 80 characters get different files; the readable prefix
// is kept because a human browsing packets/.sources/ needs to recognise them.
const slug = (u) => {
  const readable = u.replace(/^https?:\/\//, '').replace(/[^\w.-]+/g, '_').slice(0, 70)
  return `${readable}-${createHash('sha1').update(u).digest('hex').slice(0, 8)}`
}

// Journal sites vary wildly in what they serve a robot. PMC is the most
// reliable channel by a distance, so if a DOI or PubMed id is recognisable
// in the URL it is worth trying PMC before the publisher.
const alternatives = (url) => {
  const out = [url]
  const pmc = url.match(/PMC\d+/i)
  // Append, never prepend: a caller who passed a specific mirror asked for
  // that mirror. PMC is only a fallback when the requested URL fails.
  if (pmc && !url.includes('pmc.ncbi')) out.push(`https://pmc.ncbi.nlm.nih.gov/articles/${pmc[0]}/`)
  return out
}

const htmlToText = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
   .replace(/<style[\s\S]*?<\/style>/gi, ' ')
   .replace(/<[^>]+>/g, ' ')
   .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/\s+/g, ' ').trim()

const pdfToText = (path) => {
  try {
    return execFileSync('python3', ['-c', `
import sys, pypdf
r = pypdf.PdfReader(sys.argv[1])
sys.stdout.write("\\n".join((p.extract_text() or "") for p in r.pages))
`, path], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
  } catch (e) {
    return `__PYPDF_FAILED__ ${e.message.slice(0, 200)}`
  }
}

// A PDF can "extract" thousands of characters of mojibake and look successful.
// Real prose has spaces and common English words; glyph soup has neither.
const isBotWall = (t) =>
  /recaptcha|are you a robot|unusual traffic|enable javascript to continue/i.test(t.slice(0, 4000))

const looksLikeProse = (t) => {
  const words = t.toLowerCase().match(/\b[a-z]{2,}\b/g) || []
  if (words.length < 200) return false
  const common = words.filter((w) => ['the', 'and', 'of', 'in', 'to', 'with', 'for'].includes(w)).length
  return common / words.length > 0.03
}

export async function fetchSource(url) {
  mkdirSync(CACHE, { recursive: true })
  const base = `${CACHE}/${slug(url)}`
  if (existsSync(`${base}.txt`)) {
    const text = readFileSync(`${base}.txt`, 'utf8')
    // Guard against a cache entry written by an older, non-atomic run.
    if (looksLikeProse(text)) return { url, cached: true, text, status: 'cached' }
  }

  const attempts = []
  for (const candidate of alternatives(url)) {
    let res
    try {
      res = await fetch(candidate, { headers: { 'User-Agent': UA, Accept: '*/*' }, redirect: 'follow' })
    } catch (e) {
      attempts.push({ url: candidate, error: e.message }); continue
    }
    if (!res.ok) { attempts.push({ url: candidate, status: res.status }); continue }

    const type = res.headers.get('content-type') || ''
    const buf = Buffer.from(await res.arrayBuffer())
    let text
    if (type.includes('pdf') || buf.slice(0, 5).toString() === '%PDF-') {
      writeAtomic(`${base}.pdf`, buf)
      text = pdfToText(`${base}.pdf`)
    } else {
      text = htmlToText(buf.toString('utf8'))
    }

    const wall = isBotWall(text)
    const ok = !wall && looksLikeProse(text)
    // Only successful extractions are cached. A cached bot wall or a cached
    // page of glyph soup would make every later retry return the failure.
    if (ok) writeAtomic(`${base}.txt`, text)
    if (wall) { attempts.push({ url: candidate, status: 'BOT_WALL (HTTP 200, not cached)' }); continue }
    return {
      url: candidate, requested: url, cached: false,
      status: ok ? 'ok' : 'EXTRACTED_BUT_UNREADABLE',
      chars: text.length, kind: type.includes('pdf') ? 'pdf' : 'html',
      path: `${base}.txt`, attempts, text,
    }
  }
  return { url, status: 'UNREACHABLE', attempts, text: '' }
}

const [url] = process.argv.slice(2)
if (url) {
  const r = await fetchSource(url)
  const { text, ...meta } = r
  console.log(JSON.stringify(meta, null, 2))
  const full = process.argv.includes('--full')
  if (text) console.log(`\n--- ${full ? 'full text' : 'first 2000 chars (pass --full for all)'} ---\n`
    + (full ? text : text.slice(0, 2000)))
}
