# Nosebleed

Presenting complaint · serves group `head` · packet v1 · assembled 2026-09-08
Status: **not yet clinically reviewed** · sources verified first-hand: 7 of 8

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

> Source material for writing questions. Lists what clinicians assess when a
> child arrives with a nosebleed or a nose complaint, and marks which of those
> a child can report about themselves. **Not** a diagnostic tool: nothing here
> may be scored, summed, or shown to a child or nurse as a suggested cause.

## Read this first — three things that are unusual about this packet

**1. There is no prediction rule. Not a weak one; none at all.** The roadmap
rated this complaint "General", the weakest evidence tier, and that rating is
correct. Search A (comparison and validation studies, per brief §1) returned
epidemiology, cost analyses and management-pattern studies and **not one
derived or validated decision rule for paediatric epistaxis**. The nearest
thing in the literature is a study of which children with *recurrent* epistaxis
turn out to have a coagulopathy, and that study was not readable open-access
(source 8, `CITED, NOT READ`). Every criterion in this packet comes from Search
B — hospital guidelines organised by the presenting complaint. Where earlier
packets could say "PECARN says", this packet can only say "RCH's guideline
says". A reader who assumes otherwise will overtrust it.

**2. The yield is tiny, and that is the finding.** Twenty-nine criteria were
harvested. **Three** survive the self-report filter cleanly and **two** more
survive partially. Twenty-four are excluded. This is not a packet that was cut
short — it is a complaint whose entire clinical assessment is *anterior
rhinoscopy, an estimate of blood loss, and a clotting screen*, and a child
holds none of those. `limb/pain` shipped four items and explained why; this
packet ships five and the explanation is the same shape.

**3. It has no runtime gate, and it fires for children who do not have a
nosebleed.** See "Where this packet fires". This is the most consequential
thing in the packet and it is not a wording problem — it is a missing feature
in `src/data/bodyMap.js` that this packet is the second to need.

## Scope

App covers ages 4–12.

- **Excluded by age from below:** every source that raises non-accidental
  injury or serious underlying disease attaches it to **children under 2** —
  RCH: *"Epistaxis in children <2 years is rare and should prompt consideration
  of child abuse or underlying systemic disease"*; Ismail & Gandhi: *"nosebleeds
  are uncommon in children under 2"*. Those children are outside this app
  entirely, and the criterion is out of scope before any other argument about it
  is reached.
- **Excluded by age from above:** juvenile nasal angiofibroma. RCH lists
  *"Nasopharyngeal tumors: juvenile angiofibroma in adolescent males"*; PCH
  names *"teenage males"*. The app stops at 12.
- **Excluded by setting:** everything from `Identify site of bleeding` onward.
  Cautery, packing, resuscitation, tranexamic acid, full blood count and
  coagulation screen are the hospital's, and the child never sees them.

## Sources

1. **RCH Melbourne, *Clinical Practice Guidelines: Epistaxis*** (PIC Endorsed).
   **Read first-hand** via `scripts/fetch-source.mjs` from `rch.org.au`. The
   spine of this packet: it is the only source that supplies a labelled History
   block and a labelled Red flags block for this complaint.
2. **Perth Children's Hospital / CAHS, *Emergency Department Guidelines:
   Epistaxis***. **Read first-hand** via `pch.health.wa.gov.au`. Corroborates
   RCH on causes and on recurrence-plus-easy-bruising as the coagulopathy cue;
   contributes the HHT age observation (*"often presents with epistaxis prior to
   12 years of age"*, i.e. inside this app's range) and the explicit pairing of
   *"underlying coagulopathy or Non-Accidental Injury as an inciting factor"*.
3. **StatPearls, *Nasal Foreign Body*** (NCBI Bookshelf NBK459279). **Read
   first-hand**. The only source that describes the foreign-body presentation in
   any detail, and the source of item 1's urgency.
4. **NHS Greater Glasgow & Clyde, *Nasal injuries in children, emergency
   department* (Paediatrics 197)**, v5, last reviewed 20/05/2026. **Read
   first-hand** via `rightdecisions.scot.nhs.uk`. The injury half: mechanism,
   septal haematoma, patency of nares, deformity, and the one sentence that
   decides this packet's routing.
5. **Ismail AQ, Gandhi A. *Nosebleeds in Children as a Potential Marker for
   Nonaccidental Injury and Serious Underlying Pathology: How Aware Are Hospital
   Clinicians?* ISRN Otolaryngol 2011;2011:909570.** **Read first-hand** via
   PMC3658563. A questionnaire study of 39 doctors, not a clinical study. Cited
   only for what the safeguarding literature *asks clinicians to do*, never for
   an incidence figure.
6. **Alshehri et al., *Clinical Presentation and Treatment Patterns of Pediatric
   Epistaxis: A Single-Center Study*.** **Read first-hand** via PMC10944313.
   219 children, single centre, Saudi Arabia. Cited only for base rates — most
   usefully that *"bilateral nasal bleeding"* occurred in **two cases (0.9%)**,
   which is what makes a "yes" to item 2 worth a slot.
7. **Grigg et al., *Reliability of estimating blood loss in epistaxis*,
   Australian Journal of Otolaryngology.** **Read first-hand** via
   `theajo.com`. 175 clinicians estimating pig blood spilled on ten household
   objects. **This is a study of clinicians, not of children**, and it is cited
   for exactly one proposition: trained observers overestimate blood loss.
8. **Sandoval C, et al., *Clinical and laboratory features of 178 children with
   recurrent epistaxis* (PubMed 11902740), and the related recurrent-epistaxis
   coagulopathy literature.** **`CITED, NOT READ`** — the Springer full text
   returned `EXTRACTED_BUT_UNREADABLE` and the ScienceDirect versions are
   paywalled. **What depends on it: nothing.** No item, no ranking and no
   exclusion in this packet rests on it. It is listed only so that a reader
   knows the recurrence-to-coagulopathy link was looked for and not found in
   readable form, and so that nobody re-derives the search. **Its headline
   figures are deliberately not quoted here**, because quoting a number from an
   abstract is the failure brief §10 exists to prevent.

**Search A produced nothing.** Per brief §1 the gap between Search A and Search
B is itself a finding, and here the gap is total: **every** item in this packet
comes from a complaint guideline and **none** from a prediction rule, because
none exists.

## The criteria, as published

### RCH Melbourne (1)

> **Key points** · *"Usually due to minor trauma (eg nose picking) or friable
> nasal mucosa"* · *"Epistaxis in children <2 years is rare and should prompt
> consideration of child abuse or underlying systemic disease"* · *"Try simple
> measures to stop bleeding first"* · *"Seek early ENT opinion if bleeding is
> severe or difficult to stop"*

> **Background** · *"Epistaxis in children is usually from Little's area (see
> diagram), located on the anterior septal wall. The bleeding is usually venous,
> of brief duration, and often recurrent"*

> **Common causes** · *"Minor trauma: nose picking, rubbing, sneezing, coughing
> or straining"* · *"Friable nasal mucosa: upper respiratory tract infection,
> drying of mucosa (air conditioning/heating), allergic rhinitis"* ·
> *"Medications: topical nasal steroids, NSAIDs, fluvoxamine, chemotherapy"*

> **Rarer causes** · *"Foreign bodies: suspect with unilateral foul discharge.
> Button batteries require urgent removal"* · *"Nasal polyps"* · *"Bleeding
> diatheses: von Willebrand disease, ITP, haematological malignancies"* ·
> *"Vascular malformations: hereditary haemorrhagic telangiectasia"* ·
> *"Nasopharyngeal tumors: juvenile angiofibroma in adolescent males"*

> **Assessment — History.** *"Consider underlying diagnosis/cause if: recurrent,
> frequent episodes · easy bruising, gum bleeding, prolonged bleeding after
> minor cuts · family history of bleeding disorders · history of bleeding after
> surgical challenges eg dental extractions, tonsillectomy, circumcision ·
> medication history"*

> **Red flags.** *"Age <2 years: high association with trauma, child abuse or
> underlying illness"* · *"Bleeding >30 minutes despite adequate pressure"* ·
> *"Bilateral bleeding suggests a systemic cause or significant trauma"* ·
> *"History of syncopal episode, haematemesis, melaena or haemodynamic
> instability"*

> **Examination.** *"Airway/Breathing: assess for compromise (facial trauma)"* ·
> *"Circulation: shock is rare but possible"* · *"Identify site of bleeding: use
> a headlight/otoscope to look for active bleeding, clots or prominent vessels
> in Little's area"*

> **Investigations.** *"Consider FBE, coagulation screen and group and
> hold/crossmatch in severe/recurrent bleeding, a history suggestive of bleeding
> disorder or signs of haemodynamic compromise"*

**The whole of that Red flags block is four items, and only two of them are
about the nosebleed itself.** That is the size of the evidence base.

### Perth Children's Hospital (2)

> *"Epistaxis in children is usually a minor self-limiting condition which
> responds to simple first aid measures. Rarely, a child with an underlying
> coagulation disorder may present with serious..."*

> *"Local Trauma – (e.g. nose picking, nasal fracture, forceful nose blowing,
> foreign body). Inflammation (e.g. upper respiratory tract infection, allergic
> rhinitis). Dry nasal mucosa (hot, dry climates)."*

> *"Hereditary Haemorrhagic Telangiectasia (HHT) is a rare autosomal dominant
> condition which often presents with epistaxis prior to 12 years of age."*

> *"Patients in whom epistaxis is recurrent, difficult to control or who have
> other features of coagulopathy (e.g. easy bruising) may warrant investigation
> for an underlying coagulation disorder."*

> *"...underlying coagulopathy or Non-Accidental Injury as an inciting factor."*

> *"...emollients alone controlling 65-77% of recurrent paediatric epistaxis."*

### StatPearls, Nasal Foreign Body (3)

> *"Patients usually present with foul-smelling purulent nasal discharge that is
> usually unilateral. NFBs are usually painless, however, some children present
> with headaches on the same side of the foreign body. Moreover, bloody stained
> discharge or even epistasis might be witnessed in these cases."*

> *"Paired magnets also create a current with similar results. which can end up
> in a septal perforation in as little as 4 hours."*

> *"Unilateral foreign bodies are found on the right side twice as often as the
> left probably due to right-handedness."*

(*"epistasis"* is the source's own typo for *epistaxis*, reproduced verbatim.)

### NHS GGC, Nasal injuries in children (4)

> **History.** *"Establish the mechanism of injury."* · *"Establish whether this
> is an isolated nasal injury or if there is associated head trauma (see HI
> guideline), or injury elsewhere."* · *"If you have suspicion of NAI discuss
> with senior."*

> *"Control epistaxis if present [See Epistaxis Management in Children
> Guideline] The majority of nose bleeds will stop with 10-30 minutes of firm
> pressure upon the soft tissues of the nose, compressing Little's area, on the
> anterior septum"* · *"The nose should be held for 10 minutes initially,
> resisting temptation to release and see if bleeding has stopped."*

> *"If there is a septal haematoma present refer to ENT at initial
> presentation."* · *"If there is a delayed presentation associated with
> systemic features, particularly elevated temperature, a septal abscess should
> be suspected."* · *"Septal deviation - refer to ENT at initial presentation."*

> *"Associated skull fracture - e.g. base of skull # which can lead to CSF
> rhinorrhoea."* · *"Patency of nares"* · *"Evident deformity - if present refer
> to the emergency ENT clinic within one week of the time of injury."* ·
> *"Swelling +/- contusion"*

> *"If at the time of examination swelling prevents confident assessment of
> deformity ask parents to look at the nose in 3-4 days time when the swelling
> has improved, and return to the emergency department for review if they have
> ongoing concerns."*

### Ismail & Gandhi (5)

> *"...your history should include a thorough questioning of how this event
> occurred, any previous such events, and any previous injuries the child may
> have sustained, including hospital admissions. If there is any doubt
> whatsoever, you sh[ould]..."*

> *"...doctors of all grades and in both specialties were either not aware of or
> not concerned about epistaxis in an infant as a possible sign of nonaccidental
> injury and were not willing to carry out simple blood tests to investigate
> recurrent nosebleeds in an older child."*

> *"...it was decided by 3 independent paediatricians trained in child
> protection issues that in 50% of the cases child protection concerns should
> have been raised."*

### Alshehri (6) and Grigg (7)

> Alshehri: *"Recurrent nasal bleeding was the most prevalent, seen in 107 cases
> (48.9%)... bilateral nasal bleeding in two cases (0.9%)"* · *"The most common
> cause was dry nasal mucosa, observed in 55 cases (25.2%). Trauma was the second
> most frequent cause, reported in 45 cases (20.6%), followed closely by allergic
> rhinitis in 39 cases (17.9%). Bleeding disorders were identified in 17 cases
> (7.8%)."*

> Grigg: *"The majority of participants overestimated the size of the spill for
> all items."* · *"Over-estimation of blood loss is common and has implications
> for excessive resuscitation of patients and the inappropriate use of blood
> products..."*

## Where this packet fires — the routing ruling

The `head` group is gated by **mechanism first** (`GROUP_GATE.head`): the app
asks "did you bump it, or did it just start hurting?", and asks depth only if
the answer was `no-injury` or `unknown`. `head-injury` serves `mechanism:
"injury"`; `headache` serves `mechanism: "no-injury"` + `depth: "inside"`.

A nosebleed sits across that gate, and GGC states the problem from the
clinician's side in one sentence: *"Establish whether this is an isolated nasal
injury or if there is associated head trauma."* The nose and the head are
assessed together.

### The three options, and why (b) is impossible today

**(a) `mechanism: null`** — the packet survives both branches and fires for
every child who taps anywhere in group `head`.

**(b) `subgroups: ["nose"]`** — keyed to the body-map region, so it fires only
when the child tapped the nose. **This is the right answer and it cannot
currently be expressed.** In `src/data/bodyMap.js`:

```js
const LOWER = /^(back-)?(leg|foot)/
export const subgroupOf = (regionId) => {
  const r = regionById(regionId)
  if (r?.group !== 'limb') return null
  return LOWER.test(regionId) ? 'lower' : 'upper'
}
```

`nose` is `group: 'head'`, so `subgroupOf('nose')` is `null` and
`subgroupsForRegions(['nose'])` is `[]`. The filter in `bankQuestions` reads:

```js
.filter((q) => !q.applies.subgroups || !subgroups?.length ||
               q.applies.subgroups.some((sg) => subgroups.includes(sg)))
```

An **empty** subgroup list short-circuits the second clause to `true` and the
question fires anyway. So shipping `subgroups: ["nose"]` today would be a
**no-op that fires for every head child while documenting a restriction the
runtime does not enforce** — strictly worse than option (a), because a reviewer
reading `meta.json` would believe the packet was nose-scoped when it is not.

**(c) The ruling: ship as (a), state the cost, and name the fix without making
it.** `mechanism: null`, `depth: null`, `packetRank: 60`, acute-only default
duration bands, and every question worded to name the nose explicitly.

`depth: null` is also deliberate. Scoping to `surface` would dodge `headache`
neatly — but a child whose nose is bleeding has no good answer to "on your skin,
or inside?", and a `surface` scope would hide this packet from every child who
answered "inside", which is a perfectly reasonable thing for a child to say
about their own nose. The depth answer is not trustworthy for this complaint, so
the packet does not depend on it.

**The fix, for the reviewer, not made here:** generalise `subgroupOf` beyond
group `limb` so that region `nose` yields a `nose` subgroup, then add
`subgroups: ["nose"]` to this packet's sidecar. That is a change to `src/` and
to the `limb` subgroup semantics, and it is outside this packet's scope.
`packets/back/pain` reached the identical conclusion from the other side — its
questions fire for a child who taps only *Back of neck* — and recorded *"The
cheapest fix is to generalise `subgroupOf` beyond `limb`."* **This is the second
packet to need it, which is the argument for doing it.**

### What a child gets, in all four combinations

| | **tapped the nose** | **tapped the head generally** |
|---|---|---|
| **"I bumped it"** | mechanism `injury`, depth never asked (null). Live in group `head`: **`head-injury`** (rank 50) and **`nosebleed`** (rank 60), round-robin. The child gets `head-injury` #1, `nosebleed` #1, `head-injury` #2, `nosebleed` #2… **CORRECT.** A child who was hit in the nose should get both, and this is the case the packet exists for. | Identical filtering — **nothing distinguishes this cell from the one to its left.** A child who bumped the back of their head is asked "Is your nose still bleeding?" and "Did something go up your nose?". **FAILURE.** Mitigated only by wording: every question names the nose, so the answer is a cheap "no" rather than confusion. Cost: two or three of five or six slots that `head-injury` should have had. |
| **"it just started"** | mechanism `no-injury`, depth asked. If **inside**: **`headache`** (50) + **`nosebleed`** (60) round-robin — a spontaneous nosebleed *is* the no-injury branch, so this is the case option (a) exists to serve; the cost is interleaved headache questions. If **surface**: `headache` is filtered out on depth, and `nosebleed` is the **only** home-group packet — it leads and fills first. **BEST CASE.** | mechanism `no-injury`, depth typically `inside`: **`headache`** + **`nosebleed`**. The child with a headache is asked about nosebleeds. **FAILURE**, same shape and same fix as the cell above. |

**Two of four combinations fire this packet at a child who has no nose
complaint.** That is stated here rather than discovered later.

### `packetRank`, and the assumption this packet breaks

`head-injury` and `headache` both carry `packetRank: 50`, and `headache`'s
sidecar explains why: *"They never coexist, which is why both carry packetRank
50."*

**This packet breaks that.** In every one of the four combinations above it
coexists with one sibling or the other, so for the first time in group `head`
the rank is doing real work rather than sitting unused.

**Ruling: `packetRank: 60`.** In `build-bank.mjs` the rank decides which
packet's queue *picks first* in the round-robin, not which one wins outright. 60
means the sibling always ships its best question before this packet ships its
best. That is correct twice over:

- **Structurally** — the sibling owns the branch the gate actually established;
  this packet is riding along on a gate that could not exclude it.
- **On the evidence** — `head-injury` rests on three validated decision rules
  and `headache` on ICHD-3 and NG127. This packet has **no prediction rule at
  all**. A packet with weaker evidence should not outrank one with stronger
  evidence for a scarce child-facing slot.

**The cost, plainly:** round-robin still hands this packet roughly *half* the
slots wherever it is live. Raising the rank further does not change that — only
the subgroup gate does. The acute-only default duration band is the one
mitigation this packet could actually ship, and it means a child reporting a
`few-days` or `long-time` head complaint receives at most items 1 and 5.

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Did something go up your nose** | RCH (1) *"Foreign bodies: suspect with unilateral foul discharge. Button batteries require urgent removal"*; PCH (2) *"Local Trauma – (e.g. nose picking, nasal fracture, forceful nose blowing, foreign body)"*; StatPearls (3) *"NFBs are usually painless"*, *"bloody stained discharge or even epistasis might be witnessed"*, *"septal perforation in as little as 4 hours"* | **yes** | **Ranked first on time-criticality, not frequency** — the same basis on which `eyes/complaint` ranked its chemical-splash item first. Only the child knows; the object is often invisible; a button battery destroys tissue in hours; and StatPearls says the presentation is characteristically *painless and late*, so nothing else in the app will surface it. **Wording must be passive** — see the wording cautions; this is the one question in the packet where a shamed "no" is catastrophic. |
| 2  | **Is it bleeding from both sides** | RCH (1) Red flags, *"Bilateral bleeding suggests a systemic cause or significant trauma"*; StatPearls (3) *"unilateral epistaxis"*, *"right side twice as often as the left"*; Alshehri (6) *"bilateral nasal bleeding in two cases (0.9%)"* | **yes** | The strongest single criterion in the packet — RCH's own red flag, needing no baseline, no clock and no volume. Ranked **third** anyway, deliberately: a nurse standing in front of the child can see which side bled more reliably than the child can report it, so it has the strongest evidence and the weakest claim on a scarce slot. Source 6's 0.9% base rate is what makes a "yes" worth having. |
| 3  | **Is your nose still bleeding** | RCH (1) Red flags, *"Bleeding >30 minutes despite adequate pressure"*; GGC (4) *"Control epistaxis if present"*, *"The nose should be held for 10 minutes initially, resisting temptation to release and see if bleeding has stopped"* | **yes** | **THE CHILD'S HALF ONLY.** Neither threshold is asked and neither may be. See "The two things the literature cares most about" — this item exists precisely *because* duration cannot be asked, and it establishes the one binary a child genuinely holds: is blood coming out right now. It tells the nurse whether first aid is still running before anyone has looked. It must never be presented as RCH's ">30 minutes" criterion. |
| 4  | **Can you breathe through your nose** | GGC (4) examination heading *"Patency of nares"*, and *"If there is a septal haematoma present refer to ENT at initial presentation"*; StatPearls (3) obstruction by an object | **partial** | **Split, not reclassified** (brief §4). GGC's criterion is an examination the nurse performs; whether air moves through the child's own nose is a *different item* that happens to concern the same anatomy — precisely the relationship between CHALICE's "abnormal drowsiness" and `head-injury` item 13. **It must never be described as detecting a septal haematoma.** Weakest sourcing in the packet; ranked fourth. |
| 5  | **When you get a little cut, does it bleed for a long time** | RCH (1) History, *"prolonged bleeding after minor cuts"*; PCH (2) *"other features of coagulopathy (e.g. easy bruising) may warrant investigation"* | **partial** | The one bleeding-tendency question that is not an inspection, not the carer's knowledge, and not shame-loaded. **No age floor**, and that was a decision: "a long time" is a judgement about the child's *own repeated experience*, not a comparison against a baseline they have never seen — the distinction `headache` drew when it permitted "than before" while banning "than usual". Ranked last because that distinction is fine and may not survive contact with a 5-year-old. |

**Yield: 29 criteria → 3 clean, 2 partial, 24 excluded.**

For comparison: `head-injury` harvested ~20 criteria across three rules and got
5 clean; `headache` got ten ranked items from six sources. This complaint is
genuinely thinner, and padding it would mean writing questions that cite a
guideline which does not support them.

## The two things the literature cares most about, and neither can be asked

**Duration and volume.** RCH's only quantitative red flag is *"Bleeding >30
minutes despite adequate pressure"*. Its investigation trigger is *"severe...
bleeding"*. GGC's first-aid instruction is a ten-minute clock. Between them,
*how long* and *how much* are most of what these guidelines measure.

**Both are poor child self-reports, and this packet proposes neither.**

- **Duration.** A frightened 4–12 year old cannot report elapsed time. There is
  no source that says so — that judgement is the packet's — but the app has
  already ruled it twice: `headache` banned asking a child for minutes or
  hours, and `DURATIONS` collects a six-band answer on a separate screen. A
  minute-level question would be a third asking of something the app already
  gets approximately, in a form the child cannot supply.
- **Volume.** Source 7 put 175 clinicians in front of photographs of known
  volumes of blood on ten household objects and found *"The majority of
  participants overestimated the size of the spill for all items"*, with
  accuracy improving with years of practice. **That study is of clinicians, not
  of children.** It supports "trained observers overestimate blood loss"; the
  extension to a frightened child is **JUDGEMENT, NOT A CITATION**. It is,
  however, the strongest available evidence that the question is unaskable, and
  it points the same way as experience: a child who has seen blood on their own
  shirt will say "lots".

**Item 3 is what is left after both are removed** — the binary the child
actually holds. It is a smaller fact than either guideline wants, and it is a
true one.

## Excluded, and why

Twenty-four criteria. Grouped, so the pattern is visible.

**Already collected by the app — the largest group, and the one that matters
most:**

- **Recurrence (item 6).** RCH: *"Consider underlying diagnosis/cause if:
  recurrent, frequent episodes"*. PCH: *"recurrent"*. Ismail & Gandhi: *"any
  previous such events"*. Alshehri: recurrent bleeding was **48.9%** of
  presentations. This is the single most important history item in the entire
  epistaxis literature — it is the doorway to the whole bleeding-disorder
  differential — and **it is already asked on every report**. `HAPPENED_BEFORE`
  in `vocab.js` (*"Has this happened to you before?"*) is appended **outside the
  question cap**, and the repeat-report path replaces it with `RECURRENCE`. A
  nose-specific duplicate would spend a scarce slot on a fact the app never
  fails to collect. **Flagged for the reviewer**: the app's question is about
  "this" — the whole report — not about nosebleeds specifically, and for a child
  who tapped nose *and* head it is ambiguous which "this" they answered. That
  ambiguity is the price of the exclusion, and it is stated rather than solved.
- **Fever (19).** GGC's septal-abscess cue. Already `feels-feverish`, carried by
  `general-unwell` item 1, whose groups include `head`.
- **Nose pain (28).** Body map plus the FPS-R intensity screen.
- **Headache on the same side as a foreign body (29).** StatPearls. `headache`
  item 12 carries `head-side`.
- **Mechanism (10).** GGC: *"Establish the mechanism of injury."* Asked twice
  already — by `GROUP_GATE.head` before any follow-up runs, and by `head-injury`
  item 6 (`h-003`, *"What were you doing when you hurt it?"*). Fact `bumped-it`
  is not reused and no candidate may be written.
- **Syncope (part of 16).** `SENSATIONS.dizzy` has the child's half; the event
  itself is an observer's.

**Examination, investigation and procedure — the diagnostic core of the
complaint (22, 23, 24, 20, 21):** anterior rhinoscopy with headlight or
otoscope, identifying the bleeding point in Little's area, silver-nitrate
cautery, anterior nasal packing, Merocel/Surgicel/Floseal, septal haematoma,
septal deviation, evident deformity, swelling and contusion, patency of nares,
CSF rhinorrhoea, FBE/FBC, coagulation screen, group-and-hold and crossmatch,
airway compromise and shock. **All of it instrumented or observed.** Two are
worth singling out:

- **Nasal deformity (20).** GGC does not merely make this an examination — when
  swelling prevents assessment it *"ask[s] parents to look at the nose in 3-4
  days time"*. The source hands the looking to an adult. A tablet has less
  standing to ask a child to appraise their own face, not more.
- **CSF rhinorrhoea (21).** Asking a child to characterise clear fluid running
  out of their head is `head-injury`'s item-10 ban (*"is anything coming out of
  your ear?"*) restated for the nose.

**The carer's knowledge (13, 14, 15):** family history of bleeding disorders;
medication history (RCH names *"topical nasal steroids, NSAIDs, fluvoxamine,
chemotherapy"*); and bleeding after *"dental extractions, tonsillectomy,
circumcision"*. A child does not know what they were given, and one of the three
named surgical challenges is genital surgery — a hard refusal on the PG ceiling
independent of any clinical argument.

**Requires the child to inspect or produce something (12, 16, 17):**

- **Melaena** — asking a child to look at what came out. Banned project-wide.
- **Haematemesis** — banned for a second, clinical reason: after a nosebleed,
  swallowed blood confounds it, so a child's "yes" would not mean what RCH's
  criterion means.
- **Gum bleeding (12)** — group `mouth`'s territory, and the child-facing form
  is an inspection of their own mouth.
- **Unilateral foul discharge (17)** — RCH's foreign-body cue, folded into item
  1 rather than asked. Item 1 takes the actionable, child-held half of the same
  criterion; asking a child whether their nose smells bad is shame-loaded on a
  shared tablet.

**Refused on dignity, evidence, or both (9, 11, 26):** nose-picking; easy
bruising; non-accidental injury. Each gets its own section below.

**Out of scope (25):** children under 2, and adolescent males with juvenile
nasal angiofibroma.

**Not a question at all (27):** GGC's *"Establish whether this is an isolated
nasal injury or if there is associated head trauma"* is a **routing** criterion.
It is recorded because it is the clearest statement in any source that the nose
and the head are assessed together, and it is what the gate ruling turns on.

**Not proposed for a different reason (18):** upper respiratory infection,
allergic rhinitis and dry mucosa are the *commonest causes* in both guidelines
(Alshehri: dry mucosa 25.2%, allergic rhinitis 17.9%). Fact `runny-nose` exists
— but all three carriers (`e-005`, `e-006` in `earache`; `s-007` in
`sore-throat`) are outside group `head` and unreachable from here, so reusing
the slug would dedupe against nothing. More importantly the fact this packet
needs is *blockage on one side* (item 4), not runniness, and neither guideline
changes management on the answer. A common cause is not automatically a useful
question.

## Nose-picking — the ruling

RCH names it in its **Key points**: *"Usually due to minor trauma (eg nose
picking) or friable nasal mucosa"*, and again under Common causes: *"Minor
trauma: nose picking, rubbing, sneezing, coughing or straining"*. PCH names it
first: *"Local Trauma – (e.g. nose picking, ...)"*.

**It is the leading cause of paediatric epistaxis and it may never be asked.**
Four independent reasons, any one sufficient:

1. **It is an accusation dressed as a question.** A tablet in a public waiting
   room asking a child whether they pick their nose is the exact mechanism the
   PG ceiling exists to prevent. The child has been told off for this by an
   adult they love.
2. **The expected answer is "no" regardless of the truth**, so the item carries
   no information even if it were permitted. A question whose answer is known in
   advance is not a question.
3. **It changes nothing.** Digital trauma and friable mucosa receive the same
   first aid, the same review, and the same emollient — PCH records *"emollients
   alone controlling 65-77% of recurrent paediatric epistaxis"* without regard to
   which caused it. A "yes" does not alter management.
4. **This app collects the child's state, never its cause** — the principle
   `headache` used to refuse bullying, family stress and skipped meals, applied
   here to a smaller and more embarrassing behaviour.

Banned as a **family of wordings**, not a phrase: picking, digging, fingers or
nails in the nose, scratching or rubbing inside it, and the slang. See
`bannedPhrases`.

**A specific and dangerous interaction with item 1.** Item 1 asks whether
something went up the child's nose. The most natural English for that is *"Did
you put something up your nose?"* — and that phrasing converts the packet's
highest-value, most time-critical question into an admission of fault. A child
who thinks they are in trouble says no, and **a button battery answered "no" out
of shame is the worst outcome available in this packet.** So item 1 must be
**passive and agentless** — *"Did something go up your nose?"* — which is exactly
the construction `eyes/complaint` chose (*"Did something go into your eye"*,
never "did you poke your eye"), applied to the body part where the temptation to
assign blame is far stronger. A separate ban catches every agentive form.

## Safeguarding — the ruling

Three sources raise it. PCH pairs *"underlying coagulopathy or Non-Accidental
Injury as an inciting factor"*. GGC instructs: *"If you have suspicion of NAI
discuss with senior."* Source 5 exists entirely because clinicians miss it, and
reports that in a reviewed series *"3 independent paediatricians trained in
child protection issues [decided] that in 50% of the cases child protection
concerns should have been raised"*.

**Decision: the NAI branch is excluded outright, and unlike `skin/rash` this
packet ships no item that touches it at all.**

`skin/rash` faced the same question and answered it carefully: item 14
(*"bruises you don't know how you got"*) exists as a **haematology** item, is
cited as one, *"is not a safeguarding instrument and must never be presented as
one"*, and leaves any interpretation to the nurse. That reasoning is sound and
this packet does not disturb it. **But this packet reaches the opposite
conclusion about its own bruising item, for reasons specific to it:**

1. **It is out of scope before any other argument.** Every source that raises
   NAI attaches it to **children under 2** — RCH's red flag is *"Age <2 years"*;
   source 5's finding is about *"epistaxis in an infant"*. The app starts at 4.
   This is the cleanest possible exclusion and it should be the one on record.
2. **Every directive is addressed to a clinician.** Source 5's advice is that
   *"your history should include a thorough questioning of how this event
   occurred, any previous such events, and any previous injuries the child may
   have sustained, including hospital admissions"* — a trained adult, with a
   protocol, in a room. GGC's is *"discuss with senior"*. Neither is a script
   for a tablet, and treating them as one is a category error.
3. **The tablet cannot see who is standing behind the child.** A child answering
   alone in a waiting room may be within earshot and eyeline of the person who
   hurt them. The app cannot detect that, cannot respond to a disclosure, cannot
   secure the answer, and cannot follow up. **Asking would be worse than not
   asking**, because it would create a record of a "no" that means nothing and
   might be read as reassurance.
4. **The bruising item is refused separately (item 11).** RCH's *"easy
   bruising"* and PCH's *"other features of coagulopathy (e.g. easy bruising)"*
   are real history criteria and a bruise question would be defensible in
   isolation. It is refused on two grounds: `skin/rash` item 14 already carries
   fact `unexplained-bruises` with a better-sourced haematology rationale and an
   age-8 floor, so sharing the fact means only one is ever asked and this
   packet's would be the weaker one dropped; **and** a bruise question sitting in
   a packet whose other half is nasal trauma reads, as a *pair*, much more like a
   safeguarding screen than either does alone. Item 5 takes the half of RCH's
   coagulopathy history — *"prolonged bleeding after minor cuts"* — that carries
   none of that.

**No question in this packet may ask who caused a mark, whether anyone hurt the
child, whether an injury was deliberate, or whether the child is frightened of
anyone.** A ban is in `bannedPhrases` covering the family. Safeguarding is a
trained adult's conversation under a trained adult's protocol, and a shared
tablet in a corridor is the worst venue available for it.

## Wording cautions

Ban **concepts**, not phrasings. Full regexes with reasons are in
`meta.json → bannedPhrases`; the concepts are:

- **Clinical and anatomical register for the nose** — "epistaxis", "septum",
  "septal", "Little's area", "mucosa", "nares", "turbinate", "anterior",
  "posterior", "unilateral", "bilateral", "rhinorrhoea". Every source writes in
  it; RCH's background paragraph is *"Little's area... on the anterior septal
  wall"* and it sits directly in a generator's path.
- **Procedures and drugs** — "cautery", "silver nitrate", "packing", "tampon",
  Merocel, Floseal, tranexamic acid, emollient names. A child told a tablet is
  asking about cautery has been frightened before they answer, and a frightened
  answer is not a fact.
- **Condition names** — "haematoma", "haemorrhage", "coagulopathy", "clotting",
  "von Willebrand", "ITP", "leukaemia", "telangiectasia", "angiofibroma",
  "perforation", "fracture". Extends `head-injury`'s existing ban rather than
  re-opening it.
- **Nose-picking, in every form.** See the ruling.
- **Agentive insertion** — "did you put/push/stick/shove... up your nose". See
  the ruling; item 1 must stay passive.
- **Volume and elapsed time** — "how much blood", millilitres, teaspoons, "how
  many tissues", "how long has", "how many minutes", bare "minutes"/"hours".
  See "The two things the literature cares most about".
- **Inspecting or producing what came out** — "look at the tissue", "spit it
  out", "did you swallow the blood", "soaked", "clots", "show me". RCH's own
  management text instructs staff to have the child *"spit out any blood into a
  kidney dish"* — a direction to a nurse holding the dish, not a question.
- **Foul discharge** — "does your nose smell bad", "stinky", "pus", "snot",
  "gunk". Item 17's exclusion, enforced.
- **Safeguarding probes.** See the ruling.
- **Severity classification** — "how bad", "serious", "heavy", "a lot of
  blood", any rating. `head-injury`'s rule; RCH's escalation language
  (*"severe or difficult to stop"*, *"profuse"*) is written entirely in it.
- **Self-constructed baselines** — "than usual", "than normal", "than other
  kids". Deliberately does **not** catch "a long time", which item 5 needs: a
  judgement about one's own repeated experience is a different task from a
  comparison against a norm the child has never seen, and `headache` drew the
  same line when it permitted "than before".
- **Relaying what an adult said** — carried unchanged from `headache`.
- **British and Australian idiom** — "have you got", "whilst", "casualty",
  "A&E", "plaster", "poorly", "unwell", "off colour", "torch", "paracetamol",
  "wee", "in hospital", "mum". **Five of this packet's seven read sources are
  Australian or British**, so this is not a formality here.

## Decisions

**Decided, not deferred.**

1. **Register: US English.** "Nose", "both sides", "blocked up", "still
   bleeding", "a little cut". Never "nostril" in the young tier ("both sides of
   your nose" is plainer); permitted in the older tier. Never any word from the
   clinical register above. Spellings are US throughout even though five of
   seven sources are not.
2. **Answer types: all five items are yes/no.** `FollowUpScreen` renders
   `yesno`, `count`, `text` and `voice`, so this is a choice rather than a
   constraint — and it is made because every count in this literature is a
   volume or a clock, and both are banned. **Item 2 must ask for the informative
   pole**: RCH's red flag is *bilateral*, so "is it bleeding from **both**
   sides?" and never "is only one side bleeding?", which inverts the question
   into the uninformative answer.
3. **Duration scope: acute only by default** — `just-now`, `this-morning`,
   `yesterday`, `not-sure` — with three sourced exceptions. Item 1 runs to
   `long-time` because StatPearls says nasal foreign bodies *"are usually
   painless"* and present with discharge, making late presentation the norm.
   Item 4 runs to `few-days` because GGC's own follow-up window is *"3-4 days"*
   and it warns of *"a delayed presentation"*. Item 5 runs to every band because
   a bleeding tendency is not an acute fact. Every red flag in RCH and GGC is
   about the current episode, and a child reporting a `long-time` head complaint
   is not bleeding now. **This is also the packet's only shippable mitigation
   for the gate problem** — it removes this packet from the two chronic bands
   almost entirely.
4. **Item priority: `1 → 3 → 2 → 4 → 5`.** *Proposed, not yet confirmed by
   review.* With only five items and a young cap of five sourced questions spent
   across every group the child tapped — and with a sibling packet always
   competing, per the gate ruling — this ordering decides which items are ever
   asked. Item 1 leads on **time-criticality** (source 3's four-hour septal
   perforation; RCH's *"Button batteries require urgent removal"*), following
   `eyes/complaint`'s precedent for ranking on how fast a fact expires rather
   than how often it is true. Item 2 is demoted below item 3 despite carrying
   the packet's strongest criterion, because the nurse can see laterality and
   cannot see whether it stopped ten minutes ago. **Never ask two questions from
   the same item.**
5. **Redundancy: checked, and it removed more than it kept.** Recurrence
   (`HAPPENED_BEFORE`, asked on every report outside the cap), mechanism (the
   group gate *and* `head-injury` item 6), fever (`feels-feverish`), nose pain
   (body map + FPS-R), dizziness (`SENSATIONS.dizzy`), same-side headache
   (`head-side`) and duration bands (`DURATIONS`) are all already collected.
   **Seven of the twenty-four exclusions are redundancy**, which is a higher
   proportion than any earlier packet and is what a late packet in a filling app
   should look like.
6. **Fact rulings — all five coined, nothing reused, each refusal deliberate.**
   Two packets sharing a fact means only one is ever asked, so a reuse here is a
   decision to *delete* a question.
   - `nose-something-went-in` — **not** `eye-something-went-in` or
     `eye-something-in-it`. `eyes/complaint` is the wording precedent and it
     split the **event** from the **sensation**; item 1 is the event half. Both
     eye slugs are `groups: ["eyes"]` and unreachable, and the urgency differs.
   - `nose-side` — **not** `head-side`. That is `headache` item 12's laterality
     of *pain*; both are reachable in group `head` at once and a child can have a
     left-sided headache and a right-sided nosebleed.
   - `nose-still-bleeding` — nothing in the bank names an ongoing bleed.
   - `nose-blocked` — **not** `hard-to-breathe` (respiratory distress, chest's
     fact; a blocked nostril is not breathlessness and collapsing them would let
     one answer suppress the other), and **not** `runny-nose`.
   - `bleeds-a-long-time` — **not** `unexplained-bruises`. RCH lists *"easy
     bruising"* and *"prolonged bleeding after minor cuts"* as two separate
     history criteria; this packet takes only the second.
   - Also explicitly **not reused, no item written**: `bumped-it` (the gate),
     `face-swelling` (`m-005` is `groups: ["mouth"]`, unreachable, and GGC's
     swelling is an examination), `mouth-mechanism` (a nosebleed is not a mouth
     mechanism; named only because blood reaching the mouth could tempt a
     generator), `fuzzy-feeling` (RCH's syncope red flag is an observer's fact).
7. **Depth scope: `null`, deliberately.** Not `surface`, which would have
   dodged `headache` cleanly. A child whose nose is bleeding has no good answer
   to "on your skin, or inside?", so the depth answer cannot be relied on for
   this complaint and the packet must not depend on it.
8. **No age floors.** The only age criterion anywhere in these sources is
   *"Age <2 years"*, which is a **population boundary below this app's floor**,
   not a capability or validity floor inside 4–12. Importing it as a `minAge`
   would be an invention. **JUDGEMENT, NOT A CITATION.**
9. **Nothing hand-written is at risk.** Per brief §5, `FOLLOW_UPS.head` contains
   exactly one entry — `light-hurts`, *"Do bright lights make it worse?"* —
   which `headache` has already re-sourced (its item 1). This packet displaces
   no existing question.

## Still open

1. **The subgroup gate is the packet's largest unresolved problem, and it is
   not solvable inside a packet.** Until `subgroupOf` is generalised beyond
   group `limb`, this packet fires for every child who taps anywhere in group
   `head`, in two of the four gate combinations wrongly. `packets/back/pain` has
   the identical problem from the other side. **Two packets now need the same
   one-line change.**
2. **The recurrence exclusion should be checked by someone who can see the
   nurse view.** *"Has this happened to you before?"* is asked on every report
   but is about "this", not about nosebleeds — and for a child who tapped nose
   and head it is ambiguous which "this" they answered. Recurrence is the entry
   point to the whole bleeding-disorder differential, so if that ambiguity turns
   out to matter, this is the exclusion to revisit first.
3. **Item 4 has the thinnest sourcing in the packet.** It is a legitimate split
   from GGC's *"Patency of nares"* under brief §4, but GGC gives no child-facing
   form and no other source states nasal obstruction as a symptom in words this
   packet could read. A reviewer with access to an ENT source on septal
   haematoma should either strengthen the citation or drop the item.
4. **The recurrent-epistaxis coagulopathy literature was not readable**
   (source 8, `CITED, NOT READ`). Nothing depends on it, but a reviewer with
   institutional access should check whether it contains a child-reportable
   discriminator this packet missed. On the available evidence it does not: its
   variables are laboratory ones.
5. **`packetRank: 60` is a judgement about slot competition, not about clinical
   importance.** A child actually having a nosebleed is not well served by
   always picking second. If the subgroup gate is ever built, the rank should be
   revisited at the same time — with a real gate, 40 or 50 would be defensible.
