// Every option carries a stable tint, derived from its id so the same choice is
// always the same colour -- "Tight squeeze" is sand on every screen, every
// session. Rotating colours arbitrarily would be decoration; keeping them fixed
// makes the colour a second way to recognise an option, which matters most for
// the children who cannot read the label.
//
// Deriving from the id rather than listing them by hand means a new option
// added to vocab.js gets a colour without anyone remembering to assign one, and
// the colour never shifts when the list is reordered.
// Returned as a CSS variable name rather than a Tailwind class: Tailwind scans
// source text at build time, so a class built at runtime -- `bg-${tint}` -- is
// never generated and the element comes out unstyled. A custom property applied
// inline always works.
const TINTS = ['peach', 'butter', 'sage', 'mint', 'lilac', 'sand', 'powder']

// Returned at partial alpha, because these sit on a `.glass` surface: an opaque
// fill would hide the blur and the whole thing would just be a coloured box.
// The variables hold raw `r g b` triples so the alpha can be composed here.
export const tintFor = (id = '', alpha = 0.55) => {
  let n = 0
  for (let i = 0; i < id.length; i += 1) n = (n * 31 + id.charCodeAt(i)) >>> 0
  return `rgb(var(--t-${TINTS[n % TINTS.length]}) / ${alpha})`
}
