# Sore arm or leg with no injury

Presenting complaint · packet `limb-pain` · serves group `limb`, depth
`inside` · packet v1 · assembled 2026-09-07
Status: **not yet clinically reviewed** · sources verified first-hand: 13 of 16
(12 in full text, 1 abstract only — see source 2)

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
> who arrives with an arm or a leg that hurts **and no injury to explain it**,
> and marks which of those a child can report about themselves. **Not** a
> diagnostic tool: nothing here may be scored, summed, or shown to a child or
> nurse as a suggested cause. No condition name reaches runtime.

## Read this before anything else — three things a reader must not discover late

1. **The two criteria sets this packet exists to reach — Kocher (1999, 2004)
   and Caird (2006) — were not read first-hand.** Neither is open access. They
   are quoted here at one remove from two sources that *were* read (sources 1
   and 3), which agree with each other on all four Kocher variables and on
   Caird's fifth. Items 2 and 3 gain their prediction-rule provenance from
   those second-hand quotations. Nothing else in the packet depends on them.
   See "Ambiguity in the sources".
2. **This packet cannot currently be routed to the child it is written for.**
   `packets/limb/injury` and this packet are both `group: limb`, `depth:
   inside`. The pipeline has no conditional follow-ups, so a "no" to *"did you
   fall or bump it?"* does not switch banks. Both packets' questions land in the
   same three-slot queue for every child who taps an arm or a leg and says
   "inside". A child who fell off a wall will be asked this packet's questions,
   and a child whose leg simply started hurting will be asked the fracture
   packet's. See decision 3 and "Still open" — this is the single largest
   problem with shipping this packet as it stands.
3. **Search A contributed no new question at all.** Ten septic-arthritis
   prediction studies were enumerated and two were externally validated in
   children with an atraumatic limp. Their combined child-reportable content is
   two facts, and the app already asks both. Every new item in this packet came
   from Search B. See "How these were found".

## Scope

**Which child.** An arm or a leg that hurts where the child did **not** fall or
bump it: `limb/injury` item 1 is the branch point of both packets, and this is
its "no" side. That branch is not decoration — the two literatures share
almost no criteria. The fracture rules are lists of places to press; the
atraumatic literature is infection, inflammation, blood supply, malignancy and
a benign nocturnal pain syndrome, and its decisive variables are a blood test
and a range of motion.

**Age.** App covers 4–12. The age statements in these sources are about
*disease frequency*, not about whether a child can answer, and none of them
floors an item:

- RCH (4) organises the differential by age: *"0-4 years"*, *"5-10 years"*,
  *"Over 10 years"* — SUFE and inflammatory arthritis in the older band,
  transient synovitis and acute myositis across 0–10.
- Kocher's cohorts (via source 1) had mean ages of *"6 ± 4.2 y"* (1999) and
  *"5.7 ± 3.6 y"* (2004); Sultan's range was *"1–12 y"*, Yagupsky's *"6–27 m"*.
- Walters' growing-pains criterion (2), via source 10, is *"pain starts between
  ages 3 and 12 years"*; PMM (13) gives *"Age range 3–12 years"*. Both sit
  inside the app's range at both ends.
- ASK (12), the one validated *self-report* function instrument found, is
  *"intended to measure physical disability in children aged 5 to 15 years"*.

**One item carries an age floor and it is judgement, not citation** — item 10.
Reasoning in decision 8. Every other item is unfloored, for the reason
`limb/injury` gave and the brief states: a validity floor on a fact that is
also plain history in a guideline setting no floor is an invention.

**Depth.** `inside`, the same half of group `limb` as `limb/injury`, and for
the same reason: bone, joint and muscle. Rash, bruising, purpura and skin
changes are `surface` and are **not carried here**, even though three of the
guidelines read collect them alongside a limp (HSP genuinely presents as a limp
with a rash). Decision 9.

**Out of scope by age or setting, and not carried:** infant and pre-verbal
presentations (source 5's *"Development - milestones - age patient started
walking"*, source 6's *"Irritability in infants – eg when picked up or nappy
changed"*, developmental dysplasia of the hip); anything requiring bloods,
imaging or a joint aspirate — which is most of what this literature is;
antibiotic choice, surgery and follow-up; the traumatic branch, which is
`packets/limb/injury`.

## Sources

1. **Valisena S, Ceroni D, De Marco G, et al.** "The Kocher–Caird Criteria for
   Pediatric Septic Arthritis of the Hip: Time for a Change in the Kingella
   Era?" *Microorganisms* 2024;12(3):550. **Read first-hand** via PMC10974044.
   **This is the Search A discovery source.** Its Table 1 is a historical
   inventory of the whole differentiation literature — Kocher 1999, Jung 2003,
   Kocher 2004, Luhmann 2004, Caird 2006, Sultan 2010, Singhal 2011, Yagupsky
   2014, Clever 2021 — with each study's variables and probabilities printed
   side by side, which is exactly what the brief's Search A is supposed to
   produce and what recall (which returns "Kocher" and stops) would not.
2. **Tu J, Lam S, Yamano C, Paul E, Ghobrial O, Gowdie P, Craig S.** "Test
   characteristics of clinical findings and clinical decision rules for the
   diagnosis of septic arthritis in children with an acute limp presenting to
   the emergency department: a prospective observational study." *Emerg Med J*
   2025;42(5):360–366. **Abstract read first-hand** via the Europe PMC REST
   API; Europe PMC records `isOpenAccess: N` and the only full-text link is
   *"Subscription required"*, so **the full text was not read**. The abstract
   is quoted verbatim below and is the single most useful paragraph in this
   packet: it is the external validation of both rules in exactly this
   presentation. `limb/injury` named this paper as something a future run
   should get; this is as far as open access reaches.
3. **Nannini A, Giorgino R, Bianco Prevot L, Bobba A, et al.** "Septic
   arthritis in the pediatric hip joint: a systematic review of diagnosis,
   management, and outcomes." *Front Pediatr* 2023;11:1311862. **Read
   first-hand** via PMC10771295. Used as an independent second statement of the
   Kocher and Caird criteria, so that neither is quoted from a single
   secondary source. It disagrees with source 1 about Kocher's fever
   threshold — see "The fever threshold problem".
4. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "The limping or non-weight bearing child"**, last updated October 2025.
   **Read first-hand** (present in the shared `packets/.sources/` cache; read
   again here through `find-in-source.mjs` windows). **The primary Search B
   source**, and the same one `limb/injury` used — this packet uses the half of
   it that `limb/injury` could not: the age-banded differential, the
   constitutional symptoms, and the escalation list.
5. **NHS Greater Glasgow & Clyde, paediatric emergency medicine guideline 1126,
   "Atraumatic painful limb, paediatrics"**, v1, reviewed 16/09/2019. **Read
   first-hand** via `rightdecisions.scot.nhs.uk`. The second Search B source and
   the best-structured one: it prints a **History** column against an
   **Examination** column for each of transient synovitis, Perthes, SUFE,
   septic arthritis/osteomyelitis, malignancy and JIA — the self-report filter
   already half-applied by clinicians, six times over.
6. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Bone and joint infection"**, PIC endorsed. **Read first-hand.** Reached
   from source 4's own "See also" line. Supplies the septic-arthritis and
   osteomyelitis history list separately from the limp guideline.
7. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "The acutely swollen joint"**, PIC endorsed. **Read first-hand.** Also
   reached from source 4. Supplies the differential table by cause — reactive
   arthritis, JIA, ARF, HSP, leukaemia, IBD, hypermobility — with clinical
   features per row, and the *character* of joint symptoms
   (*"migratory/early morning"*), which is where item 8 and item 10 come from.
8. **O'Keeffe M, Kamper SJ, Montgomery L, Williams A, Martiniuk A, Lucas B,
   Dario AB, Rathleff MS, Hestbaek L, Williams CM.** "Defining Growing Pains: A
   Scoping Review." *Pediatrics* 2022;150(2):e2021052578. **Read first-hand**
   via the publisher PDF hosted openly at `painsmart-education.sydney.edu.au`.
   145 studies and 2 diagnostic classification systems. **This is Search A for
   the benign half of the differential**, and its answer is that there is no
   rule to find.
9. **Lehman PJ, Carl RL.** "Growing Pains: When to Be Concerned." *Sports
   Health* 2017;9(2):132–138. DOI 10.1177/1941738117692533. **Read first-hand**
   via the open PDF hosted by Orthopaedic Research UK. A narrative review with
   an explicit differential table and an explicit statement of which features
   should stop a clinician calling it growing pains.
10. **Liao CY, Wang LC, Lee JH, Wu KW, et al.** "Clinical, laboratory
    characteristics and growth outcomes of children with growing pains."
    *Sci Rep* 2022;12:14835. **Read first-hand** via PMC9436948. 268 children
    under 12, mean age 4.7. Supplies Walters' ten criteria verbatim and the
    observed frequencies. **Limit worth knowing:** a single-centre
    retrospective chart review, and the pain descriptions in a chart were
    recorded by a clinician from what a parent said.
11. **Kosmeri C, Papasavva ME, Kyrkou A, et al.** "Influenza-Associated Benign
    Acute Childhood Myositis During the 2024–2025 Season: A Retrospective
    Multicenter Study." *Children (Basel)* 2025;12(10):1333. **Read first-hand**
    via PMC12562817. RCH (4) names *"Acute myositis"* in the differential at
    every age band and gives no features for it; this is the source that says
    what it looks like. **Limit worth knowing:** a hospitalised, laboratory-
    confirmed-influenza cohort, so its 32.7% figure is not a rate in children
    who walk into an ED with a sore leg.
12. **Shakya R, Suwal R, Adhikari I, Shrestha J, Gyawali S, Shrestha A.**
    "Cross cultural adaptation and validation of Nepali Version of Activity
    Scale for Kids (ASK)." *J Patient Rep Outcomes* 2022;6:64. **Read
    first-hand** via PMC9203610. The only *self-report* instrument evidence
    found for this complaint, and the same source `limb/injury` used — re-read
    here rather than borrowed, because a citation carried across a packet
    boundary without being opened is exactly what the brief forbids. **Limits
    unchanged:** a translation study, mean age 12.74, children with physical
    disability, nothing below 5.
13. **Paediatric Musculoskeletal Matters (PMM), "Growing pains", doctors'
    section.** **Read first-hand** via `pmmonline.org`. **This is an
    educational resource, not a clinical guideline**, and is weighted
    accordingly: it is used only where it agrees with sources 8, 9 and 10, and
    no item cites it alone. It earns its place because it is the only source
    read that prints the reassuring features and the *"indications for concern"*
    as two facing lists written to be acted on.

**Attempted and not used.**

14. **Kocher MS, Zurakowski D, Kasser JR** (1999) and **Kocher MS, Mandiga R,
    Zurakowski D, Barnewolt C, Kasser JR** (2004), *J Bone Joint Surg Am* —
    the derivation and the prospective validation of the septic-arthritis /
    transient-synovitis algorithm. **Not read**; neither is open access.
    **What depends on them:** the prediction-rule half of items 2 and 3. The
    four criteria are quoted here from sources 1 and 3, which agree, and source
    1 additionally prints Kocher's own probability ladder. No wording in this
    packet depends on a detail that appears in only one of the two.
15. **Caird MS, Flynn JM, Leung YL, Millman JE, D'Italia JG, Dormans JP** (2006),
    *J Bone Joint Surg Am* — the five-variable modification. **Not read**, not
    open access. Reached through sources 1 and 3, which agree that it adds CRP
    and changes nothing a child could answer. Nothing depends on it alone.
16. **Queensland Paediatric Clinical Guidelines, "Limp"** —
    `childrens.health.qld.gov.au` returned **HTTP 403** to both the guideline
    page and the direct PDF, on this run as on the `limb/injury` run. **Not
    read.** Nothing depends on it. Recorded a second time so that a future run
    stops trying this host rather than treating it as untried.

## The rule(s), as published

### Kocher's four criteria — verbatim, at one remove (sources 1 and 3)

Source 1, in its own words:

> "Kocher showed that a history of fever >38.5 °C, non-weight bearing, an
> erythrocyte sedimentation rate >40 mm/h, and serum white blood cells
> >12,000/mm 3 were highly suggestive of SAH, with a predicted probability of
> 99.6% when all these predictors manifested in pediatric patients."

and again, in its account of the derivation:

> "Kocher et al.'s analysis determined four independent multivariate
> predictors: a history of fever, non-weight bearing, an ESR ≥ 40 mm/h, and a
> serum WBC count > 12,000/mm 3 . Their combination resulted in a probability of
> SAH rather than TSH of <0.2% for zero predictors, 3% for one predictor, 40%
> for two, 93.1% for three, and 99.6% for four"

Source 3, independently:

> "These criteria include non-weight bearing, fever >38°C, ESR >40 mm/h, WBC
> >12,000 cells/mm 3 . The modified version of Kocher's criteria, known as
> Caird's criteria, adds CRP >2 mg/dl as a fifth criterion."

**Two of the four are child-reportable and the app already asks both.** A
*history* of fever is a symptom someone noticed, not a measurement — source 1
writes *"a history of fever"* in the sentence where it lists the multivariate
predictors, which is precisely the form `limb/injury` item 11 already collects.
*Non-weight bearing* is `limb/injury` items 2 and 3. **The other two are
venepuncture.** That is the whole child-facing content of the most-cited
prediction rule in this field.

Source 1's Table 1, quoted for the variants:

> **Jung et al., 2003** — "Predictors of SAH with a probability of 98.6%: BT >
> 37 °C, ESR > 20 mm/h, CRP > 1 mg/dL, sWBC > 11,000/mL, RX showing increased
> hip joint space of >2 mm."
>
> **Luhmann et al., 2004** — "Combination of four predictors: 59% probability of
> SAH. Combination of BT, sWBC > 12,000 mm/3, **previous healthcare visit**:
> 71% probability of SAH."
>
> **Caird et al., 2006** — "Oral BT > 38.5 °C, CRP > 20 mg/L, NWB, ESR > 40
> mm/h, sWBC > 12,000 mm/3. Combination of five predictors: 97.5% probability
> of SAH."
>
> **Sultan et al., 2010** — same five variables. "Combination of five
> predictors: 59.9% probability of SAH."
>
> **Singhal et al., 2011** — same five variables. "NWB and CRP > 20 mg/L: 74%
> probability of SAH."
>
> **Yagupsky et al., 2014** — same four Kocher variables. "Most Kingella
> patients (71%) have ≤2 Kocher criteria."

Luhmann's *"previous healthcare visit"* is the only variable in the whole set
that is neither a measurement nor a manoeuvre. It is a record, not a child's
report, and it is item 28 — but it is worth naming, because it is the one place
this literature reaches for history at all.

### What happens when the rules meet a real limping child (source 2, abstract)

> "Two clinical decision rules (CDRs) have been developed to assist with the
> diagnosis: Kocher's rule (which allocates points for fever, weight-bearing
> status, white cell count and erythrocyte sedimentation rate) and Caird's rule
> (which also includes C-reactive protein)."
>
> "Of 583 patients presenting with atraumatic limp, 535 (91.8%) eligible
> patients had sufficient follow-up data. **14 (2.6%) were diagnosed with septic
> arthritis.** Kocher's rule had an AUC of 0.72 (95% CI 0.42 to 1.00), while
> Caird's rule had an AUC of 0.78 (95% CI 0.52 to 1.00) for septic arthritis."
>
> "Univariable analysis demonstrated strong associations between range of joint
> motion (unadjusted OR 13.9, 95% CI 5.0 to 38.5), signs of systemic disease
> (OR 20.5, 95% CI 6.2 to 67.7), hip pain (OR 3.8, 95% CI 1.2 to 11.7) and
> presence of fever (OR 5.1, 95% CI 1.0 to 25.1) with septic arthritis.
> **Markedly reduced range of motion compared with the unaffected side had the
> highest positive likelihood ratio (12.1, 95% CI: 7.5 to 19.5)**, while
> inability to weight bear had a positive likelihood ratio of 3.85 (95% CI 2.49
> to 5.95). None of the tested clinical findings had a negative likelihood ratio
> less than 0.3, or a positive predictive value of more than 25%."
>
> "Septic arthritis is a relatively uncommon diagnosis in children presenting to
> the ED with an acute limp. Markedly reduced range of motion and inability to
> weight bear appear to be the strongest predictors of septic arthritis;
> however, their absence is insufficient to rule out the diagnosis."

**Read the strongest predictor slowly.** *"Markedly reduced range of motion
compared with the unaffected side"* is (a) a range, (b) graded as *marked*, and
(c) a comparison against the other limb. Three separate reasons it can never be
a question, and the app's rules already forbid all three. The single best
discriminator in the atraumatic-limb literature is exactly the thing this app
is structurally incapable of collecting — the same shape as the sore-throat
packet's finding that the five most-used predictors for that complaint are four
examinations and one date. It is item 21.

And source 1 on how well the rule travels:

> "The Kocher and the Caird criteria were then applied in multiple settings,
> but were never clearly validated. Moreover, they were studied and validated
> in the years when Kingella kingae was just emerging, and this was probably
> responsible for false-negative cases in multiple centers."
>
> "A higher sensitivity (88%) was only achieved for the refusal-to-bear-weight
> criterion. Seventy-one % of patients with K. kingae-related SAH were positive
> to ≤ two Kocher criteria, and therefore had a ≤40% probability of SAH"

So in the organism that RCH (6) names for *"6 months to 4 years"* — the app's
youngest quarter — the rule is positive on two criteria or fewer in 71% of true
cases, and the one criterion that holds up is the one a child can report.

### The fever threshold problem, and it is worse than the sore-throat packet's

| Source | Threshold |
|--------|-----------|
| Kocher via source 1 | *"a history of fever >38.5 °C"* — and, in the same paper's derivation sentence, *"a history of fever"* with no number |
| Kocher via source 3 | *"fever >38°C"* |
| Jung via source 1 | *"BT > 37 °C"* |
| Caird via source 1 | *"Oral BT > 38.5 °C"* |
| Tu (2) | *"presence of fever"* — no number |
| RCH (4) | *"Symptoms of infection: fever, night sweats, chills, rigors"*; and, under Examination, *"Fever (absence does not exclude infection)"* |
| GGC (5) | *"History of fever / systemic upset"*; *"fever (duration and pattern)"* |

**Two sources that both read Kocher give two different numbers for the same
criterion**, and Kocher's own variable is described in one sentence as a
*history* and in the next as a threshold. Same resolution as every other packet:
**capture the raw fact, let the nurse classify.** The child says whether they
feel hot or shivery (already shipping, `limb/injury` item 11); the nurse holds
the thermometer, picks a threshold, and — per RCH — remembers that a normal one
proves nothing.

### The general guidance, verbatim (source 4)

Key points:

> "Most children presenting with a limp do not require investigation ·
> Observing the child's gait may help localise the problem and narrow the
> differential diagnosis · Acute inability to walk or weight bear is a red flag
> · Septic arthritis is an orthopaedic emergency and should be suspected in any
> child presenting with limp, swelling and reduced range of motion (especially
> with fever)"

Background, and the sentence that sets this packet's prior:

> "Transient synovitis, acute myositis and minor trauma are common causes of
> limp in children, but serious pathology should always be considered"

Differential by age, verbatim:

> "**0-4 years**: Trauma or child abuse · Toddler's fracture · Bone and joint
> infection · Transient hip synovitis · Acute myositis · Developmental dysplasia
> of hip (DDH)
> **5-10 years**: Transient hip synovitis · Acute myositis · Perthes disease ·
> Inflammatory arthritis
> **Over 10 years**: Stress fractures and sprains · Traction apophysitis
> (Osgood Schlatter – tibial tuberosity, Severs – calcaneus) · Slipped upper
> femoral epiphysis (SUFE) · Inflammatory arthritis
> **All ages**: Infections: osteomyelitis/septic arthritis, sepsis, bursitis,
> discitis, epidural collection · Trauma including child abuse/inflicted injury
> · Malignancy: haematological, bone, soft tissue · Rheumatological/
> immunological disorders: reactive arthritis, autoimmune arthritis,
> Henoch-Schönlein purpura (HSP), vasculitis, serum sickness, post infectious
> arthritis, Guillain-Barre syndrome, acute rheumatic fever (ARF) ·
> Intra-abdominal or genitourinary pathology: appendicitis, ovarian or
> testicular torsion · Haematological: vaso-occlusive crisis (sickle cell),
> haemophilia · Vitamin C deficiency (restricted diet eg neurodiverse child,
> ARFID) · Functional limp"

History, in full (the same eleven bullets `limb/injury` quoted, reproduced here
because this packet uses the ones that packet could not):

> "Duration of symptoms, >7 days, repeated presentations in same illness ·
> History of trauma · Pattern and severity of pain and limp, severe localised
> joint pain, pain waking from sleep · Change to urinary or bowel habit ·
> Functional limitations, inability to walk or weight bear · Symptoms of
> infection: fever, night sweats, chills, rigors, rash · Constitutional
> symptoms: unexplained weight loss, lethargy, anorexia (consider
> malignancy/haematological cause) · Recent viral infection (acute myositis,
> transient synovitis) or Streptococcal infection (throat and skin) · Dietary
> history · High-risk group for ARF"

Escalation, verbatim: *"Symptoms last more than 7 days or child unable to weight
bear or permit movement after analgesia · Systemically unwell · Clinical or
laboratory features of malignancy · Concern for child abuse or inflicted injury
· Suspecting septic arthritis · Suspecting inflammatory arthritis"*. And the
warning that undermines the body map for this group: *"Pain causing limp can be
referred. Assess the joints above and below (including spine) and abdomen to
accurately localise the source"*.

### The six diagnoses, History against Examination, verbatim (source 5)

Source 5 prints these as two columns. The **left** column is what a family or a
child says; the **right** is what a clinician finds. That layout is the
self-report filter drawn by clinicians, six times.

> **Transient Synovitis** — History: *"Preceding viral illness (approximately
> 50%) · Hip pain (may describe referred pain to thigh or knee) · Acute onset
> <1 week · Able to weight bear."* Examination: *"Well child. Weight bearing
> with limp · Afebrile · Systemically well · No / mild restriction of hip
> movements especially abduction and internal rotation. Mild / moderate pain."*
> And: *"Transient synovitis will self resolve within 7-14 days. Children are
> otherwise well and afebrile."*
>
> **Perthes disease** — History: *"Onset over weeks · Mild hip/groin pain ·
> Referred pain to knee/thigh · Systemically well."* Examination: *"Limp ·
> Limitation of hip rotation · Systemically well · Afebrile · Nil evidence of
> inflammation · No other joint involvement."*
>
> **SUFE** — History: *"Hip / groin / thigh / knee pain · Systemically well ·
> Acute or subacute onset · Weight >90th centile."* Examination: *"Leg
> externally rotated and shortened. Restricted hip movements- especially
> internal rotation · Afebrile · Systemically well · Nil other joint
> involvement · No joint inflammation."*
>
> **Septic arthritis / Osteomyelitis** — History: *"Severe pain on movement +/-
> at rest · Complete refusal to weight bear/use affected limb · History of fever
> / systemic upset."* Examination: *"Febrile · Systemically unwell · Unable to
> weight bear · Severely restricted movement in affected joint · Pseudoparalysis
> · Erythema · Swelling · Hot to touch · Tender on palpation · Spinal
> tenderness."*
>
> **Malignancy / leukaemia** — History: *"Malaise · Anorexia · Weight loss ·
> Bone pain · Nocturnal pain · Neurological symptoms – paralysis / paraesthesia
> · New incontinence / retention / constipation."*
>
> **JIA** — *"Swollen and (or) restricted joint(s) · Stiffness. Often worse in
> morning · Duration approaching or exceeding 6 weeks."*
> **Systemic JIA (SJIA)** — *"Daily or twice daily spiking fever · Macular rash
> which appears when febrile and subsequently fades · Pallor · Lymphadenopathy ·
> Hepatosplenomegaly · Stiff or swollen joints."*

Source 5's red-flag framing, verbatim: *"Red flags – consider serious pathology
if any present"*, followed by the SJIA, JIA, septic arthritis/osteomyelitis and
neoplasm rows above. Its history-taking instruction: *"SOCRATES for full history
of pain (site, onset, character, radiation, associated symptoms, timing,
exacerbating/relieving factors, severity, **does it wake patient during the
night**)"*, *"Preceding illness"*, *"Systemic symptoms - fever (duration and
pattern), rash, weight loss, night sweats, bruising / bleeding, joint
swelling/stiffness"*. On osteomyelitis: *"With osteomylitis the presenting
features can be subtle… Erythema and joint warmth are often not obvious. Pain is
usually severe and children will often hold the affected limb in a flexed
position or completely stop using the limb (pseudoparalysis). Presentation can
be subtle in young children."* And, exactly as `limb/injury` recorded:
*"Always consider NAI as a cause of limb pain / limp."*

### Infection and swelling, verbatim (sources 6 and 7)

Source 6, History, in full:

> "Site of pain · Onset and duration of symptoms – eg acute (<2 weeks) or
> chronic · Fever – may not be present, particularly in infants · History of
> trauma or fall – symptoms may be incorrectly attributed to minor injury ·
> Functional limitations – eg limited range of motion, refusal to weight bear or
> non-use of the affected limb or joint · Irritability in infants"

*"History of trauma or fall – symptoms may be incorrectly attributed to minor
injury"* is source 6 saying, about a septic joint, exactly what source 5 says
about a limp: *"History of trauma (interpret with caution as this can be
coincidental or may exacerbate a chronic problem)"*. **Two guidelines warn that
a "yes" to the branch-point question can be a coincidence.** That is a caution
about `limb/injury` item 1 that belongs on the nurse's surface, and it is the
strongest argument in either packet against treating the branch as a hard gate.

Source 7, History, in full:

> "Joint swelling: site, onset (<2 weeks is acute), character (**migratory/early
> morning**) · Fever · Functional limitation eg refusal to weight bear, or use
> affected joint · **Constant severe pain or night pain** · Trauma/injury ·
> Systemic features: Weight loss /fatigue/night sweats, rash, unexplained
> bruising, visual impairment, diarrhoea · **Recent illness** · Family history:
> haemophilia, autoimmune or inflammatory conditions · Medication"

and, per cause:

> "Reactive arthritis — **Recent illness: pharyngitis, gastroenteritis,
> urethritis (Chlamydia). Onset 7 to 14 days later.** Oligo/monoarticular
> arthritis, normally lower limbs"
>
> "Acute rheumatic fever (ARF) — At risk population · Fever · **Migratory
> polyarthritis/arthralgia – usually large joints** · Heart murmur"
>
> "Leukaemia / Bone or soft tissue malignancy — Fever, weight loss, lethargy,
> fatigue, anorexia, night sweats, **Nocturnal pain** · Pallor, bruising ·
> Hepatosplenomegaly/abdominal mass"
>
> "Henoch-Schönlein purpura — Purpuric rash (normally affecting lower limbs) ·
> Usually lower limb joints affected · **Preceding upper respiratory joint
> infection**"
>
> "Juvenile idiopathic arthritis — Fever, rash · Oligo/polyarticular arthritis ·
> Enthesitis · Psoriasis · Haematuria · Hepatosplenomegaly · **Normally can
> weight bear**"

Note that last one. **JIA's row says the child *can* weight bear.** The
weight-bearing criterion that carries the septic-arthritis rules is silent in
the diagnosis whose window is six weeks, and that is why this packet does not
lean on it.

### Growing pains — a rule literature with no rule (sources 8, 9, 10, 13)

Walters' ten criteria, verbatim via source 10:

> "(1) usually pain in both legs; (2) pain starts between ages 3 and 12 years;
> (3) pain typically occurs at the end of the day or during the night; (4) no
> limitation of activity nor limping; (5) typical distribution in the anterior
> thigh, calf, and posterior knee muscles; (6) intermittent pain with some
> pain-free days and nights; (7) normal physical examination, no evidence of
> orthopedic disorders, trauma, or infections; (8) unremarkable results of
> laboratory tests (such as erythrocyte sedimentation rate), radiograph and bone
> scan; (9) pain for at least 3 months; and (10) no associated lack of
> well-being"

Source 10's own cohort of 268: *"226 patients (84.3%) had bilateral leg pain,
and all had pain in the lower extremities"*; onset *"Morning 7/163 (4.3%),
Afternoon 5/163 (3.1%), **Night 151/163 (92.6%)**"*; *"Limitation of activity 0
(0)"*.

Source 8, the scoping review, verbatim:

> "There was extremely poor consensus between studies as to the basis for a
> diagnosis of growing pains. The most consistent component was lower limb pain,
> which was mentioned in 50% of sources. Pain in the evening or night (48%),
> episodic or recurrent course (42%), normal physical assessment (35%), and
> bilateral pain (31%) were the only other components to be mentioned in more
> than 30% of articles. Notably, more than 80% of studies made no reference to
> age of onset in their definition, and 93% did not refer to growth."

and its Table 2 heading, verbatim: *"Most Commonly Mentioned Characteristics of
Growing Pains — Pain location: Bilateral pain, Lower limb pain, No joint pain,
Muscular pain · Pain pattern: **Evening or night pain, Absence of morning
pain** · Pain trajectory: Episodic or recurrent · Physical examination and
investigations: Normal physical examination, Normal radiography or laboratory
findings"*.

Source 9, verbatim:

> "Findings typical for growing pains include bilateral lower extremity pain
> usually experienced in the early evening or at night. **The pain is not caused
> by activity and will not cause a limp.**"
>
> "While children may wake at night with growing pains, the pain is typically
> self-limited and resolves by morning. **Conversely, pain that frequently
> occurs in the morning or with activities should prompt evaluation for
> inflammatory arthritis or trauma.**"
>
> "Refusal to bear weight and changes in gait are not consistent with growing
> pains."
>
> "Extremity pain with systemic symptoms such as fever, weight loss, night
> sweats, fatigue, or pallor should lead a clinician to investigate systemic
> conditions"
>
> "Systemic symptoms do not support the diagnosis of growing pains"

Source 13's two facing lists, verbatim. The reassuring one:

> "The 'rules' of growing pains (please note - these are reassuring features).
> Age range 3–12 years. Pains symmetrical in lower limbs and not limited to
> joints. **Pains never present at the start of the day after waking.** Child
> doesn't limp. **Physical activities not limited by symptoms.** Physical
> examination normal… Systemically well. Major motor milestones normal."

and the concerning one:

> "Indications for concern and warranting referral… Systemic upset (red flags to
> suggest sepsis or malignancy – fever, malaise, anorexia, weight loss, raised
> inflammatory markers, bone pain, **persistent or worsening night pain**).
> Abnormal growth (height and weight). Abnormal developmental milestones…
> Impaired functional ability (ask about play, sport, schoolwork, 'clumsiness').
> Limping (intermittent or persistent). **Morning symptoms (other than tiredness
> after disturbed sleep).** Asymmetric joint pain or swelling that comes and
> goes, **changes site (migratory)**… Widespread pain (such as upper limbs and
> back). School absenteeism."

Source 13 also warns, verbatim: *"The term is often used when there is
uncertainty about the diagnosis and care must be taken to not miss serious
pathology, including malignancy."* That sentence is why "growing pains" is a
banned phrase in this packet — see wording cautions.

### Acute myositis, verbatim (source 11)

> "The diagnosis of this condition is based on the recent influenza infection,
> clinical findings of **sudden onset of bilateral calf pain, impaired gait, or
> refusal to walk**, and confirmatory laboratory findings of elevated serum
> creatine kinase (CK) levels. BACM usually emerges during the convalescent
> phase of the febrile illness and is clinically distinct from the generalized
> myalgia commonly associated with early influenza symptoms."

Cohort: *"113 children (mean age 7.0 ± 4.2 years)… BACM was identified in 37
children (32.7%), who were significantly older than patients without myositis
(9.3 ± 2.7 vs. 6.0 ± 4.5 years)"*. RCH (4) lists acute myositis in the 0–4 and
5–10 bands and gives it no features; this is the only source read that does.
Its child-facing content is *recent illness* — already shipping — plus the
timing detail that the leg pain comes **after** the fever has settled, which is
a nurse-side fact and not a question.

### The night-pain polarity trap

Night pain appears in this literature twice, pointing in opposite directions:

| Source | Night pain means |
|--------|------------------|
| Walters (3) via (10); source 8 (48% of definitions); source 9; source 13 | *reassuring* — the characteristic timing of a benign syndrome, in 92.6% of source 10's cohort |
| RCH (4) — *"pain waking from sleep"*; GGC (5) — malignancy *"Nocturnal pain"*; source 7 — *"Constant severe pain or night pain"*, leukaemia *"Nocturnal pain"*; source 13 — *"persistent or worsening night pain"* | *red flag* — infection, inflammation, malignancy |

`limb/injury` item 12 already asks it, and this packet does **not** re-ask it or
re-rank it. What this packet adds is the discriminator the sources actually use,
which is a *different* fact: source 9 — *"the pain is typically self-limited and
resolves by morning… Conversely, pain that frequently occurs in the morning…
should prompt evaluation"*; source 13 — *"Pains never present at the start of
the day after waking"* is reassuring and *"Morning symptoms"* is concerning;
source 8 — *"Absence of morning pain"* is one of the nine most-mentioned
characteristics; GGC (5) — JIA *"Stiffness. Often worse in morning"*.

**So the answer to "does it hurt at night?" cannot be interpreted without
knowing what the morning is like.** That is item 8, it is new, and it is the
best-supported new item in this packet. It is also the reason item 8 leads the
ranking despite item 11 naming a malignancy red flag directly: a yes to item 8
changes the meaning of an answer the app is *already* collecting.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | Did you fall or bump it? (mechanism — the branch point) | GGC (5) — *"History of trauma (interpret with caution as this can be coincidental or may exacerbate a chronic problem)"*; RCH B&JI (6) — *"History of trauma or fall – symptoms may be incorrectly attributed to minor injury"*; RCH (4) — *"History of trauma"* | **partial** — **already shipping** | **`limb/injury` item 1, unchanged. Not re-sourced, not re-generated, not re-ranked.** This packet is its "no" branch. What this packet adds is a second and third guideline warning that a "yes" may be a coincidence — source 6's *"incorrectly attributed to minor injury"* is about a septic joint. The branch is a routing hint for the nurse, not a gate, and decision 3 explains why the app cannot use it as one anyway. |
| 2  | Could you use it / walk on it — then, and now? | **Kocher via (1)** — *"non-weight bearing"*, one of four multivariate predictors; **Caird via (1) and (3)** — *"NWB"*; Tu (2) — *"inability to weight bear had a positive likelihood ratio of 3.85"*; source 1 — *"A higher sensitivity (88%) was only achieved for the refusal-to-bear-weight criterion"*; RCH (4) — *"Acute inability to walk or weight bear is a red flag"*; GGC (5) — *"Complete refusal to weight bear/use affected limb"* under **History**; RCH B&JI (6) — *"refusal to weight bear or non-use of the affected limb"*; ASK (12) | **yes** — **already shipping** | **`limb/injury` items 2 and 3, unchanged.** The packet's real contribution here is provenance, not a question: `limb/injury` reached this fact through two *adult* rule statements and two guidelines and logged that as its biggest sourcing gap. It is now also a **paediatric prediction-rule variable**, externally validated in exactly this presentation (source 2), and the one Kocher criterion that survives in *K. kingae* infection. **Recommendation for the reviewer: `packets/limb/injury/meta.json` `cite` for items 2 and 3 should gain "Kocher; Caird; Tu 2025".** Not changed by this run, which writes only its own two files. |
| 3  | Do you feel hot or shivery? | **Kocher via (1)** — *"a history of fever"*; **Caird via (1)** — *"Oral BT > 38.5 °C"*; Jung via (1) — *"BT > 37 °C"*; Tu (2) — *"presence of fever (OR 5.1)"*; RCH (4) — *"Symptoms of infection: fever, night sweats, chills, rigors"*; GGC (5) — *"History of fever / systemic upset"* under **History**; RCH (7) — *"Fever"* | **partial** — **already shipping** | **`limb/injury` item 11, unchanged.** Same upgrade as item 2: it was a guideline item there and is a rule variable here, and Kocher's own form of it is a **history**, not a measurement — *"a history of fever"* is a thing a family noticed. Four incompatible thresholds across three sources (see above), one of which is no number at all, so the resolution is unchanged: the child reports the sensation, the nurse measures. RCH (4)'s *"Fever (absence does not exclude infection)"* must reach the nurse's surface, because a "no" here is not reassurance. |
| 4  | Does it hurt when you are keeping still, or wake you up at night? | RCH (4) — *"pain waking from sleep"*; GGC (5) — SOCRATES *"does it wake patient during the night"*, malignancy *"Nocturnal pain"*, septic arthritis *"Severe pain on movement +/- at rest"*; RCH (7) — *"Constant severe pain or night pain"*, leukaemia *"Nocturnal pain"*; source 13 — *"persistent or worsening night pain"*; and, in the opposite direction, Walters (3) via (10), source 8 (48%), source 9 | **yes** — **already shipping** | **`limb/injury` item 12, unchanged.** What this packet adds is the warning that **the answer is ambiguous on its own** — see "The night-pain polarity trap". A "yes" is the classic malignancy and infection red flag *and* the classic feature of the commonest benign cause. Item 8 is the discriminator and is new. Nothing in the app may present a "yes" here as concerning by itself. |
| 5  | Have you had a cold or a sore throat lately? | RCH (4) — *"Recent viral infection (acute myositis, transient synovitis) or Streptococcal infection (throat and skin)"*; GGC (5) — *"Preceding illness"*, transient synovitis *"Preceding viral illness (approximately 50%)"*; RCH (7) — *"Recent illness"*, reactive arthritis *"Recent illness: pharyngitis, gastroenteritis, urethritis. Onset 7 to 14 days later"*, HSP *"Preceding upper respiratory joint infection"*; BACM (11) — *"recent influenza infection… BACM usually emerges during the convalescent phase"* | **yes** — **already shipping** | **`limb/injury` item 13, unchanged as a question — but its *wording ruling* is corrected here.** That packet's decision 1 endorses **"poorly"**, which is British. This packet bans it (decision 1) and rules the US form. Five sources now, two of them naming a lag (*"7 to 14 days later"*, *"convalescent phase"*), so the question must not imply the illness has to be current. Still overlaps `throat`'s `cough` and must carry a distinct `fact`. |
| 6  | Is it the same or worse than before? (trajectory) | RCH (4) — *"Duration of symptoms, >7 days, repeated presentations in same illness"*, *"Symptoms last more than 7 days"* as escalation; GGC (5) — transient synovitis *"will self resolve within 7-14 days"*, JIA *"Duration approaching or exceeding 6 weeks"*; source 13 — *"persistent or worsening night pain"*; source 9 — *"Severity does not increase over time"* is a growing-pains feature; Luhmann via (1) — *"previous healthcare visit"* as a predictor | **yes** — **already shipping** | **`limb/injury` item 4, unchanged**, and it matters more here than there. In this branch the sources define themselves by trajectory: transient synovitis resolves inside two weeks, JIA declares itself after six, malignancy worsens, growing pains does not. It is also the only shipping item that spans the whole duration range on both packets' rulings. |
| 7  | Does it look puffy or swollen? | GGC (5) — JIA *"Swollen and (or) restricted joint(s)"*, SJIA *"Stiff or swollen joints"*, *"joint swelling/stiffness"* under History; RCH (4) — septic arthritis suspected with *"limp, swelling and reduced range of motion"*; RCH (7) — *"Joint swelling: site, onset, character"* is the guideline's first history line | **partial** — **already shipping** | **`limb/injury` item 6, unchanged.** Source 7 files joint swelling under **History** as its opening line, which strengthens the "partial" rather than changing it: the child sees puffiness, the clinician grades it, and source 5's *"Comparison between affected limb and opposite side"* is the part that stays excluded. Never ask a child to compare their two limbs. |
| 8  | **Is it stiff or hard to move when you first wake up?** | GGC (5) — JIA: ***"Stiffness. Often worse in morning"***; RCH (7) — joint swelling *"character (migratory/**early morning**)"*; source 9 — *"the pain is typically self-limited and **resolves by morning**… Conversely, **pain that frequently occurs in the morning** or with activities should prompt evaluation for inflammatory arthritis or trauma"*; source 13 — *"**Pains never present at the start of the day after waking**"* (reassuring) against *"**Morning symptoms** (other than tiredness after disturbed sleep)"* (concerning); source 8 — *"**Absence of morning pain**"* among the most-mentioned characteristics; Walters (3) via (10) — pain *"at the end of the day or during the night"* | **yes** — **NEW, and ranked first** | **The best-supported new item in the packet: five independent sources, and it is the only one that changes how an answer the app already collects should be read.** Night pain alone is ambiguous (see the polarity trap); night pain that is *gone by morning* is the benign pattern and morning stiffness is the inflammatory one. Uses the app's own shipped vocabulary — `SENSATIONS.stiff` is labelled "Stiff" / "Hard to move" — so the wording is a register match, not an invention. **Overlap, declared:** `SENSATIONS.stiff` is `older` tier and `inside` depth and asks about *now*; this asks about *the morning*, and is the half a 4-year-old can also answer. Needs a duration exception — a limb that started hurting an hour ago has had no morning. |
| 9  | **Does it hurt more when you run around or play?** | RCH (4) — *"Traction apophysitis (Osgood Schlatter – tibial tuberosity, Severs – calcaneus)"* and *"Stress fractures and sprains"* in the 5–10 and over-10 bands; GGC (5) — *"Overuse syndromes"* in the differential; source 9 — ***"The pain is not caused by activity and will not cause a limp"***, against apophysitis and stress fracture which *"typically cause activity-related pain"*; source 13 — *"**Physical activities not limited by symptoms**"* among the reassuring rules, and *"Impaired functional ability (ask about play, sport, schoolwork, 'clumsiness')"* among the concerns; source 8 — *"relationship to activity"* is one of the eight components of a growing-pains definition | **yes** — **NEW** | The second discriminator the benign literature actually uses, and the one that reaches the whole over-10 band of RCH's differential, which is otherwise entirely examination. Source 13's *"ask about play, sport, schoolwork"* is a guideline telling a clinician to ask a **child** a question about their own life, which is the strongest self-report warrant in this packet. **Asks about a pattern the child has noticed — it must never be phrased as an instruction to go and run** (decision 5, carried from `limb/injury`). **Redundancy, declared:** `chest` ships `chest-worse-move` with `fact: 'worse-on-exertion'`. That fact must **not** be reused: PLAN's rule is that only *systemic* facts merge, and whether a leg hurts on running says nothing about whether a chest does. Needs its own fact. |
| 10 | **Does the sore place move around to somewhere else?** | RCH (7) — joint swelling *"character (**migratory**/early morning)"*, and ARF *"**Migratory polyarthritis/arthralgia** – usually large joints"*; source 13 — *"Asymmetric joint pain or swelling that **comes and goes, changes site (migratory)**… very responsive to NSAIDs, with evidence of streptococcal infection"*; GGC (5) — *"Examine all joints if swelling identified in one"* as the examination counterpart | **partial** — **NEW**, minAge 8 (**judgement, not a citation**) | **The one fact in this packet that the body map cannot hold.** The map records where it hurts *now*, in as many regions as the child taps; migration is a pattern *over time*, and a child whose knee hurt on Tuesday and whose ankle hurts today taps one region. Source 13 attaches migration to the ARF pathway, which RCH (4) also lists and which this app deliberately does not otherwise touch (see "The ARF branch stays excluded"). Marked **partial** because the child can report that it moved but not that it is *asymmetric* or *polyarticular*. Age floor is this packet's own judgement — decision 8. Needs a duration exception: nothing can have moved yet this morning. |
| 11 | **Do you wake up all sweaty at night?** | RCH (4) — *"Symptoms of infection: fever, **night sweats**, chills, rigors, rash"*; GGC (5) — *"Systemic symptoms - fever…, weight loss, **night sweats**"*, and neoplasm red flags *"…Nocturnal pain · Back pain · Behaviour changes · **Night sweats** · Bruising"*; RCH (7) — leukaemia and bone/soft-tissue malignancy: *"Fever, weight loss, lethargy, fatigue, anorexia, **night sweats**, Nocturnal pain"*; source 9 — *"Extremity pain with systemic symptoms such as fever, weight loss, **night sweats**, fatigue, or pallor should lead a clinician to investigate systemic conditions"* | **partial** — **NEW**, ranked third | Four independent sources, all of them filing it as a **history** item, and all four attaching it to malignancy or systemic inflammation. It is the only constitutional symptom in this literature that a child owns: weight loss is a measurement (item 20), lethargy and pallor are observations (items 19, 26), anorexia is the tummy packet's (item 12 here). Marked **partial** because a child may conflate it with item 3 — a distinct `fact` is required, and the wording must anchor on waking up, not on feeling hot. **Do not say "night sweats"** (decision 1). |
| 12 | Have you been hungry? / eating like normal? | RCH (4) — *"Constitutional symptoms: unexplained weight loss, lethargy, **anorexia** (consider malignancy/haematological cause)"*; GGC (5) — malignancy *"Malaise · **Anorexia** · Weight loss"*; RCH (7) — *"anorexia"* in the leukaemia row; source 13 — *"anorexia"* among the systemic-upset red flags | **yes** — **NEW, not generated in v1** | Genuinely sourced four times and genuinely child-reportable, and genuinely the weakest use of a three-slot screen already contested by two packets. `limb/injury` item 17 filed appetite as belonging to the tummy packet; that packet's `ate-today` is scoped `group: 'tummy'` and will not fire for a limb-only report, so the gap is real — but it is a *nurse's* question here, not the app's best third question. Kept in the table so its absence is a decision, **omitted from `itemRank`**, and first to be added if the queue ever widens. |
| 13 | Pain in both legs; pain in more than one place; back pain | Walters (1) via (10) — *"usually pain in both legs"*; source 10 — *"226 patients (84.3%) had bilateral leg pain"*; source 8 — *"bilateral pain (31%)"*; source 13 — *"Pains symmetrical in lower limbs"*, *"Widespread pain (such as upper limbs and back)"*; GGC (5) — neoplasm *"Back pain"*; RCH (4) — *"Assess the joints above and below (including spine)"* | **yes** — **already collected** | Body map. It accepts as many regions as the child taps, in both views, down to individual toes, so *bilateral*, *widespread* and *back* are all recorded without a question — and recorded better than a yes/no would record them. **But the nurse's surface must present a multi-region tap as clinically meaningful**, because in this literature "both legs" is a reassuring pattern and "a leg and the back" is not. Distinct from item 10, which is about movement over time. |
| 14 | Episodic or recurrent course; pain-free days; repeated presentations | Walters (6) via (10) — *"intermittent pain with some pain-free days and nights"*; source 8 — *"episodic or recurrent course (42%)"*, the third most-mentioned characteristic; source 13 — *"comes and goes"*; RCH (4) — *"repeated presentations in same illness"* | **yes** — **already collected** | The reserved `happened-before` slot: *"Has this happened to you before?"*. On the "same as before" path it is replaced by `better-than-before` and `spread-since-before`, and `spread-since-before` (*"Does it hurt in more places now?"*) additionally covers part of item 13. Do not spend a bank slot on recurrence. |
| 15 | Where it hurts; site of pain; hip pain | all sources; RCH (4) — *"Identify location if possible — bone vs joint vs soft tissue"*; Tu (2) — *"hip pain (OR 3.8)"* | **yes** — **already collected, with a caution** | Body map. **The caution is stronger in this packet than in `limb/injury`.** Three sources say the tapped region may be the wrong one: RCH (4) — *"Pain causing limp can be referred. Assess the joints above and below (including spine) and abdomen"*; GGC (5) — *"limping may due to pain referred from somewhere else (groin, abdomen, spine) and hip pain may be referred to the knee or thigh"*; and both Perthes and SUFE rows in source 5 list *"Referred pain to knee/thigh"* as history. **`bodyMap.js` has no hip region in group `limb`** — `hips` is group `tummy` — so a child with a hip problem taps a knee, gets this packet, and the nurse sees "knee". Carried to "Still open". |
| 16 | Severity of pain; pattern of pain | RCH (4) — *"Pattern and severity of pain and limp"*; GGC (5) — SOCRATES *"severity"*; source 9 — *"Severity does not increase over time"* | **yes** — **already collected** | FPS-R. Never ask a child to rate severity in words. Source 9's severity criterion is a *trajectory* and is item 6, not this. |
| 17 | Duration and onset | RCH (4) — *"Duration of symptoms, >7 days"*; GGC (5) — transient synovitis *"Acute onset <1 week"*, JIA *"approaching or exceeding 6 weeks"*, Perthes *"Onset over weeks"*, SUFE *"Acute or subacute onset"*; RCH (6) — *"acute (<2 weeks) or chronic"*; Walters (9) via (10) — *"pain for at least 3 months"* | **yes** — **already collected** | `DURATIONS`. Drives decision 6 rather than becoming a question — and drives it to the **opposite** ruling from `limb/injury`, because in this branch the long band is where JIA and growing pains live. |
| 18 | Change in weeing or pooping; new incontinence, retention, constipation | RCH (4) — *"Change to urinary or bowel habit"*; GGC (5) — malignancy *"New incontinence / retention / constipation"* | **partial** — **not generated** | **Carried unchanged from `limb/injury` item 16, deliberately and with the same reasoning**, which this run did not revisit and does not weaken: a 4- to 6-year-old cannot distinguish "new incontinence" from an ordinary accident, and a screen that asks a child about wetting reads as an accusation. It is a cord-compression red flag and it belongs on the nurse's prompt list. Not a child question in v1 and not proposed as one. |
| 19 | Lethargy, malaise, fatigue, behaviour changes, systemically unwell, "well child" | RCH (4) — *"lethargy"*; GGC (5) — *"Malaise"*, neoplasm *"Behaviour changes"*, and *"Systemically well"* in four of six diagnosis rows; RCH (7) — *"lethargy, fatigue"*; Tu (2) — *"signs of systemic disease (OR 20.5)"*, the **largest odds ratio in the paper** | **mixed — mostly no — observer** | `MOODS` collects "Tired" on every report, which is the child's half. Everything else here is an observer's global judgement of a child — *"Systemically well"* is a clinician's gestalt, and *"signs of systemic disease"* is source 2's own phrase for a bundle it does not enumerate. Note the discomfort: the variable with the strongest association with septic arthritis in the only external validation read is one the app cannot define, let alone ask. |
| 20 | Weight loss; weight >90th centile; abnormal growth; height and weight | RCH (4) — *"unexplained weight loss"*; GGC (5) — SUFE *"Weight >90th centile"*, malignancy *"Weight loss"*; RCH (7) — *"Weight loss"*; source 13 — *"Abnormal growth (height and weight)"*; source 10 — growth outcomes | **no — measurement, and banned outright** | Two variables, opposite directions, both scales. Neither is knowable by a child, and **asking a child about their body weight is banned in this packet as a concept, not a phrasing** (decision 1). SUFE's centile criterion is the sharpest case: it is a real predictor in a real guideline, and there is no acceptable child-facing form of it. |
| 21 | **Range of motion: markedly reduced, restricted, asymmetric; hip abduction and internal rotation; limitation of hip rotation; "unable to permit movement after analgesia"; passive movement in all planes; pGALS** | **Tu (2)** — *"Markedly reduced range of motion **compared with the unaffected side** had the highest positive likelihood ratio (12.1)"* and *"range of joint motion (unadjusted OR 13.9)"*; RCH (4) — *"Move: Active… Passive: assess for limitations and asymmetry in all planes of motion. Compare active and passive range of movement on both sides. A marked reduction in range of motion suggests significant pathology eg septic arthritis"*; GGC (5) — every Examination column; RCH (6), RCH (7) | **no — exam** | **The single most important exclusion in this packet.** It is the strongest predictor in the only external validation read, and it is a *range*, *graded as marked*, *measured against the other limb*, and in source 4's version *after analgesia*. Three of the app's four hard rules forbid it independently. Source 2's own conclusion says it is *"not a component of either decision rule"* — so the best variable in the field is in no rule and in no app. This is the atraumatic branch's exact analogue of the sore-throat packet's finding, reached by a different route. |
| 22 | Gait: antalgic, waddling, walking/running/crawling, observed limp, pseudoparalysis, refusal to weight bear as observed, weight bearing "for four steps" | RCH (4) — *"Assess gait if able to weight bear – antalgic, waddling gait, etc or changes in mobility eg from walking to crawling"*, *"Observing the child's gait may help localise the problem"*; GGC (5) — *"Observe child - ?pseudoparalysis of affected limb (completely stopped using limb) / refusal to weight bear"*, *"Gait – walking / running (or crawling if appropriate). Running often accentuates pathological features"*; source 9 — *"changes in gait"*; source 13 — *"Child doesn't limp"*, *"Limping (intermittent or persistent)"* | **no — exam / observer** | **Not item 2.** A limp is what somebody else sees, and *"Running often accentuates pathological features"* is an instruction to a clinician to make a child run and watch — the exact manoeuvre `limb/injury`'s "third category" ruling forbids the app from delegating. **The word "limp" is banned in questions** (wording cautions): a child asked "are you limping?" is being asked to observe themselves from outside, the same failure as asking a child whether they are drooling. |
| 23 | Palpation: bony tenderness, joint tenderness, spinal tenderness, calf tenderness, crepitus, fluctuance, heat, "hot to touch", effusion, enthesitis, tendon and muscle palpation | GGC (5) — *"Joint/bony tenderness"*, *"Hot to touch"*, *"Tender on palpation"*, *"Spinal tenderness"*, *"consider discussion with orthopaedic registrar if obvious bony tenderness"*; RCH (4) — *"Feel: heat, cold, tenderness (including calf), crepitus, fluctuance"*; RCH (6) — *"Feel for tenderness, warmth and effusion in all major joints"*; RCH (7) — *"also palpate tendons (enthesitis), and muscles"*; source 9 — *"no tenderness with palpation"* | **no — exam** | The largest block, as in every packet in this project. **Never ask a child to press on their own limb.** Note source 5's *"Erythema and joint warmth are often not obvious"* for osteomyelitis: even the clinician's hands miss this one, which is an argument against, not for, delegating it. |
| 24 | Resting limb position (hip flexed, abducted, externally rotated); leg externally rotated and shortened; leg length discrepancy; symmetry; lower-extremity alignment; joint hypermobility; flat feet | GGC (5) — SUFE *"Leg externally rotated and shortened"*, *"Spine - any deformity or tenderness? Leg length - assess for discrepancy"*; RCH (4) — *"Look: resting limb position, symmetry, leg length disparity"*; RCH (6) — *"resting limb position (eg hip flexed, abducted and externally rotated)"*; source 9 — *"Lower extremity alignment should be evaluated"*; source 13 — *"joint hypermobility, flat feet"* | **no — exam** | All of it is a comparison of two limbs or a posture a clinician recognises and names. SUFE's whole examination signature lives here, which means **SUFE is invisible to this packet except through items 6, 9 and 15** — a real gap, and one worth a reviewer's eye given that source 5 calls it *"Urgent orthopaedic opinion is required."* |
| 25 | Measured temperature; observations; "full set of observations and weight"; oral BT thresholds | Kocher, Caird, Jung via (1); GGC (5) — *"All children should have a full history and examination, full set of observations and weight"*; RCH (4) — *"Fever (absence does not exclude infection)"* | **no — exam / measurement** | Item 3 is the child's half. Never ask a child for a number and never say "fever". |
| 26 | Pallor, lymphadenopathy, hepatosplenomegaly, bruising, petechiae, purpura, erythema, macular rash, abdominal mass, murmur, uveitis/red eye | GGC (5) — SJIA and neoplasm rows, *"Rash (HSP / SJIA / leukaemia)"*, *"Bruising"*; RCH (4) — *"Pallor or petechiae/purpura/ecchymosis"*; RCH (7) — *"Haematological: Pallor, lymphadenopathy, petechiae/ecchymosis/purpura"*, *"Cardiac: … murmur"*, *"Eye: Red eye"*; source 9 — *"pallor"* | **no — exam** / **out of scope by depth** | Two different reasons, kept apart on purpose. Pallor, organomegaly and a murmur are examination. Rash, bruising and purpura are **`depth: surface`** and belong to `packets/skin/rash` (decision 9) — HSP presents as a limp with a rash and this packet cannot reach it. |
| 27 | ESR, WBC, CRP, CK, blood cultures, joint aspirate and fluid WBC, FBE and film, vitamin C and D levels, streptococcal serology, ECG, X-ray, ultrasound, MRI, bone scan | Kocher, Caird, Jung, Luhmann, Sultan, Singhal via (1); Tu (2); (3); RCH (4); GGC (5); RCH (6); RCH (7); Walters (8) via (10); source 8; source 9 | **no — lab / imaging** | **Three of Kocher's four criteria and four of Caird's five are in this row.** Recorded so the arithmetic is visible: the discriminating power of the rules this packet went looking for is in a blood tube. Source 5's *"Be aware that x-ray changes are a late sign so do not be reassured by normal x-rays"* is noted only so nobody looks for a proxy. |
| 28 | Age; sex; past medical history; family history (arthritis, psoriasis, IBD, autoimmune, haemophilia); developmental milestones and age started walking; dietary history; immunocompromise; sickle cell; medication; recent vaccination; at-risk sexual behaviour; previous healthcare visit; school absenteeism | GGC (5) — *"Past medical history · Family history… · Development - milestones… · Consider NAI - (previous ED attendances, social work involvement…)"*; RCH (4) — *"Dietary history"*; RCH (7) — *"Family history… Medication · At risk sexual behaviour/intravenous drug use"*; **Luhmann via (1)** — *"previous healthcare visit"*; source 13 — *"School absenteeism"* | **no — carer or record** | Not the child's to report, and several are exclusions rather than assessments. Luhmann's *"previous healthcare visit"* is the only non-laboratory, non-manoeuvre variable in the entire septic-arthritis literature read here, and it is a **record**. Source 7's *"At risk sexual behaviour/intravenous drug use"* is in a paediatric guideline and must never be within reach of a question generator; it is named here so its exclusion is explicit. |
| 29 | Referred pain from the abdomen, groin, spine or genitals; appendicitis; ovarian or testicular torsion; testicular examination | RCH (4) — *"Intra-abdominal or genitourinary pathology: appendicitis, ovarian or testicular torsion"*, *"Assess the joints above and below (including spine) **and abdomen**"*; GGC (5) — *"Referred pain - eg. intra abdominal pathology / testicular pain"*, *"Boys - testicular examination"* | **no — deliberate exclusion** | A limping child may have a torsion, and both guidelines say so. **This app will not ask a child a question about their genitals**, and the abdominal half is already better served: `tummy` is its own group with its own packet, and a child whose tummy hurts taps it. The residual risk — a child whose *only* complaint is a leg and whose actual problem is a torsion — is real, is not closeable by question design, and is recorded here rather than quietly dropped. Same category as the NAI exclusion. |
| 30 | Non-accidental or inflicted injury | GGC (5) — *"Always consider NAI as a cause of limb pain / limp"*, *"Consider NAI - (previous ED attendances, social work involvement, notifications of concern)"*; RCH (4) — *"Trauma or child abuse"* first in every age band, *"Concern for child abuse or inflicted injury"* as escalation; RCH (6) — *"Always consider alternate diagnoses such as trauma, non-accidental injury"* | **no — deliberate exclusion** | **Unchanged from `limb/injury`, and reached here by a different route that makes it sharper.** In *that* packet the child had a story about a fall. Here the child has no explanation at all — which is precisely the presentation source 5 tells clinicians to consider NAI in. The app must still never ask. Safeguarding policy, not question design, is the instrument. The ban covers the concept: no *"did someone do this to you?"*, no *"did anyone hurt you?"*, no *"was it an accident?"* |
| 31 | "Growing pains" as a label; ARF risk group; high-risk community; personal or family history of rheumatic fever | source 13 — *"The term is often used when there is uncertainty about the diagnosis and care must be taken to not miss serious pathology, including malignancy"*; RCH (4) — *"High-risk group for ARF"*; RCH (7) — *"Groups at risk for acute rheumatic fever (ARF): Indigenous Australians, Maori and Pacific Islanders; personal or family history of ARF or rheumatic heart disease"*; source 13 — *"Streptococcal titres (consider rheumatic fever) in school-aged Maori or Pacific children"* | **no — see below** | Two exclusions in one row because they fail for the same reason: they are **labels applied to a child by someone else**. "Growing pains" is a diagnosis and a banned phrase. The ARF branch is decided by ethnicity, community and cardiac history — all records, none a child's to report — and is excluded on exactly the reasoning the sore-throat packet set out and this packet does not repeat. |

**Yield: ~62 distinct criteria across 6 named criteria sets (Kocher, Caird,
Jung, Luhmann, Sultan/Singhal, Walters) plus Tu's externally validated finding
set, and 7 guidance sources → 2 clean and 3 partial that are new to this
packet, 7 already shipping from `limb/injury`, 5 already collected elsewhere in
the app, 13 excluded as exam / observer / lab / record / deliberate, 1 out of
scope by depth.**

Of the five new items, **four are proposed for generation** (8, 9, 11, 10) and
one (12) is withheld.

Compare: head injury ~20 criteria → 5 clean; abdominal pain ~46 → 14; sore
throat ~53 → 12; limb injury ~52 → 7. This packet is the lowest of all, and
the reason is not a shortfall in searching:

| Source group | Criteria harvested | Clean items **new to this packet** |
|---|---|---|
| The six criteria sets and Tu's validation (Search A) | ~24 | **0** |
| The seven guidance and review sources (Search B) | ~38 | 2 clean, 3 partial |

## How these were found — Search A produced nothing, and that is the finding

Discovery ran as the brief specifies: comparison and external-validation
literature first, not a remembered rule name. It worked *as discovery*. Source
1's Table 1 enumerated nine studies — Kocher 1999, Jung 2003, Kocher 2004,
Luhmann 2004, Caird 2006, Sultan 2010, Singhal 2011, Yagupsky 2014, Clever
2021 — of which recall produces exactly one. Source 8 enumerated 145 studies
and two diagnostic classification systems for growing pains. Source 2 is a
prospective external validation of two rules in precisely this presentation.

**And the entire child-facing yield of all of it is two facts the app already
asks.** Kocher: history of fever, non-weight bearing, ESR, WBC. Caird: those
four plus CRP. Jung: temperature, ESR, CRP, WBC, an X-ray measurement.
Luhmann's alternative: temperature, WBC, previous healthcare visit. Tu's
strongest finding: a graded, side-compared range of motion. **Every variable in
this literature is a blood test, an imaging measurement, a clinician's hands, or
one of the two questions `limb/injury` already ships.**

So this packet inverts the previous ones' shape:

- The **tummy** packet's rules answered a question about 8% of arrivals.
- The **sore-throat** packet's rules answered a question (antibiotics) while
  the guidelines answered a different one (the airway).
- The **limb-injury** packet's rules answered a question a child cannot
  participate in — one clean item from eight rules.
- **Here the rules answer a question about 2.6% of arrivals** (source 2:
  *"14 (2.6%) were diagnosed with septic arthritis"*), **do it moderately at
  best** (AUC 0.72 and 0.78, both with confidence intervals reaching 1.00 from
  below 0.55), **fail in the commonest organism in the app's youngest band**
  (source 1: 71% of *K. kingae* cases have ≤2 criteria), **and contain nothing
  new for a child to answer.** Search A's contribution to this packet is a
  better *citation* for two existing questions and no question of its own.

The growing-pains literature is a third kind of Search A result and worth
naming as its own category: **a large literature with no rule in it at all.**
Source 8 searched eight databases and six classification systems and found
*"extremely poor consensus"*, with the most consistent single component
appearing in half the sources. It still produced two of this packet's five new
items — but as *discriminators between benign and serious*, not as criteria, and
the direction of the discrimination is the nurse's to apply, never the app's.

**For the next packet:** when Search A's variables are all laboratory values,
stop and check whether the field has a *benign* literature as well as an
emergency one. The emergency literature here is a blood test. The benign
literature — growing pains, transient synovitis, myositis, apophysitis — is
where the questions were, and it is not where a search for "prediction rule"
points.

## The ARF branch stays excluded, and the reasoning is not repeated here

RCH (4) lists *"High-risk group for ARF"* as a history bullet and acute
rheumatic fever in its all-ages differential; RCH (7) prints the at-risk groups
explicitly and puts *"Migratory polyarthritis/arthralgia"* in the ARF row, which
is half of item 10's provenance. **The branch is excluded on exactly the
reasoning the sore-throat packet set out** — it is decided by ethnicity,
community of residence and cardiac history, all of which are records and none of
which a child may be asked to route their own care. That decision is not
re-derived here; it is cited, and a reviewer who wants the argument should read
`packets/throat/sore-throat/packet.md`, "The ARF branch". What this packet adds
is only that the exclusion now costs something concrete: item 10 is generated
for the *migratory* pattern, and the app will never know whether the child it is
asked of is in an at-risk group.

## Wording cautions

> **Correction, 2026-09-07.** Six rulings stated in this section and in decision 1
> were not enforced by any regex when the packet was written: the imperative-mood
> ban, "hot"/"warm" for item 11, the noun "stiffness" and "restricted", the
> body-weight ban's own worked example *"are you a big boy?"*, and the two-limb
> comparison reached as *"the good one"* or *"either side"*. All five are now in
> `meta.bannedPhrases` (30 rules). The sixth was not a regex gap -- nothing
> stopped a packet re-generating a question another packet already ships -- and
> `screen.mjs` now flags a shared `fact` or repeated question across packets.


Ban **concepts**, not phrasings. Every rule below is transcribed into
`meta.bannedPhrases` — that is the audit `packets/STATUS.md` records as having
been skipped for five packets in the previous wave, and skipping it makes the
mechanical screen blind to everything in this section.

- **Never name a condition.** Not arthritis, JIA, septic, infection,
  osteomyelitis, synovitis, myositis, discitis, Perthes, SUFE, "slipped",
  leukaemia, cancer, tumour, sarcoma, rheumatic fever, Kawasaki, purpura,
  sickle cell. Not broken, fracture, sprain or dislocated either — an
  atraumatic child can still be told they have broken something.
- **Never say "growing pains".** It is a diagnosis, it is the one diagnosis in
  this differential that a family will already have decided for themselves, and
  source 13 says in terms that *"care must be taken to not miss serious
  pathology, including malignancy"* behind it. A question that uses the phrase
  teaches the child an answer and reassures the nurse.
- **Never name what happens next.** Not X-ray, scan, MRI, ultrasound, blood
  test, needle, cast, plaster, operation, aspiration. This literature ends in a
  joint aspiration more often than the fracture literature does; the child must
  not learn that from a question.
- **Never ask a child to compare their two limbs.** Not "is it worse than the
  other one?", not "does it bend as far as the other side?", not "do both legs
  hurt?" — the body map holds bilaterality (item 13). This is source 2's
  strongest predictor delegated to a 7-year-old and it is forbidden three times
  over.
- **Never ask a child whether they are limping**, and never use "limp", "gait",
  or "walking properly". A limp is what an observer sees. This is the same split
  as the sore-throat packet's drooling item: the child's half is "could you use
  it / walk on it" (item 2, already shipping) and the observer's half stays in
  item 22.
- **Never ask a child to press on, squeeze or poke their own limb**, and never
  ask them to perform a movement so as to report the result. Carried unchanged
  from `limb/injury`'s "third category" ruling. **Item 9 is the item at risk
  here:** "does it hurt more when you run around?" asks about a pattern the
  child has already noticed; "run around and tell me if it hurts" is an
  examination, and the difference is the whole ruling.
- **Never name a body part.** Group `limb` spans 36 regions from a thumb to a
  leg and the body map already holds which. Carried from `limb/injury` decision
  4, and extended: this literature's own words — calf, shin, thigh, groin, hip —
  are all banned too.
- **Never ask a child about their body weight, in either direction.** Not "have
  you got thinner?", not "how much do you weigh?", not "are you a big boy?".
  SUFE's criterion is a centile and malignancy's is unexplained weight loss;
  both are scales, and asking a child either one is harmful in a way no data
  justifies. New to this packet, and the reason item 20 is excluded outright
  rather than marked partial.
- **Never ask for a temperature and never say "fever".** Four thresholds across
  three sources, one of them no number at all.
- **Never ask about wetting, soiling or the toilet** (item 18), and **never ask
  about the genitals or groin** (item 29).
- **Never ask about how the injury happened a second time, and never ask about
  who caused it** (item 30). Carried unchanged.
- **Never ask a child to rate or grade anything in words** — not the pain, not
  the swelling, not the stiffness. FPS-R has severity; source 2's *"markedly"*
  is an examiner's grading and never reaches a question.
- **Never use "accident"** as a noun for the event: it carries blame and it
  collides with wetting.
- **US English, and this packet corrects a British word already shipping.**
  `limb/injury` decision 1 rules **"poorly"** for being unwell. That is British
  — the same class of error as "might be sick", which `packets/PLAN.md` records
  as having shipped for weeks. Banned here, along with "off colour", "under the
  weather", "unwell", "off your food", "have you got", "wee", "nappy",
  "plaster", "torch", and bare "sick" (UK: about to vomit; US: coming down with
  something — ambiguous either way and therefore unusable).
- Avoid "serious", "dangerous", "emergency" — already banned globally, restated
  because this packet's differential contains three orthopaedic emergencies and
  the temptation to signal urgency is real.

## Decisions

**Decided, not deferred.**

1. **Register: US English, and one shipping ruling is overturned.** This packet
   needs three new vocabulary domains — the morning, activity, and night
   sweating — so each is ruled before anything is generated:
   - **"stiff"** / **"hard to move"** — matching `SENSATIONS.stiff`'s own
     `label` and `kidLabel` exactly. Never "stiffness", never "morning
     stiffness", never "restricted".
   - **"when you first wake up"** / **"in the morning"** — never "on waking",
     never "early morning symptoms".
   - **"run around"**, **"play"** — never "exercise", "activity", "physical
     activity", "exertion", "weight bear", "mobilise".
   - **"moves around"**, **"a different place"** — never "migratory",
     "flitting", "polyarticular".
   - **"wake up all sweaty"** — never "night sweats" (a clinical term and a
     compound noun a 5-year-old does not parse), never "perspiring", never
     "clammy".
   - **"hungry"**, **"eating"** — never "appetite", never "anorexia", never
     "off your food".
   - **"had a cold or a sore throat"** for item 5's fact — **and "poorly" is
     banned**, overturning `limb/injury` decision 1, which ruled it. Bare
     "sick" is banned too, in either direction. This is the only place this
     packet contradicts the packet it inherits from, and it is a register bug,
     not a clinical disagreement.
   - **"it"**, never a body part — carried from `limb/injury` decision 4.
2. **Answer types.** `FollowUpScreen` renders yes/no only. **Corrected 2026-09-08:** this sentence was wrong. `FollowUpScreen` renders `yesno`, `count`, `text` AND `voice` (`src/screens/FollowUpScreen.jsx` lines 133-145). The packet's exclusions below were reasoned from a false premise and any that turned on it should be revisited. All five new items
   (8, 9, 10, 11, 12) are **yes/no**. Nothing here needs a widget the app does
   not have.
3. **Item 1 is the branch point and this packet is its "no" side — but the app
   cannot act on that, and the packet says so rather than assuming it.**
   `bank.js` filters on `{ group, durations, minAge, depth, subgroups }`. There
   is no conditional-follow-up mechanism and no answer-dependent filter, so
   `limb-pain` and `limb-injury` — same group, same depth — both feed the same
   three-slot queue for every child who taps an arm or a leg. Worse, `rank` in
   `build-bank.mjs` is the *index within each packet's own `itemRank`*, so this
   packet's item 8 and `limb/injury`'s item 1 both emit `rank: 0` and the tie is
   broken by `preferred` and then **alphabetically by candidate id**. Three
   things follow, all deliberate:
   - This packet does **not** re-generate any of items 1–7. Duplicating a
     shipping question would not merely waste a slot, it would put two
     candidates for the same fact into one queue, where `keyOf`'s `fact` dedupe
     would silently drop one and the choice of which would be alphabetical.
   - The four generated items are chosen to be facts `limb/injury` does not
     reach at all, so that the two packets compose rather than compete on
     content even while they compete for slots.
   - The routing problem itself is **not** solved here and is raised at the top
     of the packet and in "Still open". A reviewer must decide whether
     `limb-pain` ships before the pipeline can route on a mechanism answer.
4. **Items 2, 3, 4, 5, 6 and 7 are re-used, not re-written, and the re-use is
   the deliverable.** For each, this packet supplies new provenance and, for
   items 3, 4 and 5, a new caution:
   - **Item 2** gains its first paediatric *prediction-rule* citation (Kocher,
     Caird, Tu) — the gap `limb/injury` logged as its biggest.
   - **Item 3** gains the same, plus the finding that Kocher's variable is *"a
     history of fever"*, i.e. already the child's form, and RCH's *"absence does
     not exclude infection"*.
   - **Item 4** gains the polarity warning: a "yes" is simultaneously the
     commonest benign pattern and a malignancy red flag.
   - **Item 5** gains three more sources and a lag (*"7 to 14 days later"*,
     *"convalescent phase"*), and loses the word "poorly".
   - **Item 6** gains the trajectory windows that define four of the six
     diagnoses in source 5.
   - **Item 7** gains source 7, which files joint swelling under History.
   None of this changes a question. All of it belongs in
   `packets/limb/injury/meta.json`'s `cite` strings, which **this run does not
   touch** — it writes only `packets/limb/pain/packet.md` and `meta.json`. The
   recommendation is recorded in "Still open" so it is not lost.
5. **No item may instruct a movement, and item 9 is the one that could be
   misread as doing so.** "Does it hurt more when you run around?" is a question
   about a pattern the child already knows. "Try running and see if it hurts" is
   the examination source 5 describes — *"Running often accentuates
   pathological features"* — performed by a tablet on an unsupervised child with
   a possibly infected joint. The ruling is `limb/injury`'s, restated because
   this packet is where it is most easily broken.
6. **Duration scope, and it is the opposite of `limb/injury`'s.** The sources:

   | Source | Window |
   |--------|--------|
   | Tu (2) | *"acute limp"*; children presenting to an ED |
   | RCH (4) | any duration; **>7 days** is a red flag and a reason to consult |
   | GGC (5) | transient synovitis *"Acute onset <1 week"*, self-resolves *"within 7-14 days"*; Perthes *"Onset over weeks"*; **JIA *"Duration approaching or exceeding 6 weeks"*** |
   | RCH (6) | *"acute (<2 weeks) or chronic"* |
   | RCH (7) | *"onset (<2 weeks is acute)"* |
   | Walters (9) via (10) | growing pains: ***"pain for at least 3 months"*** |
   | BACM (11) | onset in the *"convalescent phase"* of an influenza illness |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days`, `not-sure` — **full
     packet**, with the two per-item exceptions below. `not-sure` follows every
     previous packet's convention: it means the child cannot date it, not that
     it is old.
   - `long-time` — **full packet as well.** This is the deliberate inversion.
     `limb/injury` keeps three items in the long band because a fracture rule
     expires; here **the long band is where two of the four generated items are
     most informative**: JIA declares itself at six weeks and growing pains
     require three months by Walters' own criterion, so a limb that has hurt for
     a month is *more* likely to need item 8, not less. RCH's *">7 days"* red
     flag points the same way.
   - **Exception, item 8:** drops `just-now`. A limb that started hurting an
     hour ago has had no morning to be stiff in.
   - **Exception, item 10:** drops `just-now` and `this-morning`. Nothing can
     have moved anywhere yet.
   - Item 11 takes **no** exception, deliberately: it asks about the *child*,
     not about the limb, so a child whose leg started hurting an hour ago can
     still say whether they woke up sweaty last night.
7. **Item priority, and one question per item.** Four generated items compete
   for three bank slots *and* compete with `limb/injury`'s nine (decision 3).
   Never ask two questions from the same item. Order:

   `8 (stiff in the morning) → 9 (worse when you run around) →`
   `11 (wake up sweaty) → 10 (does the sore place move)`

   **Item 8 leads** because it is the only item in either limb packet that
   changes how an *already collected* answer should be read: night pain is
   ambiguous and morning symptoms disambiguate it, in five sources. Item 9 is
   second on breadth — it is the only child-reportable item that reaches RCH's
   over-10 band at all. Item 11 is third despite naming a malignancy red flag
   directly, because a child may conflate it with the fever question the app
   already asks and because it rests on four sources that all print it inside a
   list rather than as a discriminator. Item 10 is last: it is the hardest for a
   child, it is the only floored item, and its pathway (ARF) is one this app has
   already excluded. Item 12 is **not generated in v1** and is therefore absent
   from `itemRank`. **Proposed, not yet confirmed by review** — this ordering
   decides what a child is actually asked.
8. **One age floor, and it is judgement, not citation.** Item 10 (`minAge: 8`).
   **No source floors it.** The reasoning is the packet's own: "does the sore
   place move around?" asks a 4- to 6-year-old to compare a memory of last week
   with a sensation now, and the same reasoning the sore-throat packet applied
   to its laterality item applies here — a young child answers the question's
   shape rather than the fact. Everything else is unfloored, including items 8
   and 9, because both are plain history in guidelines that set no floor and
   because Walters' and PMM's own age range (*"3–12 years"*, *"Age range 3–12
   years"*) starts below the app's. **Recorded as JUDGEMENT, NOT A CITATION.**
9. **`depth: inside`, argued rather than assumed — and the boundary is worse
   here than in `limb/injury`.** Bone, joint and muscle are `inside`, and the
   whole differential lives there. But three of the seven guidance sources
   collect a **rash** in the same breath as the limp (GGC's *"Rash (HSP / SJIA /
   leukaemia)"*, RCH (4)'s *"skin changes eg rash"*, RCH (7)'s HSP row), and HSP
   is a limp *with* a rash in a child who may well answer "on my skin" and
   receive none of this packet. `packets/skin/rash/` exists and is scoped
   `depth: surface` across all groups, which is where that child is served — so
   unlike `limb/injury`, this packet's surface half is not missing, it is simply
   another packet. Recorded as a decision so that nobody "completes" this packet
   by adding a rash question to it.
10. **No hand-written `limb` follow-up is at risk from this packet.** `fell`,
    `can-move` and `limb-swollen` were already carried across by `limb/injury`
    items 1, 3 and 6; `limb-see` and `limb-itch` are on the `surface` list and
    this packet does not claim that depth. This packet adds four questions to a
    group the bank already covers and drops none. Checked, because
    `followUpsForGroups` does `if (sourced.length) continue` and the failure is
    silent.
11. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, moods, helps,
    the reserved recurrence slot, **and both other packets that can fire for the
    same child**:
    - **Rejected as duplicates of the app's own screens:** item 13 (body map
      takes as many regions as the child taps, so bilateral, widespread and back
      pain are recorded without a question), item 14 (`happened-before`, plus
      `spread-since-before` on the repeat path), item 15 (body map), item 16
      (FPS-R), item 17 (`DURATIONS`), item 19's tiredness half (`MOODS.tired`).
    - **Rejected as duplicates of `limb/injury`:** items 1–7. See decision 4.
      This is the largest block of rejections in the packet and the reason the
      new-item count is 5 rather than 12.
    - **Declared overlaps, kept:** item 8 touches `SENSATIONS.stiff`, which is
      `older`-tier and `inside`-depth and asks about *now*. Item 8 asks about
      *the morning*, and is available to the `young` tier that `stiff` excludes.
      Item 11 touches item 3's fact (`feels-feverish`) and **must not reuse
      it** — a distinct fact is required, and `packets/PLAN.md` records that
      row 1 (general unwell) will eventually own `feels-feverish` across four
      packets, which makes a collision here actively harmful.
    - **Fact assignment, explicit:** item 9 must **not** take
      `worse-on-exertion`, which `chest`'s `chest-worse-move` owns. PLAN's rule
      is that only *systemic* facts merge; whether a leg hurts on running says
      nothing about whether a chest does, and merging them would suppress one of
      the two. Items 8, 10 and 11 need new facts of their own.
    - **Kept despite `HELPS` overlap:** `HELPS` offers "An ice pack" and "A
      bandage", which touch item 7. `HELPS` records what the child *wants*; the
      items record what is *true*.
12. **Items 12, 18, 19's non-tired half, and 20 are in the packet and are not
    generated in v1.** Each for a stated reason in its row. Recorded as one
    decision because the sidecar still has no `notGenerated` field (a gap
    `limb/injury` and the tummy packet both logged), and a generator reading
    only `itemRank` would treat their absence as an oversight rather than a
    ruling.

## Still open

- **The routing problem (decision 3) is the blocker.** Two packets, one group,
  one depth, one three-slot queue, no conditional follow-ups, and ties broken
  alphabetically by candidate id. A child who fell will be asked "is it stiff in
  the morning?" and a child who did not will be asked "could you stand on it
  right after it happened?" — the second of which `limb/injury` already lists as
  unanswerable for a child who never fell. The options a reviewer has to choose
  between: (a) `bank.js` learns an answer-dependent filter keyed on the
  `limb-mechanism` fact; (b) the two packets merge into one; (c) `limb-pain`
  ships anyway on the argument that its four items are useful to both branches —
  which is arguable for items 8, 9 and 11 and false for item 10. **This packet
  cannot resolve it; it writes only its own two files.**
- **`packets/limb/injury/meta.json` `cite` should be updated** for its items 2
  and 3 to add "Kocher; Caird; Tu 2025", and its item 13 wording ruling should
  lose "poorly". Not done by this run. Recorded so it is not lost.
- **Kocher and Caird were not read first-hand** (sources 14, 15). Two
  independent secondary reproductions agree on the variables and disagree on
  the fever threshold. A future run with institutional access should get the
  1999 and 2004 JBJS papers and settle whether the variable is *"a history of
  fever"* or *"a history of fever >38.5 °C"* — the difference decides nothing
  about the wording of item 3, but it decides what the nurse's surface should
  say the question means.
- **Source 2's full text is behind a subscription.** Everything this packet says
  about the external validation comes from the abstract, which is unusually
  complete (it prints AUCs, ORs and likelihood ratios) but does not say how
  *"signs of systemic disease"* — the variable with the largest odds ratio in
  the paper — was defined. That definition is the single most useful missing
  fact in this packet.
- **Group `limb` has no hip region.** `bodyMap.js` puts `hips` in group
  `tummy`. Tu (2) reports *"hip pain (OR 3.8)"*; transient synovitis, Perthes
  and SUFE are all hip diagnoses; and source 5 says hip pain *"may be referred
  to the knee or thigh"*. So the commonest site in this literature is either
  tapped as a knee (this packet fires, mislocalised) or tapped as `hips` (the
  tummy packet fires, wrongly). Needs a ruling.
- **The `young` tier has no evidence under it, again.** Source 12 is a
  translation study of a function questionnaire in children with disability,
  mean age 12.74, nothing below 5 — and it is the *only* self-report evidence
  in either limb packet. Worse here: source 10's growing-pains descriptions were
  recorded in charts from what parents said, and source 13 tells clinicians to
  *"ask about play, sport, schoolwork"* without saying whom. **Nothing read for
  this packet establishes that a 4-year-old reports morning stiffness or night
  sweating reliably**, and items 8 and 11 are the two that most depend on it.
- **Item 11 and item 3 may not be separable by a child.** "Do you feel hot or
  shivery?" and "do you wake up all sweaty?" are different clinical facts and
  possibly one childhood fact. If a reviewer judges them inseparable, item 11
  should be withdrawn rather than reworded, because the alternative is two
  questions in one queue answering the same thing.
- **SUFE is effectively invisible to this app** (item 24). Its entire
  examination signature is posture and rotation, its history is *"Hip / groin /
  thigh / knee pain"* in a group with no hip region, and its one non-examination
  criterion is a weight centile this packet bans outright. Source 5 calls it
  *"Urgent orthopaedic opinion is required."* A reviewer should know the app
  contributes nothing to finding it.
- **The `notGenerated` field still does not exist** in the sidecar schema. Four
  items here are in that state (decision 12), on top of the nine `limb/injury`
  and tummy already logged.
- **Item 18 (change in weeing or pooping)** is unchanged from `limb/injury` and
  still needs a clinical view on whether it belongs on a nurse prompt list.

## Ambiguity in the sources

Recorded rather than papered over.

- **Two sources that both read Kocher give two different fever thresholds.**
  Source 1: *"a history of fever >38.5 °C"*. Source 3: *"fever >38°C"*. Source 1
  also states the same criterion twice within itself, once with the threshold
  and once — in the sentence that actually lists the multivariate predictors —
  as bare *"a history of fever"*. The packet uses the bare form, because it is
  the form in the derivation sentence and because no item depends on a number.
  A reviewer should know the two secondary sources disagree.
- **Source 9 contradicts itself about laterality, in a table.** Its running text
  says *"while unilateral pain is seen in up to 20% of cases, bilateral pain is
  more characteristic of growing pains"* and *"80% of patients with growing
  pains describe bilateral discomfort"*. Its **Table 2**, "Clinical findings most
  consistent with a diagnosis of growing pains", says under Pain location:
  ***"Usually unilateral"***. That is almost certainly a typographical error in
  the table, and it is exactly the kind of error a packet built by quoting a
  single table would have shipped. Nothing here depends on laterality — item 13
  routes it to the body map — but the contradiction is recorded because it is
  the clearest argument in this project for reading a source's prose as well as
  its tables.
- **Growing pains has no agreed definition and the packet does not pretend
  otherwise.** Source 8: *"extremely poor consensus"*, with the most consistent
  component (lower limb pain) in 50% of sources and the fifth (bilateral pain)
  in 31%. Walters' ten criteria are quoted here because source 10 reproduces
  them and applies them to 268 children, not because they are authoritative —
  source 10 itself reports a mean of only *"6.7 ± 0.9"* of the ten criteria met.
  **No item cites Walters alone.**
- **Source 13 is an educational resource, not a guideline.** PMM is used only
  where it agrees with sources 8, 9 and 10, and no item cites it alone. Its two
  facing lists are quoted because their *form* — reassuring features against
  indications for concern — is the closest thing in this literature to a
  self-report filter, not because they carry a guideline's authority.
- **Source 5 is six years old and predates two of its own references' successor
  editions.** GGC 1126 was reviewed 16/09/2019 and states it replaces the
  earlier "Hip pain", "Irritable hip", "Septic arthritis / osteomyelitis" and
  "Limping child" guidelines. Its Kocher references are to the 1999, 2004 and
  2006 papers. Nothing in it reflects source 1's *K. kingae* critique or source
  2's 2025 validation. It is used here for its History/Examination layout, which
  is not time-sensitive, and never for a threshold.
- **Source 11's population is hospitalised children with confirmed influenza.**
  Its 32.7% BACM figure is a proportion of an inpatient influenza cohort, not a
  rate among children who limp into an ED, and the packet never uses it as one.
  Only its clinical description is used, and only to give RCH's bare
  *"Acute myositis"* some content.
- **Tu (2) reports that no finding it tested was good enough to rule anything
  out**: *"None of the tested clinical findings had a negative likelihood ratio
  less than 0.3, or a positive predictive value of more than 25%."* That
  sentence applies to the two items this packet re-uses as much as to the ones
  it excludes, and it is the reason nothing in either limb packet may be read as
  reassurance.
- **The Queensland "Limp" guideline has now failed to fetch on two separate
  runs** (403 on both the page and the PDF). It is named in source 4's reference
  list and is the one paediatric emergency guideline for this complaint that
  neither packet has read. Nothing depends on it, and a third run should not
  spend budget on the same host.
