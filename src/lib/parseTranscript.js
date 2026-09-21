// Turns what the child said into the same structured fields the tap flow
// produces, so the voice path and the tap path converge on one report shape.
//
// This is a deterministic keyword matcher on purpose. It runs offline, costs
// nothing, never invents a symptom, and is fully explainable -- all of which
// matter more than cleverness for a first version. If we later want an LLM to
// do this, it slots in behind `parseTranscript()` and everything downstream is
// unchanged. The confirmation screen exists either way, because neither a
// keyword matcher nor a model should be trusted to put words in a kid's mouth.

const REGION_WORDS = [
  { ids: ['head'], words: ['head', 'skull'] },
  { ids: ['forehead'], words: ['forehead'] },
  { ids: ['eye-left', 'eye-right'], words: ['eye', 'eyes', 'eyeball'] },
  { ids: ['ear-left', 'ear-right'], words: ['ear', 'ears'] },
  { ids: ['nose'], words: ['nose', 'nostril', 'nosebleed'] },
  { ids: ['mouth'], words: ['mouth', 'tooth', 'teeth', 'gum', 'gums', 'tongue', 'lip'] },
  { ids: ['throat'], words: ['throat', 'swallow', 'swallowing'] },
  { ids: ['neck'], words: ['neck'] },
  { ids: ['chest'], words: ['chest', 'heart', 'lungs', 'breathing'] },
  { ids: ['tummy'], words: ['tummy', 'stomach', 'belly', 'gut', 'abdomen', 'tum'] },
  { ids: ['hips'], words: ['hip', 'hips'] },
  { ids: ['arm-left', 'arm-right'], words: ['arm', 'arms', 'elbow', 'shoulder'] },
  { ids: ['hand-left', 'hand-right'], words: ['hand', 'hands', 'finger', 'fingers', 'thumb', 'wrist'] },
  { ids: ['leg-left', 'leg-right'], words: ['leg', 'legs', 'knee', 'thigh', 'shin', 'calf'] },
  { ids: ['foot-left', 'foot-right'], words: ['foot', 'feet', 'toe', 'toes', 'ankle'] },
  { ids: ['upper-back', 'lower-back'], words: ['back', 'spine'] },
  { ids: ['bottom'], words: ['bottom', 'butt'] },
]

const SENSATION_WORDS = {
  sharp: ['sharp', 'poke', 'poking', 'stab', 'stabbing', 'pointy', 'pinch', 'prick'],
  burning: ['burn', 'burning', 'burns', 'hot', 'sting', 'stinging', 'stings', 'fire', 'spicy'],
  aching: ['ache', 'aches', 'aching', 'achy', 'sore', 'soreness'],
  throbbing: ['throb', 'throbbing', 'pounding', 'pulsing', 'beating', 'thumping'],
  punch: ['punch', 'punched', 'bonk', 'bonked', 'hit', 'kicked', 'whack', 'slam'],
  squeezing: ['squeeze', 'squeezing', 'tight', 'tightness', 'crush', 'crushing', 'pressure'],
  itchy: ['itch', 'itchy', 'itches', 'scratchy'],
  dizzy: ['dizzy', 'spinning', 'spinny', 'lightheaded', 'woozy', 'wobbly'],
  queasy: ['sick', 'nausea', 'nauseous', 'queasy', 'vomit', 'throw up', 'threw up', 'yucky', 'barf'],
  tingly: ['tingle', 'tingly', 'tingling', 'numb', 'pins and needles', 'fuzzy', 'asleep'],
  stiff: ['stiff', 'stuck', "can't move", 'cannot move', 'hard to move'],
  cramping: ['cramp', 'cramps', 'cramping', 'scrunchy', 'twisting'],
}

const DURATION_WORDS = {
  'just-now': ['just now', 'right now', 'a minute ago', 'just started', 'a second ago'],
  'this-morning': ['this morning', 'after breakfast', 'at breakfast', 'earlier today', 'first period'],
  yesterday: ['yesterday', 'last night', 'since yesterday', 'overnight'],
  'few-days': ['few days', 'couple days', 'two days', 'three days', 'since monday', 'since tuesday'],
  'long-time': ['long time', 'weeks', 'a week', 'all week', 'forever', 'months', 'always'],
}

const NUMBER_WORDS = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
}

const WORD_INTENSITY = [
  { score: 9, phrases: ['really bad', 'so bad', 'worst', 'terrible', 'super bad', 'really really'] },
  { score: 7, phrases: ['a lot', 'pretty bad', 'hurts bad', 'a lot of pain'] },
  { score: 4, phrases: ['kind of', 'sort of', 'medium', 'a bit'] },
  { score: 2, phrases: ['a little', 'a tiny bit', 'not that bad', 'just a little'] },
]

// The child's own left/right, matched near a body word.
const sideOf = (text, word) => {
  const idx = text.indexOf(word)
  if (idx < 0) return null
  const window = text.slice(Math.max(0, idx - 22), idx + word.length)
  if (/\bleft\b/.test(window)) return 'left'
  if (/\bright\b/.test(window)) return 'right'
  return null
}

export const parseTranscript = (raw) => {
  const text = ` ${(raw || '').toLowerCase().replace(/[^a-z0-9\s']/g, ' ').replace(/\s+/g, ' ')} `
  const matched = []

  // --- regions ---
  const regions = new Set()
  for (const entry of REGION_WORDS) {
    for (const word of entry.words) {
      if (!text.includes(` ${word} `)) continue
      matched.push(word)
      const side = sideOf(text, word)
      if (side && entry.ids.length > 1) {
        const picked = entry.ids.find((id) => id.endsWith(side))
        // A stated side wins; otherwise we take both and let the child
        // deselect on the confirmation screen. Over-selecting is visible and
        // fixable, under-selecting silently loses information.
        if (picked) regions.add(picked)
        else entry.ids.forEach((id) => regions.add(id))
      } else {
        entry.ids.forEach((id) => regions.add(id))
      }
      break
    }
  }

  // --- sensations ---
  const sensations = new Set()
  for (const [id, words] of Object.entries(SENSATION_WORDS)) {
    for (const word of words) {
      if (text.includes(` ${word} `) || text.includes(`${word} `)) {
        sensations.add(id)
        matched.push(word)
        break
      }
    }
  }

  // --- intensity ---
  let intensity = null
  const numeric = text.match(/\b(10|[0-9])\b(?!\s*(am|pm|o'clock))/)
  if (numeric) {
    intensity = Number(numeric[1])
    matched.push(numeric[1])
  } else {
    for (const [word, value] of Object.entries(NUMBER_WORDS)) {
      if (text.includes(` ${word} out of ten `) || text.includes(` ${word} out of 10 `)) {
        intensity = value
        matched.push(word)
        break
      }
    }
  }
  if (intensity === null) {
    for (const band of WORD_INTENSITY) {
      if (band.phrases.some((p) => text.includes(p))) {
        intensity = band.score
        matched.push(band.phrases.find((p) => text.includes(p)))
        break
      }
    }
  }

  // --- duration ---
  let duration = null
  for (const [id, phrases] of Object.entries(DURATION_WORDS)) {
    const hit = phrases.find((p) => text.includes(p))
    if (hit) {
      duration = id
      matched.push(hit)
      break
    }
  }

  return {
    bodyRegions: [...regions],
    sensations: [...sensations],
    intensity,
    duration,
    matchedWords: [...new Set(matched)],
    understoodSomething: regions.size > 0 || sensations.size > 0,
  }
}
