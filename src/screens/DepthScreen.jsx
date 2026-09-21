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
  // One gate on screen: the guide asks it, and the card does not repeat it.
  // Two or more -- several groups, or one group mid-way through its second
  // gate -- and each card must carry its own question or the mix is unreadable.
  const single = gates.length === 1 ? GATES[gates[0].type] : null

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="think"
          text={single ? single.question[tier] : 'A quick question about each one.'}
          voiceMode={profile.voiceMode}
          size={92}
        />

        <div className="flex flex-col gap-3">
          {gates.map((g) => (
            <Card key={`${g.group}-${g.key}`}>
              <p className="text-lg font-bold mb-2.5">{g.label}</p>
              {!single && (
                <p className="text-sm text-ink/55 mb-2">{GATES[g.type].question[tier]}</p>
              )}
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

        <p className="text-center text-sm text-ink/45 px-4">
          If you&apos;re not sure, that&apos;s okay — say so.
        </p>
      </div>

      <BigButton tone="go" onClick={onNext}>
        Next
      </BigButton>
    </Screen>
  )
}
