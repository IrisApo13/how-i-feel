# Mouth or tooth pain

Presenting complaint · packet `mouth-pain` · serves group `mouth`, **no depth
scope** · packet v1 · assembled 2026-09-07
Status: **not yet clinically reviewed** · sources verified first-hand: 9 of 9
(source 7 read as **abstract only** — full text paywalled)

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
> who arrives saying their mouth or a tooth hurts, and marks which of those a
> child can report about themselves. **Not** a diagnostic tool: nothing here may
> be scored, summed, or shown to a child or nurse as a suggested cause.

## Read this before anything else: there is no rule here

**There is no validated clinical prediction rule for dental pain, dental
abscess or dental trauma in children.** Not one. This is not a search that came
up short — it is the finding, and it changes what the rest of this packet is.

Search A was run exactly as the brief specifies and returned nothing to fetch.
A structured Europe PMC query for `("clinical prediction rule" OR "clinical
decision rule") AND (dental OR toothache OR odontogenic) AND (child OR children
OR paediatric OR pediatric)` returned **135 records and not one of them is a
prediction rule for a child with a sore tooth** — the hits are appendicitis,
head injury, rhinosinusitis, coeliac disease, scoliosis bracing, child
maltreatment screening and conference abstract collections. The nearest thing
in the field is a 2025 scoping review of antibiotics for odontogenic facial
swelling in children and adolescents, whose finding is the absence itself
(source 7, abstract only):

> "No articles evaluated the use of specific diagnostic criteria used to support
> antibiotic prescribing."

and

> "Limited guidelines were identified which is likely due to a lack of evidence
> regarding the use of antibiotics in the paediatric population."

So this packet is **built entirely from Search B**. Every item traces to a
guideline, a lay red-flag list or a validated self-report instrument, and none
traces to a rule, because none exists. The head-injury, tummy and sore-throat
packets each had to reconcile a rule literature with a guideline literature.
Here there is nothing to reconcile, and the honest consequence is a **short**
packet: seven items proposed for v1, not fifteen. `packets/PLAN.md` grades this
row "General" and budgets it at five or six; seven is the smallest number that
covers the guideline's own three-way split of dental trauma without fusing
facts that lead to different places.

**The one consequential thing resting on a source that could not be read** is
the extra-oral dry time for a knocked-out tooth. Source 1 (RCH) states *"Best
prognosis if 'dry-time' less than 20 minutes"*. Other figures circulate in the
secondary literature attributed to the International Association of Dental
Traumatology's 2020 avulsion guideline, which is **not open access and was not
read here** — so those numbers appear nowhere in this packet. The packet uses
RCH's twenty minutes and no other, and item 4 is ranked where it is because of
it. See "Attempted and not used".

## Scope

**Age.** App covers 4–12. **No item carries an age floor**, and — as in the
sore-throat packet — that is a finding rather than an oversight. See decision 7.
Two age statements in the sources matter and neither floors an item:

- Source 2 (RCH), on dentition: *"<6 yo - primary dentition · 6-13 yo - mixed
  dentition · >13 yo - permanent dentition"*, and *"although the primary (baby)
  teeth exfoliate (fall out), the primary molars teeth do not exfoliate until
  11-12 years of age"*. That is about **what is in the child's mouth**, not
  about what they can say, and it is the reason item 7 is worded the way it is.
- Source 6 (SOHO-5) was derived and validated **at age 5** — one year above the
  app's floor. Its child-facing wording is used as evidence *for* item 2, not as
  a floor against it, and the four-year-old gap is recorded honestly in
  decision 7 rather than converted into a `minAge` the source does not state.

**Depth.** **Group `mouth` is marked `internal` in `src/data/bodyMap.js`**
(`GROUP_DEPTH.mouth === 'internal'`), so the depth question is never asked for
it, `depths['mouth']` is permanently `undefined`, and the sidecar carries
`"depth": null` — same encoding and same reasoning as the sore-throat packet's
decision 8. Writing `"inside"` would assert a scope the app has no answer to
test. The vocabulary lists are therefore **not pruned**: a child who taps only
Mouth is still offered `itchy`, `queasy`, `cramping`, `bandage` and `clean-it`.
`SENSATIONS.tingly` ("Tingly or numb") **is** offered, which matters — see
item 19.

**Group `mouth` has exactly one region.** `REGIONS` contains a single entry with
`group: 'mouth'`: `{ id: 'mouth', view: 'head', label: 'Mouth or teeth' }`. So
the body map cannot express *which* tooth, upper versus lower, left versus
right, tooth versus gum versus lip versus tongue. Every one of those is
clinically load-bearing in source 1 and **none is obtainable**. Carried to
"Still open".

**Group `mouth` has no gate.** `GROUP_GATE` covers `head` (mechanism) and
`chest`/`tummy`/`limb`/`back` (depth). `mouth` has neither, so **a child who
taps Mouth or teeth is currently never asked whether anything hit it.** For a
complaint whose entire literature forks on trauma versus no trauma, that is the
single largest hole in what the app collects, and it is why item 1 exists. See
decision 6 and "Still open".

**Out of scope by age or setting, and not carried:** infant and toddler
presentations (source 1's *"Use the 'lap-to-lap' position for toddlers"*,
source 2's early childhood caries in bottle-fed infants, source 2's
*"difficulties breastfeeding"* — all observer items about a pre-verbal child);
everything about antibiotic choice, dosing, extraction, root canal, splinting
and replantation, which is most of what these guidelines are about; dental
socket bleeding after a procedure (source 2) as a distinct post-operative
complaint; anything requiring an OPG, a chest x-ray or bloods.

## Sources

1. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Dental trauma"** (PIC Endorsed). **Read first-hand** via
   `scripts/fetch-source.mjs` and targeted `find-in-source.mjs` windows. The
   primary complaint-organised source for the time-critical half of this packet.
   Supplies the History list, the Examination list, and three injury tables
   (loose or displaced teeth; fractured teeth; injuries to the supporting bone).
2. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Dental conditions - non traumatic"** (PIC Endorsed). **Read first-hand.**
   The primary source for the infection half: the dental-abscess feature list,
   the dentition and eruption timings, and the escalation criterion.
3. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "HSV Gingivostomatitis"** (PIC Endorsed, last updated November 2025). **Read
   first-hand.** Reached from source 2's own "See also" line. The mouth-ulcer
   and dehydration source, and the only guideline read that makes drinking an
   explicit admission and discharge criterion.
4. **NHS, "Toothache"**, `nhs.uk/conditions/toothache/`. **Read first-hand** —
   the page is 4,017 characters and was read in full, which is within the
   brief's economy rule rather than an exception to it. **The most useful
   artefact in this packet**: a red-flag list written to be understood and acted
   on by a family with no clinical training, split into two urgency tiers. Items
   3 and 5 are that split.
5. **NHS, "Mouth ulcers"**, `nhs.uk/conditions/mouth-ulcers/`. **Read
   first-hand** (4,873 characters, read in full). Supplies the ulcer-specific
   escalation criteria and the duration band that no other source gives.
6. **Tsakos G, Blair YI, Yusuf H, Wright W, Watt RG, Macpherson LMD.**
   "Developing a new self-reported scale of oral health outcomes for 5-year-old
   children (SOHO-5)." *Health and Quality of Life Outcomes* 2012;10:62. **Read
   first-hand** via Europe PMC (PMC3413607). **The self-report evidence, and it
   is better than the sore-throat packet's equivalent** — 332 five-year-olds
   answering seven questions about their own teeth, with comprehension measured.
   Its verbatim item wording is used directly in decision 1. **Limits worth
   knowing** are in "Ambiguity".
7. **Welti R, Ravindra D, Teoh L, Sloan A, Burgner D, Silva M.** "The use of
   antibiotics in the management of odontogenic facial swellings in children and
   adolescents: A scoping review." *Journal of Dentistry* 2025;105523. doi
   10.1016/j.jdent.2024.105523. **Abstract read first-hand** via the Europe PMC
   REST API (`resultType=core`); **the full text is paywalled on ScienceDirect
   and was not read.** Nothing in the items table depends on it. It is cited for
   one thing only — that the absence of diagnostic criteria in this field is
   documented rather than merely unfound — and that claim is entirely within the
   abstract quoted above.
8. **Słotwińska-Pawlaczyk A, Orzechowska-Wylęgała B, Latusek K, Roszkowska AM.**
   "Analysis of the Clinical Status and Treatment of Facial Cellulitis of
   Odontogenic Origin in Pediatric Patients." *Int J Environ Res Public Health*
   2023;20(6):4874. **Read first-hand** via Europe PMC (PMC10049628).
   Retrospective, **27 patients aged 2–16**, one Polish paediatric ENT centre,
   2020–2022. Small, single-centre, and treated here as frequency context for
   items 3, 5 and 12 rather than as a criterion source.
9. **Pentapati KC, Yeturu SK, Siddiq H.** "Global and regional estimates of
   dental pain among children and adolescents — systematic review and
   meta-analysis." *Eur Arch Paediatr Dent* 2021;22(1):1–12. **Read first-hand**
   via Europe PMC (PMC7943429). The prevalence anchor: 97 publications, pooled
   prevalence **32.7% (CI 29.6–35.9)**, and *"four out of ten children between 6
   and 12 years"*. Heterogeneity is enormous and is recorded in "Ambiguity".

**Attempted and not used.**

- **International Association of Dental Traumatology, "Guidelines for the
  management of traumatic dental injuries: 2. Avulsion of permanent teeth"
  (Fouad et al., *Dental Traumatology* 2020)** — publisher-hosted only, not open
  access. **CITED, NOT READ.** This is the packet's most consequential gap: it
  is the primary source for extra-oral dry time, and secondary sources quote
  figures from it that differ from source 1's twenty minutes. **Nothing in this
  packet uses any number from it**; item 4 rests on source 1 alone. A future run
  should try the AAPD Reference Manual reprint, which appears to be publicly
  hosted.
- **Queensland Children's Health, "Emergency Management of Paediatric Dental
  Emergencies" (gdl-00758)** — **HTTP 403, not read.** It was the best candidate
  for a second complaint-organised paediatric guideline covering avulsion,
  abscess and ulcers in one document. Nothing here depends on it, but its
  absence is why sources 1, 2 and 3 are three separate RCH guidelines rather
  than one document, and why RCH is over-represented among the sources.
- **Patel J, "Dental Trauma: A Practical Guide to Diagnosis and Management",
  *Dental Traumatology* 2022;38(3):250–251** — **fetched and read; it is a
  two-page book review, not a guideline.** Recorded so a future run does not
  spend a fetch on it. Nothing depends on it.
- **PMC direct fetches bot-walled on every attempt** (`BOT_WALL (HTTP 200)`),
  including retries, and `pubmed.ncbi.nlm.nih.gov` returned a cookie wall
  (`EXTRACTED_BUT_UNREADABLE`). **The Europe PMC REST route
  (`ebi.ac.uk/europepmc/webservices/rest/<PMCID>/fullTextXML`) worked first time
  for all four articles** and is what sources 6, 8 and 9 came through. Worth
  making the default in `fetch-source.mjs`.
- **Dental Discomfort Questionnaire (DDQ)** — found in Search A and
  deliberately **not** used as self-report evidence. It is a **parent-completed
  observational** instrument for children under 5, not a child self-report, and
  citing it for what a child can say would be exactly the invented citation the
  brief exists to prevent. Named here so its absence is visible as a decision.

## The guidance, as published

### Dental trauma — the history and examination lists (source 1)

The **entire History section**, verbatim:

> "Mechanism of injury and associated injuries · Time since injury - avulsion of
> a permanent tooth is a dental emergency · First aid rendered - tooth rinsing,
> wet or dry storage · Sensitivity to hot and/or cold · Previous dental history
> including injuries, crowns or prostheses · Tetanus immunisation status"

Six bullets. **Two and a half of them are the child's** — the mechanism, the
hot/cold sensitivity, and part of the time. The rest belong to the adult who
brought them.

The **entire Examination section**, verbatim:

> "Use the 'lap-to-lap' position for toddlers · Check symmetry in the mouth and
> alignment of teeth · Lift the lips to look for gingival or oral mucosal
> injury · Type of tooth and whether permanent or primary · Type of dental
> injury: loose or displaced tooth, fractured tooth, injury to supporting bone,
> injury to oral mucosa or gingivae · Bite for even occlusion, subjective or
> objective; steps in bite or bone border · Temporomandibular joint movement and
> tenderness · Numbness, intra or extraoral bruising · Account for all lost
> teeth and fragments, examine chest and soft tissues of the mouth"

Two things in that list decide everything and neither is the child's. *"Type of
tooth and whether permanent or primary"* is the fork the whole guideline runs
on, and it is settled by looking at the tooth and knowing eruption dates. And
*"Lift the lips"* is an instruction to a clinician's hands.

But note *"Bite for even occlusion, **subjective** or objective"* — the
guideline itself marks half of one examination item as reportable. See item 24
and decision 4 for why it still does not become a question.

### Dental trauma — the three injury tables, verbatim (source 1)

Loose or displaced teeth:

> "**Concussion** — Tender but firm — Review by community dentist. Usually heal
> without intervention
> **Subluxation** — Tender loose tooth, blood around gum — Refer to emergency
> dental service if very loose
> **Lateral luxation / Extrusion / Intrusion** — Anteriorly or posteriorly
> displaced / Partially out of socket / Pushed into socket — Refer to emergency
> dental service
> **Avulsion** — Complete displacement from socket. Note: need to differentiate
> avulsion from fully intruded tooth (may need x-ray)"

Fractured teeth — *"Enamel is white, dentine is yellow, pulp is pink"*:

> "**Enamel fracture, Enamel-dentine fracture** — Fracture confined to enamel
> +/- dentine — Review by community dentist
> **Enamel-dentine-pulp fracture** — Fracture with exposure of pulp (pink and
> painful) — Refer to emergency dental service
> **Crown-root fracture** — Fracture in crown extending below gums. **May be
> aspiration risk**
> **Root fracture** — Displacement or mobility of tooth"

Injuries to the supporting bone open with a sentence a child could almost
answer: *"Check that the child's bite is normal."*

And the avulsion management block, which is the twenty-minute clock:

> "Primary: not reinserted · Permanent: place in milk (1st choice) or saline
> while awaiting assessment · Do not store tooth in water or scrub tooth ·
> Handle the crown (white) only, do not handle tooth root (yellow) · If
> possible, return to socket and bite down with gauze to hold tooth in
> position · **Best prognosis if 'dry-time' less than 20 minutes**"

Plus, on the missing tooth: *"Account for all lost teeth and fragments, examine
chest and soft tissues of the mouth"* and *"Chest x-ray if suspicion of
aspiration of missing tooth or fragments"*.

And, verbatim and non-negotiable: ***"In young children and infants with oral
trauma, consider child abuse."***

### Dental abscess — the feature list, verbatim (source 2)

> "Abscess may be indicated by: tender gingival swelling or erythema · draining
> sinus from the gingiva · erythema and cellulitis of facial skin overlying
> tooth, **submandibular or periorbital** areas · trismus · **fever and systemic
> symptoms may be absent**"

That last clause is the single most useful sentence in this packet for ranking.
Four packets in this repository already ask a child whether they feel hot or
shivery. Source 2 says, in its own words, that in this complaint the fever may
not be there — so `feels-feverish` is ranked out of the proposed set here on the
guideline's own authority rather than on this packet's judgement. See item 14.

Escalation, verbatim: *"Consider consultation with specialist paediatric dental
team when: **Dental abscess with severe or systemic features requiring
admission** · Children with underlying medical, developmental or behavioural
issues likely to benefit from specialist dental, anaesthetic or haematology
input"*.

Background, for prevalence: *"Dental caries occurs in more than 40% of
Australian children and can begin as soon as teeth erupt during infancy."*

### The lay red-flag list, verbatim (source 4) — this is the packet's spine

NHS "Toothache" splits its advice into two urgency tiers, and the split is
**where the swelling is**:

> **Non-urgent advice: See a dentist if you have toothache:**
> "that lasts more than 2 days · that does not go away when you take
> painkillers · with a high temperature, pain when you bite, red gums, or a bad
> taste in your mouth · and your cheek or jaw is swollen"

> **Immediate action required: Go to A&E if you have toothache and:**
> "**the area around your eye or your neck is swollen** · swelling in your mouth
> or neck is making it difficult for you to **breathe, swallow or speak**"

This is the closest thing in the literature to a list of things a **child**
could notice, for the same reason the sore-throat packet's NHSGGC triad was: it
is written for a family with no clinical training and no instruments. Items 3
and 5 are the two halves of that split, and keeping them as two questions rather
than one is the central wording decision in this packet (decision 3).

Self-care, worth noting for the `HELPS` list: *"eat soft foods, like yoghurt or
scrambled eggs, and try to avoid chewing with the sore tooth"*, *"do not eat
foods that are sweet, very hot or very cold"*, and — twice, once on each NHS
page — *"children should not try rinsing their mouth with salt water (in case
they swallow it)"*.

### Mouth ulcers, verbatim (source 5)

> "See a dentist or GP if your mouth ulcer: **lasts longer than 3 weeks** · is
> different to other mouth ulcers you've had before, for example if it's bigger
> than usual or near the back of your throat · bleeds or becomes more painful
> and red – this may be a sign of an infection"

Self-care that is really a symptom description: *"drink cool drinks through a
straw · eat softer foods"*; *"do not eat very spicy, salty or acidic food · do
not eat rough, crunchy food, such as toast or crisps · do not drink very hot or
acidic drinks"*.

### Mouth ulcers that stop a child drinking, verbatim (source 3)

> "Oral vesicles may be very painful, resulting in **refusal to drink**"
>
> "**Hospitalisation is most often required due to dehydration**"
>
> "Assess hydration as dehydration is the most common complication"
>
> "Consider consultation with local paediatric team when: **Unable to maintain
> adequate hydration** · Immunocompromised · Severe pain, keratitis,
> pneumonitis, eczema herpeticum, encephalitis · IV aciclovir required"
>
> "Consider discharge when: **The child is drinking adequate volumes to maintain
> hydration** or follow up is arranged"

Drinking is simultaneously the complication, the admission criterion and the
discharge criterion. That is the strongest single argument for item 2 in the
packet, and it is independent of source 6.

### The validated child-facing wording, verbatim (source 6)

SOHO-5's seven items, as asked of 332 five-year-olds, with the response
distribution (No / A little / A lot):

> "Has it ever been hard for you to **eat** because of your teeth?" — 71.3 /
> 18.9 / 9.8
> "Has it ever been hard for you to **drink** because of your teeth?" — 89.5 /
> 7.8 / 2.7
> "Has it ever been hard for you to **speak** because of your teeth?" — 91.5 /
> 5.1 / 3.4
> "Has it ever been hard for you to **play** because of your teeth?" — 89.6 /
> 8.4 / 2.0

plus two questions on avoiding smiling and one on sleeping. Results:
*"49.0% reported at least one oral impact on their daily life. The most
prevalent impacts were difficulty eating (28.7%), difficulty sleeping (18.5%),
avoiding smiling due to toothache (14.9%)"*; *"Cronbach's alpha was 0.74"*; and
*"Children with dental caries, those with pulp involvement and those with dental
sepsis had significantly worse SOHO-5 scores"*.

And the comprehension figure, which is the most directly useful number in this
packet for a self-report app:

> "82.4% answered the SOHO-5 questions without any repetition or rewording, in
> 9.5% of the sample the interviewer repeated or reworded a question once, with
> 8.1% needing more repetitions or rewordings."

### What actually walks in (sources 2, 8, 9)

- Source 9, pooled across 97 publications: *"Overall pooled prevalence of dental
  pain was 32.7 (CI = 29.6–35.9)"*, and *"four out of ten children between 6 and
  12 years"* have had dental pain. This is the app's exact age band.
- Source 2: caries in *"more than 40% of Australian children"*.
- Source 8, in 27 admitted children with odontogenic facial cellulitis:
  extraoral swelling 77–79%, intraoral swelling 85–100%, trismus 38% in upper
  face infections and 71% in lower face, *"Fever > 37.5 °C"* in only 21–31%, and
  dysphagia in 8–43%. Its own summary: *"Trismus, extraoral, and intraoral
  swelling occurred in all infections caused by permanent teeth"* and
  *"Dysphagia occurred only in inflammations from permanent teeth."*

So mouth and tooth pain is **the most common presenting complaint any packet in
this repository has covered** — more common in 6–12s than sore throat — and it
is the one with the least evidence behind it. That mismatch is the whole story
of this packet.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Did something hit your mouth or teeth** | RCH trauma (1) — *"Mechanism of injury and associated injuries"*, first History bullet; the guideline's entire structure forks on trauma vs non-trauma (1 vs 2) | **yes** | **The router, and the app does not currently ask it.** `GROUP_GATE` gives `head` a mechanism gate and `mouth` nothing, so a child who taps "Mouth or teeth" is never asked whether anything hit it — and every item from 4 to 8 is meaningless without the answer. Ranked first for that reason alone, not because it is the most clinically urgent. **If `GROUP_GATE.mouth = 'mechanism'` is ever added, this item must be dropped from the bank**, exactly as head's `bumped-head` was. See decision 6. |
| 2  | **Have you been able to eat and drink** | RCH HSV (3) — *"refusal to drink"*, *"Unable to maintain adequate hydration"* as the consultation trigger, *"The child is drinking adequate volumes"* as the discharge criterion; SOHO-5 (6) — *"Has it ever been hard for you to eat because of your teeth?"* / *"…to drink…"*, difficulty eating the most prevalent impact at 28.7%; NHS (4) — *"eat soft foods… avoid chewing with the sore tooth"*; NHS ulcers (5) — *"drink cool drinks through a straw · eat softer foods"* | **yes** | **The best-evidenced item in the packet by a wide margin, and the only one anywhere in this repository whose wording comes from a validated child self-report instrument.** It is simultaneously a complication, an admission criterion and a discharge criterion in source 3. Maps to the existing fact **`eating-drinking`** (sore-throat `s-011`/`s-012`) — see decision 10. Re-sources the app's shipped `hurt-eat`; see decision 11. |
| 3  | **Is your face or your cheek puffy or swollen** | NHS (4) — *"and your cheek or jaw is swollen"*; RCH (2) — *"erythema and cellulitis of facial skin overlying tooth"*; source 8 — extraoral swelling in 77–79% of admitted children | **yes** | Swelling a child can see in passing and feel with their own face, without being told to press on anything. **Deliberately the non-urgent half of source 4's split** — item 5 is the urgent half, and fusing them would destroy the distinction the NHS page is built on. |
| 4  | **Did a tooth come all the way out** | RCH trauma (1) — *"avulsion of a permanent tooth is a dental emergency"*; *"Avulsion — Complete displacement from socket"*; *"Best prognosis if 'dry-time' less than 20 minutes"* | **yes** | **The only twenty-minute clock in any packet in this repository.** A child knows a tooth is gone. They cannot know whether it was primary or permanent — the fact that decides everything (item 22) — so the question asks the event, not the classification. **The app must never tell the child what to do with the tooth**: milk, saline, rinsing and re-seating are first aid delivered by an adult, and an app that issues them has stopped being a reporting tool. See wording cautions. |
| 5  | **Is the puffiness near your eye, or under your chin** | NHS (4) — *"Immediate action required: Go to A&E if… the area around your eye or your neck is swollen"*; RCH (2) — cellulitis of facial skin *"submandibular or periorbital areas"*; source 8 — the complication list, *"cavernous sinus thrombosis, airway obstruction, Ludwig's angina"* | **partial** | **The escalation item, and the reason the packet has seven items instead of six.** Source 4 makes *where* the swelling is the difference between "see a dentist" and "go to A&E", so location is the whole content. Marked partial because "periorbital" and "submandibular" are anatomical judgements — the child can say near-the-eye or under-the-chin and cannot say more, and the nurse looks. **Never use the words eye socket, orbit, jaw line or gland**, and never ask a child to feel under their own chin. |
| 6  | **Is one of your teeth broken or chipped** | RCH trauma (1) — the entire fractured-teeth table; *"Enamel-dentine-pulp fracture — Fracture with exposure of pulp (pink and painful) — Refer to emergency dental service"*; *"Crown-root fracture… May be aspiration risk"* | **yes** | A broken tooth is felt with the tongue before it is seen, so this does not require the child to look in their own mouth. The *grading* — enamel, dentine, pulp — is entirely the examiner's and the colour cues (*"Enamel is white, dentine is yellow, pulp is pink"*) must never be given to a child, because that turns the question into a self-examination with a diagnosis attached. Presence only. |
| 7  | **Is one of your teeth loose, or in a different place than before** | RCH trauma (1) — *"Subluxation — Tender loose tooth, blood around gum"*, *"Lateral luxation / Extrusion / Intrusion — Anteriorly or posteriorly displaced / Partially out of socket / Pushed into socket"*; RCH (2) — *"Check for loose or tender teeth"*; dentition timings (2) | **partial** | **The most dangerous question in the packet to word, and the app already ships it badly.** `FOLLOW_UPS.mouth` contains `loose-tooth`: *"Do you have a loose tooth?"* Source 2 says the app's users are in **mixed dentition from 6 to 13**, and that primary molars exfoliate at 11–12 — so across most of the 4–12 range, "yes" is the *normal* answer and carries no information at all. The item survives only if it is anchored to **change**: loose in a way it was not before, or moved. See decision 5 and decision 11. |
| 8  | **Do you know where the tooth or the broken piece went** | RCH trauma (1) — *"Account for all lost teeth and fragments, examine chest and soft tissues of the mouth"*; *"Chest x-ray if suspicion of aspiration of missing tooth or fragments"*; *"Crown-root fracture… May be aspiration risk"* | **partial** — not proposed for v1 | Only the child was there, exactly as with the sore-throat packet's item 12, and the aspiration risk is real and time-critical. Held back from v1 for two reasons: it is meaningless unless item 1 and item 4 or 6 already fired, and it sits close enough to the existing `choking-episode` fact that the generation stage should be told to think before minting a new one. **First item to add** if a slot frees. |
| 9  | **Do you have sore spots inside your mouth** | NHS ulcers (5) — the whole page, and *"bleeds or becomes more painful and red"*; RCH HSV (3) — *"Oral vesicles may be very painful, resulting in refusal to drink"* | **partial** — not proposed for v1 | A child feels a sore spot on their lip, tongue or cheek without looking, and that half is real. The rest of what sources 3 and 5 want — how many, how big, where, whether near the back of the throat, whether they bleed — needs someone to look, and any wording that drifts toward "how many can you see?" has delegated an examination to a seven-year-old. Held back from v1 because item 2 already catches the child whom ulcers have stopped drinking, which is the outcome sources 3 and 5 actually care about. |
| 10 | **Does something hot or cold make it hurt more** | RCH trauma (1) — *"Sensitivity to hot and/or cold"*, filed under **History**; NHS (4) — *"do not eat foods that are sweet, very hot or very cold"*; NHS ulcers (5) — *"do not drink very hot or acidic drinks"* | **yes** — not proposed for v1 | Cleanly child-reportable and explicitly a history item in source 1 — one of only two and a half things in that list the child owns. Held back from v1 because **nothing in the app or the nurse's view acts on it**: it discriminates pulp status, which is a dentist's question with a dentist's instruments, and it would spend one of three slots that item 3 or item 5 needs. Kept in the table so its absence is a decision. |
| 11 | Does it hurt to swallow | NHS (4) — *"swelling in your mouth or neck is making it difficult for you to breathe, **swallow** or speak"*; source 8 — dysphagia in 43–58% of infections from permanent teeth, *"Dysphagia occurred only in inflammations from permanent teeth"* | **yes** — **already collected elsewhere** | **The sore-throat packet ships this as `s-001`/`s-002` on the fact `hurts-to-swallow`.** Those candidates are scoped `group: 'throat'` and will **not** fire for a child who taps only Mouth or teeth, so the fact is unreachable from this complaint. That is a real gap, and the right fix is to widen the existing candidates' group scope rather than to mint a second question — see "Still open". Not re-asked here. |
| 12 | Is it hard to open your mouth | RCH (2) — *"trismus"* in the abscess feature list; source 8 — trismus in 38% of upper-face and 71% of lower-face infections | **partial** — **already collected elsewhere** | **Sore-throat item 10 ships this as `s-017`, and `s-017` carries `fact: null`.** So a child who taps both Mouth and Throat would be asked it once (throat's), a child who taps only Mouth would never be asked it at all, and nothing in the bank records that these are the same fact. Mouth opening is *systemic* by `packets/PLAN.md`'s own test — one answer about the whole child — so it should carry a shared fact. Recorded as a bank defect, not re-asked here. See "Still open". |
| 13 | Is it hard to breathe; is it hard to talk | NHS (4) — *"making it difficult for you to breathe, swallow or **speak**"*; source 8 — *"airway obstruction, Ludwig's angina"*; SOHO-5 (6) — *"Has it ever been hard for you to speak because of your teeth?"* (91.5% "no") | **yes** — **already collected elsewhere** | Breathing is the `chest` group's `breathing` question and sore-throat `s-014`/`s-015`, both on the fact `hard-to-breathe`; talking is sore-throat `s-009`/`s-010`. Same group-scoping gap as items 11 and 12 and the same recommended fix. SOHO-5's own data argue against spending a slot on the talking half here: 91.5% of five-year-olds said their teeth had never made it hard to speak. |
| 14 | Do you feel hot or shivery | NHS (4) — *"with a high temperature"* under **non-urgent** advice; RCH (2) — *"fever and systemic symptoms **may be absent**"*; source 8 — fever >37.5 °C in 13–42% | **partial** — **already collected elsewhere** | Four packets already ask this on the fact `feels-feverish` (`l-007`, `s-020`, `c-023`, `e-019`) and `packets/PLAN.md` row 1 will take ownership of it. **Not proposed here, and for once the reason is a citation rather than housekeeping**: source 2 states outright that fever may be absent in a dental abscess, and source 4 files high temperature under *non-urgent*. This is the one complaint in the repository where the guidelines actively de-rank the fever question. |
| 15 | Where it hurts | all sources | **yes** — already collected | Body map. **One region, `mouth`, labelled "Mouth or teeth".** It cannot express which tooth, upper or lower, left or right, or tooth versus gum versus lip versus tongue — all of which source 1 assesses. See "Still open". |
| 16 | Tooth pain itself; how bad it is | RCH (2) — *"Dental or facial pain"*; source 9 — the entire prevalence literature; source 8 — VAS scores by age band | **yes** — already collected | Body map plus the FPS-R intensity screen. Do not ask again, and never ask a child to rate pain in words. |
| 17 | Duration; *"more than 2 days"*; ulcer *"longer than 3 weeks"*; time since injury | NHS (4) — *"that lasts more than 2 days"*; NHS ulcers (5) — *"lasts longer than 3 weeks"*; RCH trauma (1) — *"Time since injury"*, *"dry-time less than 20 minutes"* | **partial** — already collected | `DURATIONS`. **The bands resolve none of the three thresholds**, and the twenty-minute one they cannot even approach. See "Still open". |
| 18 | Age | RCH (2) — *"<6 yo - primary dentition · 6-13 yo - mixed dentition"*; source 9 — age-banded prevalence | **n/a** — already collected | Setup screen. Worth stating plainly: **age is the app's only proxy for dentition**, and dentition is the fork the entire trauma guideline runs on. It is a weak proxy — source 2's own bands overlap the app's whole range. |
| 19 | Numbness or tingling of the lip or chin | RCH trauma (1) — *"Numbness, intra or extraoral bruising"*, filed under Examination | **yes** — already collected | A genuinely nearly-reportable criterion: RCH files numbness with the examiner, but numbness is a sensation only the child has, and after a mandibular injury it is a nerve sign. **`SENSATIONS.tingly` ("Tingly or numb", `older` tier) already collects it**, and the mouth group is `internal` so the sensation list is unpruned and the option is offered. No question needed. Bruising, in the same bullet, stays with the examiner. |
| 20 | Trouble sleeping; not smiling; unable to play | SOHO-5 (6) — sleeping 18.5%, avoiding smiling due to toothache 14.9%, appearance 12.5%, play 8.4% | **yes** — **excluded, not a criterion** | Every one is child-reportable and prevalent, and **none appears in any guideline read** as an assessment or escalation criterion. SOHO-5 is an oral-health-related quality-of-life instrument; it measures what dental disease costs a child's life, not what a nurse should do in the next hour. Excluded deliberately, and recorded because the temptation to harvest a validated instrument's whole item list is exactly the mistake this row prevents. |
| 21 | Bad taste in the mouth; red gums; bleeding gums; blood around the gum | NHS (4) — *"red gums, or a bad taste in your mouth"*; RCH trauma (1) — *"blood around gum"*; NHS ulcers (5) — *"bleeds"* | **partial** — excluded for v1 | Bad taste is a sensation the child has; red gums and blood around a gum need someone to look. Source 4 files all of them under **non-urgent**. Excluded rather than ranked, because any wording covering the bleeding half would have to ask a child to inspect their own gums, and because the taste half alone changes nothing the nurse will do. |
| 22 | **Type of tooth: permanent or primary** | RCH trauma (1) — *"Type of tooth and whether permanent or primary"*; the whole management table; RCH (2) — dentition descriptions and eruption dates | **no — exam** | **The single most decision-relevant fact in this complaint, and it is unobtainable.** Every row of source 1's management tables reads "Primary: … Permanent: …", and the answer comes from crown shape, colour, edge and eruption date. A child asked "is that a baby tooth or a grown-up tooth?" will guess, and a wrong guess here is worse than no answer, because it points the nurse at the wrong half of the table. **Banned outright in wording cautions.** This is this packet's equivalent of the sore-throat packet's tonsillar exudate: a larger literature converging on the one thing a self-report app cannot reach. |
| 23 | Intra-oral examination: *"Lift the lips to look for gingival or oral mucosal injury"*, *"'Lift the lip' to ensure thorough examination of upper front teeth and gums"*, symmetry and alignment of teeth, white or brown spots along the gum line, draining sinus from the gingiva, tender gingival swelling or erythema, vesicles on buccal mucosa/tongue/gingiva/palate, lesions with a red halo | RCH trauma (1); RCH (2); RCH HSV (3) | **no — exam** | **The backbone of both dental guidelines, and a child cannot look inside their own mouth.** Two separate RCH guidelines instruct a clinician to lift the lip because these findings are otherwise missed — which is a statement that they are invisible without a second person's hands, and therefore invisible to the child. No mirror, no "how many can you see", no counting teeth. |
| 24 | Occlusion: *"Bite for even occlusion, subjective or objective; steps in bite or bone border"*, *"Check that the child's bite is normal"*, temporomandibular joint movement and tenderness | RCH trauma (1) | **no — exam** | The hardest exclusion in the packet, because **source 1 itself marks the bite assessment "subjective or objective"** — the guideline is saying a child's own report counts. It still does not become a question, for two reasons: *"steps in bite or bone border"* is a mandible-fracture sign established by palpation, and the child-facing half ("do your teeth meet in a funny way?") is a comparison against a remembered normal that a frightened 4-to-8-year-old cannot make reliably. Recorded as a **near miss** and a live candidate for a future version with a clinician's view. See "Still open". |
| 25 | Extra-oral examination: intra or extraoral bruising, lacerations, degloving injuries, *"The chin is often swollen and tender in mandibular degloving injuries"*, symmetry, submandibular or cervical lymphadenitis | RCH trauma (1); RCH HSV (3) | **no — observer / exam** | Someone else sees, feels or lifts. Items 3 and 5 are the child's-eye halves of facial swelling and are separately sourced; these are not reclassifications of them. **Never ask a child to feel under their own jaw** — same ruling, same reason, as the sore-throat packet's ban on palpating the neck. |
| 26 | Hydration status; systemically unwell; *"Lethargy, drowsiness or focal neurology and altered behaviour"*; impaired respiratory function; toxic appearance | RCH HSV (3); RCH (2) — *"severe or systemic features requiring admission"*; source 8 | **no — observer** | Observation is the observer's. Note that source 3's escalation runs on *"Unable to maintain adequate hydration"*, which the nurse establishes — item 2 is the child's contribution to it, not a substitute for it. |
| 27 | First aid already given: *"First aid rendered - tooth rinsing, wet or dry storage"*, milk or saline, whether the tooth was rinsed or scrubbed, whether it was re-seated | RCH trauma (1) | **no — carer** | **Asked and answered explicitly, because the task that commissioned this packet raised it.** Whether the tooth went into milk is an *adult's action taken in the last few minutes*, usually out of the child's sight and always outside their vocabulary; a child asked "is it in milk?" will say yes because the question expects it, and a false yes tells the dental service the periodontal ligament is protected when it is not. It is the adult's answer, and the app must not ask it. Item 8 asks only the part the child owns: where the tooth went. |
| 28 | Dental history: brushing frequency and who performs it, sugary and high-acidity food and drink exposure, bottles or sleeping with a bottle, previous dental treatment and advice, previous dental trauma, crowns or prostheses, tetanus immunisation status, cardiac conditions needing endocarditis prophylaxis, medications affecting saliva, chronic conditions affecting swallowing, immunosuppression, thumb-sucking and dummy use | RCH trauma (1); RCH (2) | **no — carer or record** | Twelve criteria, one row, none of them the child's. Tetanus status and endocarditis prophylaxis are records; the diet and brushing bullets are a carer's and — asked of a child in pain about a tooth that hurts — carry an implication of blame that this app must never carry. |
| 29 | Child abuse | RCH trauma (1) — *"In young children and infants with oral trauma, consider child abuse"* | **no — see below** | **Excluded outright and flagged, not quietly dropped.** Fourth packet, fourth time, same conclusion. See "The safeguarding exclusion". |
| 30 | Imaging and labs: OPG, occlusal (bite-down) views, chest x-ray for aspiration, CRP, WBC, neutrophil-lymphocyte ratio, D-dimer; swab for PCR; intraoral photograph | RCH trauma (1); RCH (2); RCH HSV (3); source 8 | **no — lab / imaging** | Recorded so no future run goes looking for a child-reportable proxy. Source 8's entire discriminative signal is haematological. |
| 31 | Which tooth; upper versus lower; left versus right; tooth versus gum versus lip versus tongue | RCH trauma (1) — tooth numbering and eruption dates; source 8 — upper-face versus lower-face infections differ in trismus (38% vs 71%) and dysphagia | **no — the body map cannot express it** | Group `mouth` is one region. This is an architecture limit rather than a self-report limit — the child could point — and it is carried to "Still open" rather than resolved here. |

**Yield: ~55 distinct criteria across 4 guidelines, 1 validated self-report
instrument, 1 scoping review and 2 cohort/prevalence studies → 6 clean, 4
partial, 9 already collected elsewhere, 12 excluded rows covering the rest.
Seven proposed for v1.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
clean (30%); sore throat ~53 → 12 clean (23%); **mouth or tooth pain ~55 → 10
clean-or-partial (18%), of which 7 are proposed.** The lowest yield of the four,
and — unlike sore throat, where a single structural fact explained it — here
there are two independent reasons:

1. **The decisive fact is invisible to the child.** Source 1's management is a
   two-column table, primary and permanent, and which column applies is settled
   by looking at the tooth. Item 22.
2. **There is no rule literature to harvest at all.** The other three packets
   each recovered variables from between eight and ten named scores. This one
   recovered none, because none exist (source 7).

## The safeguarding exclusion

Source 1, verbatim, in the Background section:

> "In young children and infants with oral trauma, consider child abuse."

**Excluded outright, flagged rather than quietly dropped, and this is the fourth
packet to reach the same conclusion by a fourth route** — after head injury's
non-accidental-injury exclusion, the tummy packet's abuse exclusion and the
sore-throat packet's ARF branch. The reasoning does not change: a child is never
asked, by a tablet, with no adult present and no follow-up, to describe how they
came to be injured in a way that could implicate the person who brought them.
Item 1 asks *whether* something hit their mouth and stops there; it must never
ask **who**, **what**, or **why**.

Recorded here so that (a) nobody downstream "completes" the packet by writing
the obvious follow-up, and (b) the clinical reviewer sees that oral trauma is
one of the presentations where this guideline explicitly wants the question
asked, and that this app is not the thing that should ask it.

## Wording cautions

Ban **concepts**, not phrasings. Every caution below is transcribed into
`meta.bannedPhrases`; `scripts/screen.mjs` reads its per-packet bans from there,
so nothing in this section exists only as prose.

- **Never name a condition or a clinical entity.** Not abscess, cellulitis,
  caries, decay, avulsion/avulsed, luxation, subluxation, extrusion, intrusion,
  trismus, gingivostomatitis, ulcer, stomatitis, pulpitis, osteomyelitis,
  periapical, odontogenic, periorbital, submandibular, occlusion, Ludwig's.
  Several of these are the words the sources use most; that is precisely why
  they need banning.
- **Never ask a child to classify the tooth.** Not "is it a baby tooth or a
  grown-up tooth", not permanent, not adult, not primary, not "one of your big
  teeth". This is item 22, the fact the entire management table turns on, and a
  guessed answer sends the nurse to the wrong column. Age is the proxy the app
  already has; it is a weak one, and a child's guess is a worse one.
- **Never instruct a child to wiggle, jiggle, pull, push, touch, press on or tap
  a tooth**, and never "bite down on it and see". Source 1's own mobility
  assessment is a clinician's, a loose tooth pushed by a child can be swallowed
  or inhaled, and a child told to test a fractured tooth will hurt themselves to
  answer the question.
- **Never ask a child to look in their own mouth.** No mirrors, no "open wide
  and check", no "can you see", no counting teeth, no looking at gums. Item 23
  is two RCH guidelines telling clinicians to lift the lip *because these
  findings are missed otherwise*; an app has less standing to delegate that to a
  seven-year-old, not more.
- **Never ask a child to find or name decay.** No "hole in your tooth", no
  cavity, no rotten, no bad tooth, no black, brown or white spots. Source 2's
  own description — *"white or brown spots/lines along the top of the tooth
  adjacent to the gum line which don't brush off"* — is a clinician's
  discrimination made with a light and a mirror.
- **Never give first aid through the app.** No milk, no saline, no rinsing, no
  scrubbing, no "put it back", no "hold it by the white part", no salt water.
  Source 1 is giving those instructions to a clinician and a parent; both NHS
  pages say explicitly that **children should not rinse with salt water in case
  they swallow it**. An app that issues first aid to an unaccompanied child has
  stopped being a reporting tool.
- **Never ask a child to feel under their own jaw or chin**, and never say
  glands, lumps or bumps. Same ruling and same reason as the sore-throat
  packet's ban on palpating the neck: item 25 is examination, and a child
  pressing their own neck and reporting a finding is worse than no data.
- **Never use escalation or service language.** No A&E, emergency room, 999,
  911, ambulance, hospital, "you need to go", "straight away", "right now" as an
  urgency claim. Source 4's red flags are written for an adult deciding where to
  drive; the child is being asked what they notice, and the app must not tell a
  frightened child what their answer means.
- **British and Australian idiom, from sources that are entirely British and
  Australian.** Ban and replace:
  - **"loose"** — never *"wobbly"* or *"wiggly"*. "Wobbly tooth" is the standard
    British and Australian phrase and appears nowhere in US children's usage.
  - **"candy"** — never *"sweets"*. Better still, do not ask about it at all:
    source 4's *"do not eat foods that are sweet"* is advice, not a criterion,
    and asking a child in pain what candy they eat is a blame question.
  - **"do you have"** — never *"have you got"*.
  - **"the dentist"** — never *"surgery"*, which in these sources means the
    dentist's or doctor's office and in US English means an operation. A child
    told they might need "surgery" will be terrified by a word that meant
    "reception desk".
  - **"throw up"** — never *"be sick"*, *"being sick"*, *"sick up"*. Already
    caught once in this repository, per `packets/PLAN.md`.
  - **"puffy" or "swollen"** — never *"poorly"* or *"off colour"*.
- **Never say "fever"**, never ask for a temperature, never mention degrees.
  Global rule; restated because source 4 says *"high temperature"* in plain
  words and a generator copying that line will reproduce it.
- **Never say "choking"**, and never suggest a tooth was inhaled. Item 8 asks
  where the tooth went; the aspiration inference is the nurse's.
- **Avoid "still"** anywhere ("can you still eat?"), already banned globally by
  `screen.mjs`, and note that this packet has an unusual temptation to use it in
  item 7, where the honest anchor is *"than before"*, not *"still"*.
- Avoid "serious", "dangerous", "bad", "severe" — already banned.

## How these were found

**Search A found nothing, and finding nothing took the same work as finding
something.** Three separate queries — comparison and validation studies for
paediatric dental pain; severity and admission scoring for odontogenic
infection; and a structured Europe PMC field query for prediction and decision
rules crossed with dental terms and paediatric terms — returned 135 records
between them and not one prediction rule for this complaint. The nearest
artefacts in the field are a symptom-severity score for odontogenic infection
derived in adults and driven by bloods, and source 7's scoping review whose
conclusion is that the criteria do not exist. **That absence is the packet's
first finding and is stated in its own words at the top**, not buried here.

But Search A was not wasted, and this is the part worth carrying to the next
packet. **Run against a complaint with no rules, Search A returned the
self-report literature instead** — SOHO-5, the child Dental Pain Questionnaire,
the Dental Discomfort Questionnaire. That is a literature no previous packet in
this repository found, and it answers the question the self-report filter has
been answering by judgement for four packets: *can a child of this age report
this?* Source 6 answers it with 332 five-year-olds, verbatim item wording, and a
comprehension rate. **When Search A returns no rules, do not stop — re-aim it at
whether children can report the complaint at all.**

**Search B is the whole packet.** All ten clean and partial items come from four
guidelines and two lay red-flag pages, and the two urgency tiers of a single NHS
page (source 4) supply the packet's two highest-ranked escalation items. The gap
between the searches is therefore not the shape the previous three packets
found:

- Head injury and sore throat: the rules and the guidelines answered **different
  questions**, and the guidelines answered the safety one.
- Acute abdominal pain: the rules answered the right question for **8% of
  arrivals**.
- **Mouth or tooth pain: there is no Search A side to the gap.** The complaint
  affects four in ten 6-to-12-year-olds (source 9) — the most common presenting
  complaint any packet here has covered — and has produced no prediction rule at
  all, while sore throat, at a fraction of the prevalence, produced ten. The
  literature follows the antibiotic decision, and dental pain's antibiotic
  decision is made by a dentist who is already looking in the mouth.

For the next "General" row: expect Search A to return an adjacent literature
rather than nothing, and check whether that adjacent literature is about the
*child's ability to report* before discarding it.

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with the tummy and sore-throat packets.**
   The new vocabulary domain is the mouth and teeth, so it is ruled explicitly
   before anything is generated:
   - **"tooth" / "teeth"** — matching the body-map region label "Mouth or
     teeth". Never "molar", "incisor", "canine", "crown", "root", "enamel",
     "pulp", "gum line".
   - **"loose"** — never "wobbly", the British and Australian word the sources
     would suggest.
   - **"came all the way out"** — never "avulsed", never "fell out", which in a
     6-to-12-year-old means the normal thing that happens to baby teeth.
   - **"broken or chipped"** — never "fractured", never the enamel/dentine/pulp
     colour cues.
   - **"puffy" or "swollen"** — never "poorly", never "swelled up", never
     "inflamed".
   - **"sore spot in your mouth"** — never "ulcer", never "vesicle", never
     "blister", never "canker sore" (regional even within US English).
   - **"the dentist"** — never "surgery".
   - **"eat and drink"** — carried from the sore-throat packet's item 6 and
     source 6's own wording, and deliberately identical, because it is the same
     fact (decision 10).
   - **"throw up"** — carried unchanged from the tummy packet, in case a
     generator reaches for it.
2. **Answer types.** `FollowUpScreen` renders yes/no only. **Corrected 2026-09-08:** this sentence was wrong. `FollowUpScreen` renders `yesno`, `count`, `text` AND `voice` (`src/screens/FollowUpScreen.jsx` lines 133-145). The packet's exclusions below were reasoned from a false premise and any that turned on it should be revisited. All seven proposed
   items and all three held-back items are **yes/no**. Item 8 ("do you know
   where it went") is the only one that would be richer as free text, and it is
   not proposed for v1 partly for that reason.
3. **Items 3 and 5 are two questions and must never be fused.** Source 4 makes
   the *location* of the swelling the entire difference between "see a dentist"
   and "go to A&E". A fused question — "is your face swollen anywhere?" — throws
   away the only discrimination the source offers, and a fused question that
   *includes* the eye and neck ("is your face or eye or neck swollen?") is worse
   still, because a yes no longer says which. This is the same principle as the
   sore-throat packet's cough/coryza **bundling** ruling: capture the atoms, let
   the nurse compose. Item 3 first, item 5 immediately after.
4. **Item 24 (bite / occlusion) is excluded despite the source marking it
   "subjective", and the exclusion is judgement, not citation.** Source 1 writes
   *"Bite for even occlusion, subjective or objective"*, which is a guideline
   explicitly admitting the child's report. It is still excluded because the
   child-facing form is a comparison against a remembered normal — the same
   class of criterion as CHALICE's "abnormal drowsiness", where the standard is
   the assessor's expectation. **`JUDGEMENT, NOT A CITATION`**, recorded in the
   sidecar, and the strongest candidate in the packet for a reviewer to
   overturn.
5. **Item 7 is anchored to change, and this is a fix to a shipped question.**
   `FOLLOW_UPS.mouth.loose-tooth` currently asks *"Do you have a loose tooth?"*
   Source 2 puts every child from 6 to 13 in mixed dentition and primary molars
   exfoliating at 11–12, so for most of the app's age range the answer is yes
   and means nothing. Every candidate generated on item 7 **must** anchor to the
   injury or to a change ("different from before", "since it happened"), and
   must not use "still". A candidate that asks the bare question is a regression,
   not a re-source.
6. **Item 1 stays a bank question in v1, and is marked for removal.** The right
   home for "did something hit your mouth?" is `GROUP_GATE.mouth = 'mechanism'`,
   reusing the gate `head` already has, because it routes the other six items
   rather than adding to them and because gates do not consume one of the three
   bank slots. That is an `src/` change and this run writes only two files. So:
   item 1 ships as a question, ranked first, **and the moment a mechanism gate
   exists for `mouth` it must be dropped from the bank** — the same transition
   head's `bumped-head` already made, and `src/data/vocab.js` still carries the
   comment recording how that went wrong the first time.
7. **Age floors: none, and that is the finding.** No source floors any item.
   Source 6 is affirmative evidence in the other direction: five-year-olds
   answered *"Has it ever been hard for you to eat because of your teeth?"*
   with 82.4% needing no repetition or rewording. Two honest caveats, neither of
   which becomes a `minAge`:
   - **Source 6 was derived at 5; the app's floor is 4.** That is a one-year
     extrapolation on item 2. Recorded, not floored — inventing a floor from a
     derivation age, on an item that is also plain history in three guidelines
     that set no floor, is exactly the invented citation the brief warns about.
   - **8.1% of five-year-olds needed more than one rewording** (source 6). The
     app has no interviewer to reword. That is a limitation of the whole
     `young` tier, not of one item, and it belongs in
     `packets/LIMITATIONS.md`.
8. **`depth: null`, because the group is `internal` and no depth answer
   exists.** `GROUP_DEPTH.mouth === 'internal'`, so `gateGroupsForRegions` never
   returns `mouth`, the depth screen never asks, and `depths['mouth']` is
   permanently `undefined`. `build-bank.mjs` emits no `depth` key when the
   sidecar's is falsy. Writing `"inside"` would assert a scope the app has no
   answer to test. Same encoding, same reasoning, as sore throat's decision 8.
9. **Duration scope, and it inverts within the packet.** The sources:

   | Source | Window |
   |--------|--------|
   | RCH trauma (1) | *"Best prognosis if 'dry-time' less than 20 minutes"* |
   | NHS (4) | *"toothache… that lasts more than 2 days"* → see a dentist |
   | NHS ulcers (5) | *"lasts longer than 3 weeks"* → see a dentist or GP |
   | RCH HSV (3) | *"Lesions heal in approximately 10-14 days (up to 3 weeks in severe cases)"* |
   | NHS (4) | swelling near the eye or neck → **A&E, no duration qualifier at all** |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
   - `not-sure` — **full packet.** Same convention as every other packet:
     `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **the infection and impact items only** (2, 3, 5, 9, 10), not
     the trauma items (1, 4, 6, 7, 8).

   **The trauma items are the ones that expire here.** "Did a tooth come all the
   way out?" answered about an event three weeks ago is a dental appointment,
   not an emergency, and the twenty-minute clock is long gone. The infection
   items go the other way and get **more** relevant with time — source 4 puts a
   toothache past two days in front of a dentist and swelling near the eye in
   front of A&E *with no duration qualifier whatever*, and source 5 makes three
   weeks the ulcer threshold. A child whose face is puffy near their eye needs
   item 5 answered on day 30 as much as on day 1.
10. **Redundancy against what the app already collects**, checked item by item
    against body region, depth, intensity, duration, sensations, mood and every
    other group's questions:
    - **Rejected as duplicates:** item 15 (body map), item 16 (FPS-R and body
      map), item 17 (`DURATIONS`), item 18 (setup age), item 19
      (`SENSATIONS.tingly`, which **is** offered here — the group is `internal`
      so the sensation list is never pruned).
    - **Fact reuse, decided:** item 2 takes the existing fact
      **`eating-drinking`**, which sore throat's `s-011`/`s-012` already use.
      `packets/PLAN.md`'s test for merging is whether the fact is *systemic* —
      one answer about the whole child — and whether a child has managed to eat
      and drink is as systemic as a fact gets. A child who taps Mouth and Throat
      must not be asked it twice.
    - **The throat packet already covers four of this packet's facts**, and
      **none of them reaches a mouth-only report**, because those candidates are
      scoped `group: 'throat'`: `hurts-to-swallow` (item 11), mouth opening
      (item 12, and `s-017` carries **no fact at all**), `hard-to-breathe` and
      the voice question (item 13), `feels-feverish` (item 14). **This packet
      does not re-ask any of them.** Minting parallel mouth-scoped questions
      would double the bank's wording surface for four facts that are already
      well-worded; the right fix is to widen the existing candidates' group
      scope and give `s-017` a fact. Raised in "Still open" as a bank change.
    - **Kept despite surface overlap:** item 2 touches `HELPS.water` ("A drink
      of water") and `HELPS.food` ("Something to eat"). `HELPS` records what the
      child *wants*; item 2 records what they have *managed*. Source 5's *"drink
      cool drinks through a straw"* is a reason a child might want water and not
      be able to drink it.
    - **Adjacent, not redundant:** sore-throat item 1 (`hurts-to-swallow`) and
      this packet's item 2 both touch eating. They are different facts — pain on
      swallowing versus intake achieved — and the sore-throat packet already
      made that split explicitly for its own items 1 and 6.
11. **Both hand-written `mouth` follow-ups must be re-sourced, not assumed.**
    `followUpsForGroups` does `if (sourced.length) continue`, so **the moment
    this packet's questions enter the bank, `hurt-eat` and `loose-tooth` are
    dropped entirely**, not merged. They carry across as:
    - `hurt-eat` ("Does it hurt when you eat?") → **item 2**, which is the
      best-sourced item in the packet and whose wording now comes from a
      validated instrument. Whoever hand-wrote it picked, unaided, the one
      question in this complaint with a validation study behind it.
    - `loose-tooth` ("Do you have a loose tooth?") → **item 7**, which survives
      only with the mixed-dentition anchor of decision 5. This one was
      hand-written *wrong* — not wrong in concept, wrong in that it returns yes
      for most healthy children in the app's age range — and the packet exists
      partly to fix it. Losing it silently, or carrying it across unchanged, are
      both failures.

## Still open

- **`mouth` has no gate, and it should have `mechanism`.** `GROUP_GATE` gives
  `head` a mechanism gate and `mouth` nothing, so nothing currently establishes
  whether a child's mouth was hit. Item 1 is a stopgap that spends a bank slot
  on routing. Needs a ruling.
- **Four facts are unreachable from a mouth-only report** (items 11–14):
  `hurts-to-swallow`, `hard-to-breathe`, `feels-feverish`, and mouth opening.
  Source 4 lists swallowing, breathing and speaking difficulty as **A&E
  criteria for toothache**, so this is not a cosmetic gap. Two candidate fixes,
  neither taken here: widen the relevant sore-throat candidates to
  `groups: ['throat', 'mouth']`, or let the bank resolve a fact across groups.
  A reviewer should pick one.
- **Sore-throat `s-017` ("Is it hard to open your mouth wide?") has
  `fact: null`.** Mouth opening is systemic by `PLAN.md`'s own test. It should
  carry a fact — `hard-to-open-mouth` — so that this packet and any future jaw
  or facial-swelling packet can share it instead of duplicating it. A one-line
  change not made here because this run writes only two files.
- **The body map cannot express which tooth** (item 31) — not upper or lower,
  not left or right, not tooth versus gum versus lip versus tongue. Source 1
  numbers teeth; source 8 finds upper-face and lower-face infections differ
  materially. Everything the nurse gets about location is the word "mouth".
  Architecture question, and the largest single loss in this packet after
  item 22.
- **The twenty-minute window is unreachable by `DURATIONS`.** The shortest band
  is `just-now`. Nothing distinguishes five minutes from ninety, and for an
  avulsed permanent tooth that is the difference the whole guideline is about.
  Probably acceptable — the nurse has the arrival time and will ask — but a
  reviewer should confirm, and it is the sharpest instance of a problem three
  packets have now logged.
- **Item 24 (the bite) is excluded by judgement against a source that calls it
  subjective.** The most reversible decision in the packet; a clinician may well
  say a 9-year-old can reliably report that their teeth meet wrongly. If so it
  becomes item 8's neighbour and the packet gains a mandible-injury signal it
  currently lacks.
- **Item 7 needs a play specialist's and a dentist's view on wording.** Anchoring
  to change is right in principle; whether a 6-year-old can distinguish "loose
  the way my teeth get loose" from "loose since I fell over" is an empirical
  question this packet cannot answer, and getting it wrong produces a
  false positive on the app's most common age group.
- **Source 6 is a school-based, interviewer-administered survey of healthy
  five-year-olds, not an ED presentation.** There is no evidence anywhere in this
  packet that a child in acute dental pain, with no adult beside them and no
  interviewer to reword, answers as reliably as source 6's cohort did — and
  source 6 itself records 8.1% needing more than one rewording. The `young` tier
  carries more risk here than the `older` tier and should be reviewed as such.
- **The safeguarding exclusion.** Excluded on principle above; the clinical
  reviewer should confirm that the nurse-facing surface makes oral trauma
  visible as oral trauma, because source 1 asks the clinician to consider abuse
  in exactly this presentation and this app deliberately collects nothing that
  would help.

## Ambiguity in the sources

Recorded rather than papered over.

- **Source 7 was read as an abstract only.** The full text is paywalled on
  ScienceDirect. The two sentences quoted at the top of this packet are the
  abstract's own words and the claim made from them — that the absence of
  diagnostic criteria in paediatric odontogenic infection is documented — is
  entirely contained in them. Nothing else depends on it. But a reader should
  know that the packet's headline finding rests on a 26-word sentence in an
  abstract plus this run's own three failed searches, and not on a source read
  end to end.
- **The IADT avulsion guideline was not read and its numbers are not here.**
  Source 1 gives twenty minutes; secondary literature attributes different
  figures to IADT 2020. This packet uses source 1's number only. If a reviewer
  finds the packet's urgency framing for item 4 too tight or too loose, the
  primary source that would settle it is the one this run could not open.
- **RCH files "Sensitivity to hot and/or cold" under History and "Numbness"
  under Examination**, and both are sensations only the child has. As with the
  sore-throat packet's *"oropharyngeal ulcers"* appearing under both headings,
  the guidelines' own history/examination boundary is not consistent, so the
  self-report filter was applied to the **criterion**, not to the heading it sits
  under. Item 24 is the same problem in the other direction: an examination
  bullet the source itself marks *"subjective"*.
- **Source 8 is 27 children in one Polish centre over three years**, aged 2–16,
  all sick enough to be admitted. Its percentages are quoted here as frequency
  context and nothing is ranked on them. Its two symptom tables are cut
  differently — one by upper versus lower face, one by deciduous versus
  permanent tooth — so figures from the two must not be compared directly, and
  this packet quotes ranges rather than picking one.
- **Source 9's heterogeneity is close to total**: *"I² = 99.8"*, with individual
  study prevalences from *"1.33 to 87.8%"*, and *"More than half of the
  publications reported the lifetime prevalence of dental pain (n = 51) while
  few studies reported the current prevalence of dental pain (n = 3)"*. So the
  pooled 32.7% is mostly a *lifetime* figure, and reading it as "a third of
  children have a toothache right now" would be wrong. It is used here only to
  establish that this complaint is common in the app's age band, which even the
  lower bound supports.
- **Source 6's questionnaire was interviewer-administered** — *"The children's
  questionnaire was interviewer-administered by four trained interviewers"* —
  and its items ask *"has it **ever** been hard…"*, a lifetime frame, whereas
  this app asks about now. So source 6 validates that **five-year-olds
  understand and answer questions of this shape about their own teeth**; it does
  not validate the present-tense form this packet proposes, and it does not
  validate an unaccompanied child with a tablet. This is the same limit the
  sore-throat packet recorded for its source 8, reached independently.
- **Three of the nine sources are the same institution.** Sources 1, 2 and 3 are
  all RCH Melbourne clinical practice guidelines, and they cross-reference each
  other. That is not three independent confirmations of anything, and the reason
  it happened is recorded in "Attempted and not used": the second paediatric
  dental emergency guideline this run tried to fetch returned HTTP 403. A future
  run should get a non-RCH paediatric dental guideline before treating any
  agreement between sources 1, 2 and 3 as corroboration.
- **Sources 4 and 5 are written for adults about their own mouths.** The NHS
  pages say "your tooth", "your cheek", "your eye". Nothing on either page is
  paediatric, and neither is a clinical guideline; they are patient-information
  pages. They are used here — heavily, and for the packet's two highest-ranked
  escalation items — because they are the only sources read that state red flags
  in words a non-clinician is expected to act on, which is the closest available
  proxy for what a child might notice. That is an argument by analogy, and it is
  this packet's weakest inferential step. Flagged for the reviewer explicitly.
