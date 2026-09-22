import GuideSays from '../components/GuideSays'
import { Screen, BigButton, Card } from '../components/ui'
import { getCharacter } from '../data/characters'
import { tintFor } from '../lib/tint'
import { GATES } from '../data/vocab'

// The gate question, asked between the body map and the follow-ups.
//
// Which question depends on the group. Most ask about depth; the head asks
// about mechanism, because a scalp bruise and a migraine are not "outside vs
// inside" but traumatic vs non-traumatic. See GROUP_GATE in data/bodyMap.js.
//
// Sits between the body map and the follow-ups because the answer decides which
// follow-ups get asked -- asking a child with a tummy rash whether they threw up
// makes the app look like it is not listening.
//
// Asked once per body region GROUP, never once per region: a child who taps both
// arms and a leg answers about limbs once, not three times. Only groups that are
// genuinely ambiguous appear here (see GROUP_GATE in data/bodyMap.js).
//
// A group may ask MORE THAN ONE gate, and a later gate may be conditional on an
// earlier answer -- the limb group asks "on your skin or inside?" and then, only
// if the answer was inside or not-sure, "did you bump it?". The conditional card
// appears in place when the first is answered, so the child sees one question
// grow into two rather than being pushed to another screen. `gates` arrives
// already filtered, so this component never decides what to show.

export default function DepthScreen({
  profile, gates, answers, onAnswer, onNext, onBack, progress,
}) {
  const character = getCharacter(profile.characterId)
  const young = profile.ageTier === 'young'
  const tier = young ? 'young' : 'older'
  // The guide no longer reads the gate question aloud, and every card carries
  // its own question text.
  //
  // It used to do the opposite: with one gate on screen the guide asked it and
  // the card stayed silent. The cost was that the line the guide had to say was
  // a different line on every path -- "Did you bump it, or did it just start
  // hurting?" and its siblings -- and none of them has a generated clip, so on
  // the single-gate path (the common one) the guide fell through to the
  // browser's synthetic voice. One robotic sentence inside a flow that
  // otherwise speaks in the recorded voice is worse than a plainer line,
  // because the child hears the seam instead of the question.
  //
  // So the guide says a fixed line and the question moves into the card, where
  // it is read rather than heard. Nothing is lost: the words were always on
  // screen anyway (see GuideSays), and this is the one prompt whose two answers
  // are themselves named on the buttons.
  //
  // Two fixed lines, not one, because the count has to be true: a child who
  // tapped one arm and is told "a quick question about each one" is being
  // talked to by something that was not listening -- there is no each one.
  // Both are literals rather than one sentence assembled at runtime, because a
  // clip is named by the hash of its finished text, so an assembled sentence
  // could never have one.
  const one = gates.length === 1

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="think"
          text={one ? 'A quick question about that.' : 'A quick question about each one.'}
          voiceMode={profile.voiceMode}
          size={92}
        />

        <div className="flex flex-col gap-3">
          {gates.map((g) => (
            <Card key={`${g.group}-${g.key}`}>
              <p className="text-lg font-bold mb-2.5">{g.label}</p>
              <p className="text-sm text-ink/55 mb-2">{GATES[g.type].question[tier]}</p>
              <div className="grid grid-cols-3 gap-2">
                {GATES[g.type].options.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => onAnswer(g.group, g.key, d.id)}
                    aria-pressed={answers[g.group]?.[g.key] === d.id}
                    style={answers[g.group]?.[g.key] === d.id ? undefined : { backgroundColor: tintFor(d.id) }}
                    className={`min-h-20 rounded-2xl border-2 font-bold flex flex-col items-center
                      justify-center gap-1 px-1 leading-tight text-center transition active:scale-95
                      ${answers[g.group]?.[g.key] === d.id ? 'glass-on bg-sky-deep text-white' : 'glass text-ink'}`}
                  >
                    <span className="text-sm">{young ? d.kidLabel : d.label}</span>
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Names the button the child is actually looking at, which is not the
            same button in both tiers: the 4-7 wording is "I don't know" and the
            8-12 wording is "I'm not sure" (see GATES in data/vocab.js). Telling
            a child to pick something that is not on their screen is how a real
            answer becomes a guess. */}
        <p className="text-center text-sm text-ink/45 px-4">
          If you&apos;re not sure, that&apos;s okay. Just select{' '}
          {young ? '“I don’t know”.' : '“I’m not sure”.'}
        </p>
      </div>

      <BigButton tone="go" onClick={onNext}>
        Next
      </BigButton>
    </Screen>
  )
}
