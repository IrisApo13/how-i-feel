import { useEffect, useRef } from 'react'
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
  voiceMode = 'bubble',
  size = 130,
  onTapCharacter,
}) {
  const lastSpoken = useRef(null)

  // The `lastSpoken` guard stops a line being re-read when the component
  // re-renders for an unrelated reason. It MUST be cleared in the cleanup,
  // because React StrictMode runs every effect twice in development -- mount,
  // cleanup, mount -- and without the reset the sequence is: speak, stop, then
  // return early because the text has already been marked spoken. The clip is
  // stopped and never restarted, so every prompt in the app is silent in dev
  // while working fine in a production build. That is a miserable thing to
  // debug, hence this comment.
  useEffect(() => {
    if (voiceMode !== 'voice' || !text || lastSpoken.current === text) return
    lastSpoken.current = text
    speak(text, character.voice)
    return () => {
      lastSpoken.current = null
      stopSpeaking()
    }
  }, [text, voiceMode, character])

  return (
    <div className="flex items-end gap-2 justify-center">
      <motion.button
        onClick={onTapCharacter}
        whileTap={{ scale: 0.94 }}
        className="shrink-0"
        aria-label="Tap to hear that again."
      >
        <Guide pose={pose} size={size} />
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
