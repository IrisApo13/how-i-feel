import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import GuideSays from '../components/GuideSays'
import { Screen, BigButton, Card } from '../components/ui'
import { getCharacter } from '../data/characters'
import { tintFor } from '../lib/tint'
import { canListen, listen } from '../lib/speech'

// The adaptive step. Which questions appear is decided by the body regions the
// child tapped, their depth, and how long it has been hurting -- and, for
// groups covered by a packet, every question traces to a published source.
//
// Each question declares how it can be answered (`answers`), and the screen
// renders the matching control. A question that needs typing or speaking is no
// longer unaskable: "what were you doing when you hurt it?" is the single most
// useful question in the head-injury packet and does not fit a yes/no button.

const YESNO = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'unsure', label: 'Not sure' },
]

// Children cannot reliably give exact counts, but they can place themselves in
// a bucket. The buckets keep the ">= 3" boundary the source rules care about
// without asking a child to arrive at a number.
const COUNTS = [
  { id: 'none', label: 'None' },
  { id: 'once', label: 'Once' },
  { id: 'few', label: 'A few' },
  { id: 'lots', label: 'Lots' },
]

function ChoiceRow({ options, value, onPick, cols }) {
  return (
    <div className={`grid gap-2 ${cols === 4 ? 'grid-cols-4' : cols === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
      {options.map((a) => (
        <button
          key={a.id}
          onClick={() => onPick(a.id)}
          aria-pressed={value === a.id}
          style={value === a.id ? undefined : { backgroundColor: tintFor(a.id) }}
          className={`min-h-14 rounded-2xl border-2 font-bold flex items-center justify-center gap-1.5
            transition active:scale-95
            ${value === a.id ? 'glass-on bg-sky-deep text-white' : 'glass text-ink'}`}
        >
          {a.label}
        </button>
      ))}
    </div>
  )
}

// Typing and speaking answer the same questions; which one a child gets follows
// the input method they chose at setup, so nobody is forced to type who said
// they wanted to talk.
function SpokenAnswer({ value, onAnswer }) {
  const [listening, setListening] = useState(false)
  const stop = useRef(null)

  useEffect(() => () => stop.current?.(), [])

  const toggle = () => {
    if (listening) { stop.current?.(); setListening(false); return }
    setListening(true)
    stop.current = listen({
      onResult: (text) => onAnswer(text),
      onEnd: () => setListening(false),
      onError: () => setListening(false),
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={toggle}
        className={`min-h-16 rounded-2xl border-4 font-bold text-lg transition active:scale-95
          ${listening ? 'bg-hurt text-white' : 'bg-sky-soft border-ink/15'}`}
      >
        {listening ? 'Listening — tap to stop' : 'Tap and tell me'}
      </button>
      {value && <p className="px-1 text-lg leading-snug">&ldquo;{value}&rdquo;</p>}
    </div>
  )
}

function TypedAnswer({ value, onAnswer }) {
  return (
    <textarea
      value={value ?? ''}
      onChange={(e) => onAnswer(e.target.value)}
      placeholder="Type your answer…"
      rows={3}
      maxLength={300}
      className="w-full bg-sky-soft focus:border-sky outline-none
        rounded-2xl p-3 text-lg leading-snug resize-none"
    />
  )
}

// One question per screen.
//
// These used to stack -- five or six cards down one page. Three things were
// wrong with that. Every other screen in the app asks exactly one thing, so the
// only list in the flow read as a survey rather than a conversation. The voice
// option barely worked, because the guide read six questions before the child
// answered any and they had lost the first by the third. And a wall of
// identical cards is a lot to face for a child who feels awful.
//
// Advancing is automatic: tapping an answer IS the action, so there is no arrow
// and nothing to press twice. The counter is what keeps that from feeling
// endless -- a child tapping into an unknown number of questions needs to see
// it is bounded, and "3 of 5" does that in three characters.
export default function FollowUpScreen({
  profile, questions, answers, onAnswer, onNext, onBack, progress,
}) {
  const character = getCharacter(profile.characterId)
  const young = profile.ageTier === 'young'
  const [at, setAt] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const q = questions[at]
  const last = at >= questions.length - 1

  // Free-text and voice answers are typed over time, so they cannot advance on
  // their own -- the child needs a button when they are done talking.
  const selfAdvancing = !q || (q.answers ?? 'yesno') !== 'text' && (q.answers ?? 'yesno') !== 'voice'

  const go = (delta) => {
    const next = at + delta
    if (next < 0) { onBack(); return }
    if (next >= questions.length) { onNext(); return }
    setAt(next)
  }

  // Answer, hold for a beat so the child sees their choice register, then move.
  // Without the pause the screen changes the instant a finger lands, which
  // reads as the app skipping past rather than acknowledging.
  const answerAndAdvance = (id, value) => {
    onAnswer(id, value)
    if (!selfAdvancing) return
    setLeaving(true)
    setTimeout(() => { setLeaving(false); go(1) }, 260)
  }

  // A question needing free text is spoken when the child chose talking and the
  // browser supports it, and typed otherwise -- never a dead end either way.
  const freeform = (q) =>
    q.answers === 'voice' || (q.answers === 'text' && profile.inputPref === 'speak' && canListen())
      ? 'voice'
      : 'text'

  return (
    <Screen onBack={() => go(-1)} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="attentive"
          text={typeof q?.q === 'string' ? q.q : young ? q?.q?.young : q?.q?.older}
          voiceMode={profile.voiceMode}
          size={88}
        />

        {/* Bounded, so the child can see it ends. Dots rather than "3 of 5" for
            the young tier, who may not read the numerals. */}
        <div className="flex items-center justify-center gap-1.5" aria-label={`Question ${at + 1} of ${questions.length}`}>
          {questions.map((x, i) => (
            <span
              key={x.id}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === at ? 'w-6 bg-sky-deep' : answers[x.id] ? 'w-2 bg-sky-deep/40' : 'w-2 bg-ink/15'
              }`}
            />
          ))}
        </div>

        <motion.div
          key={q?.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: leaving ? 0 : 1, y: leaving ? -8 : 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="flex-1 flex flex-col justify-center"
        >
          {q && (() => {
            const kind = q.answers ?? 'yesno'
            return (
              <Card>
                {kind === 'yesno' && (
                  <ChoiceRow options={YESNO} value={answers[q.id]} onPick={(v) => answerAndAdvance(q.id, v)} cols={3} />
                )}
                {kind === 'count' && (
                  <ChoiceRow options={COUNTS} value={answers[q.id]} onPick={(v) => answerAndAdvance(q.id, v)} cols={4} />
                )}
                {/* `choice` carries its own options, because unlike yes/no and
                    count there is no set of answers that fits every question --
                    "banging or squeezing?" and "front, back or all over?" share
                    nothing. Labels take the same two-tier shape as the question
                    text, so a young child gets "banging" where an older one
                    gets "throbbing". */}
                {kind === 'choice' && (
                  <ChoiceRow
                    options={(q.options ?? []).map((o) => ({
                      id: o.id,
                      label: typeof o.label === 'string' ? o.label : young ? o.label.young : o.label.older,
                    }))}
                    value={answers[q.id]}
                    onPick={(v) => answerAndAdvance(q.id, v)}
                    cols={Math.min((q.options ?? []).length, 3)}
                  />
                )}
                {(kind === 'text' || kind === 'voice') &&
                  (freeform(q) === 'voice' ? (
                    <SpokenAnswer value={answers[q.id]} onAnswer={(v) => onAnswer(q.id, v)} />
                  ) : (
                    <TypedAnswer value={answers[q.id]} onAnswer={(v) => onAnswer(q.id, v)} />
                  ))}
              </Card>
            )
          })()}
        </motion.div>
      </div>

      {/* Only shown when the screen cannot advance itself: a free-text answer
          has no moment that means "done", and a child who does not want to
          answer needs a way past. */}
      <BigButton tone={answers[q?.id] ? 'go' : 'quiet'} onClick={() => go(1)}>
        {last ? 'Next' : 'Next question'}
      </BigButton>
    </Screen>
  )
}
