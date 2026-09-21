import { useState } from 'react'
import GuideSays from '../components/GuideSays'
import { Screen, BigButton, Card } from '../components/ui'
import { getCharacter } from '../data/characters'
import { regionLabel } from '../data/bodyMap'
import { SENSATIONS, DURATIONS, MOODS, HELPS, DEPTHS } from '../data/vocab'

const label = (list, id) => list.find((x) => x.id === id)?.label ?? id

// This screen is read by the child, so the younger tier sees the same words it
// picked ("Yucky tummy"), not the clinical ones. The report itself stores ids,
// so a nurse-facing view can render whichever vocabulary it prefers.
const sensationLabel = (id, tier) => {
  const s = SENSATIONS.find((x) => x.id === id)
  if (!s) return id
  return tier === 'young' ? s.kidLabel : s.label
}

const ANSWER_WORD = { yes: 'Yes', no: 'No', unsure: 'Not sure' }

// No icon slot. Every row already carries a title that names it, and this
// screen is the one the nurse reads -- the icons were decoration, and a column
// of emoji is what made a clinical summary look like a toy.
function Row({ title, value, onEdit }) {
  if (!value) return null
  return (
    <button
      onClick={onEdit}
      className="w-full text-left flex items-start gap-3 p-3 rounded-2xl hover:bg-ink/5 active:bg-ink/10 transition"
    >
      <span className="flex-1">
        <span className="block text-sm font-bold text-ink/45">{title}</span>
        <span className="block text-lg font-bold leading-snug">{value}</span>
      </span>
      {onEdit && <span className="text-sm font-bold text-sky-deep mt-1.5">Change</span>}
    </button>
  )
}

export default function SummaryScreen({ profile, report, onSend, onBack, onEdit, progress }) {
  const character = getCharacter(profile.characterId)
  const [showJson, setShowJson] = useState(false)

  const depthSaid = Object.entries(report.depths ?? {})
    .map(([, d]) => {
      const opt = DEPTHS.find((x) => x.id === d)
      return opt ? (profile.ageTier === 'young' ? opt.kidLabel : opt.label) : null
    })
    .filter(Boolean)

  const answered = Object.entries(report.followUps ?? {})
    .map(([k, v]) => ({ q: report.followUpLabels?.[k], a: ANSWER_WORD[v] }))
    .filter((x) => x.q && x.a)

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="attentive"
          text="Here's what you told me. Does it look right?"
          voiceMode={profile.voiceMode}
          size={88}
        />

        <Card className="p-1.5">
          <Row
            title="Where it hurts"
            value={report.bodyRegions.map(regionLabel).join(', ')}
            onEdit={() => onEdit('body-map')}
          />
          <Row
            title="On the skin or inside"
            value={depthSaid.length ? [...new Set(depthSaid)].join(', ') : null}
            onEdit={() => onEdit('depth')}
          />
          <Row
            title="How much"
            value={report.intensity === null ? null : `${report.intensity} out of 10`}
            onEdit={() => onEdit('intensity')}
          />
          <Row
            title="What it feels like"
            value={report.sensations.map((s) => sensationLabel(s, profile.ageTier)).join(', ')}
            onEdit={() => onEdit('sensation')}
          />
          <Row
            title="Since when"
            value={label(DURATIONS, report.duration)}
            onEdit={() => onEdit('duration')}
          />
          {answered.length > 0 && (
            <button
              onClick={() => onEdit('follow-ups')}
              className="w-full text-left flex items-start gap-3 p-3 rounded-2xl hover:bg-ink/5 active:bg-ink/10 transition"
            >
              <span className="flex-1">
                <span className="block text-sm font-bold text-ink/45">You also said</span>
                {answered.map((x) => (
                  <span key={x.q} className="flex justify-between gap-3 text-lg font-bold leading-snug py-0.5">
                    <span className="flex-1">{x.q}</span>
                    <span className="text-ink/55">{x.a}</span>
                  </span>
                ))}
              </span>
              <span className="text-sm font-bold text-sky-deep mt-1.5">Change</span>
            </button>
          )}
          <Row
            title="Feeling inside"
            value={label(MOODS, report.mood)}
            onEdit={() => onEdit('mood')}
          />
          <Row
            title="Might help"
            value={report.helps.map((h) => label(HELPS, h)).join(', ')}
            onEdit={() => onEdit('helps')}
          />
          <Row
            title="In your words"
            value={report.note}
            onEdit={() => onEdit('tell-more')}
          />
          <Row
            title="What you said out loud"
            value={report.transcript ? `“${report.transcript}”` : null}
          />
        </Card>

        {report.drawing && (
          <Card>
            <p className="text-sm font-bold text-ink/45 mb-2">Your drawing</p>
            <img src={report.drawing} alt="Drawing by the child" className="w-full rounded-2xl" />
          </Card>
        )}

        {/* Handy while the nurse dashboard is being built separately: this is
            the exact object that would be handed over. */}
        <div>
          <button
            onClick={() => setShowJson((v) => !v)}
            className="text-xs font-bold text-ink/30 underline underline-offset-4"
          >
            {showJson ? 'Hide' : 'Show'} the data a nurse would receive
          </button>
          {showJson && (
            <pre className="mt-2 p-3 bg-ink/90 text-cream text-[11px] leading-relaxed rounded-2xl overflow-x-auto">
              {JSON.stringify(report, null, 2)}
            </pre>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <BigButton tone="go" onClick={onSend} className="min-h-20 text-2xl">
          Send to my nurse
        </BigButton>
        <p className="text-center text-xs text-ink/40 px-6">
          Nothing has been sent yet. Only what you see above will go.
        </p>
      </div>
    </Screen>
  )
}
