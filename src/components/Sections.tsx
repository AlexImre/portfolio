import { useState } from 'react'

import {
  CheckIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/icons'
import { IDENTITY } from '@/lib/portfolio'

function EmailRow() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(IDENTITY.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <div className="flex min-w-0 items-center gap-2.5 text-[13px]">
      <MailIcon className="h-4 w-4 flex-none text-[#7b7b83]" />
      <a
        href={`mailto:${IDENTITY.email}`}
        className="truncate text-ink-muted transition hover:text-accent"
      >
        {IDENTITY.email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Email copied' : 'Copy email address'}
        title={copied ? 'Copied!' : 'Copy email'}
        className="flex h-7 w-7 flex-none items-center justify-center rounded-md border border-white/10 bg-card text-ink-faint transition hover:border-accent/50 hover:text-accent"
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 text-accent" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  )
}

const iconLink = 'flex-none text-ink-muted transition hover:text-accent'
const divider = 'hidden h-5 w-px flex-none bg-white/10 sm:block'

export function ContactIsland() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 rounded-2xl border border-white/10 bg-panel px-6 py-4">
        <div className="flex items-center gap-4">
          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className={iconLink}
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={IDENTITY.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className={iconLink}
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
        </div>

        <span className={divider} />

        <EmailRow />

        <span className={divider} />

        <a
          href={IDENTITY.cv}
          download="Alexandre_Imre_CV.pdf"
          className="flex flex-none items-center justify-center gap-2 rounded-[10px] bg-accent px-5 py-2.5 text-[13px] font-semibold text-[#08120d] transition hover:brightness-110"
        >
          <span className="text-[14px] leading-none">↓</span> Download CV
        </a>
      </div>
    </div>
  )
}
