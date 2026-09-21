// The body map.
//
// ART vs REGIONS
// --------------
// `ART` is the drawing: a silhouette built from overlapping filled paths and
// round-capped strokes (limbs, fingers, toes). Overlapping shapes in a single
// fill read as one continuous body, which is far more robust to author than one
// giant outline path.
//
// `REGIONS` are the tappable zones. Their shapes are deliberately simple,
// because every region is rendered MASKED to the silhouette -- so a plain
// rectangle over the chest is drawn as the exact chest area of a real body.
// That keeps the anatomy in one place (ART) and the hit areas easy to reason
// about, and it means no child ever sees a rectangle.
//
// Views come in two kinds:
//   body   -- front/back, the whole child on a 220x380 canvas
//   detail -- head/hand/foot/torso, each with its OWN 200x200 canvas and its own
//             artwork. Detail views are NOT crops: a hand is ~26 units wide on
//             the body canvas and a finger ~6, so cropping in would show a blob.
//
// Left/right labels are from the CHILD's point of view, which is why the
// child's right hand sits on the viewer's left. `mirror: true` on a view flips
// one shared drawing rather than duplicating the path data.

const W = 220
const H = 380

// ---------------------------------------------------------------- art

// f = filled path, s = stroked path (round caps) with width w
const f = (d) => ({ d })
const s = (d, w) => ({ d, w })

const BODY_ART = [
  // Proportioned for a school-age child: a little under six heads tall, with a
  // proportionally large head, narrow waist and legs at about 45% of standing
  // height. Adult charts are 7.5-8 heads and look wrong for this age group.
  f('M110,14 C125,14 133,27 133,44 C133,58 129,68 122,74 C118,78 114,80 110,80 C106,80 102,78 98,74 C91,68 87,58 87,44 C87,27 95,14 110,14 Z'),
  f('M103,72 C108,70 112,70 117,72 C118,82 118,90 117,96 C112,98 108,98 103,96 C102,90 102,82 103,72 Z'),
  // shoulders wider than the hips, waist pulled in
  f('M110,90 C129,90 146,97 153,110 C155,127 150,146 144,166 C142,182 146,198 144,212 C136,219 124,221 110,221 C96,221 84,219 76,212 C74,198 78,182 76,166 C70,146 65,127 67,110 C74,97 91,90 110,90 Z'),
  s('M82,108 L70,160', 22), s('M70,160 L62,212', 16),
  s('M138,108 L150,160', 22), s('M150,160 L158,212', 16),
  f('M54,206 C49,208 48,214 48,221 L48,231 C48,236 52,239 58,239 L68,239 C73,239 75,236 75,231 L75,218 C75,211 72,207 67,206 Z'),
  s('M52,234 L52,248', 6), s('M59,236 L59,252', 6), s('M66,236 L66,251', 6), s('M72,234 L72,246', 6),
  s('M49,215 L41,225', 7),
  f('M166,206 C171,208 172,214 172,221 L172,231 C172,236 168,239 162,239 L152,239 C147,239 145,236 145,231 L145,218 C145,211 148,207 153,206 Z'),
  s('M168,234 L168,248', 6), s('M161,236 L161,252', 6), s('M154,236 L154,251', 6), s('M148,234 L148,246', 6),
  s('M171,215 L179,225', 7),
  s('M97,214 L94,294', 29), s('M94,294 L90,350', 21),
  s('M123,214 L126,294', 29), s('M126,294 L130,350', 21),
  f('M90,342 C82,344 76,351 74,361 C72,370 75,376 82,377 L99,377 C104,376 105,370 104,362 C103,352 99,343 93,341 Z'),
  f('M130,342 C138,344 144,351 146,361 C148,370 145,376 138,377 L121,377 C116,376 115,370 116,362 C117,352 121,343 127,341 Z'),
]

// Face, on its own canvas. Ears sit proud of the skull so they can be tapped.
const HEAD_ART = [
  f('M100,26 C128,26 146,48 146,78 C146,106 132,134 114,148 C108,153 92,153 86,148 C68,134 54,106 54,78 C54,48 72,26 100,26 Z'),
  f('M52,72 C44,70 40,78 42,88 C44,97 50,101 55,99 Z'),
  f('M148,72 C156,70 160,78 158,88 C156,97 150,101 145,99 Z'),
  f('M88,146 C96,143 105,143 112,146 C114,158 114,169 113,180 C104,184 95,184 87,180 C86,169 86,158 88,146 Z'),
]

// One hand, palm forward, fingers up. Mirrored for the other side.
const HAND_ART = [
  f('M66,98 C60,108 58,124 60,142 C62,160 74,172 92,174 L118,174 C134,172 142,158 143,140 C144,122 142,106 136,98 Z'),
  s('M78,104 L74,44', 21),
  s('M99,102 L98,32', 22),
  s('M119,104 L122,44', 21),
  s('M136,112 L144,64', 18),
  s('M66,124 L34,100', 23),
  f('M74,166 C90,161 116,161 130,166 C130,178 129,189 128,198 C114,202 89,202 76,198 C75,189 74,178 74,166 Z'),
]

// One foot from above, toes at the top. Mirrored for the other side.
const FOOT_ART = [
  f('M66,78 C58,98 58,124 62,148 C66,170 80,182 100,182 C120,182 134,170 138,148 C142,124 142,98 134,78 Z'),
  f('M76,80 C64,78 58,66 62,54 C66,44 80,42 87,49 C93,55 92,70 88,80 Z'),
  s('M96,76 L95,52', 18), s('M111,78 L113,56', 16),
  s('M124,82 L128,62', 14), s('M134,88 L140,72', 11),
]

// Trunk only, for tummy precision. Own canvas so quadrants are big targets.
const TORSO_ART = [
  f('M58,20 C46,34 44,58 47,84 C50,108 52,128 56,150 C58,166 66,178 78,183 L122,183 C134,178 142,166 144,150 C148,128 150,108 153,84 C156,58 154,34 142,20 Z'),
]

export const ART = {
  front: BODY_ART,
  back: BODY_ART,
  head: HEAD_ART,
  'hand-left': HAND_ART,
  'hand-right': HAND_ART,
  'foot-left': FOOT_ART,
  'foot-right': FOOT_ART,
  torso: TORSO_ART,
}

// ---------------------------------------------------------------- views

// Faint feature lines drawn on top of the silhouette. Without these a face is
// a blank oval and the child has to guess where their eye is. They are drawn
// above the selection layer so they stay readable on a highlighted part.
export const GUIDES = {
  head: [
    'M68,74 C74,67 86,67 92,74 C86,81 74,81 68,74 Z',
    'M108,74 C114,67 126,67 132,74 C126,81 114,81 108,74 Z',
    'M100,86 L100,104 M94,106 C97,109 103,109 106,106',
    'M82,124 C90,132 110,132 118,124',
    'M46,80 C50,78 52,86 49,91',
    'M154,80 C150,78 148,86 151,91',
  ],
  torso: [
    'M100,30 L100,176',
    'M46,96 L154,96',
  ],
  'hand-left': ['M64,116 C86,108 118,108 142,116'],
  'hand-right': ['M64,116 C86,108 118,108 142,116'],
  'foot-left': ['M62,112 C80,104 122,104 138,112'],
  'foot-right': ['M62,112 C80,104 122,104 138,112'],
}

export const VIEWS = {
  front: { label: 'Front', viewBox: `0 0 ${W} ${H}`, kind: 'body' },
  back: { label: 'Back', viewBox: `0 0 ${W} ${H}`, kind: 'body' },
  head: { label: 'Head', viewBox: '0 0 200 200', kind: 'detail', backTo: 'front', title: 'Head and face' },
  'hand-left': { label: 'Left hand', viewBox: '0 0 200 200', kind: 'detail', backTo: 'front', title: 'Left hand' },
  'hand-right': { label: 'Right hand', viewBox: '0 0 200 200', kind: 'detail', backTo: 'front', title: 'Right hand', mirror: true },
  'foot-left': { label: 'Left foot', viewBox: '0 0 200 200', kind: 'detail', backTo: 'front', title: 'Left foot' },
  'foot-right': { label: 'Right foot', viewBox: '0 0 200 200', kind: 'detail', backTo: 'front', title: 'Right foot', mirror: true },
  torso: { label: 'Tummy', viewBox: '0 0 200 200', kind: 'detail', backTo: 'front', title: 'Tummy' },
}

export const BODY_VIEWS = ['front', 'back']

// ---------------------------------------------------------------- regions

const path = (d) => ({ type: 'path', d })
const circle = (cx, cy, r) => ({ type: 'circle', cx, cy, r })

// Region boundaries are curves, not rectangle edges. The mask keeps a selection
// inside the silhouette, but it cannot soften an internal edge -- a rectangular
// chest still reads as a band cut across the body. Neighbouring regions share
// the same boundary curve so they tile with no seam and no overlap.
//
// Paths may run wider than the body; the mask trims the overflow, which is what
// lets each boundary be drawn as a single clean sweep.

export const REGIONS = [
  // ---------- FRONT ----------
  { id: 'head', view: 'front', label: 'Head', group: 'head', zoomTo: 'head', dot: [110, 47],
    shape: path('M80,6 C99,-1 121,-1 140,6 C142,38 138,66 129,84 C117,90 103,90 91,84 C82,66 78,38 80,6 Z') },
  { id: 'neck', view: 'front', label: 'Neck', group: 'throat',
    shape: path('M96,76 C104,72 116,72 124,76 C125,86 125,94 124,101 C116,104 104,104 96,101 C95,94 95,86 96,76 Z') },
  { id: 'chest', view: 'front', label: 'Chest', group: 'chest',
    shape: path('M64,96 C72,84 88,84 96,100 C105,103 115,103 124,100 C132,84 148,84 156,96 C154,120 151,139 144,157 C124,165 96,165 76,157 C69,139 66,120 64,96 Z') },
  { id: 'tummy', view: 'front', label: 'Tummy', group: 'tummy', zoomTo: 'torso', dot: [110, 182],
    shape: path('M76,157 C96,165 124,165 144,157 C143,173 143,189 142,203 C122,211 98,211 78,203 C77,189 77,173 76,157 Z') },
  { id: 'hips', view: 'front', label: 'Hips', group: 'tummy',
    shape: path('M78,203 C98,211 122,211 142,203 C142,213 141,221 139,227 C122,233 98,233 81,227 C79,221 78,213 78,203 Z') },
  { id: 'arm-right', view: 'front', label: 'Right arm', group: 'limb',
    shape: path('M42,90 C54,81 70,85 78,98 C74,124 72,152 74,176 C72,192 69,204 67,217 C57,221 46,219 42,211 C42,168 40,124 42,90 Z') },
  { id: 'arm-left', view: 'front', label: 'Left arm', group: 'limb',
    shape: path('M178,90 C166,81 150,85 142,98 C146,124 148,152 146,176 C148,192 151,204 153,217 C163,221 174,219 178,211 C178,168 180,124 178,90 Z') },
  { id: 'hand-right', view: 'front', label: 'Right hand', group: 'limb', zoomTo: 'hand-right', dot: [61, 226],
    shape: path('M40,204 C50,196 70,196 80,204 C82,222 80,242 74,256 C61,261 48,259 42,252 C38,236 37,218 40,204 Z') },
  { id: 'hand-left', view: 'front', label: 'Left hand', group: 'limb', zoomTo: 'hand-left', dot: [159, 226],
    shape: path('M180,204 C170,196 150,196 140,204 C138,222 140,242 146,256 C159,261 172,259 178,252 C182,236 183,218 180,204 Z') },
  { id: 'leg-right', view: 'front', label: 'Right leg', group: 'limb',
    shape: path('M76,224 C88,232 102,232 110,224 C110,274 107,314 105,352 C98,358 85,358 79,352 C77,310 76,266 76,224 Z') },
  { id: 'leg-left', view: 'front', label: 'Left leg', group: 'limb',
    shape: path('M144,224 C132,232 118,232 110,224 C110,274 113,314 115,352 C122,358 135,358 141,352 C143,310 144,266 144,224 Z') },
  { id: 'foot-right', view: 'front', label: 'Right foot', group: 'limb', zoomTo: 'foot-right', dot: [88, 361],
    shape: path('M72,346 C82,339 96,339 106,346 C110,357 110,370 104,377 C92,380 77,380 69,375 C67,363 68,354 72,346 Z') },
  { id: 'foot-left', view: 'front', label: 'Left foot', group: 'limb', zoomTo: 'foot-left', dot: [132, 361],
    shape: path('M148,346 C138,339 124,339 114,346 C110,357 110,370 116,377 C128,380 143,380 151,375 C153,363 152,354 148,346 Z') },

  // ---------- BACK (same anatomy, different names) ----------
  { id: 'back-head', view: 'back', label: 'Back of head', group: 'head',
    shape: path('M80,6 C99,-1 121,-1 140,6 C142,38 138,66 129,84 C117,90 103,90 91,84 C82,66 78,38 80,6 Z') },
  { id: 'back-neck', view: 'back', label: 'Back of neck', group: 'back',
    shape: path('M96,76 C104,72 116,72 124,76 C125,86 125,94 124,101 C116,104 104,104 96,101 C95,94 95,86 96,76 Z') },
  { id: 'upper-back', view: 'back', label: 'Upper back', group: 'back',
    shape: path('M64,96 C72,84 88,84 96,100 C105,103 115,103 124,100 C132,84 148,84 156,96 C154,120 151,139 144,157 C124,165 96,165 76,157 C69,139 66,120 64,96 Z') },
  { id: 'lower-back', view: 'back', label: 'Lower back', group: 'back',
    shape: path('M76,157 C96,165 124,165 144,157 C143,173 143,189 142,203 C122,211 98,211 78,203 C77,189 77,173 76,157 Z') },
  { id: 'bottom', view: 'back', label: 'Bottom', group: 'tummy',
    shape: path('M78,203 C98,211 122,211 142,203 C142,213 141,221 139,227 C122,233 98,233 81,227 C79,221 78,213 78,203 Z') },
  { id: 'back-arm-right', view: 'back', label: 'Right arm', group: 'limb',
    shape: path('M42,90 C54,81 70,85 78,98 C74,124 72,152 74,176 C72,192 69,204 67,217 C57,221 46,219 42,211 C42,168 40,124 42,90 Z') },
  { id: 'back-arm-left', view: 'back', label: 'Left arm', group: 'limb',
    shape: path('M178,90 C166,81 150,85 142,98 C146,124 148,152 146,176 C148,192 151,204 153,217 C163,221 174,219 178,211 C178,168 180,124 178,90 Z') },
  { id: 'back-leg-right', view: 'back', label: 'Right leg', group: 'limb',
    shape: path('M76,224 C88,232 102,232 110,224 C110,274 107,314 105,352 C98,358 85,358 79,352 C77,310 76,266 76,224 Z') },
  { id: 'back-leg-left', view: 'back', label: 'Left leg', group: 'limb',
    shape: path('M144,224 C132,232 118,232 110,224 C110,274 113,314 115,352 C122,358 135,358 141,352 C143,310 144,266 144,224 Z') },

  // ---------- HEAD detail ----------
  { id: 'forehead', view: 'head', label: 'Forehead', group: 'head',
    shape: path('M58,30 C78,20 122,20 142,30 C144,44 144,54 142,62 C122,55 78,55 58,62 C56,54 56,44 58,30 Z') },
  { id: 'eye-right', view: 'head', label: 'Right eye', group: 'eyes',
    shape: path('M60,74 C67,60 93,60 100,74 C93,88 67,88 60,74 Z') },
  { id: 'eye-left', view: 'head', label: 'Left eye', group: 'eyes',
    shape: path('M100,74 C107,60 133,60 140,74 C133,88 107,88 100,74 Z') },
  { id: 'ear-right', view: 'head', label: 'Right ear', group: 'ears',
    shape: path('M36,70 C47,63 57,72 57,86 C57,100 47,107 36,100 C31,90 31,79 36,70 Z') },
  { id: 'ear-left', view: 'head', label: 'Left ear', group: 'ears',
    shape: path('M164,70 C153,63 143,72 143,86 C143,100 153,107 164,100 C169,90 169,79 164,70 Z') },
  { id: 'nose', view: 'head', label: 'Nose', group: 'head',
    shape: path('M86,88 C95,83 105,83 114,88 C116,98 113,108 106,113 C99,116 93,114 88,109 C84,101 84,93 86,88 Z') },
  { id: 'mouth', view: 'head', label: 'Mouth or teeth', group: 'mouth',
    shape: path('M72,117 C88,109 112,109 128,117 C127,130 120,140 109,143 C96,145 82,139 76,131 C73,127 72,121 72,117 Z') },
  { id: 'throat', view: 'head', label: 'Throat', group: 'throat',
    shape: path('M82,148 C93,143 107,143 118,148 C120,160 120,172 118,183 C107,188 93,188 84,183 C82,172 81,160 82,148 Z') },

  // ---------- NOT ON THE BODY ----------
  // The child who feels ill all over and cannot point anywhere. Every other
  // region answers "where"; this one answers "nowhere in particular", which is
  // a real presentation the body map alone cannot express -- and the one the
  // general-unwell packet was researched for.
  //
  // `view: null` keeps it off every drawing (`regionsForView` matches on view),
  // so it is reachable only from the button under the map. It still behaves
  // like a region everywhere else: `regionLabel` names it in the chip row and
  // `groupsForRegions` turns it into the group `general`.
  //
  // `general` is deliberately absent from GROUP_GATE, so no depth or mechanism
  // question is asked about it -- "on your skin or inside?" has no answer when
  // the complaint is the whole child.
  { id: 'all-over', view: null, label: 'All over', group: 'general' },

  // ---------- HAND detail (one drawing, mirrored per side) ----------
  ...['left', 'right'].flatMap((side) => {
    const v = `hand-${side}`
    const S = side === 'left' ? 'Left' : 'Right'
    return [
      { id: `${v}-thumb`, view: v, label: `${S} thumb`, group: 'limb',
        shape: path('M20,82 C33,71 53,74 65,91 C73,104 71,121 60,130 C45,134 28,124 22,109 C17,100 17,89 20,82 Z') },
      { id: `${v}-index`, view: v, label: `${S} index finger`, group: 'limb',
        shape: path('M60,24 C71,17 87,19 91,32 C93,59 91,86 89,109 C78,116 65,113 61,105 C58,79 58,49 60,24 Z') },
      { id: `${v}-middle`, view: v, label: `${S} middle finger`, group: 'limb',
        shape: path('M85,11 C96,4 111,7 115,20 C117,51 115,84 113,107 C102,114 89,111 85,103 C83,72 83,41 85,11 Z') },
      { id: `${v}-ring`, view: v, label: `${S} ring finger`, group: 'limb',
        shape: path('M109,24 C120,17 135,19 139,32 C141,59 139,86 137,109 C126,116 113,113 109,105 C107,79 107,49 109,24 Z') },
      { id: `${v}-little`, view: v, label: `${S} little finger`, group: 'limb',
        shape: path('M131,46 C142,39 155,43 157,57 C159,78 155,99 150,113 C139,119 128,115 127,107 C127,86 129,63 131,46 Z') },
      { id: `${v}-palm`, view: v, label: `${S} palm`, group: 'limb',
        shape: path('M54,98 C84,89 118,89 150,98 C152,124 150,150 143,173 C116,181 84,181 61,173 C54,150 52,124 54,98 Z') },
      { id: `${v}-wrist`, view: v, label: `${S} wrist`, group: 'limb',
        shape: path('M61,173 C84,181 116,181 143,173 C143,184 142,194 141,202 C116,207 84,207 63,202 C62,194 61,184 61,173 Z') },
    ]
  }),

  // ---------- FOOT detail (one drawing, mirrored per side) ----------
  ...['left', 'right'].flatMap((side) => {
    const v = `foot-${side}`
    const S = side === 'left' ? 'Left' : 'Right'
    return [
      { id: `${v}-big-toe`, view: v, label: `Big toe, ${side} foot`, group: 'limb',
        shape: path('M56,44 C66,34 84,34 92,48 C96,62 94,78 87,88 C75,94 61,90 56,80 C52,68 52,52 56,44 Z') },
      { id: `${v}-toes`, view: v, label: `Other toes, ${side} foot`, group: 'limb',
        shape: path('M93,38 C111,29 135,36 149,51 C155,64 152,81 144,91 C125,97 104,93 92,83 C86,69 87,48 93,38 Z') },
      { id: `${v}-top`, view: v, label: `Top of ${side} foot`, group: 'limb',
        shape: path('M54,78 C82,68 118,68 144,78 C146,95 146,111 144,126 C116,134 84,134 56,126 C54,111 52,95 54,78 Z') },
      { id: `${v}-arch`, view: v, label: `${S} arch`, group: 'limb',
        shape: path('M56,126 C84,134 116,134 144,126 C144,138 143,149 142,159 C114,167 86,167 58,159 C57,149 56,138 56,126 Z') },
      { id: `${v}-heel`, view: v, label: `${S} heel`, group: 'limb',
        shape: path('M58,159 C86,167 114,167 142,159 C140,171 133,182 120,188 C106,193 94,193 80,188 C67,182 60,171 58,159 Z') },
    ]
  }),

  // ---------- TORSO detail: quadrants, from the CHILD's point of view ----------
  { id: 'torso-upper-right', view: 'torso', label: 'Top right of tummy', group: 'tummy',
    shape: path('M38,14 C60,5 86,5 100,12 C100,44 100,72 100,101 C78,107 56,105 40,98 C36,70 36,40 38,14 Z') },
  { id: 'torso-upper-left', view: 'torso', label: 'Top left of tummy', group: 'tummy',
    shape: path('M162,14 C140,5 114,5 100,12 C100,44 100,72 100,101 C122,107 144,105 160,98 C164,70 164,40 162,14 Z') },
  { id: 'torso-lower-right', view: 'torso', label: 'Bottom right of tummy', group: 'tummy',
    shape: path('M40,98 C56,105 78,107 100,101 C100,132 100,162 100,192 C78,196 56,192 44,184 C40,157 38,126 40,98 Z') },
  { id: 'torso-lower-left', view: 'torso', label: 'Bottom left of tummy', group: 'tummy',
    shape: path('M160,98 C144,105 122,107 100,101 C100,132 100,162 100,192 C122,196 144,192 156,184 C160,157 162,126 160,98 Z') },
  { id: 'torso-navel', view: 'torso', label: 'Belly button', group: 'tummy', shape: circle(100, 99, 17) },
]

// ---------------------------------------------------------------- depth

// How deep a complaint in each group can be, which decides whether the child
// is asked "on your skin, or inside?" after tapping.
//
//   internal -- only ever inside (a throat, an eye). Never ask.
//   ask      -- genuinely ambiguous. A tummy can be a rash or a stomach ache.
//
// `ask` is suppressed when a follow-up for the group already establishes depth
// on its own -- see resolvesDepth in vocab.js. That is why `head` is marked
// `ask` here but is never actually asked: "Did you bump your head?" gets there
// with a better question.
// Upper vs lower limb. The `limb` group spans 36 regions; the literature does
// not. Ottawa Ankle/Knee are weight-bearing rules for the lower limb, the elbow
// extension test and distal-radius rules are upper limb. Without this split a
// question can only ever say "could you use it", which is not the criterion any
// of them state. See packets/limb-injury.md, Still open.
const LOWER = /^(back-)?(leg|foot)/

// Three groups contain regions a packet must be able to tell apart. Without
// this, `applies` has no region filter and every packet in a group fires for
// every tap in it -- which on 2026-09-09 meant a child who tapped Forehead with
// a headache was asked "Is blood coming out of both sides of your nose?" for
// three of their six slots, displacing the three headache items ranked by hand
// the day before.
//
// `head` and `throat` each hold two genuinely different complaints:
//   head   -- the nose is its own presentation (nosebleed, something up it)
//             and shares nothing with headache or a scalp injury.
//   throat -- the neck is structural and the throat is a swallowing tube; a
//             sore throat and a wry neck are not the same visit.
// `limb` splits by upper/lower because the weight-bearing criteria only apply
// to legs.
//
// A packet with no `subgroups` field still applies to the whole group, so this
// is opt-in: only packets that tag themselves get narrowed.
export const subgroupOf = (regionId) => {
  const r = regionById(regionId)
  if (r?.group === 'limb') return LOWER.test(regionId) ? 'lower' : 'upper'
  if (r?.group === 'head') return regionId === 'nose' ? 'nose' : 'head-general'
  if (r?.group === 'throat') return regionId === 'throat' ? 'throat-general' : 'neck'
  return null
}

export const subgroupsForRegions = (ids) =>
  [...new Set(ids.map(subgroupOf).filter(Boolean))]

// Which discriminating question a group asks before its follow-ups.
//
// For most groups the useful split is depth -- a tummy rash and a stomach ache
// need different questions. For the HEAD it is not: a scalp bruise and a
// migraine are not "outside vs inside", they are traumatic vs non-traumatic.
// Asking a child with a headache "on your skin, or inside?" gets an answer that
// routes nowhere useful, which is why head previously had no gate at all and a
// child with a headache was asked what they fell off.
// The gate questions asked between the body map and the follow-ups, in order.
//
// A group may need MORE THAN ONE gate, and the second may depend on the first.
// `limb` is why: "on your skin or inside?" and "did you bump it?" are different
// questions with different answers, and the limb group has a packet on each
// side of BOTH splits. A grazed knee, a broken wrist and a limp with no injury
// are three different presentations, and one gate cannot separate them.
//
// `when` makes a gate conditional on an earlier answer in the same group. The
// mechanism question is only asked once the child has said the problem is
// inside them (or that they do not know) -- asking whether a child bumped a
// rash is the app not listening, which is the exact failure the depth gate was
// built to avoid.
//
// `key` is where the answer is stored on the report, and is what packet
// metadata matches: `meta.depth` filters on the `depth` answer, `meta.mechanism`
// on the `mechanism` answer. Head previously stored its MECHANISM answer in the
// depth slot, which is why `head-injury` carried `depth: "injury"` -- a value
// no depth question can produce. That also silently emptied the sensation
// screen for any child who tapped only their head, because sensations are
// pruned by surface/inside and "injury" is neither.
export const GROUP_GATE = {
  // Head asks both, in the same shape as limb. It used to ask mechanism ONLY,
  // on the reasoning that a scalp bruise and a migraine are traumatic vs
  // non-traumatic rather than outside vs inside. That held while head was the
  // only packet serving the group. It stopped holding when `skin-rash` shipped
  // as `depth: surface` across all nine groups: with no depth answer for head,
  // nothing filters it, and a child reporting a headache was offered "are there
  // spots or a rash?" as their second question. Asking depth first also gives
  // the row-5 headache packet somewhere to sit -- inside, no injury.
  //
  // Head asks mechanism FIRST and limb asks depth first. They differ because
  // each group's primary split differs. A scalp hematoma is an injury AND on
  // the surface, so gating head-injury on depth would drop the child PECARN
  // exists for; mechanism separates head cleanly and depth only matters once
  // the answer is "it just started hurting". Limb is the other way round: a
  // grazed knee and a fractured wrist are both injuries, and depth is what
  // tells them apart.
  head: [
    { key: 'mechanism', type: 'mechanism' },
    { key: 'depth', type: 'depth', when: { mechanism: ['no-injury', 'unknown'] } },
  ],
  chest: [{ key: 'depth', type: 'depth' }],
  tummy: [{ key: 'depth', type: 'depth' }],
  limb: [
    { key: 'depth', type: 'depth' },
    { key: 'mechanism', type: 'mechanism', when: { depth: ['inside', 'unknown'] } },
  ],
  back: [{ key: 'depth', type: 'depth' }],
  // eyes, ears, mouth, throat are internal: no gate, no question.
}

export const GROUP_DEPTH = {
  head: 'ask',
  eyes: 'internal',
  ears: 'internal',
  mouth: 'internal',
  throat: 'internal',
  chest: 'ask',
  tummy: 'ask',
  limb: 'ask',
  back: 'ask',
  general: 'internal',
}

// ---------------------------------------------------------------- lookups

export const regionById = (id) => REGIONS.find((r) => r.id === id)
export const regionLabel = (id) => regionById(id)?.label ?? id
export const regionsForView = (view) => REGIONS.filter((r) => r.view === view)

export const groupsForRegions = (ids) =>
  [...new Set(ids.map((id) => regionById(id)?.group).filter(Boolean))]

// The regions the child actually tapped within one group, so the depth question
// can name them back ("Tummy" / "Left arm, Right leg").
export const regionsInGroup = (ids, group) =>
  ids.filter((id) => regionById(id)?.group === group)

// A detail view counts as "selected" on the body if any of its own regions are.
export const viewHasSelection = (view, selected) =>
  regionsForView(view).some((r) => selected.includes(r.id))
