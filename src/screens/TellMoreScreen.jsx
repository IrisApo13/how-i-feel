import { useEffect, useRef, useState } from 'react'
import GuideSays from '../components/GuideSays'
import { Screen, BigButton } from '../components/ui'
import { getCharacter } from '../data/characters'

// Shown only when the child said at setup that they prefer writing or drawing.
// Whatever lands here goes to the nurse as the child's own words or marks --
// never summarised, never rewritten.

function DrawPad({ onChange }) {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    const ratio = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * ratio
    canvas.height = rect.height * ratio
    const ctx = canvas.getContext('2d')
    ctx.scale(ratio, ratio)
    ctx.lineWidth = 6
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = '#e0575b'
  }, [])

  const pos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    drawing.current = true
    const ctx = canvasRef.current.getContext('2d')
    const { x, y } = pos(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const move = (e) => {
    if (!drawing.current) return
    const ctx = canvasRef.current.getContext('2d')
    const { x, y } = pos(e)
    ctx.lineTo(x, y)
    ctx.stroke()
    if (empty) setEmpty(false)
  }

  const up = () => {
    if (!drawing.current) return
    drawing.current = false
    onChange(canvasRef.current.toDataURL('image/png'))
  }

  const clear = () => {
    const canvas = canvasRef.current
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    setEmpty(true)
    onChange(null)
  }

  return (
    <div className="flex flex-col gap-2">
      <canvas
        ref={canvasRef}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerLeave={up}
        className="w-full h-72 bg-sky-soft rounded-[1.75rem] touch-none"
      />
      <button
        onClick={clear}
        disabled={empty}
        className="self-center px-5 py-2.5 rounded-2xl bg-sky-soft  font-bold text-sm disabled:opacity-40 active:scale-95"
      >
        Start again
      </button>
    </div>
  )
}

export default function TellMoreScreen({
  profile, note, onNote, onDrawing, onNext, onBack, progress,
}) {
  const character = getCharacter(profile.characterId)
  const isDraw = profile.inputPref === 'draw'

  return (
    <Screen onBack={onBack} progress={progress}>
      <div className="flex-1 flex flex-col gap-4 py-2">
        <GuideSays
          character={character}
          pose="talk"
          text={isDraw ? 'Want to draw how it feels?' : 'Anything else you want to say?'}
          voiceMode={profile.voiceMode}
          size={88}
        />

        {isDraw ? (
          <DrawPad onChange={onDrawing} />
        ) : (
          <textarea
            value={note ?? ''}
            onChange={(e) => onNote(e.target.value)}
            placeholder="Type anything you want the nurse to know…"
            rows={7}
            maxLength={500}
            className="w-full bg-sky-soft focus:border-sky outline-none
              rounded-3xl p-4 text-lg leading-snug resize-none"
          />
        )}
      </div>

      <BigButton tone="go" onClick={onNext}>
        Next
      </BigButton>
    </Screen>
  )
}
