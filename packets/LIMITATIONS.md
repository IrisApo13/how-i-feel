# What these packets are, and what they are not

**Read this before using anything in `packets/` for any purpose beyond
reviewing the app it was built for.**

## What they are

Structured summaries of published clinical assessment criteria for common
childhood presentations, filtered to those a child aged 4-12 could plausibly
report about themselves. Each numbered item names the source it came from.

They exist to decide **what questions a symptom-reporting app asks a child**.

## What they are not

- **Not clinically validated.** No packet has been reviewed by a clinician. The
  status line at the top of each one says so, and none should be read as
  agreed, endorsed, or checked by anyone with clinical training.
- **Not a diagnostic tool, decision aid, or triage instrument.** They contain no
  scores, thresholds for action, or condition predictions, and the app they
  serve deliberately produces none. Criteria drawn from scoring systems were
  harvested for the *variables clinicians assess*, never to reproduce the score.
- **Not a medical device**, and not built to any standard that would make one.
- **Not a substitute for clinical assessment**, and not safe to use as a
  checklist at the bedside.

## How they were produced

1. An LLM agent, following `scripts/packet-brief.md`, searched for comparison
   and validation literature, then for a guideline organised by the presenting
   complaint.
2. It fetched open-access sources via `scripts/fetch-source.mjs` and extracted
   criteria **verbatim** from the fetched text.
3. It judged each criterion child-reportable or not, and recorded the reasoning.
4. A secondary-school student — the app's author, not a clinician — reviewed
   the resulting questions and accepted or rejected each one, with reasons
   recorded in each packet's `candidates.json`. A second author pass on
   2026-09-06 resolved which wording leads where two were accepted for the same
   item, corrected duration scopes, and raised the follow-up cap. **This is the
   only review any of this has had, and it is the same person who commissioned
   the packets.**

**No step involved a clinician.** Steps 1-3 were performed by a language model.
Verbatim extraction means quotations are reliable; it does not mean the
selection, interpretation, or omission of criteria has been checked.

## Known weaknesses a reader should not have to hunt for

- **Some citations are at one remove.** Where a source could not be fetched, the
  packet says `CITED, NOT READ` and the claim rests on another paper's account
  of it. `earache` states that its single most consequential claim came from a
  commercial protocol's paraphrase of a study this pipeline could not read.
  `chest-breathing` read seventeen severity scores at one remove.
- **The evidence for child self-report is thin and narrow.** The best available
  agreement data are small, non-emergency, and unrepresentative — for head
  injury, 157 male youth football players aged 8-12; for abdominal pain, 121
  girls aged 9-13 with chronic pain. **Nothing found supports a 4-to-7 year old
  reporting these symptoms reliably**, and the app's floor is 4.
- **Age floors mix two different things.** Some come from a source (NG232:
  amnesia cannot be assessed under 5). Others are the packet's own reasoning and
  are marked `JUDGEMENT, NOT A CITATION`. Do not treat them alike.
- **Item priority orderings are unreviewed proposals.** They decide which
  questions a child is actually asked — the top five of the order for a 4-7
  year old, the top six for an 8-12 year old — and every packet marks them
  *"Proposed, not yet confirmed by review."* Items ranked below the cutoff are
  reached by no child at all, so an ordering error silently removes a question
  rather than merely demoting it.
- **Exclusions are as important as inclusions and were also unreviewed.**
  Examination findings, observer judgements, and safeguarding items were
  deliberately excluded; those decisions are recorded but unchecked.

## If you are a clinician reading this

The most useful thing you could do is challenge the **child-reportable** column.
That single judgement — can a child of this age report this about themselves —
determines everything the app asks, and it is the least evidenced part of the
work. The second most useful is the item priority order in each packet's
Decisions section.

## Status

**No clinical review has taken place**, and none is currently planned — the
reviewer is the app's author. Author review is a real check on wording, scope
and priority; it is not a check on whether the clinical selection is right, and
nothing in this repository should be described as clinically reviewed,
validated, or *"scientifically backed"* on the strength of it.

The defensible claim is narrower and still worth making: **every question traces
to a numbered item in a packet, every item traces to a published source, and
this file lists what has not been checked.**

If a clinical review does happen, record the reviewer, date, and scope at the
top of each packet, and update this file.
