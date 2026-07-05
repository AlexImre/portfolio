import { Analytics } from '@vercel/analytics/react'

import { DomainsCard } from '@/components/Cards'
import { CircuitDiagram } from '@/components/CircuitDiagram'
import { MobileFlow } from '@/components/MobileFlow'
import { ContactIsland } from '@/components/Sections'
import { IDENTITY } from '@/lib/portfolio'

// Fine grid + radial dots backdrop for the framed hero panel.
const panelGrid: React.CSSProperties = {
  backgroundColor: '#09090b',
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
  backgroundSize: '46px 46px',
  backgroundPosition: '-1px -1px',
}

function Hero() {
  return (
    <section
      className="rounded-[18px] border border-white/10 p-6 sm:p-8 lg:p-10"
      style={panelGrid}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="min-w-0 lg:flex-1">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11.5px] tracking-[0.14em]">
            <span className="text-accent">{IDENTITY.name.toUpperCase()}</span>
            <span className="text-ink-faint">
              {IDENTITY.role.toUpperCase()} · {IDENTITY.location.toUpperCase()}
            </span>
          </div>
          <h1 className="mt-5 max-w-[1120px] text-[27px] font-semibold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[34px] lg:text-[44px]">
            {IDENTITY.headline}
          </h1>
          <p className="mt-4 max-w-[980px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
            {IDENTITY.intro}
          </p>
          <p className="mt-4 max-w-[980px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
          Passionate about working on challenging products that solve real problems. I bring a combination of technical and soft skills, with a curious and pragmatic mindset.
          </p>
        </div>

        <DomainsCard className="w-full sm:max-w-[340px] lg:w-[300px] lg:flex-none" />
      </div>

      {/* Desktop: horizontal circuit. Narrow: vertical signal-flow. */}
      <div className="mt-8 hidden lg:mt-7 lg:block">
        <CircuitDiagram />
      </div>
      <div className="mt-9 lg:hidden">
        <MobileFlow />
      </div>
    </section>
  )
}

export function App() {
  return (
    <main className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <Hero />
      <ContactIsland />
      <Analytics />
    </main>
  )
}
