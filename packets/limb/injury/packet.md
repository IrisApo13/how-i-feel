# Hurt arm or leg

Presenting complaint · packet `limb-injury` · serves group `limb`, depth
`inside` · packet v1 · assembled 2026-08-31
Status: **not yet clinically reviewed** · sources verified first-hand: 13 of 13

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

(12 in full text, 1 abstract only — see source 4)

> Source material for writing questions. Lists what clinicians assess in a child
> who arrives with a hurting arm, hand, leg or foot, and marks which of those a
> child can report about themselves. **Not** a diagnostic tool: nothing here may
> be scored, summed, or shown to a child or nurse as a suggested cause. The
> prediction-rule literature for this complaint is almost entirely
> *radiography-decision* literature — "does this child need an X-ray?" — and its
> variables are overwhelmingly things a clinician's hands find. No condition
> name reaches runtime.

## Scope

**The complaint is wider than "limb injury", and it has to be.** The app learns
the complaint from a tap on the body map. A tap on `arm-left` says *this hurts*;
it does not say *I fell off the monkey bars*. Roughly half of this literature
(the fracture rules) presupposes trauma and the other half (the limping child
guidelines) presupposes its absence, and **the app cannot know which it has
until it asks**. So the packet is organised around *a limb that hurts*, and
item 1 — "did you fall or bump it?" — is the branch point between the two
bodies of literature rather than one question among many. It is also the
question the app already ships. See decision 3.

**Age.** App covers 4–12. Age floors in this literature are unusually shallow
and they are of three different kinds, which must not be conflated:

- **Examiner-capability floors.** APWR *"excluded [children] younger than 3
  years old, as it is difficult to obtain an objective physical examination"*
  (source 2). That is a floor on the *examination*, not on the child's speech.
  The elbow extension test enrolled children *"3-15"* (source 6); PET enrols
  *"between the ages of 2 and 17 years"* (source 7).
- **Rule-validity floors.** NICE NG38 (source 11) is explicit and gives two
  different ones: *"Use the Ottawa knee rules to determine whether an X‑ray is
  needed in people over 2 years with suspected knee fractures"* (1.2.1) and
  *"Use the Ottawa ankle and foot rules to determine whether an X‑ray is needed
  in people over 5 years with suspected ankle fractures"* (1.2.2). So a
  4-year-old is inside NICE's knee floor and outside its ankle floor for the
  *same* underlying fact — inability to bear weight.
- **Instrument floors.** The Activity Scale for Kids, the one validated
  *self-report* function instrument found, is *"intended to measure physical
  disability in children aged 5 to 15 years"* (source 13).

**No item in this packet carries a `minAge`.** The reasoning is the brief's own:
a validity floor on an item that is *also* plain history in a complaint
guideline setting no floor is an invention. Inability to walk or weight bear is
plain history in sources 9 and 10, neither of which sets any floor — source 9
lists it among the causes to consider *"0-4 years"* as well as older. NICE's
"over 5" is a floor on *when to apply the Ottawa ankle rule to decide about an
X-ray*, not a claim that a 4-year-old cannot say whether they could stand up.
See decision 8.

**Duration.** Decided in decision 6. In short: the radiography rules enrol
within 72 hours and the limping-child guidelines run to 7 days and beyond, so
`few-days` keeps the full packet, and `long-time` keeps three items — because
in this complaint, unlike abdominal pain, the *long* band is the dangerous one
(source 9 makes *"limp > 7 days"* a reason to escalate).

**Depth.** This packet is the `inside` half of group `limb`: bone, joint and
"deeper in the arm" complaints. Cuts, scrapes, bites, rashes and itching are
`surface` and are **not carried here**, even though sources 9 and 12 both
collect wounds and bruising alongside limb injury. This is a less clean split
than tummy's and it is argued in decision 9, not assumed.

**Out of scope by age or setting, and not carried:** infant and pre-verbal
presentations (source 9's *"Toddler's fracture"*, *"Developmental dysplasia of
hip"*, source 10's *"Development - milestones - age patient started walking"*);
anything requiring bloods, imaging or a joint aspirate; management and
follow-up (all of NG38 §§1.3–1.4); adolescent and adult criteria (the Ottawa
knee rule's *"55 years of age or older"*).

## Sources

1. **Mulders MAM, Walenkamp MMJ, Dubois BFH, Slaar A, Goslings JC, et al.**
   "External validation of clinical decision rules for children with wrist
   trauma." *Pediatr Radiol* 2017;47(5):590–598. **Read first-hand** via
   PMC5391386. **This is the Search A discovery source** — a systematic search
   for every wrist rule in children, which surfaced three rules (Pershad,
   Webster, Rivara) that recall would never have produced, and reproduces all
   three verbatim in its Table 3.
2. **Slaar A, Walenkamp MMJ, Bentohami A, Maas M, et al.** "A clinical decision
   rule for the use of plain radiography in children after acute wrist injury:
   development and external validation of the Amsterdam Pediatric Wrist Rules."
   *Pediatr Radiol* 2015;46:50–60. **Read first-hand** via PMC4706582. The only
   *validated* paediatric wrist rule; its 18-variable case record form is the
   most complete inventory of what a clinician does to a hurt wrist.
3. **Gomes YE, Chau M, Banwell HA, Causby RS.** "Diagnostic accuracy of the
   Ottawa ankle rule to exclude fractures in acute ankle injuries in adults: a
   systematic review and meta-analysis." *BMC Musculoskelet Disord*
   2022;23:885. **Read first-hand** via PMC9502997. Used **only** for its
   verbatim statement of the Ottawa Ankle Rules. **It is an adult review** —
   the paediatric evidence is source 4 and source 11.
4. **Libetta C, Burke D, Brennan P, Yassa J.** "Validation of the Ottawa ankle
   rules in children." *J Accid Emerg Med* 1999;16(5):342–344. **Abstract read
   first-hand** via PMC1347053; the full text is a page-scan PDF that did not
   extract. Establishes that the rule works in children 1–15: *"The sensitivity
   of the Ottawa ankle rules was 98.3% and the specificity 46.9%."* Nothing in
   the items table depends on anything beyond that sentence and the age range.
5. **Mohamed A, Sharkawy AME, Elimam A, et al.** "Ottawa Knee Rule:
   Investigating Use and Application in a Tertiary Teaching Hospital."
   *Cureus* 2020;12(6):e8812. **Read first-hand** via Europe PMC. Used **only**
   for its verbatim statement of the five Ottawa Knee Rule components — the
   rule is quoted here at one remove, like the tummy packet's PAS. **Adult
   cohort.** The paediatric validation is source 14, which was **not read**.
6. **Appelboam A, Reuben AD, Benger JR, et al.** "Elbow extension test to rule
   out elbow fracture: multicentre, prospective validation and observational
   study of diagnostic accuracy in adults and children." *BMJ* 2008;337:a2428.
   **Read first-hand** via Europe PMC (PMC2600962). Contributes two things no
   rule does: an explicit *method* for the test (so the elicited/noticed split
   can be made honestly), and a **recall criteria box** that is pure
   child-facing history.
7. **Saris TFF, van Bergen CJA, The B, Boele van Hensbroek P, Schep NWL, van
   Boekel LC, Eygendaal D.** "Development and validation of the paediatric
   elbow trauma (PET) rules as a decision rule for radiography in traumatic
   elbow injuries: a study protocol." *BMJ Paediatr Open* 2023;7:e001833.
   **Read first-hand** via Europe PMC (PMC10151907). Caveat, exactly as with
   SPASMS in the tummy packet: **it is a protocol.** Its candidate variables
   are being tested, not validated. No item depends on it alone.
8. **Baykan A, Hartley RL, Ronksley PE, et al.** "Prospective Validation of the
   Calgary Kids' Hand Rule: A Clinical Prediction Rule for Pediatric Hand
   Fracture Triage." *Plast Surg (Oakv)* 2022;32(1):92–99. **Read first-hand**
   via PMC10902491. **Contributes zero items**, and is kept in the source list
   precisely because that is a finding — see "The rules that gave nothing".
9. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "The limping or non-weight bearing child"**, last updated October 2025.
   **Read first-hand** via `scripts/fetch-source.mjs`. **The Search B source.**
   Organised by the presenting complaint, splits History from Examination, and
   supplies almost every child-reportable item in this packet.
10. **NHS Greater Glasgow & Clyde, paediatric emergency medicine guideline
    1126, "Atraumatic painful limb, paediatrics"**, v1, reviewed 16/09/2019.
    **Read first-hand** via `rightdecisions.scot.nhs.uk`. The second Search B
    source, and the more useful of the two for wording: it tabulates
    *History* against *Examination* for each diagnosis, which is the
    self-report filter already half-applied by clinicians.
11. **NICE NG38**, *Fractures (non-complex): assessment and management* (2016).
    **Read first-hand** via `scripts/fetch-source.mjs`. Contributes the two
    rule-validity age floors, the NAI recommendation, and the instruction to
    assess pain *"using a pain assessment scale suitable for the person's age"*
    — which the app already satisfies with FPS-R.
12. **Cintean R, Eickhoff A, Zieger J, Gebhard F, Schütze K.** "Epidemiology,
    patterns, and mechanisms of pediatric trauma: a review of 12,508 patients."
    *Eur J Trauma Emerg Surg* 2023;49:451–459. **Read first-hand** via Europe
    PMC (PMC9925538). The "what actually walks in" source, and the evidence
    behind the depth decision and the item ranking.
13. **Shakya R, Suwal R, Adhikari I, Shrestha J, Gyawali S, Shrestha A.**
    "Cross cultural adaptation and validation of Nepali Version of Activity
    Scale for Kids (ASK)." *J Patient Rep Outcomes* 2022;6:64. **Read
    first-hand** via Europe PMC (PMC9203610). The only *self-report* evidence
    found for this complaint. **Limits worth knowing:** it is a translation
    study, mean age 12.74, in children with physical disability — **not** an
    injury population, and nothing at all below 5. It supports "children of
    roughly this age can report their own physical function"; it validates
    nothing for a ward and says nothing about a 4-year-old with a broken wrist.

**Attempted and not used.**

14. **Bulloch B, Neto G, Plint A, et al.** "Validation of the Ottawa Knee Rule
    in children: A multicenter study." *Ann Emerg Med* 2003;42(1):48–55.
    Paywalled on ScienceDirect; a third-party PDF copy exists on a teaching
    site and was **deliberately not used** — it is not open access. **Not
    read.** No item cites it. This is the packet's biggest sourcing gap: it is
    the one study that validates a weight-bearing criterion in *children*, and
    the packet currently reaches that criterion through source 9, source 10 and
    the adult rule statements instead.
15. **Boutis K, et al.**, the **Low Risk Ankle Rule** — *CMAJ* 2013;185:E731
    and *CMAJ* 2018;190:E367. CMAJ returned HTTP 403 to the fetcher on three
    URL forms and the articles are not in the Europe PMC open-access subset.
    **Not read.** Named because source 3 and the discovery searches both point
    at it, and because its low-risk zone is defined by *tenderness and swelling
    location* — palpation, i.e. it would very likely have added nothing
    child-reportable.
16. **Queensland Paediatric Clinical Guidelines**, "Limp – emergency management
    in children" and "Emergency management and discharge follow up for minor
    fractures". HTTP 403 on both the guideline page and the direct PDF. **Not
    read.** Referenced in source 9's own reference list.
17. **Kocher MS, et al.** (1999, 2004) — the septic arthritis / transient
    synovitis prediction algorithm, and **Tu J, et al.** *Emerg Med J*
    2025;42:360–366 on clinical decision rules for septic arthritis in the
    limping child. Both appear in source 9's reference list. **Not read**, and
    named here because a future run should get them: the Kocher criteria are
    the one *prediction rule* in this whole field whose variables include a
    plainly child-reportable fact (non-weight-bearing) and a nearly-reportable
    one (fever history), and this packet reaches both only through guidelines.

## The rule(s), as published

### Ottawa Ankle Rules — verbatim (source 3)

> "The OAR (see Fig. 1) state that ankle X-rays are warranted if the patient
> meets one of the following criteria:
> Pain or bone tenderness in the posterior distal tibia or tip of medial
> malleolus ·
> Pain or bone tenderness in the posterior distal fibula or tip of lateral
> malleolus ·
> Unable to weight bear immediately after the injury or for four steps in the
> emergency department"

**Read that third criterion slowly. It is this packet's entire hinge.** Two
facts are welded into one line by an "or": what the child noticed *at the scene*
and what the clinician watches them fail to do *in the department*. The first is
history and belongs to the child; the second is an observation and belongs to
the nurse. Items 2 and 23 are that split. It is the same shape as the tummy
packet's items 5 and 23, and this time the two halves are not even separated by
a comma.

The **foot/midfoot** half of the Ottawa rules (navicular and fifth metatarsal
tenderness) is *not* stated verbatim in any source read here — source 3 lists
only the three ankle criteria, and source 11 refers to *"the Ottawa ankle and
foot rules"* without reproducing them. Recorded in "Ambiguity"; nothing depends
on it, because both missing criteria are palpation.

### Ottawa Knee Rule — verbatim, at one remove (source 5)

> "The OKR consists of five components asking whether the patient is 55 years of
> age or older, has an isolated tenderness of the patella (no bone tenderness of
> the knee other than at the patella), has tenderness of the head of the fibula,
> is unable to flex the knee to 90 degrees, and is unable to bear weight both
> immediately and at the emergency department (ED) for four steps."

Four of five components are palpation, joint range or age. The fifth is the
same welded pair as the ankle rule — and note the knee rule says **"both"**
immediately *and* in the ED, where the ankle rule says "or".

NICE (source 11) sets the paediatric scope: *"Use the Ottawa knee rules to
determine whether an X‑ray is needed in people over 2 years."*

### Amsterdam Pediatric Wrist Rules — verbatim (source 2)

> "The prediction model consisted of six variables: age, swelling of the distal
> radius, visible deformation, distal radius tender to palpation, anatomical
> snuffbox tender to palpation, and painful or abnormal supination."

Cohort, verbatim: children 3–18, *"We also excluded patients whose injury
occurred more than 72 h previously"*, and *"Children younger than 3 years old
were excluded, as it is difficult to obtain an objective physical
examination."*

The 18-variable case record form behind it (source 1, Table 2) is the fullest
inventory in the packet: swelling of distal radius / distal ulna / anatomical
snuffbox; visible deformation; bone tenderness at distal radius / distal ulna /
snuffbox; *active mobility painful* in dorsiflexion, palmar flexion, supination,
pronation, ulnar deviation, radial deviation; *functional tests painful* —
radio-ulnar ballottement, axial compression of forearm, prehensile grip strength
measured on a dynamometer.

And one footnote that decides how the whole "can you move it?" family is
classified, verbatim (source 1):

> "Items were scored positive if the patient experienced pain, if they were
> unable to perform the test or if they refused to perform the test"

**A refusal counts as a positive finding.** That is an examiner's inference from
a child's behaviour, and it is unavailable to a tablet. See decision 5.

### The three other wrist rules — verbatim (source 1, Table 3)

> "Pershad et al. Perform radiograph if both clinical findings are present:
> 1. Point tenderness over the distal radius 2. Decrease of more than 20% in
> grip strength compared to the normal hand
> Webster et al. Perform radiograph if at least one of the following clinical
> findings is present: 1. Radial tenderness 2. Focal swelling 3. Reduction in
> range of supination and pronation
> Rivara et al. Perform radiograph if at least one of the following clinical
> findings is present: 1. Gross deformity 2. Point tenderness"

Two details are worth more than the rules themselves. First, **Pershad and
Webster both excluded children with gross deformity** *"because they were
extremely likely to have a fracture"* — the sign is so decisive that the rules
refuse to model it. Second, Rivara's **ecchymosis was evaluated and dropped**:

> "The presence of ecchymosis was also a significant discriminator. However the
> presence of ecchymosis was not retained in the decision rule because, in the
> absence of point tenderness and gross deformity, it did not differ between the
> fracture and no-fracture groups"

A variable evaluated and then dropped still counts as something clinicians
assess (the brief, §3, on pARC and fever). Bruising is item 7.

### The elbow extension test — the method, verbatim (source 6)

> "Box 2 The elbow extension test. The seated patient, with exposed and
> supinated arms, is asked to flex their shoulders to 90 degrees and then fully
> extend and lock both elbows. Injured and uninjured sides are compared visually
> and those with equal extension recorded as 'full extension.'"

That is a two-limb visual comparison performed by a trained practitioner. It is
not a question. But the same paper's follow-up box **is** a set of questions,
verbatim:

> "Box 3 Criteria for recall. Inability to fully straighten elbow · Pain
> worsening or not improving · Any functional problems (any difficulty using
> arm) · Any concern of the patient or researcher not covered by the above"

Box 3 was applied *by telephone at 7-10 days* — i.e. these are facts the study
itself trusted a patient or parent to report without an examination. Items 3 and
4 come from it. Cohort: *"Adults (>15 years old) and children (3-15 years)
presenting to the participating centres within 72 hours of elbow injury"*;
exclusions include *"No history of trauma"*, *"Injury >72 hours old"* and
*"Suspicion of intentional injury"*.

### PET rules — candidate variables, verbatim (source 7)

> "Possible predictive clinical parameters are patient age and gender, point
> tenderness at lateral or medial distal humerus, radial head, olecranon,
> limited range of motion for supination/pronation/flexion and extension,
> hypoesthesia of the lower arm, increased capillary refill test, visible
> haematoma and trauma injury mechanism."

Two of thirteen are not palpation: *trauma injury mechanism* (item 1) and
*visible haematoma* (item 7). *Hypoesthesia* is a sensation only the child has
but is elicited as a test (item 9).

### The rules that gave nothing

**The Calgary Kids' Hand Rule (source 8)** predicts which *already-diagnosed*
hand fracture needs a surgeon. Its six predictors are *"open fracture,
malrotation"* clinically and *"angulation, displacement, condylar involvement,
dislocation/subluxation"* on *"standard hand X-rays with 3 views"*. **Not one is
child-reportable, and four require an X-ray that has already been taken.** It is
in the source list as a worked example of the brief's §3 harvest producing an
empty set — a rule can be well-conducted, paediatric, prospectively validated,
and contribute nothing at all, and the packet should say so rather than
manufacture an item from it.

### General guidance, verbatim (source 9)

Key points:

> "Most children presenting with a limp do not require investigation ·
> Observing the child's gait may help localise the problem and narrow the
> differential diagnosis · Acute inability to walk or weight bear is a red flag
> · Septic arthritis is an orthopaedic emergency and should be suspected in any
> child presenting with limp, swelling and reduced range of motion (especially
> with fever)"

History, in full:

> "Duration of symptoms, >7 days, repeated presentations in same illness ·
> History of trauma · Pattern and severity of pain and limp, severe localised
> joint pain, pain waking from sleep · Change to urinary or bowel habit ·
> Functional limitations, inability to walk or weight bear · Symptoms of
> infection: fever, night sweats, chills, rigors, rash · Constitutional
> symptoms: unexplained weight loss, lethargy, anorexia (consider
> malignancy/haematological cause) · Recent viral infection (acute myositis,
> transient synovitis) or Streptococcal infection (throat and skin) · Dietary
> history · High-risk group for ARF"

Examination — quoted so the boundary is visible:

> "Assess gait if able to weight bear – antalgic, waddling gait, etc or changes
> in mobility eg from walking to crawling · Identify location if possible — bone
> vs joint vs soft tissue · Joint examination using 'Look, Feel, and Move' …
> Look: resting limb position, symmetry, leg length disparity, swelling,
> deformities, skin changes eg rash, wound, bruising, erythema · Feel: heat,
> cold, tenderness (including calf), crepitus, fluctuance · Move: Active:
> facilitate by placing toy or parent out of reach; Passive: assess for
> limitations and asymmetry in all planes of motion"

And a warning that applies to the body map itself:

> "Pain causing limp can be referred. Assess the joints above and below
> (including spine) and abdomen to accurately localise the source"

Escalation, verbatim: *"Symptoms last more than 7 days or child unable to weight
bear or permit movement after analgesia · Systemically unwell · Clinical or
laboratory features of malignancy · Concern for child abuse or inflicted injury
· Suspecting septic arthritis"*.

### General guidance, verbatim (source 10)

Source 10's structure is a gift: for each diagnosis it prints a **History**
column and an **Examination** column side by side. Septic arthritis /
osteomyelitis:

> "History: Severe pain on movement +/- at rest · Complete refusal to weight
> bear/use affected limb · History of fever / systemic upset.
> Examination: Febrile · Systemically unwell · Unable to weight bear · Severely
> restricted movement in affected joint · Pseudoparalysis · Erythema · Swelling
> · Hot to touch · Tender on palpation · Spinal tenderness"

*Refusal to weight bear* appears on **both** sides — reported by the family on
the left, observed by the clinician on the right. That is the same split as the
Ottawa rules, drawn by a different guideline, and it is the reason items 2/3 and
item 23 are confidently separated.

Transient synovitis, verbatim: *"Preceding viral illness (approximately 50%) ·
Hip pain (may describe referred pain to thigh or knee) · Acute onset <1 week ·
Able to weight bear"*. Malignancy, verbatim: *"Malaise · Anorexia · Weight loss
· Bone pain · Nocturnal pain · Neurological symptoms – paralysis / paraesthesia
· New incontinence / retention / constipation"*. History-taking, verbatim:
*"SOCRATES for full history of pain (site, onset, character, radiation,
associated symptoms, timing, exacerbating/relieving factors, severity, does it
wake patient during the night)"*, *"History of trauma (interpret with caution as
this can be coincidental or may exacerbate a chronic problem)"*, and
*"Systemic symptoms - fever (duration and pattern), rash, weight loss, night
sweats, bruising / bleeding, joint swelling/stiffness"*.

NAI, verbatim: *"Always consider NAI as a cause of limb pain / limp."*

### What actually walks in (source 12)

Of 12,508 children treated for trauma in one German ED over five years:

| Injury type | n | % |
|---|---|---|
| Bruise | 5151 | 41.2% |
| Laceration | 2924 | 23.4% |
| Fracture | 2703 | 21.6% |
| Distortion (sprain) | 1284 | 10.3% |
| Joint dislocation | 320 | 2.6% |
| Burns | 76 | 0.6% |

Mechanisms: *"Leisure activity 2862 (22.9%) · Sports-related activity 2664
(21.3%) · Falls 2411 (19.3%) · Blunt trauma 1908 (15.3%) · Road traffic
accidents 1138 (9.1%) · Force/violence 591 (4.7%) · Cutting/stabbing 417
(3.3%)"*. Bruises localise to the hand (22.1%) and head (16.8%); lacerations
overwhelmingly to the head (71.4%), with 15.3% on the hand and 5.6% on the feet;
*"Forearm fractures were the most common fractures (39.5%) followed by humerus
fractures (14%) and fractures of the hand (12.5%)"*.

Two things follow. First, **the injury a child brings to a limb is most often a
bruise, and the second most likely is a fracture** — lacerations concentrate on
the head, which is a different group. That is the empirical half of the depth
argument in decision 9. Second, four of the top five mechanisms are things a
child can name in their own words, and none of them has a threshold attached —
unlike head injury, **no source in this packet grades a mechanism**, so item 1
has no fall-height problem to resolve.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Did you fall or bump it?** (mechanism) | PET (7) — *"trauma injury mechanism"*; RCH (9) — *"History of trauma"*; GGC (10) — *"History of trauma (interpret with caution…)"*; EET (6) excludes *"No history of trauma"*; Cintean (12) | **partial** | **The branch point of the whole packet**, and the app already ships it as `fell`. Yes routes to the fracture literature, no routes to the limping-child literature — and those literatures share almost no criteria. Child describes the event; the nurse classifies. **No source here grades mechanism**, so unlike head injury there is no threshold to dodge. Source 10's caution must reach the nurse view: a reported bump *"can be coincidental or may exacerbate a chronic problem"*. |
| 2  | **Could you still use it / stand on it right after it happened?** | OAR (3) — *"Unable to weight bear immediately after the injury"*; OKR (5) — *"unable to bear weight both immediately and at the ED"*; RCH (9) — *"Functional limitations, inability to walk or weight bear"*, and *"Acute inability to walk or weight bear is a red flag"*; GGC (10) — *"Complete refusal to weight bear/use affected limb"* filed under **History** | **yes** | **The flagship item, and the only criterion in any prediction rule here that is unambiguously the child's own.** It is the *immediately* half of a welded criterion; item 23 is the other half. Wording problem: "walk on it" is nonsense for a thumb — see decision 4 and "Still open". |
| 3  | **Can you use it / move it okay now?** | EET (6) — *"Any functional problems (any difficulty using arm)"*, a telephone recall criterion; ASK (13) — the capability version measures what the child *"could do"*; RCH (9) — *"Functional limitations"*; GGC (10) — pseudoparalysis, *"completely stopped using limb"*, as the observed counterpart | **yes** | Re-sources the hand-written `can-move` (decision 10). Source 13 is the only evidence in the packet that a child of this age can self-report function at all, and it is weak evidence (see source note). Distinct from item 2 by *time*, not by fact — **never ask both** (decision 7). |
| 4  | **Is it getting worse, or not getting better?** | EET (6) — *"Pain worsening or not improving"*; NG38 (11) — *"advise all patients to return for review if symptoms are not improving 6 weeks after injury"*; RCH (9) — *"repeated presentations in same illness"*, *"limp > 7 days"* | **yes** | A trajectory, not a snapshot — the same role as head-injury item 2 and tummy item 7, and the same consequence: it is one of only three items that survive into `long-time` (decision 6). Also the natural question for a repeat visit. |
| 5  | **Does it look bent or a funny shape?** | APWR (2) — *"visible deformation"*; Rivara via (1) — *"Gross deformity"*; RCH (9) — *"Look: … deformities"* | **partial** | A child can see an obvious deformity; "gross deformity" is a judgement, and Pershad and Webster both *excluded* such children as *"extremely likely to have a fracture"*. Kept and ranked last: the fact is visible to any adult in the room, so the question buys little, and it is the one item here with a real risk of frightening the child who answers yes. **First to drop if the list must shrink.** |
| 6  | **Does it look puffy or swollen?** | APWR (2) — *"swelling of the distal radius"*; Webster via (1) — *"Focal swelling"*; GGC (10) — *"joint swelling/stiffness"* listed under **History**; RCH (9) — septic arthritis suspected with *"limp, swelling and reduced range of motion"* | **partial** | Re-sources the hand-written `limb-swollen` (decision 10). The child sees swelling; *grading* it and *comparing sides* is examination — source 10's *"Comparison between affected limb and opposite side"*. Never ask a child to compare their two limbs; that is an examination delegated to a 7-year-old. |
| 7  | **Can you see a cut, a bruise or a scrape?** | Rivara via (1) — ecchymosis *evaluated and dropped*; PET (7) — *"visible haematoma"*; RCH (9) — *"skin changes eg rash, wound, bruising, erythema"*; Cintean (12) — bruises are 41.2% of paediatric trauma presentations | **yes** — but **out of scope, `depth: surface`** | The app already ships this as `limb-see`, on the surface list. Because this packet is scoped `inside`, the hand-written question **survives untouched** for a child who says "on my skin" (decision 9), so re-sourcing it into the bank would create a near-duplicate for the `unknown`-depth child. Listed here so its absence from the bank is visibly a decision, and so the citation exists when the surface packet is written. |
| 8  | Does it itch? | **none** | — | The app ships `limb-itch`. **No source in this packet mentions itch in an injured limb** — source 9 mentions rash only as a sign of HSP or SJIA. It is not re-sourced, it is not rejected, and it is not lost: it stays hand-written on the surface list until a `limb-surface` packet covers bites, rashes and stings. Recorded because the brief (§5) tells you to re-source hand-written questions and says nothing about the ones the literature does not support. |
| 9  | **Pins and needles, or fuzzy/numb** | PET (7) — *"hypoesthesia of the lower arm"*; Rivara via (1) — *"decreased sensation"* collected; GGC (10) — *"Neurological symptoms – paralysis / paraesthesia"*; RCH (9) — *"neurovascular assessment of affected limb"* | **yes**, but **duplicated in-app** | Only the child has this fact. But `SENSATIONS.tingly` ("Tingly or numb" / "Fuzzy feeling") already ships — **for the `older` tier only**. So it is a duplicate for 8–12s and a genuine gap for 4–7s, and the bank cannot express "young tier only". Not generated in v1; carried to "Still open". |
| 10 | Fingers or toes cold, white or blue | RCH (9) — *"Feel: heat, cold"*, *"neurovascular assessment"*; PET (7) — *"increased capillary refill test"* | **no — exam** | Capillary refill is elicited and colour comparison is observed. A nurse gets this in two seconds at triage; a child's report of it is both unreliable and redundant. |
| 11 | **Do you feel hot or shivery?** | RCH (9) — *"Symptoms of infection: fever, night sweats, chills, rigors"*, and septic arthritis *"especially with fever"*; GGC (10) — *"History of fever / systemic upset"* under **History**, *"Febrile"* under Examination | **partial** | **Invisible to every prediction rule in this packet** — no fracture rule contains a temperature. It is also the single most consequential item on the atraumatic branch, because septic arthritis is *"an orthopaedic emergency"* (source 9). Child reports the sensation; the nurse holds the thermometer. Never say "fever", never ask for a number. |
| 12 | **Does it hurt when you are keeping still, or wake you up at night?** | RCH (9) — *"pain waking from sleep"*; GGC (10) — SOCRATES *"does it wake patient during the night"*, malignancy *"Nocturnal pain"*, septic arthritis *"Severe pain on movement +/- at rest"* | **yes** | Also in no prediction rule. Night pain and rest pain are the classic red flags for infection and malignancy, and they are exactly the kind of thing a child knows and an adult does not. Needs a duration exception — a child whose arm started hurting an hour ago cannot answer it (decision 6). |
| 13 | **Have you been poorly lately — a cold, or a sore throat?** | RCH (9) — *"Recent viral infection (acute myositis, transient synovitis) or Streptococcal infection (throat and skin)"*; GGC (10) — *"Preceding illness"*, transient synovitis *"Preceding viral illness (approximately 50%)"* | **yes** | Transient synovitis and acute myositis are among the commonest causes of a limp (source 9), and this is the question that separates them from the emergencies. In no rule. Overlaps the `throat` group's `cough` and `hurt-swallow` questions — same fact reached from a different body region, so it must not fire when the child has also tapped throat (decision 11). |
| 14 | Has it happened before / is anything else sore? | RCH (9) — *"repeated presentations in same illness"*; GGC (10) — *"Examine all joints if swelling identified in one"* | **yes** — already collected | `happened-before` has a reserved slot on every screen, and the body map already accepts multiple regions. Do not ask again. |
| 15 | Stiff in the mornings | GGC (10) — JIA: *"Stiffness. Often worse in morning"*, *"Duration approaching or exceeding 6 weeks"* | **yes** — **out of scope by duration** | A good discriminator that belongs to a chronic-limb-pain packet, not this one. Also overlaps `SENSATIONS.stiff` ("Hard to move", older tier, inside). Not generated in v1. |
| 16 | Change in weeing or pooping | RCH (9) — *"Change to urinary or bowel habit"*; GGC (10) — malignancy: *"New incontinence / retention / constipation"* | **partial** — **not generated in v1** | This is a cord-compression / spinal red flag, it is absent from every rule, and it is the item where question design is the wrong instrument: a 4- to 6-year-old cannot distinguish "new incontinence" from ordinary accidents, and a screen that asks a child about wetting reads as an accusation (the tummy packet's caution, applied). Kept in the packet, flagged for the reviewer as a **nurse prompt**, and deliberately not written as a child question. |
| 17 | Weight loss, night sweats, tiredness, off food | RCH (9) — *"Constitutional symptoms: unexplained weight loss, lethargy, anorexia"*; GGC (10) — *"Malaise · Anorexia · Weight loss"*, *"Night sweats"* | **mixed — mostly no** | Weight loss is not knowable by a child. Lethargy is observed, and `MOODS` already collects "Tired" on every report. Night sweats are genuinely child-reportable but rest on one source and one line. Appetite is child-reportable but belongs to the tummy packet's item 3, which is a different presentation. Not generated in v1. |
| 18 | Rash | RCH (9) — *"skin changes eg rash"*; GGC (10) — *"Rash (HSP / SJIA / leukaemia)"* | **out of scope — `depth: surface`** | Both guidelines collect rash alongside limb pain, and HSP genuinely presents as a limp with a rash. It belongs to the surface packet and is listed here only so its absence is a decision. |
| 19 | Where it hurts | all of 1–10; RCH (9) — *"Identify location if possible — bone vs joint vs soft tissue"* | **yes** — already collected, **with a caution** | The body map holds it, down to individual fingers and toes. But source 9 warns *"Pain causing limp can be referred… Assess the joints above and below"* and source 10 that *"hip pain may be referred to the knee or thigh"*. **The region a child taps may not be the region that is wrong**, and the nurse view must not present the tap as a localisation. |
| 20 | Severity of pain | RCH (9) — *"Pattern and severity of pain and limp"*; NG38 (11) 1.1.2 — *"a pain assessment scale suitable for the person's age, developmental stage and cognitive function"* | **yes** — already collected | FPS-R. NG38 endorses exactly what the app already does. Never ask a child to rate severity in words. |
| 21 | Duration | RCH (9) — *"Duration of symptoms, >7 days"*; APWR (2) — 72 h; EET (6) — 72 h | **yes** — already collected | `DURATIONS`. Drives decision 6 rather than becoming a question. |
| 22 | Which limb, and comparison with the other side | APWR CRF (1); RCH (9) — *"symmetry, leg length disparity"*; GGC (10) — *"Comparison between affected limb and opposite side"* | **no — exam** | Side is already on the body map ("Right arm", "Left foot", from the child's point of view). Comparison is an examination and must never be asked as a question. |
| 23 | **Weight-bearing tested in the department: four steps, gait, pGALS, "unable to permit movement after analgesia"** | OAR (3) — *"or for four steps in the emergency department"*; OKR (5) — *"and at the emergency department (ED) for four steps"*; RCH (9) — *"Assess gait if able to weight bear – antalgic, waddling gait"*, *"The paediatric gait, arms leg and spine (pGALS) assessment"*; GGC (10) — *"Unable to weight bear"* under Examination | **no — exam** | **Not item 2.** Item 2 is what the child noticed when it happened. This is a test a clinician sets up, watches and grades, and the app must never instruct a child to walk four steps and self-report the result. Getting this backwards would produce a question citing an examination finding — the exact failure this process exists to prevent. |
| 24 | **Palpation: malleolar, patellar, fibular-head, distal radius, distal ulna, snuffbox, humeral, olecranon, radial-head tenderness; crepitus; fluctuance; heat** | OAR (3); OKR (5); APWR (2); Pershad, Webster, Rivara via (1); PET (7); RCH (9) — *"Feel: heat, cold, tenderness (including calf), crepitus, fluctuance"* | **no — exam** | The largest single block of criteria in the packet, and none of it is available to a child. **Never ask a child to press on their own limb.** The hand-written `chest-press` ("Does it hurt when you press on it?") is the pattern to avoid; it must not be copied into `limb`. |
| 25 | **Elicited range of motion: elbow extension test, flexing the knee to 90°, supination / pronation / dorsiflexion / palmar flexion / deviation, passive movement in all planes, grip strength, ballottement, axial compression** | EET (6) Box 2; OKR (5); APWR (2); Webster and Pershad via (1); PET (7); RCH (9) — *"Move: Active … Passive: assess for limitations and asymmetry"* | **no — exam** | See decision 5. These are *manoeuvres*, and a child could physically perform most of them if told to — which is precisely why the ban has to be stated: source 1 records that a test counts as positive *"if they were unable to perform the test or if they refused to perform the test"*, so the finding includes an examiner's reading of a refusal. A tablet cannot see a refusal; it only sees a tap. |
| 26 | Radiographic and triage-only variables: angulation, displacement, condylar involvement, dislocation/subluxation, malrotation, open fracture; X-ray, ultrasound, MRI, bone scan; FBE, CRP, ESR, blood cultures | CKHR (8); RCH (9); GGC (10); NG38 (11) | **no — imaging / lab** | CKHR's entire content, and the reason it contributes nothing. |
| 27 | Age, sex, past medical history, family history, developmental milestones, dietary history, ARF risk group, previous surgery or fracture of the same limb | APWR (2) exclusions; PET (7) exclusions; RCH (9); GGC (10) | **no — carer or record** | Not the child's to report, and several are exclusion criteria rather than assessment items. |
| 28 | Red, hot or shiny skin over the sore part | GGC (10) — *"Erythema"*, *"Hot to touch"*; RCH (9) — *"skin changes eg … erythema"*, *"Feel: heat"* | **partial** | A child can see redness. But "hot to touch" is palpation, redness is visible to staff at a glance, and the item straddles the surface/inside boundary that decision 9 draws. Not generated in v1. |
| 29 | Suspicion of non-accidental or inflicted injury | NG38 (11) 1.7.1; RCH (9) — *"Trauma or child abuse"*, *"Concern for child abuse or inflicted injury"*; GGC (10) — *"Always consider NAI as a cause of limb pain / limp"*; EET (6) excludes *"Suspicion of intentional injury"* | **no — see below** | Deliberate exclusion, recorded as a decision, and sharper in this packet than in any other. |

**Yield: ~52 distinct criteria across 8 named rules or tests and 5 guidance /
cohort sources → 7 clean, 6 partial, 12 excluded as exam / observer / lab /
record, 4 already collected elsewhere in the app, 2 out of scope by depth.**

Compare tummy (~46 criteria → 14 clean) and head injury (~20 → 5 clean). But the
headline number is not the yield, it is **where the yield came from**:

| Source group | Criteria harvested | Clean child-reportable items |
|---|---|---|
| The eight prediction rules and tests (Search A) | ~31 | **1** (item 2, and only its "immediately" half) |
| The two complaint guidelines (Search B) | ~21 | 6 |

**Every prediction rule in this field is a radiography-decision rule, and a
radiography decision is made with the clinician's hands.** The tummy packet
found that its rules answered the wrong question (appendicitis, 8% of arrivals);
this packet finds that its rules answer a question a child cannot participate in
at all. If this packet had been built from Search A alone it would contain
exactly one question.

## Items 2 and 23 — the weight-bearing problem

This is the same trap as tummy's items 5 and 23, and here it is welded inside a
single criterion rather than split across a comma:

- **Item 23** is *"…or for four steps in the emergency department"* (source 3)
  and *"…and at the emergency department (ED) for four steps"* (source 5), plus
  source 9's *"Assess gait if able to weight bear"* and source 10's *"Unable to
  weight bear"* under **Examination**. A clinician asks the child to walk,
  watches, and judges. The app cannot watch, and must never ask a child to
  perform the test and report their own result.
- **Item 2** is *"Unable to weight bear immediately after the injury"* (source 3)
  — a fact about a moment in a playground that nobody in the department
  witnessed, and which source 10 files under **History** as *"Complete refusal
  to weight bear/use affected limb"*. The child, or whoever was with them, is
  the only source of it.

The give-away is source 10's two-column layout: the same phrase appears in the
History column and the Examination column of the same table, for the same
diagnosis. That is the split, drawn by clinicians, printed twice.

## The third category the brief does not have

The brief's filter has two categories: what a child noticed, and what a
clinician elicits. This literature contains a third, and it is the majority of
it: **manoeuvres a child could physically perform on themselves if a screen told
them to.** Straighten both elbows and compare. Turn your palm over. Bend your
knee to ninety degrees. Squeeze as hard as you can. Hop. Take four steps.

None of these is safe to ask, for three separate reasons:

1. **It converts the app into an examiner.** Source 1 states that a wrist test
   scores positive *"if the patient experienced pain, if they were unable to
   perform the test or if they refused to perform the test"* — three outcomes,
   two of which are an examiner's reading of behaviour. A yes/no tap collapses
   them into one, and the nurse reads the result as a finding.
2. **It can hurt the child.** A provocation test on a fractured limb performed
   unsupervised, because a tablet asked, is a harm the app would have caused.
3. **It is not what the source says.** The elbow extension test is defined
   (source 6, Box 2) as a *seated, both-arms, visually compared* test performed
   by a trained practitioner after analgesia. "Can you straighten it all the
   way?" is not that test, and citing source 6 for it would be a false
   citation.

**Ruling for this packet, and proposed for the brief: never instruct a child to
perform a movement, and never ask them to report the result of one they have
just been told to do.** Ask only what they have already noticed —
"could you still use it?" — never "try to use it, and tell me".

## Non-accidental injury — a deliberate exclusion, and a sharper one here

NG38 1.7.1: *"Address issues of non-accidental injury before discharge in all
children with femoral fractures. This is particularly important for children who
are not walking or talking."* Source 9 lists *"Trauma or child abuse"* first
among the causes of a limp at every age and *"Concern for child abuse or
inflicted injury"* as a reason to escalate. Source 10: *"Always consider NAI as a
cause of limb pain / limp."* Source 6 excluded *"Suspicion of intentional
injury"* from its cohort outright.

**This app must never ask a child about it** — the same decision as head injury
and tummy, for the same reason: a child reporting symptoms unsupervised on a
tablet is a context where safeguarding policy, not question design, is the right
instrument.

But this packet has to say one thing the others did not. **Item 1 asks a child
how they were hurt, and limb injury is the presentation where that answer is
most likely to have been rehearsed.** So:

- The mechanism answer must never be presented to a nurse as corroboration of
  anything. It is what the child said, and the nurse view should label it so.
- Nothing in the app may follow up on an implausible or inconsistent answer.
  A screen that probes a child's account of how they were hurt is conducting a
  safeguarding interview, badly, without a human present.
- The ban covers the concept, not one phrasing: no "did someone do this to
  you?", no "did anyone hurt you?", no "was it an accident?".

## Wording cautions

Ban **concepts**, not phrasings.

- **Never name a condition or an injury.** Not broken, fracture, break, snap,
  sprain, dislocated, torn, infection, septic, arthritis, cancer, tumour,
  leukaemia. `scripts/screen.mjs` now reads this list from `meta.bannedPhrases`
  rather than a head-injury-specific hardcoded set, so these are enforced for
  `limb` candidates specifically.
- **Never name what happens next.** Not X-ray, scan, cast, plaster, needle,
  stitches, operation, surgery. A child asked "can you still walk on it?"
  answers a question about their leg; a child asked anything containing the
  word *needle* answers a question about being frightened.
- **Never ask a child to press on, squeeze, or poke their own limb**, and never
  ask them to perform a movement to see whether it hurts. See the section
  above. The hand-written `chest-press` is the pattern to avoid.
- **Never ask a child to compare their two limbs** — "is it bigger than the
  other one?", "does it bend as far as the other side?". That is source 9's and
  source 10's examination, delegated.
- **Never name a body part.** Group `limb` runs from a thumb to a leg, and the
  child has already tapped the region. "Can you walk on it" is wrong for a
  finger; "can you wiggle your fingers" is wrong for a knee. Questions say
  *it*. See decision 4.
- **Never ask a child to rate severity** — already banned globally, and FPS-R
  already has it.
- **Never ask about how the injury happened a second time**, in different
  words, or in a way that tests the first answer. See the NAI section.
- **Never use "accident"** as a noun for the event. It is the word that carries
  the assumption the NAI exclusion exists to avoid, and children hear it as
  blame ("did you have an accident?" also collides with wetting).
- Avoid "serious", "dangerous", "bad", "severe" throughout — already banned.

## How these were found

Per the brief, discovery started with comparison and validation literature, not
with a remembered rule name. That worked: **Search A returned the Ottawa ankle
and knee rules, which recall would have produced, and also the Amsterdam
Pediatric Wrist Rules, the Pershad, Webster and Rivara wrist rules, the elbow
extension test, the PET rules and the Calgary Kids' Hand Rule, which it would
not.** Source 1 alone enumerated four wrist rules in one table.

Then Search B — *"the limping or non-weight bearing child"* — and the gap
between the two is not a gap, it is a chasm.

**The rules are all the same rule.** Every one of them answers "does this child
need a radiograph (or a surgeon)?", and each is a list of places to press. Their
variables are: tenderness at seventeen named anatomical points, swelling at
three, range of motion in six directions, grip strength on a dynamometer, two
provocation tests, visible deformity, visible haematoma, capillary refill, age,
and — once, in a criterion welded to an examination — whether the child could
stand up straight after it happened.

**The guidelines are about a different child.** Source 9's differential for a
limp is transient synovitis, myositis, septic arthritis, osteomyelitis, Perthes,
SUFE, JIA, leukaemia, HSP, sickle-cell crisis, and *"Intra-abdominal or
genitourinary pathology: appendicitis, ovarian or testicular torsion"*. Not one
of those is detectable by pressing on the fibular head, and **the child who has
them may never have fallen over at all.** Fever, night pain, rest pain, a recent
sore throat, a change in weeing — items 11, 12, 13 and 16 — appear in **no
prediction rule in this packet** and came only from Search B.

For the next packet: the tummy packet's lesson was that the rules answer a
question about 8% of arrivals. This packet's lesson is stronger and different —
**the rules may be answering a question that has no child-facing content at
all**, and a packet built from them alone would have one question in it. Check
early whether the rules in your field are *diagnosis* rules or *imaging* rules.
Imaging rules are palpation.

## Decisions

**Decided, not deferred.**

1. **Register: US English**, matching what the app and the tummy packet already
   ship. This packet needs one new vocabulary domain — **movement and
   function** — so it is decided here rather than improvised: **"use it"**,
   **"move it"**, **"walk on it"**, **"stand on it"**, **"puffy or swollen"**,
   **"got worse"**, **"poorly"** for being unwell. Never "weight bear",
   "mobilise", "range of movement", "function". If a bodily-function question
   is ever generated for item 16, it inherits the tummy packet's ruling —
   "poop" and "pee", never "wee"/"poo"/"bowel"/"urine".
2. **Answer types.** `FollowUpScreen` renders yes/no only, so items 1, 2, 3, 4,
   5, 6, 11, 12 and 13 are all **yes/no**. Item 1 is the uncomfortable one: the
   fact a nurse wants is *what happened*, and head injury solved the same
   problem by asking for the event in words. Here it stays yes/no ("did you
   fall or bump it?") because it is the existing hand-written question, because
   **no source in this packet grades mechanism** — so there is no threshold the
   free text would be mapped against — and because the yes/no answer is doing
   routing work, not classification work. Recorded as a knowing loss: "I fell
   off the climbing frame" is more useful to a nurse than "yes".
3. **Item 1 leads.** It is the branch point between two literatures that share
   no criteria, and no other item can be interpreted without it: "does it hurt
   at night" means something different in a child who fell off a wall and a
   child who did not. It is also already shipping, so leading with it costs the
   app nothing.
4. **No question in this group may name a body part.** The group spans 40+
   regions — arms, legs, hands, feet, every finger, every toe, palms, wrists,
   arches, heels — and the body map already holds which. A question that says
   "leg" is simply wrong for the child who tapped a thumb. Questions say *it*.
   This is a real cost: item 2's best-sourced form ("could you stand on it?")
   is lower-limb-only, and the generic form ("could you still use it?") is
   weaker than the criterion it cites. Carried to "Still open" as the strongest
   argument for a region filter in `applies`.
5. **No item may instruct a movement.** Stated in full above. Items 3 and 6 ask
   what the child has noticed; they never ask the child to try something.
6. **Duration scope.** The sources disagree, and the disagreement is the
   informative kind:

   | Source | Window |
   |--------|--------|
   | APWR (2) | injury within **72 h**; >72 h excluded |
   | Elbow extension test (6) | *"within 72 hours of elbow injury"*; >72 h excluded |
   | RCH (9) | assessment covers any duration; **>7 days** is a red flag and a reason to escalate |
   | GGC (10) | transient synovitis *"Acute onset <1 week"*; JIA *"Duration approaching or exceeding 6 weeks"* |

   Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday` — **full packet.** Inside every
     window.
   - `few-days` — **full packet.** Outside the two 72-hour enrolment windows
     but well inside source 9's, and those 72-hour limits are *recruitment*
     criteria for radiography studies, not claims that the history stops
     mattering on day four. Narrowing here would silently pick the wrist rule.
   - `long-time` — **items 4, 11 and 12 only.** This is the opposite of the
     tummy packet's carve-out and it is deliberate: in *this* complaint the long
     band is the dangerous one. Source 9 makes *"Symptoms last more than 7
     days"* a reason to consult, and the three items that survive are exactly
     the ones its red-flag list is built from — trajectory, fever, night pain.
     The fracture-rule items do not survive: "could you stand on it right after
     it happened" is meaningless three weeks later.
   - `not-sure` — **full packet.** Same convention as the other two packets:
     `not-sure` means the child cannot date it, not that it is old.
   - Item 12 additionally drops `just-now` and `this-morning`: a child whose
     limb started hurting an hour ago cannot say whether it wakes them at
     night. This is a per-item exception in the sidecar.
7. **Item priority, and one question per item.** Nine items compete for three
   bank slots (`followUpsForGroups` caps at three plus the reserved
   `happened-before`). Never ask two questions from the same item. Order:

   `1 (what happened) → 2 (could you use it right after) → 11 (hot or shivery)`
   `→ 3 (can you use it now) → 12 (hurts at rest / at night) → 4 (getting`
   `worse) → 6 (swollen) → 13 (been poorly) → 5 (funny shape)`

   Item 11 is third — ahead of every remaining fracture criterion — for the
   same reason tummy put "does it hurt to pee" fourth: the atraumatic branch
   contains the emergency, and the app currently asks a child with a sore leg
   nothing whatever about being unwell. Items 2 and 3 are the same fact at two
   different times and are deliberately separated in rank so they cannot both
   land in the top three. **Proposed, not yet confirmed by review** — this
   ordering decides what a child is actually asked.
8. **No age floors.** Reasoned in "Scope": the examiner-capability floors (3+)
   are floors on examination, not on speech; NICE's rule-validity floors (knee
   >2, ankle >5) apply to the decision to X-ray, and the underlying fact —
   could you stand on it — is plain history in sources 9 and 10, which set no
   floor. Excluding a 4-year-old from "does it hurt at night" would be an
   invention, not a citation. `minAge` is therefore empty, and that is a
   deliberate finding rather than an omission.
9. **This packet is `depth: inside`, and the split is argued, not assumed.**
   The rules are about bone and joint; a child who says "inside me" about an
   arm is describing what this literature is about. Cuts, scrapes, bites,
   rashes and itch are `surface` and belong to a `limb-surface` packet that
   does not exist yet. Three consequences, all deliberate:
   - The hand-written `limb-see` and `limb-itch` **survive untouched** for the
     surface child, because `bankQuestions` returns nothing for a depth this
     packet does not claim, so the cap never fires. That is why items 7 and 8
     are documented but not re-sourced into the bank.
   - **The boundary is genuinely blurry here**, unlike tummy's. Source 12's
     commonest limb injury is a bruise (41.2%) — visible, on the skin, and
     also the thing Rivara evaluated as a fracture predictor. A child with a
     deformed forearm and a graze over it may answer either way, and if they
     answer "on my skin" they get two hand-written questions and none of this
     packet. Flagged for the reviewer as the single most likely way this packet
     fails a real child.
   - A child who answers "I don't know" passes `bank.js`'s depth filter and
     gets the union: up to three sourced questions, and the hand-written ones
     crowded out by the cap. That is the right behaviour and it is worth
     knowing it is the *default* behaviour for an ambiguous limb.
10. **The five hand-written `limb` follow-ups must be re-sourced or explicitly
    kept, never assumed.** `followUpsForGroups` pushes sourced questions first
    and then hand-written ones, and `out.slice(0, 3)` throws away whatever does
    not fit — so the moment this bank covers `limb`/`inside`, **`fell`,
    `can-move` and `limb-swollen` are silently dropped from the screen**, not
    merged. Items 1, 3 and 6 exist to carry them across with a citation behind
    them. `limb-see` and `limb-itch` are on the surface list and survive by
    decision 9. All five are accounted for; none is lost by accident.
11. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and helps:
    - **Rejected as duplicates:** item 19 (body map), item 20 (FPS-R), item 21
      (`DURATIONS`), item 14 (`happened-before` has a reserved slot), item 22
      (side is on the map).
    - **Demoted or withheld for overlap:** item 9 overlaps `SENSATIONS.tingly`
      — but only for the `older` tier, which the bank cannot express, so it is
      withheld rather than demoted; item 15 overlaps `SENSATIONS.stiff`; item
      17's "tired" is in `MOODS` on every report.
    - **Kept despite surface overlap:** `HELPS` offers "An ice pack" and "A
      bandage", which touch items 6 and 7. `HELPS` records what the child
      *wants*; the items record what is *true*. Different facts, as with tummy's
      bathroom/food overlap.
    - **Conditional:** item 13 ("been poorly — a cold or a sore throat")
      duplicates the `throat` group's `cough`. It must not fire when the child
      has tapped both `limb` and `throat`; `followUpsForGroups` dedupes by
      question id, not by fact, so this needs a distinct id and a note for the
      reviewer — the same defect the tummy packet found for `breathing`.
12. **Group `limb` includes the fingers and toes, and that is fine here.**
    Unlike tummy's `bottom` problem, no region in this group is out of place:
    a hurt thumb and a hurt leg are both served by items 1, 3, 4, 6 and the
    unwell items. Only item 2's *weight-bearing* form is lower-limb-specific,
    and decision 4 resolves that by wording rather than by scope.
13. **Items 5, 9, 15, 16, 17 and 28 are in the packet and are not generated in
    v1.** Each for a stated reason in its row. Recorded as one decision because
    the metadata sidecar has no field for it (see "Still open"), and a
    generator that reads only `itemRank` would treat their absence as an
    oversight rather than a ruling. **Item 5 is generated but ranked last** and
    is the first to drop.

## Still open

- ~~**`applies` cannot express upper limb versus lower limb.**~~ **RESOLVED
  2026-09-03.** `bodyMap.js` now assigns every `limb` region a `subgroup`
  (`upper` / `lower`), and a bank candidate may declare
  `"subgroups": ["lower"]`. Item 2 can therefore ship as TWO candidates tracing
  to the same item — Ottawa's weight-bearing wording for the lower limb, and
  the use-it wording for the upper — instead of one generic form weaker than
  either criterion. Generation for this packet must produce both.
- *(original text)* `applies` cannot express upper limb versus lower limb. This is the
  biggest single gap. `bank.js` filters on `{ group, durations, minAge, depth }`,
  and `limb` merges a thumb with a leg. The best-evidenced criterion in the
  whole packet — inability to weight bear — can therefore only ship in a
  watered-down form. Needs a region or sub-group filter, or a `limb-upper` /
  `limb-lower` split in `bodyMap.js`. **Blocking for item 2 shipping in its
  properly sourced form.**
- **The bank has no tier filter**, so item 9 (numb / pins and needles) cannot be
  asked of 4–7 year olds only, which is the exact group `SENSATIONS.tingly`
  excludes. Either the bank learns tiers, or `tingly` moves to both tiers and
  item 9 stays out permanently.
- **The metadata sidecar cannot say "in the packet, not generated".** Six items
  here (decision 13) and three in the tummy packet are in that state, expressed
  only in prose. An item omitted from `itemRank` still ships at rank 99 if a
  candidate traces to it. Needs a `notGenerated` list that `build-bank.mjs`
  enforces.
- ~~**`scripts/screen.mjs`'s banned-word list is still head-injury-specific.**
  Every candidate for `limb` will pass the clinical-naming screen no matter
  what it says about broken bones, casts or needles.~~ **RESOLVED — verified
  2026-09-06.** `screen.mjs` composes universal bans plus this packet's
  `meta.bannedPhrases`. The transcription was audited on 2026-09-06 and was
  incomplete — the wording caution bans *torn, infection, septic, arthritis,
  cancer, tumour, leukaemia* and none of them had reached `meta.json`; they
  have now been added. **The same audit has not been run on the other five
  packets**: a caution that exists only in prose is not enforced.
- **`build-bank.mjs` reads `packets/<id>.meta.json` correctly now** (the tummy
  packet's warning about a hardcoded head-injury `CITE` map has been fixed) —
  but the depth filter in `bank.js` treats `unknown` as a pass, which means an
  "I don't know" limb gets appendicitis-era treatment of both depths at once.
  Correct for this packet; a reviewer should confirm it is correct in general.
- **Item 2 presupposes an event that item 1 may deny.** "Could you still use it
  right after it happened?" is unanswerable for a child whose leg simply
  started hurting. The pipeline has no conditional follow-ups, so the wording
  has to carry the load. A reviewer should check the chosen wording against a
  child who never fell.
- **Referred pain undermines the body map** for this group specifically
  (source 9, source 10: hip pain presenting at the knee). Nothing in the packet
  can fix it; the nurse view should not present a tapped region as a
  localisation.
- **Item 16 (change in weeing or pooping)** — a genuine spinal red flag,
  deliberately not written as a child question. Needs a clinical view on
  whether it should be a nurse prompt.
- **Source 14 (Bulloch, Ottawa Knee Rule in children) was not read.** The one
  paediatric validation of a weight-bearing criterion is behind a paywall, and
  item 2 currently leans on two adult rule statements plus two guidelines. A
  future run should try harder — an institutional copy, or the CMAJ Low Risk
  Ankle Rule papers, would firm up the packet's single best item.
- **No source read here validates self-report in an injured child.** Source 13
  is a translation study of a function questionnaire in children with
  disability, mean age 12.7, nothing below 5. The `young` tier carries more
  risk in this packet than in either previous one, and there is no evidence
  base under it.

## Ambiguity in the sources

Recorded rather than papered over.

- **The Ottawa foot/midfoot criteria are not stated verbatim in anything read
  here.** Source 3 gives three ankle criteria and no foot criteria; source 11
  refers to *"the Ottawa ankle and foot rules"* without reproducing them;
  source 4's full text did not extract. So the packet knows the foot rule
  exists and is recommended over age 5, but not what is in it. Nothing depends
  on it — both missing criteria are, by every secondary description, palpation.
- **The Ottawa knee rule is quoted at one remove**, through an adult audit
  study (source 5), because the paediatric validation is paywalled and the
  Stiell originals are not open access. This is the same posture the tummy
  packet took with PAS and AIR. **No item depends on the knee rule alone**:
  item 2's criterion is independently verbatim in source 3 and independently
  history in sources 9 and 10.
- **Source 4 is an abstract.** Its full text is a page-scan and returned no
  extractable prose. Two facts are used from the abstract — that the rule was
  applied to children 1–15, and its sensitivity — and nothing else.
- **Source 8's Figure 1 is the actual rule**, and figures do not extract. The
  six predictors are recovered from the running text and Table 3, which name
  all six and agree with each other; the *thresholds* (how much angulation)
  are not in the fetched text. Since the item yield is zero, nothing turns on
  it.
- **Source 7 is a protocol**, so its thirteen candidate variables are a
  clinician panel's hypotheses, not findings. Items 1 and 7 cite it only
  alongside other sources.
- **Source 12 is a single German level-one trauma centre, ages 0–14**, and it
  counts *injuries treated*, not *complaints presented*. It is used for
  proportions and mechanisms, which are robust to that, and never as a
  denominator for anything clinical.
- **"Swelling" appears on both sides of the history/examination line and the
  sources do not agree.** Source 10 lists *"joint swelling/stiffness"* among
  the systemic symptoms to take a **history** of; sources 2, 9 and the wrist
  rules treat swelling as something the examiner records. Item 6 is marked
  **partial** for exactly that reason, and the wording must stay at the level
  a child can see ("puffy") rather than the level an examiner measures.
