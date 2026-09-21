import GuideSays from '../components/GuideSays'
import { Screen, BigButton, ChoiceCard, ChoiceGrid } from '../components/ui'
import { tintFor } from '../lib/tint'
import { getCharacter } from '../data/characters'
import { MOODS } from '../data/vocab'

// Asked separately from pain on purpose. A large share of nurse call-outs
// are worry, hunger, tiredness or wanting a break presenting as a stomachache.
// Folding mood into the pain score hides that; asking it on its own screen
// surfaces it.

export default function MoodScreen({ profile, value, onChange, onNext, onBack, progress }) {
  const character = getCharacter(profile.characterId)

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col justify-center gap-5 py-2">
        <GuideSays
          character={character}
          pose="attentive"
          text="And how are you feeling inside?"
          voiceMode={profile.voiceMode}
          size={96}
        />

        <ChoiceGrid cols={2}>
          {MOODS.map((m) => (
            <ChoiceCard
              key={m.id}
              tint={tintFor(m.id)}
              label={m.label}
              selected={value === m.id}
              onClick={() => onChange(m.id)}
            />
          ))}
        </ChoiceGrid>
      </div>

      <BigButton tone="go" onClick={onNext}>
        Next
      </BigButton>
    </Screen>
  )
}
