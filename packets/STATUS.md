# Literature pipeline — status and how to continue

> **Sharing this outside the project?** Read `packets/LIMITATIONS.md` first.
> Nothing here has been clinically reviewed. `packets/EVIDENCE.md` is the
> bibliography and the document to show someone who asks what the app's
> questions are based on.

Last updated 2026-09-06 (second pass: review cleanup, see "What changed"). Written so a fresh session can continue without the
conversation that produced it. Everything needed is in this repo.

## Tomorrow

**`packets/PLAN.md` is the working plan for the remaining 14 packets** — the
ordered waves, the paths and ids each will take, how to run each stage, and the
review lessons from 2026-09-06. Read it before starting a packet.

## Layout

```
packets/
├── EVIDENCE.md         generated bibliography  (node scripts/evidence-report.mjs)
├── LIMITATIONS.md      what this is and is not — read before sharing
├── STATUS.md           this file
├── TEMPLATE.md         the packet format
└── <body-area>/<complaint>/
      packet.md         the research
      meta.json         machine-readable decisions; build-bank reads ONLY this
      candidates.json   generated questions + the review log
```

Two levels because one body area holds several complaints — `head/injury` and
`head/headache`; `tummy/acute-pain` and eventually `tummy/chronic-pain`.
All path resolution lives in `scripts/packet-paths.mjs`.

## The pipeline, five stages per packet

| # | Stage | Command / who | Cost |
|---|-------|---------------|------|
| 1 | Packet — research literature into numbered assessment items | agent, `scripts/packet-brief.md` | ~60-180k tokens |
| 2 | Candidates — draft questions from the packet ALONE | agent, cold context | ~50k tokens |
| 3 | Screen | `node scripts/screen.mjs packets/<area>/<complaint>/candidates.json` | free |
| 4 | Review | `node scripts/review.mjs packets/<area>/<complaint>/candidates.json` | **human**, ~15 min |
| 5 | Bank | `node scripts/build-bank.mjs` | free |

Rejected candidates STAY in the logs. They are the evidence a human evaluated
the set; a bank of survivors with no rejection log cannot substantiate review.

## Tools

| | |
|---|---|
| `scripts/packet-brief.md` | the agent's instructions, 13 sections. Every rule exists because skipping it caused a documented failure. |
| `scripts/fetch-source.mjs` | fetch + extract. pypdf for PDFs, PMC-first, detects bot walls, never caches a failure, atomic writes so concurrent agents are safe. |
| `scripts/find-in-source.mjs` | `--scan` for likely criteria, or named terms for verbatim windows. **Use this instead of reading a source whole** — brief §2b. |
| `scripts/packet-digest.mjs` | `<id>` to review a packet; `--clinician` for the one page to hand a nurse. |
| `scripts/evidence-report.mjs` | regenerates `EVIDENCE.md`. |

## Where things stand

The full plan is **20 packets**. Six are complete; the anchors below are the
ones the research actually used, and they match the plan row for row.

| # | Packet | Serves | Anchor | Evidence | Status |
|---|---|---|---|---|---|
| | **Cross-cutting** | | | | |
| 1 | Feeling unwell all over / fever | the missing "all over" case | NICE traffic-light (fever <5s) | Strong | ⬜ |
| 2 | Rash or spots | `depth: surface` on any group | NICE — incl. non-blanching rash | Strong | ⬜ |
| 3 | Cut, scrape or bruise | `depth: surface` on any group | Wound care guidance | General | ⬜ |
| | **Head & face** | | | | |
| 4 | Head injury | `head` | PECARN | Strong | ✅ **13 questions** |
| 5 | Headache, no injury | `head` | Pediatric migraine criteria | Moderate | ⬜ |
| 6 | Eye complaint | `eyes` | Red-eye / eye-injury guidance | Moderate | ⬜ |
| 7 | Earache | `ears` | NICE otitis media | Strong | ✅ **19 questions** |
| 8 | Mouth or tooth pain | `mouth` | Dental pain guidance | General | ⬜ |
| 9 | Nose complaint / nosebleed | `head` (nose region) | General pediatric | General | ⬜ |
| | **Neck & throat** | | | | |
| 10 | Sore throat | `throat` | McIsaac / Centor | Strong | ✅ **17 questions** |
| 11 | Neck pain or stiffness | `throat`, `back` | NICE (neck stiffness) | Moderate | ⬜ |
| | **Chest** | | | | |
| 12 | Breathing difficulty or cough | `chest inside` | NICE asthma / bronchiolitis / croup | Strong | ✅ **17 questions** |
| 13 | Chest pain | `chest inside` | Pediatric chest pain reviews | Moderate | ⬜ |
| | **Tummy** | | | | |
| 14 | Acute tummy pain | `tummy inside`, short duration | PAS / Alvarado | Strong | ✅ **14 questions** |
| 15 | Ongoing tummy pain | `tummy inside`, long duration | Rome IV (functional GI) | Moderate | ⬜ |
| 16 | Vomiting or diarrhoea | `tummy inside` | NICE gastroenteritis | Strong | ⬜ |
| 17 | Constipation / toileting | `tummy`, hips, bottom | NICE CG99 | Strong | ⬜ |
| | **Limbs** | | | | |
| 18 | Limb injury | `limb` + hand/foot detail | Ottawa ankle (validated 5+) | Strong | ✅ **18 questions** |
| 19 | Limb pain / limping, no injury | `limb` | Limping-child pathways | Moderate | 🟡 partly researched |
| | **Back** | | | | |
| 20 | Back pain | `back` | Pediatric back pain red flags | Moderate | ⬜ |

**6 of 20 complete — 98 questions.** Rows 2 and 3 are the skin packets; there is no row 21 or 22. Row 19 is not a cold start: the
`limb/injury` research covered the atraumatic branch too (RCH limping child,
transient synovitis, septic arthritis), and items 11, 12 and 13 of that packet
come from it. Rows 2 and 3 are the `depth: surface` packets several open items
are waiting on — throat item 14 (rash), the chest `surface` half, limb items 7
and 18 all have nowhere to live until they exist. Row 1 would own the
`feels-feverish` fact that four packets currently ask separately.

**All six researched packets are reviewed and shipping: 98 questions.** 132
candidates were generated across the six, 98 accepted and 34 rejected with a
recorded reason. Every shipped question traces to a numbered assessment item,
every item traces to a published source, and `LIMITATIONS.md` states what has
not been checked.

The next work is not more packets. It is the **nurse view** — the report
contract in README.md has no receiving end, so the child's half of the story
runs and the adult's half does not — and **testing with actual children in the
4–12 range**, which nothing in this repository has yet done.

## Gates — how a packet gets selected

Each body area declares a discriminating question in `GROUP_GATE`
(`src/data/bodyMap.js`), asked between the body map and the follow-ups:

| Groups | Gate | Question |
|---|---|---|
| tummy, limb, chest, back | `depth` | "Is it on your skin, or inside you?" |
| head | `mechanism` | "Did you bump it, or did it just start hurting?" |
| throat, ears, eyes, mouth | none | internal — no question asked |

A packet's `meta.depth` names the gate branch it serves — `inside`, `surface`,
`injury`, `no-injury`, or `null` for ungated groups. A cross-cutting packet
(skin) sets `meta.groups` to a list and serves several body areas at once.

## How many questions a child actually gets

`followUpsForGroups` (`src/data/vocab.js`) caps the follow-up screen, and the
cap — not the size of the bank — decides what ships:

| Tier | Sourced questions | Plus reserved slot | On screen |
|---|---|---|---|
| young (4-7, or unknown age) | top **5** of `itemRank` | 1 or 2 hand-written | 6-7 |
| older (8-12) | top **6** of `itemRank` | 1 or 2 hand-written | 7-8 |

The reserved slot depends on the path. A first report gets `happened-before`.
A report where the child took the **same as before** shortcut — the app found a
report from the last 48 hours and copied its regions forward without showing
the body map — gets two comparative questions instead: whether it is better
since they last told us, and whether it hurts in more places now. The second
exists because that path skips the body map, so nothing else would notice the
complaint spreading. `happened-before` is dropped there rather than joined,
because taking the path already answers it and `sameAsBefore` on the report
carries the fact to the nurse.

These three are **hand-written and carry no `source`** — the only questions in
the app that trace to no packet item and no citation.

**An item ranked below the cutoff is asked of no child.** The bank holds 27
questions; 12 are reachable. The rest are the review record, plus items that
rank too low to survive the cap. This is why confirming `itemRank` matters more
than adding questions: a generation run that adds 20 candidates to a packet
adds at most a couple of reachable ones.

Where two accepted candidates trace to one item, `meta.preferred` names the
one that leads. Without an entry there the winner is decided by id sort order,
which is not a decision. All five known collisions now have one.

## To generate candidates for a researched packet

Fresh session, in this directory:

> Read `packets/limb/injury/packet.md` — that file ONLY. Do not read any other
> packet, any `candidates.json`, or the web. Follow its Decisions section
> exactly: it settles register, answer types, duration scope, item priority and
> age floors. Generate 18-24 candidates for the items it marks child-reportable,
> skipping any it says are not shipped. Each needs `young` (4-7) and `older`
> (8-12) wordings, an `answers` type (`yesno`/`count`/`text`/`voice`), and
> `traces_to` citing the packet item. Write
> `packets/limb/injury/candidates.json` with `review.status: "pending"` on every
> candidate, and `packet.id` set to `limb-injury`. Then report what in the
> packet was unclear or contradictory.

**limb-injury has an extra requirement:** its `meta.json` `subgroupNotes` say
item 2 (and probably 3) must be generated TWICE — once with
`"subgroups": ["lower"]` using Ottawa's weight-bearing wording, once with
`["upper"]`. A single generic wording is weaker than the criterion it cites.

Then: screen → review → build-bank.

## To research a new packet

> Read `scripts/packet-brief.md` and follow it to build a packet for
> `<complaint>`, id `<id>`, body area `<group>`. Match the standard of
> `packets/throat/sore-throat/packet.md`. Follow brief §2b strictly — do not
> read fetched sources whole. Output `packets/<area>/<complaint>/packet.md` and
> `meta.json` only.

## Non-negotiables

- **Never cite a source you did not open.** Citations fail closed: an item with
  no `cite` entry ships `cite: null` and the build warns.
- **This app does not diagnose.** No scores, no condition names at runtime.
- **Examination and observer findings never become questions.** If a criterion
  is *nearly* child-reportable, split it into a new separately-sourced item
  rather than reclassifying the original.
- **A packet without `meta.json` is skipped entirely** by build-bank.

## What changed on 2026-09-06 (second pass)

Cleanup of the two shipping packets, before any further generation.

- **Five item collisions resolved** into `meta.preferred` — head items 4, 5, 13
  (and 6, already set) and tummy item 18. Three of these were previously being
  decided by alphabetical id sort.
- **Eight duration tags corrected.** `h-010` and `h-013` declared bands their
  items do not permit; six more head candidates declared a single band each,
  which was a generation artifact — no packet decision justified any of them,
  and every tummy candidate declares its full permitted set. `h-005` (loss of
  consciousness) was reachable only for a `this-morning` injury.
- **Follow-up cap raised and age-scaled**, 3 for everyone → 5 young / 6 older.
  Under the old cap no 4-7 year old was ever asked about amnesia or loss of
  consciousness. Reachable questions went from 6 to 12 of 27. The young cap
  overrides the original four-questions-on-screen attention judgement by 50%;
  if young children are observed dropping off, lower that number first.
- **Five stale "Still open" items marked resolved** (tummy 3, limb 2). They
  described the per-packet `screen.mjs` ban list, per-packet citations in
  `build-bank.mjs`, and the `depth` filter — all of which already existed.
- **`screen.mjs` no longer flags `count`/`text`/`voice`** as unshippable.
  `FollowUpScreen` renders all four answer types; `PENDING_WIDGETS` is now empty
  and kept only as the mechanism for staging a future one.
- **The follow-up cap is now spent across groups, not on the first one.** It
  was applied to a single concatenated list, so whichever group came first
  filled every slot — and the order is the child's tap order, so tapping tummy
  before ear produced six tummy questions and nothing about the ear, while the
  reverse tap order produced the opposite report. Each tapped group is now
  guaranteed a question before any group gets a second. Single-group output is
  unchanged, verified byte-for-byte.
- **Two comparative questions added for repeat reports** (`better-than-before`,
  `spread-since-before`), and `sameAsBefore` added to the report contract. The
  48-hour shortcut previously changed the flow but not the questions, so a
  repeat report recorded a fresh intensity against an unchanged body map.
- **limb `meta.bannedPhrases` extended.** Its wording caution bans *torn,
  infection, septic, arthritis, cancer, tumour, leukaemia* and none had been
  transcribed, so `screen.mjs` was not enforcing them.

## What changed on 2026-09-06 (third pass — generation, and two defects it exposed)

Stage 2 was run for the four remaining researched packets, by four cold-context
agents reading only their own `packet.md` and `meta.json`. **84 candidates, all
`pending`, all screening clean.** Independently verified: packet id matches
meta, no duplicate ids, every `traces_to` askable, every askable item covered,
every `duration` array exactly matching `meta.durations`, `minAge: 8` on all
ears item-8 candidates, limb item 2 split ×4 across `["lower"]`/`["upper"]`.

Two defects surfaced that had nothing to do with the candidates themselves.

**1. `bannedPhrases` was under-transcribed in every packet, including the one
already audited.** The 2026-09-06 second pass recorded limb's transcription as
closed. It was not: `fever`, `stitches` (named in the prose list, dropped in
transcription), limb-to-limb comparison, movement instructions, the NAI ban as a
*concept* rather than the single word `accident`, and `function` all passed the
screen. 22 rules were added across the four packets — limb 7→11, throat 6→10,
chest 13→16, ears 13→20 — each with a positive test proving it catches the
string it exists to catch, and `\bbump\b` anchored to head/neck/ear context so
it does not reject the "bumping into things" wording ears decision 1 mandates.
**Zero existing candidates were lost.** head/injury and tummy/acute-pain have
still never had this audit.

**2. Questions were deduped by `id`, so the same question was asked twice.**
Not theoretical and not new to generation: `tummy-rash`, `chest-rash` and
`back-rash` are byte-identical under three ids, and a six-year-old who tapped
their tummy and their chest was asked *"Are there spots or a rash?"* twice, in
the shipped app. The round-robin cap fix earlier the same day is what made it
reachable — before it, the first group consumed every slot and the second copy
never rendered. Generation added ten more such collisions across packets, and
seven more between a sourced question and the hand-written one it replaces
(`hearing`/`e-001` are byte-identical).

The fix is `fact`: a slug naming what the answer establishes, shared across
packets and across the hand-written/sourced boundary, deduped on by `keyOf` in
`vocab.js` (`q.fact ?? q.id`). It is assigned per *(packet, item)*, not per
candidate, so it survives whichever competing wording review accepts. Seven
facts now span more than one body area — `feels-feverish` spans four. This also
does by construction what packet decisions 10 and 11 asked for by hand: the
sourced question suppresses the fallback instead of racing it, so **the ears
item 1 candidate no longer needs renaming to `hearing`.**

`review.mjs` now prints a candidate's fact and names the other packets that can
already reach it, because accepting a question whose fact is covered elsewhere
buys a wording, not a question.

## The fact map, corrected 2026-09-06 (fourth pass)

Three errors in the initial `fact` assignment, all found by re-scanning the
built bank for cross-group near-duplicates rather than exact matches:

- **`t-019` "Do you feel hot?"** carried no fact while limb, throat, chest and
  ears all carried `feels-feverish`. A child tapping their tummy and their
  throat was asked about feeling hot twice.
- **`h-008` "Have you thrown up since you hurt your head?"** carried no fact
  while tummy, throat and ears carried `vomiting`. Head is now tagged too, and
  because head outranks tummy in tap order its better-anchored wording wins.
  The cost is recorded honestly: for a child who taps tummy first, the
  head-injury temporal anchor is lost and the nurse must reconstruct it from
  the body map. Vomiting is one systemic fact; attribution is the nurse's job.
- **`t-017b`** inherited `hard-to-breathe` from per-item assignment despite
  asking about a cough. Shadowed by `t-017a` so nothing shipped wrong, but had
  `t-017a` ever been rejected it would have suppressed chest's real breathing
  question. Fact removed — absent is the safe state, since it can only cause a
  question to be asked, never silently dropped.

**Lesson for future packets: assign `fact` per candidate, not per (packet,
item).** Two candidates on one item can ask genuinely different things.

Four cross-group near-duplicates remain and are deliberate: breathing vs
talking, cough-waking vs pain-waking, and the two trajectory questions, which
are region-specific — whether a leg is improving says nothing about whether a
headache is worsening, so merging them would delete information.

## Known open issues

- **Filtering follow-ups on the child's chosen sensations — considered and
  DECLINED, 2026-09-06.** Nine assessment items across five packets are
  cross-referenced against a `SENSATIONS` entry; six of them (limb 9, limb 15,
  throat 25, chest 15, ears 18, ears 19) are excluded outright on those grounds,
  and the proposal was to suppress dynamically instead, so the item could be
  re-included and only dropped for a child who actually picked that sensation.
  Declined for two reasons. First, it would change nothing today: the six items
  are not generated, and the three that are (throat 11, ears 9, tummy 8)
  deliberately take the *non-overlapping half* of the fact — vomiting not
  nausea, falling over not dizziness — so suppressing them would be wrong.
  Second, and the real reason: selection already filters on duration, depth,
  `minAge`, subgroups, per-item dedupe and cross-packet `fact` dedupe, then
  applies a cap of 5 or 6. A seventh filter keyed on a **multi-select a
  four-year-old tapped icons on** is the weakest signal of the set, and it
  differs in kind from the others: `fact` dedupe drops a duplicate *wording*
  while still collecting the fact, whereas this would drop a *question* on the
  strength of something that was never a question. Reversing the six exclusions
  is separately expensive (six documented decision reversals, `meta.json`
  changes, a regeneration run per packet, ~12 more candidates through review),
  and limb 9 additionally needs a young-tier-only expression the bank does not
  have. Do not re-propose without new evidence that children tap sensations
  precisely.

- **43 "Still open" items** across the six packets (48 bullets, 5 now marked
  resolved); run `packet-digest.mjs <id>`.
- **`meta.bannedPhrases` has only been audited against the prose for `limb`.**
  The other five packets may also list wording cautions that were never
  transcribed, and a caution that exists only in prose is not enforced.
- Item priority orderings are all marked *"Proposed, not yet confirmed"* — and
  under the cap they now decide which questions exist at all.
- `head-injury`'s rank 1 is item 6, a **free-text** question, so it is the first
  thing every child answers including a 4 year old. Unresolved.
- `tummy` items 2, 6 and 11 are askable and have **no accepted candidate**, so
  three researched criteria are unreachable; the log does not say why.
- `tummy` `long-time` has **one** sourced question; the packet is acute-scoped.
- `followUpsForGroups` dedupes on question id, not on a declared fact, so a
  child tapping two regions can be asked the same thing twice. Flagged by three
  packets — and more visible now that multi-group reports actually reach more
  than one group's questions — and by a fourth route: `better-than-before` sits next to
  within-episode trajectory questions (tummy item 7, head item 2) that ask a
  near-identical thing in the opposite polarity. The wording anchors on the
  previous report to separate them, but a declared-fact dedupe would be the
  real fix.
- `build-bank.mjs` does not enforce a `notGenerated` list; 9 items across limb
  and tummy sit in prose only and would ship at rank 99 if a candidate traced
  to them.
- The bank has no **age-tier** filter (limb-injury item 9 needs one).
- Group order still breaks the tie for leftover slots when the cap does not
  divide evenly across the tapped groups (4 groups into 6 slots gives 2, 2, 1,
  1). Every group is represented, but which two get the extra question is still
  the child's tap order. Much smaller than the bug it replaced; worth a rule if
  it ever matters.
- `hearing` says "on that side" when a child may tap both ears — and
  unilateral versus bilateral is what NG91 uses to change advice under 2.
  (`chest-press` was ruled to stay on 2026-09-06; see the chest packet.)
- `earache` read 11 of 14 sources; `chest-breathing` 14 of 15. Both say so.
- Fallback hand-written questions top up outside a packet's duration scope.
- `head/no-injury` returns only two hand-written questions until
  `head/headache` exists.
- **Nothing has been clinically reviewed, and the reviewer is the author.** See
  `LIMITATIONS.md` before describing this work to anyone.

## What changed on 2026-09-07 (Wave A, and the crowding defect it exposed)

**Wave A researched and generated.** Five packets — `general/unwell`,
`skin/rash`, `eyes/complaint`, `mouth/tooth-pain`, `back/pain` — now have
`packet.md`, `meta.json` and `candidates.json`. **All nine body groups have a
packet.** 99 candidates generated, every packet screens clean. `general-unwell`
is reviewed (16 accepted, 4 rejected); the other four are pending.

**The Register decisions were never enforced.** All five generation agents
independently reported the same defect: each packet's "Wording cautions" section
was transcribed into `meta.bannedPhrases`, but each packet's *decision 1* is a
list of wording bans in all but name and none of it was. ~40 rules added across
the five metas. Unenforced examples that would have shipped: `"Do you need to
urinate?"` (general), `"Did any blisters pop?"` (skin), `"lumbar"` (back). Every
packet still screens clean afterwards, so no candidate was lost. **Check
decision 1, not only the cautions section, when transcribing a meta.**

**Six fact collisions backfilled onto already-reviewed questions.** A
cross-packet scan for identical question text found six questions that would
have been asked twice. `fact` added, nothing else touched: `l-012` →
`pain-at-rest`, `l-013` → `night-pain`, `l-019` → `recent-illness`, `t-006` →
`painful-peeing`, `t-012` → `runny-poop`, `s-016` → `neck-movement` (skin's
`neck-turn` renamed to match). The eyes packet avoided its own version by naming
facts to match the *ids* of the hand-written questions, which `keyOf` already
falls back to.

**DEFECT, now fixed: a cross-cutting packet crowded out every region packet.**
`general-unwell` was wired to all nine groups with its items ranked 0–12, so it
competed head-to-head with each region packet and usually won. Measured: it took
2–4 of every group's 5 slots. A six-year-old who had **just banged their head**
was asked `"Does peeing sting?"` as their fourth question, displacing the head
packet's own red flags.

Two causes, one fix:
1. No gate. Every other packet is gated by group, depth or mechanism; this one
   fired unconditionally, because it was researched for an entry point the app
   did not have.
2. Ties at equal rank were broken by `id.localeCompare`, so **the letter a
   packet's ids start with decided whether its questions were asked** — `c-` and
   `e-` beat `g-`, while `h-`, `l-`, `s-` and `t-` lost to it. Alphabetical
   accident, not clinical judgement.

The fix: every bank question now carries `homeGroup` (its `meta.group`), and
`bankQuestions` sorts questions whose home is the tapped group ahead of
cross-cutting ones. Single-group packets are never demoted, because their
homeGroup *is* the group. A cross-cutting packet still reaches every group; it
fills the slots the region packet did not use, and leads only where it is at
home.

**New body-map entry `all-over`.** `{ id: 'all-over', view: null, label: 'All
over', group: 'general' }` — the child who feels ill and cannot point anywhere,
which is the presentation `general-unwell` was researched for. `view: null`
keeps it off every drawing; it is reachable from a button under the map and
behaves like a region everywhere else. `general` is deliberately absent from
`GROUP_GATE`, so no depth or mechanism question is asked — "on your skin or
inside?" has no answer when the complaint is the whole child.

Verified by simulation: tapping "All over" alone yields a pure general-unwell
report led by the fever question; tapping an arm alone yields a pure limb report
and **still reaches fever through limb's own `l-007`** — which is why the
region-anchored fever questions must not be deleted; tapping both dedupes to one
fever question. Bank: 114 questions from 7 packets, lint clean, build passes.
