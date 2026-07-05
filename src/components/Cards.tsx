import { DOMAINS } from '@/lib/portfolio'

export function DomainsCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex flex-col rounded-[13px] border border-white/10 bg-panel p-[17px] ${className}`}
    >
      <div className="font-mono text-[10px] tracking-[0.16em] text-accent">
        // DOMAINS
      </div>
      <ul className="mt-3 flex flex-1 flex-col">
        {DOMAINS.map((domain, i) => (
          <li
            key={domain}
            className={`flex flex-1 items-center gap-2.5 py-2.5 text-[13px] leading-tight text-[#e2e2e6] ${
              i > 0 ? 'border-t border-white/10' : ''
            }`}
          >
            <span className="h-[5px] w-[5px] flex-none rounded-full bg-accent" />
            {domain}
          </li>
        ))}
      </ul>
    </div>
  )
}
