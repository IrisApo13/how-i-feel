import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CHARACTERS, getCharacter, DEFAULT_CHARACTER } from '../data/characters'
import Guide from '../components/Guide'
import GuideSays from '../components/GuideSays'
import Avatar, {
  SKIN_TONES, HAIR_COLORS, HAIR_STYLES, ACCESSORIES, SHIRT_COLORS, DEFAULT_AVATAR,
} from '../components/Avatar'
import { Screen, Title, BigButton, ChoiceCard, ChoiceGrid } from '../components/ui'
import { speak } from '../lib/speech'

const INPUT_METHODS = [
  { id: 'tap', label: 'Tapping', sub: 'Pick from pictures' },
  { id: 'speak', label: 'Talking', sub: 'Say it out loud' },
  { id: 'write', label: 'Writing', sub: 'Type the words' },
  // "Drawing" removed 2026-09-13. A child in a waiting room is often holding a
  // tablet one-handed, in pain, on a device they did not bring -- finger-drawing
  // under those conditions was optimistic. It also pushed the interpretation
  // problem back onto the nurse, which is the thing this app exists to remove.
  //
  // The feature itself is still wired end to end and is simply no longer
  // offered: the canvas lives in `TellMoreScreen` behind
  // `profile.inputPref === 'draw'`, the result rides on `report.drawing`, and
  // both the summary and the nurse view render it. Restore this one line to
  // turn it back on.
]

// The character step only exists when there is a character to choose between.
// With one guide a picker shows a single option, which reads as broken rather
// than as a choice -- so it is skipped, and reappears on its own if a second
// character is ever added to `characters.js`.
const STEPS = ['welcome', 'name', 'age', 'input', 'voice',
  ...(CHARACTERS.length > 1 ? ['character'] : []), 'avatar']

export default function Setup({ onComplete }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [age, setAge] = useState(null)
  const [inputPref, setInputPref] = useState('tap')
  const [voiceMode, setVoiceMode] = useState('bubble')
  const [characterId, setCharacterId] = useState(DEFAULT_CHARACTER)
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR)

  const current = STEPS[step]
  const character = getCharacter(characterId)
  const tier = age && age <= 7 ? 'young' : 'older'

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const finish = () =>
    onComplete({
      name: name.trim() || 'friend',
      age,
      ageTier: tier,
      inputPref,
      voiceMode,
      characterId,
      avatar,
      createdAt: new Date().toISOString(),
    })

  const shell = (children, footer) => (
    <Screen
      onBack={step > 0 ? back : undefined}
      progress={step / (STEPS.length - 1)}
      footer={footer}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.22 }}
          className="flex-1 flex flex-col gap-5 py-3"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Screen>
  )

  if (current === 'welcome') {
    return shell(
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <Guide pose="wave" size={190} />
        <Title sub="A place to communicate how you feel.">How I Feel</Title>
      </div>,
      <BigButton tone="go" onClick={next}>Let&apos;s start</BigButton>,
    )
  }

  if (current === 'name') {
    return shell(
      <>
        <GuideSays
          character={character}
          pose="talk"
          text="Hi! What should I call you?"
          voiceMode={voiceMode}
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoFocus
          maxLength={24}
          className="w-full text-center text-3xl font-extrabold bg-sky-soft
            focus:border-sky-deep outline-none rounded-3xl px-4 py-5"
        />
        <p className="text-center text-sm text-ink/45 px-6">
          Your name stays on this device. Nothing is sent anywhere until you press send.
        </p>
      </>,
      <BigButton tone="go" onClick={next} disabled={!name.trim()}>Next</BigButton>,
    )
  }

  if (current === 'age') {
    return shell(
      <>
        {/* No speakText here, and nothing worth recording: `voiceMode` is still
            its 'bubble' default. The child does not choose to hear the guide
            aloud until the 'voice' step, two steps after this one, so every
            line on the way in is read rather than spoken. */}
        <GuideSays
          character={character}
          pose="talk"
          text={`Nice to meet you, ${name.trim() || 'friend'}! How old are you?`}
          voiceMode={voiceMode}
        />
        <div className="grid grid-cols-3 gap-3">
          {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((a) => (
            <button
              key={a}
              onClick={() => setAge(a)}
              aria-pressed={age === a}
              className={`h-20 rounded-3xl border-4 text-3xl font-extrabold transition active:scale-95
                ${age === a ? 'bg-sky-deep text-white' : 'bg-sky-soft border-ink/10'}`}
            >
              {a}
            </button>
          ))}
        </div>
        {/* Age drives which pain scale the child sees: numeric self-report
            isn't dependable much below 8, so the younger tier stays on faces. */}
        {age && (
          <p className="text-center text-sm text-ink/45">
            {tier === 'young'
              ? 'We’ll keep things nice and simple.'
              : 'You’ll get to use numbers too.'}
          </p>
        )}
      </>,
      <BigButton tone="go" onClick={next} disabled={!age}>Next</BigButton>,
    )
  }

  if (current === 'input') {
    return shell(
      <>
        <GuideSays
          character={character}
          pose="think"
          text="What way do you like to tell people things?"
          voiceMode={voiceMode}
        />
        <ChoiceGrid>
          {INPUT_METHODS.map((m) => (
            <ChoiceCard
              key={m.id}
              label={m.label}
              sub={m.sub}
              selected={inputPref === m.id}
              onClick={() => setInputPref(m.id)}
            />
          ))}
        </ChoiceGrid>
        <p className="text-center text-sm text-ink/45 px-6">
          You can always change your mind later.
        </p>
      </>,
      <BigButton tone="go" onClick={next}>Next</BigButton>,
    )
  }

  if (current === 'voice') {
    return shell(
      <>
        <GuideSays
          character={character}
          pose="attentive"
          text="Should I talk out loud, or use word bubbles?"
          voiceMode="bubble"
        />
        <ChoiceGrid>
          <ChoiceCard
            label="Talk out loud"
            sub="I'll say it"
            selected={voiceMode === 'voice'}
            onClick={() => {
              // No sample line. Choosing this used to play "Hi! I can talk out
              // loud like this." -- a line with no recorded clip, so the one
              // moment whose whole job was to demonstrate the guide's voice
              // demonstrated the browser's instead. A sample in the wrong voice
              // is worse than no sample: the child picks on the strength of it.
              setVoiceMode('voice')
            }}
          />
          <ChoiceCard
            label="Word bubbles"
            sub="Quiet mode"
            selected={voiceMode === 'bubble'}
            onClick={() => setVoiceMode('bubble')}
          />
        </ChoiceGrid>
        <p className="text-center text-sm text-ink/45 px-6">
          The words always show on screen either way.
        </p>
      </>,
      <BigButton tone="go" onClick={next}>Next</BigButton>,
    )
  }

  if (current === 'character') {
    return shell(
      <>
        <Title sub="Tap one to hear about them.">Who should come with you?</Title>
        <div className="grid grid-cols-3 gap-2">
          {CHARACTERS.map((c) => {
            const selected = characterId === c.id
            return (
              <button
                key={c.id}
                onClick={() => {
                  setCharacterId(c.id)
                  if (voiceMode === 'voice') speak(`Hi, I'm ${c.name}.`, c.voice)
                }}
                aria-pressed={selected}
                className={`rounded-3xl border-4 p-2 flex flex-col items-center transition active:scale-95
                  ${selected ? 'bg-sky-deep text-white' : 'bg-sky-soft border-ink/10'}`}
              >
                <Guide pose={selected ? 'wave' : 'idle'} size={84} />
                <span className="font-extrabold">{c.name}</span>
              </button>
            )
          })}
        </div>
      </>,
      <BigButton tone="go" onClick={next}>Pick {character.name}</BigButton>,
    )
  }

  // avatar
  const swatches = (list, key) => (
    <div className="flex flex-wrap gap-2">
      {list.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setAvatar((a) => ({ ...a, [key]: opt.id }))}
          aria-label={opt.id}
          aria-pressed={avatar[key] === opt.id}
          className={`w-12 h-12 rounded-2xl border-4 transition active:scale-90
            ${avatar[key] === opt.id ? 'border-sky-deep' : 'border-ink/10'}`}
          style={{ background: opt.hex }}
        />
      ))}
    </div>
  )

  const pills = (list, key) => (
    <div className="flex flex-wrap gap-2">
      {list.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setAvatar((a) => ({ ...a, [key]: opt.id }))}
          aria-pressed={avatar[key] === opt.id}
          className={`px-4 h-12 rounded-2xl border-2 font-bold text-sm transition active:scale-95
            ${avatar[key] === opt.id ? 'bg-ink text-white border-ink' : 'bg-sky-soft border-ink/10'}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )

  return shell(
    <>
      <Title sub="This is you.">Make your person</Title>
      <div className="flex justify-center">
        <Avatar avatar={avatar} size={140} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="font-bold text-sm text-ink/50 mb-1.5">Skin</p>
          {swatches(SKIN_TONES, 'skin')}
        </div>
        <div>
          <p className="font-bold text-sm text-ink/50 mb-1.5">Hair colour</p>
          {swatches(HAIR_COLORS, 'hairColor')}
        </div>
        <div>
          <p className="font-bold text-sm text-ink/50 mb-1.5">Hair style</p>
          {pills(HAIR_STYLES, 'hairStyle')}
        </div>
        <div>
          <p className="font-bold text-sm text-ink/50 mb-1.5">Anything else?</p>
          {pills(ACCESSORIES, 'accessory')}
        </div>
        <div>
          <p className="font-bold text-sm text-ink/50 mb-1.5">Shirt</p>
          {swatches(SHIRT_COLORS, 'shirt')}
        </div>
      </div>
    </>,
    <BigButton tone="go" onClick={finish}>That&apos;s me!</BigButton>,
  )
}
