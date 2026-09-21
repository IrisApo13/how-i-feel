import GuideSays from '../components/GuideSays'
import { Screen, BigButton, ChoiceCard, ChoiceGrid } from '../components/ui'
import { tintFor } from '../lib/tint'
import { getCharacter } from '../data/characters'
import { sensationsForTier } from '../data/vocab'

export default function SensationScreen({
  profile, depths, groups, selected, onToggle, onNext, onBack, progress,
}) {
  const character = getCharacter(profile.characterId)
  // Filtered by age tier, by depth, AND by where it hurts: a child who said
  // "on my skin" is not offered "tight squeeze", and one who tapped an arm is
  // not offered "yucky tummy".
  const options = sensationsForTier(profile.ageTier, depths, groups)
  const young = profile.ageTier === 'young'

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="think"
          text="What does it feel like?"
          voiceMode={profile.voiceMode}
          size={92}
        />

        <ChoiceGrid cols={3}>
          {options.map((s) => (
            <ChoiceCard
              key={s.id}
              tint={tintFor(s.id)}
              label={young ? s.kidLabel : s.label}
              selected={selected.includes(s.id)}
              onClick={() => onToggle(s.id)}
            />
          ))}
        </ChoiceGrid>

        <p className="text-center text-sm text-ink/45">
          Pick as many as you want.
        </p>
      </div>

      <BigButton tone="go" onClick={onNext}>
        Next
      </BigButton>
    </Screen>
  )
}
