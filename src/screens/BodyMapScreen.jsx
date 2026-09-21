import { useState } from 'react'
import GuideSays from '../components/GuideSays'
import BodyMap from '../components/BodyMap'
import { Screen, BigButton, Chip } from '../components/ui'
import { getCharacter } from '../data/characters'
import { regionLabel } from '../data/bodyMap'

export default function BodyMapScreen({ profile, selected, onToggle, onNext, onBack, progress }) {
  const character = getCharacter(profile.characterId)
  const [view, setView] = useState('front')

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-3 py-2">
        <GuideSays
          character={character}
          pose="point"
          text={selected.length ? 'Anywhere else?' : 'Show me where it hurts.'}
          voiceMode={profile.voiceMode}
          size={92}
        />

        <BodyMap
          view={view}
          onViewChange={setView}
          selected={selected}
          onToggle={onToggle}
          height={300}
        />

        {/* The child who cannot point anywhere. Kept off the drawing on purpose:
            it is not a place on the body, and putting it on the body would make
            it compete with a real tap. Toggles like any other region. */}
        <button
          type="button"
          onClick={() => onToggle('all-over')}
          aria-pressed={selected.includes('all-over')}
          className={`w-full rounded-3xl border-2 py-3 font-bold transition-colors ${
            selected.includes('all-over')
              ? 'bg-ink text-white border-ink'
              : 'bg-sky-soft text-ink/60 border-ink/10'
          }`}
        >
          I hurt all over
        </button>

        <div className="min-h-16 bg-sky-soft rounded-[1.75rem] p-3">
          {selected.length === 0 ? (
            <p className="text-center text-ink/40 font-bold py-2">
              Tap the body above. You can pick more than one.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2 justify-center">
              {selected.map((id) => (
                <Chip key={id} onRemove={() => onToggle(id)}>{regionLabel(id)}</Chip>
              ))}
            </div>
          )}
        </div>
      </div>

      <BigButton tone="go" onClick={onNext} disabled={!selected.length}>Next</BigButton>
    </Screen>
  )
}
