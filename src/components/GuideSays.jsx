import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Guide from './Guide'
import { speak, stopSpeaking } from '../lib/speech'

// The guide plus its line of dialogue. The child chose at setup whether the
// character talks out loud or uses a speech bubble; either way the words are
// always on screen, because a kid who can't hear (or has the volume off, or is
// in a noisy hallway) must still be able to get through the flow.

export default function GuideSays({
  character,
  pose = 'idle',
  text,
  speakText,
  voiceMode = 'bubble',
  size = 130,
  onTapCharacter,
}) {
  const lastSpoken = useRef(null)
  const [speaking, setSpeaking] = useState(false)

  // What is SAID can differ from what is shown, and only for a good reason.
  //
  // The greetings interpolate the child's name, so they can never be
  // pre-recorded -- the hash that names a clip is taken from the finished
  // sentence. That used to mean the two friendliest lines in the app were the
  // two read by the browser's synthetic voice, which children hear as flat and
  // slightly wrong, and it is the first thing the app says.
  //
  // So a screen may pass `speakText`: the same sentence with the name left out,
  // which IS recorded. The name stays on screen where it belongs and the voice
  // stays the guide's. Keep any `speakText` a plain literal -- scripts/
  // build-audio.mjs scrapes these props to decide what to generate, and it
  // cannot resolve an expression.
  const spoken = speakText ?? text

  // The mouth moves while the guide is speaking and stops when it stops.
  // Talking is an ANIMATION, not a drawing: left to itself it loops forever, so
  // the guide carried on mouthing silently long after the clip had finished --
  // for the whole time the child spent choosing an answer. A face that moves
  // with no sound does not read as friendly, it reads as wrong.
  //
  // In bubble mode nothing is spoken at all, so nothing here ever moves.
  const livePose = pose === 'talk' && !speaking ? 'attentive' : pose

  // The `lastSpoken` guard stops a line being re-read when the component
  // re-renders for an unrelated reason. It MUST be cleared in the cleanup,
  // because React StrictMode runs every effect twice in development -- mount,
  // cleanup, mount -- and without the reset the sequence is: speak, stop, then
  // return early because the text has already been marked spoken. The clip is
  // stopped and never restarted, so every prompt in the app is silent in dev
  // while working fine in a production build. That is a miserable thing to
  // debug, hence this comment.
  useEffect(() => {
    if (voiceMode !== 'voice' || !spoken || lastSpoken.current === spoken) return
    lastSpoken.current = spoken
    setSpeaking(true)
    speak(spoken, character.voice, () => setSpeaking(false))
    return () => {
      lastSpoken.current = null
      setSpeaking(false)
      stopSpeaking()
    }
  }, [spoken, voiceMode, character])

  return (
    <div className="flex items-end gap-2 justify-center">
      <motion.button
        onClick={onTapCharacter}
        whileTap={{ scale: 0.94 }}
        className="shrink-0"
        aria-label="Tap to hear that again."
      >
        <Guide pose={livePose} size={size} />
      </motion.button>

      {text && (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="relative mb-6 max-w-[19rem] bg-sky-soft rounded-3xl px-4 py-3 text-lg font-bold leading-snug"
        >
          {text}
          <span className="absolute -left-2.5 bottom-4 w-5 h-5 bg-sky-soft border-l-4 border-b-4 border-ink/10 rotate-45 rounded-bl" />
        </motion.div>
      )}
    </div>
  )
}
