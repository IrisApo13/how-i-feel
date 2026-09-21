import GuideSays from '../components/GuideSays'
import { Screen, BigButton, ChoiceCard, ChoiceGrid } from '../components/ui'
import { tintFor } from '../lib/tint'
import { getCharacter } from '../data/characters'
import { DURATIONS } from '../data/vocab'

export default function DurationScreen({ profile, value, onChange, onNext, onBack, progress }) {
  const character = getCharacter(profile.characterId)

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col justify-center gap-5 py-2">
        <GuideSays
          character={character}
          pose="talk"
          text="When did it start hurting?"
          voiceMode={profile.voiceMode}
          size={96}
        />

        <ChoiceGrid>
          {DURATIONS.map((d) => (
            <ChoiceCard
              key={d.id}
              tint={tintFor(d.id)}
              label={d.label}
              selected={value === d.id}
              onClick={() => onChange(d.id)}
            />
          ))}
        </ChoiceGrid>
      </div>

      <BigButton tone="go" onClick={onNext} disabled={!value}>Next</BigButton>
    </Screen>
  )
}
