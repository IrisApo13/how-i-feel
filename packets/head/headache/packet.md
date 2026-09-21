# Headache, no injury

Presenting complaint · packet `headache` · serves group `head`, mechanism
`no-injury`, depth `inside` · packet v1 · assembled 2026-09-08
Status: **not yet clinically reviewed** · sources verified first-hand: 12 of 14

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
> who arrives with a headache they did not get from a bump, and marks which of
> those a child can report about themselves. **Not** a diagnostic tool: nothing
> here may be scored, summed, or shown to a child or nurse as a suggested cause.
> Two separate literatures meet in this complaint — one that *characterises* a
> primary headache and one that *triages* for a secondary cause — and every
> item below is labelled with which of the two it comes from, because they are
> not interchangeable.

## Read this first — the three things that weaken this packet most

Stated here rather than at page 40, because a reader must not have to reach the
closing sections to find the weakest link.

**1. The one prediction study found disagrees with the guidelines about this
packet's third-ranked item.** Manoyana et al. (source 11) is the only clinical
prediction score located for *non-traumatic* paediatric headache. It tested
*"Pain that wakes the child from sleep or occurs on waking"* in 109 children and
found **no association** with emergent intracranial lesions — 13.8% of the
children *without* a lesion had it against 9.8% of those *with* one, p = 0.52.
NICE NG127 nonetheless makes the same feature two of its ten same-day-referral
criteria, and three other sources repeat it. **This packet keeps the item and
ranks it third, on the guidelines, and records the disagreement rather than
hiding it.** The app collects facts; it does not predict, and it must not be
read as if Manoyana had validated anything in it. Manoyana's own cohort is
enriched almost beyond use — every child in it had already been sent for
neuroimaging, and 47% had a lesion — so this is a disagreement to flag for a
reviewer, not a refutation.

**2. The best-evidenced source for a child answering about their own headache
starts three years above this app's floor.** Kellier et al. (source 12) is the
only study found that tests children's *self-report* against headache criteria.
It enrolled ages **7–17**; this app starts at **4**. Its finding is also
sobering: agreement between a child's own sense of "this is a migraine" and the
ICHD-3 criteria applied to the same day was **Cohen's Kappa 0.50** — moderate,
and mostly by *under*-reporting. Nothing in this packet may be described as
validated for a 4-year-old, because nothing was tested in one.

**3. Two of this packet's core items are ones ICHD-3 says young children may not
be able to report at all.** ICHD-3 states, of photophobia and phonophobia, that
*"In young children, photophobia and phonophobia may be inferred from their
behaviour"* (source 1). That is a statement that the *observer* supplies these,
not the child. The packet's response is decision 6 — a wording rule, not an age
floor — and a reviewer should look hard at whether that is enough.

## Scope

**Age.** App covers 4–12. Three separate age problems, and they are different in
kind:

- **NICE CG150** (source 7), the flagship UK headache guideline, is titled
  *"Headaches in over 12s"* and covers *"young people (aged 12 years and older)
  and adults"*. **It is out of scope for all but the top edge of this app**, and
  only its overview page was read. Nothing in this packet rests on it. NG127
  §1.21 points to it for over-12s and this packet does not follow that pointer.
- **NICE NG127 §1.21.2**: *"Refer urgently all children aged under 4 years with
  headache for neurological assessment."* The app's floor is 4, so the packet
  sits exactly on this boundary. Raucci et al. (source 9) and Kim (source 10)
  both list age under 4 or 5 as a red flag in its own right — Raucci marks it a
  *relative* red flag. **The app collects age already; no item asks it.**
- **ICHD-3's pediatric modifications** (source 1) run the other way: they *widen*
  the criteria for children rather than excluding them. See "The pediatric
  modifications" below. They are the reason adult migraine criteria must not be
  carried here unmodified.

**Mechanism.** This packet serves the `no-injury` branch of the head group's
mechanism gate. `head-injury` serves the other. The two are mutually exclusive
by construction (`GROUP_GATE.head` asks mechanism first), so no item here is
written for a child who bumped their head, and PECARN, CATCH and CHALICE are
absent by design rather than by oversight. NG127's *"headache occurring within 5
days of a head injury"* and RCH's *"Recent history of significant head injury"*
are red flags on the **other** side of the gate; a child who says "I bumped it"
is routed to `head-injury`, and a child who says "it just started hurting" and
had in fact bumped it a week ago is a gate failure this packet cannot fix. Noted
in "Still open".

**Depth.** `inside`. `GROUP_GATE.head` asks depth *after* mechanism, and only
when the answer is `no-injury` or `unknown`. That second gate exists partly to
give this packet somewhere to sit. It also means `skin-rash` (`depth: surface`)
cannot reach a child who says their headache is inside, so **no rash, spot or
skin criterion is carried here**; NICE's meningococcal non-blanching rash belongs
to the surface branch and to `general/unwell` item 12.

**Out of scope by age or setting, and not carried:** everything the adult
headache literature attaches to headache — medication-overuse headache and
analgesic counting (NG127 1.21.7, RCH, CG150), menstrual and pure menstrual
migraine (source 1's Appendix A1.1.1/A1.1.2, RCH's trigger *"Menstruation"*),
pregnancy, sexual activity, alcohol, smoking, cannabis and other drug use — the
whole **HEADSS screen** that Raucci et al. say *"should be performed in all"*
adolescents. See "Dignity — the ruling"; these are refused on age *and* on
principle, not merely omitted. Also not carried: cluster headache (RCH:
*"Typically ≥12 years of age"*), everything requiring neuroimaging, lumbar
puncture, bloods or a blood-pressure cuff, and all treatment and dosing, which is
most of what these guidelines are about.

## Sources

1. **ICHD-3, 1.1 Migraine without aura** — International Classification of
   Headache Disorders, 3rd edition, `ichd-3.org`. **Read first-hand** from the
   shared `packets/.sources/` cache. Supplies the diagnostic criteria verbatim
   *and* the pediatric modifications, which are the reason this packet exists in
   its present shape.
2. **ICHD-3, 2.1 Infrequent episodic tension-type headache** — same source.
   **Read first-hand.** The contrast case: it is defined largely by the *absence*
   of the migraine features, which is what makes those features worth asking.
3. **ICHD-3, 1.6.1.2 Abdominal migraine** (within *1.6 Episodic syndromes that
   may be associated with migraine*) — same source. **Read first-hand.** Read to
   check whether it belonged here; it does not (*"Headache does not occur during
   these episodes"*), but it contributes one instruction that does.
4. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Headache"**, PIC-endorsed. **Read first-hand.** **This is the Search-B
   anchor** — the guideline organised by the presenting complaint rather than by
   a diagnosis. Supplies the history red-flag list, the primary-headache
   comparison table, the secondary-cause list and the trigger list.
5. **NICE NG127, *Suspected neurological conditions: recognition and referral*,
   §1.21 "Headaches in children"** (within *Recommendations for children aged
   under 16*). **Read first-hand.** The single most useful recommendation found:
   a ten-item same-day-referral list written specifically for **children under
   12**, which is this app's population almost exactly.
6. **NICE NG127, §1.6 "Headaches in adults"**. **Read first-hand**, and it
   contributes **nothing**: its entire content is *"For advice on referral for
   headaches in adults, see the NICE guideline on headaches in over 12s."*
   Recorded because the cached filename says `headache` and a future run could
   mistake it for a headache chapter. It is the adult recommendations page.
7. **NICE CG150, *Headaches in over 12s: diagnosis and management***, published
   2012, last updated 2025. **Read first-hand — but only the overview page**,
   which is what the cache holds. Its Recommendations page was **not fetched**
   and nothing here depends on it. Read far enough to establish that it is out of
   scope: *"young people (aged 12 years and older) and adults"*.
8. **HeadSmart symptom card**, The Brain Tumour Charity / Children's Brain Tumour
   Research Centre / RCPCH, 2018. **Read first-hand.** A public-facing card whose
   **5–11 years** column is the only symptom list found that is banded to almost
   exactly this app's age range.
9. **Raucci U, Della Vecchia N, Ossella C, Paolino MC, et al.** "Management of
   Childhood Headache in the Emergency Department. Review of the Literature."
   *Front Neurol* 2019;10:886. **Read first-hand** via PMC6716213. **The Search-A
   review.** Supplies Table 6 (nineteen red flags, with the high-risk/relative
   distinction) and Table 7 (the history-taking headings), plus the prevalence
   figures that frame the whole packet.
10. **Kim S.** "Pediatric headache: a narrative review." *J Yeungnam Med Sci*
    2022;39(4):278–284. **Read first-hand** via PMC9580058. Supplies the
    **proposed criteria for pediatric migraine in ages 5 years and younger**,
    which is the only criteria set found written for the *bottom* of this app's
    range, and a red-flag table adapted from source 11.
11. **Manoyana A, Angkurawaranon S, Katib S, et al.** "Diagnostic Values of Red
    Flags and a Clinical Prediction Score for Emergent Intracranial Lesions in
    Non-Traumatic Pediatric Headaches." *Children (Basel)* 2022;9(6):863. **Read
    first-hand** via PMC9221978. **The only prediction rule found for this
    packet's exact presentation.** **Limits worth knowing:** 109 children,
    retrospective, single referral hospital in northern Thailand, 2006–2020, and
    *"The only initial inclusion criteria were children who presented with a
    chief complaint of headache **and underwent neuroimaging assessment**"* — so
    every child in it was already suspected enough to be scanned, and 51 of 109
    (47%) had a lesion. *"only six patients were younger than five years of
    age."* Its negative findings are underpowered and its positive ones are
    spectrum-biased.
12. **Kellier DJ, Marquez de Prado B, Haagen D, Grabner P, Raj N, et al.**
    "Validity of Self-Reported Migraine in Adolescents and Children." *Headache*
    2023;63(5):634–641. **Read first-hand** via PMC10478717. **The self-report
    evidence, and the only source in this packet that tests whether a child's own
    answer means what we want it to mean.** Also supplies, in its Table 1,
    child-facing wording for the ICHD criteria written by Children's Hospital of
    Philadelphia. **Limits worth knowing:** ages **7–17**, recruited from an ED,
    a neurology clinic and inpatient headache admissions, all with headache
    already established and *"not suspected to have secondary headache"* — so it
    says nothing about a 4–6 year old and nothing about the triage half of this
    packet.
13. **Roser T, et al.** — the systematic review from which source 9's Table 6 is
    *"Modified"*, and the origin of its high-risk / relative red-flag split.
    **CITED, NOT READ.** Every quotation attributed to Table 6 in this packet was
    read in source 9, not in Roser. What depends on it: nothing directly — the
    high-risk/relative distinction is used only as context in item 25 and in the
    occipital-location note, and both are also carried by sources read.
14. **Lee** — the origin, per source 10, of its Table 1 (ICHD-III beta criteria
    for children) and Table 2 (proposed criteria for ages ≤5). **CITED, NOT
    READ.** What depends on it: **the ≤5-years criteria set quoted below and
    decision 6**, which is the packet's answer to the ICHD-3 "inferred from
    behaviour" problem. Those criteria were read in source 10's reproduction of
    them, and source 10 is a narrative review, not the primary. **This is the
    weakest provenance chain in the packet and it sits under a decision that
    changes what a 4–6 year old is asked.** Flagged for the reviewer.

**Attempted and not used.**

- **`PMC6712068`** is present in the shared source cache and was named in the
  research brief as a headache source. **It is not one.** It is *"The Purinome
  and the preBötzinger Complex — A Ménage of Unexplored Mechanisms That May
  Modulate/Shape the Hypoxic Ventilatory Response"*, a respiratory-neuroscience
  review with no bearing on this complaint. It was a mis-fetch by the killed run
  that populated the cache. Only its title was read; **nothing here depends on
  it**, and it is recorded so the next run does not chase it.
- **NICE CG150's Recommendations page** — **not fetched.** Out of scope by age
  (over-12s) and its diagnostic table is reproduced in substance by source 4's
  primary-headache table, which was read.
- **The full NG127 evidence reviews and rationale sections** — **not attempted.**
  This packet knows what NG127 recommends and not why.
- **Supporting Information Tables S4 and S5 of source 11**, which hold *"Detailed
  analysis and predictive value of each of the 23 red flags"* — **not fetched.**
  Only the 14 red flags in its Table 3 and the 4 in its Table 4 are quoted here.
  A future run wanting per-flag likelihood ratios should go there first.

## The two literatures, and why every item is labelled

This complaint splits cleanly in two, and the split is the most important
structural fact in the packet:

- **Characterisation** — ICHD-3 (sources 1, 2, 3), the primary-headache table in
  source 4, the ≤5-years criteria in source 10, and the self-report study
  (source 12). These describe what a migraine or a tension-type headache *feels
  like*. Their purpose is to let a nurse recognise a primary headache. **A "yes"
  here is broadly reassuring.**
- **Triage** — NG127 §1.21 (source 5), the red-flag lists in sources 4, 9, 10 and
  11, and HeadSmart (source 8). These describe raised intracranial pressure,
  brain tumour and CNS infection. **A "yes" here escalates.**

They overlap in exactly two places and it matters both times:

- **Vomiting** is ICHD-3 criterion D (characterisation) *and* an NG127 same-day
  referral criterion (triage). One question, two readings.
- **Photophobia** is ICHD-3 criterion D (characterisation) *and*, in source 4's
  own words, a sign of meningism (triage): *"Signs of meningism (photophobia,
  neck stiffness)"*. Same fact, opposite implications.

Every row of the items table is labelled `characterisation` or `triage` in its
Note. **A nurse reading this packet's output must not be given a rule for
combining them, and this project must never build one.**

The prevalence context, from source 9, which is why the characterisation half
cannot simply be dropped in favour of red flags:

> "The more frequent causes of non-traumatic headache in the ED include
> primitive headaches (21.8–66.3%) and benign secondary headaches (35.4–63.2%),
> whereas potentially life-threatening (LT) secondary headaches are less frequent
> (2–15.3%)."

## The rule(s), as published

### ICHD-3, 1.1 Migraine without aura, verbatim (source 1)

> "Diagnostic criteria: **At least five attacks** fulfilling criteria B-D ·
> **Headache attacks lasting 4-72 hr** (untreated or unsuccessfully treated) ·
> **Headache has at least two of the following four characteristics:** unilateral
> location · pulsating quality · moderate or severe pain intensity · aggravation
> by or causing avoidance of routine physical activity (eg, walking or climbing
> stairs) · **During headache at least one of the following:** nausea and/or
> vomiting · photophobia and phonophobia · Not better accounted for by another
> ICHD-3 diagnosis."

### The pediatric modifications — read these before importing anything above

Three of them, verbatim, all from source 1's notes and comments:

> "In children and adolescents (aged under 18 years), **attacks may last 2-72
> hours** (the evidence for untreated durations of less than two hours in
> children has not been substantiated)."

> "Migraine headache in children and adolescents (aged under 18 years) **is more
> often bilateral than is the case in adults**; unilateral pain usually emerges
> in late adolescence or early adult life. Migraine headache is usually
> frontotemporal. **Occipital headache in children is rare and calls for
> diagnostic caution.**"

> "**In young children, photophobia and phonophobia may be inferred from their
> behaviour.**"

**Consequences, in order of how much damage ignoring them would do:**

1. **Laterality is close to worthless in this age range.** ICHD-3's criterion C1
   is *"unilateral location"*, and ICHD-3 itself says unilateral pain *"usually
   emerges in late adolescence"*. Source 4 agrees by listing migraine as
   *"Unilateral or bilateral"* against tension-type's *"Bilateral"* — which means
   the feature separates nothing in a 4–12 year old. **Item 12 is therefore not
   proposed**, and this is why.
2. **Occipital location inverts.** In an adult it is a criterion to satisfy; in a
   child source 1 calls it *"rare"* and a cause for *"diagnostic caution"*, and
   sources 9 and 10 list it as a red flag. The app already has this fact — the
   body map ships a `back-head` region — so no question is needed either way.
3. **Photophobia and phonophobia may not be the child's to report.** This is the
   single most awkward sentence in the packet's sources, because those two
   symptoms are otherwise its best-evidenced items. Decision 6 is the answer.
4. **The 2-hour floor cannot be asked.** `DURATIONS` has `just-now`,
   `this-morning`, `yesterday`, `few-days`, `long-time`, `not-sure`. None of them
   resolves 2 hours, 4 hours or 72 hours, and no child of 4–12 should be asked to
   report a duration in hours.

Source 4 states the duration modification independently and in plainer words:

> "Duration … **May only last 30 minutes in young children**, up to 72 hours in
> adolescents"

### ICHD-3, 2.1 Infrequent episodic tension-type headache, verbatim (source 2)

> "Diagnostic criteria: **At least 10 episodes** of headache occurring on <1
> day/month on average (<12 days/year) and fulfilling criteria B-D · **Lasting
> from 30 minutes to 7 days** · **At least two of the following four
> characteristics:** bilateral location · pressing or tightening (non-pulsating)
> quality · mild or moderate intensity · not aggravated by routine physical
> activity such as walking or climbing stairs · **Both of the following:** no
> nausea or vomiting · no more than one of photophobia or phonophobia · Not
> better accounted for by another ICHD-3 diagnosis."

**Read this as the negative image of source 1 and the yield does not change.**
Tension-type headache is defined by the absence of the migraine features, plus
two frequency thresholds (≥10 episodes, <1 day per month) that require a child to
count episodes across a year. **No item in this packet comes from source 2 that
does not already come from source 1**, and the frequency criteria are excluded
outright — see item 19.

### The ≤5-years criteria, verbatim (source 10, Table 2, attributed to Lee)

The only criteria set found that is written for the bottom of this app's range:

> "**Proposed criteria for pediatric migraines in ages 5 years and younger** ·
> A. At least five headache attacks fulfilling the criteria from B to D ·
> B. **The headache lasts for 30 minutes or longer** (untreated or treated) ·
> C. The headache has at least one of the following characteristics: 1. Pain of
> at least moderate severity 2. Unilateral or bilateral headache 3. Throbbing or
> pounding nature of pain 4. **Exertion intolerance; avoidance of walking or
> playing** · D. The headache is associated with at least one of the following:
> 1. **Loss of appetite, stomach discomfort, or dizziness** 2. **Sensitivity to
> light and sounds as indicated by inability to watch TV or play on the computer
> or on electronic games** 3. Having one cranial autonomic symptom associated
> with headache attacks."

**D.2 is the most useful sentence in this packet.** It takes ICHD-3's *"may be
inferred from their behaviour"* and says what the behaviour *is* — and the
behaviour it names is something a five-year-old can report about themselves,
because "I couldn't watch telly" is a fact a child owns. It is the whole basis of
decision 6. Note also that C.4 states ICHD-3's activity criterion in a child's
terms — *"avoidance of walking or playing"* — and that D.1 puts appetite and
dizziness where an adult classification puts nausea.

Source 10 also states the capability problem in its own words:

> "It is difficult for a child to accurately describe the type of headache or
> accompanying symptoms; therefore, the diagnosis may be delayed."

and

> "Compared to that in adults, headache duration is shorter in children, and
> gastrointestinal symptoms, such as nausea, vomiting, and loss of appetite, are
> more common and often improve after sleeping. In young children, vomiting and
> dizziness are more common than headache, making it difficult to diagnose."

### NICE NG127 §1.21, verbatim (source 5) — the triage anchor

> "**1.21.1 Refer immediately children aged under 12 years with headache for
> same-day assessment**, according to local pathways, if they have any 1 of the
> following: **headache that wakes them at night** · **headache that is present
> on awakening in the morning** · **headache that progressively worsens** ·
> **headache triggered or aggravated by coughing, sneezing or bending down** ·
> headache with fever and features of meningism · **headache associated with
> vomiting** · headache associated with ataxia · headache associated with change
> in conscious level or pervasive lethargy · headache occurring within 5 days of
> a head injury · headache associated with squint or failure of upward gaze
> ('sunsetting')."

> "1.21.2 Refer urgently all children aged under 4 years with headache for
> neurological assessment."

> "1.21.3 Perform or request fundoscopy for all children with recurrent headache
> and refer urgently for neurological assessment if there are abnormalities."

> "1.21.4 For all children with recurrent headache: be aware that hypertension
> might be the cause · measure the child's blood pressure … · refer children if
> headaches are consistently worsened by upright posture and relieved by lying
> down."

> "1.21.5 Do not routinely refer children with migraine **unless it is affecting
> their school life, social life or family activities**, or they have 1 of the
> features listed in recommendation 1.21.1."

> "1.21.6 Be aware that emotional stress is a strong trigger of migraine and
> chronic, daily headache in children. **Ask the child and their parent or carer
> about specific learning problems, bullying at school and stress in the
> family.**"

> "1.21.7 Ask about analgesic use in children with recurrent headache to ensure
> that medicine use is not excessive…"

**Ten referral criteria, and four of them are the child's own history**: wakes
them at night, present on awakening, progressively worsens, triggered by coughing
or sneezing or bending. A fifth (associated vomiting) is the child's too. **The
other five are observation, examination or the other side of the mechanism
gate.** That is a better ratio than any other guideline in this project, and it
is because NG127's list is a *history* list — the examination instructions are in
1.21.3 and 1.21.4, kept separate.

**1.21.6 is the sentence this packet refuses.** It is the only recommendation
found anywhere in this project that instructs a clinician to ask *the child* about
bullying. See "Dignity — the ruling".

### RCH Melbourne, verbatim (source 4) — the Search-B guideline

Key points:

> "Children presenting with headache require careful assessment for red flag
> features, in order to detect serious underlying secondary causes · Most
> children presenting with headache do not require investigations"

> "The most common cause of secondary headaches in children [is viral illness],
> while less common but serious causes include CNS infection (meningitis,
> encephalitis), raised intracranial pressure and haemorrhage · **Headache may
> also be a manifestation of underlying psychosocial issues**"

**History — "Consider red flags", in full:**

> "**Age < 4 years** · **Headache features (any):** **Early morning** · **Wakes
> the child from sleep** · **Triggered or aggravated by coughing, sneezing or
> positional changes (eg bending forwards)** · **Sudden onset and severe** ·
> **Occipital region** · **Associated vomiting without another clear cause** ·
> **Significant change in an established headache pattern or progressive
> worsening** · Focal neurological symptoms · New onset seizures · Developmental
> regression · Features of meningitis or encephalitis · Recent history of
> significant head injury · Known systemic disorder: haematological condition
> (bleeding tendency, prothrombotic state), malignancy, rheumatological disorder,
> immunosuppression, hypertension · Medications: anticoagulants, antiplatelet
> agents · Presence of ventriculoperitoneal (VP) shunt"

**Other history features:**

> "Differentiate between primary and secondary headache · Family history of
> migraines/primary headaches · Consider psychosocial factors which may
> contribute to headache in older children and adolescents · Characterise the
> headaches including pattern of headaches, analgesia use and common triggers"

**Examination, and its red-flag findings, in full:**

> "Observations including BP and conscious state · Neurological examination —
> cranial nerve and peripheral nerve examination, gait, fundoscopy · Stigmata of
> neurocutaneous syndromes (eg neurofibromatosis, tuberous sclerosis) · **Red
> flag findings include:** Altered conscious state/confusion · Increasing head
> circumference centiles · Abnormal head position · New focal neurological
> abnormalities · Signs of raised ICP (papilloedema, ataxia, bradycardia with
> hypertension) · **Signs of meningism (photophobia, neck stiffness)**"

**The primary-headache comparison table** (tension-type / migraine columns only;
the cluster column is out of scope at *"Typically ≥12 years of age"*):

| Feature | Tension-type | Migraine with or without aura |
|---|---|---|
| Age | All ages | All ages |
| Pain location | Bilateral | Unilateral or bilateral |
| Pain quality | Pressing/tightening (non-pulsatile) | Pulsatile |
| Pain intensity | Mild to moderate | Moderate to severe |
| Headache pattern | Chronic non-progressive | Acute recurrent |
| Effect on activities | **Not exacerbated by activity** | **Aggravated by normal activities** |
| Associated symptoms | None; may be precipitated by significant stress | **Nausea and vomiting, photophobia, phonophobia** |
| Duration | Hours to days | **May only last 30 minutes in young children**, up to 72 hours in adolescents |

**Headache patterns**, which is the axis a single report cannot capture:

> "Acute recurrent → Migraine · Chronic non-progressive → Tension-type headache,
> Anxiety, depression, Somatisation · **Chronic progressive → Tumour, Benign
> intracranial hypertension, Brain abscess, Hydrocephalus** · Acute on chronic
> non-progressive → Tension headache with co-existent migraine"

**Common migraine triggers, in full** — none of which becomes an item, see item
30:

> "Illness · Poor sleep · Exercise · Menstruation · Stress · Heat · Sun glare ·
> Foods: citrus, MSG, artificial sweeteners, nuts, onions, salty foods, caffeine,
> chocolate · Skipped meals · Missed medications or medication overuse"

### The Search-A material (sources 9, 11)

**Source 9, Table 6, "Warning signs in children with headache (red flags)", in
full**, `*` marking what it calls *relative* red flags:

> "Changes in mood or personality over days or weeks · **Related to severe
> vomiting, especially in early morning** · **Worsening of pain with cough or
> Valsalva maneuver** · Altered conscious state · Papilledema · Focal neurologic
> deficit or meningismus · Seizures or fever · High-risk population (patients
> with sickle cell anemia, malignancy, recent head trauma, ventricular-peritoneal
> shunt, others) · **Pain that wakes the child from sleep or occurs on waking** ·
> **Change of the character of headache in patients diagnosed with primary
> headache** · Poor general condition · Increased head circumference · Cranial
> nerve palsies · Abnormal ocular movements, squint, pathologic pupillary
> responses · Visual field defects · Ataxia, gait abnormalities, impaired
> coordination · **Sudden onset of headache (first or worst ever)** · **Increase
> in severity or characteristics of the headache** · Occipital headache * · Age <
> 5 years *"

**Source 9, Table 7, "Key questions in taking the clinical history in a child
with headache", in full:**

> "**Acute headache:** Time of onset · Duration · Localization · Quality ·
> Intensity · Premonitory symptoms · Aura · Associated vegetative symptoms ·
> **Impairment of daily routine** · Ameliorating factors · Aggravating factors ·
> Triggering factors · Factors possibly associated to onset · Efficacy of
> medications taken · **Additional features in recurrent headache:** Number of
> headache types · Frequency · Sequence of typical episode · **Impairment of
> quality of life**"

Note what source 9 also says immediately after, and what this packet does with
it: *"A HEADSS (home, education, alcohol, drugs, smoking, sex) screen should be
performed in all…"* — see "Dignity — the ruling".

**Source 11, Table 3 — 14 red flags tested against emergent intracranial
lesions in 109 children**, verbatim (n, % of column; p-value):

> "Acute onset (<3 months) 72 (66.1) / 30 (51.7) / 42 (82.4) **<0.01** · Severe
> vomiting 65 (59.6) / 31 (53.5) / 34 (66.7) 0.16 · High-risk underlying
> comorbidities 26 (23.8) / 11 (19.0) / 15 (29.4) 0.20 · Fever 21 (19.3) / 8
> (13.8) / 13 (25.5) 0.12 · Focal motor abnormality 20 (18.4) / 3 (5.2) / 17
> (33.3) **<0.01** · Changes in mood or personality over days or weeks 20 (18.4)
> / 5 (8.6) / 15 (29.4) **<0.01** · Altered conscious state 19 (17.4) / 4 (6.9) /
> 15 (29.4) **<0.01** · Seizures 16 (14.7) / 5 (8.6) / 11 (21.6) 0.06 · Abnormal
> ocular movements, squint, pathological pupillary responses 16 (14.7) / 2 (3.5)
> / 14 (27.5) **<0.01** · Increase in severity or characteristics of the headache
> 14 (12.8) / 5 (8.6) / 9 (17.7) 0.16 · **Pain that wakes the child from sleep or
> occurs on waking 13 (11.9) / 8 (13.8) / 5 (9.8) 0.52** · Ataxia, gait
> abnormalities, impaired coordination 13 (11.9) / 1 (1.7) / 12 (23.4) **<0.01**
> · Meningism 12 (11.0) / 3 (3.5) / 10 (19.6) **<0.01** · Occipital headache 11
> (10.1) / 8 (13.8) / 3 (5.9) 0.17"

**Source 11, Table 4 — the four multivariable predictors:**

> "Acute onset (<3 months) OR 5.24 (1.60 to 17.1) · Altered conscious state OR
> 3.07 (0.80 to 11.79) · Focal motor abnormality OR 10.06 (2.34 to 43.22) ·
> [Abnormal ocular movements / pupillary abnormality] — *"Ocular
> movement/pupillary abnormality also had a great predictive value with an odds
> ratio of 19.9 in our study."*"

and the score's performance: *"Using a score of 2 as the cut-off … correctly
identified 78% of cases, with a sensitivity of 68.6% and specificity of 86.2%…
(LR+ 4.98)"*, AuROC 0.84.

**Apply the self-report filter to those four predictors and the packet's central
finding falls out immediately.** *Altered conscious state* is an observer
judgement, *focal motor abnormality* is a neurological examination, and
*ocular/pupillary abnormality or squint* is an eye examination. **Three of the
four predictors in the only prediction rule for this complaint are things done
to the child by somebody else.** The fourth, *acute onset (<3 months)*, is a
history fact the app collects imperfectly through `DURATIONS`.

Source 11's own account of what it could *not* find is worth as much:

> "A number of red flags were not significantly associated with emergent
> intracranial lesions in our study. Some signs and symptoms can be found in many
> different conditions and thus, are less specific. **Severe vomiting**, for
> example, may occur in patients with migraine or post-chemotherapy. **Headache
> with fever** can be found in a wide variety of systemic diseases and
> infections, which is much more common than intracranial pathology. Some red
> flags, such as **changes in mood or personality, are quite subjective and
> depend greatly on the perception of the parents and the attentiveness of their
> children's monitoring.** The occipital location of the headache was also not
> statistically significant…"

That middle sentence is the self-report filter stated by a source: a criterion
that *"depend[s] greatly on the perception of the parents"* is the parent's
observation, not the child's report, and it stays excluded here (item 24).

### HeadSmart, the 5–11 years column, verbatim (source 8)

> "Persistent/recurrent headache* · Persistent/recurrent vomiting ·
> Balance/co-ordination/walking problems · Abnormal eye movements* · **Blurred or
> double vision/loss of vision*** · Behaviour change · Fits or seizures ·
> Abnormal head position such as wry neck, head tilt or stiff neck*"
>
> "1 symptom: see GP · 2+ symptoms: ask GP for an urgent referral · *Starred
> symptoms: see GP and Optician"

**This is the only list in the packet banded to this app's age range**, and its
value here is one item: **blurred or double vision** is the child-reportable half
of a finding every other source states as an *examination* ("abnormal ocular
movements, squint, pathological pupillary responses"). See item 5.

### The self-report evidence (source 12)

Design, verbatim:

> "We recruited children and adolescents (**ages 7-17**) who presented to the
> emergency department, outpatient neurology clinic, or were admitted inpatient
> for headache treatment between November 2018 and June 2022 and were not
> suspected to have secondary headache."

> "Every day participants were asked **'Have you had a headache today?'** If they
> answered yes, they were asked, **'Have you had a migraine today? (A migraine is
> a bad headache that gets in the way of your activities. You feel sick, or light
> and sound bother you, too.)'**"

Result:

> "We found moderate agreement between self-reported and ICHD-derived
> migraine-day, with a **Cohen's Kappa of 0.50** (positive predictive value
> [PPV]: 0.66; negative predictive value [NPV]: 0.85; correlation: 0.51)."

> "**Pain severity (OR: 5.7; CI: 2.39-13.8), photophobia (OR: 4.1; CI:
> 1.02-16.6), and phonophobia (OR: 7.5; CI: 1.95-29.3) were significantly
> associated with participants' perception of migraine.**"

> "Participants often had headaches consistent with migraine or probable migraine
> on days that they reported having a non-migrainous headache, suggesting that
> **participants under-report headache-days that meet criteria for migraine.**"

**Two things to take from this and one not to.**

*Take:* photophobia and phonophobia are the two associated symptoms most tightly
bound to a child's own sense of what their headache is, and **phonophobia is the
stronger of the two** (OR 7.5 against 4.1) — which is the reverse of what the app
currently ships, where light is asked and sound is not asked at all. *Take:* the
error runs towards **under**-reporting, so a "no" from a child on this packet's
characterisation items is weaker than a "yes", and the nurse surface must not
read a "no" as a negative finding.

*Do not take:* any claim that a child can self-diagnose. Kappa 0.50 is moderate
agreement, and the study's own conclusion is that the two measures *"are not
equal"*. **This packet never asks a child what kind of headache they have**, and
the study's own daily question — *"Have you had a migraine today?"* — is banned
here, both because it names a diagnosis and because its cohort had already been
given that diagnosis by a neurologist.

### Table 1 of source 12 — child-facing wording for the ICHD criteria

Reproduced verbatim because it is the only validated-in-children phrasing of
these criteria found anywhere, written by Children's Hospital of Philadelphia and
used with 7–17 year olds by text message:

> "**Has sound bothered you today?** (yes or no) · **Has light bothered you
> today?** (yes or no) · Have you felt sick to your stomach with your headache
> today? (yes or no) · **Did you throw up with your headache today?** (yes or no)
> · **Did your head hurt more when you moved around or played today?** (yes or
> no) · How many hours have you had a headache today (in hours)? (1-24) · Has
> your head hurt on one side or both sides today? · Has your headache pain felt
> [PAIN_DESCRIPTOR] today? If yes: **Has it felt pounding, like a drumbeat in
> your head today?** (yes or no) · Have you had any other symptoms before or
> during your headache today? · Has your head hurt [PAIN_LOCATION] today?"

**Four of these are directly usable and one is a trap.** Usable: the sound
question, the light question, the throw-up question and the *"moved around or
played"* question — note that the last of these is ICHD-3's *"aggravation by
routine physical activity (eg, walking or climbing stairs)"* rendered in a
child's vocabulary, and that it matches source 10's *"avoidance of walking or
playing"* almost word for word. The trap is *"felt sick to your stomach"*: the
word **sick** is banned project-wide (`tummy/vomiting` decision 1) because it
means *about to vomit* in British English and *coming down with something* in
American English, and it shipped undetected in this app for weeks.

### Abdominal migraine — read, and deliberately not carried (source 3)

> "1.6.1.2 Abdominal migraine · Description: An idiopathic disorder seen mainly
> in children as recurrent attacks of moderate to severe midline abdominal pain,
> associated with vasomotor symptoms, nausea and vomiting, lasting 2-72 hours and
> with normality between episodes. **Headache does not occur during these
> episodes.**"

A child with abdominal migraine does not present with a headache, so nothing here
applies to them. It was read because ICHD-3 files it under migraine and it looked
like it might belong. It contributes one instruction that runs the *other* way
and is worth recording for the reviewer:

> "In young children the presence of headache is often overlooked. **A careful
> history of presence or absence of headache must be taken** and, when headache
> [occurs during attacks the diagnosis is different]."

That is a source telling clinicians that children's headaches get missed. It is an
argument for the app collecting this at all; it is not an item.

## Assessment items

Every row is labelled `characterisation` or `triage` — see "The two literatures".

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Has light been bothering you** | ICHD-3 1.1 (1) — criterion D *"photophobia and phonophobia"*; RCH (4) — migraine associated symptoms *"photophobia"* **and** exam red flag *"Signs of meningism (photophobia, neck stiffness)"*; Kim (10) — ≤5y criterion D.2 *"Sensitivity to light and sounds as indicated by inability to watch TV or play on the computer or on electronic games"*; Kellier (12) — *"Has light bothered you today?"*, OR 4.1 | **yes** | **`characterisation` and `triage` at once**, and the only item in the packet that is both by two independent sources. Four sources; validated child wording in source 12; and it is **the question this group already ships** — `FOLLOW_UPS.head` holds a hand-written *"Do bright lights make it worse?"* that this item re-sources rather than replaces (brief §5). Fact **`light-hurts`**, matching `eyes/complaint` item 5 and `tummy/vomiting` item 4 — see decision 8. The young-tier wording must be behavioural, not a judgement about light: decision 6. |
| 2  | **Have you thrown up** | NG127 (5) — 1.21.1 *"headache associated with vomiting"*, a same-day referral criterion; RCH (4) — red flag *"Associated vomiting without another clear cause"*; HeadSmart (8) — *"Persistent/recurrent vomiting"* in the 5–11 column; ICHD-3 1.1 (1) — criterion D *"nausea and/or vomiting"*; Raucci (9) — *"Related to severe vomiting, especially in early morning"*; Kellier (12) — *"Did you throw up with your headache today?"*; Manoyana (11) — *"Severe vomiting"*, 59.6% prevalence, p = 0.16 | **yes** | **Six sources, more than any other item, and both literatures at once** — ICHD-3 criterion D (`characterisation`) and an NG127 referral criterion (`triage`). Also the most common associated feature in the only cohort read: 65 of 109 children. Reuses the existing fact **`vomiting`**, so a child who taps Head and Tummy is asked once. Note honestly that source 11 could not show it predicts anything — *"Severe vomiting … may occur in patients with migraine or post-chemotherapy"* — which is precisely why it belongs to both literatures rather than to the red-flag list alone. **"Throw up" is the only permitted verb.** |
| 3  | **Does your head hurt when you wake up, or does it wake you in the night** | NG127 (5) — 1.21.1, **two of the ten** same-day criteria: *"headache that wakes them at night"* and *"headache that is present on awakening in the morning"*; RCH (4) — red flags *"Early morning"* and *"Wakes the child from sleep"*; Raucci (9) — *"Pain that wakes the child from sleep or occurs on waking"*; Kim (10) — same | **yes** | **`triage`.** Four sources, and NG127 spends two of its ten referral bullets on it. **And source 11 tested it and found nothing** — 13.8% of children without a lesion against 9.8% with one, p = 0.52. See "Read this first". Kept and ranked third on the guidelines. **One item, not two**, although the sources split it into waking-at-night and hurting-on-waking; a candidate that covers only one half loses half the criterion and stage 2 must cover both. New fact **`morning-headache`** — decision 7. This is the fact `tummy/vomiting`'s `morning-vomiting` was coined from and it is **not** the same fact; see decision 7 for the full ruling. |
| 4  | **Does your head hurt more when you move around or play** | ICHD-3 1.1 (1) — criterion C4 *"aggravation by or causing avoidance of routine physical activity (eg, walking or climbing stairs)"*; ICHD-3 2.1 (2) — the negative, *"not aggravated by routine physical activity such as walking or climbing stairs"*; RCH (4) — *"Effect on activities: Not exacerbated by activity"* vs *"Aggravated by normal activities"*; Kim (10) — ≤5y criterion C4 *"Exertion intolerance; avoidance of walking or playing"*; Kellier (12) — *"Did your head hurt more when you moved around or played today?"* | **yes** | **`characterisation`, and the single best-attested one.** It is the only ICHD-3 criterion that (a) appears in the ≤5-years criteria set in a child's own vocabulary, (b) has validated child wording in source 12, and (c) is the discriminating row in RCH's primary-headache table — it is what separates tension-type from migraine when everything else in a child is ambiguous. New fact **`head-worse-moving`**; see decision 9 for why it does not reuse `worse-when-playing`, `worse-on-exertion` or `worse-on-movement`. |
| 5  | **Is anything blurry or hard to see** | HeadSmart (8) — 5–11 column, *"Blurred or double vision/loss of vision*"*, a starred symptom; NG127 (5) — 1.21.1 *"headache associated with squint or failure of upward gaze ('sunsetting')"*; RCH (4) — exam red flag *"Abnormal head position"*, *"New focal neurological abnormalities"*; Manoyana (11) — *"Abnormal ocular movements, squint, pathological pupillary responses"*, 14/51 lesion-positive vs 2/58 negative, p<0.01, **OR 19.9** | **yes** | **`triage`, and the child-reportable half of the strongest single predictor in the only prediction study.** **Split exactly as `head-injury` split drowsiness, and for the same reason:** *squint*, *failure of upward gaze* and *pathological pupillary responses* are examination findings and stay excluded (item 25); *"is anything blurry?"* is a different, answerable question, and HeadSmart is the source that supports it — **source 11 must never be cited for the question, only for why the finding matters.** Reuses **`blurry`** from `eyes/complaint` item 4; that packet serves group `eyes` only, so a child who taps only Head would never be asked otherwise. |
| 6  | **Has sound been bothering you** | ICHD-3 1.1 (1) — criterion D *"photophobia and phonophobia"*; ICHD-3 2.1 (2) — *"no more than one of photophobia or phonophobia"*; RCH (4) — migraine associated symptoms *"phonophobia"*; Kim (10) — ≤5y D.2, *"Sensitivity to light and sounds"*; Kellier (12) — *"Has sound bothered you today?"*, **OR 7.5, the highest of the three features tested** | **yes** | **`characterisation`.** **The clearest gap this packet found in the app as it stands.** ICHD-3 always pairs photophobia with phonophobia; the app asks about light and has never asked about sound; and in the one study of what actually drives a *child's own* sense of their headache, sound beat light (OR 7.5 vs 4.1) — and beat it in a hospital, which is a loud place. New fact **`sound-hurts`**. Not to be confused with `hard-to-hear` (`ears/earache`), which is hearing *loss* and the opposite finding. Young-tier wording behavioural per decision 6. |
| 7  | **Is it getting worse** | NG127 (5) — 1.21.1 *"headache that progressively worsens"*; RCH (4) — red flag *"Significant change in an established headache pattern or progressive worsening"*, and the *"Chronic progressive → Tumour, Benign intracranial hypertension, Brain abscess, Hydrocephalus"* pattern row; Raucci (9) — *"Change of the character of headache in patients diagnosed with primary headache"* and *"Increase in severity or characteristics of the headache"*; Manoyana (11) — *"Increase in severity or characteristics of the headache"*, p = 0.16 | **yes** | **`triage`.** A *trajectory*, and RCH is explicit that trajectory is the axis on which the dangerous causes sit — its whole *"Headache patterns"* table is organised by it and the progressive row is the tumour row. **Carries no `fact`**, matching `head-injury` item 2, `limb-injury` item 4 and `tummy/acute-pain` item 7: this project keeps region-specific trajectory questions separate rather than merging them into one shared fact, so a child who taps Head and Tummy is asked about each. Ranked eighth despite good provenance because a single report is a poor instrument for a trajectory and the app has `happened-before` and the repeat-report `RECURRENCE` path for exactly this. |
| 8  | **Does it hurt more when you cough or sneeze or bend down** | NG127 (5) — 1.21.1 *"headache triggered or aggravated by coughing, sneezing or bending down"*; RCH (4) — red flag *"Triggered or aggravated by coughing, sneezing or positional changes (eg bending forwards)"*; Raucci (9) — *"Worsening of pain with cough or Valsalva maneuver"* | **partial** | **`triage`**, and the classic raised-intracranial-pressure feature. Three sources, one of them a same-day NG127 criterion. **Partial for a specific reason: a child who has not coughed cannot answer it**, so a "no" is much weaker than a "yes" and the nurse must read it that way. The word *Valsalva* names a manoeuvre a clinician asks a patient to perform — **the app must never instruct a child to cough, strain or bend over and report what happens**, which would be an examination performed by the patient (banned by regex, see wording cautions). New fact **`head-worse-coughing`**. |
| 9  | **Is it stopping you doing things** | NG127 (5) — 1.21.5, *"Do not routinely refer children with migraine unless it is **affecting their school life, social life or family activities**"*; Raucci (9) — Table 7 *"Impairment of daily routine"* and *"Impairment of quality of life"*; ICHD-3 1.1 (1) — criterion C4's second half, *"causing avoidance of routine physical activity"*; ICHD-3 (3) — *"Pain of 1.6.1.2 Abdominal migraine is severe enough to interfere with normal daily activities"* | **yes** | **`characterisation`**, and the item that decides *referral* in NG127 rather than diagnosis. Reuses **`stopping-normal-things`** from `back/pain` item 12 — region-neutral by construction, so a child who taps Head and Back is correctly asked once. **Must not become a second wording of item 4**: item 4 asks whether moving makes the head hurt more (ICHD-3 C4's first half); this asks whether the headache has stopped them doing things (NG127 1.21.5). They share an ICHD-3 root and they are different facts. Ranked last of the proposed items because `head-injury` reached the same conclusion for its item 3 and because the intensity screen already carries some of it. |
| 10 | Pulsating / throbbing quality; pressing or tightening quality | ICHD-3 1.1 (1) — C2 *"pulsating quality"*; ICHD-3 2.1 (2) — *"pressing or tightening (non-pulsating) quality"*; RCH (4) — *"Pulsatile"* vs *"Pressing/tightening (non-pulsatile)"*; Kim (10) — ≤5y C3 *"Throbbing or pounding nature of pain"*; Kellier (12) — *"Has it felt pounding, like a drumbeat in your head today?"* | **yes** — **already collected** | `characterisation`. **The sensation screen already carries both halves of this criterion**: `SENSATIONS.throbbing` is labelled *"Thump thump"* for the young tier and `SENSATIONS.squeezing` *"Tight squeeze"*, and both are `depths: ['inside']`, which is exactly this packet's depth. A child reaching this packet has already been shown them. Writing a question here would ask the same child the same thing twice, and it is the commonest reject reason in this project. Recorded so the omission is a decision. |
| 11 | Pain intensity: moderate or severe; mild to moderate | ICHD-3 1.1 (1) — C3; ICHD-3 2.1 (2) — *"mild or moderate intensity"*; RCH (4) — *"Moderate to severe"* vs *"Mild to moderate"*; Kim (10) — ≤5y C1; Kellier (12) — pain severity **OR 5.7**, the second strongest driver of a child's own perception | **yes** — **already collected** | `characterisation`. The FPS-R intensity screen. Also **banned as a question**: `screen.mjs` universally rejects *severe*, *bad*, *serious* because a child rates the word rather than the event. Source 12's numeric 0–10 scale is the same instrument the app already renders as faces. |
| 12 | Pain location: unilateral vs bilateral; occipital; frontotemporal | ICHD-3 1.1 (1) — C1 *"unilateral location"* **and** the pediatric modification *"more often bilateral than is the case in adults"*, *"usually frontotemporal"*, *"Occipital headache in children is rare and calls for diagnostic caution"*; RCH (4) — *"Occipital region"* as a red flag, and *"Unilateral or bilateral"* for migraine; Raucci (9) — *"Occipital headache *"*, a relative red flag; Manoyana (11) — occipital, p = 0.17, and *"some studies even proposed that the location of the headache may not be correlated with a significant intracranial lesion"*; Kellier (12) — *"Has your head hurt on one side or both sides today?"* | **yes** — **PROPOSED, added 2026-09-08** | **Reversed at the user's request on 2026-09-08; the argument below stood and was overruled, which is recorded rather than deleted.** The item is ranked LAST of ten for exactly the reason given here, and is asked with the `choice` answer type (`h-025`), not yes/no. The asymmetry that justifies keeping it: tension-type headache is bilateral *by definition*, so *"one side"* points toward migraine, while *"both sides"* discriminates nothing — a one-directional test, which is still a test. It also follows this project's established principle, set by the head-injury fall-height thresholds, that the app captures the raw fact and lets the nurse classify. **The original argument, unchanged:** **The pediatric modification is what kills this, not a shortage of sources.** ICHD-3 says unilateral pain *"usually emerges in late adolescence"* and RCH lists migraine as *"Unilateral or bilateral"* — so laterality separates nothing in a 4–12 year old, and the app would spend a scarce slot on a feature its own primary source says does not discriminate at this age. The *occipital* half is **already collected**: the body map ships a `back-head` region, and a child who taps it has said so without being asked. Source 11 also found occipital location non-significant and source 9 files it as *relative*. Kept in the table so its absence is a decision. |
| 13 | Attack duration: 4–72 h, 2–72 h in children, ≥30 min in under-5s, 30 min–7 days for tension-type; time of onset; acute onset <3 months | ICHD-3 1.1 (1) — B, and *"attacks may last 2-72 hours"*; ICHD-3 2.1 (2) — *"Lasting from 30 minutes to 7 days"*; Kim (10) — ≤5y B *"30 minutes or longer"*; RCH (4) — *"May only last 30 minutes in young children, up to 72 hours in adolescents"*; Raucci (9) — Table 7 *"Time of onset · Duration"*; Kellier (12) — *"How many hours have you had a headache today (in hours)? (1-24)"*; **Manoyana (11) — *"Acute onset (<3 months)"*, OR 5.24, the strongest history predictor in the study** | **yes** — **already collected, imperfectly** | `characterisation` and `triage`. `DURATIONS` collects when it started. **It cannot express any of these thresholds**: not 2 hours, not 30 minutes, not 72 hours, not 7 days, and not source 11's 3-month cut, which falls somewhere inside `long-time`. This is a *scope* disagreement in the brief's sense and it is resolved the same way as head injury's fall height — **capture the raw fact and let the nurse classify** — except that here the raw fact the app can capture is coarser than every threshold in the literature. Source 12 asked its 7–17 year olds for a number of hours; **this app must not**, and no candidate may ask a child for a duration in hours or minutes. |
| 14 | Nausea; feeling like you might throw up; loss of appetite; stomach discomfort | ICHD-3 1.1 (1) — D *"nausea and/or vomiting"*; ICHD-3 2.1 (2) — *"no nausea or vomiting"*; RCH (4) — *"Nausea and vomiting"*; Kim (10) — ≤5y D.1 *"Loss of appetite, stomach discomfort, or dizziness"* and *"gastrointestinal symptoms … are more common"* in children; Kellier (12) — *"Have you felt sick to your stomach with your headache today?"* | **yes** — **already collected** | `characterisation`. `SENSATIONS.queasy` ships as *"Yucky tummy"* at `depths: ['inside']`, so a child reaching this packet has already been offered it. `head-injury` item 14 covers the same ground on the other side of the gate. The appetite half is reachable through the existing `eating-drinking` fact. **The wording in source 12 is unusable**: *"sick to your stomach"* contains the banned word *sick* and *stomach* is banned by `tummy/acute-pain`'s register ruling in favour of *tummy*. |
| 15 | Dizziness; balance, coordination and walking problems; ataxia | HeadSmart (8) — 5–11 column, *"Balance/co-ordination/walking problems"*; Kim (10) — ≤5y D.1 *"dizziness"*, and *"In young children, vomiting and dizziness are more common than headache"*; Raucci (9) — *"subjective vertigo"*, and *"Ataxia, gait abnormalities, impaired coordination"*; NG127 (5) — 1.21.1 *"headache associated with ataxia"*; Manoyana (11) — ataxia, 12/51 vs 1/58, p<0.01 | **partial** — **already collected** | Split three ways and every part lands somewhere the app already reaches. The *feeling* is `SENSATIONS.dizzy`, shipped as *"Spinny"* at depth `inside`. *Difficulty walking* is `general/unwell` item 13 (*"Is it hard to walk, or to use your arm or leg"*, fact `limb-use`), and `general-unwell` carries `head` in its `groups`, so it is in range for this child. *Ataxia* and *gait abnormality* are examination (item 25). No new item — but see "Still open", because the cross-cutting packet only fills slots this one leaves empty. |
| 16 | Fever; headache with fever and features of meningism | NG127 (5) — 1.21.1 *"headache with fever and features of meningism"*; RCH (4) — *"Meningitis · Encephalitis"* among secondary causes, *"Illness"* as a trigger; Raucci (9) — *"Seizures or fever"*; Kim (10) — *"Fever"*; Manoyana (11) — fever, 19.3%, p = 0.12, and *"Headache with fever can be found in a wide variety of systemic diseases and infections, which is much more common than intracranial pathology"* | **yes** — **already collected** | `triage`. Fact **`feels-feverish`**, which nine candidates across six packets already carry, including `general/unwell` item 1 — the flagship of a packet whose `groups` include `head`. Re-writing it here would establish nothing new and would spend a head slot on a fact already reachable. **Never say "fever", never ask for a number**, carried unchanged from three packets. |
| 17 | Neck stiffness; meningism | NG127 (5) — 1.21.1 *"features of meningism"*; RCH (4) — exam red flag *"Signs of meningism (photophobia, neck stiffness)"*, and *"Features of meningitis or encephalitis"* in the history list; Raucci (9) — *"Focal neurologic deficit or meningismus"*; Manoyana (11) — meningism, 10/51 vs 3/58, p<0.01; HeadSmart (8) — *"Abnormal head position such as wry neck, head tilt or stiff neck*"* | **partial** — **already collected** | `triage`. Fact **`neck-movement`**, already carried by six candidates in four packets — `general/unwell` item 11, `throat/sore-throat`, `skin/rash` and `tummy/vomiting` — and `general-unwell` serves group `head`. **Ruled deliberately, not inherited: see decision 10.** Note that RCH files neck stiffness under *Examination*, not under History, which is a source-level argument for the same conclusion: it is a resistance a clinician feels. HeadSmart's *"abnormal head position"* is an observer's word for the same thing and is not carried. |
| 18 | Whether this has happened before; number of attacks; frequency (≥5 attacks, ≥10 episodes, <1 day/month) | ICHD-3 1.1 (1) — A *"At least five attacks"* and *"Individuals who otherwise meet criteria … but have had fewer than five attacks should be coded 1.5.1 Probable migraine without aura"*; ICHD-3 2.1 (2) — *"At least 10 episodes … occurring on <1 day/month on average (<12 days/year)"*; Kim (10) — ≤5y A; RCH (4) — *"pattern of headaches"*; Raucci (9) — Table 7 *"Number of headache types · Frequency"* | **partial** — **already collected** | `characterisation`. **This is the criterion that makes ICHD-3 a classification of *disorders* rather than of attacks, and no single report can satisfy it.** Source 12 says so directly: *"ICHD criteria were developed to diagnose headache diseases, not individual attacks, and the validity of such criteria to determine a migraine-day is unknown."* The app's `happened-before` question and the repeat-report `RECURRENCE` path get the *fact* of recurrence; they cannot get a count, and **no child of 4–12 may be asked to count headaches per month or per year** (banned by regex). |
| 19 | Mood; anxiety; low mood | RCH (4) — *"Chronic non-progressive → Tension-type headache, Anxiety, depression, Somatisation"*, and *"Headache may also be a manifestation of underlying psychosocial issues"*; NG127 (5) — 1.21.6 *"emotional stress is a strong trigger"*; Raucci (9) — *"Psychiatric disorder · Anxiety · Depression"* | **partial** — **already collected** | `characterisation`. `MOODS` is asked on every report and ships *Worried*, *Sad*, *Scared*, *Lonely*, *Tired* — deliberately separate from pain, and `vocab.js` says why: *"A lot of nurse call-outs are worry, hunger, or needing a break showing up as a stomachache."* That is this criterion, already handled, and handled better than a headache-specific question would handle it. **It is emphatically not a licence to ask about the *causes* of the mood** — see "Dignity — the ruling". |
| 20 | Rash; non-blanching rash | RCH (4) — meningitis among secondary causes | **n/a — other branch** | `triage`. `skin/rash` is `depth: surface` and this packet is `depth: inside`, so the two never reach the same child. Recorded so nobody adds a rash question here to "cover meningitis": the child who needs it answered the depth gate differently. |
| 21 | Headache worsened by upright posture and relieved by lying down | NG127 (5) — 1.21.4, *"refer children if headaches are consistently worsened by upright posture and relieved by lying down"* | **partial** — **not proposed for v1** | `triage`. One source, one line, and two problems. First, *"consistently"* asks a child to generalise across episodes, which is the same construction the project banned when it ruled out "than usual" comparisons. Second, the app already lets the child say that lying down helps: `HELPS` ships *"Lie down and rest"* and *"A quiet dark room"*, and both are offered here. A yes/no question would add a weaker version of a fact the child can volunteer. Recorded rather than dropped, because if a posture widget is ever built this is the criterion for it. |
| 22 | Aura; visual, sensory or speech changes before the headache; premonitory symptoms | RCH (4) — *"With aura: presence of focal neurological symptoms, usually visual, sensory or speech changes before onset of headache (aura lasts less than one hour)"*; Raucci (9) — Table 7 *"Premonitory symptoms · Aura"*, and *"a migrainous aura typically develops within a few minutes and migrates from one area to another"*; ICHD-3 (1) — 1.2 is a separate classification | **no — not obtainable** | `characterisation`, **and the exclusion is sourced rather than assumed.** Aura's criteria are defined by *timing and duration*: RCH says it *"lasts less than one hour"* and develops before onset. Source 12 tried to capture it in 7–17 year olds with a daily diary and could not: *"**we did not capture details about timing and duration of symptoms, so could not determine whether attacks met full criteria for migraine with aura**"* and *"we could not confirm whether a headache met criteria for definite migraine with aura"*. If a funded study with a text-message diary and ages 7–17 could not get it, this app cannot. The near-neighbour fact `fuzzy-feeling` (`back/pain`, and `SENSATIONS.tingly` *"Fuzzy feeling"*, older tier only) is **not** to be repurposed as an aura question: it establishes tingling or numbness now, not a focal deficit preceding a headache, and citing RCH for it would be a false citation. |
| 23 | Seizures; new-onset seizures; fits | NG127 (5) — via 1.21.1's neurological criteria; RCH (4) — *"New onset seizures"*; Raucci (9) — *"Seizures or fever"*; Kim (10) — *"Seizures"*; HeadSmart (8) — *"Fits or seizures"*; Manoyana (11) — seizures, 11/51 vs 5/58, p = 0.06 | **no — observer** | `triage`. Same ruling as `head-injury` item 7, carried unchanged: mostly an observer event, and **never phrase as "did you have a seizure"** — or as "a fit", which is the British word HeadSmart uses. Both banned by regex. A child who has had one may have no memory of it, which is the definition of the problem. |
| 24 | Changes in mood or personality over days or weeks; behaviour change; developmental regression; pervasive lethargy; altered conscious level; poor general condition | RCH (4) — *"Developmental regression"*, *"Altered conscious state/confusion"*; NG127 (5) — 1.21.1 *"change in conscious level or pervasive lethargy"*; Raucci (9) — *"Changes in mood or personality over days or weeks"*, *"Altered conscious state"*, *"Poor general condition"*; Kim (10) — same; HeadSmart (8) — *"Behaviour change"*; Manoyana (11) — mood/personality change, 15/51 vs 5/58, p<0.01, **and altered conscious state was one of its four multivariable predictors** | **no — observer** | `triage`, and **source 11 states the exclusion itself**: *"Some red flags, such as changes in mood or personality, are quite subjective and **depend greatly on the perception of the parents and the attentiveness of their children's monitoring**."* That is the self-report filter written by a source. Two of the four predictors in the only prediction rule for this complaint live in this row or the next, and neither is the child's. The words *unwell*, *lethargic*, *listless*, *drowsy* and *irritable* are banned outright — they are observers' words about a child and, in the British and Australian sources here, they are the default register. |
| 25 | Neurological and eye examination: focal motor abnormality; focal neurological deficit; cranial nerve palsies; gait, ataxia, impaired coordination; fundoscopy and papilloedema; abnormal ocular movements, squint, failure of upward gaze ('sunsetting'), pathological pupillary responses; visual field defects; abnormal head position, head tilt, wry neck; increasing head circumference centiles; stigmata of neurocutaneous syndromes; meningism as elicited; bradycardia with hypertension | RCH (4); NG127 (5) — 1.21.1 and 1.21.3; Raucci (9) — Table 6; Kim (10) — Table 3; Manoyana (11) — Tables 3 and 4; HeadSmart (8) | **no — exam** | `triage`. **The largest block in the packet and the reason its clean yield is nine.** Three of source 11's four multivariable predictors are in this row. Item 5 takes the one sliver a child owns — whether their vision is blurry — and nothing else here may be reached through a child. **Never ask a child to test their own eyes**: no covering one eye, no looking at a light, no staring at a screen to see what happens. Banned by regex. |
| 26 | Blood pressure; hypertension | NG127 (5) — 1.21.4, *"be aware that hypertension might be the cause · measure the child's blood pressure and check the measurement against blood pressure reference ranges adjusted for age and height"*; RCH (4) — *"Observations including BP"*, and hypertension in the systemic-disorder list | **no — measurement** | `triage`. A cuff and an age-and-height-adjusted reference range. Recorded because NG127 tells clinicians to do it *for all children with recurrent headache*, and the app's report omits it entirely. |
| 27 | Sudden onset and severe; first or worst ever; thunderclap | RCH (4) — red flag *"Sudden onset and severe"*; Raucci (9) — *"Sudden onset of headache (first or worst ever)"*, and *"rapid onset of headache"* among stroke warning signs | **no — a comparison and a grading** | `triage`. **Two banned constructions in one criterion.** *"Severe"* is a severity adjective, rejected universally by `screen.mjs` because the child rates the word rather than the event. *"First or worst ever"* asks a 7-year-old to rank this headache against every headache of their life — a baseline comparison, which this project ruled out in `tummy/vomiting` decision 4 because a young child cannot construct one. The *sudden* half is partly reachable through `DURATIONS` (`just-now`) and through `happened-before`. Recorded so that nobody writes the obvious and unaskable question. |
| 28 | Family history of migraine or primary headache; no family history of migraine | RCH (4) — *"Family history of migraines/primary headaches"*; Raucci (9) — via the neuroimaging factors, *"lack of family history"* | **no — carer or record** | `characterisation`. A child of 4–12 may know a parent gets headaches; they cannot report a family history, and asking them to relay what an adult told them is banned in three packets already. Belongs on the carer's surface. |
| 29 | High-risk population and comorbidities: malignancy, immunosuppression, sickle cell disease, haematological or rheumatological conditions, prothrombotic state, congenital heart disease, neurocutaneous syndromes, ventriculoperitoneal shunt, anticoagulants and antiplatelet agents, recent head trauma | RCH (4) — *"Known systemic disorder"*, *"Medications"*, *"Presence of ventriculoperitoneal (VP) shunt"*; Raucci (9) — *"High-risk population"*; Kim (10) — *"High-risk underlying comorbidities"*; Manoyana (11) — 23.8% prevalence, p = 0.20 | **no — record** | `triage`. In the record before the child reaches the tablet, and nearly a quarter of source 11's cohort had one. Recorded so its absence from the app's report is visible: **a child on anticoagulants with a headache looks identical to this app to a child without.** |
| 30 | Triggers: emotional stress, poor sleep, exercise, heat, sun glare, illness, skipped meals, foods (citrus, MSG, artificial sweeteners, nuts, onions, salty foods, caffeine, chocolate), missed medications | RCH (4) — the trigger list in full; NG127 (5) — 1.21.6 *"emotional stress is a strong trigger"*; Raucci (9) — Table 7 *"Triggering factors"* | **no — management, not assessment** | `characterisation`. Trigger identification belongs to the *"Treatment of primary headaches / General advice"* half of source 4 — *"Avoid triggers"*, *"Encourage good sleep hygiene"*, *"A headache diary or App can be used to monitor response to lifestyle modifications"*. That is a management tool for a diagnosed child over weeks, and it is a different product. It is also a **blame surface**: *"did you skip a meal?"*, *"did you sleep badly?"* and *"did you eat chocolate?"* all read to a child as questions about what they did wrong. `MOODS` already collects the child's state without asking them to explain it. |
| 31 | Emotional stress; specific learning problems; bullying at school; stress in the family; psychosocial factors; household and family dynamics; school performance; the HEADSS screen (home, education, alcohol, drugs, smoking, sex) | NG127 (5) — **1.21.6, which says explicitly to "Ask the child and their parent or carer about specific learning problems, bullying at school and stress in the family"**; RCH (4) — *"Headache may also be a manifestation of underlying psychosocial issues"*, *"Consider psychosocial factors … in older children and adolescents"*; Raucci (9) — *"Household and family dynamics, psychosocial stress factors, and school performance should also be evaluated"*, and *"A HEADSS (home, education, alcohol, drugs, smoking, sex) screen should be performed in all"* | **no — see "Dignity"** | **The most consequential exclusion in this packet, because a source tells this app in so many words to do the opposite.** No other packet in this project has had a guideline instruct it to ask *the child* the question it is refusing. Ruled out entirely — see "Dignity — the ruling". |
| 32 | Analgesic use; medication overuse; efficacy of medications taken; limits of 15 days/month for simple analgesics and 10 days/month for triptans | NG127 (5) — 1.21.7; RCH (4) — *"analgesia use"*, and *"To prevent medication overuse headache, limit use of simple analgesics to less than 15 days per month"*; Raucci (9) — Table 7 *"Efficacy of medications taken"*; CG150 (7) — medication-overuse headache is one of its four subjects | **no — carer or record, and out of scope by age** | `characterisation`. A child does not know what they were given or how often, the counting is per month, and *"have you been taking too much medicine?"* is an accusation delivered by a tablet. CG150, which is where NG127 sends the reader for this, is an over-12s guideline. `HELPS` already lets a child ask for *"My own medicine"* without being interrogated about it. |
| 33 | Age under 4 years; age under 5 years as a relative red flag | NG127 (5) — 1.21.2, *"Refer urgently all children aged under 4 years with headache"*; Raucci (9) — *"Age < 5 years *"*; Manoyana (11) — *"only six patients were younger than five years of age. The cut-off point of 5 years did not reach statistical significance, likely from the small number … However, we found that most of them were diagnosed with brain tumors"* | **n/a — already collected** | `triage`. The app knows the child's age. Recorded because it sits exactly on this app's floor of 4, and because source 11's remark — that the under-fives it did have were mostly brain tumours — is the sort of thing a reviewer should see even though it is a note about six children. |
| 34 | Pregnancy; menstruation and menstrual migraine; sexual activity; alcohol; smoking; cannabis and other drug use; substance use or withdrawal; caffeine | ICHD-3 (1) — *"Migraine without aura often has a menstrual relationship"*, and Appendix *"A1.1.1 Pure menstrual migraine and A1.1.2 Menstrually-related migraine"*; RCH (4) — trigger *"Menstruation"*, secondary cause *"Drug related · Substance use/withdrawal"*; Raucci (9) — the HEADSS screen, and *"Background information must be investigated, such as drug use … pregnancy"* | **no — out of scope by age, and deliberately** | Every one is scoped by its source to an older patient, and the app stops at 12. **Recorded as a decision rather than an omission**, exactly as `tummy/vomiting` item 30 and `tummy/acute-pain`'s menstruation exclusion did: a screen that asks an unsupervised child on a shared hospital tablet about drugs, alcohol or sexual activity is a safeguarding failure before it is a clinical one. This is the material the adult headache literature hands over most readily and it is refused in full. |
| 35 | Neuroimaging (CT, MRI), lumbar puncture, blood tests, EEG | RCH (4) — *"If red flags present, discuss with a senior clinician and consider intracranial imaging"*; NG127 (5) — 1.21.3; Raucci (9); Manoyana (11) — the entire study is about imaging yield | **no — investigation** | `triage`. **Never named to a child.** Source 11 exists to reduce these, which is the strongest available argument that a history taken well is worth something — and the app's contribution to a history is nine questions of which five are red flags. |
| 36 | Secondary causes as named conditions: viral illness, sinusitis, pharyngitis, acute otitis media, dental caries, meningitis, encephalitis, intracranial abscess, raised ICP, idiopathic intracranial hypertension, hydrocephalus, intracranial neoplasm, stroke, intracranial haemorrhage | RCH (4) — the secondary-headache table in full | **no — diagnoses, not criteria** | `triage`. Listed here because RCH's secondary table is *causes*, not assessment items, and a future run must not mine it for questions. Note where the child-facing overlap already lives: **ear pain** is `ears/earache`, **sore throat** is `throat/sore-throat`, **tooth pain** is `mouth/tooth-pain`, and a child with sinusitis or pharyngitis will have tapped those regions. `tummy/vomiting` item 4 reached raised ICP from the other direction. No condition name may ever reach a child or appear in a candidate. |

**Yield: ~65 distinct criteria across 3 ICHD-3 classifications, 1 clinical
prediction score, 1 public symptom card and 4 guidelines and reviews → 8 clean,
1 partial, 12 already collected or on another branch, 15 excluded.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
clean (30%); sore throat ~53 → 12 clean (23%); limb pain — eight named prediction
rules → **1** clean; vomiting and diarrhoea ~70 → 3 clean (4%); **headache ~65 →
9 clean (14%)**.

**Where this packet's yield comes from is more interesting than the number.**
Nine askable items, and:

- **five come from Search B** — NG127 §1.21 and RCH between them supply items 2,
  3, 5, 7, 8 and 9. NG127's ten-bullet referral list is a *history* list, and four
  of its ten bullets are the child's own experience. That is the best ratio any
  guideline in this project has produced.
- **four come from Search A's characterisation half** — ICHD-3 supplies items 1,
  4, 6 and half of 9.
- **the prediction rule supplied none.** Source 11 is a proper Search-A find for
  exactly this presentation, and three of its four predictors are examination and
  the fourth is a duration the app collects. It contributed *zero* items and one
  important disagreement (item 3). **That is the same finding the limb packet
  made with eight prediction rules and the vomiting packet made with three
  dehydration scales, reached a third time by a third route.**

## The gap between Search A and Search B

Search A was run as the brief specifies — a comparison-and-validation search, not
a remembered rule name — and it found source 11, which recall would never have
produced. Search B was RCH's headache guideline. Comparing them:

**What Search B has that no rule has.** NG127's *"headache that is present on
awakening in the morning"*, *"triggered or aggravated by coughing, sneezing or
bending down"*, and *"affecting their school life"*; RCH's *"Associated vomiting
without another clear cause"* and its whole primary/secondary comparison table.
**Items 3, 7, 8 and 9 exist only because of Search B**, and item 3 is one that
Search A actively found nothing for.

**What Search A has that the guideline does not.** ICHD-3's criteria are not in
RCH's guideline in usable form — RCH's table summarises them, but the pediatric
modifications, which are the whole reason this packet is not a copy of an adult
headache packet, are only in ICHD-3 itself. **Items 1, 4 and 6 and the entire
"pediatric modifications" section come from Search A**, and without them this
packet would have asked a 6-year-old whether the pain is on one side.

**The shape of this packet's gap is *purpose*, like the sore-throat packet's, but
in the opposite direction.** There, ten scores answered "does this child need an
antibiotic?" and none answered "is this airway in trouble?" Here, the prediction
rule answers "does this child need a scan?" — a question whose answer is almost
entirely visible on examination — while the guideline answers "what should I ask
this child?" and the classification answers "what is this headache?". **Three
literatures, three purposes, and only two of them can be reached through a
child.**

For the next packet: **when the Search-A instrument is a rule for ordering an
investigation, expect it to yield nothing.** Investigation rules are built from
what the clinician can see at the bedside, because that is what has to be
available before the scan is ordered. Source 11 is the third instance; the limb
packet and the vomiting packet were the first two.

## Dignity — the ruling

This is a hospital. The child is 4–12, alone, on a shared tablet, with no adult
beside them to soften a question. **A shaming question produces a false negative,
because the child says no.** The project ceiling already excludes counting toilet
trips, continence, apparatus, inspecting what came out, body weight, genitals,
and — out of age scope — pregnancy, purging, and drug and alcohol use. This body
area adds one refusal that no previous packet has had to make, and it is a
refusal of an explicit instruction in a national guideline.

**NICE NG127 1.21.6, verbatim:** *"Be aware that emotional stress is a strong
trigger of migraine and chronic, daily headache in children. **Ask the child and
their parent or carer about specific learning problems, bullying at school and
stress in the family.**"*

**This app will not ask any of it.** Not bullying, not being teased or picked on,
not learning difficulties or school work or grades, not stress at home, not
arguments or fighting at home, not family circumstances. Raucci et al.'s
*"Household and family dynamics, psychosocial stress factors, and school
performance should also be evaluated"* and its HEADSS screen are refused on the
same grounds and in full.

**Why, in four parts, because "it feels wrong" is not a reason a reviewer can
check:**

1. **The instrument is wrong, not the question.** NG127 says to ask *"the child
   and their parent or carer"* — in a consultation, by a person, who can respond
   to the answer. A tablet cannot. A child who taps *yes* to "are you being
   bullied?" has disclosed something to a screen that will do nothing about it,
   and a child who taps *no* has been taught that the screen is not a place to
   say it.
2. **A "no" here is uninterpretable and a nurse would read it as reassurance.**
   This is the same structural failure as the continence question in
   `tummy/vomiting`: the children most likely to answer *no* are the children the
   question is for. A false negative on bullying is worse than no data.
3. **The disclosure risk is real and it runs in the wrong direction.** The tablet
   is shared, the waiting room is public, and the answer becomes part of a report
   a nurse reads and may discuss in front of whoever brought the child in —
   including, in the case NG127 names, a member of the family the question was
   about.
4. **It is a safeguarding matter, and safeguarding policy is the instrument, not
   question design.** This is the fifth packet in this project to reach that
   sentence by a fifth route — head injury's non-accidental injury, tummy pain's
   abuse exclusion, sore throat's, `tummy/vomiting`'s inflicted injury, and now
   this. **That the project keeps arriving here and keeps handling it as prose
   rather than as a mechanism the app enforces is itself something the reviewer
   should look at.**

**What may be asked instead, and it is already shipped.** `MOODS` asks every
child, on every report, whether they feel *Worried*, *Sad*, *Scared*, *Lonely* or
*Tired* — the child's **state**, never its **cause**. `vocab.js` says why it is
deliberately separate from pain: *"A lot of nurse call-outs are worry, hunger, or
needing a break showing up as a stomachache — asking separately catches that
instead of burying it inside a pain score."* A child who is frightened can say
so. **The line this packet draws is between a child's feelings, which are theirs
to report, and a child's circumstances, which are not this screen's to ask
about.** Item 19 records the criterion as already collected; item 31 records the
refusal.

**One more, smaller, and specific to headache.** Trigger questions read as blame
to a child even when they are asked kindly: *"did you skip lunch?"*, *"did you
sleep badly?"*, *"did you eat chocolate?"* and *"how much medicine have you
had?"* all invite a 7-year-old to account for having caused their own headache.
Item 30 and item 32 are excluded for clinical reasons as well, but this is the
reason that would stand on its own.

## Wording cautions

Ban **concepts**, not phrasings — a generator told "never say X" finds a synonym.
Every rule here is transcribed into `bannedPhrases` in `meta.json` with a `why`
naming the decision it enforces.

- **Never name a condition, a cause or a structure.** Not migraine, not
  tension-type, not cluster, not aura; not tumour, cancer, meningitis,
  encephalitis, abscess, hydrocephalus, stroke, haemorrhage, aneurysm; not raised
  pressure, intracranial, ICP, papilloedema; and **not "brain"**. A child told a
  tablet is asking about their brain has been given a reason to be frightened
  before they answer, and the answer to a frightening question is not a fact.
  `head-injury` already bans `concussion|fracture|brain|skull`; this packet
  extends the list rather than re-opening it.
- **Never use the clinical register for a symptom.** Not photophobia,
  phonophobia, osmophobia, meningism, ataxia, nystagmus, squint, fundoscopy,
  premonitory, prodrome, cephalalgia, Valsalva. Three of this packet's sources
  are written entirely in it and it is directly in the generator's path.
- **Never ask a child to perform, provoke or report an examination.** No coughing
  on request, no bending over to see what happens, no straining, no holding a
  breath — that is the Valsalva manoeuvre delegated to the patient. No covering
  one eye, no looking at a light or a lamp, no staring at a screen to test
  whether it hurts. No pressing or squeezing the head. **Item 8 asks what the
  child has already noticed; it must never ask them to find out.**
- **"Throw up" is the only verb.** Not vomit, vomiting, emesis; not puke, barf,
  spew, chunder, hurl, boke. Carried unchanged from `tummy/vomiting` decision 1,
  and `vocab.js` already ships *"Did you throw up?"*.
- **The word "sick" is banned outright, in every form.** *"Sick to your stomach"*
  is source 12's own wording and it must not be copied: in British English "being
  sick" means vomiting and in American English it means coming down with
  something, and the ambiguity shipped in this app for weeks before it was
  caught.
- **Never say "fever"**, never ask for a temperature, never mention degrees or a
  thermometer. Carried from three packets; the nurse holds the thermometer.
- **Never use an observer's word about the child.** Not unwell, poorly, off
  colour, lethargic, listless, floppy, drowsy, irritable, confused. These are
  item 24 delegated, they are words a child does not own, and — with *unwell* and
  *off colour* — they are British idiom banned project-wide. RCH and NICE write
  in exactly this register.
- **Never use British or Australian idiom.** Banned by project rule and re-banned
  here because every guideline source in this packet is British or Australian:
  *have you got*, *whilst*, *torch*, *plaster*, *nappy*, *wee*, *casualty*,
  *A&E*, *paracetamol*, and ***fits*** (HeadSmart's word for seizures).
- **Never name a seizure to the child**, in any register. Not seizure, not fit,
  not convulsion. Carried from `head-injury`.
- **Never name what happens next.** No scan, CT, MRI, x-ray, lumbar puncture,
  blood test, needle, drip or IV. Source 11's entire subject is who gets scanned;
  telling a child that is what the question is for would change the answer.
- **Never ask about medicines.** Not paracetamol, acetaminophen, ibuprofen,
  triptans, ondansetron; not painkillers, tablets or pills; and never how many or
  how often. Item 32.
- **Never ask about bullying, school problems, or stress or trouble at home.**
  See "Dignity — the ruling". This ban overrides a direct instruction in NICE
  NG127 1.21.6 and the override is deliberate and documented.
- **Never ask about pregnancy, periods, sex, alcohol, smoking, vaping or drugs.**
  Item 34. The HEADSS screen is refused in full.
- **Never ask a child to construct their own baseline.** No *than usual*, *than
  normal*, *more than you normally*, *as usual*. Carried from `tummy/vomiting`
  decision 4. **Note the deliberate exception:** *"than before"* is permitted for
  item 7, because `head-injury`, `limb-injury` and `tummy/acute-pain` all ship
  accepted trajectory candidates using it — a within-episode comparison against a
  remembered moment is a different task from constructing a general baseline.
- **Never ask a child to rate or grade anything in words**, and never *worst
  ever*, *first or worst*, or *thunderclap*. Item 27. `screen.mjs` already
  rejects *severe*, *bad*, *serious*, *dangerous*, and *a lot* / *really* /
  *very* as embedded intensity — which rules out the most natural phrasing of
  several items here, so the shipped wording must be plain.
- **Never ask for a count or a duration in units.** No hours, no minutes, no "how
  many days a month", no "how many times a week", no headache diary. Item 13 and
  item 18. Source 12 asked its 7–17 year olds for hours; this app must not.
- **Never use anatomical or classificatory words for location or quality.** Not
  unilateral, bilateral, occipital, frontal, temporal, frontotemporal, pulsatile,
  non-pulsating. The body map has the location and `SENSATIONS` has *"Thump
  thump"* and *"Tight squeeze"*.
- **Never ask a child to relay what an adult said.** *"Did your mum say…"* is the
  carer's report and belongs on the carer's surface.
- **Never mention a diary or an app.** RCH recommends one; it is a management
  tool for a diagnosed child and this is a single report in a waiting room.

## Decisions

**Decided, not deferred.** A generator reading an unresolved question improvises,
and improvisation is what this process exists to remove.

1. **Register: US English, extending the existing rulings rather than re-opening
   them.** `tummy/acute-pain` ruled *tummy*, *poop*, *pee*; `tummy/vomiting`
   ruled *throw up* and banned *sick* outright; `head-injury` ruled the head
   group's vocabulary. This packet adds the words that domain did not need:
   - **"your head"** and **"it hurts"** — not *cephalalgia*, not *cranium*, and
     never *brain*. *"Headache"* as a noun is permitted in the older tier, which
     `head-injury` already ships.
   - **"bright lights"** and **"loud sounds"** — not *photophobia*,
     *phonophobia*, *light sensitivity*, *sensitive to light*.
   - **"throw up"** — carried unchanged, and *sick* stays banned in every form.
   - **"blurry"** — matching `eyes/complaint`'s shipped wording, not *blurred
     vision*, *visual disturbance* or *diplopia*.
   - **"cough"**, **"sneeze"**, **"bend down"** — not *Valsalva*, not *straining*,
     not *positional change*.
   - **Never "unwell", "poorly", "off colour", "have you got", "whilst",
     "torch", "plaster", "paracetamol", "fits"** — every guideline source here is
     British or Australian.
2. **Answer types: all nine proposed items are `yesno`.** `FollowUpScreen`
   renders `yesno`, `count`, `text` and `voice`; `PENDING_WIDGETS` is empty.
   **No `count` item, deliberately**, unlike `tummy/vomiting` item 5: no source
   in this packet gives a headache-related vomiting threshold to count towards,
   ICHD-3's counts are per month and per year, and `head-injury` reviewed and
   rejected counting for its own vomiting item on 2026-08-30. **No `text` or
   `voice` item**, unlike `head-injury` item 6 — there is no mechanism to
   describe here, which is the definition of this side of the gate.
3. **Duration scope: this packet applies in all six bands by default**, which is
   unusual in this project and is deliberate. The reasoning: the ICHD-3
   characterisation criteria describe an attack of any age; NG127 §1.21.1 is a
   referral list for *a child presenting with headache* with no time bound; and
   source 11's strongest history predictor is *acute onset (<3 months)*, which
   puts the dangerous window well inside `long-time`. **A headache is unlike a
   head injury: the rules do not expire.** Two exceptions, both because the item
   asks about a pattern the child cannot yet have:
   - **Item 3** (hurts on waking / wakes them at night) drops `just-now` — a
     child whose headache started an hour ago has not woken up with it.
   - **Item 9** (stopping you doing things) drops `just-now` for the same reason.
4. **Item priority, and one question per item.** Nine items qualify in most
   bands; the cap is **five** sourced questions for a young child and **six** at
   age 8+, spent across every group the child tapped. So: never ask two questions
   from the same item, and prefer items in this order —

   `1 (light) → 3 (waking) → 2 (throwing up) → 5 (blurry) → 4 (moving) →`
   `6 (sound) → 8 (coughing) → 7 (getting worse) → 9 (stopping things)`

   **Light leads** because it is the only item both literatures support
   independently — ICHD-3 criterion D *and* RCH's *"Signs of meningism
   (photophobia, neck stiffness)"* — because it has validated child wording in
   source 12, and because it is **the question this group already asks**, so
   ranking it below the cutoff would be a visible regression (brief §5). Waking
   and throwing up follow because they are NG127 same-day referral criteria that
   nothing else in the app can reach. Blurry is fifth-ranked material by
   provenance but fourth here because it is the child's half of the strongest
   predictor in source 11 and `eyes/complaint` cannot reach a child who only
   tapped their head. **Proposed, not yet confirmed by review** — this ordering
   decides what a child is actually asked, and with a cap of five a young child
   receives items 1, 3, 2, 5 and 4 and nothing else.
5. **Redundancy: five items were found already collected and are not proposed.**
   Checked against every screen the app ships, not only against other packets.
   `SENSATIONS.throbbing` and `SENSATIONS.squeezing` cover item 10 (ICHD-3 C2 for
   both headache types); `SENSATIONS.queasy` covers item 14 (nausea);
   `SENSATIONS.dizzy` covers the feeling half of item 15; the FPS-R screen covers
   item 11; `DURATIONS` covers item 13; the body map's `back-head` region covers
   the occipital half of item 12; `MOODS` covers item 19; `HELPS` covers the
   lying-down half of item 21; and `happened-before` covers the recurrence half
   of item 18. **This is the largest already-collected block in any packet in the
   project**, and it is not an accident: the app's generic screens were built for
   pain, and headache is the complaint they fit best.
6. **Photophobia and phonophobia are asked behaviourally in the young tier — a
   wording rule, not an age floor.** ICHD-3 says *"In young children, photophobia
   and phonophobia may be inferred from their behaviour"* (source 1), which is a
   statement that the observer supplies these. The obvious response is
   `minAge: 6` on items 1 and 6. **That response is rejected**, for two reasons:
   it would strip from 4- and 5-year-olds the only follow-up question this group
   currently ships, and ICHD-3 gives no age for *"young children"*, so any number
   would be invented. Instead, source 10's Table 2 says what the behaviour *is* —
   *"Sensitivity to light and sounds as indicated by inability to watch TV or
   play on the computer or on electronic games"* — and that is a fact a
   five-year-old owns about themselves. **So the young-tier wording of items 1
   and 6 must name a thing the child could not do, and the older tier may ask
   about the sensation directly.** Stage 2 must honour this.
   **Amended 2026-09-08, after review:** the named thing must be something the
   child is doing *right now* or does near-universally. Source 10's own example
   — watching TV — does not qualify: a candidate asking *"Was the TV too loud to
   watch?"* reached review and a child who was not watching TV answers no, which
   is a false negative, not an absence of phonophobia. The accepted wordings
   name either a bodily action (*"Did you have to cover your ears?"*) or the
   present room (*"Is it too loud in here?"*). Naming an activity presupposes
   it; naming a body or a room does not. *The reasoning is
   `JUDGEMENT, NOT A CITATION`; the sentence it rests on is source 10's
   reproduction of source 14, which was not read — see the Sources list.*
7. **`morning-vomiting` ruling: this packet coins `morning-headache` and does not
   reuse it.** The full reasoning, because the brief asks for it explicitly:
   - **They are not the same fact.** `morning-vomiting` establishes *when in the
     day the throwing up happens*. Item 3 establishes *when in the day the head
     pain happens*. Reusing the slug would let one suppress the other, and the
     raised-ICP pattern the slug was coined for — *"Early morning vomiting **and**
     headache may be due to raised ICP"* — needs **both**. Suppressing one half
     of a two-part red flag to save a slot is the worst possible outcome.
   - **The provenance is worth recording anyway.** `tummy/vomiting` coined
     `morning-vomiting` from a line in RCH's Vomiting guideline that names
     headache in the same breath. **The fact's home is an accident of which
     packet was written first, not a judgement that vomiting owns it.** This
     packet does not move it: `tummy/vomiting` item 33 was recovered after review
     on 2026-09-07 and ships an accepted candidate, and breaking it would gain
     nothing.
   - **The consequence, stated plainly.** A child who taps **only** their head
     is served `headache` and `general-unwell`, never `tummy/vomiting`. So the
     morning-**vomiting** half of that red flag is unreachable for a head-only
     child, and this packet does **not** add a second vomiting item to reach it,
     because item 2 already spends a slot on vomiting and a second one on its
     timing would displace item 5 or item 4. **This is a real, known gap** and it
     is in "Still open" rather than papered over.
   - **`morning-headache` is also not `morning-pain`** (`limb/pain` item 3,
     *"Does it hurt in the morning?"*). That question is region-specific to a
     limb and its wording is region-neutral, so sharing the slug would produce
     one ambiguous answer for a child who tapped a head and a leg. Same reasoning
     as decision 9.
8. **`light-hurts` vs `bright-light-hurts` ruling: this packet uses
   `light-hurts`.** Both slugs exist in the bank and they name the same clinical
   fact, which is a defect. Who owns what:
   - **`light-hurts`** — `eyes/complaint` item 5 (candidate `y-009`, *"Does light
     hurt your eyes?"*), reused by `tummy/vomiting` item 4 (`v-010`), and — the
     deciding fact — it is the `id` of the head group's hand-written follow-up
     `{ id: 'light-hurts', q: 'Do bright lights make it worse?' }`, which
     `keyOf` treats as a fact because it falls back to `id`. The eyes packet's
     own note says it chose the slug *"so the head group's hand-written question
     dedupes against it"*.
   - **`bright-light-hurts`** — `skin/rash` item 5 (`r-009`), from NICE NG240 and
     NHS inform.
   - **Ruling: `light-hurts`.** It dedupes against the question this group
     already asks (brief §5 — re-source, do not replace); it dedupes against
     `eyes/complaint`, which matters because a child with a headache commonly
     taps an eye; and `bright-light-hurts` is unreachable from here anyway
     because `skin/rash` is `depth: surface` and this packet is `depth: inside`,
     so the two can never be served to the same child.
   - **Flagged for the reviewer, and not fixed here:** two slugs for one fact
     means a child who taps a rash on the head and a child with a headache are
     recorded as having said different things. Merging them is a bank-wide change
     that touches `skin/rash`, which this run must not modify.
9. **New facts, and why each is new rather than reused.** Three are coined:
   - **`morning-headache`** — decision 7.
   - **`sound-hurts`** — nothing in the bank names sound sensitivity. The nearest
     slug is `hard-to-hear` (`ears/earache`), which is hearing *loss* and the
     opposite finding; sharing it would collapse two contradictory answers.
   - **`head-worse-moving`** — the bank has three slugs for "does activity make it
     worse", one per region: `worse-on-exertion` (`chest/breathing`),
     `worse-on-movement` (`back/pain`), `worse-when-playing` (`limb/pain`).
     **Three packets have already made this decision the same way**, and the
     reason is that the trigger is identical while the body part is not: a child
     who taps a head and a leg and is asked once *"does it hurt more when you run
     around?"* has given one answer to two questions. Following the precedent.
   - And **item 7 carries no fact at all**, matching `head-injury` item 2,
     `limb-injury` item 4 and `tummy/acute-pain` item 7 — this project keeps
     region-specific trajectory questions separate by leaving them untagged.
   *These four rulings are `JUDGEMENT, NOT A CITATION`. No source assigns facts;
   the reasoning is the bank's dedupe behaviour in `keyOf` and `bankQuestions`.*
10. **`neck-movement` ruling: reused by reference, and this packet proposes no
    neck question.** Meningism is a genuine red flag here — NG127's *"features of
    meningism"*, RCH's *"Signs of meningism (photophobia, neck stiffness)"*,
    source 11's p<0.01 — so the exclusion needs a reason, and there are three:
    - **Six candidates in four packets already carry `neck-movement`**, and one
      of those packets is `general/unwell`, whose `groups` include `head`. The
      fact is already in range of a child who tapped only their head.
    - **A same-fact question would be suppressed anyway.** `keyOf` collapses on
      `fact`, so writing one here changes nothing for a child who also tapped a
      throat or a tummy, and for a head-only child it would displace a
      headache-specific item that nothing else in the app can reach.
    - **RCH files neck stiffness under *Examination*, not History** — *"Red flag
      findings include … Signs of meningism"* — which is a source-level argument
      that it is a resistance a clinician feels rather than a symptom a child
      reports. `throat/sore-throat` and `general/unwell` reached the child's half
      of it first and their wording (*"Is it hard to turn your head?"*) stands.
    **The honest caveat is in "Still open":** `general-unwell` is a cross-cutting
    packet, so `bankQuestions` exhausts this packet's queue before it reaches it,
    and with a cap of five a head-only child will in practice **not** be asked the
    neck question. That is a bank-scheduling consequence, not a packet decision,
    and it is the reviewer's to weigh.
11. **`feels-feverish`, `blurry`, `fuzzy-feeling` checked before coining, per the
    brief.** `feels-feverish` — reused by reference, not proposed (item 16); nine
    candidates already carry it, including `general/unwell`'s flagship, which
    serves `head`. `blurry` — **reused, and this packet does propose its own item
    5 under that slug**, because `eyes/complaint` serves group `eyes` only and a
    child who taps only their head would otherwise never be asked; the shared
    slug means a child who taps both is asked once. `fuzzy-feeling` — **not
    reused and not repurposed**; it establishes tingling or numbness now, and
    using it for migraine aura would be a citation the source does not support
    (item 22).
12. **Nothing in this packet is described as validated, reviewed or predictive.**
    Source 11 is a prediction score and this packet takes **no** question from it;
    source 12 is a validation study whose subject is whether a child's self-report
    agrees with a classification, and its answer was *moderately*. The nurse
    surface must not present any answer here as a finding, and this project is a
    high-school student's literature trace, not a clinical instrument.

## Still open

- **The morning-vomiting gap (decision 7).** A child who taps only their head
  cannot be asked about early-morning vomiting, because that fact lives in
  `tummy/vomiting`, whose `groups` is `["tummy"]`. The raised-ICP red flag needs
  both halves and this packet only reaches one. Options a reviewer might weigh:
  add `head` to `tummy/vomiting`'s `groups`; add a tenth item here; or accept the
  gap. **Not decided, and stage 2 must not invent an answer.**
- **The neck question in practice (decision 10).** `general-unwell` reaches group
  `head`, but only after this packet's queue is exhausted, and the cap is five. A
  head-only child will therefore probably not be asked about neck stiffness. If
  the reviewer thinks that is wrong, the fix is a bank-scheduling change or a
  tenth item here, not a change to `general/unwell`.
- **Two slugs for one fact (decision 8).** `light-hurts` and `bright-light-hurts`
  should probably be merged. It touches `skin/rash` and was out of scope for this
  run.
- **The mechanism gate cannot catch a stale injury.** A child whose headache
  started three days after a fall may answer "it just started hurting" and be
  routed here, where NG127's *"headache occurring within 5 days of a head
  injury"* and RCH's *"Recent history of significant head injury"* are not asked
  by either packet. Whether the gate needs a third answer, or whether one of the
  two packets should carry the criterion, is unresolved.
- **Whether item 3 should be ranked third given source 11.** The guidelines and
  the only prediction study disagree, and this packet followed the guidelines.
  Stated in "Read this first"; a clinician should decide it.
- **The ≤5-years criteria under decision 6 come from a source that was not
  read** (source 14, via source 10). Decision 6 changes the wording a 4–6 year
  old is asked. If a reviewer can obtain Lee's original, it should be checked.
- **Nothing here is validated below age 7.** Source 12 is the only self-report
  evidence and it enrolled 7–17. The app starts at 4. No item carries an age
  floor, and "Decision on age floors" below explains why that is the honest
  choice rather than an oversight — but it does not make the gap smaller.

### Decision on age floors

**This packet sets no `minAge` on any item, and that is deliberate.** Two floors
were considered and both were rejected:

- **A capability floor of 6 on items 1 and 6**, from ICHD-3's *"In young
  children, photophobia and phonophobia may be inferred from their behaviour"*.
  Rejected in favour of decision 6's wording rule, because ICHD-3 gives no age
  and any number would be invented, and because the floor would remove this
  group's only existing follow-up from its youngest users.
- **A validity floor of 7 across the characterisation items**, from source 12's
  cohort of 7–17. **Rejected under brief §4**: these items are also plain history
  in NG127 §1.21, which is written for children *under 12* and sets no floor at
  all. *"A validity floor on an item that is also plain history in a complaint
  guideline setting no floor is an invention, not a citation — leave it
  unfloored."*

**`JUDGEMENT, NOT A CITATION`**, recorded here and in `meta.json`'s
`minAgeNotes` so a reviewer can see that the empty `minAge` is a decision and not
an omission.
