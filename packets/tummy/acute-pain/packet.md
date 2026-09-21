# Acute abdominal pain

Presenting complaint · packet `tummy-acute-pain` · serves group `tummy`, depth
`inside` · packet v1 · assembled 2026-08-30
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
> who arrives with a sore tummy, and marks which of those a child can report
> about themselves. **Not** a diagnostic tool: nothing here may be scored,
> summed, or shown to a child or nurse as a suggested cause. The literature for
> this complaint is almost entirely *appendicitis* literature; the packet is
> organised by the complaint the child arrives with, and no condition name
> reaches runtime.

## Scope

**Age.** App covers 4–12. Every appendicitis prediction rule found here was
derived at **5 and above**, and says so explicitly:

- pARC: *"given the low risk for appendicitis in children <5 years old and
  increased likelihood of atypical clinical presentations, the pARC score was
  derived and validated in patients 5 to 18 years old."* (source 2)
- Project SPASMS: *"The age range of 5 to < 18 years was chosen due to the
  rarity and the atypical presentation of appendicitis in younger children, and
  many CPSs required variables on history or examination that might be
  difficult to determine accurately in younger children."* (source 3)
- WSES 2020: *"If we consider patients of preschool age, AA often presents with
  atypical features, more rapid progression, and higher incidence of
  complications. This age group is more likely to have lower PAS and Alvarado
  score than those of school-aged children."* (source 4)

This is a **different kind of age floor from head injury's.** NG232's floor on
amnesia was a *capability* floor — a 4-year-old cannot do the task. This one is
a *validity* floor — a 4-year-old can perfectly well say whether jumping hurts;
the rule simply was never derived on them. Items that exist only because a
prediction rule names them therefore carry `minAge: 5`. Items that are also
plain history in a general guideline (source 6) carry no floor, because that
guideline sets none. See decision 7.

**Duration.** Decided in decision 5. In short: `long-time` is out of scope for
everything but item 7, because that band is where Rome IV functional abdominal
pain lives (source 8), which is a different complaint with a different packet.

**Depth.** This packet is the `inside` half of group `tummy`. Rashes, spots and
itching belong to the `surface` packet and **no rash, spot, skin or itch
criterion is carried here**, even though sources 6 and 7 both list rash among
the things they collect. See decision 8 for the pipeline problem this creates.

**Out of scope by age or setting, and not carried:** neonatal and infant
presentations (source 6 lists persistent crying, poor feeding, drawing up legs,
refusal to weight bear — all observer items about a pre-verbal child);
menstrual, sexual and pregnancy history (sources 3, 6, 7 all collect these for
adolescents); HEADSSS psychosocial screening; anything requiring bloods,
urinalysis or imaging.

## Sources

1. **van Amstel P, Gorter RR, van der Lee JH, Cense HA, Bakx R, Heij HA.**
   "Ruling out Appendicitis in Children: Can We Use Clinical Prediction Rules?"
   *J Gastrointest Surg* 2019;23(10):2027–2048. **Read first-hand** via
   PMC6773677. **This is the discovery source** — it names and externally tests
   twelve rules in one cohort: *"the Alvarado score, Christian score, Fenyö
   score, Lintula score, Low Risk Appendicitis Rule (LRAR), Low Risk
   Appendicitis Rule Refinement (LRARR), Modified Alvarado Scoring System
   (MASS), Modified Alvarado score by Shera (MAS-Shera), modified Lindberg
   score, Ohmann score, Pediatric Appendicitis score (PAS), and Raja Isteri
   Penigran Anak Saleha Appendicitis (RIPASA) score."* Its per-rule variable
   tables are in an appendix that is not in the fetched text — see "Ambiguity"
   below.
2. **Kharbanda AB, Vazquez-Benitez G, Ballard DW, et al.** "Development and
   Validation of a Novel Pediatric Appendicitis Risk Calculator (pARC)."
   *Pediatrics* 2018;141(4):e20172699. **Read first-hand** from the
   open-access UC eScholarship PDF (`qt7nh8r5gf`). The best-performing
   history-based model found, and the only one that separates history variables
   from examination variables cleanly enough to filter on.
3. **Lee WH, O'Brien S, McKinnon EJ, Craig S, et al.** "Validation and
   Comparison of Pediatric Appendicitis Scores and Management Strategies
   (Project SPASMS): Protocol for a Prospective Multicenter Observational
   Study." *JMIR Res Protoc* 2025;14:e67941. **Read first-hand** via
   PMC12254709. Contributes the single most useful artefact in this packet: a
   case report form that **itself splits "history of the presenting complaint"
   from "examination findings"**. Caveat: it is a *protocol*. Its variables are
   being tested, not validated. Item 6 depends on it alone and is marked
   accordingly.
4. **Di Saverio S, Podda M, De Simone B, et al.** "Diagnosis and treatment of
   acute appendicitis: 2020 update of the WSES Jerusalem guidelines."
   *World J Emerg Surg* 2020;15:27. **Read first-hand** via PMC7386163.
5. **Vaziri M, Nafissi N, Jahangiri F, et al.** "Comparison of the appendicitis
   inflammatory response and Alvarado scoring systems in the diagnosis of acute
   appendicitis in children." *J Med Life* 2021;14(1):75–80. **Read first-hand**
   via PMC7982267. Reproduces the Alvarado and AIR criteria in one table — but
   the table extracts with its two columns interleaved. See "Ambiguity".
6. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Abdominal pain — acute"**, last updated April 2024. **Read first-hand** via
   `scripts/fetch-source.mjs`. The only source found that is organised by the
   *presenting complaint* rather than by appendicitis. It supplies every item
   in this packet that the prediction rules miss — urinary, stool, respiratory,
   scrotal, ingestion — and it sets no age floor.
7. **Almalki FG, Alqarni NQ, et al.** "Assessment of Acute Abdominal Pain in
   Children Presenting to the Emergency Department: A Retrospective
   Observational Study." *Cureus* 2025;17(6):e85914. **Read first-hand** via
   PMC12256096. Cohort of 235 children aged 3–16 with a chief complaint of
   acute abdominal pain; chronic pain excluded. Gives prevalence for the
   associated symptoms, which is what decides item priority.
8. **Vandenplas Y, Darma A, et al.** "Understanding functional abdominal pain
   disorders among children: a multidisciplinary expert consensus statement."
   *Front Pediatr* 2025;13:1576698. **Read first-hand** via PMC12108103. Used
   **only** to fix the boundary of this packet, not to source any item.
9. **Duberg A, et al.** "Parent–child agreement in reporting somatic distress,
   gastrointestinal symptoms, mental health, and general health in girls with
   functional abdominal pain." *Eur J Pediatr* 2025;184(12):780. **Read
   first-hand** via PMC12640311. The evidence that children of roughly this age
   report GI symptoms consistently. **Limits worth knowing:** 121 **girls only**,
   aged 9–13, mean 10.6, with **chronic** functional abdominal pain in a dance
   and yoga RCT — not an emergency population, no boys, nothing below 9. And
   agreement with a parent is not accuracy. It supports "children of this age
   can report GI symptoms consistently"; it validates nothing for a ward, and
   it says nothing about a 4-, 5- or 6-year-old.

**Attempted and not used.** Kulik DM et al., "Does this child have
appendicitis? A systematic review of clinical prediction rules for children
with acute abdominal pain", *J Clin Epidemiol* 2013 — paywalled on
ScienceDirect, **not read**, and nothing here depends on it. It is named only
because sources 1 and 4 both cite it, and a future run should try harder for it:
its title is the presenting complaint, which is exactly the framing this project
wants.

## The rule(s), as published

### pARC — the history variables, verbatim (source 2)

> "Predictors evaluated for inclusion in the pARC were coded as binary
> variables unless otherwise indicated and included the following: sex, age
> (5–7.9 years old, 8–11.9 years old, or 12–18 years old for girls and 5–7.9
> years old, 8–13.9 years old, or 14–18 years old for boys, accounting for
> variability in appendicitis risk and alternate causes for acute abdominal
> pain by age and sex subgroups), a fever in the ED >38 °C, duration of pain
> (<24 hours, 24–47 hours, or 48–96 hours), a history of nausea, a history of
> emesis, migration of pain to the right-lower quadrant (RLQ), maximum
> tenderness in the RLQ, abdominal guarding, and pain with walking, coughing,
> or hopping."

And the model that survived:

> "The final pARC model included the following variables: sex, age, duration of
> pain, guarding, pain migration, maximal tenderness in the right-lower
> quadrant, and absolute neutrophil count."

Two things to hold onto. First, **nausea and emesis are separate variables** —
the rule does not fold "feeling sick" into "threw up". Second, **fever was
dropped**: *"Fever was missing for 18% in the derivation cohort and so was not
entered in the pARC model."* Missingness, not irrelevance — but it is why
item 16 ranks low here.

Cohort entry, verbatim: *"children and adolescents who presented to the PED
with <96 hours of abdominal pain"*.

### Project SPASMS — history vs examination, verbatim (source 3)

The case report form records

> "history of the presenting complaint (location of initial pain, duration of
> pain, highest pain score, highest reported temperature during this illness,
> right lower quadrant (RLQ) or right iliac fossa (RIF) pain on arrival to ED,
> pain migration to RLQ or RIF, progression of pain, gradual onset of pain,
> pain pattern, history of pain with walking, anorexia, nausea, vomiting,
> difficulty with micturition, pothole tenderness, family history of
> appendicitis, respiratory tract infection in last 2 weeks, and bowel habit),
> and examination findings (RLQ tenderness, RIF tenderness, tenderness worst in
> RLQ, tenderness outside RLQ, presence of hop, cough, or percussion
> tenderness, degree of rebound tenderness, abdominal guarding, Rovsing sign,
> nature of bowel sounds, palpable abdominal mass, and abdominal rigidity)."

**That sentence is the self-report filter already half-applied by clinicians.**
Everything after "and examination findings" is the nurse's, without argument.
It also shows the split this packet has to make twice: *"history of pain with
walking"* is history, but *"presence of hop, cough, or percussion tenderness"*
is a sign the clinician elicits. Same phenomenon, two different items — see
items 5 and 23.

And its duration definition, verbatim:

> "Acute abdominal pain was defined as the duration of pain for ≤7 days (ie,
> ≤168 h) in keeping with a previous study looking at abdominal pain and
> appendicitis, and a previous feasibility study found several patients with
> pain lasting for more than 5 days diagnosed with appendicitis."

### PAS — the paediatric addition, verbatim (source 4)

> "PAS includes similar clinical findings to the Alvarado score in addition to a
> sign more relevant in children: right lower quadrant pain with coughing,
> hopping, or percussion."

### Alvarado and AIR, as tabulated (source 5)

Reproduced with the caveat in "Ambiguity" below. The **symptom** rows are
Alvarado's *Nausea/Vomiting*, *Anorexia*, *Migration of pain to RLQ*; AIR's
symptom row for *Vomiting*; the **sign** rows are *Pain in RLQ*, *Rebound
tenderness* (AIR graded *Mild / Moderate / Severe*), and body temperature; the
rest is laboratory. Cutoffs: Alvarado low 1–4, intermediate 5–6, high 7–10;
AIR low 0–4, intermediate 5–8, high 9–12.

### The temperature threshold problem

Exactly the shape of head injury's fall-height problem. **Three rules, three
thresholds:**

| Rule     | Threshold |
|----------|-----------|
| Alvarado | BT > 37.5 °C |
| AIR      | BT > 38.5 °C |
| pARC     | fever in the ED > 38 °C (and then *dropped from the model*) |

A child cannot measure a temperature and cannot classify one. So the same
resolution applies: **capture the raw fact, let the nurse classify.** The child
is asked whether they feel hot or shivery (item 16); the nurse holds the
thermometer and picks a threshold. The child never sees a number.

### General guidance, verbatim (source 6)

History, in full:

> "Pain characteristics and associated symptoms · Systemic symptoms: fever,
> lethargy, irritability, anorexia, weight loss · Dietary history · Stool eg
> diarrhoea, constipation, blood, mucus · Vomiting eg bilious, blood · Urinary
> symptoms eg dysuria, polyuria, polydipsia · Menstrual and sexual history in
> adolescents · Psychosocial history, HEADSSS in adolescents"

Pain quality, verbatim: *"Sudden onset"*, *"Episodic/colicky"*, *"Dull,
increasing severity and localisation"*.

Peritonism, verbatim, and note that this is filed under **Examination**:

> "Children will often not want to move in the bed and will be unable to walk or
> hop comfortably, and will have abdominal tenderness with percussion, internal
> rotation of the right hip can irritate an inflamed appendix"

Escalation triggers, verbatim: *"Surgical cause suspected · Severe pain · Signs
of peritonism · Bilious vomiting · Scrotal pain/redness and swelling · Child
requiring admission"*.

### What actually walks in (source 7)

Of 235 children with acute abdominal pain: *"The most frequently reported
associated symptoms were vomiting in 137 (58.30%) patients and diarrhea in 68
(28.94%) patients, followed by fever in 54 (22.98%) patients."* Commonest
diagnoses were non-specific abdominal pain (28%), gastroenteritis (26%),
constipation (13%), gastritis (7%), urinary tract infection (5%); surgical
abdomen was 8%, of which appendicitis was 74%.

**Read that against the source list.** Roughly nine in ten of these children
have something the appendicitis rules were never built to detect. A packet
sourced only from prediction rules would ask three excellent questions about
the 8% and nothing at all about the rest. That is why source 6 carries as much
weight here as sources 1–5, and it is the single biggest structural difference
from the head-injury packet.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Throwing up since the pain started** | pARC (2); Alvarado, AIR (5); PAS (4); RCH (6); Almalki (7) | **yes** | Six sources. The commonest associated symptom at 58%. App already ships the hand-written `threw-up`; re-sourced here so it survives (see decision 9). Asked yes/no, not a count — no source here uses a count threshold, unlike CHALICE for head injury. |
| 2  | **Feeling sick without throwing up (nausea)** | pARC (2) — *"a history of nausea"*, separate from *"a history of emesis"*; Alvarado (5); PAS (4) | **yes** | A genuinely distinct variable in pARC, not a softer version of item 1. **But `SENSATIONS` already ships `queasy` / "Yucky tummy" on the inside list**, asked before follow-ups. Ranks last for that reason — see decision 10. |
| 3  | **Not wanting to eat** | Alvarado (5); PAS (4); RCH (6); SPASMS (3) | **yes** | The sources call this "anorexia". A child cannot apply that word; a child can say whether they feel like eating. App already ships `ate-today`, which asks something adjacent but different (*did* you eat vs *do you want to*). Prefer the appetite form: it is what the four sources actually name. |
| 4  | **Whether the pain started somewhere else** | pARC (2); Alvarado, AIR (5); PAS (4); SPASMS (3) | **partial**, age 5+ | Migration is in every rule. A child cannot say "right lower quadrant" and must never be asked to. But **the app already gets "where now" free** from the torso detail view's five regions, so the only missing half is *"did it start somewhere else?"* — a yes/no a child can answer. The nurse maps it. Never ask a child to name a quadrant. |
| 5  | **Does it hurt to walk, jump or cough** | pARC (2) — *"pain with walking, coughing, or hopping"*, listed as an evaluated **history** variable; PAS via WSES (4) | **yes**, age 5+ | **The flagship item.** A history variable in the best-performing paediatric model, concrete, physical, and completely outside everything else the app collects. Note the split from item 23: this asks what the child noticed, not what the clinician elicits. |
| 6  | **Does it hurt when the car goes over a bump** | SPASMS (3) — *"pothole tenderness"*, listed under history | **yes**, age 5+ | Vivid and answerable. **Weakest provenance in the packet**: one source, and that source is a protocol whose variables are being tested rather than validated. Kept, ranked low, and flagged for the reviewer as the first item to drop if the list must shrink. |
| 7  | **Is it getting worse** | SPASMS (3) — *"progression of pain"*; RCH (6) — *"Dull, increasing severity and localisation"* | **yes** | A trajectory, not a snapshot — the same shape as head-injury item 2, and the same consequence: it is the **only item that still applies outside the acute window** (decision 5). Also the item a repeat visit is for. |
| 8  | **Does the pain go away and come back** | SPASMS (3) — *"pain pattern"*; RCH (6) — *"Episodic/colicky"* vs constant; Almalki (7) — Constant 7.7% / Intermittent 24.3% / **not reported 68.1%** | **partial** | An 8–12 year old can answer this; a 4–6 year old conflates "it stopped" with "it went away for a bit". Note the 68% not-reported rate — clinicians frequently do not capture it either. Also overlaps `SENSATIONS.cramping` ("Scrunchy"). |
| 9  | **Runny poop / diarrhea** | RCH (6); Almalki (7) | **yes** | Second commonest associated symptom, 28.9%. Gastroenteritis is 26% of diagnoses. **No prediction rule contains it** — this item exists only because source 6 is organised by complaint. |
| 10 | **When they last pooped** | RCH (6) — *"Stool eg diarrhoea, constipation…"*; Almalki (7) | **yes** | Constipation is 13% of diagnoses. App already ships `bathroom-today`; re-sourced so it survives decision 9. Ask *when*, never "are you constipated" — that is a clinical term and a judgement. |
| 11 | **Blood in the poop** | RCH (6) — *"Stool eg … blood, mucus"*; Almalki (7) — *"bloody stool"*; source 8 lists GI blood loss as a red flag | **yes** | A child sees this and can say so. Wording matters more here than anywhere except item 15 — see cautions. |
| 12 | **Does it hurt or sting to pee** | RCH (6) — *"Urinary symptoms eg dysuria…"*; SPASMS (3) — *"difficulty with micturition"*; Almalki (7) — *"dysuria"* | **yes** | UTI is 5% of diagnoses and **invisible to every appendicitis score in this packet**. The app currently asks a child with a sore tummy nothing at all about weeing. High rank for that reason. |
| 13 | **Blood in the pee** | Almalki (7) — *"hematuria"* | **partial** | One source, and children misjudge urine colour. Kept in the table so the exclusion is a decision; not proposed for generation. |
| 14 | **Drinking a lot and peeing a lot** | RCH (6) — *"Polyuria, polydipsia, weight loss → DKA"*; Almalki (7) — *"polyuria"* | **yes** | The *weight loss* third of that triad is not child-reportable and is dropped; the other two are. DKA presenting as abdominal pain is a life-threatening miss that no score here touches. Ask the two halves as one question about drinking and peeing more than usual; **never mention diabetes.** |
| 15 | **Pain in the testicle** | Almalki (7), collected as an associated symptom of abdominal pain; RCH (6) lists testicular torsion as urgent in *every* age band and *"Scrotal pain/redness and swelling"* as an escalation trigger | **yes** — boys only | Time-critical and genuinely child-reportable. **The hardest item in the packet to word**; see the dedicated section below. Distinct from item 24: a child saying it hurts is not a child examining themselves. |
| 16 | **Feeling hot or shivery** | Alvarado, AIR (5); PAS (4); pARC (2); RCH (6); Almalki (7) | **partial** | Six sources, three incompatible thresholds, and pARC dropped it for 18% missingness. Child reports the sensation; nurse measures and classifies. Never ask a child for a number and never say "fever". |
| 17 | **What the throw-up looked like** | RCH (6) — *"Vomiting eg bilious, blood"*, and *"Bilious vomiting"* as an escalation trigger; Almalki (7) — *"bilious emesis"*, *"hematemesis"* | **partial** | Colour is observable by a child; "bilious" is a classification and must never be asked for. Needs a widget the app does not have (decision 3) — deferred to "Still open", **not** downgraded to a yes/no, because "was it green?" is a leading question about the one answer that escalates. |
| 18 | **Hard to breathe, or a cough/cold** | RCH (6) — pneumonia and pleural effusion as extra-abdominal causes, *"Cough, fever, SOB"*; SPASMS (3) — *"respiratory tract infection in last 2 weeks"*; Almalki (7) — *"shortness of breath"* | **yes** | Chest causes of tummy pain. The app already asks `breathing` for the *chest* group; this is the same fact reached from a different body region, so it must not fire when the child has also tapped chest. |
| 19 | **Did they swallow something** | RCH (6) — *"Foreign body ingestion (eg button battery)"* and *"Toxin ingestion"*, both listed as requiring urgent management | **yes** | Only a child (or a witness) knows. Time-critical, trivially reportable, and absent from every score. **Never name a battery or a poison** — that turns the question into a prompt and can frighten a child into denying it. |
| 20 | Duration of pain | pARC (2) — *"<24 hours, 24–47 hours, or 48–96 hours"*; SPASMS (3) — ≤7 days; Almalki (7) | **yes** — already collected | `DURATIONS` collects this. **But the app's bands do not resolve pARC's:** `just-now` / `this-morning` / `yesterday` all fall inside "<24 hours" or straddle it. See "Still open". |
| 21 | Highest pain score | SPASMS (3) | **yes** — already collected | The FPS-R screen. Do not ask again; asking a child to rate severity in words is banned outright. |
| 22 | Where it hurts now | all of 1–7 | **yes** — already collected | Body map, and the torso detail view gives five regions. Do not ask in words. |
| 23 | Abdominal tenderness; maximal tenderness in the RLQ/RIF; tenderness worst in / outside RLQ; **elicited** hop, cough or percussion tenderness | pARC (2); SPASMS (3); Alvarado, AIR (5); PAS (4); RCH (6) | **no — exam** | Note this is *not* item 5. Item 5 is what the child noticed while walking around. This is a sign a clinician produces by asking the child to hop or by percussing, and grades. A child cannot elicit or grade it on themselves. |
| 24 | Guarding; rigidity; rebound tenderness and its degree; Rovsing sign; bowel sounds; palpable mass; distension; hernia; **genital examination** | pARC (2); SPASMS (3); AIR (5); RCH (6) | **no — exam** | AIR grades rebound *Mild / Moderate / Severe*. Never ask a child to press on their own tummy — that is delegating an examination to a 7-year-old and getting a number back that reads as a finding. |
| 25 | Toxic appearance; lethargy; irritability; hydration status; gait, position and level of comfort; vital signs | RCH (6); Almalki (7) — *"Patient appearance at presentation: Toxic 19 (8.09%)"* | **no — observer** | Source 6's instruction is literally *"Observe the child's movements, gait, position and level of comfort"*. Observation is the observer's. |
| 26 | WBC, ANC, neutrophilia, CRP, urinalysis, glucose, imaging | 1–5, 6, 7 | **no — lab** | |
| 27 | Weight loss; growth deceleration; delayed puberty | RCH (6); source 8 red flags | **no** | Not knowable by a child, and mostly chronic-scope anyway. |
| 28 | Family history of appendicitis; underlying medical conditions; recent abdominal trauma or surgery | SPASMS (3); RCH (6) | **no — carer or record** | Not the child's to report. SPASMS excludes recent trauma and prior abdominal surgery from its cohort outright. |
| 29 | Menstrual, sexual and pregnancy history; HEADSSS | SPASMS (3); RCH (6); Almalki (7) — *"dysmenorrhea"* | **no — out of scope by age** | Every source scopes these to adolescents. The app stops at 12. See "Still open". |
| 30 | Possibility of abuse | source 8 — *"Medical history should also include exploring the possibility of abuse, given its potential link with FAPDs"* | **no — see below** | Deliberate exclusion, recorded as a decision. |
| 31 | Rash, spots, itching | RCH (6); Almalki (7) | **out of scope — `depth: surface`** | Both sources collect rash alongside abdominal pain; it belongs to the surface packet and is listed here only so its absence is visibly a decision. |

**Yield: ~46 distinct criteria across 12 named prediction rules and 3
guidance/cohort sources → 14 clean, 5 partial, 9 excluded, 3 already collected
elsewhere in the app.**

Compare head injury: ~20 criteria → 5 clean. **Abdominal pain is roughly three
times as self-report-rich**, because its criteria are symptoms the child feels
rather than mechanism and neurological observation. This is good news for the
report and bad news for the screen — see decision 6.

## Items 5 and 23 — the hopping problem

These look like the same thing and are not, and the split is exactly the one the
brief demands.

- **Item 23** is *"presence of hop, cough, or percussion tenderness"*
  (source 3, filed under **examination findings**), and PAS's *"right lower
  quadrant pain with coughing, hopping, or percussion"* (source 4). A clinician
  asks the child to hop, watches, and judges. Source 6 files the same idea under
  Examination too: *"Children will often not want to move in the bed and will be
  unable to walk or hop comfortably."* A child cannot make that judgement about
  themselves and neither can this app. It stays excluded.
- **Item 5** is pARC's *"pain with walking, coughing, or hopping"*, listed among
  the **history** variables evaluated for the model (source 2). That is the
  child's own report of what they have already noticed. It is a different item,
  and it has its own citation.

Getting this backwards would produce a question citing an examination finding —
the precise failure the packet process exists to prevent. The give-away is
source 3's sentence, which puts the two on opposite sides of the same comma.

## Item 15 — testicular pain, and why it is not a genital examination

Source 6 lists testicular torsion as requiring urgent management in **every**
age band, and *"Scrotal pain/redness and swelling"* as a trigger to escalate.
Source 7 collected *"testicular pain"* as an associated symptom of abdominal
pain. It is time-critical: source 6 says ultrasound *"is not clinically
indicated in the initial assessment for testicular torsion and may delay time
critical surgery."*

So the fact matters and the child is the only one who has it. But:

- Source 6's own instruction is *"Examine genitalia eg for testicular
  torsion"* — an examination, item 24, excluded.
- The body map has **no genital region**. There is nowhere for the child to tap,
  which is a design decision this packet should not quietly overturn.
- A screen that asks an unsupervised child about their genitals is a
  safeguarding question before it is a clinical one.

**Decision: the item is kept in the packet and the question is not generated in
v1.** It is flagged for the clinical reviewer as the one item where the right
instrument is probably safeguarding policy and a nurse prompt, not a question on
a child's tablet — the same conclusion the head-injury packet reached about
non-accidental injury, reached for the same reason. Recorded here so that the
omission is a documented decision rather than an oversight, and so that nobody
downstream "fixes" it by writing the obvious question.

## Possibility of abuse — a deliberate exclusion

Source 8 states that medical history *"should also include exploring the
possibility of abuse"*. **This app must never ask a child about it.** Same
decision and same reasoning as head injury's non-accidental injury exclusion:
a child reporting symptoms unsupervised on a tablet is a context where
safeguarding policy, not question design, is the correct instrument. Flagged
for the clinical reviewer.

## Wording cautions

Ban **concepts**, not phrasings.

- **Never name a condition.** Not appendicitis, appendix, appendix bursting,
  obstruction, twisting, torsion, infection, diabetes, poison, battery.
  `scripts/screen.mjs` bans `concussion|fracture|brain|skull` — that list was
  written for head injury and **will not catch a single word in this packet**.
  See "Still open".
- **Never ask a child to press on their own tummy**, or to say whether it hurts
  more when they let go. That is item 24 delegated to a child. The existing
  hand-written `chest-press` ("Does it hurt when you press on it?") is the
  pattern to avoid; it must not be copied into `tummy`.
- **Never ask a child to name or choose an abdominal region in words**
  ("right lower", "lower right side", "near your hip bone"). The body map is
  the only instrument for location. Item 4 asks *whether* it moved, never
  *where to*.
- **Never ask a child to classify what came out of them.** Not bilious, not
  bloody-in-the-clinical-sense, not tarry, not mucus. Colour words only, and
  only through a widget that offers all the colours neutrally (item 17).
- **Never make a bodily-function question sound like a fault or a test.**
  Not "did you forget to poop?", not "are you constipated?", not "have you been
  drinking enough?" A child who hears an accusation answers the accusation.
- **Never ask a child to rate severity** — already banned globally, and the
  FPS-R screen already has it.
- **Never ask about the child's genitals**, and never instruct a child to look
  at or touch any part of themselves.
- **Never ask about periods** anywhere in this group. The app's top age is 12
  and a question about menstruation on a shared hospital tablet is not a
  question this app should carry.
- Avoid "serious", "dangerous", "bad", "severe" throughout — already banned.

## How these were found

Discovery started, per the brief, with comparison and external-validation
literature rather than a remembered rule name. Source 1 tests **twelve** rules
in one cohort and named all of them; source 3's rapid review named the same
family again; source 4 supplied the paediatric-specific statement. Recall would
have produced Alvarado and PAS and stopped.

But the more important discovery finding is the one recall *and* the comparison
literature would both have missed. **Every one of those twelve rules predicts
one disease**, and that disease accounts for 8% of the children who arrive with
this complaint (source 7). Searching only for prediction rules for this
complaint returns a library about appendicitis. The items that cover the other
92% — diarrhea, constipation, painful peeing, drinking and peeing more,
breathing, swallowing something — came from a **general guideline organised by
the presenting complaint** (source 6), which no amount of comparison-study
searching would have surfaced.

For the next packet: search comparison studies *and* search for a
presenting-complaint guideline, and treat the gap between them as the finding.

## Decisions

**Decided, not deferred.**

1. **Register: US English.** `vocab.js` already ships "Did you throw up?" and
   "Go to the bathroom", so: **"throw up"**, **"poop"**, **"pee"**. Never
   "wee", "poo", "be sick", "bowel", "urine", "stool", "motion", "number two".
   Decided explicitly because items 9–14 are the first questions in this app to
   need these words at all, and a generator with no ruling will improvise
   British forms halfway through the set.
2. **Answer types.** `FollowUpScreen` renders yes/no only today. So:
   items 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 18, 19 are **yes/no**;
   item 10 is yes/no in the form "have you pooped today?";
   item 16 is yes/no ("do you feel hot?");
   item 17 needs a colour choice the app does not have and is **not shipped in
   v1** rather than being squeezed into a leading yes/no.
3. **Item 17 is not asked as "was it green?"** Green is the answer that
   escalates (source 6 lists bilious vomiting as an escalation trigger), so a
   yes/no naming it is a leading question about the one answer that matters.
   Either a neutral colour picker or nothing. For v1: nothing.
4. **Item 4 asks whether, never where.** "Did it start hurting somewhere else
   first?" The body map already holds *where it is now*; the nurse maps the
   pair against the migration criterion. The child never meets a quadrant.
   This is the same resolution head injury used for fall height: capture the
   raw fact, let the nurse classify.
5. **Duration scope.** The sources disagree, deliberately, and the disagreement
   is informative:

   | Source | Acute window |
   |--------|--------------|
   | pARC (2) | < 96 hours |
   | SPASMS (3) | ≤ 7 days (168 h) |
   | Almalki (7) | chronic excluded; 30% of the cohort had pain > 2 days |
   | Rome IV, via (8) | ≥ 4 episodes/month for ≥ 2 months = **functional, a different complaint** |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday` — **full packet**. Inside every
     source's window.
   - `few-days` — **full packet.** Outside pARC's 96 hours but inside SPASMS's
     7 days, and SPASMS explicitly notes appendicitis found with pain lasting
     more than 5 days. Narrowing to 96 hours would silently pick one rule.
   - `long-time` — **item 7 only.** This is where Rome IV functional abdominal
     pain lives, and that is a different packet with different literature. A
     child whose tummy has hurt for weeks should not be asked pARC's questions.
     Item 7 survives because "is it getting worse" is exactly the question that
     stays meaningful in a chronic band — the same carve-out head injury made.
   - `not-sure` — **full packet.** Same convention as head injury: `not-sure`
     means the child cannot date it, not that it is old. Old goes to
     `long-time`.

   **This is a wider acute window than head injury's**, which stopped at
   `yesterday`. That is a real difference between the complaints, not a
   loosening of standards: head-injury rules are CT-decision rules applied in
   the hours after an event, and abdominal pain rules enrol on days of pain.
6. **Item priority, and one question per item.** Fourteen clean items compete
   for three bank slots (`followUpsForGroups` caps at three plus the reserved
   `happened-before`). Never ask two questions from the same item. Order:

   `5 (walk/jump/cough) → 1 (throwing up) → 4 (started elsewhere) →`
   `12 (hurts to pee) → 7 (getting worse) → 10 (last pooped) → 9 (diarrhea) →`
   `3 (appetite) → 11 (blood in poop) → 14 (drinking/peeing lots) →`
   `18 (breathing) → 19 (swallowed something) → 16 (feeling hot) →`
   `6 (bumpy ride) → 8 (comes and goes) → 2 (nausea)`

   Item 5 leads because it is the strongest history variable in the best model
   and cannot be inferred from anything else the app holds. Item 12 is fourth —
   ahead of several appendicitis criteria — because UTI is more common in this
   population than surgical abdomen and the app currently asks nothing about it.
   Item 2 is last because `SENSATIONS.queasy` already covers it.
   **Proposed, not yet confirmed by review**; this ordering decides what a
   child is actually asked.
7. **Age floors.** Items **4, 5 and 6 carry `minAge: 5`** — they exist only
   because a prediction rule or protocol names them, and all three sources
   derived at 5+. Items 1, 2, 3 and 7–19 carry **no floor**: they are also
   plain history in source 6, which sets none, and excluding a 4-year-old from
   "does it hurt to pee" would be an invention, not a citation. Recorded because
   the floor here is a *validity* floor, not a capability floor, and the two
   must not be conflated in future packets.
8. **This packet is `depth: inside`, and the pipeline cannot yet enforce it.**
   `bank.js`'s `applies` is `{ group, durations, minAge }` — there is no depth
   field, and `followUpsForGroups` never passes the child's depth answer to
   `bankQuestions`. So as things stand, a child who taps Tummy and answers "On
   my skin" would be asked these questions anyway. **The packet's scope stands
   regardless**; the pipeline needs a depth filter before this packet ships. Not
   fixed here (this run may only write this file). Carried to "Still open".
9. **The three hand-written `tummy`/`inside` follow-ups must be re-sourced, not
   assumed.** `followUpsForGroups` does `if (sourced.length) continue` — the
   moment the bank covers `tummy`, `threw-up`, `bathroom-today` and `ate-today`
   are **dropped entirely**, not merged. Items 1, 10 and 3 exist precisely to
   carry that ground across with a citation behind it. Losing them silently is
   the failure mode this decision prevents.
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations and mood:
    - **Rejected as duplicates:** item 22 (body map), item 21 (FPS-R), item 20
      (DURATIONS).
    - **Demoted, not rejected:** item 2 overlaps `SENSATIONS.queasy` ("Yucky
      tummy"); item 8 overlaps `SENSATIONS.cramping` ("Scrunchy") and
      `squeezing`. Both are on the inside list and are offered before
      follow-ups, so both items rank last.
    - **Kept despite surface overlap:** `HELPS` offers "Go to the bathroom" and
      "Something to eat", which touch items 10 and 3. `HELPS` records what the
      child *wants*; items 10 and 3 record what is *true*. Different facts.
    - **Conditional:** item 18 duplicates the `chest` group's `breathing`
      question. It must not be generated when the child has tapped both `tummy`
      and `chest`; `followUpsForGroups` already dedupes by question id, not by
      fact, so this needs a distinct id and a note for the reviewer.
11. **Group `tummy` is wider than "abdomen".** It contains `hips`, `bottom`
    (back view) and the five torso-detail regions. `hips` is fine — lower
    abdominal pain. **`bottom` is not**: a child tapping Bottom and "inside"
    would receive appendicitis-derived questions. Ruling: these items are
    written for the torso regions and `hips`; **`bottom` needs its own handling
    and does not get this packet.** No source here covers perianal or rectal
    complaints in a child, and source 8 places perianal disease among red flags
    for a *chronic* presentation, which is a different packet again.

## Review decisions, 2026-08-30

- **Item 6 (bumpy car ride) removed entirely.** Not a provenance call — an
  answerability one. It assumes the child arrived by car and was awake for the
  journey; ambulance, on foot or asleep leaves them nothing to answer, and
  yes/no offers no "that didn't happen".
- **Item 18 split into two questions.** "Hard to breathe" (now) and "cough or
  cold" (last two weeks) are different facts on different clocks; one yes/no
  fused them into an answer a nurse could not interpret.
- **Item 10 ships as "have you pooped today?"** The *when* form needs an answer
  type the app does not have. Accepted knowingly: a "no" from a child who went
  last night is indistinguishable from one who has not gone in four days.
- **Register: "tummy"** throughout, both tiers.

## Still open

- ~~**Depth filtering (decision 8).** `bank.js` cannot express `depth: inside`.
  Blocking for shipping this packet.~~ **RESOLVED — verified 2026-09-06.**
  `build-bank.mjs` emits `applies.depth` from `meta.depth`, `bankQuestions`
  filters on it, and `followUpsForGroups` passes the child's answer per group.
  `depth: 'unknown'` still passes both branches by design; see the limb
  packet's open item on whether that is right in general.
- ~~**`scripts/screen.mjs`'s banned-word list is head-injury-specific.** Every
  candidate for `tummy` will pass the clinical-naming screen no matter what it
  says about the appendix.~~ **RESOLVED — verified 2026-09-06.** `screen.mjs`
  now composes its ban list per packet: universal bans plus
  `meta.bannedPhrases`, transcribed from this packet's wording cautions. A
  packet with no `meta.json` runs on universal bans only and warns.
- ~~**`scripts/build-bank.mjs`'s `CITE` map is keyed by item number alone**, not
  by packet — `CITE[c.traces_to]` on this packet's item 1 would emit
  `"PECARN; CHALICE"`, a **false citation** on a tummy question.~~
  **RESOLVED — verified 2026-09-06.** Group, rank, age floor, citation and
  permitted durations are all read from the packet's own `meta.json`.
  Citations now fail closed: an item with no recorded citation ships
  `cite: null` and the build warns, rather than borrowing another packet's.
- **Duration bands do not resolve pARC's thresholds.** pARC splits at 24 and 48
  hours; `DURATIONS` offers `this-morning` / `yesterday` / `few-days`. Nothing
  distinguishes "18 hours" from "30 hours". Probably acceptable — the nurse has
  the arrival time — but a reviewer should confirm the report is still useful
  without it.
- **Item 15 (testicular pain).** Kept in the packet, not generated in v1.
  Needs a clinical and safeguarding view on whether it should be a nurse prompt
  rather than a child question.
- **Item 17 (what the throw-up looked like).** Needs a colour widget and safe
  neutral wording before it can ship.
- **Item 29 (dysmenorrhea).** Sources 3, 6 and 7 all collect it; the app's top
  age is 12; menarche before 12 is not rare. Deliberately not carried, and
  deliberately raised — this is a decision for a clinician, not for question
  design.
- **Source 9 covers girls aged 9–13 with chronic pain only.** There is no
  evidence in this packet that a 4- to 8-year-old reports these symptoms
  reliably, and the app's floor is 4. The `young` tier wording carries more
  risk here than the `older` tier and should be reviewed as such.

## Ambiguity in the sources

Recorded rather than papered over.

- **Source 5's criteria table extracts with its two columns interleaved.** The
  raw text reads *"Symptoms Nausea/Vomiting 1 Nausea 1 Anorexia 1 Migration of
  pain to RLQ 1"* — that is the Alvarado column and the AIR column woven
  together, and it is not safe to assert from it which symptom row belongs to
  AIR. The *item names* are reliable; the *per-rule attribution of individual
  rows* is not. Nothing in the items table depends on that attribution: every
  symptom named there is independently sourced from pARC, PAS-via-WSES, or
  source 6.
- **Source 1's per-rule variable tables are in "Appendix 3"**, which is not in
  the fetched full text. So the packet knows that twelve rules exist and how
  they performed, but not what is in Christian, Ohmann, LRAR, LRARR, MASS,
  MAS-Shera, Lintula, Fenyö, modified Lindberg or RIPASA. Those ten rules are
  **named but not mined**, and no item cites them.
- **Neither the AIR score nor PAS could be read in its original publication.**
  Both are quoted here at one remove — AIR through source 5's table, PAS
  through source 4's prose. The Samuel 2002 original is paywalled. Any item
  depending on PAS alone would be badly sourced; item 5 does not, because pARC
  names the same variable directly.
- **Source 8's alarm-feature list lives in a figure.** Only the prose examples
  survived extraction (*"unexplained weight loss, delayed puberty, and GI blood
  loss"*). Source 8 is therefore used only for the chronic/acute boundary, and
  the one item it touches (item 11) is independently sourced from 6 and 7.
- **Source 7 records that migration was not documented in 71% of cases** and
  pain pattern not documented in 68%. Clinicians frequently do not capture the
  variables the rules require. That is context for items 4 and 8 — a child's
  answer may be the *only* record of it — and it is also a caution against
  assuming the criterion is easy just because it is in every score.
