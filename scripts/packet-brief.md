# Brief: build a packet

Instructions for an agent assembling one packet. One presenting complaint per
run. Everything here was learned by assembling `head-injury.md` by hand — each
rule exists because skipping it caused a specific failure.

## Inputs
- The presenting complaint (e.g. "acute abdominal pain", not "appendicitis" —
  organise by what the child arrives with, never by the diagnosis).
- The `group` it serves in `src/data/bodyMap.js`.

## 1. Discovery — TWO searches, and the gap between them is a finding

Do **not** start by searching for a rule you already know the name of. That is
recall, not discovery, and it inherits your blind spots: the first attempt at
head injury found PECARN and missed CATCH and CHALICE entirely.

**Search A — comparison and validation studies.** "Comparison of X, Y and Z for
<complaint> in children" is a free literature review that enumerates the
candidate rules for you. Fetch each rule it names.

**Search B — a general guideline organised by the presenting complaint.** A
paediatric hospital clinical guideline, a triage guideline, WHO IMCI. Search A
alone is not enough and the tummy packet proved it: every rule it returned
predicts appendicitis, and appendicitis is about 8% of children who arrive with
abdominal pain. Nine of that packet's fourteen usable items — diarrhoea,
constipation, painful weeing, drinking and weeing more, breathing, swallowing
something — appear in **no prediction rule at all** and came only from Search B.

**Then compare the two.** Anything present in the complaint guideline and
absent from every rule is usually a common or dangerous cause the rules were
never built to catch. Say so in the packet.

## 2. Fetch — use the tool, record what happened

`node scripts/fetch-source.mjs <url> [--full]` — handles PDFs via pypdf (naive
PDF extraction returns glyph indices, not words, on typeset journal articles),
reports `EXTRACTED_BUT_UNREADABLE` rather than yielding mojibake, and detects
bot-check pages that return HTTP 200. Failed fetches are **not** cached, so a
plain retry is worth trying — PMC serves a reCAPTCHA intermittently and usually
succeeds on the next attempt.

Order of preference: **PMC** → publisher-hosted PDF → guideline site → HTML.
PMC is by far the most reliable. Record, per source, whether it was actually
read or only cited. Never cite a source you did not read.

Open-access only. Do not attempt anything paywalled or behind a login.

## 2b. Read economically — this is not optional

**Do not read a fetched source whole.** A guideline is 60,000+ characters; the
criteria you need are a few hundred. Reading the file into your context to
extract eight bullet points is what made an earlier packet cost ~180,000 tokens,
and it produces no better a packet than targeted windows do.

`fetch-source.mjs` caches the extracted text and prints its path. Then:

```
node scripts/find-in-source.mjs <cached.txt> --scan
```
prints the sentences most likely to *be* criteria — imperatives, risk language,
thresholds — so you can see what the document holds without reading it.

```
node scripts/find-in-source.mjs <cached.txt> "loss of consciousness" "vomiting"
```
prints a window around each hit. Quote from those windows: they are verbatim, so
accuracy is unaffected. The entire PECARN rule came out of 350 characters.

Only read a file whole if the windows genuinely fail — say so in your report if
you do, because it means `--scan` needs better cues.

## 3. Extract the criteria verbatim

Quote, do not paraphrase. Capture the supporting definitions too — thresholds
and term definitions decide question wording.

**Rules vs scores.** Head-injury rules are binary criteria. Much of this
literature is weighted scores with cutoffs (Alvarado, AIR, PAS) or continuous
regression models (pARC). Harvest the *variables*, ignore the weights — you are
collecting what clinicians assess, not rebuilding the model. A variable that
was **evaluated and then dropped** still counts (pARC dropped fever for 18%
missingness; fever is plainly still assessed).

**Two kinds of disagreement, handled differently:**

- *Threshold* disagreement — all three head-injury rules give a different fall
  height. Capture the raw fact ("what did you fall off?"), let the nurse
  classify. Never pick one threshold; that silently picks one rule.
- *Scope* disagreement — pARC enrols under 96 hours, SPASMS under 7 days. This
  changes **which children the packet applies to**, not how a question is
  worded. Resolve it explicitly in the duration-scope decision and say which
  source each band follows.

## 4. Apply the self-report filter

For each criterion ask: **can a child aged 4-12 report this about themselves?**

This is the step that matters most, and the step that must never be skipped or
softened. Examination findings and observer judgements are the nurse's. A
criterion defined as "in excess of what the examining doctor expects" is not
child-reportable no matter how simple the words look.

Watch for criteria that are *nearly* reportable. CHALICE's "abnormal
drowsiness" is a clinician's comparison and stays excluded — but "do you feel
sleepy?" is a real, answerable, different item. Split them; do not reclassify.
A question citing a source that does not support it is the exact failure this
whole process exists to prevent.

**Age floors come in two kinds and must not be conflated:**

- *Capability* floor — the child cannot do it. NG232: amnesia is "unlikely to
  be possible" to assess under 5.
- *Validity* floor — the child can answer perfectly well, but the criterion was
  derived in an older cohort and means less below it. pARC and SPASMS derived
  at 5+ because appendicitis is rare and atypical under 5, not because a
  4-year-old cannot say whether jumping hurts.

Record which kind, per item. A validity floor on an item that is *also* plain
history in a complaint guideline setting no floor is an invention, not a
citation — leave it unfloored.

## 5. Check what the app already ships for this group — it is at risk

Read `src/data/vocab.js`. If `FOLLOW_UPS` already has hand-written questions for
your group, **re-source them as packet items** wherever the literature supports
them. They are working questions and they must survive the transition with a
citation behind them rather than being replaced by whatever you happen to
generate.

Then check every item against what the app collects elsewhere — body region,
depth, intensity, duration, sensations, mood. Redundancy is the commonest reject
reason and the automated screen cannot see it.

## 6. Note the depth scope

A group may be split by the depth question ("on your skin, or inside?"). Say
which depth your packet is scoped to; it becomes a filter in the bank.

## 7. Register for new vocabulary

If your items are the first in the app to need a vocabulary domain — bodily
functions, for instance — **decide the register explicitly**. The tummy packet
had to rule US "poop"/"pee" because nothing had needed those words before, and
a generator with no ruling improvises inconsistently halfway through a set.

## 8. Fill the template

`packets/TEMPLATE.md`. The **Decisions** section is not optional — an
unresolved question there becomes an improvised answer downstream.

## 9. Write the metadata sidecar — STUB IT FIRST, before you research

`packets/<body-area>/<complaint>/meta.json`, transcribed from your own Decisions
section: `id`, `group`, `groups`, `depth`, `mechanism`, `packetRank`,
`durations` (default plus per-item exceptions), `itemRank`, `minAge`, `facts`,
`cite` per item, `bannedPhrases` (as `[regexSource, why]` pairs).

`scripts/build-bank.mjs` reads only this file — a packet without one is skipped
entirely, and an item with no `cite` entry ships `cite: null` with a warning
rather than borrowing another packet's citation.

**Write it as a stub in your first few minutes, then update it as each decision
settles.** Not at the end. This is a hard rule and it is written in blood: on
2026-09-07 five research agents were launched at once, all five hit the session
limit at the same moment, and all five died at the same point — after finishing
the research, before writing the sidecar. Five complete `packet.md` files
survived on disk and every `meta.json` was lost, so the expensive half survived
and the cheap half had to be rebuilt by hand.

The sidecar is the last thing written and the first thing needed, which is the
worst possible ordering. So invert it. The moment you know the packet's identity
— which you do before you read a single source, because it comes from the brief
— write:

```json
{ "id": "...", "group": "...", "groups": ["..."], "depth": null,
  "mechanism": null, "packetRank": 50,
  "durations": { "default": [], "exceptions": {} },
  "itemRank": [], "minAge": {}, "facts": {}, "cite": {}, "bannedPhrases": [],
  "STATUS": "STUB — research in progress, do not build from this" }
```

Then fill it in as you go: add each `cite` entry when you extract the criterion,
each `bannedPhrases` pair when you make the wording ruling, each `facts` entry
when you rule on reuse. Drop the `STATUS` key when the packet is complete. A run
that dies halfway then leaves a partial sidecar that says so, instead of nothing
— and a human can finish it from the `packet.md` in minutes.

Keep it parseable at every save: `node -e "JSON.parse(require('fs').readFileSync('<path>','utf8'))"`.

## 10. Provenance discipline — non-negotiable

These packets are shared with clinicians and institutions. Every one must be
readable by someone who will assume, unless told otherwise, that a doctor wrote
it. Therefore:

- **Reproduce the provenance block from `packets/TEMPLATE.md` verbatim**, at the
  top, immediately after the Status line. Do not reword it.
- **The Status line must state the true count** of sources read first-hand out
  of sources cited — e.g. `sources verified first-hand: 11 of 14`.
- **Mark every unread source `CITED, NOT READ`** in the Sources list, and say
  what depends on it. If nothing does, say that too.
- **If a consequential claim rests on a source you could not read, say so in
  the packet's own words, near the top**, not only in a closing section. A
  reader must not have to reach page 40 to discover the weakest link.
- **Never write a citation you did not open.** A plausible-looking reference to
  a paper you did not read is the single worst failure available here — worse
  than an incomplete packet, because it cannot be detected by reading the
  packet.
- **Distinguish judgement from citation, every time.** If a floor, an ordering,
  or an exclusion is your reasoning rather than a source's statement, mark it
  `JUDGEMENT, NOT A CITATION` in the sidecar and say so in the prose. Two
  earlier packets did this correctly; it is the standard.
- **Item priority orderings are always marked** *"Proposed, not yet confirmed by
  review."* They decide what a child is actually asked.

## 11. Report back

State: how many criteria found, how many survived the filter, which sources
were read versus cited, and — most valuable — anything in the sources you found
ambiguous or insufficient. Be specific about gaps rather than papering over
them.
