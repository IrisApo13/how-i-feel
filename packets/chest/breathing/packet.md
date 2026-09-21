# Difficulty breathing or cough

Presenting complaint · packet `chest-breathing` · serves group `chest`, depth
**`inside`** · packet v1 · assembled 2026-09-02
Status: **not yet clinically reviewed** · sources verified first-hand: 14 of 15

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
> who arrives with difficulty breathing or a cough, and marks which of those a
> child can report about themselves. **Not** a diagnostic tool: nothing here may
> be scored, summed, or shown to a child or nurse as a suggested cause.
>
> This is the most observation-heavy complaint in the set, and the packet is
> shaped by that fact rather than working around it. Respiratory rate, chest
> recession, accessory muscle use, oxygen saturation, wheeze on auscultation and
> stridor are the backbone of every paediatric respiratory assessment read here,
> and **not one of them is child-reportable.** The clean yield is the lowest of
> any packet so far and that is the honest answer, not a shortfall in searching.

## Scope

**Age.** App covers 4–12. Two age facts in the sources matter and they are
different in kind:

- **Capability floor, and it is real.** Source 13 (Dalhousie dyspnea scales) is
  the only source read that tested whether children can report breathlessness
  *at all*: *"Children aged eight years or older rated the scales in the correct
  order 75% to 98% correctly, but children less than 8 years of age performed
  unreliably."* This floors **rating breathlessness on a graded scale** — which
  is item 20, excluded, and banned app-wide anyway. It does **not** floor a
  yes/no question about whether breathing is hard, and inventing a floor of 8 on
  item 1 from it would be exactly the borrowed citation the brief warns about.
  See decision 7 and the split at item 20.
- **Positive evidence at 4.** Source 12: *"The C-ACT is a seven-item
  questionnaire that was developed and validated to assess asthma control among
  children 4–11 years old. Four questions are answered by the child and three by
  the parent or caregiver."* The four child-answered items are *"How is your
  asthma today"* plus *"activity limitation, cough and nighttime awakenings"*.
  Three of this packet's top five items are those three constructs, validated in
  exactly the app's age band.

**Out of scope by age.** WHO IMCI (source 3) classifies children **2 months up
to 5 years**; its fast-breathing thresholds (50/min under 12 months, 40/min
1–5 years) are outside the app's range for all but the youngest users and are
not carried. IMCI contributes the *structure* of the complaint and its duration
rule, not its cut-offs. STARWAVe's *"age (<2 years)"* predictor (source 2) is
below the app entirely. Bronchiolitis is not covered: source 6 states *"Children
<12 months of age presenting with wheeze are likely to have bronchiolitis"*.

**Depth: `inside`, and unlike the sore-throat packet this one is real.**
`GROUP_DEPTH.chest === 'ask'` in `src/data/bodyMap.js`, no `chest` follow-up
carries `resolvesDepth`, so `depthGroupsForRegions` returns `chest` and the
child is genuinely asked "on your skin, or inside?". `depths['chest']` therefore
holds a real answer, `bankQuestions` can filter on it, and `"depth": "inside"`
in the sidecar is a claim the app actually tests. **A rash, spots or soreness on
the chest wall belongs to the `surface` half and is out of scope here** — see
decision 9 for what happens to the two shipped `surface` questions.

**Group `chest` is exactly one region.** `REGIONS` contains a single entry with
`group: 'chest'` — `{ id: 'chest', view: 'front', label: 'Chest' }`. No hips-style
stowaway, no left/right split, no back-view sibling (`upper-back` is group
`back`). This is the narrowest group any packet has served and it removes the
scope problem that sore throat has with `neck` and tummy has with `bottom`.

**Adjacent and deliberately not covered:** chest *pain* as a presenting
complaint (its own literature and, on the evidence of `packets/.sources/`, its
own packet in progress); anaphylaxis (source 9 lists face and tongue swelling,
urticaria and allergen exposure — a different presenting complaint with its own
emergency pathway); the upper-airway causes reached through the throat (croup,
epiglottitis, quinsy, retropharyngeal abscess) except where they change what a
*chest* tap should ask; inhaled-foreign-body management; every drug, dose and
flow chart, which is most of what these guidelines are about.

## Sources

1. **Chacko J, King C, Harkness D, Messahel S, Grice J, Roe J, Mullen N, Sinha
   IP, Hawcutt DB; PERUKI.** "Pediatric acute asthma scoring systems: a
   systematic review and survey of UK practice." *J Am Coll Emerg Physicians
   Open* 2020;1(5):1000–1008. doi:10.1002/emp2.12083. **Read first-hand** via
   PMC7593416 (targeted windows). **Search A's discovery source.** Systematically
   identified **17 published paediatric asthma severity scores** and tabulated
   every component of every one of them (Table 1), then surveyed 59 PERUKI sites
   on what they actually record. Table 1 is the single most important artefact
   in this packet and is quoted in full below.
2. **Wildes DM, Chisale M, Drew RJ, Harrington P, Watson CJ, Ledwidge MT,
   Gallagher J.** "A Systematic Review of Clinical Prediction Rules to Predict
   Hospitalisation in Children with Lower Respiratory Infection in Primary Care
   and their Validation in a New Cohort." *eClinicalMedicine* 2021;41:101164.
   doi:10.1016/j.eclinm.2021.101164. **Read first-hand** via PMC8529204
   (targeted windows). Search A's second arm — the *infection* side rather than
   the *asthma* side. Found **exactly one** eligible rule (STARWAVe) and
   validated it in the Malawian BIOTOPE cohort.
3. **World Health Organization, "Integrated Management of Childhood Illness
   (IMCI) chart booklet".** **Read first-hand** (targeted windows) from the
   cached WHO PDF. The complaint-organised source in its purest form: one of its
   four main-symptom modules *is* "cough or difficult breathing".
4. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Cough"**, PIC-endorsed. **Read first-hand** — the guideline body was read
   near-whole because it is short (13.9 kB) and `--scan` returned nothing on it;
   see "How these were found". The primary complaint-organised source for the
   cough half.
5. **RCH Melbourne, CPG, "Assessment of severity of respiratory conditions"**,
   last updated September 2024. **Read first-hand** (near-whole; 6.7 kB). The
   single most consequential source in this packet for the self-report filter.
6. **RCH Melbourne, CPG, "Acute asthma"**. **Read first-hand** (History,
   Examination and severity-classification blocks).
7. **RCH Melbourne, CPG, "Pneumonia"**. **Read first-hand** (Background,
   History, Examination, severity blocks).
8. **RCH Melbourne, CPG, "Croup (Laryngotracheobronchitis)"**, last updated
   September 2024. **Read first-hand** (Key points, Background, Assessment,
   severity table).
9. **RCH Melbourne, CPG, "Acute upper airway obstruction"**, last updated March
   2021. **Read first-hand** (Assessment and differential-diagnosis table).
   Reached from source 4's "See also" line and shared with the sore-throat
   packet, which cites the same table for the throat side.
10. **NHS Greater Glasgow & Clyde, Paediatric Clinical Guideline 623, "Acute
    wheeze in children 2 years and older: assessment and management"** (under
    review as of November 2023; *"remains safe for use"*). **Read first-hand**;
    fetched fresh this run. Second organisation, ED-facing, and the only source
    that grades breathlessness by **how much of a sentence the child can say**.
11. **ISAAC (International Study of Asthma and Allergies in Childhood) Phase One
    manual**, Module 1.1 core questionnaire for wheezing and asthma, plus the
    protocol section on age-band administration. **Read first-hand** (targeted
    windows) from the cached UK Data Service PDF. The largest childhood
    respiratory symptom instrument in existence and the source of the actual
    wording children have been asked.
12. **Bime C, et al.** "Measurement characteristics of the childhood
    Asthma-Control Test and a shortened, child-only version." *npj Prim Care
    Respir Med* 2016;26:16075. doi:10.1038/npjpcrm.2016.75. **Read first-hand**
    (targeted windows). The affirmative evidence that 4–11 year olds self-report
    respiratory symptoms — **and the evidence for how much is lost when the
    parent is removed**, which is precisely this app's situation.
13. **McGrath PJ, Pianosi PT, Unruh AM, Buckley CP.** "Dalhousie dyspnea scales:
    construct and content validity of pictorial scales for measuring dyspnea."
    *BMC Pediatr* 2005;5:33. doi:10.1186/1471-2431-5-33. **Read first-hand**
    (targeted windows). The only source read that asked children to describe
    breathlessness in their own terms, and the only source of a genuine
    capability floor.
14. **Fruchter N, Arcoleo K, Rastogi D, Serebrisky D, Warman K, Feldman JM.**
    "Attention-Deficit Hyperactivity Disorder Symptoms, Underperception of
    Respiratory Compromise, and Illness Representations in Black and Latino
    Children With Asthma." *J Pediatr Psychol* 2023. doi:10.1093/jpepsy/jsad062.
    **Read first-hand** (targeted windows) via PMC10653357. Included for one
    number, which is the most important caveat in this packet.
15. **RCH Melbourne, CPG, "Pertussis / whooping cough"** — **NOT READ.** Named
    in source 4's "See also" line. Two fetch attempts returned HTTP 404 on
    guessed paths and the correct URL was not established. **Nothing in this
    packet depends on it**; the consequence is recorded in "Still open", because
    paroxysmal cough and post-tussive vomiting are plausibly child-reportable
    and this packet cannot source them properly.

## The rule(s), as published

### Source 1, Table 1 — every component of all 17 asthma severity scores

Verbatim, with the review's own counts. Scores tabulated: MPIS, Koumbourlis,
ASS, CAS, CAES2, SCAS, ASS-adj, ASS2, PAS, PASS, AAIRS, PRAM, PIS, RAD, CS, PS,
RA.

> "Wheeze — Inspiratory wheeze … Expiratory wheeze … Audible without stethoscope
> · Dyspnea · Rate of breathing — Respiratory rate/tachypnea · Quality of the
> entry of air — Aeration/air entry/breath sounds · Inhalation/exhalation length
> — Inhalation-exhalation ratio/prolonged expiratory phase · Heart rate ·
> O2 saturation · Accessory muscle use or retraction or work of breathing —
> General accessory muscle use/increased work of breathing · Suprasternal
> muscle/SCM retraction · Substernal/subcostal/intercostal recession ·
> Supraclavicular contractions · Scalene muscle retraction · State of alertness
> — Cerebral function/mental status"

> "The most common parameters considered were expiratory wheeze (15/17),
> inspiratory wheeze (13/17), respiratory rate (10/17), and general accessory
> muscle use (9/17)."

**Fifteen parameters. Exactly one of them — "Dyspnea" — is a symptom rather than
a sign, and it appears in 5 of 17 scores.** Everything else in the table is
something a clinician looks at, listens to, counts or measures. This is the
central fact of the packet and it was established by Search A before a single
guideline was opened.

Source 1's second finding matters for how much weight the table can bear:

> "Among well-validated scores like the Pulmonary Index Score (PIS), Pediatric
> Asthma Severity Score (PASS), Childhood Asthma Score (CAS), and the Pediatric
> Respiratory Assessment Measure (PRAM), only 6/59 (10.2%), 3/59 (5.1%), 1/59
> (1.7%), and 0 (0%) of units always collected the data required to calculate
> them."

Seventeen scores exist; PRAM, the best-validated of them, is fully recorded by
**none** of 59 UK paediatric emergency departments.

### Source 2 — STARWAVe and BIOTOPE, verbatim

> "In STARWAVe, current asthma; age (<2 years); inter-/sub-costal recession;
> illness duration (<4 days); moderate to severe vomiting (within 24 hours of
> presenting); wheeze; and body temperature (>37.8 degrees celcius or
> parent-reported severe fever within 24 hours of presenting) were the
> predictors employed by the final model."

The BIOTOPE cohort's own variables, from the same passage:

> "…age; positive malarial rapid diagnostic test; difficulty breathing;
> grunting; chesty cough; respiratory rate; intercostal recession; and wheeze."

And the review's headline:

> "This review highlights the lack of clinical prediction rules in this area."
> … "The AUC of STARWAVe for a confirmed diagnosis of bacterial pneumonia was
> 0.39 (95% C.I 0.25-0.54)."

An AUC of 0.39 is worse than a coin toss. STARWAVe predicts *hospitalisation*
usefully (AUC 0.80) and *pneumonia* not at all.

### Source 3, WHO IMCI, verbatim — and the shape of it

> "THEN ASK ABOUT MAIN SYMPTOMS: Does the child have cough or difficult
> breathing? If yes, ask: Look, listen, feel: **For how long?** Count the
> breaths in one minute. Look for chest indrawing. Look and listen for stridor.
> Look and listen for wheezing. CHILD MUST BE CALM"

**One question and four observations.** Compare IMCI's other modules, from the
same booklet: diarrhoea asks *"For how long? Is there blood in the stool?"*; ear
problem asks *"Is there ear pain? Is there ear discharge? If yes, for how
long?"*. The complaint this packet serves is the one where WHO's algorithm asks
the least. That is not an artefact of who WHO wrote for — it is what the
complaint is like.

The duration rule, which does the work in decision 5:

> "If coughing for more than 14 days or recurrent wheeze, refer for possible TB
> or asthma assessment"

### Source 5, verbatim — the whole packet in three sentences

> "In general, children with respiratory distress should have minimal handling"
>
> "**The assessment of severity can mostly be made without touching the child.**
> Parents can be asked to uncover the child's chest/abdomen"
>
> "**Careful observation of the child is important.** Oxygen saturations may be
> misleading"

Its severity table has seven rows — **Behaviour, Colour, Respiratory rate,
Increased work of breathing, Oxygenation, Heart rate, Blood pressure** — and all
seven are observed or measured. Its definition of the fourth:

> "Signs of increased work of breathing: Retractions (intercostal, suprasternal,
> costal margin) · Accessory muscle use eg nasal flaring, sternocleidomastoid
> contraction (head bobbing), forward posturing · Grunting"

The one row with a child-facing half is Behaviour, which grades *"Able to
vocalise normally"* → *"Some limitation of ability to vocalise"* → *"Marked
limitation of ability to vocalise, single words"* → *"Unable to vocalise"*. See
items 3 and 19 for the split.

One line from the same source is a clean, non-observational history item and is
the sole source of item 7:

> "In addition to assessing respiratory status, it is important to assess
> feeding and hydration as these may be affected early in respiratory illness"

### Source 10, verbatim — breathlessness graded by sentence length

> "MILD … Able to talk normally"
> "MODERATE … Dyspnoea resulting in limitation of full sentences"
> "SEVERE … Marked dyspnea resulting in <3 word sentences"
> "LIFE THREATENING … Unable to talk due to dyspnoea"

Also its "'Red Flag' features", both of which are records rather than symptoms:

> "Has the patient previously received IV therapy for wheeze management? Has the
> patient been admitted to the PICU previously for respiratory illness?"

And its chronic-features trigger, which cross-supports item 5:

> "3 or more ED presentations with wheeze in 1 year · 3 or more courses of
> steroids for wheeze in 1 year · Answered yes to interval symptoms on wheeze
> proforma"

### Source 4, verbatim — the cough history, and what "interval symptoms" means

> "Acute cough: lasting up to 2 weeks · Protracted acute cough: daily cough
> lasting 2-4 weeks · Chronic cough: daily cough lasting >4 weeks"

> "Onset/triggers — Sudden onset without viral prodrome (or after choking
> episode) may suggest foreign body inhalation … Choking or coughing with
> feeding may suggest aspiration … Association with exercise, environment
> changes, smoke/pets/dust exposures may suggest asthma"

> "Frequency — Determine whether cough episodes occur occasionally or frequently
> through the day and/or night"

> "Timing — Specific patterns (worsening or improving at certain times of the
> day) may suggest conditions such as GORD, post-nasal drip/sinusitis (worse
> when lying flat), asthma (tends to exacerbate at night, with exercise),
> somatic cough disorder (absent during sleep) or chronic suppurative lung
> disease (worse on waking)"

> "Type — … Paroxysmal: pertussis or foreign body … Barking or seal-like
> (+/- stridor): croup · Dry +/- wheeze: asthma"

> "**Red flags in chronic cough** — Shortness of breath (at rest or exertional)
> · Recurrent episodes of chronic or wet or productive cough · Recurrent
> pneumonia · Chest pain · Haemoptysis · Systemic symptoms (fever, weight loss,
> growth failure) · Neurodevelopmental abnormality · Feeding difficulties
> (including choking/vomiting) · Stridor and other respiratory noises · Abnormal
> clinical respiratory examination … Abnormal chest x-ray · Abnormal lung
> function · Co-existing chronic disease"

Note where that red-flag list sits: **it is the *chronic* cough list.** That is
the source fact behind decision 5, and it is why this packet's duration ruling
is the opposite shape to sore throat's.

Source 6's matching definition of interval symptoms:

> "Presence of interval symptoms (eg nocturnal cough, exercise induced wheeze,
> morning cough), school attendance, participation in physical activity"

### Source 6, verbatim — what the asthma guideline says is *not* reliable

> "The best measures of severity are general appearance, mental state, activity
> and work of breathing (respiratory rate, accessory muscle use, retraction)"
>
> "**Wheeze intensity, pulsus paradoxus and peak expiratory flow rate are not
> reliable.** A child that looks unwell with a silent chest (no wheeze) may
> herald imminent respiratory collapse"
>
> "Initial SpO2, heart rate and **ability to talk** are helpful but less
> reliable additional features"

The silent-chest sentence is the reason item 8 carries a polarity warning that
is not merely academic: for this complaint the *absence* of the child-audible
sign can be the emergency.

### Sources 8 and 9, verbatim — the barking cough and the choking episode

Source 8: *"Barking cough · Stridor · Hoarse voice or cry · May have associated
widespread wheeze · Increased work of breathing"*, and, under Background,
*"Often worse at night"*. Its severity table is built from Appearance/colour,
Behaviour, Stridor, Respiratory rate, Accessory muscle use — five rows, five
observations — prefaced by *"Loudness of stridor is not a good indicator of
severity of obstruction."*

Source 9, croup row: *"Rapid onset harsh barking cough · Hoarse voice/cry ·
Stridor"*. Inhaled foreign body row: *"Very sudden onset · Coughing, choking,
vomiting episode (may not be witnessed) · May have unilateral chest findings,
wheeze"*.

That parenthesis — *"may not be witnessed"* — is the whole argument for item 9.

### Sources 11–13 — what children have actually been asked, verbatim

**ISAAC Phase One, Module 1.1, 13–14-year-old (self-completed) form:**

> "1 Have you ever had wheezing or whistling in the chest at any time in the
> past? · 2 Have you had wheezing or whistling in the chest in the last 12
> months? · 3 How many attacks of wheezing have you had in the last 12 months?
> [None / 1 to 3 / 4 to 12 / More than 12] · 4 In the last 12 months, how often,
> on average, has your sleep been disturbed due to wheezing? [Never woken with
> wheezing / Less than one night per week / One or more nights per week] · 5 In
> the last 12 months, has wheezing ever been severe enough to limit your speech
> to only one or two words at a time between breaths? · 6 Have you ever had
> asthma? · 7 In the last 12 months, has your chest sounded wheezy during or
> after exercise? · 8 In the last 12 months, have you had a dry cough at night,
> apart from a cough associated with a cold or chest infection?"

**And the age-band protocol, which is the finding:**

> "Investigators are also encouraged to recruit the sample of 6-7 year olds,
> **whose parents will be asked to complete** the appropriate written
> questionnaires on wheezing, rhinitis and eczema."
>
> "Children will be identified through school class registers and their parents
> asked to complete the core questionnaires… **The video questionnaire will not
> be administered to this age group.**"

The 6–7-year-old form is the same eight questions rewritten in the third person
(*"Has your child ever had wheezing or whistling in the chest…"*). ISAAC ran in
1.9 million children and, for the age band that overlaps this app, **it did not
ask the child.** It also withheld from them the one instrument designed to get
round the words:

> "The video questionnaire was developed in response to translation problems
> with written questionnaires and **obviated the need to describe symptoms
> verbally**."

**C-ACT (source 12):**

> "The C-ACT is a seven-item questionnaire that was developed and validated to
> assess asthma control among children 4–11 years old. Four questions are
> answered by the child and three by the parent or caregiver."
>
> "One question asks, 'How is your asthma today.' The remaining 3 ask about
> **activity limitation, cough and nighttime awakenings** without a clear recall
> period."

And the cost of removing the parent, which is what this app does:

> "Internal consistency reliabilities of the C-ACT and C-ACTc were 0.76 and 0.67
> (Cronbach's α), respectively. Test–retest reliabilities of the C-ACT and
> C-ACTc were 0.72 and 0.66 (intra-class correlation), respectively." … "The
> psychometric properties of a shortened child-only version (C-ACTc), although
> acceptable, **are not as strong.**"

**Dalhousie (source 13):**

> "Because there are no child-friendly, validated, self-report measures of
> dyspnea or breathlessness, we developed… three, 7-item, pictorial scales
> depicting three sub-constructs of dyspnea: **throat closing, chest tightness,
> and effort.**"
>
> "The common themes chosen were throat closing, chest tightness, and effort
> **because these were the sub-constructs drawn and described in the focus
> groups**."
>
> "Children aged eight years or older rated the scales in the correct order 75%
> to 98% correctly, but **children less than 8 years of age performed
> unreliably**."

Those three sub-constructs came out of children's own drawings, not a
clinician's vocabulary — which is why "effort" (item 1) and "chest tightness"
(item 15) are the two dyspnea words this packet trusts, and why "throat closing"
is noted here but belongs to the `throat` group.

**Underperception (source 14):**

> "Child participants accurately perceived their respiratory compromise about
> 66% of the time, underperceived their respiratory compromise about 25% of the
> time, and overperceived their respiratory compromise about 10% of the time."

Measured against their own peak flow, blinded, in 296 children with a mean age
of **12.77** — the very top of this app's range. One child in four, at the age
best able to report, was worse than they said. Read alongside source 6's silent
chest, this is the packet's governing caution: **every "no" collected here is
softer than every "yes".**

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Is it hard to breathe** | BIOTOPE (2) — *"difficulty breathing"* as a model variable; WHO IMCI (3) — the module is titled *"cough or difficult breathing"*; RCH Cough (4) — *"Shortness of breath (at rest or exertional)"*, first chronic red flag; NHSGGC (10) — *"Dyspnoea…"* across three severity bands; Dalhousie (13) — *"effort"*, a sub-construct children themselves drew; PERUKI (1) — *"Dyspnea"*, 5/17 scores | **yes** | **The flagship item and the app's shipped question.** Ships as `id: 'breathing'` so it *replaces* the hand-written one rather than doubling it (decision 11). It is the only one of source 1's fifteen score parameters a child can answer, and the only variable common to Search A, Search B and the child-report instruments. Presence only — never graded, see item 20. |
| 2  | **Is it hard to run around and play** | C-ACT (12) — *"activity limitation"*, one of the four child-answered items, validated 4–11; ISAAC Q7 (11) — *"has your chest sounded wheezy during or after exercise?"*; RCH Asthma (6) — *"exercise induced wheeze"*, *"school attendance, participation in physical activity"*; RCH Cough (4) — *"Shortness of breath (at rest or **exertional**)"*, *"Association with exercise… may suggest asthma"*; RCH Asthma (6) — *"activity"* among the best measures of severity | **yes** | **The best-evidenced child-report item in the packet** and the app's second shipped question, re-sourced as `id: 'chest-worse-move'`. Source 12 is direct evidence a 4-year-old answers this about themselves. Note that it does two jobs at once — acute severity *and* the chronic interval symptom — which is why it survives every duration band (decision 5). Wording keeps the shipped "run around". |
| 3  | **Do you have to stop for a breath when you talk** | NHSGGC (10) — *"Able to talk normally"* / *"Dyspnoea resulting in limitation of full sentences"* / *"<3 word sentences"* / *"Unable to talk due to dyspnoea"*; RCH Severity (5) — *"Able to vocalise normally"* → *"Marked limitation of ability to vocalise, single words"*; RCH Asthma (6) — *"ability to talk"*; ISAAC Q5 (11) — *"limit your speech to only one or two words at a time between breaths"* | **yes** | A nearly-reportable criterion **split, not reclassified**. The *grading* — full sentences vs three words vs none — is a listener's count and stays excluded at item 19; ISAAC nonetheless put the same fact to children in the first person, which is why the child's half is real. **Distinct from the throat packet's item 5**, which is about the voice sounding different; this is about the breath running out. Both must be distinguishable on the nurse's screen (decision 10). |
| 4  | **Have you been coughing** | WHO IMCI (3); RCH Cough (4) throughout; RCH Pneumonia (7) — *"Cough"* under History; BIOTOPE (2) — *"chesty cough"*; C-ACT (12) — *"cough"*, a child-answered item; PERUKI (1) — absent from all 17 scores | **yes** | **Not vacuous here, unlike sore throat's equivalent.** The app has no complaint field: a child taps Chest and "inside", and whether they have a cough at all is genuinely unknown. Ranked fourth rather than first because presence of cough is the least discriminating fact in this literature — source 4: *"Young children develop 6-12 respiratory tract infections per year, usually accompanied by cough"* — while items 2, 5 and 3 say something about *this* cough. |
| 5  | **Does coughing wake you up at night** | ISAAC Q8 (11) — *"have you had a dry cough at night, apart from a cough associated with a cold or chest infection?"*; ISAAC Q4 (11) — *"has your sleep been disturbed due to wheezing?"*; C-ACT (12) — *"nighttime awakenings"*, a child-answered item; RCH Asthma (6) — *"nocturnal cough"* as an interval symptom; RCH Cough (4) — *"frequently through the day and/or night"*, *"asthma (tends to exacerbate at night…)"*; RCH Croup (8) — *"Often worse at night"*; NHSGGC (10) — *"interval symptoms on wheeze proforma"* | **yes** | **Six independent sources and two child-report instruments — the best-sourced item in the packet.** ISAAC's exclusion clause (*"apart from a cough associated with a cold"*) is a clinician's differential and is **not** carried: a child cannot subtract a cold from their cough, and asking them to would be item 26. Presence only. Gains rather than loses relevance at `long-time` (decision 5). |
| 6  | **Have you used your inhaler today** | RCH Asthma (6) — *"Treatments used during this illness (reliever dose, frequency and ongoing effectiveness)"*, *"Using SABA more than twice/week or >3 MDI canisters per year"*; NHSGGC (10) — *"Tolerating 3hrly multidosing"* as a discharge criterion; C-ACT/ACQ-6 (12) — *"short-acting bronchodilator use"* | **partial** | The child knows whether they have had it; **dose, frequency and whether it worked are the carer's and the record's**, and those are the parts the guideline actually scores. Kept because reliever use in the last few hours is among the most decision-relevant facts in an acute wheeze presentation and no other app surface collects it. **Not redundant with `HELPS.my-medicine`**, which records what the child *wants* — the same distinction the sore-throat packet drew for `HELPS.water`. Register: "inhaler", not "puffer" (decision 1). |
| 7  | **Have you been able to eat and drink** | RCH Severity (5) — *"it is important to assess feeding and hydration as these may be affected early in respiratory illness"*; RCH Cough (4) — *"Feeding difficulties (including choking/vomiting)"* among chronic red flags; RCH Cough (4) — *"Choking or coughing with feeding may suggest aspiration"* | **yes** | The one plain history item in source 5, whose entire severity table is otherwise observation. Source 5 frames it as an **early** sign, which is exactly what a self-report app is positioned to catch. Overlaps the sore-throat packet's item 6 in fact but not in group; a child who taps only Chest will not receive the throat version. |
| 8  | **Can you hear a whistle when you breathe** | ISAAC Q1/Q2 (11) — *"wheezing or whistling in the chest"*; PERUKI (1) — *"Audible without stethoscope"*, 7/17 scores; STARWAVe and BIOTOPE (2) — *"wheeze"* in both models; RCH Croup (8), RCH AUAO (9), RCH Cough (4) | **partial** | **The most heavily cited criterion in the entire respiratory literature and the one this packet trusts least.** Auscultated wheeze is item 17 and stays excluded. The child's half exists — ISAAC pairs *"wheezing or whistling"* precisely because "wheeze" is not a lay word — but **no source read supports a child under 13 reporting it about themselves**: ISAAC used parent report at 6–7 and withheld the video questionnaire from that band, and its stated reason for building the video at all was to obviate *"the need to describe symptoms verbally"*. Ranked eighth for that reason, and see the polarity warning in "Wording cautions": source 6's silent chest makes a "no" here potentially the worst answer in the packet. |
| 9  | **Did something go down the wrong way** | RCH AUAO (9) — inhaled foreign body: *"Very sudden onset · Coughing, choking, vomiting episode (may not be witnessed)"*; RCH Cough (4) — *"Sudden onset without viral prodrome (or after choking episode) may suggest foreign body inhalation"*, and foreign body listed under **both** acute and chronic dry cough | **yes** | Only the child knows, and source 9 says so in a parenthesis. **Third instance of this fact across three packets** (tummy `t-018`, sore-throat item 12, here) and the first where it is a *respiratory* criterion rather than a swallowed one — see decision 10. Survives `long-time` because source 4 lists foreign body under chronic cough as well as acute. **Never name a coin, a battery, a toy or a peanut**; naming it prompts the answer. |
| 10 | **Does your cough sound like a dog barking** | RCH Croup (8) — *"Barking cough"*; RCH AUAO (9) — croup: *"Rapid onset harsh barking cough"*; RCH Cough (4) — *"Barking or seal-like (+/- stridor): croup"* | **partial** | The one cough *quality* term all three sources agree on and state without a stethoscope. Marked partial because it is still a characterisation of a sound: the child hears their own cough, but "barking" is the clinician's simile, and RCH pairs it with *"+/- stridor"*, which is item 18 and never the child's. Kept because croup is nocturnal, the child is often the only one awake, and the phrase is concrete enough for a 5-year-old. **Name one animal, not two** — offering "dog or seal" turns the question into a menu. Flagged for review. |
| 11 | **Does anything come up when you cough** | RCH Cough (4) — *"Quality — Wet or dry"*, the first row of its History table, and the wet/dry axis organises its entire differential; BIOTOPE (2) — *"chesty cough"*; RCH Cough (4) — *"Recurrent episodes of chronic or wet or productive cough"* as a red flag | **partial** | Wet-versus-dry is the *first* thing source 4 asks and it decides which half of the causes table applies — but source 4 also links clinicians to a recording to learn the sound (*"listen to sound of wet cough here"*), which is the giveaway that the classification is trained. A child can report that something comes up; they cannot classify the cough. **Do not ask about colour, amount or blood** — that is item 24. |
| 12 | **Is it worse when you lie down** | RCH Cough (4) — *"Timing — Specific patterns… may suggest conditions such as GORD, post-nasal drip/sinusitis (**worse when lying flat**), asthma… or chronic suppurative lung disease (worse on waking)"* | **yes** — not proposed for v1 | Plainly child-reportable and genuinely in the guideline, but **single-source, and the conditions it discriminates (reflux, post-nasal drip) are the least urgent in the whole differential.** Kept so its absence is a decision rather than an oversight; first item to drop after item 13. Overlaps the `back` group's `back-worse-sit` in shape only. |
| 13 | **Have you thrown up** | STARWAVe (2) — *"moderate to severe vomiting (within 24 hours of presenting)"*, a scored predictor; RCH AUAO (9) — foreign body: *"Coughing, choking, vomiting episode"*; RCH Cough (4) — *"Feeding difficulties (including choking/vomiting)"* | **yes** — not proposed for v1 | A real scored variable, from the only prediction rule in source 2's whole review. Dropped from v1 anyway because it duplicates tummy's `t-003` in fact and a child who is vomiting taps Tummy. **Its severity grading is not carried**: "moderate to severe" is the assessor's, presence is the child's. Loses `long-time` (decision 5). |
| 14 | **Do you feel hot or shivery** | STARWAVe (2) — *"body temperature (>37.8 degrees celcius or parent-reported severe fever within 24 hours)"*; RCH Pneumonia (7) — *"Fever"*, first History bullet, and *"pneumonia can be defined clinically as the presence of fever, cough and tachypnoea at rest"*; RCH Cough (4); RCH Croup (8) | **partial** | Same ruling as sore-throat item 13, reached independently: child reports the sensation, nurse measures and classifies. Ranked last because the nurse takes a temperature regardless and because STARWAVe's own threshold is stated two incompatible ways in one parenthesis — a number *or* a parent's judgement. Loses `long-time`. |
| 15 | Chest tightness | Dalhousie (13) — *"chest tightness"*, one of three sub-constructs *"drawn and described in the focus groups"*; C-ACT/ACQ-6 (12) — *"breathlessness, wheezing"* | **yes** — **already collected** | **Rejected as a duplicate, and it hurts.** `SENSATIONS.squeezing` ships as "Squeezing / Tight squeeze", tier young **and** older, depth `inside` — so a child who taps Chest and "inside" is *already* offered this word before any follow-up fires. Asking it again as a yes/no would be the app disagreeing with itself. Recorded because it is one of only three dyspnea constructs children generated unprompted, and it must not be re-invented by a later run. |
| 16 | Duration; time since onset; how long the cough has lasted | WHO IMCI (3) — *"For how long?"*, the **only** question in the module, and *"If coughing for more than 14 days… refer"*; RCH Cough (4) — *"Acute cough: lasting up to 2 weeks · Protracted acute: 2-4 weeks · Chronic: >4 weeks"*; STARWAVe (2) — *"illness duration (<4 days)"* | **yes** — already collected | `DURATIONS`. The bands cannot resolve STARWAVe's 4-day cut or IMCI's 14-day cut; `few-days` straddles the first and `long-time` swallows both of RCH's chronic boundaries. See "Still open". |
| 17 | Age | STARWAVe (2) — *"age (<2 years)"*; BIOTOPE (2) — *"age"*; RCH Croup (8) — *"Occurs generally between the ages of 6 months and 6 years"* | **n/a** — already collected | Setup screen. |
| 18 | Where it hurts; how much it hurts | all guidelines; RCH Cough (4) — *"Chest pain"* as a chronic red flag; RCH Asthma (6) — *"chest pain"* among red flags for alternative diagnoses | **yes** — already collected | Body map plus FPS-R. Chest pain as a *presenting complaint* is a different packet; here it is a red flag that the app already captures by the child tapping Chest and rating it. |
| 19 | Ability to vocalise, as graded by the listener; number of words per breath; "able to talk normally" | RCH Severity (5); NHSGGC (10); RCH Asthma (6) | **no — observer** | Not item 3. This is a *count* made by someone listening, and the four bands it feeds are a severity classification. **Asking a child to demonstrate it is worse than not asking** — see "Wording cautions". |
| 20 | Graded severity of breathlessness | Dalhousie (13) — the three 7-item pictorial scales; PERUKI (1) — *"Dyspnea"* as a scored 0–3 item in 5 of 17 scores | **no — capability floor under 8, and banned above it** | The split that keeps item 1 honest. Source 13 is the only source that *tested* this and found children under 8 rate it unreliably; above 8 the app bans rating anything in words regardless. Item 1 asks presence and does not grade. Recorded so a later run does not "improve" item 1 by adding a scale. |
| 21 | Respiratory rate; tachypnoea; counting the breaths in one minute; "tachypnoea at rest"; slow breathing; apnoea; bradypnoea | PERUKI (1) — 10/17 scores; STARWAVe/BIOTOPE (2); WHO IMCI (3) — *"Count the breaths in one minute"*; RCH Severity (5); RCH Pneumonia (7); RCH Croup (8); NHSGGC (10) | **no — observer / measurement** | The second most used parameter in the literature and the first thing IMCI does. Never ask a child to count their own breaths; a number from a child reads to a nurse as a measurement. |
| 22 | Work of breathing: chest indrawing; intercostal, subcostal, substernal, suprasternal, supraclavicular and scalene recession; sternocleidomastoid retraction; tracheal tug; nasal flaring; head bobbing; forward posturing; grunting; abdominal breathing; paradoxical chest movement; sniffing or tripod position; poor respiratory effort | PERUKI (1) — the single most used parameter, 9/17 plus five anatomical variants; STARWAVe and BIOTOPE (2) — *"inter-/sub-costal recession"* in **both** models; WHO IMCI (3) — *"Look for chest indrawing"*; RCH Severity (5); RCH Pneumonia (7); RCH Croup (8); RCH AUAO (9); NHSGGC (10) | **no — observer / exam** | **The backbone, and the most cited thing in this packet.** Source 5 is explicit that it is seen rather than felt (*"Parents can be asked to uncover the child's chest/abdomen"*) — which makes it *nearly* something a carer could report and still not something a child can. A child cannot see their own chest wall pulling in, and asking them to look would produce an answer a nurse would read as a sign. |
| 23 | Auscultation: inspiratory and expiratory wheeze; air entry / aeration / breath sounds; silent chest; reduced air entry; asymmetry; crackles, crepitations, bronchial breathing; dull percussion note; inhalation-exhalation ratio; prolonged expiratory phase; stridor; stertor; wheeze intensity | PERUKI (1) — expiratory wheeze 15/17, inspiratory 13/17, aeration 8/17, I:E ratio 6/17; WHO IMCI (3) — *"Look and listen for stridor. Look and listen for wheezing."*; RCH Asthma (6), Cough (4), Pneumonia (7), Croup (8), AUAO (9), Severity (5) | **no — exam** | **The other backbone, and it requires a stethoscope or a trained ear.** Item 8 is the child's-eye half of wheeze only; nothing here is a reclassification of it. Note source 6's *"Wheeze intensity… [is] not reliable"* and source 8's *"Loudness of stridor is not a good indicator of severity"* — even the clinicians who can hear it are told not to grade it. |
| 24 | Oxygen saturation; SpO2 thresholds (<90%, <92%, <94%); any oxygen requirement; hypoxia; cyanosis; pallor; colour; mottling | PERUKI (1) — 5/17; RCH Severity (5); RCH Pneumonia (7); RCH Croup (8); RCH AUAO (9); NHSGGC (10); WHO IMCI (3) — *"If pulse oximeter is available, determine oxygen saturation and refer if < 90%"* | **no — instrument / observer** | Five different SpO2 thresholds across five sources, and source 5's own warning that *"Oxygen saturations may be misleading"* and *"Do not just focus on the SaO2 monitor"*. Not a threshold disagreement the app can capture as a raw fact, because there is no raw fact a child holds. |
| 25 | Heart rate; tachycardia; bradycardia; arrhythmia; blood pressure; PEWS score; pulsus paradoxus; peak expiratory flow rate; PEF % of best or predicted; spirometry; abnormal lung function | PERUKI (1) — heart rate 3/17; RCH Severity (5); RCH Asthma (6); NHSGGC (10) — *"PEF > 50% of best or predicted"*; RCH Cough (4) | **no — measurement** | Source 5 adds *"Blood pressure (Do not measure in croup)"* and source 6 that PEFR *"[is] not reliable"*. Never ask a child to blow into anything. |
| 26 | Mental state; behaviour; alertness; cerebral function; irritability, lethargy, agitation, drowsiness, confusion; "appears lethargic/unwell"; general appearance; general danger signs | PERUKI (1) — 2/17; RCH Severity (5); RCH Asthma (6); RCH Pneumonia (7); RCH Croup (8); RCH AUAO (9); NHSGGC (10); WHO IMCI (3) | **no — observer** | Every one is a comparison against what the observer expects of a well child, which the brief rules out by name. `MOODS` collects how the child *feels*; it is not and must never be presented as a mental-state assessment. |
| 27 | Cough characteristics the child cannot classify: paroxysmal; staccato; honking; *"distractible, suggestible"*; *"absent during sleep"*; *"worse on waking"*; sputum colour, consistency and volume; haemoptysis | RCH Cough (4) | **no — observer / carer** | *"Distractible, suggestible"* is a somatic-cough-disorder finding established by a clinician **watching whether the cough stops when the child is distracted** — a child asked whether their cough is suggestible has been asked to diagnose themselves. Absence during sleep is by definition unobservable to the sleeper. Haemoptysis is carried nowhere: see "Wording cautions". |
| 28 | Prior course and care level: 2+ hospital presentations for asthma; previous IV therapy; previous PICU admission or intubation; 3+ ED presentations with wheeze in 1 year; 3+ steroid courses in 1 year; >3 MDI canisters per year; history of previous severe croup; recurrent pneumonia; >3 PBB episodes in 12 months | RCH Asthma (6); NHSGGC (10); RCH Croup (8); RCH Cough (4) | **partial** — already collected | The reserved `happened-before` question gets the *fact* of recurrence. It cannot get the **count**, and every threshold here is a count; nor the **care level**, and "were you in intensive care?" is not a question to put to a child. Same conclusion as sore-throat item 32, reached from a different guideline. |
| 29 | Preventer treatment, technique and adherence; asthma diagnosis; *"current asthma"*; comorbidities (allergic rhinitis, anaphylaxis, atopy); neurodevelopmental disorders, dysphagia, neuromuscular disease, immunodeficiency, congenital cardiac disease; pre-existing airway narrowing; reduced airway tone (trisomy 21); immunisation status; family history of chronic lung disease, CF, TB; infectious contacts; travel history; exposure to smoking or vaping | STARWAVe (2) — *"current asthma"*, a scored predictor; RCH Asthma (6); RCH Cough (4); RCH Croup (8) | **no — carer or record** | *"Current asthma"* is the highest-weighted variable in the only prediction rule source 2 could find, and it is a diagnosis in a chart. Item 6 reaches the one adjacent fact a child owns — whether they used their inhaler — without asking them to name a condition. Smoking and vaping exposure is a household fact and asking a child about their family's smoking in a hospital app is out of scope by judgement, not by citation. |
| 30 | Positive malarial rapid diagnostic test; chest X-ray; blood tests; blood gases; FBE; CRP and procalcitonin; blood culture; influenza and COVID PCR; sweat test; serum immunoglobulins; bronchoscopy | BIOTOPE (2); RCH Pneumonia (7); RCH Cough (4) | **no — lab / imaging** | Source 7's *"Acute phase reactants (including CRP and procalcitonin) cannot distinguish between a viral or bacterial cause nor indicate severity"* is recorded only so a future run does not go looking for a proxy — the same note the sore-throat packet made about CRP for a different complaint. |
| 31 | Clubbing; faltering growth / growth failure; chest wall deformity; signs of cardiac failure (oedema, hepatomegaly, murmur); ENT examination for rhinosinusitis; unilateral chest findings; swelling of face and tongue; urticarial rash; allergen exposure; haemodynamic compromise | RCH Cough (4); RCH AUAO (9) | **no — exam** | The anaphylaxis row of source 9 is listed here rather than acted on: it is a different presenting complaint with its own emergency pathway, and a child mid-anaphylaxis is not filling in an app. |
| 32 | Season; month of presentation; local malaria risk | WHO IMCI (3) — malaria risk stratification throughout | **no — not a question** | The system knows the date; the setting knows its epidemiology. Recorded so it is visibly a decision. |
| 33 | Throat closing | Dalhousie (13) — the third sub-construct *"drawn and described"* by children | **yes — belongs to another group** | Genuinely child-generated, genuinely reportable, and **not this packet's**. A child who feels their throat closing should be tapping Throat, where the sore-throat packet's items 1, 2 and 8 are waiting. Recorded so it is not silently lost between two packets, which is exactly how a criterion disappears. |

**Yield: ~85 distinct criteria across 17 asthma severity scores, 2 clinical
prediction rules, 8 guidelines and 3 child self-report instruments → 9 clean
(2 of which are not proposed for v1), 5 partial, ~60 excluded, ~11 already
collected elsewhere in the app.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
(30%); sore throat ~53 → 12 (23%); **difficulty breathing or cough ~85 → 9
(11%)**. Less than half the rate of any previous packet, from nearly twice the
criteria. The reason is one sentence long and it is in source 5: *"The
assessment of severity can mostly be made without touching the child."* This is
the one complaint in the set where the clinician does not need the child to say
anything — and correspondingly, the one where what the child says adds least.

## Where the two searches diverged, and which one won

Search A (comparison and validation studies) produced sources 1 and 2 and was
worth running: it enumerated 17 asthma severity scores and established, before
any guideline was read, that **1 of their 15 shared parameters is a symptom**.
Recall would have produced PRAM and possibly PIS and stopped at two.

But Search A produced **almost no items.** Trace them: of the fourteen items in
the table, only 4 (cough), 8 (wheeze/whistle), 13 (vomiting), 14 (fever) and
16 (duration) appear in any score or rule at all, and three of those five are
ranked in the bottom four. **Every item in the top three is Search B's alone**,
and two of the three come from the child self-report instruments (sources 11–13)
rather than from any clinical source.

This is a different divergence from the previous two packets, and worth naming
precisely:

- **Tummy:** the rules answered a question about 8% of arrivals; the guideline
  covered the other 92%. A *prevalence* gap.
- **Sore throat:** the scores answered "does this child need an antibiotic?";
  the guidelines answered "is this child's airway in trouble?". A *purpose* gap.
- **Here:** the scores and the guidelines answer the *same* question, agree with
  each other almost completely, and **both answer it by looking at the child.**
  Not a prevalence gap and not a purpose gap — a *modality* gap. Search A and
  Search B converged, and converged on the wrong side of the self-report filter.

Which is why this packet needed a third search that the brief does not name. See
"Where the brief does not generalise", below.

## The third search: instruments built to be answered by children

Sources 11, 12 and 13 are not guidelines and not prediction rules. They are
measurement instruments whose entire design problem was *getting a symptom out
of a child* — and they are where items 2, 5 and 8 come from, along with the
capability evidence for item 1 and the floor on item 20.

They also supply the packet's three sharpest cautions, and all three point the
same way:

1. **ISAAC did not ask 6–7 year olds.** It asked their parents, and withheld
   from them the instrument built to bypass verbal description. The largest
   childhood wheeze survey ever run made the opposite call to this app for
   half its age range.
2. **C-ACT loses measurable quality when the parent is removed** — α 0.76→0.67,
   ICC 0.72→0.66, correlation with ACQ −0.56→−0.46. Not a collapse; a
   degradation, and one the authors themselves say leaves properties that are
   *"although acceptable… not as strong"*. This app is permanently in the
   child-only condition.
3. **A quarter of children underperceive their own airflow.** Source 14
   measured it against a blinded peak-flow device in children whose mean age was
   12.77 — the most capable end of the range.

None of these is a reason not to ship the packet. All three are reasons the
packet's output must reach a nurse as *what the child said*, never as an
assessment, and that a "no" must never close a question. That constraint is
stronger for this complaint than for any previous one, because source 6 supplies
the mechanism by which a reassuring answer is lethal: *"A child that looks
unwell with a silent chest (no wheeze) may herald imminent respiratory
collapse."*

## Wording cautions

Ban **concepts**, not phrasings.

- **Never ask a child to do anything with their breath.** No "take a deep breath
  and tell me if it hurts", no "count how many words you can say", no "blow into
  this", no "hold your breath". This packet is the first where **asking has a
  physiological cost**: source 5 opens with *"children with respiratory distress
  should have minimal handling"* and source 8 with *"Minimise distress to the
  child, as this can worsen upper airway obstruction"*. A question that makes a
  frightened child perform a breathing task can make them worse. This is a
  harder rule than "don't ask a child to examine themselves" and it is specific
  to this group.
- **Never ask a child to count their own breaths or their own heart rate**, and
  never accept a number. Item 21 is the second most used parameter in the
  literature and a child's estimate of it would reach a nurse looking like a
  measurement.
- **Never ask a child to look at, feel, or uncover their own chest.** That is
  item 22 — recession and accessory muscle use — delegated to a seven-year-old.
  The `surface` questions ask about spots on the skin; nothing in this packet
  may instruct an examination.
- **Never present a "no" as reassurance, and never invert item 8.** The scores
  treat wheeze as a positive finding, so an app that phrased the question as
  "you can't hear a whistle, can you?" would be leading, tag-questioned **and**
  pointed at the one answer source 6 says can precede collapse. Neutral
  presence-form only, and nothing downstream may treat a negative as a
  reassuring finding.
- **Never say "asthma", "pneumonia", "croup", "whooping cough", "bronchiolitis",
  "chest infection", "TB", "attack" or "flare-up".** Naming a condition to a
  child is banned app-wide; "attack" additionally frightens, and ISAAC's *"How
  many attacks of wheezing"* is the wording this packet declines to copy.
- **Never say "wheeze", "wheezy", "stridor", "recession", "work of breathing",
  "sats", "oxygen", "breathless", "short of breath", "shortness of breath",
  "dyspnoea", "respiratory".** Clinical register. Say "whistle", "hard to
  breathe".
- **Never name the object in item 9.** Not a coin, a battery, a toy, a peanut or
  a bone. Same ruling as the tummy and sore-throat packets, for the same reason:
  naming it prompts the answer and can frighten a child into denying it.
- **Never ask about blood.** Haemoptysis is a real red flag in source 4 and it
  is item 27. "Is there blood when you cough?" put to a frightened child is a
  question about whether they are dying, and the answer would be worthless.
- **Never ask a child to rate or grade breathlessness**, in words, in faces, or
  in pictures. Item 20; source 13's floor; banned globally regardless.
- **Never mention a temperature, a number of degrees, or the word "fever".**
- **Never offer two similes at once.** Item 10 says "like a dog barking"; adding
  "or a seal" makes it a menu and a child picks the one they can picture.
- **Avoid "still"** — banned universally by `screen.mjs`, and noted because
  "can you still breathe okay?" is a phrasing this complaint invites.
- Avoid "serious", "dangerous", "bad", "severe" — already banned.

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with the tummy and sore-throat packets.**
   The new vocabulary domain is breathing, so it is ruled before anything is
   generated:
   - **"inhaler"** — not "puffer" (Australian/British, and the word both RCH and
     NHSGGC use), not "MDI", not "reliever", not a brand name. The app's US
     register is already fixed by the tummy packet's "poop"/"pee" ruling.
   - **"whistle"** / **"a whistling sound"** — not "wheeze", not "wheezy", not
     "noisy breathing". ISAAC itself writes *"wheezing or whistling"*, so this
     is the source's own lay gloss rather than an invention.
   - **"hard to breathe"** — the exact phrase the app already ships. Not "out of
     breath", not "puffed", not "can't catch your breath".
   - **"run around"** — the exact phrase the app already ships in
     `chest-worse-move`.
   - **"your chest"** — matches the body-map region label "Chest". Never "lungs",
     "airway", "windpipe", "tubes": naming a structure the child cannot see
     invites them to go and look for it.
   - **"cough"**, **"throw up"** — carried unchanged from the throat and tummy
     packets; same vocabulary domain, nothing gained by a second ruling.
2. **Answer types: all yes/no.** `FollowUpScreen` renders yes/no only. **Corrected 2026-09-08:** this sentence was wrong. `FollowUpScreen` renders `yesno`, `count`, `text` AND `voice` (`src/screens/FollowUpScreen.jsx` lines 133-145). The packet's exclusions below were reasoned from a false premise and any that turned on it should be revisited. All nine
   clean and all five partial items are yes/no. Nothing here needs a widget the
   app does not have — but note that this is partly *because* the good
   respiratory questions (how many attacks, how many nights a week, how many
   words per breath) were all excluded on other grounds first.
3. **Item 3 asks about the breath, not about the voice.** "Do you have to stop
   for a breath when you talk?" — never "can you talk normally?", which is
   source 10's clinician-facing band and asks the child to compare themselves to
   a norm; and never anything about how the voice *sounds*, which is the
   sore-throat packet's item 5 and a different fact from a different group.
4. **Item 5 does not carry ISAAC's exclusion clause.** ISAAC asks about a night
   cough *"apart from a cough associated with a cold or chest infection"*. That
   subtraction is a clinician's differential; a child cannot perform it, and a
   question containing it would be answered on its second half. The app collects
   the raw fact — coughing at night — and the nurse subtracts the cold. Same
   principle as the head-injury threshold ruling: capture the fact, let the
   clinician classify.
5. **Duration scope, and it inverts the sore-throat packet on purpose.** The
   sources:

   | Source | Window |
   |--------|--------|
   | STARWAVe (2) | *"illness duration (<4 days)"* as a predictor of hospitalisation |
   | WHO IMCI (3) | *"If coughing for more than 14 days or recurrent wheeze, refer for possible TB or asthma assessment"* |
   | RCH Cough (4) | *"Acute cough: lasting up to 2 weeks · Protracted acute cough: 2-4 weeks · Chronic cough: >4 weeks"* |
   | RCH Cough (4) | *"most resolve without treatment in 1-3 weeks"*; *"persistent daily cough lasting >4 weeks should be assessed and investigated"* |
   | ISAAC (11), C-ACT (12) | 12-month and undefined recall periods — these instruments have **no** acute window at all |
   | NHSGGC (10) | *"3 or more ED presentations with wheeze in 1 year"* |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
   - `not-sure` — **full packet.** Same convention as all three previous packets.
   - `long-time` — **full packet except items 10, 13 and 14** (barking cough,
     throwing up, feeling hot).

   **`long-time` is the default here, and that is the finding.** Sore throat cut
   its score-derived items at `long-time` because they expire. Cough does the
   opposite: source 4's red-flag list is *explicitly titled* **"Red flags in
   chronic cough"**, IMCI's referral trigger *begins* at 14 days, and RCH says a
   cough past four weeks *"should be assessed and investigated with a CXR and
   spirometry"*. A cough that has lasted a month is a **more** serious
   presentation than one that started this morning, not a stale one. The three
   exceptions are the genuinely acute-onset facts: croup is a days-long illness,
   STARWAVe's vomiting window is 24 hours, and a fever a month ago is not a
   fever.
6. **Item priority, and one question per item.** Fourteen items compete for three
   bank slots (`followUpsForGroups` returns `out.slice(0, 3)` plus the reserved
   `happened-before`). Never ask two questions from the same item. Order:

   `1 (hard to breathe) → 2 (run around) → 3 (stop for a breath when talking) →`
   `4 (coughing) → 5 (cough at night) → 6 (inhaler today) →`
   `7 (eating and drinking) → 8 (whistle) → 9 (went down the wrong way) →`
   `10 (barking cough) → 11 (anything comes up) → 12 (worse lying down) →`
   `13 (thrown up) → 14 (feeling hot)`

   Item 1 leads because it is the complaint, is already shipped, and is the only
   symptom among source 1's fifteen parameters. **Item 2 is second, ahead of
   "have you been coughing"**, on three grounds: it is the only item with direct
   4–11 self-report validation (source 12), it measures severity *now* and
   chronic control *over time* simultaneously, and it is a shipped question.
   Item 4 is fourth despite being half the packet's title, because presence of
   cough is the least discriminating fact in the literature — source 4 puts
   6–12 respiratory infections a year into a normal childhood. Item 8 ranks
   eighth despite being the most-cited criterion in the whole packet, for the
   reasons in its Note; **being well-cited is not the same as being answerable**,
   which is the same conclusion the sore-throat packet reached about its item 3
   by a different route. Items 12 and 13 are **not proposed for generation in
   v1.** *Proposed, not yet confirmed by review.*
7. **Age floors: none on any item, and the reasoning differs from sore throat's.**
   Sore throat had no floors because no source gave one. Here a source *does*
   give one — Dalhousie's *"children less than 8 years of age performed
   unreliably"* — and it still floors nothing, because it attaches to **rating
   breathlessness on a graded pictorial scale**, which is item 20 and is
   excluded twice over. Applying it to item 1 would floor a yes/no question with
   evidence about a 0–10 scale: an invented citation of exactly the kind the
   brief describes. Against it stands source 12's direct evidence that children
   **4–11** answer about activity limitation, cough and night waking, which are
   items 2, 4 and 5.

   **The one place a floor might belong is item 8, and it is deliberately left
   unfloored.** ISAAC's parent-report choice at 6–7 is the strongest
   floor-shaped evidence in the packet — but ISAAC's constraint was a
   *self-completed written survey in 100+ languages*, not a spoken question with
   an icon, and its own remedy (the video questionnaire) was withheld from that
   band for administrative reasons rather than because children failed it. A
   floor derived from that would be an inference, not a citation. Item 8 is
   marked **partial**, ranked eighth, and flagged in "Still open" instead.
   `minAge` is empty and `minAgeNotes` is absent — unlike the tummy packet,
   nothing here is judgement dressed as citation.
8. **`depth: "inside"`, and here it is load-bearing.** `GROUP_DEPTH.chest` is
   `'ask'`, no chest follow-up sets `resolvesDepth`, so the depth screen fires
   for this group and `depths['chest']` holds a real `'surface'` / `'inside'` /
   `'unknown'`. `bankQuestions` filters
   `!q.applies.depth || depth == null || depth === 'unknown' || depth === q.applies.depth`,
   so these items fire on `inside` and on `unknown`, and are correctly
   suppressed on `surface`. That is the intended behaviour and the reason this
   sidecar carries `"inside"` where the sore-throat sidecar honestly carries
   `null`.
9. **The two shipped `surface` questions are out of scope, are not deleted, and
   are nonetheless at risk on one path — say so rather than let it surprise
   someone.** `chest-rash` ("Are there spots or a rash?") and `chest-press`
   ("Does it hurt when you press on it?") live on the `surface` branch. This
   packet is `inside`, so:
   - For a child who answers **`surface`**: my items are filtered out, both
     hand-written questions fire unchanged. No effect.
   - For a child who answers **`inside`**: `questionsFor('chest','inside')`
     never returns them. No effect.
   - For a child who answers **`unknown`** or is not asked:
     `questionsFor('chest','unknown')` returns the union — `breathing`,
     `chest-worse-move`, `chest-rash`, `chest-press` — but the first two are
     deduped by id against my bank items (decision 11) and the remaining two are
     appended *after* three sourced questions and then cut by `out.slice(0, 3)`.
     **On the unknown path they stop being asked.**

   This packet does not remove them and must not be read as replacing them.
   `chest-press` in particular is an instruction to palpate and would fail this
   packet's own wording cautions if it were proposed today — but that is a
   judgement for a chest-`surface` packet to make with sources, not for this one
   to make by attrition. Raised in "Still open".
10. **Three routes to "is it hard to breathe", resolved.** The fact is reached
    from three groups: tummy (ships today as `t-017a`, *"Is it hard to
    breathe?"*, group `tummy`, depth `inside`, cited to RCH/SPASMS/Almalki),
    throat (sore-throat packet item 8, not yet built into the bank), and chest
    (the hand-written `breathing`, and this packet's item 1). The mechanism is
    `followUpsForGroups`, which dedupes on question **id** across groups, not on
    the fact.

    **Ruling: `breathing` is the canonical id for this fact, and the `chest`
    packet owns it.** Chest owns it because for chest it *is* the presenting
    complaint; tummy and throat reach it as an extra-abdominal cause and an
    airway red flag respectively. Consequences, in order of what this run can do:

    - **This packet ships item 1 as `id: 'breathing'`** — the id the app already
      uses. This is not cosmetic: it makes `seen.has('breathing')` true before
      `questionsFor` runs, so the hand-written question is deduped away *by the
      existing code* and replaced by a sourced, cited version. No code change,
      no silent loss, and one fewer route immediately.
    - **`t-017a` and sore-throat item 8 should be re-keyed to `breathing`.**
      Three bank rows may share one id because `bankQuestions` filters by group
      first and `followUpsForGroups`' `seen` set collapses them across groups.
      **This run may write only two files, so that is a recorded instruction,
      not an applied change** — until it happens, a child who taps Chest and
      Tummy is still asked twice under two ids.
    - **Known wrinkle with the shared-id approach:** when two rows share an id,
      whichever group iterates first wins, so the `source.cite` shown to the
      nurse would be that group's. A chest-and-tummy child would see the tummy
      citation on a chest question. Not wrong, but not right either — which is
      the third argument in three packets for `followUpsForGroups` deduping on a
      declared `fact` field carrying its own citation list. Escalated to "Still
      open" with the note that this is now **three** independent instances.

    The same reasoning applies more weakly to item 9 ("did something go down the
    wrong way"), which exists as tummy `t-018` and sore-throat item 12. Ruling:
    **not canonicalised.** The three are not the same fact — tummy's is
    *swallowing* something ("Did you swallow something that isn't food?"),
    throat's and chest's are *inhaling* it, and source 4 lists foreign-body
    aspiration under both acute and chronic cough while source 9 lists it as an
    airway obstruction. Distinct ids, distinct wording, distinct citations. If a
    future packet covers choking directly, all three should move to it.
11. **The two hand-written `chest` `inside` questions are re-sourced, not
    assumed, and the mechanism is stated because the last packet described it
    wrongly.** The sore-throat packet's decision 11 says `followUpsForGroups`
    does `if (sourced.length) continue`, dropping hand-written questions
    entirely. **The current code does not do that** — it appends them after the
    sourced ones and dedupes by id, then truncates at three. The practical
    effect is similar (a full bank crowds them off the screen) but the mechanism
    matters: it means **an id collision is a *feature* here**, and this packet
    uses it deliberately.
    - `breathing` → item 1, cited to sources 1, 2, 3, 4, 10 and 13. Ships under
      the same id.
    - `chest-worse-move` ("Does it get worse when you run around?") → item 2,
      cited to sources 4, 6, 11 and 12. Ships under the same id, wording
      preserved.

    Both survive comfortably, and both rank in the top three, so both continue
    to be *asked* and not merely stored. Worth noting, as the sore-throat packet
    noted for `throat`: whoever hand-wrote these two picked, unaided, the item
    that leads every source and the item with the only direct 4–11 self-report
    validation in the literature.
12. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and every
    other group's questions:
    - **Rejected as duplicates:** item 18 (body map + FPS-R), item 16
      (`DURATIONS`), item 17 (setup age), item 28's recurrence half
      (`happened-before`), and **item 15 (chest tightness)**, which is
      `SENSATIONS.squeezing` — "Squeezing / Tight squeeze", both tiers, depth
      `inside`, therefore offered to precisely this child before any follow-up
      runs. Item 15 is the most painful rejection in the packet: it is one of
      only three dyspnea constructs children generated for themselves in source
      13, and the app already has it.
    - **Kept despite surface overlap:** item 6 (inhaler) touches
      `HELPS.my-medicine` ("My own medicine") and item 7 (eating and drinking)
      touches `HELPS.water` and `HELPS.food`. `HELPS` records what the child
      *wants*; items 6 and 7 record what they have *had* and *managed*.
      Different facts — the same distinction the sore-throat packet drew, and it
      holds for the same reason.
    - **Kept despite cross-group overlap:** item 4 (coughing) duplicates the
      `throat` group's hand-written `cough` and the sore-throat packet's item 3,
      but those are scoped `group: 'throat'` and will not fire for a chest-only
      report. Item 7 stands in the same relation to sore-throat item 6, item 13
      to tummy's `t-003`, item 14 to tummy's `t-019` and sore-throat's item 13.
    - **Canonicalised, not duplicated:** item 1 — see decision 10.
    - **Adjacent, not redundant:** item 3 versus the sore-throat packet's item 5.
      A child may tap Throat and Chest and receive both; they are different facts
      (voice quality versus running out of breath) and must read as different
      questions on the nurse's screen. Flagged.
    - **Belongs elsewhere:** item 33 (throat closing) — the `throat` group's, and
      already covered there.
13. **Nothing in this packet may be summed, and this is the packet where the
    temptation is strongest.** Seventeen of the sources' instruments are scores.
    Two are prediction rules. Two more (C-ACT, ISAAC) produce numeric totals from
    child answers, and C-ACT even has a published cut-off. A downstream reader
    could assemble items 1, 2, 4 and 5 into something that looks like a C-ACT.
    It would not be one — the recall periods differ, the response options are
    yes/no rather than 0–3, three of C-ACT's seven items are the parent's, and
    source 12 measured what happens when you drop those three. **Explicitly
    forbidden**, and recorded here so the prohibition has a reason attached
    rather than being a rule someone can talk themselves out of.

## Still open

- **`followUpsForGroups` should dedupe on a declared fact, not a question id.**
  Third instance across three packets, and the first where the fact is a red
  flag rather than an aside. Decision 10 works around it with a shared id, which
  fixes the duplication but attributes the citation to whichever group iterates
  first. A `fact` field carrying its own citation list would fix both. Not fixed
  here — this run may write only two files.
- **`t-017a` and sore-throat item 8 need re-keying to `breathing`** (decision
  10). Until then the duplication persists for a child who taps two regions.
- **Item 8 (whistle) has no age floor and arguably needs one.** ISAAC used
  parent report at 6–7. The packet's judgement is that ISAAC's constraint was
  written-survey administration rather than child capability, and that inventing
  a numeric floor from it would be worse than leaving it unfloored and ranked
  low. A reviewer should confirm that judgement, because it is the single
  weakest child-report claim in the packet and it concerns the most-cited
  criterion in the literature.
- **The chest `surface` half has no packet, and its two shipped questions are
  crowded off the `unknown` path** (decision 9). A chest-`surface` packet is
  still unsourced. **`chest-press` was ruled to stay, 2026-09-06** — it does
  instruct a child to press on their own chest, which this packet's wording
  cautions would forbid for a sourced question, and it ships anyway as a
  hand-written fallback on the `surface` branch. Recorded as a deliberate
  exception rather than an oversight; revisit it if a chest-`surface` packet is
  ever sourced.
- **Duration bands cannot resolve any of the cut-offs.** STARWAVe splits at 4
  days, IMCI at 14, RCH at 2 and 4 weeks. `DURATIONS` offers `few-days` and then
  `long-time`, so 5 days, 20 days and 3 months are one answer. `long-time` is
  the band that carries most of this packet's chronic-cough justification and it
  is also the least precise one in the app. A reviewer should say whether that
  is acceptable or whether this complaint needs a band the others do not.
- **Nothing in this packet detects deterioration, and this complaint
  deteriorates.** Every other packet collects a snapshot and that is fine. Here,
  source 5 grades severity across four columns that a child crosses in minutes,
  and the app asks once. A child who answers "no" to item 1 at 09:00 may be in
  the severe column at 09:20. Whether the nurse-facing surface should re-prompt,
  and on what trigger, is an architecture question this packet cannot answer but
  should not leave unsaid.
- **Source 15 (pertussis) was never read.** Paroxysmal cough, post-tussive
  vomiting and the whoop are plausibly child-reportable and are absent from this
  packet for want of a source. Source 4 names paroxysmal cough and points at a
  pertussis guideline; the guideline was not reachable.
- **Item 10's simile needs a play specialist.** "Does your cough sound like a dog
  barking?" is the least-bad phrasing found for a criterion three sources state
  in clinical terms. A child may find the comparison funny, or find it
  frightening, and neither reaction produces a clean answer.
- **The underperception finding needs a clinician's view on what the nurse sees.**
  Source 14 measured 25% underperception at a mean age of 12.77. If the
  nurse-facing surface presents this packet's answers without that caveat
  attached, a "no" to item 1 could reassure someone. The packet's position is
  that every answer must be labelled as the child's report; a reviewer should
  confirm the surface does that.

## Ambiguity in the sources

Recorded rather than papered over.

- **Seventeen severity scores were read at one remove.** MPIS, Koumbourlis, ASS,
  CAS, CAES2, SCAS, ASS-adj, ASS2, PAS, PASS, AAIRS, PRAM, PIS, RAD, CS, PS and
  RA are known **only** through source 1's Table 1, which gives parameter
  presence as a "+" and no definitions, thresholds or weights whatsoever. No
  original derivation paper was read first-hand. The brief's instruction to
  harvest variables and ignore weights is what makes this survivable — but it
  means the packet knows that 15 of 17 scores contain "expiratory wheeze" and
  nothing at all about how any of them grades it. This is a **weaker** position
  than the sore-throat packet's, whose equivalent table at least carried
  predictor definitions.
- **Source 1's own quality finding undercuts its table's authority in a useful
  direction.** PRAM — the best-validated score in it — is fully recorded by 0 of
  59 UK paediatric EDs, and the three next-best by 1.7%, 5.1% and 10.2%. The
  observations this packet excludes are, on the review's own evidence, frequently
  not being recorded by anyone. That is *not* an argument for asking a child to
  supply them; it is context for how much weight "it's in 15 of 17 scores"
  should carry when the counter-argument is "and a child cannot answer it".
- **Source 2 found exactly one eligible rule in the whole of primary care**, and
  that rule's AUC for the diagnosis it is aimed at is 0.39 — worse than chance.
  STARWAVe is retained because it is the only rule that exists and because
  hospitalisation (AUC 0.80) is a real outcome; nothing in the items table
  depends on STARWAVe alone.
- **STARWAVe's fever variable is defined two incompatible ways in one
  parenthesis:** *"body temperature (>37.8 degrees celcius **or**
  parent-reported severe fever within 24 hours of presenting)"* — a measurement
  or a lay judgement, treated as one variable. Item 14 captures only the child's
  sensation and lets the nurse resolve it, which is the head-injury threshold
  ruling applied to a definitional rather than a numerical disagreement.
- **The guidelines' own history/examination boundary is inconsistent, again.**
  Source 7 files *"Tachypnoea at rest"* and *"Increased work of
  breathing/respiratory distress"* under **History**, then repeats tachypnoea
  and retractions under **Examination**. Source 4 files *"Sputum — presence of
  haemoptysis, colour, consistency and volume"* under History. The self-report
  filter was applied to the criterion, never to the heading it sits under —
  the same correction the sore-throat packet had to make for
  *"oropharyngeal ulcers"*.
- **WHO IMCI is out of the app's age range and is used anyway.** Its algorithm
  covers 2 months to 5 years; the app covers 4 to 12. It is cited for the
  *shape* of the complaint (one question, four observations), for the 14-day
  referral rule, and for nothing else. No IMCI threshold appears in the items
  table.
- **Source 14's cohort is older than the app's** — mean 12.77, and *"including
  participants as young as 10 years old"*. Its 25% underperception figure
  therefore describes the **most** capable end of the range, and this packet
  does not extrapolate it downward, only notes that extrapolation would not
  point in a reassuring direction. It is also a single-site Bronx cohort of
  Black and Latino children with a specific comorbidity focus (ADHD), which is
  a further reason not to treat the number as a general population estimate.
- **Source 12's psychometric comparison is not the comparison this app needs.**
  It compares child-only to parent-plus-child *for the same seven-item
  instrument*, in children **6–11** (the abstract's 4–11 range describes the
  original C-ACT validation, not this study's sample, whose mean age was 9.0).
  There is no evidence here about a 4- or 5-year-old answering alone, and none
  at all about a child answering on a screen with no adult present.
- **ISAAC's manual documents the questionnaires but not their per-item validity.**
  The section headed *"Development, validation"* for Module 1.1 says only that
  the questions are *"designed as a minimum set for inclusion in self-completed
  or interview-administered questionnaires"* and that *"enquiry about symptoms
  proceeds from the relatively mild to the relatively severe"*. Item ordering is
  therefore part of the instrument, which this packet cannot reproduce — it asks
  three questions in a rank order set by clinical priority, not by ISAAC's
  escalation gradient.
- **`--scan` returned zero candidate sentences on source 4**, the packet's
  primary complaint-organised guideline, and near-zero on the other RCH pages.
  Those pages are bulleted tables with almost no sentence-final punctuation, so
  the sentence splitter finds nothing to split. The guideline bodies were read
  near-whole instead — each is 6–16 kB, so the cost was small, but the tool
  failed on exactly the document class the brief points it at. See "Where the
  brief does not generalise".

## Where the brief does not generalise

Recorded for the next run, as the brief's section 10 asks.

1. **Section 1 assumes two searches are enough. For this complaint they were
   not.** Search A and Search B converged — scores and guidelines both assess
   this complaint by observation — so the gap between them, which the brief
   treats as the finding, was nearly empty. Three of this packet's top five
   items came from a **third** search the brief does not describe: *instruments
   built to be answered by children*. Suggested addition — **Search C: "validated
   self-report / patient-reported outcome measures for <complaint> in
   children"**. It is the only search that answers the brief's own section 4
   question directly, and for an observation-heavy complaint it is the one that
   produces the packet. It also supplies capability floors of the kind section 4
   asks for and that clinical sources almost never state.
2. **Section 2b's `--scan` fails on the exact document class section 1 sends you
   to.** Its cue regex splits on `[.;]` and requires sentences of 40–400
   characters. A hospital CPG rendered as nested bullets — RCH's entire
   guideline library — has neither. Every RCH page in this run returned 0 or
   near-0 candidates while containing the packet's best material. A splitter
   that also broke on bullet glyphs and on `\n` runs, or a `--outline` mode
   that printed heading-adjacent text, would have covered it. Windows worked
   fine; it was only the "what does this document hold" step that failed.
3. **`fetch-source.mjs` truncates its cache key at 80 characters and this run hit
   a silent collision.** Fetching the NHSGGC acute-wheeze guideline at
   `https://www.rightdecisions.scot.nhs.uk/shared-content/ggc-clinical-guidelines/paediatrics/…`
   returned `"cached": true` and served the **limb packet's** "Atraumatic painful
   limb" document, because both URLs slug to the same 80-character prefix. The
   same collision exists for every `www.clinicalguidelines.scot.nhs.uk/ggc-paediatric-guidelines/…`
   URL. Nothing errored; a less careful run would have quoted a limp guideline as
   a respiratory source. Worked around here by dropping `www.` from the host,
   which shifts the truncation — the correct fix is to append a short hash of
   the full URL to the slug. **No cached file was overwritten or deleted.**
4. **Section 5 describes `followUpsForGroups` behaviour that the code no longer
   has.** The sore-throat packet's decision 11 states it does
   `if (sourced.length) continue`; it appends and dedupes by id. The rule the
   brief is protecting is still right and still necessary — but the mechanism
   matters, because knowing the real one is what let decision 11 here replace
   the hand-written questions cleanly instead of minting new ids beside them.
   Worth re-deriving from the code each run rather than inheriting from the
   previous packet.
5. **Section 4 has no category for a criterion that is child-reportable but
   dangerous to ask.** The filter's three outcomes are yes / partial /
   no—observer. This is the first complaint where a perfectly answerable
   question can make the child worse: source 5's *"minimal handling"* and source
   8's *"Minimise distress… as this can worsen upper airway obstruction"* rule
   out any question that asks a child to perform something with their breath,
   independently of whether they could answer it. That went into "Wording
   cautions" for want of anywhere better, but it is a filter criterion, not a
   phrasing one.
