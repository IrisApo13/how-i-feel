// Builds src/data/bank.js from the reviewed candidate logs.
//
//   node scripts/build-bank.mjs
//
// Only candidates marked review.status === 'accepted' are included. Rejected
// candidates stay in the logs on purpose: they are the evidence that a human
// evaluated the set, and deleting them would leave the bank unsubstantiated.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { packetDirs, dirForPacket } from './packet-paths.mjs'

// Per-packet metadata lives in packets/<id>.meta.json, transcribed from that
// packet's own Decisions section. Previously all of this was hardcoded here and
// keyed by item number alone -- which meant tummy item 1 would have emitted
// head injury's "PECARN; CHALICE". A false citation is the one failure this
// whole pipeline exists to prevent, so citations now fail closed: an item with
// no recorded citation emits null and the build warns, rather than guessing.

const ALL = ['just-now', 'this-morning', 'yesterday', 'not-sure', 'few-days', 'long-time']

const metaFor = (packet) => {
  const f = `${dirForPacket(packet)}/meta.json`
  if (!existsSync(f)) {
    console.warn(`  ⚠ ${packet}: no ${f} -- skipped entirely`)
    return null
  }
  return JSON.parse(readFileSync(f, 'utf8'))
}

const out = []
// One directory per packet: packets/<id>/{packet.md,meta.json,candidates.json}
for (const dir of packetDirs()) {
  const candidatesPath = `${dir}/candidates.json`
  if (!existsSync(candidatesPath)) continue          // researched but not yet generated
  const d = JSON.parse(readFileSync(candidatesPath, 'utf8'))
  const packet = d.packet.id
  const meta = metaFor(packet)
  if (!meta) continue

  // The pipeline reads meta.json and never reads packet.md, so a packet whose
  // prose was lost still ships questions -- with citation strings but nothing a
  // human can check them against. That happened on 2026-09-08: chest/pain's
  // research run was killed by the session limit after it wrote a complete
  // sidecar (39 cite entries) and before it wrote a line of the packet. Warn
  // loudly rather than skipping, because the questions themselves are fine.
  if (!existsSync(`${dir}/packet.md`))
    console.warn(`  \u26a0 ${packet}: NO packet.md -- its questions ship with citations that have no readable source behind them`)

  if (meta.STATUS)
    console.warn(`  \u26a0 ${packet}: sidecar still marked "${meta.STATUS}"`)
  for (const c of d.candidates) {
    if (c.review?.status !== 'accepted') continue
    const allowed = meta.durations.exceptions?.[String(c.traces_to)] ?? meta.durations.default
    // `duration` may be a single band, a list of bands, or "any". A candidate
    // keeps whatever it declares, intersected with what the packet's scope
    // decision permits -- so a candidate can never widen its own scope past
    // the packet, and the packet can never be silently ignored.
    const declared = c.duration === 'any' || c.duration == null
      ? allowed
      : [].concat(c.duration)
    let durations = declared.filter((d) => allowed.includes(d))
    if (!durations.length) {
      // The band tag is wrong, not the question. A candidate written for a band
      // the packet excludes is still a reviewed, accepted question -- widen it
      // to what the packet permits rather than discarding human review work.
      console.warn(`  ⚠ ${packet} ${c.id}: band ${JSON.stringify(c.duration)} outside packet scope -- widened to the permitted set`)
      durations = allowed
    }
    const rank = meta.itemRank.indexOf(c.traces_to)
    const cite = meta.cite[String(c.traces_to)] ?? null
    const metaAge = meta.minAge[String(c.traces_to)] ?? null
    // A candidate may restrict itself to part of a group -- upper vs lower limb.
    // Declared on the candidate, because two candidates can trace to the SAME
    // item with different wordings for each half (Ottawa's weight-bearing
    // question versus its upper-limb equivalent).
    const subgroups = c.subgroups ?? null
    // What the answer establishes, shared across packets. Two packets that
    // reach the same fact must not both ask about it; see `keyOf` in vocab.js.
    const fact = c.fact ?? null
    if (c.minAge != null && c.minAge !== metaAge)
      console.warn(`  ⚠ ${packet} ${c.id}: candidate says minAge ${c.minAge}, packet meta says ${metaAge} -- meta wins`)
    if (!cite) console.warn(`  ⚠ ${packet} item ${c.traces_to}: no citation recorded -- shipping cite:null`)
    const groups = meta.groups ?? [meta.group]
    out.push({ ...c, fact, group: meta.group, groups, depth: meta.depth,
               mechanism: meta.mechanism ?? null, packetRank: meta.packetRank ?? 50,
               packet, durations,
               rank: rank === -1 ? 99 : rank,
               minAge: meta.minAge[String(c.traces_to)] ?? null, cite, subgroups })
  }
}
// Ties are broken by an explicit packet preference, never alphabetically:
// `preferred` in meta names the candidate to lead for that item.
const preferenceOf = (c) => {
  const pref = JSON.parse(readFileSync(`${dirForPacket(c.packet)}/meta.json`, 'utf8')).preferred ?? {}
  return pref[String(c.traces_to)] === c.id ? 0 : 1
}
out.sort((a, b) => a.rank - b.rank || preferenceOf(a) - preferenceOf(b) || a.id.localeCompare(b.id))

// Surface item collisions rather than resolving them silently: two accepted
// candidates on one item means only one will ever be asked.
const byItem = {}
// Keyed by subgroup as well as item: two candidates on one item that are
// restricted to DIFFERENT halves of a group are not in collision, because
// `bankQuestions` filters on subgroup before it dedupes on item. Reporting
// them as one made the limb item 2 split -- lower gets Ottawa's weight-bearing
// wording, upper gets its own -- look like three dead questions.
// Keyed by fact as well, matching the dedupe rule in `bankQuestions`: two
// candidates on one item that establish DIFFERENT facts are both asked, so
// they are not in collision and reporting them as one hid a real question.
for (const c of out) (byItem[`${c.packet}#${c.traces_to}#${(c.subgroups ?? []).join(',')}#${c.fact ?? ''}`] ??= []).push(c.id)
for (const [k, ids] of Object.entries(byItem)) {
  if (ids.length > 1) {
    const [pkt, item, sg] = k.split('#')   // fact is part of the key, not the message
    const pref = JSON.parse(readFileSync(`${dirForPacket(pkt)}/meta.json`, 'utf8')).preferred ?? {}
    const chosen = pref[item] ?? ids[0]
    console.warn(`  ⚠ ${pkt} item ${item}${sg ? ` (${sg})` : ''}: ${ids.length} accepted candidates (${ids.join(', ')}) -- only "${chosen}" will be asked`)
  }
}

const body = out.map((c) => `  {
    id: '${c.id}',
    q: { young: ${JSON.stringify(c.q.young)}, older: ${JSON.stringify(c.q.older)} },
    answers: '${c.answers}',${c.options ? `
    options: ${JSON.stringify(c.options)},` : ''}${c.fact ? `
    fact: '${c.fact}',` : ''}
    applies: { groups: ${JSON.stringify(c.groups)}, durations: ${JSON.stringify(c.durations)}${c.depth ? `, depth: '${c.depth}'` : ''}${c.mechanism ? `, mechanism: '${c.mechanism}'` : ''}${c.minAge ? `, minAge: ${c.minAge}` : ''}${c.subgroups ? `, subgroups: ${JSON.stringify(c.subgroups)}` : ''} },
    rank: ${c.rank},
    homeGroup: '${c.group}',
    packetRank: ${c.packetRank},
    source: { packet: '${c.packet}', item: ${c.traces_to}, cite: ${JSON.stringify(c.cite)} },
  },`).join('\n')

writeFileSync('src/data/bank.js', `// GENERATED by scripts/build-bank.mjs -- do not hand-edit.
//
// Every entry traces to a numbered assessment item in its packet, and every
// packet item traces to a published source. \`cite\` is provenance for the
// README and a nurse-facing reference; it must NOT be rendered beside a child's
// answers, because naming a decision rule next to a report reads as a suggested
// diagnosis. See packets/LIMITATIONS.md.

export const BANK = [
${body}
]

// \`applies.groups\` is a list because a cross-cutting packet (skin) serves
// several body areas at once. Single-area packets carry a one-element list.
export const bankForGroup = (group) => BANK.filter((q) => q.applies.groups.includes(group))

// One question per assessment item, best-ranked first: a child should never be
// asked the same thing twice in different words, and the cap downstream means
// low-ranked items would otherwise crowd out the ones that matter.
export const bankQuestions = (group, duration, age = null, depth = null, subgroups = null, mechanism = null) => {
  const seen = new Set()
  const ordered = bankForGroup(group)
    .filter((q) => !duration || q.applies.durations.includes(duration))
    .filter((q) => !q.applies.minAge || age === null || age >= q.applies.minAge)
    // A packet scoped to one depth must not fire on the other: a child who
    // taps their tummy and says "on my skin" should not get appendicitis-era
    // history questions.
    .filter((q) => !q.applies.depth || depth == null || depth === 'unknown' || depth === q.applies.depth)
    // The mechanism gate, which is a SEPARATE axis from depth. The limb group
    // needs both: a grazed knee (surface), a broken wrist (inside + injury) and
    // a limp with no injury (inside + no injury) are three presentations, and
    // \`limb-injury\` and \`limb-pain\` are researched from literatures that
    // share almost no criteria. Without this the app has no way to route
    // between them and the child gets a blend of the two.
    //
    // An unanswered or "not sure" mechanism deliberately fires BOTH packets
    // rather than guessing. A packet with no \`meta.mechanism\` is unaffected.
    .filter((q) => !q.applies.mechanism || mechanism == null || mechanism === 'unknown' ||
                   mechanism === q.applies.mechanism)
    // "Could you stand on it?" is nonsense for a thumb. A question restricted to
    // part of a group fires only if the child tapped somewhere in that part.
    .filter((q) => !q.applies.subgroups || !subgroups?.length ||
                   q.applies.subgroups.some((sg) => subgroups.includes(sg)))
    // A packet whose \`homeGroup\` is the group the child actually tapped comes
    // first, whatever its rank. Without this, a cross-cutting packet competes
    // head-to-head with the region packet and usually wins: general-unwell's
    // items rank 0-12 in every one of the nine groups, so a six-year-old who
    // had just banged their head was asked whether peeing stings before the
    // head packet's own red flags. Ties at equal rank were also broken by
    // \`id.localeCompare\`, which meant the letter a packet's ids start with
    // decided whether its questions were ever asked -- 'c-' and 'e-' beat 'g-',
    // 'h-' and 'l-' and 's-' lost to it. That is alphabetical accident, not
    // clinical judgement.
    //
    // Single-group packets are never demoted by this, because their homeGroup
    // IS the group. A cross-cutting packet still reaches every group -- it just
    // fills the slots the region packet did not use, and leads only where it is
    // at home ('general' when the child says they hurt all over, 'skin' on the
    // surface branch).
    .sort((a, b) => (a.homeGroup !== group) - (b.homeGroup !== group) || a.rank - b.rank)
    // Keyed by PACKET and item, not item alone. Item numbers are per-packet, so
    // \`general-unwell\` item 3 and \`head-injury\` item 3 are unrelated
    // assessment items that were suppressing each other purely because they
    // share a number -- 63 such collisions existed across the six shared
    // groups. It was latent (every group already filled its cap from its home
    // packet) but \`limb-pain\` has only four items and one of them is 11,
    // which \`limb-injury\` also uses, so a quarter of it would have been dead
    // on arrival.
    //
    // Deduping ACROSS packets is \`fact\`'s job, not this filter's: two packets
    // that establish the same thing carry the same fact and are collapsed in
    // \`followUpsForGroups\`.
    //
    // The key includes \`fact\` because an item number is not the unit of "the
    // same question" -- \`fact\` is, and one assessment item can carry two
    // candidates that genuinely ask different things. Three exist: limb-injury
    // item 12 splits rest pain from night pain, limb-pain item 8 splits morning
    // STIFFNESS from morning PAIN (a child can be stiff without pain and in
    // pain without stiffness, and that distinction is what makes the night-pain
    // answer interpretable), and tummy item 18 splits breathing from cough --
    // the case PLAN records as the reason \`fact\` is assigned per candidate
    // rather than per item. Keying on the item alone silently collapsed all
    // three, so the second question was accepted by a human and then never
    // asked.
    //
    // Candidates that share a fact still collapse, which is the common case by
    // far: 44 items carry two wordings of one question, and only the
    // better-ranked one should be asked. A candidate with no fact falls back to
    // the empty string, so two untagged candidates on one item still collapse
    // -- the safe default, since a missing tag should never split a question.
    .filter((q) => !seen.has(\`\${q.source.packet}#\${q.source.item}#\${q.fact ?? ''}\`) &&
                   seen.add(\`\${q.source.packet}#\${q.source.item}#\${q.fact ?? ''}\`))

  // Two packets can serve one group. Limb splits them with the mechanism gate
  // so only one is ever live, but tummy's two are deliberately NOT exclusive:
  // gastroenteritis is vomiting AND tummy pain, and appendicitis commonly
  // causes vomiting, so a gate on "have you thrown up?" would route the
  // appendicitis child away from the appendicitis packet. They share the queue.
  //
  // Sharing it by \`rank\` alone does not work: \`rank\` is an index into ONE
  // packet's \`itemRank\`, so both packets' best item is rank 0 and the tie fell
  // through to \`id.localeCompare\` -- the alphabetical accident \`homeGroup\` was
  // introduced to kill, recurring inside a group.
  //
  // So each packet gets its own queue and they are spent round-robin, exactly
  // as \`followUpsForGroups\` spends the cap across groups. \`meta.packetRank\`
  // (lower leads, default 50) decides who picks FIRST, not who picks
  // everything: the child gets a mix, and the leading packet takes the odd slot
  // when the cap is odd. Home-group packets are exhausted before cross-cutting
  // ones, so this never lets \`general-unwell\` in ahead of a region packet.
  //
  // A group with one packet round-robins a single queue, which is the identity
  // operation -- the common case is untouched.
  const roundRobin = (queues) => {
    const picked = []
    for (let i = 0; queues.some((q) => i < q.length); i += 1)
      for (const q of queues) if (i < q.length) picked.push(q[i])
    return picked
  }
  const byPacket = new Map()
  for (const q of ordered) {
    if (!byPacket.has(q.source.packet)) byPacket.set(q.source.packet, [])
    byPacket.get(q.source.packet).push(q)
  }
  const queues = [...byPacket.values()].sort((a, b) =>
    a[0].packetRank - b[0].packetRank || a[0].source.packet.localeCompare(b[0].source.packet))
  return [
    ...roundRobin(queues.filter((q) => q[0].homeGroup === group)),
    ...roundRobin(queues.filter((q) => q[0].homeGroup !== group)),
  ]
}
`)
console.log(`bank: ${out.length} questions from ${new Set(out.map(o => o.packet)).size} packet(s)`)

// Coverage check. Review decisions are made one candidate at a time, so it is
// easy to reject the only question covering some band without noticing. This
// catches that: a band with no questions means the child is asked nothing.
let holes = 0
for (const group of new Set(out.map((o) => o.group))) {
  for (const d of ALL) {
    const n = out.filter((o) => o.group === group && o.durations.includes(d)).length
    if (n === 0) { console.warn(`  ⚠ ${group} / ${d}: NO QUESTIONS`); holes++ }
  }
}
if (holes) console.warn(`  ${holes} coverage hole(s) -- a child in that state gets no follow-ups`)
else console.log('  coverage: every duration band has at least one question')
