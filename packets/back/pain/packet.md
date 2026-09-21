# Back pain

Presenting complaint · packet `back-pain` · serves group `back`, **depth scope
`inside`** · packet v1 · assembled 2026-09-07
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
> who arrives with back pain, and marks which of those a child can report about
> themselves. **Not** a diagnostic tool: nothing here may be scored, summed, or
> shown to a child or nurse as a suggested cause.

## Read this before anything else: there is no rule here

**No validated clinical prediction rule for paediatric back pain was found, and
the strongest source read says one does not exist.** This is not a shortfall in
the search — it is the finding, and it changes how every citation below should
be read.

Source 1 is a fourteen-society German interdisciplinary guideline built on a
screen of 3,516 articles. It says, of the red-flag lists this whole packet rests
on:

> "Various red flags and algorithms have been published to support the
> diagnostics of back pain in childhood and adolescence [7,8,9]. However, these
> are often **not evidence-based but have been developed by clinical experts**
> [5,10]."

and, of its own product:

> "Only **three** evidence-based recommendations could be formulated for causes,
> red flags, and risk factors for back pain, while two recommendations are based
> on expert consensus… results of this work confirm the **deficit in research
> investment in this area**."

Its red-flag table (Table 1, reproduced in full below) is graded **"A, expert
consensus 100%"** — unanimous expert opinion, not evidence — and the paper closes
the loop itself: *"While outside the scope of the present guideline, future
studies should assess the sensitivity and validity of this diagnostic
algorithm."* Nobody has measured how well these red flags work in children.

So: unlike head injury (PECARN, CATCH, CHALICE), unlike sore throat (ten scores),
unlike limb injury (Ottawa and its relatives), **this packet cites no rule,
because there is none.** Every item below traces to a consensus list or a
hospital guideline. A reader who assumes the citations carry the weight that
"PECARN" carries in the head-injury packet will over-read them. Nothing here is
worse-sourced than the clinical practice it describes; it is just that the
clinical practice is expert opinion.

## Why this packet exists anyway

The reason back pain in a child is worth a packet at all is the one thing every
source read agrees on: **it is not adult back pain.**

Source 2, a paediatric emergency department's own guideline, in its Background
section:

> "True back pain in children has different significance to that in adults.
> While **26 – 36% of children report back pain on direct questioning, fewer
> than 2% seek medical advice and of these between 50 – 65% will have a specific
> or serious cause.** This is a much higher pick-up rate than is found in adults,
> especially in the under 12s. Serious causes may present with relatively minor
> symptoms and the diagnosis is often delayed. Always consider infection."

Two facts in that paragraph do the work of this whole packet.

- **"Especially in the under 12s"** — the app's entire age range sits inside the
  band the guideline singles out.
- **"26 – 36% of children report back pain on direct questioning"** — the
  denominator is a *self-report* number. The literature's own estimate of how
  common this complaint is comes from asking children, which is the thing this
  app does.

Source 1 goes further and makes the child's age itself a red flag:

> "Thus, the occurrence of back pain in children in the first decade of life can
> be formulated as an **independent red flag** for specific causes of disease."

with **"Age < 10 years"** as the first row of its red-flag table, and source 2
listing **"Age <12 years"** and **"Age <4 years highly significant"** as its first
two significant features. **For most of this app's users the presenting complaint
is itself a red flag before a single question is asked.** The app already knows
the age; see item 18.

The counterweight, from source 3, and it must be read alongside the above:

> "A recent prospective study of 73 children under age 18 years, with back pain
> of greater than 3 months duration found **only 21% of the patients had positive
> findings** after diagnostic evaluation or a minimum of 2 years follow-up."

Source 2's 50–65% and source 3's 21% are not reconcilable from what was read.
They are different settings (an ED's presenting population versus a referred
chronic cohort), different durations, and different eras. **Both are recorded;
neither is adopted.** No question in this packet depends on which is right.

## Scope

**Age.** App covers 4–12. **One item carries an age floor and it is judgement,
not citation** — item 4, the bladder-and-bowel item, at `minAge: 8`. See
decision 7, and read the caution about what happens when age is unknown.

The age statements that *are* in the sources are about disease frequency, not
about whether a child can answer:

- Source 1: *"Age < 10 years"* (Table 1, red flag) and *"the occurrence of back
  pain in children in the first decade of life can be formulated as an
  independent red flag"*.
- Source 2: *"Age <12 years · Age <4 years highly significant"*.
- Source 4: *"the prevalence of low back pain in children < 7 years is low, it
  increases with age, with studies reporting lifetime prevalence at age 12 years
  between 16% and 18%"*.

None of these floors an item. They say the complaint is *more* worrying in
younger children, which is an argument for asking a 4-year-old more carefully,
not for asking them less.

**Depth.** `GROUP_DEPTH.back === 'ask'` and `GROUP_GATE.back === 'depth'`, so a
child who taps Back is asked *"Is it on your skin, or inside you?"* before any
follow-up. **This packet is scoped `depth: 'inside'`.** `bankQuestions` fires an
`inside` question when the child answered `inside` **or** `unknown`, and never
when they answered `surface` — which is correct: a child with a graze on their
back should not be asked whether the pain wakes them at night. The surface half
of group `back` stays with the hand-written `back-rash` and `back-itch` and,
eventually, with the planned skin packets (roadmap rows 2 and 3).

**Region scope: upper and lower back only, and the app cannot enforce it.**
Group `back` contains three regions in `src/data/bodyMap.js` — `back-neck` ("Back
of neck"), `upper-back` and `lower-back`. This packet is scoped to the **upper
and lower back**, deliberately, because roadmap **row 11 is a separate
neck-pain-or-stiffness packet** serving `throat` + `back`, and neck stiffness is
its material, not this packet's. Nothing here asks about the neck.

**But there is no mechanism to hold that line at runtime.** `subgroupOf` in
`bodyMap.js` returns `null` for every region that is not in group `limb`:

```js
const LOWER = /^(back-)?(leg|foot)/
export const subgroupOf = (regionId) => {
  const r = regionById(regionId)
  if (r?.group !== 'limb') return null
  return LOWER.test(regionId) ? 'lower' : 'upper'
}
```

So `subgroups` cannot express "upper and lower back but not the back of the
neck", and every question in this packet will fire for a child who taps **Back of
neck** and nothing else. Most of the items survive that badly but not
catastrophically — night pain, fever and morning stiffness are reasonable
questions for a stiff neck — but "does the hurt go down your leg?" asked of a
child with a sore neck is a question about the wrong body. Carried to "Still
open" as the packet's largest unresolved structural problem, and it is the same
shape as the sore-throat packet's `neck`-in-`throat` problem seen from the other
side. The cheapest fix is to generalise `subgroupOf` beyond `limb`.

**Out of scope by age, setting or route, and not carried:** anything requiring
imaging, bloods or a swab; the infant and toddler presentation, which is a
refusal to walk or sit observed by an adult rather than a complaint (source 2
singles out *"Age <4 years highly significant"* precisely because those children
do not describe back pain); adult red flags that arrived in the paediatric
lists by inheritance (source 4's table includes *"Intravenous drug abuse"*, which
belongs to a different population and is recorded here only as evidence that
these lists are partly adult-derived); scoliosis screening and bracing decisions;
imaging-selection recommendations, which are most of what sources 3 and 4 are
about; and the psychosocial and chronicity assessment of source 1's Tables 2–4,
which is a treatment-planning instrument for a pain clinic, not a triage screen.

## Sources

1. **Frosch M, Mauritz MD, Bielack S, Gambach S, Heiligenhaus A, Hübner-Möhler
   B, et al.** "Etiology, Risk Factors, and Diagnosis of Back Pain in Children
   and Adolescents: Evidence- and Consensus-Based Interdisciplinary
   Recommendations." *Children (Basel)* 2022;9(2):192. doi:10.3390/children9020192.
   **Read first-hand** via PMC8870422, using `--scan` plus targeted windows on
   Table 1, Table 2, and Recommendations 6–10. **This is the discovery source.**
   A structured interdisciplinary consensus process — *"pediatric surgery,
   neurology, oncology, radiology, rheumatology, orthopedics, pain medicine,
   psychology, and physical therapy"* — screening *"n = 3516 articles… with
   n = 621 individual articles included"*. It is the closest thing the field has
   to the systematic review that anchored the sore-throat packet, and what it
   found was that there is nothing to review. Inclusion was *"back pain in
   children and adolescents between the ages of 3 and 18 years"*, which brackets
   the app's 4–12 at both ends.
2. **Sheffield Children's NHS Foundation Trust, Emergency Department Medical
   Guidelines, section 4.24 "Back Pain"** (Reg. I.D. No. 1216, implemented August
   2023, review August 2027; updated by Dr M Abdelaal March 2023, Dr S Perumal
   and Dr A Smith June 2020, written by Dr J Cumberland April 2004). **Read
   first-hand, and read in full** — the fetched text is 4,447 characters, so
   §2b's economy rule does not bite; a targeted window would have cost more than
   the document. **The single most useful artefact in this packet.** A paediatric
   ED guideline organised entirely by the presenting complaint, whose
   "Significant Features" list is fifteen lines long and whose Background
   paragraph is the clearest statement found anywhere of why this complaint is
   different in children.
3. **Houghton KM.** "Review for the generalist: evaluation of low back pain in
   children and adolescents." *Pediatr Rheumatol Online J* 2010;8:28.
   doi:10.1186/1546-0096-8-28. **Read first-hand** via PMC3001419, `--scan` plus
   windows on "History", "night", "weight loss", "bladder", "duration". Supplies
   the **clinical history list verbatim** — the most complete history schema in
   any source read — and the 21% figure above. Overwhelmingly an examination and
   imaging paper otherwise; its physical-examination section is where most of
   this packet's exclusions come from.
4. **Phillips SF, Favero Butts J, Silvis M.** "Low back pain in youth:
   Recognizing red flags." *J Fam Pract* 2020;69(8):E1–E8. doi:10.12788/jfp.0076.
   **Read first-hand** via the open PDF at `cdn.mdedge.com`. A **US** source,
   which matters for register (decision 1), and the only source read that gives a
   red-flag list with an explicit duration attached to one of its entries
   (*"Morning stiffness lasting > 30-60 minutes"*).
5. **NICE guideline NG59, "Low back pain and sciatica in over 16s: assessment and
   management"**, published 30 November 2016, last updated 29 July 2026. **Read
   first-hand** (Recommendations chapter). **Cited for what it does not contain.**
   Searching the fetched text for "children" and "young people" returns **no
   match**; the guideline every clinician would reach for first is titled "in
   over 16s" and its scope excludes every user of this app. Recorded so that a
   future run does not mistake its absence for an oversight. See "How these were
   found".
6. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline, "The
   limping or non-weight bearing child."** **Read first-hand** (present in the
   shared `packets/.sources/` cache from the limb-injury run; windows on
   "History", "night", "urinary", "bowel", "Red flag"). Not a back-pain
   guideline, and cited only for the four history lines it shares with this
   complaint: *"pain waking from sleep"*, *"Change to urinary or bowel habit"*,
   *"Duration of symptoms, >7 days"*, and the constitutional-symptom line. It
   also states *"Pain causing limp can be referred. Assess the joints above and
   below (including spine)"*, which is the clinical fact behind item 14.
7. **NHS Greater Glasgow & Clyde, Paediatric Clinical Guideline 1126,
   "Atraumatic painful limb, paediatrics."** **Read first-hand** (shared cache,
   from the limb-injury run; windows on "Red flag", "Stiffness", "spine",
   "discitis"). Cited for two things and no more: its neoplasm red-flag row,
   which lists ***"Nocturnal pain · Back pain"*** side by side — back pain is
   itself a red flag in somebody else's guideline — and its JIA row, *"Stiffness.
   Often worse in morning · Duration approaching or exceeding 6 weeks"*.
8. **Notarangelo G, Maselli F, Milella C, Feller D, Storari L, et al.**
   "Diagnostic Utility of Red Flags for Detecting Spinal Malignancies in Patients
   with Low Back Pain: A Scoping Review." *J Clin Med* 2025;14(20):7174.
   doi:10.3390/jcm14207174. **Read first-hand** via PMC12565147 (windows on
   "children", "sensitivity", "Conclusion"). **Population: "patients of any
   age"**, and in practice overwhelmingly adult — its most-examined red flag is
   *"age > 50"*. It is cited **only** for its conclusion about red flags in
   general, which is quoted below, and **no item in this packet is sourced to
   it.** Included because it is the nearest thing found to a validation study,
   and a reader is entitled to know how thin that is.

**Attempted and not used.**

- **The Royal Children's Hospital Melbourne** — `/clinicalguide/guideline_index/
  Back_pain/` returns **HTTP 404**, and the fetched CPG index (28,839 characters)
  contains no back-pain entry; the only "back" strings in it are "Redback Spider"
  and site furniture. **RCH has no back-pain guideline.** This is worth stating
  plainly because RCH has been the Search B workhorse for four of the six shipped
  packets, and its absence here is why source 2 had to be found instead.
- **Queensland Health Clinical Prioritisation Criteria, "Paediatric Back Pain"** —
  **HTTP 403, not read.** Nothing here depends on it. It is a referral-threshold
  document and a future run should retry: it is the source most likely to state
  an explicit paediatric referral trigger.
- **NENC Healthier Together, "Back Pain (chronic)"** — **HTTP 403, not read.**
  Nothing depends on it. Named because Healthier Together writes a
  parent-facing half, which is the register this packet most lacks (compare the
  sore-throat packet's source 4, whose family-facing triad became three items).
- **EB Medicine, "Emergency Department Management of Dangerous Back Pain in
  Children"; MedLink Neurology, "Back pain in children"; Selbst SM et al., "Back
  Pain in Children Who Present to the Emergency Department", *Clin Pediatr*
  1999** — **not read; subscription or paywall, no fetch attempted.** Named here
  only so a future run knows they exist. **Nothing in this packet cites them**,
  and in particular the widely repeated figure that 76.8% of paediatric ED back
  pain visits end in a non-pathological diagnosis appears in this run's search
  results but in **none of the eight sources read**, so it is not quoted above
  and no ranking depends on it.
- **The systematic review of 40 observational studies of red-flag diagnostic
  accuracy** that search results attribute to the thoracolumbar literature —
  **not identified, not fetched, not read, and therefore not cited.** Source 8
  covers similar ground in a weaker design, and is cited instead precisely
  because it was actually opened.

## The "rule", as published — there being no rule, these are the lists

### Source 1, Table 1, in full and verbatim

> **Table 1. Red flags for specific back pain in children and adolescents.**
>
> **Demographic data** — "Age < 10 years"
>
> **Medical history** — "Trauma, respiratory arrest after trauma · Onset of back
> pain associated with exercise · Previous or current glucocorticoid therapy ·
> Pre-existing and concomitant medical conditions"
>
> **Neurological symptoms** — "Motor or sensory disturbances of the extremities ·
> Radicular pain · Bladder or bowel dysfunction"
>
> **Other clinical signs** — "Fever · Local swelling · Lymph node enlargement ·
> Externally apparent structural changes of the spine · Palpable step deformity ·
> Joint hypermobility · Inflammatory signs of disease (arthritis, enthesitis,
> cutaneous vasculitis) · Arterial hypertension"
>
> **Pain characteristics/other pain locations** — "Compression pain or localized
> pressure pain · Pain in the head, thorax, abdomen, flanks, extremities, glutes,
> or pelvis · Arthralgia or myalgia"

And the note printed under it, which is as important as the table:

> "Red flags are **optional features** for the different causes of the underlying
> diseases and are **not obligatory**… **None of the red flags presented is
> specific to a particular disease.**"

Its own commentary on which of them matter most:

> "In almost all disease groups of specific causes, neurological signs may be
> detectable in the clinical examination. **Most common are motor and sensory
> disturbances of the extremities, radicular pain, and bladder or bowel
> disturbances.** Fever is seen in infectious diseases, neoplasms, rheumatic
> diseases, and vascular diseases."

**Three of the four things it names as most common are items 5, 6, 7 and 4 of
this packet, and a child is the only person who has any of them.** That sentence
is the reason this packet's yield is better than its "Moderate" roadmap grade
predicted: motor disturbance, sensory disturbance and radicular pain are
*symptoms* before they are signs, and bladder or bowel change is not visible to
anyone else at all.

### Source 2, "Significant Features", in full and verbatim

> "Age <12 years. · Age <4 years highly significant. · **Duration of symptoms >
> 2 weeks.** · **Interference with function e.g. school, play, sport.** ·
> **History of significant trauma.** · **Night pain and / or pain at rest** ·
> **Competitively sporty / dancer.** · An acutely rigid spine. · **Morning
> stiffness.** · Painful scoliosis - more pronounced on forward flexion of the
> spine. · **Gait disturbance / weakness.** · Loss of saddle sensation · Serious
> or progressive neurological deficit in the lower extremity · Associated
> systemic symptoms, **fever**, weight loss, easy bruising, abnormal bleeding
> etc. · **Alteration of bowel or bladder habit (ask nocturnal enuresis).** ·
> Associated conditions e.g. neurofibromatosis, lumbosacral skin conditions."

Fifteen features. **Eight of them are bolded above because a child can report
them about themselves**, and that proportion is far better than any packet in
this repo except limb injury. Compare the sore-throat packet's equivalent: RCH's
eight-bullet History section yielded two.

Its Assessment section, in full, is the counterweight and the source of most of
this packet's exclusions:

> "Temperature. · Fully undressing child to underwear, this may reveal leg
> deformities / muscle wasting etc. · Palpation for tenderness or a step. ·
> Spinal movements including straight leg raise. · Full neurological
> examination, including saddle sensation. · Gait assessment · Rest of the body:
> look for purpura/bruising, hepatosplenomegaly, lymphadenopathy"

And its closing warning, verbatim:

> "**Beware the child with back pain and pyrexia**, discitis is often not
> recognised at first presentation and radiographs are usually normal for at
> least 2 weeks following onset of symptoms."

That sentence is why item 3 (feeling hot or shivery) ranks where it does despite
being a fact the nurse will measure anyway: the guideline is warning that the
*combination* is missed, and the child's own report of feeling hot arrives before
the thermometer does.

### Source 3, the clinical history, verbatim

> "The clinical history should include a thorough description of the pain
> characteristics (**location, character, onset, duration, change with activity
> or rest, aggravating and alleviating factors, night pain**); **trauma** (acute
> macrotrauma, repetitive microtrauma, athletic activities, recent/remote);
> **mechanical symptoms (worse during or after activity)**; **inflammatory
> symptoms (morning stiffness, better with movement)**; systemic symptoms
> (**fever**, night sweats, weight loss); neurological symptoms (radiculopathy,
> **weakness**, bowel or bladder dysfunction); gait (foot drop); effects of
> previous treatments and the current level of function of the child.
> **Lifestyle, psychosocial factors, interference with school, backpack weight,**
> and family history of back pain…"

And, on where pathology hides:

> "Children and adolescents frequently present with **diffuse, poorly localized
> lumbar pain** in the absence of associated neurologic symptoms. **Focal pain
> and neurologic symptoms are more likely to represent underlying pathology.**"

That distinction is a warning about the body map, not a question: see item 19.

### Source 4, Table 2, verbatim

> **"Red flags that indicate the need for imaging"** — "Fever, chills · Skin
> infection · Penetrating wound near spine · Trauma · **Unrelenting night pain or
> pain at rest** · **Morning stiffness lasting > 30-60 minutes** · Progressive
> motor or sensory deficit · Failure to improve after 3 to 6 weeks of
> conservative therapy · **Saddle anesthesia, bilateral sciatica, or leg
> weakness; difficulties urinating or bowel incontinence** (concerning for Cauda
> equina syndrome) · Unexplained weight loss · History of, or strong suspicion
> for, cancer · Immunosuppression · Chronic oral steroid use · Intravenous drug
> abuse"

### Source 7, the neoplasm row, verbatim

> "**Neoplasm** — Pallor · Weight loss · Lethargy · **Nocturnal pain** · **Back
> pain** · Behaviour changes · Night sweats · Bruising · Hepatosplenomegaly ·
> Lymphadenopathy."

### Source 6, the history lines this complaint shares, verbatim

> "Duration of symptoms, >7 days, repeated presentations in same illness ·
> History of trauma · Pattern and severity of pain and limp, severe localised
> joint pain, **pain waking from sleep** · **Change to urinary or bowel habit** ·
> Functional limitations, inability to walk or weight bear · Symptoms of
> infection: fever, night sweats, chills, rigors, rash · Constitutional symptoms:
> unexplained weight loss, lethargy, anorexia"

### What the red flags are actually worth (source 8)

> "While current evidence is limited and largely based on case-based studies,
> some RFs, particularly a history of cancer, show greater diagnostic value."

and, reporting Finucane et al.:

> "…aside from a previous history of cancer, **most RFs lack sufficient
> validation and may present too late to be useful for early detection.**"

Read that against source 1's admission that its own table is expert consensus,
and the honest summary is: **the best-validated red flag in the whole literature
is a past cancer diagnosis, which is a record, not a child's answer.** Every item
this packet can actually ask sits in the unvalidated remainder. That is not a
reason to ask none of them — a hospital ED asks them all — but it is a reason no
item may be ranked highly *because* a source names it, and it is why the ranking
in decision 6 is built on child-reportability and time-criticality instead.

### The duration problem — five sources, five thresholds, and it inverts the usual sign

| Source | Duration that matters | What it points at |
|--------|----------------------|-------------------|
| Source 2 | *"Duration of symptoms > 2 weeks"* | a Significant Feature in its own right |
| Source 1 | *"continuous pain for more than four weeks"* | when to image |
| Source 4 | *"pain that persists for > 3 to 6 weeks"*; *"Failure to improve after 3 to 6 weeks of conservative therapy"* | structural cause; imaging |
| Source 7 | *"Duration approaching or exceeding 6 weeks"* | JIA |
| Source 6 | *"Duration of symptoms, >7 days"* | a history heading |
| Source 3 | a cohort of *"back pain of greater than 3 months duration"* | the 21% figure |

Same shape as head injury's fall heights and sore throat's five fever
thresholds, and the resolution is the same: **capture the raw fact, let the nurse
classify.** `DURATIONS` records how long, the nurse picks a threshold, the child
is never asked to count weeks.

**But the sign is reversed, and this is the most consequential structural fact in
the packet.** In every packet shipped so far, *longer* means *less relevant* —
acute rules do not describe a child presenting three weeks later, so `long-time`
narrows the question set. Here, longer means **more** worrying: a back pain that
has lasted a month is exactly the one all five sources want found. `long-time` is
therefore in the **default** duration set for this packet, which no previous
packet does. See decision 5.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Does it wake you up at night, or hurt when you are in bed** | Source 2 — *"Night pain and / or pain at rest"*; source 4 — *"Unrelenting night pain or pain at rest"*, and infection *"night-time awakenings"*; source 3 — *"night pain"* in the history list, and tumours: *"Children may complain of severe pain and night pain"*; source 6 — *"pain waking from sleep"*; source 7 — *"Nocturnal pain"* under Neoplasm | **yes** | **The flagship item: five of eight sources, and only the child has it.** Nobody at triage watched the child sleep. It is concrete ("did it wake you up?" is an event, not a judgement), it needs no clinical vocabulary, and it is the red flag most consistently attached to the two causes that must not be missed. Ranked first. The word *"unrelenting"* (source 4) is a grading and is not carried; presence only. |
| 2  | **Does it hurt even when you are keeping still** | Source 2 — *"Night pain and / or **pain at rest**"*; source 4 — *"night pain **or pain at rest**"*; source 3 — *"change with activity or rest"* | **yes** | Deliberately **not fused with item 1** — see decision 4, the bundling ruling. Two sources bundle night pain with rest pain, three name night pain alone and none names rest pain alone, so a fused question would silently adopt one bundling and lose the other. It is also the exact inverse of item 10, and the pair together is what distinguishes mechanical pain from the pain that does not care what the child is doing. A child sitting in a waiting room can answer this one now. |
| 3  | **Do you feel hot or shivery** | Source 1 — *"Fever"* (Table 1), and *"Fever is seen in infectious diseases, neoplasms, rheumatic diseases, and vascular diseases"*; source 2 — *"Associated systemic symptoms, fever"* and *"**Beware the child with back pain and pyrexia**"*; source 3 — *"systemic symptoms (fever…)"*; source 4 — *"Fever, chills"*; source 6 — *"Symptoms of infection: fever…"*; source 7 — *"Fever"* | **partial** | Six of eight sources. Child reports the sensation; the nurse holds the thermometer, as in every other packet. **Maps to the existing shared fact `feels-feverish`** — do not invent a new one; see decision 10. Source 2's discitis warning is the reason this ranks above several better-worded items: the guideline says the combination of back pain and fever is *"often not recognised at first presentation"*. |
| 4  | **Has going to the bathroom changed** | Source 1 — *"Bladder or bowel dysfunction"* (Table 1), and *"clinical signs of bladder or bowel dysfunction should be considered and recorded"*; source 2 — *"Alteration of bowel or bladder habit (ask nocturnal enuresis)"*; source 3 — *"bowel or bladder dysfunction"*; source 4 — *"difficulties urinating or bowel incontinence (concerning for Cauda equina syndrome)"*; source 6 — *"Change to urinary or bowel habit"* | **partial**, **age 8+** | **Five of eight sources, the most time-critical fact in the packet, and the hardest thing in this repo to ask a child.** Kept, floored, and rewritten as a *change* question in the app's existing bathroom register. See "Item 4" below for the full reasoning — it is the longest section in this packet on purpose. The floor is **judgement, not citation**. |
| 5  | **Do your legs feel weak or wobbly** | Source 1 — *"Motor… disturbances of the extremities"* (Table 1), *"limitations of muscle strength"*; source 2 — *"Gait disturbance / **weakness**"*; source 3 — *"neurological symptoms (… **weakness**…)"*; source 4 — *"…or **leg weakness**"* | **yes** | Four of eight sources, and a textbook nearly-reportable criterion **split rather than reclassified**. *"Serious or progressive neurological deficit in the lower extremity"* (source 2) and *"Progressive motor or sensory deficit"* (source 4) are graded, longitudinal, examiner-established findings and stay excluded in item 28. But a child knows their legs feel wobbly, and says so unprompted. Ranked second: it is the child's half of the finding source 1 calls *"most common"*. |
| 6  | **Does anywhere feel fuzzy, or like pins, or gone to sleep** | Source 1 — *"…or **sensory** disturbances of the extremities"* (Table 1), *"sensory deficits"*; source 3 — *"neurological symptoms (radiculopathy…)"*; source 4 — *"Progressive motor or **sensory** deficit"* | **yes**, with a **hard wording constraint** | Three of eight sources, only the child has it, and **the words the sources use are unusable.** "Numbness", "paraesthesia" and "sensory disturbance" are not 4-year-old words, and neither is "numb" reliably an 8-year-old word. See "Reaching numbness in child language" below: the concept must be reached through *fuzzy*, *like pins*, or *gone to sleep*, and the question must offer more than one of those without turning into a menu that leads. **Overlaps `SENSATIONS.tingly`** ("Tingly or numb" / "Fuzzy feeling") — but that ships **`tiers: ['older']` only**, so it is a duplicate for 8–12s and a genuine gap for 4–7s, and it describes the *sore place* rather than the legs. Kept for both tiers; see decision 10. |
| 7  | **Does the hurt go down your leg** | Source 1 — *"**Radicular pain**"* (Table 1), and *"radicular disturbances of motor function or sensitivity"*; source 3 — *"neurological symptoms (**radiculopathy**…)"*; source 4 — *"bilateral **sciatica**"* | **yes** | Three of eight sources; source 1 names radicular pain among the three *most common* neurological findings. **The body map cannot express this fact.** A child can tap Lower back and Right leg, but two taps record two sore places; they do not record one pain that *travels*, and the distinction is the whole point of the criterion. Source 3's *"Focal pain and neurologic symptoms are more likely to represent underlying pathology"* is the reason it ranks third. Source 4's *"bilateral"* is a clinician's qualifier and is not carried — asking a child whether it is one leg or both invites the shape of the question rather than the fact. |
| 8  | **When you wake up in the morning, is it hard to get moving** | Source 2 — *"Morning stiffness"*; source 4 — *"Morning stiffness lasting > 30-60 minutes"*; source 3 — *"inflammatory symptoms (**morning stiffness**, better with movement)"*; source 7 — *"Stiffness. Often worse in morning"* | **yes** | Four of eight sources and the inflammatory discriminator. **A second threshold disagreement, unresolvable and not resolved:** source 4 attaches *"> 30-60 minutes"*, sources 2, 3 and 7 attach no number at all, and a child cannot time it. Presence only; the nurse asks how long. **Duration-restricted** — a pain that started "just now" cannot yet have a morning pattern, so this item drops `just-now` and `this-morning` (decision 5). **Not the same fact as `SENSATIONS.stiff`** ("Stiff" / "Hard to move"), which is a *quality of the pain* and also ships `tiers: ['older']`; this is a *time pattern*. |
| 9  | **Did you fall, or lift something heavy** | Source 1 — *"**Trauma**, respiratory arrest after trauma"* and *"Onset of back pain associated with exercise"* (Table 1); source 2 — *"History of **significant** trauma"*; source 3 — *"**trauma** (acute macrotrauma, repetitive microtrauma, athletic activities, recent/remote)"*; source 4 — *"**Trauma**"*; source 6 — *"History of trauma"*; source 1 Table 2 — *"Workplace factors e.g., sitting, **lifting and carrying**, posture"* | **yes** — **already shipping, re-sourced** | Six of eight sources. **The app already ships the hand-written `back-fell` ("Did you fall or lift something heavy?") and both halves of it survive with citations** — the fall half from five sources, the lifting half from source 1's Table 2. Source 2's *"significant"* is a clinician's grading and is **not** carried: capture the raw fact, let the nurse decide whether it was significant, exactly as head injury refused to pick a fall height. Note source 3's *"recent/remote"* — this item is **not** duration-restricted; a fall two months ago still counts. |
| 10 | **Is it worse when you move around** | Source 3 — *"**mechanical symptoms (worse during or after activity)**"* and *"change with activity or rest"*; source 1 — *"**Onset of back pain associated with exercise**"* (Table 1); source 4 — *"Low back pain in children that is reproducible with lumbar extension is concerning for spondylolysis"* | **yes** — **already shipping, re-sourced** | Re-sources the hand-written `back-worse-move` ("Is it worse when you move around?"), which survives comfortably. Note the polarity trap: source 3 files *"worse during or after activity"* under **mechanical** (reassuring) and source 1 files *"onset associated with exercise"* as a **red flag** (alarming) — the same raw fact points opposite ways in two sources, so the question stays neutral and nothing in the app may interpret it. Source 4's extension test is elicited by an examiner and is item 27, not this. |
| 11 | **Is it worse when you sit down** | Source 1 Table 2 — *"Workplace factors e.g., **sitting**, lifting and carrying, posture"*; source 3 — *"change with activity or rest, aggravating and alleviating factors"* | **partial** — **already shipping, re-sourced weakly, and this is a finding** | Re-sources the hand-written `back-worse-sit` ("Is it worse when you sit down?"). **It is the weakest-sourced of the three shipped `back` questions, and the source it does have is the wrong kind.** Sitting appears once, as a *"potential risk factor"* for **non-specific** back pain in source 1's Table 2 — a chronicity variable for a pain clinic, not a red flag. Meanwhile *pain at rest*, which is a red flag in two sources, was not being asked at all until item 2. So whoever hand-wrote the `back` follow-ups picked the postural half of "activity or rest" and missed the half that escalates. Kept — it is a working question with a citation and a real aggravating/alleviating fact — but ranked last, and recorded so the shortfall is visible rather than inherited. |
| 12 | **Is it stopping you doing things you normally do** | Source 2 — *"**Interference with function e.g. school, play, sport.**"*; source 3 — *"interference with school"*, *"the current level of function of the child"*; source 6 — *"Functional limitations"* | **yes** | Three of eight sources, plainly child-reportable, and **absent from every red-flag table** — it is in source 2's Significant Features and source 3's history, both complaint-organised documents, which is the Search-B pattern the brief predicts. Wording must avoid **"school"** as the anchor: this app runs in a hospital, the child may have been out of school for a week, and `HELPS.back-to-class` is a leftover of the original school framing rather than a licence to reuse it. Ask about *the things you normally do* / *playing*. |
| 13 | **Do you do a lot of sport, or dancing, or gymnastics** | Source 2 — *"**Competitively sporty / dancer.**"*; source 1 Table 2 — *"**Competitive sports**"*, listed as an **evidence-based** risk factor, and *"High levels of sports activity and technical sports"* as a potential one; source 3 — *"athletic activities"*, *"Back pain in young athletes is usually related to the posterior elements of the spine"*; source 4 — athletes *"(32% vs 2%, respectively)"* | **yes** | **The only item in this packet whose citation is graded above expert consensus.** Source 1 grades *"Competitive sports"* level of evidence 1–2 in Recommendation 3 — everything else here is *"expert consensus 100%"*. A child knows what activities they do; this is one of the few things they know better than the record. Ranked low anyway, because it is a *risk factor for the common cause*, not a flag for the dangerous one, and a screen with five slots spends them on escalation first. Never phrase it as a cause ("is it because of gymnastics?"). |
| 14 | **Is it hard to walk** | Source 2 — *"**Gait disturbance** / weakness"*; source 6 — *"Functional limitations, **inability to walk or weight bear**"*, and *"Pain causing limp can be referred. Assess the joints above and below (**including spine**)"*; source 3 — *"gait (foot drop)"* | **yes** — **maps to the shared fact `limb-use`** | Three of eight sources. **Overlaps the limb packet deliberately and must reuse its fact, not duplicate it** — `limb-use` is already carried by the hand-written `can-move` and by limb items 2 and 3, so a child who tapped a leg *and* their back must not be asked twice. See decision 10. The exam half — *"Gait assessment"* (source 2), the observed limp — stays in item 28. Note the direction of source 6's referral logic: it tells a clinician assessing a limp to look at the spine, which is the same overlap arriving from the other side. |
| 15 | Waking up sweaty at night | Source 3 — *"systemic symptoms (fever, **night sweats**, weight loss)"*; source 6 — *"night sweats"*; source 7 — *"Night sweats"* | **partial** — **not proposed for v1** | Three sources, and genuinely something a child could notice. Not generated because it is hard to separate from item 1 in a child's mind (both are "something happened at night"), because a hot ward bed produces false positives all night long, and because the same call was made for the same criterion in the limb packet (item 17). Kept in the table so its absence is a decision. **First item to add if a reviewer disagrees.** |
| 16 | Sleep quantity and quality | Source 1 Table 2 — *"Short sleep duration, inadequate sleep quality"*, a **potential** risk factor | **partial** — **not proposed for v1** | One source, listed as *potential* rather than evidence-based, and it is a chronicity risk factor for non-specific pain rather than anything a triage screen acts on. It would also be answered by item 1 in a way that confuses the two. Not generated. |
| 17 | Backpack weight | Source 3 — *"**backpack weight**"* in the history list | **partial** — **not proposed for v1** | One source, one phrase, no threshold, and a hospital tablet cannot weigh a bag. Recorded because it is the single most familiar folk-belief about children's back pain and a generator left to itself would write it. It is in exactly one of eight sources and in none of the red-flag tables. |
| 18 | Age | Source 1 — *"**Age < 10 years**"* (Table 1), *"an independent red flag"*; source 2 — *"Age <12 years · Age <4 years highly significant"*; source 4 — prevalence by age | **n/a** — **already collected** | Setup screen. **The highest-placed red flag in the strongest source is a number the app already holds and never asks for**, and for most of this app's users it is already positive. Recorded so it is visibly a decision. |
| 19 | Where it hurts; other painful places; whether the pain is focal or diffuse | Source 1 — *"Pain in the head, thorax, abdomen, flanks, extremities, glutes, or pelvis"*, *"Arthralgia or myalgia"* (Table 1); source 3 — *"location"*, and *"diffuse, poorly localized lumbar pain… Focal pain… more likely to represent underlying pathology"*; source 2 | **yes** — **already collected, with a caution** | The body map, which is multi-select — so **a child who taps their back and their tummy has already answered a source 1 red flag** (*"other pain locations"*) without being asked a question. That is the app doing something structurally right and it should be said out loud. **The caution:** source 3's focal-versus-diffuse distinction is *not* captured. A body map records taps, and a child who cannot localise their pain may tap one region confidently anyway. Do not read a single tap as focal pain. |
| 20 | How much it hurts | Source 3 — *"intensity"*; source 1 Recommendation 7 — *"pain characteristics… intensity"*; source 2 — *"Pattern and severity of pain"* (via source 6) | **yes** — **already collected** | FPS-R intensity screen. Asking a child to rate severity in words is banned outright. |
| 21 | What the pain feels like | Source 3 — *"character"*; source 1 Recommendation 7 — *"pain characteristics"* | **yes** — **already collected** | `SENSATIONS`. Note that two entries a back-pain child would want — `tingly` and `stiff` — ship `tiers: ['older']`, which is where items 6 and 8 get part of their justification. |
| 22 | How long it has hurt | Sources 1, 2, 3, 4, 6, 7 — see the duration table above | **yes** — **already collected** | `DURATIONS`. **Drives decision 5 rather than becoming a question**, and it is the item that most changes this packet's shape relative to every other one. The bands cannot express 2 vs 4 vs 6 weeks; the nurse can. |
| 23 | Has it happened before | Source 1 Table 2 — *"**Previous pain episodes**"*, an evidence-based risk factor; source 6 — *"repeated presentations in same illness"* | **yes** — **already collected** | The reserved `happened-before` question, which gets it for free in every report. |
| 24 | Worry, low mood, how the child is feeling in themselves | Source 1 Table 2 — *"Low life satisfaction · **Anxiety** · **Depression** · Low self-esteem"*, all **evidence-based** risk factors; source 3 — *"psychosocial factors"*; source 1 Recommendation 12 | **partial** — **already collected, and deliberately not extended** | `MOODS` already offers Worried, Sad, Tired, Scared, Lonely on every report. Source 1's psychosocial variables are the best-evidenced things in its entire guideline — and they are assessed there with validated psychological questionnaires by a pain clinic, over time, for *treatment planning*. **A triage screen must not turn a validated depression construct into a tick-box**, and `MOODS` deliberately records how the child feels without claiming to measure anything. No new item. |
| 25 | Spots, rash, bruising, purpura, skin changes over the spine | Source 1 — *"Inflammatory signs of disease (arthritis, enthesitis, cutaneous vasculitis)"* (Table 1); source 2 — *"easy bruising"*, *"lumbosacral skin conditions"*, *"look for purpura/bruising"*; source 4 — *"Skin infection · Penetrating wound near spine"*; source 6 — *"rash"*; source 7 — *"Bruising"* | **out of scope — `depth: surface`** | Five sources, and every one of them is a skin finding on a packet scoped `inside`. The hand-written `back-rash` (fact `rash`) already collects the presence half for the surface path, and roadmap rows 2 and 3 are the packets that will own it properly. **Unlike the sore-throat packet's homeless rash item, this one has somewhere to go** — group `back` has a real surface half — which is one small benefit of `GROUP_DEPTH.back` being `'ask'`. |
| 26 | Itch | **none** | — | The app ships `back-itch` (fact `itch`). **No source in this packet mentions itch in a child with back pain.** It is not re-sourced, it is not rejected, and it is not this packet's to remove: it lives on the `surface` path, this packet is `inside`, and the two never compete. Recorded exactly as the limb packet recorded its item 8, and for the same reason — silence about a shipped question reads as endorsement. |
| 27 | Palpation and elicited movement: *"Compression pain or localized pressure pain"*, *"Palpable step deformity"*, *"Palpation for tenderness or a step"*, spinal tenderness, *"Spinal movements including straight leg raise"*, forward flexion, lumbar extension, the Stork test, Adams Forward Bend Test, range-of-motion and Schober measurement | Source 1 (Table 1); source 2 (Assessment); source 3; source 4 | **no — exam** | The examiner's hands and the examiner's instructions. **Never ask a child to press on their own back, bend forward, or arch backward to see whether it hurts** — see wording cautions, and see the limb packet's identical ruling. The hand-written `chest-press` ("Does it hurt when you press on it?") is the pattern this packet must not copy. |
| 28 | Neurological examination: *"Full neurological examination, including saddle sensation"*, *"Loss of saddle sensation"*, *"Serious or progressive neurological deficit in the lower extremity"*, *"Progressive motor or sensory deficit"*, muscle strength testing, reflexes, coordination, *"Gait assessment"*, foot drop | Source 1; source 2; source 3; source 4 | **no — exam / observer** | Items 5, 6, 7 and 14 are the child's-eye halves and are **separately sourced from symptom language, not reclassified from these**. The give-aways are the words *"progressive"* and *"deficit"*: both are comparisons against an examiner's baseline, and *"progressive"* needs two examinations. **Saddle sensation stays here and is never asked** — source 2 files it under Assessment as well as under Significant Features, it requires testing sensation between the legs, and the tummy packet's ruling stands: never ask a child about their genitals and never instruct a child to touch or look at any part of themselves. |
| 29 | Spine shape: *"Externally apparent structural changes of the spine"*, *"An acutely rigid spine"*, *"Painful scoliosis - more pronounced on forward flexion"*, kyphosis, shoulder or pelvis asymmetry, *"Fully undressing child to underwear"* | Source 1 (Table 1); source 2; source 3; source 4 | **no — observer / exam** | **The one part of the body a child cannot see is their own back.** This is not a marginal call: three sources want the shape of the spine assessed and all three assess it by looking at an undressed child from behind, with a scoliometer in source 4's case. A child's answer to "does your back look crooked?" would be a guess reported to a nurse as an observation. |
| 30 | Local swelling; lymph node enlargement; hepatosplenomegaly; pallor; joint hypermobility; arterial hypertension; measured temperature | Source 1 (Table 1); source 2; source 6; source 7 | **no — exam / measurement** | Palpation, inspection and instruments. Item 3 is the child's half of fever and there is no child's half of the rest. Never ask a child to feel their own back or neck for lumps — the sore-throat packet's ruling, which applies verbatim here. |
| 31 | Unexplained weight loss | Source 2 — *"weight loss"*; source 3 — *"systemic symptoms (… weight loss)"*; source 4 — *"Unexplained weight loss"*; source 6 — *"unexplained weight loss"*; source 7 — *"Weight loss"* | **no — not knowable by the child** | **Five of eight sources, and it is still not askable**, which makes it the sharpest illustration in this packet of why the self-report filter is applied to the criterion rather than to the word count. A child does not know their weight last month. "Do your clothes feel loose?" is an invention with no source behind it and must not be written. This belongs on the nurse's surface. |
| 32 | Records and carer knowledge: *"Previous or current glucocorticoid therapy"*, *"Pre-existing and concomitant medical conditions"*, *"Chronic oral steroid use"*, *"Immunosuppression"*, *"History of, or strong suspicion for, cancer"*, *"Intravenous drug abuse"*, *"Associated conditions e.g. neurofibromatosis"*, family history of back pain, *"effects of previous treatments"*, *"Failure to improve after 3 to 6 weeks of conservative therapy"* | Source 1 (Table 1, Table 2); source 2; source 3; source 4 | **no — carer or record** | Not the child's to report, and one of them is the best-validated red flag in the entire literature: source 8 finds *"a history of cancer"* is the only one with real diagnostic value. **The app's report is therefore missing the strongest single predictor**, permanently and by design, and the nurse must be the one holding it. Same conclusion as the sore-throat packet's ARF branch, reached by a different route. Note also that *"Intravenous drug abuse"* sits in a paediatric red-flag table (source 4) unchanged from its adult original — evidence that these lists are inherited rather than derived. |
| 33 | Imaging and laboratory: X-ray, MRI, CT, bone scan; FBC, ESR, CRP, blood and joint cultures, peripheral smear; urinalysis; scoliometer and Cobb angle | Source 1; source 2; source 3; source 4 | **no — imaging / lab** | Most of sources 3 and 4 by volume. Recorded so it is visibly excluded. |
| 34 | Smoking | Source 1 Table 2 — *"Smoking"*, a potential risk factor *"independent of possible confounding factors"* | **no — out of age scope** | Derived in adolescent cohorts. The app's top age is 12. Recorded so a future adolescent-facing version knows the citation exists. |
| 35 | Vomiting | **none** | — | **Recorded as an absence.** `vomiting` is an established shared fact in this app (tummy `threw-up`, sore-throat item 11), and a generator scanning for reusable facts will be tempted by it. **No source read for this packet names vomiting in a child with back pain.** Writing that question here would be an invented citation. If a child with back pain is also vomiting they will tap their tummy, and the tummy packet owns it. |

**Yield: ~50 distinct criteria across 4 red-flag / significant-feature lists and
2 supporting guidelines (no prediction rule exists) → 12 clean, 2 partial,
3 recorded but not proposed for v1, 12 excluded outright, 7 already collected
elsewhere in the app.**

Counting the way the earlier packets counted — clean plus partial, minus the
not-generated — **14 askable items**, of which **three re-source questions the
app already ships** (items 9, 10, 11) and **two must reuse an existing shared
fact rather than mint a new one** (items 3 and 14).

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
(30%); sore throat ~53 → 12 (23%); limb injury — 8 named rules → **1** clean.
Back pain ~50 → **14 (28%)**, and that is a better result than the roadmap's
"Moderate" evidence grade predicted. The reason is structural and worth naming:
**the recognised red flags for this complaint are overwhelmingly symptoms rather
than signs.** Night pain, rest pain, leg weakness, altered sensation, radiating
pain, morning stiffness, bladder and bowel change and functional interference are
all things that happen to a child between visits, in a bed, in a bathroom, in a
playground — places where no clinician is standing. Sore throat converged on
tonsillar exudate and node tenderness, both of which need a clinician's eyes and
hands, and its yield collapsed. This complaint converged on the child's own
week.

## Item 4 — bladder and bowel change

The single most embarrassing thing this app could ask a child, and one of the
few questions in the whole repo where a "yes" means *now*. It gets its own
section because the reasoning has to be visible.

**What the sources actually say.** Five of eight name it, and they name it
differently:

| Source | Wording |
|--------|---------|
| 1 (Table 1) | *"Bladder or bowel dysfunction"* — under **Neurological symptoms**, and one of the three the paper calls *"most common"* |
| 2 | *"Alteration of bowel or bladder habit **(ask nocturnal enuresis)**"* — the parenthesis is an instruction to the clinician about *how* to ask |
| 3 | *"neurological symptoms (… bowel or bladder dysfunction)"* |
| 4 | *"difficulties urinating or bowel incontinence **(concerning for Cauda equina syndrome)**"* |
| 6 | *"Change to urinary or bowel habit"* |

**Why it cannot simply be dropped.** The limb packet met the same criterion and
declined to generate it, correctly: there, it was one line in a guideline about a
sore leg. Here it is a core red flag *for the presenting complaint itself*, named
by five of eight sources, sitting in the neurological group that source 1 says is
where the danger lives. Dropping it would mean this packet omits the escalation
criterion its own literature ranks highest among the things a child can know.

**Why it cannot be asked the way the sources word it.** Every source phrase is
unusable with a child. *"Dysfunction"*, *"incontinence"* and *"nocturnal
enuresis"* are clinical terms. Worse, all three carry blame in a child's ear.
The tummy packet already ruled this: *"Never make a bodily-function question
sound like a fault or a test… A child who hears an accusation answers the
accusation."* And the limb packet added the observation that **a screen which
asks a child about wetting reads as an accusation** — a child who has had an
accident will deny it, which turns a red flag into a false negative at exactly
the moment it matters.

**The resolution, in four parts.**

1. **Ask about *change*, not about *accidents*.** The criterion in four of the
   five sources is literally the word *change* or *alteration* — not the
   presence of wetting. "Has going to the bathroom been different today?" is the
   criterion, is not an accusation, and is answerable. A child who is retaining
   urine, or who suddenly cannot tell when they need to go, has noticed
   something *different*, and difference is the thing the question asks for.
2. **Use the register the app already has.** `HELPS` offers *"Go to the
   bathroom"* and the tummy group ships `bathroom-today` ("Have you been to the
   bathroom today?"). **"Bathroom" is already this app's word**, it is US
   English, it covers both halves of the criterion without naming either, and it
   is neutral. The tummy packet's *"pee"* and *"poop"* are available and correct
   where a question must be specific — but this item should not need to be.
3. **`minAge: 8`, and it is judgement, not citation.** Two reasons, and they are
   different in kind:
   - A **validity** reason. Source 2's own instruction is *"ask nocturnal
     enuresis"* — but bedwetting is common in healthy young children and rare in
     older ones, so "has it changed" carries information at 10 that it does not
     carry at 5. A yes from a 5-year-old is much more likely to be ordinary than
     neurological.
   - A **design** reason. A 4- to 7-year-old on a shared hospital tablet, asked
     about the bathroom by a machine, is being asked to disclose the thing
     children of that age are most often shamed about. The cost of a wrong answer
     here is not just a bad data point.

   **No source floors this criterion.** Recorded in `minAgeNotes` as judgement so
   a reviewer can overturn it knowing it is not a citation.
4. **It must reach the nurse for the children it does not ask.** Below 8 this is
   a **nurse prompt**, not a question — the same disposition the limb packet
   gave it, reached here for a different and stronger reason. The clinical
   reviewer should confirm the nurse-facing surface carries it, because for a
   4-to-7-year-old with back pain this app will collect the packet's
   highest-stakes red flag from nobody.

**And one thing this does not fix.** `bankQuestions` filters
`!q.applies.minAge || age === null || age >= q.applies.minAge` — **an age floor
does not apply when the age is unknown.** A child whose age was never entered is
asked this question. That is the right default for most floored items (guessing
low costs information) and the wrong one for this one. Carried to "Still open" as
a code change, not a packet change.

## Reaching numbness in child language — item 6

The criterion is source 1's *"sensory disturbances of the extremities"* and
*"sensory deficits"*, source 4's *"Progressive motor or sensory deficit"*, and
source 3's *"radiculopathy"*. Not one of those phrases can be said to a child,
and the obvious translations are barely better:

- **"Numb"** — a word a 4-year-old does not reliably have, and one that older
  children often use to mean *cold* or *dead-feeling* rather than *without
  sensation*. The app's own judgement agrees: `SENSATIONS.tingly` is labelled
  *"Tingly or numb"* for the older tier and glossed as *"Fuzzy feeling"* for the
  young tier, which is the same translation problem solved once already.
- **"Tingling"** — better, but abstract, and it is also what a foot feels like
  after sitting cross-legged, which is a *false* positive a child will
  confidently report.
- **"Pins and needles"** — the idiom most adults reach for, and it is opaque to
  a young child who has never handled either.

**The ruling: reach the concept through concrete experience, offer more than one
route, and never name a nerve, a level or a syndrome.** The vocabulary available:

- **"fuzzy"** — already in the app's own young-tier gloss for this exact
  sensation, so it is consistent rather than invented.
- **"like pins"** — the concrete half of "pins and needles", which a child can
  picture.
- **"gone to sleep"** — the phrase children actually use, and the one that most
  reliably names the experience without naming the sensation.

**The leading risk, and how to avoid it.** Offering three descriptions in one
question edges toward a menu, and a menu invites a child to pick something rather
than to report something. The mitigation is that all three name *the same*
sensation from different angles — this is not a list of different symptoms — and
that the question must ask **whether** it happens, never **which** one it is.
"Does your leg ever feel fuzzy, like it went to sleep?" asks one thing. "Is it
fuzzy, tingly, prickly, numb or asleep?" asks the child to choose an adjective,
which is a vocabulary test.

**Tier split is expected here.** The `young` wording should lean on *gone to
sleep*; the `older` wording may use *tingly* or *pins and needles* directly and
should, because `SENSATIONS.tingly` proves the app already trusts 8–12s with the
word. The generation stage should write both.

## Wording cautions

Ban **concepts**, not phrasings. Everything in this section is transcribed into
`meta.bannedPhrases`; a caution that lives only in prose is not enforced by
`scripts/screen.mjs`.

- **Never name a condition or a structure.** Not tumour/tumor, cancer,
  leukaemia/leukemia, sarcoma, cauda equina, scoliosis, kyphosis, discitis,
  osteomyelitis, spondylolysis, spondylolisthesis, sciatica, radiculopathy, disc,
  herniation, arthritis, JIA, vertebra, spine as an anatomical noun, or nerve.
  The child has already tapped Upper back or Lower back; that is the only
  location word the questions need.
- **Never name what happens next.** Not X-ray, MRI, scan, blood test, needle,
  brace, cast, operation, surgery. Carried unchanged from the limb packet's
  ruling, for the same reason.
- **Never ask a child to press, poke or feel their own back**, and **never
  instruct a child to bend, arch, twist or lift to see whether it hurts.** That is
  item 27 delegated to a seven-year-old, and it would produce a
  spinal-tenderness or reproducible-pain answer that reads to a nurse as an
  elicited finding. The hand-written `chest-press` is the pattern to avoid.
- **Never ask a child what their back looks like.** Not crooked, not bent, not
  lopsided, not "is one shoulder higher". Item 29 — the one region of the body
  the child cannot see.
- **Never ask about the child's genitals, their bottom, or saddle sensation**,
  and never instruct a child to look at or touch any part of themselves.
  Carried verbatim from the tummy packet.
- **Never make a bathroom question sound like a fault, a test, or an
  accusation.** No "accident", no "wetting", no "did you wet yourself", no
  "nappy" (and not "diaper" either — the app's users are 4–12 and the word is
  infantilising even where it is the right dialect). Item 4 asks whether
  something has been **different**; it never asks what happened.
- **Never ask a child to time or count anything.** Not how many minutes the
  stiffness lasts (source 4 says 30–60; a child cannot), not how many weeks it
  has hurt (`DURATIONS` has bands), not how many times they woke up.
- **Never ask a child to rate or grade anything in words** — not "significant"
  trauma (source 2 grades it, we do not), not "unrelenting" night pain (source 4
  grades it), not "serious or progressive" weakness. Severity adjectives are
  banned globally by `screen.mjs`; the packet-specific trap is that three of its
  four red-flag lists carry a grading adjective inside the criterion, and
  stripping it is what makes the criterion askable.
- **Never present sport as the cause.** "Is it because of gymnastics?" invites a
  child to accept an explanation. Item 13 asks what the child does, full stop.
- **Never say "school" as the anchor for item 12.** The app runs in a hospital,
  the child may not have been at school for a week, and `HELPS.back-to-class` is
  a leftover of an earlier framing. Ask about the things they normally do.
- **US English throughout, and the sources are not.** Sources 2 and 5 are
  British, source 7 Scottish, source 6 Australian, source 1 German-authored in
  British-inflected English. Specifically banned, with the US form given:
  - **"poorly"** → *sick*, or better, ask the concrete thing.
  - **"wee" / "weeing" / "wee-wee"** → *pee*, per the tummy packet's decision 1.
  - **"off colour" / "off-colour"** → not a phrase a US child uses at all.
  - **"have you got"** → *do you have*. Note the sore-throat packet ships item 14
    as "Have you got spots or a rash?"; that is the idiom this ban exists to stop
    spreading.
  - **"trousers"** → *pants*. Relevant here because clothing is the natural way
    to ask about a back.
  - **"nappy"** → banned outright rather than translated; see the bathroom
    caution above.
  - **"plaster"**, **"torch"**, **"might be sick"** → carried from the roadmap's
    review notes; "might be sick" is the one that shipped for weeks.
- Avoid "serious", "dangerous", "bad", "severe" — already banned globally.
- Avoid **"still"** — banned globally by `screen.mjs` as a presupposition, and it
  is a live temptation here because "can you still walk?" is the natural
  phrasing of item 14. Use "is it hard to walk?".

## How these were found

**Search A** was run as the brief specifies — comparison and validation
literature, not a remembered rule name. It returned source 1, which is the
right kind of document (a systematic screen of 3,516 articles by fourteen
specialty societies) and which reports that **the thing Search A exists to
enumerate does not exist**. There is no PECARN here, no CATCH, no Alvarado, no
Ottawa. Search A also produced source 3, source 4 and source 8, and source 8 is
the closest thing to a validation study anywhere in the field — an adult-dominant
scoping review whose conclusion is that most red flags *"lack sufficient
validation and may present too late to be useful"*.

**Search B** was run for a general guideline organised by the presenting
complaint, and **the usual answer failed**: RCH Melbourne, which anchored four of
the six shipped packets, **has no back-pain guideline at all** (404, and no entry
in its index). So did the second obvious answer: **NICE NG59 is titled "in over
16s"** and its recommendations chapter contains no occurrence of "children" or
"young people". The two most reachable Search B sources in this whole project are
both unavailable for this complaint — one because it does not exist, one because
it is scoped to adults — and a run that gave up at that point would have produced
a packet from Search A alone.

Search B eventually produced **source 2**, a district paediatric ED's own
guideline, and it is the most valuable document in the packet. **Eight of the
fourteen askable items are in it**, five of them in a form no red-flag table
uses: *"Interference with function e.g. school, play, sport"*, *"Competitively
sporty / dancer"*, *"Morning stiffness"*, *"Night pain and / or pain at rest"*,
*"Duration of symptoms > 2 weeks"*. Sources 6 and 7 were then reached sideways —
they are the limb packet's guidelines, and they contain back-pain lines because
a limping child and a child with back pain are the same differential seen from
two ends.

**The gap between the searches, stated precisely.** For sore throat the gap was
that the scores answered *"does this child need an antibiotic?"* and the
guidelines answered *"is this child's airway in trouble?"* Here the gap is
different again, and it is about **who the criterion is for**:

- **Search A's material is written for the person deciding whether to image.**
  Source 4's table is literally titled *"Red flags that indicate the need for
  imaging"*; source 1's Recommendation 10 is about targeted imaging; source 8 is
  about diagnostic accuracy for malignancy. Their variables skew toward what a
  radiologist or an examiner establishes.
- **Search B's material is written for the person deciding whether this child
  goes home.** Source 2's "Significant Features" mixes a red flag (*"Loss of
  saddle sensation"*) with a social fact (*"Competitively sporty / dancer"*) and a
  functional one (*"Interference with function"*) in one list, because all three
  change the disposition.

**And the functional items exist only in Search B.** Interference with function,
sportiness and morning stiffness appear in no red-flag table read for this
packet — they appear in the ED guideline and in source 3's history paragraph.
That is the same lesson the tummy packet learned, arriving through a different
door: **Search A tells you what the field measures; Search B tells you what the
complaint does to the child.**

For the next packet, one further lesson: **when Search B's usual sources fail,
say so and keep going.** Two 403s and a 404 in this run would each have looked
like a reason to stop.

## Decisions

**Decided, not deferred.**

1. **Register: US English, inheriting the tummy packet's decision 1 unchanged.**
   The bodily-function vocabulary was ruled once and is not re-ruled:
   **"throw up"**, **"poop"**, **"pee"**, and **"go to the bathroom"** which the
   app already ships in `HELPS.bathroom` and `bathroom-today`. Item 4 uses
   *bathroom* and does not need to be more specific than that.
   The new vocabulary domain this packet opens is **sensation and movement**, and
   it is ruled explicitly:
   - **"fuzzy" / "like pins" / "gone to sleep"** — never "numb" alone for the
     young tier, never "paraesthesia", never "sensory", never "pins and needles"
     for the young tier. See "Reaching numbness".
   - **"wobbly" / "weak"** — not "give way", not "buckle", not "collapse", not
     "paralysed".
   - **"goes down your leg"** — not "radiates", not "shoots", not "travels",
     which are adult pain-clinic idiom, and never "sciatica".
   - **"hard to get moving"** — not "stiff" alone (that is `SENSATIONS.stiff`,
     a different fact and an older-tier-only word), not "rigid".
   - **"your back"** — matches the body-map labels "Upper back" and "Lower back".
     Never "spine", "vertebrae", "lumbar", "disc", "nerve".
2. **Answer types.** `FollowUpScreen` renders yes/no, count, text and voice. All
   fourteen askable items are **yes/no**. Nothing here needs a widget the app
   does not have, and in particular **nothing may use `count`** — the two places
   a count is tempting (minutes of morning stiffness, weeks of duration) are both
   thresholds this packet has ruled the nurse resolves.
3. **Depth: `"inside"`.** `GROUP_DEPTH.back === 'ask'`, so unlike the sore-throat
   packet a real depth answer exists and can be scoped on. `inside` is the honest
   value: every item here is about pain, movement, sensation or systemic upset,
   and none of them belongs to a child who answered "on my skin". The filter in
   `bankQuestions` fires `inside` questions for `inside` and for `unknown`, which
   is the right behaviour — a child who does not understand the depth question
   should still be asked whether the pain wakes them at night.
4. **Items 1 and 2 are two questions and must never be fused — a bundling
   disagreement.** The pattern named in the sore-throat packet's decision 4,
   recurring:

   | Source | How night pain and rest pain are combined |
   |--------|-------------------------------------------|
   | 2 | *"Night pain **and / or** pain at rest"* — one feature, either half |
   | 4 | *"Unrelenting night pain **or** pain at rest"* — one flag, either half |
   | 3 | *"night pain"* alone, inside the pain-characteristics list |
   | 6 | *"pain waking from sleep"* alone |
   | 7 | *"Nocturnal pain"* alone |

   Three sources name night pain by itself; **no source names rest pain by
   itself**; two bundle them. A fused question ("does it hurt at night or when
   you're resting?") silently adopts the bundling of sources 2 and 4 and destroys
   the atom that sources 3, 6 and 7 want. It is also a worse *question*: "does it
   wake you up?" is an event a child remembers, and "does it hurt when you're
   sitting still?" is a state a child can check right now, and asking them
   together gets a yes that means neither. **Capture the atoms, let the nurse
   compose.**
5. **Duration scope, and it inverts every previous packet.** The sources are in
   the duration table above. Ruling, band by band:
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet**, minus
     item 8 for the two shortest bands.
   - `not-sure` — **full packet**, minus item 8. Same convention as every other
     packet: `not-sure` means the child cannot date it, not that it is old.
   - **`long-time` — full packet, all fourteen items, and this is the point.**

   **No previous packet puts `long-time` in its default set.** Head injury,
   tummy and sore throat all narrow there, because acute rules stop describing
   the child. Here the literature says the opposite in five separate voices:
   *"Duration of symptoms > 2 weeks"* is itself a Significant Feature (source 2),
   *"continuous pain for more than four weeks"* triggers imaging (source 1),
   *"> 3 to 6 weeks"* means look for a structural cause (source 4), *"approaching
   or exceeding 6 weeks"* means JIA (source 7). **A back pain that has lasted a
   long time is the presentation these guidelines were written for.** Narrowing
   `long-time` would remove the questions precisely from the children the sources
   most want asked.

   **The one exception, in the other direction:** item 8 (morning stiffness)
   drops `just-now` and `this-morning`, because a pain that began an hour ago has
   no morning pattern to report and the question would collect an artefact.
6. **Item priority, and one question per item.** Fourteen items compete for five
   slots (`cap = 5` for under-8s, `6` for 8+, spent across every group the child
   tapped). Never ask two questions from the same item. Order:

   `1 (wakes you at night) → 5 (legs weak or wobbly) → 7 (goes down your leg) →`
   `4 (bathroom different, 8+) → 6 (fuzzy or gone to sleep) → 3 (hot or shivery) →`
   `9 (fall or lifting) → 12 (stopping you doing things) → 14 (hard to walk) →`
   `8 (morning stiffness) → 2 (hurts keeping still) → 10 (worse when moving) →`
   `13 (sport or dancing) → 11 (worse when sitting)`

   The reasoning, since ranking is what decides what a child is actually asked:
   - **Items 1, 5, 7 lead** because they are the child's-eye halves of the three
     findings source 1 calls *"most common"* among specific causes, and because a
     nurse at triage has none of them. A 4-year-old with a back pain gets exactly
     these three plus items 4-or-6 and 3.
   - **Item 4 is fourth despite the age floor**, not lower, precisely *because*
     of the floor: it fires only for 8–12s, where the cap is 6, so ranking it
     fourth costs a young child nothing and guarantees an older child is asked
     the packet's most time-critical question. Ranking it lower would have made
     it effectively unreachable for a child who also tapped a leg.
   - **Item 3 (fever) ranks sixth**, below four items with thinner citation, for
     the reason the sore-throat packet ranked its fever item twelfth: the nurse
     takes a temperature regardless, and the app's value is highest where it is
     the only instrument. It is not lower still because source 2 warns
     specifically that back pain *with* fever is *"often not recognised at first
     presentation"*.
   - **Items 9, 10 and 11 — the three questions the app already ships — rank
     7th, 12th and 14th.** That is a deliberate demotion and it should be
     visible: the hand-written set asked about mechanism and about posture, and
     asked nothing at all about night pain, weakness, sensation, radiation or the
     bathroom. **This packet's main effect on the `back` group is not to add
     questions; it is to change which three get asked.**
   - **Item 13 ranks 13th although its citation is the only one graded above
     expert consensus.** Evidence grade is not clinical urgency: it is a risk
     factor for the common, benign cause.

   **Proposed, not yet confirmed by review.**
7. **Age floors: one, and it is judgement.** Item 4 carries `minAge: 8`, for the
   validity and design reasons set out in "Item 4". **No source floors any item
   in this packet**, and the age statements that exist (source 1's *"Age < 10
   years"*, source 2's *"Age <4 years highly significant"*, source 4's prevalence
   curve) all point the *other* way — they say younger children with back pain
   are more worrying, not less askable. Inventing floors from them would be the
   exact error the brief warns about. Recorded in `minAgeNotes`.

   In particular **item 6 is deliberately not floored**, even though its nearest
   in-app equivalent `SENSATIONS.tingly` is `tiers: ['older']`. Flooring it at 8
   would make it duplicate `tingly` exactly where it fires and vanish exactly
   where the app has no other route to the concept — the trap the limb packet
   fell into with its own item 9. The answer is a **tier-split wording**, not a
   floor.
8. **Facts: reuse two, mint the rest, and tag the hand-written fallbacks.**
   `followUpsForGroups` dedupes on `fact ?? id`, across packets and across the
   sourced/hand-written boundary.
   - **Item 3 → `feels-feverish`** (already carried by limb `l-007`, throat
     `s-020`, chest `c-023`, ears `e-019`). Systemic, one answer about the whole
     child, exactly the merge condition the roadmap states. Roadmap row 1 will
     take ownership of this fact later; do not delete anything.
   - **Item 14 → `limb-use`** (already carried by the hand-written `can-move` and
     by limb items 2 and 3). A child who tapped a leg and their back must not be
     asked about walking twice.
   - **Item 35 records that `vomiting` is NOT reused**, because no source read
     supports it.
   - Everything else mints a new fact. In particular **item 10 must NOT reuse
     `worse-on-exertion`** (chest `chest-worse-move`): that fact is chest pain on
     exertion, a cardiorespiratory discriminator, and back pain worse on movement
     is a mechanical one. The roadmap's rule — *"Only merge a fact when it is
     systemic"* — excludes it. Flagged for the reviewer, because a child who taps
     Chest and Back will be asked two similar-sounding movement questions and
     that is the accepted cost.
9. **The three hand-written `back` follow-ups survive, and the app cannot
   currently suppress them.** `back-worse-sit`, `back-worse-move` and `back-fell`
   **carry no `fact`**, so `keyOf` falls back to their `id` and nothing in the
   bank can dedupe against them. They will sit in the same queue as the sourced
   questions, after them, and compete for the tail of the cap — so a child could
   be asked a sourced fall question and then `back-fell`. `back-rash` and
   `back-itch` are safe (facts `rash` and `itch`, and they are on the `surface`
   path anyway).

   **Recommendation, for the reviewer and not applied here** (this run writes two
   files only): add `fact` tags to the three, matching whatever the generation
   stage assigns to items 9, 10 and 11. That converts them from competitors into
   properly-suppressed fallbacks, which is what decision 11 of the sore-throat
   packet asked for by hand before `fact` existed.
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood, helps and
    the other groups' questions:
    - **Rejected as duplicates:** item 19 (body map — and note it silently
      collects a source 1 red flag), item 20 (FPS-R), item 21 (`SENSATIONS`),
      item 22 (`DURATIONS`), item 18 (setup age), item 23 (`happened-before`),
      item 24 (`MOODS`).
    - **Merged into an existing fact rather than duplicated:** items 3 and 14 —
      see decision 8.
    - **Kept despite in-app overlap, with the overlap stated:** item 6 overlaps
      `SENSATIONS.tingly`, which is older-tier-only and describes the sore place
      rather than the legs; item 8 overlaps `SENSATIONS.stiff`, which is
      older-tier-only, `inside`-only, and a pain *quality* rather than a *time
      pattern*.
    - **Kept despite cross-group overlap:** item 4 is adjacent to tummy's
      `bathroom-today` ("Have you been to the bathroom today?"), but that asks
      *whether*, on a tummy report, and item 4 asks *whether it has changed*, on
      a back report. Different facts, different groups, and `bathroom-today` has
      no `fact` tag so they will not collide. Item 12 is adjacent to
      `HELPS.back-to-class`, which records what the child *wants*, not what they
      *cannot do*.
    - **Adjacent, not redundant:** item 10 versus chest's `worse-on-exertion` —
      see decision 8.
    - **Out of scope rather than rejected:** item 25 (rash) belongs to the
      `surface` path and to roadmap rows 2 and 3.
11. **Neck stiffness is not absorbed.** Roadmap row 11 is a separate
    neck-pain-and-stiffness packet serving `throat` + `back`. Nothing in this
    packet asks about the neck, no item is worded so that it would only make
    sense for a neck, and *"An acutely rigid spine"* (source 2) is excluded as an
    examination finding rather than borrowed as a stiffness question. **The one
    thing this packet cannot do is stop its questions firing for a child who taps
    Back of neck** — see Scope, and "Still open".
12. **Nothing in this packet is validated, and the packet says so first.** The
    "Read this before anything else" section is at the top rather than in a
    closing Ambiguity section, per brief §10: a reader must not reach the
    citations before they reach the fact that no rule exists and that the
    red-flag tables are graded expert consensus.

## Still open

- **Group `back` includes `back-neck`, and `subgroupOf` cannot exclude it.**
  `subgroupOf` returns `null` for every non-`limb` region, so `meta.subgroups`
  has no way to say "upper and lower back only". A child who taps only Back of
  neck receives all fourteen questions, including "does the hurt go down your
  leg?". The fix is a code change — generalise `subgroupOf` beyond `limb` — and
  it should happen **before** roadmap row 11 ships, because that packet will need
  the opposite half of the same split. **The largest unresolved problem here.**
- **An age floor does not apply when age is unknown.** `bankQuestions` passes
  `age === null` through every `minAge` filter, so a child whose age was not
  entered is asked item 4. For most floored items that default is right; for this
  one it is not. Needs either a code change or a reviewer's ruling that the
  default is acceptable.
- **Item 4 below age 8 reaches nobody.** The packet's disposition is that it
  becomes a nurse prompt, but this run cannot verify that the nurse-facing
  surface has anywhere to put it. Same open question the limb packet logged, now
  seen twice and with higher stakes.
- **The hand-written `back` follow-ups have no `fact` tags** (decision 9), so
  they cannot be suppressed by the bank. Not fixed here; this run writes two
  files only.
- **Item 10 and chest's `worse-on-exertion` will both fire** for a child who taps
  Chest and Back. Judged acceptable under the roadmap's systemic-only merge rule,
  but a reviewer should see the two questions side by side before agreeing.
- **The 50–65% and the 21% cannot be reconciled** from what was read. Source 2
  says between half and two thirds of children who *seek advice* for back pain
  have a specific or serious cause; source 3 reports 21% positive findings in a
  chronic referred cohort. Both are quoted, neither is adopted, and no item
  depends on the difference — but a clinician reading this packet will want to
  know which population the app is actually serving.
- **Morning stiffness has no usable threshold.** Source 4 says *"> 30-60
  minutes"*; sources 2, 3 and 7 give no number; a child cannot time it. The
  packet captures presence only. A reviewer should confirm that presence alone is
  worth a slot, because the duration is what distinguishes inflammatory stiffness
  from ordinary morning grogginess.
- **Item 12's wording needs a hospital-appropriate anchor.** "School" is wrong
  here (the app runs in a hospital, and the child may have been out of school for
  a week), but "the things you normally do" is vague for a 4-year-old. A play
  specialist's view would help more than another source would.
- **Nothing in this packet is evidence about children self-reporting back pain.**
  Source 2's *"26 – 36% of children report back pain on direct questioning"* is
  the closest thing found, and it establishes that children *answer* the question,
  not that they answer it accurately. There is no equivalent here of the
  sore-throat packet's source 8 (FPS-R self-rating in 4–17s). If one exists, a
  future run should find it; if it does not, `packets/LIMITATIONS.md` should say
  so for this complaint specifically.
- **Item 6's tier split is untested.** "Gone to sleep" is proposed for the young
  tier on reasoning, not on evidence, and the failure mode — a child answering
  yes because their foot went to sleep in the waiting room — is exactly the false
  positive that makes a neurological red flag useless.

## Ambiguity in the sources

Recorded rather than papered over.

- **Source 1's Table S1 — the per-disease mapping that generated Table 1 — is
  not in the fetched text.** Table 1 *is*, in full and verbatim, and the
  narrative that follows it names which red flags attach to which disease groups.
  But the underlying *"systematic recording in Table S1"* is supplementary and
  was not read, so this packet knows *that* bladder and bowel dysfunction is a red
  flag and *that* it is among the most common neurological findings, and does not
  know from how many studies. No item depends on a count.
- **Source 1's red flags are graded "expert consensus 100%", not evidence.**
  Stated at the top of this packet, repeated here because it is the single most
  important caveat: unanimity among fourteen specialty societies is not the same
  thing as measured accuracy, and the paper says so itself.
- **Source 2 is a single district general children's hospital's ED guideline,
  with no reference list in the fetched text.** Its Background figures — *"26 –
  36%"*, *"fewer than 2%"*, *"50 – 65%"* — carry no citation in the document, and
  the guideline's own lineage is visible in its footer (*"Written by Dr J
  Cumberland April 2004"*, updated 2020 and 2023). It is the most useful document
  in the packet and the least externally verifiable, and eight of the fourteen
  askable items rest partly on it. **If a reviewer overturns one source, this is
  the one whose overturning costs most.**
- **Source 4's table is partly adult-derived.** *"Intravenous drug abuse"* in a
  paper titled "Low back pain in youth" is inherited from the adult low-back-pain
  red-flag canon rather than derived in children, which is a reason to treat the
  rest of its table as adult-shaped too. Its uniquely useful contribution —
  *"Morning stiffness lasting > 30-60 minutes"* — is also the only number
  attached to a red flag anywhere in this packet, and it is unsourced within the
  article's own text as fetched.
- **Source 3 is a review, and its history list is unreferenced.** The clinical
  history paragraph quoted at length above carries no citation in the fetched
  text; it is a generalist review's synthesis. It is quoted because it is the most
  complete history schema found, not because it is the best evidenced.
- **Source 8's population is adults.** Its most-examined red flag is *"age >
  50"*, and its conclusion about red flags is drawn from a literature dominated
  by case reports (*"27 case reports"* plus a small number of cohort studies).
  **No item is sourced to it**, and the only claim it supports here is a negative
  one — that red flags in general are poorly validated — which is a claim source 1
  independently makes about the paediatric literature. Cited because the
  alternative was to make that claim with no source at all.
- **The sources disagree about what "red flag" means.** Source 1 calls age < 10 a
  red flag; source 2 files it under Significant Features alongside
  *"Competitively sporty / dancer"*; source 4's list is explicitly *"Red flags
  that indicate the need for imaging"*. Three lists, three purposes, one label.
  The self-report filter had to be applied to each **criterion** on its own terms
  rather than to the heading it sat under — the same problem the sore-throat
  packet met with RCH's History/Examination boundary, and the reason item 29
  (spine shape) is excluded even though source 2 files it as a *feature* rather
  than as an *examination finding*.
- **Two Search B sources returned HTTP 403 and were never read.** Queensland
  Health's Clinical Prioritisation Criteria and NENC Healthier Together are both
  the kind of document — referral thresholds, and a parent-facing half — that
  would most improve this packet. **Nothing here depends on them**, which is the
  only reason their absence is survivable.
