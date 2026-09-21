// Which half of the app this device is running.
//
// This is a provisioning choice, not a question the child answers every time:
// a ward tablet is set to "patient" once when it is put by the bed, and stays
// there. The picker only appears on a device that has never been set up.

const MODE_KEY = 'hif.mode'
const PIN_KEY = 'hif.staffPin'

const read = (key) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const write = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* private browsing or full quota */
  }
}

export const loadMode = () => read(MODE_KEY)
export const saveMode = (mode) => write(MODE_KEY, mode)
export const clearMode = () => {
  try {
    localStorage.removeItem(MODE_KEY)
  } catch {
    /* nothing to do */
  }
}

// The staff PIN exists to stop a bored child tapping into the nurse end, and
// nothing more. It is stored in plaintext in localStorage, so it is NOT
// authentication and must not be treated as protecting anything once real
// patient data is involved -- see README "Known gaps".
export const hasPin = () => Boolean(read(PIN_KEY))
export const setPin = (pin) => write(PIN_KEY, pin)
export const checkPin = (pin) => read(PIN_KEY) === pin
