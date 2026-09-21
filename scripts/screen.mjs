// Automated pre-screen for generated question candidates.
//
// Runs before any human sees a candidate. Everything here is mechanical and
// deterministic on purpose -- a model is slower, costlier and less consistent
// at this, and the whole point is that the human's attention is spent on
// judgement, not on catching typos and duplicates.
//
//   node scripts/screen.mjs packets/head-injury.candidates.json
//
// A candidate is rejected outright for anything that is never acceptable, and
// flagged (but kept) for anything a human should look at.

import { readFileSync, existsSync } from 'node:fs'
import { dirForPacket, packetDirs } from './packet-paths.mjs'

// UNIVERSAL bans -- true of every packet, because they are about how children
// answer questions rather than about any body part.
const BANNED_ALWAYS = [
  [/\b(serious|dangerous|severe|terrible|awful|bad(ly)?)\b/i, 'severity adjective — the child rates the word, not the event'],
  [/\bpass(ed)?\s*out\b/i, 'says "passed out"'],
]

// PER-PACKET bans come from packets/<id>.meta.json, transcribed from that
// packet's own wording cautions. This used to be a single hardcoded list that
// checked every candidate for "skull|brain|concussion" -- so a tummy question
// naming the appendix passed the clinical-naming check untouched, while the
// comment above it claimed the list was packet-sourced. It wasn't.
const bannedFor = (packetId) => {
  const f = `${dirForPacket(packetId)}/meta.json`
  if (!existsSync(f)) {
    console.warn(`  ⚠ no ${f} — running with universal bans only`)
    return BANNED_ALWAYS
  }
  const meta = JSON.parse(readFileSync(f, 'utf8'))
  return [...BANNED_ALWAYS, ...(meta.bannedPhrases ?? []).map(([re, why]) => [new RegExp(re, 'i'), why])]
}

// Presuppositions and tag questions: these embed an answer in the question.
const LEADING = [
  [/^(how much|how bad|how long)\b/i, 'presupposes the thing it asks about'],
  [/,\s*(right|isn'?t it|don'?t you|didn'?t you)\s*\?*$/i, 'tag question'],
  [/\bstill\b/i, 'assumes it was already true'],
  [/\b(a lot|really|very)\b/i, 'intensity embedded in the question'],
]

const CLINICAL_JARGON = /\b(amnesia|nausea|emesis|trauma|symptom|lesion|acute|onset)\b/i

// Answer sets the app can actually render. A question that needs a widget the
// app does not have is not shippable, however good it is.
//
// `text` and `voice` were added after the mechanism question ("what were you
// doing when you hurt it?") was rejected for having nowhere to put the answer.
// All four now render in FollowUpScreen -- yes/no and `count` as choice rows,
// `text`/`voice` as a typed or spoken answer depending on the child's input
// preference -- so nothing here is gated on a missing widget. PENDING_WIDGETS
// is kept, and empty, because the flag is how a future answer type gets
// staged: add it to ANSWER_SETS and to PENDING_WIDGETS until it renders.
const ANSWER_SETS = new Set(['yesno', 'count', 'text', 'voice', 'choice'])
const PENDING_WIDGETS = new Set([])

// Is this a question at all? Everything else here judges WORDING; this judges
// whether there is a well-formed question to judge. It exists because the
// review tool's [e]dit path writes whatever is typed straight into `q`, and a
// reviewer meaning to note "this is ok" typed it into the older-tier prompt --
// which passed every phrasing rule cleanly and would have been shown to a
// child as the question. Cheap, mechanical, and it can only ever catch a
// mistake: no correctly-written question trips any of these.
const wellFormed = (text) => {
  const t = (text ?? '').trim()
  if (!t) return 'empty'
  if (/[[\]{}]/.test(t)) return 'stray bracket — probably a slipped keystroke'
  if (!/^[A-Z]/.test(t)) return 'does not start with a capital'
  if (!t.endsWith('?')) return 'does not end with a question mark'
  if (t.split(/\s+/).length < 3) return `only ${t.split(/\s+/).length} words — not a question`
  return null
}

const syllables = (w) =>
  (w.toLowerCase().replace(/[^a-z]/g, '').replace(/e$/, '').match(/[aeiouy]+/g) || ['x']).length

// Deliberately crude readability: word count plus how many words are long.
// A 5-year-old's limit is short sentences and short words, not a Flesch score.
const tooHard = (text, tier) => {
  const words = text.replace(/[^\w\s']/g, '').split(/\s+/).filter(Boolean)
  const limit = tier === 'young' ? 9 : 14
  const longWords = words.filter((w) => syllables(w) >= 3).length
  if (words.length > limit) return `${words.length} words (limit ${limit} for ${tier})`
  if (longWords > (tier === 'young' ? 1 : 2)) return `${longWords} long words for ${tier}`
  return null
}

const normalise = (s) =>
  s.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\b(the|a|an|your|you|it|is|are|do|does|did)\b/g, '').replace(/\s+/g, ' ').trim()

// Everything the OTHER packets already ask, keyed two ways. Until now the
// screen could only see the file in front of it, so nothing stopped a packet
// re-generating a question another packet already ships: the text passes every
// regex, and the collision only shows up later as a silently dropped question
// (`fact` dedupe keeps whichever queue reaches it first). The limb packets are
// the live case -- `limb-pain` is explicitly forbidden from re-generating
// `limb-injury`'s items 1-7, and no rule here could have caught it.
//
// Reported, never rejected. Sharing a fact across packets is often correct --
// it is how a systemic question asked from three body areas gets asked once --
// so this is a prompt for the human, not a verdict.
const elsewhere = (selfId) => {
  const byFact = new Map()
  const byText = new Map()
  for (const dir of packetDirs()) {
    const f = `${dir}/candidates.json`
    if (!existsSync(f)) continue
    const d = JSON.parse(readFileSync(f, 'utf8'))
    if (d.packet.id === selfId) continue
    for (const c of d.candidates) {
      if (c.review?.status === 'rejected') continue
      const where = `${d.packet.id} ${c.id} (item ${c.traces_to})`
      if (c.fact && !byFact.has(c.fact)) byFact.set(c.fact, where)
      const k = normalise(c.q.young)
      if (!byText.has(k)) byText.set(k, where)
    }
  }
  return { byFact, byText }
}

export function screen(candidates, packet) {
  const BANNED = bannedFor(packet.id)
  const OTHER = elsewhere(packet.id)
  const askable = new Set(packet.askableItems)
  const seen = new Map()
  return candidates.map((c) => {
    const rejects = []
    const flags = []

    // 1. provenance: must trace to a real, askable packet item
    if (!Number.isInteger(c.traces_to)) rejects.push('no traces_to')
    else if (!askable.has(c.traces_to)) {
      rejects.push(`traces to item ${c.traces_to}, which is excluded or observer-only`)
    }

    // 2. answer set must be one the app can render
    if (!ANSWER_SETS.has(c.answers)) rejects.push(`unknown answer set "${c.answers}"`)
    else if (PENDING_WIDGETS.has(c.answers)) flags.push(`needs a "${c.answers}" widget — not yet rendered by FollowUpScreen`)

    // `choice` is the only answer set that carries its own answers, so it is the
    // only one that can be internally malformed. Two options is a yes/no with
    // extra words; five will not fit a phone at the young tier's type size.
    if (c.answers === 'choice') {
      const o = c.options
      if (!Array.isArray(o) || o.length < 2) rejects.push('a "choice" question needs an `options` array of 2 or more')
      else if (o.length > 4) rejects.push(`a "choice" question may offer at most 4 options, this has ${o.length}`)
      else for (const [i, opt] of o.entries()) {
        if (!opt?.id) rejects.push(`option ${i + 1} has no \`id\``)
        const lab = opt?.label
        const ok = typeof lab === 'string' ? lab.length : lab?.young && lab?.older
        if (!ok) rejects.push(`option ${i + 1} needs a \`label\`, either a string or {young, older}`)
      }
    } else if (c.options) {
      flags.push(`\`options\` is only read for a "choice" question — this is "${c.answers}" and they will be dropped`)
    }

    for (const [tier, text] of Object.entries(c.q)) {
      // 0. well-formedness -- checked first, because a malformed string makes
      // every rule below meaningless
      const malformed = wellFormed(text)
      if (malformed) rejects.push(`${tier}: ${malformed}`)
      // 3. banned phrasing
      for (const [re, why] of BANNED) if (re.test(text)) rejects.push(`${tier}: ${why}`)
      // 4. leading construction
      for (const [re, why] of LEADING) if (re.test(text)) rejects.push(`${tier}: ${why}`)
      // 5. jargon
      if (CLINICAL_JARGON.test(text)) rejects.push(`${tier}: clinical jargon`)
      // 6. readability
      const hard = tooHard(text, tier)
      if (hard) flags.push(`${tier}: ${hard}`)
      // 7. compound questions -- flagged, not rejected: some lists are fine
      if (/\?\s*\w/.test(text)) rejects.push(`${tier}: two questions in one`)
      if (/\band\b/i.test(text) && /\b(did|do|are|is|have|has)\b.*\band\b.*\b(did|do|are|is|have|has)\b/i.test(text))
        flags.push(`${tier}: possible compound question`)
    }

    // 8. duplicates against everything already processed
    const key = normalise(c.q.young)
    if (seen.has(key)) rejects.push(`duplicate of ${seen.get(key)}`)
    else seen.set(key, c.id)

    // 9. duplicates against OTHER packets. A repeated question is a rejection
    // inside one packet and a judgement call across packets, so these are
    // flags: the reviewer decides whether this is a deliberate shared fact or
    // an accidental re-generation of something already shipping.
    if (OTHER.byText.has(key))
      flags.push(`same question as ${OTHER.byText.get(key)} — share a fact deliberately, or drop one`)
    else if (c.fact && OTHER.byFact.has(c.fact))
      flags.push(`fact "${c.fact}" is already asked by ${OTHER.byFact.get(c.fact)} — only one of them will ever be asked`)

    return { ...c, rejects, flags, verdict: rejects.length ? 'REJECT' : flags.length ? 'REVIEW' : 'PASS' }
  })
}

// Only run the CLI when this file IS the entry point. Without this guard,
// importing `screen` from review.mjs re-ran the whole screening report using
// review.mjs's own argv, dumping 40 lines before the reviewer saw anything.
import { pathToFileURL } from 'node:url'
const isEntry = import.meta.url === pathToFileURL(process.argv[1] ?? '').href

const [file] = process.argv.slice(2)
if (isEntry && file) {
  const { packet, candidates } = JSON.parse(readFileSync(file, 'utf8'))
  console.log(`screening ${candidates.length} candidates against packet "${packet.id}"`)
  const results = screen(candidates, packet)
  const counts = { PASS: 0, REVIEW: 0, REJECT: 0 }
  for (const r of results) counts[r.verdict]++

  for (const r of results) {
    if (r.verdict === 'REJECT') {
      console.log(`\x1b[31m✗ ${r.id}\x1b[0m  "${r.q.young}"`)
      r.rejects.forEach((x) => console.log(`    → ${x}`))
    }
  }
  console.log('\n--- survivors ---')
  for (const r of results) {
    if (r.verdict === 'REJECT') continue
    const mark = r.verdict === 'PASS' ? '\x1b[32m✓\x1b[0m' : '\x1b[33m?\x1b[0m'
    console.log(`${mark} ${r.id}  [item ${r.traces_to}, ${r.answers}]`)
    console.log(`    young: "${r.q.young}"`)
    console.log(`    older: "${r.q.older}"`)
    r.flags.forEach((x) => console.log(`    ! ${x}`))
  }
  console.log(`\n${candidates.length} candidates → ${counts.REJECT} rejected, ${counts.REVIEW} need a look, ${counts.PASS} clean`)
}
