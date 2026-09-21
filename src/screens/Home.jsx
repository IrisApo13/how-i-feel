import GuideSays from '../components/GuideSays'
import Avatar from '../components/Avatar'
import { Screen, BigButton, Card } from '../components/ui'
import { getCharacter } from '../data/characters'
import { regionLabel } from '../data/bodyMap'
import { humanTime } from '../lib/storage'

export default function Home({ profile, recent, stats, onStart, onReset, onStaff }) {
  const character = getCharacter(profile.characterId)

  return (
    <Screen>
      <div className="flex-1 flex flex-col justify-center gap-6 py-4">
        <div className="flex items-center justify-center gap-1">
          <Avatar avatar={profile.avatar} size={78} />
          <GuideSays
            character={character}
            pose="wave"
            text={`Hi ${profile.name}! How are you feeling today?`}
            voiceMode={profile.voiceMode}
            size={120}
          />
        </div>

        <BigButton tone="warm" onClick={onStart} className="text-2xl min-h-24">
          I want to report something
        </BigButton>

        {recent && (
          <Card className="text-center">
            <p className="text-sm font-bold text-ink/50">Last time you told us</p>
            <p className="text-lg font-bold">
              {recent.bodyRegions?.length
                ? recent.bodyRegions.map(regionLabel).join(', ')
                : 'how you were feeling'}
            </p>
            <p className="text-sm text-ink/50">{humanTime(recent.timestamp)}</p>
          </Card>
        )}

        {/* The nurse-facing value of this app is largely here: repeat visits
            with a pattern. Surfacing it on the child's side too keeps the app
            honest about what it is recording. */}
        {stats.last30Days >= 3 && stats.topRegion && (
          <Card className="text-center bg-sun/15 border-sun/40">
            <p className="font-bold">
              You&apos;ve checked in {stats.last30Days} times this month.
            </p>
            <p className="text-sm text-ink/60">
              Mostly about your {regionLabel(stats.topRegion.id).toLowerCase()}.
            </p>
          </Card>
        )}
      </div>

      {/* Both of these are staff affordances sitting on a screen a child is
          holding, so they are kept small, plain and un-inviting. Reaching the
          nurse end from here needs the staff PIN. */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onReset}
          className="text-sm text-ink/35 font-bold py-3 underline underline-offset-4"
        >
          Start over (clears this device)
        </button>
        <button
          onClick={onStaff}
          className="text-sm text-ink/35 font-bold py-3 underline underline-offset-4"
        >
          Staff
        </button>
      </div>
    </Screen>
  )
}
