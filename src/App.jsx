import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Setup from './screens/Setup'
import Home from './screens/Home'
import SameAsBefore from './screens/SameAsBefore'
import VoiceFlow from './screens/VoiceFlow'
import BodyMapScreen from './screens/BodyMapScreen'
import IntroScreen from './screens/IntroScreen'
import IntensityScreen from './screens/IntensityScreen'
import SensationScreen from './screens/SensationScreen'
import DurationScreen from './screens/DurationScreen'
import FollowUpScreen from './screens/FollowUpScreen'
import MoodScreen from './screens/MoodScreen'
import TellMoreScreen from './screens/TellMoreScreen'
import HelpsScreen from './screens/HelpsScreen'
import SummaryScreen from './screens/SummaryScreen'
import SentScreen from './screens/SentScreen'
import DepthScreen from './screens/DepthScreen'
import ModePicker from './screens/ModePicker'
import NurseEnd from './screens/NurseEnd'

import { regionById, regionsInGroup, regionLabel, groupsForRegions } from './data/bodyMap'
import { followUpsForGroups, gatesForRegions } from './data/vocab'
import {
  loadProfile, saveProfile, clearAll, saveReport, recentReport, visitStats,
} from './lib/storage'
import { stopSpeaking } from './lib/speech'
import { loadMode, saveMode } from './lib/mode'

// The report object. This is the contract with the nurse dashboard -- agree it
// once and the two halves of the app can be built completely independently.
const emptyReport = () => ({
  bodyRegions: [],
  depths: {},
  // Mechanism answers, kept in their own map rather than sharing `depths`.
  // Head used to store "injury"/"no-injury" in `depths`, which is not a depth:
  // it made `head-injury` carry `depth: "injury"` and it emptied the sensation
  // screen for any child who tapped only their head, because sensations are
  // pruned by surface/inside. Additive, so reports saved before this change
  // still load -- they simply have no mechanism recorded.
  mechanisms: {},
  intensity: null,
  sensations: [],
  duration: null,
  // True when the child confirmed this is the same complaint as a report from
  // the last 48 hours. Carries the recurrence to the nurse, and switches the
  // follow-up screen's reserved slot to the two comparative questions.
  sameAsBefore: false,
  followUps: {},
  followUpLabels: {},
  followUpSources: {},
  mood: null,
  helps: [],
  transcript: null,
  note: null,
  drawing: null,
})

// Natural order of the collection flow. Screens can be skipped (see `enabled`)
// but never reordered, so "next" and the progress bar stay predictable.
const ORDER = [
  'intro', 'body-map', 'depth', 'intensity', 'sensation', 'duration',
  'follow-ups', 'mood', 'tell-more', 'helps', 'summary',
]

export default function App() {
  // A device that has never been set up runs as the patient side.
  //
  // It used to show the mode picker first, which is right for someone
  // provisioning a tablet on a ward and wrong for everyone else: a clinician
  // opening a link expects the app, not a setup question, and picking "staff"
  // asks them to invent a PIN before they have seen anything. The picker still
  // exists and is still reachable from the staff link at the bottom of Home,
  // so a real deployment is unaffected.
  const [mode, setMode] = useState(() => loadMode() ?? 'patient')
  const [switching, setSwitching] = useState(false)
  const [profile, setProfile] = useState(() => loadProfile())
  const [stack, setStack] = useState(['home'])
  const [report, setReport] = useState(emptyReport)
  const [editing, setEditing] = useState(false)
  const [recent, setRecent] = useState(null)
  const [stats, setStats] = useState(() => visitStats())

  const screen = stack[stack.length - 1]

  useEffect(() => {
    stopSpeaking()
  }, [screen])

  const go = useCallback((next) => setStack((s) => [...s, next]), [])
  const back = useCallback(
    () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s)),
    [],
  )
  const home = useCallback(() => {
    setStack(['home'])
    setEditing(false)
    setReport(emptyReport())
    setRecent(null)
    setStats(visitStats())
  }, [])

  const patch = useCallback((fields) => setReport((r) => ({ ...r, ...fields })), [])

  const toggleIn = useCallback(
    (key, value) =>
      setReport((r) => ({
        ...r,
        [key]: r[key].includes(value)
          ? r[key].filter((v) => v !== value)
          : [...r[key], value],
      })),
    [],
  )

  // Every gate the child still needs to answer, with a label made of the
  // regions they actually tapped. One entry per (group, gate): the limb group
  // asks two, and the second is CONDITIONAL -- it appears only once the first
  // is answered "inside" or "not sure", which is why the answers so far are an
  // input here and this recomputes as the child taps.
  const gateAnswers = useMemo(() => {
    const by = {}
    for (const [g, v] of Object.entries(report.depths)) (by[g] ??= {}).depth = v
    for (const [g, v] of Object.entries(report.mechanisms ?? {})) (by[g] ??= {}).mechanism = v
    return by
  }, [report.depths, report.mechanisms])

  const depthGroups = useMemo(
    () =>
      gatesForRegions(report.bodyRegions, gateAnswers).map((gate) => ({
        ...gate,
        label: regionsInGroup(report.bodyRegions, gate.group).map(regionLabel).join(', '),
      })),
    [report.bodyRegions, gateAnswers],
  )

  // Answers for groups the child is no longer reporting are dropped rather than
  // carried, so going back and changing the body map cannot leave a stale depth
  // attached to a region that is gone.
  const liveGroups = useMemo(
    () => new Set(depthGroups.map((g) => g.group)),
    [depthGroups],
  )

  const depths = useMemo(() => {
    const live = {}
    for (const group of liveGroups) {
      if (report.depths[group]) live[group] = report.depths[group]
    }
    return live
  }, [liveGroups, report.depths])

  // Same rule for mechanism: an answer for a group the child is no longer
  // reporting is dropped, not carried.
  const mechanisms = useMemo(() => {
    const live = {}
    for (const group of liveGroups) {
      if (report.mechanisms?.[group]) live[group] = report.mechanisms[group]
    }
    return live
  }, [liveGroups, report.mechanisms])

  // Adaptive follow-ups, derived from the selected regions AND their depth --
  // a tummy rash and a stomach ache get different questions.
  const followUps = useMemo(() => {
    const groups = [...new Set(report.bodyRegions.map((id) => regionById(id)?.group).filter(Boolean))]
    return groups.length
      ? followUpsForGroups(groups, depths, report.duration, profile?.age, report.bodyRegions, {
          repeat: report.sameAsBefore,
          mechanisms,
        })
      : []
  }, [report.bodyRegions, depths, mechanisms, report.duration, profile?.age, report.sameAsBefore])

  const enabled = useCallback(
    (id) => {
      if (id === 'depth') return depthGroups.length > 0
      if (id === 'follow-ups') return followUps.length > 0
      if (id === 'tell-more') return profile?.inputPref === 'draw' || profile?.inputPref === 'write'
      return true
    },
    [depthGroups.length, followUps.length, profile],
  )

  const advance = useCallback(
    (from) => {
      if (editing) {
        setEditing(false)
        go('summary')
        return
      }
      let i = ORDER.indexOf(from) + 1
      while (i < ORDER.length && !enabled(ORDER[i])) i += 1
      go(ORDER[i] ?? 'summary')
    },
    [editing, enabled, go],
  )

  const progressOf = (id) => {
    const i = ORDER.indexOf(id)
    return i < 0 ? undefined : (i + 1) / ORDER.length
  }

  const startReport = () => {
    setReport(emptyReport())
    setEditing(false)
    const prior = recentReport(48)
    setRecent(prior)
    if (prior) go('same-as-before')
    else go(profile.inputPref === 'speak' ? 'voice' : 'intro')
  }

  const send = () => {
    const finished = {
      ...report,
      depths,
      mechanisms,
      id: `r_${Date.now()}`,
      timestamp: new Date().toISOString(),
      patientName: profile.name,
      age: profile.age,
      ageTier: profile.ageTier,
      inputMethod: profile.inputPref,
    }
    saveReport(finished)
    setStats(visitStats())
    go('sent')
  }

  const onEdit = (target) => {
    setEditing(true)
    go(target)
  }

  // ---------- device mode ----------
  // Comes before everything else: an unprovisioned device does not yet know
  // whether it belongs to a child or to staff.
  const chooseMode = (next) => {
    saveMode(next)
    setMode(next)
    setSwitching(false)
    setStack(['home'])
  }

  if (!mode || switching) return <ModePicker onChoose={chooseMode} />
  if (mode === 'nurse') return <NurseEnd onExit={() => setSwitching(true)} />

  // ---------- setup ----------
  if (!profile) {
    return (
      <Setup
        onComplete={(p) => {
          saveProfile(p)
          setProfile(p)
          setStack(['home'])
        }}
      />
    )
  }

  const common = { profile, onBack: back }

  const render = () => {
    switch (screen) {
      case 'home':
        return (
          <Home
            profile={profile}
            recent={recentReport(48)}
            stats={stats}
            onStart={startReport}
            onReset={() => {
              clearAll()
              setProfile(null)
              setStack(['home'])
              setReport(emptyReport())
            }}
            onStaff={() => setSwitching(true)}
          />
        )

      case 'same-as-before':
        return (
          <SameAsBefore
            {...common}
            recent={recent}
            onSame={() => {
              patch({
                sameAsBefore: true,
                bodyRegions: recent.bodyRegions ?? [],
                sensations: recent.sensations ?? [],
              })
              // Same complaint as last time: skip straight to "how bad is it
              // now", which is the part that actually changed.
              go('intensity')
            }}
            onNew={() => go(profile.inputPref === 'speak' ? 'voice' : 'intro')}
          />
        )

      case 'voice':
        return (
          <VoiceFlow
            {...common}
            onSkip={() => go('intro')}
            onDone={(result) => {
              patch({
                bodyRegions: result.bodyRegions,
                sensations: result.sensations,
                intensity: result.intensity,
                duration: result.duration,
                transcript: result.transcript,
              })
              go(result.forceEdit || !result.bodyRegions.length ? 'body-map' : 'intensity')
            }}
          />
        )

      case 'intro':
        return (
          <IntroScreen
            profile={profile}
            onNext={() => advance('intro')}
            onBack={back}
            progress={progressOf('intro')}
          />
        )

      case 'body-map':
        return (
          <BodyMapScreen
            {...common}
            selected={report.bodyRegions}
            onToggle={(id) => toggleIn('bodyRegions', id)}
            onNext={() => advance('body-map')}
            progress={progressOf('body-map')}
          />
        )

      case 'depth':
        return (
          <DepthScreen
            {...common}
            gates={depthGroups}
            answers={gateAnswers}
            onAnswer={(group, key, value) =>
              setReport((r) => {
                const slot = key === 'depth' ? 'depths' : 'mechanisms'
                const next = { ...r, [slot]: { ...r[slot], [group]: value } }
                // Changing the depth answer can retract the mechanism gate that
                // depended on it. Drop the stale answer rather than carrying a
                // mechanism the child was never asked about on this path.
                if (key === 'depth' && value === 'surface') {
                  const { [group]: _drop, ...rest } = r.mechanisms ?? {}
                  next.mechanisms = rest
                }
                return next
              })
            }
            onNext={() => advance('depth')}
            progress={progressOf('depth')}
          />
        )

      case 'intensity':
        return (
          <IntensityScreen
            {...common}
            regions={report.bodyRegions}
            value={report.intensity}
            onChange={(v) => patch({ intensity: v })}
            onNext={() => advance('intensity')}
            progress={progressOf('intensity')}
          />
        )

      case 'sensation':
        return (
          <SensationScreen
            {...common}
            depths={depths}
            groups={groupsForRegions(report.bodyRegions)}
            selected={report.sensations}
            onToggle={(id) => toggleIn('sensations', id)}
            onNext={() => advance('sensation')}
            progress={progressOf('sensation')}
          />
        )

      case 'duration':
        return (
          <DurationScreen
            {...common}
            value={report.duration}
            onChange={(v) => patch({ duration: v })}
            onNext={() => advance('duration')}
            progress={progressOf('duration')}
          />
        )

      case 'follow-ups':
        return (
          <FollowUpScreen
            {...common}
            questions={followUps}
            answers={report.followUps}
            onAnswer={(qid, answer) =>
              setReport((r) => ({
                ...r,
                followUps: { ...r.followUps, [qid]: answer },
                followUpLabels: {
                  ...r.followUpLabels,
                  [qid]: (() => {
                    const f = followUps.find((q) => q.id === qid)
                    // Bank questions carry both tiers; record the wording the
                    // child actually saw, so the nurse reads the real question.
                    return typeof f?.q === 'string' ? f.q : f?.q?.[profile.ageTier === 'young' ? 'young' : 'older']
                  })(),
                },
                // The citation travels with the answer. Every bank question
                // carries the source it was derived from, and a nurse reading
                // "Does it hurt more when you cough?" should be able to see
                // that it came from NICE rather than from us. Hand-written
                // fallback questions have no source and simply record none.
                followUpSources: {
                  ...r.followUpSources,
                  [qid]: followUps.find((q) => q.id === qid)?.source?.cite ?? null,
                },
              }))
            }
            onNext={() => advance('follow-ups')}
            progress={progressOf('follow-ups')}
          />
        )

      case 'mood':
        return (
          <MoodScreen
            {...common}
            value={report.mood}
            onChange={(v) => patch({ mood: v })}
            onNext={() => advance('mood')}
            progress={progressOf('mood')}
          />
        )

      case 'tell-more':
        return (
          <TellMoreScreen
            {...common}
            note={report.note}
            onNote={(v) => patch({ note: v })}
            drawing={report.drawing}
            onDrawing={(v) => patch({ drawing: v })}
            onNext={() => advance('tell-more')}
            progress={progressOf('tell-more')}
          />
        )

      case 'helps':
        return (
          <HelpsScreen
            {...common}
            depths={depths}
            selected={report.helps}
            onToggle={(id) => toggleIn('helps', id)}
            onNext={() => advance('helps')}
            progress={progressOf('helps')}
          />
        )

      case 'summary':
        return (
          <SummaryScreen
            {...common}
            report={report}
            onSend={send}
            onEdit={onEdit}
            progress={1}
          />
        )

      case 'sent':
        return <SentScreen profile={profile} onHome={home} />

      default:
        return null
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="min-h-full"
      >
        {render()}
      </motion.div>
    </AnimatePresence>
  )
}
