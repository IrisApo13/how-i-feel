# Earache

Presenting complaint · packet `earache` · serves group `ears`, **no depth
scope** · packet v1 · assembled 2026-09-02
Status: **not yet clinically reviewed** · sources verified first-hand: 11 of 14

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
> who arrives complaining that their ear hurts, and marks which of those a child
> can report about themselves. **Not** a diagnostic tool: nothing here may be
> scored, summed, or shown to a child or nurse as a suggested cause.
>
> The dominant literature for this complaint — acute otitis media — is
> *diagnosis-led and rests on otoscopy*. Its guidelines instruct a clinician to
> look at a tympanic membrane; its validated symptom scales were built for
> **carers watching pre-verbal infants** and one of them deliberately omits ear
> pain "as it is not an observable behaviour". Neither is a self-report
> instrument, and neither was ever meant to be. This packet is organised by the
> complaint the child arrives with, and no condition name reaches runtime.

## Scope

**Age.** App covers 4–12. The age facts in the sources point in an unusual
direction for this packet — the two commonest causes of ear pain peak on
*opposite sides* of the app's range:

- Acute otitis media peaks **below** it. RCH: *"Peak age prevalence is
  6-18 months"* (source 3). Schmitt: *"Ear infections peak at age 6 months to
  2 years"* (source 2). So the disease that owns this literature is largely a
  disease of children too young to use this app.
- Acute otitis externa peaks **inside** it. Source 6's incidence table, by age
  band: *"Birth to 4 — 7 [%] · 5 to 9 — 19 · 10 to 14 — 16 · 15 to 19 — 9 ·
  20 and older — 5"*. The 5–14 band is where this app lives, and swimmer's ear
  is a condition whose symptom set (itch, fullness, pain on chewing, hearing
  change, a swimming history) is **almost entirely child-reportable**, unlike
  AOM's.

That asymmetry drives several rankings below and is the single most useful thing
Search B produced. It is also why the packet does not lead with the AOM
literature even though the AOM literature is ten times larger.

**One item carries an age floor and it is judgement, not citation** — item 8
(a noise in the ear) is floored at 8, the app's `older` tier boundary. See
decision 7. No source floors any item in this packet; source 5 (NG233) is a
guideline written specifically for under-12s and lists tinnitus among presenting
features with no floor at all, so a *cited* floor would be an invention.

The one age statement in the sources that is about **capability** rather than
disease frequency is Schmitt's, and it runs the other way — a disposition exists
purely because young children cannot do what this app's users can:

> "[1] Age < 2 years AND [2] ear infection suspected by triager
> **Reason: recognizes child too young to report earache**" (source 2)

The app's floor is 4. Every child using it is above the age at which Schmitt's
protocol stops trusting the report of an earache.

**Depth.** **Group `ears` is marked `internal` in `src/data/bodyMap.js`, so the
depth question is never asked for it.** `GROUP_DEPTH.ears === 'internal'`;
`depthGroupsForRegions` only returns groups whose `GROUP_DEPTH` is `'ask'`, so
`ears` is filtered out, `depths['ears']` is never populated, and
`followUpsForGroups` passes `null` into `bankQuestions`. Consequences:

- This packet is **not depth-scoped**. The sidecar carries `"depth": null`, not
  `"inside"`. See **decision 8**, which is the sore-throat packet's decision 8
  reached again — but with a sharper reason, because for `ears` the wrong value
  would suppress the *right* questions rather than merely assert an untested
  scope.
- The vocabulary lists are **not pruned**. `activeDepths` returns
  `['surface','inside']` when no depth was recorded, so a child who taps only an
  ear is still offered `itchy`, `queasy`, `cramping`, `bandage` and `clean-it`.
  Here that accident is load-bearing in the packet's favour: `SENSATIONS.itchy`
  is offered, and itch is *the* predominant symptom of otitis externa
  (sources 6, 8). See decision 10 — it is a redundancy rejection with a real
  citation behind it rather than a gap.

**Group `ears` has two regions and they are left and right.** `ear-right` and
`ear-left` are separate body-map regions in the head view. This is the opposite
of the sore-throat packet's situation, where `throat` is one region and
laterality was unobtainable and had to become item 7. Here **laterality is free**
and no item asks for it — which matters, because NG91's one age-and-side rule
(*"those under 2 years with infection in both ears"*) is about exactly the fact
the body map already holds. See decision 10 and "Still open".

**Out of scope by age or setting, and not carried:** the pre-verbal
presentations that most of this literature is about — RCH's *"irritability in
pre-verbal children"*, Schmitt's *"Younger nonverbal child acts like he did with
previous ear infection"*, the whole AOM-SOS behaviour battery (source 10) and
the ETG-5/J-score infant model (source 11); newborn and infant management;
antibiotic choice, dose and duration, which is most of what NG91, RCH and the
17 European guidelines in source 12 are actually about; grommet and adenoid
surgery (source 5, sections 1.6); ear injury and ear trauma, which Schmitt
explicitly routes to a different protocol (*"Followed an injury to the ear →
Go to Guideline: Ear Injury (Pediatric)"*) and which would belong to a separate
packet if the app ever needs one.

## Sources

1. **World Health Organization, "Integrated Management of Childhood Illness"
   (IMCI) chart booklet and modules**, Module 7: Ear problems. **Read
   first-hand** via `scripts/fetch-source.mjs`, cached PDF extracted with pypdf.
   The ASSESS & CLASSIFY chart's "Does the child have an ear problem?" block is
   the cleanest artefact in this packet: it separates **ASK** from **LOOK AND
   FEEL** on the page, which is the self-report filter drawn by the source
   itself. Scope caveat: IMCI's charts cover **2 months up to 5 years**, mostly
   below the app's range.
2. **Schmitt BD. "Earache", Pediatric After-Hours Version — Standard, 2020.**
   Telephone Triage Protocols, Schmitt Pediatric Guidelines LLC. **Read
   first-hand** (publisher-hosted PDF via TriageLogic). **The primary
   complaint-organised source, and structurally the closest thing in the
   literature to this app's problem**: a protocol for deciding what to do about
   an earache when nobody can look in the ear. Not peer-reviewed and not a
   national guideline — a commercial product whose dispositions are consensus.
   See "Ambiguity".
3. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Acute otitis media"**, last updated June 2021. **Read first-hand.** Its
   History section is six bullets long and two of them are child-reportable.
4. **NICE guideline NG91, "Otitis media (acute): antimicrobial prescribing"**,
   published 2018, updated 2022. **Read first-hand** (Recommendations chapter).
   Supplies the natural-history statement and the one symptom that changes the
   prescribing decision at any age.
5. **NICE guideline NG233, "Otitis media with effusion in under 12s"**,
   published 30 August 2023. **Read first-hand** (Recommendations chapter).
   **The most valuable single source in the packet and the only one written for
   exactly the app's age band.** Recommendation 1.2.1's presenting-features list
   is what re-sources the app's shipped `hearing` question, and 1.2.1–1.2.2 are
   the source of items 6, 8 and 9.
6. **Jackson EA, Geer K. "Acute Otitis Externa: Rapid Evidence Review."**
   *American Family Physician* 2023;107(2):145–151. **Read first-hand.**
   Reproduces the AAO-HNS clinical criteria for AOE (its Table 3, *"Adapted with
   permission from Rosenfeld RM, Schwartz SR, Cannon CR, et al."*), the risk
   factor table, and the age-incidence table quoted under Scope.
7. **American Academy of Otolaryngology–Head and Neck Surgery Foundation, Plain
   Language Summary: "Acute Otitis Externa (Swimmer's Ear)"**, based on the 2013
   update of the AOE clinical practice guideline. **Read first-hand.** Included
   for one reason: it is the AOE guidance rendered **for a patient**, and it is
   therefore direct evidence about which AOE features a non-clinician can
   notice — the same role NHSGGC's family-facing lines played in the sore-throat
   packet.
8. **Medina-Blasini Y, Sharman T. "Otitis Externa."** StatPearls, NCBI
   Bookshelf (NBK556055). **Read first-hand.** Symptom sequence, severity
   classification and the swimming risk multiplier.
9. **Coulter J, et al. "Otalgia."** StatPearls, NCBI Bookshelf (NBK549830).
   **Read first-hand.** The only source organised by *ear pain as a symptom*
   rather than by a diagnosis; supplies the primary/secondary (referred) split.
   Substantially adult-oriented — its red flags are temporal arteritis, head and
   neck malignancy, and cervical spine disease. Nothing adult is carried.
10. **Abbott P, Frede C, Hu WCY, Lujic S, Trankle S, Campbell L, Gunasekera H,
    Walsh R, Leach AJ, Morris P.** "Acute otitis media symptoms and symptom
    scales in research with Aboriginal and Torres Strait Islander children."
    *PLOS One* 2023;18(2):e0280926. **Read first-hand.** **This is the
    discovery source for Search A** — it compares the two symptom scales in use
    for paediatric AOM (AOM-SOS and the AOM Faces Scale), describes their item
    sets and their derivation, and reports symptom prevalences in a 224-child
    cohort. It is also the source of the single most important sentence in this
    packet; see "The observability inversion".
11. **McCormick DP, Jennings K, et al.** "Use of Symptoms and Risk Factors to
    Predict Acute Otitis Media in Infants." *Int J Pediatr Otorhinolaryngol*
    2015;81:55–59. **Read first-hand** via PMC4730910. The only clinical
    prediction model Search A returned for this complaint: the ETG-5 symptom
    score and the derived "J-score". Derived in **infants** — a scope
    disagreement in the brief's sense, handled in decision 5.
12. **Suzuki HG, Emmanuel J, et al.** "Clinical practice guidelines for acute
    otitis media in children: a systematic review and appraisal of European
    national guidelines." *BMJ Open* 2020;10(5):e035343. **Read first-hand** via
    PMC7228535. Seventeen national guidelines plus AAP and WHO, appraised with
    AGREE II. Used for what the guidelines *agree* on and for the one symptom
    93% of them act on.
13. **Lieberthal AS, et al. "The Diagnosis and Management of Acute Otitis
    Media."** *Pediatrics* 2013;131:e964–e999 (the AAP guideline). **CITED, NOT
    READ.** Not open access. Quoted only through source 2's reproduction of its
    key action statements and source 3's reference list. Nothing in the items
    table depends on it alone.
14. **Laine MK, et al.** "Symptoms or symptom-based scores cannot predict acute
    otitis media at otitis-prone age." *Pediatrics* 2010. **CITED, NOT READ.**
    Not open access; confirmed unavailable in Europe PMC. Quoted only through
    source 2's summary. **This is the most consequential claim in the packet and
    it rests on a secondary reproduction** — see "Ambiguity".

**Attempted and unreachable:** NICE CKS, "Otitis media — acute", diagnosis page
(`cks.nice.org.uk`) returned **HTTP 403 on two separate attempts**. It would
have been a second complaint-organised source with a history checklist. Nothing
in this packet depends on it.

## The rule(s), as published

There is no clinical prediction rule for earache in children that a
self-report app can use. What there is, in three kinds, quoted verbatim.

### 1. The assessment charts, organised by the complaint (sources 1, 2)

WHO IMCI, ASSESS & CLASSIFY, ear module — reproduced with the source's own
column headings, because the columns *are* the self-report filter:

> "**Does the child have an ear problem?**
> **If yes, ask:** Is there ear pain? Is there ear discharge? If yes, for how
> long?
> **Look and feel:** Look for pus draining from the ear. Feel for tender
> swelling behind the ear."

and its classifications:

> "Tender swelling behind the ear. **Pink: MASTOIDITIS** — Give first dose of an
> appropriate antibiotic. Give first dose of paracetamol for pain. Refer
> URGENTLY to hospital.
> Pus is seen draining from the ear and discharge is reported for less than
> 14 days, or Ear pain. **Yellow: ACUTE EAR INFECTION** …
> Pus is seen draining from the ear and discharge is reported for 14 days or
> more. **Yellow: CHRONIC EAR INFECTION** …
> No ear pain and No pus seen draining from the ear. **Green: NO EAR
> INFECTION** — No treatment."

Three facts run the entire chart: ear pain, ear discharge (and its duration),
and a tender swelling behind the ear. The first two are ASK. The third is FEEL.

Schmitt's dispositions, verbatim, in escalation order (source 2):

> "**Go to ED Now**: [1] Stiff neck (can't touch chin to chest) AND [2] fever
> — R/O: meningitis
> **Go to ED Now (or PCP triage)**: Long, pointed object was inserted into the
> ear canal (e.g. a pencil or stick) — R/O: perforated eardrum, damaged
> ossicles, FB
> **See HCP within 4 Hours**: [1] SEVERE pain (excruciating) AND [2] not
> improved 2 hours after pain medicine (ibuprofen preferred) · [1] Earache
> causes inconsolable crying AND [2] not improved 2 hours after pain medicine ·
> [1] Pink or red swelling behind the ear AND [2] fever — R/O: mastoiditis ·
> Outer ear is red, swollen and painful — R/O: cellulitis and risk for ear
> cartilage damage · New onset of balance problem (e.g., walking is very
> unsteady or falling) — R/O: associated labyrinthitis
> **See PCP within 24 Hours**: Fever · Pus or cloudy discharge from ear canal ·
> Pus on eyelids · Child with cochlear implant · [1] Earache AND [2] MODERATE
> pain OR SEVERE pain inadequately treated · [1] Age < 2 years AND [2] ear
> infection suspected by triager
> **See PCP When Office is Open (within 3 days)**: [1] Earache AND [2] MILD
> pain AND [3] no fever AND [4] age > 2 years · Recurrent transient ear pain
> **Home Care**: [1] Transient ear pain AND [2] lasted < 20 minutes — Reason:
> probably due to a blocked eustachian tube or cold weather"

and its routing rules, which are where three of this packet's items come from:

> "[1] Painful ear canal AND [2] has been swimming → Go to Guideline: Ear -
> Swimmer's (Pediatric)
> Full or muffled sensation in the ear, but no pain → Go to Guideline: Ear -
> Congestion (Pediatric)
> Due to airplane or mountain travel → Go to Guideline: Ear - Congestion"

and its causes list, which is the differential a child arrives with:

> "Ear Infection (Otitis Media) … the most common cause … **The onset of ear
> infections peak on day 3 of a cold.** Swimmer's Ear. An infection or
> irritation of the skin that lines the ear canal. **Main symptom is itchy ear
> canal.** … Ear Canal Injury. A cotton swab or fingernail can cause a scrape in
> the canal. Ear Canal Abscess … Earwax … **Ear Canal Foreign Body. Young
> children may put small objects in their ear canal.** … Airplane Ear …
> Pierced Ear Infections … **Referred Pain. Ear pain can also be referred from
> diseases not in the ear. Tonsil infections are a common example. Tooth decay
> in a back molar can seem like ear pain.** … Jaw pain (TMJ syndrome) can
> masquerade as ear pain."

### 2. The diagnostic criteria, which are otoscopy (sources 3, 4, 12)

RCH, in full (source 3):

> "**Key points**: … Diagnosis requires acute onset and an abnormal ear
> examination with signs of middle ear inflammation and middle ear effusion …
> **Assessment · History**: Recent onset ear pain (irritability in pre-verbal
> children) · Fever · Loss of appetite · Vomiting · Lethargy · Cochlear implant
> · Immunocompromise. **Examination**: Systemically unwell · Ear examination:
> signs of acute inflammation of the tympanic membrane (TM): bulging, red,
> opaque TM — a red TM alone is not AOM."

Source 12, appraising seventeen European national guidelines plus AAP and WHO:

> "Twelve of 17 (71%) used strict combinations of three diagnostic criteria:
> (1) acute onset of symptoms (ie, otalgia, fever), (2) evidence of middle ear
> (ME) effusion (ie, tympanic membrane (TM) bulging of TM or otorrhoea on
> examination) and (3) inflammation of TM on examination."

Two of the three criteria are things a clinician sees down an otoscope. The
whole of criterion (1) — the history half — is **ear pain and fever**, and the
app already collects both (body map plus FPS-R; item 11).

Source 12 also gives the one symptom that changes management across almost all
of them:

> "The most common indication for antibiotics was tympanic membrane
> perforation/otorrhoea (14/15; 93%)."

NG91 agrees and is the only guideline read that names a *reportable* feature as
a prescribing discriminator (source 4):

> "Children and young people who may be more likely to benefit from antibiotics
> (those of any age with otorrhoea or those under 2 years with infection in both
> ears)"

and gives the natural history:

> "symptoms last for about 3 days, but can last for up to 1 week · most children
> and young people get better within 3 days without antibiotics · complications
> such as mastoiditis are rare."

### 3. The symptom scales and the one prediction model (sources 10, 11)

AOM-SOS, as described by source 10:

> "Version 3.0 (v3) of the AOM-SOS contained 7 items related to **ear tugging,
> crying, irritability, sleeping, activity, eating, and fever** over the last
> 24 hours, with available responses of 'no', 'a little' or 'a lot' … The
> subsequent 5-item AOM-SOS version 4 (v4) had items related to activity and
> eating removed."

ETG-5 and the J-score, verbatim (source 11):

> "ETG-5 is the total of 5 items, each measured on a 0 - 3 scale (none, mild,
> moderate and severe) … The five items were **fever** (None = 0, 1 = <38.4° C
> or parent observed but did not measure, 2 = 38.4 −38.8, 3 = > 38.8),
> **earache (by parent's suspicion), poor feeding, restless sleep, and
> irritability.** Five additional URI symptoms were also assessed on the same
> 0-3 scale: **sore throat (by parent's suspicion), cough, nasal stuffiness,
> runny nose, and watery eyes.**"

> "J = 2 × (age in months) + 4 × (coughing score) + 5 × (earache score) + 10 ×
> (high daycare score)."

Per the brief: harvest the variables, ignore the weights. The variables are
fever, earache, poor feeding, restless sleep, irritability, cough, sore throat,
nasal stuffiness, runny nose, watery eyes, age in months, and daycare exposure.
Of those twelve, **two** survive to this packet as items (nasal stuffiness /
runny nose → item 3; fever → item 11), and both survive because a *guideline*
also contains them, not because the model does.

### 4. The AOE criteria — the one place the symptoms are the diagnosis

Source 6, Table 3, reproducing the AAO-HNS clinical criteria:

> "Rapid onset of symptoms (usually within 48 hours) in the past three weeks ·
> **Symptoms of ear canal inflammation**: Ear pain (otalgia) · Itching · Sense
> of fullness · With or without hearing loss or jaw pain · **Signs of canal
> inflammation**: Pinna or tragus tenderness on movement or Diffuse canal edema
> or redness · May also have otorrhea, tympanic membrane rupture, pinna
> cellulitis, or local lymphadenitis"

Source 8 gives the same picture as a sequence and a severity ladder:

> "Initially, patients with OE will complain of pruritus and ear pain that is
> usually worse with manipulation of the tragus, pinna, or both. **Ear pain is
> often disproportionate to physical exam findings** … It can also present with
> otorrhea, fullness sensation, and hearing loss … **Mild**: pruritus, mild
> discomfort, and ear canal edema. **Moderate**: ear canal is partially
> occluded. **Severe**: The external ear canal is completely occluded from
> edema."

and the risk multiplier:

> "Swimming is one of the most common risk factors, and it **increases the risk
> five times** when compared to non-swimmers."

Source 7 renders the same guideline for a patient, which is the wording evidence
this packet needs:

> "Symptoms of swimmer's ear can include pain, redness, and swelling of the ear
> canal and an itchy feeling in the ear. **Pain when tugging the earlobe, or
> when chewing food, is also a symptom. Some patients report temporary hearing
> loss or their ears feeling 'full.'**"

### 5. The glue-ear presenting features — the only child-facing list in the set

NG233, recommendations 1.2.1 and 1.2.2, verbatim (source 5):

> "**1.2.1** Be aware that children with otitis media with effusion often
> present with any of the following features: **hearing difficulties (for
> example, mishearing when not looking at who is speaking, difficulty in a
> group, asking for things to be repeated)** · delayed speech and language
> development · **ear discomfort** · **tinnitus**.
> **1.2.2** Be aware that the following can also be associated with OME:
> behavioural problems (particularly lack of concentration or attention), being
> withdrawn, or irritability or poor educational progress or **balance
> difficulties (for example, clumsiness)**."

Note what recommendation 1.2.1 does that nothing else in this literature does:
it defines "hearing difficulties" **by the situations in which a child notices
them** — mishearing when not looking at the speaker, losing the thread in a
group, asking for things to be repeated. Those are a child's experiences, not an
audiogram. That is what makes item 1 citable rather than an examination in
disguise.

### The duration disagreement, and it is a threshold disagreement

| Source | Window | About |
|--------|--------|-------|
| Schmitt (2) | *"lasted < 20 minutes"* → Home Care | transient ear pain |
| Schmitt (2) | *"within 3 days"* | mild earache, no fever, age > 2 |
| NG91 (4) | *"about 3 days, can be up to 1 week"* | AOM natural history |
| Source 6 | *"Rapid onset of symptoms (usually within 48 hours) in the past three weeks"* | AOE diagnostic criterion |
| Source 7 | *"Symptoms usually improve within 2 to 3 days and pain goes away within 4 to 7 days, but it may take up to 2 weeks"* | AOE recovery |
| IMCI (1) | *"less than 14 days"* vs *"14 days or more"* | acute vs **chronic** ear infection |
| Source 9 | *"if symptoms persist for longer than 4 weeks"* | referral trigger |
| NG233 (5) | *"reassess hearing after 3 months"*; effusion *"may not resolve for up to 12 weeks"* (source 3) | glue ear |

Seven sources, seven cut-offs, spanning twenty minutes to three months. Per the
brief this is a **threshold** disagreement, not a scope one: capture the raw
fact and let the nurse classify. `DURATIONS` does that. It does *not* resolve
any of these cut-offs and cannot — see decision 5 and "Still open".

## The observability inversion — the finding that shapes this whole packet

Source 10, describing why the AOM-SOS contains the items it contains:

> "The questions in the AOM-SOS are based on **behaviours which could be
> observed by carers even in pre-verbal children** … Despite ear pain being a
> common criteria used to differentiate otitis media with effusion from AOM,
> **ear pain is not an item on the AOM-SOS as it is not an observable
> behaviour.**"

Read that against what this app is. The AOM-SOS is a validated instrument for
tracking the symptoms of a childhood ear infection, and it excludes the child's
pain **on the explicit ground that pain cannot be observed** — because its
respondent is a carer watching a toddler.

This app has the opposite respondent and therefore the opposite filter. Every
one of AOM-SOS v3's seven items — ear tugging, crying, irritability, sleeping,
activity, eating, fever — is an observation of a child from outside, and six of
the seven are excluded here (item 29). The one thing the scale had to drop is
the one thing this app collects best, and it collects it before this packet even
runs, on the body map and the FPS-R screen.

That is not a curiosity. It is the reason the yield below is the lowest of any
packet so far, and it is the reason **eight of the ten clean items come from
guidance and none from an instrument**. The measurement literature for this
complaint was built for the children this app does not serve. Where a Search A
instrument and this packet agree — fever, runny nose — the agreement is
incidental: both items are also plain history in a guideline, and that is why
they are here.

The corollary is a warning for whoever writes the questions. It would be very
easy, reading AOM-SOS or ETG-5, to produce "Have you been pulling your ear?" or
"Did you sleep badly?" and believe them sourced. They are sourced — to an
instrument that exists because the child could not speak. Source 11's own
authors say what that item is worth even in its home population:

> "We agree that **ear touching or pulling, in the absence of other symptoms and
> risk factors, is not a good predictor of AOM** in young children."

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Is it hard to hear on that side** | NG233 (5) — *"hearing difficulties (for example, mishearing when not looking at who is speaking, difficulty in a group, asking for things to be repeated)"*; AAFP/AAO-HNS (6) — *"With or without hearing loss"* among symptoms of canal inflammation; StatPearls OE (8) — *"otorrhea, fullness sensation, and hearing loss"*; AAO-HNS PLS (7) — *"Some patients report temporary hearing loss"* | **yes** | **The flagship item, and the app already ships it.** `FOLLOW_UPS.ears` contains exactly one hand-written question, `hearing` — *"Is it hard to hear on that side?"* — and it is re-sourced here so it survives the transition with a citation (decision 11). NG233 is the only source in the whole packet written for under-12s, and 1.2.1 defines hearing difficulty by *the situations a child notices it in* rather than by a measurement. Source 7 shows the same fact stated for a patient. Distinct from item 24 (audiometry and tympanometry), which is the nurse's. |
| 2  | **Is your ear wet, or is something coming out of it** | IMCI (1) — the **ASK** column: *"Is there ear discharge? If yes, for how long?"*; Schmitt (2) — *"Pus or cloudy discharge from ear canal"* → See PCP within 24 hours; NG91 (4) — *"those of any age with otorrhoea"* are more likely to benefit from antibiotics; Suzuki (12) — *"The most common indication for antibiotics was tympanic membrane perforation/otorrhoea (14/15; 93%)"*; RCH (3) — *"AOM with TM perforation is common and results in otorrhoea and frequently, relief of pain"* | **yes** | **The escalation item, and the one this packet had to argue rather than assume — see "The discharge split" below.** Best-supported non-pain item here: it is the only feature in the entire literature that changes what a prescriber does at any age, and IMCI asks it of a caregiver as plain history. Asked about **wetness the child feels**, never about pus the child would have to look at. Wording is heavily constrained; see cautions. |
| 3  | **Have you got a cold — a stuffy or runny nose** | Schmitt (2) — *"The onset of ear infections peak on day 3 of a cold"*; RCH (3) — *"The most common cause is a viral upper respiratory tract infection (URTI)"*; NG233 (5) — 1.2.3, higher suspicion with *"a history of: upper respiratory tract infections (URTIs)"*, and 1.2.4, OME *"less likely in the absence of … nasal obstruction, rhinorrhoea"*; ETG-5 (11) — *"nasal stuffiness, runny nose"*; Abbott (10) — *"runny nose (40%)"*, the most prevalent symptom in the cohort | **yes** | Five sources, plainly child-reportable, and the only item that is simultaneously in a guideline, a symptom scale and a prevalence table. **Not redundant with the sore-throat packet's item 4**, which is scoped `group: 'throat'` and will not fire for an ears-only report — the same relation as sore-throat item 11 to tummy's `t-003`. Cough belongs to the same fact and is *not* asked separately here; see item 20. |
| 4  | **Have you been swimming, or has water got in your ear** | AAFP (6) — *"the most common factor being swimming"*, and Table 2 *"Water in canal · Humidity · Sweating · Swimming\* or prolonged water exposure"*; StatPearls OE (8) — *"Swimming … increases the risk five times when compared to non-swimmers"*; Schmitt (2) — *"[1] Painful ear canal AND [2] has been swimming → Go to Guideline: Ear - Swimmer's"*; AAO-HNS PLS (7) — *"water remains trapped in the ear canal"* | **yes** | **An exposure fact that no examination can recover and only the child holds**, for the one ear condition whose incidence peaks inside this app's age range (source 6: 19% at 5–9, 16% at 10–14). Schmitt treats "has been swimming" as a *routing* fact — it sends the call to a different protocol — which is exactly how a nurse would use it. Ranked fourth for that reason despite being a history question. |
| 5  | **Does it hurt when you chew** | AAO-HNS PLS (7) — *"Pain when tugging the earlobe, or **when chewing food**, is also a symptom"*; AAFP (6) — *"With or without hearing loss or **jaw pain**"*; StatPearls Otalgia (9) — dental and TMJ pathology as *"among the most common secondary otalgia causes"*, and *"mechanical neck and jaw disorders may be more frequent causes of referred otalgia"* | **yes** | **A textbook nearly-reportable criterion, split rather than reclassified.** Source 7 names two patient-noticed pains in one sentence: pain on tugging the earlobe and pain on chewing. The first is the patient performing item 25's examination manoeuvre on themselves and is **excluded** — see cautions, and compare the sore-throat packet's ban on a child palpating their own neck. The second is something a child does at every meal without being asked. Only the chewing half is carried. Also the packet's only bridge to referred otalgia (see "Still open"). Adjacent to the `mouth` group's shipped `hurt-eat`; see decision 10. |
| 6  | **Does your ear feel full or stuffed up** | AAFP (6) — *"Sense of fullness"* among symptoms of ear canal inflammation; StatPearls OE (8) — *"fullness sensation"*; AAO-HNS PLS (7) — *"their ears feeling 'full'"*; Schmitt (2) — *"Full or muffled sensation in the ear, but no pain"* as its own routing branch; NG233 (5) — *"ear discomfort"* | **yes** | A pure sensation, held only by the child, and **not covered by `SENSATIONS`** — the list runs sharp, burning, aching, throbbing, punch, squeezing, itchy, dizzy, queasy, tingly, stiff, cramping, and none of those is fullness (decision 10). Schmitt is the strongest evidence that it is worth its own question: fullness *without* pain routes to a different protocol entirely. Perceptually adjacent to item 1 and ranked just below it for that reason. |
| 7  | **Did you put something in your ear** | Schmitt (2) — *"Long, pointed object was inserted into the ear canal (e.g. a pencil or stick)"* → **Go to ED Now**, and *"Ear Canal Foreign Body. Young children may put small objects in their ear canal"*; AAFP (6) — Table 2 risk factors, *"Canal obstruction: Foreign body"* and *"Instrumentation or itching of canal"*, cotton bud usage; StatPearls OE (8) — *"Trauma or external devices (cotton swabs, earplugs, hearing aids)"* | **yes** | Only the child knows, it is time-critical, and it is in no diagnostic criterion anywhere. Ranked below the top group because it is uncommon, not because it is weak. **Never name the object** — not a cotton bud, a pencil, a bead, a battery or a toy. Naming it prompts the answer and can frighten a child into denying it. Same ruling as sore-throat item 12 and the tummy packet's swallowing item, for the same reason. |
| 8  | **Can you hear a noise in your ear, like buzzing** | NG233 (5) — *"tinnitus"*, listed in 1.2.1 among the features children with OME often present with; StatPearls Otalgia (9) — *"complications may include hearing loss, tinnitus, vertigo, otorrhea"* | **yes**, age 8+ | **Unobtainable any other way**: there is no examination for tinnitus. NG233 puts it in a list of presenting features for **under-12s**, so it is genuinely a paediatric item. The floor is **judgement, not citation** — a 4-year-old asked whether they can hear a noise will look for one — and decision 7 records that it differs in kind from every other row. Ranked below item 9 despite being unique, because a false positive here is hard for a nurse to unpick. |
| 9  | **Do you keep falling over, or bumping into things** | Schmitt (2) — *"New onset of balance problem (e.g., walking is very unsteady or falling)"* → See HCP within 4 Hours, R/O labyrinthitis; NG233 (5) — 1.2.2, *"balance difficulties (for example, clumsiness)"*; StatPearls Otalgia (9) — *"vertigo"* among complications of primary otalgia | **partial** | Split on the same principle as item 5. *"Walking is very unsteady"* and *"clumsiness"* are both **an adult's characterisation of a child they are watching** — "clumsy" in particular is a judgement, and NG233's own word must never be handed to the child. But falling over, and bumping into things, are events the child experiences. Partial because the child supplies the events and the nurse supplies the pattern. **The dizziness half is not asked**: `SENSATIONS.dizzy` ("Spinny") is already offered to this child (decision 10). |
| 10 | **Is it hard to move your neck** | Schmitt (2) — *"[1] Stiff neck (can't touch chin to chest) AND [2] fever"* → **Go to ED Now**, R/O meningitis; NG91 (4) — refer to hospital for *"acute complications, including mastoiditis, **meningitis**, intracranial abscess, sinus thrombosis or facial nerve paralysis"* | **partial** | The highest-stakes item in the packet and the weakest as a question. Schmitt's criterion is a **manoeuvre** — chin to chest — and instructing a child to perform it is item 25's error in a different anatomy; a child who cannot do it and tries will hurt. So only the child's own experience of a stiff neck is carried, and the test itself is banned. Partial for that reason. **Near-identical to the sore-throat packet's item 9**, reached from a different group and a different complication; see decision 10 and "Still open" — this is now the third instance of a cross-packet duplication the app cannot dedupe. |
| 11 | **Do you feel hot or shivery** | RCH (3) — *"Fever"*, second History bullet; IMCI (1) — fever gates the follow-up referral; Schmitt (2) — fever appears in four separate dispositions and is half of both the meningitis and mastoiditis pairs; ETG-5 (11) — item 1, with four bands; AOM-SOS v3 and v4 (10) — retained through both revisions; Suzuki (12) — *"Symptoms include fever, otalgia, pain, vomiting and diarrhoea"*; AAP via (2) — *"Severe AOM is defined as ear infection with moderate or severe otalgia (ear pain) OR fever equal to or higher than 39 C"* | **partial** | **Seven sources, at least five incompatible thresholds** (38.3, 38.4–38.8, >38.8, 39, 40.6 °C, plus "parent observed but did not measure"). Child reports the sensation; nurse measures and classifies. Never ask a child for a number and never say "fever". Ranked eleventh for the same reason as sore-throat item 13: the app cannot resolve any threshold and the nurse will take a temperature regardless. |
| 12 | **Have you thrown up** | RCH (3) — *"Vomiting"*, fourth History bullet; Suzuki (12) — *"Symptoms include fever, otalgia, pain, vomiting and diarrhoea"* as the severity trigger across European guidelines | **yes** | Genuinely in the AOM history and in the pooled severity definition, genuinely child-reportable, and genuinely a poor use of a three-question screen for a child whose ear hurts. **Not redundant** with the tummy packet's `t-003`, which is scoped `group: 'tummy'`. Kept, ranked twelfth. |
| 13 | **Have you been able to eat** | RCH (3) — *"Loss of appetite"*, third History bullet; ETG-5 (11) — *"poor feeding"*; AOM-SOS v3 (10) — *"eating"*, **removed in v4** | **yes** — not proposed for v1 | Sourced, reportable, and the weakest item in the packet. Two of its three sources are observer instruments and the strongest of those *dropped* the item at its next revision — which the brief says still counts as a harvested variable, and it does, but it counts for less. It also overlaps item 5 from the other side: a child whose ear hurts when they chew will eat less. Kept so its absence is a decision; **first item to drop, and not proposed for generation in v1.** |
| 14 | Ear pain itself; pain severity | Every source. IMCI (1) — *"Is there ear pain?"*, the first ASK; RCH (3) — *"Recent onset ear pain"*; Suzuki (12) — *"acute onset of symptoms (ie, otalgia, fever)"*; AAP via (2) — the mild/moderate/severe otalgia grading | **yes** — already collected | Body map plus the FPS-R intensity screen. Do not ask again. **See "The observability inversion": this is the criterion the AOM-SOS had to abandon,** and the app gets it for free before this packet runs. Asking a child to grade it in words is banned outright and Schmitt says why — see cautions. |
| 15 | Which ear; one ear or both | NG91 (4) — *"those under 2 years with infection in both ears"*; source 12 — the unilateral/bilateral column runs through all 17 European guidelines' antibiotic thresholds; source 6 — AOE is usually unilateral | **yes** — already collected | **Free, because `ear-right` and `ear-left` are separate body-map regions.** This is the exact fact the sore-throat packet had to spend an item on (its item 7) because `throat` is a single region. Recorded here so the asymmetry between the two groups is visible rather than accidental. |
| 16 | Duration; time since onset; discharge duration | Seven sources, seven cut-offs — see the duration table above | **yes** — already collected | `DURATIONS`. **The bands cannot resolve any of them**, including IMCI's 14-day acute/chronic split which is the only one that changes a classification outright. See decision 5 and "Still open". |
| 17 | Age | McCormick (11) — *"2 × (age in months)"*, a term in the J-score; Schmitt (2) — age gates four dispositions; NG91 (4), source 12 — age thresholds throughout | **n/a** — already collected | Setup screen. Never a question. |
| 18 | Itching in the ear | AAFP (6) — *"Itching"*, second symptom of canal inflammation, and *"Itching is often the predominant symptom"* in chronic OE, contact dermatitis and eczema; StatPearls OE (8) — *"patients with OE will complain of pruritus"*, and **Mild** OE is defined as *"pruritus, mild discomfort, and ear canal edema"*; Schmitt (2) — *"Main symptom is itchy ear canal"*; AAO-HNS PLS (7) — *"an itchy feeling in the ear"* | **yes** — already collected | **Four sources, and it is already in the app**: `SENSATIONS.itchy` ("Itchy" / kid label "Itchy"), which **is** offered to this child because `ears` is `internal` and the sensation list is therefore never pruned. A rejected duplicate with better provenance than several items above it, and the clearest case in the packet of the redundancy check earning its place — a generator that had not made it would have written the app's single best otitis-externa question twice. |
| 19 | Dizziness; vertigo | Schmitt (2) — the balance disposition; StatPearls Otalgia (9) — *"vertigo"* | **yes** — already collected | `SENSATIONS.dizzy` ("Dizzy" / "Spinny"), offered for the same reason as item 18. Item 9 takes the falling-over half only; asking about dizziness as well would be two questions from one fact. |
| 20 | Cough | McCormick (11) — *"4 × (coughing score)"*, a weighted term in the J-score, and an ETG-5 URI item; Abbott (10) — *"coughing (38%)"*, second most prevalent symptom | **yes** — already collected elsewhere | A **rule variable** — one of only four terms in the only prediction model this literature has — and still rejected, because `FOLLOW_UPS.throat` ships `cough` and the sore-throat packet's item 3 owns it with far better provenance. For an ears-only report neither fires, and item 3 above already establishes the URI. Asking cough as well would be two questions from one fact. |
| 21 | Referred pain sources: sore throat, tonsils, teeth, jaw, neck | StatPearls Otalgia (9) — *"Local and regional causes of referred otalgia include dental, temporomandibular, and pharyngeal pathology"*, and *"TMJ, dental pathology, tonsillitis, and pharyngitis are cited as among the most common secondary otalgia causes"*; Schmitt (2) — *"Tonsil infections are a common example. Tooth decay in a back molar can seem like ear pain … Jaw pain (TMJ syndrome) can masquerade as ear pain"*; ETG-5 (11) — *"sore throat (by parent's suspicion)"* | **yes** — already collected elsewhere | Real criteria, all child-reportable, all rejected as duplicates of something the app does better: `throat` and `mouth` are their own body-map regions with their own groups and their own packets. A child whose throat also hurts taps Throat. **But the routing is one-way** — a child whose *only* complaint is ear pain from a rotten molar taps an ear, and nothing in this packet finds the tooth except item 5. Raised in "Still open" as the packet's largest known blind spot. |
| 22 | Functional impact of the pain | Schmitt (2) — *"**Ask: 'What does the pain keep your child from doing?'** Do not ask: 'Is the pain Mild, Moderate or Severe?'"*; AOM-SOS v3 (10) — *"activity"*, **removed in v4** | **partial** — deferred | A real, sourced alternative to severity grading, and the app has no home for it: FPS-R already occupies the intensity slot, and Schmitt's question is open-ended, which `FollowUpScreen` cannot render (decision 2). Recorded so the quote survives into the wording cautions, where it does useful work, and so a future run with a `text` or `voice` widget can pick it up. |
| 23 | Otoscopy: bulging, red or opaque tympanic membrane; loss of TM landmarks; the handle of the malleus; air-fluid level; retraction; yellow/amber appearance; light reflex; TM immobility on pneumatic otoscopy; perforation seen; diffuse canal edema, redness or debris; visualisation of the canal | RCH (3), NG91 (4), NG233 (5) 1.2.6, AAFP (6), StatPearls OE (8), StatPearls Otalgia (9), Suzuki (12) — *"inflammation of TM on examination"*; AAP via (2) — *"Diagnosis of AOM requires visualization of the TM and should not be attempted by telephone alone … Bulging of the TM must be present"* | **no — exam** | **The backbone of every diagnostic criterion in this literature, and a child cannot look in their own ear.** Even with a mirror, even with help. Source 2 states the prohibition outright for a nurse on a telephone, and an app has less standing than a nurse, not more. This single row is why the yield below is the lowest of any packet. |
| 24 | Hearing testing; audiometry; tympanometry; audiology reassessment; ETDQ-7 | NG233 (5) — 1.2.6, *"Formal assessment should include … hearing testing, tympanometry"*, and 1.3.1 *"reassess hearing after 3 months"*; StatPearls Otalgia (9) — *"Audiometry should also be considered if hearing loss is present"*; NG91 (4) — *"short-term hearing loss [measured by tympanometry]"* | **no — exam** | Not item 1. Item 1 is the child's experience of mishearing; this is the measurement, and NG233 keeps them in different recommendations (1.2.1 vs 1.2.6) which is the same split this packet makes. NG91's parenthesis is the giveaway: the hearing loss it discusses is *defined by the instrument that measures it*. |
| 25 | Pinna or tragus tenderness on movement; pain on manipulation of the tragus or pinna | AAFP (6) — *"**Tenderness on movement of the pinna or tragus is the classic finding**"*, and Table 3, *"Signs of canal inflammation"*; StatPearls OE (8) — *"ear pain that is usually worse with manipulation of the tragus, pinna, or both"*; source 7 — *"Pain when tugging the earlobe"* | **no — exam manoeuvre** | The single most diagnostic physical sign for the condition that peaks in this app's age band — and it is **elicited**. Source 6 files it under *signs*, not *symptoms*, and the symptom list on the same page deliberately does not contain it. **A child must never be told to tug or press their own ear**: the answer would read to a nurse as the classic finding, obtained by an untrained hand on a painful ear. Item 5 takes the chewing half of source 7's sentence and leaves this half here. Directly parallel to the sore-throat packet's ban on a child palpating their own neck for glands, which was that packet's most-cited predictor and this packet's most-cited sign. |
| 26 | Pain disproportionate to physical examination findings | AAFP (6) — *"which is disproportionate to what is expected on visual inspection"*; StatPearls OE (8) — *"Ear pain is often disproportionate to physical exam findings"* | **no — examiner comparison** | **The brief's example, found in the wild.** A criterion defined against what the examining clinician expects to see is not child-reportable however simple the words look — there is no version of this a child can answer, because the child is not the one with the expectation. Recorded verbatim so nobody downstream tries to build "does it hurt more than you'd think?" out of it. |
| 27 | Tender or pink/red swelling behind the ear; post-auricular erythema, oedema, tenderness or fluctuance; protruding auricle; external auditory canal oedema | IMCI (1) — **LOOK AND FEEL**: *"Feel for tender swelling behind the ear"* → **MASTOIDITIS, refer URGENTLY**; Schmitt (2) — *"[1] Pink or red swelling behind the ear AND [2] fever"* → See HCP within 4 Hours; RCH (3) — *"The diagnosis of AM is based on post auricular inflammatory signs (erythema, oedema, tenderness or fluctuance), a protruding auricle often with external auditory canal oedema and signs of AOM"*; NG91 (4) — mastoiditis heads the referral list | **no — observer / exam** | **The most consequential exclusion in this packet.** See "The mastoid check" below. |
| 28 | Outer ear red, swollen and painful; pinna cellulitis; local lymphadenitis; regional lymph nodes | Schmitt (2) — *"Outer ear is red, swollen and painful"* → R/O cellulitis and cartilage damage; AAFP (6) — *"pinna cellulitis, or local lymphadenitis"*, and *"The pinna, tragus, ear canal, and regional lymph nodes should be examined"* | **no — observer / exam** | A child cannot see their own ear, and the node half is palpation. Same ruling and same reasons as the sore-throat packet's cervical-node exclusion; never ask a child to feel their own neck or look at their own ear. |
| 29 | The observer behaviour battery: ear tugging, ear touching, ear rubbing, crying, inconsolable crying, irritability, restless sleep, sleeping, activity level, eating as observed, lethargy, *"child sounds very sick or weak to the triager"*, *"acts like he did with previous ear infection"* | AOM-SOS v3 and v4 (10); ETG-5 (11) — *"poor feeding, restless sleep, and irritability"*; Schmitt (2); RCH (3) — *"Lethargy"*, *"irritability in pre-verbal children"*; Abbott (10) — *"irritability (36%)"*, third most prevalent symptom | **no — observer** | **Thirteen criteria in one row, and together they are the whole of the validated symptom-scale literature for this complaint.** Every one is a carer watching a child who cannot speak. See "The observability inversion" for why they are here in bulk and not reclassified one at a time — and note source 11's own verdict on the most famous of them: *"ear touching or pulling, in the absence of other symptoms and risk factors, is not a good predictor of AOM in young children."* |
| 30 | Response to analgesia: *"not improved 2 hours after pain medicine (ibuprofen preferred)"*; what medicine was given and when | Schmitt (2), in two separate See-HCP-within-4-Hours criteria | **no — carer / record** | It appears in two of Schmitt's five most urgent dispositions and is still not the child's: it requires knowing which drug, what dose, and how long ago. A child's answer would be a guess with a two-hour clock attached to it. |
| 31 | Records and carer history: ear tubes or grommets in place; cochlear implant; diagnosed ear infection within the past 10 days; recurrent or frequent ear infections; immunosuppression (sickle cell disease, HIV, splenectomy, chemotherapy, organ transplant, chronic oral steroids); craniofacial anomalies, Down syndrome, cleft palate; day care attendance and hours; household cigarette smoke exposure; asthma, eczema, atopy, adenoid hypertrophy; hearing aids; prior surgery or radiotherapy; diabetes; Type A blood | Schmitt (2); RCH (3) — *"Exposure to cigarette smoke from household contacts is a known modifiable risk factor"*; NG233 (5) — 1.2.3 and 1.2.4; AAFP (6) — Table 2; StatPearls OE (8); McCormick (11) — *"10 × (high daycare score)"* | **no — carer or record** | Not the child's to report, and several are not knowable by anyone in the room. A 6-year-old does not know their day-care hours per week and must never be asked about their household's smoking. Note that daycare carries the **largest coefficient in the only prediction model this literature has** and is still unavailable to this app. |
| 32 | High-risk-group branch: Aboriginal and/or Torres Strait Islander identity; living in a remote or semi-remote community | RCH (3) — *"Management may also differ for children from higher risk groups, such as those living in Aboriginal or Torres Strait Islander communities"*, with its own linked guideline; Abbott (10) — *"Immediate antibiotics are recommended for Aboriginal and Torres Strait Islander people in remote and semi-remote regions"* | **no — see below** | **The sore-throat packet's ARF exclusion, reached a second time by a different route.** A branch that overrides the ordinary management pathway and is decided by ethnicity and community of residence. Excluded outright and flagged, not quietly dropped; this app must never ask a child about their ethnicity to route their clinical care, and the child's record already holds it. Same conclusion, same reasoning, third packet. |
| 33 | Measured temperature and its thresholds: > 39 °C, > 40.6 °C by any route, axillary > 40 °C, > 38.3 °C, 38.4–38.8 °C | Schmitt (2); AAP via (2); ETG-5 (11); StatPearls OE (8) | **no — instrument** | The nurse's thermometer. Item 11 is the child's half. Five thresholds, none of them resolvable by a question. |
| 34 | Systemically unwell; severe systemic infection or sepsis; facial nerve palsy or facial paralysis; toxic appearance | RCH (3) — *"Systemically unwell"*, and *"Facial nerve palsy secondary to AOM should be discussed with ENT"*; NG91 (4) — refer for *"a severe systemic infection"*, *"facial nerve paralysis"*; Schmitt (2) | **no — observer** | Observation is the observer's. Facial palsy in particular reads as tempting — a child might notice their face feels odd — but every source states it as a sign someone else sees, and a question built on it would be a reclassification, not a split. |
| 35 | Investigations: ear canal or otorrhoea culture; CT; MRI; bloods | RCH (3) — *"There is no role for routine diagnostic investigation for AOM"*, and imaging *"only required in children with suspected intracranial complications"*; AAFP (6) — *"Cultures of otorrhea are usually not performed"*; StatPearls OE (8) | **no — lab / imaging** | Recorded so a future run does not go looking for a proxy. Note that both complaint sources say the investigations are mostly *unnecessary* — the diagnosis is the otoscope, which is item 23. |
| 36 | Season; summer; warm climate; humidity; travel by aeroplane or over mountains | AAFP (6) — *"Most cases happen in summer months or in warmer regions"* (source 7), Table 2 *"Humidity"*; Schmitt (2) — *"Due to airplane or mountain travel → Go to Guideline: Ear - Congestion"*, and *"cold weather"* under transient ear pain | **no — not a question** | The system knows the date. Altitude and flight history are a carer's. Recorded so they are visibly decisions rather than omissions. Note that the aeroplane branch is a *different presenting complaint* in Schmitt's protocol, not a feature of this one. |
| 37 | Verbal severity grading of the pain (mild / moderate / severe otalgia) | AAP via (2) — *"Severe AOM is defined as ear infection with moderate or severe otalgia"*, *"Mild AOM is defined as mild otalgia AND fever < 39 C"*; Schmitt (2) — MILD / MODERATE / SEVERE gate four dispositions; ETG-5 (11) — *"none, mild, moderate and severe"* | **no — banned** | **The single most-used variable in this literature and the app already refuses it**, globally, in `screen.mjs`. Source 2 refuses it too, in the same words and for the same reason — see wording cautions. The app's answer is FPS-R (item 14). |

**Yield: ~52 distinct criteria across 12 sources read first-hand — 2 symptom
scales, 1 prediction model, 5 guidelines or protocols, 2 reviews and 2 reference
texts → 10 clean, 3 partial, 30 excluded, 9 already collected elsewhere in the
app.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 →
14 clean (30%); sore throat ~53 → 12 clean (23%); **earache ~52 → 10 clean
(19%)**. The lowest proportion of the four, and — as with sore throat — the
reason is structural rather than a shortfall in searching. Two facts do it:

1. **Diagnosis in this literature is otoscopy** (item 23). Source 2 states the
   prohibition in one line: *"Diagnosis of AOM requires visualization of the TM
   and should not be attempted by telephone alone."*
2. **The measurement instruments were built for observers of pre-verbal
   children** and one of them excludes the child's pain by design (see "The
   observability inversion").

Sore throat's two backbone variables required someone to look inside the child
or press on their neck. Earache's require someone to look inside the child *or
to be someone else entirely*.

## The discharge split — why item 2 ships, and what it may not say

The brief flagged this one: ear discharge is child-observable, but wording it
needs the care the tummy packet applied to blood in poop, and that packet
**deferred** its equivalent rather than ship a leading yes/no where "yes" is the
escalating answer. This packet reaches the opposite conclusion, deliberately, on
four grounds — and then constrains the wording hard.

**Why it ships.**

1. **The source splits it for us.** IMCI puts *"Is there ear discharge?"* in the
   **ASK** column and *"Look for pus draining from the ear"* in the **LOOK AND
   FEEL** column, on the same chart, four words apart. That is the self-report
   filter drawn by a WHO assessment algorithm, not by this packet. The ASK half
   is history; the LOOK half is observation. Item 2 is the ASK half and item 23
   keeps the LOOK half excluded.
2. **It is the best-supported non-pain item in the literature** and the only one
   that changes management at any age: 93% of European guidelines make
   perforation/otorrhoea an immediate-antibiotic indication (source 12), and
   NG91 names otorrhoea as one of only two features that shift its prescribing
   advice (source 4). Deferring it would defer the single most actionable
   answer this packet can obtain.
3. **The escalation it triggers is mild.** Schmitt puts discharge at *See PCP
   within 24 Hours* — not ED, not 911. And RCH says the thing that makes the
   "yes" answer non-frightening: *"AOM with TM perforation is common and results
   in otorrhoea and **frequently, relief of pain**."* A "yes" here is often a
   child whose ear has just stopped hurting. That is materially unlike blood in
   poop, where the "yes" is alarming to the child before any clinician sees it.
4. **The child does not have to inspect anything.** Blood in poop requires a
   child to look into a toilet and classify what they see. Wetness on the side
   of the head, on a finger, or on a pillow is felt. No inspection, no
   classification, no mirror.

**What it may therefore not say.** The wording is where the tummy packet's
caution lands, and it lands hard:

- **Ask about wetness the child feels, never about pus the child would have to
  see.** "Is your ear wet?" or "Is something coming out of your ear?" — never
  "Is there pus?", never "Is anything yellow or green coming out?", never "Is it
  bleeding?" A child asked to name a colour will name one, and the nurse will
  read it as an observation.
- **No colour, no consistency, no volume.** Schmitt's own phrasing is *"Pus or
  cloudy discharge"* and RCH distinguishes otorrhoea from otitis externa
  discharge — both are classifications, both belong to item 23, and neither is
  obtainable from a 7-year-old.
- **Do not tell the child what it means.** No "has your eardrum burst", no "is
  there a hole", nothing that names a perforation. `bannedPhrases` enumerates
  these.
- **The `young` tier needs review.** A 4-year-old may not distinguish a wet ear
  from sweat, water from the bath, or a tear. Flagged in "Still open"; this is
  the item where the tummy packet's instinct is most likely to be right and this
  packet's ruling most likely to be wrong.

**Recorded as a decision, not a default.** Deferral was considered and rejected
for the four reasons above. If the clinical reviewer disagrees, the item to drop
is item 2 and the packet still ships nine clean items — but the drop should be
theirs and visible, not an omission.

## The mastoid check — the one thing this packet cannot ask

Four of the sources read carry a criterion for acute mastoiditis, and all four
state it the same way:

> IMCI (1), under **LOOK AND FEEL**: *"Feel for tender swelling behind the
> ear."* → **MASTOIDITIS · refer URGENTLY to hospital.**
>
> Schmitt (2): *"[1] Pink or red swelling behind the ear AND [2] fever"* → See
> HCP within 4 Hours.
>
> RCH (3): *"Acute mastoiditis, although rare, is the most common suppurative
> complication of AOM and may be associated with intracranial complications. The
> diagnosis of AM is based on **post auricular inflammatory signs (erythema,
> oedema, tenderness or fluctuance), a protruding auricle** … "*
>
> NG91 (4): refer to hospital for *"acute complications, including mastoiditis,
> meningitis, intracranial abscess, sinus thrombosis or facial nerve
> paralysis."*

It is the most urgent thing in the packet and **not one word of it is available
to this app.** A swelling behind the ear is seen by someone standing behind the
child; tenderness is elicited by a hand; a protruding auricle is a comparison
between two ears made by an observer. Every route to it is closed:

- **Asking the child to feel behind their own ear is banned**, for the reason
  the sore-throat packet banned a child feeling their own neck for glands: it
  delegates a physical examination to a child, and a child pressing a painful
  mastoid and reporting a result is worse than no data. The word "tender" only
  has meaning under someone's fingers.
- **Asking the child to look is impossible.** It is behind their ear.
- **"Does it hurt behind your ear?" is not the criterion.** All four sources
  pair the swelling with something else — a fever, an inflammatory sign, an
  otoscopic finding. A bare "yes" to pain in a place a child cannot point at
  precisely would read to a nurse as a mastoid finding it is not.

**Decision: excluded outright and flagged here rather than quietly dropped**,
for the same two reasons as the sore-throat packet's ARF branch. First, so that
nobody downstream "completes" the packet by writing the obvious question.
Second, so the clinical reviewer sees plainly that **a complete, well-answered
earache report from this app does not rule out the complication that every
source in it treats as an emergency.** The nurse looks behind the ear. The app
cannot, and must not appear to.

This is the third packet to end at the same place — head injury's
non-accidental-injury exclusion, the tummy packet's abuse exclusion, sore
throat's ARF branch, and now this — by four different routes.

## Wording cautions

Ban **concepts**, not phrasings.

- **Never name a condition.** Not an ear infection, otitis, glue ear, swimmer's
  ear, mastoiditis, meningitis, labyrinthitis, cellulitis, an abscess, a
  perforation, a burst eardrum. `scripts/screen.mjs` reads its per-packet bans
  from the sidecar, so these are enumerated in `bannedPhrases`.
- **Never name a structure the child cannot see.** Not the eardrum, the ear
  canal, the middle ear, the outer ear, the tube, a grommet, earwax. The body
  map's labels are "Right ear" and "Left ear" and the questions say **"your
  ear"**. Naming an internal structure invites a child to go and look for it,
  which is item 23 delegated to a seven-year-old.
- **Never ask a child to tug, pull, press, poke or wiggle their own ear**, or to
  put anything in it. This is item 25 — *"Tenderness on movement of the pinna or
  tragus is the classic finding"* — and an app must not obtain the classic
  physical sign of otitis externa by instructing an untrained child to press on
  an inflamed ear. Item 5 asks about chewing, which the child does anyway,
  precisely to avoid this.
- **Never ask a child to feel behind their own ear**, and never use "lump",
  "bump" or "swelling" about the head or neck. See "The mastoid check".
- **Never ask a child to look in their own ear or have someone look**, and no
  mirrors. Same ruling as the sore-throat packet's throat ban, with the same
  source behind it: *"Diagnosis of AOM requires visualization of the TM and
  should not be attempted by telephone alone."*
- **Never say "pus", and never ask about colour, blood or amount.** See "The
  discharge split". Item 2 says **"wet"** or **"something coming out"**.
- **Never instruct the chin-to-chest test**, or any other manoeuvre. Item 10
  asks whether it is hard to move the neck; it does not ask the child to try.
- **Never name the object in item 7.** Not a cotton bud, a Q-tip, a pencil, a
  stick, a bead, a battery or a toy. Naming it prompts the answer and frightens
  the child into denying it.
- **Never ask a child to rate or grade anything in words** — already banned
  globally, and source 2 bans it in its own protocol in almost the app's words:
  > "**Ask: 'What does the pain keep your child from doing?' Do not ask: 'Is the
  > pain Mild, Moderate or Severe?' Reason: Many parents and teens will choose
  > 'Severe'.**"
  >
  > This is a telephone-triage protocol refusing a verbal severity scale for
  > adults *and* teenagers. It is the strongest external support the app's
  > global ban has yet been given, and it belongs in the record.
- **Never say "fever"**, never ask for a temperature, never mention degrees.
- **Never use "deaf", "hearing loss" or "muffled".** Item 1 says **"hard to
  hear"**, which is the wording the app already ships and the wording NG233's
  examples support.
- **Never use "clumsy", "unsteady" or "balance".** Those are NG233's and
  Schmitt's words for an adult describing a child. Item 9 says **"falling
  over"** and **"bumping into things"**.
- **Never say "dizzy" or "spinny"** in this packet: that is `SENSATIONS.dizzy`,
  already offered to this child, and item 9 must not re-ask it.
- **Avoid "still"** — banned universally by `screen.mjs`; noted because "Can you
  still hear okay?" is the obvious phrasing for item 1 and it presupposes.
- Avoid "serious", "dangerous", "bad", "severe" — already banned.

## How these were found

Search A was run as the brief specifies — comparison and validation literature,
not a remembered guideline name. A Europe PMC title search across otitis media,
otalgia and ear pain crossed with symptoms, diagnostic accuracy and prediction
returned thirty results, of which three were open access and on point: source
10 (a head-to-head comparison of the two paediatric AOM symptom scales), source
11 (the only clinical prediction model in the set), and source 12 (a systematic
appraisal of seventeen national guidelines). All three were fetched and read.

**And Search A was almost useless, which is itself the finding.** Of the ten
clean items:

- **Eight appear in no Search A instrument at all** — hearing change, discharge
  as history, swimming exposure, pain on chewing, fullness, foreign body,
  tinnitus, falling over. Every one came from Search B.
- **Two appear in a Search A instrument** — the runny-nose/URI item (ETG-5's
  *"nasal stuffiness, runny nose"*, Abbott's 40% prevalence) and fever (ETG-5
  item 1, AOM-SOS through both revisions) — and **both appear there as
  carer-observed entries**, and both are independently plain history in a
  guideline. Neither is here because a scale contains it.

The tummy packet found that nine of its fourteen usable items appeared in no
prediction rule. This packet is the sharper case: **the instruments for this
complaint are not merely aimed at the wrong disease, they are aimed at the wrong
respondent.** They exist because the child could not speak. Search B — WHO IMCI's
ear module, Schmitt's earache protocol, NG233's presenting features, the AOE
guidance and its plain-language rendering — is where every usable item lives,
and the brief's insistence on it is vindicated more strongly here than in any
previous packet.

The comparison the brief asks for, stated plainly: **what is in the complaint
guidance and in no rule or scale is hearing change, ear discharge as a history
item, water exposure, pain on chewing, fullness, foreign bodies, tinnitus and
balance.** Those eight are the spine of this packet. They are absent from the
scales because the scales watch behaviour, and absent from the diagnostic
criteria because the diagnostic criteria are an otoscope.

One further gap worth recording: **acute otitis externa has almost no presence
in the AOM literature at all**, and it is the ear condition that actually peaks
in this app's age band. Neither symptom scale, the prediction model, nor the
seventeen-guideline review mentions it. It arrived only through Search B, and it
contributed three of the ten clean items (4, 5, 6) plus the already-collected
itch (item 18). Searching for "the rules for earache in children" and stopping
there would have produced a packet for six-month-olds.

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with the tummy and sore-throat packets.**
   The new vocabulary domain is the ear, and it is ruled explicitly before
   anything is generated:
   - **"your ear"** — matching the body-map labels "Right ear" / "Left ear".
     Never "eardrum", "ear canal", "middle ear", "outer ear", "tube",
     "grommet", "earwax", "wax".
   - **"hard to hear"** — not "hearing loss", not "deaf", not "muffled", not
     "can't hear properly". This is the app's existing wording in `hearing` and
     it is kept unchanged (decision 11).
   - **"wet"** and **"something coming out"** — not "pus", not "discharge", not
     "drainage", not "fluid", not "gunk", and no colour word at all.
   - **"full or stuffed up"** — not "blocked" (the sore-throat packet already
     ruled "blocked nose" out as British, and the same word must not return for
     the ear), not "plugged", not "pressure", not "congested".
   - **"a cold"**, **"stuffy or runny nose"** — carried unchanged from the
     sore-throat packet's decision 1, because item 3 is the same vocabulary
     domain and nothing is gained by a second ruling.
   - **"chew"** — not "bite down", not "eat" alone (that is item 13), not
     "jaw".
   - **"a noise in your ear, like buzzing"** — never "tinnitus", and never
     "ringing" as the only example. A child needs a concrete sound to compare
     against; one example word is required, and "buzzing" is the plainer of the
     two.
   - **"falling over"**, **"bumping into things"** — never "unsteady",
     "balance", "clumsy", "wobbly".
   - **"throw up"** — carried unchanged from the tummy and sore-throat packets.
2. **Answer types.** `FollowUpScreen` renders yes/no only. **Corrected 2026-09-08:** this sentence was wrong. `FollowUpScreen` renders `yesno`, `count`, `text` AND `voice` (`src/screens/FollowUpScreen.jsx` lines 133-145). The packet's exclusions below were reasoned from a false premise and any that turned on it should be revisited. **All ten clean items
   and all three partial items are yes/no.** Nothing in this packet needs a
   widget the app does not have. Item 22 (functional impact) is the one
   criterion that would need `text` or `voice`, and it is explicitly deferred
   rather than reshaped into a yes/no it does not fit.
3. **Item 2 is asked about the child's own experience, not about the fluid.**
   "Is your ear wet?" — never "is there pus coming out of your ear?", never any
   question that asks a child to look at, name or classify what is there. See
   "The discharge split", which also records why the tummy packet's deferral was
   considered and not followed.
4. **Item 5 takes the chewing half of source 7's sentence and only that half.**
   *"Pain when tugging the earlobe, or when chewing food, is also a symptom"*
   contains one patient-reportable fact and one self-administered examination.
   The split is the same one the sore-throat packet made between its item 1
   (pain on swallowing, history) and elicited findings — and here it is
   load-bearing, because item 25 is the *classic diagnostic sign* for the
   condition that peaks in this app's age range. Reaching for it would be the
   most tempting mistake available in this packet.
5. **Duration scope, and it is unlike either previous packet's.** The full
   source table is above. Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
     Inside every acute source's window: NG91's 3-days-to-a-week, source 6's
     48-hours-in-3-weeks, Schmitt's 3-day and 20-minute bands.
   - `not-sure` — **full packet.** Same convention as all three previous
     packets: `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **items 1, 2, 6, 8 and 9 only.**

   **This is a third distinct shape, and it is sourced rather than inherited.**
   The tummy packet kept one item at `long-time` because chronic abdominal pain
   is a different literature. The sore-throat packet kept its red flags and
   dropped its score variables, because score variables discriminate strep in an
   acute illness. Here the surviving five are **exactly NG233's presenting
   features** — hearing difficulties, ear discomfort/fullness, tinnitus, balance
   difficulties — plus discharge. That is not a judgement call: NG233 is a
   guideline *about the long tail*, describing a condition whose reassessment
   interval is three months and whose effusion *"may not resolve for up to
   12 weeks"* (source 3), and its features are the ones that stay meaningful in
   an ear that has been wrong for weeks. Discharge is kept because IMCI's
   ≥14-day band is a live classification — *"CHRONIC EAR INFECTION"* — and
   because NG233 covers post-grommet otorrhoea.

   What is dropped at `long-time` and why: item 3 (a cold three weeks ago
   explains nothing), item 4 (source 6's own criterion is *"in the past three
   weeks"*, so the exposure question expires with it), items 5, 7, 10, 11, 12,
   13 (acute-illness features and a foreign body nobody found for a month).
6. **Item priority, and one question per item.** Thirteen items compete for
   three bank slots (`followUpsForGroups` caps at `out.slice(0, 3)` plus the
   reserved `happened-before`). Never ask two questions from the same item.
   Order:

   `1 (hard to hear) → 2 (ear wet) → 3 (a cold) → 4 (swimming) →`
   `6 (full or stuffed up) → 5 (hurts to chew) → 7 (put something in) →`
   `9 (falling over) → 8 (noise in ear) → 10 (move your neck) →`
   `11 (hot or shivery) → 12 (thrown up) → 13 (been able to eat)`

   Item 1 leads because it is the shipped question, because it is the first
   entry in the only presenting-features list written for this app's age band,
   and because it is a perception nobody else in the room has access to. Item 2
   is second because it is the only answer that changes a prescriber's decision
   at any age. Item 3 is third: cheapest, best-supported context in the packet,
   and Schmitt's *"day 3 of a cold"* is the single most useful piece of timing
   in the sources. **Item 4 is fourth, ahead of item 6, on the age-incidence
   argument in Scope** — swimmer's ear peaks at 5–14, swimming multiplies its
   risk fivefold, and no examination can recover the exposure; item 6 overlaps
   item 1 perceptually. Item 5 is sixth rather than higher only because item 25
   makes its wording delicate. Item 11 (fever) ranks eleventh for the same
   reasons as the sore-throat packet's item 13. Item 13 is last and is not
   proposed for generation in v1. **Proposed, not yet confirmed by review.**
7. **Age floors: one, and it is judgement, not citation.** No source in this
   packet floors any item. NG233 is written for under-12s and lists tinnitus and
   balance difficulties with no lower bound; RCH's and Schmitt's age statements
   (*"peak age 6-18 months"*, *"peak at age 6 months to 2 years"*, *"Age <
   2 years … recognizes child too young to report earache"*) are about **disease
   frequency and about children below the app's floor**, so none of them
   attaches to an item. Source 6's age-incidence table runs the other way and is
   an argument *for* items 4, 5 and 6 in this age band, not against them.

   **The exception: item 8 (a noise in the ear) carries `minAge: 8`**, the
   app's `older` tier boundary. The reasoning is the packet's own, not a
   source's: tinnitus is the only item here that cannot be checked against
   anything — no examination, no observer, no second question — and a 4- to
   7-year-old asked whether they can hear a noise will go looking for one and
   find it. That is a **capability** concern in the brief's sense (the child
   cannot reliably do the introspection), not a validity one, and it is recorded
   here rather than in the sidecar's `cite` so a reviewer can see it differs in
   kind from every other row. Same shape as the sore-throat packet's item 7.
8. **`depth: null`, because the group is `internal` and no depth answer exists —
   and here the wrong value would do active harm.** `GROUP_DEPTH.ears ===
   'internal'`, so `depthGroupsForRegions` never returns `ears`, the depth
   screen never asks, `depths['ears']` is permanently `undefined`, and
   `followUpsForGroups` passes `null` into `bankQuestions`. `build-bank.mjs`
   emits no `depth` key when the sidecar's value is falsy, and `bankQuestions`'
   depth filter is a no-op when `q.applies.depth` is absent — so the questions
   fire for every child who taps either ear, which is correct.

   **Writing `"depth": "inside"` would look more informative and would be
   wrong twice over.** First, for the sore-throat packet's reason: it asserts a
   scope the app has no answer to test, because no answer exists. Second, and
   specific to this group: a large share of these children have an **outer-ear
   or ear-canal** condition. Acute otitis externa is a disease of the skin
   lining the canal, its incidence peaks inside this app's age range, and three
   of the ten clean items (4, 5, 6) plus the already-collected itch exist to
   catch it. If the depth question were ever turned on for `ears` by mistake, a
   `'inside'` scope would silently suppress **exactly those questions** from
   exactly the children who need them. Null is both the honest encoding and the
   safe one.

   Related, and left alone: `ears` being marked `internal` at all is arguable
   for a group containing the pinna and the canal. It is not this packet's to
   change — see "Still open".
9. **The mastoid criterion is excluded outright and flagged, not softened into
   a question.** Recorded as a decision because the temptation to write "does it
   hurt behind your ear?" is real and the question would be worse than silence.
   See "The mastoid check".
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and the
    other groups' hand-written follow-ups:
    - **Rejected as duplicates:** item 14 (FPS-R and the body map), item 15
      (the body map, which holds left/right for free), item 16 (`DURATIONS`),
      item 17 (setup age), **item 18 (`SENSATIONS.itchy`)** and **item 19
      (`SENSATIONS.dizzy`)** — both of which *are* offered to this child,
      because `ears` is `internal` and `activeDepths` therefore never prunes the
      list — item 20 (cough, owned by `throat`) and item 21 (throat, mouth and
      jaw, which are their own body-map regions and groups). **Item 18 is the
      most valuable rejection in the packet**: itch is the predominant symptom
      of otitis externa in four sources, and a generator that had not run this
      check would have written the app's best swimmer's-ear question a second
      time under a new id.
    - **Kept despite `SENSATIONS` proximity:** item 6 (full or stuffed up). The
      sensation list contains twelve entries and none of them is fullness;
      `squeezing` ("Tight squeeze") is the nearest and is a different feeling.
    - **Kept despite cross-group overlap:** item 3 duplicates the *fact* behind
      the sore-throat packet's item 4, and item 12 the fact behind tummy's
      `t-003`; both of those are scoped to other groups and will not fire for an
      ears-only report.
    - **Adjacent, not redundant:** the `mouth` group ships `hurt-eat` ("Does it
      hurt when you eat?"), which is close to items 5 and 13. `mouth` and `ears`
      are different groups and a child may tap both; the two questions must be
      distinguishable on the nurse's screen. Flagged, as the sore-throat packet
      flagged the same pair.
    - **Conditional — and this is the third instance:** item 10 ("is it hard to
      move your neck") is near-identical in *fact and probable wording* to the
      sore-throat packet's item 9. `followUpsForGroups` dedupes by question
      **id**, not by fact, so a child who taps an ear and their throat could be
      asked the same question twice under two ids and two citations. The
      sore-throat packet logged this for breathing (`chest`/`throat`), the tummy
      packet for its item 18, and this makes three across three packets — the
      first where the duplicated *text* would be visible to the child. See
      "Still open".
11. **The one hand-written `ears` follow-up must be re-sourced, and the
    mechanism by which it would be lost is not the one the sore-throat packet
    describes.** `FOLLOW_UPS.ears` contains exactly one question:
    `{ id: 'hearing', q: 'Is it hard to hear on that side?' }`. Item 1 exists to
    carry it across with a citation.

    The sore-throat packet's decision 11 states that `followUpsForGroups` does
    `if (sourced.length) continue`, dropping hand-written questions outright the
    moment the bank covers a group. **That is not what the current code does.**
    It pushes every bank question first, then appends each hand-written question
    whose id is not already used, and *then* returns `out.slice(0, 3)`. So
    `hearing` is not dropped by a guard — it is **sliced off the end** as soon as
    the bank supplies three `ears` questions, which this packet will. The
    outcome is identical; the mechanism is not, and a future packet reading the
    sore-throat account would look for a guard that is not there.

    **Concrete consequence for generation: item 1's candidate should take the id
    `hearing`.** Then the `seen` set suppresses the hand-written entry by id and
    the transition is a clean replacement rather than a race with the cap. The
    wording should also stay as close to the shipped text as the register ruling
    allows — it is a working question, and whoever wrote it picked, unaided, the
    first entry in the only presenting-features list in this literature written
    for children of exactly this age.

## Still open

- **`ears` is marked `internal`, but the ear condition that peaks in this app's
  age band is a disease of skin.** Acute otitis externa lives in the ear canal
  and involves the pinna; the group that hosts it is declared internal. The
  consequence today is benign and in fact helpful — the sensation list is
  unpruned, so `itchy` reaches the child who needs it (decision 10) — but it is
  an accident, not a design, and decision 8 explains how it would turn harmful
  if the depth question were ever enabled for this group. Architecture question,
  raised the way the sore-throat packet raised its homeless rash: an `internal`
  group with a surface disease, which is that problem inverted.
- **The `hearing` question says "on that side" and the app does not guarantee
  there is one side.** A child may tap both `ear-right` and `ear-left`, and
  bilateral-versus-unilateral is precisely the distinction NG91 uses to change
  its antibiotic advice under 2. The question needs either a both-ears variant
  or region awareness. It is a pre-existing wording bug, not one this packet
  introduces, but item 1 inherits it.
- **Cross-packet duplication now has three instances and the newest is
  visible to the child** (decision 10). `followUpsForGroups` should dedupe on a
  declared `fact` rather than a question id. Not fixed here — this run may write
  only its own two files.
- **Referred otalgia is this packet's largest blind spot.** Source 9 makes
  dental and TMJ pathology among the commonest causes of ear pain, and source 2
  adds tonsils and mumps. The app routes by *where it hurts*, so a child whose
  ear pain comes from a rotten molar taps an ear and is asked ear questions.
  Item 5 (chewing) is the only bridge and it is a narrow one. Whether the app
  should ever cross-offer another group's questions on a referred-pain basis is
  a question for the reviewer and the architecture, not for this packet.
- **Item 2's wording for a young child** (see "The discharge split"). A
  4-year-old may not distinguish a wet ear from bath water, sweat or a tear.
  Needs a clinician's and a play specialist's view on the `young` tier
  specifically. This is the item most likely to be wrong.
- **Item 8's floor is the packet's own judgement** and a reviewer should either
  endorse it or remove it. If removed, the item needs young-tier wording that
  does not invite a 4-year-old to hunt for a sound.
- **Duration bands resolve none of the seven cut-offs**, and one of them —
  IMCI's 14-day acute/chronic discharge split — changes a classification rather
  than a referral speed. `few-days` and `long-time` straddle it with nothing in
  between. A reviewer should confirm this is acceptable given that the nurse has
  the arrival time and can ask.
- **No source in this packet is evidence that a child self-reports ear symptoms
  reliably.** The sore-throat packet at least had a self-report diary study in
  4–11 year olds. Here there is nothing: source 10's scales were *"administered
  verbally to parents/carers"*, source 11's symptoms were *"obtained by parent
  report"*, and IMCI asks the mother. **Every item in this packet is a
  reportable fact that no cited study has ever asked a child directly.** That is
  a larger evidence gap than any previous packet has carried and the reviewer
  should see it stated plainly rather than inferred from the sources list.
- **The high-risk-group branch (item 32).** Excluded on principle, and the
  reviewer should confirm the nurse-facing surface makes the child's risk-group
  status visible — because, as with the sore-throat packet's ARF branch, it
  overrides everything this packet collects.
- **Ear injury and trauma have no packet.** Schmitt routes them away to a
  separate protocol and this packet follows, so a child who taps an ear after
  being hit gets earache questions. If the app ever adds an injury packet for
  this group, item 7 (foreign body) should probably move to it.

## Ambiguity in the sources

Recorded rather than papered over.

- **The single most consequential claim in this packet was read at one remove.**
  Laine 2010 — *"Symptoms or symptom-based scores cannot predict acute otitis
  media at otitis-prone age"* — is known here only through source 2's summary of
  it:

  > "Study population: 469 children age 6 to 35 months … The following symptoms
  > were the reasons reported by the parents: restless sleep 29%, irritability
  > and crying 18%, ear rubbing 14%, ear pain 5% and fever 3%. **Results: None
  > of these symptoms could differentiate children with AOM from those without
  > AOM based on otoscopy findings.**"

  It is not open access and was confirmed unavailable in Europe PMC. This claim
  is doing a lot of work — it is the reason the packet does not treat any symptom
  combination as diagnostic — and a reviewer should know it rests on a
  commercial protocol's paraphrase of a study this run could not read. Note also
  its population: **6 to 35 months**, entirely below the app's floor. What it
  establishes about 4- to 12-year-olds is unknown.
- **The AAP 2013 guideline was not read first-hand.** Its severity definition
  (*"moderate or severe otalgia (ear pain) OR fever equal to or higher than
  39 C"*), its observation option and its diagnostic requirement are quoted only
  through source 2. Nothing in the items table depends on it alone, but it is
  the guideline the brief named and it is a citation at one remove.
- **The AAO-HNS otitis externa guideline was not read either.** The fetched
  entnet.org PDF turned out to be the **plain language summary** (source 7,
  ~6,800 characters), not the guideline. The clinical criteria in "The rule(s),
  as published" are therefore quoted from source 6's Table 3, which is itself
  labelled *"Adapted with permission from Rosenfeld RM, Schwartz SR, Cannon CR,
  et al."* Two reproductions, one primary source, read zero times. The two
  reproductions agree with each other, which is some comfort.
- **Source 2 is a commercial product, not a guideline.** Schmitt Pediatric
  Guidelines LLC, copyright 1994–2020, and its dispositions are consensus rather
  than graded evidence. It supplies more of this packet than any other single
  source. It is used anyway, and prominently, for a reason worth stating: it is
  the only source read that is organised by *earache in a child whom nobody can
  examine* — structurally the same problem this app has. But no item rests on it
  alone except item 7 (foreign body), which is flagged accordingly.
- **IMCI is scoped 2 months to 5 years**, i.e. mostly below the app's range. Its
  two ASK items are carried because the same facts appear as plain history in
  sources aimed at older children (NG91 and source 12 for discharge; source 6
  and NG233 for the rest), not because IMCI validated anything in an 8-year-old.
  The IMCI chart's value here is its *structure* — the ASK / LOOK AND FEEL
  columns — more than its content.
- **The J-score is derived in infants and one of its four terms is age in
  months.** That is a **scope** disagreement in the brief's sense, not a
  threshold one: it changes which children the model describes, not how a
  question is worded. Its variables are harvested per the brief; the model is
  not rebuilt, no cut-off is carried, and its two largest coefficients (daycare
  exposure, age) are unavailable to this app anyway.
- **Source 10's cohort is 18 months to 16 years with a median of 3.6 years**,
  and the two scales it compares were **administered to carers**, never to
  children. Its conclusion is also carefully negative about the scales
  themselves: *"it is likely the scales measured concurrent symptoms related to
  upper respiratory tract infections, given they did not differentiate children
  with persistent or resolved AOM."* The packet uses it for what its item lists
  and prevalences show, and for the observability sentence — not as evidence
  that the scales work.
- **Source 12's own quality finding is unflattering and belongs next to its
  agreement figures:** *"The mean AGREE II score was ≤41% across most
  domains."* Seventeen national guidelines agreeing is less impressive when
  most of them score poorly on the standard appraisal instrument. The one figure
  this packet leans on — 93% making otorrhoea an immediate-antibiotic
  indication — is a count of guidelines, not a measure of evidence.
- **The guidelines' own history/examination boundary is inconsistent**, exactly
  as the sore-throat packet found. IMCI files ear pain and discharge under ASK
  but pus under LOOK, which is coherent; RCH files fever, appetite, vomiting and
  lethargy under History and "systemically unwell" under Examination, which is
  also coherent; but source 6 files hearing loss and jaw pain under *Symptoms*
  while source 8 lists hearing loss in the same breath as canal oedema. The
  filter here was applied to the **criterion**, never to the heading above it.
- **NICE CKS could not be fetched** (HTTP 403, two attempts). It would have been
  a second complaint-organised source with a history checklist, and its absence
  is the reason source 2 — a commercial protocol — carries as much of this
  packet as it does.
- **"Ear discomfort" (NG233 1.2.1) is not defined anywhere in the guideline.**
  It is read here as the fullness/pressure sensation and cited alongside item 6,
  because that is what the AOE sources describe under the same anatomy. It could
  equally mean mild pain, in which case it is item 14. A small ambiguity, but it
  is the only NG233 feature this packet had to interpret rather than transcribe.
