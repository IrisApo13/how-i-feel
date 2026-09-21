// Interactive review of generated candidates.
//
//   node scripts/review.mjs packets/<id>.candidates.json [--all]
//
// The automated screen catches mechanical faults; only a person can say whether
// a question is worth asking a child. This exists to make that judgement fast
// rather than to make it for you -- it shows one candidate at a time with its
// provenance and screen result, and records the decision with its reason.
//
// Rejections are kept, never deleted. They are the evidence that a human
// evaluated the set; a bank of survivors with no rejection log behind it cannot
// substantiate the claim that anyone reviewed anything.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirForPacket, packetDirs } from './packet-paths.mjs'
import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
import { screen } from './screen.mjs'

const [file, ...flags] = process.argv.slice(2)
if (!file) { console.error('usage: node scripts/review.mjs packets/<id>.candidates.json [--all]'); process.exit(1) }

const data = JSON.parse(readFileSync(file, 'utf8'))
const metaPath = `${dirForPacket(data.packet.id)}/meta.json`
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : { cite: {}, itemRank: [] }

const screened = new Map(screen(data.candidates, data.packet).map((r) => [r.id, r]))

// Which OTHER packets can already reach this question's fact. Two packets that
// share a fact are not both asked -- `keyOf` in vocab.js suppresses the second
// -- so accepting a question whose fact is already covered elsewhere buys a
// wording, not a question. The reviewer should see that before deciding.
const factsElsewhere = new Map()
for (const dir of packetDirs()) {
  const f = `${dir}/candidates.json`
  if (!existsSync(f)) continue
  const d = JSON.parse(readFileSync(f, 'utf8'))
  if (d.packet.id === data.packet.id) continue
  for (const c of d.candidates) {
    if (!c.fact || c.review?.status === 'rejected') continue
    if (!factsElsewhere.has(c.fact)) factsElsewhere.set(c.fact, new Set())
    factsElsewhere.get(c.fact).add(`${d.packet.id}/${c.id}`)
  }
}
const save = () => writeFileSync(file, JSON.stringify(data, null, 2))

const C = { dim: '\x1b[2m', bold: '\x1b[1m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m', off: '\x1b[0m' }
const rl = createInterface({ input: stdin, output: stdout })

const todo = data.candidates.filter((c) => flags.includes('--all') || c.review?.status === 'pending' || !c.review)
if (!todo.length) { console.log('Nothing pending. Pass --all to revisit decided candidates.'); rl.close(); process.exit(0) }

console.log(`\n${C.bold}${data.packet.id}${C.off} — ${todo.length} to review\n`)

let n = 0
for (const c of todo) {
  n++
  const s = screened.get(c.id)
  const rank = meta.itemRank.indexOf(c.traces_to)
  const verdict = s.verdict === 'REJECT' ? `${C.red}screen: REJECT${C.off}`
    : s.verdict === 'REVIEW' ? `${C.yellow}screen: look${C.off}` : `${C.green}screen: clean${C.off}`

  console.log(`${C.bold}[${n}/${todo.length}] ${c.id}${C.off}  item ${c.traces_to}` +
    `${C.dim} · ${meta.cite[String(c.traces_to)] ?? 'NO CITATION'} · ${c.answers}` +
    `${rank >= 0 ? ` · rank ${rank + 1}` : ' · unranked'}${C.off}`)
  console.log(`  ${C.cyan}young${C.off}  ${c.q.young}`)
  console.log(`  ${C.cyan}older${C.off}  ${c.q.older}`)
  if (c.why) console.log(`  ${C.dim}why    ${c.why}${C.off}`)
  if (c.fact) {
    const also = [...(factsElsewhere.get(c.fact) ?? [])]
    console.log(`  ${C.dim}fact   ${c.fact}${also.length ? ` — also reachable from ${also.join(', ')}` : ''}${C.off}`)
  }
  console.log(`  ${verdict}`)
  for (const x of [...s.rejects, ...s.flags]) console.log(`    ${C.dim}- ${x}${C.off}`)

  let done = false
  while (!done) {
    const k = (await rl.question('  [a]ccept [r]eject [e]dit [s]kip [q]uit > ')).trim().toLowerCase()
    if (k === 'a') {
      c.review = { status: 'accepted', by: 'iris', on: new Date().toISOString().slice(0, 10) }
      done = true
    } else if (k === 'r') {
      const why = (await rl.question('  reason: ')).trim()
      if (!why) { console.log('  a reason is required — it is the record that this was judged, not skipped'); continue }
      c.review = { status: 'rejected', by: 'iris', on: new Date().toISOString().slice(0, 10), reason: why }
      done = true
    } else if (k === 'e') {
      const y = (await rl.question(`  young [${c.q.young}]: `)).trim()
      const o = (await rl.question(`  older [${c.q.older}]: `)).trim()
      if (y) c.q.young = y
      if (o) c.q.older = o
      // re-screen the edit: a hand-written fix can introduce exactly the faults
      // the screen exists to catch
      const again = screen([c], data.packet)[0]
      screened.set(c.id, again)
      console.log(`  re-screened: ${again.verdict}`)
      for (const x of [...again.rejects, ...again.flags]) console.log(`    - ${x}`)
    } else if (k === 's') { done = true }
    else if (k === 'q') { save(); console.log(`\nsaved ${file}`); rl.close(); process.exit(0) }
  }
  save()
  console.log()
}

rl.close()
const tally = data.candidates.reduce((a, c) => (a[c.review?.status ?? 'pending'] = (a[c.review?.status ?? 'pending'] ?? 0) + 1, a), {})
console.log(`saved ${file} — ${JSON.stringify(tally)}`)
console.log('next: node scripts/build-bank.mjs')
