# Sore throat

Presenting complaint · packet `sore-throat` · serves group `throat`, **no depth
scope** · packet v1 · assembled 2026-08-31
Status: **not yet clinically reviewed** · sources verified first-hand: 8 of 8

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
> who arrives with a sore throat, and marks which of those a child can report
> about themselves. **Not** a diagnostic tool: nothing here may be scored,
> summed, or shown to a child or nurse as a suggested cause. The prediction-rule
> literature for this complaint is entirely *group A streptococcus* literature
> and exists to decide who gets an antibiotic; the packet is organised by the
> complaint the child arrives with, and no condition name reaches runtime.

## Scope

**Age.** App covers 4–12. Unlike the tummy packet, **no item here carries an
age floor**, and that is a finding rather than an oversight — see decision 7.
The scores were derived across 0–18 (Joachim 0–15, Attia 1–18, Wald 2–16,
McIsaac and Cohen's validation cohort 3–14), so every score-derived item in this
packet also appears in a score validated at or below 3. The two age statements
that *are* in the sources are about disease frequency, not about whether a child
can answer:

- RCH: *"GAS pharyngitis is uncommon under 4 years of age."* (source 3)
- NHSGGC, reporting its own local ROC analysis of 335 RHC ED swabs: *"there was
  reasonable accuracy in children aged 5 years and over… application of
  FeverPAIN showed no significant benefit in children under 5 years of age."*
  (source 4)

Neither floors an item, because no item in this packet exists *only* because
FeverPAIN names it — cough and fever, the two FeverPAIN variables a child can
answer, are also in Centor, McIsaac, Wald, Breese and Fujikawa. Inventing a
floor from FeverPAIN's weakness below 5 would be exactly the invented citation
the brief warns about.

**Depth.** **Group `throat` is marked `internal` in `src/data/bodyMap.js`, so
the depth question is never asked for it.** `depthGroupsForRegions` filters on
`GROUP_DEPTH[g] === 'ask'`; `throat` is `'internal'`, so it is filtered out,
`depths['throat']` is never populated, and `followUpsForGroups` passes `null`
into `bankQuestions`. Consequences, all deliberate:

- This packet is **not depth-scoped**. The sidecar carries `"depth": null`, not
  `"inside"`. See decision 8 — writing `"inside"` would be a scope claim the app
  never tests and never could, since no answer exists to test it against.
- There is **no `surface` sibling packet for `throat`** and there never will be,
  which is a real problem for the one criterion in this packet that is a skin
  finding: scarlatiniform rash (item 14). The tummy packet could push rash to a
  surface packet. This one has nowhere to push it. See decision 9.
- The vocabulary lists are **not pruned** for a throat-only report. `activeDepths`
  returns `['surface','inside']` when no depth was recorded, so a child who taps
  only Throat is still offered `itchy`, `queasy`, `cramping`, `bandage` and
  `clean-it`. That is a pre-existing app behaviour, not something this packet
  introduces, but it changes the redundancy analysis in decision 10 — `queasy`
  *is* offered to this child.

**Group `throat` is wider than "throat".** It contains two regions: `throat`
(head detail view, label "Throat") and **`neck`** (front body view, label
"Neck"). `back-neck` belongs to group `back`, so only the front of the neck is
in scope. A child with a pulled neck muscle, a lump, or neck pain after a fall
taps Neck and receives sore-throat questions. Partly this is right — RCH lists
*"Neck stiffness/fullness"* and *"Torticollis"* among sore-throat red flags, and
retropharyngeal abscess presents as *"Neck pain and stiffness or torticollis"*
(source 5) — but "my neck hurts" is not the same presenting complaint as "my
throat hurts". Carried to "Still open".

**Out of scope by age or setting, and not carried:** infant presentations
(source 5 notes infants are most at risk of severe upper airway obstruction and
that retropharyngeal abscess presents with neck swelling *"particularly in young
infants"* — all observer items about a pre-verbal child); anaphylaxis (source 5
lists face and tongue swelling, urticaria, allergen exposure — a different
presenting complaint with its own emergency pathway); airway burns and neck
trauma (source 5); anything requiring a swab, bloods or imaging; antibiotic
choice and dosing, which is most of what these guidelines are about.

## Sources

1. **Cohen JF, Cohen R, Levy C, Thollot F, Benani M, Bidet P, Chalumeau M.**
   "Selective testing strategies for diagnosing group A streptococcal infection
   in children with pharyngitis: a systematic review and prospective multicentre
   external validation study." *CMAJ* 2015;187(1):23–32. **Read first-hand** via
   PMC4284164. **This is the discovery source.** It systematically searched
   MEDLINE and Embase 1975–2014 for every clinical prediction rule for
   paediatric GAS pharyngitis, found eight, and validated six head-to-head in
   one French cohort of 676 children. Table 2 lists each rule's predictors in
   the fetched text — unlike the tummy packet's equivalent source, whose
   per-rule tables were in an unfetched appendix. Its own Appendix 6 (full
   predictor definitions and weights) is *not* in the fetched text; see
   "Ambiguity".
2. **NICE guideline NG84, "Sore throat (acute): antimicrobial prescribing"**,
   published 26 January 2018. **Read first-hand** — both the *Recommendations*
   and the *Terms used in the guideline* pages, via
   `scripts/fetch-source.mjs`. Supplies FeverPAIN and Centor verbatim, which
   Cohen's systematic review does not cover (Centor was derived in adults;
   FeverPAIN post-dates the search).
3. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Sore throat"**, last updated October 2024. **Read first-hand.** The primary
   complaint-organised source. Its History section is eight bullets long and
   only two of them are child-reportable; its Red flags list is the single most
   useful artefact in this packet.
4. **NHS Greater Glasgow & Clyde, Paediatric Clinical Guideline 336, "Acute sore
   throat, Paediatrics"**, version 4, last reviewed 26/02/2026, authors
   Selvamani A and Foster S, RHC Glasgow. **Read first-hand.** A second
   complaint-organised guideline, written for a paediatric ED, and the only
   source read that states an explicit **discharge-advice red-flag triad** in
   words a family is expected to act on.
5. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Acute upper airway obstruction"**, last updated March 2021. **Read
   first-hand.** Reached from source 3's own "See also" line. Supplies the
   differential table — croup, retropharyngeal abscess, quinsy, epiglottitis,
   bacterial tracheitis, inhaled foreign body — with features listed per cause.
6. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Croup (Laryngotracheobronchitis)"**, last updated September 2024. **Read
   first-hand** (present in the shared `packets/.sources/` cache; text read in
   full). Used for barking cough, hoarse voice and the explicit instruction that
   *"Throat examination is rarely required"*.
7. **Jääskeläinen J, Renko M, Kuitunen I.** "Centor scores associated poorly
   with rapid antigen test findings in children with sore throat." *Eur J
   Pediatr* 2024;184(1):4. **Read first-hand** via PMC11554731. Retrospective
   cohort, 464 children 0–15 in a Finnish paediatric ED, mean age 9.0. Supplies
   the prevalence anchor and the sharpest statement of how badly the score
   travels into children.
8. **Alm F, Lundeberg S, Ericsson E.** "Postoperative pain, pain management, and
   recovery at home after pediatric tonsil surgery." *Eur Arch Otorhinolaryngol*
   2021;278(2):451–461. **Read first-hand** via PMC7826305. The self-report
   evidence: 299 children **aged 4–17**, self-rating throat symptoms daily on
   the **Postoperative Recovery in Children (PRiC)** questionnaire and pain on
   the **FPS-R — the same instrument this app's intensity screen is modelled
   on**. **Limits worth knowing:** a Swedish post-tonsillectomy population, not
   an ED presentation; the recovery being described is surgical, not infective;
   *"the caregivers were encouraged to help the child complete their section of
   the diary, emphasising the child's assessment to be recorded"*, so these are
   assisted self-reports, not unsupervised ones; and the paper reports a low
   response rate. It supports "a child of 4–11 can report throat pain,
   difficulty eating and difficulty talking about themselves"; it validates
   nothing about a tablet with no adult beside it.

**Attempted and not used.**

- **IDSA clinical practice guideline for GAS pharyngitis** (`academic.oup.com`
  CID) — **HTTP 403, not read.** Nothing here depends on it. Named only because
  source 4 cites Shulman 2012 for the "<1/3 of cases" figure, and a future run
  should try harder: it is the guideline most likely to state a paediatric
  testing threshold explicitly.
- **The PRiC development and validation paper** (Nilsson/Ericsson, via Malmö
  University DiVA) — the repository refused the fetch twice (`fetch failed`,
  not a bot wall). **Not read.** Everything this packet says about PRiC comes
  from source 8's description of it. In particular the widely quoted figure for
  what proportion of children circled the answers themselves is **not cited
  here**, because it appears only in the paper that could not be read.
- **WHO IMCI chart booklet** (`cdn.who.int`, present in the shared cache) —
  **read, and it contains no sore-throat assessment module at all.** The only
  occurrences of "throat" in 130,000 characters are the treatment instruction
  *"Soothe the throat and relieve the cough with a safe remedy"* under COUGH OR
  COLD. Recorded because the brief names IMCI as a Search B candidate and, for
  this complaint, it is a dead end: the throat assessment exists only in
  ARF-endemic national adaptations, not in the generic booklet.

## The rule(s), as published

### The eight paediatric rules, verbatim predictor lists (source 1, Table 2)

> **Forsyth** — "Temperature, enlarged tender nodes (1 or ≥ 2), exudate (1
> patch, ≥ 2 patches or confluent, purulent exudate), infectious mononucleosis
> syndrome (mucoid exudate and multiple small nodes), influenzal syndrome (fever
> and myalgia but no exudate or adenitis)"
>
> **Breese** — "Month in which the patient is seen, age, leukocyte count, fever
> ≥ 100.5°F, sore throat, cough, headache, abnormal pharynx (redness, swelling,
> exudate, petechiae, 'doughnut lesions' or ulcerations), abnormal cervical
> nodes (very enlarged without tenderness or if palpable and tender)"
>
> **Fujikawa** — "Fever > 37.5C°, sore throat, nausea or vomiting, anorexia,
> absence of cough or rhinorrhea, pharynx (dark red or petechiae), cervical
> lymph node swelling, tonsillar exudate (white spotty), rash (scarlet
> fever-like, erythema or urticaria), strawberry tongue or marked papillae"
>
> **Wald** — "Age, season, fever ≥ 38.3°C, adenopathy (cervical lymph nodes
> ≥ 1 cm or tender to palpation), pharyngitis (erythema, swelling or exudate of
> pharynx or tonsils), no upper respiratory symptoms (rhinorrhea, cough or
> conjunctivitis)"
>
> **Edmond** — "Age, scarlatiniform rash, pharyngotonsillitis (diffuse
> pharyngeal erythema and swollen, edematous tonsils), tender cervical nodes"
>
> **McIsaac** — "Temperature > 38°C, no cough, tender anterior cervical
> adenopathy, tonsillar swelling or exudate, age"
>
> **Attia** — "Scarlatiniform rash, moderate to severe tonsillar swelling,
> moderate to severe tenderness and enlargement of cervical lymph nodes, absence
> of moderate to severe coryza"
>
> **Joachim** — "Age, bacterial signs (tender cervical node, headache, petechiae
> on the palate, abdominal pain, sudden onset [< 12 h]), viral signs
> (conjunctivitis, coryza, diarrhea)"

And the sentence that should be read before any of them:

> "The 5 most frequent predictors used were tenderness of lymph nodes, fever,
> age, tonsillar swelling and exudate."

**Four of those five are examination or measurement, and the fifth the app
already knows.** Not one of the five most-used predictors in the entire
paediatric literature for this complaint is something a child can report about
themselves. That single sentence is why this packet's clean yield is lower than
the tummy packet's, and it is not a defect in the search.

### FeverPAIN and Centor, verbatim (source 2)

> **FeverPAIN criteria** — "**F**ever (during previous 24 hours) · **P**urulence
> (pus on tonsils) · **A**ttend rapidly (within 3 days after onset of symptoms) ·
> Severely **I**nflamed tonsils · **N**o cough or coryza (inflammation of mucus
> membranes in the nose)"
>
> **Centor criteria** — "Tonsillar exudate · Tender anterior cervical
> lymphadenopathy or lymphadenitis · History of fever (over 38 degrees Celsius) ·
> Absence of cough"

And McIsaac's age term, verbatim (source 4):

> "History of fever +1 point · Tonsillar exudate +1 point · Tender enlarged
> cervical lymph nodes +1 point · Absence of cough +1 point · Aged 3-14 years
> +1 point · Aged 15-44 years 0 points"

### The fever threshold problem

Exactly the shape of head injury's fall-height problem and the tummy packet's
temperature problem, but with **six sources and five incompatible thresholds**:

| Source | Threshold |
|--------|-----------|
| Fujikawa (1) | fever > 37.5 °C |
| Breese (1) | fever ≥ 100.5 °F (≈ 38.06 °C) |
| McIsaac (1), Centor (2) | temperature / history of fever > 38 °C |
| Wald (1) | fever ≥ 38.3 °C |
| FeverPAIN (2) | "fever during previous 24 hours" — **no number at all** |
| RCH (3) | "Fever", listed under Examination — no number |

A child cannot measure a temperature and cannot classify one. Same resolution as
the tummy packet: **capture the raw fact, let the nurse classify.** The child is
asked whether they feel hot or shivery (item 13); the nurse holds the
thermometer and picks a threshold. The child never sees a number.

### The cough-and-coryza bundling problem — a *different* kind of disagreement

This one is not a threshold. Six rules name cough and nasal symptoms, and **no
two of them bundle the pair the same way**:

| Rule | How cough and coryza are combined |
|------|-----------------------------------|
| Centor, McIsaac (2, 4) | *"Absence of cough"* — cough alone, coryza absent from the rule |
| FeverPAIN (2) | *"No cough or coryza"* — one point for the pair |
| Fujikawa (1) | *"absence of cough or rhinorrhea"* — one variable for the pair |
| Wald (1) | *"no upper respiratory symptoms (rhinorrhea, cough or conjunctivitis)"* — a **three**-way bundle |
| Attia (1) | *"absence of moderate to severe coryza"* — coryza alone, **graded**, cough absent from the rule |
| Joachim (1) | conjunctivitis, coryza and diarrhoea are three separate *"viral signs"*; cough is not a variable |
| Breese (1) | *"cough"* — scored as a present-positive, not an absence |

**Ruling: ask cough and nose as two separate questions and let the nurse
combine them.** Any bundled question ("do you have a cough or a runny nose?")
silently picks one rule's bundling and destroys the information the other five
need — a child with a runny nose and no cough scores differently under FeverPAIN
than under Centor, and a fused yes/no cannot tell them apart. This is the same
principle as "never pick one threshold", applied to composition rather than to a
cut-off, and it is worth naming as its own category: **bundling disagreement.**

Note also that Attia grades coryza *moderate to severe*, which is an examiner's
grading and is not child-reportable; item 4 captures presence only.

### The general guidance, verbatim (source 3)

RCH's **entire History section**, in full:

> "Age and ethnicity · Oral intake · Associated viral features (cough, coryza,
> conjunctivitis, oropharyngeal ulcers, diarrhoea, typical viral rash) ·
> Infectious contacts · Household crowding · Immunosuppression (increased risk of
> iGAS and suppurative complications) · Immunisation status (in particular HiB
> vaccination) · High-risk groups for developing acute rheumatic fever … ·
> Aboriginal and/or Torres Strait Islander people · Māori and/or Pacific
> Islander people · Personal history of rheumatic fever or rheumatic heart
> disease · Those living in communities with high rates of ARF"

Eight bullets. **Two of them are the child's** — oral intake, and the
child-visible half of "associated viral features". Everything else is a carer's
or a record's. See "The ARF branch" below.

Examination, in full:

> "Hydration status · Fever · Oral/pharyngeal ulcers · Tonsillar exudates,
> hypertrophy, asymmetry · Uvula deviation · Tender anterior cervical
> lymphadenopathy · Hepatosplenomegaly (EBV, CMV) · Features of scarlet fever
> (GAS toxin response): blanching, erythematous, sandpaper-like rash, usually
> more prominent in skin creases · flushed face/cheeks with peri-oral pallor ·
> red strawberry tongue · confluent petechiae in skin creases (Pastia lines)"

**Red flags**, verbatim — the most valuable eleven lines in this packet:

> "Unwell/toxic appearance · Respiratory distress · Stridor · Trismus ·
> Drooling · 'Hot potato' voice (muffled voice associated with
> pharyngeal/peritonsillar pathology) · Torticollis · Neck stiffness/fullness"

And the escalation criteria, verbatim: *"Consider consultation with local
paediatric team when: Systemically unwell · Suppurative complications are
present · Evidence of moderate/severe dehydration · Significant pain poorly
responsive to supportive management"*; *"Consider discharge when: Pain relief is
adequate · **Tolerating appropriate oral intake**"*.

Suppurative complications, verbatim:

> "Peritonsillar abscess (Quinsy): Fever, odynophagia, dysphagia
> (pooling/drooling), 'hot potato' voice, trismus, peritonsillar
> swelling/erythema, uvula deviation"
>
> "Retropharyngeal/parapharyngeal abscess: Fever, odynophagia, dysphagia, neck
> swelling/tenderness (particularly in young infants), torticollis, limitation
> of neck extension, retropharyngeal bulge"
>
> "Epiglottitis/Bacterial tracheitis: Abrupt onset, respiratory distress, high
> grade fever, toxic looking, odynophagia, dysphagia, stridor, muffled
> 'hot-potato' voice, tripod position with neck extension, cervical
> lymphadenopathy"

### The second complaint guideline, verbatim (source 4)

History: *"Fever · Non-specific symptoms: Headache · Nausea · Vomiting ·
Reduced oral intake · Abdominal pain · Rhinorrhea, nasal congestion and cough
usually present in viral pharyngitis and not bacterial pharyngitis"*

Discharge advice — **the triad, verbatim**:

> "Seek urgent advice if there is: Difficulty swallowing saliva/liquids ·
> Difficulty breathing · One-sided throat swelling"

That is a red-flag list written to be understood and acted on by a family with
no clinical training, which makes it the closest thing in the literature to a
list of things a **child** could notice. All three become items (2, 8, 7).

Quinsy, verbatim: *"severe sore throat often unilateral · hot potato voice ·
drooling · trismus · neck swelling · **referred ear pain**"*. Retropharyngeal
abscess adds *"dysphagia · odynophagia · drooling · torticollis · muffled voice ·
neck mass · trismus · chest pain"*. Infectious mononucleosis: *"suspect if sore
throat fails to improve/worsens … fatigue/malaise"*.

Supportive care, verbatim, and worth noting for the `HELPS` list: *"Adequate
fluids · **Avoid hot drinks which can exacerbate pain** · Gargling with warm
salt water"*.

### The airway differential, verbatim (sources 5 and 6)

Croup (source 6, Examination): *"Barking cough · Stridor · Hoarse voice or cry ·
May have associated widespread wheeze · Increased work of breathing"*. Source 5
adds *"Rapid onset harsh barking cough · Hoarse voice/cry"*. Inhaled foreign
body, verbatim: *"Very sudden onset · Coughing, choking, vomiting episode (**may
not be witnessed**)"* — that parenthesis is the whole argument for item 12.

Source 6 also states, flatly: ***"Throat examination is rarely required"*** and
*"Children with croup should have focused examination so as not to upset them
further"*. Source 3 says the same for airway obstruction: *"Children with signs
of acute upper airway obstruction should have minimal examination to not upset
the child further"*. **A guideline that tells a doctor not to look in the throat
is also telling this app not to ask a child to.** See wording cautions.

### What the scores are actually worth here (sources 1, 4, 7)

Source 1: *"None of the rules-based selective testing strategies achieved our
diagnostic accuracy target (sensitivity and specificity > 85%)"* and *"None of
the clinical prediction rules were able to identify patients at low risk … or
high risk"*. Areas under the ROC curve ranged **0.56–0.62**.

Source 7: *"Sensitivity of Centor score ≥ 3 for rapid antigen test positivity
was 22.3 … and specificity 79.0%"*, concluding *"The Centor score alone does not
seem to be of any utility in guiding the diagnosis of suspected streptococcal
pharyngitis."*

Source 4: *"On external prospective validation, the McIsaac score showed
insufficient diagnostic accuracy of infection with GAS without the use of
microbiological testing."*

**This is materially different from the tummy packet's situation.** There, the
prediction rules were sound instruments aimed at the wrong 8%. Here, every
validation source read reports that the rules **do not work well in children
even for the one thing they were built for**. That does not make their variables
worthless — they are still what clinicians assess, which is all this packet
collects — but it does mean no item should be ranked highly *because* a score
names it. Items 1 and 2 outrank item 3 for exactly that reason.

### What actually walks in (sources 1, 4, 7)

- Source 1: *"Group A streptococcus is found in 30%–40% of cases of childhood
  pharyngitis; the remaining cases are considered viral."* Its own cohort: 41%.
- Source 7: *"Group A streptococcal infections (GAS) account for circa 24–37% of
  acute pharyngitis cases in children."*
- Source 4: GABHS *"is reported to account for less than a third of all cases of
  acute pharyngitis … and tonsillitis in children."*
- Source 3: *"Viral pharyngitis is the most common cause of sore throat in
  children."*

So roughly **two thirds of these children are viral**, and ten scores exist to
find the other third. But that is the smaller half of the gap — see "How these
were found".

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Does it hurt to swallow** | RCH (3) — *"odynophagia, dysphagia"* under every suppurative complication; NHSGGC (4) — *"dysphagia · odynophagia"*; RCH AUAO (5) — *"Dysphagia and drooling"*, *"Dysphagia"*; Alm (8) — self-reported *"sore throat"* and *"difficulties eating"* | **yes** | **The flagship item, and it is in no prediction rule.** Odynophagia does not appear in a single one of the ten scores in this packet; it appears in every guideline read, attached to every complication that needs an ENT referral. The app already ships the hand-written `hurt-swallow`; re-sourced here so it survives (see decision 11). Alm shows 4–11 year olds self-rate exactly this. |
| 2  | **Can you swallow your spit / your drink** | NHSGGC (4) — *"Seek urgent advice if there is: Difficulty swallowing saliva/liquids"*; RCH (3) — *"Drooling"* as a red flag; RCH (3) — *"dysphagia (pooling/drooling)"*; RCH AUAO (5) — *"Pooling of secretions, drooling"* | **yes** | The escalation item. **Distinct from item 1**, and the split matters: item 1 is pain, this is *failure*, and a child who cannot clear their own saliva is the one who needs an airway-capable clinician now. Source 4 puts it in words written for a family to act on, which is the strongest evidence in this packet that a non-clinician can notice it. See "Items 2 and 15" for why observed drooling stays excluded. |
| 3  | **Have you been coughing** | Breese, Fujikawa, Wald, McIsaac, Joachim (1); FeverPAIN, Centor (2); McIsaac (4); RCH (3) — *"Associated viral features (cough…)"*; NHSGGC (4) | **yes** | **The only score variable in the entire literature that a child can answer unaided.** Seven of the ten scores contain it. App already ships the hand-written `cough`; re-sourced so it survives (decision 11). Note the polarity: the scores use *absence* of cough as a bacterial sign, so a "yes" makes strep *less* likely — the question is neutral, the interpretation is the nurse's, and nothing in the app may invert it. |
| 4  | **Runny or stuffy nose** | Fujikawa (*"rhinorrhea"*), Wald (*"rhinorrhea"*), Attia (*"coryza"*), Joachim (*"coryza"*) (1); FeverPAIN (2) — *"No cough or coryza"*; RCH (3) — *"coryza"*; NHSGGC (4) — *"Rhinorrhea, nasal congestion"* | **yes** | Six sources, plainly child-reportable, and **asked separately from item 3 on purpose** — see the bundling problem above. Attia's *"moderate to severe"* grading is an examiner's and is not carried; presence only. |
| 5  | **Is it hard to talk, or does your voice sound different** | RCH (3) — *"'Hot potato' voice"* red flag; NHSGGC (4) — *"hot potato voice"*, *"muffled/hoarse voice"*; RCH AUAO (5) — *"Able to speak or cry, may be hoarse"*, *"Muffled voice"*; croup (6) — *"Hoarse voice or cry"*; Alm (8) — *"difficulties talking"* self-reported | **yes** | **A textbook nearly-reportable criterion, split rather than reclassified.** "Hot potato voice" is a *listener's* characterisation — the clinician hears the muffling and names it. A child cannot hear their own voice from outside. But *"difficulties talking"* is a PRiC item that children aged 4–11 rated about themselves, so the child's half is real and separately sourced. Item 21 keeps the clinician's half excluded. |
| 6  | **Have you been able to eat and drink** | RCH (3) — *"Oral intake"*, the second of eight History bullets, and *"Consider discharge when … Tolerating appropriate oral intake"*; NHSGGC (4) — *"Reduced oral intake"*, *"Adequate fluids"*; Fujikawa (1) — *"anorexia"*; Alm (8) — *"difficulties eating"* self-reported | **yes** | The only item that is simultaneously a rule variable, a history bullet in both complaint guidelines, an escalation trigger (*"Evidence of moderate/severe dehydration"*) **and** the discharge criterion. Hydration status itself is examination (item 22); what the child has managed to get down is theirs. |
| 7  | **Does it hurt more on one side** | NHSGGC (4) — *"Seek urgent advice if there is: … One-sided throat swelling"*, and quinsy *"severe sore throat often unilateral"*; RCH (3) — *"Tonsillar … asymmetry"*, *"Uvula deviation"* | **yes**, age 7+ | Laterality is the quinsy signal and **the body map cannot express it**: `throat` is one region and `neck` is one region, neither split left/right, unlike the hands and feet. So this fact is unobtainable any other way. The age floor is **judgement, not citation** — see decision 7 and `minAgeNotes`. |
| 8  | **Is it hard to breathe** | NHSGGC (4) — *"Seek urgent advice if there is: … Difficulty breathing"*; RCH (3) — *"Respiratory distress"* red flag; RCH AUAO (5); croup (6) | **yes** | Third of source 4's family-facing triad. **Duplicates the `chest` group's hand-written `breathing` question** — the same fact reached from a different body region, exactly like tummy item 18. Needs a distinct id and must not fire when the child has also tapped chest. See decision 10. |
| 9  | **Is it hard to turn your head** | RCH (3) — *"Torticollis"*, *"Neck stiffness/fullness"* red flags; RCH AUAO (5) — retropharyngeal abscess: *"Neck pain and stiffness or torticollis"*, *"limitation of neck extension"*; NHSGGC (4) — *"torticollis"* | **yes** | Split from item 22 on the same principle as item 5: *torticollis* is a posture a clinician observes and names, *"limitation of neck extension"* is a range a clinician measures, but "is it hard to turn your head?" is something a child discovers by trying. Concrete, physical, and the retropharyngeal-abscess signal the scores do not contain. |
| 10 | **Is it hard to open your mouth wide** | RCH (3) — *"Trismus"* red flag; NHSGGC (4) — *"trismus"* under both quinsy and retropharyngeal abscess; RCH (3) — quinsy features | **partial** | A child can report difficulty; they cannot report *restriction*, which is what trismus is and which the clinician establishes by looking. Marked partial for that reason and ranked below item 9, whose child-facing form is cleaner. Do **not** instruct the child to open their mouth and look — see wording cautions. |
| 11 | **Have you thrown up** | Fujikawa (1) — *"nausea or vomiting"*; RCH (3) — vomiting among non-specific features; NHSGGC (4) — *"Vomiting"* under non-specific symptoms | **yes** | A rule variable and a non-specific symptom in both guidelines. **Not redundant with the tummy packet's `t-003`**, which is scoped `group: 'tummy'` and will not fire for a child who tapped only Throat. Distinct from nausea, which is item 25 and is already covered by `SENSATIONS.queasy`. |
| 12 | **Did you swallow something, or did something go down the wrong way** | RCH AUAO (5) — inhaled foreign body: *"Very sudden onset · Coughing, choking, vomiting episode (may not be witnessed)"* | **yes** | Only the child knows, and source 5 says so explicitly in a parenthesis. Time-critical and absent from every score. **Weakest provenance in the packet alongside item 15**: one guideline, and one whose scope is airway obstruction rather than sore throat. Kept, ranked low, flagged for the reviewer. **Never name a coin, a battery or a toy** — that turns the question into a prompt. |
| 13 | **Do you feel hot or shivery** | Forsyth, Breese, Fujikawa, Wald, McIsaac (1); FeverPAIN, Centor (2); McIsaac (4); RCH (3); NHSGGC (4) | **partial** | **Ten sources, five incompatible thresholds, one of which is no number at all.** Child reports the sensation; nurse measures and classifies. Never ask a child for a number and never say "fever". Ranked below several single-source items because the app cannot resolve any of the thresholds and the nurse will take a temperature regardless. |
| 14 | **Have you got spots or a rash** | Fujikawa (1) — *"rash (scarlet fever-like, erythema or urticaria)"*; Edmond (1) — *"scarlatiniform rash"*; Attia (1) — *"scarlatiniform rash"*; RCH (3) — *"typical viral rash"* under History, and the scarlet fever features under Examination | **partial** | Three of eight rules contain a rash term, which is better provenance than several items above it — but the *classification* (scarlatiniform vs viral vs urticarial) is entirely the examiner's, and the discriminating detail RCH lists (blanching, sandpaper texture, Pastia lines, peri-oral pallor) is not available to a child. Presence only. **Structurally awkward: a skin finding inside a group that has no surface half.** See decision 9. |
| 15 | **Has your poop been runny** | Joachim (1) — *"viral signs (conjunctivitis, coryza, diarrhea)"*; RCH (3) — *"diarrhoea"* among associated viral features | **yes** — not proposed for v1 | Genuinely sourced as a viral discriminator, genuinely child-reportable, and genuinely the weakest use of a three-question screen for a child whose throat hurts. Kept in the table so its absence is a decision; **first item to drop, and not proposed for generation in v1.** Register follows the tummy packet's ruling (decision 1). |
| 16 | Duration; time to presentation; sudden onset | FeverPAIN (2) — *"Attend rapidly (within 3 days after onset of symptoms)"*; Joachim (1) — *"sudden onset [< 12 h]"*; Wald (1) — cohort entry *"< 48 h duration"*; Forsyth (1) — *"< 1 wk duration"*; NG84 (2) — *"symptoms can last for around 1 week"* | **yes** — already collected | `DURATIONS`. **The bands cannot resolve FeverPAIN's 3-day or Joachim's 12-hour cut**; see "Still open". |
| 17 | Age | McIsaac, Wald, Breese, Edmond, Joachim (1); McIsaac (4) — *"Aged 3-14 years +1 point"* | **n/a** — already collected | Setup screen. A scoring variable in five of eight rules and never a question. |
| 18 | Sore throat itself; throat pain severity | Breese, Fujikawa (1) — *"sore throat"*; Alm (8) — FPS-R | **yes** — already collected | Body map plus the FPS-R intensity screen. Do not ask again; asking a child to rate severity in words is banned outright. Worth noting that two rules score the *presence* of sore throat as a predictor, which is vacuous for a packet whose entry condition is sore throat. |
| 19 | Where it hurts | all guidelines | **yes** — already collected | Body map. `throat` and `neck` are the two regions in this group. |
| 20 | Headache; tummy pain; earache; red or watery eyes; feeling tired | Breese, Joachim (1) — *"headache"*, *"abdominal pain"*; Wald, Joachim (1) — *"conjunctivitis"*; RCH (3) — *"conjunctivitis"*; NHSGGC (4) — *"Headache"*, *"Abdominal pain"*, quinsy *"referred ear pain"*, EBV *"fatigue/malaise"*; Alm (8) — *"earache"* self-reported | **yes** — already collected elsewhere | Five real criteria, all child-reportable, **all rejected as duplicates of something the app already does better**: head / tummy / ears / eyes are their own body-map regions and their own groups, and `MOODS.tired` covers fatigue. A child who has these taps them. Rejecting these is the largest single block of the filter here and the reason the clean count is 12 rather than 17. |
| 21 | "Hot potato" / muffled voice as heard; hoarseness as heard | RCH (3); NHSGGC (4); RCH AUAO (5); croup (6) | **no — observer** | Not item 5. This is the listener's characterisation of a sound. The give-away is RCH's own gloss: *"'Hot potato' voice (muffled voice associated with pharyngeal/peritonsillar pathology)"* — the definition contains the pathology it implies. |
| 22 | Drooling as observed; pooling of secretions; stridor; stertor; torticollis; limitation of neck extension; tripod/sniffing position; hyperextension of neck; trismus as restriction; markedly tender trachea; neck swelling, mass or fullness | RCH (3); NHSGGC (4); RCH AUAO (5); croup (6) | **no — observer / exam** | Every one of these is something someone else sees, hears or feels. Items 2, 5, 9 and 10 are the child's-eye halves and are separately sourced; these are not reclassifications of them. |
| 23 | Tonsillar exudate, purulence, "severely inflamed tonsils", hypertrophy, asymmetry; pharyngeal erythema; "abnormal pharynx (redness, swelling, exudate, petechiae, 'doughnut lesions' or ulcerations)"; palatal petechiae; strawberry tongue; uvula deviation; oral/pharyngeal ulcers | Forsyth, Breese, Fujikawa, Wald, Edmond, McIsaac, Attia, Joachim (1); FeverPAIN, Centor (2); RCH (3); NHSGGC (4) | **no — exam** | **The backbone of every score in the literature, and a child cannot look in their own throat.** Note that RCH files *"oropharyngeal ulcers"* under **History** as well as Examination — the filing does not make it reportable, and this is precisely the trap the brief warns about. Source 6 tells clinicians *"Throat examination is rarely required"*; the app must not perform one by proxy. |
| 24 | Cervical lymph nodes: presence, enlargement, size (< 1, 1–2, > 2 cm), tenderness to palpation; generalised lymphadenopathy; hepatosplenomegaly | Forsyth, Breese, Fujikawa, Wald, Edmond, Attia, Joachim (1); Centor, McIsaac (2); RCH (3); NHSGGC (4) | **no — exam** | The other backbone. *"Tenderness of lymph nodes"* is the single most frequent predictor in the entire paediatric literature (source 1) and it is established by **palpation**. Never ask a child to feel their own neck, and never use the word "glands" — see wording cautions. |
| 25 | Measured temperature; nausea | Fujikawa (1) — *"nausea or vomiting"*; all fever criteria | **no — exam** / **already collected** | Temperature is the nurse's instrument (item 13 is the child's half). Nausea is covered by `SENSATIONS.queasy` ("Yucky tummy"), which **is** offered to this child because the group is `internal` and the sensation list is therefore unpruned. |
| 26 | Unwell/toxic appearance; systemically unwell; respiratory distress and work of breathing; hydration status; behaviour, agitation, drowsiness; oxygen saturation; air entry | RCH (3); NHSGGC (4); RCH AUAO (5); croup (6) | **no — observer** | Source 5's severity table is built entirely from these. Observation is the observer's. |
| 27 | Scarlet fever features: blanching sandpaper rash in skin creases, flushed face with peri-oral pallor, Pastia lines | RCH (3) | **no — exam** | The *classification* of item 14's raw fact. A child sees spots; a clinician sees scarlet fever. |
| 28 | Season; month of presentation | Breese, Wald (1) | **no — not a question** | The system knows the date. Recorded so it is visibly a decision and not an omission. |
| 29 | Leukocyte count; CRP; throat swab and culture; rapid antigen detection test; EBV serology; lateral neck X-ray; CT | Breese (1); RCH (3); NHSGGC (4); Jääskeläinen (7) | **no — lab / imaging** | Source 7's finding that CRP *"should not be used to differentiate viral and bacterial pharyngitis cases"* is noted only so a future run does not go looking for a proxy. |
| 30 | Immunisation status (HiB); immunosuppression; infectious contacts; household crowding; recent URTI; underlying conditions | RCH (3); RCH AUAO (5) | **no — carer or record** | Not the child's to report. HiB status decides whether epiglottitis is on the table and a 6-year-old does not know it. |
| 31 | Ethnicity; Aboriginal and/or Torres Strait Islander, Māori and/or Pacific Islander identity; living in a high-ARF community; personal history of rheumatic fever or rheumatic heart disease | RCH (3) | **no — see "The ARF branch"** | Deliberate exclusion, recorded as a decision, and the most consequential one in this packet. |
| 32 | Recurrence: 7 episodes in 1 year / 5 per year for 2 years / 3 per year for 3 years | RCH (3); NHSGGC (4) | **partial** — already collected | The reserved `happened-before` question gets the *fact* of recurrence; it cannot get the *count*, and the count is what triggers the ENT referral. See "Still open". |
| 33 | Forsyth's *"infectious mononucleosis syndrome"* and *"influenzal syndrome"*; Breese's *"abnormal pharynx"* and *"abnormal cervical nodes"* as gestalts | Forsyth, Breese (1) | **no — clinician gestalt** | A named pattern a clinician recognises. "Abnormal" is defined against the examiner's expectation, which the brief rules out by name. |

**Yield: ~53 distinct criteria across 10 named scores (8 from source 1's
systematic review, plus FeverPAIN and Centor from source 2) and 4 guidelines →
12 clean, 3 partial, 28 excluded, 10 already collected elsewhere in the app.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
clean (30%); sore throat ~53 → **12 clean (23%)**. The lowest proportion of the
three, and the reason is a single structural fact rather than a shortfall in
searching: **the two variables that carry every score for this complaint —
tonsillar exudate and cervical node tenderness — both require someone to look
inside the child or press on their neck.** A larger literature converged on
exactly the two things a self-report app cannot reach.

## Items 2 and 15 — the drooling split, and why item 2 is not an observation

RCH's red flag is one word: *"Drooling"*. That is an observation: someone sees
saliva leaving the child's mouth. It stays in item 22, excluded, and no question
may ask a child whether they are drooling — a child asked that will wipe their
mouth and say no.

Item 2 is a different fact reached from the other side. Source 4 does not write
"drooling" in its family-facing advice; it writes *"Difficulty swallowing
saliva/liquids"*, because that is the form of the fact a **non-clinician** can
notice. A child who has stopped swallowing their own spit knows it. So:

- **Item 2 asks about the child's own experience of swallowing** and cites
  source 4's family-facing line plus source 3's *"dysphagia (pooling/drooling)"*.
- **Item 22 keeps observed drooling and pooling of secretions excluded**, cited
  to source 3's red flag and source 5's epiglottitis row.

Same phenomenon, two items, two citations, and the split is the same one the
tummy packet made between "does it hurt to walk" (history) and elicited hop
tenderness (examination). Getting it backwards would produce a question citing
an observer sign, which is the failure this whole process exists to prevent.

## The ARF branch — the most consequential thing this app cannot ask

RCH's third key point, verbatim:

> "Children identified to be at high-risk for acute rheumatic fever (ARF) should
> be treated with antibiotics if they develop a sore throat (**irrespective of
> other clinical features**)."

Read that against everything above. There is one branch in this guideline that
overrides every score, every red flag and every item in this packet — and it is
decided by **ethnicity, community of residence, and personal cardiac history**.
All three are records. None is a child's to report. A four-year-old cannot tell
you they live in a community with high rates of ARF, and this app must never ask
a child about their ethnicity to route their clinical care.

**Decision: excluded outright, and flagged prominently rather than quietly
dropped.** The nurse-facing surface, not the child-facing one, is where this
belongs — the child's record already holds it. Recorded here so that (a) nobody
downstream "completes" the packet by writing the obvious question, and (b) the
clinical reviewer sees that the app's report, however good, is not sufficient
input to the one decision this guideline treats as unconditional. Same
conclusion and same reasoning as head injury's non-accidental-injury exclusion
and the tummy packet's abuse exclusion, reached for a third time by a different
route.

## Wording cautions

Ban **concepts**, not phrasings.

- **Never name a condition.** Not strep, streptococcus, strep throat,
  tonsillitis, pharyngitis, quinsy, abscess, epiglottitis, croup, scarlet fever,
  glandular fever, mononucleosis, rheumatic fever. `scripts/screen.mjs` now
  reads its per-packet bans from the sidecar, so these are enumerated in
  `bannedPhrases` rather than assumed.
- **Never ask a child to look in their own throat, or to open their mouth and
  check.** No mirrors, no "can you see white bits", no "are your tonsils big".
  This is item 23 delegated to a seven-year-old, and it would produce a
  tonsillar-exudate answer that reads to a nurse as a finding. Two of the
  sources instruct clinicians not to examine the throat unnecessarily
  (source 6: *"Throat examination is rarely required"*); an app has less
  standing to, not more.
- **Never ask a child to feel their own neck**, and never use the word
  **"glands"**, "lumps", or "bumps" about the neck. Even phrased gently, that is
  an instruction to palpate, which is item 24, the most frequently used
  predictor in the literature, and a child pressing their own neck and reporting
  a number is worse than no data.
- **Never name the object in item 12.** Not a coin, not a battery, not a toy,
  not a bone. Naming it prompts the answer and can frighten a child into denying
  it. Same ruling as the tummy packet's swallowing item, for the same reason.
- **Never ask a child to rate or grade anything in words** — not the coryza
  (Attia grades it, we do not), not the pain (FPS-R has it), not the fever.
  Already banned globally.
- **Never say "fever"**, never ask for a temperature, never mention a number of
  degrees.
- **Never invert item 3 in the question.** The scores want *absence* of cough;
  the question asks presence. "You haven't been coughing, have you?" is both a
  tag question and a leading one, and `screen.mjs` catches the tag but not the
  intent.
- **Avoid "still"** anywhere in this packet. "Can you still swallow?" presupposes
  that they could before, and it lands as an alarming question on a child who is
  already frightened of their throat. `screen.mjs` bans it universally; noted
  because this is the packet where the temptation is strongest.
- Avoid "serious", "dangerous", "bad", "severe", "choking" as an adjective —
  already banned.

## How these were found

Search A was run as the brief specifies — comparison and external-validation
literature, not a remembered rule name. It worked: source 1 is a systematic
review that enumerated **eight** paediatric prediction rules and validated six
head-to-head, and six of the eight (Forsyth, Breese, Fujikawa, Wald, Edmond,
Joachim) are names recall would not have produced. Recall would have produced
Centor, McIsaac and FeverPAIN and stopped — and, tellingly, Centor and FeverPAIN
are not even in source 1's eight, because Centor was derived in adults and
FeverPAIN post-dates the 2014 search. **Search A and recall each missed what the
other found**, which is a sharper version of the head-injury lesson: two
searches were needed to enumerate ten rules, and neither alone got past six.

Search B is where the packet actually came from. Three of the four items ranked
highest here — hurts to swallow, can you swallow your spit, been able to eat and
drink — **appear in no prediction rule at all.** So do voice change, neck
stiffness, trismus, one-sided pain and difficulty breathing. Eight of the twelve
clean items are Search B's alone.

And the gap between the searches is sharper than the tummy packet's, in a way
worth stating precisely. There, the rules were aimed at 8% of the arrivals; the
guideline covered the other 92%. Here it is not primarily a prevalence gap:

- **The scores and the guidelines answer different questions.** Every one of the
  ten scores answers *"does this child need an antibiotic?"* Not one of them
  answers *"is this child's airway in trouble?"* Quinsy, retropharyngeal
  abscess, epiglottitis, bacterial tracheitis and croup are the reason a sore
  throat kills a child, and **no score in this packet contains a single variable
  that would detect any of them.** The scores are antimicrobial-stewardship
  instruments. The guidelines are safety instruments. A packet built from
  Search A alone would ask three good questions about antibiotic stewardship and
  nothing at all about the airway.
- **And the scores do not work anyway.** Source 1: none of six reached the
  accuracy target. Source 7: Centor sensitivity 22.3%. Source 4: McIsaac
  insufficient. The tummy packet could at least rank pARC's variables highly on
  the strength of the model. Here the validation literature says not to.

For the next packet: Search A tells you what the field measures; Search B tells
you what the complaint can do to the child. When those diverge — and for an
airway complaint they diverge completely — **rank by Search B.**

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with the tummy packet.** The new
   vocabulary domain here is the throat and swallowing, so it is ruled
   explicitly before anything is generated:
   - **"swallow"** — not "gulp", not "get it down", not "eat it down".
   - **"spit"** — not "saliva", not "dribble", not "drool", not "spittle".
     "Spit" is the word a US child of this age owns.
   - **"your voice sounds different"** — not "hoarse", "croaky", "husky",
     "raspy", "muffled".
   - **"stuffy or runny nose"** — not "blocked nose" (British), not "congested",
     not "coryza".
   - **"throw up"**, **"poop"** — carried unchanged from the tummy packet's
     decision 1, because items 11 and 15 are the same vocabulary domain and
     nothing is gained by a second ruling.
   - **"your throat"** — matches the body-map region label "Throat". Never
     "tonsils", "pharynx", "palate", "uvula", "adenoids": naming a structure the
     child cannot see invites them to go and look.
2. **Answer types.** `FollowUpScreen` renders yes/no only. All twelve clean
   items and all three partial items are **yes/no**. Nothing in this packet
   needs a widget the app does not have — a difference from the tummy packet,
   which had to defer its vomit-colour item, and from head injury, which needed
   `count` and `text`.
3. **Item 2 is asked about the child, not about the saliva.** "Can you swallow
   your spit okay?" — never "are you drooling?", never "is spit coming out of
   your mouth?" The first is the child's experience; the second asks a child to
   observe themselves from outside and will be answered defensively. See
   "Items 2 and 15".
4. **Items 3 and 4 are two questions and must never be fused.** No two of the
   six rules that name cough and coryza bundle them the same way, so any fused
   question picks one rule silently. This is a third category of source
   disagreement alongside the brief's *threshold* and *scope* kinds:
   **bundling**. The resolution is the same in spirit — capture the atoms, let
   the nurse compose.
5. **Duration scope, and it is deliberately unlike the tummy packet's.** The
   sources:

   | Source | Window |
   |--------|--------|
   | Joachim (1) | *"sudden onset [< 12 h]"* as a bacterial sign |
   | Wald (1) | cohort entry *"< 48 h duration"* |
   | FeverPAIN (2) | *"Attend rapidly (within 3 days after onset of symptoms)"* |
   | Forsyth (1) | *"< 1 wk duration"* |
   | NG84 (2) | *"symptoms can last for around 1 week, but most people will get better within this time"* |
   | NHSGGC (4) | quinsy *"occurs in approximately 2% of cases within 2 months of acute tonsillitis"*; EBV *"suspect if sore throat fails to improve/worsens"* |
   | RCH (3), NHSGGC (4) | 7 / 5 / 3 episodes per year → recurrent tonsillitis, an ENT referral, **a different complaint** |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
     Inside every acute source's window.
   - `not-sure` — **full packet.** Same convention as the other two packets:
     `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **the eight red-flag items only** (1, 2, 5, 6, 7, 8, 9, 10),
     not the score-derived seven (3, 4, 11, 12, 13, 14, 15).

   **This inverts the tummy packet's shape and does so on purpose.** There,
   `long-time` kept a single item because chronic abdominal pain is a different
   literature. Here, the score variables are the ones that expire — cough,
   coryza, rash and fever discriminate strep *in an acute illness* and mean
   nothing about a throat that has hurt for three weeks — while the red flags
   get **more** relevant with time, because source 4 puts quinsy up to two
   months after the tonsillitis and EBV specifically in the throat that fails to
   improve. A child who cannot swallow their own spit needs that question
   answered on day 30 as much as on day 1.
6. **Item priority, and one question per item.** Fifteen items compete for three
   bank slots (`followUpsForGroups` caps at three plus the reserved
   `happened-before`). Never ask two questions from the same item. Order:

   `1 (hurts to swallow) → 2 (swallow your spit) → 3 (coughing) →`
   `6 (eating and drinking) → 5 (hard to talk) → 8 (hard to breathe) →`
   `4 (runny nose) → 7 (one side) → 9 (turn your head) → 11 (throwing up) →`
   `10 (open mouth wide) → 13 (feeling hot) → 12 (swallowed something) →`
   `14 (spots or rash) → 15 (runny poop)`

   Item 1 leads because it is the universal feature of the complaint, is already
   a shipped question, and is in no score. **Item 2 is second, ahead of every
   score variable in the literature**, because it is the one answer that
   escalates today. Item 3 is third despite being the best-sourced item in the
   packet — seven of ten scores — precisely because sources 1, 4 and 7 all
   report that the scores it feeds do not work in children; being well-cited is
   not the same as being useful. Item 13 (fever) ranks twelfth for the same
   reason plus the unresolvable thresholds. Items 14 and 15 are last and item 15
   is not proposed for v1 at all. **Proposed, not yet confirmed by review.**
7. **Age floors: none, and that is the finding.** No item carries a source-given
   floor, because every score-derived item also appears in a score derived at or
   below age 3, and the guidelines set no floor. The two age statements in the
   sources — RCH's *"GAS pharyngitis is uncommon under 4"* and NHSGGC's local
   finding that FeverPAIN adds nothing under 5 — are about **disease frequency
   and score performance**, not about whether a child can answer, and neither
   attaches to an item that depends on FeverPAIN alone. Source 8 shows 4–11 year
   olds self-rating throat pain, eating and talking, which is affirmative
   evidence *against* a capability floor on items 1, 5 and 6.

   **One exception, and it is judgement, not citation.** Item 7 (one-sided pain)
   carries `minAge: 7`. No source floors it; the packet's own view is that a 4-
   to 6-year-old asked "does it hurt more on one side?" will answer the
   question's shape rather than the fact, the same reasoning the tummy packet
   applied to its item 8. Recorded in `minAgeNotes` so a reviewer can see this
   one differs in kind from every other row.
8. **`depth: null`, because the group is `internal` and no depth answer exists.**
   `GROUP_DEPTH.throat === 'internal'`, so `depthGroupsForRegions` never returns
   `throat`, the depth screen never asks, and `depths['throat']` is
   permanently `undefined`. `build-bank.mjs` emits no `depth` key when the
   sidecar's is falsy, and `bankQuestions`' depth filter is a no-op when
   `q.applies.depth` is absent — so the questions fire for every child who taps
   Throat or Neck, which is correct. **Writing `"depth": "inside"` would look
   more informative and would be a lie**: it would assert a scope the app has no
   answer to test, and if the depth question were ever turned on for `throat` by
   mistake, `'inside'` would start silently suppressing questions on the
   `unknown` path's sibling. Null is the honest encoding.
9. **Item 14 (rash) is kept, ranked second-last, and flagged as structurally
   homeless.** The tummy packet could exile rash to a `depth: surface` sibling.
   `throat` has no surface sibling and cannot have one. So a criterion that
   three of eight rules contain has nowhere to live except here, in a packet
   about the inside of a throat, asked of a child whose rash is on their chest.
   Kept because deleting it would lose a rule variable; ranked low because the
   app's real answer is that the child should tap the chest. Raised in "Still
   open" as an architecture question, not a packet question.
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and the
    other groups' hand-written follow-ups:
    - **Rejected as duplicates:** item 19 (body map), item 18 (FPS-R and body
      map), item 16 (`DURATIONS`), item 17 (setup age), item 25's nausea half
      (`SENSATIONS.queasy`, which **is** offered here — the group is `internal`
      so the sensation list is never pruned), and the whole of item 20 —
      headache, tummy pain, earache, red eyes, tiredness — each of which is
      another body-map region, another group's question (`ears`/`hearing`,
      `eyes`/`eye-itch`) or `MOODS.tired`. **This is the biggest single block of
      rejections in any packet so far** and it is what separates 12 clean items
      from 17.
    - **Conditional:** item 8 duplicates the `chest` group's hand-written
      `breathing` ("Is it hard to breathe?"). `followUpsForGroups` dedupes by
      question **id**, not by fact, so a child who taps Chest and Throat would be
      asked it twice under two ids. Needs a distinct id and a reviewer note —
      the same unresolved problem the tummy packet logged for its item 18, now
      seen twice, which suggests the dedupe should key on a `fact` field.
    - **Kept despite surface overlap:** item 6 (eating and drinking) touches
      `HELPS.water` ("A drink of water") and `HELPS.food` ("Something to eat").
      `HELPS` records what the child *wants*; item 6 records what they have
      *managed*. Different facts — and source 4's *"Avoid hot drinks which can
      exacerbate pain"* is a reason a child might want water and not be able to
      drink it.
    - **Kept despite cross-group overlap:** item 11 (throwing up) duplicates the
      *fact* behind tummy's `t-003`, but `t-003` is scoped `group: 'tummy'` and
      will not fire for a throat-only report. Item 12 stands in the same relation
      to tummy's `t-018`.
    - **Adjacent, not redundant:** the `mouth` group ships `hurt-eat` ("Does it
      hurt when you eat?"), which is close to items 1 and 6. `mouth` and `throat`
      are different groups and a child may tap both; the questions must be
      distinguishable on the nurse's screen. Flagged.
11. **The two hand-written `throat` follow-ups must be re-sourced, not
    assumed.** `followUpsForGroups` does `if (sourced.length) continue` — the
    moment the bank covers `throat`, `hurt-swallow` and `cough` are **dropped
    entirely**, not merged. Items 1 and 3 exist precisely to carry them across
    with a citation behind them. Both survive comfortably: `hurt-swallow` is
    odynophagia and is in all four guidelines, `cough` is in seven of the ten
    scores. Losing them silently is the failure mode this decision prevents, and
    it is worth noting that whoever hand-wrote them picked, unaided, the item
    with the best guideline support and the item with the best rule support in
    the whole literature.

## Still open

- **Group `throat` includes the front `neck` region.** A child with neck pain
  that has nothing to do with their throat receives this packet. Partly
  defensible (neck stiffness and torticollis are sore-throat red flags), partly
  not. Needs either a ruling that `neck` stays in scope or a separate group.
- **The `chest`/`throat` breathing duplication (decision 10)** now has two
  instances across two packets. `followUpsForGroups` should probably dedupe on a
  declared fact rather than a question id. Not fixed here — this run may write
  only these two files.
- **Item 14 (rash) has no home (decision 9).** An `internal` group cannot host a
  skin finding, and three prediction rules contain one. Architecture question.
- **Duration bands do not resolve the acute cut-offs.** FeverPAIN splits at 3
  days, Joachim at 12 hours, Wald at 48. `DURATIONS` offers `just-now` /
  `this-morning` / `yesterday` / `few-days`. `few-days` straddles FeverPAIN's
  3-day boundary and nothing distinguishes 10 hours from 20. Probably
  acceptable — the nurse has the arrival time — but a reviewer should confirm.
- **Item 32: the recurrence *count* is not obtainable.** `happened-before`
  establishes that it has happened before; the ENT referral thresholds are
  7-in-1-year, 5-a-year-for-2, 3-a-year-for-3. A child cannot count episodes and
  the app has no `count` widget shipped. The count belongs on the nurse's
  surface.
- **The ARF branch.** Excluded on principle (see above), and the clinical
  reviewer should confirm that the nurse-facing surface makes the child's
  ARF-risk status visible, because RCH's guidance overrides everything this
  packet collects.
- **Wording of item 2 for a frightened child.** "Can you swallow your spit
  okay?" is the least-bad phrasing found, but it is a question about a symptom
  that, if the answer is no, means something is badly wrong. A child may
  understand that from the question. Needs a clinician's and a play
  specialist's view on the `young` tier especially.
- **Item 12 belongs to two complaints.** "Did something go down the wrong way?"
  is sourced from an airway-obstruction guideline, not a sore-throat one. If a
  future packet covers choking or inhaled foreign body directly, this item
  should move there and be cited properly rather than borrowed.
- **Source 8 is a post-tonsillectomy population.** There is no evidence in this
  packet that a child reports *infective* throat symptoms as reliably as
  post-surgical ones, and none at all about an unassisted child — source 8's
  diaries were completed with caregivers encouraged to help. The `young` tier
  carries more risk here than the `older` tier and should be reviewed as such.

## Ambiguity in the sources

Recorded rather than papered over.

- **Source 1's Appendix 6 — the full per-rule predictor definitions and
  weights — is not in the fetched text.** Table 2 *is*, which is a large
  improvement on the tummy packet's equivalent gap, but it gives predictor
  *names* and only sometimes their definitions. So the packet knows Attia grades
  tonsillar swelling *"moderate to severe"* but not where Wald's *"pharyngitis"*
  boundary sits, and knows Breese scores *"cough"* positively but not how it is
  weighted. No item depends on a weight; the brief's instruction to harvest
  variables and ignore weights is what makes this survivable.
- **Nine of the ten scores were read at one remove.** Forsyth, Breese, Fujikawa,
  Wald, Edmond, McIsaac, Attia and Joachim are known only through source 1's
  Table 2; Centor and FeverPAIN only through source 2's *Terms used in the
  guideline* page and source 4's reproduction. **No original derivation paper
  was read first-hand.** Every criterion in the items table is therefore quoted
  from a secondary reproduction — accurately, and from two independent
  reproductions where possible (McIsaac appears in both source 1 and source 4,
  and the two agree), but a reviewer should know that no item traces to a
  primary source.
- **Source 1 could not validate two of its own eight rules** (Forsyth and
  Fujikawa) because *"the authors provided insufficient detail for validation or
  some clinical variables were not assessed in the validation set"*. Their
  variables are still harvested here — the brief is explicit that a variable
  evaluated and dropped still counts — but nothing in the items table depends on
  Forsyth or Fujikawa alone.
- **Source 1's own quality assessment is damning and should be read alongside
  its predictor lists:** *"The statistical analysis used for the derivation of
  clinical prediction rules was poor. All of the models relied on categorization
  of continuous predictors… Only 3 of 8 reports (38%) described the use of
  multivariable analysis… Assessment of discrimination and calibration of the
  model were never reported."* Four of the eight rules *"have never been
  validated"*. This is context for how much weight any single-rule citation in
  the table can bear.
- **NHSGGC's under-5 FeverPAIN finding is guideline-internal.** It is described
  as *"A local retrospective study … 335 throat swab results taken at RHC ED"*
  during December 2022, reported inside the guideline and not, as far as this
  run could establish, published separately. Used here only as a reason **not**
  to floor an item, which is the direction that does no harm.
- **RCH files "oropharyngeal ulcers" under both History and Examination**, and
  "Fever" under Examination while every score treats it as history. The
  guidelines' own history/examination boundary is not consistent, so the
  self-report filter here had to be applied to the *criterion*, not to the
  heading it sits under. Source 3's suppurative-complications table is the
  clearest case: it lists *"odynophagia, dysphagia (pooling/drooling)"* in one
  breath, mixing a symptom the child feels with a sign the clinician sees.
- **Source 7 could not reconstruct Centor scores from the record.** *"Only two
  patients had initially reported Centor scores in their patient records… If the
  Centor scores were not recorded, we calculated them for each patient based on
  symptoms and signs reported on patient records."* In a 464-child cohort, the
  score that half the guidelines in this packet are built on was documented
  twice. That is the same caution the tummy packet drew from its 68%
  not-recorded pain-pattern figure: a child's answer may be the only record of
  the variable, and a criterion being in every score does not mean anyone
  captures it.
- **Source 7's headline numbers are about RADT positivity, not about disease.**
  Its sensitivity figure of 22.3% is *"of Centor score ≥ 3 for rapid antigen
  test positivity"*, and it separately reports *"Positive throat culture was
  found in 17.1% of the patients with negative rapid antigen test"* — so the
  reference standard is itself imperfect. The conclusion quoted above is the
  authors' own; the packet does not extend it further than they do.
