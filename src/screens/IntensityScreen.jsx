import GuideSays from '../components/GuideSays'
import FacesScale from '../components/FacesScale'
import { Screen, BigButton } from '../components/ui'
import { getCharacter } from '../data/characters'

// The anchor row that used to sit under the faces ("Like when your sock feels
// funny" / "The most it has ever hurt") is gone. Every face now carries its own
// word underneath, so the row restated the two ends of a scale the child could
// already read -- and on a phone it wrapped to three lines and pushed the Next
// button off screen.

export default function IntensityScreen({
  profile, value, onChange, onNext, onBack, progress,
}) {
  const character = getCharacter(profile.characterId)

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col justify-center gap-5 py-2">
        <GuideSays
          character={character}
          pose="attentive"
          text="How much does it hurt?"
          voiceMode={profile.voiceMode}
          size={96}
        />

        <FacesScale value={value} onChange={onChange} tier={profile.ageTier} />
      </div>

      <BigButton tone="go" onClick={onNext} disabled={value === null}>Next</BigButton>
    </Screen>
  )
}
