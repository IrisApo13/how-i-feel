# How I Feel

A prototype hospital symptom-reporting app. A child describes where it hurts,
how much, what it feels like and what might help, and the app turns that into a
structured report a nurse can read in seconds. Both halves are built: the
child's side and the nurse's side.

Built for the Congressional App Challenge. The guide character is hand-drawn;
the faces scale, the avatar and the body map are drawn in code from the rules
documented at the top of each component.

## Running it

```bash
npm install
npm run dev
```

## What's here

**Mode** — the first thing a fresh device asks. `Patient end` is a tablet at the
bedside; `Nurse end` is the staff reading surface. The choice is stored in
`localStorage` (`hif.mode`) and is a one-time provisioning step, not something
the child is asked again. Reaching the nurse end needs a staff PIN, set the
first time anyone opens it. From the patient side the way in is the small
`Staff` link on the home screen.

**Setup** — name, age, preferred input method (tap / talk / write / draw),
whether the guide speaks aloud or uses word bubbles, guide character, and a
customizable avatar. Saved to `localStorage`.

**Home** — greeting, one big report button, and a check for any report from the
last 48 hours.

**Same as before** — if there is a recent report, the child is offered a
shortcut instead of repeating themselves. Choosing it carries the previous
regions forward and jumps straight to "how bad is it now".

**Voice path** (only for when the child chose "Talking") — guided prompts, live
transcript, keyword extraction into structured fields, then a confirmation
screen. Uses the browser's `SpeechRecognition`.

**Body map** — an anatomical child silhouette, front and back, with five zoom
views: head, both hands, both feet and the tummy. 60 tappable regions in all —
13 on the front, 9 on the back, the rest inside the zoom views — with the option
to multi-select across all of them; a part containing a hidden selection is
marked with a dot on the body.

**Depth** — "is it on your skin, or inside?", asked straight after the body map.
Children localize pain by surface region no matter what is actually wrong
underneath, so depth is asked as one plain binary rather than offered as
anatomical layers a child would have to navigate. Only ambiguous region groups
are asked (see `GROUP_DEPTH` in `src/data/bodyMap.js`) — a throat is always
inside, and the head is skipped because "Did you bump your head?" already gets
there with a better question. Asked once per group, never once per region.

**Intensity** — a Faces Pain Scale–Revised style row. The 8–12 tier also gets
the full 0–10 numeric scale; the 4–7 tier never sees numbers.

**Sensation, duration, mood, what-would-help** — icon grids, tiered vocabulary.

**Adaptive follow-ups** — the questions asked depend on which body regions were
tapped. Tummy gets "did you throw up / been to the bathroom / did you eat";
head gets "did you bump it / do lights make it worse"; and so on.

**Tell me more** — a free-draw canvas or a text box, shown only if the child
picked drawing or writing at setup.

**Summary** — everything is laid out for the child to review, every row tappable
to go back and change it, then send. Includes a toggle showing the raw JSON a 
nurse dashboard would receive.

## Deliberate design choices

A few things in here are deliberate and easy to accidentally undo:

- **The pain faces have no smiles and no tears.** Anchoring a faces scale with a
  grin at 0 and crying at 10 makes children rate the face's emotion instead of
  their own pain. Expression changes through mouth curve and brow angle only.
- **The brows angle inward-up, not inward-down.** Down reads as anger.
- **The guide character's face is never used as the pain scale.** It's a
  companion; if it looked hurt the child would be reading its feelings.
- **Guides are animals, not children.** Identity belongs in the child's own
  avatar, where they control it.
- **The depth answer prunes three later screens.** It picks the follow-up set,
  filters the sensation words and filters the helps list. That is what pays for
  spending a question on it — a child who says "on my skin" sees five sensation
  words instead of nine. Deleting the filtering leaves a question that costs a
  screen and buys nothing.
- **"I don't know" is a real answer to the depth question,** and falls back to
  the union of both follow-up sets rather than guessing. A coerced guess is
  worse than no answer, because the nurse reads it as something the child said.
- **Mood is asked separately from pain.** Worry, hunger and tiredness show up as
  stomachaches constantly; folding them into a pain score hides them.
- **The voice path always confirms.** Speech recognition is much worse on
  children's voices than adults'.
- **Nothing leaves the device.** No backend, no analytics, no network calls.

## The contract with the nurse dashboard

This is the object `send` produces. Agree it with whoever builds the nurse side
and the two halves can be developed completely independently.

```jsonc
{
  "id": "r_1723500000000",
  "timestamp": "2026-08-13T14:20:00.000Z",
  "patientName": "Mia",
  "age": 6,
  "ageTier": "young",          // "young" (4-7) | "older" (8-12)
  "inputMethod": "draw",       // tap | speak | write | draw
  "bodyRegions": ["tummy"],    // ids from src/data/bodyMap.js
  "depths": { "tummy": "inside" },  // per region GROUP: surface | inside | unknown
  "intensity": 8,              // 0-10, or null
  "sensations": ["queasy"],    // ids from src/data/vocab.js
  "duration": "this-morning",
  "sameAsBefore": false,       // true if the child said this is the same
                               // complaint as a report in the last 48 hours
  "followUps": { "threw-up": "no", "bathroom-today": "yes" },
  "followUpLabels": { "threw-up": "Did you throw up?" },
  "mood": "worried",
  "helps": ["water"],
  "transcript": null,          // set on the voice path
  "note": null,                // set if the child typed
  "drawing": null              // PNG data URL if the child drew
}
```

## How the body map is built

Three pieces, in `src/data/bodyMap.js`:

- **`ART`** is the drawing — a silhouette made of overlapping filled paths plus
  round-capped strokes for limbs, fingers and toes. Overlapping shapes under one
  fill read as a single continuous body and are far easier to author and adjust
  than one giant outline path.
- **`REGIONS`** are the tappable zones, drawn as curved paths and rendered
  **masked to the silhouette**. The mask alone is not enough: it trims a
  region's *outer* edge to the body, but it cannot soften an *internal* one, so
  a rectangular chest still reads as a band cut across the torso. Every
  boundary is therefore a curve, and neighbouring regions share the same
  boundary curve so they tile with no seam and no overlap. Paths may run wider
  than the body — the mask trims the overflow, which is what lets each boundary
  be one clean sweep. Hit areas are *not* masked, so a tap landing just outside
  the body still counts, which matters for a little toe.
- **`GUIDES`** are faint feature lines over the top (eyes, nose, mouth, knuckles,
  quadrant dividers). Without them a face is a blank oval and the child has to
  guess where to tap. They sit above the highlight so they stay readable on a
  selected part.

Detail views are **not** magnified crops. A hand is about 26 units wide on the
body canvas and a finger about six, so cropping in would show a blur; each
detail view is its own 200x200 canvas with its own drawing. One drawing serves
both hands and both feet — `mirror: true` on the view flips it rather than
duplicating every path.

## Swapping in real art

- **Body and detail views** — replace the entries in `ART`. Keep each view's
  coordinate space and the regions keep working untouched, because they are
  positioned against the canvas rather than against the drawing. If a new
  drawing moves a landmark, adjust the shared boundary curve in `REGIONS` on
  both sides of it so the two regions still tile.
- **Guide characters** — `src/components/Guide.jsx`. Eight poses: `idle`, `wave`,
  `talk`, `point`, `listen`, `think`, `cheer`, `attentive`. We will be drawing
  each on the same canvas with the character in the same position, or cross-fades
  will jump. Currently, only ONE teddy-bear guide character. 
- **Avatar** — `src/components/Avatar.jsx`. One base figure with layered parts;
  skin tone is a `fill` value, not a separate drawing.
- **Icons** — none. Emoji were removed in the redesign; `src/data/vocab.js`
  documents how to reintroduce icons as drawn assets.

## Next on the body map

Planned, not built:

- **"I don't know where".** "All over" shipped: `all-over` is a region with
  `view: null`, surfaced as a button under the map, routed to the
  `general-unwell` packet and deliberately kept out of `GROUP_GATE`. What is
  still missing is the second case. A child who *cannot localise* is currently
  offered only "I hurt all over", which asserts something different, and the
  two mean different things to a nurse.
- **More zoom views.** `zoomTo` already works for the head; the same mechanism
  gives a torso close-up (tummy quadrants, gated to the `older` tier), hands,
  feet and a mouth view for teeth. Zoom handles granularity — head to eye is a
  closer look, not a deeper layer.

## Known gaps

- The nurse end (`src/screens/NurseEnd.jsx`) is built — collapsed report cards
  showing name, age, area and pain score, expanding to every field the child
  reported plus the citation behind each follow-up question. It still reads
  from this device's own `localStorage`, so a nurse cannot see reports from
  another device. That needs a backend, which is the open question.
- **The staff PIN is not authentication.** It is stored in plaintext in
  `localStorage` and exists only to stop a bored child tapping into the nurse
  end. Anything involving real patient data needs a real auth story.
- `SpeechRecognition` sends audio to Google's servers on Chrome and isn't
  supported in every browser. Fine for a prototype; production wants either a
  transcription service we control or a Capacitor wrapper using Apple's
  on-device recogniser.
- Transcript parsing is keyword matching, not a language model. It never invents
  a symptom, which is the right trade for now.
- No accessibility pass yet (screen reader labels are present but untested).
- No per-patient separation — one profile per device. On a ward tablet passed
  between children this would leak one child's history into another child's
  "same as before".
