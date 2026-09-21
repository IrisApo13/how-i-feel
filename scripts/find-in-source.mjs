// Pull just the passages you need out of a cached source.
//
//   node scripts/find-in-source.mjs <cached.txt> "term one" "term two" ...
//   node scripts/find-in-source.mjs <cached.txt> --scan
//
// A fetched guideline is 60,000+ characters. The criteria you actually need are
// a few hundred. Reading the whole file into an agent's context to extract
// eight bullet points is what makes a packet cost ~180k tokens; targeted
// windows do the same job for a fraction of it, and quote just as accurately.
//
// --scan prints the sentences most likely to BE criteria (imperatives, risk
// language, thresholds) so you can find the terms worth searching for without
// reading the document.

import { readFileSync } from 'node:fs'

const [file, ...terms] = process.argv.slice(2)
if (!file) { console.error('usage: node scripts/find-in-source.mjs <cached.txt> "term" ...'); process.exit(1) }

const text = readFileSync(file, 'utf8').replace(/\s+/g, ' ').trim()
console.log(`${file} — ${text.length} chars\n`)

if (terms[0] === '--scan' || !terms.length) {
  // Sentences carrying the shapes criteria usually take.
  const CUES = /\b(risk factor|criteria|score|predictor|assess|consider|refer|red flag|urgent|if (there|the child|any)|more than|less than|greater than|at least|within \d|aged? \d|do not|should be|indicates?)\b/i
  const sentences = text.split(/(?<=[.;])\s+/).filter((s) => s.length > 40 && s.length < 400 && CUES.test(s))
  console.log(`--scan: ${sentences.length} candidate criterion sentences\n`)
  for (const s of sentences.slice(0, 60)) console.log(`  • ${s.trim()}`)
  if (sentences.length > 60) console.log(`\n  …${sentences.length - 60} more; search specific terms to narrow.`)
  process.exit(0)
}

const BEFORE = 130, AFTER = 220, MAX_PER_TERM = 4
for (const term of terms) {
  let re
  try { re = new RegExp(term, 'gi') } catch { re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi') }
  const hits = []
  let m
  while ((m = re.exec(text)) && hits.length < MAX_PER_TERM) {
    hits.push(text.slice(Math.max(0, m.index - BEFORE), m.index + m[0].length + AFTER))
    re.lastIndex = m.index + m[0].length + AFTER   // don't return overlapping windows
  }
  console.log(`── ${term} — ${hits.length ? `${hits.length} window(s)` : 'NO MATCH'}`)
  for (const h of hits) console.log(`   …${h.trim()}…\n`)
}
