// Condense a packet into something a person can actually review.
//
//   node scripts/packet-digest.mjs <id>              full digest
//   node scripts/packet-digest.mjs <id> --clinician  the one page to hand a nurse
//   node scripts/packet-digest.mjs                   all packets, one line each
//
// A packet runs to 600-1000 lines because the reasoning is the point. But
// reviewing one means checking a handful of things -- which criteria were kept,
// which were excluded and why, and which decisions were judgement rather than
// citation. This pulls exactly those out.

import { readFileSync, existsSync } from 'node:fs'
import { packetDirs, dirForPacket } from './packet-paths.mjs'

const C = { b: '\x1b[1m', dim: '\x1b[2m', red: '\x1b[31m', grn: '\x1b[32m', yel: '\x1b[33m', cy: '\x1b[36m', off: '\x1b[0m' }
const clean = (s) => s.replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim()
const trunc = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s)

const packets = () => packetDirs().map((d) => JSON.parse(readFileSync(`${d}/meta.json`, 'utf8')).id)

function parse(id) {
  const md = readFileSync(`${dirForPacket(id)}/packet.md`, 'utf8')
  const meta = JSON.parse(readFileSync(`${dirForPacket(id)}/meta.json`, 'utf8'))
  const status = (md.match(/^Status:.*$/m) || [''])[0].replace('Status:', '').trim()
  const rows = [...md.matchAll(/^\|\s*(\d+)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|/gm)]
    .map(([, n, item, src, verdict]) => ({
      n: +n, item: clean(item), src: clean(src), verdict: clean(verdict),
    }))
  const decisions = [...md.matchAll(/^(\d+)\.\s+\*\*(.+?)\*\*/gm)].map(([, n, d]) => ({ n: +n, d: clean(d) }))
  const open = (md.match(/^## Still open\n([\s\S]*?)(?=\n## |$)/m) || ['', ''])[1]
    .split('\n').filter((l) => l.trim().startsWith('-')).map((l) => clean(l.replace(/^-\s*/, '')))
  return { id, meta, status, rows, decisions, open, lines: md.split('\n').length }
}

const askable = (v) => /^yes/i.test(v) || /^partial/i.test(v)

if (!process.argv[2]) {
  console.log(`\n${C.b}All packets${C.off}\n`)
  for (const id of packets()) {
    const p = parse(id)
    const yes = p.rows.filter((r) => /^yes/i.test(r.verdict)).length
    const par = p.rows.filter((r) => /^partial/i.test(r.verdict)).length
    const no = p.rows.filter((r) => /^no/i.test(r.verdict)).length
    const cands = existsSync(`${dirForPacket(id)}/candidates.json`) ? '✓' : '—'
    console.log(`  ${C.b}${id.padEnd(20)}${C.off} ${String(p.rows.length).padStart(3)} items` +
      `  ${C.grn}${yes} yes${C.off} ${C.yel}${par} partial${C.off} ${C.dim}${no} excluded${C.off}` +
      `  · candidates ${cands} · ${p.lines} lines`)
  }
  console.log(`\n  ${C.dim}node scripts/packet-digest.mjs <id> [--clinician]${C.off}\n`)
  process.exit(0)
}

const p = parse(process.argv[2])
const clinician = process.argv.includes('--clinician')

console.log(`\n${C.b}${p.id}${C.off}  ${C.dim}(${p.lines} lines condensed)${C.off}`)
console.log(`${C.dim}${p.status}${C.off}`)
console.log(`${C.dim}group ${p.meta.group ?? '?'} · depth ${p.meta.depth ?? 'n/a'}${C.off}\n`)

if (clinician) {
  console.log(`${C.b}The question to challenge: can a child aged 4-12 report this about themselves?${C.off}\n`)
  for (const r of p.rows.filter((r) => askable(r.verdict))) {
    const mark = /^yes/i.test(r.verdict) ? `${C.grn}claimed YES${C.off}` : `${C.yel}claimed PARTIAL${C.off}`
    console.log(`  ${String(r.n).padStart(2)}. ${trunc(r.item, 62).padEnd(63)} ${mark}`)
    console.log(`      ${C.dim}source: ${trunc(r.src, 88)}${C.off}`)
  }
  console.log(`\n${C.b}Excluded as examination / observer / out of scope${C.off}${C.dim} — is anything here wrongly excluded?${C.off}\n`)
  for (const r of p.rows.filter((r) => !askable(r.verdict))) {
    console.log(`  ${C.dim}${String(r.n).padStart(2)}. ${trunc(r.item, 70)}  [${trunc(r.verdict, 22)}]${C.off}`)
  }
  console.log(`\n${C.dim}Full reasoning: ${dirForPacket(p.id)}/packet.md · limitations: packets/LIMITATIONS.md${C.off}\n`)
  process.exit(0)
}

const rank = p.meta.itemRank ?? []
console.log(`${C.b}Items${C.off}`)
for (const r of p.rows) {
  const pos = rank.indexOf(r.n)
  const tag = /^yes/i.test(r.verdict) ? `${C.grn}yes    ${C.off}`
    : /^partial/i.test(r.verdict) ? `${C.yel}partial${C.off}`
    : `${C.dim}—      ${C.off}`
  const shipping = pos >= 0 ? `${C.cy}#${pos + 1}${C.off}` : '  '
  const age = p.meta.minAge?.[String(r.n)] ? ` ${C.dim}(age ${p.meta.minAge[String(r.n)]}+)${C.off}` : ''
  console.log(`  ${String(r.n).padStart(2)} ${tag} ${shipping} ${trunc(r.item, 58).padEnd(59)}${age}`)
  if (pos >= 0) console.log(`        ${C.dim}${trunc(p.meta.cite?.[String(r.n)] ?? 'NO CITATION', 92)}${C.off}`)
}
console.log(`\n${C.b}Decisions${C.off}${C.dim} — these are settled, not deferred${C.off}`)
for (const d of p.decisions.slice(0, 12)) console.log(`  ${d.n}. ${trunc(d.d, 96)}`)
if (p.open.length) {
  console.log(`\n${C.b}Still open${C.off}`)
  for (const o of p.open) console.log(`  ${C.yel}·${C.off} ${trunc(o, 100)}`)
}
console.log()
