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
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
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
        <dd className="w-full flex-none text-sm font-medium text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-500"
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
      title: 'Software Developer',
      logo: cocoa,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Leadsie - SAAS',
      title: 'Software Developer',
      logo: leadsie,
      start: '2022',
      end: '2023',
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
    <div className="rounded-2xl border border-zinc-700/40 p-6">
      <h2 className="flex justify-between text-sm font-semibold text-zinc-100">
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
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
        download="Alexandre_Imre_CV.pdf"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Skills() {
  return (
    <div className="rounded-2xl border border-zinc-700/40 p-6">
      <h2 className="flex justify-between text-sm font-semibold text-zinc-100">
        <div className="flex">
          <SkillsIcon />
          <span className="ml-3">Key Skills</span>
        </div>
      </h2>
      <div className="flex h-full flex-col items-center justify-center gap-6 space-y-4 py-4">
        <div className="flex w-full justify-center gap-4">
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">TypeScript</span>
          </div>
        </div>

        <div className="flex w-full justify-center gap-4">
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">React</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              width="70"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            />
            <span className="mt-2 text-sm text-zinc-400">Redux</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/photos/aggrid.png"
              alt=""
              width={70}
              height={100}
              unoptimized
            />
            <span className="mt-2 text-sm text-zinc-400">AG Grid</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdditionalSkills() {
  return (
    <div className="rounded-2xl border border-zinc-700/40">
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

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Frontend Software Developer.<span className="text-teal-200">*</span>
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          🚀 I&apos;m Alex, I work closely with users to design and ship{' '}
          impactful products that help them do more.{' '}
          <strong className="text-teal-400">TypeScript</strong> and
          <strong className="text-teal-400"> React</strong> is my current go-to
          stack.
        </p>
        <p className="mt-6 text-base text-zinc-400">
          Currently, you&apos;ll find me working in{' '}
          <strong className="text-teal-400">financial services</strong>, where
          I&apos;m building out a suite of web apps that will help the company
          to scale its business and capture new clients.
        </p>
        <p className="mt-6 text-base text-xs text-teal-200 italic">
          *with 7 years of former management consulting experience.
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
        <h6 className="py-6 text-2xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
          Some other skills I&apos;ve picked up along the way
        </h6>
        <AdditionalSkills />
      </Container>
    </>
  )
}
