import markup from '../assets/bear.svg?raw'

// The hand-drawn guide. Four drawings -- resting, blinking, talking and waving
// -- merged into one file: about 90% of the art is identical across them, so
// the shared paths are stored once and the variants layered on top at
// opacity 0. Swapping a face part or an arm is a crossfade between two
// drawings, never a transform of one.
//
// `dangerouslySetInnerHTML` is deliberate. The alternative is hand-converting
// several hundred SVG attributes to camelCase, and it buys nothing: the markup
// is static, lives in this repo, and never comes from user input.
//
// A pose is a CSS class, not a different file. `src/index.css` maps each one to
// some combination of bounce / tilt / blink / talk / arm-up. See the notes
// there for the three ways this drawing can be broken by CSS -- they are all
// mistakes that were actually made and fixed.

const POSE_CLASS = {
  // The resting state. Every pose includes it unless it would fight.
  idle: 'g-bounce g-tilt g-blink',
  attentive: 'g-bounce g-tilt g-blink',
  listen: 'g-bounce g-tilt g-blink',
  // Talking replaces the tilt: a head that sways while the mouth moves reads
  // as distracted rather than attentive.
  talk: 'g-bounce g-blink g-talk',
  // Slower, deeper tilt and no blink -- a still gaze reads as considering.
  think: 'g-bounce g-think',
  wave: 'g-bounce g-blink g-wave',
  // Point is the wave pose held still, with no flap.
  point: 'g-bounce g-blink g-point',
  // Both arms up, mouth open. This one came free: the wave drawing has both
  // arms raised, so the pose already existed.
  cheer: 'g-bounce g-cheer',
}

export default function Guide({ pose = 'idle', size = 130, className = '' }) {
  return (
    <div
      className={`guide ${POSE_CLASS[pose] ?? POSE_CLASS.idle} ${className}`}
      style={{ width: size, maxWidth: '100%' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
