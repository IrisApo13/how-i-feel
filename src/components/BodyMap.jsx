import { ART, GUIDES, REGIONS, VIEWS, BODY_VIEWS, regionsForView, viewHasSelection } from '../data/bodyMap'

// Interactive SVG body map.
//
// The body is drawn once per view from `ART` (overlapping filled paths plus
// round-capped strokes for limbs and digits). The same artwork is reused as an
// SVG mask, and every region highlight is drawn through it -- so a region's own
// shape can stay a simple rectangle while what the child sees is the exact
// anatomical zone of a real body. No child ever sees a rectangle.
//
// Hit areas are deliberately NOT masked. A tap that lands just outside the
// silhouette still counts, which matters a lot for small fingers and small
// targets like a little toe.
//
// Detail views (head, hands, feet, tummy) are separate canvases with their own
// drawings, not magnified crops of the body -- a finger is about six units wide
// at body scale, so zooming the body canvas would show a blur.

const BODY_FILL = '#ece3d6'
const BODY_EDGE = '#b9a68c'
// How far the contour extends beyond the silhouette. Drawn UNDER the fill, so
// only the part that sticks out is ever visible.
const CONTOUR = 2.6

function Shape({ shape, ...rest }) {
  if (shape.type === 'path') return <path d={shape.d} {...rest} />
  if (shape.type === 'circle') return <circle cx={shape.cx} cy={shape.cy} r={shape.r} {...rest} />
  if (shape.type === 'ellipse') return <ellipse cx={shape.cx} cy={shape.cy} rx={shape.rx} ry={shape.ry} {...rest} />
  return <rect x={shape.x} y={shape.y} width={shape.w} height={shape.h} rx={shape.rx ?? 8} {...rest} />
}

// The body is drawn in TWO passes, and this is what makes it read as one body
// rather than a pile of shapes.
//
// It used to be a single pass where every path was both filled AND stroked. The
// artwork is a set of OVERLAPPING shapes -- a torso, two arms, two legs -- so
// stroking each one drew the seam where it met its neighbours. The child could
// see the assembly: a line across the chest where the shoulders sat, another at
// the waist. Nobody wants to look at a diagram of themselves in parts.
//
//   pass "contour": every shape, filled AND stroked in the EDGE colour. That is
//                   the silhouette grown outward by CONTOUR/2 all round.
//   pass "fill":    the same shapes, filled in the BODY colour, no stroke at
//                   all -- covering every bit of pass 1 except the rim.
//
// One continuous outline outside, nothing inside, because each internal seam is
// painted over by the pass that follows it.
//
// `solid` is the mask pass: same geometry, pure white, so the mask covers the
// grown contour as well as the fill.
const Art = ({ art, mode }) => {
  const edge = mode === 'contour'
  const paint = mode === 'solid' ? 'white' : edge ? BODY_EDGE : BODY_FILL
  const grow = mode === 'solid' || edge ? CONTOUR : 0
  return art.map((a, i) =>
    a.w ? (
      <path key={i} d={a.d} fill="none" stroke={paint} strokeWidth={a.w + grow}
        strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path key={i} d={a.d} fill={paint}
        stroke={grow ? paint : 'none'} strokeWidth={grow}
        strokeLinejoin="round" strokeLinecap="round" />
    ),
  )
}

export default function BodyMap({ view, onViewChange, selected = [], onToggle, height = 300 }) {
  const meta = VIEWS[view] ?? VIEWS.front
  const art = ART[view] ?? ART.front
  const regions = regionsForView(view)
  const guides = GUIDES[view] ?? []
  const maskId = `bodymask-${view}`
  const [, , vw, vh] = meta.viewBox.split(' ').map(Number)

  // One shared drawing serves both hands and both feet; the right-hand and
  // right-foot views flip it rather than duplicating every path.
  const flip = meta.mirror ? `translate(${vw} 0) scale(-1 1)` : undefined

  // The body-level region this detail view belongs to, so the child can still
  // say "all of it" instead of being forced to pick a single finger.
  const parent = REGIONS.find((r) => r.zoomTo === view)

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {BODY_VIEWS.map((id) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`px-4 py-2.5 rounded-2xl border-2 font-bold text-sm transition active:scale-95
              ${view === id ? 'bg-ink text-white border-ink' : 'bg-sky-soft border-ink/15'}`}
          >
            {VIEWS[id].label}
          </button>
        ))}
      </div>

      {meta.kind === 'detail' && (
        <p className="text-sm font-bold text-ink/55">{meta.title}</p>
      )}

      <svg
        viewBox={meta.viewBox}
        height={height}
        className="max-w-full touch-manipulation"
        role="group"
        aria-label={meta.kind === 'detail' ? `${meta.title}. Tap where it hurts.` : 'Body map. Tap where it hurts.'}
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={vw} height={vh}>
            <rect x="0" y="0" width={vw} height={vh} fill="black" />
            <Art art={art} mode="solid" />
          </mask>
        </defs>

        <g transform={flip}>
          {/* The body itself. Group opacity, NOT per-shape opacity: fading each
              shape would let the overlaps show through as darker patches, which
              is the same "made of parts" problem in another form. Compositing
              the group first and fading the result keeps it one flat body. */}
          <g opacity={0.93}>
            <Art art={art} mode="contour" />
            <Art art={art} mode="fill" />
          </g>

          {/* selected regions, clipped to the silhouette */}
          <g mask={`url(#${maskId})`}>
            {regions.map((r) => (
              <Shape
                key={r.id}
                shape={r.shape}
                fill={selected.includes(r.id) ? 'var(--color-hurt)' : 'transparent'}
                style={{ transition: 'fill 180ms ease' }}
              />
            ))}
          </g>

          {/* feature lines, above the highlight so they never get buried */}
          {guides.map((d, i) => (
            <path
              key={`guide-${i}`}
              d={d}
              fill="none"
              stroke={BODY_EDGE}
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              pointerEvents="none"
            />
          ))}

          {/* a dot marking any part that has a selection hidden inside it */}
          {regions.map((r) =>
            r.zoomTo && r.dot && viewHasSelection(r.zoomTo, selected) ? (
              <circle
                key={`${r.id}-dot`}
                cx={r.dot[0]}
                cy={r.dot[1]}
                r={5}
                fill="var(--color-hurt)"
                stroke="#fff"
                strokeWidth={1.5}
              />
            ) : null,
          )}

          {/* hit areas on top, unmasked */}
          {regions.map((r) => (
            <Shape
              key={`${r.id}-hit`}
              shape={r.shape}
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onClick={() => (r.zoomTo ? onViewChange(r.zoomTo) : onToggle(r.id))}
            >
              <title>{r.label}</title>
            </Shape>
          ))}
        </g>
      </svg>

      {meta.kind === 'detail' && (
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => onViewChange(meta.backTo)}
            className="px-4 py-2 rounded-2xl bg-sky-soft  font-bold text-sm active:scale-95"
          >
            Zoom back out
          </button>
          {parent && (
            <button
              onClick={() => onToggle(parent.id)}
              className={`px-4 py-2 rounded-2xl border-2 font-bold text-sm active:scale-95
                ${selected.includes(parent.id) ? 'bg-hurt text-white' : 'bg-sky-soft border-ink/15'}`}
            >
              All of it
            </button>
          )}
        </div>
      )}
    </div>
  )
}
