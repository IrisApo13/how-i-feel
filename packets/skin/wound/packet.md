# A cut, a scrape or a bruise

Presenting complaint · packet `skin-wound` · serves **all nine body groups**,
`depth: surface`, `mechanism: injury` · packet v1 · assembled 2026-09-08
Status: **not yet clinically reviewed** · sources verified first-hand: 11 of 13

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
> who arrives with a cut, a scrape or a bruise, and marks which of those a child
> can report about themselves. **Not** a diagnostic tool: nothing here may be
> scored, summed, or shown to a child or nurse as a suggested cause. This is a
> **six-item packet**, and the reasons it is small are findings rather than gaps.
> They are stated at the top, not at the bottom.

## Read this first: why this packet is six items and not fifteen

Four things a reader must not have to reach the end to discover.

1. **There is no prediction rule for this complaint, and the one validated rule
   that exists stops at the exact age this app starts.** Search A was run as the
   brief specifies and returned, for wounds, nothing at all: comparison and
   validation literature for paediatric minor injury is almost entirely head
   injury, and the searches kept returning PECARN, CATCH and CHALICE. The one
   genuine clinical decision rule found anywhere in this complaint's territory is
   **TEN-4-FACESp** (source 7), for bruising — and its own scope sentence is
   *"The rule applies only to children with bruising who are younger than 4.0
   years."* The app covers 4–12. The single validated instrument in this
   literature is out of scope at its lower bound, and it is an examination of
   where bruises are and what shape they are, so it could never have been a
   question. Search B carries this packet almost entirely, exactly as the
   roadmap's **"General"** evidence rating predicted.
2. **The strongest reason this packet is small is not the evidence. It is that
   its sibling already asked most of the questions.** `skin-rash` is also
   `depth: surface`, also serves all nine groups, and is already shipping
   `bumped-it`, `unexplained-bruises`, `puffy-swollen`, `blisters` and
   `feels-feverish` to **exactly this packet's audience** — every child who taps
   any body area and says "on my skin". Five facts that a wound packet would
   otherwise have claimed are already claimed. This is checked against
   `src/data/bank.js`, candidate by candidate, in "What is already asked", and it
   is the reason a reviewer should not read six items as thin searching.
3. **The one adult predictor set found is at one remove and its three variables
   are all the nurse's.** Quinn et al. (2014) is the only prospective cohort
   located that identified independent predictors of wound infection. It is
   **`CITED, NOT READ`** — the PubMed record extracted unreadably and no
   open-access full text was reachable. Its predictors reach this packet only
   through source 10's reproduction of them: *"non-head and neck lacerations,
   contaminated lacerations, and lacerations greater than 5 cm in length"*, and
   source 10 states in the same sentence that this was *"a prospectively followed
   **adult** cohort"*. **No item depends on it.** All three variables are
   measurements or examination findings, so nothing would change if it were read.
4. **The literature genuinely does not support a child-facing safeguarding
   question, and this packet writes none.** That is argued in full in "The
   safeguarding ruling", and it is the section a reviewer is most likely to want
   to overturn.

## Scope

**This is a cross-cutting packet, scoped by depth rather than by body area** — a
cut can be anywhere. `meta.groups` lists all nine (`head`, `throat`, `chest`,
`tummy`, `limb`, `back`, `eyes`, `ears`, `mouth`), `meta.depth` is `"surface"`,
and `meta.group` is `"skin"`, which is deliberately **not** one of the nine, so
the build's coverage report has a key and nobody reads this packet as owning a
body area. Same construction as `skin-rash`, for the same reason.

**`mechanism: "injury"` does much less than it looks like it does, and this must
be stated plainly.** `GROUP_GATE` in `src/data/bodyMap.js` asks a mechanism
question for **two** groups only, `head` and `limb`:

| Group | Gate | What `mechanism` does to this packet |
|---|---|---|
| `head` | mechanism first; depth only `when: { mechanism: ['no-injury','unknown'] }` | **The only place the field bites.** `no-injury` excludes this packet — correctly, a headache with no bump needs no wound questions. `injury` includes it. |
| `limb` | depth first; mechanism only `when: { depth: ['inside','unknown'] }` | **Nothing.** On the limb *surface* branch — where a grazed knee lands — mechanism is never asked, so it is `null` and the filter is a no-op. |
| the other seven | no gate asks mechanism | **Nothing.** `mechanism` is `null` and the filter is a no-op. |

So in seven of nine groups the field is inert and this packet is live regardless
of it, and in `limb` it is inert on the branch that matters most. It earns its
place in one group, and there it does something worth having:

**This packet reaches group `head` and `skin-rash` does not.** `skin-rash`
carries `depth: 'surface'` and no mechanism. For a child who taps their head and
says they bumped it, `report.depths['head']` holds the *mechanism* answer
`'injury'`, the depth filter compares `'surface'` against `'injury'`, and every
rash item fails — the bug that packet documents in its own Scope section. This
packet is filtered on `mechanism`, which matches, and head never asks depth, so
`depths['head']` is undefined and the depth filter short-circuits. **A child with
a cut on their forehead is asked about the cut by this packet and about spots by
nothing.**

**Age.** App covers 4–12. **No item carries an age floor**, and the empty
`minAge` object is a decision — see decision 7. Two rules were read that set ages
and neither becomes a floor here: source 7's rule stops *below* the app's range,
and source 11's *"Children < 5 years old cannot validly and reliably self-report
health outcomes"* is about psychometric outcome measures, not about plain
history.

**Out of scope and not carried:** **burns and scalds**, which the brief asked
about — RCH files them under their own guideline (source 9), manages them as a
trauma case with a primary and secondary survey, and routes on total body surface
area; they are a different presenting complaint with a different pathway and one
near-miss recorded in "Excluded". **Everything downstream of the decision** —
suturing, tissue adhesive, sedation, washout, tetanus immunoglobulin, antibiotic
choice — which is most of the text in sources 1, 2, 3 and 4. **Blood-borne virus
and rabies prophylaxis** after human and animal bites (source 3), which is a
separate pathway and out of the PG ceiling besides. **Rashes and spots**, which
are `skin-rash` and are not re-litigated here. **Chronic and surgical wounds**,
which no source read describes in a child.

## Sources

1. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Lacerations"** (PIC Endorsed). **Read first-hand** via
   `scripts/fetch-source.mjs`. **The Search B anchor**: a paediatric ED guideline
   filed under the presenting complaint rather than a diagnosis. Supplies the
   five-bullet Assessment list, which is the closest thing in this packet to "what
   a clinician looks for in a cut".
2. **RCH Melbourne, Clinical Practice Guideline, "Management of tetanus-prone
   wounds"**, last updated October 2025. **Read first-hand.** Reached from source
   1's own "See also" line. Supplies the nine-item tetanus-prone wound list, which
   is the only place in this literature where the *mechanism* of the injury —
   what the child alone knows — decides a treatment.
3. **RCH Melbourne, Clinical Practice Guideline, "Animal and human bites"**.
   **Read first-hand.** The only source read with an explicit **History** section,
   and therefore the only one that says what somebody actually asks. Also the
   source of the one safeguarding line that touches a child-facing question.
4. **RCH Melbourne, Clinical Practice Guideline, "Cellulitis and other bacterial
   skin infections"**. **Read first-hand.** Reached from source 1's "See Cellulitis
   and skin infections". This is where the wound-infection criteria actually live —
   source 1 says almost nothing about infection except that antibiotics are *"Not
   indicated for simple lacerations"*.
5. **NHS, "Cuts and grazes"**, page last reviewed 02 April 2026. **Read
   first-hand.** **The family-facing source**, and the one that does most of the
   work in the items table: it is the only source read that writes its red flags
   in words a non-clinician is expected to act on, which is the same role NHS
   inform played for `skin-rash` and NHSGGC's discharge triad played for sore
   throat. Eleven red flags across a 111 list and a 999 list.
6. **NHS inform (NHS 24, Scotland), "Cuts and grazes"**, last updated 31 July
   2026. **Read first-hand.** Reproduces source 5's two red-flag lists almost
   verbatim. Recorded because it independently confirms the wording, not because
   anything depends on it alone.
7. **Pierce MC, Kaczor K, Lorenz DJ, Bertocci G, Fingarson AK, Makoroff K, Berger
   RP, Bennett B, Magana J, Staley S, Ramaiah V, Fortin K, Currie M, Herman BE,
   Herr S, Hymel KP, Jenny C, Sheehan K, Zuckerbraun N, Hickey S, Meyers G,
   Leventhal JM.** "Validation of a Clinical Decision Rule to Predict Abuse in
   Young Children Based on Bruising Characteristics." *JAMA Network Open*
   2021;4(4):e215832. **Read first-hand** via PMC8047759. **The only validated
   clinical decision rule found anywhere in this complaint's territory**, and it
   is read here largely to establish that it cannot be used: see "Read this
   first" and "The safeguarding ruling".
8. **RCH Melbourne, Clinical Practice Guideline, "Child abuse"** (PIC Endorsed).
   **Read first-hand.** Read deliberately, because the brief required an explicit
   ruling rather than an omission. Its own instructions about who may interview a
   child are what settle the ruling, and they settle it against asking.
9. **RCH Melbourne, Clinical Practice Guideline, "Burns — acute management"**
   (PIC Endorsed). **Read first-hand.** Read to answer the brief's question of
   whether the wound guideline covers burns together with cuts. **It does not** —
   burns have their own guideline, their own first aid, their own history list and
   their own trauma pathway. Recorded so the exclusion is a finding rather than an
   assumption.
10. **Bernabe KQ, Desmarais TJ, et al.** "Management of Traumatic Wounds and a
    Novel Approach to Delivering Wound Care in Children." *Advances in Wound Care
    (New Rochelle)* 2014;3(4):335–343. **Read first-hand** via PMC3985539. A
    US paediatric-surgery review. Most of it is a service-delivery model and is
    not usable, but it is the route by which Quinn's predictor set reaches this
    packet, and it is explicit that the cohort was an adult one.
11. **Coombes L, Bristowe K, Ellis-Smith C, Aworinde J, Fraser LK, Downing J,
    Bluebond-Langner M, Chambers L, Murtagh FEM, Harding R.** "Enhancing validity,
    reliability and participation in self-reported health outcome measurement for
    children and young people: a systematic review of recall period, response
    scale format, and administration modality." *Quality of Life Research*
    2021;30(7). **Read first-hand** via PMC8233251. **The self-report evidence**,
    and the equivalent of the rash packet's Paller and the sore-throat packet's
    source 8. 81 studies, 33,834 participants aged 3–18. It is not about wounds at
    all; it is about whether a child of this age can answer a question, which is
    the question this whole project turns on.

**Attempted and not used.**

- **Quinn JV, Polevoi SK, Kohn MA. "Traumatic lacerations: what are the risks
  for infection and has the 'golden period' of laceration care disappeared?"
  *Emergency Medicine Journal* 2014;31(2):96–100.** The PubMed record returned
  **`EXTRACTED_BUT_UNREADABLE`** from `fetch-source.mjs` and no open-access full
  text was reachable. **`CITED, NOT READ`.** Its predictor set reaches this packet
  only through source 10's one-sentence reproduction, and source 10 also supplies
  the qualifier that the cohort was adult. **No item depends on it**; all three of
  its predictors are examination findings and are excluded as item 20.
- **Queensland Health, "Clinical Practice Guideline — Acute Minor Wound
  Management".** `health.qld.gov.au` returned **HTTP 403**. **`CITED, NOT READ`.**
  This is the single most on-topic document this run could not open — a
  government paediatric-inclusive guideline organised by exactly this presenting
  complaint. **Nothing depends on it**, but a future run should retry it, because
  a second Search B source would test whether source 5's eleven red flags are the
  whole of the family-facing set or only the NHS's version of it.

## The rule(s), as published

**There is no clinical prediction rule for a child arriving with a cut, a scrape
or a bruise.** No source read claims one exists and no search found one. What
Search A returned instead was a rule from an adjacent question — *is this bruise
abuse?* — and an adult infection-predictor cohort. Both are recorded below and
neither yields a question.

### The only validated rule found, and its scope sentence (source 7)

> "We named the refined BCDR as TEN-4-FACESp, for torso, ear, neck (TEN),
> frenulum, angle of jaw, cheeks (fleshy), eyelids, subconjunctivae (FACES), and
> patterned (p). The 4 represents any bruising anywhere to an infant 4.99 months
> or younger. **The rule applies only to children with bruising who are younger
> than 4.0 years.** A positive response for any of these components signals a
> classification of abuse. The refined BCDR had a sensitivity of 95.6% (95% CI,
> 93.0%-97.3%), a specificity of 87.1% (95% CI, 85.4%-88.6%)"

And how it is applied:

> "deliberate head-to-toe skin examination in young children regardless of chief
> concern and a differential diagnosis guided by those findings. Importantly, the
> TEN-4-FACESp BCDR is limited to children who have bruising present at the time
> of" [examination]

This is a **scope disagreement** of the kind the brief names, and it resolves
without argument: the rule's population ends at 4.0 years and the app's begins at
4. It is also, twice over, an examination — a head-to-toe skin inspection, and a
judgement about the shape and location of what is found. **Nothing in this packet
cites it for an item.**

### The complaint guideline, verbatim (source 1)

The whole Assessment section, five bullets:

> "**Assess the laceration for:** Contamination by dirt or foreign bodies ·
> Associated injuries (eg head/ cervical spine in falls, eye in facial trauma,
> teeth with mouth injuries) · Injury to deeper structures (eg tendons, joints or
> nerves) in the face, remember facial nerve, parotid/ lacrimal ducts, medial
> canthus of the eye — if a deep laceration cannot be examined adequately to
> exclude damage to such structures, refer for relevant surgical specialty advice
> · Impairment of blood supply to surrounding tissue — if a flap or area of soft
> tissue distal to the laceration appears dusky or poorly perfused, the wound
> requires specialty assessment; areas with end-arteriolar supply (extremities
> such as the tip of the nose, fingertips, and ear lobes) require special care ·
> Causes (eg animal or human bites) which require consideration for tetanus
> prophylaxis and/or antibiotics"

And its background, which is the prevalence anchor:

> "Minor lacerations are extremely common in childhood, and there are different
> methods of management available. Treatment should be aimed at the best
> functional and cosmetic result, with the least distress to the child. **A poor
> result may be achieved in children who are distressed**"

That last clause is worth pausing on. The guideline's own stated risk is a
*distressed child*, and every wording caution in this packet is downstream of it.

On infection, source 1 says almost nothing, which is itself informative:

> "**Antibiotics** Not indicated for simple lacerations. Reserved for bites and
> wounds with extensive tissue damage or massive contamination, but secondary in
> importance to initial decontamination of wound"

### The tetanus criteria, verbatim (source 2)

> "**All wounds, other than clean minor ones, should be considered tetanus-prone**
> · Check immunisation history and immunise if incomplete or uncertain"
>
> "**Assessment. Tetanus-prone wounds:** Any wound other than a clean, minor cut ·
> Compound fractures · Bite wounds · Deep penetrating wounds · Wounds containing
> foreign bodies (especially wood splinters) · Wounds complicated by pyogenic
> infections · Wounds with extensive tissue damage (eg contusions or burns) · Any
> wound obviously contaminated with soil, dust or horse manure (especially if
> topical disinfection is delayed more than 4 hours) · Reimplantation of an
> avulsed tooth"

Two of those nine — *bite wounds* and *wounds containing foreign bodies* — are
facts about the mechanism rather than about the wound, and a child is the only
person in the room who was there. They become items 4 and 3. The other seven are
classifications made by looking.

### The one History section in the whole packet, verbatim (source 3)

> "**Assessment. History:** Animal or person involved · Timing of injury · Number
> and location of bites · Risk of associated injuries eg if the child has fallen
> or been dragged · Immunisation status (particularly tetanus) · Other medical
> history: co-morbidities (eg immunosuppression), regular medications, allergies ·
> Social history: home environment, other household members, supervision around
> animals"
>
> "**Examination:** Location of injury. Areas more likely to require specialist
> surgical involvement are face, hands, feet, genitals · A clenched-fist injury
> [is] … · [assess] skin edges of wound and skin distal to the injury. If
> concerned about perfusion refer to plastic surgery … · **Assess for signs of
> infection (surrounding erythema, purulence, fever)** · **Infection can be
> clinically evident in dog bites within 24 hours and in cat bites as quickly as
> 12 hours** · **Consider child abuse if there is any suspicion that bite is from
> a human adult**"

And the key point that makes item 4 matter:

> "Animal and human bite injuries in which the skin is broken pose a high risk of
> infection and are considered contaminated wounds; prompt thorough washout is
> required"

**Count what is the child's.** Seven History bullets. One — *"Animal or person
involved"* — is squarely the child's and becomes item 4. One — *"Risk of
associated injuries eg if the child has fallen or been dragged"* — is the child's
and is **already asked** by `bumped-it`. *Timing* is `DURATIONS`. *Number and
location* is the body map plus a count this app does not ask. *Immunisation
status*, *other medical history* and *social history* are the carer's or the
record's. That is the shape of this literature in one list.

### The infection criteria, verbatim (source 4)

> "**Assessment. Typical presentation of all skin infections:** Soft tissue
> redness · Warmth and swelling · Pain/tenderness"
>
> "**Mild cellulitis:** Features above. No systemic features. No significant
> co-morbidities · **Moderate cellulitis:** Features above with moderate swelling
> and tenderness. Systemic features (eg fever, tachycardia) · **Severe
> cellulitis:** Features above with severe swelling or tenderness. Large body
> surface area involved (eg larger than the patient's handprint). Marked systemic
> features (eg fever or hypothermia, tachycardia, …)"
>
> "[Features of necrotising fasciitis include:] **severe pain out of keeping with
> apparent severity of infection** · **rapid progression** · marked systemic
> features (eg high fever with rigors, tachycardia, tachypnoea, hypotension,
> confusion, vomiting)"
>
> "**Red flags:** Abscess or suppuration · Animal or human bite · Deep structure
> involvement · Foreign body · Immunosuppression · Lymphangitis · MRSA infection ·
> Multiple comorbidities · Periorbital /facial/hand involvement · Varicella
> associated infection"

And the negative finding, which is the only discriminating sentence in the
guideline that a child could supply half of:

> "**If there is itch and no tenderness, cellulitis is unlikely**"

That sentence is the reason item 6 asks about **pain getting worse** and not
about itch: `itch` is already asked on this branch by `skin-rash`, and pairing
the two is the nurse's job, not a second question's.

### The family-facing red flags, verbatim (source 5)

The eleven-item list that carries most of the items table.

> "**Urgent advice: Ask for an urgent GP appointment or get help from NHS 111
> if:** a wound has soil, pus or body fluids in it, or it's still dirty after
> cleaning it · you were bitten by a person or a wild or stray animal · a cut is
> swollen, red and getting more painful or pus is coming out of it · a cut is
> larger than around 5cm (2 inches) · you've cut yourself and also feel generally
> unwell or have a high temperature"
>
> "**Immediate action required: Call 999 or go to A&E if:** you have a cut and
> cannot stop the bleeding · the blood comes out in spurts and is bright red and
> hard to control · you lose feeling near the wound or have trouble moving it ·
> you have a bad cut on your face or the palm of your hand · the wound is very
> large or deep · there's something stuck in the cut, such as a shard of glass –
> **do not try to take it out yourself**"

And the fact that sets the duration scope:

> "Most cuts and grazes will start to heal in a few days."

**Four of those eleven become items** (2, 3, 4, 5). Two are measurements (5cm;
very large or deep). One is a location (face, palm). One is a colour and a flow
judgement (bright red, spurts). One is pus. One is the child's immunisation and
general state, already asked. One — *"lose feeling"* — is already collected.

### The self-report evidence, verbatim (source 11)

> "81 of 13,215 retrieved articles met the inclusion criteria. **Children < 5
> years old cannot validly and reliably self-report health outcomes.** Face scales
> demonstrate better psychometric properties than visual analogue or Likert
> scales. Computerised and paper scales generally show equivalent construct
> validity. **Children prefer computerised measures. Children ≤ 7 years old think
> dichotomously so need two response options. Those > 8 years old can reliably use
> a 3-point scale.**"
>
> "**children under 8 years old cannot understand the concept of a week** … and
> some could not understand the term 'yesterday'. Those over 8 years could use
> both 7 day and 4-week recall periods"

Three consequences, and the middle one is a rare piece of good news for this app:

- The under-5 finding is about **outcome measures**, not about plain history, and
  it does not floor any item here (decision 7).
- ***"Children ≤ 7 years old think dichotomously so need two response options"***
  is a direct endorsement of the app's yes/no follow-up format for the `young`
  tier. Every item in this packet is yes/no, and for once that is not merely what
  the renderer supports.
- The recall finding lands on `DURATIONS`, not on this packet — but it is the
  second source in the repository to report that young children cannot use the
  band the app calls **"Since yesterday"**, after the rash packet's Paller. Two
  independent findings now say the same thing about a screen this packet does not
  own. Carried to "Still open".

## What is already asked, and by whom

The single most important table in this packet. Every row was verified against
`src/data/bank.js` on 2026-09-08. **This is why the packet is six items.**

| Fact | Shipped as | Scope | Consequence for this packet |
|---|---|---|---|
| `bumped-it` | `r-024`, *"Did you bump it or hurt it there?"* (skin-rash item 15) | all nine groups, `depth: surface` | **The mechanism question is already asked to this packet's entire audience.** No "how did it happen" item is proposed. |
| `unexplained-bruises` | `r-023` (skin-rash item 14) | all nine groups, `surface`, `minAge: 8` | The bruise half of the complaint is already covered, with an age floor this packet does not touch. See "The safeguarding ruling". |
| `puffy-swollen` | `r-018` (skin-rash item 11) | all nine groups, `surface` | Source 4's *"Warmth and swelling"* gets its swelling half free. No swelling item proposed. |
| `feels-feverish` | `g-001` (general-unwell item 1, **no depth filter**) and `r-010` (skin-rash item 6) | all ten groups / all nine at `surface` | Source 5's *"feel generally unwell or have a high temperature"* and source 4's systemic features are already asked, twice, deduped. No fever item proposed. |
| `blisters` | `r-016` (skin-rash item 10) | all nine groups, `surface` | Blisters in *this* literature belong to burns, which are excluded. Already asked anyway. |
| `itch` | `r-012` (skin-rash item 8) | all nine groups, `surface` | Source 4's *"If there is itch and no tenderness, cellulitis is unlikely"* — the itch half is already collected and pairing it with tenderness is the nurse's job. |
| `fuzzy-feeling` | `SENSATIONS.tingly`, *"Fuzzy feeling"* | `surface` + `inside`, but **`tiers: ['older']`** | Source 5's *"you lose feeling near the wound"* is collected — **for 8s and over only**. A 4-to-7-year-old with a numb finger is asked by nothing. Recorded in "Still open"; not fixed here. |
| `limb-swelling` | `l-016`, `l-017` | `limb` only, `inside`, `injury` | **Cannot fire on this branch at all.** Must not be merged; PLAN.md merges a fact only when it is systemic, and this one is about one limb. |
| `swelling-location` | `m-010` | `mouth` only | Not taken. Location is the body map's job. |
| `limb-use` | `can-move`, *"Can you still move it okay?"* | `limb` only, `inside` | Item 5 covers the same ground on the **surface** branch, where `can-move` cannot fire. It coins its own fact rather than merging — see decision 9. |

**One hand-written question this packet re-sources, per brief §5.**
`FOLLOW_UPS.limb.surface` ships `limb-see`: *"Can you see a cut, bruise or
rash?"* It carries **no `fact` field and no citation**. The rash packet closed
its bruise half and explicitly left the cut half open, recording that *"the
cut-and-scrape half is a **wound**, and wounds are roadmap row 3"*. **Item 1
closes it**, with four sources behind it. It does not delete `limb-see`: adding
`fact: 'cut-or-scrape'` to that hand-written entry is a one-line change in
`src/data/vocab.js`, this run writes only two files, and until it is made a child
who taps their arm will be asked about a cut twice under two ids — the same
unfixed dedupe bug the rash packet recorded for `s-021`. Carried to "Still open".

## Assessment items

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Do you have a cut or a scrape** | RCH Lacerations (1) — the guideline's whole subject, *"Minor lacerations are extremely common in childhood"*; RCH Tetanus (2) — *"Any wound other than a clean, minor cut"*; NHS (5) and NHS inform (6) — the whole page | **yes** | **The entry item.** The child arriving here has said only *"on my skin"* — they have not said they have a cut, so this is a real question and not a restatement of the gate, exactly as `skin-rash` item 1 is. **Re-sources the cut half of the hand-written `limb-see`** (see above). Register: **both words, always** — "a cut or a scrape" — for the same reason the rash packet requires "spots or a rash". "Graze" is British and is banned. |
| 2  | **Is it bleeding now** | NHS (5) — 999 list: *"you have a cut and cannot stop the bleeding"*; NHS inform (6) — same; RCH Lacerations (1) — *"For actively bleeding wounds, control bleeding first"* | **yes** | **The near-reportable one the brief flagged, split rather than reclassified.** *Is blood coming out of this cut right now* is a thing a 5-year-old can see. *How much blood has been lost*, *is it arterial*, *is it "hard to control"* are a clinician's estimate and are item 18. The split is enforced by the app's own universal screens as well as by this packet: `screen.mjs` already rejects `\bstill\b` ("assumes it was already true") and `\b(a lot\|really\|very)\b` ("intensity embedded in the question"), so **"Is it still bleeding a lot?" is rejected twice over before this packet's own bans are reached**. The wording is *"Is it bleeding now?"* |
| 3  | **Is there something in it, like glass, gravel or a splinter** | NHS (5) — 999 list: *"there's something stuck in the cut, such as a shard of glass – do not try to take it out yourself"*; RCH Lacerations (1) — *"Contamination by dirt or foreign bodies"*; RCH Tetanus (2) — *"Wounds containing foreign bodies (especially wood splinters)"* and *"obviously contaminated with soil, dust or horse manure"*; RCH Cellulitis (4) — Red flags: *"Foreign body"*; Bernabe (10) — *"wound exploration to remove foreign bodies"* | **partial** | **Five sources, and the one criterion in this literature that a child knows better than anyone.** A child who fell on gravel or ran into glass was there; the nurse was not. **Partial** because *retained* foreign body is settled by exploration, and a child's "no" does not exclude one. **Source 1's contamination bullet names dirt and foreign bodies together, and this item deliberately merges them** rather than splitting one bullet into two questions when only four fit on a screen: a "where did it happen, was it dirty" variant was written and rejected, both because `bumped-it` already occupies the mechanism slot and because it is a blame surface (see Wording cautions). **The absolute constraint on this item: it must never become an instruction.** Source 5's own words are *"do not try to take it out yourself"*, and a question that sends a 6-year-old to poke at glass in their knee causes the harm it was asking about. |
| 4  | **Did an animal or a person bite you** | RCH Lacerations (1) — *"Causes (eg animal or human bites) which require consideration for tetanus prophylaxis and/or antibiotics"*; RCH Bites (3) — History bullet 1, *"Animal or person involved"*, and *"bite injuries in which the skin is broken pose a high risk of infection"*; RCH Tetanus (2) — *"Bite wounds"*; RCH Cellulitis (4) — Red flags: *"Animal or human bite"*; NHS (5) — 111 list: *"you were bitten by a person or a wild or stray animal"* | **yes** | **Five sources, three different treatment decisions** — washout, antibiotics, tetanus — and it is the first bullet of the only History section in the packet. Plainly child-reportable. **Register: the child is never asked to classify the animal.** Source 5's *"a wild or stray animal"* asks a child to judge whether the dog that bit them was somebody's pet, which is a judgement they cannot make and may not want to make; "stray", "wild animal" and "rabid" are banned. **This item also touches the safeguarding branch and does not perform it** — source 3's *"Consider child abuse if there is any suspicion that bite is from a human adult"* is a conclusion the nurse draws from the child's answer plus everything else in front of them. The question asks *whether* a person bit them, never *who*. |
| 5  | **Can you move it okay** | NHS (5) — 999 list: *"you lose feeling near the wound or have trouble moving it"*; RCH Lacerations (1) — *"Injury to deeper structures (eg tendons, joints or nerves)"* and *"if a deep laceration cannot be examined adequately to exclude damage to such structures, refer for relevant surgical specialty advice"* | **partial** | The child-reportable half of the deep-structure red flag, and **nothing else on the surface branch asks it**: `can-move` (fact `limb-use`) is scoped `limb` + `inside`, so a child with a deep cut across the back of their hand who said "on my skin" is currently asked about movement by no packet at all. **Partial** because a severed tendon is found by examination and a child who can move a finger a little will say yes. Asked as a **function the child performs**, which is what keeps it inside the cross-cutting rule the rash packet established at its decision 6. **Ranking cost, stated:** "can you move it okay?" reads oddly for a cut on the tummy or the scalp, and it is ranked fifth partly for that reason. |
| 6  | **Does it hurt more than it did before** | NHS (5) — 111 list: *"a cut is swollen, red and **getting more painful** or pus is coming out of it"*; RCH Cellulitis (4) — *"Pain/tenderness"* as one of three typical features, the severity bands graded by *"moderate swelling and tenderness"* then *"severe swelling or tenderness"*, and necrotising fasciitis's *"severe pain out of keeping with apparent severity of infection"* and *"rapid progression"*; RCH Bites (3) — *"Infection can be clinically evident in dog bites within 24 hours and in cat bites as quickly as 12 hours"* | **yes** | **The whole infection branch, reduced to the one thing a child can report.** Source 4's three typical features are redness (banned — colour), warmth and swelling (already asked as `puffy-swollen`, and `SENSATIONS.burning` covers the hot half), and pain — and only pain has a direction a child can feel. **"Than before" is a comparison against a remembered moment and is permitted; "than usual" is a baseline construction and is banned project-wide.** Untagged (no `fact`), following the project's convention for region-specific trajectory questions — head/headache item 7, head-injury item 2, limb-injury item 4, tummy/acute-pain item 7. Ranked last because wound infection develops over hours to days, and it is the only item here whose red flag is not time-critical on the day. |
| 7  | Bruises the child cannot account for | NHSGGC and RCH via `skin-rash` item 14 | **yes** — **already asked** | Ships as `r-023`, all nine groups, `surface`, `minAge: 8`. **This packet writes no bruise question and does not lower that floor.** See "The safeguarding ruling" for why, and note that `skin-rash` justified it as a **haematology** item — leukaemia's *"petechiae (in absence of trauma)"* — not as a safeguarding one. This packet reaches the same conclusion from the opposite literature. |
| 8  | How the injury happened; falls; being dragged | RCH Lacerations (1) — *"Associated injuries (eg head/ cervical spine in falls…)"*; RCH Bites (3) — *"Risk of associated injuries eg if the child has fallen or been dragged"* | **yes** — **already asked** | Ships as `r-024` (`bumped-it`), all nine groups, `surface`. A second version would burn a round-robin slot to learn nothing. |
| 9  | Swelling around the injury | RCH Cellulitis (4) — *"Warmth and swelling"*; NHS (5) — *"a cut is swollen"* | **partial** — **already asked** | `r-018` (`puffy-swollen`). |
| 10 | Feeling hot, shivery, generally ill | NHS (5) — *"feel generally unwell or have a high temperature"*; RCH Cellulitis (4) — *"Systemic features (eg fever, tachycardia)"*; RCH Bites (3) — *"signs of infection (surrounding erythema, purulence, fever)"* | **partial** — **already asked** | `g-001` and `r-010` (`feels-feverish`). Note `g-001` carries **no depth filter**, so it fires here regardless. |
| 11 | Blisters | RCH Burns (9) — dermal burns blister | **partial** — **already asked**, and out of scope | `r-016` (`blisters`). The blistering in *this* literature is burns, which are excluded. |
| 12 | **Pus, discharge, oozing, what is on the dressing** | NHS (5) — 111 list: *"pus is coming out of it"*; RCH Bites (3) — *"purulence"*; RCH Cellulitis (4) — Red flags: *"Abscess or suppuration"* | **no — exam, and refused on dignity** | **The dignity ruling for this body area, and it is not merely a vocabulary ban.** Three sources name it and it is genuinely diagnostic, but a child-facing form asks a child to look at and describe what has come out of their own body — banned across every packet in this project — and it invites them to peel a dressing off in a public waiting room to check. A nurse sees it at a glance. See "Wording cautions". |
| 13 | Itch | RCH Cellulitis (4) — *"If there is itch and no tenderness, cellulitis is unlikely"* | **yes** — **already collected** | `r-012` (`itch`) and `SENSATIONS.itchy`. The *pairing* with tenderness — which is what makes source 4's sentence discriminating — is the nurse's, not a question's. |
| 14 | Whether the skin feels hot | RCH Cellulitis (4) — *"Warmth"*; NHS (5) — *"skin that is warm to touch"* | **yes** — **already collected** | `SENSATIONS.burning` ("Hot and stingy"), tagged `depths: ['surface']`, offered to every child this packet fires for. NHS's version is *"warm to touch"*, which is somebody else's hand. |
| 15 | Numbness; losing feeling near the injury | NHS (5) — 999 list: *"you lose feeling near the wound"* | **yes** — **already collected, for 8s and over only** | `SENSATIONS.tingly` ("Fuzzy feeling") is `depths: ['surface','inside']` but **`tiers: ['older']`**. So a 999-level red flag is collected from an 8-year-old and from nobody younger. Not fixed here — it is a change to `vocab.js` — but recorded in "Still open" as the sharpest coverage gap this packet found. |
| 16 | Where the injury is; when it happened; how much it hurts; what would help | all sources | **yes** — **already collected** | Body map plus depth gate (where), `DURATIONS` (when), the FPS-R faces screen (how much), and `HELPS.bandage` ("A bandage") and `HELPS.clean-it` ("Someone to clean it"), both `depths: ['surface']`. The two HELPS entries are **adjacent, not redundant**: they record what the child *wants*, and nothing in this packet does. |
| 17 | Number and location of bites | RCH Bites (3) — History: *"Number and location of bites"* | **partial** — **rejected** | Location is the body map. **Number is a count, and counting is banned**: a frightened child asked how many times a dog bit them produces a number a nurse reads as a finding. |
| 18 | **Amount of blood lost; arterial bleeding; whether bleeding is "hard to control"; perfusion of the surrounding tissue; dusky or poorly perfused flaps** | NHS (5) — 999 list: *"the blood comes out in spurts and is bright red and hard to control"*; RCH Lacerations (1) — *"Impairment of blood supply to surrounding tissue… appears dusky or poorly perfused"* | **no — exam** | **The half of item 2 that is not the child's**, recorded here so the split is on the record rather than implied. "Spurts", "bright red" and "hard to control" are three judgements — a flow pattern, a colour, and a comparison against what an adult expects to be able to stop. |
| 19 | Redness; erythema; redness spreading | NHS (5) — *"a cut is swollen, red and getting more painful"*; RCH Cellulitis (4) — *"Soft tissue redness"*, *"surrounding erythema"*; RCH Bites (3) | **no — exam, and banned** | **Carried unchanged from `skin-rash`'s colour ruling and re-argued here because the cost is higher.** "Redness that spreads" is the single most useful early infection sign in source 4, and losing it hurts. It is lost anyway: colour naming is unreliable in a 4-to-7-year-old, and source 1's and NG240's shared observation that skin findings are harder to see on brown, black and tanned skin means a self-reported colour answer would be least reliable for exactly the children the sign is hardest to see on. That is an equity harm with a direction. **Item 6 reaches the pain half of the same red flag and is not a substitute for the colour half.** |
| 20 | **Wound length, depth, edges, contamination grade, body surface area** | NHS (5) — *"a cut is larger than around 5cm (2 inches)"*, *"the wound is very large or deep"*; RCH Cellulitis (4) — *"Large body surface area involved (eg larger than the patient's handprint)"*; Quinn via Bernabe (10) — *"lacerations greater than 5 cm in length"*, *"contaminated lacerations"*, *"non-head and neck lacerations"* | **no — measurement** | Every threshold in this literature is a measurement. A child asked to estimate 5cm produces a number a nurse reads as one. Note that **all three of the only infection predictors located are in this row**, which is why nothing depends on the paper that reported them. |
| 21 | Tetanus immunisation status; allergies; comorbidities; regular medications; immunosuppression | RCH Tetanus (2) — *"Check immunisation history"*, *"Take an immunisation history"*; RCH Bites (3) — *"Immunisation status (particularly tetanus)"*, *"Other medical history: co-morbidities (eg immunosuppression), regular medications, allergies"*; RCH Cellulitis (4) — Red flags | **no — carer or record** | A 7-year-old does not know their tetanus schedule. Source 2 says where this actually comes from — *"A child's immunisation history statement is available … via the child's My Health Record"* — which is a database, not a question. |
| 22 | Burns and scalds; first aid given; cool running water within 3 hours | RCH Burns (9) — the whole guideline; *"Early first aid with a total of 20 minutes of cool running water provides pain relief, decreased cell damage, improved wound healing and decreased scar formation, when delivered within 3 hours of the burn"* | **no — different complaint** | **The brief asked whether burns are covered together with cuts. They are not** — source 9 is a separate guideline that manages burns as a trauma case with a primary and secondary survey and routes on total body surface area. Excluded on the same principle `skin-rash` used for anaphylaxis. **The near-miss, recorded so it is a decision:** *"was it run under cool water?"* is child-reportable, feeds a time-critical treatment, and is the sort of thing only the child and their adult know. It is not carried because a burns packet would have to carry it in a burns context, and asking it inside a cut-and-scrape packet would mean asking every child with a grazed knee about water. |
| 23 | **Non-accidental injury: bruises in unusual places, injuries inconsistent with the story, delayed presentation, patterned injuries, who caused it** | RCH Child abuse (8) — the red-flag examination table and *"Formal interviewing of the child should be done by the relevant specialist service"*; RCH Bites (3) — *"Consider child abuse if there is any suspicion that bite is from a human adult"*; RCH Burns (9) — *"Consider child abuse. Look for pattern of burn and/or inconsistent history"*; Pierce (7) — TEN-4-FACESp | **no — deliberate exclusion** | **See "The safeguarding ruling". No question, in any form, ever.** |
| 24 | Social history: home environment, other household members, supervision around animals | RCH Bites (3) — History, final bullet | **no — carer, and a blame surface** | The one History bullet that is explicitly about the child's home. It is the carer's answer, and a child-facing version — *"was a grown-up watching you?"* — asks a 6-year-old to report on the adequacy of their own supervision, which is an accusation aimed at their family delivered by a tablet. |
| 25 | Time since injury in hours; the "golden period"; delay to disinfection | RCH Tetanus (2) — *"especially if topical disinfection is delayed more than 4 hours"*; RCH Bites (3) — *"within 24 hours … as quickly as 12 hours"*; Quinn via Bernabe (10) — *"the infection rate was the same in those presenting before and after 6 hours"* | **no — unreachable, and contested** | `DURATIONS` has bands, not hours, and this app must never ask a child for a clock time. The one source that tested the threshold found no relationship, which is the rare case where the unreachable criterion may also be the wrong one. |
| 26 | Blood-borne virus exposure after human bites; rabies and lyssavirus prophylaxis | RCH Bites (3) — *"consider the need for post-exposure prophylaxis against blood borne viruses (eg hepatitis B, HIV)"*, and its rabies cross-reference | **no — different pathway, and out of the PG ceiling** | A different pathway with its own guideline, and naming hepatitis or HIV to a 9-year-old in a waiting room is refused on principle regardless of pathway. |
| 27 | Deep structure involvement on exam; clenched-fist injuries; skin edges and tissue loss; abscess; lymphangitis; periorbital, facial, hand, palm and genital involvement; every location-specific repair rule | RCH Lacerations (1) — the per-location management sections; RCH Bites (3) — *"Location of injury. Areas more likely to require specialist surgical involvement are face, hands, feet, genitals"*, *"extensive skin loss (>1cm defect present on attempts to oppose skin edges)"*; RCH Cellulitis (4) — Red flags | **no — exam** | Most of source 1 by volume. **The genital and perineal half is excluded twice over** — it is an examination, and the app must not ask a child about that area at all. |
| 28 | Suturing, glue, strips, staples, sedation, fasting, washout, tetanus immunoglobulin, antibiotic choice, dressings, suture removal intervals | RCH Lacerations (1); RCH Tetanus (2); RCH Bites (3); RCH Cellulitis (4); Bernabe (10) | **no — management** | The majority of the text in five of the eleven sources, and it sits directly in a generator's path. Naming what happens next to a frightened child changes the answer — source 1's own stated risk is that *"A poor result may be achieved in children who are distressed."* |

**Yield: ~75 distinct criteria across 6 clinical practice guidelines, 1 validated
clinical decision rule (out of the app's age range), 1 adult predictor set
reproduced at one remove, and 1 self-report systematic review → 4 clean, 2
partial, ~59 excluded, 5 already asked by a sibling packet on this exact branch,
5 already collected by the app's own screens.**

Compare: head injury ~20 criteria → 5 clean (25%); acute abdominal pain ~46 → 14
(30%); sore throat ~53 → 12 (23%); rash ~55 → 9 (16%); **wound ~75 → 4 clean
(5%).** The lowest proportion in the repository by a wide margin, and the reasons
are structural and stated: the complaint is defined by things you measure (length,
depth, contamination, perfusion), the treatment decisions turn on records the
child has no access to (immunisation status), the one validated rule stops below
the app's youngest user, and the facts that *are* child-reportable and
cross-cutting were mostly claimed by `skin-rash` a day earlier. The limb-pain
packet found four items from eight named rules and said so; this one found four
from six guidelines and says so. **Do not read this as a search that should be
run again harder.** The one thing that would genuinely change it is the Queensland
guideline that returned HTTP 403.

## The safeguarding ruling

The brief required an explicit ruling and expected the answer to be mostly no. It
is entirely no, and the sources are the reason rather than the obstacle.

**What the sources hand you.** Source 8's red-flag table for a child of 24 months
or older lists *"Bruises in TEN-4 FACES P areas · Clustered, large and numerous
bruises or mixed injuries · Bruising with petechiae"*, and among its
concern-raising features *"History of another child causing significant injury"*
and *"Certain injuries with high specificity for abuse eg ear bruising … scald
pattern suggesting immersion, injury to genitalia"*. Source 3 says *"Consider
child abuse if there is any suspicion that bite is from a human adult."* Source 9
says *"Consider child abuse. Look for pattern of burn and/or inconsistent history
eg immersion scald burns, patterned burn by hot object, mechanism not in keeping
with pattern of burn, location of burn, eg back or genitalia."* Source 7 is an
entire validated rule for the question.

**Ruling: no child-facing safeguarding question is written, in any form, ever.**
Five reasons, in descending order of force, and the first two are the sources'
own.

1. **Source 8 says who may ask, and it is not a tablet.** Verbatim: *"Information
   regarding witnessed events, mechanism of injury, previous health and social
   history should be sought from multiple sources including the child. **Questions
   should be open-ended and limited to information that is clinically necessary.
   Formal interviewing of the child should be done by the relevant specialist
   service.**"* A fixed yes/no rendered by `FollowUpScreen` is the exact opposite
   of open-ended, and this app is not a specialist service. A packet that wrote a
   safeguarding question would be contradicting the guideline it cited.
2. **Every abuse criterion in every source read is an examination finding, not a
   history question.** TEN-4-FACESp is *where* the bruise is and *what shape* it
   is, established by *"deliberate head-to-toe skin examination"*. Source 9's is a
   *pattern*. Source 8's are *"Red flag examination findings"* under that literal
   heading. The one criterion that is not an examination — *"inconsistent
   history"* — is a comparison between an account and an injury, and it requires
   both, one of which is the nurse's. **There is nothing here to convert.**
3. **The child may be answering within earshot of the person who hurt them.** The
   setting is a hospital waiting room and a shared tablet. This is not a
   hypothetical about privacy; it is the ordinary case.
4. **A "no" is uninterpretable and a "yes" is unactionable.** A child who is being
   hurt has the strongest possible reason to say no, so a negative answer carries
   no information at all — and unlike NG240's rash, which is at least a *sign*
   whose absence is meaningless, this would be a *disclosure* whose absence would
   look to a reader like a screen that was passed. A yes, meanwhile, lands on a
   nurse's screen with no context, no interviewer, and no protocol attached.
5. **The rule that exists does not apply to these children anyway.** Source 7:
   *"The rule applies only to children with bruising who are younger than 4.0
   years."*

**How this differs from `skin-rash`'s bruise question, and why it is not
reopened.** `skin-rash` ships *"Have you noticed new bruises you don't know how
you got?"* (`r-023`, `unexplained-bruises`, `minAge: 8`). It justified that item
as **haematology, not safeguarding** — source NHSGGC's leukaemia paragraph turns
on *"easy bruising, petechiae (in absence of trauma)"* and its ITP paragraph on
bruising *"in sites of frequent mild trauma"* — and its own packet states
explicitly that *"It is not a safeguarding instrument and must never be presented
as one."* **This packet agrees, reuses it by reference, and adds nothing.** The
difference worth recording is that the two packets reach the same exclusion from
opposite literatures: rash reached it from a haematology differential that
happened to touch NAI, and wound reaches it from a literature where NAI is the
*primary* question and still finds nothing askable. Two independent routes to the
same ruling is stronger evidence for it than either alone.

**And the corollary for the nurse-facing surface**, which is not a wording rule
and cannot be enforced by `screen.mjs`: item 4 ("did an animal or a person bite
you?") will sometimes return a yes that means something serious, because source
3's *"Consider child abuse if there is any suspicion that bite is from a human
adult"* is a real inference from a real answer. **That inference is the nurse's to
make with the whole child in front of them, and the nurse-facing surface must
present item 4's answer with no interpretive framing at all** — no flag, no
highlight, no "human bite" label. Same construction the rash packet applied to
`r-023`.

## The dignity ruling for this body area

The PG ceiling for wounds is not the same as the ceiling for the tummy packet,
and it needs its own statement rather than an inherited vocabulary ban.

**A wound is a thing on a child's body that they are already ashamed of, worried
about, or afraid to look at.** Three specific rulings follow, and each one costs
the packet something real.

1. **No question asks a child to look at, uncover, touch or explore their own
   injury.** Not to see if something is in it, not to see if it is bleeding, not
   to check what colour it is. Item 3 asks what the child *already knows* is in
   there — because they were there when it went in — and must never be worded so
   that a child goes to find out. Source 5's own instruction is *"do not try to
   take it out yourself"*, and the app is worse placed to supervise that than a
   parent reading a webpage. **Cost:** the contamination question is weaker than
   it could be.
2. **No question asks about pus, discharge, or what is on the dressing** (item
   12). This is the project's existing ban on asking a child to look at what came
   out of them, applied to a new body area rather than reinvented for it, and it
   is reinforced here by the dressing problem: a child asked about pus in a
   waiting room will peel the dressing off to answer. **Cost:** the 111 list's
   *"pus is coming out of it"* is lost entirely, and it is a genuine infection
   sign.
3. **No question touches genital, perineal or buttock injury**, even though
   source 3 names *"genitals"* among the locations most likely to need specialist
   involvement and source 9 names *"genitalia"* and *"back"* among the burn
   locations that raise abuse concern. A child with an injury there needs an adult
   in a room, not a tablet in a corridor, and a question about it — from a
   machine, in public, with no way to respond to the answer — would be a harm in
   itself. **Cost:** none that this app could have collected safely.

**And one thing that is *not* banned, stated so a generator does not
over-correct.** A cut, a scrape and a bruise are ordinary childhood objects with
ordinary childhood words, and this packet's register is deliberately plain. "Cut",
"scrape", "bruise", "bleeding", "splinter", "gravel", "glass", "bite" are all
words a 5-year-old owns and all of them are permitted. The banned register is the
*clinical* one — "wound", "laceration", "abrasion", "contamination", "foreign
body" — and the *frightening* one — "tetanus", "infection", "stitches", "needle".

## Wording cautions

Ban **concepts**, not phrasings. Every caution below is transcribed into
`meta.bannedPhrases` as a `[regexSource, why]` pair; a caution that lives only in
prose is not enforced by `scripts/screen.mjs`.

- **Never name a diagnosis or a complication.** Not tetanus, lockjaw, sepsis,
  blood poisoning, cellulitis, necrotising fasciitis, flesh-eating, gangrene,
  rabies, MRSA, hepatitis, HIV, abscess, lymphangitis. Every source here writes in
  this register, and "tetanus", "rabies" and "blood poisoning" are words a child
  has heard in a frightening context.
- **Never say "infected", "infection", "germs" or "bacteria".** A child told their
  cut might be infected has been given a reason to be frightened before they
  answer, and a frightened answer is not a fact. Item 6 asks whether it hurts more
  than before and never names what that would mean.
- **Never ask a child to touch, press, open or explore their own injury, and above
  all never to take anything out of it.** Source 5's own instruction to an adult
  reader is *"do not try to take it out yourself"*. This also carries `skin-rash`'s
  ban on pressing on skin, for that packet's reason as well as this one's.
- **Never ask a child to take off a dressing or look under a Band-Aid.** Source 1
  dresses wounds precisely so they stay covered. An uncovered wound in a corridor
  is a harm the question would cause, not merely a bad answer.
- **Never ask about pus, ooze, weeping, discharge, crusting, or what is on the
  dressing.** The dignity ruling, above.
- **Never ask a child to estimate how much blood there is, or to count anything.**
  Not "how much blood", not "is it a lot", not "how many bites". Source 5's
  arterial criterion is a clinician's judgement, and `screen.mjs` already rejects
  "a lot" universally. Item 2 asks only whether blood is coming out now.
- **Never ask about size or depth.** Source 5 routes on *"larger than around 5cm
  (2 inches)"*, source 4 on *"larger than the patient's handprint"*, Quinn on
  *"greater than 5 cm"*. A child asked to estimate a centimetre produces a number
  a nurse reads as a measurement.
- **Never ask the colour of anything.** Carried unchanged from `skin-rash` and
  re-argued in item 19, where the cost is higher: it takes "redness that spreads"
  out of the packet.
- **Never ask who caused an injury, whether anyone hurt the child, whether it was
  on purpose, or whether the child is frightened of anyone.** The safeguarding
  ruling.
- **Never name what happens next.** Not stitches, sutures, glue, staples, needles,
  injections, jabs, shots, vaccination, surgery, sedation, anaesthetic, scrubbing,
  washout, antibiotics. Sources 1–4 are mostly management text and it sits
  directly in a generator's path. A child who works out that the answer decides
  whether they get a needle will answer the needle.
- **Never use clinical register for a cut.** Not wound, laceration, abrasion,
  contamination, foreign body, haemorrhage, avulsion, puncture, perfusion,
  erythema, suppuration, devitalised. Say "cut", "scrape", "bruise".
- **Never ask a child to classify the animal that bit them.** Source 5's *"a wild
  or stray animal"* asks a 6-year-old to judge whether the dog was somebody's pet.
  "Stray", "wild animal", "rabid", "feral" and "vicious" are banned; item 4 asks
  only whether an animal or a person bit them.
- **Never invite a child to account for having caused their own injury.** Not "was
  it dirty?", not "were you playing somewhere you shouldn't?", not "whose fault
  was it?". Source 2's tetanus trigger is soil and dust, and the tempting question
  is an accusation delivered by a tablet. Same argument the headache packet used
  when it banned "did you skip lunch?".
- **Never use British or Australian idiom, and this packet is the worst case in
  the repository for it** — every guideline source is RCH Melbourne or the NHS.
  Banned: **graze** (US: "scrape"), **plaster** (US: "Band-Aid"), **casualty**,
  **A&E** (US: "the ER"), **whilst**, **poorly**, **off colour**, **unwell**, **in
  hospital** (US: "at the hospital"), **paracetamol**, **trolley**, **tea towel**,
  **have you got** (US: "do you have"), **nappy**, **GP**.
- **Never say "genitals", "private parts", "down there", "bottom" or "bum".** The
  dignity ruling.
- **Never mention burns, scalds, hot water, fire or sunburn.** Burns are excluded
  as a different complaint; a generator reading source 9's history list would
  otherwise write burn questions into a cut-and-scrape packet.
- **Never ask for hours, minutes or a clock time.** Source 2's threshold is 4
  hours, source 3's is 12–24, and the one study that tested the 6-hour "golden
  period" found no difference. `DURATIONS` is the only time this app collects.
- **Never ask a child to rate or grade anything in words.** Already banned
  globally; re-stated because source 4 grades cellulitis mild / moderate / severe
  and those bands sit in the generator's path.
- Avoid **"still"** (rejected globally as assuming it was already true — this is
  why item 2 is *"Is it bleeding now?"*), and **"serious", "dangerous", "bad",
  "severe"** (rejected globally).

## Decisions

**Decided, not deferred.**

1. **Register: US English, consistent with every shipped packet.** Wounds are a
   new vocabulary domain and the sources are wholly British and Australian, so the
   ruling is made before anything is generated:
   - **"a cut or a scrape"** — both, always, in that order. Never "graze", never
     "wound", never "laceration". The app's own `limb-see` already says "cut", and
     `SENSATIONS.aching` ("Sore") is the register.
   - **"bleeding"** — the plain word. Never "haemorrhage", never "blood loss",
     never "losing blood".
   - **"something in it"**, with concrete examples — **"glass", "gravel", "a
     splinter"**. Never "foreign body", never "debris", never "contamination".
   - **"bite"** / **"bit you"** — the plain verb. Never "animal attack", never
     "mauled", and never "stray" or "wild".
   - **"move it"** — carried in spirit from limb's `can-move` ("Can you still move
     it okay?"), with "still" dropped because it is globally rejected.
   - **"Band-Aid"** if a dressing is ever named — never "plaster". `HELPS.bandage`
     already says "A bandage", which is the register. Nothing in v1 names one.
   - **"bruise"** — the plain word, carried unchanged from `skin-rash`, which ruled
     it the only morphology word permitted because it is not a colour claim.
2. **Answer types: all six items are yes/no.** `FollowUpScreen` renders `yesno`,
   `count`, `text` and `voice`, so this is a choice and not a constraint — and it
   is a choice source 11 supports directly: *"Children ≤ 7 years old think
   dichotomously so need two response options."* The two facts that would want a
   widget (how many bites, how big the cut) are both banned by decision 1's parent
   rulings, so the question never arises.
3. **`depth: "surface"`, `groups` is the full list of nine, `mechanism:
   "injury"`.** The depth scope is what stops these questions reaching a child
   whose pain is deep inside. The mechanism field is inert in eight of nine
   contexts and earns its place in one: it keeps this packet away from a child with
   a headache and no bump, and it is what lets this packet reach group `head` at
   all, which `skin-rash` cannot. Fully worked in Scope and in `meta.gateNote`.
4. **`packetRank: 40` — this packet leads the round-robin against `skin-rash`
   (50).** The interaction, worked explicitly because the brief required it:
   - **They coexist and always will.** Both are `depth: surface`, both serve all
     nine groups, both have `homeGroup: 'skin'`, so in every group they land in
     the same non-home-group tier of `bankQuestions` and are spent **round-robin**.
     `meta.mechanism` does not separate them: it filters only in `head` and `limb`
     (`GROUP_GATE`), and in `limb` only on the *inside* branch — so **in the other
     seven groups mechanism does nothing and both packets are live regardless**.
   - **Lower rank picks first, not everything.** At 40 against 50 this packet takes
     the odd slots and `skin-rash` the even ones. The choice costs one slot, not a
     packet.
   - **Why wound leads.** `skin-rash`'s own packet argues that a "no" to its lead
     item is not reassurance (NG240 1.1.10) and that the fact its literature routes
     on — blanching — cannot be asked of a child in any form. By its own argument
     its lead question cannot close anything. This packet's lead item can: a "yes"
     sends the nurse to something that needs cleaning, exploring and a tetanus
     decision. And item 2 is the only **999-level** fact in either packet that only
     the child can supply while sitting in a waiting room. Second reason: every one
     of this packet's six items carries a fact no other packet holds, while five of
     the facts it might have asked are already asked by `skin-rash` and
     `general-unwell` — so `skin-rash` keeps its shared-fact coverage whichever
     order is used, and putting the packet with zero shared facts first is what a
     short cap gets the most out of.
   - **What a child with a scraped knee loses if `skin-rash` leads.** With the cap
     spent **across** every group the child tapped, a child who taps two groups may
     reach only two or three bank questions in total. If rash leads, those are
     *"Have you got spots or a rash?"* and *"Are there more spots than when it
     started?"* — and a child who came in with a bleeding knee is asked twice about
     spots and never about the knee. Every wound item shifts down one slot, so item
     2 (bleeding now) falls to fourth. **The loss is concrete: the difference
     between a nurse learning that a wound is actively bleeding and learning that
     the child does not have a rash.**
   - **The cost of this decision, stated because a reviewer may reverse it.**
     `skin-rash` items 3, 4 and 5 — hard to breathe, hard to turn your head, bright
     lights — are its meningococcal and anaphylaxis half, and each now falls one
     slot later. Meningococcal disease kills faster than a wound infection does.
     The counter is that round-robin delays those items by one slot rather than
     removing them, while rash leading can cost a bleeding child their only
     bleeding question. **Proposed, not yet confirmed by review.**
5. **Duration scope, and it is narrow.** Source 5: *"Most cuts and grazes will
   start to heal in a few days."* No source read describes a chronic wound in a
   child.
   - `just-now`, `this-morning`, `yesterday`, `few-days` — **full packet.**
   - `not-sure` — **full packet.** Same convention as every previous packet:
     `not-sure` means the child cannot date it, not that it is old.
   - `long-time` — **items 1, 3 and 6 only.** Item 1 because without it the other
     two have no referent; item 3 because source 2 names *"Wounds containing
     foreign bodies (especially wood splinters)"* and a splinter left in for weeks
     is a real presentation; item 6 because infection is what turns an old wound
     into a presentation. **Items 2, 4 and 5 expire**: a wound bleeding weeks later
     is a bleeding-disorder question this packet is not sourced for, source 3 puts
     bite infection at 12–24 hours, and a tendon injury presenting late is found by
     examination.
6. **Item priority.** Six items compete for five slots (`young`, or unknown age)
   or six (`older`), spent **across** every group the child tapped. Never ask two
   questions from the same item. Order:

   `1 (cut or scrape) → 2 (bleeding now) → 3 (something in it) →`
   `4 (bitten) → 5 (can you move it) → 6 (hurts more than before)`

   Ordered by how fast the thing each points at causes harm, the same rule
   `skin-rash` used. Item 1 leads because it establishes the complaint and closes
   `limb-see`'s open half. Items 2, 3 and 5 are three of source 5's six 999-list
   entries. Item 4 is the 111 list and changes three treatment decisions. Item 6 is
   last because wound infection develops over hours to days. **Note what the cap
   does: item 6 never reaches a child under 8 even in a skin-only report, and a
   child who taps two groups may reach only items 1 and 2.** **Proposed, not yet
   confirmed by review.**
7. **Age floors: none, and the empty object is a decision.** Two were considered
   and rejected. A **validity** floor of 5 on everything, from source 11's
   *"Children < 5 years old cannot validly and reliably self-report health
   outcomes"* — rejected under brief §4, because that finding is about
   psychometric outcome *measures* (scales, response formats, recall periods) and
   every item here is plain history in sources 1, 3 and 5, none of which sets any
   floor; a validity floor on an item that is also plain history in a guideline
   setting no floor is an invention. A **capability** floor of 8 on item 6, from
   source 11's *"children under 8 years old cannot understand the concept of a
   week"* — rejected because item 6 asks for a comparison against a remembered
   moment ("than before"), not a named recall period, which is the distinction the
   headache packet drew when it banned "than usual" and permitted "than before".
   **The honest statement: this packet has no evidence in either direction about a
   4- or 5-year-old reporting any of these six facts.** Source 11 is the closest
   thing to evidence found and it is a warning about the `young` tier, not a
   licence for it. Recorded as `JUDGEMENT, NOT A CITATION`.
8. **Item 7's floor is `skin-rash`'s and is not touched.** `r-023` carries
   `minAge: 8` on the packet-author's own judgement. This packet neither re-asks
   the question nor lowers the floor.
9. **Facts are coined, and every one of them is new — which is itself the
   finding.** Items 1–5 carry `cut-or-scrape`, `bleeding-now`, `something-in-it`,
   `bitten` and `wound-move`; item 6 is untagged. **This packet shares no fact with
   any packet in the bank**, because everything it could have shared is already
   asked to its exact audience. The seven rulings the brief asked for are in
   "What is already asked" and in `meta.factsNote`, each verified against
   `src/data/bank.js`: `bumped-it`, `unexplained-bruises`, `puffy-swollen`,
   `feels-feverish` and `blisters` are **already asked here and not re-asked**;
   `limb-swelling` and `swelling-location` **must not be merged** because PLAN.md
   merges a fact only when it is systemic and both are region-specific. Item 5
   likewise does **not** take `limb-use`: the two can never both fire (one is
   `surface`, one `inside`), but merging them would let a question about a cut hand
   suppress a question about a limp. Item 6 is untagged following the project's
   settled convention for region-specific trajectory questions.
10. **Redundancy against what the app already collects.** Checked item by item
    against body region, depth, intensity, duration, sensations, mood and every
    other group's hand-written and packet-sourced questions. The results are the
    "already asked" and "already collected" rows of the items table — **ten of the
    twenty-eight rows**, which is the largest such block in any packet so far and
    the direct cause of the yield. Three specific calls:
    - **Item 6 versus `SENSATIONS.aching` and the FPS-R screen.** The sensation
      screen collects *that* it is sore and the faces screen collects *how much*.
      Neither collects a **direction**, and direction is the entire content of
      source 5's *"getting more painful"*. Kept.
    - **Item 5 versus `can-move`.** Different depth branches; they cannot collide.
      Kept, with its own fact.
    - **Item 2 versus nothing.** Nothing in the app asks about bleeding, at any
      depth, in any group. This is the clearest gap the packet fills.
11. **Nothing in this packet is described as clinically reviewed or scientifically
    validated.** The word "validated" appears only in source 7's own title and in
    quotations from it. The repository owner is a secondary-school student and no
    clinician has read a word of this. It is a literature trace: it says what
    published guidelines assess and which of those a child could answer. The two
    sentences a reviewer should keep in mind while reading anything above are
    source 7's *"The rule applies only to children with bruising who are younger
    than 4.0 years"* and source 1's *"A poor result may be achieved in children who
    are distressed."*

## Still open

- **`SENSATIONS.tingly` is `tiers: ['older']`, so a 999-level red flag is
  collected from 8-year-olds and from nobody younger.** Source 5's *"you lose
  feeling near the wound"* is one of six criteria on its immediate-action list, and
  a 5-year-old with a numb fingertip after a cut is asked about it by nothing at
  all. This packet deliberately does **not** write a numbness item, because
  duplicating a sensation the app already offers to half its users would be worse
  than the gap; the fix is a one-word change to `vocab.js` (`tiers: ['young',
  'older']`) and a decision about whether "Fuzzy feeling" means anything to a
  5-year-old. **The sharpest single gap this packet found.**
- **`limb-see` still has no `fact`.** Item 1 supersedes its cut half, but only if
  `fact: 'cut-or-scrape'` is added to the hand-written entry in
  `src/data/vocab.js`. Until then a child who taps their arm at depth `surface` is
  asked about a cut twice under two ids — the same unfixed dedupe bug `skin-rash`
  recorded for `s-021`. One line; this run writes only two files.
- **"Unwell" is banned here and shipped by `skin-rash`.** This packet bans it as
  British idiom, following `head/headache`'s ban and the brief's explicit
  instruction. `skin-rash` decision 1 rules the opposite, carrying "unwell"
  unchanged from limb's `l-019` on the grounds that it is already reviewed. **Both
  cannot be right and the repository currently ships both.** A project-wide ruling
  is needed; this packet is not the place to make it unilaterally, but the
  inconsistency is now visible in two sidecars.
- **Two independent sources now report that young children cannot use the
  `DURATIONS` band the app calls "Since yesterday".** Source 11: *"children under
  8 years old cannot understand the concept of a week … and some could not
  understand the term 'yesterday'."* `skin-rash`'s Paller found the same for "the
  previous 24 h". `DURATIONS` is a shared screen and no packet owns it.
- **The Queensland Health "Acute Minor Wound Management" guideline returned HTTP
  403.** It is the one document that could materially change this packet's yield,
  because a second complaint-organised Search B source would test whether source
  5's eleven family-facing red flags are the whole set or only the NHS's version of
  it. A future run should retry it, or find another government minor-injury
  guideline that is not behind a bot wall.
- **Burns have no packet and no route.** Source 9 is a full paediatric guideline
  with a genuinely child-reportable, time-critical first-aid question (*was it run
  under cool water, within 3 hours*), and this packet excludes it as a different
  complaint. A child who arrives with a scald taps "on my skin" and is currently
  offered rash questions and wound questions, neither of which fits. Not on the
  roadmap.
- **Whether `packetRank: 40` is right.** Decision 4 sets it and states its cost:
  `skin-rash`'s meningococcal items each fall one slot later. This is the decision
  in the packet most likely to be reversed by a reviewer, and reversing it is a
  one-character change.
