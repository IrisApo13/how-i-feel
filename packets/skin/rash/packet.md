# Rash or spots

Presenting complaint · packet `skin-rash` · serves **all nine body groups**,
`depth: surface` · packet v1 · assembled 2026-09-07
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
> who arrives with spots or a rash, and marks which of those a child can report
> about themselves. **Not** a diagnostic tool: nothing here may be scored,
> summed, or shown to a child or nurse as a suggested cause. This complaint's
> literature is dominated by one question — *is this meningococcal disease?* —
> and the single fact that question turns on, whether the rash blanches, is
> ruled **not askable of a child in any form** below. Read that ruling before
> anything else in this file.

## Read this first: the weakest link

Two things a reader must not have to reach the end to discover.

1. **The decisive fact in this literature is excluded from the packet.** Every
   guideline read here routes on whether the rash blanches under pressure. That
   is a test an adult performs with a drinking glass, and section
   **"The blanching ruling"** explains why no child-facing form of it survived —
   including the finding, *in two of the sources themselves*, that pressure on
   skin is a listed **cause** of the sign the question would be hunting for. A
   packet about rashes that cannot ask the rash question is the honest shape of
   this complaint, not a shortfall in searching.
2. **The head-to-head comparison of the two competing pathways was not read
   first-hand.** Riordan et al. (2016) is the study that validated the NICE and
   Newcastle–Birmingham–Liverpool algorithms against each other; it returned
   **HTTP 403** and is marked `CITED, NOT READ`. Every sensitivity and
   specificity figure quoted in "The two pathways disagree" comes from source
   5's reproduction of it, not from the paper. No item in the table depends on
   those numbers — they are used only to say the two pathways disagree, which
   source 5 states in its own words — but a reviewer should know the numbers are
   at one remove.

## Scope

**This is a cross-cutting packet, scoped by depth rather than by body area.** A
rash can be anywhere, so `meta.groups` lists all nine groups —
`head`, `throat`, `chest`, `tummy`, `limb`, `back`, `eyes`, `ears`, `mouth` —
and `meta.depth` is `"surface"`. `build-bank.mjs` reads `meta.groups ?? [meta.group]`;
`meta.group` is still set (to `skin`) so the build's per-group coverage report
has something to key on, and it is deliberately **not** one of the nine, because
this packet does not own any single body area.

**The depth filter is the whole point.** `bankQuestions` filters
`!q.applies.depth || depth == null || depth === 'unknown' || depth === q.applies.depth`.
Declaring `surface` is what stops these questions firing for a child who tapped
their tummy and said the pain is deep inside. Without it, a child with
appendicitis would be asked whether their spots have spread.

**Four groups have no depth gate at all, and this packet still fires for them.**
`GROUP_DEPTH` marks `eyes`, `ears`, `mouth` and `throat` as `internal`, so
`depths[g]` is never populated for them, so `depths[g] ?? null` passes `null`
into `bankQuestions`, so the depth filter is a no-op and **every item here is
offered to a child who taps only Throat.** That is not an accident of the
filter — it is exactly how throat item 14 finally gets a home (see "What this
packet closes"). It also means the `young` tier's five-question cap is being
spent on skin questions for a child who tapped their ear, which is a real cost;
see "Still open".

**`head` is the exception, and it is a bug this packet exposes rather than
causes.** `GROUP_GATE.head` is `'mechanism'`, not `'depth'`, and the gate answer
is stored in **the same `report.depths` map** (`App.jsx` line 295). So for a
child who tapped their head, `depths['head']` holds `'injury'`, `'no-injury'` or
`'unknown'`, and the depth filter compares `'surface'` against a mechanism
answer:

| `depths['head']` | Do this packet's items fire? |
|---|---|
| `injury` | **no** — `'injury' !== 'surface'` |
| `no-injury` | **no** — `'no-injury' !== 'surface'` |
| `unknown` | yes — the filter short-circuits on `'unknown'` |

**So a child with a rash on their face who says "it just started hurting" is
asked nothing from this packet.** `head` stays in `meta.groups` because removing
it would encode the bug as an intention, and because the `unknown` branch does
work. Raised in "Still open" as an architecture question: one map is being used
for two different gate vocabularies.

**Age.** App covers 4–12. **One item carries a floor and it is judgement, not
citation** (item 14, `minAge: 8`). The important age finding is negative and is
about the itch literature: see "The 4-and-5-year-old problem".

**Out of scope and not carried:** neonates and infants (source 3: *"Any newborn
with petechiae should be promptly reviewed with a senior clinician"*; source 4's
HSP note *"Diagnosis is uncommon < 2yrs of age"*; source 6's whole napkin
dermatitis and cradle cap sections are pre-verbal presentations); everything
downstream of the decision — antibiotic choice, steroid dosing, fluid
resuscitation, lumbar puncture, which is most of the text in sources 1 and 4;
the **anaphylaxis pathway** (source 6's angioedema, source 7's 999 list) except
for its one child-reportable half, item 3 — the same exclusion the sore-throat
packet made, reached again by a different route; and **cuts, scrapes and wounds**,
which are roadmap row 3 (`skin-wound`), not this packet.

## What this packet closes

Three shipped packets logged open items waiting for a `depth: surface` packet.
Stated explicitly so nobody has to infer it.

| Open item | Where it was logged | Closed by |
|---|---|---|
| **Throat item 14 — "Have you got spots or a rash", recorded as having "no home"** because an `internal` group cannot host a skin finding | `packets/throat/sore-throat/packet.md`, decision 9 and "Still open" | **Yes, item 1.** Because `throat` is `internal`, `depths['throat']` is `undefined` and this packet's items fire for a throat tap anyway. The criterion now lives in a packet about skin and is *also* reachable from a throat tap — which is what the throat packet asked for. |
| **The chest `surface` half has no packet**, and its two hand-written questions are crowded off the `unknown` path | `packets/chest/breathing/packet.md`, decision 9 and "Still open" | **Partly.** `chest-rash` ("Are there spots or a rash?", fact `rash`) is superseded by item 1: bank questions are queued **before** hand-written ones in `followUpsForGroups`, and the shared fact suppresses the hand-written copy. `chest-press` ("Does it hurt when you press on it?") is **not** replaced and **must not be** — this packet bans instructing a child to press on their own skin (see "The blanching ruling"), so it deliberately leaves the exception the chest packet recorded on 2026-09-06 standing rather than quietly inheriting it. |
| **Limb item 18 — Rash**, *"belongs to the surface packet and is listed here only so its absence is a decision"* | `packets/limb/injury/packet.md`, item 18 | **Yes, item 1**, with limb's own citations (RCH *"skin changes eg rash"*, GGC *"Rash (HSP / SJIA / leukaemia)"*) now joined by six more. |
| **Limb item 7 — "Can you see a cut, a bruise or a scrape?"**, out of scope pending a surface packet | `packets/limb/injury/packet.md`, item 7 | **The bruise half only, as item 14.** The cut-and-scrape half is a **wound**, and wounds are roadmap row 3. Saying this packet closes limb item 7 outright would be an overclaim: `limb-see` stays hand-written and untouched on the surface branch. |
| **Limb item 8 — "Does it itch?"**, *"no source in this packet mentions itch in an injured limb… it stays hand-written until a `limb-surface` packet covers bites, rashes and stings"* | `packets/limb/injury/packet.md`, item 8 | **Yes, item 8**, with seven sources behind it — six rash conditions in sources 6 and 7 plus the self-report evidence in source 9. The limb packet was right that its own literature does not support itch; this one's does. |

**The shared facts `rash` and `itch` are already in use** — by `chest-rash`,
`tummy-rash`, `back-rash`, `tummy-itch`, `limb-itch`, `back-itch` in
`src/data/vocab.js`, and by the throat packet's shipped candidate `s-021`. The
generation stage **reuses them**, it does not invent new ones: items 1 and 8
carry `fact: 'rash'` and `fact: 'itch'`, which is what makes the hand-written
copies fall away instead of being asked twice.

**One thing this packet does not fix, and a reviewer should see it.** `s-021`
("Have you noticed spots or a rash on your skin?") ships today with **no `fact`
field**, so `keyOf` falls back to its id and it does **not** dedupe against
`chest-rash`. A child who taps Throat and Chest-surface is asked about spots
twice today, under two ids — the exact bug `fact` was introduced to kill,
surviving in the one packet whose rash item had nowhere to go. Adding
`fact: 'rash'` to `s-021` is a one-line change in `packets/throat/sore-throat/candidates.json`;
this run writes only two files and did not make it. Carried to "Still open".

## Sources

1. **NICE guideline NG240, "Meningitis (bacterial) and meningococcal disease:
   recognition, diagnosis and management"**, published 19 March 2024.
   **Read first-hand** — the *Recommendations* page, via
   `scripts/fetch-source.mjs`. **The primary anchor.** Supplies the red flag
   symptoms for meningococcal disease verbatim, table 3's symptom list, the
   skin-tone caution, and the safety-netting line about a rash changing from
   blanching to non-blanching. Supersedes CG102, which is the version the PiC
   study was designed against.
2. **NICE guideline NG143, "Fever in under 5s: assessment and initial
   management"**. **Read first-hand** — the *Recommendations* page, present in
   the shared `packets/.sources/` cache from an earlier run. Supplies the
   traffic-light red row, the meningococcal qualifiers (*"lesions larger than
   2 mm"*, capillary refill, neck stiffness), the Kawasaki features, and one
   line that changes how a duration question should be read (1.2.26). **Scope
   caveat: it is written for under-5s** and the app covers 4–12, so only the
   4-year-old band is squarely inside it. Nothing in the items table rests on
   NG143 alone.
3. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Petechiae and purpura"**, last updated February 2021 (renamed from "Fever
   and petechiae – purpura"). **Read first-hand.** The primary
   complaint-organised source: it is filed under the *finding*, not the
   diagnosis, and its History section is the closest thing in this packet to a
   list of what somebody asks a family. Also the source of the glass-test
   description and of the mechanical-causes table that decides the blanching
   ruling.
4. **NHS Greater Glasgow & Clyde, Paediatric Clinical Guideline 537,
   "Non-Blanching Rash, management in children, Paediatrics"**. **Read
   first-hand**, but **not via `scripts/fetch-source.mjs`** — see "Tooling" at
   the end; fetched with `curl` into
   `packets/.sources/nhsggc-537-non-blanching-rash.txt`. A second
   complaint-organised guideline written for a paediatric ED. Supplies the
   prevalence anchor, the petechiae/purpura/ecchymosis size definitions, and the
   four named differentials with their per-condition features.
5. **Waterfield T, Lyttle MD, Fairley D, McKenna J, Woolfall K, Lynn F, Maney JA,
   Roland D, Weir A, Shields MD, on behalf of PERUKI.** "The 'Petechiae in
   children' (PiC) study: evaluating potential clinical decision rules for the
   management of feverish children with non-blanching rashes, including the role
   of point of care testing for Procalcitonin & Neisseria meningitidis DNA — a
   study protocol." *BMC Pediatrics* 2018;18:246. **Read first-hand** via
   PMC6065062. **This is the Search A discovery source.** It enumerates the
   competing pathways, reports their head-to-head accuracy, and states plainly
   that no clinical decision rule for this population exists yet. **It is a
   protocol, not a result.** See "Attempted and not used".
6. **Whittington Health NHS Trust, "Rashes in Children — Paediatric Dermatology
   Guideline"**, v1.0, authors Dr Elinor Sefi (Consultant Paediatrician) and
   Dr Rina C—, August 2016 – January 2017. **Read first-hand** (PDF, extracted
   via `fetch-source.mjs`). **The other half of Search B**, and the half the
   meningococcal literature cannot see: eighteen named childhood rashes with
   per-condition presentations — urticaria, impetigo, eczema, eczema
   herpeticum, erythema infectiosum, erythema multiforme, hand-foot-and-mouth,
   measles, molluscum, rubella, scabies, scarlet fever, staphylococcal scalded
   skin, tinea capitis, and more.
7. **NHS inform (NHS 24, Scotland), "Skin rashes in children"**, last updated
   16 July 2026. **Read first-hand.** The family-facing source, and the only one
   read that writes its red flags in words a non-clinician is expected to act on
   — the same role NHSGGC's discharge triad played in the sore-throat packet. It
   is also the only source read that says where to look on brown and black skin
   rather than only that it is harder.
8. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Henoch-Schönlein purpura"**. **Read first-hand.** Reached from source 3's
   own "See also" line. HSP is the one non-infective cause in this literature
   that presents as *rash plus things a child can feel*, so it carries more of
   the items table than its prevalence would suggest.
9. **Paller AS, Yosipovitch G, Weidinger S, DiBenedetti D, et al.**
   "Development, Psychometric Validation and Responder Definition of Worst Itch
   Scale in Children with Severe Atopic Dermatitis." *Dermatology and Therapy
   (Heidelberg)* 2022;12(12):2839–2850. **Read first-hand** via PMC9674819.
   **The self-report evidence**, and the equivalent of the sore-throat packet's
   source 8. 22 children **aged 6–11** (mean 8.7) in three rounds of cognitive
   debriefing, then psychometric evaluation in the LIBERTY AD PEDS phase 3
   cohort. **Limits worth knowing:** a severe-atopic-dermatitis clinical-trial
   population, not an ED or school presentation; the scale measures itch
   *intensity*, which this app never asks for; and the youngest child in it was
   6. It supports "a child of 6–11 can report their own itch"; it validates
   nothing at 4 or 5.
10. **Bruscky DMV, Melo ACCDB, Sarinho ESC.** "Cross-cultural adaptation and
    validation of the Itching Severity Scale in children and adolescents with
    atopic dermatitis." *Revista Paulista de Pediatria* 2017;35(3):244–251.
    **Read first-hand** via PMC5606184. **Read, and it turns out to be evidence
    of the opposite of what its title suggests** — see "The 4-and-5-year-old
    problem". Recorded because a future run that finds it in a search must not
    assume from the title that it validates child self-report.

**Attempted and not used.**

- **Riordan FAI, Jones L, Clark J, on behalf of the Non-Blanching Rash Audit
  Group. "Validation of two algorithms for managing children with a
  non-blanching rash." *Archives of Disease in Childhood* 2016;101:709–713.**
  `adc.bmj.com` returned **HTTP 403 — CITED, NOT READ.** This is the source of
  every accuracy figure in "The two pathways disagree" (NICE sensitivity 97% /
  specificity 50%; NBL 100% / 82%), which reach this packet only through source
  5's reproduction of them. **No item depends on it.** Named because it is the
  single most relevant paper to this complaint that this run could not open, and
  a future run should try a repository copy.
- **The PiC study's results paper** (Waterfield et al., *Lancet Infectious
  Diseases* 2020, "Validating clinical practice guidelines for the management of
  children with non-blanching rashes in the UK (PiC)"). A Europe PMC query
  restricted to open access returned **no full text — CITED, NOT READ.** Source
  5 is its **protocol**, so everything this packet says about PiC describes what
  the study set out to do, never what it found. Nothing in the items table
  depends on the result, and no claim here should be read as "PiC showed X".
- **Waterfield T, Dyer EM, Lyttle MD. "Fifteen-minute consultation: the child
  with a non-blanching rash." *ADC Education & Practice* 2018.** Cited in source
  3's own reference list. **Not fetched, CITED, NOT READ.** Nothing depends on it.
- **NICE CG102** — the guideline the PiC study was built against, superseded by
  source 1. **Not fetched, CITED, NOT READ.** Its content reaches this packet
  only through source 5's description of it. Nothing depends on it that source 1
  does not also state.
- **The Newcastle–Birmingham–Liverpool algorithm.** No primary source read. Its
  one distinguishing feature quoted here — that it does not require fever —
  comes from source 5 alone. **CITED, NOT READ.**
- **Kong HE, Francois S, Smith S, et al. "Pruritus assessment tools for 6 to
  7-year-old children: KidsItchyQoL and ItchyQuant." *Pediatric Dermatology*
  2021;38(3):591–601.** Not open access. **CITED, NOT READ**, and named
  specifically because it is the **lowest age reached by any instrument found in
  this search** — 6 — which is the fact that makes the 4-and-5-year-old problem
  a real gap rather than an unexamined one.
- **PROMIS Itch Questionnaire-Child (PIQ-C)**, for children **≥ 8 years**. Known
  only through source 9's introduction. **CITED, NOT READ.**

## The rule(s), as published

There is **no clinical prediction rule** for this complaint. That is source 5's
own finding, and it is the first thing the discovery search returned:

> "a paucity of relevant evidence, and identified the derivation of a clinical
> decision rule (CDR) for the management of feverish children with NBRs as a
> priority for future research"

So Search A produced not a list of rules but a list of **two competing clinical
practice guidelines**, which is a materially different artefact and is handled
below as a scope disagreement.

### The two pathways disagree — and it is a *scope* disagreement (source 5)

> "There are currently two clinical practice guidelines (CPG) in widespread use
> in the UK for the management of children with NBR. These are: National
> Institute for Health and Care Excellence (NICE) CG102 … The
> Newcastle-Birmingham-Liverpool algorithm"
>
> "Both CPGs are reported to be highly sensitive for the diagnosis of MD (NICE
> 97%) and (NBL) 100%. The specificity of the two CPGs has been estimated as 50%
> (NICE) 82% (NBL)."
>
> "**The most significant difference between the two CPGs is that in the NBL CPG
> does not include fever or history of fever whereas the NICE CPG requires a
> fever (or history of fever) and NBR.**"

That last sentence is not a threshold disagreement and not a bundling
disagreement. It changes **which children the pathway applies to**: under NICE a
child with a non-blanching rash and no fever is outside the pathway, under NBL
they are inside it. The brief's ruling for scope disagreement is to resolve it
explicitly and say which source each band follows — done in decision 5, and it
is also why item 6 (feeling hot or shivery) is ranked higher here than the
equivalent item is in any other packet.

Source 5 also states the accuracy figures' expiry date, which matters more than
the figures:

> "Data on sensitivity and specificity of the existing CPGs was collected largely
> before the introduction of meningococcal B and C vaccination meaning their
> performance in the current post vaccination era is unknown."

And its own enrolment scope, which is the packet's population:

> "All children < 14 years of age attending the ED with reported or recorded
> fever (≥38 °C) and NBR."

### The red flags, verbatim (source 1)

> **1.1.9** "Strongly suspect meningococcal disease in people with any of these
> red flag symptoms: haemorrhagic, non-blanching rash with lesions larger than
> 2 mm (purpura) · rapidly progressive and/or spreading non-blanching petechial
> or purpuric rash · any symptoms and signs of bacterial meningitis (see tables
> 1 and 2), when combined with a non-blanching petechial or purpuric rash"
>
> **1.1.10** "**Do not rule out meningococcal disease just because a person does
> not have a rash.**"
>
> **1.1.12** "When looking for a rash: check all over the body (including nappy
> areas), and check for petechiae in the conjunctivae · note that rashes can be
> hard to detect on brown, black or tanned skin (look for petechiae in the
> conjunctiva) · tell the person and their family members or carers to look out
> for any changes in the rash, because it can change from blanching to
> non-blanching."

And the red flag combination for bacterial meningitis, verbatim:

> **1.1.4** "Strongly suspect bacterial meningitis in people with all the
> symptoms in the red flag combination: fever · headache · neck stiffness ·
> altered level of consciousness or cognition (including confusion or delirium)."
>
> **1.1.5** "Bacterial meningitis can still be strongly suspected based on
> clinical assessment, even in people who do not have all the symptoms in the red
> flag combination."

Table 1 and table 3's non-specific rows, verbatim, filtered to what is not an
observation of an unconscious or pre-verbal patient:

> "Neck stiffness, including more subtle discomfort or reluctance to move the
> neck" · "Photophobia" · "Unexplained body pain, including limb, back or
> abdominal pain" · "Vomiting" · "Cold hands and feet" · "Abdominal pain" ·
> "Diarrhoea" · "**Leg pain**" · "Ill appearance" · "Pale, mottled skin or
> cyanosis" · "Irritability" · "Lethargy" · "Unusual behaviour"

**Note what 1.1.10 does to this packet.** The most-cited recommendation in the
anchor guideline says a *negative* rash answer proves nothing. So nothing
downstream — nurse view, report, summary — may treat "no, I haven't got spots"
as reassurance. That is a stronger version of the same instruction the chest
packet gave about wheeze.

### The general guidance, verbatim (source 3)

Definitions:

> "Both petechiae and purpura do not blanch when pressure is applied - this is in
> contrast to other common rashes in children such as viral exanthems and
> urticaria. The 'glass test' can be used to assist with assessing whether a rash
> is blanching - a drinking glass can be applied firmly against a rash - if the
> rash does not disappear it is non-blanching. Petechiae are pinpoint
> non-blanching spots. Purpura are larger non-blanching spots (>2 mm)"

Key points:

> "The majority of children with petechiae do not have a serious bacterial
> infection or meningococcal disease, and often will not have a specific cause
> identified. Seriously unwell children with petechiae/purpura require urgent
> management."

**History, in full** — eight bullets, and it is worth counting how many are the
child's:

> "Immunisation status - children <6 months of age or with incomplete
> immunisation status · Rapid onset and/or rapid progression of symptoms and
> rash · Medications: prior treatment with antibiotics may mask signs of a
> bacterial infection · High risk groups: immunosuppression, previous invasive
> bacterial infections · History of trauma/injury · Association with bleeding,
> abdominal pain, joint pain, difficulty mobilising · Travel · Sick contacts"

Examination:

> "Children are considered unwell when they have: Abnormal vital signs:
> tachycardia, tachypnoea and/or desaturation in air · Cold shock: narrow pulse
> pressure, cold extremities, prolonged capillary refill · Warm shock: wide pulse
> pressure, bounding pulses, flushed skin with rapid capillary refill · Altered
> conscious state: irritability (inconsolable crying or screaming), lethargy
> (including as reported by family or other staff) · Limb tenderness or
> difficulty mobilising"
>
> "For all children, also consider haematological causes and review for:
> Hepatomegaly or splenomegaly · Lymphadenopathy · Swelling or erythema of joints"

And the mechanical causes, which turn out to decide the packet's central ruling:

> "Mechanical: Vomiting or coughing - occurs in the distribution of the superior
> vena cava which is above the level of the nipples · **Local physical pressure eg
> holding child during procedure, tight tourniquet** · Non-accidental injury or
> accidental injury"

### The second complaint guideline, verbatim (source 4)

> "Children commonly present to the Emergency Department with a non-blanching
> rash (accounting for approx. 2% of all attendances) +/- fever and other
> systemic features of illness. The minority of children with invasive bacterial
> infections, such as meningococcal disease (MCD), must be distinguished from the
> majority of individuals presenting with a non-blanching rash secondary to a
> benign self-limiting illness (**>90% of paediatric hospital presentations with
> NBR do not have MCD**)"
>
> "Petechiae: pinpoint-sized capillary haemorrhages (< 2mm in diameter) ·
> Purpura: essentially coalesced petechiae measuring > 2mm · **Ecchymoses:
> lesions of a similar appearance to purpura, but > 1cm in size (i.e. bruises)**"
>
> "**If in any doubt – Treat as Meningococcal disease**"
>
> "Indicators of meningococcal disease (or other serious bacterial infection)
> include: The unwell child · Purpura > 2mm diameter (unless clinical picture
> suggestive of HSP) · Abnormal blood indices"

The four named differentials, verbatim, filtered to their child-facing features:

> **HSP** — "Classical symmetrical distribution of palpable purpura -
> predominantly over the child's buttocks, lower limbs and ankles · Often
> associated with arthritis, peripheral oedema and colicky abdominal pain ·
> Diagnosis is uncommon < 2yrs of age; usually manifests between 3 – 10yrs ·
> often preceded by an URTI"
>
> **ITP** — "Most common haematological cause of a non-blanching rash · Affected
> children are typically well · **60% have a preceding viral infection** ·
> Petechiae, purpura and bruising are often present in sites of frequent mild
> trauma"
>
> **Acute Leukaemia** — "Typically short history (manifesting over days-to-weeks)
> · Consider in children with: hepatosplenomegaly, lymphadenopathy, **easy
> bruising, petechiae (in absence of trauma)**, pallor, fatigue, weight loss,
> bone +/- joint pain"

### The other half of the complaint, verbatim (sources 6 and 7)

The meningococcal literature describes one rash. Source 6 describes eighteen,
and source 7 describes them again in a family's words. What a child can feel,
per condition:

> **Eczema** (6) — "Itchy, chronic, inflammatory skin disease that has remitting
> and relapsing course"; NICE severity bands, verbatim: "Mild — Areas of dry
> skin, **infrequent itching** · Moderate — Areas of dry skin, **frequent
> itching**, redness · Severe — Widespread areas of dry skin, **incessant
> itching**, redness … bleeding, oozing, cracking"
>
> **Urticaria** (6) — "Weals: circumscribed, raised erythematous plaques with
> central pallor · Map-like pattern that changes shape or size · Usually resolves
> within hours · Angioedema: subcutaneous swelling to face, hands, feet,
> genitalia · Often goes within hours or days". Triggers: "Virus · Bacteria ·
> food/drug allergy · bee/wasp stings · idiopathic"
>
> **Hand, foot and mouth** (6) — "Highly infectious, several family members/class
> children may be affected · **Fever, sore throat, loss of appetite, malaise,
> mild diarrhoea** · Flat pink patches on sides of fingers, dorsal and palmar
> aspects on the hands and feet · Small elongated greyish blisters follow and then
> peel off within a week". Source 7: "**mouth ulcers** · spots and blisters on the
> palms of the hands and soles of the feet … If eating and swallowing is
> uncomfortable, give them soft foods"
>
> **Impetigo** (6) — "Commonly affects exposed sites eg face (mouth, nose), minor
> grazes or bites and excoriated eczema · Single or multiple irregular crops of
> golden crusted plaques · Systemic illness rare but mild fever and malaise may
> occur". Bullous: "Large flaccid yellow fluid filled bullae · **Blisters** burst
> to leave a thin brown crust"
>
> **Eczema herpeticum** (6) — "***Dermatological Emergency*** · Clusters of
> blisters consistent with early cold sores · Punched out lesions · Can cause
> severe systemic illness with fever, lethargy and distress"
>
> **Erythema multiforme** (6) — "Affect extremities spreading along limbs towards
> trunk · **Burning and pruritus sometimes reported** · EM Major: extensive target
> lesions with systemic upset · Severe erosions/ulceration of at least 2 mucosal
> surfaces"
>
> **Measles** (6) — "Koplik spots … appear 24-48 hours before exanthem · Day 4-5:
> blotchy, **non-itchy**, red rash behind ears and **spreads from face down
> towards body**"
>
> **Scarlet fever** (6) — "recent sore throat or impetigo · Sudden fever
> associated with sore throat, cervical lymphadenopathy, headache, nausea,
> vomiting, swollen red 'strawberry' tongue, abdominal pain and malaise"
>
> **Molluscum** (6) — "**Pruritus may be present**"
>
> **Chickenpox** (7) — "An **itchy**, spotty rash is the main symptom … It can be
> anywhere on the body … The spots turn into fluid-filled **blisters**. This can
> be very itchy and some may burst."
>
> **Scabies** (7) — "A scabies rash can be **very itchy** … often found on the
> palms of the hands or the soles of the feet"
>
> **Ringworm** (7) — "a ring-like red or silvery patch on the skin that can be
> scaly, inflamed or **itchy**"
>
> **Prickly heat** (7) — "an **itchy** rash of small, raised red spots. It causes
> a **stinging or prickly sensation** on the skin"
>
> **Cellulitis** (7) — "The affected area will be: red · **painful** · swollen ·
> hot. Children may also have a fever."
>
> **Hives** (7) — "It can be known as: hives · urticaria · weals · welts ·
> **nettle rash** … a raised, **itchy** rash"

**Itch is the single most repeated child-facing feature in this literature.**
Six conditions in source 7 and three in source 6 name it; source 6 grades eczema
severity *by how often the child itches*. It is the one thing the meningococcal
pathways never mention.

### The family-facing red flags, verbatim (source 7)

The closest thing in the sources to a list of things a **non-clinician** could
notice, and the direct counterpart of the sore-throat packet's NHSGGC triad:

> "Phone 999 or go to A&E if: Your child is unwell with a rash and: has a stiff
> neck · is bothered by light · seems confused · has a high temperature · has
> difficulty breathing … · **has a rash that looks like small bruises or bleeding
> under the skin and does not fade when you press a glass against it** · their
> skin, lips or tongue look pale, blue, grey or blotchy"

And the skin-tone line, which is the only constructive one found in any source:

> "**On brown and black skin, it may be easier to see the rash or colour changes
> on the soles of the feet, palms, lips, tongue and inside the eyelids.**"

Four of that seven-item 999 list become items (4, 5, 6, 3). One — "seems
confused" — is an observation of the child by someone else and stays excluded.
Two are the blanching test and skin colour, and are the subject of the next
section.

### The fever threshold problem, and it is smaller than usual

| Source | Threshold |
|---|---|
| PiC enrolment (5) | *"reported or recorded fever (≥38 °C)"* |
| NICE CPG via (5) | *"requires a fever (or history of fever)"* — no number |
| NBL via (5) | **no fever criterion at all** |
| NG240 (1) | fever, with numbers given only for babies under 6 months |
| NG143 (2) | 38 °C / 39 °C thresholds, but for under-3-month and 3–6-month bands |
| RCH (3), NHSGGC (4) | *"fever"*, no number for the age range this app covers |

Same resolution as the last three packets: **capture the raw fact, let the nurse
classify.** The child says whether they feel hot or shivery (item 6); the nurse
holds the thermometer. The child never sees a number and never hears the word
"fever". What is different here is that **the fever question is not decorative**:
under the NICE pathway it decides whether the child is in the pathway at all.

## The blanching ruling

The most consequential decision in this packet, reasoned rather than assumed,
because it goes the opposite way to what the literature's weighting would
suggest.

**What the sources ask for.** Every guideline read routes on it. Source 1's
first red flag is a *"haemorrhagic, non-blanching rash"*. Source 3 defines the
whole complaint by it. Source 4 titles itself with it. Source 7 puts it in a
999 list. Source 2 tells clinicians to teach parents *"how to identify a
non-blanching rash"*. If this app could get one fact from a child about a rash,
this would be the one worth having.

**Who performs it.** Source 3, verbatim: *"a drinking glass can be applied firmly
against a rash - if the rash does not disappear it is non-blanching."* Source 7,
verbatim: *"does not fade when you press a glass against it."* Source 2 teaches
it **to parents and carers**. In no source read is it a thing the patient does to
themselves. It is an examination — an adult, a glass, firm pressure, and a
judgement about what happened underneath.

**Four reasons it does not survive the self-report filter, in descending order of
force.**

1. **Two of the sources list pressure on skin as a *cause* of the sign.** Source
   3's mechanical causes, verbatim: *"Local physical pressure eg holding child
   during procedure, tight tourniquet"*, and *"Vomiting or coughing - occurs in
   the distribution of the superior vena cava"*. Source 4 says the same:
   *"Mechanical (secondary to transient increases in vascular pressure e.g.
   straining, coughing or vomiting)"*. So a question that prompts a frightened
   6-year-old to press hard on their own arm to see whether the spots go away is
   a question that can **manufacture petechiae**. This is not a worry about
   wording; it is the sources' own aetiology list, and it alone is sufficient.
2. **The judgement is not one a child can make.** "Did the spots fade?" requires
   sustained pressure, a view of the skin *through* the pressing object, and a
   comparison against how the skin looked a second earlier. Source 2's response
   to the same difficulty in **adults** is to teach them; the app cannot teach,
   and a child who does not understand the test will answer the question's shape.
3. **It is worse, and unevenly worse, across skin tones.** Source 1: *"rashes can
   be hard to detect on brown, black or tanned skin"*, twice, and its remedy is to
   look at the conjunctivae — which is an examination of the eye, not something a
   child does. A self-reported blanching answer would therefore be least reliable
   for exactly the children for whom the sign is hardest to see, which is an
   equity harm with a specific direction, not a general caveat.
4. **A false negative here is the worst possible output.** Source 1's 1.1.10:
   *"Do not rule out meningococcal disease just because a person does not have a
   rash."* A child answering "yes, they go away when I press" produces something
   that reads to a nurse as a *finding* and points at the reassuring branch of the
   most time-critical pathway in paediatrics. Source 4's ruling for exactly this
   situation is *"If in any doubt – Treat as Meningococcal disease"*, and a
   child's guess removes the doubt in the wrong direction.

**Ruling: excluded, in every form, and enforced.** No question may ask about
blanching, fading, pressing, pushing, squeezing or the glass test; no question
may ask what the spots look like in a way that invites the child to test them.
This is item 25 in the table and is enumerated in `bannedPhrases`, not left in
prose.

**What is asked instead, and why it is not a substitute.** Item 2 asks whether
there are more spots than when it started. Source 1's *second* red flag is
*"rapidly progressive and/or spreading non-blanching petechial or purpuric
rash"*, and source 3's second History bullet is *"Rapid onset and/or rapid
progression of symptoms and rash"*. **Spreading is the half of the red flag a
child can genuinely observe**, because it needs no test, no glass and no
judgement about colour — only a memory of how many spots there were at
breakfast. It is not a proxy for blanching and must never be presented as one.
It is a different criterion from the same recommendation.

**And the closest near-miss, recorded so nobody re-litigates it.** Source 7's
family-facing wording is *"a rash that looks like small bruises or bleeding under
the skin"*. "Bruise" is a word a 6-year-old owns, so a question of the form "do
the spots look like tiny bruises?" is tempting and is **also excluded** — it asks
a child to classify morphology and colour, it fails reason 3 above just as
badly, and "bleeding under the skin" is a frightening image to put in front of a
child who is already worried about their skin. Item 14 asks about **bruises the
child cannot account for**, which is a memory question, not a morphology one.

## Colour is not askable either

A separate exclusion, because it will otherwise be reinvented.

Almost every condition in sources 6 and 7 is described by colour: *golden
crusted*, *yellow-brown crust*, *bright red*, *silvery*, *blotchy pink*, *dark
and dusky*, *greyish blisters*, *pale, blue, grey or blotchy*. It is how
dermatology is written.

**A child cannot report it usefully, and the failure is not evenly distributed.**
Source 1 says twice that these findings *"may be difficult to see on brown, black
or tanned skin"*. Source 7 is the only source read that says anything
constructive — *"On brown and black skin, it may be easier to see the rash or
colour changes on the soles of the feet, palms, lips, tongue and inside the
eyelids"* — and every place it names is a place someone else has to look. On top
of that, colour naming in 4–7 year olds is a developing skill in its own right,
and the app has no way to distinguish "it's red" meaning erythema from "it's
red" meaning that is the child's word for a mark on skin.

**Ruling: no question asks the colour of a rash, and colour words are in
`bannedPhrases`.** If a colour matters, the nurse is looking at the child.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Have you got spots or a rash** | NG240 (1) — the rash is the subject of 1.1.9, 1.1.10 and 1.1.12; NG143 (2) — *"Non-blanching rash"* in the red traffic-light row; RCH (3) — the whole guideline; NHSGGC (4) — *"Children commonly present … with a non-blanching rash"*; Whittington (6) and NHS inform (7) — eighteen and fourteen named rashes | **yes** | **The entry item, and the one that closes three packets' open items.** Carries `fact: 'rash'`, so it supersedes `chest-rash`, `tummy-rash` and `back-rash` (and would supersede `s-021` if `s-021` carried the fact — see "What this packet closes"). Note that the child arriving here has said only *"on my skin"*; they have not said they have a rash, so this is a real question and not a restatement of the gate. **A "no" is not reassurance**: NG240 1.1.10 forbids it, and nothing downstream may present it as one. |
| 2  | **Are there more spots than when it started** | NG240 (1) — red flag: *"rapidly progressive and/or spreading non-blanching petechial or purpuric rash"*; RCH (3) — History: *"Rapid onset and/or rapid progression of symptoms and rash"*; Whittington (6) — measles *"spreads from face down towards body"*, EM *"spreading along limbs towards trunk"* | **yes** | **The flagship item, and the half of NICE's second red flag that a child can actually observe.** No test, no glass, no colour judgement — only a comparison against a memory. See "The blanching ruling" for why it is not a substitute for the criterion it sits beside. Distinct from `spread-since-before`, which is a `RECURRENCE` question about a *previous report* and only fires on the same-as-before path; this is within-episode. |
| 3  | **Is it hard to breathe** | NHS inform (7) — 999 list: *"has difficulty breathing (you may notice grunting noises or their tummy sucking under their ribs), breathlessness, or they're breathing very fast"*; Whittington (6) — urticaria/angioedema *"subcutaneous swelling to face, hands, feet"*; NG240 (1) — *"Tachypnoea, apnoea, and grunting"* | **yes** | Carries `fact: 'hard-to-breathe'`, already shared by `c-001`, `s-014` and `t-017a`. **All three of those are scoped `inside`, so on the `surface` branch not one of them fires** — a child with hives on their arm and a swelling airway is currently asked nothing about breathing by any packet. That gap is the reason this item ranks third. The observer half (grunting, recession, respiratory rate) stays in item 26. |
| 4  | **Is it hard to turn your head** | NG240 (1) — red flag combination *"neck stiffness"*, and table 1's gloss *"including more subtle discomfort or reluctance to move the neck"*; NG143 (2) — *"Neck stiffness"* in the red row and among the meningococcal qualifiers; NHS inform (7) — 999 list: *"has a stiff neck"* | **yes** | The same split the sore-throat packet made at its item 9: *neck stiffness* is a sign someone else elicits, but "is it hard to turn your head?" is something a child discovers by trying. **Duplicates the fact behind throat's shipped `s-016`** ("Is it hard to turn your head from side to side?"), which carries no `fact` field — so the two would both be asked to a child who tapped Throat. Needs a shared fact declared on both. See "Still open". |
| 5  | **Do bright lights hurt your eyes** | NG240 (1) — table 1: *"Photophobia"*; NHS inform (7) — 999 list: *"is bothered by light"* | **yes** | Reachable from nowhere else on this branch: the app's `light-hurts` follow-up is scoped to group `head`, and this packet does not fire for `head` at all (see Scope). So for a child with a rash on their leg, this is the only route to a meningitis symptom that is neither an observation nor a body region. Register: "bright lights", never "photophobia", never "light hurts your head" — the last is a headache question. |
| 6  | **Do you feel hot or shivery** | PiC (5) — *"the NICE CPG requires a fever (or history of fever) and NBR"*; PiC enrolment *"reported or recorded fever (≥38 °C)"*; NG143 (2) — the entire guideline is fever + rash; NG240 (1) — *"Fever"*; RCH (3) — the guideline's former title was *"Fever and petechiae"*; NHS inform (7) — 999 list *"has a high temperature"* | **partial** | Carries `fact: 'feels-feverish'`, already asked by `l-007`, `l-008`, `s-020`, `c-023`, `t-019`, `e-019` — and **every one of them is scoped to a group and depth that excludes the surface branch or a different group entirely**, so on a limb-surface tap none fires. **Ranked sixth rather than last, unlike every other packet's fever item**, because here fever is not a general marker: under one of the two competing pathways it decides whether the child is in the pathway at all (source 5). Roadmap row 1 (`general-unwell`) will own this fact; when it ships, whichever question the queue reaches first wins and the rest are suppressed. Child reports the sensation; the nurse measures. |
| 7  | **Is it hard to walk or stand up** | NG240 (1) — table 3: *"Leg pain"*, and table 1: *"Unexplained body pain, including limb, back or abdominal pain"*; RCH (3) — *"Limb tenderness or difficulty mobilising"*, and History *"Association with … joint pain, difficulty mobilising"*; RCH HSP (8) — *"Arthralgia +/- arthritis. Usually affects large joints of lower limbs"*; NHSGGC (4) — HSP *"Often associated with arthritis"* | **yes** | Leg pain is one of the earliest meningococcal features in table 3 and it is filed as a *symptom*, not a sign. Asked as a **function**, not a location, which is what keeps it out of the body-map rejection in item 23: the body map records where it hurts, not what the child can no longer do. Overlaps limb's `l-004`/`l-009` (fact `limb-use`) — but those are scoped `limb`/`inside` and will not fire here. Uses a distinct fact; `limb-use` is region-specific and PLAN.md forbids merging region-specific facts. |
| 8  | **Does it itch** | Whittington (6) — eczema *"Itchy, chronic, inflammatory skin disease"* and the NICE severity bands graded by *"infrequent / frequent / incessant itching"*, molluscum *"Pruritus may be present"*, EM *"Burning and pruritus sometimes reported"*; NHS inform (7) — chickenpox, hives, scabies, ringworm and prickly heat all *"itchy"*; Paller (9) — 22 children aged 6–11 self-reporting their own itch | **yes** | **The most repeated child-facing feature in the whole complaint literature and completely absent from the meningococcal half of it.** Carries `fact: 'itch'`, so it supersedes `tummy-itch`, `limb-itch` and `back-itch`, and closes limb item 8, which the limb packet correctly declined to source from an injury literature. **Overlaps `SENSATIONS.itchy`** — see decision 10 for why it is kept anyway, and "The 4-and-5-year-old problem" for what the age evidence does and does not support. |
| 9  | **Have you got sore spots inside your mouth** | Whittington (6) — HFM, and EM Major *"Severe erosions/ulceration of at least 2 mucosal surfaces"*; NHS inform (7) — HFM *"mouth ulcers"*, *"If eating and swallowing is uncomfortable, give them soft foods"*; NG143 (2) — Kawasaki: *"cracking of lips … erythema of oral and pharyngeal mucosa"* | **partial** | **Not a "does your mouth also hurt" question** — the mouth lesions *are the rash*, in a place the child would never tap on the body map. That is what distinguishes it from item 23's rejections. Asked as a feeling, never as an instruction to look: **no mirrors, no "open wide and check"**, which is the same ruling the sore-throat packet made about the throat and for the same reason. Partial because the child feels soreness; ulcer, vesicle and Koplik spot are the examiner's. |
| 10 | **Are any of the spots like little blisters** | Whittington (6) — bullous impetigo *"Large flaccid yellow fluid filled bullae"*, HFM *"Small elongated greyish blisters"*, eczema herpeticum *"Clusters of blisters"* (a *"Dermatological Emergency"*); NHS inform (7) — chickenpox *"The spots turn into fluid-filled blisters"*, impetigo *"sores and blisters"*, HFM *"spots and blisters"* | **partial** | Vesicular-versus-not is the biggest single fork in source 6's eighteen conditions, one branch of which it labels an emergency in its own words. A child of this age owns the word "blister". **Partial** because vesicle, bulla and pustule are one word to a child and three to a clinician, and because the child must not be asked to burst, pick or deroof one. Never say "pop", "burst" or "pick". |
| 11 | **Does anywhere look puffy or swollen** | RCH HSP (8) — *"Painful non-pitting subcutaneous oedema. Commonly periorbital … and/or dependent areas (hands, feet, scrotum)"*; Whittington (6) — angioedema *"subcutaneous swelling to face, hands, feet, genitalia"*; NG143 (2) — Kawasaki *"oedema and erythema in the hands and feet"*; NHS inform (7) — cellulitis *"swollen"* | **partial** | Four sources, four different conditions, one visible fact. Overlaps limb's `limb-swelling` (`l-016`, `l-017`) — both scoped `limb`/`inside`, so neither fires on this branch. **Register: never "genitalia", "scrotum" or "private parts".** The app must not ask a child about that area at all; a child who is swollen there needs an adult, not a tablet, and the swelling that matters clinically here is the face-and-hands kind a nurse will see anyway. |
| 12 | **Are your hands and feet cold** | NG240 (1) — table 3, cardiovascular: *"Cold hands and feet"*; RCH (3) — *"Cold shock: … cold extremities"* | **partial** | A classic early meningococcal feature that is filed in table 3 as a symptom rather than a sign, and one a child genuinely feels. **Partial** because RCH's version of it is *"cold extremities"* inside a shock definition established by touching the child, and because a cold classroom produces the same answer. Ranked low for that reason, not for its provenance. |
| 13 | **Were you unwell in the last few weeks, with a cold or a sore throat** | RCH HSP (8) — *"Recent upper respiratory tract infection is present in 50% of HSP cases"*; NHSGGC (4) — ITP *"60% have a preceding viral infection"*, HSP *"often preceded by an URTI"*; Whittington (6) — scarlet fever *"recent sore throat or impetigo (streptococcal infection)"* | **yes** | Four sources across three different conditions, all giving a percentage, and plainly child-reportable. **The app already ships this exact question as limb's `l-019`** — *"Were you unwell in the last few weeks, with a cold or sore throat?"* — with **no `fact` field**, scoped `limb`/`inside`. So it will not fire on this branch and the two will not dedupe. Same shared-fact problem as item 4. The wording is carried across unchanged because it is already reviewed, already US-register, and already avoids "poorly". |
| 14 | **Have you got bruises you don't remember getting** | NHSGGC (4) — leukaemia: *"easy bruising, petechiae (in absence of trauma)"*, ITP *"Petechiae, purpura and bruising are often present in sites of frequent mild trauma"*, and *"Ecchymoses: lesions of a similar appearance to purpura, but > 1cm in size (i.e. bruises)"*; RCH (3) — History *"History of trauma/injury"*, and *"Non-accidental injury or accidental injury"* among mechanical causes | **partial**, age 8+ | **Closes the bruise half of limb item 7** (`limb-see`); the cut-and-scrape half is roadmap row 3. *In the absence of trauma* is the discriminator in source 4's leukaemia paragraph, and a memory question is the only child-facing form of it. **Age floor is JUDGEMENT, NOT A CITATION** — no source floors it; the packet's view is that "don't remember getting" is a question about one's own memory, which is a harder thing to answer than the fact it is about, and a 5-year-old will answer the shape. See `minAgeNotes`. **This item touches the non-accidental-injury exclusion and does not perform it** — see "The child-abuse branch". |
| 15 | **Did you bump it or hurt it there** | RCH (3) — History: *"History of trauma/injury"*, and mechanical causes *"Local physical pressure eg holding child during procedure"*, *"Non-accidental injury or accidental injury"*; NHSGGC (4) — *"Mechanical (secondary to transient increases in vascular pressure e.g. straining, coughing or vomiting)"* | **partial** | The other side of item 14, present-tense and about this mark rather than about memory, so it carries no floor. **Redundant for two groups and not for the other seven**: `limb` ships `fell` on its `any` branch (fact `limb-mechanism`, asked at every depth) and `head`'s gate asks mechanism directly — but a child with marks on their chest, back or tummy is asked this by nothing. Ranked low because of that partial overlap, not because the criterion is weak. |
| 16 | **Have you thrown up** | NG240 (1) — table 1 and table 3: *"Vomiting"*; RCH (3) — mechanical: *"Vomiting or coughing - occurs in the distribution of the superior vena cava which is above the level of the nipples"*; Whittington (6) — scarlet fever *"nausea, vomiting"* | **yes** — not proposed for v1 | Genuinely sourced twice over, and interestingly *bidirectional*: vomiting is both a meningococcal symptom and, per source 3, a **mechanical cause** of petechiae above the nipple line — which is a fact about the nurse's interpretation, not about the question. Carries `fact: 'vomiting'` so it would be suppressed for any child who also tapped their tummy. **First item to drop; not proposed for generation in v1.** |
| 17 | **Has anyone else you know got spots too** | RCH (3) — History: *"Sick contacts"*; Whittington (6) — HFM *"Highly infectious, several family members/class children may be affected"*, and the school-exclusion rules attached to impetigo, HFM, rubella and scabies; NHS inform (7) — *"Hand, foot and mouth disease spreads easily"* | **partial** — not proposed for v1 | Real, sourced, and unusually child-knowable in a school setting — a 7-year-old often does know that three children in their class have spots. Filed by RCH under History, which is a carer's section. **Not proposed for v1** because the infection-control decision it feeds is the nurse's and the school's, and because a wrong answer routes a child into or out of exclusion from school. Kept so its absence is a decision. |
| 18 | Duration; speed of onset; how long the rash has been there | RCH (3) — *"Rapid onset and/or rapid progression"*; Whittington (6) — urticaria *"Usually resolves within hours"*, chronic urticaria *"present for > 6 weeks"*, eczema *"remitting and relapsing"*; RCH HSP (8) — *"can take days to weeks to fully develop"*, *"usually resolves within 4 weeks"*, *"recurs at least once, within 4 months"* | **yes** — already collected | `DURATIONS`. The bands cannot express "how fast is it spreading", which is what source 1's red flag actually asks; item 2 gets the direction, not the rate. See "Still open". |
| 19 | Where the rash is; distribution; whether it is on the skin or inside | all sources | **yes** — already collected | Body map plus the depth gate. Note the gate is what routes a child into this packet at all. |
| 20 | How much it hurts; whether it stings or burns | NHS inform (7) — cellulitis *"painful"*, prickly heat *"a stinging or prickly sensation"*; Whittington (6) — EM *"Burning and pruritus"*; RCH HSP (8) — *"Painful non-pitting subcutaneous oedema"* | **yes** — already collected | The FPS-R intensity screen plus `SENSATIONS.burning` ("Hot and stingy") and `SENSATIONS.aching` ("Sore"), both offered on the surface branch. Asking a child to rate or grade anything in words is banned outright. |
| 21 | Itch as a word the child picks | as item 8 | **yes** — already collected | `SENSATIONS.itchy` ("Itchy"), tagged `depths: ['surface']`, and therefore offered to **every** child this packet fires for. This is the strongest redundancy objection to item 8; decision 10 answers it rather than dodging it. |
| 22 | Age | RCH HSP (8) — *"most commonly affects children 2-8 years of age"*; NHSGGC (4) — HSP *"usually manifests between 3 – 10yrs"*; Whittington (6) — slapped cheek *"common in children aged 6 to 10"* | **n/a** — already collected | Setup screen. Every age statement found is about **disease frequency**, not about whether a child can answer; none floors an item. |
| 23 | Headache; tummy pain; joint pain; back pain; earache; diarrhoea | NG240 (1) — red flag combination *"headache"*, table 1 *"Unexplained body pain, including limb, back or abdominal pain"*, table 3 *"Abdominal pain"*, *"Diarrhoea"*; RCH (3) — *"Association with … abdominal pain, joint pain"*; RCH HSP (8) — *"Abdominal pain (50%)"*, *"Arthritis/arthralgia (50-75%)"*; NHSGGC (4) — HSP *"colicky abdominal pain"*, leukaemia *"bone +/- joint pain"*; Whittington (6) — scarlet fever *"headache … abdominal pain"*, HFM *"mild diarrhoea"* | **yes** — **rejected as body-map duplicates** | **The single largest block of rejections in this packet, and the ruling behind it is decision 6.** Every one of these is "does this *other place* hurt too", and every one of them is a body-map region with its own group and its own packet. A child whose head or tummy hurts taps it. The cost is real and is stated in "Still open": **NICE's red flag combination cannot be assembled from this app's inputs**, because fever is item 6, neck stiffness is item 4, headache is the body map, and altered consciousness is the nurse's. |
| 24 | Tiredness; lethargy; irritability; unusual behaviour; malaise; distress | NG240 (1) — table 3 *"Irritability"*, *"Lethargy"*, *"Unusual behaviour"*; RCH (3) — *"Altered conscious state: irritability (inconsolable crying or screaming), lethargy (**including as reported by family or other staff**)"*; Whittington (6) — impetigo, HFM, rubella and scarlet fever all *"malaise"*, eczema herpeticum *"fever, lethargy and distress"* | **no — observer** / **already collected** | RCH's own parenthesis settles it: lethargy is defined here as something *reported by family or other staff*. `MOODS.tired` collects the child's half already, and unlike the rest of the mood list it is offered at every depth. |
| 25 | **Whether the rash blanches; the glass test; petechiae versus purpura; lesion size (< 2 mm, > 2 mm, > 1 cm); palpable versus flat purpura; haemorrhagic character; distribution relative to the nipple line; petechiae in the conjunctivae; the colour of anything** | NG240 (1) — 1.1.9, 1.1.12; NG143 (2) — *"lesions larger than 2 mm in diameter (purpura)"*; RCH (3) — the definitions section and the glass test; NHSGGC (4) — the size definitions and *"Purpura > 2mm diameter"*; NHS inform (7) — the 999 list | **no — exam** | **The central exclusion, argued in full in "The blanching ruling" and "Colour is not askable either".** Every criterion the two competing pathways actually route on is in this row. A packet that quietly generated a child-facing version of any of them would be the exact failure the brief exists to prevent — and, uniquely here, could also *cause* the sign. Enumerated in `bannedPhrases`. |
| 26 | Ill appearance; pale, mottled or cyanosed skin; capillary refill time; heart rate; respiratory rate; blood pressure and pulse pressure; cold or warm shock; grunting, recession, work of breathing; altered consciousness, confusion, delirium; the "ILL" criteria; seizures | NG240 (1); NG143 (2); RCH (3); NHSGGC (4) — *"The 'ILL' Criteria: Children should be considered unwell when they have the following features"*; NHS inform (7) — *"seems confused"*, *"skin, lips or tongue look pale, blue, grey or blotchy"* | **no — observer / measurement** | Every branch point in source 4's algorithm is built from this row. Source 1 adds the caution that *"Ask the person … if they have taken antipyretics, because this may make ill appearance harder to identify"* — which is a carer's answer about a clinician's judgement, two removes from the child. |
| 27 | Morphology and classification: weals with central pallor; target lesions; golden crust; flaccid bullae; punched-out lesions; Koplik spots; strawberry tongue; peri-oral pallor; satellite papules; central umbilication; scale; excoriation and lichenification; the NICE eczema severity bands | Whittington (6) throughout; NG143 (2) — Kawasaki features; RCH (3) | **no — exam** | The *classification* of item 1's raw fact, and the entire content of source 6. A child sees spots; a clinician sees a target lesion. Source 6 grades eczema by how often the child itches — the **grading** is the clinician's, the **itching** is item 8, and the two must not be fused. |
| 28 | Hepatomegaly, splenomegaly, lymphadenopathy, joint swelling or erythema, hypertension, growth and height centile | RCH (3) — *"also consider haematological causes and review for: Hepatomegaly or splenomegaly · Lymphadenopathy · Swelling or erythema of joints"*; NHSGGC (4); RCH HSP (8) — *"Blood pressure must be measured at initial presentation"* | **no — exam** | Palpation and measurement. Never ask a child to feel their own abdomen or neck — the same ruling the sore-throat packet made about cervical nodes, and the word "glands" is banned here for the same reason. |
| 29 | Full blood count, film, U&Es, bone profile, LFTs, LDH, coagulation screen, CRP, procalcitonin; blood and urine cultures; urinalysis; meningococcal PCR and LAMP-MD; bacterial swabs; fungal culture; lumbar puncture; imaging | NG240 (1); RCH (3); NHSGGC (4); PiC (5) — the point-of-care testing arm; Whittington (6); RCH HSP (8) | **no — lab / imaging** | Recorded so a future run does not look for a proxy. Source 1 is explicit that they do not rule out: *"Do not rule out meningococcal disease based only on a normal CRP, PCT or white blood cell count."* |
| 30 | Immunisation status; prior antibiotic treatment; immunosuppression; previous invasive bacterial infection; travel; medication history; known food, drug or sting allergy; family history | RCH (3) — History bullets 1, 3, 4, 7; NG240 (1) — the risk-factor recommendations 1.1.8 and 1.1.14; Whittington (6) — urticaria triggers *"food/drug allergy · bee/wasp stings"* | **no — carer or record** | Six of source 3's eight History bullets are in this row. A 6-year-old does not know their MenB schedule, and **naming a trigger to a child prompts the answer** — "did a bee sting you?" produces a yes from a child who wants the question to be over. |
| 31 | Non-accidental injury | RCH (3) — *"Non-accidental injury or accidental injury"* listed among mechanical causes, and *"See also … Child abuse"* at the head of the guideline | **no — deliberate exclusion** | See "The child-abuse branch". |
| 32 | Anaphylaxis and angioedema of the lips, tongue or airway; known allergen exposure | Whittington (6) — angioedema; NHS inform (7) — 999 list | **no — different complaint** | Out of scope with its own emergency pathway, the same exclusion the sore-throat packet made. **Item 3 is the child's half and is the only part carried.** |
| 33 | Weight loss; night sweats; pallor; fatigue as a leukaemia cluster; school exclusion decisions; contact tracing and prophylaxis | NHSGGC (4) — leukaemia features; Whittington (6) — *"School exclusion rules apply"* under five conditions | **no — carer, record or decision** | A child does not know their weight trend, and school exclusion is a decision made about the child, not by them. |

**Yield: ~55 distinct criteria across 2 competing clinical practice guidelines
(compared head-to-head only at one remove, via source 5), 5 complaint-organised
or family-facing guidelines and 2 self-report instruments → 9 clean, 8 partial,
~32 excluded, 6 already collected elsewhere in the app.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 →
14 (30%); sore throat ~53 → 12 (23%); **rash ~55 → 9 clean (16%).** The lowest
proportion of any packet so far, and, as with sore throat, the reason is
structural rather than a shortfall in searching — but it is a *different*
structure. Sore throat's problem was that its two load-bearing variables are
inside the mouth and under the fingers. This packet's problem is that **the
finding it exists to describe is a visual one**, and a rash is the one class of
complaint where the person best placed to look at it is not the person who has
it. Six of the nine clean items are not about the rash at all; they are about
what else the child feels.

## The 4-and-5-year-old problem

The app's `young` tier starts at 4. Every itch instrument this search found
starts at 6.

| Instrument | Age | Who answers |
|---|---|---|
| Worst Itch Scale (9) | **6–11** | the child |
| KidsItchyQoL / ItchyQuant, per source 9's introduction | **6–7** upward | the child |
| PROMIS PIQ-C, per source 9's introduction | **≥ 8** | the child |
| ISS-Ped (10) | 2–18 | **the caregiver** |

Source 9's evidence for the child's half is good and worth quoting exactly:

> "Whenever possible, **the child read and completed the two items alone**. When
> required, a caregiver (parent or other) read the questions and response options
> aloud to the child, but **caregivers were instructed not to influence or
> question the responses** provided by the child."

Three findings from its cognitive debriefing that bear directly on how this app
asks anything:

> "**none of the participants could accurately interpret and use the recall
> period description 'the previous 24 h'**"
>
> "The recall period description 'from the time you went to bed last night until
> right now' was lengthy, wordy and confusing to almost all participants."
>
> "4 children (**3 aged 6 years and 1 aged 7 years**) preferred that the
> interviewer read the items aloud while they followed along silently"

The first two are a direct hit on `DURATIONS`. If 6-to-11-year-olds could not
use "the previous 24 hours", the app's `yesterday` band ("Since yesterday") is
being asked of children who may not parse it either, and the third finding says
the youngest children in that study wanted the questions read to them — which
the app does not do.

**And source 10 is a warning about the whole method.** The ISS-Ped paper is
titled as a validation "in children and adolescents", and it is a **caregiver**
instrument: *"the scale was applied to 42 parents of children aged between 2 and
18 years old"*. Worse, and honestly reported by its authors:

> "it was necessary to change the mode of its application. It changed from a
> self-applied scale to a face-to-face interview. In the initial phase of the
> pilot study, **the caregivers did not read the questions, chose answers at
> random, and failed to answer all of the questions**."

If adults given a written itch questionnaire answered at random until someone
sat with them, no confidence should be placed in an unsupervised 4-year-old with
a tablet.

**Ruling: no age floor on item 8, and the absence of a floor is itself recorded
as a limitation rather than as a finding.** The brief is explicit that a validity
floor on an item that is also plain history in a complaint guideline setting no
floor is an invention: itch is plain history in sources 6 and 7, neither of which
floors it, and children in this age range are asked about itching in ordinary
clinical practice every day. Inventing `minAge: 6` from an atopic-dermatitis
trial's enrolment criteria would be exactly the fabricated citation the brief
warns about. **But the honest statement is that this packet has no evidence at
all about a 4- or 5-year-old reporting itch, in either direction**, and the
`young` tier therefore carries more risk here than the `older` tier. Same
conclusion the sore-throat packet reached about its own source 8, reached again
by a different route, and it should be reviewed as such.

## The child-abuse branch

Source 3 lists *"Non-accidental injury or accidental injury"* among the
mechanical causes of petechiae and purpura, and links **"Child abuse"** in its
"See also" line at the top of the guideline. So bruising in an unusual
distribution, in a child who cannot account for it, is on this guideline's own
differential — and item 14 asks a child whether they have bruises they do not
remember getting.

**Decision: the NAI branch is excluded outright, item 14 is not a screening
question, and both facts are stated here so that neither is discovered by
accident.**

- Item 14 exists because source 4's leukaemia paragraph turns on *"petechiae (in
  absence of trauma)"* and source 4's ITP paragraph on bruising *"in sites of
  frequent mild trauma"*. It is a haematology item. It is cited as one.
- **It is not a safeguarding instrument and must never be presented as one.** No
  question may ask who caused a mark, whether anyone hurt the child, or whether
  the child is frightened of anyone. Safeguarding is a trained adult's
  conversation with a trained adult's protocol, and a tablet in a corridor is the
  worst possible venue for it.
- The child's answer nevertheless lands on a nurse's screen, and a nurse reading
  "bruises they can't account for" may act on it. **That is the nurse's decision
  to make with the whole child in front of them**, and the nurse-facing surface
  must not present item 14's answer with any interpretive framing at all.

Same conclusion, and the same reason, as head injury's non-accidental-injury
exclusion and the tummy and sore-throat packets' abuse exclusions — reached for a
fourth time, and this is the first packet where the excluded branch and a
proposed item touch the same fact.

## Wording cautions

Ban **concepts**, not phrasings. Every caution below is transcribed into
`meta.bannedPhrases` as a `[regexSource, why]` pair; a caution that lives only in
prose is not enforced by `scripts/screen.mjs`.

- **Never name a condition to the child.** Not meningitis, meningococcal,
  septicaemia, sepsis, measles, chickenpox, varicella, scarlet fever, rubella,
  slapped cheek, fifth disease, hand-foot-and-mouth, impetigo, eczema,
  dermatitis, urticaria, hives, scabies, ringworm, molluscum, psoriasis,
  cellulitis, Henoch-Schönlein, purpura, petechiae, ITP, leukaemia, cancer,
  Kawasaki, herpes, shingles, anaphylaxis. **This is the most dangerous packet in
  the repository for this rule**, because the condition names here are words a
  child has actually heard: a six-year-old knows what chickenpox is and has
  probably heard an adult say "meningitis" in a frightened voice. A named disease
  in a question to a scared child **is a suggested diagnosis**, and it is one the
  child will repeat to their parent.
- **Never ask about blanching, fading, or the glass test, and never instruct a
  child to press, push, squeeze, poke, prod or rub their own skin.** Argued in
  full above. Two sources list local pressure as a cause of petechiae, so this
  ban prevents a harm and not only a bad answer. Note that this deliberately does
  **not** reach the shipped hand-written `chest-press`, which is outside this
  packet's scope and was ruled to stay on 2026-09-06; a future chest-`surface`
  packet inherits the argument, not this one.
- **Never ask the colour of anything.** Not red, pink, purple, blue, black,
  brown, dark, pale, blotchy, silvery, golden, dusky. Argued in full above:
  unreliable from a child, and unevenly unreliable across skin tones in a
  direction that harms the children the sign is already hardest to see on.
- **Never ask about size, and never ask a child to count spots.** Source 1's red
  flag turns on *"larger than 2 mm"* and source 4 defines three lesion classes by
  size; a child asked to estimate a millimetre or to count fifty spots produces a
  number that reads to a nurse as a measurement. Item 2 asks *more than before*,
  which is a comparison, not a count.
- **"Spots" and "rash" are not interchangeable and a question must offer both.** A
  US child of this age may not use the word "rash" at all — "spots", "bumps",
  "marks" and "a thing on my skin" are what they say — while an adult writing the
  question reaches for "rash" automatically. The app's own shipped wording
  ("Are there spots or a rash?") already gets this right and is the register to
  match. Enforced with a lookahead: a candidate that says "rash" without also
  offering "spots" is rejected.
- **Never say "nappy".** Source 1's own text is *"check all over the body
  (including nappy areas)"* — British. US is "diaper", and this packet asks about
  neither: the app has no diaper-age users and must not ask a child about that
  area at all. "Genitalia", "scrotum", "groin" and "private parts" are banned with
  it.
- **Never say "poorly" or "off colour".** Both are British and both appear in
  guideline-adjacent register. "Poorly" reads to a US child as an adverb, not as
  "unwell", and "off colour" additionally collides with the colour ban. Item 13's
  shipped wording — *"Were you unwell in the last few weeks…"* — is the model.
- **Never say "plaster".** US is "Band-Aid". `HELPS.bandage` already says "A
  bandage", which is the register; the temptation here is a wound-care question,
  and wound care is roadmap row 3 anyway.
- **Never say "nettle rash", "weals" or "welts".** Source 7 lists all three as
  names for the same thing, and all three are British or clinical. "Hives" is
  banned as a condition name, above.
- **Never use dermatology register.** Not macule, papule, vesicle, bulla,
  pustule, lesion, exanthem, erythema, oedema, pruritus, excoriation,
  maculopapular, target lesion, Koplik, strawberry tongue, desquamation,
  non-blanching. Say "spots", "blisters", "puffy", "itchy".
- **Never say "bleeding under the skin" or "blood spots".** It is source 7's
  family-facing wording, written for an adult, and it is a frightening image to
  hand a child who is already worried about their own skin.
- **Never tell a child their rash is catching, or ask whether they might give it
  to someone.** Source 6 attaches school exclusion to five conditions and calls
  HFM *"highly infectious"*; a child told they are contagious will conceal the
  next rash. Item 17 asks about **other people's** spots, never the child's
  transmission.
- **Never instruct a child to look at, uncover, or examine themselves.** No
  mirrors, no "lift up your top", no "look inside your mouth", no "check your
  back". Item 9 asks what the mouth **feels** like for precisely this reason,
  and source 2's instruction to *"check all over the body"* is addressed to a
  clinician, not delegated by an app to a seven-year-old.
- **Never say "fever"**, never ask for a temperature, never mention degrees.
  Same ruling as three previous packets.
- **Never ask a child to rate or grade anything in words** — not the itch (source
  9 has a scale for that and this app does not use it), not the rash, not the
  pain. Already banned globally.
- **Never present a "no" as reassurance.** NG240 1.1.10 is explicit that the
  absence of a rash does not rule out the disease. This is a constraint on the
  nurse-facing surface and on any summary text, not on question wording, and it
  cannot be enforced by `screen.mjs` — carried to "Still open".
- Avoid "still" (banned globally), and avoid "serious", "dangerous", "bad",
  "severe" (banned globally).

## How these were found

Search A was run as the brief specifies — comparison and validation literature,
not a remembered guideline name — and it returned something the previous four
packets did not: **there is no prediction rule to find.** Source 5 says so in
its own words, and the NIHR/James Lind Alliance priority it cites exists
*because* there is none. What Search A actually enumerated was two competing
clinical practice guidelines, their head-to-head accuracy, and the fact that
those accuracy figures predate the MenB and MenC vaccines. Recall would have
produced "NICE" and stopped; it would not have produced the
Newcastle–Birmingham–Liverpool algorithm, and it certainly would not have
produced the sentence that the two differ on **whether fever is required at all**,
which is the single most decision-relevant thing in this packet's Search A haul
and which changed item 6's rank.

Search B is where the packet came from, and here the gap is wider than in any
previous packet — wide enough that the two searches barely describe the same
complaint.

- **Search A's literature is about one disease.** Meningococcal disease is, by
  source 4's own figure, absent in **more than 90%** of children who arrive with
  a non-blanching rash — and a non-blanching rash is only ~2% of ED attendances
  to begin with. Every criterion Search A produced routes on blanching, lesion
  size, vital signs and bloods. **Not one of them is child-reportable.** A packet
  built from Search A alone would contain zero questions.
- **Search B's literature is about eighteen diseases and mostly about itching.**
  Sources 6 and 7 between them describe urticaria, eczema, chickenpox, HFM,
  impetigo, scabies, ringworm, prickly heat, molluscum, measles, rubella, slapped
  cheek, scarlet fever, erythema multiforme, eczema herpeticum, cellulitis,
  psoriasis and staphylococcal scalded skin. Itch, blisters, mouth ulcers, sore
  swollen skin and a preceding cold — items 8, 9, 10, 11 and 13 — **appear in no
  Search A source whatsoever.**
- **And the two overlap on exactly one item.** Item 2, "are there more spots than
  when it started", is the only item in this packet that both literatures
  support: it is NICE's second red flag *and* it is how source 6 describes
  measles and erythema multiforme spreading. Everything else belongs to one
  search or the other.

The sore-throat packet's closing advice was: Search A tells you what the field
measures, Search B tells you what the complaint can do to the child, and when
they diverge, rank by Search B. **This packet is the case where that advice needs
amending.** Here the two searches describe *different populations*, not different
priorities — the 2% and the 98% — and the ranking that falls out is neither
"Search A first" nor "Search B first" but **"the emergency items first even
though they are the rarer population, because the common population is not an
emergency"**. Items 2 to 7 are the 2%; items 8 to 13 are the 98%; and the cap of
five or six questions means the 98% gets the tail of the list. That is a
deliberate trade and a reviewer should confirm it, because the great majority of
children this packet serves will have eczema, hives or chickenpox and will be
asked four questions about meningitis first.

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with the tummy, throat, chest and limb
   packets.** Skin and rashes are a new vocabulary domain and the sources are
   British and Australian throughout, so the ruling is made before anything is
   generated:
   - **"spots or a rash"** — both, always, in that order, matching the app's
     shipped `chest-rash` / `tummy-rash` / `back-rash` wording. Never "rash"
     alone, never "eruption", never "breaking out".
   - **"itchy"** / **"does it itch"** — not "pruritic", not "irritated", not
     "scratchy". "Itchy" is already `SENSATIONS.itchy`'s label, so the app is
     already committed to the word.
   - **"blisters"** — not "bullae", not "vesicles", not "water blisters", not
     "bubbles". A child of this age owns "blister".
   - **"puffy or swollen"** — carried unchanged from limb's `limb-swollen`
     ("Does it look puffy or swollen?"), because it is the same fact and a second
     ruling would gain nothing.
   - **"sore spots inside your mouth"** — not "ulcers", not "mouth sores", not
     "lesions". "Ulcer" is a word a child may know from a different and much
     more frightening context.
   - **"unwell"** — not "poorly", not "off colour", not "under the weather".
     Carried unchanged from limb's `l-019`.
   - **"a cold"** — not "a bug", not "a virus", not "coryza". Matches ears'
     `e-005` ("Do you have a cold at the moment?").
   - **"bruises"** — the plain word, and the only morphology word this packet
     permits, because it is item 14's whole subject and because "bruise" is not a
     colour claim.
   - **"Band-Aid"** if a dressing is ever named — never "plaster". Nothing in
     v1 names one.
   - **"throw up"**, **"poop"** — carried unchanged from the tummy packet's
     decision 1, for item 16.
2. **Answer types.** `FollowUpScreen` renders yes/no only. **Corrected 2026-09-08:** this sentence was wrong. `FollowUpScreen` renders `yesno`, `count`, `text` AND `voice` (`src/screens/FollowUpScreen.jsx` lines 133-145). The packet's exclusions below were reasoned from a false premise and any that turned on it should be revisited. **All nine clean items
   and all eight partial items are yes/no.** Nothing here needs a widget the app
   does not have — and note that this is not a coincidence: the two facts that
   would need one (how many spots, how big) are both banned by decision 1's
   parent ruling in "Wording cautions", so the widget question never arises.
3. **`depth: "surface"`, and `groups` is the full list of nine.** The depth scope
   is the entire reason this packet can exist as one packet instead of nine, and
   it is what stops these questions reaching a child whose pain is deep inside.
   `meta.group` is set to `"skin"` — not to one of the nine — so the build's
   coverage report has a key and nobody reads this packet as owning a body area.
   The two structural consequences (internal groups get the questions with no
   gate; `head` gets them only on the `unknown` branch) are documented in Scope
   and one of them is a bug in the app, not in this decision.
4. **The blanching criterion is excluded in every form**, and the argument is in
   "The blanching ruling" rather than in a footnote, because it is the decision a
   reviewer is most likely to want to overturn and the one that most needs its
   reasoning visible. Enforced in `bannedPhrases`, not assumed.
5. **Duration scope, and it inverts the sore-throat packet's shape a second
   time — in the opposite direction.** The sources:

   | Source | Window |
   |---|---|
   | RCH (3) | *"Rapid onset and/or rapid progression of symptoms and rash"* as a History bullet |
   | PiC (5) | ED presentations; no duration criterion stated |
   | Whittington (6) | urticaria *"Usually resolves within hours"*; **chronic** urticaria *"present for > 6 weeks"*; eczema *"remitting and relapsing course"*; HFM *"peel off within a week"*; measles *"Begins to fade after 3-4 days"* |
   | NHSGGC (4) | leukaemia *"Typically short history (manifesting over days-to-weeks)"*; ITP *"remission occurring within ~ 6 weeks"* |
   | RCH HSP (8) | *"can take days to weeks to fully develop"*; *"usually resolves within 4 weeks"*; *"Rash is often the last symptom to remit"*; *"recurs at least once, within 4 months"* |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
   - `not-sure` — **full packet.** Same convention as all four previous packets:
     `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **items 1, 2 and 8 only** (spots or a rash; more spots than
     before; does it itch).

   **The sore-throat packet kept its red flags on `long-time` and dropped its
   score variables. This packet does the reverse.** A rash that has been there
   for a long time is eczema, chronic urticaria, molluscum, psoriasis or ringworm
   — every one of them in source 6, every one of them itchy, and none of them an
   emergency. Meningococcal disease is not a long-time complaint: source 1's red
   flag is *"rapidly progressive"*, and asking a child with three-week-old eczema
   whether the lights hurt their eyes spends a scarce question slot on nothing.
   So on `long-time` the emergency items expire and the **itch** item becomes the
   packet. Item 2 survives into `long-time` because an eczema flare and a
   ringworm patch both spread, so the question means something in both bands —
   the only item here of which that is true.
6. **A cross-cutting packet may ask about a body part the child did not tap only
   when the fact is a function the child performs or a symptom the child feels —
   never "does this other place hurt too".** This is the ruling that decides the
   whole shape of the items table and it is new, because this is the first
   cross-cutting packet:
   - **Kept:** item 4 (turning your head — a function), item 5 (light hurting
     your eyes — a triggered symptom), item 7 (walking — a function), item 12
     (cold hands — a felt state), item 9 (sores inside the mouth — **the rash
     itself, in another place**, which is the strongest case of the four).
   - **Rejected as body-map duplicates:** headache, tummy pain, joint pain, back
     pain, earache (item 23). A child whose head hurts taps their head, and the
     head has its own group, its own gate and its own packet.

   Without this ruling a cross-cutting packet drifts into being a general
   review-of-systems questionnaire, which is a different product and one no
   source here supports.
7. **Age floors: one, and it is judgement.** Item 14 (bruises you don't remember
   getting) carries `minAge: 8`. **No source floors any item in this packet**,
   and the three age statements that exist — HSP *"2-8 years"*, HSP *"uncommon
   < 2yrs"*, slapped cheek *"aged 6 to 10"* — are all about **disease
   frequency**, not about whether a child can answer, exactly as in the
   sore-throat packet. Item 14's floor is the packet's own view that a question
   about what you cannot remember is harder than the fact it asks about;
   recorded in `minAgeNotes` as `JUDGEMENT, NOT A CITATION` so a reviewer can see
   it differs in kind from every other row. **The itch item is deliberately left
   unfloored despite every instrument in the literature starting at 6** — see
   "The 4-and-5-year-old problem" for the full argument and for what that costs.
8. **Item priority, and one question per item.** Seventeen items compete for five
   slots (`young`, or unknown age) or six (`older`), and the cap is spent
   **across** every group the child tapped, so a child who taps their arm and
   their throat gets fewer of these than a child who taps only their arm. Never
   ask two questions from the same item. Order:

   `1 (spots or a rash) → 2 (more spots) → 3 (hard to breathe) →`
   `4 (turn your head) → 5 (bright lights) → 6 (hot or shivery) →`
   `8 (itch) → 7 (hard to walk) → 11 (puffy or swollen) →`
   `10 (blisters) → 9 (mouth) → 12 (cold hands) → 13 (unwell lately) →`
   `15 (bump it) → 14 (bruises)`

   Item 1 leads because it establishes the complaint and because it is the item
   that closes three packets' open items. Items 2 to 5 are the four
   child-reportable halves of source 1's and source 7's emergency lists, ordered
   by how fast the thing they point at kills. Item 6 is sixth rather than last —
   a break from every other packet's treatment of fever — because source 5 shows
   fever deciding **which pathway the child is in**, and because nothing else on
   the `surface` branch asks it. Item 8 is seventh despite being the
   best-supported item in the packet by source count, for the same reason item 3
   ranked third and not first in the sore-throat packet: **being the commonest
   thing is not the same as being the most decision-relevant thing**, and the
   sensation screen already offers "Itchy" to every child this packet serves.
   Items 16 and 17 are not proposed for generation in v1 at all.
   **Proposed, not yet confirmed by review.**
9. **Facts are reused, not invented.** Items 1, 3, 6, 8 and 16 carry the existing
   shared facts `rash`, `hard-to-breathe`, `feels-feverish`, `itch` and
   `vomiting`. Items 4, 7 and 13 **need new shared facts that must also be
   added to questions already shipping** (`s-016`, `l-019`) if the duplication is
   to be prevented; this run writes only two files and did not make those edits.
   Items 2, 5, 9, 10, 11, 12, 14 and 15 introduce facts unique to this packet.
   PLAN.md's rule — merge a fact only when it is **systemic**, one answer about
   the whole child — is why item 7 does **not** take limb's `limb-use` and item
   11 does **not** take `limb-swelling`: both of those are about one limb.
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and every
    other group's hand-written and packet-sourced questions:
    - **Rejected as duplicates:** item 19 (body map and depth gate), item 20
      (FPS-R plus `SENSATIONS.burning` and `SENSATIONS.aching`), item 18
      (`DURATIONS`), item 22 (setup age), item 24's tiredness half
      (`MOODS.tired`), and the whole of item 23 — headache, tummy pain, joint
      pain, back pain, earache — each of which is another body-map region with
      its own group. **This is the largest block of rejections here** and it is
      what separates 9 clean items from 14.
    - **Kept despite overlap, item 8 versus `SENSATIONS.itchy`, and this is the
      closest call in the packet.** `SENSATIONS.itchy` is tagged
      `depths: ['surface']`, and `activeDepths` returns `['surface','inside']`
      when no depth was recorded — so "Itchy" is offered to **every** child this
      packet fires for, with no exception. That is a real duplication and it is
      not hidden. It is kept anyway for three reasons: the sensation screen is a
      **multi-select from twelve options** about how the complaint feels, not a
      direct question, and a child who is worried about their spots may not pick
      it; the app's own precedent is to ship both, since `tummy-itch`,
      `limb-itch` and `back-itch` all coexist with `SENSATIONS.itchy` today; and
      a yes/no answer and an unpicked option in a twelve-item list read very
      differently to a nurse. **The counter-argument is strong enough that this
      is the first item a reviewer should consider cutting**, and cutting it
      would cost the packet its best-supported item and reopen limb item 8.
    - **Conditional, and unresolved in code:** items 4 and 13 duplicate the
      *facts* behind throat's `s-016` and limb's `l-019`, neither of which
      declares a `fact`. The fix is a `fact` field on those two candidates, not a
      change here.
    - **Kept despite cross-group overlap:** item 3 duplicates the fact behind
      `c-001`, `s-014` and `t-017a`, all scoped `inside`; item 6 duplicates
      `feels-feverish` in six shipped candidates, all scoped to groups and depths
      that exclude this branch; item 16 duplicates tummy's `threw-up`. In every
      case the shared fact means the child is asked once and the nurse sees one
      answer.
    - **Adjacent, not redundant:** `HELPS.bandage` ("A bandage") and
      `HELPS.clean-it` ("Someone to clean it") are both `surface` and are both
      offered to this child. They record what the child **wants**; nothing in
      this packet records that. Same distinction the sore-throat packet drew for
      `HELPS.water`.
    - **Not replaced, deliberately:** `chest-press` and `limb-see`. See "What
      this packet closes".
11. **Nothing in this packet is described as clinically reviewed or scientifically
    validated, and the phrase "validated" is used only about the two itch
    instruments, about which it is a quotation from their own titles.** The
    repository owner is a secondary-school student and no clinician has read a
    word of this. It is a literature trace: it says what published guidelines
    assess and which of those a child could answer. It is not a clinical
    instrument, and the sources' own conclusions — source 5's *"paucity of
    relevant evidence"* and source 4's *"If in any doubt – Treat as Meningococcal
    disease"* — are the two sentences a reviewer should keep in mind while
    reading anything above.

## Still open

- **`head` gets none of this packet's questions except on the "I don't know"
  branch** (see Scope). `report.depths` is one map holding two different gate
  vocabularies — `surface`/`inside`/`unknown` for four groups, and
  `injury`/`no-injury`/`unknown` for `head` — and `bankQuestions` compares a
  packet's `depth` against whichever is there. A child with a rash on their face
  who says "it just started hurting" is asked nothing. The fix is probably a
  separate `gates` map, or a `gate` field on the packet naming which vocabulary
  its value belongs to. **Not fixed here — this run writes only two files.**
- **`s-021` has no `fact`.** Throat's shipped rash question does not dedupe
  against `chest-rash` or against this packet's item 1, so a child who taps
  Throat and Chest-surface is asked about spots twice today. One-line fix in
  `packets/throat/sore-throat/candidates.json`; same for `s-016` (item 4) and
  `l-019` (item 13).
- **NICE's red flag combination cannot be assembled from this app's inputs.**
  Source 1 asks for fever **and** headache **and** neck stiffness **and** altered
  consciousness together. Fever is item 6, neck stiffness is item 4, headache is
  a body-map region the child may not have tapped, and altered consciousness is
  the nurse's. The app can deliver at most two of the four, and source 1's own
  1.1.5 says the combination need not be complete — but a reviewer should confirm
  that the nurse-facing surface does not present two of four in a way that reads
  as a partial score.
- **The 98% get the tail of the list.** Decision 8 ranks the emergency items
  first, so most children served by this packet — eczema, hives, chickenpox — are
  asked four questions about a disease they do not have before being asked
  whether it itches. That is defensible and it is also the trade most likely to
  be wrong. A play specialist's and a clinician's view is needed, especially on
  the `young` tier where the cap is five.
- **Duration bands cannot express a rate.** Source 1's red flag is *"rapidly
  progressive"* and source 3's History bullet is *"Rapid onset and/or rapid
  progression"*. `DURATIONS` offers `just-now` through `long-time`, and item 2
  gets direction but not speed. A rash that doubled in an hour and one that
  doubled in a week produce the same two answers. The nurse has the arrival time;
  a reviewer should confirm that is enough.
- **Source 9's recall-period finding may apply to `DURATIONS` itself.** *"None of
  the participants could accurately interpret and use the recall period
  description 'the previous 24 h'"*, in children aged 6–11. The app's `yesterday`
  band is "Since yesterday". This is not a rash question and it is not this
  packet's to fix, but it is the first piece of direct evidence any packet has
  found about how children in this range handle a recall window, and it is
  negative.
- **Nothing enforces "a no is not reassurance".** NG240 1.1.10 forbids ruling out
  meningococcal disease on the absence of a rash, and `screen.mjs` screens
  question wording, not what a nurse-facing surface does with an answer. The
  report contract has no receiving end yet (`STATUS.md`), so this is a
  requirement written down before there is anywhere to write it.
- **Item 14 and the safeguarding boundary.** See "The child-abuse branch". A
  clinician and a safeguarding lead should both confirm that a haematology item
  phrased as a memory question is appropriate to ask a child unsupervised, and
  that the nurse-facing surface presents it without framing.
- **`chest-press` still ships and this packet's wording cautions would forbid
  it.** The chest packet ruled on 2026-09-06 that it stays, as a hand-written
  fallback on the `surface` branch. This packet's blanching argument gives that
  ruling a second, stronger reason to be revisited — pressure on skin is a listed
  cause of petechiae in two of the sources read here — but a chest-`surface`
  packet, not this one, is where that call belongs.
- **The PiC result is unread.** Everything here about PiC describes a protocol.
  A future run should retrieve the 2020 *Lancet Infectious Diseases* paper and
  the Riordan 2016 validation, and revisit whether the two pathways' disagreement
  about fever survived the trial — because item 6's rank depends on it.

## Ambiguity in the sources

Recorded rather than papered over.

- **There is no rule and no score, so there is no predictor list to harvest.**
  Every previous packet extracted variables from named instruments. This one
  extracted them from two guidelines' branch points, and a guideline's branch
  point is not a validated predictor — it is a committee's synthesis. Source 5
  is explicit that the derivation of a clinical decision rule for this population
  *"was identified as a priority for future research"*, which means the field
  itself says the criteria being used are not yet a rule.
- **The accuracy figures are old and were read at one remove.** NICE 97/50 and
  NBL 100/82 come from Riordan 2016, which could not be opened, via source 5's
  reproduction of it — and source 5 immediately says the underlying data
  *"was collected largely before the introduction of meningococcal B and C
  vaccination meaning their performance in the current post vaccination era is
  unknown"*. So the numbers are second-hand **and** expired. Nothing in the items
  table depends on them.
- **The two guidelines disagree about the population and neither is wrong.** NICE
  requires fever plus a non-blanching rash; NBL does not require fever. That is
  not a threshold that can be split and not a bundle that can be atomised — it is
  a difference about who the pathway is for. This packet resolves it by asking
  about fever (item 6) and letting the nurse decide which pathway they are on,
  which is the same move as "capture the raw fact, let the nurse classify"
  applied to an inclusion criterion rather than to a cut-off.
- **Source 3's History section mixes the child's and the record's without
  marking the boundary.** *"Association with bleeding, abdominal pain, joint
  pain, difficulty mobilising"* sits in the same bullet list as *"Immunisation
  status"* and *"Travel"*. As in the sore-throat packet, the self-report filter
  had to be applied to the **criterion**, not to the heading it sits under.
- **Source 6 is a single-trust guideline and its version control sheet is
  incomplete in the extracted text** — one author's surname is truncated. It is
  used only for per-condition presentations, which are ordinary paediatric
  dermatology and are corroborated by source 7 for nine of the conditions; no
  item rests on source 6 alone except item 10's eczema-herpeticum citation, and
  item 10 has four other sources.
- **Source 7 is patient-information material, not a clinical guideline.** It is
  used deliberately, for the same reason the sore-throat packet used NHSGGC's
  discharge advice: it is the only text read that states red flags in words a
  non-clinician is expected to act on, which makes it the best available proxy
  for what a lay observer can notice. It should not be cited for anything else,
  and it is not.
- **Sources 9 and 10 are about itch *intensity*, and this app never asks for
  intensity of itch.** Source 9 supports the claim that a 6-to-11-year-old can
  answer a question about their own itching; it does not support a yes/no
  question being equivalent to an 11-point scale, and no such claim is made. The
  same paper's introduction is the only evidence found about the ages other
  instruments reach, and that introduction is itself a secondary description of
  papers this run could not read.
- **Source 10's title says "in children and adolescents" and the instrument is
  answered by parents.** Read carefully before citing. It is included here as a
  correction to a plausible-looking search result, and because its pilot finding
  — that adults answered a written itch questionnaire at random — is the most
  useful thing about it.

## Tooling

One reproducible bug found while assembling this packet, recorded because the
next agent will hit it.

**`scripts/fetch-source.mjs` collides its cache keys.** `slug()` at line 34 is
`url.replace(/^https?:\/\//,'').replace(/[^\w.-]+/g,'_').slice(0, 80)`. NHSGGC's
paediatric guidelines all live under
`www.clinicalguidelines.scot.nhs.uk/ggc-paediatric-guidelines/ggc-paediatric-guidelines/…`,
which is **81 characters before the guideline's own name begins**. So every
NHSGGC paediatric guideline slugs to the identical filename
`www.clinicalguidelines.scot.nhs.uk_ggc-paediatric-guidelines_ggc-paediatric-guid.txt`,
and the fetcher reported `"cached": true` and returned **the sore-throat
guideline** for a non-blanching-rash URL — silently, with an HTTP 200 and no
warning. Source 4 was therefore fetched with `curl` and a tag-stripping filter
into `packets/.sources/nhsggc-537-non-blanching-rash.txt`, which is why its cache
file is the only one in that directory not named after its URL.

The fix is to append a short hash of the full URL to the truncated slug. **Not
fixed here** — this run writes only `packet.md` and `meta.json` — but it is a
silent-wrong-answer bug in the provenance chain, which makes it more serious than
its size suggests: an agent that did not read the returned text would have
written this packet's NHSGGC quotations from a sore-throat guideline.

`find-in-source.mjs --scan` was also weak on both complaint guidelines (2 and 3
candidate sentences from 8k and 12.7k characters), because guideline red flags
here are **noun phrases in bullet lists**, not imperatives — "Cold hands and
feet", "Photophobia", "Neck stiffness" match no imperative or risk-language cue.
Targeted term windows worked well and no source in this packet was read whole,
but `--scan`'s cues would benefit from a bare-noun-phrase-in-a-list heuristic.
