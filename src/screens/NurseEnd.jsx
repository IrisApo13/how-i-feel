import { useState } from 'react'
import { loadHistory, humanTime } from '../lib/storage'
import { regionLabel } from '../data/bodyMap'
import { SENSATIONS, DURATIONS, MOODS, HELPS, DEPTHS, GATES } from '../data/vocab'

// The nurse's side.
//
// Deliberately plain: monochrome, no illustration, no colour except where a
// number needs to carry weight. It should look nothing like the child's side,
// because it is read by an adult under time pressure who wants facts, not
// reassurance. Everything here is what the child actually reported, in their
// own words where they used any.
//
// Collapsed by default. A ward may accumulate a lot of these, and a wall of
// open reports is unreadable; a list of names with a time and a pain score
// lets a nurse find the one they want and open only that.

const labelFrom = (list, id) => list.find((x) => x.id === id)?.label ?? id

const gateLabel = (type, id) =>
  GATES?.[type]?.options?.find((o) => o.id === id)?.label ?? id

function Field({ label, children }) {
  if (children === null || children === undefined || children === '') return null
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-3 py-1.5 border-t border-ink/10 text-sm">
      <dt className="text-ink/45">{label}</dt>
      <dd className="text-ink/90">{children}</dd>
    </div>
  )
}

function ReportCard({ report, open, onToggle }) {
  const followUps = Object.entries(report.followUps ?? {})
  const name = report.patientName ?? report.studentName ?? 'Unknown'
  const where = report.bodyRegions?.length
    ? report.bodyRegions.map(regionLabel).join(', ')
    : 'No area given'

  return (
    <article className="bg-white border border-ink/15 rounded-lg overflow-hidden">
      {/* The collapsed row carries the three things a nurse triages on: who,
          where, and how bad. Anything else requires opening it. */}
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left px-4 py-3 flex items-baseline gap-3 hover:bg-ink/[0.03] transition"
      >
        <span className="font-semibold text-base">{name}</span>
        {report.age != null && <span className="text-ink/45 text-sm">age {report.age}</span>}
        <span className="text-ink/60 text-sm flex-1 truncate">{where}</span>
        {report.intensity != null && (
          <span className="shrink-0 text-sm">
            <span className="font-semibold text-base">{report.intensity}</span>
            <span className="text-ink/45">/10</span>
          </span>
        )}
        <time className="shrink-0 text-sm text-ink/45">{humanTime(report.timestamp)}</time>
        <span aria-hidden="true" className="shrink-0 text-ink/35 text-xs w-4 text-right">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          {/* Stated before the detail, not buried in it: a repeat complaint
              changes how the rest should be read. */}
          {report.sameAsBefore && (
            <p className="text-sm text-ink/70 border border-ink/20 rounded px-3 py-2 mb-3">
              The child said this is the same problem they reported before.
            </p>
          )}

          <dl>
            <Field label="Where">{where}</Field>
            <Field label="On skin or inside">
              {Object.keys(report.depths ?? {}).length
                ? Object.entries(report.depths)
                    .map(([g, d]) => `${g}: ${labelFrom(DEPTHS, d)}`)
                    .join(' · ')
                : null}
            </Field>
            <Field label="Injury or not">
              {Object.keys(report.mechanisms ?? {}).length
                ? Object.entries(report.mechanisms)
                    .map(([g, m]) => `${g}: ${gateLabel('mechanism', m)}`)
                    .join(' · ')
                : null}
            </Field>
            <Field label="How much">
              {report.intensity != null ? `${report.intensity} out of 10` : null}
            </Field>
            <Field label="What it feels like">
              {report.sensations?.length
                ? report.sensations.map((id) => labelFrom(SENSATIONS, id)).join(', ')
                : null}
            </Field>
            <Field label="How long">
              {report.duration ? labelFrom(DURATIONS, report.duration) : null}
            </Field>
            <Field label="How they feel">{report.mood ? labelFrom(MOODS, report.mood) : null}</Field>
            <Field label="Might help">
              {report.helps?.length ? report.helps.map((id) => labelFrom(HELPS, id)).join(', ') : null}
            </Field>
          </dl>

          {followUps.length > 0 && (
            <section className="mt-4">
              <h3 className="text-xs uppercase tracking-wide text-ink/45 mb-1.5">
                Follow-up questions
              </h3>
              <ul className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
                {followUps.map(([id, answer]) => (
                  <li key={id} className="py-2 text-sm">
                    <div className="flex gap-3">
                      <span className="text-ink/70 flex-1">
                        {report.followUpLabels?.[id] ?? id}
                      </span>
                      <span className="font-semibold shrink-0">{answer}</span>
                    </div>
                    {/* The citation. A nurse reading an unfamiliar question
                        should be able to see it came from the literature and
                        not from us. */}
                    {report.followUpSources?.[id] && (
                      <p className="text-xs text-ink/40 mt-0.5 pr-16">
                        Source: {report.followUpSources[id]}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(report.transcript || report.note || report.drawing) && (
            <section className="mt-4">
              <h3 className="text-xs uppercase tracking-wide text-ink/45 mb-1.5">
                In their own words
              </h3>
              <dl>
                <Field label="Said">
                  {report.transcript ? `“${report.transcript}”` : null}
                </Field>
                <Field label="Typed">{report.note}</Field>
                <Field label="Drew">
                  {report.drawing
                    ? <img src={report.drawing} alt="Drawing by the child" className="max-w-56 border border-ink/15 rounded" />
                    : null}
                </Field>
              </dl>
            </section>
          )}

          <p className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/40">
            Answered by {report.inputMethod ?? 'tapping'}
            {report.ageTier ? `, ${report.ageTier === 'young' ? '4 to 7' : '8 to 12'} wording` : ''}.
            This is what the child reported. It is not a diagnosis or a triage decision.
          </p>
        </div>
      )}
    </article>
  )
}

export default function NurseEnd({ onExit }) {
  const reports = loadHistory()
  const [openId, setOpenId] = useState(null)

  return (
    <div className="min-h-full max-w-3xl mx-auto w-full px-4 py-5 flex flex-col gap-3">
      <header className="flex items-baseline justify-between gap-3 border-b border-ink/15 pb-3">
        <div>
          <h1 className="text-xl font-semibold">Reports</h1>
          <p className="text-sm text-ink/45">
            {reports.length === 0
              ? 'Nothing reported on this device yet.'
              : `${reports.length} report${reports.length === 1 ? '' : 's'}, newest first. Tap one to open it.`}
          </p>
        </div>
        <button
          onClick={onExit}
          className="shrink-0 text-sm border border-ink/20 rounded px-3 py-1.5 hover:bg-ink/5"
        >
          Switch mode
        </button>
      </header>

      {reports.map((r) => (
        <ReportCard
          key={r.id}
          report={r}
          open={openId === r.id}
          // One at a time. Two open reports side by side is how the wrong
          // child's answers get read.
          onToggle={() => setOpenId((cur) => (cur === r.id ? null : r.id))}
        />
      ))}
    </div>
  )
}
