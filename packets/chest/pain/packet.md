# Chest pain

Presenting complaint · packet `chest-pain` · serves group `chest`, depth
**`inside`** · packet v1 · research run 2026-09-08 · **prose reconstructed
2026-09-09**
Status: **not yet clinically reviewed** · sources verified first-hand *in this
reconstruction*: **6 of 7**

> ### RECONSTRUCTED PROSE — READ THIS FIRST
>
> **This file is not the original packet.** The stage-1 research run for
> `chest-pain` was killed by a session limit on **2026-09-08**, after it had
> written a complete `meta.json` and **before it wrote a single line of
> `packet.md`**. This file was rebuilt on **2026-09-09** from two things only:
> the surviving sidecar, and the source texts still in `packets/.sources/`.
>
> **`packets/chest/pain/meta.json` — not this file — is the primary artifact
> for this packet.** Where the two could disagree, the sidecar wins; it is also
> the only thing `scripts/build-bank.mjs` reads. This file exists so that the
> eleven ranked items and thirty-nine citation strings in that sidecar are
> readable and auditable by a human, which until now they were not.
>
> **What was lost, and could not be reconstructed.** The sidecar refers by
> number to eleven decisions (1, 3, 4, 5, 6, 8, 9, 10, 11 are cited by name;
> 2 and 7 are implied by the numbering and referenced nowhere). Their *text*
> lived in the missing prose. Seven of them are recoverable in substance from
> the sidecar's `*Note` fields; **decisions 2, 6, 7 and 11 are not**, and the
> Decisions section below says exactly which is which rather than inventing a
> plausible argument. The most consequential loss is **decision 6, the
> exclusion of palpitations** — see "What weakens this packet most", below.
>
> Nothing in the reconstruction re-does the research. No source was fetched.
> No claim below is stated unless it is traceable to the sidecar or to a cached
> source that was actually opened in the course of writing this file.

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


> Source material for writing questions. Lists what clinicians assess in a child
> who arrives with chest pain, and marks which of those a child can report about
> themselves. **Not** a diagnostic tool: nothing here may be scored, summed, or
> shown to a child or nurse as a suggested cause.

## What weakens this packet most

Five things, strongest first. The first is new; the rest are the original run's,
transcribed.

**1. The prose was lost and rebuilt a day later.** Everything above. In
practice this means: the *citations* are as strong as they ever were — 231 of
the 241 verbatim quote fragments in the sidecar were re-checked character by
character against the cached source texts while writing this file, and every
one of them is really in the source it is attributed to. What is weaker is the
*argument*. Four decisions survive only as a verdict with no recorded reasoning,
and a verdict without reasoning cannot be reviewed, only accepted or overturned.

**2. The single most important instrument here does not trust the answer.** The
AHA 14-element screen (source 5) heads its own list: *"Medical history (Parental
verification recommended for high school and middle school athletes)"*. That is
not an age floor — it is the instrument stating that it does not trust
unverified self-report **at any age it covers**, and every age it covers is
above this app's. Items 1 and 3, the two cardiac red flags this packet leads
with, are AHA elements 1 and 2. No floor fixes this; the sidecar considered a
floor derived from it and rejected it for exactly that reason
(`minAgeNotes`). **A "no" from a child on items 1 or 3 is not a negative
finding.** The sidecar records that this belongs near the top of the packet in
the packet's own words; this paragraph is that instruction being honoured.

**3. Palpitations — a canonical red flag — is excluded, and nobody can now say
why.** Cite entry 16 carries the criterion from five sources (RCH, Sheffield,
SCAMP, Fogliazza, CHOP) and then rules: *"EXCLUDED as a question — JUDGEMENT,
NOT A CITATION. See decision 6."* Decision 6 is gone. The paediatric chest-pain
literature exists to catch four things — exertional pain, exertional syncope,
palpitations, and family history of sudden cardiac death. This packet asks the
first two, correctly refuses the fourth as the nurse's, and drops the third with
its reasoning unrecorded. **JUDGEMENT, NOT A CITATION, and mine, not the
original run's:** a plausible reconstruction exists (a child has no lay word for
palpitations; "does your heart race?" would breach this packet's own ban on
naming the heart) — but it is *my* reconstruction and it is written here as a
hypothesis for the reviewer, not as the record. The reviewer should treat item
16 as genuinely open.

**4. One source is cited and was never read.** CHOP (source 6) is not in
`packets/.sources/` and was not fetched for this reconstruction. Ten quote
fragments across nine cite entries (1, 3, 6, 12, 15, 16, 17, 18, 32) rest on it.
**Nothing depends on it alone**: every one of those nine entries carries at
least one other quotation that was verified first-hand. It is corroborating
weight, and it should be read or removed before review.

**5. The chest is one region and the app never learns which side.** `REGIONS` in
`src/data/bodyMap.js` holds a single `chest` entry with no laterality and no
sub-regions. RCH names *"Unilateral chest pain"* under pleural effusion and
Fogliazza *"Severe, sharp, unilateral chest pain"* for the musculoskeletal
causes. Item 5 recovers the *point* by asking the child to show it; **nothing
recovers the side.** Carried forward in Still open.

## Scope

**Age: 4–12.** The sidecar records that **no age floor is set on any item**, and
that the empty `minAge` object is a decision rather than an omission. Three
candidate floors were considered and all three rejected — see Decisions.

**Out of scope by age and setting.** SCAMP (source 3) enrolled *"All patients
between 7 and 21 years of age"*; most of its cohort is above this app entirely.
The AHA 14-element screen is a pre-participation sports screen for high-school
and middle-school athletes. Neither is carried as a floor, for the reason in
`minAgeNotes`: the same criteria are plain history in RCH and Sheffield, which
set no floor, and Alnaim 2023 (source 7) studied children under 14 with a
*"mean age of 9.1±2.7 years"* and reports in bands starting *"1-5"*.

**Depth: `inside`.** `GROUP_DEPTH.chest` is `'ask'` in `src/data/bodyMap.js` and
`GROUP_GATE.chest` is `[{ key: 'depth', type: 'depth' }]` — verified in this
reconstruction at `bodyMap.js` lines 362 and 378. The child is genuinely asked
"on your skin, or inside?", so `"depth": "inside"` is a claim the app tests.
**Chest-wall tenderness reached by pressing belongs to the `surface` branch and
is out of scope here** — see decision 8.

**No mechanism gate.** `GROUP_GATE.chest` contains the depth gate and nothing
else, so `mechanisms.chest` is always null and `"mechanism": null` in the
sidecar is inert *today* by construction. It is null deliberately, not by
default — see Decisions.

**Adjacent and deliberately not covered:** difficulty breathing and cough, which
is the sibling packet `chest-breathing` serving the same group at the same
depth; anything reached by pressing on the chest wall (`surface`); anaphylaxis;
every drug, dose, investigation and flow chart, which is most of what these
guidelines are about.

## Sources

Numbered as the sidecar numbers them. "Verified first-hand in this
reconstruction" means the cached text was opened and the sidecar's quotations
were confirmed present in it.

1. **The Royal Children's Hospital Melbourne.** *Clinical Practice Guideline:
   Chest pain.* **Read first-hand** — cached at
   `packets/.sources/www.rch.org.au_clinicalguide_guideline_index_chest_pain_-42e0dfc5.txt`
   (a byte-identical copy is cached as `…index_Chest_pain_.txt`). Quotations
   confirmed by targeted windows. **The spine of this packet**: 30 of the 39
   cite entries quote it, and it is the only source that is organised as a
   differential table of *causes* rather than a red-flag list.
2. **Sheffield Children's NHS Foundation Trust.** *Medical Emergencies*
   handbook, **section 3.45 CHEST PAIN** (written by Dr S Ramlakhan; reviewed
   Dr K Burgess, Dr D Turner). **Read first-hand** — cached at
   `packets/.sources/www.sheffieldchildrens.nhs.uk_download_1720_medical-emergencies_64159_-3da52889.txt`.
   The A–I structured sections (`C: RISK FACTORS`, `D: RED FLAGS FOR CARDIAC
   DISEASE`, `E: EXAMINATION`, `I: ECG TIPS`) were confirmed present.
3. **SCAMP / Verghese GR et al. 2012.** *Standardized Clinical Assessment and
   Management Plan* for paediatric chest pain. **Read first-hand** — cached at
   `packets/.sources/www.ncbi.nlm.nih.gov_pmc_articles_PMC3487367_-d695e45a.txt`.
   Its cohort exclusion (*"Children with a known history of heart disease"*) was
   confirmed and is load-bearing for cite entry 27.
4. **Fogliazza et al. 2024.** Review of chest pain in children. **Verified
   first-hand by exact-string match** against
   `packets/.sources/pmc.ncbi.nlm.nih.gov_articles_PMC11594360_-b68b71dc.txt`.
   Every quotation attributed to it, including all Table 1 rows, was found
   verbatim. **Caveat:** this reconstruction confirmed the *strings*; it did not
   read windows of surrounding context, so the *use made* of those strings is
   the original run's judgement, unre-examined.
5. **AHA 14-element screening** (Maron BJ, *Circulation* 2014), as reproduced by
   Stanford Medicine. **Read first-hand, and read whole** — the document is 1,371
   characters. Cached only as a PDF
   (`packets/.sources/med.stanford.edu_content_dam_sm_ppc_documents_HSupervision_AHA_14-poin-9ca70dfe.pdf`);
   **there is no cached `.txt` sidecar**, which means the original fetch's text
   extraction failed and the original run must have read it some other way. It
   was re-extracted with `pypdf` for this reconstruction and all fourteen
   elements confirmed. Elements 1, 2, 3, 6, 7 (personal history), 8–10 (family
   history) and 11–14 (physical exam) are all as the sidecar quotes them.
6. **CHOP** (Children's Hospital of Philadelphia) concerning-history and
   concerning-examination lists. **CITED, NOT READ.** Not present in
   `packets/.sources/`; not fetched for this reconstruction. **What depends on
   it:** ten quote fragments across cite entries 1, 3, 6, 12, 15, 16, 17, 18 and
   32 — *"Exertional"*, *"Syncope, dizziness"* (twice), *"Orthopnea"*,
   *"Dyspnea"*, *"Palpitations"*, *"Radiation to shoulder, arm, neck, jaw"*,
   *"Substernal crushing pressure"*, *"Drug use"*, *"Medication use"*. **None of
   the nine entries rests on it alone.** The sidecar itself marks it `CITED, NOT
   READ FIRST-HAND` at every occurrence, which is the correct behaviour and is
   why this gap is a weakness rather than a failure. It also has no formal
   citation in the sidecar — no author, year, or URL — so it cannot be fetched
   from the record as it stands.
7. **Alnaim 2023.** Paediatric chest pain, children under 14. **Verified
   first-hand by exact-string match** against
   `packets/.sources/www.ncbi.nlm.nih.gov_pmc_articles_PMC10893581_-80ef4fa7.txt`.
   *"mean age of 9.1±2.7 years"* confirmed. Cited in exactly one place (cite
   entry 39, age) and in `minAgeNotes`, where it is the counterweight to
   SCAMP's 7-year enrolment floor. **Same caveat as source 4**: strings
   confirmed, context not re-read.

**Search A / Search B, as far as it can be told.** The sidecar does not record
which search produced which source, and the prose that would have said so is
gone. **JUDGEMENT, NOT A CITATION:** by shape, sources 3, 4 and 7 look like
Search A (a validation study, a review, a cohort) and sources 1, 2 and 5 like
Search B (two complaint-organised guidelines and a screening instrument). This
is inference from the source types, not a recovered statement, and the reviewer
should not rely on it.

## The rule(s), as published

The sidecar's `cite` entries *are* the verbatim extraction; this section does not
duplicate all thirty-nine. What follows is the material the top-ranked items
turn on, quoted as the sidecar quotes it, with every fragment confirmed present
in the cached text.

**Exertional chest pain — the one criterion every source names.**

- RCH (1), History: *"Reproducibility (consider exertional or positional)"*;
  arrhythmia row: *"Palpitations / Exertional chest pain / Syncope /
  Dizziness"*; exercise-induced asthma row: *"Exercise induced chest pain with
  dyspnoea/cough"*.
- Sheffield (2): *"D: RED FLAGS FOR CARDIAC DISEASE … ask specifically about
  these things in the history: … EXERTIONAL SYNCOPE and/or CHEST PAIN with or
  without PALPITATIONS"*.
- SCAMP (3): *"pertinent positive clinical history included whether the pain was
  associated with exertion or exertional syncope"*.
- Fogliazza (4), Table 1 row 1: *"Exertional chest pain, syncope"*; and
  *"Identifying alarm signs, such as chest pain associated with exertion,
  syncope, palpitations, or a family history of cardiac disease, is crucial"*.
- AHA (5), Personal History element 1: *"Exertional chest pain/discomfort"*;
  element 2: *"Exertional syncope or near-syncope"*.
- CHOP (6, **CITED, NOT READ**): *"Exertional"*.

**Pain worse on breathing in — the criterion for the children who actually
arrive.**

- RCH (1): *"Quality (crushing central chest pain or worse with inspiration)"*;
  muscle strain / trauma: *"Worse with movement or deep breathing"*,
  *"Reproducible with palpation, movement, deep breathing"*; costochondritis:
  *"Reproducible with palpation, movement or deep breathing"*; and *"Pleuritic
  pain"* under both pulmonary embolus and pleural effusion.
- Sheffield (2), MUSCULOSKELETAL: *"Well localised, reproducible with palpation,
  worse with movement/coughing/inspiration"*; PNEUMONIA: *"Sharp, localised,
  worse with inspiration/coughing"*.
- Fogliazza (4): *"quality of the pain (e.g., crushing central chest pain or
  pain that worsens with inspiration)"*.

**Night pain — the one question that earns its slot twice.**

- RCH (1), osteomyelitis / bone neoplasm row: *"Localised chest pain / Can be
  subacute or chronic pain / Night time pain or awakening from sleep / Pain
  persisting after minor trauma / May be well clinically"*.
- Sheffield (2): *"CXR - acute onset severe pain, pain waking from sleep,
  history of FB ingestion"*.
- RCH (1), precordial catch row: *"Onset can be during rest or activity but not
  during sleep"* — so a **no** is a reassurance finding and a **yes** is a red
  flag, from one question.

**How common the benign causes are, and why item 2 sits second.** Fogliazza (4)
gives the base rates the packet is built around, and its Table 1 maps
*"Severe, sharp, unilateral chest pain"* to *"Musculoskeletal causes (e.g.,
precordial catch syndrome, costochondritis)"*. RCH's own key points frame the
whole guideline as ruling out serious causes of a pain that is cardiac in a
small minority of children.

**Transcription notes — differences between the sidecar's rendering and the
source's own punctuation, found while checking.** None changes a meaning; all
are recorded so a future checker does not read them as fabrication.

| Cite | Sidecar renders | Source actually reads |
|------|-----------------|-----------------------|
| 4 | `"C: RISK FACTORS: CHEST WALL TRAUMA - consider …"` | `C: RISK FACTORS` heading, then a bullet: `• CHEST WALL TRAUMA – consider …` (en dash), wrapping across a line before `contusions, mediastinal disruption` |
| 16 | `"Associated presyncope/syncope/palpitations"` | `Associated presyncope/` + line break + `syncope/palpitations` |
| 30 | `"Other: Breast tenderness / …"` | `Breast tenderness Localised to breast tissue area …` — `Other:` is the sidecar's row label, not the source's words |
| 35 | `"… dermatome that does not [cross the midline]"` | `… dermatome that does not cross midline` — the bracketed reconstruction is close but not the source's phrasing, and the real words were recoverable |
| 3 | `"Exertional syncope or near-syncope"` | present in AHA element 2; the cached PDF encodes the hyphen as a soft-hyphen pair, which is why a naive string search misses it |

## Assessment items

Items 1–11 are **proposed**; the sidecar assigns each a `fact`, a `cite` entry
and a position in `itemRank`. Items 12–39 are not proposed, and the reason is
given per row.

**Ordering: *Proposed, not yet confirmed by review.***

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1 | **Does it get worse when you run around or play** | RCH (1) *"Reproducibility (consider exertional or positional)"*, *"Palpitations / Exertional chest pain / Syncope / Dizziness"*, *"Exercise induced chest pain with dyspnoea/cough"*; Sheffield (2) *"EXERTIONAL SYNCOPE and/or CHEST PAIN with or without PALPITATIONS"*; SCAMP (3) *"whether the pain was associated with exertion or exertional syncope"*; Fogliazza (4) *"Exertional chest pain, syncope"*; AHA (5) element 1 *"Exertional chest pain/discomfort"*; CHOP (6, **CITED, NOT READ**) *"Exertional"* | **yes** | **The flagship, and the reason this packet leads the chest round-robin.** The only criterion named by all six sources. Fact `worse-on-exertion`, **shared with `chest-breathing`** — see Decisions. Ships to nobody today: the fact is 7th in `chest-breathing`'s `itemRank` (verified), below the cap of 5/6. Wording is fixed by decision 1 to *"run around or play"*, matching the hand-written `chest-worse-move`. **A "no" here is not a negative finding** — see weakness 2. |
| 2 | **Does it hurt more when you breathe in** | RCH (1) *"Quality (crushing central chest pain or worse with inspiration)"*, *"Worse with movement or deep breathing"*, *"Reproducible with palpation, movement or deep breathing"*, *"Pleuritic pain"*; Sheffield (2) *"Well localised, reproducible with palpation, worse with movement/coughing/inspiration"*, *"Sharp, localised, worse with inspiration/coughing"*; Fogliazza (4) *"pain that worsens with inspiration"* | **yes** | **The best-attested criterion for the population that actually arrives**, and the packet's only strong *reassurance* item inside the cap. Fact `worse-breathing-in`, **coined** — deliberately not `hard-to-breathe`, which is a different finding that RCH names separately, and reusing it would let one suppress the other. Decision 1 fixes *"when you breathe in"* and **never** *"take a deep breath"*: the criterion is a pattern already noticed, not a manoeuvre to perform. |
| 3 | **Do you ever feel like you might fall over when you run around** | AHA (5) element 2 *"Exertional syncope or near-syncope"* — **the near-syncope half only**; RCH (1) *"Associated dizziness or syncope"*, arrhythmia row; Sheffield (2) *"EXERTIONAL SYNCOPE and/or CHEST PAIN"* and *"All patients with exertional syncope, or collapse associated with palpitations and/or chest pain MUST be discussed with the medical registrar and/or the cardiology for review PRIOR to discharge from ED."*; Fogliazza (4) Table 1; CHOP (6, **CITED, NOT READ**) *"Syncope, dizziness"* | **yes** | **A split from a criterion, not a reclassification** (decision 5). The child is *awake* for near-syncope; they are not awake for syncope. **The frank-syncope half is not cited for this item and must never be**: `screen.mjs` bans "passed out" globally (line 20, verified), `head/injury` bans self-reported loss of consciousness, `general/unwell` bans asking a child whether they passed out. Fact `faint-on-exertion`, **coined** — must not reuse `worse-on-exertion`, because RCH lists exertional pain and syncope as separate rows of one arrhythmia block and sharing would let a "no" on one silence the other. Ranked third, and the sidecar calls it the packet's most contested item. |
| 4 | **Did you bump it or hurt it** | RCH (1) *"Recent injury"*, *"Recent trauma"*, *"Bruising"*, *"Blunt chest trauma"*; Sheffield (2) *"CHEST WALL TRAUMA - consider pneumothorax, haemothorax, cardiac or pulmonary contusions, mediastinal disruption"*, *"CXR - … chest wall trauma"*; Fogliazza (4) *"bruising could indicate trauma, warranting further investigation into potential intrathoracic or extrathoracic injuries"* | **yes** | Reuses `bumped-it` from `skin/rash` r-024, whose wording is already region-neutral and whose depth is `surface`, so it is unreachable from chest/inside and cannot collide. **This item is where the null `mechanism` lands**: chest asks no mechanism gate, so the raw trauma fact is captured as a question and the nurse classifies it. Drops the `long-time` duration band (see Decisions). **Argued and rejected:** promoting it into the top three, because a trauma answer here arrives as one yes/no among several rather than as a routing decision. |
| 5 | **Can you point to where it hurts** | RCH (1) *"Localised area of chest pain"*, *"Localised area or muscle groups of tenderness"*, *"Pin point area to 2 or 3 adjacent ribs"*, *"Reproducible localised pain"*, *"Localised chest pain"*; Sheffield (2) *"Well localised"*, *"Sharp, localised"*; Fogliazza (4) *"tenderness to palpation and well-localized pain might suggest a musculoskeletal cause"*, Table 1 *"Severe, sharp, unilateral chest pain — Musculoskeletal causes …"* | **yes** | **Not redundant with the body map.** `chest` is a single region in `bodyMap.js` with no sub-regions and no laterality (verified), so the app collects the *area* and never the *point*. Fact `pinpoint-pain`, **coined**. Decision 1: *"point to"* or *"show me"*, **never** *"press on"* or *"touch"* — the self-examination line. |
| 6 | **Is it worse when you lie down** | RCH (1) *"Retrosternal chest pain / Pain improved by sitting upright or leaning forward"*, *"Refusal to lie on one site"*; Sheffield (2) *"Known CTD, recent cardiac surgery, preceding viral illness. Sharp pain, worse on lying down."*; SCAMP (3) the pain *"increased with supine position"*; CHOP (6, **CITED, NOT READ**) *"Orthopnea"* | **yes** | Fact `worse-lying-down`, **coined**. The sidecar rules that if `chest/breathing`'s item 12 (currently not-proposed, same construct) is ever promoted, **it must adopt this slug** rather than coin a second. Decision 1 fixes *"lie down"* and *"sit up"* — which is why "lie-down" is deliberately absent from the British-idiom ban. |
| 7 | **Does it wake you up at night** | RCH (1) *"Localised chest pain / Can be subacute or chronic pain / Night time pain or awakening from sleep / Pain persisting after minor trauma / May be well clinically"*; Sheffield (2) *"CXR - acute onset severe pain, pain waking from sleep, history of FB ingestion"*; RCH (1) precordial catch *"Onset can be during rest or activity but not during sleep"* | **yes** | **Double-earned, and that is why it is proposed rather than borrowed.** One question, one source, two findings: a *yes* is the bone-lesion red flag, a *no* is the precordial-catch discriminator. Reuses `night-pain`, which `back/pain` b-001 and `limb/pain` l-013 **already share across two regions** with identical region-neutral wording *"Does it wake you up at night?"* (b-001 verified). Drops the `just-now` duration band. |
| 8 | **Did something go down the wrong way** | RCH (1) *"History of ingested foreign body"*, *"Suspicion button battery ingestion"*, *"Food impaction"*; Fogliazza (4) Table 1 *"Associated abdominal pain — Gastrointestinal disorders (GERD, esophageal foreign body, gastritis) — Foreign body ingestion <2% of chest pain cases in children"* | **yes** | **Shared with `chest-breathing` item 9 deliberately**, and the sharing is the point: that item is 10th in its packet's `itemRank` (verified) and ships to nobody, so sharing is the *only* mechanism by which a criterion RCH lists under CHEST PAIN becomes reachable at all. `chest-breathing`'s own citation for the same fact is RCH AUAO and RCH Cough — respiratory sources; **this entry is the chest-pain warrant for it.** |
| 9 | **Does it hurt more after you eat** | RCH (1) *"Heartburn / Non-specific chest pain / Epigastric discomfort or pain / Recurrent vomiting / Odynophagia / Food refusal"*, *"Chest pain after vomiting"*; Sheffield (2) *"Retrosternal, epigastric, burning/sharp, exacerbated by eating/posture, associated heartburn/waterbrash/dysphagia"*; Fogliazza (4) Table 1 *"Persistent/recurrent vomiting — Gastroesophageal reflux disease (GERD), esophagitis … GERD common in children with non-cardiac chest pain (~5-8%)"* | **yes** | Fact `worse-after-eating`, **coined** — deliberately **not** `eating-drinking`, which is `chest/breathing` item 7 and establishes whether the child *can* eat: the opposite construction. |
| 10 | **Do you play sports or dance** | RCH (1) *"Recent overuse (ask about activities, hobbies, jobs)"*; Fogliazza (4) *"It is also crucial to inquire about sports activities, any limitations in physical performance, unilateral exertion, and any new or unusual physical strain"* | **yes** | **A guideline and a review both instructing the clinician to ask the patient about their own activities** is the strongest self-report warrant available for any item in this packet. Reuses `sport-activity` from `back/pain` b-023, verified as *"Do you play sports or dance?"* — it establishes a property of the **child**, not of a body part, which is the case `PLAN.md`'s rule admits for merging. |
| 11 | **Were you unwell recently** | RCH (1) *"Recent illness or vaccination (eg myopericarditis secondary to COVID-19 mRNA vaccination)"*, myocarditis row *"Non-specific symptoms mimicking respiratory disease or sepsis"* and viral triggers *"parvovirus, influenza"*; Sheffield (2) PERICARDITIS *"preceding viral illness"* | **yes** | **The vaccination half is not carried and is cited for no question**: dose, date and product are the carer's and the record's, and RCH's own window — *"Recent (1-14 days post) mRNA vaccine received"* — is a date a child does not hold. Reuses `recent-illness` from `skin/rash` r-020/r-021 (depth `surface`, unreachable from here). |
| 12 | Shortness of breath, dyspnoea | RCH (1) *"Associated symptoms (eg dizziness, shortness of breath, palpitations)"*, *"Exercise induced chest pain with dyspnoea/cough"*, *"Dyspnoea"*; Fogliazza (4) Table 1 *"Sudden-onset chest pain with dyspnea"*, *"Cough, fever, difficulty breathing"*; CHOP (6, **CITED, NOT READ**) *"Dyspnea"* | **yes — already collected** | Asked by `chest/breathing` item 1 (`hard-to-breathe`, bank `c-001`, its rank 0 — verified). The round-robin gives the trailing packet slot 2, so this reaches every chest-inside child under either packet ordering. No candidate written. |
| 13 | Cough | RCH (1) *"Chronic cough"* (cough as the **mechanism** of chest-wall pain), *"Fever Cough Increased WOB Lethargic"*; Sheffield (2) *"worse with inspiration/coughing"*; Fogliazza (4) Table 1 *"Cough, fever, difficulty breathing"* | **yes — already collected** | Asked by `chest/breathing` item 4 (`cough`, bank `c-007` — verified). No candidate written. |
| 14 | Fever | RCH (1) *"Fever"*, *"Fever >48 hrs despite antibiotics"*; SCAMP (3) whether the pain *"was temporally associated with fever"*; Fogliazza (4) Table 1 *"… Pneumonia frequency ~3-9% in pediatric chest pain presentations"*; Sheffield (2) *"cough/fever where pleural effusion suspected"* | **yes — not proposed** | **A real hole, and it is flagged rather than filled.** `feels-feverish` exists twice — `chest/breathing` item 14 (`c-023`) and `general/unwell` item 1 (`g-001`) — and **neither reaches a chest-only child**: `c-023` is last in its packet's `itemRank`, and `g-001` is cross-cutting, so `build-bank` exhausts home-group packets before it (all verified). Decision 9: this packet **declines to use `packetRank` to lift a fact that two prior reviews both ranked last**. See Still open. |
| 15 | Dizziness | RCH (1) *"Associated dizziness or syncope"*, *"Dizziness"*, *"Dizziness or syncope"*; Fogliazza (4) Table 1 *"Dizziness, palpitations — Arrhythmias, including long QT syndrome"*; CHOP (6, **CITED, NOT READ**) *"Syncope, dizziness"* | **yes — already collected** | `SENSATIONS.dizzy` ships as "Dizzy / Spinny", tiers young **and** older, depths `[inside]` (verified, `vocab.js` line 52) — offered to every chest-inside child before any follow-up fires. **`fuzzy-feeling` is NOT this fact and must never be repurposed for it** (decision 10). Confirmed in this reconstruction: `back/pain` b-010/b-011 are *"Does your leg feel like it went to sleep?"* and *"Does anywhere feel fuzzy or funny?"* — paraesthesia, not dizziness. |
| 16 | **Palpitations** | RCH (1) *"Feelings of palpitations"*, *"Palpitations"*, *"Associated symptoms (eg dizziness, shortness of breath, palpitations)"*; Sheffield (2) *"EXERTIONAL SYNCOPE and/or CHEST PAIN with or without PALPITATIONS"*, *"Associated presyncope/syncope/palpitations"*; SCAMP (3) *"Associated palpitations 66 (16%) 90 (25%) 0.004"*; Fogliazza (4) Table 1; CHOP (6, **CITED, NOT READ**) *"Palpitations"* | **excluded — and the reasoning is not recovered** | The sidecar rules: *"EXCLUDED as a question — JUDGEMENT, NOT A CITATION. See decision 6."* **Decision 6 was lost with the prose.** Five sources name this criterion and it is one of the four canonical red flags in this literature. The verdict is transcribed here because it is the record; the argument behind it is not reconstructed, because it was not recovered. **Treat as genuinely open** — see "What weakens this packet most", point 3. |
| 17 | Radiation of pain to arm, back, neck, jaw or shoulder | RCH (1) *"Pain radiating to arm or back"*, *"Pain radiating to arm or neck"*, *"Radiation"*; SCAMP (3) the pain *"radiated to the back, jaw, left arm, or left shoulder"*; Sheffield (2) *"Central, may radiate to left arm/jaw"*, *"REFERRED PAIN Consider surgical causes with shoulder tip pain"*; Fogliazza (4) Table 1 *"Chest pain radiating to the arm/back"*; CHOP (6, **CITED, NOT READ**) *"Radiation to shoulder, arm, neck, jaw"* | **partial — excluded** | The sidecar rules *"EXCLUDED — partial only; see decision 11."* **Decision 11 was lost.** The verdict "partial" is recorded and transcribed; the argument is not. **JUDGEMENT, NOT A CITATION, and mine:** the body map lets a child tap a second region, so part of this is collected by tapping rather than asking — but that is my inference, offered to the reviewer, not the original run's recorded reasoning. |
| 18 | Crushing, tight, heavy, pressing chest pain | RCH (1) *"Quality (crushing central chest pain or worse with inspiration)"*; Sheffield (2) *"Crushing pain/heaviness"*, *"Chest tightness"*; CHOP (6, **CITED, NOT READ**) *"Substernal crushing pressure"* | **yes — already collected** | `SENSATIONS.squeezing` ("Squeezing / Tight squeeze") and `SENSATIONS.punch` ("Like a punch / Like a bonk"), both tiers, depth `inside` (verified, `vocab.js` lines 49–50). `chest/breathing` item 15 reached the same conclusion about the same sensation from a different literature. **Also banned as vocabulary** — asking it again would be the app disagreeing with itself. |
| 19 | Severity; first episode of severe pain | RCH (1) *"First episode severe chest pain"*, *"Acute onset, severe, stabbing chest pain"*; Sheffield (2) *"CXR - acute onset severe pain"* | **partial — already collected** | The FPS-R faces scale has intensity and the reserved `happened-before` question (*"Has this happened to you before?"*, `vocab.js` line 262, verified) has recurrence. The word *"severe"* is rejected universally by `screen.mjs` `BANNED_ALWAYS` (line 19, verified: *"severity adjective — the child rates the word, not the event"*), and *"first episode"* asks a child to rank this pain against every chest pain of their life. No candidate. |
| 20 | Site of pain | RCH (1) *"Site of pain"*, *"Pain along left lower sternal border or cardiac apex area"*, *"Unilateral chest pain"*; Fogliazza (4) *"quality, duration, location"* | **yes — already collected, with a real gap** | The body map. But `chest` is one region: the app has the **area** and neither the **side** nor the **point**. Item 5 recovers the point; nothing recovers the side. Carried to Still open. |
| 21 | Timing of onset; duration of symptoms | RCH (1) *"Timing of symptom onset (acute onset more likely to have identifiable cause)"*, *"Duration of symptoms"*; Fogliazza (4) *"the characteristics of the pain, such as its quality, duration, location, triggers, and alleviating factors"* | **yes — already collected** | `DURATIONS`. **No source read gives a threshold the bands would have to resolve** — the opposite of head injury. See the duration decision. |
| 22 | How long each episode lasts (30 seconds to 3 minutes) | RCH (1) precordial catch: *"Episodes are intense but brief lasting 30 seconds to 3 minutes"* | **no — not obtainable** | A stopwatch threshold. No child aged 4–12 holds it, `DURATIONS` cannot express it, and asking for seconds or minutes produces a number a nurse would read as a measurement. Banned as a family in Wording cautions. |
| 23 | Reproducible with palpation; tenderness of the costochondral junctions | RCH (1) *"Reproducible with palpation, movement, deep breathing"*, *"Localised area or muscle groups of tenderness"*, *"Tenderness to palpation of costochondral junctions"*, *"Reproducible localised pain"*; Sheffield (2) *"Well localised, reproducible with palpation"*; Fogliazza (4) *"tenderness to palpation and well-localized pain might suggest a musculoskeletal cause"* | **yes at depth `surface` — out of scope at `inside`** | **Belongs to the surface branch, and this is the ruling the brief asked for (decision 8).** The literature supports the app's hand-written `chest-press` (*"Does it hurt when you press on it?"*) **fully**, and this packet re-sources it *here, in the record*, without writing a candidate — because `chest-press` lives in `FOLLOW_UPS.chest.surface` (verified, `vocab.js` line 134) and this packet is depth `inside`. |
| 24 | Exertional fatigue; limitation of physical performance; prior restriction from sport | AHA (5) element 3 *"Excessive exertional and unexplained fatigue/fatigue associated with exercise"*, element 6 *"Prior restriction from participation in sports"*; Fogliazza (4) *"any limitations in physical performance"*; RCH (1) exercise-induced asthma row | **partial — not proposed** | *"Excessive"* and *"unexplained"* are the examiner's comparisons. `stopping-normal-things` (`back/pain` item 12, region-neutral, verified as b-021/b-022) already carries the functional-interference fact, `MOODS.tired` carries the state, and item 1 already asks the exertional question a child can answer. |
| 25 | Sweatiness, nausea, pallor during an episode | Sheffield (2) *"Associated autonomic symptoms such as sweatiness/nausea/pallor"*; RCH (1) *"Sweating"* | **no — observer** | Pallor is seen by someone else; sweating during an acute episode is not something a child in a waiting room can separate from a hot room. **`wakes-sweaty` is a different fact** (night sweats) and must not be borrowed for it. |
| 26 | Family history of sudden cardiac death, arrhythmia, cardiomyopathy | RCH (1) *"Family history of serious cardiac or pulmonary conditions (eg arrhythmia, cardiomyopathy, pulmonary hypertension, sudden death)"*, *"Family history sudden cardiac death or arrhythmia"*, *"Family history of arrhythmias eg Brugada"*; Sheffield (2) *"FH of: o Sudden death <35 years of age o Young onset ischaemic disease"*, *"PERSONAL/FH of CONGENITAL/ACQUIRED CARDIAC DISEASE"*; AHA (5) family-history elements 8, 9, 10; Fogliazza (4) | **no — the nurse's** | **The highest-yield history item in this entire literature, and it is not the app's to ask.** Excluded per this packet's brief and refused again on its own merits: asking an unaccompanied child on a hospital tablet whether anyone in their family died suddenly is not a question this app asks. |
| 27 | Known cardiac disease, Kawasaki, connective tissue disease, diabetes, sickle cell, Duchenne, central line, recent surgery | RCH (1), all of the above verbatim; Sheffield (2) *"PRIOR CARDIAC DISEASE/SURGERY"*, *"Previous Kawasaki disease"*, *"HYPERCHOLESTEROLAEMIA"*; AHA (5) elements 6 and 7 | **no — record or carer** | Every one is a diagnosis in a chart. SCAMP (3) itself excluded *"Children with a known history of heart disease"* from the cohort its history criteria were derived in — verified. |
| 28 | Recent mRNA vaccination | RCH (1) *"Recent illness or vaccination …"*, *"Recent (1-14 days post) mRNA vaccine received (higher risk adolescent males and after 2nd dose)"* | **no — carer and record** | Item 11 takes the recent-illness half only. |
| 29 | Psychogenic causes; stressors; anxiety; hyperventilation | Sheffield (2) *"PSYCHOGENIC Stressors, history of anxiety, hyperventilation"*; RCH (1) *"Anxiety"* among the commonest identified causes; Fogliazza (4) *"Psychogenic factors are responsible for 10% to 30% of chest pain cases"*, *"anxiety, depression, or the impact of significant life events"*, *"A thorough history is essential to uncover any underlying psychosocial stressors that may be contributing to the pain"* | **excluded — the dignity ruling** | **This ban overrides a direct instruction in a guideline and in a review**, exactly as `head/headache`'s did for NICE NG127 1.21.6. `MOODS` collects the child's **state** and never its **cause**. |
| 30 | Breast tenderness; breast bud; cyclic breast pain | RCH (1) *"Breast tenderness / Localised to breast tissue area / Premenstrual or cyclic: PMS / Non-cyclic pain: consider fibro-adenoma, breast cyst or breast abscess / Breast lump right under the areola = breast bud / Other features puberty supports breast bud diagnosis"* | **yes — REFUSED, not merely unranked** | Child-reportable, common inside this app's upper age band, and asked by no version of this app. The child is alone, on a shared hospital tablet, in a public waiting room, and **a shaming question produces a false negative. A missing question is a gap the nurse can fill; a false negative is a lie in the record.** |
| 31 | Tall, thin or slender build | RCH (1) *"Tall/thin adolescents"*; Sheffield (2) *"tall slender patient"* | **no — banned concept** | Body build is banned across every packet in this project, and the nurse can see the child. |
| 32 | Oral contraceptive; pregnancy; alcohol; cocaine; cardiotoxic overdose | Sheffield (2) *"HYPERCOAGULABILITY e.g. Oral contraceptive pill"*, *"ruptured ectopic pregnancy"*, *"overdose of cardiotoxic drugs"*; RCH (1) *"Recent heavy alcohol consumption"*, *"Cocaine"*, *"Hypercoagulability"*, *"Immobility"*; CHOP (6, **CITED, NOT READ**) *"Drug use"*, *"Medication use"* | **excluded — out of scope by age and refused on principle** | The app stops at 12. A screen that asks an unsupervised child on a shared hospital tablet about drugs, alcohol or contraception is a safeguarding failure before it is a clinical one. |
| 33 | Haemoptysis | RCH (1) *"Haemoptysis"* under both pulmonary embolus and the pulmonary risk-factor list | **excluded** | Never ask a child about blood in a cough. Carried unchanged from `chest/breathing` item 27. |
| 34 | Bruising | RCH (1) *"Bruising"*; Fogliazza (4) *"bruising could indicate trauma"* | **partial — not proposed** | `unexplained-bruises` is `skin-rash` item 14, depth `surface` with `minAge: 8`, unreachable from chest/inside — **verified, and the sidecar's bank id for it is wrong: it is `r-023`, not `s-018`.** (`s-018` is a throat question, *"Have you thrown up?"*, fact `vomiting`.) The substance of the ruling is unaffected. Item 4 takes the mechanism half. |
| 35 | Shingles prodrome (dermatomal pain before any rash) | RCH (1) *"Shingles: Prodrome of pain or hyperalgesia over one or more dermatome that does not cross midline"* | **excluded** | The visible half is `rash` at depth `surface`; the prodrome has no child-answerable form. |
| 36 | Physical examination in full | RCH (1) *"Examination Should aim to identify signs of cardiorespiratory distress: tachypnoea and increased work of breathing / hypoxia / abnormal pulse or BP / distended neck veins, muffled heart sounds / deceased chest expansion / absent breath sounds / altered conscious state"*, *"Difference in BP's upper limbs"*, *"Pericardial rub"*, *"Hyper resonance on percussion"*, *"Asymmetric lung expansion"*, *"Localised dull percussion"*; Sheffield (2) *"E: EXAMINATION A thorough physical examination will often aid a definitive diagnosis."*; AHA (5) elements 11–14, all four physical exam; CHOP (6, **CITED, NOT READ**) | **no — exam** | Entirely and without exception. |
| 37 | ECG, CXR, echo, troponin, CRP/ESR, cardiac MRI, exercise stress test | RCH (1) *"ECG, CXR and blood tests"*, *"echocardiogram or CT pulmonary angiogram"*; Sheffield (2) *"I: ECG TIPS … QT >500 correlates to higher risk of torsades/polymorphic VT / Use Bazett's formula to correct QTc"*; SCAMP (3); Fogliazza (4) | **no — instrument** | Recorded **also** because Fogliazza reports these tests' sensitivity for cardiac causes is poor, so no future run should hunt for a self-report proxy for them. |
| 38 | Laterality — which side the pain is on | RCH (1) *"Unilateral chest pain / Refusal to lie on one site"*, *"Pain along left lower sternal border"*; Fogliazza (4) Table 1 *"Severe, sharp, unilateral chest pain"* | **partial — not obtainable** | `chest` is a single region in `bodyMap.js` with no left/right split, so laterality **has nowhere to be recorded**. Item 6 takes the lying-down half. Flagged in Still open. |
| 39 | Age | SCAMP (3) *"Age 7-11, y (%) 118 (29) 137 (38)"*, *"Age 12-16"*, *"Age 17-21"*; Alnaim (7) *"mean age of 9.1±2.7 years"*, Table 5 bands *"1-5"*, *"6-10"*; Sheffield (2) *"Age is a consideration during assessment"* | **n/a — already collected** | The setup screen has age. Recorded so it is visibly a decision. |

**Yield: 39 criteria → 11 clean, 5 partial, 15 excluded, 8 already collected
elsewhere in the app.**

**Does the item set have the right shape for this complaint?** *JUDGEMENT, NOT A
CITATION, and this assessment is the reconstruction's, not the original run's.*
Mostly yes. Paediatric chest pain is overwhelmingly benign and the literature
exists to rule out rare cardiac and pulmonary causes; the four red flags it
names are exertional pain, exertional syncope, palpitations, and family history
of sudden cardiac death. This packet leads with the first (item 1, rank 1),
asks the second in its only child-answerable form (item 3, rank 3), correctly
refuses the fourth as not child-reportable (item 26), and **drops the third with
no surviving reasoning (item 16)** — the one place the shape is wrong, or at
least unexplained. The benign majority is well served: items 2, 5 and 7 between
them carry the musculoskeletal, costochondritic and precordial-catch
discriminators, and item 2 is explicitly the packet's reassurance item.

## Excluded, and why

Grouped, so the exclusions are visibly categorical rather than case-by-case.

- **Examination and investigation** (items 36, 37, and the exam half of 23, 25,
  31): the nurse's, entirely. No exception was made anywhere.
- **Record or carer** (items 27, 28, and the dose/date half of 11): a diagnosis
  in a chart, a vaccination date, a medication history. Item 11 takes only the
  half a child holds.
- **The nurse's by scope** (item 26, family history): the highest-yield item in
  the literature, refused twice — once by the packet's brief, once on its own
  merits.
- **The dignity ruling** (items 29, 30, 32, and the build ban at 31): three
  distinct refusals — psychosocial cause, breast and puberty, and
  drugs/alcohol/contraception. **Item 29 and item 30 override direct
  instructions in the sources.** That is deliberate and is the strongest
  statement of principle in this packet.
- **Not obtainable** (items 22, 38): a stopwatch measurement and a laterality
  the data model cannot hold.
- **Already collected** (items 12, 13, 15, 18, 19, 20, 21, 39): checked against
  body region, depth, intensity, duration, sensations and mood, which the brief
  names as the commonest reject reason.
- **Excluded with reasoning not recovered** (items 16, 17): recorded as such.

## Wording cautions

Fourteen bans, transcribed from the sidecar's `bannedPhrases` `why` fields.
Each bans a **concept**, not a phrasing. The regexes themselves live in
`meta.json` and are the enforced form; these are the rulings behind them.

1. **Never name a condition to the child.** *Heart attack, cardiac arrest,
   angina, myocarditis, pericarditis, arrhythmia, cardiomyopathy, long QT,
   Brugada, Kawasaki, Marfan, coronary, aneurysm, dissection, embolus,
   pneumothorax, pleurisy, costochondritis, precordial, Texidor, osteomyelitis,
   neoplasm, tumour, cancer, oesophagitis, reflux, heartburn, GORD/GERD, asthma,
   pneumonia, sickle cell, shingles, hypertension.* **This packet's entire
   literature is a differential-diagnosis table** — RCH's *"Key examination and
   investigation findings that may suggest an uncommon but serious cause of
   chest pain"* and Sheffield's *"B: CAUSES"* are both written row by row in
   this register and sit directly in a generator's path. *"Heart attack"* is
   banned first and by name **because it is the thing the child and the parent
   are already afraid of.**
2. **Never name an internal organ or structure the child cannot see.** *Heart,
   heartbeat, heart rate, pulse, beating, lungs, airways, windpipe, trachea,
   oesophagus, valves, chest wall, rib cage, ribs, breastbone, sternum,
   cartilage, joints in your chest, diaphragm, pleura.* **A child alone with a
   tablet that names their HEART has been told the tablet is worried about their
   heart, and a frightened answer is not a fact.** This is `head/headache`'s ban
   on "brain" applied to the organ this packet exists to rule out, and chest is
   the region where that fear arrives before the question does. **"Your chest"
   is the only anatomy this packet may use.**
3. **No clinical register for a symptom, a sign or a test.** *Exertion,
   exertional, dyspnoea, orthopnoea, tachypnoea, syncope, presyncope,
   vasovagal, palpitations, tachycardia, hypoxia, cyanosis, ischaemia,
   infarction, haematemesis, haemoptysis, odynophagia, dysphagia, epigastric,
   retrosternal, substernal, radiating, reproducible, palpation, auscultation,
   percussion, troponin, ECG, EKG, echocardiogram, CXR, X-ray, CT, MRI, Holter,
   stress test, spirometry.* Every source read writes in it by default.
4. **Ban the concept of self-reported loss of consciousness, not just the
   phrasings.** *Faint, fainted, blacked out, collapse, knocked out, went dark,
   lost consciousness, unconscious, dizzy spells, funny turns, fits, seizures,
   convulsions.* `screen.mjs` already bans "passed out" universally,
   `head/injury` bans self-reported LOC, `general/unwell` bans asking a child
   whether they had a fit or passed out. **This packet does not overturn any of
   the three.** Item 3 takes **only** the near-syncope half — the sensation of
   being about to go down during exertion, which the child is awake for — and
   must never be widened into asking a child to report an event they were not
   conscious for.
5. **Never use adult-infarct pain vocabulary.** *Tight, tightness, crushing,
   pressure, pressing down, heavy, heaviness, weight on, band around, elephant,
   vice, gripping.* `SENSATIONS.squeezing` already ships as "Squeezing / Tight
   squeeze" at depth `inside`, which **is** this packet's depth, so a
   chest-inside child has already been offered this word before any follow-up
   fires; asking it again is the app disagreeing with itself.
6. **Never ask a child to examine themselves.** *Press, poke, prod, push on,
   squeeze your, pinch, feel your, take your pulse, listen to your, count your,
   check your, have a look at your.* **Deliberate carve-out, and it is the
   ruling the brief asked for:** the hand-written `chest-press` is **kept and
   untouched**, because it lives in `FOLLOW_UPS.chest.surface` and this packet
   is depth `inside`; per-packet bans in `screen.mjs` bind this packet's
   candidates only. At `surface` the child is asked about the wall under their
   own finger. At `inside` the same words invite a child who has just said the
   pain is deep inside them to go and find out.
7. **Never instruct a manoeuvre or ask the child to provoke their own symptom.**
   *Take a deep breath, deep breaths, breathe deeply, hold your breath, blow
   into, puff, pant, Valsalva, bear down, strain, cough for me, try running,
   go and run around now.* Carried from `chest/breathing` and earned again here:
   RCH's pneumothorax row is *"Acute pain or dyspnoea after cough/Valsalva
   manoeuvre"* — a manoeuvre a clinician asks a patient to perform. **Items 1, 2
   and 3 ask what the child has ALREADY noticed and must never ask them to find
   out.**
8. **The dignity ruling.** *Breasts, nipples, areola, breast buds, bras, puberty,
   developing, chest lump, lumps, growing up there.* RCH's "Other" row is a real,
   common, benign cause of chest pain inside this app's age band, and it is
   **refused rather than merely unranked**, because the child is alone, on a
   shared hospital tablet, in a public waiting room.
9. **The dignity ruling, second half.** *Tall, short, thin, slim, slender,
   skinny, fat, chubby, your weight/size/shape/build/body, how big, how tall,
   kilos, pounds, BMI.* RCH keys pneumothorax to *"Tall/thin adolescents"* and
   Sheffield to *"tall slender patient"*. **Body weight and build as a concept
   are banned across every packet in this project**, and this is one of the two
   body areas where asking costs the most.
10. **Out of scope by age and refused on principle.** *Pregnancy, periods,
    menstruation, PMS, contraception, the pill, sexual, sex, alcohol, beer, wine,
    drunk, drugs, cocaine, smoking, vaping, cannabis, steroids, overdose, energy
    drinks.* Carried from `head/headache`.
11. **The dignity ruling, third half, and it OVERRIDES two direct instructions in
    the sources.** *Anxious, anxiety, stress, panic, nervous, worried about
    school/home/your family, upset about, bullying, teasing, picked on, arguing,
    shouting at home, home life, hyperventilating, psychological, psychogenic,
    somatising, in your head, imagining, made up, pretend, real pain.* Against
    Sheffield's *"PSYCHOGENIC Stressors, history of anxiety, hyperventilation"*
    and Fogliazza's *"A thorough history is essential to uncover any underlying
    psychosocial stressors that may be contributing to the pain"*. `MOODS`
    collects the child's **state** and never its **cause** — the identical
    ruling `head/headache` made against NICE NG127 1.21.6. **"In your head",
    "imagining" and "made up" are banned separately and absolutely: a child who
    came to a hospital with chest pain must never be asked by a machine whether
    the pain is real.**
12. **Never ask about family, and never ask a child to relay what an adult
    said.** *Family, relatives, grandma, uncle, aunt, cousin, brother, sister,
    runs in the family, inherited, genetic, died, dying, dead, death, sudden
    death* — and *mum/dad/parents/nurse/doctor/teacher **said/thinks/told***.
    Family history of sudden cardiac death is the highest-yield history item in
    the AHA screen and in both guidelines read, **and it is the nurse's**.
    *"Has anyone in your family died suddenly?"* is not a question to put on a
    tablet in front of an unaccompanied child.
13. **Never ask for a number, a rating or a count.** *Rate, score, grade, scale
    of, out of ten, which face, how many seconds/minutes/times/episodes,
    seconds, minutes, how long does each one last, time it, stopwatch, count
    them.* The FPS-R screen already has intensity and `DURATIONS` already has
    time, and **no threshold in this literature is reachable**: RCH's
    precordial-catch criterion is *"Episodes are intense but brief lasting 30
    seconds to 3 minutes"*, a stopwatch measurement no child holds. **A number
    from a child reads to a nurse as a measurement.**
14. **Register: US English, no named drugs.** Banned: *unwell, poorly,
    off-colour, lethargic, listless, whilst, casualty, A&E, in hospital,
    paracetamol, ibuprofen, Nurofen, Panadol, salbutamol, Ventolin, antacids,
    chemist, nappy, wee, torch, plaster, have you got, gone off.* **Both
    guideline sources are British or Australian and this packet quotes them at
    length**: RCH writes *"Dyspnoea"*, *"Haemoptysis"*, *"oesophagitis"*,
    *"manoeuvre"*, *"Lethargic"*; Sheffield writes *"Whilst"*, *"casualty"* and
    *"A&E"*. Named drugs are banned with them — RCH's key points recommend
    *"Reassurance with or without simple analgesia"* and Sheffield a *"trial of
    anti-reflux medications"*, which is treatment, not assessment, and not a
    child's to report.

## Decisions

**Reconstructed.** The sidecar refers to eleven numbered decisions whose text
was lost. The table below is the honest map of what survived. Everything marked
**RECOVERED** is transcribed from a `*Note` field or a `bannedPhrases` `why`
field and is the original run's reasoning. Everything marked **NOT RECOVERED**
is a verdict with no surviving argument, and **no argument has been invented for
it**.

| # | Subject | Status |
|---|---------|--------|
| 1 | Register and child-facing wording | **RECOVERED** — from `preferredNote` and `bannedPhrases` 3, 14 |
| 2 | *Unknown* — referenced nowhere in the sidecar | **NOT RECOVERED.** By the template's own required list, decision 2 is normally *answer types*; the sidecar states none, and `preferred` is empty. Treat answer types as **undecided**. |
| 3 | No pain-characterisation item at all | **RECOVERED in substance** — from `minAgeNotes`; the underlying argument is partial |
| 4 | Item priority | **RECOVERED in full** — `itemRankNote` names itself "Decision 4" |
| 5 | The syncope split: near-syncope half only | **RECOVERED** — from cite 3 and `bannedPhrases` 4 |
| 6 | Palpitations excluded | **NOT RECOVERED.** Verdict only. |
| 7 | *Unknown* — referenced nowhere in the sidecar | **NOT RECOVERED.** Subject unknown. |
| 8 | `chest-press` carve-out: surface vs inside | **RECOVERED** — from cite 23 and `bannedPhrases` 6 |
| 9 | Fever not lifted by `packetRank` | **RECOVERED** — from cite 14 |
| 10 | `fuzzy-feeling` is not dizziness | **RECOVERED in substance** — from cite 15 |
| 11 | Radiation excluded, partial only | **NOT RECOVERED.** Verdict only. |

The seven `*Note` fields, transcribed.

### Register and wording (decision 1) — RECOVERED

**US English**, matching the wording the app already ships. The four
child-facing rulings, from `preferredNote`:

- **Item 1: *"run around or play"*** — matching the wording
  `FOLLOW_UPS.chest.inside` already ships in `chest-worse-move` (*"Does it get
  worse when you run around?"*). The shared fact means **one of the two
  wordings is what the child sees**, and they must not read as two different
  questions.
- **Item 2: *"when you breathe in"*, NEVER *"take a deep breath"*** — the
  criterion is a pattern the child has noticed, not a manoeuvre to perform.
- **Item 3: *"feel like you might fall over"*** — the near-syncope sensation
  only, never "faint", "collapse", "black out" or "pass out".
- **Item 5: *"point to"* or *"show me"***, never "press on" or "touch".
- **Item 6: *"lie down"* and *"sit up"*** — which is why "lie-down" is
  deliberately absent from the British-idiom ban.
- **Anatomy is "your chest" and nothing else.**

`preferred` in the sidecar is `{}`, and the sidecar says why: *"No wording
preferences can be expressed yet — this packet has no candidates and writes no
`candidates.json`."* **Stage 2 must honour the rulings above; they are wording
rules and not age floors.**

### Answer types (decision 2) — NOT RECOVERED

**Nothing in the sidecar states an answer type for any item.** Note for whoever
resolves this: the sibling packet records a correction dated 2026-09-08 that
`FollowUpScreen` renders `yesno`, `count`, `text` **and** `voice`, so "all
yes/no" cannot be assumed from a rendering constraint. All eleven proposed
items are shaped as yes/no questions except item 5, which is a "point to /
show me" instruction — and **that one in particular needs a ruling before stage
2**, because it is not obviously a yes/no.

### No pain-characterisation item (decision 3) — RECOVERED IN SUBSTANCE

Sheffield states: *"Age is a consideration during assessment: younger children
may interpret a wide range of chest symptoms as 'pain', whereas adolescents are
more likely to characterise pain"*. The sidecar **rejects this as an age floor**
— Sheffield gives no number — and **honours it as a design rule instead**: it is
the sourced reason this packet **proposes no pain-characterisation item at
all**. *"A floor would have removed the child; the design rule removes the wrong
question."*

### Item priority (decision 4) — RECOVERED IN FULL

***Proposed, not yet confirmed by review.***

`itemRank` is `[1,2,3,4,5,6,7,8,9,10,11]` — the natural order. With `chest-pain`
leading the round-robin, **a chest-only child under 8 is asked items 1, 2 and 3
and nothing else from this packet; an 8+ child is asked the same three** (cap 6,
three slots each — cap verified at `vocab.js` line 336). So this ordering
decides what a child is actually asked, and items 4–11 are ranked for the day
the cap grows.

- **Item 1 leads** because it is the only criterion every one of the six sources
  names, because it is the cardiac red flag the whole literature exists to
  catch, and because **it ships to nobody today**.
- **Item 2 is second** because it is the best-attested criterion for the
  population that actually arrives — musculoskeletal and costochondritic pain is
  a large majority of paediatric chest pain — and because it is the packet's
  **only strong reassurance item inside the cap**.
- **Item 3 is third rather than second** because it refines the axis item 1
  already opened, and because it is the packet's most contested item.
- **Argued and rejected: promoting item 4 (recent bump) into the top three.**
  Trauma is a named cause in both guidelines and reframes the whole report, but
  chest asks no mechanism gate, so a trauma answer arrives as one yes/no among
  several rather than as a routing decision, and displacing either cardiac item
  to gain it is the wrong trade in a waiting room.

### Packet priority: `packetRank: 40` — RECOVERED IN FULL

***Proposed, not yet confirmed by review.***

`chest-pain` **leads** the chest round-robin. `chest-breathing` has no
`packetRank` and defaults to 50 (both verified). Leaving both at 50 would have
handed the lead to `chest-breathing` anyway, via the
`source.packet.localeCompare` tiebreak in `build-bank.mjs` (line 258, verified:
`'chest-breathing' < 'chest-pain'`) — **so 50 is not neutral here** and the rank
had to be set deliberately in one direction or the other.

1. **The app's own entry point.** `BodyMapScreen` prompts *"Show me where it
   hurts."* Every child who reaches group `chest` at depth `inside` **has chest
   pain by construction**; whether they also have a cough is a hypothesis.
   `chest/breathing` says this against itself, in its own item 4 note: *"a child
   taps Chest and 'inside', and whether they have a cough at all is genuinely
   unknown."*
2. **Exertional chest pain currently ships to nobody.** Verified in this
   reconstruction: `worse-on-exertion` is `chest-breathing` item 2, which sits
   **7th** in that packet's `itemRank` `[1,11,3,4,5,8,2,…]`, below the cap of 5
   or 6; and the hand-written `chest-worse-move` carries the same fact, so
   `keyOf = fact ?? id` (`vocab.js` line 290) suppresses it behind the bank
   entry. **A chest-only child is never asked it today.**
3. **The items `chest-breathing` loses are cough-characterisation items that
   presuppose a cough**; the items this packet gains discriminate the pain the
   child actually reported.

**What `chest-breathing` loses, stated exactly.** Chest-only child, cap 5 (under
8): today it ships items 1, 11, 3, 4, 5; under this rank it ships items 1 and 11
only, losing item 3 (stopping for a breath when talking), item 4 (cough
presence) and item 5 (night cough). Cap 6 (8+): it keeps 1, 11, 3 and loses 4
and 5.

**What it never loses: item 1, `hard-to-breathe`, its flagship and rank 0.** The
round-robin gives the trailing packet slot 2, so `hard-to-breathe` is asked to
every chest-inside child under either ordering. **That is the fact that makes
leading safe.**

### Mechanism: deliberately `null` — RECOVERED IN FULL

**JUDGEMENT, NOT A CITATION**, and the null is a decision.

(a) `GROUP_GATE.chest` is `[{ key: 'depth', type: 'depth' }]` and nothing else
(verified) — the chest group never asks the mechanism gate, `mechanisms.chest`
is always null, `bankQuestions` short-circuits, and **any value written here
would be inert today**.

(b) It would stop being inert the moment a mechanism gate were added to chest,
and then `no-injury` would **silently delete this entire packet from every child
who answered "I bumped it"** — which is exactly the wrong half. RCH lists
*"Recent injury"* in its chest-pain history and *"Muscle Strain / Trauma …
Recent trauma"* as a named cause; Sheffield's first risk factor is *"CHEST WALL
TRAUMA - consider pneumothorax, haemothorax, cardiac or pulmonary contusions,
mediastinal disruption"*. **Traumatic and non-traumatic chest pain share one
history**, unlike head, where PECARN applies to one and not the other.

(c) The raw trauma fact is captured as **item 4** instead. That is this
project's established move for a split the app cannot classify — capture the raw
fact, let the nurse classify — and it reaches the child whichever way a future
gate is wired.

### Duration scope — RECOVERED IN FULL

**JUDGEMENT, NOT A CITATION for the exceptions; the default is sourced by
absence.**

**No source read gives a duration window for paediatric chest pain.** RCH asks
for *"Timing of symptom onset (acute onset more likely to have identifiable
cause)"* and *"Duration of symptoms"* without a threshold; Sheffield reserves a
CXR for *"acute onset severe pain"* without defining acute; SCAMP, Fogliazza and
Alnaim set none. **This is the opposite of head injury**, where all three rules
are acute and the packet had to be band-scoped. So **every item runs in every
band by default**, and the two exceptions are reasoning, not citation:

- **Item 4 (recent bump) drops `long-time`.** A bump three months ago is not the
  mechanism of today's pain, and the question read at `long-time` invites a child
  to reach for any remembered knock.
- **Item 7 (waking at night) drops `just-now`.** A child whose pain began minutes
  ago cannot answer whether it wakes them at night, and **an answer to an
  unanswerable question is noise on a nurse's screen.**

### Age floors: none, and the empty object is a decision — RECOVERED IN FULL

**JUDGEMENT, NOT A CITATION.** `minAge` is `{}`. Three floors were considered and
all three rejected:

1. **A validity floor of 7 on the cardiac items**, from SCAMP enrolling *"All
   patients between 7 and 21 years of age"* — **rejected under brief section 4**,
   because exertional pain, syncope and palpitations are plain history in RCH and
   in Sheffield, neither of which sets any floor, and because Alnaim studied
   children under 14 with a *"mean age of 9.1±2.7 years"* and reports in bands
   starting *"1-5"*. **A validity floor on an item that is also plain history in
   a complaint guideline setting no floor is an invention, not a citation.**
2. **A capability floor from Sheffield's age observation** — rejected as a floor
   because Sheffield gives no number, and **honoured instead as a design rule**
   (decision 3, above).
3. **A floor derived from the AHA screen's own header** — *"Medical history
   (Parental verification recommended for high school and middle school
   athletes)"* — **rejected because it is not an age floor**: it is a statement
   that the instrument does not trust unverified self-report **at any age it
   covers**. No floor fixes that. **It is recorded in the packet's own words
   near the top instead**, because it is the strongest single limitation on this
   packet and a reader must not have to reach the closing section to find it.

### Facts and cross-packet dedupe — RECOVERED IN FULL

**JUDGEMENT, NOT A CITATION** — no source assigns facts. The reasoning is the
bank's cross-packet dedupe in `keyOf` and `followUpsForGroups`, where **two
packets sharing a fact means the child is asked ONCE**.

**Shared with `chest-breathing`, deliberately — the packet's most consequential
ruling:** `worse-on-exertion` (item 1) and `choking-episode` (item 8). Both
siblings serve group `chest` at depth `inside` with no mechanism gate between
them, so **they fire together in one report, into one queue, on one screen.**
Every prior refusal to merge a movement fact — `back/pain`'s explicit
`doNotMerge`, `limb/pain` item 9, `head/headache` item 4 — is justified by
**region**: *"whether a leg hurts on running says nothing about whether a chest
does."* **That reasoning does not reach inside a single region.** Coining a
second exertion fact here would ask a chest child *"Does it get worse when you
run around?"* and *"Does it hurt more when you run around or play?"* back to
back, which is the exact failure `fact` exists to prevent.

**The cost of sharing is real and is stated here:** whichever packet's queue
reaches the fact first supplies **both the wording and the citation the nurse
sees**. Under `packetRank` 40 plus `itemRank` position 1 that is this packet's
candidate, cited to the chest-pain literature rather than to `chest-breathing`'s
asthma sources — **and all three of `packetRank`, `itemRank` and the shared fact
are required for that; any one alone fails.**

`choking-episode` is shared on the same logic and for a second reason: it is
10th in `chest-breathing`'s `itemRank` and ships to nobody, and **sharing is the
only mechanism by which a criterion RCH lists under CHEST PAIN becomes reachable
at all.**

**Reused** (slug already region-neutral by construction, cannot collide at this
depth): `bumped-it` (`skin-rash` r-024, depth `surface`); `night-pain`
(`back/pain` b-001 and `limb/pain` l-013 **already share this slug across two
regions** — the precedent that night pain merges is established, and this packet
follows it rather than coining a third variant); `sport-activity` (`back/pain`
b-023 — it establishes a property of the **child**, not of a body part);
`recent-illness` (`skin-rash` r-020/r-021, depth `surface`).

**Coined:** `worse-breathing-in`, `faint-on-exertion`, `pinpoint-pain`,
`worse-lying-down`, `worse-after-eating` — each with its reason recorded in the
item table above.

## Still open

For the clinical reviewer.

1. **Palpitations (item 16).** Excluded, reasoning lost. One of the four red
   flags this literature exists to catch. **The single most important thing to
   settle before this packet ships.**
2. **Radiation of pain (item 17).** Excluded as "partial", reasoning lost.
3. **Answer types (decision 2).** Never recorded. Item 5 ("point to / show me")
   in particular is not obviously a yes/no.
4. **Decision 7.** Subject unknown; referenced nowhere in the surviving sidecar.
5. **Laterality.** `chest` is one region with no left/right split, so
   *"Unilateral chest pain"* has nowhere to be recorded. Items 20 and 38.
6. **Fever does not reach a chest-only child.** `feels-feverish` exists twice in
   the bank and neither instance is reachable from a chest-only tap. Decision 9
   declines to fix this with `packetRank` rather than relitigate two prior
   reviews. **The hole is real and is flagged, not filled.**
7. **No duration threshold exists in this literature.** Every item runs in every
   band. If a reviewer knows of a threshold, the bands would need revisiting.
8. **CHOP (source 6) has no citation in the record** — no author, year or URL —
   so it cannot be fetched from the sidecar as it stands. Either obtain and read
   it, or remove it from the nine cite entries that name it.
9. **An error in `meta.json`, reported and not fixed.** Cite entry 34 gives the
   bank id for `unexplained-bruises` as `s-018`. It is **`r-023`**; `s-018` is a
   throat question (*"Have you thrown up?"*, fact `vomiting`). The substance of
   the ruling — that the fact is depth `surface` with `minAge: 8` and unreachable
   from chest/inside — is correct and was verified. Only the id is wrong.
   `meta.json` was deliberately left unmodified by this reconstruction.
10. **A near-miss worth recording.** Cite entry 3 attributes *"All patients with
    exertional syncope, or collapse associated with palpitations and/or chest
    pain MUST be discussed with the medical registrar and/or the cardiology for
    review PRIOR to discharge from ED."* to Sheffield, and it is there verbatim.
    It is the strongest disposition statement in either guideline, and **it is
    about the child this packet's items 1 and 3 are designed to find.** Nothing
    in this app acts on it — correctly, since this app makes no dispositions —
    but a reviewer should know it exists.

## What this reconstruction verified, and how

Recorded so the next reader knows exactly how much of this file is checked.

**Method.** The sidecar's 39 `cite` entries were parsed into **241 verbatim
quote fragments**, each attributed to a source, and every fragment was tested by
exact string match (whitespace, dash and quote normalised) against the cached
source text it was attributed to. Fragments that failed were re-tested against
every other cached source, then checked by hand with targeted `grep` windows.
**No source was read whole** except AHA (source 5), which is 1,371 characters.

**Result.**

- **231 of 241 fragments confirmed verbatim** in the source they are attributed
  to. Five needed hand-checking and all five were **present**, differing only in
  line-wrapping, an en dash, a bullet, a soft hyphen, or a row label the sidecar
  added — tabulated under "Transcription notes".
- **10 fragments unverified, all of them CHOP (source 6)**, which is not cached.
  Nine cite entries touch it; **none rests on it alone**.
- **All 39 cite entries carry at least one first-hand-verified quotation.**
  **Zero fabricated citations were found.**
- **Cross-references into the codebase were also checked** and all held except
  the `s-018`/`r-023` id above: `GROUP_GATE.chest`, `GROUP_DEPTH.chest`, the
  single `chest` region, the 5/6 age cap, `keyOf = fact ?? id`, the
  `localeCompare` tiebreak and `packetRank ?? 50`, `chest-breathing`'s
  `itemRank` positions for `worse-on-exertion` (7th) and `choking-episode`
  (10th), `chest-press` living in `FOLLOW_UPS.chest.surface`, `chest-worse-move`
  in `FOLLOW_UPS.chest.inside`, `SENSATIONS.dizzy`/`squeezing`/`punch`,
  `HAPPENED_BEFORE`, `screen.mjs`'s bans on "severe" and "passed out", and
  `back/pain` b-001, b-021/b-022, b-023 and b-010/b-011.

**What this does NOT establish.** That the *selection*, *interpretation* or
*omission* of criteria is right; that the quotations are used in a way their
surrounding context supports (checked by window for sources 1, 2, 3 and 5; by
string match only for sources 4 and 7); or that any of it is clinically sound.
**Nothing in this project is clinically reviewed or scientifically validated.
It is a high-school student's literature trace, not a clinical instrument.**
