import { useEffect, useRef, useState } from 'react'
import { Screen, BigButton } from '../components/ui'
import Guide from '../components/Guide'
import Typewriter from '../components/Typewriter'
import { speak, stopSpeaking } from '../lib/speech'
import { getCharacter } from '../data/characters'

// The screen before the body map. It exists to do one thing the flow was
// missing: tell the child what is about to happen, before a drawing of a body
// appears with no warning.
//
// Two lines, not one. The first is a greeting, the second says what to expect.
// Splitting them means the child reads a short sentence, not a paragraph, and
// the second line only starts after the first has landed.

const LINES = [
  'Hi! I hurt sometimes too.',
  "Next you'll see a body. Tap where it hurts.",
]

export default function IntroScreen({ profile, onNext, onBack, progress }) {
  const [line, setLine] = useState(0)
  const [ready, setReady] = useState(false)
  const character = getCharacter(profile.characterId)

  // The child chose at setup whether the guide talks aloud. Either way the
  // words stay on screen -- a kid with the volume off, or in a noisy hallway,
  // must still be able to get through.
  // Two things have to finish before the next line starts: the typing and the
  // speech. They take different amounts of time -- 25 characters types in about
  // a second, while the same line with its pauses takes three to read -- so
  // advancing on the typing alone changed the line while the bear was still
  // talking, and the cleanup below cut the clip off mid-sentence. "Hi! I hurt
  // sometimes too." lost the "sometimes too".
  //
  // So each records its own completion and the advance happens on whichever
  // lands last.
  const typed = useRef(false)
  const spoken = useRef(false)

  const advance = () => {
    if (!typed.current || !spoken.current) return
    if (line + 1 < LINES.length) setTimeout(() => setLine(line + 1), 500)
    else setReady(true)
  }
  // Held in a ref and kept out of the effect's dependencies: `advance` is a new
  // function on every render, so listing it would restart the effect -- and the
  // effect speaks, so the line would be read again from the top on every
  // render. Same trap as the Typewriter's onDone.
  const advanceRef = useRef(advance)
  advanceRef.current = advance

  // Speak as the line STARTS typing, not when it ends. It used to fire from the
  // typewriter's onDone, so the child watched the words appear in silence and
  // then heard them read back -- the voice trailing the text by the whole
  // length of the animation.
  useEffect(() => {
    typed.current = false
    spoken.current = false
    if (profile.voiceMode !== 'voice') {
      // Nothing to wait for; the typing alone decides.
      spoken.current = true
      return undefined
    }
    speak(LINES[line], character.voice, () => {
      spoken.current = true
      advanceRef.current()
    })
    return () => stopSpeaking()
  }, [line, profile.voiceMode, character])

  const lineDone = () => {
    typed.current = true
    advanceRef.current()
  }

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col items-center justify-center gap-6 py-4">
        <div className="w-full max-w-sm bg-sky-soft rounded-[1.75rem] p-5 min-h-28 flex items-center">
          <p className="text-xl font-bold leading-snug">
            <Typewriter key={line} text={LINES[line]} onDone={lineDone} />
          </p>
        </div>

        <Guide pose={line === 0 ? 'wave' : 'talk'} size={260} />
      </div>

      <BigButton
        tone="go"
        onClick={() => {
          stopSpeaking()
          onNext()
        }}
        disabled={!ready}
      >
        I'm ready
      </BigButton>
    </Screen>
  )
}
