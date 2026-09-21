# Feeling unwell all over / fever

Presenting complaint · packet `general-unwell` · **cross-cutting: serves all
nine groups** (`head`, `throat`, `chest`, `tummy`, `limb`, `back`, `eyes`,
`ears`, `mouth`), **no depth scope** · packet v1 · assembled 2026-09-07
Status: **not yet clinically reviewed** · sources verified first-hand: 9 of 9

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
> who arrives feeling ill without being able to point anywhere in particular,
> and marks which of those a child can report about themselves. **Not** a
> diagnostic tool: nothing here may be scored, summed, or shown to a child or
> nurse as a suggested cause. The literature for this complaint is *serious
> bacterial infection* literature and exists to decide who is investigated and
> who gets an antibiotic; the packet is organised by the complaint the child
> arrives with, and no condition name reaches runtime.

## Read this before anything else — three limits stated up front

Brief §10 requires that a reader not have to reach page 40 to find the weakest
link. This packet has three, and all three are structural rather than
accidental.

**1. The primary anchor is written for children the app barely covers.** NICE
NG143 is *"Fever in under 5s: assessment and initial management"*. The app
covers **4–12**. Two of the app's nine years are inside NG143's range. WHO IMCI
is 2 months–5 years. Craig's cohort is under 5. Keitel's validation dataset is
2 months–10 years. The Thompson HTA review notes that most included studies
*"focused on the younger age groups"*. **Only the two RCH guidelines are written
without an upper age limit.** Nothing in this packet is floored on that basis —
see decision 7 — but a reviewer should know that the evidence behind these items
is densest at the bottom edge of the app's range and thins steadily above 5.

**2. The two strongest predictors in the entire literature belong to somebody
else.** The Thompson HTA meta-review found that *"the clinician's gut feeling
that something is wrong (LR+ 23)"* and *"Parental concern that the illness is
different from previous illnesses (LR+ 14) provide the strongest rule-in
value"*. Neither is a child's to report, and neither is obtainable by this app
in any form. Every item below is weaker than the two features this packet
cannot reach. That is not a defect in the search; it is what the field found.

**3. The single sentence that caps this packet is RCH's, and it is worth
quoting in full before any item is read:**

> *"The severity of illness cannot be predicted by the degree of fever, its
> rapidity of onset, its response to antipyretics or the presence of febrile
> seizures; **the appearance of the child is the most useful indicator**."*
> — RCH Febrile child (source 3), Key points

The most useful indicator for this complaint is how the child *looks* to
somebody else. A self-report app cannot see. Everything this packet collects is
adjunctive to an observation it cannot make, and the report must never be read
as a substitute for looking at the child.

## Scope

**This is a cross-cutting packet.** It does not serve a body region; it serves
the child who feels ill all over. `meta.groups` lists all nine groups, so its
questions are reachable from whichever region the child happens to tap.
`build-bank.mjs` reads `meta.groups ?? [meta.group]`; `meta.group` is set to
`"general"` as well, because build-bank uses `meta.group` for its coverage
report and a missing key there would read as an unserved group.

**This packet owns `feels-feverish` for the whole app.** Five shipped packets
currently ask a child whether they feel hot or shivery, each with its own
citation and its own wording: `l-007`/`l-008` (limb), `s-020` (throat), `c-023`
(chest), `e-019` (ears) and `t-019` (tummy). All five are ordinary,
correctly-sourced questions that happen to ask one systemic fact from five body
regions. **Item 1 of this packet is squarely about the child feeling hot, and
the generation stage must attach the shared fact `feels-feverish` to it**, at
which point `keyOf` in `vocab.js` suppresses the other five automatically
whenever this packet's question wins the slot. Do not delete the other five: the
dedupe is by fact, so whichever wording reaches the child first carries the
answer, and losing the region-anchored wordings would leave nothing if this
packet's candidate were ever rejected in review.

**Age.** App covers 4–12. **No item carries an age floor** — see decision 7,
and read it alongside limit 1 above, because the reason is not that the sources
support these items across 4–12 but that no source states a floor and inventing
one would be the invented citation the brief warns about.

**Depth.** **`meta.depth` is `null` and must stay null.** The nine groups this
packet serves do not share a gate: `throat`, `ears`, `eyes` and `mouth` are
`internal` and are never asked; `chest`, `tummy`, `limb` and `back` ask depth;
`head` asks mechanism. A packet that fires for all nine cannot name one gate
branch. Writing `"depth": "inside"` would silently suppress every question here
for a child who said "on my skin", and a child with a rash and a fever is
exactly the child NG143 cares most about. See decision 8.

**Out of scope by age or setting, and not carried:** everything about infants
and neonates, which is most of the volume of every source read — febrile
neonates ≤28 days, infants 29 days–3 months, bulging fontanelle, breastfeeding,
poor feeding in infants, weak high-pitched cry, temperature instability and
hypothermia, sunken fontanelle, nappies/diapers; malaria, malaria risk
stratification and malaria testing, which is the organising axis of the IMCI
fever module and of Keitel's validation setting; severe acute malnutrition,
MUAC, oedema and HIV status, which are IMCI/iCCM/ALMANACH danger signs written
for a different health system; antibiotic choice, dosing, investigation tiers
and every laboratory and imaging pathway, which is most of what these
guidelines are about; the febrile returned traveller and the endemic-exposure
tables in RCH Prolonged fever, which are a carer's and a record's history.

## Sources

1. **Keitel K, Kilowoko M, Kyungu E, Genton B, D'Acremont V.** "Performance of
   prediction rules and guidelines in detecting serious bacterial infections
   among Tanzanian febrile children." *BMC Infect Dis* 2019;19:769. **Read
   first-hand** via PMC6724300, in targeted windows. **This is the Search A
   discovery source.** Through a structured literature review it *"identified 34
   prediction rules/guidelines for the use in febrile children. Sixteen were
   designed to predict SBI at the outpatient level"*, and its Tables 1 and 2
   list each one's predictors — which is what makes it usable here. **Its
   limits matter and are stated in "Ambiguity":** it is a retrospective external
   validation on a Tanzanian outpatient dataset (children 2 months–10 years,
   axillary temperature ≥38 °C, enrolled 2008), so its *performance* figures do
   not transfer to a school or hospital in a high-income setting. The
   *enumeration* of rules and their variables does.
2. **NICE guideline NG143, "Fever in under 5s: assessment and initial
   management"**, published 7 November 2019, last updated 26 November 2021.
   **Read first-hand** — the *Recommendations* chapter, including table 2 (the
   traffic light system), table 3 (symptoms and signs suggestive of specific
   diseases) and section 1.7 (advice for home care). The packet's primary
   anchor, and the source of most of its excluded rows.
3. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Febrile child"**, PIC Endorsed. **Read first-hand.** The primary
   complaint-organised source, and the only one read that is written without an
   upper age limit. Its "Features suggestive of an unwell child" list is
   *"Adapted from: Feverish illness in children NICE guideline 2019"*, which is
   a dependency worth knowing: sources 2 and 3 are not independent.
4. **WHO, "Integrated Management of Childhood Illness: chart booklet"**
   (`cdn.who.int`, present in the shared `packets/.sources/` cache). **Read
   first-hand**, in targeted windows. Supplies the general danger signs, the
   fever module's definition of fever, and the WHEN TO RETURN IMMEDIATELY list —
   a red-flag list written to be understood and acted on by a family with no
   clinical training. **Extraction caveat, recorded in "Ambiguity":** parts of
   this PDF extract as a shift-3 substitution cipher rather than as words, and
   two of the passages quoted below had to be decoded.
5. **Thompson M, Van den Bruel A, Verbakel J, Lakhanpaul M, Haj-Hassan T,
   Stevens R, Moll H, Buntinx F, Berger M, Aertgeerts B, Oostenbrink R, Mant
   D.** "Systematic Review and Validation of Prediction Rules for Identifying
   Children with Serious Infections in Emergency Departments and Urgent-Access
   Primary Care." *Health Technology Assessment* 2012;16(15). **Executive
   summary read first-hand** via NCBI Bookshelf NBK97761. **Only the executive
   summary** — the full report was not opened, and every figure quoted here is
   one the executive summary itself states. The second Search A source, and the
   one that gives likelihood ratios for individual clinical features rather than
   for whole rules.
6. **Craig JC, Williams GJ, Jones M, Codarini M, Macaskill P, Hayen A, Irwig L,
   Fitzgerald DA, Isaacs D, McCaskill M.** "The accuracy of clinical symptoms
   and signs for the diagnosis of serious bacterial infection in young febrile
   children: prospective cohort study of 15 781 febrile illnesses." *BMJ*
   2010;340:c1594. **Read first-hand** via the Europe PMC REST full text for
   PMC2857748 (`www.bmj.com` returned HTTP 403 and the PMC page returned a bot
   wall; the REST endpoint succeeded). 15,781 febrile illnesses in children
   under 5 at The Children's Hospital at Westmead, with *"mandatory entry of 40
   symptoms and signs for all children presenting with febrile illness"*. This
   is the "AUS fever model" of Keitel's Table 1, read at first hand rather than
   at one remove.
7. **Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Prolonged fever"**. **Read first-hand.** Reached from source 3's own "See
   also" line. Supplies the >7-day definition and the *"Resolved or transient
   symptoms"* history line, which is the second source read that instructs a
   clinician to ask about features that have already gone away.
8. **Tomlinson D, Hyslop S, Stein E, Spiegler B, Vettese E, Kuczynski S, Schechter
   T, Dupuis LL, Sung L.** "Development of mini-SSPedi for children 4–7 years of
   age receiving cancer treatments." *BMC Cancer* 2019;19:32. **Read first-hand**
   via PMC6325666. The self-report evidence: cognitive interviewing with children
   **aged 4–7**, iterated until *"Among the last 10 children enrolled, all
   understood each mini-SSPedi item and none thought mini-SSPedi was hard to
   complete."* **Limits worth knowing:** a paediatric oncology and HSCT
   population, not an acute febrile presentation; a symptom-*bothersomeness*
   instrument, not a diagnostic one; it contains no item about feeling hot; and
   the conclusion it supports is about understandability and completion, with
   psychometric properties left to *"future work"*. It supports "a child of 4–7
   can answer a structured symptom question about themselves"; it validates
   nothing about the specific questions in this packet.
9. **Sadeghi E.** "Febrile Child and Fever without Focus." *Iran J Med Sci*
   2023;48(3):352–354 (letter). **Read first-hand** via PMC10542925. Used for
   one thing only — the proportion of fever-without-focus that turns out to be
   self-limiting — and its limits are severe: a single-centre Iranian referral
   population, 270 children followed out of 4,201 febrile children, a letter
   rather than a full paper, and roughly 85% of its cases were under 5.

**Attempted and not used.**

- **`www.bmj.com/content/340/bmj.c1594`** — **HTTP 403, not read from there.**
  The same paper was then read in full via Europe PMC (source 6), so nothing
  depends on the failed fetch. Recorded because a future run should go straight
  to the Europe PMC REST endpoint for BMJ content.
- **`pmc.ncbi.nlm.nih.gov/articles/PMC2857748/`** — **bot wall (HTTP 200), not
  read.** Same paper, same resolution.
- **NICE NG51, "Suspected sepsis: recognition, diagnosis and early
  management"** — **not fetched, not read, and not cited anywhere in this
  packet.** NG143 recommendation 1.2.2 points at it (*"Think 'Could this be
  sepsis?'"*), and RCH's Management section says *"Any febrile child who appears
  seriously unwell should be managed as suspected sepsis"*. So the guideline
  that governs the worst outcome of this complaint was not read. **Nothing in
  the items table depends on it**; the cost is that any child-reportable
  criterion unique to NG51 — its urine-output timing in particular — is missing
  from this packet. Named so the next run fetches it first.
- **The derivation papers for the rules in Keitel's Tables 1 and 2** — Yale
  Observation Scale (McCarthy), the five-stage decision tree (Van den Bruel),
  Bleeker, Thayyil, Lab Score (Galetto-Lacour), the SBI risk score (Brent), the
  Rotterdam Fever Model (Nijman), and the three pneumonia rules (Van den Bruel,
  Neuman, Bilkis). **None was fetched and none is cited as a source.** Where
  this packet names one it is quoting Keitel's table, and the `cite` entries in
  the sidecar say so. See "Ambiguity".
- **RCH "Petechiae and Purpura"** and **RCH "Sepsis – assessment and
  management"**, both linked from source 3's "See also" line — **not fetched.**
  The first is the natural home for item 12 (rash) and should be read by
  whoever builds `packets/skin/rash/`.

## The rule(s), as published

### Search A: the sixteen outpatient rules and guidelines (source 1)

Keitel's own account of the enumeration, verbatim:

> "Through the structured literature review, we identified 34 prediction
> rules/guidelines for the use in febrile children. Sixteen were designed to
> predict SBI at the outpatient level."

Table 1, verbatim predictor lists for the clinical and laboratory rules:

> **Yale Observation Scale** (0–24 m) — "Quality of Cry · Reaction to parents'
> stimulation · State Variation · Color · Hydration · Response to social
> overtures"
>
> **Five Stage Decision Tree** (0–16 y) — "Clinician instinct that something is
> wrong · Dyspnea · Temperature > 39.95 °C · Diarrhea · Age 15-25 m"
>
> **Bleeker** (0–36 m) — "Duration fever · H/o vomiting · Ill appearance · Chest
> wall retractions + tachypnea · Poor peripheral circulation · WBC · CRP · Urine
> WBC"
>
> **Thayyil** (1–36 m) — "PCT · CRP · WBC"
>
> **Lab Score** (7 d–36 m) — "PCT · CRP · Urine Dipstick"
>
> **AUS fever model** (0–5 y) — "General appearance, cough, temperature,
> breathing difficulty, abnormal chest sounds, chronic disease, capillary refill
> time, urinary symptoms, respiratory rate, chest crackles, pneumococcal
> vaccine, heart rate, **felt hot**, meningococcal vaccine, infectious contacts,
> crying, fluid intake, respiratory symptoms, diarrhea, bulging fontanel, male,
> focal bacterial infection, abnormal ear, nose, and throat signs, age rash,
> stridor, wheeze"
>
> **SBI risk score** (1 m–15 y) — "Developmental delay · Infection risk factor ·
> State variation · T (°C) · CRT · Hydration · Tachypnea · Hypoxia"
>
> **Rotterdam Fever model** (1 m–16 y) — "Age < 1, Sex, Duration of Fever,
> Height of Fever, Tachypnea, Tachycardia, SaO2 < 94%, CRT > 3 s, Chest Wall
> retraction, Ill-appearance, CRP"
>
> **Pneumonia Rule n°1** (0–16 y) — "Parental concern illness is different ·
> Shortness of breath"
>
> **Pneumonia Rule n°2** (0–21 y) — "SaO2 · Triage T · Wheeze · Decreased breath
> sounds · Focal rales · Chest pain · History of fever"
>
> **Pneumonia Rule n°3** (1–16 y) — "Grunting · Cough · Rales · Decreased breath
> sound · Vomiting"

**Read that list for what a child could answer and it nearly empties.** Of the
eleven rules, one — the AUS fever model, which is source 6 read at first hand —
contains more than a couple of child-reportable variables. The other ten are
built from cry quality, colour, capillary refill, respiratory rate, oxygen
saturation, auscultation findings, blood counts and inflammatory markers.
**Two of the eleven rules consist entirely of laboratory tests.** This is the
febrile-illness equivalent of sore throat's "four of the five most frequent
predictors are examination", and it is the reason this packet's yield comes
almost entirely from Search B.

### Search A: the same source's guidelines (source 1, Table 2)

> **IMCI** (2 m–5 y) — Danger signs: "Lethargic or unconscious · h/o convulsions
> or currently seizing · stiff neck · Vomits everything · Unable to drink/
> breastfeed · Severe malnutrition AND medical complications OR feeding issue ·
> Severe dehydration (Two of the following) — Lethargic or unconscious — Sunken
> eyes — Not able to drink or drinking poorly — Reduced skin turgor · Stridor in
> a calm child · SaO2 < 90% on RA · Chest indrawing and HIV positive · Tender
> swelling behind ear · Severe palmar pallor · Severe complicated measles".
> Indications for antibiotic treatment: "Uncomplicated severe malnutrition ·
> Cough and tachypnea and/or chest indrawing after trial of bronchodilator ·
> Ear pain or ear discharge < 14 days · Blood in stool"
>
> **iCCM** (2 m–5 y) — Danger signs: "Lethargic or unconscious · h/o convulsions
> or currently seizing · Vomits everything · Unable to drink/breastfeed · Severe
> malnutrition · Chest indrawing · HIV positive · Blood in stool"
>
> **ALMANACH** (2 m–5 y) — as IMCI, plus antibiotic indications "Cough and
> RR > 50/min · Acute ear discharge · Blood in stool · Urine dipstick (Positive
> leucocyte or nitrite) · Abdominal tenderness"
>
> **American Academy of Emergency Physicians** (3–36 m) — "Ill appearing ·
> Positive chest radiography · Positive urine leucocyte + nitrite · T ≥ 39 °C
> and WBC > 15 K/mm³"

And Keitel's own note on why NICE is in a table of guidelines rather than of
rules, verbatim:

> "The NICE guideline is intended to predict 'serious disease' among children
> with acute febrile illness, and not to indicate antibiotic treatment. However,
> given that it was the only guideline designed for the use by healthcare
> professionals in primary care with various levels of training, we decided to
> include it in the validation exercise."

### Search A: individual clinical features and their likelihood ratios (source 5)

The Thompson HTA executive summary, verbatim, on the diagnostic value of
clinical features:

> "Parental concern that the illness is different from previous illnesses
> (LR+ 14) and the clinician's gut feeling that something is wrong (LR+ 23)
> provide the strongest rule-in value, based on a single study from a
> low-prevalence setting. Change in the child's crying pattern, drowsiness,
> moaning and inconsolability all had a LR+ > 5.0 from this study. However,
> these features all provided weaker likelihood ratios (LRs) in intermediate- or
> high-prevalence settings. Fever (temperature > 38.5 °C) had some rule-out
> value in three studies and a modest rule-in value in one single study. In the
> five studies with higher prevalence, temperature provided no rule-in ability.
> Cyanosis had LRs+ ranging from 2.66 to 52.2, and poor peripheral circulation
> had LRs+ ranging from 2.39 to 38.8. Rapid breathing and shortness of breath
> provided the greatest LR+ in the single low-prevalence study (9.3 and 9.70).
> … Meningeal irritation, petechial rash, decreased consciousness and seizures
> had a LR+ > 5 in most of the studies which assessed these features. Loss of
> consciousness had a LR+ of 19.8–155."

And its verdict on the rules, verbatim:

> "We identified several clinical prediction rules for identifying children with
> serious infection, but only one (Yale Observation Scale) had any published
> validation studies."
>
> "Clearly, a single abnormal clinical finding is insufficient on its own to
> substantially lower the risk of serious infection. We identified several
> clinical features which were highly specific 'red flags'. When present, these
> should prompt a more thorough assessment. However, even in children with a
> serious infection, red flags will occur infrequently owing to their low
> sensitivity; therefore, their absence does not lower the risk of a serious
> infection."

**That last sentence is the most important methodological statement in this
packet.** A "no" to every question here lowers nothing. The app must never
present an all-negative report as reassurance, and the nurse-facing surface must
not be built to imply it does.

### Search A validation: the rules do not work (sources 1 and 5)

Source 1, verbatim:

> "Four prediction rules and five guidelines, including IMCI, could be
> validated. All examined rules and guidelines had insufficient diagnostic
> accuracy for ruling-in or ruling-out SBI with positive and negative likelihood
> ratios ranging from 1.04–1.87 to 0.47–0.92, respectively. IMCI had a
> sensitivity of 36.7% (95% CI 29.4–44.6%) at a specificity of 70.3%
> (67.1–73.4%)."
>
> "None of the examined prediction rules and guidelines had sufficient
> diagnostic accuracy to detect children with SBI in a tropical, low-resource
> setting."

Source 5, verbatim, on the Yale Observation Scale: *"After meta-analysis,
summary sensitivity was 32.5% … and specificity was 78.9%"*; and on the
five-stage decision tree in its own validation datasets, *"The five-stage
decision tree had no rule-in value in any of the data sets, but in four it
offered a marginally useful rule-out value (LR− 0.13–0.35)."*

Source 6, verbatim, on clinicians rather than on rules: *"Physicians' diagnoses
of bacterial infection had low sensitivity (10-50%) and high specificity
(90-100%)"*, concluding *"Emergency department physicians tend to underestimate
the likelihood of serious bacterial infection in young children with fever."*

**Same position as the sore-throat packet, reached by a different route: no item
here may be ranked highly *because* a score names it.** The scores this
literature produced do not perform, only one of them has ever been externally
validated in a published study, and the two features that do perform belong to a
clinician and a parent.

### Search B: the NICE traffic light system, verbatim (source 2, table 2)

> **Colour** — Green: "Normal colour". Amber: "Pallor reported by parent/carer".
> Red: "Pale, mottled, ashen or blue"
>
> **Activity** — Green: "Responds normally to social cues · Content or smiles ·
> Stays awake or awakens quickly · Strong normal cry or not crying". Amber: "Not
> responding normally to social cues · No smile · Wakes only with prolonged
> stimulation · Decreased activity". Red: "No response to social cues · Appears
> ill to a healthcare professional · Does not wake or if roused does not stay
> awake · Weak, high-pitched or continuous cry"
>
> **Respiratory** — Amber: "Nasal flaring · Tachypnoea: respiratory rate
> > 50 breaths per minute, age 6 to 12 months; > 40 breaths per minute, age more
> than 12 months · Oxygen saturation less than or equal to 95% in air · Crackles
> in the chest". Red: "Grunting · Tachypnoea: respiratory rate more than 60
> breaths per minute · Moderate or severe chest indrawing"
>
> **Circulation and hydration** — Green: "Normal skin and eyes · Moist mucous
> membranes". Amber: "Tachycardia … · Capillary refill time more than or equal
> to 3 seconds · Dry mucous membranes · Poor feeding in infants · Reduced urine
> output". Red: "Reduced skin turgor"
>
> **Other** — Green: "None of the amber or red symptoms or signs". Amber: "Age 3
> to 6 months, temperature more than or equal to 39 °C · Fever for more than or
> equal to 5 days · **Rigors** · Swelling of a limb or joint · Non-weight bearing
> limb or not using an extremity". Red: "Age less than 3 months, temperature
> more than or equal to 38 °C · Non-blanching rash · Bulging fontanelle · Neck
> stiffness · Status epilepticus · Focal neurological signs · Focal seizures"

**Count what is left after the self-report filter and the infant exclusion.**
Colour: nothing — the whole column is somebody looking at the child, and NICE
puts the *parent's* report of pallor in amber, not the child's. Activity:
nothing — every entry is an observer's judgement of responsiveness, and the red
end is worse than unaskable, see "The unreachable column" below. Respiratory:
nothing — rates, saturations, auscultation and indrawing. Circulation and
hydration: **one**, "Reduced urine output", and only as the raw fact of whether
the child has peed. Other: **three**, rigors, limb swelling and non-weight
bearing, plus the duration of the fever which the app already collects.

**Four child-facing facts out of roughly thirty-five traffic-light entries.**
The traffic light system is an observation instrument. This is the single
clearest demonstration in the repo of why the self-report filter exists.

### Search B: NICE's disease-specific table, verbatim (source 2, table 3)

> **Meningococcal disease** — "Non-blanching rash, particularly with 1 or more
> of the following: an ill-looking child · lesions larger than 2 mm in diameter
> (purpura) · capillary refill time of more than or equal to 3 seconds · neck
> stiffness"
>
> **Bacterial meningitis** — "Neck stiffness · Bulging fontanelle · Decreased
> level of consciousness · Convulsive status epilepticus"
>
> **Herpes simplex encephalitis** — "Focal neurological signs · Focal seizures ·
> Decreased level of consciousness"
>
> **Pneumonia** — "Tachypnoea … · Crackles in the chest · Nasal flaring · Chest
> indrawing · Cyanosis · Oxygen saturation less than or equal to 95%"
>
> **Urinary tract infection (UTI)** — "**Painful urination (dysuria) · More
> frequent urination · New bedwetting · Foul smelling (malodorous) urine ·
> Darker urine · Cloudy urine · Frank haematuria (visible blood in urine) ·
> Reduced fluid intake · Shivering · Abdominal pain** · Loin tenderness or
> suprapubic tenderness · Capillary refill longer than 3 seconds · Previous
> history of confirmed urinary tract infection"
>
> **Septic arthritis** — "Swelling of a limb or joint · Not using an extremity ·
> Non-weight bearing"
>
> **Kawasaki disease** — "Fever for 5 days or longer and may have some of the
> following: bilateral conjunctival injection without exudate · erythema and
> cracking of lips; strawberry tongue; or erythema of oral and pharyngeal mucosa
> · oedema and erythema in the hands and feet · polymorphous rash · cervical
> lymphadenopathy"

**The UTI row is the most productive twelve lines in this packet, and it is the
whole argument for Search B.** Ten of its thirteen entries are things a child
knows about their own body and nobody else does. Set that against RCH's
statement of what is actually wrong with these children:

> "The most common SBIs found in children without a focus are urinary tract
> infections" — RCH (source 3), Background
>
> "UTI is the most common SBI, if there is no clinically obvious focus for
> fever, urine collection and testing should be performed" — RCH (source 3),
> Management

**The most common serious bacterial infection in exactly the child this packet
serves is diagnosed almost entirely from symptoms only that child can report —
and it appears in no rule in Keitel's Table 1 except the AUS fever model's
"urinary symptoms".** Source 6 says the same from the other direction:
*"for urinary tract infection, urinary symptoms and general appearance of the
child are the two variables that make urinary tract infection most likely."*
One of those two is the child's.

And NICE's instruction about Kawasaki features is the other thing worth taking
from table 3, verbatim:

> "Ask parents or carers about the presence of these features since the onset of
> fever, because they may have resolved by the time of assessment." (1.2.26)

Source 7 gives the same instruction in its own words — *"Resolved or transient
symptoms: rash, conjunctivitis, sore throat, skin infections"* under History.
**Two guidelines independently tell a clinician to ask about things that are no
longer there.** That is a direct argument for asking a child what they noticed
earlier, and it is the reason items 12, 16 and 17 exist at all.

### Search B: the rest of NICE's recommendations, verbatim (source 2)

> "In children older than 6 months do not use height of body temperature alone
> to identify those with serious illness." (1.2.11)
>
> "Do not use duration of fever to predict the likelihood of serious illness.
> However, children with a fever lasting 5 days or longer should be assessed for
> Kawasaki disease." (1.2.14)
>
> "Reported parental perception of a fever should be considered valid and taken
> seriously by healthcare professionals." (1.1.6)
>
> "Fever … was defined as an elevation of body temperature above the normal
> daily variation." (Terms used in this guideline)

Advice for home care — the family-facing red flags, verbatim (1.7.3):

> "Following contact with a healthcare professional, parents and carers who are
> looking after their feverish child at home should seek further advice if: the
> child has a fit · the child develops a non-blanching rash · the parent or
> carer feels that the child is less well than when they previously sought
> advice · the parent or carer is more worried than when they previously sought
> advice · the fever lasts 5 days or longer · the parent or carer is distressed,
> or concerned that they are unable to look after their child."

And 1.7.2, verbatim, on what a carer at home is told to do: *"to offer the child
regular fluids … how to detect signs of dehydration by looking for the following
features: sunken fontanelle · dry mouth · sunken eyes · absence of tears · poor
overall appearance … **how to identify a non-blanching rash** · to check their
child during the night"*.

**Note what NICE thinks a non-clinician can be taught to do, and what it does
not.** It teaches parents to identify a non-blanching rash. It does not teach
them to count a respiratory rate or judge capillary refill. That boundary is the
closest thing in the literature to an external opinion on what a lay observer
can assess — and even it is drawn for a *parent*, not for the patient.

### Search B: the complaint guideline, verbatim (source 3)

RCH's **entire History section**, in full:

> "Localising symptoms eg cough, headache, photophobia, diarrhoea, vomiting,
> abdominal pain, musculoskeletal pain, rash · Travel · Sick contacts ·
> Immunisation: children <6 months age or with incomplete immunisation ·
> Medication: prior treatment with antibiotics may mask signs of a bacterial
> infection · High risk: prematurity, immunosuppression/oncological conditions,
> central line in situ, chronic lung disease, congenital heart disease, previous
> invasive bacterial infections, children of Aboriginal, Torres Strait Islander,
> Pacific Islander or Maori origin, multiple health service presentations"

Six bullets. **One of them is the child's** — the localising symptoms — and
every item this packet takes from RCH's history comes out of that single line.
See "The high-risk branch" for why the last bullet is excluded outright.

Examination, "Features suggestive of an unwell child", in full:

> "**Colour** Pallor (including parent/carer report) · Mottled · Blue/cyanosed ·
> **Activity** Lethargy or decreased activity · Not responding normally to
> social cues · Does not wake or only with prolonged stimulation, or if roused,
> does not stay awake · Weak, high-pitched or continuous cry · **Respiratory**
> Grunting · Tachypnoea · Increased work of breathing · Hypoxia · **Circulation
> and Hydration** Poor feeding · Dry mucous membranes · Persistent tachycardia ·
> Central capillary refill time ≥3 seconds · Reduced skin turgor · Reduced urine
> output · **Neurological** Bulging fontanelle · Excessive irritability · Neck
> stiffness · Focal neurological signs · Focal, complex or prolonged seizures ·
> **Other** Non-blanching rash · Fever for ≥5 days · Swelling of a limb or joint
> · Non-weight bearing/not using an extremity"

Plus, verbatim: *"Certain aspects of the child's behaviour and appearance
provide the best indication of whether they are at high risk of SBI"*, and
*"Definition of fever: body temperature >38.0º Celsius"*, and *"Teething does
not cause fever"*, and the escalation line *"Any febrile child who appears
seriously unwell should be managed as suspected sepsis … irrespective of the
degree of fever"*.

Source 7 adds the long-duration definitions, verbatim: *"prolonged fever refers
to a fever of ≥38.0°C lasting more than 7 days without an identifiable source"*;
*"Infection is the most common cause of prolonged fever. However, malignancy,
rheumatological disorders and other inflammatory conditions should also be
considered"*; and its own history lines *"Fever details: onset, duration,
pattern"*, *"Resolved or transient symptoms: rash, conjunctivitis, sore throat,
skin infections"*, *"Systemic symptoms: weight loss, night sweats,
bruising/bleeding, joint pain or swelling"*.

### Search B: WHO IMCI, verbatim (source 4)

General danger signs, verbatim:

> "CHECK FOR GENERAL DANGER SIGNS. **Ask:** Is the child able to drink or
> breastfeed? Does the child vomit everything? Has the child had convulsions?
> **Look:** See if the child is lethargic or unconscious. Is the child
> convulsing now?"

The fever module's opening line — **this passage extracts as a shift-3
substitution cipher and is quoted here after decoding; see "Ambiguity"**:

> "DOES THE CHILD HAVE FEVER? by history or feels hot or temperature 37.5 °C or
> above"

The dehydration assessment, verbatim: *"Is the child: Lethargic or unconscious?
Restless and irritable? Look for sunken eyes. Offer the child fluid. Is the
child: Not able to drink or drinking poorly? Drinking eagerly, thirsty? Pinch
the skin of the abdomen. Does it go back: Very slowly (longer than 2 seconds)?
Slowly?"*

The fever classification, verbatim: *"Any general danger sign or Stiff neck.
Pink: VERY SEVERE FEBRILE DISEASE"*; and the duration line *"For how long? If
more than 7 days, has fever been present every day?"* with *"If fever is present
every day for more than 7 days, refer for assessment"*.

And **the family-facing list**, verbatim — the closest thing in any source read
to a list of things a non-clinician is expected to notice:

> "WHEN TO RETURN IMMEDIATELY. Advise mother to return immediately if the child
> has any of these signs: **Any sick child** — Not able to drink or breastfeed ·
> Becomes sicker · Develops a fever. **If child has COUGH OR COLD, also return
> if:** Fast breathing · Difficult breathing. **If child has diarrhoea, also
> return if:** Blood in stool · Drinking poorly."

Three of those six are already in this packet's items (drinking, breathing, the
fever itself). One — *"Becomes sicker"* — is the parent-judgement item this
packet cannot reach, phrased a third way by a third source.

### The fever threshold problem

Sixth packet in this repo to hit this shape, and the worst instance so far:

| Source | Threshold |
|--------|-----------|
| IMCI (4) | fever = "by history or feels hot or temperature 37.5 °C or above" |
| RCH (3), RCH prolonged (7) | "Definition of fever: body temperature >38.0º Celsius" |
| Keitel's cohort (1) | enrolment at "axillary temperature of ≥38 °C" |
| SBI risk score (1) | "< 37.5 (0), 37.5–38.3 (1), ≥38.4 (2)" — three bands |
| Thompson HTA (5) | "Fever (temperature > 38.5 °C) had some rule-out value" |
| NICE (2) | ≥38 °C under 3 months; ≥39 °C at 3–6 months; **no threshold at all above 6 months**, and 1.2.11 says not to use height of temperature alone |
| AAEP (1) | "T ≥ 39 °C" |
| Five Stage Decision Tree (1) | "Temperature > 39.95 °C" |
| Craig (6) | case definition includes "a parental report that the child 'felt hot' in the previous 24 hours" |

**Nine sources, eight numbers, and one source that deliberately declines to give
one above six months of age** — which is the whole of the app's range. Same
resolution as every previous packet, and here it is not a compromise but what
NICE actually recommends: **capture the raw fact, let the nurse classify.** The
child says whether they feel hot (item 1); the nurse holds the thermometer. The
child never sees a number, is never asked for one, and the word "fever" never
reaches them.

Two sources make this stronger than a mere convenience. IMCI puts *"feels hot"*
inside the definition of fever itself, on equal footing with a measurement.
NICE 1.1.6 says *"Reported parental perception of a fever should be considered
valid and taken seriously"*. Neither is a statement about a **child's** report,
and this packet must not pretend otherwise — but they are the closest the
literature comes to endorsing an unmeasured report of feeling hot, and they are
the reason item 1 leads.

### The hot-versus-shivering split — a bundling disagreement

The sore-throat packet named a third category of source disagreement alongside
threshold and scope: **bundling**. This packet has a clean instance of it, and
resolving it changes a question the app already ships in five places.

| Source | How feeling hot and shivering are combined |
|--------|-------------------------------------------|
| NICE (2), traffic light "Other" | **"Rigors"** is an amber criterion in its own right, listed beside — not inside — the temperature criteria |
| NICE (2), table 3, UTI row | **"Shivering"** is a UTI symptom, listed beside "Painful urination", with no temperature attached |
| IMCI (4) | "feels hot" is part of the *definition of fever*; shivering does not appear |
| RCH (3) | neither appears; fever is a measurement under Examination |
| The app as shipped | `l-007`, `s-020`, `c-023`, `e-019`: **"Do you feel hot or shivery?"** — one question for the pair |

**Ruling: ask hot and shivering as two separate questions.** NICE scores rigors
without reference to a temperature, so a child who is shaking and does not feel
hot is amber under NICE and invisible to a fused question. The five shipped
wordings fuse them, and a "yes" to *"Do you feel hot or shivery?"* cannot say
which. Items 1 and 2 split the pair, item 1 takes the `feels-feverish` fact, and
item 2 gets its own. Same principle as the sore-throat packet's cough/coryza
ruling: **capture the atoms, let the nurse compose.**

### What actually walks in (sources 6, 9, 3, 5)

- Source 6, in a paediatric ED, under 5: *"The combined prevalence of any of the
  three infections of interest (urinary tract infection, pneumonia, or
  bacteraemia) was 7.2% (1120/15 781) … urinary tract infection the diagnosis in
  543 (3.4%) cases … pneumonia in 533 (3.4%) … and bacteraemia in 64 (0.4%)."*
- Source 6 again, on overtreatment: *"20% (2686/13 557) of children without
  bacterial infection were also prescribed antibiotics."*
- Source 3: *"The most common causes of fever in children are viral infections…"*
  and *"Since the introduction of the pneumococcal vaccine, the rate of occult
  bacteraemia has fallen to <1% in healthy, immunised children."*
- Source 9, for fever *without focus* specifically: *"194 (71.8%) of the cases
  finally were diagnosed as self-limited febrile illness (SLFI) or self-limited
  viral illness (SLVI)"*, and *"Viruses cause FWLS in more than 70% of cases"*.
- Source 5: setting drives everything — *"clinical prediction rules offer
  different diagnostic value, depending particularly on the prevalence of
  serious infection"*, and it uses setting *"as a proxy for prevalence of serious
  infection"*.

So roughly **seven in ten of these children have something self-limiting, and
about 7% of a paediatric ED population has one of the three infections that
matter most.** In a school nurse's room or a hospital ward playroom — where this
app actually runs — the prevalence is lower still than any setting in any source
read, which per source 5 makes every likelihood ratio quoted above an
*over*-estimate of what a positive answer means here. Nothing in this packet may
be presented as raising or lowering a probability.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Do you feel hot** | IMCI (4) — fever is *"by history or feels hot or temperature 37.5 °C or above"*; Craig (6) — case definition includes *"a parental report that the child 'felt hot' in the previous 24 hours"*; AUS fever model (1) — *"felt hot"* among its predictors; NICE (2) — 1.1.6 *"Reported parental perception of a fever should be considered valid"*; RCH (3) — *"Definition of fever: body temperature >38.0º Celsius"* | **partial** | **The flagship item, and the reason this packet exists. It owns the shared fact `feels-feverish` for the whole app** — see Scope, and decision 12. Child reports the sensation; the nurse measures and classifies. Nine sources, eight incompatible thresholds, and NICE declines to give one above 6 months (see the threshold problem). Never say "fever", never ask for a number, never mention degrees. **Marked partial, not yes**, because the criterion the sources actually state is a temperature and the child supplies only its felt half. |
| 2  | **Are you shivering or shaking** | NICE (2) — *"Rigors"*, an amber criterion in its own right; NICE (2) table 3 — *"Shivering"* as a UTI symptom | **yes** | **Split from item 1 on purpose** — see the bundling disagreement above. NICE scores rigors and shivering without reference to a temperature, so a shaking child who does not feel hot is amber under NICE and invisible to the fused *"Do you feel hot or shivery?"* the app ships in five places. Never say "rigor"; a child says *shaking*. Do not ask the child to grade it: *rigor* is an uncontrollable shake and grading it is a clinician's. |
| 3  | **Have you been able to drink** | Craig (6) — *"no fluid intake in the previous 24 hours"*, one of only five features predictive across **all** serious bacterial infections; IMCI (4) — general danger sign *"Is the child able to drink or breastfeed?"*, and WHEN TO RETURN IMMEDIATELY *"Not able to drink or breastfeed"*, and dehydration *"Not able to drink or drinking poorly? Drinking eagerly, thirsty?"*; NICE (2) — 1.7.2 *"to offer the child regular fluids"*, table 3 UTI *"Reduced fluid intake"*; iCCM, ALMANACH (1) — same danger sign | **yes** | **The best-sourced item in the packet and the highest-tier one.** Inability to drink is a *general danger sign* in IMCI, iCCM and ALMANACH — the classification that triggers referral and injected antibiotics — and it is on IMCI's family-facing return-immediately list for **any** sick child. Craig makes fluid intake one of five features that predict across every SBI. Uses the existing `eating-drinking` fact. **Ask what the child has managed, not whether they are dehydrated:** hydration status is examination (item 27). |
| 4  | **Have you peed today / when did you last pee** | NICE (2) — amber *"Reduced urine output"*; RCH (3) — *"Reduced urine output"* | **partial** | The only entry in NICE's whole Circulation and hydration column that survives the filter. *"Output"* is a volume nobody measures in a school room; the child's half is **when they last went**, which they know and nobody else does. Ask *when*, never *how much*. Register follows the tummy packet: **"pee"**, never "wee", never "urinate", never "pass water". Distinct from item 5 — this is absence, that is pain. |
| 5  | **Does it hurt or sting when you pee** | NICE (2) table 3 — *"Painful urination (dysuria)"*; Craig (6) — *"for urinary tract infection, urinary symptoms and general appearance of the child are the two variables that make urinary tract infection most likely"*; AUS fever model (1) — *"urinary symptoms"*; RCH (3) — *"UTI is the most common SBI, if there is no clinically obvious focus for fever"* | **yes** | **The highest-value Search-B-only item in the packet.** The most common serious bacterial infection in a febrile child with no focus is diagnosed from symptoms only the child has, and **no rule in Keitel's Table 1 except the AUS fever model contains a urinary variable at all.** Duplicates the *fact* behind tummy's accepted `t-006`, which is scoped `group: 'tummy'`, `depth: 'inside'` and therefore fires for no child who taps their head, ear or arm. See decision 10 and "Still open". |
| 6  | **Have you been going to pee more than usual** | NICE (2) table 3 — *"More frequent urination"* | **yes** | Plainly worded by NICE and plainly answerable, but it is a comparison against the child's own baseline rather than an absolute fact, so it is weaker than items 4 and 5 and is ranked last of the proposed set. The baseline is the **child's own**, which is what keeps it inside the filter — unlike "in excess of what the examining doctor expects", which the brief rules out by name. One source. |
| 7  | **Have you thrown up** | Bleeker (1) — *"H/o vomiting"*; Pneumonia Rule n°3 (1) — *"Vomiting"*; IMCI, iCCM, ALMANACH (4, 1) — general danger sign *"Does the child vomit everything?"*; RCH (3) — *"vomiting"* among localising symptoms | **yes** | A rule variable, a general danger sign and a localising symptom. **IMCI's criterion is *"vomits everything"*, a threshold a child cannot apply to themselves** — capture the raw fact, let the nurse classify, exactly as with the temperature. Uses the existing `vomiting` fact, which head, throat, ears and tummy already carry. |
| 8  | **Has your poop been runny** | Five Stage Decision Tree (1) — *"Diarrhea"*, one of five variables in the rule source 5 found *"offered a marginally useful rule-out value"*; AUS fever model (1) — *"diarrhea"*; RCH (3) — *"diarrhoea"* among localising symptoms; IMCI (4) — its own diarrhoea module and *"If child has diarrhoea, also return if: Blood in stool · Drinking poorly"* | **yes** | The one variable in Keitel's Table 1 that is both child-reportable and inside a rule with any published rule-out value. Register follows the tummy packet: **"poop"**, never "stool", "motions", "bowels", "poo". Duplicates the fact behind tummy's accepted `t-012`, again `tummy`-scoped. **Blood in the poop is not carried** — see item 34. |
| 9  | **Is it hard to breathe** | Thompson HTA (5) — *"Rapid breathing and shortness of breath provided the greatest LR+ in the single low-prevalence study (9.3 and 9.70)"*; Five Stage Decision Tree (1) — *"Dyspnea"*; Pneumonia Rule n°1 (1) — *"Shortness of breath"*; IMCI (4) — return immediately for *"Fast breathing · Difficult breathing"*; NICE (2), RCH (3) — the observer halves are item 26 | **yes** | The one respiratory fact with a child-facing half; everything else in both respiratory columns is a rate, a saturation, an auscultation finding or an indrawing. Note the HTA's framing: these were the **greatest** LR+ features *in the low-prevalence setting*, which is the setting this app most resembles. Uses the existing `hard-to-breathe` fact (chest `c-001`, throat `s-014`, tummy `t-017a`). |
| 10 | **Have you been coughing** | AUS fever model (1) — *"cough"*; Pneumonia Rule n°3 (1) — *"Cough"*; Craig (6) — *"cough for pneumonia … highly discriminatory for both ruling in and ruling out infection"*; IMCI, iCCM, ALMANACH (4, 1) — cough is the entry condition of the whole respiratory module; RCH (3) — *"cough"* among localising symptoms | **yes** | Craig is unusually strong here: cough is named as discriminating **in both directions**, which almost nothing else in this literature does. Uses the existing `cough` fact (chest `c-007`, throat `s-005`). Never invert it — the question asks presence, and the interpretation is the nurse's. |
| 11 | **Is it hard to turn your head** | NICE (2) — *"Neck stiffness"* is red in the traffic light, and appears in **both** the meningococcal and the bacterial meningitis rows of table 3; IMCI (4) — *"stiff neck"* is what makes a febrile child *"VERY SEVERE FEBRILE DISEASE"*; RCH (3) — *"Neck stiffness"* under Neurological | **yes** | Split from examined neck stiffness on the same principle the sore-throat packet used for its item 9: *neck stiffness* and *meningeal irritation* are elicited by a clinician, but "is it hard to turn your head?" is something a child discovers by trying. **The most time-critical child-facing item in the packet** and the reason it ranks above several better-sourced ones. Item 30 keeps the elicited sign excluded. Overlaps throat's item 9 wording; see decision 10. |
| 12 | **Have you got spots or a rash** | NICE (2) — *"Non-blanching rash"* is red, is the lead feature of the meningococcal row, and is the one thing 1.7.2 teaches **parents** to identify; NICE (2) — Kawasaki *"polymorphous rash"*; RCH (3) — *"Non-blanching rash"*, and *"rash"* among localising symptoms; RCH prolonged (7) — *"Resolved or transient symptoms: rash…"*; AUS fever model (1) — *"rash"* | **partial** | **NICE's single most time-critical red flag, reduced to its weakest half.** A child can say there are spots; blanching is a *test*, and a child must never be asked to perform it (see wording cautions). Uses the existing `rash` fact, which `tummy-rash`, `chest-rash` and `back-rash` already carry byte-identically. **Ranked low for that reason, not because it does not matter** — and the pending `packets/skin/rash/` packet should own this outright, at which point this row becomes a cross-reference. See decision 11. |
| 13 | **Is it hard to walk, or to use your arm or leg** | NICE (2) — amber *"Swelling of a limb or joint · Non-weight bearing limb or not using an extremity"*, and 1.2.24 *"Consider septic arthritis or osteomyelitis in children with fever and any of the following signs: swelling of a limb or joint · not using an extremity · non-weight bearing"*; RCH (3) — same two lines; RCH prolonged (7) — *"Musculoskeletal: inability to weight bear…"* | **yes** | The febrile child who will not use a limb is a specific and dangerous presentation, and **the limb packet cannot reach them**: `limb/injury` is scoped to the injury branch of the `head`/`limb` gate and asks what the child fell off. This item is the atraumatic, febrile half. Uses the existing `limb-use` fact. Note that *swelling* is item 31 — the child's half here is use, not appearance, because `limb-swelling` is separately covered by `l-016`/`l-017`. |
| 14 | **Do bright lights hurt your eyes** | RCH (3) — *"photophobia"*, among localising symptoms | **yes** — not proposed for v1 | Genuinely sourced and genuinely child-reportable, and **byte-for-byte the fact behind the hand-written `light-hurts` ("Do bright lights make it worse?") that group `head` already ships.** One source, and a cross-cutting packet asking it would fire it for a child who tapped their foot. Kept in the table so the absence is a decision. **First item to drop; not proposed for generation in v1.** |
| 15 | **Have you wet the bed when you usually don't** | NICE (2) table 3 — *"New bedwetting"* | **partial** — not proposed for v1 | A real UTI criterion in NICE's own words, and the only one in the UTI row not carried. Two reasons, both recorded rather than assumed: **"new"** is a comparison against a continence baseline a 4-year-old may not have, so the item would silently mean different things across the age range; and it is the most shaming question in the repo to put on a screen in front of a child in a ward. **Not proposed for v1.** If a future run revives it, it needs a `minAge` (this packet's view is 7, **JUDGEMENT, NOT A CITATION** — no source floors it) and a play specialist's wording. |
| 16 | **Are your lips sore or cracked** | NICE (2) — Kawasaki *"erythema and cracking of lips"*, with 1.2.26 *"Ask parents or carers about the presence of these features since the onset of fever, because they may have resolved by the time of assessment"* | **partial** — not proposed for v1 | *Cracking* is child-visible and child-feelable; *erythema* is a classification. NICE frames the ask to **parents**, which is the honest reason this is partial rather than yes. Single-condition, and Kawasaki is gated behind ≥5 days of fever, which the duration bands cannot express (see "Still open"). Kept so a reviewer can see the Kawasaki row was read, not skipped. |
| 17 | **Are your hands or feet puffy** | NICE (2) — Kawasaki *"oedema and erythema in the hands and feet"*, with the same 1.2.26 instruction | **partial** — not proposed for v1 | Same reasoning as item 16, and additionally it collides with the limb packet's `limb-swelling` fact (`l-016`, `l-017`) which asks the same thing better and with a body region attached. |
| 18 | Night sweats; weight loss; bruising or bleeding | RCH prolonged (7) — *"Systemic symptoms: weight loss, night sweats, bruising/bleeding, joint pain or swelling"* | **no — not carried** | Night sweats are arguably child-reportable, but the app has no night context and a 5-year-old cannot distinguish a sweaty night from a warm room; weight loss requires a scale and a record; bruising and bleeding belong to the pending skin packets and to RCH's unfetched "Petechiae and Purpura". Recorded so the line is visibly a decision. |
| 19 | Duration of the illness; fever ≥5 days; fever >7 days; onset and pattern | NICE (2) — amber *"Fever for more than or equal to 5 days"*, 1.2.14 *"Do not use duration of fever to predict the likelihood of serious illness. However, children with a fever lasting 5 days or longer should be assessed for Kawasaki disease"*, 1.7.3 *"the fever lasts 5 days or longer"*; RCH (3) — *"Children with fever for ≥5 days should be assessed for Kawasaki disease or PIMS-TS"*; RCH prolonged (7) — *"lasting more than 7 days"*; IMCI (4) — *"If more than 7 days, has fever been present every day?"*; Bleeker, Rotterdam (1) — *"Duration fever"*, *"Duration of Fever"* | **yes** — already collected | `DURATIONS`. **But the bands cannot express the two thresholds that matter**, and unlike every other packet in this repo the long bands here are *more* informative, not less. See decision 5 and "Still open". |
| 20 | Age | Bleeker, Rotterdam, Five Stage Decision Tree, AUS fever model (1); NICE (2) and IMCI (4) — the entire age-banded temperature structure | **n/a** — already collected | Setup screen. Also the axis on which every source read is stratified, and the reason for limit 1 at the top of this packet. |
| 21 | Where it hurts; how much it hurts | all sources | **yes** — already collected | Body map and the FPS-R intensity screen. Worth stating explicitly for a cross-cutting packet: **the body map is still shown to a child who feels ill all over**, so this packet's questions arrive alongside a region's, and they compete for the same 5 or 6 slots. That is the whole of decision 10. |
| 22 | Feeling tired; no energy; feeling sleepy | NICE (2) — amber *"Decreased activity"*; RCH (3) — *"Lethargy or decreased activity"*; Thompson HTA (5) — *"drowsiness … had a LR+ > 5.0"*; mini-SSPedi (8) — *"Feeling tired"*, understood by every 4–7 year old in the final cohort | **yes** — already collected | `MOODS.tired`. Same ruling as the sore-throat packet's item 20. The app collects this as a mood pick rather than a question, which loses the distinction between "tired" and "cannot stay awake" — but the second of those is item 25 and is unreachable anyway. Source 8 is affirmative evidence that a 4-year-old can answer a tiredness item about themselves. |
| 23 | Feeling like you might throw up | AUS fever model (1) via *"crying"*/general symptoms; mini-SSPedi (8) — *"Throwing up or feeling like you might throw up"*, understood by every child in the final cohort | **yes** — already collected | `SENSATIONS.queasy` ("Yucky tummy"). Deliberately the *non-overlapping half* of item 7: item 7 takes vomiting, the sensation list takes nausea. Same split the throat and ears packets made. |
| 24 | Headache; tummy pain; sore throat; earache; muscle or joint pain; red eyes | RCH (3) — *"Localising symptoms eg cough, headache, photophobia, diarrhoea, vomiting, abdominal pain, musculoskeletal pain, rash"*; NICE (2) table 3 — UTI *"Abdominal pain"*, Kawasaki *"bilateral conjunctival injection"*; RCH prolonged (7) — *"joint pain"*, *"conjunctivitis, sore throat"*; IMCI (4) — *"Ear pain or ear discharge"* | **yes** — already collected elsewhere | Six real criteria, all child-reportable, **all rejected as duplicates of something the app already does better**: head, tummy, throat, ears, limbs and eyes are their own body-map regions with their own groups and their own packets. A child who has these taps them. **This is the largest single block of the filter for this packet, and it is the specific cost of being cross-cutting** — a general packet's most obvious questions are exactly the ones the body map already answers. |
| 25 | Level of consciousness and responsiveness: no response to social cues; not responding normally to social cues; no smile; wakes only with prolonged stimulation; does not wake or if roused does not stay awake; decreased activity; lethargic or unconscious; state variation; reaction to parents' stimulation; response to social overtures; excessive irritability; restless and irritable; moaning; inconsolability; change in crying pattern; quality of cry; weak, high-pitched or continuous cry | NICE (2); RCH (3); IMCI, iCCM, ALMANACH (4, 1); Yale Observation Scale, SBI risk score (1); Thompson HTA (5) | **no — observer** | **See "The unreachable column" below.** Every entry is somebody else's judgement of the child, and the severe end of it describes a child who cannot operate a tablet at all. This is not merely unaskable; it is unreachable by construction. |
| 26 | Respiratory examination and measurement: respiratory rate and every tachypnoea threshold; nasal flaring; chest indrawing and chest wall retractions; grunting; crackles and rales; decreased breath sounds; wheeze; stridor; increased work of breathing; oxygen saturation; hypoxia; cyanosis | NICE (2); RCH (3); IMCI, iCCM, ALMANACH, Bleeker, SBI risk score, Rotterdam, Pneumonia Rules 1–3 (1, 4); Thompson HTA (5) | **no — exam / instrument** | Item 9 is the child's half and is separately sourced. Note that source 2 itself warns about the instrument: *"some pulse oximeters can underestimate or overestimate oxygen saturation levels … Overestimation has been reported in people with dark skin."* |
| 27 | Circulation and hydration examination: capillary refill time; tachycardia and every APLS threshold; blood pressure; poor peripheral circulation; dry mucous membranes; reduced skin turgor and the abdominal skin pinch; sunken eyes; sunken fontanelle; absence of tears; cool extremities; weak pulse; poor feeding in infants | NICE (2) — 1.2.16 and the traffic light; RCH (3); IMCI, iCCM, ALMANACH (4, 1); Yale, Bleeker, SBI risk score, Rotterdam (1) | **no — exam** | Item 3 (drinking) and item 4 (peeing) are the child's halves. **Never ask a child to pinch their own skin, press their own nail bed, or count anything.** IMCI's instruction is explicit that this is done *to* the child: *"Pinch the skin of the abdomen. Does it go back: Very slowly…?"* |
| 28 | Colour: pallor including parent/carer report; mottled; ashen; blue or cyanosed; severe palmar pallor; jaundice; "normal colour of skin, lips and tongue"; "normal skin and eyes" | NICE (2); RCH (3); Yale (1); ALMANACH, IMCI (1, 4) | **no — observer** | The one traffic-light column with no child-facing half whatsoever. **NICE puts even the parent's report of pallor in amber rather than green-or-red**, which is as clear a statement as the literature gives that this is a judgement, and it is not the patient's judgement. Never ask a child what colour they are, and never ask them to look in a mirror. |
| 29 | Clinician gestalt: "appears ill to a healthcare professional"; "ill appearance"; "ill-looking child"; "appearing generally unwell"; "Clinician instinct that something is wrong"; the clinician's gut feeling (LR+ 23); "General appearance" | NICE (2); Craig (6) — *"appearing generally unwell was the strongest diagnostic marker"*; Five Stage Decision Tree, Bleeker, Rotterdam, AAEP (1); Thompson HTA (5) | **no — clinician gestalt** | **The strongest single feature in this entire literature, in three independent sources, and it is definitionally not the child's.** It is also the feature RCH names as *"the most useful indicator"*. Recorded at the top of this packet as limit 3, and again here so it cannot be mistaken for an omission. |
| 30 | Carer judgement: "Parental concern illness is different from previous illnesses" (LR+ 14); "the parent or carer feels that the child is less well than when they previously sought advice"; "the parent or carer is more worried"; "Becomes sicker"; "multiple health service presentations" | Pneumonia Rule n°1 (1); Thompson HTA (5); NICE (2) — 1.7.3; IMCI (4); RCH (3) | **no — carer** | The second strongest feature, in four sources, phrased four ways, and also not the child's. **The app's reserved `better-than-before` question is the nearest thing it has and it is not the same fact:** that asks the child whether they feel better than at their last report; this is an adult comparing this illness to every previous illness. Do not conflate them, and do not let a generator "complete" the packet by writing the obvious question. |
| 31 | Neurological and seizure findings: neck stiffness as elicited; meningeal irritation; bulging fontanelle; focal neurological signs; focal, complex or prolonged seizures; convulsive status epilepticus; convulsing now; history of convulsions; decreased level of consciousness; loss of consciousness (LR+ 19.8–155); change in personality or confusion | NICE (2) — 1.2.18–1.2.21 and the traffic light; RCH (3); RCH prolonged (7); IMCI, iCCM, ALMANACH (4, 1); Thompson HTA (5) | **no — observer / exam** | Item 11 is the child's half of neck stiffness and is separately sourced; nothing else here has one. **A child who has had a seizure cannot report it** — that is what a seizure is — and loss of consciousness is already the head-injury packet's problem, where it is asked about a witnessed event. Never ask a child whether they had a fit. |
| 32 | Limb and joint swelling; loin or suprapubic tenderness; abdominal tenderness; focal bony tenderness; hepatosplenomegaly; lymphadenopathy; new murmur; reduced air entry; sinus, mastoid or dental infection; tender swelling behind the ear; "abnormal ear, nose, and throat signs"; "Look for any bacterial cause of fever" | NICE (2); RCH (3); RCH prolonged (7); IMCI, ALMANACH, AUS fever model (1, 4) | **no — exam** | Palpation and inspection. Item 13 takes the *use* of a limb, not its appearance; `limb-swelling` covers the appearance from the limb packet with a region attached. **Never ask a child to press on themselves and report what they feel.** |
| 33 | The blanching test on a rash | NICE (2) — 1.7.2 teaches parents *"how to identify a non-blanching rash"*; 1.2.18 and the whole meningococcal row depend on it | **no — a test, not a question** | The classification of item 12's raw fact, and the most tempting invention in this packet. NICE teaches it to **parents**, which reads as permission until you notice who is being taught: an adult, about a child they are watching. A frightened seven-year-old pressing a glass on their own arm and typing an answer produces a meningococcal finding with nobody's eyes behind it. Explicitly banned in wording cautions. |
| 34 | Blood in the poop; blood in the pee; dark, cloudy or foul-smelling pee | IMCI, iCCM, ALMANACH (4, 1) — *"Blood in stool"*; NICE (2) table 3 — *"Frank haematuria (visible blood in urine) · Darker urine · Cloudy urine · Foul smelling (malodorous) urine"* | **no — not carried** | Genuinely child-visible, genuinely sourced, and **deliberately not carried.** The tummy packet generated two blood-in-poop candidates and **review rejected both** (`t-014`, `t-015`); resurrecting the same fact under a different packet id would be routing around a human decision, which is the one thing this pipeline must never do. Colour and smell judgements of urine are additionally unreliable in children and are what the dipstick is for. Recorded so the exclusion is visible and attributable. |
| 35 | Measured temperature and every threshold: 37.5, 38.0, 38.3/38.4, 38.5, 39.0, 39.95, 40 °C; height of fever; rapidity of onset; response to antipyretics; presence of febrile seizures; axillary vs tympanic technique; thermometer type | NICE (2) — 1.1.1–1.1.5, 1.2.8, 1.2.11–1.2.13; RCH (3) — Key points and Additional notes; IMCI (4); Five Stage Decision Tree, SBI risk score, Rotterdam, AAEP, Lab Score (1); Thompson HTA (5) | **no — instrument** | Item 1 is the child's half. **RCH rules four of these out as severity predictors in one sentence** — *"The severity of illness cannot be predicted by the degree of fever, its rapidity of onset, its response to antipyretics or the presence of febrile seizures"* — which is also why "did the medicine help?" is not an item. NICE 1.2.11 rules out height of temperature alone above 6 months, i.e. across the whole of the app's range. |
| 36 | Laboratory and imaging: CRP, PCT, WBC, absolute neutrophil count, band count, ESR, ferritin, LDH; urine dipstick, leucocytes and nitrite, urinalysis, urine culture; blood cultures; CSF/LP; chest radiograph; ultrasound; malaria test; serology; pulse oximetry | Thayyil, Lab Score, Bleeker, Rotterdam, AAEP, ALMANACH (1); NICE (2); RCH (3); RCH prolonged (7) — its three investigation tiers; IMCI (4); Thompson HTA (5) | **no — lab / imaging** | Two of the eleven rules in Keitel's Table 1 (Thayyil, Lab Score) consist of **nothing else**. Source 5's finding that *"neither CRP nor PCT has sufficient diagnostic value to either confirm or exclude a serious infection"* is recorded only so a future run does not go hunting for a proxy. |
| 37 | Records and carer history: immunisation status; pneumococcal and meningococcal vaccination; prior antibiotics or steroids; chronic disease, developmental delay, immunosuppression, oncological conditions, central line, chronic lung disease, congenital heart disease, previous invasive bacterial infection, prematurity; travel abroad and domestic travel; sick contacts and infectious contacts; household and environmental exposures; family history; sexual history; previous confirmed UTI; "Infection risk factor" | RCH (3); RCH prolonged (7); NICE (2) — 1.2.28 and table 3; AUS fever model, SBI risk score, Five Stage Decision Tree (1); IMCI (4) | **no — carer or record** | Not the child's to report. A seven-year-old does not know their HiB or pneumococcal status, and the whole of source 7's endemic-exposure table is a parent's account of where the family has been. |
| 38 | Season and month of presentation | Source 9 — its seasonal distribution; IMCI (4) — malaria seasonality | **no — not a question** | The system knows the date. Recorded so it is visibly a decision. |
| 39 | Ethnicity and high-risk-group membership: "children of Aboriginal, Torres Strait Islander, Pacific Islander or Maori origin"; "Ethnicity and background: Aboriginal and/or Torres Strait Islander status, country of birth"; HIV status; malnutrition, MUAC, bilateral oedema | RCH (3) — High risk; RCH prolonged (7) — History; IMCI, iCCM, ALMANACH (4, 1) | **no — see "The high-risk branch"** | Deliberate exclusion, recorded as a decision, and the third time this repo has reached it by a different route. |
| 40 | Infant and neonate presentations: everything about children under 3 months; bulging fontanelle; breastfeeding; poor feeding in infants; weak high-pitched cry; temperature instability and hypothermia; sunken fontanelle; "Febrile neonates ≤28 days" | NICE (2); RCH (3); IMCI, iCCM, ALMANACH, Yale, Bleeker, Thayyil, Lab Score (1, 4) | **no — out of age scope** | **The single largest block of excluded material, by volume, in any packet in this repo.** Most of NG143, most of RCH's Management section and most of Keitel's Table 1 are about children younger than the app's youngest user. Recorded once here rather than repeated per row. |

**Yield: ~95 distinct criteria across 16 named outpatient rules and guidelines
(11 rules and 5 guidelines from source 1's Table 1 and Table 2, one of which —
the AUS fever model — was also read at first hand as source 6), 3 complaint
guidelines and 1 meta-review → 10 clean, 3 partial proposed, 4 held back
(1 clean, 3 partial), 5 already collected elsewhere in the app, and ~70
excluded.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
clean (30%); sore throat ~53 → 12 clean (23%); **feeling unwell all over ~95 →
13 proposed (14%)**. By some distance the lowest proportion in the repo, and for
a reason that is structural rather than a shortfall in searching: **this
complaint's literature is an observation literature.** Where sore throat's
scores converged on two things requiring someone to look inside the child, this
one converged on *how the child looks and behaves to somebody watching them* —
colour, cry, responsiveness, breathing effort, perfusion — and added a strongest
predictor that is the clinician's own intuition. A self-report app is
structurally the wrong instrument for the strongest half of this evidence base,
and saying so plainly is more useful than a longer items table would be.

**Of the 13 proposed items, 6 carry a fact another packet already reaches**
(3 `eating-drinking`, 7 `vomiting`, 9 `hard-to-breathe`, 10 `cough`, 12 `rash`,
13 `limb-use`). The questions this packet genuinely adds to the app are
therefore: **feeling hot** (which it takes ownership of from five packets),
**shivering**, **peed today**, **hurts to pee**, **peeing more often**, **runny
poop** and **hard to turn your head** — seven new facts and one takeover. That
is the honest count and it should be the one quoted.

## The unreachable column — worse than unaskable

The Activity column of the traffic light system is not merely an observer
judgement. Read its red entries against the thing they would have to be asked
through:

> "No response to social cues · Appears ill to a healthcare professional · **Does
> not wake or if roused does not stay awake** · Weak, high-pitched or continuous
> cry"

**A child who does not wake, or who wakes and cannot stay awake, cannot use this
app.** So can a child who is unconscious, convulsing, or too breathless to hold
a tablet. The most severe rows of NICE's, RCH's and IMCI's classifications
describe precisely the children from whom this app can collect nothing at all —
not because the question is badly worded but because answering it requires the
capacity the criterion says is absent.

This has a consequence the nurse-facing surface must carry: **an empty or
missing report from a child known to be febrile is not a null result.** It is
compatible with the child being well enough to have wandered off, and it is
compatible with a red traffic-light finding. Silence is the one answer this app
can produce that means the opposite of what a blank field usually means.

Recorded here because it is a genuinely new category, distinct from
"observer-only" and from "exam": **a criterion whose truth prevents its own
collection.** No previous packet in this repo has hit one. Head injury came
close with loss of consciousness and resolved it by asking about a witnessed
past event; here the criterion is about the present moment, and there is no such
escape.

## The high-risk branch — the second consequential thing this app cannot ask

RCH's History section ends with a list, verbatim:

> "**High risk:** prematurity, immunosuppression/oncological conditions, central
> line in situ, chronic lung disease, congenital heart disease, previous
> invasive bacterial infections, **children of Aboriginal, Torres Strait
> Islander, Pacific Islander or Maori origin**, multiple health service
> presentations"

and its Management section says what that list does, verbatim: *"In children
from high risk groups, have a lower threshold for investigations."* Source 7
repeats the ethnicity line under its own History: *"Ethnicity and background:
Aboriginal and/or Torres Strait Islander status, country of birth, vaccination
history."*

There is a branch in this guideline that lowers the investigation threshold for
every item in this packet, and it is decided by **ethnicity, chronic diagnoses,
device history and attendance patterns.** All are records. None is a child's to
report. **This app must never ask a child about their ethnicity to route their
clinical care.**

**Decision: excluded outright, and flagged prominently rather than quietly
dropped.** The nurse-facing surface, not the child-facing one, is where this
belongs — the child's record already holds it. Recorded here so that (a) nobody
downstream "completes" the packet by writing the obvious question, and (b) the
clinical reviewer sees that the app's report is not sufficient input to a branch
these guidelines treat as decisive. Same conclusion and same reasoning as head
injury's non-accidental-injury exclusion, the tummy packet's abuse exclusion and
the sore-throat packet's acute-rheumatic-fever branch, reached for a fourth time
by a fourth route. **Four packets, four independent arrivals at the same wall:
the child cannot supply the information that redirects their own care.** That
belongs in `LIMITATIONS.md` as a general finding, not as four separate
footnotes.

## Wording cautions

Ban **concepts**, not phrasings. Every caution below is transcribed into
`meta.bannedPhrases` — a caution that exists only in prose is not enforced by
the screen, and this repo has already been caught by that once.

- **Never name a condition.** Not sepsis, septic, meningitis, meningococcal,
  meningococcus, Kawasaki, pneumonia, bronchiolitis, urine infection, UTI,
  bladder infection, kidney infection, bacteraemia, blood poisoning,
  encephalitis, septic arthritis, osteomyelitis, malaria, measles, flu,
  influenza, COVID, PIMS, leukaemia, cancer. This packet touches more named
  conditions than any other in the repo and the generator must name none of
  them.
- **Never say "fever", "temperature", "degrees", or "thermometer".** Item 1 asks
  about a sensation; the number is the nurse's. Note the British usage trap in
  particular: *"have you got a temperature?"* uses "temperature" as a noun
  meaning fever and would be read by a US child as a question about a
  measurement they have not taken.
- **Never use British illness idiom.** The sources are British and Australian
  and the register is US English (decision 1). Specifically:
  - **"poorly"** — British for ill; a US child reads it as an adverb.
  - **"off colour"** — British for unwell, and doubly wrong here because
    *colour* is an excluded observer criterion (item 28).
  - **"being sick" / "might be sick" / "feel sick"** — in British English these
    mean **vomiting**; in US English they mean **becoming ill**. IMCI's own
    *"Any sick child"* and NICE's *"less well"* are both in the first sense's
    neighbourhood. The ambiguity is not resolvable by context on a child's
    screen, so the whole construction is banned: item 7 says **"throw up"** and
    item 23's nausea is already `SENSATIONS.queasy`.
  - **"wee" / "weeing" / "a wee"** — British; the register is **"pee"**.
  - **"nappy"** — British, and infant-only in any case.
  - **"unwell"** — the packet's own title word, and it must not reach a child:
    it is a British-leaning clinical register and it is exactly the vague
    global judgement item 29 excludes. Ask concrete facts.
- **Never ask a child to perform the blanching test.** No glass, no tumbler, no
  pressing on the rash, no "does it go away when you push on it", no "does it
  fade". NICE teaches this to **parents** (1.7.2) and that is not permission to
  delegate it to the patient. This is item 33.
- **Never ask a child to examine or measure themselves.** No pinching their
  skin, no pressing anywhere, no counting their breaths, no feeling their pulse,
  no looking in a mirror, no "how fast are you breathing". Items 26, 27, 28 and
  32.
- **Never ask a child whether they had a fit, a seizure, or passed out.** Item
  31; and `screen.mjs` already bans "passed out" globally.
- **Never ask a child to judge how ill they are, or how ill they look.** No "are
  you very unwell", no "do you look sick", no "how bad is it". Item 29 is the
  clinician's judgement and item 30 the carer's, and asking a child to supply
  either produces a number that reads to a nurse as a finding. `screen.mjs`
  already bans the severity adjectives and `how bad`.
- **Never ask about ethnicity, background, country of birth, where the family
  lives, who they live with, or where they have travelled.** Item 39 and item
  37, and see "The high-risk branch".
- **Never ask whether medicine helped.** RCH says response to antipyretics does
  not predict severity, so the question buys nothing and it invites a child to
  report a dose nobody recorded. Item 35.
- **Never shame a bedwetting answer**, if item 15 is ever revived: no
  "accident", no "big boy" or "big girl", no "supposed to", no "still dry".
- **Never invert item 10 in the question.** The rules use cough as a
  present-positive and the interpretation is the nurse's.
- **Avoid "still"** — `screen.mjs` bans it universally, and it is especially
  wrong in a packet where every item is about a change from a baseline the child
  holds.
- Avoid "serious", "dangerous", "bad", "severe" — already banned globally.

## How these were found

Search A was run as the brief specifies — comparison and external-validation
literature, not a remembered rule name — and it worked in the sense the brief
predicts. Recall would have produced the NICE traffic light system and stopped.
Source 1 enumerated **sixteen** outpatient rules and guidelines out of 34
identified, and source 5 independently enumerated six rules and gave likelihood
ratios for the individual features underneath them. Of the names that came back,
**only NICE and IMCI would have come from recall**; Yale, Bleeker, Thayyil, Lab
Score, the SBI risk score, the Rotterdam Fever Model, the five-stage decision
tree, the three pneumonia rules, iCCM, ALMANACH and AAEP would not.

**And Search A produced almost nothing usable.** That is the finding, and it is
sharper than the sore-throat packet's version:

- **Of the ~60 distinct predictors across sixteen rules and guidelines, four are
  cleanly child-reportable** — vomiting, diarrhoea, cough, and dyspnoea/shortness
  of breath — plus "felt hot" and "urinary symptoms", which appear in exactly one
  rule (the AUS fever model, source 6) and are recorded there as a *parent's*
  report and as an undefined category respectively. Two of the eleven rules are
  pure laboratory panels. The rest is colour, cry, responsiveness, respiratory
  rate, perfusion and inflammatory markers.
- **The two strongest features in the literature are a clinician's and a
  parent's** — gut feeling LR+ 23, parental concern LR+ 14 — and this app can
  reach neither.
- **And the rules do not work anyway.** Source 1: none of nine reached adequate
  accuracy, IMCI sensitivity 36.7%. Source 5: Yale summary sensitivity 32.5%,
  and only Yale has ever been externally validated in a published study at all.
  Source 6: physicians' own sensitivity 10–50%.

Search B is where this packet actually came from, and the gap between the two
searches is different in kind from the previous packets':

- **Tummy:** the rules were sound instruments aimed at 8% of arrivals; the
  guideline covered the other 92%.
- **Sore throat:** the scores and the guidelines answered *different questions* —
  antibiotic stewardship versus airway safety.
- **Here: the rules and the guidelines ask the same question and largely contain
  the same variables — NICE is literally one of the entries in source 1's
  guideline table — but only the guidelines carry the disease-specific symptom
  lists.** NICE's table 3 is not a prediction rule and never appears in a rule
  comparison, and it is where nine of this packet's thirteen proposed items come
  from. **The entire UTI row — dysuria, frequency, new bedwetting, cloudy and
  dark and smelly urine, reduced fluid intake, shivering, abdominal pain — is
  invisible to Search A**, and RCH says UTI is the most common serious bacterial
  infection in exactly the child this packet serves.

For the next packet: **Search A tells you what the field can measure; Search B
tells you what the illness does to the child. When the field's instruments are
observations, Search B is not a supplement — it is the entire packet.**

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with every previous packet.** The new
   vocabulary domain here is urinary function and general illness, so it is
   ruled explicitly before anything is generated:
   - **"pee"** — never "wee", "weeing", "urinate", "urine", "pass water", "go
     for a wee". Carried from the tummy packet's decision 1, which already ruled
     "pee" and "poop"; items 4, 5 and 6 are the same vocabulary domain.
   - **"poop"** — carried unchanged from the tummy packet for item 8.
   - **"throw up"** — carried unchanged for item 7. **Never "be sick" or "feel
     sick"**: British-ambiguous, see wording cautions.
   - **"feel hot"** — not "have a temperature", not "feverish", not "burning up".
   - **"shaking"** or **"shivering"** — never "rigor", never "the shivers", never
     "chills" (US medical register, not a 6-year-old's word).
   - **"spots or a rash"** — matches the wording already shipped in
     `tummy-rash`, `chest-rash` and `back-rash`, so a child who sees both
     questions sees one phrasing. Never "purpura", "petechiae", "non-blanching",
     "lesions", "bruises".
   - **"hard to turn your head"** — never "stiff neck", "neck stiffness",
     "meningism". "Stiff" is additionally a `SENSATIONS` id and would collide.
   - **"puffy"** — carried from the limb packet's shipped `l-016`/`l-017`, if
     item 17 is ever revived. Never "swollen", "oedema", "edema".
2. **Answer types.** `FollowUpScreen` renders yes/no, count, text and voice. All
   thirteen proposed items are **yes/no**, including item 4 — *"Have you peed
   today?"* is the yes/no form of a fact whose richer form (*when*) needs a
   widget the app does not have and a clock a child cannot read. Recorded as a
   deliberate loss, not an oversight; see "Still open".
3. **Item 1 asks about the sensation, never about a measurement.** "Do you feel
   hot?" — never "have you got a temperature?", never "is your temperature
   high?", never any number. IMCI puts *"feels hot"* inside its own definition
   of fever, which is the only reason this packet is willing to lead with an
   unmeasured report at all; NICE 1.1.6 extends the same courtesy to a
   **parent's** perception and to nobody else's, and this packet does not claim
   otherwise.
4. **Items 1 and 2 are two questions and must never be fused**, even though five
   shipped questions currently fuse them. NICE lists rigors as an amber
   criterion beside the temperature criteria, not inside them, and lists
   shivering as a UTI symptom with no temperature attached. A fused yes/no
   cannot distinguish a hot child from a shaking one. **Bundling disagreement**,
   resolved the same way the sore-throat packet resolved cough and coryza:
   capture the atoms, let the nurse compose.
5. **Duration scope — and it is the opposite of every other packet in this
   repo.** The sources:

   | Source | Window |
   |--------|--------|
   | NICE (2) | 1.2.14 *"Do not use duration of fever to predict the likelihood of serious illness"* — and then, in the same recommendation, *"children with a fever lasting 5 days or longer should be assessed for Kawasaki disease"* |
   | NICE (2) | amber *"Fever for more than or equal to 5 days"*; 1.7.3 *"the fever lasts 5 days or longer"* |
   | RCH (3) | *"Children with fever for ≥5 days should be assessed for Kawasaki disease or PIMS-TS"* |
   | IMCI (4) | *"If more than 7 days, has fever been present every day?"*; *"If fever is present every day for more than 7 days, refer for assessment"* |
   | RCH prolonged (7) | *"prolonged fever refers to a fever of ≥38.0°C lasting more than 7 days without an identifiable source"* |
   | Bleeker (1) | duration of fever scored continuously, *"0.5 (0), 1(2) … ≥ 9(10)"* days |
   | Rotterdam (1) | *"Duration of Fever"* as a model term |
   | Craig (6) | *"a parental report of a temperature … within the previous 24 hours"* in the case definition |

   Ruling: **every item, every band, including `long-time`.**
   - `just-now`, `this-morning`, `yesterday`, `few-days` — full packet.
   - `not-sure` — full packet. Same convention as every previous packet.
   - `long-time` — **full packet, and this is the point.** Every other packet in
     this repo narrows at `long-time` because acute decision rules stop
     describing the child. Here the *opposite* is true: ≥5 days moves a child
     into NICE's amber column and opens the Kawasaki assessment; >7 days is the
     entry condition of an entire second guideline (source 7) whose differential
     includes malignancy. A child who has felt hot for three weeks needs these
     questions **more**, not less.

   **`meta.durations.exceptions` is therefore empty and the default carries all
   six bands.** That is a first for this repo and it is deliberate; a reviewer
   seeing an empty exceptions object should read it as decided, not as skipped.
6. **Item priority, and one question per item.** Thirteen proposed items compete
   for a cap of five (young) or six (older) **shared across every group the
   child tapped** — and because this packet serves all nine groups it is always
   competing, never alone. Never ask two questions from the same item. Order:

   `1 (feel hot) → 3 (able to drink) → 5 (hurts to pee) → 4 (peed today) →`
   `2 (shivering) → 7 (thrown up) → 11 (turn your head) → 9 (hard to breathe) →`
   `8 (runny poop) → 13 (walk or use a limb) → 10 (coughing) →`
   `12 (spots or rash) → 6 (peeing more often)`

   Rationale, because this ordering decides what a child is actually asked:
   - **Item 1 leads** because it is the complaint the packet is named for, and
     because it takes `feels-feverish` from five packets — if it does not rank
     first it may never win a slot, and the takeover would silently drop a fact
     the app currently collects five ways.
   - **Item 3 is second, ahead of every rule variable**, because inability to
     drink is a *general danger sign* in three guidelines — the top
     classification in each — and one of Craig's five cross-SBI predictors, and
     it is on IMCI's family-facing list for any sick child.
   - **Items 5 and 4 are third and fourth**, ahead of six better-cited items,
     because RCH says UTI is the most common serious bacterial infection in this
     exact child and **Search A cannot see it at all**. Ranking by citation count
     here would rank the rules' variables up and the actual disease down.
   - **Item 2 is fifth** because it is NICE's own amber criterion and the one the
     currently-shipped fused wording destroys.
   - **Items 7, 9, 10, 12 and 13 rank below all of the above despite good
     sourcing**, because each carries a fact another packet already reaches with
     a body-region anchor the general wording lacks. Being well-cited is not the
     same as being the best-placed question.
   - **Item 12 (rash) ranks twelfth despite being NICE's most time-critical red
     flag**, because presence-only is a weak shadow of "non-blanching" and three
     packets already ask it byte-identically. This is uncomfortable and is
     flagged in "Still open" rather than hidden.
   - **Item 6 is last** of the proposed set: one source, and a baseline
     comparison.

   **Proposed, not yet confirmed by review.**
7. **Age floors: none, and the reasoning differs from every previous packet.**
   No source states a floor for any item here — but that is not because the
   sources cover the app's range. It is because they mostly stop *below* it:
   NG143 is under-5s, IMCI is 2 months–5 years, Craig is under-5s, and the
   Thompson HTA notes most studies *"focused on the younger age groups"*. The
   two RCH guidelines carry no upper limit and cover every item here.

   So the honest position is: **the criteria are plain history, they are stated
   without a floor by the only two age-unrestricted sources read, and inventing
   a floor from the derivation ages would invert the usual argument** — these
   populations are *younger* than the app's users, not older, so a validity
   concern points upward, not downward. Source 8 supplies the affirmative half:
   children aged **4–7** understood and completed a structured self-report
   symptom instrument. `minAge` is `{}`.

   **One exception, and it is not shipped.** Item 15 (new bedwetting) would need
   `minAge: 7` if it were ever revived — **JUDGEMENT, NOT A CITATION**, recorded
   in `minAgeNotes` — because "new" is a comparison against a continence
   baseline a 4-year-old may not have. It is not proposed for v1, so no floor
   ships.
8. **`depth: null`, because the nine groups do not share a gate.** `GROUP_GATE`
   gives `head` a mechanism gate, gives `chest`/`tummy`/`limb`/`back` a depth
   gate, and gives `throat`/`ears`/`eyes`/`mouth` no gate at all. `bankQuestions`
   applies its depth filter only when `q.applies.depth` is set, and
   `build-bank.mjs` emits no `depth` key when the sidecar's is falsy — so `null`
   makes these questions fire for every child regardless of which gate their
   region asked, which is correct. **Writing `"depth": "inside"` would look more
   informative and would suppress this entire packet for a child who answered
   "on my skin"** — and a febrile child with a rash is the highest-priority child
   in NG143. Null is the only honest and the only safe encoding.
9. **The "feels feverish" takeover is deliberate and must be executed at
   generation time.** Item 1's candidates take `fact: "feels-feverish"`. The
   five existing carriers (`l-007`, `l-008`, `s-020`, `c-023`, `e-019`, `t-019`
   — six candidates across five packets) **stay in their banks and are not
   edited by this run**, which writes only `packet.md` and `meta.json`. Dedupe
   is by fact in `keyOf`, so whichever question reaches a slot first carries the
   answer and the others are suppressed; if this packet's candidate is rejected
   in review, the five region-anchored wordings still work. Deleting them would
   convert a rejection here into a silent loss of a fact the app collects today.
10. **Redundancy against what the app already collects — and this is the
    decision that matters most for a cross-cutting packet.** Checked item by
    item against body region, gate, intensity, duration, sensations, mood, the
    hand-written follow-ups, and **every other packet's shipped questions**:
    - **Rejected as duplicates:** item 19 (`DURATIONS`), item 20 (setup age),
      item 21 (body map and FPS-R), item 22 (`MOODS.tired`), item 23
      (`SENSATIONS.queasy`), and the whole of item 24 — headache, tummy pain,
      sore throat, earache, limb pain, red eyes — each of which is another
      body-map region with its own group and, in five cases, its own shipped
      packet. **This is the largest rejection block in any packet so far and it
      is the specific tax of being cross-cutting**: a general packet's most
      obvious questions are precisely the ones the body map already answers.
    - **Kept, with an existing fact assigned:** items 3, 7, 9, 10, 12 and 13.
      These are duplicates of *wording* but not of *reach*: the region packets
      that carry these facts are group-scoped and depth-scoped, so none of them
      fires for a child who taps, say, only their ear. The fact dedupe resolves
      the collision correctly and cheaply — one of the two questions is
      suppressed and the fact is still collected.
    - **Kept despite a same-fact collision the app cannot yet dedupe:** item 5
      (hurts to pee) versus tummy's accepted `t-006`, and item 8 (runny poop)
      versus tummy's accepted `t-012`. **Neither tummy candidate carries a
      `fact`**, so today the app would ask both. Proposed slugs are
      `painful-peeing` and `runny-poop`; this run cannot set them on tummy's
      candidates because it writes only two files. Carried to "Still open" as a
      concrete one-line fix.
    - **Kept despite a wording collision:** item 11 (turn your head) versus the
      throat packet's item 9, which asks the same thing for a child with a sore
      throat. Neither carries a fact today. A shared `neck-movement` fact would
      resolve it.
    - **Not kept:** item 14 (photophobia) duplicates the hand-written
      `light-hurts`; item 17 (puffy hands or feet) duplicates `limb-swelling`.
    - **Adjacent, not redundant:** item 3 (able to drink) touches `HELPS.water`
      ("A drink of water") and `HELPS.food`. `HELPS` records what the child
      *wants*; item 3 records what they have *managed*. Item 4 (peed today)
      touches `HELPS.bathroom` ("Go to the bathroom") the same way, and touches
      tummy's accepted `t-010` ("Did you poop today?") not at all — different
      excretion, different criterion, different source.
11. **Item 12 (rash) is kept, ranked twelfth, and marked as belonging to a
    packet that does not exist yet.** `packets/skin/rash/` is row 2 of the plan
    and is explicitly anchored on *"NICE — incl. non-blanching rash"*. When it
    ships it should own the `rash` fact and this row becomes a cross-reference.
    Kept here because deleting NICE's leading red-flag feature from a fever
    packet on the grounds that a better packet is coming would be an omission
    dressed as a decision, and because until that packet exists a child who taps
    their ear is asked about a rash by nobody at all.
12. **Nothing in this packet may be presented as reassurance.** Source 5:
    *"even in children with a serious infection, red flags will occur
    infrequently owing to their low sensitivity; therefore, their absence does
    not lower the risk of a serious infection."* A report of thirteen "no"
    answers means nothing. This is a constraint on the **nurse-facing surface**,
    which does not exist yet, and it is recorded here because that surface will
    be built from these packets and the temptation to render a clean report as a
    green tick will be strong.

## Still open

- **The 5-day and 7-day thresholds are not expressible.** `DURATIONS` offers
  `just-now` / `this-morning` / `yesterday` / `few-days` / `long-time` /
  `not-sure`. NICE and RCH both cut at **5 days** (Kawasaki, and the amber
  column); IMCI and RCH-prolonged both cut at **7 days** (referral, and a whole
  second guideline). `few-days` straddles five and `long-time` straddles seven.
  This is the sharpest instance of the duration-band problem in the repo,
  because unlike head injury's fall height it is not a rule's arbitrary
  cut-off — two independent guidelines chose the same 5-day boundary and two
  chose the same 7-day one. The nurse has the arrival date and the child's
  answer to `DURATIONS`, so it is probably recoverable; a reviewer should
  confirm, and a future `DURATIONS` revision should consider a "more than a
  week" band.
- **`t-006` and `t-012` need facts.** One line each in
  `packets/tummy/acute-pain/candidates.json` (`painful-peeing`, `runny-poop`),
  plus the matching assignment on this packet's items 5 and 8 at generation.
  Without it a child who taps their tummy is asked about painful peeing twice.
  Concrete, small, and outside this run's two-file remit.
- **Item 11 and throat item 9 ask the same thing.** A shared `neck-movement`
  fact would resolve it. Note that `neck` is in group `throat`, so a child who
  taps their neck reaches both packets.
- **Item 4 loses its best form.** *"When did you last pee?"* is the criterion;
  *"Have you peed today?"* is what a yes/no widget can carry. A `text` or
  `count` answer would be worse (a child cannot read a clock reliably at 5), so
  this may be as good as it gets — but NG51, which was not read, is the
  guideline most likely to state an explicit urine-output interval, and it
  should be fetched before this item is considered settled.
- **NICE NG51 was not read** and it governs the worst outcome of this complaint.
  Nothing here depends on it, but the next run on this packet should fetch it
  first.
- **The rash item has no good home and three copies.** Same architecture
  question the sore-throat packet raised, now with a fourth instance. Resolves
  when `packets/skin/rash/` ships.
- **The unreachable column has no owner.** "An empty report from a febrile child
  is not a null result" is a statement about the nurse-facing surface, which
  does not exist. It needs to survive into whatever is built there, and this
  packet is currently the only place it is written down.
- **The carer-judgement gap (item 30) is the largest single loss in this
  packet** and it is not a wording problem. LR+ 14 for parental concern is the
  second-highest number in the literature read, and the app has no adult
  channel. Whether the nurse-facing surface should carry a "what does the adult
  think?" field is a product question this packet cannot answer, but it should
  be asked.
- **Source 8 is a paediatric oncology population.** There is no evidence in this
  packet that a child reports *acute febrile* symptoms as reliably as
  chronic-treatment symptoms, and none at all about an unassisted child. The
  `young` tier carries more risk here than the `older` tier and should be
  reviewed as such — the same caution the sore-throat packet recorded about its
  post-tonsillectomy source, now for a second time and from a second direction,
  which suggests the repo has no source at all validating unassisted acute
  self-report by a 4-year-old.
- **Sources 2 and 3 are not independent.** RCH's "Features suggestive of an
  unwell child" is *"Adapted from: Feverish illness in children NICE guideline
  2019"*. Where an item cites both, that is one source cited twice, and the
  `cite` strings say so but a casual reader may not notice.
- **Item 6 (peeing more often) is the weakest proposed item** — one source, and
  a self-baseline comparison. First candidate to drop if review wants a shorter
  set.

## Ambiguity in the sources

Recorded rather than papered over.

- **The IMCI chart booklet extracts partly as a shift-3 substitution cipher.**
  Two of the passages quoted from source 4 — the fever module's opening line and
  its repetition in the recording form — arrive as
  `E\KLVWRU\RUIHHOVKRWRUWHPSHUDWXUH&` and
  `'2(67+(&+,/'+$9()(9(5"`, which decode letter-by-letter to *"by history or
  feels hot or temperature …"* and *"DOES THE CHILD HAVE FEVER?"*. The decode
  was verified two ways: the shift is uniform across the run, and the two
  garbled occurrences are in different parts of the document and decode
  consistently. **The numeral and the degree symbol are lost in both**, so
  "37.5 °C" in the quotation above is reconstructed from the surrounding
  structure and from IMCI's published threshold, **not read**. Everything else
  quoted from source 4 — the danger signs, the WHEN TO RETURN IMMEDIATELY list,
  the dehydration assessment, the 7-day line — extracted cleanly and is
  verbatim. `fetch-source.mjs` reported this file as readable, which for most of
  it is true; the cipher regions are a font-encoding artifact of the PDF and a
  future run should not assume a clean extraction means a wholly clean file.
- **Nine of the eleven rules and four of the five guidelines in Keitel's tables
  were read at one remove.** Yale, the five-stage decision tree, Bleeker,
  Thayyil, Lab Score, the SBI risk score, the Rotterdam Fever Model and the
  three pneumonia rules are known only through source 1's Table 1; iCCM,
  ALMANACH and AAEP only through its Table 2. **Two exceptions:** the AUS fever
  model is source 6, read first-hand, and NICE is source 2, read first-hand. So
  two of sixteen trace to a primary source and the rest are quoted from a single
  secondary reproduction, without the second independent reproduction the
  sore-throat packet was able to get for McIsaac. A reviewer should treat every
  Keitel-only predictor list as accurate transcription of a table, not as
  verified against the original.
- **Keitel's setting is not this app's setting, and the mismatch is large.** A
  Tanzanian outpatient dataset collected in 2008, in which malaria is a
  competing diagnosis for most febrile children and the reference standard
  required microbiological confirmation. Its *enumeration* of rules and
  variables transfers; its **performance figures do not**, and this packet
  quotes them only to establish that the rules failed somewhere, never as an
  estimate of how they would perform here. Keitel says as much: its own
  conclusion is scoped *"in a tropical, low-resource setting"*.
- **Source 5 was read as an executive summary only.** The full HTA report is a
  book on NCBI Bookshelf; the summary is one chapter of it. Every likelihood
  ratio quoted is one the summary itself states. The per-study detail behind
  them — which single low-prevalence study produced the LR+ 23 and LR+ 14
  figures, and what its confidence intervals were — is in chapters that were not
  opened. Since those two figures carry two of this packet's three headline
  limits, that is a real gap, and the summary's own hedge is reproduced above
  verbatim: *"based on a single study from a low-prevalence setting."*
- **NICE gives no fever threshold at all for the app's age range.** 1.2.12 and
  1.2.13 give thresholds for under-3-months and 3–6-months; 1.2.11 then says
  *"In children older than 6 months do not use height of body temperature alone
  to identify those with serious illness."* So for every child this app serves,
  the primary anchor deliberately declines to define the thing the packet is
  named after. That is not an ambiguity in the guideline — it is a
  recommendation — but it means the fever threshold table above has a hole
  exactly where the app lives.
- **RCH files "Fever" under Examination while every rule treats it as history**,
  and files photophobia, vomiting and diarrhoea under History while NICE has no
  History section at all. The self-report filter here had to be applied to the
  *criterion*, never to the heading it sits under — the same trap the
  sore-throat packet recorded, now confirmed across a second complaint.
- **NICE's traffic light table conflates symptoms and signs by design.** Its own
  column heading is *"symptoms and signs"*, and 1.2.3 says to assess *"the
  presence or absence of symptoms and signs"* without distinguishing them. Every
  row in the Colour and Activity columns is a sign; the "Other" column mixes an
  age-and-temperature rule, a duration, a symptom (rigors) and two examination
  findings. There is no line in the source separating what is asked from what is
  observed, so **the entire clean/excluded split in this packet's items table is
  the packet's own reading of NICE, not NICE's own classification.** That is the
  single largest interpretive act in this document and a reviewer should check
  it first.
- **Source 6's "felt hot" is a parent's report inside a case definition, not a
  predictor.** Keitel's Table 1 lists *"felt hot"* among the AUS fever model's
  predictors; source 6, read at first hand, uses it in the *enrolment* criteria —
  *"a parental report that the child 'felt hot' in the previous 24 hours"*.
  Whether it also entered the fitted model is not stated in the passages read.
  Item 1 cites both, and the difference is recorded here rather than smoothed
  over, because it is the difference between "a rule scores this" and "a study
  counted a child as febrile on this basis". The second is arguably the stronger
  claim for the packet's purposes and the weaker one for the rule's.
- **Source 9 is a letter, not a paper.** Its 71.8% self-limiting figure comes
  from 270 children selected out of 4,201 as having fever without focus, at a
  single Iranian referral centre, with ~85% under 5. It is used for one sentence
  in "What actually walks in" and nothing depends on it. It is included because
  it was read and because the brief forbids citing what was not read — not
  because it is strong evidence.
- **Nothing in any source read describes a child reporting these symptoms
  unassisted.** Source 8 comes closest and is an oncology instrument
  administered in a clinic. The whole packet rests on the assumption that a
  child of 4–12 can answer a yes/no question about their own body, which is
  plausible, partially evidenced for 4–7 by source 8, and **not validated for
  any item here**.
