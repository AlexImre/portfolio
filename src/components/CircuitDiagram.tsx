import { useEffect, useRef, useState } from 'react'

import {
  ACCENT,
  CANVAS,
  PRIMARY_NODES,
  SUPPORT_NODES,
  TRACES,
  traceDash,
  traceStyle,
} from '@/lib/portfolio'

// Renders the fixed 1140×480 art-directed circuit, scaled down to fit the
// available width so it never overflows on narrower large screens.
export function CircuitDiagram() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    // Fill the available width; allow modest upscaling on wide screens.
    const update = () =>
      setScale(Math.min(1.4, el.clientWidth / CANVAS.width))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div>
      <div ref={wrapRef} style={{ height: CANVAS.height * scale }}>
        <div
          style={{
            width: CANVAS.width,
            height: CANVAS.height,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
            position: 'relative',
          }}
        >
          <svg
            viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
            width={CANVAS.width}
            height={CANVAS.height}
            style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
          >
            {TRACES.map((t, i) => (
              <g key={i}>
                <path
                  d={t.d}
                  fill="none"
                  stroke="rgba(255,255,255,0.09)"
                  strokeWidth={2}
                />
                <path
                  d={t.d}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth={2}
                  strokeLinecap="round"
                  pathLength={1000}
                  strokeDasharray={traceDash(t)}
                  style={traceStyle(t)}
                />
              </g>
            ))}
          </svg>

          <span
            className="font-mono"
            style={{
              position: 'absolute',
              left: 715,
              top: 132,
              transform: 'translate(-50%,-50%)',
              fontSize: 10,
              letterSpacing: '0.1em',
              color: '#5f6f66',
            }}
          >
            test&nbsp;loop
          </span>

          {/* support nodes */}
          {SUPPORT_NODES.map((n, i) => (
            <div
              key={i}
              className="rounded-[7px] border border-white/[0.13] bg-panel"
              style={{
                position: 'absolute',
                left: n.x,
                top: n.y,
                transform: 'translate(-50%,-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '7px 11px',
                whiteSpace: 'nowrap',
              }}
            >
              <div className="flex items-center gap-[7px]">
                <span className="h-[5px] w-[5px] flex-none rounded-full bg-accent" />
                <span className="font-mono text-[11px] tracking-[0.02em] text-[#a6a6ae]">
                  {n.label}
                </span>
              </div>
              {n.techs && (
                <div className="flex gap-[5px]">
                  {n.techs.map((tk) => (
                    <span
                      key={tk}
                      className="rounded-[5px] border border-white/10 bg-card px-[7px] py-[3px] font-mono text-[10px] text-[#c3c3c9]"
                    >
                      {tk}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* primary lifecycle nodes */}
          {PRIMARY_NODES.map((n) => (
            <div
              key={n.n}
              className="rounded-[11px] border border-accent/55 bg-[#0c0c10]"
              style={{
                position: 'absolute',
                left: n.x,
                top: n.y,
                transform: 'translate(-50%,-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
                padding: '11px 15px',
                whiteSpace: 'nowrap',
                animation: 'node-glow 3.4s ease-in-out infinite',
              }}
            >
              <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                {n.n}
              </span>
              <span className="text-[14px] font-medium text-[#f2f2f4]">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* legend */}
      <div className="mt-[22px] flex justify-center gap-[26px] font-mono text-[11px] tracking-[0.04em]">
        <span className="flex items-center gap-2 text-[#c8c8ce]">
          <span className="inline-block h-2.5 w-2.5 rounded-[3px] border border-accent/60" />
          workflow stage
        </span>
        <span className="flex items-center gap-2 text-ink-faint">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          what I bring to it
        </span>
      </div>
    </div>
  )
}
