// The child's own avatar. Note the split from the guide character: the guide
// is a creature so it carries no identity, and identity lives here instead,
// where the child controls it.
//
// Skin tone is a `fill` value rather than a separate drawing, which is the
// pattern the real art should follow too -- one base figure, recolored.

export const SKIN_TONES = [
  { id: 'porcelain', hex: '#f6ddc8' },
  { id: 'light', hex: '#eec39a' },
  { id: 'tan', hex: '#d9a06b' },
  { id: 'brown', hex: '#a9704a' },
  { id: 'deep', hex: '#7a4a2e' },
  { id: 'rich', hex: '#4e2f1e' },
]

export const HAIR_COLORS = [
  { id: 'black', hex: '#2b2320' },
  { id: 'brown', hex: '#6b4429' },
  { id: 'blonde', hex: '#d9a441' },
  { id: 'red', hex: '#b5502e' },
  { id: 'grey', hex: '#9aa3ad' },
  { id: 'blue', hex: '#4a7fd8' },
]

export const HAIR_STYLES = [
  { id: 'short', label: 'Short' },
  { id: 'curly', label: 'Curly' },
  { id: 'long', label: 'Long' },
  { id: 'buzz', label: 'Buzzed' },
  { id: 'puffs', label: 'Puffs' },
  { id: 'none', label: 'None' },
]

export const ACCESSORIES = [
  { id: 'none', label: 'Nothing' },
  { id: 'glasses', label: 'Glasses' },
  { id: 'hat', label: 'Cap' },
  { id: 'bow', label: 'Bow' },
  { id: 'flower', label: 'Flower' },
]

export const SHIRT_COLORS = [
  { id: 'sky', hex: '#4a9dd8' },
  { id: 'mint', hex: '#5bbfa8' },
  { id: 'sun', hex: '#f2b544' },
  { id: 'grape', hex: '#8b7ec8' },
  { id: 'slate', hex: '#5a6b7d' },
  { id: 'rose', hex: '#d98aa4' },
]

export const DEFAULT_AVATAR = {
  skin: 'tan',
  hairStyle: 'short',
  hairColor: 'black',
  accessory: 'none',
  shirt: 'sky',
}

const hexOf = (list, id, fallback) =>
  list.find((x) => x.id === id)?.hex ?? fallback

function Hair({ style, color }) {
  switch (style) {
    case 'short':
      return <path d="M22 44 a28 28 0 0 1 56 0 q-8 -14 -28 -14 q-20 0 -28 14 Z" fill={color} />
    case 'buzz':
      return <path d="M23 42 a27 27 0 0 1 54 0 q-10 -9 -27 -9 q-17 0 -27 9 Z" fill={color} opacity="0.92" />
    case 'curly':
      return (
        <g fill={color}>
          <circle cx="30" cy="30" r="11" />
          <circle cx="45" cy="22" r="12" />
          <circle cx="60" cy="24" r="11" />
          <circle cx="72" cy="34" r="10" />
        </g>
      )
    case 'long':
      // Two things were wrong, both geometric.
      //
      // The head is `circle cx=50 cy=47 r=28`. The falls began at x=20 and x=80
      // -- outside it entirely -- so they read as ribbons floating beside the
      // face. Moving them to the head's edge was not enough, because they still
      // curved AWAY as they dropped: at y=62 the head's edge is at x=26 but the
      // fall was out at x=17, leaving a wedge of background between hair and
      // face. That gap is what looks disconnected.
      //
      // Now each fall starts well INSIDE the cap rather than at its rim, so
      // there is overlap instead of a seam, and its inner edge tracks the
      // head's curve down before flaring at the jaw.
      return (
        <g fill={color}>
          <path d="M22 44 a28 28 0 0 1 56 0 q-8 -15 -28 -15 q-20 0 -28 15 Z" />
          <path d="M27 33 q-9 24 -6 44 q2 6 10 5 q-8 -22 -1 -48 Z" />
          <path d="M73 33 q9 24 6 44 q-2 6 -10 5 q8 -22 1 -48 Z" />
        </g>
      )
    case 'puffs':
      return (
        <g fill={color}>
          <path d="M23 44 a27 27 0 0 1 54 0 q-9 -14 -27 -14 q-18 0 -27 14 Z" />
          <circle cx="19" cy="34" r="11" />
          <circle cx="81" cy="34" r="11" />
        </g>
      )
    default:
      return null
  }
}

function Accessory({ id }) {
  switch (id) {
    case 'glasses':
      return (
        <g stroke="#3a4655" strokeWidth="2.6" fill="none">
          <circle cx="39" cy="47" r="9" />
          <circle cx="61" cy="47" r="9" />
          <path d="M48 47 h4" />
        </g>
      )
    case 'hat':
      return (
        <g>
          <path d="M22 40 a28 26 0 0 1 56 0 Z" fill="#e0575b" />
          <path d="M20 40 h44 q6 0 6 5 h-50 Z" fill="#c94a4e" />
        </g>
      )
    case 'bow':
      // Moved left by 12. It sat at x 64-88 with the head centred on 50 and a
      // radius of 28, so most of it hung off the side of the head in empty
      // space rather than resting on the hair.
      return (
        <g fill="#d98aa4">
          <path d="M52 24 l12 -6 v12 Z" />
          <path d="M64 24 l12 -6 v12 Z" />
          <circle cx="64" cy="24" r="4" fill="#c9738f" />
        </g>
      )
    case 'flower':
      // Five petals round a centre, sitting on the same part of the hair as the
      // bow so the two read as alternatives in the same place.
      return (
        <g>
          <g fill="#e8a0bd">
            <circle cx="64" cy="17" r="5" />
            <circle cx="71" cy="22" r="5" />
            <circle cx="68" cy="30" r="5" />
            <circle cx="60" cy="30" r="5" />
            <circle cx="57" cy="22" r="5" />
          </g>
          <circle cx="64" cy="24" r="4" fill="#f2b544" />
        </g>
      )
    default:
      return null
  }
}

export default function Avatar({ avatar = DEFAULT_AVATAR, size = 120, className = '' }) {
  const skin = hexOf(SKIN_TONES, avatar.skin, '#d9a06b')
  const hair = hexOf(HAIR_COLORS, avatar.hairColor, '#2b2320')
  const shirt = hexOf(SHIRT_COLORS, avatar.shirt, '#4a9dd8')
  // Nothing hides the hair any more -- the headscarf was the only accessory
  // that did, and it is gone. Kept as a named flag rather than inlined, because
  // a hat or scarf added later will need it again.
  const coversHair = false

  return (
    <svg viewBox="0 0 100 112" width={size} height={size * 1.12} className={className} role="img" aria-label="Your avatar">
      {/* shoulders */}
      <path d="M24 112 q0 -28 26 -28 q26 0 26 28 Z" fill={shirt} />
      <rect x="42" y="66" width="16" height="20" rx="7" fill={skin} />

      {/* head */}
      <circle cx="50" cy="47" r="28" fill={skin} />

      {/* ears */}
      <circle cx="22" cy="50" r="6" fill={skin} />
      <circle cx="78" cy="50" r="6" fill={skin} />

      {!coversHair && <Hair style={avatar.hairStyle} color={hair} />}

      {/* face -- fixed, friendly, neutral */}
      <circle cx="39" cy="47" r="3.6" fill="#24303f" />
      <circle cx="61" cy="47" r="3.6" fill="#24303f" />
      <path d="M43 58 q7 5 14 0" stroke="#24303f" strokeWidth="2.4" strokeLinecap="round" fill="none" />

      <Accessory id={avatar.accessory} hairColor={hair} />
    </svg>
  )
}
