import { motion } from 'framer-motion'

// Shared layout + controls. The sizing here encodes the kid-UI rules:
// one question per screen, very large touch targets, always a way back,
// nothing that can be "gotten wrong".

export function Screen({ children, onBack, progress, footer }) {
  return (
    <div className="min-h-full flex flex-col max-w-2xl mx-auto w-full px-4 pb-4">
      <header className="flex items-center gap-3 pt-4 pb-2 min-h-14">
        {onBack ? (
          <button
            onClick={onBack}
            className="glass shrink-0 w-11 h-11 rounded-full bg-white/45 text-ink/70 grid place-items-center active:scale-95 transition"
            aria-label="Go back"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                 strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
        ) : (
          <div className="w-12 h-12 shrink-0" />
        )}
        {typeof progress === 'number' && (
          <div className="flex-1 h-1.5 rounded-full bg-white/50 overflow-hidden">
            <motion.div
              className="h-full bg-sky-deep/70 rounded-full"
              initial={false}
              animate={{ width: `${Math.round(progress * 100)}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            />
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      {footer && <footer className="pt-3">{footer}</footer>}
    </div>
  )
}

export function Title({ children, sub }) {
  return (
    <div className="text-center px-2">
      <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
        {children}
      </h1>
      {sub && <p className="mt-2 text-lg text-ink/60">{sub}</p>}
    </div>
  )
}

export function BigButton({
  children,
  onClick,
  disabled,
  tone = 'primary',
  className = '',
}) {
  // Four tones became two. Sky-blue for primary, mint for go, sun for warm and
  // white for soft meant four different buttons could appear in one flow with
  // no rule about which meant what -- colour carrying no information is how an
  // interface starts looking assembled. There is one action colour now, and a
  // quiet variant for anything secondary.
  const tones = {
    primary: 'glass-on bg-sky-deep text-white',
    go: 'glass-on bg-sky-deep text-white',
    warm: 'glass-on bg-sky-deep text-white',
    soft: 'bg-white/70 text-ink',
    quiet: 'bg-transparent text-ink/55',
  }
  // The hard drop-shadow and translate-on-press was a toy-button trick. It
  // reads as a game, and this is used by children who are in pain in a
  // hospital. A gentle scale is enough to confirm a tap landed.
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-16 px-6 rounded-[1.5rem] text-xl font-bold
        glass-on transition active:scale-[0.985] disabled:opacity-30
        ${tones[tone] ?? tones.primary} ${className}`}
    >
      {children}
    </button>
  )
}

// `icon` is kept in the signature though nothing passes one today. Every option
// in the app used to carry an emoji; they were stripped on 2026-09-14 to be
// replaced with hand-drawn marks, and this is the slot those go back into --
// the label already sits below where the icon belongs, so a drawing drops in
// without the layout moving.
export function ChoiceCard({ icon, label, selected, onClick, sub, tint }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      style={selected || !tint ? undefined : { backgroundColor: tint }}
      className={`min-h-24 p-3 rounded-[1.4rem] flex flex-col items-center justify-center gap-1
        text-center transition active:scale-[0.97]
        ${selected ? 'glass-on bg-sky-deep text-white' : 'glass text-ink'}`}
    >
      {icon && <span className="text-4xl leading-none">{icon}</span>}
      <span className="font-bold leading-tight text-base">{label}</span>
      {sub && <span className="text-xs text-ink/50 leading-tight">{sub}</span>}
    </button>
  )
}

export function ChoiceGrid({ children, cols = 2 }) {
  const map = { 2: 'grid-cols-2', 3: 'grid-cols-3' }
  return <div className={`grid ${map[cols]} gap-3`}>{children}</div>
}

export function Chip({ children, onRemove }) {
  return (
    <span className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full bg-sky-deep text-white font-bold text-sm">
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="w-6 h-6 rounded-full bg-white/70 grid place-items-center text-ink/60 active:scale-90"
          aria-label={`Remove ${children}`}
        >
          ×
        </button>
      )}
    </span>
  )
}

// Not a card any more.
//
// This was `bg-sky-soft rounded-3xl border-2` -- a white box outlined on a pale
// page, repeated down every screen. A stack of those is the single strongest
// signal of a generated interface: every element gets the same border, the same
// radius, the same shadow, so nothing is emphasised and the page reads as a
// form. Now it is a soft raised surface with no outline at all; it separates
// from the page by being lighter, the way paper does, not by being fenced.
export function Card({ children, className = '' }) {
  return (
    <div className={`glass bg-white/45 rounded-[1.75rem] p-5 ${className}`}>
      {children}
    </div>
  )
}
