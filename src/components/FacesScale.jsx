// Pain intensity, modelled on the Faces Pain Scale - Revised (Hicks et al.).
//
// NOT Wong-Baker FACES. That scale is trademarked and its use in an app needs
// permission from the Wong-Baker FACES Foundation, and it also runs smile-to-
// tears, which is the thing FPS-R was built to avoid. These faces are drawn
// here, in this file, from the rules below.
//
// Three rules this deliberately follows, all easy to get wrong:
//
//  1. The range runs smile-to-tears, chosen deliberately on 2026-09-13 over the
//     flat-to-frown range this file used before. The tradeoff is real and worth
//     knowing: FPS-R uses a neutral face at 0 precisely because a grinning face
//     invites a child to rate how the face *feels* rather than how much they
//     hurt, which measurably skews scores. Set against that, smile-to-tears is
//     the range children and clinicians already recognise, and a scale nobody
//     understands measures nothing. If a clinician reviewing this app says to
//     go back, the change is `mouthCurve` and the `tears` flag.
//
//  2. The guide character's face is never used here. The guide is a companion;
//     if it looked hurt at 10 the child would be reading its emotion instead of
//     reporting their own.
//
//  3. One colour throughout. A green-to-red ramp would add a second, redundant
//     signal that a colour-blind child cannot read, and it tells the child what
//     to think before they have decided.
//
// Drawn as line art rather than filled shapes: at 82px a filled face turns into
// a blob, and outlines keep the mouth and brow -- the only parts that carry
// meaning -- legible.

const FACE_VALUES = [0, 2, 4, 6, 8, 10]

// Plain words, not clinical ones. Deliberately avoids the Wong-Baker phrasings.
const FACE_LABELS = ['No hurt', 'A little', 'A bit more', 'Even more', 'A lot', 'Worst ever']

function PainFace({ step, size = 56 }) {
  // step 0..5.
  //
  // The features SPREAD as pain rises. A distressed face opens up -- brows
  // climb, the mouth drops away from the eyes -- and keeping everything on
  // fixed coordinates was what made the top of the scale look cramped and odd
  // rather than anguished. `spread` drives that, and it is why the last face
  // has more air in it than the first.
  const spread = step / 5

  // Mouth: a clear smile at 0, flat around the middle of the scale, a deep
  // frown at 10 -- and it drops away from the eyes as it goes.
  const mouthY = 66 + spread * 6
  const mouthCurve = 15 - 7.8 * step

  // Brows are on every face and carry as much of the expression as the mouth.
  // They travel from a symmetrical arch (both ends low, middle raised -- the
  // happy brow) to a diagonal with the INNER end high and the outer end low.
  // That oblique is distress; the opposite -- inner ends pulled down toward the
  // nose -- reads as anger, which is a different question entirely. Drawn as a
  // quadratic so one shape can be an arch at one end of the scale and a
  // diagonal at the other.
  const browInner = 38 - spread * 13
  const browOuter = 38 + spread * 2.5
  const browCtrl = 31 + spread * 3

  // Eyes narrow as pain rises and sit a little higher, which both reads as a
  // wince and opens the distance to the mouth.
  const eyeY = 52 - spread * 2.5
  const eyeR = 5.4 - step * 0.35

  // Tears on the last face only. They are the one place this scale allows an
  // emotional cue, because at 10 a child crying is the thing being described
  // rather than a mood laid over it -- and every face below 10 stays free of
  // them so the scale is not read as "how upset am I".
  const tears = step === 5

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true"
         fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="50" r="40" strokeWidth="3" />

      <g strokeWidth="3">
        <path d={`M27 ${browOuter} Q34.5 ${browCtrl} 42 ${browInner}`} />
        <path d={`M73 ${browOuter} Q65.5 ${browCtrl} 58 ${browInner}`} />
      </g>

      {/* Outlined eyes with a filled pupil: an open ring reads as an eye at
          small sizes where a solid dot reads as a freckle. */}
      <circle cx="36" cy={eyeY} r={eyeR} strokeWidth="2.6" />
      <circle cx="64" cy={eyeY} r={eyeR} strokeWidth="2.6" />
      <circle cx="36" cy={eyeY} r="1.9" fill="currentColor" stroke="none" />
      <circle cx="64" cy={eyeY} r="1.9" fill="currentColor" stroke="none" />

      {tears && (
        <g fill="currentColor" stroke="none">
          {/* Teardrop: a point at the top rounding into a bowl at the bottom,
              falling from the outer corner of each eye. */}
          <path d={`M28 ${eyeY + 8} q4.4 5.2 4.4 8.2 a4.4 4.4 0 0 1 -8.8 0 q0 -3 4.4 -8.2 z`} />
          <path d={`M72 ${eyeY + 8} q4.4 5.2 4.4 8.2 a4.4 4.4 0 0 1 -8.8 0 q0 -3 4.4 -8.2 z`} />
        </g>
      )}

      <path d={`M34 ${mouthY} Q50 ${mouthY + mouthCurve} 66 ${mouthY}`} strokeWidth="3.4" />
    </svg>
  )
}

export default function FacesScale({ value, onChange, tier }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Three across rather than six: on a phone this makes each face a
          large, easy target, which matters when the child using it feels awful. */}
      <div className="grid grid-cols-3 gap-2.5">
        {FACE_VALUES.map((v, i) => {
          const selected = value === v
          return (
            <button
              key={v}
              onClick={() => onChange(v)}
              aria-pressed={selected}
              aria-label={`${FACE_LABELS[i]}, ${v} out of 10`}
              className={`rounded-[1.4rem] px-2 pt-3 pb-2 flex flex-col items-center gap-1 transition active:scale-95
                ${selected ? 'glass-on bg-sky-deep text-white' : 'glass bg-white/45 text-ink/80'}`}
            >
              <PainFace step={i} size={68} />
              {/* Number above the word, and shown at every age. A young child
                  is never asked to CHOOSE a number -- they pick a face -- so
                  the reliability limit on numeric self-report below age 8 does
                  not apply here. It is a label on the face, and it means the
                  child and the nurse are looking at the same scale. */}
              <span className={`text-xl font-extrabold leading-none
                ${selected ? 'text-white' : 'text-ink/70'}`}>
                {v}
              </span>
              <span className={`text-xs font-bold leading-tight text-center
                ${selected ? 'text-white/90' : 'text-ink/55'}`}>
                {FACE_LABELS[i]}
              </span>
            </button>
          )
        })}
      </div>

      {/* The 8-12 tier gets the full 0-10 numeric scale; numeric self-report
          isn't reliable much below age 8, which is why the younger tier only
          ever sees faces. */}
      {tier === 'older' && (
        <div>
          <p className="text-sm font-bold text-ink/50 mb-2 text-center">
            Or pick the exact number
          </p>
          <div className="grid grid-cols-11 gap-1">
            {Array.from({ length: 11 }, (_, n) => (
              <button
                key={n}
                onClick={() => onChange(n)}
                aria-pressed={value === n}
                className={`h-12 rounded-xl border-2 font-extrabold text-sm transition active:scale-90
                  ${value === n ? 'bg-sky-deep text-white' : 'bg-sky-soft border-ink/10'}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
