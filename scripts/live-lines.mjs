// Work out which question lines a child can ACTUALLY be asked, and write them
// to scripts/live-lines.json.
//
//   node scripts/live-lines.mjs
//
// The bank holds far more questions than any child sees. Each packet ranks its
// items, and `followUpsForGroups` spends a cap of 5 (under 8) or 6 (8+) across
// every body area the child tapped -- so a packet with ten items might only
// ever contribute two or three. Headache is the clearest case: ten ranked
// items, and a child who also taps a tummy will hear maybe three of them.
//
// Guessing a rank cutoff gets this roughly right and is wrong at both ends: it
// generates audio nobody hears for packets that never win many slots, and skips
// lines that ARE reached when a child taps one area only. So this runs the real
// selection code across every combination instead -- body area, duration, age
// tier, depth, mechanism, and the two-group case, which matters because two
// packets competing changes which questions win.
//
// Re-run it after any ranking change, any review, or any rebuild of the bank.

import { writeFileSync, mkdtempSync, readdirSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// src/data/*.js import each other without file extensions, which Vite resolves
// and Node does not. Copy them somewhere temporary and add the extensions.
const dir = mkdtempSync(join(tmpdir(), 'hif-sim-'))
for (const f of readdirSync('src/data')) {
  if (!f.endsWith('.js')) continue
  const src = readFileSync(`src/data/${f}`, 'utf8').replace(/(from\s+'\.\/[^']+?)'/g, "$1.js'")
  writeFileSync(join(dir, f), src)
}

const { followUpsForGroups } = await import(join(dir, 'vocab.js'))
const { REGIONS, GROUP_GATE } = await import(join(dir, 'bodyMap.js'))

const DURATIONS = ['just-now', 'this-morning', 'yesterday', 'not-sure', 'few-days', 'long-time']
// One age either side of the tier boundary is enough; the tier is the only
// thing age changes, apart from per-item minAge floors which these bracket.
const AGES = [4, 7, 8, 12]
const DEPTHS = [null, 'surface', 'inside', 'unknown']
const MECHS = [null, 'injury', 'no-injury', 'unknown']

const groups = [...new Set(REGIONS.map((r) => r.group))]
const live = new Set()
const add = (q, age) => {
  const t = typeof q.q === 'string' ? q.q : age < 8 ? q.q.young : q.q.older
  if (t) live.add(t)
}

// Single-group reports, including each region on its own -- subgroup filters
// (nose vs head, neck vs throat) only fire when one region is tapped.
for (const g of groups) {
  const regions = REGIONS.filter((r) => r.group === g).map((r) => r.id)
  const gate = GROUP_GATE[g] ?? []
  const depths = gate.some((x) => x.type === 'depth') ? DEPTHS : [null]
  const mechs = gate.some((x) => x.type === 'mechanism') ? MECHS : [null]
  for (const rs of [regions, ...regions.map((r) => [r])])
    for (const d of DURATIONS) for (const age of AGES)
      for (const dep of depths) for (const me of mechs) for (const repeat of [false, true])
        for (const q of followUpsForGroups([g], { [g]: dep }, d, age, rs, { repeat, mechanisms: { [g]: me } }))
          add(q, age)
}

// Two-group reports. Not redundant: the cap is spent round-robin across groups,
// so a second area HALVES what the first contributes -- and questions that lose
// on their own can win here, because a shared fact claimed by one packet frees
// a slot in the other.
for (const a of groups) for (const b of groups) {
  if (a >= b) continue
  const rs = [
    ...REGIONS.filter((r) => r.group === a).map((r) => r.id).slice(0, 1),
    ...REGIONS.filter((r) => r.group === b).map((r) => r.id).slice(0, 1),
  ]
  for (const d of DURATIONS) for (const age of AGES)
    for (const q of followUpsForGroups([a, b], { [a]: 'inside', [b]: 'inside' }, d, age, rs, { mechanisms: {} }))
      add(q, age)
}

// Lines that interpolate at runtime cannot be pre-rendered.
const lines = [...live].filter((t) => !t.includes('${')).sort()
writeFileSync('scripts/live-lines.json', JSON.stringify(lines, null, 1))

console.log(`reachable question lines: ${lines.length}`)
console.log(`characters:               ${lines.reduce((n, s) => n + s.length, 0).toLocaleString()}`)
console.log('written to scripts/live-lines.json — pass --live to build-audio.mjs to use it')
