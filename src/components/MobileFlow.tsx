import { STAGES } from '@/lib/portfolio'

const spineLine: React.CSSProperties = {
  width: 2,
  flex: 1,
  minHeight: 26,
  margin: '4px 0',
  background:
    'linear-gradient(to bottom, rgba(62,207,142,.06), rgba(62,207,142,.5), rgba(62,207,142,.06))',
  backgroundSize: '100% 220%',
  animation: 'line-flow 2.6s linear infinite',
}

// The circuit reflowed to a vertical signal-flow for narrow screens.
export function MobileFlow() {
  return (
    <div>
      {STAGES.map((stage, i) => {
        const last = i === STAGES.length - 1
        return (
          <div key={stage.n} className="flex gap-4">
            <div className="flex w-10 flex-none flex-col items-center">
              <div
                className="relative z-10 flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[11px] border border-accent/55 bg-[#0c0c10] font-mono text-[11px] text-accent"
                style={{ animation: 'node-glow 3.4s ease-in-out infinite' }}
              >
                {stage.n}
              </div>
              {!last && (
                <div style={{ ...spineLine, animationDelay: `${-0.35 * i}s` }} />
              )}
            </div>
            <div className={last ? 'flex-1' : 'flex-1 pb-[18px]'}>
              <div className="text-[16px] font-semibold text-[#f2f2f4]">
                {stage.label}
              </div>
              {stage.techs ? (
                <div className="mt-[9px] flex flex-wrap gap-1.5">
                  {stage.techs.map((tk) => (
                    <span
                      key={tk}
                      className="rounded-md border border-white/10 bg-card px-2 py-1 font-mono text-[10.5px] text-[#c3c3c9]"
                    >
                      {tk}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-[5px] font-mono text-[11px] leading-relaxed text-ink-faint">
                  {stage.meta}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
