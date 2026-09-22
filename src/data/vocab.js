// Word lists the child picks from. Everything here is tiered: the 4-7 list is
// short and concrete, the 8-12 list adds the words a nurse actually wants.
//
// Most lists are ALSO tagged by depth ('surface' / 'inside'). One answer to
// "is it on your skin or inside?" then prunes the sensation list, the follow-up
// questions and the helps list -- which is what pays for asking it at all.
//
// Emoji stand in for icons throughout. Real icon art replaces the `icon` field
// without touching any other code.

import { GROUP_GATE, groupsForRegions, subgroupsForRegions } from './bodyMap'
import { bankQuestions } from './bank'

// Asked once per ambiguous body region group, straight after the body map.
// "Deep" is avoided on purpose: children hear it as *serious* rather than
// *interior*.
// Gate options, keyed by gate type. The stored answer is a plain string that
// the bank filters on, so adding a gate type needs no change to the bank.
// NO ICONS, DELIBERATELY -- 2026-09-14.
//
// Every option in this file carried an emoji, and they were not decoration:
// they are how a four-year-old who cannot read picks a sensation, a mood, or
// what would help. They are gone anyway, because a screen of emoji next to a
// hand-drawn bear reads as assembled rather than designed, and this app is
// going to clinicians.
//
// That leaves a real gap for the youngest children, and it is the reason to put
// hand-drawn marks back here rather than a reason to shrug. When those exist,
// add `icon: '<id>'` back to each entry and render it from a shared component;
// the ids below are already stable and are what the report is keyed on.
//
// Until then the words carry it, read aloud by the guide for any child who
// chose the talking option.

export const GATES = {
  depth: {
    question: { young: 'Is it on your skin, or inside you?', older: 'Is it on the surface, or deeper inside?' },
    options: [
      { id: 'surface', label: 'On the surface', kidLabel: 'On my skin' },
      { id: 'inside', label: 'Deeper inside', kidLabel: 'Inside me' },
      { id: 'unknown', label: "I'm not sure", kidLabel: "I don't know" },
    ],
  },
  mechanism: {
    question: { young: 'Did you bump it or hurt it?', older: 'Did you bump it, or did it just start hurting?' },
    options: [
      { id: 'injury', label: 'I bumped it', kidLabel: 'I bumped it' },
      { id: 'no-injury', label: 'It just started hurting', kidLabel: 'It just started hurting' },
      { id: 'unknown', label: "I'm not sure", kidLabel: "I don't know" },
    ],
  },
}

export const DEPTHS = [
  { id: 'surface', label: 'On the surface', kidLabel: 'On my skin' },
  { id: 'inside', label: 'Deeper inside', kidLabel: 'Inside me' },
  { id: 'unknown', label: "I'm not sure", kidLabel: "I don't know" },
]

// `groups` scopes a sensation to the body areas where it means anything. A
// child who taps an arm was being offered "Yucky tummy", "Spinny" and
// "Scrunchy", because the list was filtered by age and depth but never by where
// it hurts.
//
// Deliberately conservative: only the ones that are plainly nonsense elsewhere
// are scoped, and everything else stays universal. Over-restricting is the
// worse failure -- if the word for what a child actually feels is not on the
// screen, they cannot report it at all, and they will pick something wrong
// instead of nothing.
export const SENSATIONS = [
  { id: 'sharp', label: 'Sharp', kidLabel: 'Like a poke', tiers: ['young', 'older'], depths: ['surface', 'inside'] },
  { id: 'burning', label: 'Burning', kidLabel: 'Hot and stingy', tiers: ['young', 'older'], depths: ['surface', 'inside'] },
  { id: 'aching', label: 'Aching', kidLabel: 'Sore', tiers: ['young', 'older'], depths: ['surface', 'inside'] },
  { id: 'throbbing', label: 'Throbbing', kidLabel: 'Thump thump', tiers: ['young', 'older'], depths: ['surface', 'inside'] },
  // Removed 2026-09-21: 'punch' / "Like a bonk". A punch is a mechanism, not a
  // sensation -- it says how a hurt arrived, not what it feels like now, which
  // is what this screen asks. 'sharp', 'aching' and 'throbbing' already cover
  // what a blow leaves behind, and the gate question asks about the bump.
  { id: 'squeezing', label: 'Squeezing', kidLabel: 'Tight squeeze', tiers: ['young', 'older'], depths: ['inside'] },
  { id: 'itchy', label: 'Itchy', kidLabel: 'Itchy', tiers: ['young', 'older'], depths: ['surface'] },
  // Spinny belongs to the head and the ears -- vertigo is an ear complaint --
  // and means nothing about a knee.
  { id: 'dizzy', label: 'Dizzy', kidLabel: 'Spinny', tiers: ['young', 'older'], depths: ['inside'], groups: ['head', 'ears', 'general'] },
  // "Yucky tummy" restated the body part a child had already tapped, so it read
  // as a label rather than a feeling. "Might throw up" names the sensation
  // instead, and uses the project's ruled verb -- "throw up", never "vomit" or
  // "be sick", the latter meaning two different things either side of the
  // Atlantic. It stays distinct from the follow-up question "Did you throw up?":
  // that one asks about an event, this asks how it feels right now.
  { id: 'queasy', label: 'Queasy', kidLabel: 'Might throw up', tiers: ['young', 'older'], depths: ['inside'], groups: ['tummy', 'general'] },
  { id: 'tingly', label: 'Tingly or numb', kidLabel: 'Fuzzy feeling', tiers: ['older'], depths: ['surface', 'inside'] },
  // Stiffness is a joint and muscle word: limbs, back, neck.
  { id: 'stiff', label: 'Stiff', kidLabel: 'Hard to move', tiers: ['older'], depths: ['inside'], groups: ['limb', 'back', 'throat', 'general'] },
  // Gut and back, not limbs. A muscle cramp in a leg is real, but "Scrunchy"
  // is not how a child describes it, and offering a word that does not fit
  // makes them pick it for want of anything better.
  { id: 'cramping', label: 'Cramping', kidLabel: 'Scrunchy', tiers: ['older'], depths: ['inside'], groups: ['tummy', 'back', 'general'] },
]

export const DURATIONS = [
  { id: 'just-now', label: 'Just now' },
  { id: 'this-morning', label: 'This morning' },
  { id: 'yesterday', label: 'Since yesterday' },
  { id: 'few-days', label: 'A few days' },
  { id: 'long-time', label: 'A long time' },
  { id: 'not-sure', label: "I'm not sure" },
]

// Deliberately separate from pain. A lot of nurse call-outs are worry, hunger,
// or needing a break showing up as a stomachache -- asking separately catches
// that instead of burying it inside a pain score. Never depth-filtered: how a
// child feels is not a property of where it hurts.
export const MOODS = [
  { id: 'ok', label: 'Okay' },
  { id: 'happy', label: 'Happy' },
  { id: 'tired', label: 'Tired' },
  { id: 'worried', label: 'Worried' },
  { id: 'sad', label: 'Sad' },
  { id: 'scared', label: 'Scared' },
  { id: 'angry', label: 'Angry' },
  { id: 'lonely', label: 'Lonely' },
]

export const HELPS = [
  { id: 'water', label: 'A drink of water', depths: ['inside'] },
  { id: 'rest', label: 'Lie down and rest', depths: ['surface', 'inside'] },
  { id: 'ice', label: 'An ice pack', depths: ['surface', 'inside'] },
  { id: 'bandage', label: 'A bandage', depths: ['surface'] },
  { id: 'bathroom', label: 'Go to the bathroom', depths: ['inside'] },
  { id: 'food', label: 'Something to eat', depths: ['inside'] },
  { id: 'call-home', label: 'Call a guardian', depths: ['surface', 'inside'] },
  { id: 'company', label: 'Someone to stay with me', depths: ['surface', 'inside'] },
  { id: 'quiet', label: 'A quiet dark room', depths: ['surface', 'inside'] },
  // Removed 2026-09-13: "Go back to class" was left over from when this was a
  // school app -- there is no class in a hospital. "My own medicine" invited a
  // child to ask for a specific drug, which is a request no app should be
  // putting in a nurse's hands on a child's behalf, and which the child may not
  // be able to name correctly anyway.
  //
  // Removed 2026-09-21: "Someone to clean it". "Call my grown-up" became "Call
  // a guardian" the same day -- on a ward the adult a child wants is not
  // reliably a parent, and the report is read by staff who need to know which
  // adult is meant.
  { id: 'dont-know', label: "I don't know", depths: ['surface', 'inside'] },
]

// Adaptive follow-ups, chosen by the `group` of the regions the child tapped.
// Simple rules, no model needed -- and they demo well because the app visibly
// reacts to what the child said.
//
// A group's value is either a flat array (the questions do not depend on depth)
// or an object keyed by depth, with an optional `any` list asked either way.
// `resolvesDepth` is RETAINED AS DOCUMENTATION ONLY and no longer suppresses
// anything. It used to stop a group being asked its depth question when a
// follow-up covered the same ground -- but once the bank filled that group's
// slots the follow-up stopped firing, and the suppression outlived it. A child
// with a headache was then asked what they fell off. Gates are never
// suppressed now; see GROUP_GATE in bodyMap.js.
export const FOLLOW_UPS = {
  head: [
    // `bumped-head` lived here until the mechanism gate took over asking it.
    // Keeping it meant a child who answered "it just started hurting" was
    // immediately asked whether they bumped it.
    { id: 'light-hurts', q: 'Do bright lights make it worse?' },
  ],
  eyes: [
    { id: 'blurry', q: 'Is anything blurry or hard to see?' },
    { id: 'eye-itch', q: 'Are your eyes itchy or watery?' },
  ],
  ears: [{ id: 'hearing', q: 'Is it hard to hear on that side?', fact: 'hard-to-hear' }],
  mouth: [
    { id: 'hurt-eat', q: 'Does it hurt when you eat?' },
    { id: 'loose-tooth', q: 'Do you have a loose tooth?' },
  ],
  throat: [
    { id: 'hurt-swallow', q: 'Does it hurt to swallow?', fact: 'hurts-to-swallow' },
    { id: 'cough', q: 'Have you been coughing?', fact: 'cough' },
  ],
  chest: {
    surface: [
      { id: 'chest-rash', q: 'Are there spots or a rash?', fact: 'rash' },
      { id: 'chest-press', q: 'Does it hurt when you press on it?' },
    ],
    inside: [
      { id: 'breathing', q: 'Is it hard to breathe?', fact: 'hard-to-breathe' },
      { id: 'chest-worse-move', q: 'Does it get worse when you run around?', fact: 'worse-on-exertion' },
    ],
  },
  tummy: {
    surface: [
      { id: 'tummy-rash', q: 'Are there spots or a rash?', fact: 'rash' },
      { id: 'tummy-itch', q: 'Does it itch?', fact: 'itch' },
    ],
    inside: [
      { id: 'threw-up', q: 'Did you throw up?', fact: 'vomiting' },
      { id: 'bathroom-today', q: 'Have you been to the bathroom today?' },
      { id: 'ate-today', q: 'Did you eat breakfast or lunch today?' },
    ],
  },
  limb: {
    surface: [
      { id: 'limb-see', q: 'Can you see a cut, bruise or rash?' },
      { id: 'limb-itch', q: 'Does it itch?', fact: 'itch' },
    ],
    inside: [
      { id: 'can-move', q: 'Can you still move it okay?', fact: 'limb-use' },
      { id: 'limb-swollen', q: 'Does it look puffy or swollen?', fact: 'limb-swelling' },
    ],
    // Mechanism, not depth -- worth asking either way, which is why it does
    // NOT carry resolvesDepth: a child can fall and hurt inside.
    any: [{ id: 'fell', q: 'Did you fall or bump it?', fact: 'limb-mechanism' }],
  },
  back: {
    surface: [
      { id: 'back-rash', q: 'Are there spots or a rash?', fact: 'rash' },
      { id: 'back-itch', q: 'Does it itch?', fact: 'itch' },
    ],
    inside: [
      { id: 'back-worse-sit', q: 'Is it worse when you sit down?' },
      { id: 'back-worse-move', q: 'Is it worse when you move around?' },
    ],
    any: [{ id: 'back-fell', q: 'Did you fall or lift something heavy?' }],
  },
}

const questionsFor = (group, depth) => {
  const entry = FOLLOW_UPS[group]
  if (!entry) return []
  if (Array.isArray(entry)) return entry
  const any = entry.any ?? []
  // No depth answer (or the child said "I don't know"): fall back to the union
  // rather than guessing. Losing the pruning is fine; inventing an answer the
  // nurse would read as the child's own is not.
  if (!depth || depth === 'unknown') {
    return [...any, ...(entry.inside ?? []), ...(entry.surface ?? [])]
  }
  return [...any, ...(entry[depth] ?? [])]
}

// Which groups the child must be asked about. Ambiguous, and not already
// settled by a better question.
// Every group with a declared gate is asked, full stop. The old rule suppressed
// head's gate because the hand-written "Did you bump your head?" follow-up
// covered the same ground -- but once the bank filled head's slots that
// follow-up stopped firing, and the suppression outlived the thing that
// justified it. A gate is now never suppressed by a follow-up.
// Every gate the child must answer, in the order it is asked, flattened across
// the groups they tapped. One entry per (group, gate) pair -- a group with two
// gates contributes two entries.
//
// `answers` is the report's gate answers so far, keyed `group` -> `key` ->
// value. A gate whose `when` is not satisfied is omitted entirely, so it never
// appears on screen and never blocks the Next button. Because this is
// recomputed on every answer, answering the depth gate makes the mechanism gate
// appear beneath it; changing that answer back makes it disappear again.
export const gatesForRegions = (ids, answers = {}) =>
  groupsForRegions(ids).flatMap((group) =>
    (GROUP_GATE[group] ?? [])
      .filter((gate) =>
        !gate.when ||
        Object.entries(gate.when).every(([k, allowed]) => allowed.includes(answers[group]?.[k])))
      .map((gate) => ({ group, ...gate })))

export const gateGroupsForRegions = (ids) =>
  groupsForRegions(ids).filter((g) => (GROUP_GATE[g] ?? []).length)

export const gateTypeFor = (group) => GROUP_GATE[group]?.[0]?.type ?? null

// kept for callers still using the old name
export const depthGroupsForRegions = gateGroupsForRegions

// Sourced questions come from the generated bank (see packets/). Groups the
// bank does not cover yet still fall back to the hand-written FOLLOW_UPS
// below, so adding a packet upgrades one group without disturbing the rest.
// Asked only on the "same as before" path, where the child confirmed this is
// the complaint they already reported and the app copied the previous regions
// forward without showing the body map again. A repeat report otherwise
// records a fresh intensity against an unchanged map, which says nothing about
// which way the complaint is going -- the one thing a second report is for.
// "Has it spread?" matters precisely because the body map was skipped.
//
// These replace `happened-before` rather than joining it: a child who took
// this path has already told us it happened before, and `sameAsBefore` on the
// report carries that fact to the nurse without spending a question on it.
//
// Hand-written, so they carry no `source` -- the nurse surface must be able to
// tell them apart from the packet-sourced questions. See packets/LIMITATIONS.md.
const RECURRENCE = [
  {
    id: 'better-than-before',
    // Anchored on the previous report ("since you told us"), not on time
    // ("than before"). Several packets already ship a within-episode
    // trajectory question -- tummy item 7, head item 2 -- and to a young child
    // "does it hurt more now than before?" and "is it better than last time?"
    // are one question asked twice in opposite polarity.
    q: { young: 'Is it better since you told us?', older: 'Is it better than when you last told us?' },
    answers: 'yesno',
    group: 'general',
  },
  {
    id: 'spread-since-before',
    q: { young: 'Does it hurt in more places now?', older: 'Is it hurting in more places than last time?' },
    answers: 'yesno',
    group: 'general',
  },
]

const HAPPENED_BEFORE = {
  id: 'happened-before',
  q: 'Has this happened to you before?',
  answers: 'yesno',
  group: 'general',
}

// What makes two questions "the same question". Deduping on `id` was wrong the
// moment more than one packet could serve a child at once: "Are there spots or
// a rash?" ships three times under three ids (`tummy-rash`, `chest-rash`,
// `back-rash`), and a child who tapped their tummy and their chest was asked
// it twice, verbatim. The generated packets make this worse rather than better
// -- `hard-to-breathe` alone is reachable from tummy, throat and chest.
//
// `fact` names the thing the answer establishes, and is deliberately shared
// ACROSS packets and across the hand-written/sourced boundary. So it also does
// the job decisions 10 and 11 asked for by hand: a sourced question and the
// hand-written question it replaces carry the same fact, the sourced one comes
// first in the queue, and the fallback is suppressed instead of competing with
// it for a slot.
//
// Questions with no `fact` fall back to `id`, which means no fact is the same
// as a fact unique to that question -- the safe default, because a missing tag
// can only ever cause a question to be asked, never to be silently dropped.
//
// Two consequences worth knowing. The wording the child sees for a shared fact
// is whichever group's queue reaches it first, so tap order still chooses
// between two accepted phrasings of one fact. And the report cites only the
// packet that won, so a fact reachable from three packets is attributed to one
// of them -- the nurse view must not read that as the only place it was asked.
const keyOf = (q) => q.fact ?? q.id

export const followUpsForGroups = (groups, depths = {}, duration = null, age = null, regions = [], { repeat = false, mechanisms = {} } = {}) => {
  const subgroups = subgroupsForRegions(regions)
  const seen = new Set()
  // One queue per group the child tapped, each already in priority order:
  // packet-sourced questions by `itemRank`, then that group's hand-written
  // fallbacks. `seen` spans every queue, so a question that serves two groups
  // is only ever asked once.
  const queues = groups.map((g) => {
    const qs = []
    for (const b of bankQuestions(g, duration, age, depths[g] ?? null, subgroups, mechanisms[g] ?? null)) {
      if (seen.has(keyOf(b))) continue
      seen.add(keyOf(b))
      // `options` only exists on `choice` questions, and without it FollowUpScreen
      // renders an empty button row -- the question arrives with no way to answer
      // it. This line copies field by field rather than spreading, so every new
      // answer-type payload has to be added here deliberately.
      qs.push({ id: b.id, q: b.q, answers: b.answers, options: b.options, group: g, source: b.source, fact: b.fact })
    }
    for (const f of questionsFor(g, depths[g])) {
      if (seen.has(keyOf(f))) continue
      seen.add(keyOf(f))
      qs.push({ ...f, answers: 'yesno', group: g })
    }
    return qs
  })
  // Always worth asking, and it keeps the screen from being empty if the child
  // picked a region with no specific rules -- so it gets a reserved slot rather
  // than being the first thing the cap throws away.
  //
  // The cap is age-scaled. It used to be three sourced questions for everyone,
  // which meant only the top three entries of each packet's `itemRank` were
  // ever asked and left 21 of the bank's 27 reviewed questions unreachable by
  // any child.
  //
  // The young tier's cap is a deliberate trade, made 2026-09-06. The original
  // limit of four questions on screen came from a judgement about how long a
  // 4-7 year old stays attentive; raising it to five sourced questions spends
  // that attention to buy the red-flag items, because under the old cap no
  // young child was ever asked about amnesia or loss of consciousness -- they
  // rank below the cutoff in `head-injury`. If young children are observed
  // dropping off before the end, this is the number to lower, not the bank.
  //
  // An unknown age takes the young cap: guessing high costs a child attention
  // they may not have.
  const cap = Number.isFinite(age) && age >= 8 ? 6 : 5

  // The cap is spent ACROSS the groups, not on whichever one happens to be
  // first. It used to be applied to a single concatenated list, so the first
  // group filled every slot and the rest were sliced off entirely -- and the
  // order came from the child's tap order, so a child who tapped their tummy
  // before their ear was asked six tummy questions and nothing about the ear.
  // Tapping in the other order silently produced the opposite report.
  //
  // Taking one from each group in turn guarantees every tapped group is
  // represented before any group gets a second question. It deliberately does
  // NOT sort the groups against each other by rank: `rank` is an index into
  // one packet's `itemRank`, so head rank 0 and tummy rank 0 both mean "this
  // packet's top item" and comparing them across packets would be meaningless.
  //
  // With a single group -- the common case -- this is exactly the old
  // behaviour: take the first `cap` of that group's queue, in rank order.
  const out = []
  for (let i = 0; out.length < cap; i += 1) {
    const before = out.length
    for (const queue of queues) {
      if (i >= queue.length) continue
      out.push(queue[i])
      if (out.length === cap) break
    }
    if (out.length === before) break // every queue exhausted
  }

  return [
    ...out,
    ...(repeat ? RECURRENCE : [HAPPENED_BEFORE]),
  ]
}

// The depths the child actually reported, across every group they were asked
// about. Used to prune the vocabulary lists; an empty or unknown answer means
// no pruning at all.
const activeDepths = (depths = {}) => {
  const values = Object.values(depths).filter((d) => d && d !== 'unknown')
  return values.length ? [...new Set(values)] : ['surface', 'inside']
}

const matchesDepth = (item, depths) =>
  !item.depths || activeDepths(depths).some((d) => item.depths.includes(d))

// `groups` is the body areas the child tapped. A sensation with no `groups` of
// its own is universal and always offered; one that declares them is offered
// only when at least one tapped area matches. An empty or missing list of
// groups means no filtering at all -- the safe direction, since showing a word
// that does not apply is a smaller failure than hiding the one that does.
export const sensationsForTier = (tier, depths, groups = []) =>
  SENSATIONS.filter((s) =>
    s.tiers.includes(tier) &&
    matchesDepth(s, depths) &&
    (!s.groups || !groups.length || s.groups.some((g) => groups.includes(g))))

export const helpsForDepths = (depths) => HELPS.filter((h) => matchesDepth(h, depths))
