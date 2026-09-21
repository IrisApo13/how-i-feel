# Head injury

Presenting complaint · serves group `head` · packet v6 · updated 2026-08-30
Status: **not yet clinically reviewed** · sources verified first-hand: 5 of 5

> ### Provenance and limitations
>
> **Not clinically reviewed. Not a diagnostic, triage, or decision-support
> tool. Not a medical device.**
>
> Assembled by an LLM agent following `scripts/packet-brief.md`: it searched
> the literature, fetched open-access sources, and extracted criteria verbatim.
> A secondary-school student reviewed the resulting questions. **No clinician
> was involved at any stage.** Verbatim extraction makes the quotations
> reliable; it does not mean the selection, interpretation or omission of
> criteria has been checked by anyone qualified to check it.
>
> Criteria taken from scoring systems were harvested for the *variables
> clinicians assess*. No score is reproduced, computed, or acted on, and the
> app this serves produces no scores and names no conditions to a child or a
> nurse.
>
> Full limitations, including what the evidence does and does not support about
> children reporting their own symptoms: **`packets/LIMITATIONS.md`**.


> Source material for writing questions. Lists what clinicians assess after a
> child hits their head, and marks which of those a child can report about
> themselves. **Not** a diagnostic tool: nothing here may be scored, summed, or
> shown to a child or nurse as a suggested cause.

## Scope

App covers ages 4–12, so the PECARN under-2 rule and CHALICE's "<1 year"
criteria are out of scope and not carried here.

## Sources

1. **PECARN** — Kuppermann N, et al. Lancet 2009;374:1160–70. Read first-hand
   from the PDF hosted at `pecarn.org`. Identifies children at *very low* risk.
2. **CATCH** — Osmond MH, et al. CMAJ 2010;182(4):341. Read first-hand via
   PMC2831681. Identifies children at *high* risk.
3. **CHALICE** — Dunning J, et al. Arch Dis Child 2006;91:885–91. Read
   first-hand via PMC2082967. Identifies children at *high* risk.
4. **Child SCAT5 symptom evaluation** — nausea is one of its 21 symptoms.
   Child/parent agreement data via Ferrara et al., PMC10895391, read
   first-hand. **Limits worth knowing:** that agreement study was 157 male
   youth football players aged 8–12 at a sports camp — not a hospital
   population, no girls, and nothing below age 8. Agreement with a parent is
   also not the same as accuracy. It supports "children of this age can report
   these symptoms consistently"; it does not validate them for a ward.

5. **NICE NG232**, *Head injury: assessment and early management* (2023) —
   read first-hand via `scripts/fetch-source.mjs`. Corroborates the other three
   on witnessed LOC >5 min, ≥3 discrete vomiting episodes, and dangerous
   mechanism. Contributes one constraint the others do not (see item 4).

The three rules were found via comparison studies, not by recalling names —
see "How these were found" below.

## Assessment items

| #  | Item                              | Source            | Child-reportable | Note |
|----|-----------------------------------|-------------------|------------------|------|
| 1  | Vomiting since the injury — **how many times** | PECARN, CHALICE | **yes** | CHALICE uses ≥3 discrete episodes; PECARN is binary. **Ask for a count, not yes/no** — a count serves both and costs nothing extra. |
| 2  | **Headache getting worse**        | CATCH             | **yes**          | New in v2. A *trajectory*, not a snapshot — distinct from item 3 and well suited to a repeat visit. |
| 3  | Severe headache (now)             | PECARN            | **yes**          | App already captures severity on the FPS-R screen; prefer deriving over asking twice. |
| 4  | Amnesia for the event             | PECARN, CHALICE, NG232 | **yes, age 5+** | Confirmed by three sources. CHALICE adds a >5 min threshold a child cannot judge — ask *whether* they remember, not how long. **NG232 states amnesia is "unlikely to be possible" to assess under 5, so this item carries `minAge: 5`.** |
| 5  | Loss of consciousness             | PECARN, CHALICE   | partial          | CHALICE requires it *witnessed*. Children are unreliable on occurrence and duration. A hint for the nurse, never a fact. |
| 6  | What happened (mechanism)         | all three         | partial          | See the threshold note below. Child describes the event; nurse classifies it. |
| 7  | Seizure after the injury          | CHALICE, PECARN   | partial          | Mostly observer. Never phrase as "did you have a seizure". |
| 8  | Normal mental status / GCS        | all three         | **no — observer**| |
| 9  | Irritability, abnormal drowsiness | CATCH, CHALICE    | **no — observer**| CHALICE defines drowsiness explicitly as judged by the examining doctor. |
| 10 | Basal skull fracture signs        | all three         | **no — exam**    | |
| 11 | Open/depressed skull fracture, boggy haematoma, focal neurology | CATCH, CHALICE | **no — exam** | |
| 12 | Suspicion of non-accidental injury | CHALICE          | **no — see below** | |
| 13 | **Feeling sleepy or tired (child's own report)** | child-report; *not* the CHALICE criterion | **yes** | Added v3 — see "Sleepiness" below. Not backed by CHALICE and must not be cited as such. |
| 14 | **Feeling sick / nausea (without vomiting)** | Child SCAT5 symptom list | **yes** | Sourced in v5. None of PECARN, CATCH or CHALICE list nausea — all three use *vomiting*. Nausea is one of the 21 symptoms on the Child SCAT5. See source 5. |

**Yield: ~20 criteria across three rules → 5 clean, 3 partial, 5 excluded.**

## Sleepiness — item 9 vs item 13

These look like the same thing and are not:

- **Item 9** is CHALICE's *abnormal drowsiness*, defined in the paper as
  "drowsiness in excess of that expected by the examining doctor". That is a
  clinician's comparison against a baseline. A child cannot make it, and
  neither can this app. It stays excluded.
- **Item 13** is simply whether the child feels sleepy. Children can report
  that perfectly well, and it is worth collecting — but it is a *different
  item*, and citing CHALICE for it would be a false citation.

Two cautions the reviewer should weigh:

1. **The app may already have this.** `MOODS` includes "Tired", asked on every
   report. A nurse reading a head-injury report already sees it. Adding item 13
   as a follow-up may be asking the same child the same thing twice.
2. **This is the symptom least suited to self-report.** A child who is becoming
   drowsy is the child least able to notice and say so. Item 13 is useful
   context, but a "no" here means much less than a "no" elsewhere, and the
   nurse side should not treat it as reassurance.

## The fall-height problem

All three rules use a height threshold, and **all three disagree**:

| Rule    | Threshold |
|---------|-----------|
| CATCH   | ≥ 0.9 m (3 ft) or 5 stairs |
| PECARN  | > 1.5 m (5 ft) for ages 2+ |
| CHALICE | > 3 m |

A child cannot estimate height, and picking one threshold would silently pick a
rule. So item 6 asks **what they fell off** — "the top bunk", "the monkey bars",
"five stairs" — and the nurse maps it. The child never sees a threshold, and the
report stays useful whichever rule the nurse works from.

## Non-accidental injury — a deliberate exclusion

CHALICE lists suspicion of NAI as a criterion. It is defined as a judgement by
the examining doctor, and **this app must never ask a child about it.** Recorded
here so the exclusion is a documented decision rather than an oversight, and
flagged specifically for the clinical reviewer — a child reporting symptoms
unsupervised is a context where safeguarding policy, not question design, is the
right instrument.

## Wording cautions

- **"Did you black out?" is banned as a phrasing.** Item 4 covers the same
  ground by asking about memory.
  *Review decision, 2026-08-30:* candidate h-005 — "Did everything go dark for
  a bit?" — was accepted despite asking the same thing in different words. The
  caution stands for generation; this specific wording was reviewed and kept.
  Recorded here so the bank and the packet do not silently disagree.
- **Never ask a child to classify severity** ("was it a bad fall?"). They rate
  the word, not the event.
- **Item 10 must not become "is anything coming out of your ear?"** — that is
  asking a child to detect a fracture sign.
- Avoid "serious", "dangerous", "bad" throughout this group.

## How these were found

PECARN was recalled, then verified. CATCH and CHALICE were **missed** by recall
and surfaced only by searching for comparison studies of paediatric head injury
decision rules. Discovery for every other packet should start with comparison
and validation literature, and treat any remembered rule name as a hint to
check rather than a list to work from.

## Diminishing returns — note for scaling

The first rule (PECARN) produced 3 clean items. Adding two more rules and ~14
further criteria produced **one new question** (item 2) and **one refinement**
(item 1 becoming a count). Worth knowing when budgeting the other packets: two
good sources probably suffice, and the third mostly confirms.

## Decisions

Every packet must **decide** these, not defer them. A generator reading an
unresolved question will improvise, and improvisation is the thing this whole
process exists to remove. Anything genuinely undecided belongs in "Still open"
below, and a generator must be told to skip it.

1. **Register: US English.** "Throw up", never "be sick" — `vocab.js` already
   ships `Did you throw up?`, and in British usage "been sick" also means
   *feeling* unwell, which collides with item 14.
2. **Item 1 is asked as yes/no, not a count.** Reviewed 2026-08-30. This drops
   CHALICE's ≥3 boundary; PECARN's binary still backs the question, and the
   app renders yes/no today. Cost accepted knowingly.
3. **Item 3 is not asked as a severity question.** Asking a child to rate
   severity is banned by the wording cautions, and the FPS-R screen already
   captured it. Ask *functional interference* instead — "does your head hurt
   too much to play?" — which is a different fact and duplicates nothing.
4. **Item 5 (loss of consciousness) prefers witness-routing.** Do not ask a
   child to self-report being unconscious; ask what a grown-up told them. The
   ban on "did you black out?" is a ban on the **concept** of self-reported
   LOC, not on one phrasing. *Recorded exception:* candidate h-005 ("did
   everything go dark for a bit?") was reviewed and kept on 2026-08-30 despite
   this rule.
5. **Duration scope.** All three rules are *acute*. This packet applies in
   full to `just-now`, `this-morning`, `yesterday` and `not-sure`. For
   `few-days` and `long-time`, **only item 2 (trajectory) applies** — a child
   presenting a week later is outside the window these rules were derived in,
   and the remaining items should not be generated for those bands.
6. **Item priority, and one question per item.** More questions now qualify
   than fit on a child's screen (11 apply to `just-now`; four is the maximum a
   young child works through attentively). So: never ask two questions from the
   same item, and prefer items in this order —

   `6 (what happened) → 1 (vomiting) → 2 (getting worse) → 4 (amnesia) →`
   `5 (LOC) → 7 (seizure) → 3 (function) → 13 (sleepy) → 14 (nausea)`

   Mechanism leads because it cannot be inferred from anything else the app
   collects and it is what the nurse maps against the fall-height thresholds.
   **Proposed, not yet confirmed by review** — this ordering decides what a
   child is actually asked, so it deserves a deliberate look.

7. **"not-sure" means the child cannot date the injury**, not that the injury
   is old. Old injuries go to `long-time`.

## Still open
- Item 13 may duplicate the MOODS "Tired" answer collected on every report.
  Unresolved — needs a look at whether the nurse view shows both.
