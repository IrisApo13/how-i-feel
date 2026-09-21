import GuideSays from '../components/GuideSays'
import { Screen, BigButton, Card } from '../components/ui'
import { getCharacter } from '../data/characters'
import { regionLabel } from '../data/bodyMap'
import { humanTime } from '../lib/storage'

// Shown only when there is a report from the last 48 hours. Two reasons it
// earns its place: a child repeating themselves gets a shortcut, and a nurse
// gets to see "same thing again" rather than two disconnected visits.

export default function SameAsBefore({ profile, recent, onSame, onNew, onBack }) {
  const character = getCharacter(profile.characterId)
  const places = recent.bodyRegions?.map(regionLabel).join(' and ') || 'something'

  return (
    <Screen onBack={onBack}>
      <div className="flex-1 flex flex-col justify-center gap-6 py-4">
        <GuideSays
          character={character}
          pose="attentive"
          text="Wait — you told me about this recently."
          voiceMode={profile.voiceMode}
        />

        <Card className="text-center">
          <p className="text-sm font-bold text-ink/50">{humanTime(recent.timestamp)}</p>
          <p className="text-2xl font-extrabold mt-1">{places}</p>
          {typeof recent.intensity === 'number' && (
            <p className="text-ink/60 mt-1">You said it was a {recent.intensity} out of 10</p>
          )}
        </Card>

        <p className="text-center text-xl font-bold">Is it the same thing?</p>

        <div className="flex flex-col gap-3">
          <BigButton tone="go" onClick={onSame}>
            Yes, it&apos;s the same
          </BigButton>
          <BigButton tone="soft" onClick={onNew}>
            No, something different
          </BigButton>
        </div>
      </div>
    </Screen>
  )
}
