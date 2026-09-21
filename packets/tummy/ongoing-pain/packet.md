# Ongoing or recurring tummy pain

Presenting complaint · packet `tummy-ongoing` · serves group `tummy`, depth
`inside` · packet v1 · assembled 2026-09-08
Status: **not yet clinically reviewed** · sources verified first-hand: 6 of 7

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
> whose tummy has been hurting for weeks or months, and marks which of those a
> child can report about themselves. **Not** a diagnostic tool: nothing here may
> be scored, summed, or shown to a child or nurse as a suggested cause.

## Read this before anything else — three weaknesses stated up front

**1. Rome IV itself was not read.** The Rome IV paediatric criteria are
published in Hyams et al., *Gastroenterology* 2016;150(6):1456–1468, which is
paywalled. Every Rome IV criterion quoted in this packet is quoted **at one
remove**, from three sources that were read (AFP source 3 reproduces the
criteria as running text; StatPearls source 4 and RCH source 1 restate them).
Source 7 is marked `CITED, NOT READ` and no item depends on it alone. Where the
three second-hand renderings agree word for word, they are quoted; where they
differ, the difference is recorded rather than resolved.

**2. The alarm features this packet is built around are evidence quality D.**
That is the sources' own grading, not this packet's opinion. NASPGHAN
(source 2), verbatim:

> "Alarm symptoms or signs include, but are not limited to, involuntary weight
> loss, deceleration of linear growth, gastrointestinal blood loss, significant
> vomiting, chronic severe diarrhea, persistent right upper or right lower
> quadrant pain, unexplained fever and family history of inflammatory bowel
> disease **(evidence quality D)**."

And on the associated symptoms this packet mostly declines to ask:

> "There are insufficient data to determine whether the presence of associated
> symptoms can help the physician distinguish between functional and organic
> disorders (evidence quality C)."

**3. Most of the alarm features cannot be asked here at all.** That is this
packet's central finding and it has its own section below. Of the eight alarm
features NASPGHAN names, **one** — persistent right-sided pain — survives, and
only in a mutilated form; the strongest-measured one, weight loss, is refused
outright on the content ceiling.

## Scope

**Duration — the reason this packet exists.** Decided in decision 4. This
packet is scoped to `few-days`, `not-sure` and `long-time` and **does not
compete in `just-now`, `this-morning` or `yesterday` at all.** `tummy/acute-pain`
owns those bands and its literature is appendicitis literature.

The measured fact this rests on, recorded in `packets/PLAN.md` on 2026-09-07:
the `long-time` band holds **one** `tummy/acute-pain` question against 14 in the
acute bands. A child whose tummy has hurt for two months is currently asked
almost nothing by the packet that serves their body region.

**Age.** App covers 4–12. **No source read here sets an age floor.** StatPearls
scopes its approach to *"children aged 4 to 18 years with chronic abdominal
pain"*; RCH sets none; NASPGHAN's Apley criteria were derived on unselected
school children. One item carries a floor and it is this packet's own judgement,
not a citation — see decision 8.

**Depth.** `inside`. No rash, spot, skin or itch criterion is carried, even
though RCH lists *"Extraintestinal manifestations of IBD (eyes, skin, joints,
perianal)"* among the things it collects. Item 9 (mouth sores) is the one
borderline case and is discussed in its row.

**Out of scope by age or setting, and not carried:** menstrual, sexual and
contraceptive history (RCH collects all three); HEADSSS psychosocial screening
(RCH instructs it explicitly); pubertal staging; anything requiring growth
charts, abdominal examination, faecal calprotectin, occult blood, endoscopy or
imaging.

## Sources

1. **The Royal Children's Hospital Melbourne, Clinical Practice Guideline,
   "Abdominal pain — chronic"**, PIC Endorsed. **Read first-hand** via
   `scripts/fetch-source.mjs`. **This is Search B** — the guideline organised by
   the presenting complaint rather than by a diagnosis, and the sibling document
   to the "Abdominal pain — acute" guideline that `tummy/acute-pain` used. It
   supplies the duration definition, the history list, the red-flag list and the
   differential table, and it is the only source that gives a plain-English gloss
   for dysphagia, which is where item 6's wording comes from.
2. **American Academy of Pediatrics Subcommittee on Chronic Abdominal Pain and
   NASPGHAN Committee on Abdominal Pain.** "Chronic Abdominal Pain In Children:
   A Technical Report." *J Pediatr Gastroenterol Nutr* 2005;40(3):245–248 and
   supporting technical report. **Read first-hand** from the NASPGHAN-hosted
   open-access PDF. The source of the canonical alarm-feature list, of the
   evidence gradings quoted above, and of the Apley definitions in Table 1.
   **Caveat: it is a 2005 document and predates Rome III and Rome IV.** It is
   used for the alarm features and the definitions, which are unchanged in the
   later sources, and not for the classification.
3. **Reust CE, Williams A.** "Recurrent Abdominal Pain in Children."
   *Am Fam Physician* 2018;97(12):785–793. **Read first-hand** via aafp.org.
   The most useful single artefact here: Table 1 gives the competing duration
   definitions side by side, Table 4 gives the alarm-finding list in one block,
   and the Rome IV criteria for all four subtypes are reproduced as running
   text. It also supplies the only validation figures found — which alarm
   findings actually predicted organic disease.
4. **StatPearls, "Functional Abdominal Pain in Children"**, NCBI Bookshelf
   NBK537298. **Read first-hand.** Contributes the Rome IV definition, the
   red-flag review of systems, and — uniquely — an explicit statement about what
   young children can and cannot do when describing pain location, which is what
   item 5's age floor rests on.
5. **Liu J, Wu B, et al.** "Diagnostic efficacy of fecal markers combined with
   alarm symptoms in distinguishing functional and organic abdominal pain in
   children." *Front Pediatr* 2025;13:1707990. **Read first-hand** via
   Europe PMC (PMC12816174). **This is Search A** — the comparison and
   validation study. 571 children with chronic abdominal pain, 347 functional
   and 224 organic, with each alarm symptom tabulated separately with an odds
   ratio. It is the only source that measures the individual alarm features
   rather than listing them, and it is what makes the "which alarm features
   survive" section quantitative rather than rhetorical. **Caveats: single
   centre, retrospective, 2017–2020, and a referral population** — these are
   children who reached a paediatric gastroenterology service, not children in
   a waiting room, so its prevalences are not this app's prevalences.
6. **ICHD-3, 1.6.1.2 Abdominal migraine** (within *1.6 Episodic syndromes that
   may be associated with migraine*). **Read first-hand** at `ichd-3.org`.
   Read again here rather than taken from `head/headache`, because the ruling
   there ran the other way — see "Abdominal migraine, revisited" below.
7. **Hyams JS, Di Lorenzo C, Saps M, Shulman RJ, Staiano A, van Tilburg M.**
   "Childhood Functional Gastrointestinal Disorders: Child/Adolescent."
   *Gastroenterology* 2016;150(6):1456–1468. **CITED, NOT READ** — paywalled,
   and no attempt was made to obtain it by any other route. This is the primary
   publication of the Rome IV paediatric criteria. **What depends on it:**
   nothing directly. Every Rome IV criterion in this packet is quoted from
   sources 1, 3 and 4, all of which were read and all of which restate it. It is
   named because sources 1, 3, 4 and 5 all cite it and a reader is entitled to
   know that the primary text was not opened.

**Also consulted and used only to check a boundary.** Vandenplas Y, Darma A,
et al., "Understanding functional abdominal pain disorders among children: a
multidisciplinary expert consensus statement", *Front Pediatr*
2025;13:1576698, **read first-hand** via PMC12108103 (it is
`tummy/acute-pain`'s source 8). It is **not counted in the 6-of-7 figure and no
item cites it**, because its red-flag list lives in a figure that does not
extract — the same failure `tummy/acute-pain` recorded — and the only red flags
recoverable from its prose are *"unexplained weight loss, delayed puberty, and
GI blood loss"*, all three of which this packet refuses. Its one usable
contribution is negative and appears in the psychosocial exclusion below.

## The criteria, as published

### Duration — three definitions, and they disagree (sources 1, 2, 3)

This is a **scope disagreement** in the brief's sense: it changes which children
the packet applies to, not how a question is worded, so it is resolved
explicitly in decision 4 rather than silently.

| Source | Definition, verbatim |
|--------|----------------------|
| RCH (1) | *"Chronic abdominal pain is intermittent or constant abdominal pain that has been present for at least two months"* |
| AFP (3), Table 1 | Recurrent abdominal pain: *"At least three episodes of pain over at least three months that are severe enough to affect the child's ability to perform normal activities"* |
| NASPGHAN (2), Table 1 | *"Recurrent abdominal pain as defined by Apley: 3 or more episodes of abdominal pain, over a period of 3 or more mo, severe enough to affect activities."* And: *"Chronic abdominal pain: Abdominal pain with a minimum duration of 3 mo. Some clinicians believe that pain that lasts more than 1–2 mo is chronic"* |
| Rome IV, via (3) and (4) | *"at least four times per month for a minimum of 2 months"* |

NASPGHAN's own sentence — *"Some clinicians believe that pain that lasts more
than 1–2 mo is chronic"* — is a source admitting the boundary is unfixed. The
app has six duration bands and none of them is two months, so no threshold here
is reachable. Decision 4 maps the bands instead.

NASPGHAN also warns about the term itself, verbatim: *"RAP: A common
abbreviation for recurrent abdominal pain … **Many physicians incorrectly use
this term to imply functional abdominal pain.**"*

### Rome IV, quoted at one remove from AFP (source 3)

> "**Abdominal migraine:** at least two paroxysmal episodes over six months of
> intense periumbilical, midline, or diffuse abdominal pain lasting for more
> than one hour and affecting normal activities, and pain associated with two or
> more additional symptoms (anorexia, nausea, vomiting, headache, photophobia,
> or pallor)
>
> **Functional dyspepsia:** postprandial fullness, early satiation, epigastric
> pain, or burning not associated with defecation on at least four days per
> month for at least two months
>
> **Irritable bowel syndrome:** abdominal pain at least four days per month for
> at least two months that is associated with defecation or with a change in
> frequency or form of stools, and in children with constipation, pain does not
> resolve with resolution [of the constipation]
>
> **Functional abdominal pain–not otherwise specified:** occurs at least four
> times per month for at least two months and includes episodic or continuous
> abdominal pain not associated with eating or menses; does not meet criteria
> for pain with dyspepsia, irritable bowel syndrome, or abdominal migraine"

StatPearls (4) renders the last of those as *"episodic or continuous pain
occurring at least 4 times per month for 2 months, not limited to physiological
events such as eating or menses, and unexplained by another medical condition
after an appropriate evaluation."* The renderings agree; note that **"not
associated with eating" and "not limited to physiological events such as
eating" are not quite the same claim**, and the packet takes the weaker of the
two.

RCH (1) gives the same four subtypes as a differential table:

> "**Irritable bowel syndrome** · Abdominal pain at least 4 days per month,
> associated with change in bowel habit · Pain associated with change in
> frequency or form of stool · Pain related to defecation
>
> **Abdominal migraine** · Stereotypical, paroxysmal episodes of periumbilical
> or diffuse abdominal pain with few or no GI complaints between attacks ·
> Migraine in child (or family)
>
> **Functional dyspepsia** · Bothersome postprandial fullness · Early satiety ·
> Epigastric pain and burning not associated with bowel habit
>
> **Non-specific abdominal pain/functional abdominal pain (not otherwise
> specified)** · No obvious organic aetiology · … Episodic or continuous · Not
> associated with change in stool frequency/consistency"

### The alarm features, in four renderings

**NASPGHAN (2), verbatim** — quoted in full at the top of this document.

**AFP (3), Table 4, "Alarm Findings in Children with Recurrent Abdominal
Pain", verbatim and complete:**

> "Chronic, severe, or nocturnal diarrhea · Genitourinary tract symptoms ·
> Deceleration of linear growth · Involuntary weight loss · Delayed puberty ·
> **Pain that wakes the child from sleep** · Dysphagia · Persistent right upper
> or lower quadrant pain · Family history of inflammatory bowel, celiac, or
> peptic ulcer disease · Significant vomiting · Gastrointestinal blood loss ·
> Unexplained fever"

**RCH (1), History section, verbatim:**

> "Pain characteristics (location, time course, triggers, association with
> meals, **pain waking the child from sleep**) · Associated symptoms:
> unintentional weight loss/stunting of height · unexplained fever · changes in
> bowel habit, chronic diarrhoea, blood in stools · nocturnal stooling ·
> appetite changes · dysphagia (the sensation of food sticking, or moving
> slowly down the oesophagus) · … urinary symptoms · extraintestinal
> manifestations of inflammatory bowel disease (IBD) (eyes, skin, joints,
> perianal) · History of reflux symptoms (heartburn, waterbrash,
> regurgitation) · Dietary history (including foods excluded from diet) ·
> Menstrual history, sexual history and contraception (if relevant) · Family
> history of IBD or coeliac disease · HEADSSS screen · Functional impact of pain
> on usual activities (eg school attendance, social activities, physical
> activity)"

**StatPearls (4), verbatim, in two places:**

> "The review of systems should include potential 'red flag' symptoms such as
> blood in the stool, persistent vomiting, dysphagia, odynophagia, nocturnal
> diarrhea, unintentional weight loss, growth delay, unexplained fever, signs of
> abuse, referred pain, jaundice or other[s]"

> "Consideration should be given to 'red flag' symptoms such as a fever, sudden
> worsening, young age, **pain causing wakening from sleep**, bloody stools,
> anemia, and weight loss or growth faltering."

**Four sources, four lists, and exactly one item appears in three of them in a
form a child can answer about themselves: pain that wakes the child from
sleep.** That is item 1, and it is why item 1 leads.

### What the alarm features are actually worth (source 5)

Source 5 is the only one that measured them individually. 224 children with
organic disease against 347 with functional pain; percentages are of the organic
group, odds ratios are organic vs functional:

> "The most common alarm symptom was vomiting (14.5%), followed by weight loss
> (14%), positive family history (*Helicobacter pylori* (HP) infection/gastric
> ulcer/IBD, 13%), diarrhea (10.5%), and bloody stool (9.5%)."

| Alarm symptom | Organic / functional | OR (95% CI) |
|---|---|---|
| Weight loss | 69/224 vs 11/347 | **13.60 (7.00–26.42)** |
| Bloody stool | 47/224 vs 7/347 | **12.90 (5.71–29.73)** |
| Perianal lesions | 13/224 vs 1/347 | 21.32 (2.77–164.13) |
| Retardation of growth | 10/224 vs 12/347 | 7.83 (1.70–36.07) |
| Vomiting | 54/224 vs 29/347 | 3.48 (2.14–5.68) |
| Abdominal distention | 18/224 vs 12/347 | 2.44 (1.15–5.17) |
| Delayed puberty | 2/224 vs 0/347 | not significant (p = 0.153) |
| Oral ulcer | 7/224 vs 0/347 | p = 0.001 |

And the headline finding, verbatim: *"Alarm symptoms appeared and were strongly
associated particularly with vomiting, weight loss, diarrhea, and bloody stool,
which are highly indicative of organic pathology."*

**Read that table against the content ceiling and the reason this packet is
short becomes arithmetic rather than argument.** The two best-performing alarm
symptoms in the only study that measured them — weight loss and bloody stool —
are both banned. The third is perianal disease, also banned. The fourth,
vomiting, is already asked by a sibling packet. Nothing in the surviving set has
a measured odds ratio at all.

AFP (3) reports the other validation available, and it is not encouraging:

> "Alarm symptoms and laboratory and diagnostic workup findings do not reliably
> distinguish organic from nonorganic disease in children with recurrent
> abdominal pain. However, organic disease is suggested by the presence of fever
> (P ≤ .05), vomiting (P < .10), blood in the stool (P < .10), **more than three
> alarm findings** (P ≤ .05), or history of urinary tract infections (P ≤ .05)."

*More than three alarm findings* is a count across a list this packet can only
partly ask. That limitation is stated again in "Still open".

## The alarm features that could not be asked, and why

**This section is the finding.** The brief demanded these be written out rather
than quietly dropped, and the list is longer than the list of survivors.

| Alarm feature | Sources | Ruling | Why |
|---|---|---|---|
| **Involuntary weight loss** | 2, 3, 4, 5, RCH's *"unintentional weight loss"* | **REFUSED — content ceiling** | Body weight is banned as a *concept* across this app, and this is the case that tests the ban hardest: it is the best-measured alarm feature in the literature (OR 13.60). It is still refused. A child alone on a shared hospital tablet cannot be asked to account for their body, and the nurse has the scales — this is a fact the clinical side already holds, so refusing it loses less than it appears to. |
| **Deceleration of linear growth / stunting of height / growth faltering** | 2, 3, 4, RCH | **REFUSED — not self-reportable, and ceiling** | A velocity computed from at least two points on a chart. Not a fact a child has. RCH files it under *"Examination: Weight and height, preferably over time"*. |
| **Delayed puberty** | 3, 4, 5, Vandenplas | **REFUSED — out of scope by age, and ceiling** | The app stops at 12, and source 5 found it in 2 of 571 children with no significant difference. |
| **Gastrointestinal blood loss / bloody stool / hematochezia** | 2, 3, 4, 5 | **REFUSED — content ceiling** | OR 12.90, and refused anyway. The only way a child answers it is by having looked at what came out of them, which is banned. Note the deliberate asymmetry with `tummy/acute-pain` item 11, which *does* ship in the acute bands: there it is one frightening event a child noticed; here it would be a standing instruction to inspect yourself over months. |
| **Family history of IBD, coeliac, peptic ulcer, H. pylori; migraine in the family** | 2, 3, 5, RCH | **REFUSED — not the child's to report** | Third commonest alarm symptom in source 5 at 13%. It belongs on a carer surface. |
| **Perianal / perirectal disease** | 2 (*"perirectal disease"*), 5 (OR 21.32), RCH (*"perianal"*) | **REFUSED — examination, and ceiling** | The highest odds ratio in source 5's table, on 13 children with a confidence interval from 2.77 to 164.13. It is an examination of a region this app has no body-map tile for and will not ask about. |
| **Nocturnal stooling / nocturnal diarrhea** | 3 (*"Chronic, severe, or nocturnal diarrhea"*), 4, RCH (*"nocturnal stooling"*) | **REFUSED — counting toilet trips** | The *nocturnal* qualifier is the whole discriminating power of the item and the only way to get it is to ask a child how many times they get up in the night to use the toilet. Banned, and the ban is enforced by a regex. |
| **Change in frequency or form of stools** (the second half of the Rome IV IBS criterion) | 1, 3, Rome IV | **REFUSED — counting, and inspection** | *Frequency* is the counting ban; *form* cannot be reported without looking. The first half of the same sentence — pain related to defecation — survives as item 7. |
| **Withholding, encopresis, stool streaking, time spent on the toilet** | 4 | **REFUSED — content ceiling** | StatPearls names all four as diagnostic history. This is the ground on which `packets/PLAN.md` declined row 17 outright and this packet does not reopen it. |
| **Significant / persistent vomiting** | 2, 3, 4, 5 | **Not refused — already asked.** | Fact `vomiting`, carried by the hand-written `threw-up` and by `tummy/vomiting`, whose item 1 is scoped to `long-time`. Item 11. |
| **Chronic or severe diarrhea** (without the nocturnal qualifier) | 2, 3, 4, 5 | **Not refused — already asked.** | Fact `runny-poop`, carried into group `tummy` at every duration by `general-unwell` g-012. Item 12. |
| **Unexplained fever** | 2, 3, 4, 5 | **Not refused — already asked.** | Fact `feels-feverish`, carried into every group at every duration by `general-unwell` g-001. Item 13. |
| **Genitourinary tract symptoms / history of UTI** | 3 (Table 4, and a validated predictor at P ≤ .05) | **Not refused — already asked.** | Fact `painful-peeing`, carried into every group at every duration by `general-unwell` g-009. Item 14. |
| **Persistent right upper or right lower quadrant pain** | 2, 3, 4 | **SURVIVES, mutilated** | The quadrant may never be named to a child. What survives is *whether the spot stays the same* — item 5, minAge 8. The nurse maps it against the body map. |
| **Pain that wakes the child from sleep** | 3, 4, RCH | **SURVIVES INTACT** | Item 1. The child's own experience, no adult required, no dignity cost. |
| **Dysphagia / odynophagia** | 3, 4, RCH | **SURVIVES** | Item 6, worded from RCH's own gloss. |
| **Signs of abuse** | 4 | **REFUSED — deliberate exclusion** | Same ruling and same reasoning as `tummy/acute-pain` and `head-injury`: safeguarding policy, not question design, is the instrument. Flagged for the clinical reviewer. |

**Count: of the seventeen alarm features assembled from four lists, two survive
intact, one survives mutilated, four are already asked elsewhere in the app, and
ten are refused.** Six of the ten are refused on the content ceiling rather than
on self-reportability — which is to say, they are things a child *could* answer
and *should not be asked*.

## The dignity ruling

`tummy/vomiting` set the precedent: it counts vomiting episodes and refuses to
count diarrhoea episodes despite identical sourcing, because *"vomiting into a
bowl carries no comparable shame"*. The same test is applied here, and this
packet has to apply it more often because its literature is largely a literature
about stool and body weight.

**The test used.** Not "is this embarrassing?" — almost everything about a sore
tummy is embarrassing to a 9-year-old. The test is: **would a child who has to
answer "yes" be more likely to answer "no"?** A shaming question does not
produce a distressed child; it produces a *false negative*, and a false negative
is indistinguishable from health on the nurse's screen. That is why this is a
data-quality ruling and not only a kindness one.

**What that test permits, and it is more than nothing.** Item 7 asks whether
pooping makes the tummy feel better. It names poop. It is permitted, because it
asks about the *pain*, requires no counting, no inspection, no apparatus and no
admission of failure — the answer "no" costs the child nothing. `tummy/acute-pain`
already ships *"Have you been to the bathroom today?"* on the same reasoning.

**What it refuses, in order of how hard the refusal was.**

1. **Body weight, in any form.** Refused despite being the best-measured alarm
   feature available (source 5, OR 13.60) and despite appearing in every one of
   the four alarm lists. A child asked "have you lost weight?" is asked to
   evaluate their own body on a screen in a public waiting room. The regex bans
   the family, not the phrase, because a generator told never to say "weight"
   writes *"have your clothes got looser?"* — which was caught in testing and is
   now caught by the regex.
2. **Looking at what came out.** Refused despite OR 12.90. See the table above
   for the asymmetry with the acute packet.
3. **Counting anything that happens in a toilet**, including — especially — at
   night. Rome IV's own thresholds are counts per month and they are not
   reachable by a child of any age in this range; the moment they touch the
   toilet they are also refused.
4. **Stool form.** *"Are your poops hard or soft?"* screens clean against every
   existing packet's ban list and is now caught here.
5. **Continence, apparatus, withholding, soiling.** Carried unchanged from
   `tummy/vomiting` and extended with StatPearls' encopresis and streaking
   wording.

**The cost, stated plainly.** Applying this ruling costs this packet the two
alarm features with the largest measured effect sizes in the only study that
measured them. The packet is weaker for it and says so. What it buys is that the
questions that *are* asked can be believed.

## Abdominal migraine, revisited

The brief flagged that ICHD-3's abdominal migraine had been read and not
carried, and asked that the ruling be checked before re-deriving it. **A
correction for the record: the packet that read it was `head/headache`, not
`tummy/vomiting`.** `tummy/vomiting` does not mention abdominal migraine at all.

`head/headache`'s ruling, verbatim from that packet: *"A child with abdominal
migraine does not present with a headache, so nothing here applies to them."*

**That ruling is correct and it does not bind this packet — it points at it.**
The reason `head/headache` excluded abdominal migraine is precisely the reason
this packet must consider it: the child in question presents with a *tummy*
complaint. So ICHD-3 1.6.1.2 was re-read first-hand rather than taken second-hand.

> "**1.6.1.2 Abdominal migraine** · Description: An idiopathic disorder seen
> mainly in children as recurrent attacks of moderate to severe midline
> abdominal pain, associated with vasomotor symptoms, nausea and vomiting,
> lasting 2–72 hours and with normality between episodes. Headache does not
> occur during these episodes.
>
> Diagnostic criteria: At least five attacks of abdominal pain, fulfilling
> criteria B–D · Pain has at least two of the following three characteristics:
> midline location, periumbilical or poorly localized; dull or 'just sore'
> quality; moderate or severe intensity · At least two of the following four
> associated symptoms or signs: anorexia, nausea, vomiting, pallor · Attacks
> last 2–72 hours when untreated or unsuccessfully treated · **Complete freedom
> from symptoms between attacks** · Not attributed to another disorder"

Three things came out of that re-reading and all three are in the items table:

- *"Complete freedom from symptoms between attacks"* — **item 2**, and the only
  criterion in the whole abdominal-migraine block that is cleanly
  child-reportable. RCH says the same thing in different words (*"few or no GI
  complaints between attacks"*), and AFP's FAP-NOS criterion contrasts
  *"episodic or continuous"*, so the item is triple-sourced.
- *"In young children the presence of headache is often overlooked. **A careful
  history of presence or absence of headache must be taken**"* — **item 8**. In
  `head/headache` this sentence ran the wrong way and was recorded as *"an
  argument for the app collecting this at all; it is not an item."* Reached from
  the tummy side it *is* an item: this is a source instructing clinicians to ask
  a child with abdominal pain about headache, and the child is the only one who
  has the answer.
- *"Children may find it difficult to distinguish anorexia from nausea."* — a
  capability caveat, recorded at item 15, and a reason not to build an appetite
  question here on top of the one `tummy/acute-pain` already has.

Everything else in 1.6.1.2 is unusable: the attack count (five), the durations
(2–72 hours), the midline location, "moderate or severe intensity" (a severity
rating, banned universally) and pallor (an observer's finding — ICHD-3's own
gloss is *"Pallor is often accompanied by dark shadows under the eyes"*, a
description of what someone else sees).

## The Search A / Search B gap

Search A returned the validation and comparison literature: source 5 measuring
individual alarm symptoms against endoscopy, AFP's summary of the
alarm-symptom validation work, and the Rome IV apparatus. Search B returned RCH's
chronic abdominal pain guideline.

**The gap runs the opposite way from `tummy/acute-pain`'s.** There, Search A
returned twelve rules that all predicted one disease and Search B supplied
everything else. Here the two searches largely agree — and what Search B adds is
not more items but *context that changes how the items are read*: RCH's opening
key point is *"In most children, no organic cause is found"* and *"Non-specific
or functional abdominal pain is a distinct diagnosis and does not require
exclusion of all organic causes."*

That is a guideline warning against exactly the reflex a packet built only from
Search A would encode. Source 5 is an endoscopy-referral cohort where 224 of 571
children had organic disease — 39% — which is not the base rate of a hospital
waiting room, and a packet that took its priorities from that table alone would
be tuned for a population this app never sees. **The counterweight items are 2,
3 and 4** — episodic pattern, functional impact, relation to eating — which are
characterisation rather than triage, come from Rome IV and RCH rather than from
the alarm lists, and are what the nurse actually needs for the 61%.

## Assessment items

Proposed items are 1–9. Everything from 10 onward is recorded so that its
absence is visibly a decision.

| #  | Item | Source | Child-reportable | Note |
|----|------|--------|------------------|------|
| 1  | **Does the pain wake you up at night** | AFP (3) Table 4 — *"Pain that wakes the child from sleep"*; RCH (1) — *"pain waking the child from sleep"*, filed under History and pain characteristics, **not** under Examination; StatPearls (4) — *"pain causing wakening from sleep"* | **yes** | **The flagship, and the only alarm feature that survives every filter.** Three of the four alarm lists carry it, it is the child's own experience rather than an observer's, and it costs the child nothing to answer honestly. Fact `night-pain`, **reused** from `back/pain` and `limb/injury`, both of which word it region-neutrally and neither of which is reachable from group `tummy`. |
| 2  | **In between the sore times, do you feel all better** | ICHD-3 1.6.1.2 (6) — *"Complete freedom from symptoms between attacks"*, and the description's *"with normality between episodes"*; RCH (1) — abdominal migraine row, *"few or no GI complaints between attacks"*; AFP (3) — FAP-NOS, *"episodic or continuous"*; RCH (1) — FAP-NOS row, *"Episodic or continuous"* | **yes** | The episodic/continuous split, which is the first branch in the differential and which **nothing else in the app asks**. `happened-before` records that it happened before; this records what the gaps are like. Coins `well-between-times`. |
| 3  | **Is it stopping you doing the things you usually do** | RCH (1) — *"Functional impact of pain on usual activities (eg school attendance, social activities, physical activity)"*, and the escalation trigger *"Abdominal pain causing significant interruption to usual activities (schooling, social interactions, eating)"*; AFP (3) Table 1 — *"severe enough to affect the child's ability to perform normal activities"*; NASPGHAN (2) Table 1 — Apley, *"severe enough to affect activities"*; ICHD-3 (6) — *"Pain of 1.6.1.2 Abdominal migraine is severe enough to interfere with normal daily activities"* | **yes** | Four sources, and the only one of them that is *definitional*: for Apley and AFP, pain that does not affect activities is not recurrent abdominal pain. It is also RCH's referral trigger. Fact `stopping-normal-things`, **reused** from `back/pain` item 12 and `head/headache` item 9 — region-neutral by both packets' own ruling, and neither reaches group `tummy`. **Never worded as school** — see decision 3. |
| 4  | **Does your tummy hurt more after you eat** | AFP (3) — FAP-NOS, pain *"not associated with eating or menses"*, and functional dyspepsia, *"postprandial fullness, early satiation"*; RCH (1) — History, *"association with meals"*, and the functional dyspepsia row, *"Bothersome postprandial fullness / Early satiety"*; StatPearls (4) — *"The relationship of pain to food can provide critical diagnostic clues, including the timing of pain after meals"* | **yes** | A Rome IV *discriminator*, not an association: the FAP-NOS criterion is defined partly by the pain **not** being related to eating. Only the eating half of *"eating or menses"* is taken; the other half is out of scope by age. Coins `pain-after-eating` — **not** `eating-drinking`, which is `general-unwell` g-005 (*"Have you been able to drink anything today?"*) and reaches group `tummy` at every duration, so sharing the slug would suppress this item outright. |
| 5  | **Is it always in the same spot, or does it move around** | NASPGHAN (2) — *"persistent right upper or right lower quadrant pain"*; AFP (3) Table 4 — *"Persistent right upper or lower quadrant pain"*; StatPearls (4) — *"A consistent description of severe pain, sharp pain, and localization in a specific quadrant suggests organic pathology related to a particular location"*, against *"they may describe generalized pain or changing locations"* | **partial**, age 8+ | The one alarm feature that survives in mutilated form. **The quadrant is never named** — `tummy/acute-pain`'s standing rule is that the body map is the only instrument for location, and this item asks only whether the spot is stable. The nurse holds the body-map answer and does the mapping. Coins `pain-same-spot`; see decision 7 for why it is **not** `pain-moves-around`, whose polarity is inverted. Narrowed to `not-sure`/`long-time`: *persistent* is a claim about weeks. |
| 6  | **Does food feel like it gets stuck when you swallow** | AFP (3) Table 4 — *"Dysphagia"*; RCH (1) — *"dysphagia (the sensation of food sticking, or moving slowly down the oesophagus)"*; StatPearls (4) — *"dysphagia, odynophagia"* | **yes** | Three sources, and RCH hands over the child-facing wording itself. Distinct from `hurts-to-swallow` (throat/sore-throat s-001), which is *odynophagia* — pain on swallowing. RCH and StatPearls both list the two separately, so the app should too. Coins `food-sticks`. |
| 7  | **Does your tummy feel better after you poop** | AFP (3) — Rome IV IBS, pain *"associated with defecation"*; RCH (1) — IBS row, *"Pain related to defecation"* | **yes** | The first half of the IBS criterion, and the half that passes the dignity test: it asks what the *pain* does, needs no count and no inspection, and a "no" costs the child nothing. The second half — *"change in frequency or form of stools"* — is item 25 and is refused. |
| 8  | **Does your head hurt at the same time** | ICHD-3 1.6.1.2 (6) — *"In young children the presence of headache is often overlooked. A careful history of presence or absence of headache must be taken"*; AFP (3) — abdominal migraine associated symptoms include *"headache, photophobia"*; RCH (1) — abdominal migraine row, *"Migraine in child (or family)"* | **yes** | A source telling clinicians outright that this gets missed in young children. Weak provenance — one ICHD-3 comment plus one item in a symptom list — so it ranks eighth. RCH's *"(or family)"* half is refused under item 26. Coins `headache-with-tummy-pain`. |
| 9  | **Do you have sores in your mouth** | Liu (5) — oral ulcer, 7/224 organic vs 0/347 functional, P = 0.001; RCH (1) — *"extraintestinal manifestations of inflammatory bowel disease (IBD) (eyes, skin, joints, perianal)"* | **yes** | **Weakest provenance in the packet and the first item to drop if the list must shrink.** RCH's extraintestinal list does not name the mouth, so the oral specificity rests on source 5 alone: one retrospective single-centre cohort, seven children, no odds ratio computable because the functional arm had zero. Fact `mouth-sores`, **reused** from the general surface question r-014, which is depth `surface` and therefore unreachable from this packet. |
| 10 | Pain frequency and total duration (Rome IV *"at least four times per month for … 2 months"*; IBS *"at least four days per month"*; Apley *"3 or more episodes over … 3 or more mo"*) | 1, 2, 3, 4 | **no — not reachable** | Every threshold is a count over a window. `DURATIONS` gives the band and `happened-before` gives recurrence; neither resolves "four times a month", and a child of 4–12 cannot aggregate over a month. Banned by regex. See "Still open". |
| 11 | Significant / persistent vomiting | 2, 3, 4, 5 (OR 3.48) | **yes — already collected** | Fact `vomiting`. The hand-written `threw-up` and `tummy/vomiting` item 1, which is scoped to `long-time`. No question proposed. |
| 12 | Chronic or severe diarrhea | 2, 3, 4, 5 | **yes — already collected** | Fact `runny-poop`, carried into group `tummy` at every duration including `long-time` by `general-unwell` g-012. The *nocturnal* qualifier is item 25 and refused. No question proposed, and the packet's own ban list forbids one. |
| 13 | Unexplained fever | 2, 3, 4, 5; AFP validation, P ≤ .05 | **partial — already collected** | Fact `feels-feverish`, `general-unwell` g-001, every group and every duration. Note this is one of only three findings AFP found statistically associated with organic disease, and the app already asks it. |
| 14 | Genitourinary symptoms; history of UTI | 3 (Table 4, and validated at P ≤ .05); RCH (1) — *"urinary symptoms"* | **yes — already collected** | Fact `painful-peeing`, `general-unwell` g-009, every group and every duration. `tummy/acute-pain` t-006 covers the acute bands. |
| 15 | Nausea; anorexia / appetite change | 2 (*"anorexia, vomiting, nausea, excessive gas and altered bowel symptoms"*); RCH (1) — *"appetite changes"*; ICHD-3 (6) | **yes — already collected** | `SENSATIONS.queasy` ("Yucky tummy") is offered at depth `inside` before any follow-up, and `tummy/acute-pain` item 3 covers appetite. ICHD-3 adds a capability caveat worth recording: *"Children may find it difficult to distinguish anorexia from nausea."* |
| 16 | Reflux symptoms: heartburn, waterbrash, regurgitation; epigastric burning | RCH (1) — History and the GORD and functional dyspepsia rows | **partial — already collected** | `SENSATIONS.burning` ("Hot and stingy") is on the `inside` list. "Waterbrash" is unaskable at any age in this range. |
| 17 | Colicky, cramping, bloating, distension | RCH (1); AFP (3); StatPearls (4) — *"They may also describe the pain as cramping or bloating"*; Liu (5) — distention OR 2.44 | **partial — already collected** | `SENSATIONS.cramping` ("Scrunchy") and `SENSATIONS.squeezing` ("Tight squeeze"). Distension proper is an examination finding. |
| 18 | Pain intensity (*"moderate or severe"*, *"intense"*) | ICHD-3 (6); AFP (3) | **yes — already collected** | The FPS-R screen. Severity adjectives are banned universally. |
| 19 | Pain location now (midline, periumbilical, diffuse, quadrant) | 2, 3, 4, 6 | **yes — already collected** | Body map plus the torso detail view's five regions. Never asked in words. |
| 20 | Trajectory — *"sudden worsening"*, *"progressive worsening"*, *"significant change in an established pattern"* | StatPearls (4) — *"Acute-onset severe pain increases the likelihood of alternative etiologies"*; RCH (1) | **yes — deliberately NOT proposed** | `tummy/acute-pain` item 7 is the **one** item that packet scopes to `long-time`, so it already serves this group at this depth in exactly these bands. `tummy/vomiting` reached the same conclusion for the same reason (its decision 6). A second trajectory question here would be the project's commonest reject reason arriving twice. Banned by regex so no candidate can be generated. |
| 21 | Involuntary weight loss | 2, 3, 4, 5 (OR 13.60), Vandenplas | **no — content ceiling** | See the dignity ruling. Refused despite being the best-measured item in the literature. |
| 22 | Deceleration of linear growth; stunting of height; growth faltering | 2, 3, 4, 5 (OR 7.83), RCH | **no — measurement** | RCH files it under *"Examination: Weight and height, preferably over time"*. |
| 23 | Delayed puberty; pubertal status | 3, 4, 5, Vandenplas, RCH | **no — out of scope by age** | |
| 24 | Gastrointestinal blood loss; blood in stools; hematochezia | 2, 3, 4, 5 (OR 12.90), Vandenplas | **no — content ceiling** | See the dignity ruling, including the deliberate asymmetry with `tummy/acute-pain` item 11. |
| 25 | Change in bowel habit — frequency and form; nocturnal stooling; withholding; encopresis; stool streaking; time spent on the toilet | 1, 3, 4, Rome IV via 3 | **no — content ceiling** | The second half of the Rome IV IBS criterion, plus StatPearls' constipation history. Frequency is the counting ban, form is the inspection ban, and the rest is the continence ban. This is the ground on which row 17 was declined. |
| 26 | Family history of IBD, coeliac disease, peptic ulcer, H. pylori; migraine in the family | 2, 3, 5 (13% of the organic group), RCH | **no — carer or record** | |
| 27 | Perianal / perirectal disease | 2, 5 (OR 21.32 on 13 children), RCH | **no — examination, and ceiling** | Highest odds ratio in source 5's table and the widest confidence interval in it. |
| 28 | Pallor | ICHD-3 (6); AFP (3) | **no — observer** | ICHD-3's own gloss describes what someone else sees. Asking a child returns what an adult once told them, which is banned. |
| 29 | Attack duration (*"2–72 hours"*, *"more than one hour"*); attack count (*"At least five attacks"*, *"at least two paroxysmal episodes over six months"*) | ICHD-3 (6); AFP (3) | **no — not reachable** | No question in this app may ask a child for a number of hours or a count over months. Same ruling as `head/headache` item 18. |
| 30 | Dietary history including foods excluded from diet; trigger foods; missed meals | RCH (1) — History and the functional row, *"May be exacerbated by physical stressors (specific foods, missing meals, tiredness)"*; StatPearls (4) — lactose, FODMAPs | **no — management, and a blame surface** | RCH files dietary strategy under Treatment. *"What did you eat?"* invites a 7-year-old to account for having caused their own pain. Same ruling as `head/headache` item 30. |
| 31 | Psychosocial: anxiety, depression, life-event stress, family dynamics, HEADSSS | RCH (1) — *"HEADSSS screen"*, *"Consider and address psychosocial stressors"*, and the somatic symptom disorder row; Vandenplas — 100% panel agreement that psychosocial history *"may offer insights into stress-related triggers"* | **no — deliberate exclusion** | And this is the one exclusion the literature argues *for*. NASPGHAN (2), verbatim: *"the presence of anxiety, depression, behavior problems or recent negative life events does not distinguish between functional and organic abdominal pain"*, and separately, on life-event stress, *"evidence quality B"*. `MOODS` collects the child's state and never its cause. Same ruling as `head/headache`. |
| 32 | Menstrual, sexual and contraceptive history | RCH (1); Rome IV's *"eating or menses"* | **no — out of scope by age** | |
| 33 | Examination: abdominal palpation, palpable faeces, palpable mass, tenderness, distension, dehydration signs, jaundice, extraintestinal signs in eyes/skin/joints, pubertal staging | RCH (1); AFP (3); StatPearls (4) | **no — exam** | StatPearls' *"patients often tolerate deep palpation despite tenderness in functional disorders"* is a finding produced by a clinician's hands. The joint half is reachable by the body map — a child whose knees hurt taps their limb — so no question is proposed for it. |
| 34 | Laboratory and imaging: faecal calprotectin, occult blood, WBC/PLT/CRP, endoscopy, biopsy, H. pylori testing, ultrasound | 1, 4, 5 | **no — lab** | Source 5 exists to decide which of these children get an endoscopy. |
| 35 | Signs of abuse | StatPearls (4) | **no — deliberate exclusion** | Same ruling and same reasoning as `tummy/acute-pain` and `head-injury`. Safeguarding policy is the instrument, not a question on a child's tablet. Flagged for the clinical reviewer. |

**Yield: ~40 criteria across 4 alarm lists, the 4 Rome IV subtype definitions,
3 duration definitions and 1 validation cohort → 8 clean, 1 partial, 10 already
collected elsewhere in the app, 16 excluded.**

Compare the siblings. `tummy/acute-pain` got 14 clean items out of ~46 criteria;
this packet gets 9 out of ~40. **The difference is not that the literature is
thinner — it is that this literature is mostly about stool, body weight and
growth**, and three of those four are outside what a child may be asked. The
excluded column here is longer than the proposed column, and eleven of the
sixteen exclusions are ceiling or observer rulings rather than absent evidence.

## Wording cautions

Ban **concepts**, not phrasings. The regexes in `meta.json` implement these and
each one carries its reason; the ones below are the reasoning behind them.

- **Never name a condition or a classification.** Not IBS, not dyspepsia, not
  abdominal migraine, not Crohn's, colitis, IBD, coeliac, ulcer, H. pylori,
  giardia, reflux, GORD, appendicitis, diabetes. And **not "functional"** — the
  most dangerous word in this literature, because Vandenplas records that the
  Rome committee itself warns the term *"should not be misconstrued to imply a
  nonorganic condition"*. It would mislead a nurse as well as frighten a child.
- **Never mention body weight, size, growth or height, in any wording.** The
  primary dignity ruling. Includes the indirect forms — clothes fitting
  differently, belts, being thinner, being taller than last year.
- **Never ask a child to look at, describe or classify what came out of them.**
  No colour, no consistency, no blood, no streaks, no Bristol-chart shapes.
- **Never ask a child to count anything that happens in a toilet**, and never
  ask about the night in a way that means counting.
- **Never ask about continence, apparatus, soiling, withholding or accidents.**
  Carried unchanged from `tummy/vomiting`.
- **Never ask a child to name or choose an abdominal region in words.** Not
  quadrant, not periumbilical, not epigastric, not "on the right". The body map
  is the only instrument for location; item 5 asks whether the spot moves, never
  where it is.
- **Never ask for a count per month or a number of hours.** Rome IV's thresholds
  are per-month counts and ICHD-3's are hour ranges. Neither is reachable.
- **Never ask about family history**, or ask a child to relay what an adult
  said. Family history is the third commonest alarm symptom in source 5 and it
  is still not the child's to report.
- **Never ask about school attendance by name.** Item 3 says "the things you
  usually do". The child may be answering on a weekend, and AFP explicitly
  frames missed school as *secondary gain* to be discouraged, so naming it turns
  the question into an accusation. Bare "school" is deliberately still allowed,
  matching `head/headache`.
- **Never ask about stress, worry, bullying, home or what the child thinks
  caused it.** NASPGHAN says it does not discriminate anyway.
- **Never ask a child to press on their own tummy.** Carried from both siblings.
- **Never ask a trajectory question in this packet.** `tummy/acute-pain` item 7
  owns it in these bands. Banned by regex so the generator cannot produce one.
- **Never ask a child to rate severity**, and never use "worst", "severe",
  "serious" — already universal.
- **US English, and this literature is not.** RCH Melbourne writes "oesophagus",
  "faeces", "diarrhoea", "coeliac", "stunting of height"; the register ban list
  catches those plus "unwell", "off colour", "poo", "wee", "whilst", "have you
  got", "colour", "paracetamol", "in hospital".

## Decisions

**Decided, not deferred.**

1. **Depth and group.** `depth: inside`, `groups: ["tummy"]`, `mechanism: null`.
   Group `tummy` includes `bottom` on the back view, and `tummy/acute-pain`
   decision 11 ruled that `bottom` needs its own handling and does not get that
   packet. **The same ruling applies here and applies harder**: perianal disease
   is an alarm feature in this literature, and it is refused. These items are
   written for the torso regions and `hips`.
2. **Register: US English**, matching `tummy/acute-pain` decision 1 exactly —
   **"tummy"**, **"poop"**, **"pee"**, **"throw up"**. Both guideline sources
   here are non-US and the third is an American review that still writes
   "defecation", so the ban list is longer than the siblings' rather than
   shorter.
3. **Item 3 is worded as activities, never as school.** *"Is it stopping you
   doing the things you usually do?"* Reasons in the wording cautions.
4. **Duration scope.** The sources disagree and the disagreement is a scope
   disagreement, resolved band by band:

   | Source | Where "ongoing" begins |
   |--------|------------------------|
   | RCH (1) | at least 2 months |
   | Rome IV via (3), (4) | at least 2 months, ≥ 4 episodes/month |
   | AFP (3), Apley via NASPGHAN (2) | ≥ 3 episodes over ≥ 3 months |
   | NASPGHAN (2) | 3 months, *"Some clinicians believe that pain that lasts more than 1–2 mo is chronic"* |

   Ruling:
   - `just-now`, `this-morning`, `yesterday` — **out of scope entirely.** No
     source here enrols a child in the first 24–48 hours, and
     `tummy/acute-pain` covers those bands with fourteen items. Appendicitis
     owns them.
   - `few-days` — **in scope.** No source's window starts here either, and this
     is the one band that is a judgement rather than a citation. It is included
     because NASPGHAN records that clinicians disagree about where chronic
     begins, because `few-days` is what a child picks when the pain is neither
     today's nor obviously old, and because `tummy/acute-pain` also covers this
     band, so a child gets both packets rather than only this one.
     **`JUDGEMENT, NOT A CITATION`.**
   - `long-time` — **in scope, and this is the packet's home.** The only band
     where every source's definition is satisfied.
   - `not-sure` — **in scope**, by the same convention every packet uses:
     `not-sure` means the child cannot date it.
   - **Item 5 is narrowed further**, to `not-sure` and `long-time` only, because
     AFP's and NASPGHAN's word is *persistent* and a child three days in has not
     had time to find out whether the spot is stable.
5. **`packetRank: 5`.** Ahead of `tummy/acute-pain` (10) and `tummy/vomiting`
   (20). The argument, in full, because the number is load-bearing:

   `build-bank.mjs`'s `roundRobin` gives each packet's queue one slot per cycle
   over the queues that survived the duration filter. So `packetRank` decides
   **who picks first, not who picks more**: with three live queues and a cap of
   five or six, this packet's item *count* is the same at rank 5 as it would be
   at rank 15, and only the order changes.

   - **Against 10.** In `long-time` and `not-sure`, `tummy/acute-pain`'s queue is
     exactly **one** item long — its item 7 is the only one it scopes to
     `long-time`. Leading there costs appendicitis nothing, because after its
     single item is spent the round-robin is between this packet and
     `tummy/vomiting` regardless. In `few-days`, leading costs `tummy/acute-pain`
     its first *position* and none of its slots.
   - **Against 20.** `tummy/vomiting` has four items scoped to `long-time` and
     would otherwise take the odd slot when the cap is odd — which, at the young
     tier's cap, is the difference between this packet getting two questions and
     getting one.
   - **And against the record.** `packets/PLAN.md`'s note on the declined row 17
     says that if it were ever revisited it should be scoped to
     `few-days`/`not-sure`/`long-time` and given *"a `packetRank` above both
     existing tummy packets"*. This is that scoping and that rank.
6. **Item priority, proposed, not yet confirmed by review.**

   `1 (wakes at night) → 3 (stopping normal things) → 2 (all better in between)
   → 4 (worse after eating) → 5 (same spot) → 7 (better after pooping) →
   6 (food sticks) → 8 (head hurts too) → 9 (mouth sores)`

   Item 1 leads because it is the only alarm feature that survives all three
   filters and it appears in three of the four alarm lists. Item 3 is second
   because it is definitional in Apley and AFP and it is RCH's referral trigger
   — and because it carries a **shared** fact, so ranking it low would let a
   co-tapped head or back complaint take it. Item 2 is third because the
   episodic/continuous split is asked nowhere else in the app at all. Items 8
   and 9 are last on provenance, and item 9 is the first to drop.
7. **Fact rulings.** Recorded in full in `meta.factsNote`; the ones the brief
   asked for explicitly:
   - `night-pain` — **REUSED** (item 1). Worded region-neutrally in both
     existing carriers, and neither reaches group `tummy`.
   - `stopping-normal-things` — **REUSED** (item 3). Region-neutral by
     `back/pain`'s and `head/headache`'s own rulings.
   - `mouth-sores` — **REUSED** (item 9). Existing carrier is depth `surface`.
   - `pain-moves-around` — **NOT reused.** `limb/pain` p-008 is *"Did it hurt
     somewhere else before?"* — migratory arthritis, minAge 8, **opposite
     polarity**. A shared slug would let one suppress the other and hand the
     nurse an answer that could mean either thing. Coined `pain-same-spot`,
     following `head/headache`'s precedent for coining `head-worse-moving`
     rather than reusing `worse-on-movement`.
   - `eating-drinking` — **NOT reused.** `general-unwell` g-005 reaches group
     `tummy` at every duration, so sharing would suppress item 4 outright, and
     it records what the child *managed* rather than what the pain *does*.
     Coined `pain-after-eating`.
   - `bathroom-change` — **NOT reused.** `back/pain` b-007 is a cauda-equina red
     flag about peeing, minAge 8. Different organ, different alarm. Coined
     `poop-changes-pain`.
   - `runny-poop` — **NOT used, and no question proposed.** `general-unwell`
     g-012 already carries it into group `tummy` at every duration including
     `long-time`, so the diarrhea alarm is already asked. The packet's own ban
     list forbids a candidate.
   - `vomiting` — **NOT used, and no question proposed.** Owned by the
     hand-written `threw-up` and by `tummy/vomiting`, whose item 1 is scoped to
     `long-time`.
   - `morning-pain` — **NOT reused, and no morning item proposed.** `limb/pain`
     p-003 is JIA morning stiffness. This packet's alarm is *night waking*, and
     no source here mentions a morning pattern at all.
   - `recent-illness` — **NOT reused.** `limb/injury` l-019 is post-infectious;
     nothing in this literature supports a post-infectious question at these
     durations.
8. **Age floors.** Only item 5 carries one, `minAge: 8`, and it is a
   **CAPABILITY** floor, not a validity floor: StatPearls states that *"Young
   children often have difficulty localizing and describing pain, and may report
   either peri-umbilical pain or generalized abdominal pain"*, and item 5 asks a
   child to compare where the pain was on many different days. **The number 8 is
   `JUDGEMENT, NOT A CITATION`** — StatPearls gives no age — and is borrowed
   from `limb/pain` item 10, which asks the same shape of question about the
   same capability. Every other item is unfloored: they are all plain history in
   a complaint guideline that sets no floor, and per brief §4 a floor on such an
   item would be an invention.
9. **Answer types.** `FollowUpScreen` renders yes/no only. All nine proposed
   items are **yes/no**. Item 5 is the one that suffers: *"Is it always in the
   same spot, or does it move around?"* is naturally a two-way choice and will
   have to ship as a yes/no about one of the two, which loses the child who
   answers "sometimes". Recorded, not hidden.
10. **Redundancy, checked item by item against body region, depth, intensity,
    duration, sensations, mood, and both sibling packets.** Rejected as
    duplicates: items 15, 16, 17, 18, 19 (sensation and intensity screens and
    the body map), 10 (`DURATIONS`), 11, 12, 13, 14 (facts already carried into
    this group at these durations), and — the one that matters most — **item 20,
    the trajectory question**, which `tummy/acute-pain` item 7 already serves in
    exactly these bands. Nine items survived.

## Still open

- **"More than three alarm findings" is unreachable.** AFP found it one of only
  five things statistically associated with organic disease, and this packet can
  ask at most three of the twelve findings on its list — the rest being banned,
  observer-only, or already asked elsewhere by other packets. A nurse who wants
  that count must assemble it from more than this packet's answers. A reviewer
  should decide whether the nurse surface can do that, and whether it should try.
- **The dignity ruling costs the two best-measured alarm features.** Weight loss
  (OR 13.60) and blood in stool (OR 12.90) are both refused. This is the
  packet's largest deliberate loss of information and it should be reviewed as a
  policy decision, not accepted as a technical one. If a clinician disagrees, the
  place to disagree is the ceiling, not this packet.
- **Item 5's answer type.** See decision 9 — a two-way choice rendered as a
  yes/no.
- **Rome IV was not read in the original.** Source 7 is `CITED, NOT READ`. A
  future run with access to *Gastroenterology* 2016;150(6):1456–1468 should
  check the four subtype criteria against the three second-hand renderings used
  here, particularly the FAP-NOS wording, where AFP's *"not associated with
  eating"* and StatPearls' *"not limited to physiological events such as
  eating"* are not the same claim and item 4 takes the weaker.
- **Source 5 is a referral population.** 39% of its cohort had organic disease.
  A hospital waiting room is not that, and RCH's own key point is *"In most
  children, no organic cause is found"*. The odds ratios in this packet describe
  which alarm symptoms discriminate *among children already referred to a
  gastroenterologist*, and should not be read as this app's population.
- **NASPGHAN (source 2) is from 2005** and predates Rome III and Rome IV. It is
  used only for the alarm list and the Apley definitions, both of which the 2018
  and 2025 sources reproduce unchanged — but a reviewer should confirm that
  nothing in the alarm list has been retired since.
- **Item 9 (mouth sores)** rests substantially on one cohort and seven children.
  First to drop.
- **Item 35 (signs of abuse)** and the psychosocial exclusion (item 31) are
  raised deliberately rather than settled. Both are safeguarding questions
  before they are clinical ones.
- **The `few-days` band is this packet's weakest scope claim.** No source enrols
  there. It is included on judgement and it is the first thing to narrow if the
  round-robin turns out to crowd `tummy/acute-pain` in practice.

## Ambiguity in the sources

Recorded rather than papered over.

- **Rome IV is quoted at one remove throughout**, from three sources that
  restate it. Where they differ, the difference is recorded at item 4 and in
  "Still open" rather than resolved.
- **The four alarm lists are not the same list.** AFP has twelve entries, RCH
  has thirteen framed as history, NASPGHAN has eight, StatPearls has two
  overlapping sets in two different sections. Only *pain waking from sleep*,
  *weight loss*, *GI blood loss* and *unexplained fever* appear in all four.
  NASPGHAN's own hedge — *"include, but are not limited to"* — means none of
  them is closed.
- **The alarm features carry evidence quality D** by NASPGHAN's own grading, and
  the associated symptoms carry C with *"insufficient data"*. Every item in this
  packet that is justified as an alarm feature inherits that grade, and none of
  them may ever be described as predictive.
- **Source 5's perianal-lesion row reads `1 (99.7) 346 (0.3)`** — the count and
  percentage are transposed relative to every other row in the table. The item
  is excluded anyway, so nothing depends on it, but it is a sign that the table
  should not be trusted to the last digit.
- **Source 5's odds ratios are unadjusted**, single centre, retrospective, and
  its confidence intervals are very wide where the counts are small (perianal
  lesions: 2.77 to 164.13). They are quoted to show the *shape* of the evidence
  — which alarm features carry weight and which do not — and never as effect
  sizes to be relied on.
- **RCH's red-flag list is not labelled as one.** Its history section runs
  ordinary history and alarm features together in a single bulleted block, so
  the separation used in this packet's items table comes from cross-referencing
  AFP Table 4 and NASPGHAN rather than from RCH itself.
- **StatPearls is a teaching text, not a guideline**, and cites its claims to
  other sources. It is used for the Rome IV restatement, the red-flag review of
  systems, and the statement about young children and pain localization — the
  last of which is a general clinical observation with no citation attached, and
  item 5's floor rests on it.
