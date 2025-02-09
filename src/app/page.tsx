'use client'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import {
  ArrowDownIcon,
  BriefcaseIcon,
  SkillsIcon,
} from '@/components/BriefCaseIcon'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Projects from '@/components/Projects'
import { LinkedInIcon } from '@/components/SocialIcons'
import accenture from '@/images/logos/accenture.webp'
import cocoa from '@/images/logos/cocoa.webp'
import leadsie from '@/images/logos/leadsie.webp'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Amius - Finance',
      title: 'Frontend Software Developer',
      logo: cocoa,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Leadsie - SAAS',
      title: 'Software Developer',
      logo: leadsie,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Accenture - Stategy & Consulting',
      title: 'Manager',
      logo: accenture,
      start: '2015',
      end: '2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <div className="flex">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </div>
        <SocialLink
          target="_blank"
          href="https://www.linkedin.com/in/alexandre-imre-87b1b071/"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/CV.pdf"
        // target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
        download="Alexandre_Imre_CV.pdf"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Skills() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <div className="flex">
          <SkillsIcon />
          <span className="ml-3">Key Skills</span>
        </div>
      </h2>
      <div className="flex h-full flex-col items-center justify-center gap-6 space-y-4 py-4">
        <div className="flex w-full justify-center gap-4">
          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />
        </div>

        <div className="flex w-full justify-center gap-4">
          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
          />
        </div>
      </div>
    </div>
  )
}

function AdditionalSkills() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="flex h-full flex-col flex-wrap items-center justify-center gap-6 space-y-4 py-4">
        <div className="flex w-full flex-wrap justify-center gap-8">
          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
          />

          <img
            width="75"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Frontend Software Developer.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Alex, I spent 7 years in management consulting before I found the
          courage to teach myself how to code, throwing myself into a career
          that I was passionate about and believed I could be great at.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I started with a little bit of C++ and Python during my physics
          studies, but JavaScript was the first language I really dived into,
          kicking off my new career as a developer. TypeScript and React quickly
          followed!
        </p>
      </Container>
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2">
          <Resume />
          <Skills />
        </div>
      </Container>
      <Projects />
      <Container className="mt-12 md:mt-14">
        <h6 className="py-6 text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
          Some other skills I&apos;ve picked up along the way
        </h6>
        <AdditionalSkills />
      </Container>
    </>
  )
}
