# Vomiting and diarrhoea (gastroenteritis)

Presenting complaint · packet `vomiting-diarrhoea` · serves group `tummy`, depth
`inside` · packet v1 · assembled 2026-09-07
Status: **not yet clinically reviewed** · sources verified first-hand: 10 of 10

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
> who arrives throwing up or with runny poop, and marks which of those a child
> can report about themselves. **Not** a diagnostic tool: nothing here may be
> scored, summed, or shown to a child or nurse as a suggested cause. The
> assessment literature for this complaint is almost entirely *dehydration*
> literature, and dehydration is assessed by looking at and touching a child;
> the packet is organised by the complaint the child arrives with, and no
> condition name reaches runtime.

## Read this first — the two things that weaken this packet most

Both are stated here rather than at page 40, because a reader must not have to
reach the closing sections to find the weakest link.

**1. The anchor guideline stops at the age this app starts.** NICE CG84 is
*"Diarrhoea and vomiting caused by gastroenteritis in **under 5s**"*. This app
covers 4–12. Every dehydration scale found is worse: the Clinical Dehydration
Scale is *"for children between 1 month and 3 years"* and the Gorelick and WHO
scales *"for children between 1 month and 5 years"* (source 6); the Modified
Vesikari Score was validated in *"children 3-48 months of age"* (source 8); the
WHO IMCI diarrhoea module is a chart for the child aged 2 months up to 5 years
(source 9). **Nothing read here was derived or validated in a child older than
5, and the app's population is 4–12.** The two Royal Children's Hospital
guidelines and the NHSGGC guideline are paediatric-wide and carry the packet
above 5; everything numeric is below it. See "Scope".

**2. Almost all of the assessment is examination, and no wording trick changes
that.** NICE's Table 1, the three dehydration scales and both hospital
guidelines assess dehydration by skin turgor, capillary refill, sunken eyes,
mucous membranes, tears, pulse quality, heart rate, respiratory pattern, skin
colour, extremity temperature, conscious level and weight. A 4-year-old cannot
report one of them, and several are things a *parent* reports rather than the
child. This packet's clean yield is **three items**. That number is the finding,
not a shortfall in searching — see "Yield" and decision 11.

## Scope

**Age.** App covers 4–12. The age problem here is unlike every previous packet's
and must not be filed as either of the brief's two kinds of floor.

- Head injury's amnesia floor was a **capability** floor: the child cannot do
  the task.
- The tummy pain packet's `minAge: 5` was a **validity** floor: the rule was
  derived at 5+ and means less below it.
- Here the mismatch runs the **other way**. Every instrument read was derived in
  children *younger* than most of this app's users, because that is where
  gastroenteritis kills. There is no lower floor to set. What there is instead
  is a ceiling on how much any of it should be trusted for a 9-year-old, and the
  honest response is to set **no floors from the sources at all** and say why.

The sources, verbatim:

- NICE CG84 title and scope (source 1): *"Diarrhoea and vomiting caused by
  gastroenteritis in under 5s: diagnosis and management"*, and *"For the
  purposes of this guideline, an 'infant' is defined as a child younger than
  1 year."*
- Source 6: *"The scales predict percent dehydration for slightly different age
  groups; the CDS is for children between 1 month and 3 years, while the other
  two scales are for children between 1 month and 5 years."*
- Source 7, on Gorelick's derivation: *"Gorelick created a 4-point and 10-point
  scale for assessing dehydration in children 1-60 months old presenting to
  Children's Hospital of Philadelphia"* — quoted in source 6.
- Source 8: *"We conducted a prospective, cohort, clinical observational study
  of children 3-48 months of age with AGE presenting to 5 U.S. emergency
  departments (EDs)."*
- Source 6's own cohort: *"We enrolled children less than 15 years of age"* — a
  study that applied 1-to-60-month scales to a cohort reaching 15, and found
  they did not work.

**Only one item in this packet carries an age floor, and it is judgement rather
than citation** — see decision 8.

**Depth.** This packet is the `inside` half of group `tummy`, the same as
`tummy/acute-pain`. `GROUP_DEPTH.tummy === 'ask'`, so the depth question is
genuinely asked and the filter genuinely fires. NICE lists *"non-blanching
rash"* among indicators of a diagnosis other than gastroenteritis (source 1) and
NHSGGC repeats it; **no rash, spot or skin criterion is carried here.** It
belongs to the surface half and to `skin/rash`.

**Group `tummy` includes `bottom`.** `tummy/acute-pain` already ruled that
`bottom` is out of its scope and needs its own handling. That ruling matters
*more* here, not less: the bank filters by group, not by region, so a child who
taps **Bottom** and answers "inside" will be served a diarrhoea packet. Given
the toileting-dignity ruling below, that is the worst place in the app for these
questions to land. Carried to "Still open" as a blocker for the reviewer, not
silently inherited.

**Out of scope by age or setting, and not carried:** every infant criterion
(bulging fontanelle, breastfeeding and its cessation, low birth weight, milk
feeds, nappy counts — source 1 and source 5 are full of them, and they are
observer items about a pre-verbal child); every adolescent criterion (source 3
lists *"Urinary frequency, body changes, sexually active"* → pregnancy,
*"Induced vomiting/purging, signs of disordered eating"*, *"Toxidromes, possible
toxin ingestion, drug use"*, *"Alcohol"*, *"Cannabis hyperemesis"* — the app
stops at 12 and none of these is a question this app should carry); neonatal
metabolic disease (source 3: *"Consider inborn errors of metabolism"*); all
fluid prescribing, ORS composition, ondansetron dosing and intravenous therapy,
which is most of what these guidelines are about; and everything requiring
bloods, stool culture or weighing.

## Sources

1. **NICE clinical guideline CG84, "Diarrhoea and vomiting caused by
   gastroenteritis in under 5s: diagnosis and management"**, published 22 April
   2009. **Read first-hand** — the *Recommendations* page, via
   `scripts/fetch-source.mjs`. **This is the anchor.** Supplies the diagnostic
   criterion, the expected durations, the alternative-diagnosis indicator list,
   the risk-factor list with its two counting thresholds, Table 1 (symptoms and
   signs of clinical dehydration and shock, with the red flags), the escalation
   recommendations and the parent-facing dehydration warning list.
2. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Gastroenteritis"**, last updated August 2025. **Read first-hand.** The
   complaint-organised source that is not age-capped at 5. Supplies the red-flag
   list, the History section and the discharge criterion.
3. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Vomiting"**, PIC-endorsed. **Read first-hand.** Reached from source 2's own
   *"See also"* and its key point that *"In a child with red flag features or a
   child with vomiting without diarrhoea, consider alternative diagnoses (see
   Vomiting)"*. This is the differential source, and it supplies the only two
   items in this packet that are about something other than fluid.
4. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Dehydration"**. **Read first-hand.** Also reached from source 2. Supplies the
   severity table and — importantly — the only guideline statement read that
   names a *symptom* rather than a sign for mild dehydration.
5. **NHS Greater Glasgow & Clyde, Paediatric Clinical Guideline 180, "Acute
   Gastroenteritis Management in Paediatric Emergency Medicine"**, version 4,
   last reviewed 02/09/2026, authors Pollock L, Osifodunrin N, O'Hara S, Bland R.
   **Read first-hand**, but see "Ambiguity" — `fetch-source.mjs` could not fetch
   it and the workaround is recorded there. A second complaint-organised
   guideline written for a paediatric ED, whose Table 1 is explicitly *"adapted
   from NICE CG84"*, and which restates NICE's risk factors with one threshold
   worded differently.
6. **Pringle K, Shah SP, Umulisa I, et al.** "Comparing the accuracy of the three
   popular clinical dehydration scales in children with diarrhea." *Int J Emerg
   Med* 2011;4:58. **Read first-hand** via PMC3182880. **This is the discovery
   source (Search A).** It reproduces all three scales in full and tests them
   head-to-head in three Rwandan district hospitals.
7. **Jauregui J, et al.** "External Validation and Comparison of Three Pediatric
   Clinical Dehydration Scales." *PLoS One* 2014;9(5):e95739. **Read first-hand**
   via PMC4008432. The second head-to-head comparison, in a US ED, and the one
   that also tested physician gestalt.
8. **Schnadower D, Tarr PI, Gorelick MH, et al.** "Validation of the Modified
   Vesikari Score in Children with Gastroenteritis in 5 U.S. Emergency
   Departments." *J Pediatr Gastroenterol Nutr* 2013;57(4). **Read first-hand**
   via PMC3788842. The only *severity* instrument found whose variables are
   history rather than examination, and therefore the only one that contributes
   an askable item.
9. **WHO, IMCI chart booklet** (`cdn.who.int`, present in the shared
   `packets/.sources/` cache). **Read first-hand**, diarrhoea module only.
   Unlike the sore-throat packet's experience, IMCI **does** have a full
   assessment module for this complaint. It contributes the persistent-diarrhoea
   boundary and an independent statement of the thirst variable.
10. **Duberg A, et al.** "Parent–child agreement in reporting somatic distress,
    gastrointestinal symptoms, mental health, and general health in girls with
    functional abdominal pain." *Eur J Pediatr* 2025;184(12):780. **Read
    first-hand** via PMC12640311. The self-report evidence, and the same source
    `tummy/acute-pain` used — re-read here rather than borrowed, because this
    packet leans on it harder: its highest-agreement items are *this packet's*
    items. **Limits worth knowing, unchanged:** 121 **girls only**, aged 9–13,
    with **chronic** functional abdominal pain in a dance and yoga RCT — not an
    emergency population, no boys, nothing below 9, and agreement with a parent
    is not accuracy.

**Attempted and not used.**

- **Baxter AL et al., "Development and Validation of a Pictorial Nausea Rating
  Scale for Children" (the BARF scale), *Pediatrics* 2011** —
  `publications.aap.org` returned **HTTP 403, not read.** Two secondary routes
  were also tried and also refused: the *British Journal of Anaesthesia* Spanish
  validation (403) and a University of Maryland archive copy (403). **Nothing in
  this packet depends on it, and no figure from it is quoted here**, including
  the figures that appeared in search snippets. It is named because it is the
  only child self-report instrument for a symptom in this packet's domain that
  the search surfaced, and because it is the closest published analogue to this
  app's FPS-R intensity screen. A future run should try harder; if it can be
  read, it is the source that would tell this project whether a child of 7 can
  rate nausea at all.
- **NICE CG84's full guideline and evidence reviews** (NCBI Bookshelf) — **not
  attempted.** The *Recommendations* page carried Table 1, the risk factors and
  the durations verbatim, which is everything this packet needs. Recorded so the
  omission is visible: no evidence review, no GRADE table and no derivation
  detail behind CG84 was read, so this packet knows what NICE recommends and not
  why.
- **NHSGGC 180's Table 1 itself.** The narrative around it was read; the table's
  cells did not survive extraction (see "Ambiguity"). Everything the table would
  have said is quoted instead from source 1, which NHSGGC names as the table's
  origin.

## The rule(s), as published

### The three dehydration scales, verbatim, in full

**Clinical Dehydration Scale (CDS)** — source 7, Table 1; identical in source 6:

> "Characteristic 0 1 2 · **General appearance** Normal / Thirsty, restless, or
> lethargic, but irritable when touched / Drowsy, limp, cold, sweaty and/or
> comatose · **Eyes** Normal / Slightly sunken / Very Sunken · **Mucous
> membranes** Moist / 'Sticky' / Dry · **Tears** Tears / Decreased Tears /
> Absent Tears"

**WHO scale** — source 7, Table 2:

> "A B C · **Look at condition** Well, alert / Restless, irritable / Lethargic or
> unconscious · **Eyes** Normal / Sunken / Sunken · **Thirst** Drinks normally,
> not thirsty / Thirsty, drinks eagerly / Drinks poorly or not able to drink ·
> **Feel: Skin pinch** Goes back quickly / Goes back slowly / Goes back very
> slowly"

**Gorelick 10-point scale** — source 6, Table 2, which is the fuller of the two
reproductions:

> "Characteristic — No or minimal dehydration / Moderate to severe dehydration ·
> **General appearance** Alert / Restless, lethargic, unconscious · **Capillary
> refill** Normal / Prolonged or minimal · **Tears** Present / Absent · **Mucous
> membranes** Moist / Dry, very dry · **Eyes** Normal / Sunken; deeply sunken ·
> **Breathing** Present / Deep; deep and rapid · **Quality of pulses** Normal /
> Thready; weak or impalpable · **Skin elasticity** Instant recoil / Recoil
> slowly; recoil > 2 s · **Heart rate** Normal / Tachycardia · **Urine output**
> Normal / Reduced; not passed in many hours"

**Read those three lists as one.** Deduplicated, they are twelve variables:
general appearance, eyes, mucous membranes, tears, thirst, skin turgor,
capillary refill, breathing, pulse quality, heart rate, urine output — and, in
source 7, physician gestalt as a thirteenth comparator. **Eleven of the twelve
are things somebody else looks at, listens to, times or feels.** One is a
symptom: thirst. And of thirst's three columns, the third — *"Drinks poorly or
not able to drink"* — is not a symptom either; IMCI shows why, because its
instruction is *"Offer the child fluid. Is the child: Not able to drink or
drinking poorly? Drinking eagerly, thirsty?"* (source 9). That is a test the
clinician performs. **The child's half of the only child-answerable variable in
the entire scale literature is two words long: "Thirsty, drinks eagerly."**

This is the limb packet's finding reached by a different route. There, eight
named prediction rules produced one clean child-reportable item. Here, three
named dehydration scales produce one, and it is the same shape of finding:
recording it is worth more than padding the list.

### What the scales are actually worth (sources 6, 7)

Source 7, in a US paediatric ED, 113 children with complete data, 10.6% with
significant dehydration:

> "The Clinical Dehydration Scale (CDS) and Gorelick scales both had an area
> under the ROC curve (AUC) statistically different from the reference line with
> AUCs of 0.72 (95% CI 0.60, 0.84) and 0.71 (95% CI 0.57, 0.85) respectively.
> The World Health Organization (WHO) scale and physician gestalt had AUCs of
> 0.61 (95% CI 0.45, 0.77) and 0.61 (0.44, 0.78) respectively, which were not
> statistically significant."

and its conclusion: *"The Gorelick scale and Clinical Dehydration Scale were
fair predictors of dehydration in children with diarrhea or vomiting. The World
Health Organization scale and physician gestalt were not helpful predictors of
dehydration in our patient population."*

Source 6, in three Rwandan district hospitals:

> "the 4- and 10-point Gorelick scale had sensitivities of 64% and 21% and
> specificities of 69% and 89%, respectively, for severe dehydration, while the
> same scales had sensitivities of 68% and 82% and specificities of 41% and 35%
> for moderate dehydration; the CDS had a sensitivity of 68% and specificity of
> 45% for moderate dehydration."

and its conclusion: *"In this sample of children, the WHO scale, Gorelick scale,
and CDS did not provide an accurate assessment of dehydration status when used
by general physicians and nurses in a developing world setting."*

Also worth holding: source 7 notes *"there may be significant variability
amongst the scores clinicians assign patients when using a clinical dehydration
score"*, and both guidelines agree that the scales are not the reference
standard anyway — source 4: *"Serial weights are the best measure of acute
changes in fluid status. Clinical signs can help estimate the severity of
dehydration but are often imprecise"*; source 5: *"The most reliable measure of
dehydration in children is weight loss."*

**Consequence for this packet: no item may be ranked highly *because* a scale
names it.** The one item a scale contributes (thirst) is ranked second, and it
is ranked there on the strength of a guideline sentence, not on the strength of
the WHO scale — which is the scale that did not reach significance in either
comparison.

### NICE CG84, verbatim (source 1)

Diagnosis:

> "1.1.1.1 Suspect gastroenteritis if there is a sudden change in stool
> consistency to loose or watery stools, and/or a sudden onset of vomiting."
>
> "1.1.1.2 If you suspect gastroenteritis, ask about: recent contact with someone
> with acute diarrhoea and/or vomiting and exposure to a known source of enteric
> infection (possibly contaminated water or food) and recent travel abroad."

**Three things to ask, and one of them is a child's.** See item 5.

Expected course:

> "1.1.1.3 Be aware that in children with gastroenteritis: diarrhoea usually
> lasts for 5–7 days, and in most it stops within 2 weeks · vomiting usually
> lasts for 1–2 days, and in most it stops within 3 days."

Alternative diagnoses:

> "1.1.1.4 Consider any of the following as possible indicators of diagnoses
> other than gastroenteritis: fever: temperature of 38°C or higher in children
> younger than 3 months / temperature of 39°C or higher in children aged 3
> months or older · shortness of breath or tachypnoea · altered conscious state ·
> neck stiffness · bulging fontanelle in infants · non-blanching rash · blood
> and/or mucus in stool · bilious (green) vomit · severe or localised abdominal
> pain · abdominal distension or rebound tenderness."

Risk factors — **the only place in the anchor guideline where a criterion is a
countable history fact**:

> "1.2.1.2 Recognise that the following are at increased risk of dehydration:
> children younger than 1 year, particularly those younger than 6 months ·
> infants who were of low birth weight · **children who have passed more than
> five diarrhoeal stools in the previous 24 hours** · **children who have vomited
> more than twice in the previous 24 hours** · **children who have not been
> offered or have not been able to tolerate supplementary fluids before
> presentation** · infants who have stopped breastfeeding during the illness ·
> children with signs of malnutrition."

Table 1, verbatim, both halves, including which rows carry a red flag:

> "**Symptoms by increasing severity of dehydration (remote and face-to-face
> assessments)** — No clinically detectable dehydration / Clinical dehydration /
> Clinical shock: Appears well · **Red flag** Appears to be unwell or
> deteriorating · – · Alert and responsive · **Red flag** Altered responsiveness
> (for example, irritable, lethargic) · Decreased level of consciousness ·
> Normal urine output · Decreased urine output · – · Skin colour unchanged ·
> Skin colour unchanged · Pale or mottled skin · Warm extremities · Warm
> extremities · Cold extremities"
>
> "**Signs by increasing severity of dehydration (face-to-face assessments)** —
> Alert and responsive · **Red flag** Altered responsiveness (for example,
> irritable, lethargic) · Decreased level of consciousness · Skin colour
> unchanged · Skin colour unchanged · Pale or mottled skin · Warm extremities ·
> Warm extremities · Cold extremities · Eyes not sunken · **Red flag** Sunken
> eyes · – · Moist mucous membranes (except after a drink) · Dry mucous
> membranes (except for 'mouth breather') · – · Normal heart rate · **Red flag**
> Tachycardia · Tachycardia · Normal breathing pattern · **Red flag** Tachypnoea
> · Tachypnoea · Normal peripheral pulses · Normal peripheral pulses · Weak
> peripheral pulses · Normal capillary refill time · Normal capillary refill
> time · Prolonged capillary refill time · Normal skin turgor · **Red flag**
> Reduced skin turgor · – · Normal blood pressure · Normal blood pressure ·
> Hypotension (decompensated shock)"

and the instruction that governs it: *"Within the category of 'clinical
dehydration' there is a spectrum of severity indicated by increasingly numerous
and more pronounced symptoms and signs… Symptoms and signs with red flags may
help to identify children at increased risk of progression to shock. If in
doubt, manage as if there are symptoms and/or signs with red flags."*

**The table is split into "symptoms" and "signs" by NICE itself, and the split
is the self-report filter already half-applied** — the same gift SPASMS gave the
tummy pain packet. But read what is actually in the symptoms half. Five rows:
appearance, responsiveness, urine output, skin colour, extremity temperature.
**Four of the five are things somebody looks at.** NICE calls them symptoms
because they can be obtained during a *remote* assessment — a phone call — and
on a phone call the person answering is the parent. *"Symptom"* here means
"reportable by an adult who is with the child", not "reportable by the child".
Misreading that one word would have produced four invented items, and it is the
single most dangerous sentence in this packet's sources.

Red flags in the symptoms half, exactly: **"appears to be unwell or
deteriorating"** and **"altered responsiveness"**. Both are observer judgements.
**Not one red-flag symptom in the anchor guideline is child-reportable.**

Escalation:

> "1.7.1.1 During remote assessment: arrange emergency transfer to secondary care
> for children with symptoms suggesting shock (see table 1) · refer for
> face-to-face assessment children: with symptoms suggesting an alternative
> serious diagnosis (see recommendation 1.1.1.4) or at high risk of dehydration…"

Parent-facing advice — the closest thing in the anchor to a list written for a
non-clinician:

> "1.8.1.1 Inform parents and carers that… the following symptoms may indicate
> dehydration: appearing to get more unwell · changing responsiveness (for
> example, irritability, lethargy) · decreased urine output · pale or mottled
> skin · cold extremities"

**Five items written for a lay reader, and only one of them — decreased urine
output — is a fact the child themselves holds.** That is item 4, and this
sentence is why it exists.

And the fluid-tolerance thread, which is the packet's top item, stated three
times in one guideline:

> "1.3.2.2 …consider supplementation with their usual fluids… if they refuse to
> take sufficient quantities of ORS solution and do not have red flag symptoms
> or signs (see table 1) · consider giving the ORS solution via a nasogastric
> tube **if they are unable to drink it or if they vomit persistently**"
>
> "1.8.1.2 …to seek advice **if the child refuses to drink the ORS solution or
> vomits persistently**"

### The two hospital guidelines, verbatim (sources 2, 3, 4)

RCH Gastroenteritis (source 2), key point: *"In a child with red flag features
or a child with vomiting without diarrhoea, consider alternative diagnoses (see
Vomiting)"*. Its **red flags**, in full:

> "Age under 6 months · Bilious vomiting · Haematemesis · Diarrhoea for >10 days ·
> Severe abdominal pain · Refusal to walk · Past gastrointestinal/surgical
> history eg short gut, Hirschsprung, ileostomy · Complex medical history eg
> renal, cardiac disease · Post organ transplant · Immunocompromised ·
> Representation/failure to respond to standard therapy"

Its **History**, in full:

> "Although vomiting may precede diarrhoea in the first 24-48 hours of
> gastroenteritis, in a vomiting child without diarrhoea, other causes must be
> considered · Volume, frequency, duration of vomit and stool · Blood or mucus in
> the stool: this suggests significant inflammation that may occur with bacterial
> infection or inflammatory bowel conditions · Crampy abdominal pain · Recent
> fluid intake: volume and type compared to usual (including hyper or hypotonic
> fluids) · Urine output · Infectious contacts · Recent travel · History of slow
> weight gain and/or fortification of feeds · Recurrent presentations for similar
> symptoms"

Its **Examination**, in full: *"Many children will have a normal examination, or
generalised abdominal tenderness · Pallor, irritability, altered conscious
state, decreased activity level · Signs of shock · Focal abdominal tenderness ·
Guarding · Significant distension · Absent or high-pitched bowel sounds · Degree
of dehydration · Weight"*. And its discharge criterion, three words long:
***"Tolerating oral intake and nil/mild dehydration."***

RCH Vomiting (source 3), key points: *"Bilious (green) vomiting is due to a
gastrointestinal obstruction until proven otherwise, and requires urgent
surgical referral · In a vomiting child without diarrhoea, always consider
causes other than gastroenteritis · **Intracranial causes, including raised
intracranial pressure (ICP) and inflicted injury, should always be considered**"*
and *"Early morning vomiting and headache may be due to raised ICP"* and *"Using
a visual aid to clarify vomitus colour with families is helpful"*.

Its **red flags**, in full:

> "Bilious vomiting · Lethargy or listlessness · Inconsolable +/- bulging
> fontanelle in infant · **Neck stiffness, photophobia and fever in older
> child** · Signs of peritonitis · Persistent vomiting with poor growth or
> abnormal development"

Its differential table's history rows, verbatim in part: *"Gastro intestinal
Diarrhoea → Gastroenteritis"*; *"Rectal bleeding → Gastroenteritis, Colitis,
Intussusception, Meckel's diverticulum"*; *"Abdominal tenderness and fever →
Appendicitis, UTI"*; *"Lower abdominal/pelvic pain or testicular pain →
Testicular torsion, Ovarian torsion"*; *"Infection Fever or systemic illness →
Sepsis, UTI, Meningitis"*; *"Neurological Headache → Migraine, Intracranial
pathology ie raised ICP, Infection"*; *"History of head injury/concern for NAI →
Intracranial bleed"*; *"Metabolic Abdominal pain, polyuria, polydipsia → DKA"*;
*"Toxidromes, possible toxin ingestion, drug use → Poisoning"*. Its discharge
criterion: *"Vomiting reduced and tolerating adequate oral fluids."*

RCH Dehydration (source 4) — **the single most useful sentence in this packet**:

> "Children with mild dehydration have no clinical signs. **They may have
> increased thirst and/or reduced urine output**"

Its History section: *"**Intake**: food and fluid intake in comparison to normal ·
**Output**: urine and stool in comparison to normal · Excessive losses, eg
vomiting, frequent urination or diarrhoea"*. Its severity table is examination
throughout: *"Conscious state · Heart rate · Breathing · Blood pressure · Skin
colour · Extremities · Peripheral pulses · Eyes & fontanelle · Mucous membranes ·
Skin turgor · Central capillary refill time."*

### NHSGGC 180, verbatim (source 5)

Its restatement of NICE's risk factors differs in wording on one threshold and
is worth putting side by side:

> "Children at increased risk of dehydration include: children younger than 1
> year, especially those younger than 6 months · infants who were of low birth
> weight · **children who have passed more than five diarrhoeal stools in the
> past 24 hours** · **children who have vomited three or more times in the past
> 24 hours** · children who have not been offered or have not been able to
> tolerate supplementary fluids before presentation · infants who have stopped
> breastfeeding during the illness · children with under-nutrition"

Its caution list: *"Be particularly cautious in children with: Pyrexia >38 °C
under 3 months old, >39 °C over 3 month and older · Tachypnoea · Altered
conscious level · Stiff neck, bulging fontanelle, non-blanching rash ·
Blood/mucus in stool (consider if at risk of HUS) · Severe/localised abdominal
pain · Abdominal distension, rebound tenderness · Bilious vomiting."* And a
differential no other source names: *"Ingested foreign bodies (including hair
balls in trichophagia) should be considered as a differential diagnosis,
particularly in children and young people with complex needs or communication
difficulties."*

Its ED disposition rule, which is item 2 restated as a clock: *"Children with no
risk factors should be able to be managed within the ED as they can either be
discharged, or only require a 2–3-hour period of assessment to assess that they
**can tolerate oral fluids and do not have ongoing vomiting**."*

Discharge advice: *"Reintroduce the child's usual solid food once the child's
appetite returns · Avoid fizzy drinks and fruit juice other than half strength
apple juice until diarrhoea stops · Provide advice to parents about assessing
whether their child is deteriorating and when to seek further medical advice ·
Children should stay at home and not return to school or nursery until 48 hours
after the last vomit or episode of diarrhoea."*

### The Modified Vesikari Score, verbatim (source 8)

> "Points 0 1 2 3 · **Diarrhea duration (hr)** 0 / 1-96 / 97-120 / ≥ 121 ·
> **Max no. of diarrheal stools/24 hr period (in the course of the disease)** 0 /
> 1-3 / 4-5 / ≥ 6 · **Vomiting duration (hr)** 0 / 1-24 / 25-48 / ≥ 49 · **Max
> no. of vomiting episodes/24 hr period (in the course of the disease)** 0 / 1 /
> 2-4 / ≥ 5 · **Max recorded fever** < 37.0°C / 37.1-38.4 °C / 38.5-38.9°C /
> ≥ 39.0°C · **Future healthcare visit** 0 / – / Primary Care / Emergency Dept. ·
> **Treatment** None / IV Rehydration / Hospitalization / –"

**This is the only instrument in the packet built entirely from history**, and
it is therefore the only one that could contribute an askable item. Two of its
seven variables are outcomes (future visit, treatment), one is a measurement
(fever), and four are counts and durations of vomiting and diarrhoea. But note
how they were obtained: *"A baseline MVS score was determined in the ED, and
telephone follow-up 14 days after presentation was used to assign the follow-up
MVS"*, in *"children 3-48 months of age"*. **Every one of those counts came from
a parent, about a toddler, over the telephone.** The variable is real; the
evidence that a *child* can produce it is zero.

### The counting-threshold problem

Exactly the shape of head injury's fall height and the tummy packet's
temperature, with four thresholds across three sources and **two variables**:

| Source | Vomiting | Diarrhoeal stools |
|--------|----------|-------------------|
| NICE CG84 (1) | *"vomited more than twice in the previous 24 hours"* | *"more than five diarrhoeal stools in the previous 24 hours"* |
| NHSGGC 180 (5) | *"vomited three or more times in the past 24 hours"* | *"more than five diarrhoeal stools in the past 24 hours"* |
| MVS (8) | bands at 1 / 2-4 / ≥ 5 per 24 h | bands at 1-3 / 4-5 / ≥ 6 per 24 h |
| RCH (2) | *"Volume, frequency, duration of vomit and stool"* — no number | same, no number |

NICE and NHSGGC agree in substance (">2" and "≥3" are the same boundary,
differently worded); the MVS does not, and puts its top band two vomits higher.
**Same resolution as every previous packet: capture the raw fact, let the nurse
classify.** The `count` widget's buckets — *None / Once / A few / Lots* — were
built for head injury's ">= 3" boundary and by luck they resolve NICE's and
NHSGGC's boundary exactly. They cannot resolve the MVS's ≥5 band, and nothing in
the app can. See item 3 and decision 5.

### The IMCI diarrhoea module, verbatim (source 9)

> "Does the child have diarrhoea? **If yes, ask: For how long? Is there blood in
> the stool?** Look and feel: Look at the child's general condition. Is the
> child: Lethargic or unconscious? Restless and irritable? Look for sunken eyes.
> **Offer the child fluid.** Is the child: Not able to drink or drinking poorly?
> Drinking eagerly, thirsty? Pinch the skin of the abdomen. Does it go back: Very
> slowly (longer than 2 seconds)? Slowly?"

**Two ask, five look-and-feel**, and IMCI is the only source read that draws the
line typographically. Both of its "ask" items are already collected by
`tummy/acute-pain` (blood in the poop) or by `DURATIONS` (for how long). Its
classification boundary matters for duration scope: *"if diarrhoea 14 days or
more… PERSISTENT DIARRHOEA"*, which is a different classification with different
management, i.e. a different complaint.

Its dysentery follow-up question set is also worth recording, because it is a
guideline asking a *trajectory* in plain words: *"Are there fewer stools? Is
there less blood in the stool? Is there less fever? Is there less abdominal
pain? Is the child eating better?"* — see decision 6, where the packet declines
to turn it into an item.

### The self-report evidence (source 10)

> "the items with the highest (substantial to almost perfect) agreement between
> the girls' and their parents' reports were as follows: at baseline —
> constipation, **loose bowel movements/diarrhoea**, **vomiting**, and food
> making one sick (all GI-subscale items)"

and the paper's own conclusion: *"Findings indicated good parent– and child
agreement for gastrointestinal and general somatic symptoms, but lower agreement
for mental health and general health."*

**That is as close as this project has come to direct evidence for a specific
item.** Two of the four highest-agreement items in source 10 are the two facts
this packet is named after. It still does not license much: 121 girls, 9–13,
chronic pain, not an ED, and agreement with a parent is not accuracy. It says
nothing about a 4-year-old and nothing about a child answering alone.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Have you been able to keep a drink down** | NICE (1) — *"children who have not been offered or have not been able to tolerate supplementary fluids before presentation"*, *"if they are unable to drink it or if they vomit persistently"*, *"to seek advice if the child refuses to drink the ORS solution or vomits persistently"*; RCH gastro (2) — *"Consider discharge when Tolerating oral intake"*; RCH vomiting (3) — *"Consider discharge when Vomiting reduced and tolerating adequate oral fluids"*; NHSGGC (5) — *"assess that they can tolerate oral fluids and do not have ongoing vomiting"*; WHO scale (7) — *"Drinks poorly or not able to drink"* | **yes** | **The flagship item, and it is the discharge criterion in two guidelines, the ED-observation criterion in a third, and the nasogastric-tube trigger in the anchor.** It is also the only item here that changes what happens today. Distinct from `ate-today` and from `tummy/acute-pain` item 3 (appetite): those are about wanting; this is about *managing*. Distinct from item 2: thirst is a feeling, this is an outcome. Ask about the child's own experience of keeping fluid down, never *"have you been drinking enough?"* — see wording cautions. |
| 2  | **Are you thirsty** | RCH dehydration (4) — *"Children with mild dehydration have no clinical signs. They may have increased thirst and/or reduced urine output"*; WHO scale (6, 7) — *"Thirst: Drinks normally, not thirsty / Thirsty, drinks eagerly"*; CDS (6, 7) — general appearance *"Thirsty, restless, or lethargic"*; IMCI (9) — *"Drinking eagerly, thirsty?"* | **yes** | **The only subjective symptom in the entire dehydration-scale literature**, and the only variable of the twelve in the three scales that a child owns. Source 4 is what carries it, not the WHO scale: source 4 says thirst is what mild dehydration *looks like when there is nothing to see*, which is precisely the child this app is talking to. Never *"are you really thirsty?"* — `screen.mjs` rejects `really` as embedded intensity, correctly. Note the polarity trap: WHO's severe column is *drinking poorly*, so a "no" is not reassuring; the interpretation is the nurse's and nothing in the app may invert it. |
| 3  | **Have you needed to pee less than usual** | NICE (1) — Table 1 symptoms half, *"Normal urine output / Decreased urine output"*, and 1.8.1.1 parent advice *"decreased urine output"*; Gorelick (6) — *"Urine output Normal / Reduced; not passed in many hours"*; RCH dehydration (4) — *"reduced urine output"*, *"Output: urine and stool in comparison to normal"*; RCH gastro (2) — *"Urine output"* under History | **partial** | The only one of NICE's five parent-facing dehydration warnings that is not something an adult looks at. A child of 4–12 in a hospital knows whether they have needed the toilet; they cannot measure output, and NICE's own instrument for an infant is a nappy count, which is out of scope by age and by register. **Ask about the last time they needed to go, not about a volume**, and anchor it to a concrete window ("since you got here") rather than "than usual" — see decision 8 for why that removes the need for an age floor. Distinct from `tummy/acute-pain` item 12 (hurts to pee) and item 14 (peeing *more*), which is the opposite direction and a DKA signal; source 3 lists *"Abdominal pain, polyuria, polydipsia → DKA"*, so the two items must not be fused and a nurse must be able to see which was asked. |
| 4  | **Do bright lights hurt your eyes** | RCH vomiting (3) — red flag: *"Neck stiffness, photophobia and fever in older child"* | **yes** | **Weakest provenance in the askable set: one source, one line.** Kept because that line is a red flag, because it is explicitly scoped *"in older child"* — the only criterion found anywhere in this packet's sources that is written for this app's age range rather than below it — and because the fact is unobtainable any other way from a child who tapped only Tummy. The app already ships `light-hurts` ("Do bright lights make it worse?") for group `head`; **this is the same fact reached from a different body region**, exactly like `tummy/acute-pain` item 18 and the sore-throat packet's item 8. It must carry the *same* `fact` tag so a child who taps Head and Tummy is asked once. Never name the condition, never say the word that follows "photophobia" in the same red flag. |
| 5  | **How many times have you thrown up** | NICE (1) — *"children who have vomited more than twice in the previous 24 hours"*; NHSGGC (5) — *"vomited three or more times in the past 24 hours"*; MVS (8) — *"Max no. of vomiting episodes/24 hr period"*; RCH gastro (2) — *"Volume, frequency, duration of vomit and stool"* | **partial**, age 7+ | The best-quantified criterion in the packet and the least reliable answer. Four sources, two incompatible boundaries (see the counting-threshold problem), and the `count` widget's *None / Once / A few / Lots* buckets happen to resolve NICE's and NHSGGC's boundary and not the MVS's. **Answer type `count`, not yes/no** — a yes/no here discards the only threshold the app can actually reach. The age floor is **judgement, not citation**; see decision 8. The MVS's counts came from parents by telephone about toddlers, so the *variable* is well sourced and the *child as its source* is not sourced at all. |
| 6  | **Is it hard to turn your head** | NICE (1) — *"neck stiffness"* among indicators of a diagnosis other than gastroenteritis; NHSGGC (5) — *"Stiff neck, bulging fontanelle, non-blanching rash"*; RCH vomiting (3) — red flag *"Neck stiffness, photophobia and fever in older child"* | **partial** | Split from item 15 on the same principle the sore-throat packet used for its own item 9, and the wording is deliberately identical: *neck stiffness* is a resistance a clinician feels, but "is it hard to turn your head?" is something a child discovers by trying. Three sources name it, which is better provenance than item 4. Ranked below item 4 because the child's half is a weaker proxy for the sign than photophobia is, and because `throat`'s packet already ships this question with the same `fact` — a child who taps Throat and Tummy must be asked once. |
| 7  | **Has anyone at home thrown up too** | NICE (1) — *"If you suspect gastroenteritis, ask about: recent contact with someone with acute diarrhoea and/or vomiting"*; NHSGGC (5) — *"Recent contact with someone with acute diarrhoea/vomiting"*; RCH gastro (2) — *"Infectious contacts"* under History | **partial** | The first thing the anchor guideline tells a clinician to ask, and a 6-year-old can answer it about a sibling. **This contradicts the sore-throat packet's item 30**, which excluded "infectious contacts" as a carer's fact, and the disagreement is deliberate — see decision 10. Marked partial because a child can only report what they witnessed at home or in class, and cannot report the other two thirds of NICE's question (contaminated food or water, travel), which stay excluded as item 20. A "no" from a child is much weaker than a "no" from a parent and the nurse must read it that way. Ranked last of the askable items: it supports a diagnosis, it does not change what happens next. |
| 8  | Throwing up at all | NICE (1) — *"a sudden onset of vomiting"*; RCH (2, 3); NHSGGC (5); Duberg (10) — *"vomiting"* among the highest-agreement self-reported items | **yes** — **already collected by `tummy/acute-pain` item 1** | Re-used by reference, not re-written. `tummy/acute-pain` item 1 serves group `tummy` at `depth: inside`, so it is already in this child's queue; the hand-written `threw-up` carries `fact: 'vomiting'`. Re-writing it here would generate a second question for the same fact, which `keyOf` would silently drop. What this packet adds is source 10's evidence that "vomiting" is one of the four items 9–13 year olds and their parents agree on most. |
| 9  | Runny poop | NICE (1) — *"a sudden change in stool consistency to loose or watery stools"*; RCH (2); NHSGGC (5); IMCI (9); Duberg (10) — *"loose bowel movements/diarrhoea"* among the highest-agreement items | **yes** — **already collected by `tummy/acute-pain` item 9** | Re-used by reference. That packet sourced it from RCH's abdominal pain guideline and Almalki's cohort as an *associated* symptom; here it is half the presenting complaint and the anchor's diagnostic criterion, which strengthens the existing item rather than justifying a new one. |
| 10 | Blood in the poop | NICE (1) — *"blood and/or mucus in stool"*; NHSGGC (5) — *"Blood/mucus in stool (consider if at risk of HUS)"*; RCH gastro (2) — *"Blood or mucus in the stool: this suggests significant inflammation"*; RCH vomiting (3) — *"Rectal bleeding"*; IMCI (9) — *"Is there blood in the stool?"* | **yes** — **already collected by `tummy/acute-pain` item 11** | Re-used by reference, and five sources here make it better provenanced than it was. **The mucus half is not carried and never will be**: classifying mucus is exactly the "never ask a child to classify what came out of them" caution. |
| 11 | Feeling hot or shivery | NICE (1) — fever thresholds 38 °C / 39 °C; NHSGGC (5) — *"Pyrexia >38 °C… >39 °C"*; MVS (8) — four fever bands; RCH vomiting (3) — *"Fever or systemic illness"*, *"Abdominal tenderness and fever"* | **partial** — **already collected by `tummy/acute-pain` item 16** | Re-used by reference. Adds a fourth and fifth incompatible threshold to that packet's three. Never say "fever", never ask for a number. |
| 12 | What the throw-up looked like | NICE (1) — *"bilious (green) vomit"*; RCH gastro (2) — *"Bilious vomiting"*, *"Haematemesis"* as red flags; RCH vomiting (3) — *"Bilious (green) vomiting is due to a gastrointestinal obstruction until proven otherwise"*, *"Blood… Upper GI haemorrhage"*, and *"Using a visual aid to clarify vomitus colour with families is helpful"*; NHSGGC (5) | **partial** — **already collected as `tummy/acute-pain` item 17, deferred** | Re-used by reference and **not** re-opened. That packet deferred it for want of a neutral colour widget and refused to squeeze it into "was it green?", because green is the answer that escalates. This packet adds the strongest argument yet *for* the widget: source 3 says in its own words that a visual aid for vomit colour is helpful, which is a guideline recommending the exact instrument the app lacks. Carried to "Still open" as a cross-packet request, not re-derived. |
| 13 | Is it getting worse | RCH gastro (2) — *"Representation/failure to respond to standard therapy"*; RCH vomiting (3) — *"Persistent vomiting"*; IMCI (9) — *"Are there fewer stools? Is there less blood in the stool? … Is the child eating better?"*; NICE (1) — *"appearing to get more unwell"* | **yes** — **already collected by `tummy/acute-pain` item 7** | Re-used by reference. The project's rule is that region-specific trajectory questions stay separate rather than being merged into one shared fact — but `tummy/acute-pain` item 7 *is* this region's trajectory question, and it serves this exact group at this exact depth. A second one would be a duplicate within a group, not a separate one across regions. See decision 6. |
| 14 | Hard to breathe | NICE (1) — *"shortness of breath or tachypnoea"* as an indicator of an alternative diagnosis; NHSGGC (5) — *"Tachypnoea"* | **yes** — **already collected by `tummy/acute-pain` item 18** | Re-used by reference; `fact: 'hard-to-breathe'` already spans chest, throat and tummy. |
| 15 | Did you swallow something | NHSGGC (5) — *"Ingested foreign bodies (including hair balls in trichophagia) should be considered as a differential diagnosis, particularly in children and young people with complex needs or communication difficulties"*; RCH vomiting (3) — *"possible toxin ingestion"* | **yes** — **already collected by `tummy/acute-pain` item 19** | Re-used by reference. Note the irony in NHSGGC's own sentence: the children it names are the least able to answer the question. Never name the object. |
| 16 | Drinking a lot and peeing a lot | RCH vomiting (3) — *"Metabolic Abdominal pain, polyuria, polydipsia → DKA"* | **yes** — **already collected by `tummy/acute-pain` item 14** | Re-used by reference, and independently confirmed here by a second guideline. **The interaction with item 3 is the thing to flag:** a child who answers yes to *both* "peeing less" and "drinking and peeing more" has said something contradictory that a nurse should see, so the two must remain separately identifiable in the report and must never be collapsed into one "urine" question. |
| 17 | Hurts to pee; tummy pain; where it hurts; how much; crampy; queasy | RCH vomiting (3) — *"UTI"*, *"Appendicitis"*; RCH gastro (2) — *"Crampy abdominal pain"*; NICE (1) — *"severe or localised abdominal pain"*; NHSGGC (5) | **yes** — **already collected elsewhere in the app** | Body map (five torso regions), FPS-R intensity screen, `SENSATIONS.cramping` ("Scrunchy"), `SENSATIONS.queasy` ("Yucky tummy"), and `tummy/acute-pain` item 12. *"Severe"* is a grading, is banned outright, and the intensity screen has it. |
| 18 | Duration of vomiting and of diarrhoea; sudden onset | NICE (1) — *"sudden onset of vomiting"*, *"diarrhoea usually lasts for 5–7 days… vomiting usually lasts for 1–2 days"*; MVS (8) — duration bands in hours; RCH gastro (2) — *"Diarrhoea for >10 days"* as a red flag; IMCI (9) — *"For how long?"*, and ≥14 days = persistent diarrhoea | **yes** — **already collected** | `DURATIONS`. The bands cannot resolve the MVS's 96-hour and 120-hour cuts, and `few-days` straddles RCH's 10-day red flag. This is the fact that decides duration scope — see decision 5. |
| 19 | Refusal to walk; severe abdominal pain | RCH gastro (2) — red flags | **partial** — **already collected by `tummy/acute-pain` item 5** | *"Does it hurt to walk, jump or cough"* is that packet's flagship, sourced from pARC's history variables. RCH's *"refusal to walk"* is a behaviour a carer observes and is not a re-sourcing of it; it is recorded here as an independent reason that item matters in *this* presentation. No new item. |
| 20 | Recent travel abroad; exposure to contaminated food or water; farm animal contact | NICE (1) — *"exposure to a known source of enteric infection (possibly contaminated water or food) and recent travel abroad"*; NHSGGC (5) — *"farm animal contact"*; RCH gastro (2) — *"Recent travel"* | **no — carer or record** | Two thirds of NICE's contact question, and the two thirds a child cannot supply. A child may know they were on a plane; they do not know whether the water was a known source of enteric infection, and this is what decides whether a stool sample is sent. Item 7 takes the third that is the child's. |
| 21 | Dehydration examination, every variable: general appearance / condition; level of responsiveness, irritability, lethargy, listlessness, decreased activity level; sunken eyes; dry or "sticky" mucous membranes; absent or decreased tears; skin turgor, skin pinch, skin elasticity; capillary refill time; peripheral pulse quality; heart rate and tachycardia; breathing pattern, tachypnoea, deep acidotic breathing; skin colour, pallor, mottling; extremity temperature; blood pressure and hypotension | CDS, WHO, Gorelick (6, 7); NICE Table 1 (1); RCH dehydration (4); RCH gastro (2); NHSGGC (5); IMCI (9) | **no — observer / exam** | **The backbone of every instrument in this literature, and the reason this packet is three items long.** Eleven of the twelve scale variables and every row of NICE's signs table sit here. Two of them are traps worth naming: *"tears"* invites "have you been crying?", which delegates the CDS to a 7-year-old and gets back an answer about how upset they are; and *"skin pinch"* invites "pinch your arm and tell me", which is an examination performed by the patient. Both are banned by regex. |
| 22 | NICE's red-flag **symptoms**: *"appears to be unwell or deteriorating"*; *"altered responsiveness (for example, irritable, lethargic)"* | NICE Table 1 (1); NHSGGC (5) | **no — observer** | Filed here rather than in item 21 because NICE calls them *symptoms* and files them in the half of Table 1 obtainable at *remote* assessment. That is a trap: the person on the phone is the parent. **Not one red-flag symptom in the anchor guideline is child-reportable**, and this row exists so that nobody downstream "completes" the packet by writing the obvious question. |
| 23 | Weight; pre-morbid weight; percentage weight loss; serial weights; under-nutrition / low weight-for-height; slow weight gain; poor growth | NICE (1); NHSGGC (5) — *"The most reliable measure of dehydration in children is weight loss"*; RCH dehydration (4) — *"Serial weights are the best measure of acute changes in fluid status"*; RCH gastro (2); RCH vomiting (3) | **no — measurement** | The reference standard for the whole literature, and a set of scales. Recorded so it is visible that the app's report omits the single most reliable measure in the complaint. |
| 24 | Abdominal examination: generalised and focal tenderness; guarding; distension; rebound tenderness; bowel sounds; signs of peritonitis | NICE (1); RCH gastro (2); RCH vomiting (3); NHSGGC (5) | **no — exam** | Never ask a child to press on their own tummy — `tummy/acute-pain`'s caution, carried unchanged and re-banned here because this packet's candidates are screened against this packet's list. |
| 25 | Physician gestalt | source 7 | **no — clinician judgement** | Tested head-to-head with the three scales and reached AUC 0.61, not statistically different from chance. Recorded because it is the clearest evidence in the packet that this complaint is hard to judge *even for the person in the room*, which is context for how much weight a child's answer can bear. |
| 26 | Bilious (green) vomit as a classification; mucus in stool; watery vs loose stool consistency; volume of vomit and stool | NICE (1); RCH (2, 3); NHSGGC (5) | **no — classification** | *"Bilious"* is a judgement about a colour, not a colour. Item 12 keeps the child's half (what it looked like) deferred to a widget; the classification stays the clinician's. |
| 27 | Laboratory and imaging: electrolytes, sodium, blood glucose, ketones, stool virology and bacteriology, blood cultures, hypo/hypernatraemia assessment | NICE (1); RCH (2, 3, 4); NHSGGC (5) | **no — lab** | |
| 28 | Age under 1 year and under 6 months; low birth weight; stopped breastfeeding during the illness; bulging fontanelle; inconsolability; milk feeds; nappy-based urine assessment | NICE (1); NHSGGC (5); RCH (2, 3) | **no — out of scope by age** | The largest single block of criteria in the anchor guideline, and every one of them is about a child below this app's floor. See "Read this first". |
| 29 | Past gastrointestinal or surgical history; complex medical history; post organ transplant; immunocompromised; representation or failure to respond; recurrent presentations; fortification of feeds; history of previous GIT obstruction or surgery | RCH gastro (2); RCH vomiting (3) | **no — carer or record** | Not the child's to report, and the record already holds it. |
| 30 | Pregnancy; sexual activity; induced vomiting, purging and signs of disordered eating; drug use, alcohol, cannabis hyperemesis; toxidromes | RCH vomiting (3) | **no — out of scope by age, and deliberately** | Every one is scoped by source 3 to an older patient. The app stops at 12. Recorded as a decision, not an omission: a screen that asks an unsupervised child on a shared hospital tablet about purging or drug use is a safeguarding failure before it is a clinical one. Same conclusion as `tummy/acute-pain`'s menstruation exclusion. |
| 31 | Inflicted injury / non-accidental injury | RCH vomiting (3) — *"Intracranial causes, including raised intracranial pressure (ICP) and inflicted injury, should always be considered"*; *"History of head injury/concern for NAI → Intracranial bleed"* | **no — see below** | Deliberate exclusion, recorded as a decision, and reached for the fourth time in this project by a fourth route. See "Inflicted injury". |
| 32 | Max number of diarrhoeal stools in 24 hours | NICE (1) — *"more than five diarrhoeal stools in the previous 24 hours"*; NHSGGC (5); MVS (8) — bands 1-3 / 4-5 / ≥ 6 | **yes, and not proposed for v1** | The exact counterpart of item 5, equally well sourced, and **deliberately not asked.** See "Toileting and dignity". Kept in the table so its absence is a decision. |
| 33 | Early-morning vomiting as a pattern | RCH vomiting (3) — *"Early morning vomiting and headache may be due to raised ICP"* | **partial** — **not proposed** | One source, and the criterion is a *pattern over days or weeks*, not an event. `DURATIONS` records when it started, not when in the day it happens, and a repeating early-morning pattern lives in the `long-time` band, which this packet is out of scope for (decision 5). Dropped honestly rather than converted into "did you throw up when you woke up?", which would be a different and unsourced question. |
| 34 | Number of episodes of previous illness; recurrence | RCH gastro (2) — *"Recurrent presentations for similar symptoms"* | **partial** — **already collected** | The reserved `happened-before` question gets the fact of recurrence. It cannot get a count, and no source here gives a recurrence threshold anyway. |
| 35 | Future healthcare visit; treatment given (IV rehydration, hospitalisation); return to school 48 hours after the last episode | MVS (8); NHSGGC (5) | **no — not assessment** | The MVS's last two variables are *outcomes*, scored after the fact; NHSGGC's 48-hour rule is discharge advice. Recorded so that a future run does not mistake the MVS for a seven-variable assessment instrument: it is a five-variable one with two outcomes attached. |

**Yield: ~70 distinct criteria across 3 dehydration scales, 1 severity score and
5 guidelines → 3 clean, 4 partial, 45 excluded, 18 already collected by
`tummy/acute-pain` or elsewhere in the app.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
clean (30%); sore throat ~53 → 12 clean (23%); limb pain — eight named
prediction rules → **1** clean; vomiting and diarrhoea ~70 → **3 clean (4%)**.

**This is the lowest proportion in the project, from the largest criteria set in
the project, and the cause is structural rather than a shortfall in searching.**
Three separate literatures converged here — dehydration scales, a severity
score, and complaint-organised guidelines — and:

- the **scales** are twelve variables of which eleven are examination;
- the **severity score** is five variables of which four are counts a parent
  produced by telephone about a toddler;
- the **guidelines** assess a child mostly by looking at them, and the anchor's
  own red-flag *symptoms* are observer judgements.

A self-report app arrives at this complaint after everything useful has already
been assigned to somebody with hands and eyes on the child. Recording that is
more valuable than inventing child-answerable versions of skin turgor, and the
limb packet is the precedent for saying so.

## Toileting and dignity — the ruling

This is a hospital, the child is 4–12, they may be answering on a tablet in a
bay with other people in it, and half of this complaint is about their bowels.
The ruling is explicit so that nothing downstream improvises it.

**What may be asked.** Exactly two facts about stool, both already shipped by
`tummy/acute-pain` and both binary:

- **whether the poop has been runny** (item 9), and
- **whether there was blood in it** (item 10).

Nothing else. That is the ceiling, and this packet adds no third stool question
despite having five sources for one.

**What may never be asked, and why.**

- **How many times.** Item 32 is as well sourced as item 5 — NICE, NHSGGC and
  the MVS all count stools — and it is still not asked. Counting trips to the
  toilet is not a neutral question to a child of this age; it invites them to
  account for something they may already be embarrassed about, and a parent has
  the number. Item 5 (counting vomits) is asked because vomiting carries no
  comparable shame and because a child who threw up in a bowl in front of a
  nurse has nothing to conceal. **This is the whole distinction, and it is why
  the two counting items are ruled differently despite identical provenance.**
- **Anything about continence.** No "accident", no "did you make it to the
  toilet", no "did you wet yourself", no soiling, no underwear, no "mess". A
  child who has soiled themselves and is asked about it says no — so the
  question is both a dignity failure and a broken question, and the second
  reason matters because a reviewer might otherwise think the first could be
  softened by wording.
- **Anything about the apparatus.** No nappy, no diaper, no pull-up, no potty,
  no bedpan. NHSGGC's own instruction is *"Older children should be instructed
  to use bedpans so that stools and urine can be measured"* — that is a nursing
  instruction to a nurse and must never become a question to a child.
- **Anything asking the child to look at or describe what came out of them**
  beyond the two binary facts. No colour, no consistency word beyond "runny", no
  smell, no volume.
- **Anything that sounds like blame.** `tummy/acute-pain`'s caution — *"never
  make a bodily-function question sound like a fault or a test"* — applies with
  more force here than where it was written.

**Where the excluded facts belong.** The stool count is a NICE risk factor with
a numeric threshold, so it genuinely matters. It belongs on the nurse's surface,
from the parent, alongside the weight and the observation chart. Same conclusion
as `tummy/acute-pain`'s testicular-pain item and the head-injury packet's
non-accidental-injury exclusion: where a fact matters and the child's screen is
the wrong instrument, the answer is a nurse prompt, not a cleverer question.

## Inflicted injury — a deliberate exclusion

Source 3's second key point is that in a vomiting child *"Intracranial causes,
including raised intracranial pressure (ICP) and **inflicted injury**, should
always be considered"*, and its differential table lists *"History of head
injury/concern for NAI → Intracranial bleed"*.

**This app must never ask a child about it.** Same decision and same reasoning
as the head-injury packet's non-accidental-injury exclusion, the tummy pain
packet's abuse exclusion and the sore-throat packet's ARF exclusion: a child
reporting symptoms unsupervised on a tablet is a context where safeguarding
policy, not question design, is the correct instrument. Flagged for the clinical
reviewer, and recorded here so nobody downstream writes the obvious question.

It is worth noting that this is now the **fourth** packet to reach this
conclusion by a fourth route, and the fourth to record it as prose rather than
as a mechanism the app enforces. That pattern is itself something the reviewer
should look at.

## Wording cautions

Ban **concepts**, not phrasings. Every rule below is transcribed into
`meta.json`'s `bannedPhrases`; see decision 1.

- **Never name a condition or a cause.** Not gastroenteritis, gastro, stomach
  flu, food poisoning, a "tummy bug" or any bug, norovirus, rotavirus,
  dehydration or "dehydrated", meningitis, sepsis, obstruction,
  intussusception, appendicitis, diabetes, torsion, colitis. **"Dehydrated" is
  the one most likely to slip through** because it sounds like a plain word and
  is not: it is the classification this entire literature exists to make, and a
  child told they are dehydrated has been given a diagnosis by a tablet.
- **"Throw up" is the verb. Nothing else is.** This is the trap that shipped:
  **"being sick" / "was sick" / "might be sick" means *about to vomit* in
  British English and *coming down with something* in American English.** It
  survived in this app for weeks. The rule is therefore not "avoid 'being sick'"
  but **ban the word "sick" entirely in this packet's candidates**, in every
  form, including the natural-sounding "has anyone at home been sick?" for item
  7 — which must be "has anyone at home thrown up?" Also banned: the clinical
  register (vomit, vomiting, emesis, haematemesis, regurgitate) and the slang
  register (puke, barf, spew, chunder, hurl, boke). "Throw up" is already in use
  elsewhere in the app — `vocab.js` ships `threw-up`: *"Did you throw up?"* —
  and consistency with a question the child may have already answered is worth
  more than any individual phrasing.
- **"Runny poop" is the noun phrase. Nothing else is.** Not diarrhoea/diarrhea,
  not dysentery, not "loose stools", not "loose bowel movements", not "the
  runs", not bowel, stool, motion or "number two", and not "poo", which is
  British. `tummy/acute-pain` decision 1 already ruled **"poop"** and **"pee"**;
  this packet does not re-open it, it extends it. Also banned by the same
  ruling: "wee", "weeing", "urine", "urinate", "micturition".
- **Never ask a child to perform, feel for or report an examination sign.** No
  pinching skin, no pressing on the tummy, no feeling a pulse, no counting
  breaths, no looking at their own eyes or tongue in a mirror. The dehydration
  scales are eleven-twelfths examination and the temptation to reach one of them
  through a child is the strongest failure mode in this packet.
- **Never ask "have you been crying?" or about tears.** Absent tears is a CDS and
  Gorelick variable; asked of a child it returns an answer about how upset they
  are, and a nurse would read it as a hydration finding.
- **Never make a fluid question sound like an instruction or a fault.** Not "have
  you been drinking enough?", not "you need to drink more", not "why haven't you
  been drinking?". Item 1 asks what the child has *managed*, never what they
  *should* have done. Carried unchanged from `tummy/acute-pain`.
- **Never ask for a number, an exact count, or a count over a stated window.**
  Item 5 uses the `count` widget, whose buckets are *None / Once / A few /
  Lots*; the question must not say "in the last 24 hours", "a day", "exactly" or
  "write it down". Note that this ban must **not** catch "how many times have you
  thrown up today?", which is item 5's own natural wording — the regex bans the
  window and the exactness, not the question form.
- **Never say "fever"**, never ask for a temperature, never mention degrees or a
  thermometer. Five thresholds across four sources and the nurse holds the
  thermometer.
- **Never use British idiom.** Banned by project rule and re-banned here:
  "poorly", "off colour", "have you got", "torch", "plaster", "nappy", "wee".
  Three of the five sources are British or Australian and their phrasing is
  directly in the generator's path — NHSGGC writes *"pyrexia"*, RCH writes
  *"diarrhoea"*, NICE writes *"unwell"*.
- **Never use an observer's word about the child.** Not "unwell", "poorly",
  "lethargic", "listless", "floppy", "drowsy". These are item 21 and item 22
  delegated, and they are also words a child does not own.
- **Never name what happens next.** No drip, no IV, no tube up the nose, no
  nasogastric, no ORS or rehydration solution, no ondansetron, no needle, no
  admission, no staying overnight. NICE's management pathway ends in a
  nasogastric tube for the child who cannot keep fluid down, which is exactly
  the child item 1 is trying to find — telling them so in the question is
  frightening and would change the answer.
- **Never ask the child to relay what an adult said** ("did your mum say you were
  sick?"). That is the carer's report and it belongs on the carer's surface.
  Item 7 asks what the child *saw*, not what they were *told*.
- **Never frame the child as a source of infection.** No germs, no "catching it",
  no "did you give it to anyone". NICE's contact question runs the other way.
- **Never ask a child to rate or grade anything in words** — already banned
  globally, and the FPS-R screen has intensity.
- Avoid "serious", "dangerous", "bad", "severe" — already banned universally by
  `screen.mjs`. Note also that `screen.mjs` universally rejects `a lot`,
  `really` and `very` as embedded intensity, which rules out the most natural
  phrasing of item 2 ("are you really thirsty?"); the shipped wording must be
  plain.

## How these were found

Search A was run as the brief specifies: a comparison-and-validation search, not
a remembered rule name. It worked, and it worked *differently* from the previous
packets. Source 6 and source 7 are two independent head-to-head comparisons that
between them enumerate three named scales and a physician-gestalt comparator,
reproduce all three in full, and test them against a weight-change reference
standard on two continents. Recall would have produced "the Gorelick scale" and
stopped; it would not have produced the CDS, and it certainly would not have
produced the finding that the WHO scale — the one this project would most likely
have assumed was authoritative — was not statistically different from chance in
either study.

A second Search A pass on *severity* rather than *dehydration* found the
Modified Vesikari Score, which is a different kind of instrument again and the
only one made of history. That pass was worth running: a search that stops at
"dehydration scales" returns twelve examination variables and nothing else, and
would have produced a packet with **one** item.

Search B produced everything else. And the gap between the searches is a third
distinct shape, alongside the tummy packet's prevalence gap and the sore-throat
packet's purpose gap:

- **The tummy packet's gap was prevalence.** Twelve rules aimed at 8% of the
  arrivals; the guideline covered the other 92%.
- **The sore-throat packet's gap was purpose.** Ten scores answered "does this
  child need an antibiotic?" and none answered "is this airway in trouble?"
- **This packet's gap is *modality*.** The scales and the guidelines are asking
  the *same* question — how dry is this child — and they agree almost completely
  on the answer. There is no disagreement to exploit and no blind spot to find.
  What Search B added was not different content but a different *kind* of
  access: RCH's *"They may have increased thirst and/or reduced urine output"*
  and NICE's parent-facing *"decreased urine output"* are the only two sentences
  in seventy criteria that describe dehydration from the inside. **Both of this
  packet's non-flagship items come from those two sentences.**

For the next packet: when Search A and Search B agree, the yield does not come
from the gap between them. It comes from finding the rare sentence in either one
that describes the illness from the patient's point of view — and in this
literature there were two.

## Decisions

**Decided, not deferred.**

1. **Register: US English, extending `tummy/acute-pain` decision 1 rather than
   re-opening it.** That packet ruled **"throw up"**, **"poop"**, **"pee"**;
   `vocab.js` already ships *"Did you throw up?"*. This packet adds the rulings
   that domain did not need:
   - **"throw up"** — and **"sick" is banned outright, in every form.** It is
     ambiguous between British and American English in the two directions that
     matter most for a packet about vomiting, and it shipped undetected for
     weeks. Not "be sick", "being sick", "was sick", "might be sick", "feel
     sick", "sickie". Not the clinical register either (vomit, vomiting,
     emesis, haematemesis, regurgitate), and not the slang (puke, barf, spew,
     chunder, hurl, boke).
   - **"runny poop"** — not diarrhoea/diarrhea, dysentery, "loose stools",
     "loose bowel movements", "the runs", bowel, stool, motion, "number two",
     or "poo".
   - **"pee"** — not wee, weeing, urine, urinate, micturition. And never a
     container: no nappy, diaper, pull-up, potty or bedpan.
   - **"a drink"** and **"keep it down"** — not "fluids", not "oral intake",
     not "hydration", not "ORS", not "rehydration solution".
   - **"thirsty"** — not "dry mouth", not "parched", and never "dehydrated".
   - **"your tummy"** — carried from `tummy/acute-pain`'s review decision;
     never "stomach", "abdomen", "belly" or "gut".
   - **Never "poorly", "off colour", "have you got", "torch", "plaster"** —
     project-wide bans, and three of the five guidelines here are written in
     exactly that register.

   **Every rule in this list, and every rule in "Wording cautions", is
   transcribed into `bannedPhrases` in `meta.json`.** On 2026-09-07 five packets
   were found to have a register ruling that lived only in prose, where the
   mechanical screen could not see it. This packet's `bannedPhrases` has 24
   rules and each carries a `why` string naming the decision it enforces.
2. **Answer types.** `FollowUpScreen` renders `yesno`, `count`, `text` and
   `voice`; `PENDING_WIDGETS` is empty. So: items **1, 2, 3, 4, 6, 7 are
   yes/no**, and **item 5 is `count`**. Item 5 is the first item in this group to
   use the count widget, and it is used deliberately: a yes/no would throw away
   the only source threshold the app can reach. Item 12 (vomit colour) needs a
   widget that still does not exist and stays deferred in `tummy/acute-pain`.
3. **Item 1 asks what the child managed, not what they drank.** "Have you been
   able to keep a drink down?" — never "have you been drinking?", which a child
   answers about intention, and never "have you been drinking enough?", which is
   an accusation. The distinction is the same one `tummy/acute-pain` drew
   between `HELPS` ("what the child wants") and its items ("what is true"), and
   it is the distinction NICE itself draws when it separates *"refuses to drink
   the ORS solution"* from *"unable to drink it"*.
4. **Item 3 is anchored to a window the child can see, not to "usual".** "Have
   you needed a pee since you got here?" beats "are you peeing less than usual?"
   for three reasons: a 4-year-old cannot construct their own baseline; "than
   usual" is the kind of comparison the limb packet banned outright when it
   forbade comparing two limbs; and the nurse knows the arrival time and can do
   the arithmetic. The raw fact is the child's; the comparison is the nurse's.
   **This is also why item 3 carries no age floor** — see decision 8.
5. **Duration scope.** The sources:

   | Source | Window |
   |--------|--------|
   | NICE (1) | *"vomiting usually lasts for 1–2 days, and in most it stops within 3 days"* |
   | NICE (1) | *"diarrhoea usually lasts for 5–7 days, and in most it stops within 2 weeks"* |
   | NICE (1), NHSGGC (5) | risk factors counted over *"the previous 24 hours"* |
   | MVS (8) | diarrhoea bands at 96 h and 120 h; vomiting bands at 24 h and 48 h; cohort entry *"fewer than 7 days of AGE symptoms"* |
   | NICE (1) | *"the diarrhoea has not improved by day 7"* → send a stool sample |
   | RCH gastro (2) | *"Diarrhoea for >10 days"* is a **red flag** |
   | IMCI (9) | *"diarrhoea 14 days or more"* → **PERSISTENT DIARRHOEA**, a different classification |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
     Inside every source's acute window. `few-days` straddles NICE's day-7
     stool-sample line and sits below RCH's 10-day red flag, and narrowing it
     would silently pick one source's cut.
   - `not-sure` — **full packet.** Same convention as every other packet:
     `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **items 1, 2 and 3 only** (keeping drinks down, thirst,
     peeing less). Everything else is out of scope, because at two weeks this is
     no longer this packet's complaint: IMCI reclassifies it as persistent
     diarrhoea, RCH flags it red, NICE's expected course has expired, and the
     literature that takes over — coeliac disease, inflammatory bowel disease,
     chronic infection — **was not searched by this run and is not cited
     anywhere in this packet.** The three that survive are the three dehydration
     items, and they survive on source 4's authority rather than the anchor's:
     *"Dehydration can occur with many childhood illnesses"*, so the fluid
     questions are not scoped to gastroenteritis at all. A child who has been
     losing fluid for three weeks needs those three answered more, not less.

     **This is a middle position between the two previous packets and it is
     deliberate.** `tummy/acute-pain` kept one item in `long-time` (its
     trajectory question); `throat/sore-throat` inverted the shape and kept its
     eight red flags while dropping the score variables. Here the survivors are
     neither the red flags nor the trajectory but the three items whose *source*
     is not scoped to the acute complaint.
   - **One item is also excluded from the *earliest* band.** Item 3 drops
     `just-now`: a child whose symptoms began minutes ago cannot yet have
     reduced urine output, NICE's own risk window is 24 hours, and a "yes" in
     that band would be noise a nurse could not interpret. This is the same
     shape of exception `limb/injury` made for its item 12.
6. **No new trajectory item, and the reason is redundancy within a group rather
   than the project's cross-region rule.** The project's rule is that
   region-specific trajectory questions stay separate rather than being merged
   into one shared fact — `head` item 2 and `tummy/acute-pain` item 7 coexist
   for exactly that reason. But `tummy/acute-pain` item 7 serves group `tummy`
   at `depth: inside`, which is **this packet's own group and depth**, so its
   trajectory question is already in this child's queue. A second one would not
   be a separate region's trajectory question; it would be a duplicate inside
   one group, competing for the same three slots. IMCI's *"Are there fewer
   stools? … Is the child eating better?"* is recorded in the items table as
   evidence that guidelines do ask this in plain words, and it is not converted
   into an item. Recorded so the omission is visibly a decision.
7. **Item 4 (bright lights) and item 6 (hard to turn your head) must carry the
   `fact` tags already in use, not new ones.** `light-hurts` ships for group
   `head`; the sore-throat packet's item 9 ships the neck question for group
   `throat`. `keyOf` dedupes on `fact`, so a child who taps Head and Tummy, or
   Throat and Tummy, must be asked each once. Getting this wrong asks a
   frightened child the same question twice under two ids — the failure
   `vocab.js`'s own comment records for `tummy-rash` / `chest-rash` /
   `back-rash`. Note the consequence the comment also records: whichever queue
   reaches the fact first supplies the wording and takes the citation, so a
   nurse reading the report must not conclude the question was asked only from
   the region named.
8. **Age floors: one, and it is judgement.** No source floors any item, and the
   usual reason — "the rule was derived at 5+" — does not exist here because
   every instrument was derived *below* 5 (see "Scope"). Inventing a validity
   floor from that would be backwards.

   **Item 5 (how many times have you thrown up) carries `minAge: 7`**, marked
   **JUDGEMENT, NOT A CITATION** in `minAgeNotes`. A 4- to 6-year-old asked to
   aggregate a count across a day will answer the shape of the question rather
   than the fact, the same reasoning `tummy/acute-pain` applied to its item 8
   and `throat/sore-throat` to its item 7. Every other item carries **no
   floor**: item 3 is anchored to a concrete window rather than a baseline
   (decision 4), items 1, 2, 4 and 6 are single concrete facts, and source 10
   shows 9–13 year olds self-reporting vomiting and diarrhoea with
   substantial-to-almost-perfect parent agreement. Source 10 says nothing about
   4- to 8-year-olds and this packet does not pretend otherwise — see "Still
   open".
9. **Item priority, and one question per item.** Seven askable items compete for
   three bank slots (`followUpsForGroups` caps at three plus the reserved
   `happened-before`), **and they compete against `tummy/acute-pain`'s fourteen
   in the same queue**, which no previous packet has had to do. Never ask two
   questions from the same item. Order:

   `1 (keep a drink down) → 2 (thirsty) → 3 (peeing less) →`
   `4 (bright lights) → 5 (how many times) → 6 (turn your head) →`
   `7 (anyone at home)`

   Item 1 leads because it is the discharge criterion in two guidelines, the
   observation criterion in a third and the nasogastric-tube trigger in the
   anchor — the one answer here that changes what happens today. Item 2 is
   second because it is the only subjective symptom in twelve scale variables,
   and it is second rather than first because the scale that carries it did not
   reach significance in either external validation and because its "no" is not
   reassuring. Item 3 is third on the strength of NICE's parent-facing list.
   **Item 4 is fourth, above the far better-sourced item 5**, on the
   sore-throat principle that a red flag outranks a well-cited variable the
   nurse will obtain anyway: the nurse will get the vomit count from the parent,
   and nobody but the child can say that the lights hurt. Item 7 is last: it
   supports a diagnosis and changes nothing. **Proposed, not yet confirmed by
   review.**
10. **Item 7 (household contact) is included, and this contradicts
    `throat/sore-throat` item 30 on purpose.** That packet excluded *"infectious
    contacts"* inside a block — *"Immunisation status (HiB); immunosuppression;
    infectious contacts; household crowding"* — and the block as a whole is
    plainly a carer's and a record's. The exclusion was right for that packet
    and is wrong here, for two reasons. First, position in the source: contact
    history is one of only **three** things NICE tells a clinician to ask when
    gastroenteritis is suspected, and it is first. Second, what the child
    actually witnessed: "has anyone at home thrown up too?" is answered from a
    child's own memory of an event in their own house, unlike immunisation
    status or household crowding, which are facts *about* the child held by an
    adult. It is marked **partial** because a child's "no" is much weaker than a
    parent's and because the other two thirds of NICE's question (contaminated
    food or water, recent travel) stay excluded as item 20. Recorded explicitly
    so that the two packets' disagreement is a decision a reviewer can overturn
    in one place, not a drift.
11. **The honest yield is three clean items and the packet says so rather than
    padding.** Every rejected near-miss is in the items table with its source and
    its reason: tears (item 21), skin pinch (item 21), "appears unwell" (item
    22), stool count (item 32), early-morning vomiting (item 33). Each of those
    could have been turned into a plausible-looking child question, and each
    would have been a question citing an observer sign — the exact failure the
    packet process exists to prevent. The limb packet's finding is the precedent
    and this packet reproduces it at larger scale: **a bigger literature can
    produce a smaller askable set, and which literature it is matters more than
    how much of it there is.**
12. **Redundancy against `tummy/acute-pain` and against what the app already
    collects.** This packet shares a group *and* a depth with an existing
    fourteen-item packet, which no previous packet has done, so this was checked
    item by item before anything was written.
    - **Re-used by reference, not re-written — eleven items.** Items 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17 and 19 above map onto `tummy/acute-pain` items
      1, 9, 11, 16, 17, 7, 18, 19, 14, 12/body-map/FPS-R/`SENSATIONS`, and 5.
      **None is re-derived and none generates a candidate here.** `keyOf` dedupes
      on `fact`, so a second question for `vomiting` or `hard-to-breathe` would
      be generated, screened, shipped and then silently dropped at runtime —
      wasted work that also corrupts the evidence report, because the losing
      question's citation disappears with it.
    - **Rejected as duplicates of the app's own screens:** item 17 in full (body
      map, FPS-R, `SENSATIONS.cramping`, `SENSATIONS.queasy`), item 18
      (`DURATIONS`), item 34 (`happened-before`).
    - **What this packet adds that `tummy/acute-pain` does not have:** the three
      fluid and urine items (1, 2, 3), which that packet has no equivalent of in
      either direction — its item 14 asks about *more* drinking and peeing, and
      nothing in it asks whether the child can keep a drink down; the two
      intracranial red flags (4, 6), which that packet's appendicitis-shaped
      literature contains no trace of; the vomit count (5), which that packet
      explicitly declined as a count — *"Asked yes/no, not a count — no source
      here uses a count threshold, unlike CHALICE for head injury"* — and which
      **this** packet's sources do give a threshold for; and the contact history
      (7). Seven items, none of them a rewording of an existing one.
    - **Kept despite surface overlap:** item 1 touches `HELPS.water` ("A drink of
      water"). `HELPS` records what the child *wants*; item 1 records what they
      have *managed*. Different facts, and the gap between them is the item.
    - **Conditional, and it needs a reviewer:** items 4 and 6 duplicate facts
      owned by other groups (`head`/`light-hurts`, `throat`'s neck question).
      Decision 7 handles it by sharing the `fact`; the reviewer should confirm
      that the *wording* the tummy queue would supply is acceptable when the
      child never tapped their head or throat.

## Still open

- **Group `tummy` contains `bottom`.** `tummy/acute-pain` logged this and its
  consequence was appendicitis questions reaching the wrong region. Here the
  consequence is worse: the bank filters by group, so a child who taps **Bottom**
  and "inside" is served a packet about diarrhoea. Given the toileting-dignity
  ruling, this should be treated as **blocking** for this packet in a way it was
  not for the previous one. Either `bottom` gets its own group or the bank needs
  a region-level exclusion.
- **The vomit-colour widget (item 12).** Deferred by `tummy/acute-pain` for want
  of a neutral colour picker. This packet found a guideline that recommends the
  instrument in its own words — source 3: *"Using a visual aid to clarify
  vomitus colour with families is helpful"* — and two guidelines that make green
  vomit a surgical referral. That is now the best-evidenced missing feature in
  the app. It is a cross-packet request and is not re-derived here.
- **Nothing in this packet was derived or validated above age 5.** The app's
  population is 4–12 and its median user is nowhere near 5. A clinical reviewer
  should say plainly whether the dehydration reasoning behind items 1, 2 and 3
  transfers to a 10-year-old, because this packet cannot: every number in the
  sources comes from a cohort that ends before the app's population begins.
- **Source 10 covers girls aged 9–13 with chronic pain only.** There is no
  evidence here that a 4- to 8-year-old reports vomiting or stool changes
  reliably, no evidence about boys, and none about an ED. The `young` tier
  wording carries more risk than the `older` tier throughout this packet and
  should be reviewed as such.
- **The BARF scale could not be read.** It is the only published child
  self-report instrument for nausea the search surfaced and it is validated in
  the age range this app serves. Three routes returned HTTP 403. Nothing here
  depends on it; a future run should try harder, because it bears directly on
  whether this project should ever ask a child to *rate* a gut symptom rather
  than answer yes or no about one.
- **`fetch-source.mjs` has a cache-key collision** that silently returned the
  wrong document. See "Ambiguity"; it is a tooling bug, not a packet question,
  but it is the kind that produces a citation to a source nobody read.
- **Item 5 is the first `count` question in this group.** A reviewer should
  confirm that *None / Once / A few / Lots* reads sensibly to a child about
  throwing up, and that the report makes clear to the nurse that "a few" is the
  child's impression rather than a tally.
- **Inflicted injury (item 31).** Excluded on principle, for the fourth time in
  this project by a fourth route. A reviewer should confirm that the
  nurse-facing surface makes the safeguarding pathway visible, since four
  packets have now recorded the same exclusion in prose and none has produced a
  mechanism.

## Ambiguity in the sources

Recorded rather than papered over.

- **`scripts/fetch-source.mjs` returned the wrong cached document for source 5.**
  Requesting NHSGGC guideline **180** (acute gastroenteritis) returned
  `{"cached": true, "status": "cached"}` and the text of NHSGGC guideline **336**
  (acute sore throat), which the sore-throat packet had fetched. The cache
  filename is derived from a sanitised URL truncated to ~80 characters, and the
  two guidelines' URLs are identical for the first 80 characters. **Any two
  NHSGGC paediatric guidelines collide.** Source 5 was therefore fetched with
  `curl` and extracted separately to
  `packets/.sources/nhsggc-180-acute-gastroenteritis.txt`, following the
  precedent of `nhsggc-537-non-blanching-rash.txt` already in the cache. This is
  recorded here because a silent wrong-document return is precisely how a
  citation to an unread source gets written, and because the sore-throat packet
  cited an NHSGGC guideline through the same code path.
- **NHSGGC's Table 1 did not survive extraction.** Its heading, its explanatory
  note and the risk-factor list around it did; the table's cells did not, and
  the guideline itself marks its red flags by **text colour** (*"Symptoms and
  signs with red flags (text in red)"*), which no text extraction can carry.
  Nothing depends on it: NHSGGC names the table as *"adapted from NICE CG84"*
  and source 1's copy was read in full, including which rows carry a red flag.
- **The two reproductions of the Gorelick scale disagree in length.** Source 6's
  Table 2 lists ten characteristics; source 7's Table 3 lists eight, omitting
  heart rate and urine output. Source 6's is used here because it is the longer
  and because it is internally consistent with the scale's own name and scoring
  (*"10 point scale (all signs/symptoms): ≥ 3 Clinical Signs ≥5% BWΔ"*).
  **Item 3's citation depends on this**, since urine output is one of the two
  rows source 7 dropped — so item 3 cites source 6 for Gorelick and does not
  claim source 7 for it.
- **No original derivation paper was read.** Gorelick 1997, Friedman 2004 (CDS),
  the WHO scale's own documentation and Ruuska & Vesikari's original score are
  all known here only through sources 6, 7 and 8. Source 6 cites Friedman's
  development paper in its reference list; it was not fetched. Every scale
  quotation in this packet is therefore a secondary reproduction — accurately
  quoted, and cross-checked between two independent reproductions for the CDS
  and the WHO scale, which agree cell for cell. A reviewer should know that no
  item traces to a primary source.
- **NICE CG84 was published in 2009 and its "under 5s" scope is the guideline's
  own.** No update was found or looked for beyond the current NICE page, which
  still shows *"Published: 22 April 2009"*. The packet does not claim the
  guidance is current for an older child; it claims NICE says what it says.
- **NICE and NHSGGC state the same vomiting threshold in two forms** — *"more
  than twice"* and *"three or more times"* — which are the same boundary. They
  are quoted separately rather than merged, because a future run comparing the
  two guidelines should not have to trust this packet's arithmetic.
- **"Symptom" in NICE Table 1 does not mean "child-reportable".** Stated in the
  items table and repeated here because it is the single most consequential
  reading in this packet: NICE's symptoms/signs split is *remote vs face-to-face
  assessment*, and the person answering a remote assessment is an adult. Four
  invented items were available from misreading that one word.
- **Source 6's setting limits how far its negative result travels.** Its
  conclusion is scoped — *"when used by general physicians and nurses in a
  developing world setting"* — and its cohort reached age 15 while the scales it
  tested are for children under 5. Source 7 is the US validation and is the more
  transferable of the two; both are quoted, and neither is extended past what
  its authors claim.
- **Source 8's counts came from parents, by telephone, about toddlers.** The MVS
  is quoted for its *variables*, per the brief's instruction to harvest variables
  and ignore weights. Item 5 cites it for the variable and does not cite it for
  the proposition that a child can produce the number, because it does not
  support that.
