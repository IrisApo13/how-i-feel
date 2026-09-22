// Pre-generate the app's spoken audio with ElevenLabs.
//
//   ELEVENLABS_API_KEY=sk_... ELEVENLABS_VOICE_ID=xxxx node scripts/build-audio.mjs
//   ... --dry          count characters and cost, call nothing
//   ... --reachable    only lines a child can actually be asked (much cheaper)
//
// WHY PRE-GENERATE RATHER THAN CALL A TTS SERVICE AT RUNTIME
//
// Every line this app speaks is a fixed string, so the audio can be made once,
// here, on a laptop. That matters for more than cost: a runtime call would send
// each question -- "Does it hurt when you pee?", "Have you thrown up?" -- to a
// third party, every time a child used the app. The whole privacy posture is
// that nothing a child touches leaves the device, and that is the sentence that
// gets this app past a hospital's first question. Pre-generated files are just
// static assets, like images. No key ships, no request is made, and it works
// with the wifi off.
//
// Files land in `public/audio/<sha1-of-text>.mp3`, which Vite copies verbatim
// into `dist/` at build time and Vercel serves from its CDN. Naming by content
// hash means editing a question's wording produces a new filename, so a stale
// clip can never be played over changed text -- the file simply will not exist
// and `speak()` falls back to the browser voice.

import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'

const OUT = 'public/audio'
const KEY = process.env.ELEVENLABS_API_KEY
const VOICE = process.env.ELEVENLABS_VOICE_ID
const DRY = process.argv.includes('--dry')
// Generate exactly one clip and play it. Always do this before a batch: a voice
// that reads well in ElevenLabs' own demo can still be wrong for a frightened
// six-year-old, and finding that out after 344 clips wastes the month's quota.
const TEST = process.argv.includes('--test')
// List the voices this account can actually use. Free accounts can only call
// the premade voices through the API -- a voice added from the shared library
// returns 402 paid_plan_required, which is confusing because the voice does
// appear in the web UI.
const LIST = process.argv.includes('--voices')

// Prosody settings. Overridable from the environment so a voice can be tuned
// without editing this file.
//
// MODEL defaults to the quality model, not turbo. Turbo is half the credits and
// several times faster, and both of those are worthless here -- this runs once,
// offline, on a laptop, and nobody is waiting. What turbo costs is prosody: it
// puts pauses in odd places, which on a short question reads as the voice
// losing its thread mid-sentence.
//
// STABILITY at 0.65 rather than 0.5. Low stability lets the model vary its
// delivery, which sounds alive on a paragraph and erratic on a six-word
// question -- the same sentence can land differently each generation. Higher is
// flatter but consistent, and consistency is what a set of 344 clips needs, so
// that question 12 does not sound like a different person from question 11.
const MODEL = process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2'
// 0.45, down from 0.65. Stability is really an expressiveness dial in reverse:
// high values keep a voice consistent between clips but flatten its delivery,
// and the first thing to go is the pitch rise on a question mark. Almost every
// line in this app is a question, so a flat read makes the bear sound like it is
// stating symptoms rather than asking about them.
//
// The consistency worry that pushed this to 0.65 is real but smaller than it
// sounds: these are one-sentence clips heard one screen apart, not a continuous
// narration, so slight variation between them is inaudible in use.
const STABILITY = Number(process.env.ELEVENLABS_STABILITY ?? 0.45)
const SIMILARITY = Number(process.env.ELEVENLABS_SIMILARITY ?? 0.8)
// Style adds emphasis and intonation range on top of the stability setting.
// Kept low: past about 0.4 the voice starts performing, and a question read
// theatrically to a child in pain is worse than one read flatly.
const STYLE = Number(process.env.ELEVENLABS_STYLE ?? 0.25)
// 1 -- natural pace, on purpose. This went 0.95 -> 1 -> 0.9 -> 0.96 -> 1 while
// tuning, and the thing that settled it is that SPEED and PAUSE do different
// jobs and should not both be used to slow the voice down. Silence between
// sentences is what makes speech feel unhurried; stretching the words
// themselves just makes it drawl. So the words run at a natural pace and the
// gaps around them carry the calm.
//
// Worth knowing if this is ever lowered again: below about 0.85 a synthetic
// voice stops sounding careful and starts sounding ominous. That was the
// original bug with the browser fallback at rate 0.9. Slower is not gentler.
const SPEED = Number(process.env.ELEVENLABS_SPEED ?? 1.05)

// Pause lengths, in seconds. Lowering SPEED alone does not fix a rushed read --
// it stretches the words as well as the gaps, so the voice drawls without ever
// letting a sentence land. Real silence between sentences is what makes speech
// feel unhurried, and ElevenLabs only inserts it where it is told to.
// 0.45s, down from 0.7. Long gaps are what made this drag rather than the word
// rate -- and note the --test run OVERSTATES it, because it plays five lines
// back to back while the app plays one line per screen, with the typewriter
// running underneath and the child reading. A gap that feels dead in the test
// is barely noticeable in use.
const PAUSE_SENTENCE = Number(process.env.ELEVENLABS_PAUSE ?? 0.45)
const PAUSE_CLAUSE = Number(process.env.ELEVENLABS_PAUSE_COMMA ?? 0.18)

// A few lines want a different rhythm from the rest. The greeting is the clear
// case: "Hi!" is not a sentence in the way the others are, it is an opening that
// should land on its own before the bear says anything about itself. The global
// 0.45s reads as a stumble there, where a longer beat reads as warmth.
//
// Keyed by the exact text, so it cannot drift out of sync with the line -- if
// the wording changes, the override simply stops applying rather than landing
// on the wrong sentence.
const PAUSE_OVERRIDES = {
  'Hi! I hurt sometimes too.': 0.9,
}

// IMPORTANT: the break tags are added on the way OUT to the API only. The
// filename is still hashed from the child-facing text, so tuning pause lengths
// never renames a clip, and the app -- which knows nothing about break tags --
// always asks for the right file.
const withPauses = (text) => {
  const gap = PAUSE_OVERRIDES[text.trim()] ?? PAUSE_SENTENCE
  return text
    .replace(/([.!?])\s+/g, `$1 <break time="${gap}s" /> `)
    .replace(/,\s+/g, `, <break time="${PAUSE_CLAUSE}s" /> `)
    // A question ending the string gets a beat too, so the clip does not stop
    // dead the instant the last word finishes.
    // Trailing break only after a full stop. A question mark is left alone:
    // the pitch rise happens on the last syllable, and a break tag butted
    // against it can clip the lift and make the question land like a statement.
    .replace(/\.\s*$/, `. <break time="0.3s" />`)
}
const REACHABLE_ONLY = process.argv.includes('--reachable')
// `--top N` keeps only the first N items of each packet's ranking. --reachable
// is --top 6, which is the per-report cap -- but the cap is spent ACROSS every
// group the child tapped, so a single packet almost never contributes six. Two
// or three is typical, which makes a lower cutoff most of the benefit for a
// fraction of the characters.
// `--live` uses the exact set of lines a child can be asked, computed by
// scripts/live-lines.mjs from the real selection code. Strictly better than a
// rank cutoff: it neither pays for audio nobody hears nor skips a line that is
// reached when a child taps one area only.
const LIVE = process.argv.includes('--live')
const TOP = (() => {
  const i = process.argv.indexOf('--top')
  return i > -1 ? Number(process.argv[i + 1]) : REACHABLE_ONLY ? 6 : Infinity
})()

export const hashOf = (text) =>
  createHash('sha1').update(text.trim()).digest('hex').slice(0, 16)

// --- collect every string the app can speak -------------------------------

const lines = new Set()

// 1. screen prompts -- the `text=` prop passed to GuideSays
for (const f of readdirSync('src/screens')) {
  const s = readFileSync(`src/screens/${f}`, 'utf8')
  // Every quoted string inside a text={...} expression, not just one starting
  // immediately after the brace. BodyMapScreen chooses between two prompts with
  // a ternary -- `text={sel.length ? 'Anywhere else?' : 'Show me where...'}` --
  // and both were being skipped, which is why two of the most-heard lines in the
  // app had no audio.
  // `speakText` as well as `text`: a screen whose visible line interpolates the
  // child's name passes a name-free `speakText` for the guide to say, and that
  // is exactly the line that needs a clip. Matching a bare `text=` suffix does
  // not catch it, because `speakText` capitalises the T.
  for (const m of s.matchAll(/(?:speakT|t)ext=\{([^}]*)\}|(?:speakT|t)ext="([^"]{4,160})"/g)) {
    const expr = m[1] ?? `"${m[2]}"`
    // The closing quote must MATCH the opening one. Treating any quote
    // character as a terminator split "Here's what helps me most:" into "Here"
    // and "s what helps me most:" -- an apostrophe inside a double-quoted
    // string is not a delimiter.
    for (const q of expr.matchAll(/(["'`])((?:(?!\1).){4,160})\1/g)) lines.add(q[2])
  }
}
// the intro screen holds its lines in a const array instead
for (const m of readFileSync('src/screens/IntroScreen.jsx', 'utf8')
  .matchAll(/^\s*["'](.{6,160}?)["'],\s*$/gm)) lines.add(m[1])

// Some lines are spoken by a direct speak() call rather than handed to
// GuideSays -- the voice sample on the setup screen is one, and it is the line
// that most needs a real clip, since its entire purpose is to demonstrate the
// voice. Only literals are collectable; a template string interpolates
// something known at runtime and is handled below.
for (const f of readdirSync('src/screens')) {
  const s = readFileSync(`src/screens/${f}`, 'utf8')
  for (const m of s.matchAll(/\bspeak\(\s*(["'])((?:(?!\1).){6,160})\1/g)) lines.add(m[2])
}

// 2. bank questions, both age tiers
const bank = readFileSync('src/data/bank.js', 'utf8')
const tiers = [...bank.matchAll(/(?:young|older): ("(?:[^"\\]|\\.)*")/g)].map((m) => JSON.parse(m[1]))

// `--reachable` trims to the questions a child can actually be served. The rest
// are accepted and ranked but sit below the per-report cap, so generating them
// is paying for audio nobody hears.
let questions = tiers
if (LIVE) {
  if (!existsSync('scripts/live-lines.json')) {
    console.error('Run `node scripts/live-lines.mjs` first to compute the reachable set.')
    process.exit(1)
  }
  questions = JSON.parse(readFileSync('scripts/live-lines.json', 'utf8'))
} else if (Number.isFinite(TOP)) {
  const ranked = new Set()
  for (const m of bank.matchAll(/rank: (\d+)/g)) ranked.add(+m[1])
  // rank is an index into the packet's itemRank; the cap never spends past 6.
  const blocks = bank.split(/\n\s*\{\n/).filter((b) => /young:/.test(b))
  questions = blocks
    .filter((b) => { const r = b.match(/rank: (\d+)/); return r && +r[1] < TOP })
    .flatMap((b) => [...b.matchAll(/(?:young|older): ("(?:[^"\\]|\\.)*")/g)].map((m) => JSON.parse(m[1])))
}
for (const q of questions) lines.add(q)

// Lines carrying a template placeholder cannot be pre-rendered: the child's
// name and the body part they tapped are only known at runtime. They are
// reported separately and left to the browser voice, which is the right
// fallback -- a wrong name read aloud would be worse than a plainer voice.
// Scraping JSX picks up fragments as well as prompts -- the word 'string' from
// a `typeof` check, half a sentence that broke on an apostrophe. A real prompt
// spoken to a child is a sentence: more than one word, starting with a capital,
// ending in punctuation. Anything else is code that happened to be quoted.
const looksSpoken = (t) =>
  /\s/.test(t) && /^[A-Z]/.test(t) && /[.?!:]$/.test(t)

const collected = [...lines].map((t) => t.trim()).filter((t) => t && looksSpoken(t))
const dynamic = collected.filter((t) => t.includes('${'))
const all = collected.filter((t) => !t.includes('${'))
const chars = all.reduce((n, s) => n + s.length, 0)

mkdirSync(OUT, { recursive: true })
const todo = all.filter((t) => !existsSync(`${OUT}/${hashOf(t)}.mp3`))
const skipped = all.length - todo.length

console.log(`lines found:      ${all.length}`)
console.log(`dynamic (skipped): ${dynamic.length}  — contain \${...}, fall back to the browser voice`)
console.log(`already on disk:  ${skipped}`)
console.log(`to generate:      ${todo.length}`)
console.log(`characters:       ${chars.toLocaleString()}`)
console.log(`ElevenLabs free tier is 10,000 characters a month; the $5 tier is 30,000.`)

if (DRY) {
  console.log('\n--dry: nothing called. Sample of what would be generated:')
  for (const t of todo.slice(0, 8)) console.log(`  ${hashOf(t)}  ${t}`)
  if (dynamic.length) {
    console.log('\nleft to the browser voice, because they interpolate at runtime:')
    for (const t of dynamic) console.log(`  ${t}`)
  }
  process.exit(0)
}
if (!KEY || !VOICE) {
  console.error('\nSet ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID. Run with --dry to preview.')
  process.exit(1)
}

if (LIST) {
  const res = await fetch('https://api.elevenlabs.io/v1/voices', { headers: { 'xi-api-key': KEY } })
  if (!res.ok) { console.error(`✗ ${res.status}: ${(await res.text()).slice(0, 200)}`); process.exit(1) }
  const { voices } = await res.json()
  console.log(`\n${voices.length} voices on this account:\n`)
  for (const v of voices) {
    const free = v.category === 'premade'
    console.log(`  ${free ? '✓' : '✗'} ${v.voice_id}  ${(v.name || '').padEnd(18)} ${v.category}` +
      `${free ? '' : '   <- library/cloned: needs a paid plan for API use'}`)
    const d = v.labels || {}
    const bits = [d.age, d.gender, d.accent, d.description, d.use_case].filter(Boolean)
    if (bits.length) console.log(`      ${bits.join(' · ')}`)
  }
  console.log('\n✓ = usable on a free account. Pass one with ELEVENLABS_VOICE_ID and --test.')
  process.exit(0)
}

if (TEST) {
  console.log(`\nmodel ${MODEL} · stability ${STABILITY} · style ${STYLE} · speed ${SPEED} · pause ${PAUSE_SENTENCE}s / ${PAUSE_CLAUSE}s`)
  // A spread of real lines rather than one: the greeting, a plain question, a
  // long one with a mid-sentence comma, and a short one. Those behave very
  // differently -- pause settings that suit a two-clause question often leave a
  // four-word one sounding clipped, and that only shows up when they are heard
  // together.
  const sample = [
    "Hi! I hurt sometimes too. Next you'll see a body. Tap where it hurts.",
    'How much does your tummy hurt?',
    'Does your head hurt when you wake up, or does it wake you at night?',
    'Did you throw up?',
    'Has this happened to you before?',
  ].join(' ')
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_22050_32`,
    { method: 'POST',
      headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: withPauses(sample), model_id: MODEL,
        voice_settings: { stability: STABILITY, similarity_boost: SIMILARITY, style: STYLE, speed: SPEED } }) })
  if (!res.ok) {
    console.error(`\n✗ ${res.status}: ${(await res.text()).slice(0, 300)}`)
    console.error(res.status === 401 ? 'That is a bad or expired API key.'
      : res.status === 404 ? 'That voice id is not on your account -- open the voice in the library and click "Add to My Voices" first.'
      : res.status === 429 ? 'Quota exhausted for this month.' : '')
    process.exit(1)
  }
  mkdirSync('/tmp/hif-audio', { recursive: true })
  writeFileSync('/tmp/hif-audio/test.mp3', Buffer.from(await res.arrayBuffer()))
  console.log(`\n✓ wrote /tmp/hif-audio/test.mp3 -- ${(await import('node:fs')).statSync('/tmp/hif-audio/test.mp3').size} bytes`)
  console.log(`  sent: ${withPauses(sample)}`)
  console.log('  playing...')
  const { execFileSync } = await import('node:child_process')
  try { execFileSync('afplay', ['/tmp/hif-audio/test.mp3']) } catch { console.log('  (open it manually)') }
  console.log('\nHappy with it? Run again without --test to generate the batch.')
  process.exit(0)
}

// --- generate --------------------------------------------------------------

let done = 0
let failed = 0
for (const text of todo) {
  const file = `${OUT}/${hashOf(text)}.mp3`
  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_22050_32`,
      {
        method: 'POST',
        headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: withPauses(text),
          model_id: MODEL,
          voice_settings: { stability: STABILITY, similarity_boost: SIMILARITY, style: STYLE, speed: SPEED },
        }),
      },
    )
    if (!res.ok) {
      failed += 1
      console.error(`  ✗ ${res.status} ${(await res.text()).slice(0, 120)}  — "${text.slice(0, 50)}"`)
      // 401 is a bad key and 429 is the quota; neither improves by continuing.
      if (res.status === 401 || res.status === 429) break
      continue
    }
    writeFileSync(file, Buffer.from(await res.arrayBuffer()))
    done += 1
    if (done % 10 === 0) console.log(`  ${done}/${todo.length}…`)
  } catch (e) {
    failed += 1
    console.error(`  ✗ ${e.message}  — "${text.slice(0, 50)}"`)
  }
}

console.log(`\ngenerated ${done}, failed ${failed}, skipped ${skipped}`)
console.log(`files in ${OUT}/ — commit them; Vite copies public/ into dist/ on build.`)
