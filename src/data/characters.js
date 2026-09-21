// The guide character.
//
// This was three procedurally-drawn placeholders (an otter, a fox and a cloud)
// with a picker screen at setup. They are gone: there is one hand-drawn bear
// now, and a choice of one is worse than no choice -- it looks broken. The
// array and `getCharacter` are kept so a second character is an append rather
// than a refactor, and `Setup.jsx` shows the picker again the moment there is
// more than one entry.
//
// Constraints the drawing follows, carried over from the placeholders because
// each exists for a reason:
//   - a non-human creature, so the guide carries no race or gender reading
//   - a silhouette a five-year-old can recognise at 90px
//   - never sad, scared or hurt-looking; calm and attentive is the worst it gets
//   - no red in the palette -- red means pain intensity elsewhere in the app
//
// No name and no blurb. The placeholders had both ("I like rivers, snacks, and
// listening"), and that copy was doing more to make the app feel babyish than
// any line of the drawing. An eleven-year-old in a hospital does not want to be
// introduced to a character; they want to be asked what hurts.

export const CHARACTERS = [
  {
    id: 'bear',
    name: 'the bear',
    voice: { pitch: 1.15, rate: 0.92 },
  },
]

export const getCharacter = (id) =>
  CHARACTERS.find((c) => c.id === id) ?? CHARACTERS[0]

export const DEFAULT_CHARACTER = CHARACTERS[0].id
