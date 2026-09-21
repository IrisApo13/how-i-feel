# Neck pain or stiffness

Presenting complaint · packet `neck-pain` · serves groups `throat` and `back`,
**depth `inside`** · packet v1 · assembled 2026-09-08
Status: **not yet clinically reviewed** · sources verified first-hand: 7 of 11

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
> who arrives with neck pain or a stiff neck, and marks which of those a child
> can report about themselves. **Not** a diagnostic tool: nothing here may be
> scored, summed, or shown to a child or nurse as a suggested cause.

## Read this before anything else: what rests on an unread source

Two things in this packet lean on a paper that **could not be read**, and both
are named here rather than in a closing section.

- The `long-time` duration band for **item 4 (throwing up)** and **item 8
  (blurry vision)** is justified partly by a systematic review reported inside
  source 2 — *"In a recent systematic review of 45 articles, 37 out of the 95
  included patients (39%) had torticollis as the first and only presenting
  symptom of a brain tumor"* (Baklizi et al., source 2's reference 6). **That
  review was not read.** The 39% figure is source 2's characterisation of it,
  not this packet's reading of it. Both items are independently sourced for the
  *acute* bands by sources 3, 4, 5 and 7; it is only their extension into
  `long-time` that leans on the unread review.
- The phrase *"second admission to the emergency department (ED) for the same
  issue"* — item 10 — comes from **Starc et al. 2018, CITED, NOT READ**, again
  as quoted inside source 2. No question is proposed from it.

Everything in the proposed items table is otherwise sourced to a document that
was opened and read.

## Scope

**Age.** App covers 4–12. **No item carries an age floor**, and, as with
`throat/sore-throat`, that is a finding rather than an oversight. One
quantitative age statement was found and deliberately not converted into a
floor. Source 1 reports self-reported neck pain in **3471 of 10 797 children
aged 9–17 (32.1%)** versus **1240 of 11 633 aged 0–8 (10.7%)**. Read alone that
looks like a reporting floor. Read beside its examination half it is not: neck
pain **on examination** was **2784 of 10 797 (25.8%)** versus **922 of 11 633
(7.9%)**. Both halves move together by roughly the same factor, so the finding
is that younger children have less cervical pain after blunt trauma — a
prevalence statement — not that they cannot report the pain they have. Brief
§4 rules that a validity floor derived from prevalence is an invention.
Source 2's own cohort has a **median age of 5.7 years**, squarely inside the
app's range, which is affirmative evidence that this complaint is a young
child's complaint.

**Depth: `inside`, and unlike `throat/sore-throat` this is a real claim.**
`GROUP_DEPTH.throat` is `'internal'`, so no depth question is asked for `throat`
and `bankQuestions` receives `depth = null`, which makes the depth filter a
no-op — inert. `GROUP_DEPTH.back` is `'ask'` and `GROUP_GATE.back` declares a
depth gate, so for a child who taps **Back of neck** the answer exists and the
filter is live: `inside` correctly keeps this packet off the surface branch,
where a neck rash belongs to `skin/rash`. So `inside` is *tested* in one of the
two groups and *true* in both. `throat/sore-throat` ruled `depth: null` because
`"inside"` would have been an untestable claim for a single-group throat
packet; this packet's second group is what changes the answer.

**Mechanism: `null`, and that is why item 1 leads.** Neither `throat` nor
`back` declares a mechanism gate, so `bankQuestions` always receives
`mechanism = null` and the mechanism filter is a permanent no-op. Writing
`"mechanism": "injury"` or `"no-injury"` would assert a scope the app never
tests — exactly the error `throat/sore-throat` decision 8 refused for depth.
This matters more here than anywhere else in the bank, because **all three
complaint guidelines split on trauma before they do anything else**:

> RCH (5), first key point: *"If torticollis occurs in setting of trauma, manage
> as Cervical spine assessment"*
>
> NHSGGC (4), Warning box: *"This guideline is not suitable for use if
> torticollis is present in the context of trauma. If torticollis occurs within
> the context of trauma, manage as a cervical spine injury."*
>
> IAEM (3), first History red flag: *"Any history of trauma? If yes, follow a C
> Spine guideline (e.g. NICE guideline for spinal injury) and refer for
> orthopaedic opinion."*

The app has no gate that can make that split. So the split is carried as a
**question** — item 1 — and item 1 is ranked first for that reason.

**Group reach.** `groups: ["throat", "back"]`, because the body map puts the two
halves of one neck in two different groups: `neck` (front view, label "Neck") is
group `throat`, and `back-neck` (back view, label "Back of neck") is group
`back`. `throat/sore-throat`'s Scope section raised this as an open problem —
*"'my neck hurts' is not the same presenting complaint as 'my throat hurts'"* —
and this packet is the answer to it. **The `back` half is currently inert and
that is stated, not hidden:** in group `back`, `back-pain` is the home-group
packet with 14 accepted items, home-group queues are exhausted before
cross-cutting ones, and the cap is 5–6, so a child who taps only Back of neck
never reaches this packet. See "Still open".

**Out of scope by age or setting, and not carried:** congenital muscular
torticollis and sternocleidomastoid pseudo-tumour (source 3 excludes them by
name; source 4 devotes half its text to them; both are infant presentations
established by a carer's history and a hip examination); the whole of the
imaging and clearance pathway, which is most of what sources 1 and 6 are about;
drug dosing; children with the predisposing conditions sources 3, 5 and 6 list
(Down syndrome, Marfan, Morquio, Larsen, osteogenesis imperfecta, previous
cervical spine surgery), because that is a record, not a child's answer.

## Sources

1. **Lee LK, Ahmad FA, Browne LR, Harding M, Cook L, et al.** "Comparison of
   Cervical Spine Injury Clinical Prediction Rules for Children After Blunt
   Trauma." *JAMA Netw Open* 2025 Dec 19;8(12):e2549403.
   doi:10.1001/jamanetworkopen.2025.49403. **Read first-hand** via PMC12717614.
   **This is the Search A source.** A planned secondary analysis of a
   22 430-child prospective cohort across 18 emergency departments, comparing
   three rules head-to-head. It enumerates the PECARN CSI rule, NEXUS and the
   Canadian C-Spine Rule with their criteria printed in one table, and reports
   per-predictor prevalence by age band — which is where this packet's age
   finding comes from.
2. **Raucci U, Roversi M, Ferretti A, et al.** "Pediatric torticollis: clinical
   report and predictors of urgency of 1409 cases." *Ital J Pediatr* 2024 Apr
   24;50:86. doi:10.1186/s13052-024-01653-6. **Read first-hand** via
   PMC11044417. **The second Search A source, for the other literature.** A
   13-year retrospective series from a tertiary paediatric ED, median age 5.7
   years, with a symptom-frequency table and a multivariate model for "urgent"
   underlying conditions. It is the only prediction-style study located for the
   non-traumatic half of this complaint.
3. **IAEM Clinical Guideline, "Guideline for the Emergency Management of
   Children Presenting with Acute Onset Torticollis"**, Version 1, April 2021.
   Authors Abrahams J, Blackburn C, Russell J, Kiely P, with the IAEM Guideline
   Development Committee. **Read first-hand** (PDF, `iaem.ie`). A Search B
   guideline, organised by the presenting complaint, patient population
   *"between 3 months and 16 years"*. 6 441 characters; read whole, which is
   cheap at that size.
4. **NHS Greater Glasgow & Clyde Paediatric Clinical Guideline 365, "Torticollis
   (Congenital and acquired) Children, Emergency Department, Paediatrics"**,
   under review as of November 2023. **Read first-hand.** A second Search B
   guideline, written for a paediatric ED, and the only source that gives a
   worked example of the postural mechanism in a child's own life.
5. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Acquired torticollis"**, last updated June 2020, PIC Endorsed. **Read
   first-hand.** The third Search B guideline, and the one source 3 cites as its
   own reference 2. Its History block is six bullets and is the densest
   child-facing material in the packet.
6. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Cervical spine assessment"**, last updated July 2026, PIC Endorsed. **Read
   first-hand.** Reached from source 5's own "See also" line. Supplies the
   trauma branch, the risk-factor list, and — most importantly for this packet —
   the exact wording of the range-of-movement manoeuvre, which is what decides
   the `neck-movement` ruling.
7. **NICE guideline NG240, "Meningitis (bacterial) and meningococcal disease:
   recognition, diagnosis and management"**, Recommendations chapter. **Read
   first-hand** (present in the shared `packets/.sources/` cache). The meningism
   literature, and the source of the sharpest available statement of what neck
   stiffness actually is as a criterion.

**Cited, not read.** Four, all of them quoted second-hand from inside a source
that *was* read, and all of them named so a reader can see the seam:

8. **Starc M, Norbedo S, Tubaro M, Ronfani L, Bassanese G, Barbi E.** "Red flags
   in Torticollis: a historical cohort study." *Pediatr Emerg Care*
   2018;34(7):463–6. **CITED, NOT READ.** Everything this packet says about it
   is source 2's description: the aetiology split *"postural (61%), infective
   (19.4%), and traumatic (16.3%)"* and the red flags *"age below 5 years,
   second admission to the emergency department (ED) for the same issue,
   presence of fever, pharyngodynia or headache"*. **What depends on it:** item
   10 only, which proposes no question. Every other red flag on that list also
   appears in sources 2, 3, 4 or 5 in words this packet read directly, and the
   aetiology split is quoted only alongside source 2's own directly-read
   figures.
9. **Baklizi N, Raswoli M, Burges M, Moreira DC, Qaddoumi I.** Systematic review
   of torticollis in children with brain tumours, source 2's reference 6.
   **CITED, NOT READ.** **What depends on it:** the extension of items 4 and 8
   into the `long-time` duration band, as set out at the top of this packet.
10. **Leonard JC et al.**, the PECARN case-control study of children under 16
    with cervical spine injury, source 1's reference 21. **CITED, NOT READ.**
    Known only through source 1's one sentence: *"identified 8 factors
    associated with CSI: altered mental status, focal neurologic findings, neck
    pain, torticollis, substantial torso injury, conditions predisposing to
    cervical spine injury, diving, and high-risk motor vehicle crash."* **What
    depends on it:** nothing. The one item on that list this packet could
    otherwise have used — *torticollis* — is an observer sign and is excluded
    (item 18).
11. **The PECARN de novo model**, source 1's reference 2, a 4091-child
    prospective cohort. **CITED, NOT READ.** Known only through source 1's
    sentence: *"included the factors of diving, axial load, neck pain, inability
    to move the neck, altered mental status, intubation, or respiratory
    distress."* **What depends on it:** nothing new. *"Inability to move the
    neck"* is quoted in decision 9 as corroboration for a distinction the read
    sources already make; no item cites it.

**Not attempted.** UpToDate, *"Acquired torticollis in children"*, which is
sources 3 and 5's own first reference. Paywalled; the brief rules out anything
behind a login, so it was not attempted rather than attempted and failed.

**Fetch record.** Unusually for these packets, every fetch attempted succeeded
on the first try, including a PDF (source 3) and a PMC article (sources 1 and
2). No `EXTRACTED_BUT_UNREADABLE`, no bot walls, no retries. Sources 3, 4 and 5
are each under 7 000 characters and were read whole; sources 1, 2, 6 and 7 are
16 000–69 000 characters and were read only through `find-in-source.mjs`
windows, per brief §2b. The windows were sufficient in every case.

## The rule(s), as published

### Search A, the trauma literature: three rules, verbatim (source 1)

> **PECARN CSI prediction rule** — "High risk factors—consider CT: GCS 3-8 or
> Unresponsive on AVPU scale · Abnormal airway, breathing or circulation · Focal
> neurologic deficit on examination. CART-derived risk factors—consider
> radiography: Altered mental status · **Self-reported neck pain** or neck
> tenderness on examination · Substantial head or torso injury"
>
> **NEXUS** — "C-spine imaging recommended unless all criteria present: No
> posterior midline c-spine tenderness · No evidence of intoxication · Normal
> level of alertness GCS = 15 · Ability to remember 3 objects in 5 min · No
> delayed response · No focal neurological deficits on motor or sensory
> examination · No painful distracting injuries"
>
> **Canadian C-spine Rule** — "For patients with GCS = 15 and normal vital signs
> with concern for c-spine injury. High-risk criteria → radiology: Age ≥65 y ·
> Dangerous mechanism · **Paresthesias in extremities**. Any low-risk criteria
> to safely examine neck range of motion? Simple rear-end motor vehicle crash ·
> Able to sit in the ED · Ambulatory at any time · **Delayed onset of neck
> pain** · Absent midline c-spine tenderness. If no to any of the above →
> radiology. If yes to all above and then able to actively rotate neck laterally
> 45° → no radiology"

And the CCR's own definition, verbatim, of the term the app must never use:

> "Dangerous mechanism was defined as: fall from ≥1 m/5 stairs; axial load to
> head; motor vehicle crash high speed (>100 km/h), rollover, ejection;
> motorized recreational vehicles; or bicycle collision."

**The brief's warning about this literature is correct and worth stating
plainly: three rules, twenty-one criteria between them, and exactly three are
history rather than examination or measurement** — self-reported neck pain,
paraesthesias in extremities, delayed onset of neck pain. Two of those three are
the CCR's, and the CCR *"excluded children under age 16 years in their study"*
(source 1's own account of it), so the one rule with the most child-reportable
criteria is the one with the least claim to a 4–12 year old. That is a scope
disagreement in brief §3's sense and it is resolved in decision 5, not by
picking a rule.

Source 1's own performance figures, verbatim, so nothing here reads as an
endorsement of one rule: *"The sensitivity of the 3 rules was: PECARN CSI rule,
93.3% (95% CI, 90.9%-95.7%); NEXUS, 85.7% (95% CI, 82.4%-89.0%); and CCR, 90.8%
(95% CI, 88.0%-93.5%)."* All three are imaging-decision instruments. None
answers "why does this child's neck hurt?", and **not one of them contains a
single variable that would identify the commonest cause of the complaint.**

### The fall-height threshold problem

The same shape as head injury's, with two sources and two incompatible numbers:

| Source | Fall threshold |
|--------|----------------|
| CCR (1) | *"fall from ≥1 m/5 stairs"* |
| RCH Cervical spine assessment (6) | *"Fall >3 metres (or twice the child's height)"* |

Three metres against one. **Same resolution as every other packet: capture the
raw fact, let the nurse classify.** Item 1 asks whether the child bumped their
neck or fell and names no height, no distance and no mechanism. Naming one
would silently pick a rule; naming *any* of them — diving, a trampoline, a
horse — would also prompt the answer, which is `throat/sore-throat`'s ruling
about the swallowed object reached again by a different route.

### Search B, the complaint literature: three guidelines, verbatim

**RCH (5), the entire History block**, in full — red-flag items are red in the
original:

> "Time course: uncomplicated acute torticollis should resolve within 7-10 days ·
> History of awkward position eg recent flight, different sleeping arrangement ·
> History of trauma · Infective symptoms: fever (see Febrile child), increased
> drooling, sore throat, dysphagia · Neurological symptoms: headache,
> strabismus, diplopia, photophobia, ataxia · Medications associated with acute
> dystonic reactions e.g. metoclopramide"

Six bullets. **Three of them are the child's** — the awkward position, the
trauma, and the child-visible halves of the infective and neurological rows.

RCH Examination, in full:

> "Midline tenderness, general neck palpation and attempt active ROM · Location
> of tenderness may assist with diagnosis, however deep pathology (eg infection)
> may have no external signs · Neurologic examination · Ophthalmologic
> examination · ENT examination including dentition and lymph nodes · Chest
> examination"

**NHSGGC (4), History**, verbatim:

> "If torticollis occurs with a history of trauma manage as a cervical spine
> injury · **Is there a history of an awkward head/neck posture for a prolonged
> period of time which could cause the symptoms? E.g. playing X-box.** · Fever,
> increased drooling, sore throat and dysphagia suggest an infective cause ·
> Duration of symptoms – acute muscular torticollis should resolve within 7-10
> days · Antenatal/birth history – oligohydramnios, birth trauma · Any
> neurological symptoms e.g. headache, strabismus, diplopia, photophobia,
> ataxia, seizures? · Underlying conditions e.g. Down Syndrome · Recent head and
> neck surgery · Any medications that might cause dystonia e.g. metoclopramide?"

That second bullet is the single most useful sentence in the packet. It is a
guideline asking a *child's-life* question — what were you doing for a long time
before this started — and it is the mechanism for the largest single group of
these children. Its worked example must not survive into a question: see
decision 1 and `bannedPhrases`.

**IAEM (3), History**, verbatim:

> "Red flags to look for in the history include: Any history of trauma? If yes,
> follow a C Spine guideline (e.g. NICE guideline for spinal injury) and refer
> for orthopaedic opinion · Infective: Recent fever, recent diagnosis of
> tonsillitis/pharyngitis/URTI symptoms, irritability, dysphagia, drooling,
> odynophagia · Any recent medications - has the patient received any
> medications associated with acute dystonic reactions such as metoclopramide? ·
> CNS symptoms: Headache, strabismus, diplopia"
>
> "Time course: Uncomplicated acute muscular torticollis should resolve within
> 7 - 10 days."

IAEM Examination, first line, verbatim, because it is what item 2 is split
from: *"Assess for midline tenderness, palpate the neck throughout and attempt
active ROM (i.e. ask the patient to move their neck)."*

And IAEM's own note that the examination can be normal:
*"Location of tenderness may assist with diagnosis, however deep pathology (e.g.
infection) may have no external signs."*

### The range-of-movement manoeuvre, verbatim (source 6)

This is the most important quotation in the packet and the reason for its
central ruling:

> "If the child has neck pain or tenderness and no abnormal neurology, assess the
> active range of movement of the neck by asking the child to slowly rotate
> their head to each side, place their chin to chest and look up. Children
> should be able to move greater than 45 degrees to each side. **Stop
> immediately if this causes pain or paraesthesia** and minimise movement of the
> cervical spine."

Read with source 6's key point: *"The goal is to minimise movement."*

**A guideline that tells a clinician to stop the movement the moment it hurts is
also telling this app never to start it.** A tablet cannot stop. Whatever else
this packet does, it may not instruct a child to turn their head and report what
happened — that is an examination performed by proxy, on a child whose cervical
spine has not been cleared, with nobody present who is watching for the thing
the guideline says to watch for. It is banned outright in `bannedPhrases`, and
it is the reason item 2 is worded in the past or habitual tense.

### The meningism literature, verbatim (source 7)

NG240's red flag combination:

> "Strongly suspect bacterial meningitis in people with all the symptoms in the
> red flag combination: fever · headache · neck stiffness · altered level of
> consciousness or cognition (including confusion or delirium)."

And table 1's own gloss on the neck row — the sharpest definition of the
criterion anywhere in the sources read:

> "**Neck stiffness, including more subtle discomfort or reluctance to move the
> neck**"
>
> "Fever and neck stiffness are less common in babies. Headache and neck
> stiffness are harder to identify in babies and young children."
>
> "Neck stiffness is harder to identify in children and young people with
> cognitive impairment or communication difficulties."

Also from table 1, and relevant here: *"Photophobia — Harder to identify in
babies"*, *"Vomiting"*, *"Unexplained body pain, including limb, back or
abdominal pain"*, and the instruction *"bacterial meningitis can present with
any of these symptoms and signs · the more symptoms and signs a person has, the
more likely it is that they have bacterial meningitis"*.

### What actually walks in (source 2, with source 8 second-hand)

Source 2's own aetiology figures, read first-hand:

> "A postural cause was recognized in 607 (43.1%) of patients. For 415 patients
> (29.5%) torticollis was attributed to a traumatic cause. Of these, 62.7%
> suffered direct trauma to the head-neck district, resulting in atlantoaxial
> subluxation in 17 patients (6.5%) and vertebral fracture in 5 patients (1.9%).
> Abnormal cervical motion (sprain, whiplash, hyperextension, etc.) caused
> torticollis in 37.3% of patients … An infective/inflammatory etiology involved
> 19.1% of patients"

Source 8's split, as reported inside source 2 (**CITED, NOT READ**):
*"postural (61%), infective (19.4%), and traumatic (16.3%)"*.

And source 2's symptom frequencies, first-hand: *"The signs and symptoms most
frequently reported were pain (83.5%), pharyngodynia (16%), fever (11.3%) and
laterocervical tumefaction/lymphadenopathy (6.4%). Less frequently encountered
symptoms included headache (5.1%), earache (4.9%), vomiting (3.1%), and
dizziness (1.3%)."*

Source 2's multivariate result, verbatim, which is the single strongest piece of
evidence in the packet:

> "We found that time from onset of torticollis to referral to the ED (OR 0.98,
> p 0.006) was negatively associated with the odds an underlying urgent
> condition in the logistic model. By contrast, the presence of clinical
> signs/symptoms such as headache (OR 2.45, p 0.018) and vomiting (OR 3.63,
> p 0.002) were the only variables strongly characterized by the presence of an
> urgent condition, after adjusting for the other clinically and statistically
> significant variables in the bivariate analysis."

**Two things follow.** First, the two rarest symptoms in the table — vomiting at
3.1% and headache at 5.1% — are the two that predict an urgent cause, and the
commonest, pain at 83.5%, predicts nothing, because everyone has it. Second,
headache is a body-map region this app already owns, so **the only half of that
finding this packet can carry is vomiting**, and that is why item 4 ranks third
above four better-sourced items.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Did you bump your neck, or fall over** | RCH (5) key point and *"History of trauma"*; NHSGGC (4) Warning box and *"If torticollis occurs with a history of trauma manage as a cervical spine injury"*; IAEM (3) *"Any history of trauma?"*, the first red flag in its History; RCH c-spine (6) *"Risk factors for significant CSI in children: Axial load to the head (diving, trampoline, falling from height) · Forced neck hyperflexion … · Fall >3 metres (or twice the child's height)"*; CCR (1) *"Dangerous mechanism"*; source 2 — traumatic cause in 415 of 1409 (29.5%) | **yes** | **Ranked first, and the ranking is structural rather than clinical.** All three complaint guidelines branch on trauma before anything else, and neither `throat` nor `back` declares a mechanism gate, so this question is the app's only route to that branch. A child of 4 can say whether they fell. They cannot classify the fall — hence the threshold table above, and hence a question that names no height and no mechanism. |
| 2  | **Does it hurt when you move your neck** | RCH c-spine (6) — the child's half of *"assess the active range of movement … by asking the child to slowly rotate their head to each side, place their chin to chest and look up … Stop immediately if this causes pain"*; IAEM (3) *"attempt active ROM (i.e. ask the patient to move their neck)"*; NHSGGC (4) *"assess … active range of movement"*; source 2 — pain in 1176 of 1409 (83.5%), the commonest symptom in the cohort | **yes** | **The item this packet exists to write, and the subject of decision 9.** It is a *provocation* question — does moving it hurt — and it is deliberately **not** the meningism *restriction* screen that four other packets already carry. The two are split, not reclassified, on exactly the principle brief §4 states: the clinician's version is a manoeuvre performed and graded in degrees; the child's version is something they already discovered by living in their neck all morning. **Must never be worded as an instruction.** |
| 3  | **Did you sleep in a funny position, or stay curled up for a long time** | RCH (5) *"History of awkward position eg recent flight, different sleeping arrangement"*; NHSGGC (4) *"Is there a history of an awkward head/neck posture for a prolonged period of time which could cause the symptoms? E.g. playing X-box."*; source 2 *"A postural cause was recognized in 607 (43.1%) of patients"* | **yes** | **The commonest cause of the complaint, and it appears in no prediction rule of any kind.** A pure Search B item, and the clearest single instance in this packet of the gap the brief predicts between the two searches. Only the child knows how they slept. Ranked fourth rather than first because it is a reassurance question: a "yes" makes an ordinary wry neck likelier but rules nothing out, and the three items above it escalate. The source's own example must not survive into the wording — see decision 1. |
| 4  | **Have you thrown up** | Source 2 — vomiting OR 3.63, p 0.002, one of *"the only variables strongly characterized by the presence of an urgent condition"*; NG240 (7) table 1 *"Vomiting"* | **yes** | **The best-evidenced item in the packet.** The only half of source 2's multivariate finding the app can carry, because the other half — headache — is a body-map region (item 15). Reuses the existing `vomiting` slug; proposed anyway because the candidate that carries it in group `throat` is `sore-throat` item 11 at that packet's rank 10, far below any cap, so today the fact is nominally reachable and never actually asked. |
| 5  | **Do bright lights hurt your eyes** | RCH (5) *"Neurological symptoms: headache, strabismus, diplopia, **photophobia**, ataxia"*; NHSGGC (4) *"Any neurological symptoms e.g. headache, strabismus, diplopia, photophobia, ataxia, seizures?"*; NG240 (7) table 1 *"Photophobia"* | **yes** | Photophobia is meningism's other half, and it is named in the **neck** history by both complaint guidelines, not only in the meningitis guideline — which is what makes it this packet's to ask rather than a borrowing. **No candidate carrying `light-hurts` reaches group `throat` or group `back`**: the head candidates are gated `mechanism: 'no-injury'` and `groups: ["head"]`, the tummy one is tummy, the eyes one is eyes, and `skin/rash`'s `bright-light-hurts` is a different slug at depth `surface`. Same reasoning `head/headache` used to justify proposing its own `blurry`. |
| 6  | **Do your arms feel fuzzy or tingly** | CCR (1) high-risk criterion *"Paresthesias in extremities"* → radiology; RCH c-spine (6) *"Persistent symptoms including pain, paraesthesia and/or weakness should prompt further assessment and consideration of imaging"* | **yes** | One of only three history items in the entire trauma literature, and the only one of the three that is not already collected. A child of 4 can report the feeling; `back/pain` established the vocabulary — *"fuzzy or tingly, like pins and needles"*, with "pins and needles" reserved for the older tier — and its own sidecar deliberately declined to floor the concept. Same ruling followed. Note the polarity trap: a "no" here is what the rule wants, so the question must be asked neutrally and never as *"your arms feel okay, don't they?"* |
| 7  | **Did you have a cold or a sore throat lately** | IAEM (3) *"Infective: Recent fever, **recent diagnosis of tonsillitis/pharyngitis/URTI symptoms**, irritability, dysphagia, drooling, odynophagia"*; RCH (5) *"Infective symptoms"*; NHSGGC (4) *"Fever, increased drooling, sore throat and dysphagia suggest an infective cause"*; source 2 — *"An infective/inflammatory etiology involved 19.1% of patients"* | **yes** | The infective branch, which is 19–19.4% of these children in both series. Reuses `recent-illness`. Only the recent-illness half of those bullets is taken here: fever is reused by reference (item 14), sore throat and painful swallowing are `sore-throat` item 1's and already asked (item 13), and drooling is an observer sign (item 19). |
| 8  | **Is anything blurry, or are you seeing two of things** | RCH (5) *"Neurological symptoms: … strabismus, **diplopia** …"*; NHSGGC (4) same list; IAEM (3) *"CNS symptoms: Headache, strabismus, **diplopia**"* | **partial** | Three guidelines name diplopia in the *neck* history. **Strabismus is not carried**: all three file it beside an ophthalmologic examination and a squint is seen by someone else. Only the child's half of double vision is taken, under the existing `blurry` slug, whose head-packet sibling already ships *"Do you see two of everything?"* Ranked last because it is the rarest branch and because `blurry` is better served by a child who taps Eyes. |
| 9  | Arm weakness | RCH c-spine (6) *"Persistent symptoms including pain, paraesthesia and/or **weakness**"* | **partial** — **not proposed for v1** | Genuinely in the history half of source 6's sentence, and genuinely the weakest use of a slot. NEXUS and PECARN both make motor findings **examination** — *"No focal neurological deficits on motor or sensory examination"*, *"Focal neurologic deficit on examination"* — and in a 5-year-old *"do your arms feel weak?"* is not separable from *"does it hurt to move them"*, which item 2 already asks. Kept in the table so its absence is a decision. **`legs-weak` is explicitly NOT reused**: that slug is `back/pain`'s lower-limb red flag with its own literature. |
| 10 | Repeat attendance for the same problem | Source 8 via source 2 — *"second admission to the emergency department (ED) for the same issue"* (**CITED, NOT READ**) | **partial** — already collected | The reserved `happened-before` question and the repeat-report RECURRENCE path get the fact of recurrence. They cannot get *"second admission to the ED"*, which is an attendance record. No question proposed. |
| 11 | Duration; 7–10 days; ≥1 week; delayed onset | IAEM (3) *"Uncomplicated acute muscular torticollis should resolve within 7 - 10 days"* and *"Cervical Spine XR: … persistent symptoms (≥1 week)"*; RCH (5) same; NHSGGC (4) *"seek review by GP if the torticollis persists for longer than 1 week"*; CCR (1) *"Delayed onset of neck pain"* | **yes** — already collected | `DURATIONS`. **No band resolves 7–10 days or ≥1 week**, and CCR's *"delayed onset"* is a comparison between the injury and the pain that the app's single duration answer cannot express. See "Still open". |
| 12 | Neck stiffness; restriction; reluctance to move the neck | NG240 (7) *"Neck stiffness, including more subtle discomfort or reluctance to move the neck"*; the PECARN de novo model's *"inability to move the neck"* (source 1, **CITED, NOT READ**) | **partial** — already collected | Fact **`neck-movement`**, carried by six candidates in four packets. **Ruled deliberately and at length: see decision 9.** This packet proposes no candidate for it, and does not take ownership of it. |
| 13 | Painful or difficult swallowing; sore throat | IAEM (3) *"dysphagia … odynophagia"*; RCH (5) *"sore throat, dysphagia"*; NHSGGC (4) *"sore throat and dysphagia"*; source 2 — pharyngodynia 16.0% | **yes** — already collected | Fact `hurts-to-swallow`. `s-001` is `sore-throat` item 1 at rank 0, so it is the **first** question every child in group `throat` is asked, including every child who taps Neck. Proposing a second would be collapsed by `keyOf` and would spend a slot to change nothing. Reused by reference. |
| 14 | Fever | NG240 (7) red flag combination; RCH (5), IAEM (3), NHSGGC (4) *"Infective symptoms: fever"*; source 8 via source 2; source 2 — fever >38 °C in 11.3% | **partial** — already collected | Fact `feels-feverish`, carried by nine candidates including `general-unwell`'s `g-001` (every group), `sore-throat`'s `s-020` (`throat`) and `back-pain`'s `b-005` (`back`). The most repeated criterion in this literature and the most obvious thing to write; writing it would be suppressed. Reused by reference. A child cannot measure a temperature and never sees a number. |
| 15 | Headache | Source 2 — headache OR 2.45, p 0.018, the *other* variable in the multivariate model; RCH (5), NHSGGC (4), IAEM (3) *"CNS symptoms: Headache"*; NG240 (7) red flag combination; source 8 via source 2 | **yes** — already collected elsewhere | **The most painful exclusion in the packet.** It is half of the only multivariate finding for this complaint, and it is rejected because `head` is its own body-map region with its own group and its own packet: a child whose head hurts taps Head. Same ruling `sore-throat` item 20 made for the same reason. The cost is real and is carried to "Still open". |
| 16 | Earache; dizziness; tummy pain; unexplained limb, back or abdominal pain | Source 2 — earache 4.9%, dizziness/vertigo 1.3%; NG240 (7) *"Unexplained body pain, including limb, back or abdominal pain"* | **yes** — already collected elsewhere | Each is another body-map region (`ears`, `tummy`, `limb`, `back`) or `SENSATIONS.dizzy`. A child who has these taps them. |
| 17 | Rash; non-blanching rash; cold hands and feet | NG240 (7) table 1 | **yes** — already collected elsewhere | Facts `rash`, `spots-spreading`, `cold-hands-feet`. `skin/rash` serves every group at depth `surface` and this packet is depth `inside`; `cold-hands-feet` is additionally carried by `general-unwell` across every group. Nothing proposed. |
| 18 | Torticollis itself; head deviation; direction of tilt; abnormal head posture | Source 2 — head deviation in 1179 of 1409 (83.7%), left in 745, right in 434; source 5 *"Torticollis (twisted neck), is a non-specific sign"*; source 3 *"lateral twisting of the neck that causes the head to tilt to one side with the chin turned to the opposite side"*; source 1's account of Leonard (**CITED, NOT READ**) — *"torticollis"* among 8 CSI factors | **no — observer** | **The defining sign of this complaint and it is not the child's.** Source 5 calls it a *sign*; source 3 defines it by what an onlooker sees. The neck is the second region of the body a child cannot see, after the back — and `back/pain` already banned asking a child what their back looks like. Same ban, extended. |
| 19 | Midline tenderness; general neck palpation; soft tissue tenderness; palpable neck mass; cervical lymphadenopathy or lymphadenitis; sternomastoid mass; increased drooling; disproportionate irritability; stridor; tachypnoea; respiratory distress | RCH (5); IAEM (3); NHSGGC (4); source 2 — laterocervical tumefaction 6.4% | **no — observer / exam** | Every one is something another person sees, hears or feels. **Never ask a child to press or feel their own neck** and never use "glands", "lumps" or "bumps" — carried and strengthened from `sore-throat`, where node tenderness is the most frequently used predictor in the whole literature. IAEM's own caution belongs here: *"deep pathology (e.g. infection) may have no external signs."* |
| 20 | Active range of movement; rotation >45° each side; chin to chest; look up | RCH c-spine (6); IAEM (3); NHSGGC (4) | **no — exam manoeuvre** | Not item 2. This is a movement a clinician asks a patient to perform, grades in degrees, and is instructed to **stop** the moment it hurts. An app cannot stop. Banned outright; see the wording cautions and decision 9. |
| 21 | GCS 3–8; AVPU; altered mental status; abnormal airway, breathing or circulation; focal neurological deficit; ability to remember 3 objects in 5 minutes; delayed response; evidence of intoxication; painful distracting injuries; able to sit in the ED; ambulatory at any time | PECARN CSI, NEXUS, CCR (1); RCH c-spine (6) | **no — observer / exam** | The backbone of all three trauma rules. *"Ability to remember 3 objects in 5 min"* is a test administered to a child, not a question asked of one; *"Able to sit in the ED"* and *"Ambulatory at any time"* are observations of a child in a waiting room, which is exactly where this app runs and exactly why it must not claim them. |
| 22 | Full neurological examination; cranial nerve and upper limb examination; ophthalmologic examination; nystagmus; ataxia; strabismus; ENT examination including dentition; chest examination; plagiocephaly; hip examination; spina bifida stigmata | IAEM (3); RCH (5); NHSGGC (4) | **no — exam** | Item 8 takes the child's half of diplopia and nothing else from this row. |
| 23 | Cervical spine X-ray; lateral neck X-ray; CT; MRI; ultrasound; FBC; CRP; blood cultures; observations, temperature and pulse | IAEM (3); RCH (5); NHSGGC (4); source 1 and source 6 in their entirety | **no — lab / imaging** | Most of sources 1 and 6 is an imaging-decision pathway. **Never name a scan, an X-ray, a needle or a collar to the child** — a child told that a tablet is deciding whether they get a scan has been given a reason to answer defensively. |
| 24 | Predisposing conditions: Down syndrome, Marfan, Morquio, Larsen, osteogenesis imperfecta, juvenile rheumatoid arthritis, renal osteodystrophy, rickets, os odontoideum; previous CSI or cervical spine surgery; recent head and neck surgery; hyperlaxity | RCH c-spine (6) Appendix 3; RCH (5); IAEM (3); NHSGGC (4) | **no — record** | A 6-year-old does not know they have atlantoaxial instability. These are the child's record and the nurse's surface. |
| 25 | Medications associated with acute dystonic reactions, e.g. metoclopramide; analgesia already given; response to analgesia | IAEM (3); RCH (5); NHSGGC (4) | **no — carer or record** | A child does not know what they were given. *"Severe pain is not alleviated by analgesia"* (source 5) additionally contains a grading adjective and a medication in one clause, which is two bans at once. |
| 26 | Antenatal and birth history; oligohydramnios; birth trauma; congenital muscular torticollis; sternocleidomastoid pseudo-tumour | NHSGGC (4); RCH (5); IAEM (3), which excludes them from its population | **no — out of scope** | Infant presentations, established by a carer. Source 3 excludes them by name. |
| 27 | Age; where it hurts; how much it hurts | PECARN, NEXUS, CCR (1) all use age; every guideline localises the pain; source 2 — pain 83.5% | **n/a / yes** — already collected | Setup screen, body map, FPS-R intensity screen. Note that *"self-reported neck pain"*, the single most common PECARN CSI risk factor at 21.0%, **is the app's entry condition** — the child tapped Neck. It is a criterion the app satisfies rather than asks. |
| 28 | Seizures | NHSGGC (4) *"Any neurological symptoms e.g. … seizures?"* | **no — observer** | Never named to a child in any register, in any packet. Carried from head-injury and `head/headache`; a child who has had one may have no memory of it. |
| 29 | Ethnicity, household, social circumstances | — | **not in these sources** | Recorded as an absence: unlike `sore-throat`, whose ARF branch is decided by ethnicity and community, **nothing in this literature routes a child's care by who they are**. Noted so a future run does not go looking. |

**Yield: ~38 distinct criteria across 3 clinical prediction rules, 3
complaint-organised guidelines, 1 meningitis guideline and 1 retrospective
series → 7 clean, 2 partial, 12 excluded, 8 already collected elsewhere in the
app.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 →
14 clean (30%); sore throat ~53 → 12 clean (23%); **neck pain ~38 → 7 clean
(18%)**. The lowest proportion of the four, and, as with sore throat, the reason
is structural rather than a shortfall in searching. **The defining feature of
this complaint — the head held twisted to one side — is a sign, not a symptom.**
83.7% of source 2's cohort had it and not one of them could see it. Layer on
three imaging-decision rules whose criteria are almost entirely examination, and
an examination section in every guideline that begins with palpation, and the
child's share of this complaint is small. What survives is small and unusually
well chosen: five of the seven clean items appear in **no prediction rule of any
kind**.

## The `neck-movement` ruling — decision 9, in full

`neck-movement` is carried today by **six accepted candidates in four packets**:
`general/unwell` items (`g-016`, `g-017`, `groups` = all nine plus `general`),
`skin/rash` (`r-007`, `r-008`, depth `surface`, all nine groups),
`tummy/vomiting` (`v-017`, `v-018`, `groups: ["tummy"]`) and
`throat/sore-throat` (`s-016`, `groups: ["throat"]`). Their wordings are *"Is it
hard to turn your head?"*, *"Does your neck feel stiff?"*, *"Can you turn your
head to look behind you?"* and *"Is your neck hard to move?"* In every one of
those packets the question is a **meningism screen**: it is asked of a child
whose complaint is a rash, or vomiting, or feeling ill, or a sore throat, and
its whole value lies in the answer being *unexpected*.

This packet is the one that is actually about the neck. Three options were open.
The ruling is **(b): coin a distinct fact, `neck-worse-moving`, and leave
`neck-movement` alone.** Four reasons, in order of weight.

**1. They are different facts, and the sources say so in their own structure.**
NG240 defines its criterion as *"Neck stiffness, including more subtle
discomfort or **reluctance to move the neck**"* — a screen for **restriction**.
Source 6 obtains the same thing by manoeuvre: *"asking the child to slowly
rotate their head to each side, place their chin to chest and look up. Children
should be able to move greater than 45 degrees to each side."* Restriction,
measured. What item 2 asks is **provocation**: does moving it hurt. Those come
apart in both directions. A child with meningism can have a full range of
movement that is merely uncomfortable to attempt; a child with a muscular wry
neck has pain on movement that resolves completely at rest and is, per source 5,
*"managed with simple analgesia"*. Provocation is what characterises the 43.1%
of these children whose cause is postural. Restriction is what screens the ones
whose cause is not. The de novo PECARN model quoted in source 1 keeps the same
two apart in one sentence — *"neck pain, **inability to move the neck**"* — two
variables, not one.

**2. A shared screen loses its information exactly here.** *"Is it hard to turn
your head?"* is informative when asked of a child with a rash. Asked of a child
who has just told the app their neck hurts, its expected answer is yes: source 2
records pain in 83.5% and head deviation in 83.7% of 1409 children with this
complaint, **and 43.1% of them were postural** — an ordinary wry neck that
answers "yes" to a stiffness question and needs nothing. A screen whose positive
rate approaches saturation in the population it is asked of carries almost no
information about that population. Taking ownership of the fact would mean
spending this packet's best-placed slot on the one question whose answer is
already known.

**3. Taking ownership (option a) would silently delete the meningism screen from
four packets.** `keyOf` collapses on `fact`, and the wording a child sees for a
shared fact is *whichever group's queue reaches it first*. If this packet took
`neck-movement` and ranked its musculoskeletal wording highly — which it would
have to, being the packet about the neck — then a child who taps **Skin and
Neck**, or **Tummy and Neck**, would be asked *"Does it hurt when you move your
neck?"* **instead of** *"Is it hard to turn your head?"*. The child most likely
to need a meningism screen is precisely the child with a rash and a sore neck,
and option (a) removes it from them. This packet has no standing to make a
bank-wide change of that size, and `head/headache` decision 10 declined to touch
the same fact for a weaker version of the same reason.

**4. Option (c) — propose nothing — fails on both halves.** The four existing
questions ask restriction, so a packet that proposed nothing would say nothing
about the movement of the neck it is named after, and would characterise none of
the 43.1%. And the four existing questions do not, in practice, reach this
child: `s-016` is `sore-throat` item 9, rank 8 in that packet's queue; `g-016`
and `g-017` belong to `general-unwell`, which is cross-cutting, and
`bankQuestions` returns every home-group queue before any cross-cutting one.
Under a cap of 5–6 neither is ever reached from a neck tap. Option (c) would
leave the child asked nothing about neck movement at all.

The naming follows settled house precedent rather than inventing one:
`head/headache` coined `head-worse-moving` rather than reusing
`worse-on-movement`, on the stated reasoning that *"the bank already has three
region-specific slugs for this same trigger … and following the precedent stops
a head answer and a leg answer collapsing into one"*, and `back/pain`'s sidecar
carries a `doNotMerge` note refusing to merge its own movement fact with the
chest's. `neck-worse-moving` is the fourth member of that family and is named to
match.

### What a child with a wry neck and no meningitis actually gets asked

The concrete case, worked through the real code paths. A six-year-old who woke
up with a twisted, aching neck taps **Neck** on the front body view, answers
`this-morning`, and is asked nothing else.

- One group: `throat`. It is `internal`, so there is no depth question and no
  mechanism question. Two home-group packets serve it — `sore-throat`
  (packetRank 50) and `neck-pain` (packetRank 60) — and `bankQuestions`
  round-robins their queues with `sore-throat` picking first.
- The cap for an under-8 is five sourced questions plus the reserved
  `happened-before`. So the child is asked, in order:
  **1.** *"Does it hurt when you swallow?"* — `sore-throat` item 1
  **2.** *"Did you bump your neck?"* — **this packet, item 1**
  **3.** *"Can you swallow your spit okay?"* — `sore-throat` item 12/2
  **4.** *"Does it hurt when you move your neck?"* — **this packet, item 2**
  **5.** *"Have you been coughing?"* — `sore-throat` item 3
  plus *"Has this happened to you before?"*
- **They are not asked *"Is it hard to turn your head?"*** — and they are not
  asked it today either, before this packet exists, for the queue-position
  reasons in point 4 above. **This ruling does not take that question away from
  this child, because this child never had it.** What the ruling does is
  guarantee they are asked the one movement question that is about their
  complaint.
- An eight-year-old gets a sixth slot, which under this ordering is
  **this packet's item 4**, *"Have you thrown up?"* — the strongest predictor of
  an urgent cause in the only prediction study for this complaint.

**The accepted cost, stated rather than hidden.** If the same child also taps
**Skin** and answers "on my skin", `skin/rash` becomes live at depth `surface`
and `r-007` fires: they are asked *"Is it hard to turn your head?"* **as well
as** *"Does it hurt when you move your neck?"* — two neck questions in one
report, because the facts differ and `keyOf` has nothing to collapse. That is
the price of option (b). `back/pain` accepted the identical cost for a child who
taps Chest and Back (*"A child who taps Chest and Back will get two
similar-sounding movement questions and that is the accepted cost"*), and it is
accepted here for the same reason: the alternative is one answer standing for
two different questions, which is worse.

## The other fact rulings

Each of these is `JUDGEMENT, NOT A CITATION`. No source assigns facts; the
reasoning is the bank's dedupe behaviour in `keyOf` and `bankQuestions`.

- **`hurts-to-swallow` — reused by reference, no item proposed.** `s-001` is
  `sore-throat` item 1 at rank 0, `homeGroup: 'throat'`, so it is the **first**
  question every child in group `throat` is asked, including every child who
  taps Neck. Painful swallowing is the retropharyngeal-abscess and
  infective-torticollis signal in all three complaint guidelines here — IAEM's
  *"dysphagia, drooling, odynophagia"*, RCH's *"sore throat, dysphagia"*,
  NHSGGC's *"sore throat and dysphagia"* — and it is already guaranteed. A
  second candidate would be collapsed by `keyOf` and would spend a slot to
  change nothing. **Gap on record:** a child who taps only **Back of neck** is
  in group `back`, which `s-001` does not serve, and gets no swallowing question
  at all. Still open.
- **`light-hurts` — reused as a slug, and this packet proposes its own item 5.**
  No candidate carrying it reaches either of this packet's groups. The
  photophobia criterion is stated in the *neck* history by sources 4 and 5, not
  borrowed from the meningitis guideline, so the item is this packet's to ask.
  Sharing the slug means a child who taps Head and Neck is asked once. Same
  shape as `head/headache`'s ruling on `blurry`.
- **`feels-feverish` — reused by reference, no item proposed.** Nine candidates
  carry it, including `general-unwell`'s `g-001` (every group), `sore-throat`'s
  `s-020` (`throat`) and `back-pain`'s `b-005` (`back`). Fever is the single most
  repeated criterion in this literature and would be the obvious thing to write.
  Writing it would be suppressed.
- **`back-mechanism` — NOT reused; `neck-mechanism` coined.** Three reasons.
  (i) Its shipped wording is *"Did you fall or lift something heavy?"*, and
  **lifting appears in no neck source read** — the mechanisms named here are
  axial load, diving, trampoline, forced hyperflexion, a rugby scrum collapse, a
  motor vehicle collision and a horse. (ii) It is scoped `groups: ["back"]`, so
  sharing it reaches no child who taps front Neck. (iii) If shared, a child who
  taps Back of neck **and** Lower back would get `back-pain`'s lifting wording
  and this packet's neck mechanism would be suppressed. `bumped-it` was also
  considered and rejected: it is `skin/rash`'s, at depth `surface`, and means
  "did you bump this spot" about a visible mark.
- **`worse-on-movement` — NOT reused.** It is `back-pain` item 10's slug,
  `groups: ["back"]`, and `back/pain`'s own sidecar already establishes the house
  rule by refusing to merge it with the chest's `worse-on-exertion`. Merging a
  neck answer into it would be worse than the chest case, because `back-pain`
  wins the group `back` queue: the child's **neck** question would be replaced by
  *"Does your back hurt more when you are moving around?"*
- **`morning-stiff` — NOT reused, and no item proposed.** The temptation is real,
  because RCH's *"different sleeping arrangement"* and NHSGGC's *"awkward
  head/neck posture for a prolonged period"* both sound like a
  wake-up-stiff question. But `morning-stiff` establishes **inflammatory morning
  stiffness**, and `back/pain` cites it to a criterion whose threshold is 30–60
  minutes of stiffness — a duration its own sidecar bans a child from timing.
  That is a chronic-arthritis discriminator. "Did you sleep in a funny position"
  is a **mechanism**. Using the slug would attach item 3 to a criterion its
  sources do not state, which is the invented citation this whole process exists
  to prevent. `awkward-position` is coined instead and cited to the two
  guidelines that actually say it.
- **`legs-weak` — NOT reused.** Wrong limb and wrong literature: it is
  `back-pain` item 5's lower-limb red flag. Arm weakness is recorded as item 9,
  partial, not proposed. **`fuzzy-feeling` is also not reused**, for the sharper
  version of the same reason — it is `back/pain`'s *leg* paraesthesia, and a
  child who taps Neck and Lower back must not have one answer stand for both
  limbs. `arms-fuzzy` is coined.
- **`vomiting`, `recent-illness`, `blurry` — reused, and items proposed anyway**,
  because in each case the existing candidates are either scoped to groups this
  packet does not share, or ranked below any reachable cap. The shared slug still
  does its job: a child who taps Neck and Tummy is asked about throwing up once.
- **`sport-activity` — NOT reused and not proposed.** `back-pain` item 13 is a
  chronic training-load question (*"Do you do sports, dancing, or gymnastics most
  days?"*). The neck sources name sport only as an acute mechanism (source 6's
  rugby scrum; source 1's *"Sports or recreation related"* in its mechanism
  table), which item 1 already captures. Proposing a second mechanism question
  would be two questions from one item.
- **Nothing is proposed for pain at rest, night pain, or bladder and bowel
  change**, and each absence is deliberate. No source read names any of them in a
  child with neck pain, and writing them would be an invented citation — the same
  ruling `back/pain` recorded for vomiting (*"no source read names vomiting in a
  child with back pain"*). The third is also the dignity ruling; see below.

## The dignity ruling for this body area

The child is alone, on a shared hospital tablet, in a waiting room. A shaming
question produces a false negative, so the ceiling is a clinical instrument and
not only a courtesy.

**1. The banned-across-every-packet list does not arise here, and must not be
filled in.** Counting toilet trips, continence and wetting, apparatus, looking at
what came out, body weight, genitals, and the out-of-age-scope items (pregnancy,
purging, drugs and alcohol) appear **nowhere in any of the seven sources read**.
That absence is recorded so that nothing downstream "completes" the packet by
writing the obvious question — and there *is* an obvious question here. A
cervical cord lesion can cause the same bladder and bowel change that makes
`bathroom-change` a lumbar red flag, and `back/pain` ships that question with an
8+ floor. **Ruling: refused, and banned in the sidecar.** No source read for this
packet names bladder or bowel change in a child with neck pain, so importing it
would be an invented citation; `back/pain` already asks it for its own group with
its own citation; and it is the single most shaming question available in this
body area. The ban is written as a regex precisely so that a generator cannot
reach for it.

**2. Never ask a child to move their neck to find out.** This is the dignity
ruling that is also a safety ruling, and it is specific to this body area. Source
6 obtains range of movement by *"asking the child to slowly rotate their head to
each side, place their chin to chest and look up"*, with the instruction *"Stop
immediately if this causes pain or paraesthesia and minimise movement of the
cervical spine"* and the key point *"The goal is to minimise movement."* A tablet
cannot stop. Instructing a child to move a neck that has not been cleared, with
nobody present who is watching for the thing the guideline says to watch for, is
an examination performed by proxy on the one part of the body where all three
guidelines say to minimise movement. Every item asks what the child has **already
noticed**.

**3. Never ask a child what their neck or head looks like.** Head deviation is
present in 83.7% of these children and not one of them can see it. The neck is
the second region of the body a child cannot see, after the back, and `back/pain`
already ruled *"never ask a child what their back looks like"*. Extended here,
with an additional reason `back/pain` did not have: being told by a tablet that
your head is twisted is frightening before it is informative, and a frightened
answer is not a fact.

**4. Never ask a child to feel their own neck**, and never say "glands",
"lumps" or "bumps". Palpation is the first line of the examination in all three
complaint guidelines, and in the sibling `sore-throat` packet node tenderness is
the most frequently used predictor in the entire literature. A child pressing
their own neck and reporting a finding is worse than no data.

**5. Never present the child's own posture as the cause.** NHSGGC's worked
example of a prolonged awkward posture is *"E.g. playing X-box"*. Item 3 must ask
what the child was doing, full stop — never *"did you spend too long on a
screen?"* That is a brand, a blame surface, and an accusation delivered to a
seven-year-old by the very kind of device they are holding. Same ruling
`back/pain` made for sport (*"never present sport as the cause"*).

## Wording cautions

Ban **concepts**, not phrasings. All of these are enumerated as `bannedPhrases`
regex families in the sidecar, and every one was tested to confirm it fires.

- **Never name a condition.** Not meningitis, meningococcal disease, sepsis,
  abscess, retropharyngeal or parapharyngeal abscess, Grisel's syndrome, tumour,
  cancer, discitis, osteomyelitis, arthritis, a dystonic reaction, torticollis,
  wry neck, subluxation, dislocation, fracture, whiplash or sprain. Source 5's
  cause list alone contains four of these and sits directly in a generator's
  path.
- **Never name a structure.** Not cervical spine, spine, vertebra, atlantoaxial,
  odontoid, sternocleidomastoid, ligament, nerve, spinal cord, lymph node, gland
  or muscle. The child tapped Neck or Back of neck; that is the only location
  word any question needs.
- **Never instruct a movement, and never ask the child to find out.** No "try to
  turn your head", "look up and see", "chin to chest", "rotate", "as far as you
  can", "see how far". See the dignity ruling.
- **Never ask a child to press, poke or feel their own neck**, and never ask
  about lumps, bumps, glands or a mass.
- **Never ask what it looks like** — crooked, twisted, tilted, lopsided,
  leaning, straight, "in the mirror".
- **Never name a mechanism or a height in item 1.** Not diving, a trampoline, a
  horse, a rugby scrum, stairs, metres or feet. The two sources that give a fall
  threshold disagree by a factor of three, so any named height silently picks
  one; and naming a mechanism prompts the answer, which is `sore-throat`'s
  ruling about the swallowed object.
- **Never name what happens next** — X-ray, CT, MRI, scan, ultrasound, blood
  test, needle, collar, brace, admission, operation. Most of the trauma
  literature for this complaint *is* an imaging-decision pathway, and a child who
  is told that is what the question decides will answer defensively.
- **Never name a medicine.** Sources 3, 4 and 5 all list drugs by name and IAEM
  doses ibuprofen. A child does not know what they were given, and the dystonia
  medication history is a carer's.
- **Never use the clinical register for a symptom the packet asks about in plain
  words** — no numb, numbness, paraesthesia, sensory, motor, deficit, focal,
  ataxia, nystagmus, strabismus, diplopia, photophobia, dysphagia, odynophagia,
  pharyngodynia. Decision 1 rules the plain words. "Pins and needles" is
  additionally reserved for the older tier by `back/pain` decision 1, and since
  `screen.mjs` has no tier-conditional ban it is banned outright here.
- **Never use an observer's word about the child** — unwell, poorly, off colour,
  irritable, drowsy, lethargic, listless, toxic, floppy, confused, "altered
  mental status", "disproportionate irritability".
- **Never say "fever"**, never ask for a temperature, never mention degrees. This
  ban also catches source 6's *"greater than 45 degrees"*, which is convenient
  and deliberate: a child cannot measure an angle.
- **Never ask a child to rate, grade, time or count anything.** The grading
  adjectives sit inside the criteria themselves — *"severe pain"*, *"Persistent
  symptoms"*, *"significant CSI"*, *"disproportionate irritability"* — and
  stripping them is what makes the criterion askable. The time criteria are
  "7–10 days" and "≥1 week"; `DURATIONS` cannot resolve either.
- **Never invert item 6 in the question.** The CCR wants *absence* of
  paraesthesia, so a "no" is the reassuring answer; the question asks presence,
  neutrally, and nothing in the app may invert it. Same ruling as
  `sore-throat`'s on cough.
- **Never ask a child to relay what an adult said.** The predisposing-conditions
  list and the medication history are records.
- **Avoid British, Irish and Australian idiom deliberately, because every
  guideline here is one of the three.** Source 6 literally writes *"Whilst
  minimising neck movement"*; sources 3, 4 and 5 write "paediatric" and dose
  ibuprofen and paracetamol; source 7 writes "unwell". "Have you got", "whilst",
  "torch", "plaster", "casualty", "A&E", "poorly", "mum", "trousers", "jumper"
  are all banned.

## How these were found

Search A and Search B were run separately as the brief specifies, and **the gap
between them is the largest of any packet so far.**

**Search A** — *"comparison of clinical decision rules for cervical spine injury
in children"* — returned source 1 immediately, a 2025 head-to-head comparison of
PECARN CSI, NEXUS and CCR in 22 430 children. Recall would have produced PECARN
and NEXUS and stopped; the comparison paper supplied the CCR's criteria (from
which items 1 and 6 come) and, more valuably, the per-predictor prevalence by
age band that decides this packet's age ruling. It also named two studies that
recall would not have — the Leonard case-control and the PECARN de novo model —
both of which are `CITED, NOT READ` and neither of which is load-bearing.

**But Search A found only half a literature**, and the brief predicted exactly
this: *"Do not start by searching for a rule you already know the name of."*
A second Search A, aimed at the presenting complaint rather than at the trauma
mechanism — *"acute torticollis wry neck child emergency department"* — found
source 2, a 1409-child series with a multivariate model, in a literature that
shares **no author, no journal and not one criterion** with source 1. Running
Search A once would have produced a packet about cervical spine imaging and
nothing about the 70% of these children who were never injured.

**Search B is where six of the seven clean items came from.** Sources 3, 4 and 5
are three independent complaint-organised guidelines — Irish, Scottish and
Australian — and they agree closely enough that their disagreements are
informative. Only item 6 (arm paraesthesia) comes from Search A at all; items 1
through 5, 7 and 8 are Search B's, and **items 3, 5, 7 and 8 appear in no
prediction rule of any kind**.

The sharpest statement of the gap: **the three trauma rules exist to decide who
gets imaged after an injury, and 43.1% of children who arrive with this
complaint were not injured at all.** Not one of the twenty-one criteria across
PECARN CSI, NEXUS and CCR would identify a child who slept in a bad position —
the commonest cause — or one whose neck stiffened after a sore throat, which is
the second commonest. The three guidelines cover both, and they open with
questions the rules never ask. Consistent with `sore-throat`'s closing advice:
**Search A tells you what the field measures; Search B tells you what the
complaint can do to the child. Rank by Search B.** Item 1 is the exception that
proves it — it ranks first not because a rule names it but because the app has
no gate for the branch every guideline makes first.

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with every previous packet.** The new
   vocabulary domain is the neck and head movement, ruled explicitly:
   - **"your neck"** — matching the body-map labels "Neck" and "Back of neck".
     Never "cervical spine", "vertebra", "muscle", "gland".
   - **"move your neck"** — not "range of movement", not "rotate", not "turn your
     head" *as an instruction*. Item 2 is *"Does it hurt when you move your
     neck?"*, in the habitual tense, never the imperative.
   - **"a funny position"** / **"curled up in one position for a long time"** —
     not "awkward posture", not "prolonged", and never the source's own X-box.
   - **"fuzzy or tingly"** — carried unchanged from `back/pain` decision 1, with
     *"like they went to sleep"* for the young tier and *"like pins and needles"*
     reserved for the older tier. Never "numb", never "paraesthesia".
   - **"bright lights"** — carried from `head/headache`.
   - **"threw up"** — carried from `tummy/vomiting`.
   - **"a cold or a sore throat"** — not "URTI", not "unwell", not "poorly".
   - **"blurry"**, **"seeing two of things"** — carried from `head/headache`
     item 5's shipped wordings.
2. **Answer types.** `FollowUpScreen` renders yes/no only. All eight proposed
   items are **yes/no**. Nothing here needs a widget the app does not have.
3. **Depth scope: `"inside"`.** Load-bearing in `back`, inert in `throat`. Set
   out in Scope above; it is the one place this packet's sidecar differs in kind
   from `sore-throat`'s, and the difference is caused by the second group.
4. **Mechanism: `null`, and item 1 carries the split instead.** Set out in Scope
   above.
5. **Duration scope.** The sources:

   | Source | Window |
   |--------|--------|
   | IAEM (3) | *"Uncomplicated acute muscular torticollis should resolve within 7 - 10 days"*; XR if *"persistent symptoms (≥1 week)"* |
   | RCH (5) | *"uncomplicated acute torticollis should resolve within 7-10 days"*; same ≥1 week imaging trigger |
   | NHSGGC (4) | *"acute muscular torticollis should resolve within 7-10 days"*; *"seek review by GP if the torticollis persists for longer than 1 week"* |
   | CCR (1) | *"Delayed onset of neck pain"* as a low-risk criterion |
   | Source 2 | delay to ED presentation was **negatively** associated with an urgent cause (OR 0.98, p 0.006) |
   | Source 9 (**CITED, NOT READ**) | torticollis as the first and only presenting symptom of a brain tumour in 39% of a 95-patient review |

   **A genuine scope disagreement, in brief §3's sense.** Sources 3, 4 and 5 are
   all scoped to *acute onset* torticollis and a neck that has hurt for a month
   is outside every one of them. Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days`, `not-sure` — **full
     packet.** Inside every acute source's window. `not-sure` follows the
     established convention: it means the child cannot date it, not that it is
     old.
   - `long-time` — **six of the eight items, not all eight.** Items 3
     (awkward position) and 7 (recent cold or sore throat) are dropped, because
     both are acute-onset mechanisms and neither means anything about a neck that
     has hurt for a month. The other six are carried, **and the two halves of
     that are cited differently**: items 1, 2 and 6 on the ≥1 week imaging
     trigger the three guidelines share, which is a criterion *about* persistence;
     items 4 and 8 additionally on the brain-tumour review, which is **cited, not
     read**, and is flagged at the top of this packet for that reason. Source 2's
     OR 0.98 points the other way and is recorded rather than acted on: it says
     late presentation is *reassuring on average*, which is a statement about
     averages and not a reason to stop asking a child who is in front of you.
6. **Item priority, and one question per item.** Eight items compete for at most
   two or three slots. Order:

   `1 (bumped it) → 2 (hurts to move) → 4 (throwing up) →`
   `3 (funny position) → 5 (bright lights) → 6 (arms fuzzy) →`
   `7 (recent cold) → 8 (blurry)`

   Item 1 leads for the structural reason in decision 4. Item 2 is second
   because it is the fact the packet exists to coin. Item 4 is third on the
   strongest evidence in the packet — source 2's OR 3.63 — and above item 3
   despite item 3 naming the commonest cause, because item 3 reassures and item 4
   escalates. Items 5–8 rank by how unreachable the fact is from these two groups
   by any other candidate. **Proposed, not yet confirmed by review.**
7. **Age floors: none.** Set out in Scope. Recorded in `minAgeNotes` as
   `JUDGEMENT, NOT A CITATION`, with the arithmetic that makes source 1's age
   split a prevalence finding rather than a capability one, and with item 6
   explicitly left unfloored following `back/pain`'s ruling on the same concept.
8. **`packetRank: 60` — this packet defers to `throat/sore-throat`.** Group
   `throat` holds two body-map regions and `applies` has no region filter, so
   both packets fire for both taps and packetRank decides who picks first.
   Deferring is asymmetric in this packet's favour: `sore-throat`'s first item is
   *"Does it hurt when you swallow?"*, which is a good and necessary question for
   a child with **neck** pain — odynophagia and dysphagia are the infective and
   abscess signal in all three of this packet's guidelines — whereas this
   packet's first item, *"Did you bump your neck?"*, is a poor first question for
   a child with a plain sore throat. Leading would help the smaller group and
   hurt the larger one. Deferring costs the neck child one slot position and
   costs the throat child nothing. In group `back` this packet is not the home
   group, so packetRank is not consequential there.
9. **The `neck-movement` ruling: option (b), coin `neck-worse-moving`.** In full
   above, with the worked case.
10. **The other fact rulings.** In full above.
11. **The dignity ruling.** In full above, including the explicit refusal of
    `bathroom-change`.
12. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and the
    other groups' questions:
    - **Rejected as duplicates:** item 27 (body map, FPS-R, setup age — including
      *"self-reported neck pain"*, PECARN CSI's commonest risk factor, which is
      the app's entry condition rather than a question); item 11 (`DURATIONS`);
      item 10 (`happened-before`); item 15 (the `head` region and its own group);
      item 16 (`ears`, `tummy`, `limb`, `back` regions and `SENSATIONS.dizzy`);
      item 17 (`skin/rash`, `general-unwell`); items 12, 13 and 14 (facts
      `neck-movement`, `hurts-to-swallow`, `feels-feverish`, reused by reference).
    - **Kept despite an existing slug**, because the existing candidates do not
      reach these groups or rank below any cap: items 4, 5, 7 and 8.
    - **Checked and not written:** pain at rest, night pain, morning stiffness,
      sport, bladder and bowel change — each an absence with a stated reason,
      because writing any of them would be a citation the sources do not support.
13. **Nothing in this packet is described as validated, reviewed or
    predictive.** Source 1 is an imaging-decision comparison and this packet takes
    two history criteria from it and no rule; source 2 is a retrospective series
    and its odds ratios are quoted to justify an *ordering*, never to be computed
    or shown. The nurse surface must not present any answer here as a finding.
    This is a high-school student's literature trace, not a clinical instrument.

## Still open

- **The `back` half of `groups` is inert today.** `back-pain` is group `back`'s
  home packet with 14 accepted items, home-group queues are exhausted before
  cross-cutting ones, and the cap is 5–6 — so a child who taps only **Back of
  neck** never reaches this packet, and never reaches `s-001` either, because
  that is scoped `groups: ["throat"]`. **A child who says the back of their neck
  hurts is currently asked about lifting heavy things, their legs going wobbly,
  and morning stiffness in their back.** Options a reviewer might weigh: move
  `back-neck` into group `throat` in `bodyMap.js` so both neck regions are served
  by the same pair of packets; give this packet a `subgroups`-style region filter,
  which the bank supports only for `limb` today; or accept it. This is an
  architecture question, not a packet question, and it is the single most
  consequential thing in this section.
- **Headache is half of the only multivariate finding for this complaint and this
  packet cannot ask it.** Source 2's OR 2.45 is real, and `head` is its own
  region with its own group and its own packet. The app's answer is that a child
  whose head hurts taps Head — which is probably right, and is certainly what
  `sore-throat` decided for the same criterion. A reviewer may disagree, in which
  case the change is to add `throat` and `back` to `head/headache`'s `groups`,
  not to write a headache question here.
- **The duration bands cannot express "7–10 days" or "≥1 week"**, which is the
  one threshold all three complaint guidelines share and the trigger for both
  imaging and GP review. `few-days` and `long-time` straddle it. This is the same
  shape of problem `sore-throat` recorded for FeverPAIN's 3-day cut and
  `head/headache` for ICHD-3's hours, now with three sources agreeing on one
  number the app cannot represent.
- **CCR's *"delayed onset of neck pain"* is unreachable.** It is a comparison
  between when the injury happened and when the pain started, and the app records
  one duration for one complaint. Item 1 and `DURATIONS` between them get close
  and do not get there.
- **The CCR was derived in adults and excluded children under 16**, yet it
  supplies two of the three history criteria in the whole trauma literature
  (items 1 and 6). Source 1 validated it in children and reports sensitivity
  90.8%, which is the only reason those two items are here at all. A reviewer
  should decide whether that is enough, and the honest position is that this
  packet took the *variables* and not the rule, per brief §3.
- **`general-unwell` is unreachable from a neck tap.** It is cross-cutting, and
  `bankQuestions` returns every home-group queue before any cross-cutting one, so
  with two home packets in group `throat` a child who taps Neck receives nothing
  from it under any cap the app currently uses. Its `neck-movement`,
  `feels-feverish` and `cold-hands-feet` candidates are "reused by reference" in a
  sense that is true of the bank and false of the child. Recorded here rather than
  papered over, because three of this packet's rulings say a fact is already
  covered and this is the caveat on all three.
- **Nothing here has been reviewed by anyone with clinical training.** Item 2 is
  a new fact, coined by an agent, on a complaint where the defining sign is
  invisible to the person answering. It should be the first thing a reviewer
  looks at.
