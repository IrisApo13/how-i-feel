import { useEffect, useRef, useState } from 'react'

// Text that types itself out. Two rules it has to respect, both for the same
// reason -- a child in pain should never be made to wait for a machine:
//
//   - tapping anywhere finishes it immediately, and the parent is told, so the
//     Next button can appear without a second wait.
//   - `prefers-reduced-motion` skips the effect entirely. Typing text is
//     exactly the kind of motion that setting exists for.
//
// Speed is per-character rather than a fixed duration so a long line does not
// crawl and a short one does not flash past.

export default function Typewriter({ text, speed = 38, onDone, className = '' }) {
  const [shown, setShown] = useState('')
  const done = useRef(false)

  // `onDone` is held in a ref and deliberately kept OUT of the effect's
  // dependencies. A parent almost always passes an inline arrow, which is a new
  // function object on every render -- so listing it as a dependency restarts
  // the effect every time the parent re-renders, and the line types itself out
  // again from the beginning. Worse, if the callback sets parent state (this one
  // does), finishing a line triggers a re-render that retypes the line that
  // just finished, forever. The ref keeps the callback current without making
  // the animation depend on its identity.
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    const instant =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    done.current = false
    if (instant) {
      setShown(text)
      done.current = true
      onDoneRef.current?.()
      return
    }
    setShown('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        done.current = true
        onDoneRef.current?.()
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  const finish = () => {
    if (done.current) return
    setShown(text)
    done.current = true
    onDoneRef.current?.()
  }

  return (
    // The full text is always in the DOM for screen readers; the visible span is
    // aria-hidden so assistive tech reads the line once, not once per keystroke.
    <span onPointerDown={finish} className={className}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
