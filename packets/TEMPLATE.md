# <Presenting complaint>

Presenting complaint · serves group `<group>` · packet v1 · assembled <date>
Status: **not yet clinically reviewed** · sources verified first-hand: <n> of <m>

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

> Source material for writing questions. Lists what clinicians assess for this
> complaint, and marks which of those a child can report about themselves.
> **Not** a diagnostic tool: nothing here may be scored, summed, or shown to a
> child or nurse as a suggested cause.

## Scope

App covers ages 4-12. State here what that excludes — rules or criteria written
for infants, adults, or a different care setting are out of scope and must not
be carried into the items table.

## Sources

Number each. For every source record: full citation, whether it was **read
first-hand** or merely cited, and where it was obtained. A source that could not
be fetched is recorded as unread, and nothing may depend on it.

## The rule(s), as published

Quote the criteria verbatim. Include the supporting definitions the source
gives (thresholds, what a term means), because question wording depends on them
and paraphrase loses the detail.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|

`Child-reportable` is the column that does the work:

- **yes** — a child of the app's age range can answer it about themselves
- **partial** — they can contribute something, but not the whole criterion
  (they can describe a fall; they cannot classify it as "severe")
- **no — observer / exam** — belongs to the nurse. Never becomes a question.

Add an age floor where a source gives one.

Close with: **Yield: N criteria → X clean, Y partial, Z excluded.**

## Excluded, and why

Say plainly why each excluded item is excluded. This is the record that the
exclusions were decisions rather than oversights.

## Wording cautions

Phrasings that must never reach a child, and why. Ban **concepts**, not single
phrasings — a generator told "never say X" will find a synonym.

## Decisions

**Decide these. Do not defer them.** A generator reading an unresolved question
will improvise, and improvisation is what this process exists to remove.
Anything genuinely undecided goes in "Still open" below, and the generator is
told to skip it.

At minimum every packet must settle:

1. **Register** — US English; match wording the app already ships.
2. **Answer types** — which items are yes/no, count, text or voice.
3. **Duration scope** — which bands this packet applies to. Acute decision
   rules do not describe a child presenting three weeks later.
4. **Item priority** — more questions will qualify than fit on screen (four is
   the most a young child works through). Rank the items, and never ask two
   questions from the same item.
5. **Redundancy** — check every item against what the app already collects:
   body region, depth, intensity, duration, sensations, mood. The commonest
   reject reason, and the automated screen cannot catch it.

## Still open

Genuinely unresolved questions, for the clinical reviewer.
