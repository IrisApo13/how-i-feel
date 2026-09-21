// Everything lives in localStorage. No backend, no accounts, no network.
// That is a deliberate privacy posture for a health app used by minors, not a
// shortcut: nothing about a child leaves the device unless someone explicitly
// sends it.

const PROFILE_KEY = 'hif.profile'
const HISTORY_KEY = 'hif.history'

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Private browsing or a full quota. Failing to persist should never break
    // the flow the child is in the middle of.
  }
}

export const loadProfile = () => read(PROFILE_KEY, null)
export const saveProfile = (profile) => write(PROFILE_KEY, profile)
export const clearAll = () => {
  try {
    localStorage.removeItem(PROFILE_KEY)
    localStorage.removeItem(HISTORY_KEY)
  } catch {
    /* nothing to do */
  }
}

export const loadHistory = () => read(HISTORY_KEY, [])

export const saveReport = (report) => {
  const history = loadHistory()
  history.unshift(report)
  // Ad-hoc bedside reporting, not scheduled pain rounds -- 50 comfortably
  // covers a long admission at the rate a child picks the tablet up.
  write(HISTORY_KEY, history.slice(0, 50))
  return report
}

// Powers the "is this the same as before?" shortcut on the home screen.
export const recentReport = (withinHours = 48) => {
  const cutoff = Date.now() - withinHours * 60 * 60 * 1000
  return loadHistory().find((r) => new Date(r.timestamp).getTime() >= cutoff) ?? null
}

// Frequent-visit pattern. The nurse dashboard is the real consumer of this,
// but computing it here keeps the contract in one place.
export const visitStats = () => {
  const history = loadHistory()
  const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000
  const recent = history.filter((r) => new Date(r.timestamp).getTime() >= monthAgo)
  const counts = {}
  for (const r of recent) {
    for (const id of r.bodyRegions ?? []) counts[id] = (counts[id] ?? 0) + 1
  }
  const topRegion = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] ?? null
  return {
    total: history.length,
    last30Days: recent.length,
    topRegion: topRegion ? { id: topRegion[0], count: topRegion[1] } : null,
  }
}

export const humanTime = (iso) => {
  const then = new Date(iso).getTime()
  const mins = Math.round((Date.now() - then) / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins} minute${mins === 1 ? '' : 's'} ago`
  const hours = Math.round(mins / 60)
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`
  const days = Math.round(hours / 24)
  return `${days} day${days === 1 ? '' : 's'} ago`
}
