import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import GuideSays from '../components/GuideSays'
import BodyMap from '../components/BodyMap'
import { Screen, Title, BigButton, Card, Chip } from '../components/ui'
import { getCharacter } from '../data/characters'
import { regionLabel } from '../data/bodyMap'
import { SENSATIONS, DURATIONS } from '../data/vocab'
import { canListen, listen } from '../lib/speech'
import { parseTranscript } from '../lib/parseTranscript'

const PROMPTS = [
  { text: 'Where does it hurt?' },
  { text: 'What does it feel like?' },
  { text: 'When did it start?' },
]

const labelFor = (list, id) => list.find((x) => x.id === id)?.label ?? id

export default function VoiceFlow({ profile, onDone, onSkip, onBack }) {
  const character = getCharacter(profile.characterId)
  const [stage, setStage] = useState('intro')
  const [transcript, setTranscript] = useState('')
  const [parsed, setParsed] = useState(null)
  const [error, setError] = useState(null)
  const [listening, setListening] = useState(false)
  const handle = useRef(null)

  useEffect(() => () => handle.current?.stop(), [])

  const start = () => {
    setError(null)
    setTranscript('')
    setListening(true)
    handle.current = listen({
      onResult: (running) => setTranscript(running),
      onEnd: (final) => {
        setListening(false)
        const text = final || transcript
        if (text) setParsed(parseTranscript(text))
      },
      onError: (e) => {
        setListening(false)
        setError(
          e === 'not-allowed'
            ? 'I need permission to use the microphone.'
            : e === 'unsupported'
              ? "This browser can't listen. You can tap instead!"
              : "I didn't catch that. Want to try again?",
        )
      },
    })
  }

  const stop = () => {
    handle.current?.stop()
    setListening(false)
  }

  // ---------- intro ----------
  if (stage === 'intro') {
    return (
      <Screen onBack={onBack} progress={0.1}>
        <div className="flex-1 flex flex-col justify-center gap-6 py-4">
          <GuideSays
            character={character}
            pose="talk"
            text="You can just tell me what's wrong. Here's what helps me most:"
            voiceMode={profile.voiceMode}
          />
          <div className="flex flex-col gap-3">
            {PROMPTS.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * i + 0.2 }}
              >
                <Card className="flex items-center gap-4">
                  <span className="text-xl font-bold">{p.text}</span>
                </Card>
              </motion.div>
            ))}
          </div>
          {!canListen() && (
            <p className="text-center text-ink/50 font-bold">
              This browser can&apos;t listen — tapping works great too.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <BigButton tone="go" onClick={() => setStage('record')} disabled={!canListen()}>
            I&apos;m ready to talk
          </BigButton>
          <BigButton tone="soft" onClick={onSkip}>
            I&apos;d rather tap
          </BigButton>
        </div>
      </Screen>
    )
  }

  // ---------- record ----------
  if (stage === 'record') {
    return (
      <Screen onBack={() => setStage('intro')} progress={0.2}>
        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-4">
          <Title sub={listening ? "I'm listening…" : 'Press the microphone when you’re ready'}>
            {listening ? 'Go ahead' : 'Tell me about it'}
          </Title>

          <motion.button
            onClick={listening ? stop : start}
            whileTap={{ scale: 0.92 }}
            animate={listening ? { scale: [1, 1.06, 1] } : { scale: 1 }}
            transition={listening ? { repeat: Infinity, duration: 1.4 } : {}}
            className={`w-40 h-40 rounded-full grid place-items-center text-6xl border-8 transition
              ${listening ? 'bg-hurt border-hurt/30 text-white' : 'bg-sky-soft border-ink/10'}`}
            aria-label={listening ? 'Stop recording' : 'Start recording'}
          >
            <span
              className={`block rounded-full transition-all ${
                listening ? 'w-5 h-5 rounded-md bg-current' : 'w-6 h-6 bg-current'
              }`}
            />
          </motion.button>

          {transcript && (
            <Card className="w-full">
              <p className="text-sm font-bold text-ink/50 mb-1">What I heard</p>
              <p className="text-lg leading-snug">{transcript}</p>
            </Card>
          )}

          {error && (
            <Card className="w-full bg-sun/15 border-sun/40 text-center font-bold">
              {error}
            </Card>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {listening ? (
            <BigButton tone="primary" onClick={stop}>I&apos;m done talking</BigButton>
          ) : (
            <BigButton
              tone="go"
              disabled={!transcript}
              onClick={() => {
                const result = parseTranscript(transcript)
                setParsed(result)
                setStage('confirm')
              }}
            >
              Next
            </BigButton>
          )}
          <BigButton tone="soft" onClick={onSkip}>Tap instead</BigButton>
        </div>
      </Screen>
    )
  }

  // ---------- confirm ----------
  const result = parsed ?? { bodyRegions: [], sensations: [], intensity: null, duration: null }
  const nothingFound = !result.bodyRegions.length && !result.sensations.length

  const removeRegion = (id) =>
    setParsed({ ...result, bodyRegions: result.bodyRegions.filter((r) => r !== id) })
  const removeSensation = (id) =>
    setParsed({ ...result, sensations: result.sensations.filter((s) => s !== id) })

  return (
    <Screen onBack={() => setStage('record')} progress={0.3}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="attentive"
          text={nothingFound ? "Hmm, I'm not sure I got that. Want to tap instead?" : 'Did I get this right?'}
          voiceMode={profile.voiceMode}
          size={100}
        />

        {/* Confirmation is non-negotiable in the voice path. Speech recognition
            is markedly worse on children's voices than adults', so nothing the
            parser produced reaches the report without the child agreeing. */}
        {!nothingFound && (
          <>
            <BodyMap
              view="front"
              onViewChange={() => {}}
              selected={result.bodyRegions}
              onToggle={removeRegion}
              height={230}
            />
            <div className="flex flex-wrap gap-2 justify-center">
              {result.bodyRegions.map((id) => (
                <Chip key={id} onRemove={() => removeRegion(id)}>{regionLabel(id)}</Chip>
              ))}
              {result.sensations.map((id) => (
                <Chip key={id} onRemove={() => removeSensation(id)}>{labelFor(SENSATIONS, id)}</Chip>
              ))}
              {result.duration && <Chip>{labelFor(DURATIONS, result.duration)}</Chip>}
              {typeof result.intensity === 'number' && <Chip>{result.intensity} out of 10</Chip>}
            </div>
          </>
        )}

        <Card>
          <p className="text-sm font-bold text-ink/50 mb-1">Your words</p>
          <p className="italic leading-snug">&ldquo;{transcript}&rdquo;</p>
        </Card>
      </div>

      <div className="flex flex-col gap-2">
        {!nothingFound && (
          <BigButton tone="go" onClick={() => onDone({ ...result, transcript })}>
            Yes, that&apos;s right
          </BigButton>
        )}
        <BigButton tone="soft" onClick={() => onDone({ ...result, transcript, forceEdit: true })}>
          Let me fix it
        </BigButton>
      </div>
    </Screen>
  )
}
