# Eye complaint

Presenting complaint · packet `eye-complaint` · serves group `eyes`, **no depth
scope** · packet v1 · assembled 2026-09-07
Status: **not yet clinically reviewed** · sources verified first-hand: 11 of 12

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
> who arrives with a sore, red, itchy, watery or injured eye, and marks which of
> those a child can report about themselves. **Not** a diagnostic tool: nothing
> here may be scored, summed, or shown to a child or nurse as a suggested cause.

## Read this before anything else: the evidence here is thinner than in the shipped packets

Three things a reader should know at the top rather than on the last page.

**1. There is no paediatric prediction rule for this complaint worth the name.**
The head-injury packet had PECARN, CATCH and CHALICE. The sore-throat packet had
ten scores. Search A here returned exactly two quantitative models for the red
eye, and both are weak for this app's purpose:

- **Rietveld 2004 (source 7)** is the only derived rule read first-hand — and its
  exclusion criteria begin *"age younger than 18 years"*. It is an adult rule.
- **Meltzer 2010 (source 9)** is the paediatric one, and it is the **one source
  in this packet that could not be read first-hand.** `fetch-source.mjs`
  returned HTTP 403 for both the publisher PDF and the full-text page; its four
  factors reached this packet through an automated summariser reading the
  publisher page, not through a verbatim window. It is marked `PARTIALLY READ`
  throughout, and **no item in the table rests on it alone** — every fact it
  supplies is independently in Rietveld 2004 or in RCH.
- And **source 8** — a systematic literature search of 6827 citations, of which
  one survived — concluded that the signs and symptoms textbooks call diagnostic
  *"seem not to be based on evidence."*

So: expect guidance, not named rules. That is the honest state of the field, not
a shortfall in searching, and it is stated here because a reader who skimmed the
Sources list would otherwise assume a rule literature exists that does not.

**2. Most of eye assessment is examination, and this packet cannot reach it.**
Visual acuity, pupil reactions and a relative afferent pupillary defect, red
reflex, slit lamp, fluorescein staining, eversion of the eyelids, proptosis,
restriction of eye movements — the entire diagnostic apparatus for the acute red
eye is somebody looking at the eye with equipment. Source 5, RCH's own eye
examination guideline, is twelve steps long and **not one of them is something a
child does**. The clean yield here is lower than any packet so far and the reason
is structural.

**3. The self-report evidence, such as it is, points away from the young tier.**
The one instrument-development study read (source 11) put its **patient**-reported
outcome at **age ≥ 8** and used a caregiver **observer**-reported outcome for
children **under 8** — and its paediatric evidence base was *"only 4 children in
the dyads (aged 9–10 years)."* Source 6 says that *"For a young child (aged ≤6
years), the history is often taken from the accompanying family member."* Neither
statement floors an item here (see decision 7), but together they mean the 4–7
tier of this packet is less evidenced than the 4–7 tier of any packet before it.

## Scope

**Age.** App covers 4–12. **No item carries an age floor**, and unlike the
sore-throat packet that is a *decision* rather than a finding — see decision 7.
The age statements that exist in the sources are:

- Source 7 (Rietveld 2004), exclusion criteria: *"age younger than 18 years"*.
  An exclusion, not a floor: it tells us the rule was never tested in children,
  not that a child cannot answer its questions.
- Source 9 (Meltzer 2010, `PARTIALLY READ`): *"Age ≥6 y"* is one of four factors
  associated with a **negative** culture. That is disease frequency, not
  capability.
- Source 11 (Narvekar 2019): PRO for *"adults and children aged ≥8 years"*,
  ObsRO for *"children aged < 8 years"*. This is a capability claim, and it is
  the closest thing to one in the packet — but it floors a **0–10 numeric rating
  scale used as a clinical-trial endpoint**, not a yes/no screening question,
  and honouring it would silence this packet's entire young tier. Decision 7
  declines to import it and says so as judgement, not citation.
- Source 6 (AJGP): *"For a young child (aged ≤6 years), the history is often
  taken from the accompanying family member, who may not necessarily know the
  full story."* Note which way that cuts — the *carer's* account of a young
  child's eye is described as unreliable, which is an argument for asking the
  child, not against it. Source 6 also recommends, where trauma is suspected,
  *"talking to the child alone in a friendly and non-accusatory manner."*

**Depth.** `GROUP_DEPTH.eyes === 'internal'` in `src/data/bodyMap.js`, so the
depth question is never asked for this group and `depths['eyes']` is permanently
`undefined`. The sidecar carries `"depth": null`, for the same reason and with
the same reasoning as the sore-throat packet's decision 8: writing `"inside"`
would assert a scope the app has no answer to test.

Consequence worth knowing: because no depth is ever recorded, `activeDepths`
returns `['surface','inside']`, so the vocabulary lists are **not pruned** for a
child who taps only an eye. That child is offered `SENSATIONS.itchy` and
`SENSATIONS.burning` — both of which are eye-complaint criteria in their own
right (source 1 lists *"Itch"*; viral and allergic conjunctivitis both present
with a *"burning sensation"*). This materially changes the redundancy analysis;
see decision 10.

**There is no gate for `eyes`.** `GROUP_GATE` has keys for `head`, `chest`,
`tummy`, `limb` and `back` only. So unlike the head — where *"Did you bump it or
hurt it?"* separates traumatic from non-traumatic before any follow-up fires —
**nothing in the app establishes whether an eye complaint is an injury.** That
single architectural fact is why items 1, 2 and 3 exist and why they are ranked
where they are: the packet's questions are the *only* route by which a chemical
splash or a projectile reaches the nurse's screen. Raised as an architecture
question in "Still open".

**The group is exactly two regions, and they are left and right.** `eye-left` and
`eye-right` are separate body-map regions in the `head` detail view. Laterality
is therefore **already collected** — a real difference from the sore-throat
packet, where `throat` was one undivided region and one-sided pain had to become
a question. Item 15 records this so nobody writes "one eye or both?" as a
question the body map already answered.

**Out of scope, and not carried:** neonatal conjunctivitis and maternal STI
history (source 1 sends these to a septic work-up; all observer items about a
pre-verbal infant); non-accidental injury and the safeguarding history (source 1:
*"In infants, subconjunctival haemorrhage may be a sign of non-accidental
injury"*; source 6: *"If the history is inconsistent with the signs, consider
non-accidental injury"*) — see "The safeguarding exclusion"; contact-lens–related
keratitis in so far as it depends on knowing lens-wear history (item 28);
anything requiring a swab, a stain, a slit lamp or imaging; and all treatment,
which is most of what these guidelines are about.

## Sources

1. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Acute red eye"** (PIC Endorsed). **Read first-hand** via
   `scripts/fetch-source.mjs` plus targeted `find-in-source.mjs` windows. **The
   primary complaint-organised source.** Its *Assessment → History* list is
   eleven bullets and is the single most useful artefact in this packet; its
   *Signs and symptoms → Diagnoses to consider* table is the only place in the
   sources read where symptoms a child could feel are mapped onto causes.
2. **RCH Melbourne, Clinical Practice Guideline, "Acute eye injury"** (PIC
   Endorsed). **Read first-hand.** Supplies the injury history list verbatim and
   the chemical-splash urgency that drives item 1's rank.
3. **RCH Melbourne, Clinical Practice Guideline, "Penetrating eye injury"** (PIC
   Endorsed). **Read first-hand.** Reached from source 2's "See also". Short, and
   supplies the instruction that shaped this packet's central wording ban.
4. **RCH Melbourne, Clinical Practice Guideline, "Periorbital and orbital
   cellulitis"** (PIC Endorsed). **Read first-hand.** Reached from source 1's
   *"Fever (see Periorbital cellulitis)"*. The only source read that gives an
   explicit red-flag list separating the emergency from the non-emergency, and
   the sole source for items 10 and 12.
5. **RCH Melbourne, Clinical Practice Guideline, "Eye Examination"** (PIC
   Endorsed). **Read first-hand.** Used almost entirely in the *negative*: it
   defines the boundary this packet must not cross, and it supplies the one
   observation that has a legitimate child-facing half (item 7).
6. **Lu SJ, Lee GA, Gole GA.** "Acute red eye in children: A practical approach."
   *Aust J Gen Pract* 2020;49(12), doi:10.31128/AJGP-02-20-5240. **Read
   first-hand** at `www1.racgp.org.au`. Open access, written for GPs, and the
   source RCH itself reproduces its symptom table from (source 1 credits it by
   name). Supplies Box 1, *"'Red flags' for referral to ophthalmic care"*, and
   the two statements about taking a history from a child rather than a carer.
7. **Rietveld RP, ter Riet G, Bindels PJE, Sloos JH, van Weert HCPM.**
   "Predicting bacterial cause in infectious conjunctivitis: cohort study on
   informativeness of combinations of signs and symptoms." *BMJ*
   2004;329(7459):206–10. **Read first-hand** via
   `europepmc.org/articles/PMC487734?pdf=render` (the PMC and NCBI HTML pages
   both returned bot walls; the Europe PMC render did not). **The discovery
   source for Search A, and an adult study** — see the top-of-packet warning.
8. **Rietveld RP, van Weert HCPM, ter Riet G, Bindels PJE.** "Diagnostic impact
   of signs and symptoms in acute infectious conjunctivitis: systematic
   literature search." *BMJ* 2003;327(7418):789. **Read first-hand** via
   `europepmc.org/articles/PMC214099?pdf=render`. Source 7's own predecessor, and
   the reason source 7 exists. Six lines long in effect, and the most important
   six lines in the packet.
9. **Meltzer JA, Kunkov S, Crain EF.** "Identifying children at low risk for
   bacterial conjunctivitis." *Arch Pediatr Adolesc Med* 2010;164(3):263–7.
   **`PARTIALLY READ` — NOT read first-hand.** `fetch-source.mjs` returned HTTP
   403 for both `jamanetwork.com/journals/jamapediatrics/fullarticle/382896` and
   the article PDF. What this packet has of it came from an automated fetch of
   the publisher's full-text page answered by a summarising model, so the
   "quotations" below are that model's transcription of a table and **have not
   been verified against a verbatim window.** They are presented as attributed
   report, never as quotation this packet stands behind. **Nothing in the items
   table depends on it alone.** A future run should try harder: it is the only
   paediatric model for this complaint that was found at all.
10. **Chawla R, et al.**, Canadian Paediatric Society. "Acute infectious
    conjunctivitis in childhood." *Paediatr Child Health* 2001;6(6):329–335.
    **Read first-hand** via PMC2804756. Twenty-five years old and used for
    exactly one thing — its definition of the acute window, which decides the
    duration scope. Its management content is not carried and should not be.
11. **Narvekar A, et al.** "Content validity of a novel patient-reported and
    observer-reported outcomes assessment to evaluate ocular symptoms associated
    with infectious conjunctivitis in both adult and pediatric populations."
    *Health Qual Life Outcomes* 2019. **Read first-hand** via PMC6820993. **The
    self-report evidence, and it is weak.** A qualitative content-validity study:
    23 patients or caregivers, concept elicitation plus cognitive interviewing.
    **Limits worth knowing:** industry-sponsored (Shire/Takeda, ICON PLC);
    *"participants were chosen from one metropolitan area only"*; *"the diagnosis
    of conjunctivitis was not confirmed by cultures"*; and, decisively, *"there
    were only 4 children in the dyads (aged 9–10 years)."* It supports "the words
    pain, itching and feeling-like-something-is-in-the-eye are understood"; it
    validates nothing about a 5-year-old with a tablet and no adult beside them.
12. **NHS.uk, "Conjunctivitis"** (patient-facing). **Read first-hand.** Included
    for one reason: it is the only source read that states urgent features **in
    words written for a family with no clinical training**, which makes it the
    closest thing in the literature to a list of things a *child* might notice.
    It is also the packet's main evidence for the British-idiom wording bans.

**Attempted and not used.**

- **NICE CKS, "Conjunctivitis – infective"** (`cks.nice.org.uk`) — **HTTP 403,
  not read.** This was the intended NICE limb of Search B. Nothing here depends
  on it. A future run should try the NG/CKS content through a different route;
  it is the guideline most likely to state a UK primary-care threshold for
  referral explicitly.
- **Narayana S, McGee S.** "Bacterial Conjunctivitis" (JAMA Rational Clinical
  Examination systematic review, 2022) — surfaced by Search A, **paywalled, not
  attempted beyond the abstract listing, not read, and not cited anywhere in
  this packet.** Named only so a future run knows it exists: a Rational Clinical
  Examination review is precisely the artefact this packet lacked.
- **ChOIR-Q (Childhood Ocular Inflammation Sensations and Symptoms Reporting
  Questionnaire), medRxiv preprint 2024** — **HTTP 403, not read.** It is a
  paediatric self-report eye instrument with pictogram items and separate
  formats for children under and over 9, which is exactly the evidence this
  packet is short of. Nothing here depends on it and nothing here cites it. **It
  is also a preprint**, so even if fetched it would carry a peer-review caveat.
  Flagged in "Still open" as the highest-value single fetch for a future run.
- **PMC and NCBI HTML for PMC487734** — bot-walled on three attempts, including
  retries. Obtained via the Europe PMC PDF render instead, which is recorded
  here because it is a working fallback the brief does not currently name.

## The rule(s), as published

### Rietveld 2004 — the only derived model read first-hand, and it excludes children (source 7)

Predictors retained, verbatim:

> "Three determinants were retained in the multivariable regression analysis:
> history of conjunctivitis (yes or no), itch (yes or no), and glued eyes in the
> morning (0, 1, or 2)."

Direction of effect, verbatim:

> "Logistic regression analysis showed optimal diagnostic discrimination for the
> combination of early morning glued eye(s), itch, and a history of
> conjunctivitis. The first of these indicators increased the likelihood of a
> bacterial cause, whereas the other two decreased it."

The full set of candidate variables the questionnaire collected — the useful
list, because the brief says a variable evaluated and dropped still counts:

> "duration of symptoms (days), self medication and self treatment, itching,
> burning sensation, foreign body sen[sation], and the number of glued eyes in
> the morning (0, 1, or 2)"

Population and exclusions, verbatim, and the sentence that governs how much
weight anything above can bear:

> "184 adults presenting with a red eye and either (muco)purulent discharge or
> glued eyelid(s), not wearing contact lenses."
>
> "The exclusion criteria were **age younger than 18 years**, pre-existing
> symptoms for longer than seven days, acute loss of vision, wearing of contact
> lenses, use of systemic or local antibiotics within the previous two weeks,
> ciliary redness, eye trauma, and a history of eye surgery."

Read that exclusion list once more. The best-known clinical prediction rule for
bacterial conjunctivitis excludes **children**, **eye trauma**, **acute loss of
vision** and **anything lasting more than a week** — which is to say it excludes
most of what brings a child to a school or hospital nurse. Its discrimination on
its own adult population was *"area under the receiver operating characteristics
curve … 0.74 (95% confidence interval 0.63 to 0.80)"*.

Two of its three predictors survive into this packet anyway (items 8 and 9),
because they are also in sources 1, 9 and 12 — and the third, *"history of
conjunctivitis"*, is **already collected** by the app's reserved
`happened-before` question (item 19).

### The systematic review that came first, verbatim (source 8)

> "Major ophthalmological textbooks list several signs and symptoms as being
> diagnostic for the cause of acute infectious conjunctivitis. The involve[ment]
> of one eye, followed a few days later by the other eye, and the presence of an
> enlarged preauricula[r node] … How evidence based are these assertions?"

Its search: 6827 citations → 2903 after duplicates → 77 after criteria → **one**
after full text. And its conclusion, verbatim:

> "claims that certain signs and symptoms have diagnostic power, as cited in
> major textbooks and used in treatment trials to select patients, seem not to
> be based on evidence."

**This is the single most important sentence in the packet.** It is why no item
here is ranked highly *because* a model names it, and why items 1–5 — trauma,
vision and light — outrank items 8 and 9, which are the model variables.

### Meltzer 2010, the paediatric model — reported, not quoted (source 9)

**Everything in this subsection is `PARTIALLY READ` and is reported at one
remove.** Population: children aged 6 months to 17 years presenting to a
paediatric emergency department with conjunctival erythema, eye discharge, or
both. The four factors reported as independently associated with a **negative**
conjunctival culture:

> Age ≥ 6 y · Presentation in April–November · No or watery discharge · No glued
> eye in the morning

Reported as **not** associated (p > .05) — and this list is worth as much as the
positive one, because it tells a future run what *not* to re-add:

> Burning sensation · Eye pain · Sore throat · Rash · Attendance at day care ·
> Asthma · Eczema · Household member with conjunctivitis
>
> and on examination: Erythema · Chemosis · Periorbital edema · Preauricular
> lymph node · Pharyngitis · Wheezing

Two of those nulls are things this app might otherwise have asked — *household
member with conjunctivitis* and *sore throat* — and one, *eye pain*, is
counter-intuitive enough to be worth a reviewer's attention. **None of that is
acted on here**, because it is unverified; it is recorded as a lead.

### The general guidance, verbatim (source 1)

RCH's **entire History section**, in full:

> "Time course of the redness · Eye pain · Vision impairment · Eye trauma ·
> Photophobia · Sensation of foreign body (corneal process) · Itch · Discharge ·
> Contact lens wear · Fever (see Periorbital cellulitis) · Systemic features of
> inflammation (eg suggestive of Kawasaki disease, PIMS-TS)"
>
> "Other factors to consider: In a neonate, consider birth history and history of
> maternal STI · Vomiting/coughing · Rheumatological/autoimmune conditions or
> family history · Anticoagulant/antiplatelet treatment"

Eleven history bullets. **Six of them are the child's** — pain, vision, trauma,
photophobia, foreign-body sensation, itch — which is a far better ratio than the
sore-throat packet's two-of-eight, and it is the reason this packet is viable at
all despite everything above.

The key-features line, verbatim, repeated in sources 2 and 5:

> "Key features of sight-threatening conditions are severe eye pain,
> photophobia, decreased visual acuity or a history of possible penetrating eye
> trauma; these conditions require specialist ophthalmological assessment"

**Three of those four are child-reportable.** Severity is the app's intensity
screen (item 18), photophobia is item 5, vision is item 4, trauma is items 2 and
3. That sentence is the packet's backbone.

The *Signs and symptoms → Diagnoses to consider* table, verbatim:

> "Pain, photophobia, watery discharge → Foreign body · Traumatic corneal ulcer ·
> Herpetic ulcer · Acute angle closure glaucoma · Corneal abrasion"
>
> "Purulent discharge → Bacterial conjunctivitis · Infectious keratitis ·
> Endophthalmitis"
>
> "Itchiness, eyelid swelling and redness, watery discharge → Allergic
> conjunctivitis · Viral conjunctivitis"
>
> "Dull, aching eye pain → Iritis · Scleritis"
>
> "Subconjunctival haemorrhage → Trauma · Vigorous coughing or vomiting"
>
> "Focal conjunctival injection → Trauma · Episcleritis"

And the three conjunctivitis types, verbatim, with the caution that precedes
them (*"Use caution when diagnosing unilateral conjunctivitis"*):

> **Bacterial** — "Presents with purulent discharge, conjunctival inflammation,
> not pruritic and cornea is clear with no infiltrates"
>
> **Viral** — "Most common type of conjunctivitis. Presents with watery
> discharge, burning sensation, bilateral conjunctival inflammation and/or
> chemosis, and/or eyelid swelling. Often associated with URTI or
> gastrointestinal symptoms. Self-resolving over 1–3 weeks … Contagious until eye
> stops tearing"
>
> **Allergic** — "Presents with bilateral watery discharge with burning or itchy
> sensation and eyelid swelling, especially in an atopic child"

Foreign body, verbatim: *"Presents with watery discharge and/or sensation of
foreign body"*. Subconjunctival haemorrhage: *"coughing, sneezing, vomiting,
valsalva, strangulation"*. Herpes simplex: *"Suspect herpes simplex infection if
lid vesicles and/or reduced vision and/or photophobia"*.

### The injury guidance, verbatim (sources 2 and 3)

Source 2's key points, verbatim:

> "Consider a serious eye injury when a child presents with a painful eye or
> blurred vision · Adequate analgesia will aid examination and procedural
> sedation may be required in the younger child · Seek senior clinician or
> ophthalmology assistance early if eye assessment is proving difficult in the
> distressed child · **Chemical burns, especially alkali, need immediate
> irrigation** · If a penetrating eye injury is identified or suspected, stop
> examination, place an eye shield over the eye, keep nil by mouth and urgently
> refer to ophthalmology"

Source 2's History, verbatim — *"When assessing the injured and painful eye, the
following questions should be asked"*:

> "Proximity to chemicals or high velocity projectiles (particularly air guns,
> lawn mowers, power tools, hammering or motor vehicle accidents) · Prolonged
> contact lens use · Pain, foreign body sensation, tearing or photophobia ·
> Visual disturbance either temporary or persisting, including flashes or
> floaters in vision · Eye discharge · First aid provided"

Chemical burns, verbatim: *"Urgent, copious irrigation, after local topical
anaesthetic, including under top lid. Sedation or urgent GA may be required.
Particulate alkaline matter needs urgent, total removal with a cotton bud … Use 3
litres of 0.9% sodium chloride … over about 15 minutes"*. And for thermal burns:
***"First aid takes precedence over a complete examination."***

Source 3's History, verbatim:

> "Full history of event including timing and witnesses · Mechanism of injury eg
> blunt force/sharp object/projectile · Composition of any possible intraocular
> foreign body eg soil/dirt/metal · Pain · Decrease in vision · Associated
> injuries (may accompany multiple trauma or serious head injury)"

And source 3's key point, which is the origin of this packet's central wording
ban:

> "In penetrating eye injury, **avoid any pressure on the eyeball through
> examination or padding, as eye contents may be extruded** … If identified or
> suspected, stop examination, place an eye shield over the eye"

### The orbital red flags, verbatim (source 4)

Typical presentation: *"Unilateral eyelid swelling and erythema · Unilateral eye
pain or tenderness"*. Then:

> "**Red flags concerning for orbital cellulitis:** Painful or restricted eye
> movements · Visual impairment: reduced acuity, relative afferent pupil defect,
> diplopia · Proptosis · Severe headache or other features of intracranial
> involvement"

And the differential, verbatim: *"Bilateral findings and/or painless (or
non-tender) swelling in a well looking child is more likely to be an allergic
reaction."*

**Exactly one clause of that red-flag list is child-reportable**: the *painful*
half of *"painful or restricted eye movements"*. It becomes item 10. Restriction
is measured, proptosis is seen, a RAPD needs a light, and *"severe headache"*
is both a severity grading and another body-map region.

### The GP-facing red flags, verbatim (source 6)

> "**Box 1. 'Red flags' for referral to ophthalmic care:** High-velocity injury ·
> Contact lens use · Reduced vision · Photophobia · Significant pain · Loss of
> red reflex · Lid swelling · Corneal defect/haze · Abnormal pupil reaction ·
> Failure to resolve"

Ten red flags; **three are a child's** (reduced vision, photophobia, and the
high-velocity injury they may be the only witness to). And the history
instruction, verbatim:

> "The history-taking should begin with determining the duration of redness and
> involvement of one or both eyes, inquiring about any possible causes and
> seeking information regarding associated symptoms and signs such as blurring,
> photophobia, loss of vision, discharge and ocular pain, discomfort or itch."
>
> "It is important to elicit a history of recent trauma. This could be a physical
> impact, a foreign body or chemical exposure."

### The family-facing list, verbatim (source 12)

NHS.uk, under *Urgent advice: Ask for an urgent GP appointment or get help from
NHS 111 if you have:*

> "pain in your eyes · sensitivity to light · changes in your vision, like wavy
> lines or flashing · very red eyes (1 eye or both eyes)"

and, describing the complaint itself: *"red · burn or feel gritty · produce pus
that sticks to lashes · itch · water"*.

This is the sore-throat packet's NHSGGC-triad argument reached by a different
route: a list written to be understood and acted on by a family with no clinical
training is the best available proxy for what a **child** could notice. Items 4,
5 and 9 all appear in it.

### The examination boundary, verbatim (source 5)

Reproduced not because anything is harvested from it, but because it defines what
this packet must not attempt:

> "Essential components of examination and the order in which they should be
> performed are: Visual acuity (and visual fields if there is visual loss/change)
> · General inspection · Pupils · Look for pupillary light reflex (direct and
> consensual response for each eye), pupil shape and size, symmetry with other
> eye · Red reflex with d[irect ophthalmoscope] … Examination with direct
> ophthalmoscope · Cranial nerves"

And the two sentences that decided item 7 and the wording bans:

> "Assessment of the eye and vision can be very difficult in children,
> particularly if the child is injured or distressed"
>
> "**If the cornea is affected, the child will often be reluctant to open their
> eye.**"

### The acute window, verbatim (source 10)

> "Acute conjunctivitis may be defined as conjunctival redness with or without
> increased tearing or discharge that is less than 14 days in duration."

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Did something get splashed in your eye** | RCH injury (2) — *"Chemical burns, especially alkali, need immediate irrigation"*, History *"Proximity to chemicals"*, management *"Urgent, copious irrigation"*, *"First aid takes precedence over a complete examination"*; AJGP (6) — *"This could be a physical impact, a foreign body or chemical exposure"* | **yes** | **Ranked first, and it is the only item in any packet so far ranked first on time-criticality rather than on frequency or provenance.** A chemical splash is one of the very few sight-threatening facts that (a) a child knows and an observer may not, (b) changes what happens in the next five minutes rather than the next hour, and (c) is invisible on examination once the child has stopped crying. Source 2 puts irrigation *before* examination. The `eyes` group has no mechanism gate, so this question is the only route by which the fact reaches the nurse. See decision 3 for the deliberate exception to the object-naming ban. |
| 2  | **Did something go into your eye** | RCH red eye (1) — *"Sensation of foreign body (corneal process)"*, foreign body *"Presents with watery discharge and/or sensation of foreign body"*; RCH injury (2) — *"high velocity projectiles (particularly air guns, lawn mowers, power tools, hammering…)"*; RCH penetrating (3) — *"Composition of any possible intraocular foreign body eg soil/dirt/metal"*, *"Mechanism of injury eg … projectile"*; AJGP (6) — Box 1 *"High-velocity injury"*, *"a foreign body"* | **yes** | Only the child knows, and source 3's whole point is that an open globe may look unremarkable. Distinct from item 6 (the *sensation*) on purpose: a child can feel grit with no injury, and can have a metallic fragment in the eye with the sensation already settled. Never name the object — see wording cautions. |
| 3  | **Did something hit or bump your eye** | RCH red eye (1) — *"Eye trauma"*, key features *"a history of possible penetrating eye trauma"*, subconjunctival haemorrhage *"Trauma"*, focal injection *"Trauma"*; RCH penetrating (3) — *"Mechanism of injury eg blunt force/sharp object/projectile"*, *"Full history of event including timing and witnesses"*; AJGP (6) — *"a physical impact"* | **yes** | Blunt trauma is a different mechanism from item 2 and a different set of consequences (hyphaema, blow-out fracture, retinal detachment), and every source separates them. Kept as a second question rather than fused for exactly the sore-throat packet's *bundling* reason: a fused "did anything happen to your eye?" silently merges two mechanisms that three guidelines keep apart. **If the app ever gives `eyes` a `mechanism` gate, items 1–3 collapse into a gate plus two follow-ups** — see "Still open". |
| 4  | **Is anything blurry or hard to see** | RCH red eye (1) — *"Vision impairment"*, key features *"decreased visual acuity"*; RCH injury (2) — *"painful eye or blurred vision"*, *"Visual disturbance either temporary or persisting"*; RCH penetrating (3) — *"Decrease in vision"*; RCH periorbital (4) — *"Visual impairment: reduced acuity … diplopia"*; AJGP (6) — Box 1 *"Reduced vision"*, history *"blurring … loss of vision"*; NHS (12) — *"changes in your vision"* | **yes** | **The best-sourced item in the packet: all six guidelines, and one of the four key features of a sight-threatening condition.** The app already ships the hand-written `blurry` ("Is anything blurry or hard to see?"); re-sourced here so it survives with a citation behind it (decision 11). Measured acuity is item 23 and stays the nurse's. **Never ask the child to cover an eye and compare** — that is item 23 delegated to a seven-year-old; see wording cautions. |
| 5  | **Does light hurt your eyes** | RCH red eye (1) — *"Photophobia"* in History, and in key features of sight-threatening conditions; RCH injury (2) — *"Pain, foreign body sensation, tearing or photophobia"*; AJGP (6) — Box 1 *"Photophobia"*, history *"photophobia"*; NHS (12) — *"sensitivity to light"*; RCH red eye (1) — HSV *"Suspect herpes simplex infection if lid vesicles and/or reduced vision and/or photophobia"* | **yes** | Five sources, one of the four key features, and plainly child-reportable. **Duplicates the `head` group's hand-written `light-hurts` ("Do bright lights make it worse?")** — the same fact reached from a different body region, exactly as `hard-to-breathe` is reachable from three packets. Needs a shared `fact` so `keyOf` dedupes it; see decision 10. |
| 6  | **Does it feel like something is in your eye** | RCH red eye (1) — *"Sensation of foreign body (corneal process)"*, and the *"Pain, photophobia, watery discharge"* row; RCH injury (2) — *"foreign body sensation"*, *"Linear corneal abrasions suggestive of a subtarsal foreign body"*; Rietveld 2004 (7) — questionnaire item *"foreign body sen[sation]"*; Narvekar (11) — *"feeling like something is in the eye (foreign body sensation)"*, one of the *"top three most bothersome symptoms"*, and items on it *"were clear and easy to understand"*; NHS (12) — *"feel gritty"* | **yes** | The item with the best **self-report** evidence in the packet, as opposed to the best clinical evidence — source 11 tested this exact concept with patients and found the wording understood. Source 1's parenthesis *"(corneal process)"* is the reason it earns a slot rather than being folded into item 2: the sensation points at the cornea whether or not anything is still there. Not in `SENSATIONS`, so nothing else in the app collects it. |
| 7  | **Is it hard to keep your eye open** | RCH eye exam (5) — *"If the cornea is affected, the child will often be reluctant to open their eye"*, and topical anaesthetic *"may allow the child to spontaneously open their eye after a couple of minutes"*; RCH injury (2) — *"if eye assessment is proving difficult in the distressed child"* | **partial** | **A textbook nearly-reportable criterion, split rather than reclassified**, on the sore-throat packet's item-5 principle. *"Reluctant to open their eye"* is an observation someone else makes and interprets; *"is it hard to keep your eye open?"* is a thing a child discovers about themselves. The split is load-bearing here because of constraint (b) below: the observer's version could be tested by telling the child to open the eye, and **that instruction is banned outright**. Item 20 keeps the observation excluded. |
| 8  | **Was your eye stuck shut when you woke up** | Rietveld 2004 (7) — *"glued eyes in the morning (0, 1, or 2)"*, *"the number of glued eyes in the morning"*, and the only one of three indicators that *"increased the likelihood of a bacterial cause"*; Meltzer (9, `PARTIALLY READ`) — *"No glued eye in the morning"* among four low-risk factors; RCH red eye (1) — *"Purulent discharge"* row, bacterial *"purulent discharge"*; NHS (12) — *"pus that sticks to lashes"* | **yes** | **The only variable in the packet that appears in both quantitative models**, and the only one a child can answer. Note the scope caveats stacked behind it: source 7 excluded under-18s and symptoms over seven days; source 9 is unverified. It is ranked eighth *because* of that, not despite it — source 8's finding that these signs are not evidence-based applies to this one most directly. Register ruling in decision 1: **"stuck together"**, never "glued", never "sticky eye". |
| 9  | **Are your eyes itchy** | RCH red eye (1) — *"Itch"* in History, *"Itchiness, eyelid swelling and redness, watery discharge"* row, allergic *"burning or itchy sensation"*, bacterial *"not pruritic"*; Rietveld 2004 (7) — *"itch (yes or no)"*, a retained predictor; Narvekar (11) — itching the most frequently reported *"most bothersome"* symptom, items *"clear and easy to understand"*; AJGP (6) — *"ocular pain, discomfort or itch"*; NHS (12) — *"itch"* | **yes** | Five sources and a model variable. The app already ships `eye-itch` — **but it ships it fused: "Are your eyes itchy or watery?"** Every source read treats itch and watery discharge as *separate* variables pointing in *different* directions (source 7: itch lowers the probability of a bacterial cause; source 1 files itch under History and discharge under a different History bullet). **Ruling: unbundle.** See decision 4. Partially overlaps `SENSATIONS.itchy`, which this child *is* offered — decision 10. |
| 10 | **Does it hurt when you look around** | RCH periorbital (4) — *"Red flags concerning for orbital cellulitis: Painful or restricted eye movements"* | **partial** | The child's half of a two-part red flag: pain on movement is felt, restriction is measured. **The single most consequential item in the packet and the worst-sourced** — one guideline, one clause. Kept because it is the only child-reportable discriminator between the infection that goes home on oral antibiotics and the one source 4 calls *"an emergency with serious complications including … vision loss"*. Ranked last of the askable items and flagged for the reviewer. **Must be worded as a report of ordinary looking around, never as an instruction to perform an eye movement** — see wording cautions. |
| 11 | **Is your eye watery** | RCH red eye (1) — *"Discharge"*, *"watery discharge"* in three of six rows, viral *"watery discharge"*, allergic *"bilateral watery discharge"*, foreign body *"watery discharge"*, *"Contagious until eye stops tearing"*; RCH injury (2) — *"tearing"*; Meltzer (9, `PARTIALLY READ`) — *"No or watery discharge"*; Narvekar (11) — *"watery eyes"* | **partial** — not proposed for v1 | Genuinely sourced and genuinely child-reportable, and **dropped for a structural reason**: watery-versus-sticky is one axis, `FollowUpScreen` renders yes/no, and item 8 already asks the end of that axis that the models actually use. A separate "is it watery?" yes/no would collect the same axis inverted and burn a slot. The *classification* (watery vs mucopurulent) is the examiner's regardless — item 22. **First item to promote if a two-option widget ever ships.** |
| 12 | **Are you seeing two of things** | RCH periorbital (4) — *"Visual impairment: reduced acuity, relative afferent pupil defect, diplopia"* | **partial** — not proposed for v1 | Diplopia is child-reportable in principle and is an orbital red flag. Not proposed because **no source read establishes that a 4–12 year old distinguishes double vision from blur**, item 4 catches "something changed with my seeing" either way, and source 4 itself bundles the two under one heading. Kept in the table so its absence is a decision. |
| 13 | **Have you had a cold or a cough too** | RCH red eye (1) — viral conjunctivitis *"Often associated with URTI or gastrointestinal symptoms"*; RCH red eye (1) — *"Vomiting/coughing"* under Other factors, and subconjunctival haemorrhage *"Vigorous coughing or vomiting"* | **yes** — not proposed for v1 | Sourced, child-reportable, and the weakest use of a five-question screen for a child whose eye is injured. Also the one item source 9 arguably contradicts (*"Sore throat"* not associated), though that finding is unverified. **Not proposed for v1**; kept so a reviewer sees it was weighed. |
| 14 | **Do you feel hot or shivery** | RCH red eye (1) — *"Fever (see Periorbital cellulitis)"*; RCH periorbital (4) — the whole guideline is reached from that cross-reference | **partial** — not proposed for v1 | The sore-throat packet made this its item 13 and ranked it twelfth; here it ranks last and is not proposed at all. The reason is specific: for an eye complaint, fever matters almost entirely for periorbital versus orbital cellulitis, and **the eyelid swelling that raises that question in the first place is visible to the nurse across the room**. The child's contribution to that decision is item 10, not this. Never ask a child for a number and never say "fever". |
| 15 | One eye or both; unilateral vs bilateral | RCH red eye (1) — *"Use caution when diagnosing unilateral conjunctivitis"*, viral *"bilateral conjunctival inflammation"*, allergic *"bilateral watery discharge"*; RCH periorbital (4) — *"Unilateral eyelid swelling"*, *"Bilateral findings … more likely to be an allergic reaction"*; AJGP (6) — *"involvement of one or both eyes"*; NHS (12) — *"very red eyes (1 eye or both eyes)"* | **yes** — already collected | **The body map has `eye-left` and `eye-right` as separate regions.** Laterality is therefore recorded by the tap, which is the sore-throat packet's item 7 problem solved by the app's own geometry rather than by a question. Recorded so nobody writes the question. |
| 16 | Time course of the redness; duration; failure to resolve | RCH red eye (1) — *"Time course of the redness"*; AJGP (6) — Box 1 *"Failure to resolve"*, *"duration of redness"*; Rietveld 2004 (7) — *"duration of symptoms (days)"*, exclusion *"pre-existing symptoms for longer than seven days"*; CPS (10) — *"less than 14 days in duration"*; NHS (12) — *"not cleared up within 7 days"*; RCH (1) — *"Self-resolving over 1–3 weeks"* | **yes** — already collected | `DURATIONS`. Six sources and **five different windows**; the bands resolve none of them exactly. See decision 5 and "Still open". |
| 17 | Age | Meltzer (9, `PARTIALLY READ`) — *"Age ≥6 y"*; Rietveld (7) — exclusion *"age younger than 18 years"*; Narvekar (11) — PRO *"≥8 years"* / ObsRO *"< 8 years"* | **n/a** — already collected | Setup screen. |
| 18 | Eye pain: presence, quality, severity | RCH red eye (1) — *"Eye pain"*, key features *"severe eye pain"*, *"Dull, aching eye pain"*; RCH injury (2) — *"painful eye"*, *"Pain"*; RCH penetrating (3) — *"Pain"*; RCH periorbital (4) — *"Unilateral eye pain or tenderness"*; AJGP (6) — Box 1 *"Significant pain"*; Narvekar (11) — pain items *"clear and easy to understand"*; NHS (12) — *"pain in your eyes"* | **yes** — already collected | **The single best-sourced criterion in the entire packet, and it is already collected three times over**: the body map records that it is the eye, the FPS-R intensity screen records how much, and `SENSATIONS` offers `sharp`, `aching`, `burning` and `throbbing` for the quality. Asking "does your eye hurt?" would be redundant with all three, and asking a child to grade it in words is banned outright. **Recorded at length because a generator that skims the sources will try to write this question.** |
| 19 | History of conjunctivitis; has this happened before | Rietveld 2004 (7) — *"history of conjunctivitis (yes or no)"*, one of three retained predictors | **yes** — already collected | The reserved `happened-before` question ("Has this happened to you before?") is a near-exact match for a retained model variable, reached by accident rather than by design. Worth noting that source 7 drew a published letter titled *"'history of conjunctivitis' needs clarifying"* — the term's boundaries were contested by its own readership, so the app's vaguer phrasing loses less than it looks like it does. |
| 20 | Reluctance to open the eye as observed; distress; eyelid swelling, puffiness, erythema; lid vesicles; lid malposition, entropion | RCH eye exam (5); RCH red eye (1); RCH periorbital (4) — *"Unilateral eyelid swelling and erythema"*; AJGP (6) — Box 1 *"Lid swelling"*; Narvekar (11) — *"swelling/puffiness"* | **no — observer** | Every one is something another person sees on first look. Item 7 is the child's-eye half of the first and is separately sourced; it is not a reclassification of this row. Eyelid swelling in particular needs no question — it is the most visible finding in the whole complaint. |
| 21 | Conjunctival redness, erythema, injection (focal vs diffuse), chemosis, ciliary redness; subconjunctival haemorrhage and its posterior extent | RCH red eye (1); AJGP (6); Rietveld (7) — exclusion *"ciliary redness"*; Meltzer (9) — *"Erythema"*, *"Chemosis"* not associated | **no — exam** | And note: **redness is the entry condition**, not a discriminator. Asking a child "is your eye red?" collects the reason they are on the screen. |
| 22 | Discharge character: purulent, mucopurulent, watery; pus on lashes; degree | RCH red eye (1) — *"Purulent discharge"*, bacterial *"purulent discharge"*; Rietveld (7) — inclusion *"(muco)purulent discharge"*; NHS (12) | **no — exam** | The *classification* of items 8's and 11's raw facts. A child sees goop; a clinician distinguishes mucopurulent from watery, and every model in the packet turns on that distinction. |
| 23 | Visual acuity, measured, each eye separately; visual fields | RCH eye exam (5) — *"Visual acuity (and visual fields if there is visual loss/change)"*, *"Assessing visual acuity can be difficult but should be performed early"*, *"Enlist the parent's help for covering an eye"*; RCH penetrating (3) — *"an attempt at determining visual acuity"*; RCH red eye (1) — *"decreased visual acuity"* | **no — exam** | Item 4 is the child's half. **This row is the reason for one of the sharpest wording bans in the packet**: a question that told a child to cover one eye and compare would be this examination performed by a seven-year-old, and its answer would reach a nurse looking like an acuity finding. |
| 24 | Pupils: light reflex direct and consensual, shape, size, symmetry, relative afferent pupillary defect, irregularity/synechiae; red reflex; fixed mildly dilated pupil | RCH eye exam (5); RCH penetrating (3) — *"assess for a Relative Afferent Pupillary [Defect]"*; RCH periorbital (4) — *"relative afferent pupil defect"*; AJGP (6) — Box 1 *"Loss of red reflex"*, *"Abnormal pupil reaction"*, *"Irregularity of the pupils may indicate posterior synechiae"* | **no — exam** | Needs a light and a second person. Named here so that "pupil" is enumerated in `bannedPhrases` rather than assumed. |
| 25 | Slit lamp; direct ophthalmoscope; fluorescein staining under cobalt blue; corneal defect, haze, infiltrate, ulcer, abrasion, rust ring; hyphaema; protrusion or peaking of the iris; eversion of the eyelids; pH measurement in the fornix | RCH eye exam (5) — *"Stain with fluorescein if corneal abrasion, ulcer or foreign body is suspected"*; RCH injury (2) — *"Examine eye and under lids by everting the eyelids"*, *"Continue irrigation until pH normal (6-8)"*; AJGP (6) — *"Check for protrusion and/or peaking of the iris"*, Box 1 *"Corneal defect/haze"* | **no — exam** | The diagnostic core of the complaint, and all of it instrumented. Source 3's *"stop examination, place an eye shield over the eye"* is a guideline telling a **doctor** to stop looking; an app has less standing to look, not more. |
| 26 | Eye movements: restriction, ophthalmoplegia, entrapment; proptosis; cranial nerves | RCH periorbital (4) — *"restricted eye movements"*, *"Proptosis"*; RCH eye exam (5) — *"Cranial nerves"*; RCH injury (2) — orbital blow-out fracture | **no — exam** | Item 10 is the *painful* half. Restriction is a range someone else measures, and testing it means directing the child's gaze — which the wording cautions ban. |
| 27 | Preauricular lymph node; periorbital oedema; pharyngitis; wheezing; systemic features of inflammation (Kawasaki, PIMS-TS); unwell/toxic appearance | RCH red eye (1) — *"Systemic features of inflammation (eg suggestive of Kawasaki disease, PIMS-TS)"*; source 8 — the preauricular node as a textbook claim; Meltzer (9) — *"Preauricular lymph node"*, *"Pharyngitis"*, *"Wheezing"* not associated | **no — exam / observer** | Two independent reasons to exclude: examination, and — for the preauricular node — source 8 found the textbook claim unevidenced and source 9 reports it as not associated. **Never ask a child to feel in front of their own ear**, on the sore-throat packet's palpation principle. |
| 28 | Contact lens wear; prolonged contact lens use | RCH red eye (1) — *"Contact lens wear"*; RCH injury (2) — *"Prolonged contact lens use"*; AJGP (6) — Box 1 *"Contact lens use"*; Rietveld (7) — exclusion *"not wearing contact lenses"* | **no — record** | A Box 1 red flag, and excluded anyway. Contact-lens keratitis is sight-threatening, but lens wear is rare in 4–12, it is on the child's record, and a question about it is noise for the overwhelming majority of this packet's users. **This is the exclusion in the packet a reviewer is most likely to overturn** — raised in "Still open" rather than buried. |
| 29 | Season; month of presentation | Meltzer (9, `PARTIALLY READ`) — *"Presentation in April–November"* | **no — not a question** | The system knows the date. Recorded so it is visibly a decision. Note also that a southern-hemisphere app would need the months inverted, which is a good illustration of how little of source 9 transfers. |
| 30 | Non-accidental injury; history inconsistent with the signs; subconjunctival haemorrhage in an infant; strangulation; child abuse or neglect | RCH red eye (1) — *"may be a sign of non-accidental injury"*, *"strangulation"*, *"Consider consultation with local paediatric team when: Any child with suspected child abuse"*; RCH injury (2) — *"A child with suspected child abuse or neglect"*; AJGP (6) — *"If the history is inconsistent with the signs, consider non-accidental injury"* | **no — excluded outright** | See "The safeguarding exclusion". Third packet to reach this conclusion by a different route. |
| 31 | Atopy; asthma; eczema; recent illness; allergies; medications; prenatal and birth history; family history; day-care attendance; household member with conjunctivitis; infectious contacts | RCH red eye (1) — allergic *"especially in an atopic child"*, *"Rheumatological/autoimmune conditions or family history"*; AJGP (6) — *"recent illness, systemic abnormalities, medications, allergies and prenatal and birth history"*; Meltzer (9) — *"Asthma"*, *"Eczema"*, *"Attendance at day care"*, *"Household member with conjunctivitis"* all reported **not** associated | **no — carer or record** | Not the child's to report — and source 9 reports the two most tempting of them (day care, household contact) as having no association with culture result. Recorded so a future run does not add them back on plausibility. |
| 32 | Anticoagulant / antiplatelet treatment; systemic immunosuppression | RCH red eye (1) — *"Anticoagulant/antiplatelet treatment"* | **no — record** | A five-year-old does not know their medication list. |
| 33 | First aid provided before arrival | RCH injury (2) — *"First aid provided"* | **no — carer** | Genuinely relevant to item 1 (was it irrigated, and when), and genuinely not the child's: a frightened child who had water run over their eye cannot say how much or for how long, and a wrong answer here could delay irrigation. **Belongs on the nurse-facing surface.** |
| 34 | Valsalva precipitants: vigorous coughing, sneezing, vomiting | RCH red eye (1) — *"coughing, sneezing, vomiting, valsalva"*, *"Extensive bilateral subconjunctival haemorrhages from excessive vomiting"* | **no — clinician infers** | The clinician sees the haemorrhage and asks about the mechanism. The child's half is item 13, which is not proposed for v1. |
| 35 | Culture and swab; HSV PCR; Gram and acridine orange stain; imaging for orbital involvement | RCH red eye (1) — *"Swab for HSV PCR"*; RCH periorbital (4) — *"Urgent imaging"*; CPS (10) — *"In the majority of cases, cultures do not provide clinically important information"* | **no — lab / imaging** | Recorded with source 10's line attached so a future run does not go looking for a proxy for a culture result. |
| 36 | Neonatal conjunctivitis; birth history; maternal STI; gonococcal and chlamydial infection | RCH red eye (1); RCH periorbital (4) | **no — out of scope by age** | The app covers 4–12. |
| 37 | Which cause it is | every source | **no — never** | Enumerated as a row because it is the thing this packet must never produce. No condition name reaches a child or a nurse from this app. |

**Yield: ~55 distinct criteria across 2 quantitative models (Rietveld 2004 read
first-hand; Meltzer 2010 `PARTIALLY READ`) and 8 guidelines, reviews and
patient-facing sources → 8 clean, 2 partial proposed, 4 sourced but not proposed
for v1, 5 already collected, 18 excluded.**

**Askable items: 10** — items 1–10. Everything from item 11 down is excluded from
`askableItems`, including the four that are child-reportable but not proposed:
a question tracing to item 11, 12, 13 or 14 must be rejected by `screen.mjs`, not
merely ranked low.

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
(30%); sore throat ~53 → 12 (23%); **eye complaint ~55 → 8 clean plus 2 partial
(18%)**. The lowest proportion of the four, and — unlike sore throat, where the
cause was that two examination findings carried every score — the cause here is
that **the complaint's entire diagnostic apparatus is optical**. A stethoscope
can be pointed at a child who is talking. A slit lamp cannot.

## Items 2, 3, 6 and 7 — four splits, and why none of them is a reclassification

This packet makes more history/examination splits than any before it, so each is
recorded explicitly rather than left to be inferred:

- **Item 2 vs item 6.** *"Sensation of foreign body"* is one bullet in source 1's
  History, but it does two jobs: it is a symptom (item 6, felt now, points at the
  cornea whether or not anything remains) and it is a mechanism (item 2, an
  event, points at an intraocular foreign body that may be causing no sensation
  at all). Source 3's *"Composition of any possible intraocular foreign body eg
  soil/dirt/metal"* is plainly the second and not the first.
- **Item 2 vs item 3.** Sources 3 and 6 both enumerate mechanisms and both keep
  projectile and blunt impact apart. Fusing them would be a *bundling*
  disagreement in the sore-throat packet's sense — one question silently choosing
  a taxonomy the sources do not share.
- **Item 7 vs item 20.** Source 5's *"the child will often be reluctant to open
  their eye"* is an observation with an interpretation attached (it is offered as
  a sign of corneal involvement). Item 7 asks the child what they experience.
  **The split matters more here than anywhere else in the repo**, because the
  observer's version has an obvious and forbidden shortcut: telling the child to
  open the eye. See the wording cautions.
- **Item 10 vs item 26.** *"Painful or restricted eye movements"* is one clause
  containing a symptom and a sign. The symptom is item 10; the sign is measured.
  Getting this backwards would produce a question that instructs a child to
  perform an ocular motility examination on themselves.

## The safeguarding exclusion

Three of the six guidelines read raise non-accidental injury unprompted. Source 6
is the most explicit:

> "Taking an accurate history of trauma can pose a challenge, such as in the case
> of a pre-verbal child or a teenager who might be reluctant to communicate,
> especially in the presence of a parent. In such cases, where trauma is
> suspected but the mechanism of injury cannot be clearly determined, talking to
> the child alone in a friendly and non-accusatory manner may be beneficial. **If
> the history is inconsistent with the signs, consider non-accidental injury.**"

Read that against what this app is. It is a tablet, it talks to a child alone,
and it asks about the mechanism of an eye injury. It is *structurally* the thing
source 6 describes — and that is precisely why it must not attempt the rest.

**Decision: excluded outright, and flagged rather than quietly dropped.** The app
asks *what happened to your eye*; it never asks *who* and it never asks whether
somebody did it. Reasons, in order:

1. A question like "did someone hurt your eye?" is an accusation put to a child
   by a machine, with no adult present, no follow-through, and no capacity to
   respond to a yes.
2. Source 6's own safeguard is *"non-accusatory"* — and the app cannot judge its
   own tone, adapt, or stop.
3. The discriminating fact is **inconsistency between history and signs**, which
   requires the signs. The app has no signs.

Same conclusion and same reasoning as head injury's non-accidental-injury
exclusion, the tummy packet's abuse exclusion and the sore-throat packet's ARF
branch, reached for a fourth time. The nurse-facing surface, not the child-facing
one, is where this belongs — and the clinical reviewer should confirm that the
report makes the *raw* mechanism answers (items 1–3) visible enough to be useful
to someone who is doing the safeguarding assessment properly.

## Wording cautions

Ban **concepts**, not phrasings. Every caution below is transcribed into
`meta.bannedPhrases`; a caution that lives only in prose is not enforced by
`screen.mjs`.

- **Never tell a child to do anything to their own eye.** Not touch it, rub it,
  press it, open it, hold it open, pull the lid, blink hard, wash it out, put
  anything in it, or look at it in a mirror. This is the packet's central ban and
  it has three independent justifications: source 3 — *"avoid any pressure on the
  eyeball through examination or padding, as eye contents may be extruded"*;
  source 3 again — *"stop examination, place an eye shield over the eye"*; and
  source 2 — a child who has had a chemical splash needs irrigation by an adult,
  not self-directed activity. **A child cannot know whether their own eye is the
  one that must not be pressed**, and neither can the app.
- **Never make a question an examination the child performs.** No "cover your
  other eye", no "close one eye and look", no "look up and down", no "move your
  eyes", no "try to look at", no "follow". Item 4 must not become an acuity test
  (item 23) and item 10 must not become a motility test (item 26). Item 10 in
  particular is a report of what happens when the child looks around **in the
  ordinary course of looking around** — not a manoeuvre. Note that source 2 does
  contain the instruction *"Ask the child to look left, right, up and down whilst
  irrigating"*: that is a clinician talking a child through a procedure with
  their hands on the saline. It is not a licence for a tablet.
- **Never name a condition.** Not conjunctivitis, pink eye, cellulitis, uveitis,
  iritis, keratitis, glaucoma, corneal ulcer, abrasion, hyphaema, chemosis,
  endophthalmitis, stye. "Pink eye" is the US lay term and a child may well say
  it — the ban is on the *app* saying it, because a named cause coming out of the
  screen reads as a diagnosis.
- **Never name a structure the child cannot see.** Not cornea, conjunctiva,
  pupil, iris, retina, sclera, lens, globe, orbit, eyeball. Same reasoning as the
  sore-throat packet's ban on "tonsils": naming a structure a child cannot see
  invites them to go and look, and here going to look means touching the eye.
- **Never name the chemical, and never name the object.** Not bleach, not drain
  cleaner, not acid or alkali, not a BB gun, a dart, a pencil or scissors.
  Naming prompts the answer and can frighten a child into denying it — the
  sore-throat packet's item-12 ruling, applied to items 1, 2 and 3. **Decision 3
  makes one deliberate, narrow exception for item 1** and explains why.
- **Never say anything about losing sight.** Not blind, not "lose your sight",
  not "vision loss", not "damage", not "go dark". A child asked whether they are
  going blind will answer the fear, not the fact — and items 4 and 5 are asked of
  children who may already be frightened that the answer is yes.
- **Never say "fever"**, never ask for a temperature, never mention degrees.
  Item 14 is the child's sensation and is not proposed for v1 in any case.
- **Never name a treatment.** No eye drops, no antibiotics, no ointment, no
  "washing it out". The app collects; it does not advise.
- **Never ask an accusatory or attributive trauma question.** No "did you poke
  it", no "were you playing with", no "did someone hit you", no "whose fault".
  See "The safeguarding exclusion", and note that source 6 requires a
  *"non-accusatory"* manner that an app cannot modulate.
- **US English throughout, and these sources are not.** Source 1 and source 2 are
  Australian, sources 7, 8 and 12 are British and Dutch-British. Banned as
  British idiom: **"poorly"**, **"sticky eye"** (the UK term of art for a
  neonate's discharging eye), **"torch"** (US: flashlight), **"have you got"**,
  **"casualty"**, **"plaster"**, **"mum"**, **"nappy"**. Banned as source jargon
  the register decision replaces: **"glued"**, **"matted"**, **"gritty"**,
  **"discharge"**, **"pus"**, **"tearing"**, **"photophobia"**, **"visual
  acuity"**, **"diplopia"**, **"foreign body"**.
- **Never ask a child to rate or grade anything in words** — already banned
  globally, and it bites hard here: source 1's *"severe eye pain"* and source 6's
  *"Significant pain"* are both gradings, and both are the FPS-R's job.
- **Avoid "still"** — banned universally by `screen.mjs`, noted because "can you
  still see okay?" is the most natural phrasing of item 4 and is forbidden. It
  presupposes, and on this item it presupposes something frightening.

## How these were found

Search A was run as the brief specifies — comparison and validation literature,
not a remembered rule name. **It came back nearly empty, and that is the
finding.** The whole of the quantitative literature it surfaced is: an adult
cohort study (source 7), a paediatric cohort study that could not be read
(source 9), and a systematic review whose conclusion is that the field's
received signs *"seem not to be based on evidence"* (source 8). There is no
paediatric equivalent of PECARN here, and there is no equivalent of Cohen's
eight-rule systematic review either. **A future run should not spend long
looking for one.**

Search B is where essentially the whole packet came from. Of the ten askable
items, **eight appear in no quantitative model at all** — the three trauma items,
vision, photophobia, foreign-body sensation, hard-to-keep-open, and painful eye
movements. Only items 8 and 9 (stuck-shut and itch) are model variables, and they
are ranked eighth and ninth.

And the gap between the searches is not the same shape as either previous
packet's:

- **The tummy packet's gap was prevalence** — the rules predicted 8% of arrivals.
- **The sore-throat packet's gap was purpose** — the scores answered *"does this
  child need an antibiotic?"* and the guidelines answered *"is this child's
  airway in trouble?"*
- **This packet's gap is both at once, and worse.** Both models here predict
  *bacterial culture positivity in conjunctivitis*, which is a subset of a subset:
  conjunctivitis is one of six causes source 1 lists for a red eye, and bacterial
  is one of three conjunctivitis types. **Neither model contains a single
  variable that would detect a chemical splash, a penetrating injury, a retained
  foreign body, orbital cellulitis, or a change in vision** — that is, every one
  of the things that can cost a child their sight. And source 8 says the models
  do not work anyway.

For the next packet: where Search A returns a model that predicts a *diagnosis*
rather than a *danger*, rank by Search B, and say in the packet how far the model
is from the complaint. Here the distance is four levels — red eye → conjunctivitis
→ infectious → bacterial — and no previous packet has had to say that.

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with the shipped packets.** The new
   vocabulary domain is the eye, and it is ruled explicitly before anything is
   generated:
   - **"your eye" / "your eyes"** — matches the body-map labels "Right eye" and
     "Left eye". Never a structure the child cannot see.
   - **"stuck together" / "stuck shut"** for item 8 — not "glued" (source 7's
     term), not "matted", not "gummed", not "sticky eye" (British).
   - **"goopy"** if a word for discharge is needed at all — not "discharge", not
     "pus", not "mucus", not "secretions". Item 8 should generally not need one:
     "was your eye stuck shut when you woke up?" carries the fact without naming
     the substance.
   - **"like something is in it"** for item 6, and for the older tier **"like
     sand"** — not "gritty" (British), not "foreign body sensation", not "grit".
     Source 11 tested *"feeling like something is in the eye"* with patients and
     found it understood; this is the one item where the register ruling has
     direct evidence behind it.
   - **"light hurts your eyes"** / **"bright light"** — not "photophobia", not
     "sensitivity to light" (abstract for the young tier), not "torch".
   - **"blurry"** — matches the shipped `blurry` question exactly. Not "visual
     acuity", not "vision impairment", not "visual disturbance".
   - **"watery"** / **"keeps watering"** — not "tearing", not "weeping". (Item 11
     only; not proposed for v1.)
   - **"splashed"** for item 1, and **"got into your eye"** for item 2. Never
     "chemical" as a bare noun for the young tier — see decision 3.
   - **"itchy"** — matches `SENSATIONS.itchy` and the shipped `eye-itch`.
2. **Answer types: yes/no, all ten askable items.** `FollowUpScreen` renders
   `yesno`, `count`, `text` and `voice`, and this packet needs none of the other
   three. Item 8 loses source 7's *"(0, 1, or 2)"* granularity by being yes/no —
   accepted, because the body map records which eye and the count of glued eyes
   is a model weight rather than a fact. Item 11's demotion is the one place
   where the answer type genuinely costs something (decision 6).
3. **Item 1 may use a category cue, and this is a deliberate exception to the
   object-naming ban.** The sore-throat packet ruled that the swallowed object is
   never named, because naming prompts. That ruling is kept here for items 2 and
   3 — never a BB gun, a dart, a pencil. **Item 1 is different and is treated
   differently**, on three grounds:
   - *"Chemical"* is not a word a 4-year-old owns, and a question they do not
     understand returns "no".
   - The cost of a false negative is not symmetrical with the cost of a false
     positive. A missed chemical splash costs sight; a child who says yes about
     water costs the nurse ten seconds.
   - Source 2 puts irrigation *before* examination and says *"First aid takes
     precedence over a complete examination"* — the fact has to arrive early or
     it arrives too late.

   **The exception is narrow: a generic category cue only** — "something from a
   bottle", "a spray", "cleaning stuff". **Named substances stay banned**, so
   "bleach", "drain cleaner", "acid" and the rest remain in `bannedPhrases`. A
   generator must not read this decision as permission to list hazards.
4. **Items 8, 9 and 11 are three facts, and the shipped `eye-itch` fuses two of
   them.** `eye-itch` asks *"Are your eyes itchy or watery?"* Every source read
   separates itch from discharge, and source 7 has them pointing in **opposite
   directions**: itch lowers the probability of a bacterial cause, glued eyes
   raise it. A child with sticky eyes and no itch and a child with itchy watery
   eyes and no stickiness are the two ends of the packet's only discriminating
   axis, and a fused yes/no cannot tell them apart. **Ruling: item 9 asks itch
   alone.** This is the sore-throat packet's *bundling disagreement* category,
   met for a second time, and met in an already-shipped question rather than in
   the literature — which is the more useful place to catch it.
5. **Duration scope, and the `long-time` band carries more of this packet than of
   any previous one.** The sources:

   | Source | Window |
   |--------|--------|
   | Rietveld 2004 (7) | exclusion: *"pre-existing symptoms for longer than seven days"* |
   | NHS (12) | *"symptoms have not cleared up within 7 days"* → see a GP |
   | CPS (10) | acute conjunctivitis is *"less than 14 days in duration"* |
   | RCH (1) | viral *"Self-resolving over 1–3 weeks"*; subconjunctival haemorrhage *"resolves spontaneously within 1 – 3 weeks"* |
   | AJGP (6) | Box 1 red flag: ***"Failure to resolve"*** |
   | RCH (1) | History bullet: *"Time course of the redness"* — no number |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
   - `not-sure` — **full packet.** Same convention as every other packet:
     `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **items 1, 2, 3, 4, 5, 6, 7 and 10** (and 12, which is not
     proposed for v1 anyway). Dropped: **8, 9, 11, 13, 14.**

   The reasoning, which differs from the sore-throat packet's by more than it
   looks: there, the score variables expired and the red flags did not. Here the
   same is true — source 7 *itself* excludes symptoms over seven days, so items 8
   and 9 have no evidential support beyond a week — **but the injury items get
   sharply *more* important with time, not merely as important.** A retained
   intraocular foreign body from an unwitnessed injury three weeks ago is the
   canonical missed diagnosis in source 3's literature; source 2 notes that
   *"Most injuries occur at home away from parental supervision"*; and source 6
   makes *"Failure to resolve"* a referral red flag in its own right. A child
   whose eye has been sore for a month and who is finally asked whether something
   went into it is the exact case this packet exists for.
6. **Item 11 (watery) is demoted, not deleted, and the reason is the widget.**
   The literature's discriminating axis is watery-versus-mucopurulent. Item 8
   captures the sticky end; a yes/no "is it watery?" captures the other end of
   the same axis and would burn one of five or six slots to do it. If a
   two-option answer widget ever ships, **item 11 is the first item to promote**
   and it should replace item 8 rather than joining it. Recorded so this reads as
   a decision about the app rather than a judgement about the evidence.
7. **Age floors: none — and unlike the sore-throat packet, that is a judgement
   rather than a finding.** The sore-throat packet could say honestly that no
   source floored anything. Here **source 11 does**: it put its patient-reported
   instrument at ≥ 8 and used a caregiver instrument below that. This packet
   declines to import that floor, and the reasoning is recorded as
   **`JUDGEMENT, NOT A CITATION`** in `minAgeNotes`:
   - Source 11's floor attaches to a **0–10 numeric rating scale** used as a
     clinical-trial endpoint, requiring a child to quantify severity over a 24-h
     recall window. This packet asks yes/no questions about the present.
     Different task, different demand.
   - Source 11's paediatric evidence is *"only 4 children in the dyads (aged 9–10
     years)"*. A floor at 8 derived from four nine-year-olds is not a floor.
   - Importing it would silence **every question in this packet** for the 4–7
     tier, in a group where the app currently ships two hand-written questions to
     that tier already, with no evidence at all behind them. Replacing two
     unevidenced questions with none is not an improvement in safety.
   - Source 6 cuts the other way: it says the *carer's* history for a young child
     *"may not necessarily know the full story"* and recommends talking to the
     child.

   **But the honest form of this decision is not "no floors, therefore fine."**
   It is: *this packet's young tier rests on judgement where its older tier rests
   on thin evidence, and the reviewer should treat the 4–7 wording of items 1, 2,
   3 and 10 as the least supported thing in the repo.* Carried to "Still open".
8. **`depth: null`**, because `GROUP_DEPTH.eyes === 'internal'`, the depth screen
   never fires for this group, and `depths['eyes']` is permanently `undefined`.
   Writing `"inside"` would assert a scope the app has no answer to test — the
   sore-throat packet's decision 8, reached identically.
9. **No item is ranked highly because a model names it.** Source 8's conclusion
   makes this the governing principle of `itemRank`: the two model variables
   (items 8 and 9) rank eighth and ninth, below eight guideline-only items. The
   ordering is:

   `1 (splashed) → 4 (blurry) → 2 (something went in) → 3 (hit or bumped) →`
   `5 (light hurts) → 6 (feels like something in it) → 7 (hard to keep open) →`
   `8 (stuck shut) → 9 (itchy) → 10 (hurts to look around) →`
   `11 (watery) → 12 (double vision) → 13 (cold or cough) → 14 (hot or shivery)`

   Item 1 leads on time-criticality (decision 3). Item 2 is second because it is
   the single best-sourced criterion in the packet — six of six guidelines — and
   one of the four key features of a sight-threatening condition. Items 2 and 3
   follow because the group has no mechanism gate and nothing else in the app
   asks them. The cap is five sourced questions for the young tier and six for
   the older, so **the top six is the set that actually gets asked**: splashed,
   blurry, went-in, hit, light, and (older tier only) feels-like-something.
   Items 11–14 are ranked but excluded from `askableItems`; their rank positions
   exist only so a future v2 does not have to re-derive the ordering.
   **Proposed, not yet confirmed by review.**
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood, helps, and
    the other groups' follow-ups:
    - **Rejected as duplicates:** item 15 (the body map's `eye-left` /
      `eye-right`), item 16 (`DURATIONS`), item 17 (setup age), item 18 (FPS-R
      plus body map plus `SENSATIONS.sharp` / `aching` / `burning` /
      `throbbing`), item 19 (`happened-before`). Item 18 is the significant one:
      **eye pain is the best-sourced criterion in the packet and is already
      collected three ways.**
    - **Partial overlap, kept:** item 9 (itchy) against `SENSATIONS.itchy`. The
      group is `internal`, so no depth is recorded, so `activeDepths` returns
      both and the `surface`-tagged `itchy` **is** offered to this child. But
      `SENSATIONS` is a free-choice list a child may skip, and source 7 needs itch
      as a directed yes/no. Kept, and ranked ninth partly because of this
      overlap. The same is true of `SENSATIONS.burning`, which is why no separate
      "does it burn?" item exists despite sources 1, 7, 9 and 11 all naming it.
    - **Cross-group duplicate, needs a shared `fact`:** item 5 duplicates the
      `head` group's hand-written `light-hurts` ("Do bright lights make it
      worse?"). `keyOf` now dedupes on `fact ?? id`, and `light-hurts` **has no
      `fact` field** — so as things stand a child who taps their forehead and
      their eye will be asked about bright light twice under two ids. The
      generator must give item 5's candidate a `fact` and `light-hurts` must be
      given the same one. Flagged for the reviewer as a one-line change outside
      this packet.
    - **The two shipped `eyes` follow-ups have no `fact` at all.** `blurry` and
      `eye-itch` are the only remaining `FOLLOW_UPS` entries in their groups
      without one (compare `hearing`, `hurt-swallow`, `cough`, `threw-up`, which
      all carry facts). Consequence: a sourced question covering the same ground
      will **not** suppress them, and the child gets both. See decision 11.
    - **Adjacent, not redundant:** `HELPS.quiet` ("A quiet dark room") is what a
      photophobic child asks for, and is the nearest thing the app has to item 5
      — but `HELPS` records what a child *wants*, item 5 records what they
      *experience*, and a child may want a dark room for a headache. Kept
      separate. `HELPS.clean-it` ("Someone to clean it") stands in the same
      relation to item 8, and `HELPS.ice` to item 3.
11. **The two hand-written `eyes` follow-ups must be re-sourced, not assumed —
    and the failure mode has changed since the sore-throat packet was written.**
    `followUpsForGroups` no longer does `if (sourced.length) continue`; it now
    appends the hand-written fallbacks after the bank's questions and dedupes on
    `fact ?? id`. So the risk is no longer that `blurry` and `eye-itch` are
    silently dropped — **it is that they are silently *duplicated***, because
    neither carries a `fact`. Items 4 and 9 exist to carry them across with
    citations, and the generator must tag both candidates with facts that match
    what `blurry` and `eye-itch` should be given. Both survive the re-sourcing
    comfortably: `blurry` is in all six guidelines, and `eye-itch` is in five
    sources and a model — **though only after decision 4 splits it in two.**
    Worth noting that whoever hand-wrote these picked, unaided, the packet's
    best-sourced child-reportable criterion and one of its two model variables.

## Still open

- **`eyes` has no gate, and it probably wants a `mechanism` one.** `GROUP_GATE`
  covers `head`, `chest`, `tummy`, `limb` and `back`. Nothing establishes whether
  an eye complaint is traumatic, so three of this packet's ten askable items
  (1, 2, 3) are spending slots on a discrimination the head group makes in one
  gate question. A `mechanism` gate on `eyes` — *"Did something happen to your
  eye, or did it just start hurting?"* — would free two slots and route the
  injury items and the conjunctivitis items separately. **This is the single
  highest-value change this packet suggests to the app**, and it is deliberately
  not made here: this run writes only two files, and a gate change alters what
  every child in the group is asked.
- **The `head` / `eyes` photophobia duplication (decision 10)** is the third
  instance of the same problem across three packets. `light-hurts` needs a
  `fact`; so do `blurry` and `eye-itch`.
- **Item 10 rests on one clause of one guideline** and is the only child-facing
  route to the periorbital/orbital distinction. Either it deserves better
  sourcing than this run could find, or the reviewer should accept it explicitly
  as a single-source item. It should not be allowed to ship by inattention.
- **Item 28 (contact lens wear) is excluded and a reviewer may well overturn
  that.** It is a Box 1 red flag in source 6 and a history bullet in sources 1
  and 2, and contact-lens keratitis is sight-threatening. The exclusion rests on
  base rates in 4–12 year olds and on it being on the record — both of which are
  judgements, not citations.
- **Source 9 (Meltzer) was never read first-hand**, and it is the only paediatric
  model that exists for this complaint. A future run with a working route to
  `jamanetwork.com` or to an author copy should re-derive items 8 and 11 from the
  verbatim text and check whether this packet's reported version of its four
  factors and its null findings is accurate.
- **ChOIR-Q (2024) could not be fetched** and is the single highest-value missing
  source: a paediatric self-report eye-symptom instrument with separate formats
  above and below age 9 would either support or overturn decision 7 directly. It
  is a preprint, so it would need to be read as one.
- **NICE CKS conjunctivitis returned 403.** The packet has no UK primary-care
  guideline, which leaves Search B entirely Australian plus one patient-facing
  NHS page. A reviewer should know the guideline base is narrower than the source
  count suggests: **five of the twelve sources are RCH Melbourne, and a sixth
  (AJGP) is the paper RCH reproduces its own table from.** Six of twelve sources
  are, in effect, one institution's view and its cited source.
- **The duration bands do not resolve the acute window.** Source 7 excludes at 7
  days, source 12 escalates at 7 days, source 10 defines acute at 14 days, source
  1 expects resolution at 1–3 weeks. `DURATIONS` offers `few-days` then
  `long-time` with nothing between, so the 7-to-14-day zone — where "failure to
  resolve" becomes a red flag — is invisible to the app. Probably acceptable
  (the nurse knows the date), but a reviewer should confirm.
- **The young tier (decision 7).** No item is floored, on judgement, against the
  one instrument-development study that floored its own tool at 8. If a play
  specialist or clinician disagrees, the correct response is not to floor
  individual items but to reconsider whether the `eyes` group should ask a 4-year-
  old anything at all beyond what the body map and the FPS-R already collect.
- **Nothing in this packet has been checked against a child.** That is true of
  every packet, and it is worth restating here because this is the first one
  whose central safety item (item 1) depends on a 4-year-old understanding a
  category cue — "something from a bottle" — that no source tested and this run
  invented.

## Ambiguity in the sources

Recorded rather than papered over.

- **Source 9 was not read.** Stated at the top of the packet, repeated in the
  Sources list, marked in every citation, and repeated here because the brief is
  explicit that a reader must not have to reach the last page to find the weakest
  link. Its four factors and its null findings are reported at one remove and
  **have not been verified against verbatim text**. No item depends on it alone.
- **The two models disagree about discharge and nobody has reconciled them.**
  Source 7 retains *glued eyes in the morning* as a positive bacterial indicator.
  Source 9 reports *"No or watery discharge"* and *"No glued eye in the morning"*
  among factors predicting a **negative** culture — consistent in direction, but
  the two studies are an adult Dutch primary-care cohort and a paediatric US ED
  cohort, and this packet has no basis for saying whether the first transfers to
  children at all. Item 8 is therefore ranked eighth rather than first despite
  being the only variable both models contain.
- **Source 8 undercuts the sign-and-symptom basis of the whole complaint**, and
  source 7 — by the same first author, the following year — proceeds to derive a
  rule from signs and symptoms anyway. Both are cited here, and the tension
  between them is not this packet's to resolve. It is recorded because a reader
  who cites source 7 without source 8 has taken half the evidence.
- **RCH's history/examination boundary is not consistent**, exactly as the
  sore-throat packet found for RCH's throat guideline. Source 1 files *"Eye
  pain"*, *"Photophobia"* and *"Itch"* under History (correct) but also files
  *"Discharge"* and *"Contact lens wear"* there, one of which is an examination
  finding and one a record. The self-report filter here had to be applied to the
  **criterion**, never to the heading it sits under.
- **Source 1's own symptom table is reproduced from source 6**, with permission
  and with an explicit credit line in the fetched text. So two of the twelve
  sources are not independent on the point they are most often cited for
  together, and citations naming both should be read as one source and its
  publisher.
- **Source 10 is from 2001.** Twenty-five years old, and used here for exactly one
  sentence — the 14-day definition of "acute". Its epidemiology and all of its
  management content are not carried and a future run should not carry them
  without checking a current source.
- **Source 11 is industry-sponsored and its paediatric arm is four children.**
  Recorded in the Sources list and repeated here because item 6's claim to the
  best self-report evidence in the packet is a claim about a very low bar.
- **No original derivation paper was read for source 9, and source 7 was read as
  a PDF render rather than as structured full text.** The Europe PMC render
  introduces spacing artefacts — *"Hen kCPMv a nW e e r t"* for van Weert, *"foreign
  body sen- sation"* across a line break — which were repaired by hand when
  quoting. Every quotation from source 7 in this packet was taken from a
  `find-in-source.mjs` window, so the words are the source's; the whitespace is
  not always.
- **"History of conjunctivitis" was contested in print.** Source 7 attracted a
  published letter titled *"'history of conjunctivitis' needs clarifying"* (its
  existence is visible in the Europe PMC record for the article; **the letter
  itself was not read**). Item 19 maps the variable onto the app's vaguer
  `happened-before`, which is recorded as a convenience rather than as a claim
  that the two are equivalent.
