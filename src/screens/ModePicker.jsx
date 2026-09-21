import { useState } from 'react'
import { Screen, Title, BigButton, Card } from '../components/ui'
import { hasPin, setPin as storePin, checkPin } from '../lib/mode'

// First run on a fresh device. Deliberately plain and unfriendly-looking: this
// screen is for the person setting the tablet up on the ward, not for a child.

export default function ModePicker({ onChoose }) {
  const [step, setStep] = useState('pick')
  const [pin, setPin] = useState('')
  const [error, setError] = useState(null)

  const firstTime = !hasPin()

  const submitPin = () => {
    if (pin.length < 4) {
      setError('Use at least 4 digits.')
      return
    }
    if (firstTime) {
      storePin(pin)
      onChoose('nurse')
      return
    }
    if (checkPin(pin)) {
      onChoose('nurse')
      return
    }
    setError('That PIN is not right.')
    setPin('')
  }

  if (step === 'pin') {
    return (
      <Screen onBack={() => { setStep('pick'); setPin(''); setError(null) }}>
        <div className="flex-1 flex flex-col justify-center gap-5 py-4 max-w-sm mx-auto w-full">
          <Title sub={firstTime
            ? 'Choose a PIN for this device. Staff will need it to reach the nurse end.'
            : 'Enter the staff PIN for this device.'}
          >
            {firstTime ? 'Set a staff PIN' : 'Staff PIN'}
          </Title>

          <input
            type="password"
            inputMode="numeric"
            autoComplete="off"
            value={pin}
            onChange={(e) => { setPin(e.target.value.replace(/\D/g, '').slice(0, 8)); setError(null) }}
            onKeyDown={(e) => e.key === 'Enter' && submitPin()}
            className="w-full text-center text-3xl font-extrabold tracking-[0.4em] bg-white
               focus:border-ink/40 outline-none rounded-3xl py-4"
            aria-label="Staff PIN"
          />

          {error && <p className="text-center text-hurt font-bold text-sm">{error}</p>}

          <BigButton tone="go" onClick={submitPin} disabled={!pin}>
            {firstTime ? 'Set PIN and continue' : 'Continue'}
          </BigButton>
        </div>
      </Screen>
    )
  }

  return (
    <Screen>
      <div className="flex-1 flex flex-col justify-center gap-6 py-4 max-w-sm mx-auto w-full">
        <Title sub="Set this device up once. It will stay in this mode until staff change it.">
          How I Feel
        </Title>

        <div className="flex flex-col gap-3">
          <BigButton tone="warm" onClick={() => onChoose('patient')} className="min-h-24 text-2xl">
            Patient end
          </BigButton>
          <Card>
            <p className="text-sm text-ink/60 leading-snug">
              For a tablet at the bedside. The child reports symptoms on their own,
              and cannot leave this mode without the staff PIN.
            </p>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <BigButton tone="soft" onClick={() => setStep('pin')} className="min-h-20">
            Nurse end
          </BigButton>
          <Card>
            <p className="text-sm text-ink/60 leading-snug">
              For staff. Reads the reports children have sent.
            </p>
          </Card>
        </div>
      </div>
    </Screen>
  )
}
