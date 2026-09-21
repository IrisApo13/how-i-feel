import GuideSays from '../components/GuideSays'
import { Screen, BigButton, ChoiceCard, ChoiceGrid } from '../components/ui'
import { tintFor } from '../lib/tint'
import { getCharacter } from '../data/characters'
import { helpsForDepths } from '../data/vocab'

// Asking what the child thinks would help is not the same as promising it.
// The wording is careful about that -- it is a request passed to the nurse,
// who decides.

export default function HelpsScreen({
  profile, depths, selected, onToggle, onNext, onBack, progress,
}) {
  const character = getCharacter(profile.characterId)
  const options = helpsForDepths(depths)

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="think"
          text="What do you think would help?"
          voiceMode={profile.voiceMode}
          size={88}
        />

        <ChoiceGrid cols={2}>
          {options.map((h) => (
            <ChoiceCard
              key={h.id}
              tint={tintFor(h.id)}
              label={h.label}
              selected={selected.includes(h.id)}
              onClick={() => onToggle(h.id)}
            />
          ))}
        </ChoiceGrid>

        <p className="text-center text-sm text-ink/45 px-4">
          The nurse will decide what&apos;s best, but they want to know what you think.
        </p>
      </div>

      <BigButton tone="go" onClick={onNext}>
        Next
      </BigButton>
    </Screen>
  )
}
