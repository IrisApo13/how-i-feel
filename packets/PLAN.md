# The plan for the remaining 14 packets

Written 2026-09-06, at the end of the session that took the bank from 27
questions to 98. Hand this file to Claude at the start of tomorrow's session —
it is written to be read cold, and it assumes nothing that is not either in
here or in `packets/STATUS.md`.

---

## Where things stand — updated 2026-09-07, after Wave A + review

**13 of 20 packets researched and built. 192 questions in the bank. All nine
body groups have a packet, and every packet is fully reviewed — nothing
pending.** Bank builds, lint clean, build passes, every packet screens clean.

| packet | accepted | rejected |
|---|---|---|
| head/injury | 13 | 11 |
| tummy/acute-pain | 14 | 10 |
| limb/injury | 18 | 2 |
| throat/sore-throat | 17 | 4 |
| chest/breathing | 17 | 6 |
| ears/earache | 19 | 1 |
| general/unwell | 16 | 4 |
| skin/rash | 19 | 5 |
| back/pain | 17 | 7 |
| eyes/complaint | 15 | 2 |
| mouth/tooth-pain | 9 | 5 |
| limb/pain | 7 | 4 |
| tummy/vomiting | 11 | 9 |
| **total** | **192** | **70** |

`limb/pain` shipped 2026-09-07: 4 items, 7 accepted wordings, reachable only
via the limb mechanism gate answering "it just started hurting".

### The dedupe key is `packet # item # fact`, not the item number

Changed 2026-09-07, twice. It was the item number alone, which collided across
packets (`general-unwell` item 3 suppressed `head-injury` item 3 purely by
sharing a number — 63 such collisions across the six shared groups). Adding the
packet fixed that and exposed the second half: an item number is not the unit of
"the same question" — **`fact` is** — and one assessment item can carry two
candidates that genuinely ask different things.

Three exist, and all three were being silently collapsed after a human had
accepted both:

| packet | item | split |
|---|---|---|
| limb-injury | 12 | `pain-at-rest` vs `night-pain` |
| limb-pain | 8 | `morning-stiff` vs `morning-pain` |
| tummy-acute-pain | 18 | `hard-to-breathe` vs the cough question |

Candidates that **share** a fact still collapse — 44 items carry two wordings of
one question and only the better-ranked one is asked. A candidate with no fact
falls back to the empty string, so two untagged candidates on one item still
collapse: a missing tag must never split a question.

`limb-pain` item 8 therefore spends two of the queue's slots, deliberately. The
packet's argument is that a child can be stiff without pain and in pain without
stiffness, and that the pain half is what makes the existing night-pain answer
interpretable — night pain that is gone by morning is the benign pattern.

### Two packets in one group: `meta.packetRank` and a round-robin queue

Two groups now hold two packets, and they need different mechanisms:

- **limb** — `limb-injury` and `limb-pain` are mutually exclusive, separated by
  the mechanism gate. Only one is ever live.
- **tummy** — `tummy-acute-pain` and `vomiting-diarrhoea` are deliberately NOT
  exclusive. Gastroenteritis is vomiting *and* tummy pain, and appendicitis
  commonly causes vomiting, so a gate on "have you thrown up?" would route the
  appendicitis child away from the appendicitis packet. **Do not gate tummy.**

For the non-exclusive case, `rank` alone cannot order the queue: `rank` is an
index into ONE packet's `itemRank`, so both packets' best item is rank 0 and the
tie fell through to `id.localeCompare` — the alphabetical accident `homeGroup`
was introduced to kill, recurring inside a group.

So each packet gets its own queue and they are spent **round-robin**, exactly as
`followUpsForGroups` spends the cap across groups. `meta.packetRank` (lower
leads, default 50) decides who picks FIRST, not who picks everything — the child
gets a mix, and the leading packet takes the odd slot. `tummy-acute-pain` is 10
and `vomiting-diarrhoea` is 20, because a missed appendicitis is the
time-critical error. Home-group packets are exhausted before cross-cutting ones,
so this never lets `general-unwell` in ahead of a region packet. A group with
one packet round-robins a single queue, which is the identity operation.

### `fetch-source.mjs` returned the WRONG DOCUMENT — fixed 2026-09-07

The cache key was the sanitised URL truncated to 80 characters, and **every NHS
Greater Glasgow paediatric guideline URL is identical over that prefix.**
Requesting guideline 180 (acute gastroenteritis) returned `{cached: true}` and
the full text of guideline 336 (acute sore throat). A packet builder had no way
to detect it: it asked for one guideline, received prose that reads like a
guideline, and would have quoted it verbatim under the citation it requested.

A false citation is the one failure this whole pipeline exists to prevent. Keys
now carry an 8-character SHA-1 of the full URL, with the readable prefix kept so
a human can still recognise files in `packets/.sources/`.

**Exposure was checked and is nil.** Five distinct NHSGGC guidelines were
requested across ten packets (623, 336, 1126, 537, 180) and each landed in its
own file; verbatim quotes from `chest/breathing` against 623 and `back/pain`
against 1126 were re-verified against the cached text. But it was one collision
away, and the vomiting run hit it live.

**Also reported and NOT yet fixed:** `fetch-source.mjs --scan` returns zero
candidate sentences on RCH guideline pages, because RCH writes bullet lists
without terminal punctuation. Agents work around it with keyword windows.

### Gates: a group may now ask more than one, and the second may be conditional

`GROUP_GATE` in `src/data/bodyMap.js` changed from one gate type per group to an
ordered list of `{ key, type, when }`. `when` makes a gate conditional on an
earlier answer in the same group, and `gatesForRegions(ids, answers)` in
`vocab.js` resolves the list against the answers so far. The gate answer is
stored under its `key`: `report.depths[group]` and `report.mechanisms[group]`.
Packet metadata matches on `meta.depth` and `meta.mechanism` independently.

- **limb** asks depth, then mechanism if the answer was inside or not-sure.
  This is what routes between `limb-injury` (`inside` + `injury`) and
  `limb-pain` (`inside` + `no-injury`), two packets whose literatures share
  almost no criteria.
- **head** asks mechanism, then depth if the answer was no-injury or not-sure —
  the opposite order, because a scalp hematoma is an injury *and* on the
  surface, so gating head on depth would drop the child PECARN exists for.
- An unanswered or "not sure" gate fires **both** sides rather than guessing.

Three defects were fixed along the way, all found by the limb work:

1. **Head stored its mechanism answer in the `depths` map.** That is why
   `head-injury` carried `depth: "injury"`, a value no depth question can
   produce — and it silently emptied the sensation screen for any child who
   tapped only their head, because sensations are pruned by surface/inside and
   "injury" is neither. Head now has `mechanism: "injury"` and `depth: null`.
2. **`bankQuestions` deduped on item number alone.** Item numbers are
   per-packet, so `general-unwell` item 3 and `head-injury` item 3 suppressed
   each other purely by sharing a number — 63 such collisions across the six
   shared groups. Latent then, fatal for `limb-pain`, which has four items and
   one of them is 11. Now keyed `packet#item`. Deduping *across* packets stays
   `fact`'s job.
3. **`skin-rash` leaked into every head report** once head had no depth answer.
   Fixed by giving head a depth gate on the no-injury branch.

Also merged `r-011`'s fact from `hard-to-walk` to `limb-use`: it is verbatim
identical to `back-pain#14` and `general-unwell#13`, and on the "not sure" depth
path a child was asked "Is it hard to walk?" twice.

### Two earlier architectural changes — read before touching ranking

- **`homeGroup`.** Every bank question carries its packet's `meta.group`, and
  `bankQuestions` sorts questions whose home is the tapped group ahead of
  cross-cutting ones. This exists because `general-unwell`, wired to all nine
  groups with items ranked 0–12, took 2–4 of every group's 5 slots — a
  six-year-old who had just banged their head was asked *"Does peeing sting?"*
  fourth. It also replaced the old tie-break, which was `id.localeCompare` and
  therefore let the letter a packet's ids start with decide whether its
  questions were ever asked.
- **The `all-over` body-map entry.** `{ id: 'all-over', view: null, label:
  'All over', group: 'general' }` — the child who cannot point anywhere. Off
  every drawing; reachable from a button under the map.

Full write-up in `STATUS.md` under "What changed on 2026-09-07".

There is no row 21 or 22 in the roadmap. The plan is 20 packets; rows 2 and 3
are the skin rash and skin injury packets.

---

## The 14 remaining, in the order to do them

Order is chosen so that if the day runs out, the most valuable work is done.

### Wave A — DONE 2026-09-07. All five built; four await review.

### Wave B — START HERE: `head/headache` stage 2 (generation).

**Research is DONE (2026-09-08).** `packets/head/headache/packet.md` (1178
lines) and `meta.json` are on disk and validated: `group: head`,
`mechanism: "no-injury"`, `depth: "inside"`, `packetRank: 50`, 9 proposed
items, 26 `bannedPhrases`, every ranked item has a `cite`, `minAge` empty
by explicit ruling. Sources verified first-hand: 12 of 14.

**Next step is stage 2:** a cold-context generation agent reading ONLY
`packets/head/headache/packet.md` + `meta.json`, writing
`packets/head/headache/candidates.json` with prefix `h-`. Then
`screen.mjs`, then the user reviews in the terminal with `review.mjs`.

**Two things stage 2 must get right:**
- **Item 3 is one item, not two.** The sources split early-morning headache from
  night-waking; a candidate covering only one half loses half the criterion.
- **Item 5 must cite HeadSmart, never Manoyana.** Manoyana supports why blurred
  vision matters, not the question — the squint/pupil findings are examination.

**Facts coined here:** `morning-headache`, `sound-hurts`,
`head-worse-moving`. Facts reused: `light-hurts` (dedupes against the head
`FOLLOW_UPS` entry it re-sources), `blurry` (from `eyes/complaint`).
`neck-movement` reused by reference with no item proposed.

**Two known defects recorded by the research, not fixed:**
- `light-hurts` and `bright-light-hurts` are two slugs for one fact.
  `bright-light-hurts` belongs to `skin/rash` (`depth: surface`), which can
  never reach this child, so nothing is broken today. Flagged for merge.
- **`PMC6712068` in `packets/.sources/` is NOT a headache paper** — it is a
  preBötzinger-complex respiratory review, a mis-fetch by the killed run. An
  earlier version of this file listed it as a headache source. Nothing depends
  on it. Verified 2026-09-08.

**The one disagreement a clinician should settle:** NG127 spends two of its ten
same-day-referral bullets on headache that wakes a child or is present on
waking. The only prediction study located (Manoyana, 109 children) tested it and
found nothing — 13.8% lesion-negative vs 9.8% lesion-positive, p = 0.52. The
packet keeps the item, ranks it third on the guidelines, and says so in its own
"Read this first".

Rows 19 (`limb/pain`) and 16 (`tummy/vomiting`) are DONE and shipping. Two left,
and the order changed on purpose:

**Do row 5 (`head/headache`) next, not row 17.** The mechanism gate now routes a
child who says "it just started hurting" AWAY from `head-injury` — correctly —
but there is nothing on the other side of that gate yet, so they fall through to
`general-unwell` and `skin-rash`. The gate is built and empty. That packet's
metadata should be `group: "head"`, `mechanism: "no-injury"`, `depth: "inside"`,
and it needs a `packetRank` (`head-injury` has none, so it defaults to 50 —
give headache 50 too, or set both explicitly; they never coexist anyway because
the gate separates them).

Then row 17, `tummy/constipation`. It joins a group that ALREADY has two
packets, so it needs a `packetRank` and the three-way round-robin will give each
packet two of six slots. Consider whether three tummy packets is one too many
before researching it.

Run research SEQUENTIALLY, one packet at a time.

**Row 19 (`limb/pain`) is researched but not generated.** Its next step is
stage 2, and its `meta.mechanism` is `"no-injury"` — the gate that routes to it
is already live and returns nothing until candidates exist. Its own headline
finding: the whole limb prediction-rule literature yielded **zero** new
child-answerable questions, so it has only four askable items (morning
stiffness, worse on running, does the sore spot move, night sweats) and
re-uses seven from `limb/injury` by reference.

Remaining: row 16 `tummy/vomiting`, row 17 `tummy/constipation`, row 5
`head/headache` (which now has a home: head + no-injury + inside).

**Do not launch these in parallel.** On 2026-09-07 five research agents were
launched at once, all five hit the session limit simultaneously, and all five
died at the same moment — after finishing the research, before writing
`meta.json`. Sequentially, a budget exhaustion costs at most one packet and
every completed packet is usable.

**A mid-way stop is cheap to recover.** That crash lost nothing of substance:
all five `packet.md` files were on disk, and the four missing `meta.json` files
were reconstructed from them by hand with a few targeted reads and no
re-research. Agents write as they go, so the expensive half — reading sources —
survives.

**Order within Wave B: row 19 first, it is the cheapest.** The atraumatic
branch is roughly half-researched already; read
`packets/limb/injury/packet.md` before starting it.

Measured costs, for budgeting: a generation agent is **~85k tokens** (76k–91k
observed across five). A research agent is substantially more and was what
exhausted the budget.

### Wave A packets (for reference)

After this wave **all nine body groups have a packet**, and the case the app
cannot currently handle at all — a child who feels ill but cannot point
anywhere — is covered.

| # | Packet | Path | id | Group / depth | Anchor to search for | Evidence |
|---|---|---|---|---|---|---|
| 1 | Feeling unwell all over / fever | `packets/general/unwell/` | `general-unwell` | **all nine groups** | NICE traffic-light (fever <5s) | Strong |
| 2 | Rash or spots | `packets/skin/rash/` | `skin-rash` | all groups, `depth: surface` | NICE — incl. non-blanching rash | Strong |
| 6 | Eye complaint | `packets/eyes/complaint/` | `eye-complaint` | `eyes` | Red-eye / eye-injury guidance | Moderate |
| 8 | Mouth or tooth pain | `packets/mouth/tooth-pain/` | `mouth-pain` | `mouth` | Dental pain guidance | General |
| 20 | Back pain | `packets/back/pain/` | `back-pain` | `back` | Pediatric back pain red flags | Moderate |

### Wave B — Strong evidence, deepens existing groups

| # | Packet | Path | id | Group / depth | Anchor to search for | Evidence |
|---|---|---|---|---|---|---|
| 16 | Vomiting or diarrhoea | `packets/tummy/vomiting/` | `vomiting-diarrhoea` | `tummy`, `inside` | NICE gastroenteritis | Strong |
| 17 | Constipation / toileting | `packets/tummy/constipation/` | `constipation` | `tummy` (+ hips, bottom) | NICE CG99 | Strong |
| 19 | Limb pain / limping, no injury | `packets/limb/pain/` | `limb-pain` | `limb` | Limping-child pathways | Moderate |
| 5 | Headache, no injury | `packets/head/headache/` | `headache` | `head` | Pediatric migraine criteria | Moderate |

### Row 17 (`tummy/constipation`) — DECLINED 2026-09-08 by iris

Not being built. Reasons, so this is not re-litigated:

- **Most of NICE CG99's core criteria collide with the PG ceiling.** Stool
  frequency, stool consistency and withholding behaviour are the diagnosis, and
  all three are exactly what a child answering alone on a shared hospital tablet
  will not answer honestly. A shaming question produces a false negative.
- **Duration already separates it.** Measured on 2026-09-07: the `long-time`
  band has only **1** `tummy/acute-pain` question against 14 in the acute bands,
  so a child with a weeks-long tummy problem is already not being asked
  appendicitis questions.
- **It would be the third packet in one group**, taking two of six slots from
  `tummy/acute-pain` and `tummy/vomiting` via the round-robin.

If it is ever revisited, scope it to `few-days` / `not-sure` / `long-time` and
give it a `packetRank` above both existing tummy packets.

### Wave C — the rest

**RESEARCH RAN 2026-09-08/09. Four of five packets are complete; `chest/pain`
lost its prose.** State on disk, verified 2026-09-09:

| Packet | rank | items | packet.md |
|---|---|---|---|
| `skin/wound` | 40 | 6 | 885 lines |
| `throat/neck-pain` | 60 | 8 | 993 lines |
| `tummy/ongoing-pain` | 5 | 9 | 787 lines |
| `head/nosebleed` | 60 | 5 | 755 lines |
| **`chest/pain`** | 40 | 11 | **MISSING** |

All five sidecars are FULL — no `STATUS: STUB` key on any of them — and every
`bannedPhrases` regex compiles. **No `candidates.json` exists for any of the
five, so stage 2 has not run.**

**The stub-first rule worked, and inverted the failure mode.** All five agents
were killed by the same session limit (HTTP 429, resets 4am). On 2026-09-07 the
prose survived and every sidecar was lost; this time every sidecar survived and
one packet's prose was lost. The cheap half is now the half that gets saved,
which is the right way round — but it exposed a new hazard, below.

**`chest/pain` is the one to fix first, and it is a PROVENANCE hazard, not a
missing feature.** `build-bank.mjs` reads only `meta.json` and never reads
`packet.md`, so the moment someone writes its `candidates.json` it ships
questions carrying citation strings with no readable source behind them — the
exact failure §10 of the brief exists to prevent. A warning was added to
`build-bank.mjs` on 2026-09-09 so this cannot pass silently again.

Do **not** re-run its research from scratch. Its sidecar holds 39 `cite`
entries with verbatim quotes plus `mechanismNote`, `packetRankNote`,
`durationsNote`, `itemRankNote`, `minAgeNotes`, `factsNote` and
`preferredNote`, and both RCH chest-pain sources are still in
`packets/.sources/`. Reconstructing the prose from those is a much smaller job.

**Also stale: `packets/STATUS.md`** still shows row 9 as unstarted and does not
track the other four.

**Original launch plan, agreed 2026-09-08.** Five packets: rows 3, 11, 13, 15, 9.

**Run them in PARALLEL, not sequentially.** The earlier "sequential" rule in
this file was about failure isolation, not token cost — sequential is not
cheaper, it is the same work. Measured costs: research ~245k tokens per packet,
generation ~112k, so Wave C is roughly **1.8M tokens** end to end.

**Two mitigations, both required:**

1. **The stub-first rule is now in `scripts/packet-brief.md` §9.** Every agent
   writes a stub `meta.json` before it researches and fills it in as decisions
   settle. This directly addresses the 2026-09-07 crash, where five agents died
   at the same instant after the research and before the sidecar — the
   expensive half survived and the cheap half was lost.
2. **Stagger the launches** by a minute or two rather than firing five in one
   block. That crash was an HTTP 429 rate limit from five simultaneous starts,
   not a budget exhaustion.

Run stage 2 (generation) the same way, after the research lands.


| # | Packet | Path | id | Group / depth | Anchor to search for | Evidence |
|---|---|---|---|---|---|---|
| 3 | Cut, scrape or bruise | `packets/skin/wound/` | `skin-wound` | all groups, `depth: surface` | Wound care guidance | General |
| 11 | Neck pain or stiffness | `packets/throat/neck-pain/` | `neck-pain` | `throat` + `back` | NICE (neck stiffness) | Moderate |
| 13 | Chest pain | `packets/chest/pain/` | `chest-pain` | `chest`, `inside` | Pediatric chest pain reviews | Moderate |
| 15 | Ongoing tummy pain | `packets/tummy/ongoing-pain/` | `tummy-ongoing` | `tummy`, `inside`, long duration | Rome IV (functional GI) | Moderate |
| 9 | Nose complaint / nosebleed | `packets/head/nosebleed/` | `nosebleed` | `head` (nose region) | General pediatric | General |

---

## Things that are cheaper or harder than they look

- **Row 19 is roughly half researched already.** The `limb/injury` research
  covered the atraumatic branch — RCH limping child, transient synovitis,
  septic arthritis — and shipping items 11, 12 and 13 come from it. Read
  `packets/limb/injury/packet.md` before researching row 19; much of the source
  work is done.
- **The three "General" rows (3, 8, 9) will yield much less.** "General" means
  no named prediction rule, only guidance. The limb packet is the warning:
  eight named rules produced exactly **one** clean child-reportable item,
  because every one is a radiography-decision rule made with a clinician's
  hands. Budget rows 3, 8 and 9 at five or six questions, not fifteen.
- **Rows 2 and 3 close open items in packets already shipped.** Throat item 14
  (rash) is recorded as having "no home"; the chest `surface` half has no
  packet; limb items 7 and 18 are out of scope pending a surface packet. All of
  that resolves when the skin packets exist. Because they are `depth: surface`
  on *any* group, one packet serves all nine body areas.
- **Row 1 should own `feels-feverish`.** Four packets currently ask it
  separately (limb `l-007`, throat `s-020`, chest `c-023`, ears `e-019`). When
  row 1 ships, its candidate takes the `feels-feverish` fact and the other four
  are suppressed automatically. Do not delete them.
- **Row 5 fixes something visibly wrong.** A child with a headache and no bump
  currently receives head-*injury* questions.

---

## How to run it

Three stages per packet. Agent time and human time are separate resources, so
**pipeline them**: launch the next wave's research while reviewing the last
wave's candidates. The day is bounded by review time, not by agents.

### Stage 1 — research (one agent per packet, ONE AT A TIME — see Wave B above)

**When transcribing the resulting `meta.json`, read decision 1, not only the
"Wording cautions" section.** Every packet's decision 1 is a Register ruling —
a list of wording bans in all but name — and on 2026-09-07 all five Wave A
generation agents independently reported that none of it had been transcribed.
Unenforced examples that would have shipped: `"Do you need to urinate?"`,
`"Did any blisters pop?"`, `"lumbar"`. ~40 rules were added afterwards and no
candidate was lost, but the screen was blind until they were.

> Read `scripts/packet-brief.md` and follow it to build a packet for
> `<complaint>`, id `<id>`, body area `<group>`. Match the standard of
> `packets/throat/sore-throat/packet.md`. Follow brief §2b strictly — do not
> read fetched sources whole. Output `packets/<area>/<complaint>/packet.md` and
> `meta.json` only.

For the cross-cutting packets (1, 2, 3) the agent must set `meta.groups` to a
list of every group it serves, not `meta.group`. `build-bank.mjs` reads
`meta.groups ?? [meta.group]`.

### Stage 2 — generation (one cold-context agent per packet)

Each agent reads **exactly two files**: its own `packet.md` and `meta.json`. No
web, no other packet, no `src/`, no `STATUS.md`, no sibling `candidates.json`.
The isolation is the design — wording must come from that packet's own evidence
and cautions, never from imitating a sibling.

The brief must specify: derive `askableItems` from the Assessment items table
(**yes**/**partial**, minus anything marked exam, observer-only, already
collected, out of scope, or not-generated-in-v1); 18–24 candidates; `duration`
always an array copied verbatim from `meta.durations.exceptions[item]` or
`.default` (**never narrowed** — that bug made head items unreachable in most
bands); `review: {status: "pending"}` on every candidate; run
`node scripts/screen.mjs <path>` until **0 rejected**; and report back any
wording caution present in the packet's prose but absent from
`meta.bannedPhrases`.

**Assign `fact` per candidate, not per (packet, item).** This is the lesson
from today: `t-017b` inherited `hard-to-breathe` from its item number while
actually asking about a cough, which would have suppressed chest's real
breathing question had `t-017a` ever been rejected. Two candidates on one item
can ask genuinely different things.

Facts already in use, for reuse rather than reinvention:
`hard-to-breathe`, `feels-feverish`, `cough`, `runny-nose`, `vomiting`,
`eating-drinking`, `choking-episode`, `hurts-to-swallow`, `hard-to-hear`,
`worse-on-exertion`, `limb-use`, `limb-mechanism`, `limb-swelling`, `rash`,
`itch`.

Only merge a fact when it is **systemic** — one answer about the whole child.
Do **not** merge region-specific facts: the trajectory questions (head item 2,
tummy item 7, limb item 4) stay separate, because whether a leg is improving
says nothing about whether a headache is worsening.

### Stage 3–5 — screen, review, build

```
node scripts/screen.mjs packets/<area>/<complaint>/candidates.json
node scripts/review.mjs packets/<area>/<complaint>/candidates.json
node scripts/build-bank.mjs
```

---

## Review notes, learned the hard way today

- **Pressing Enter at an edit prompt keeps the existing text.** Typing anything
  replaces it. A comment typed into the `older` prompt ("thi sis ok") became the
  question text and passed every phrasing rule. `screen.mjs` now rejects
  malformed strings — empty, no capital, no question mark, stray bracket, under
  three words — so this is caught at the point it happens.
- **Reject the losing wording, don't accept both.** Accepting two candidates on
  one item works, but then id order or `meta.preferred` picks the winner. A
  rejection with a one-line reason records *your* choice. Limb has seven
  shadowed candidates; throat has three, and throat's record is better.
- **Watch for British and Australian idiom.** The sources are RCH Melbourne,
  NHS Greater Glasgow and NICE. Caught today: "poorly", and "might be sick",
  which means "about to vomit" in UK English and "coming down with something"
  in American English — it had shipped for weeks. Watch for: sick, wee, poorly,
  plaster, off colour, "have you got", nappy, torch.
- **Watch answer polarity.** Most questions make *yes* the concerning answer. A
  few invert it, and the nurse reads a column of yes/nos in one direction.
  Where an item is "getting worse OR not getting better", prefer a wording that
  catches the flat child *and* keeps yes = concerning — limb `l-014` is the
  worked example: "Is it the same or worse than before?"
- **`minAge` on a candidate is ignored unless `meta.minAge` has the item.**
  `build-bank` warns and meta wins. Decide deliberately.

---

## Verification checklist after each wave

```
node scripts/build-bank.mjs          # warnings are informational, read them
npm run lint                         # only Avatar warnings are expected
npm run build
```

Then check, as was done today:

1. Every packet screens clean.
2. Every accepted question is well-formed (capital, question mark, no stray
   characters).
3. Every `duration` array matches `meta.durations` exactly.
4. Every askable item has at least one candidate.
5. **No cross-group duplicate text without a shared fact.** Re-scan the built
   bank for *near* duplicates, not just exact ones — the three fact-map errors
   found today were all near-misses that an exact-match scan had passed.
6. Simulate multi-group reports and confirm no question appears twice.

---

## What is deliberately NOT on this list

- **The nurse view.** `src/screens/NurseEnd.jsx` is a 144-line placeholder that
  reads the same `localStorage` the child's side writes. It needs building, and
  it is worth more than packets 7–20 combined for a demo. It is separate work.
- **Testing with real children.** Nothing in this repository has been tested
  with anyone aged 4–12. Four of the six packets contain an explicit open item
  saying no source proves children self-report these symptoms reliably. This is
  the only item on the whole list that a code change cannot address.
- **The `bannedPhrases` prose audit for head and tummy.** Every other packet has
  had it; those two never have. It found six real gaps in limb alone, in a
  packet already recorded as audited.
- **Four "Still open" items already fixed** by the `fact` mechanism but not yet
  struck in their packets: the dedupe bullets in chest, throat and ears, and
  chest's "`t-017a` and sore-throat item 8 need re-keying to `breathing`".
