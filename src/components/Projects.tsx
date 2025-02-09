'use client'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'

const AmiusProjects = [
  {
    title: 'Trade Management Tool',
    description: 'OTC structures, futures & options',
  },
  {
    title: 'OTC Pricing Tool',
    description: 'Constructing complicated OTC structures',
  },
  {
    title: ' Portfolio Management Tool',
    description: 'Risk management, with trade execution',
  },
  {
    title: 'Order Management System',
    description: 'Manage exchange orders',
  },
  {
    title: 'Static Data Editing Tool ',
    description: 'Large complex forms using RHF',
  },
]

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects."
      intro="I’ve worked on tons of little projects over the years, from helping entrepreneurs bring their ideas to life, to mucking around
      building side projects and self-studying CS fundamentals. See below for a summary of my recent proffessional work, and some personal projects that im particularly proud of."
    >
      <p className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Professional Work
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        The majority of my work over the last 2 years has been in a professional
        capacity which I can&apos;t share! It’s tucked away in private GitLab
        repo, but see below for some of the key things I&apos;ve helped to
        design and build.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6">
        {AmiusProjects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex w-full flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-200 p-6 dark:border-zinc-700/40 dark:bg-zinc-800"
            >
              <p className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {project.title}
              </p>
              <p className="text-center text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          )
        })}
      </div>

      <p className="pt-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Shared Calendar
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Here are a few snaps of a shared calendar I built so that my friends and
        I could be more organised and less flaky when organising group events.
        Built with React, TypeScript and TanStack Query. Uses InstantDB for
        Backend and Database.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6">
        <Image
          src="/images/photos/calendar2-portrait.png"
          alt=""
          width={300}
          height={100}
          unoptimized
        />
        <Image
          src="/images/photos/calendar3-portrait.png"
          alt=""
          width={300}
          height={100}
          unoptimized
        />
        <Image
          src="/images/photos/calendar1-portrait.png"
          alt=""
          width={300}
          height={100}
          unoptimized
        />
      </div>

      <p className="pt-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Web3Pal
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        When I was self-teaching, I partnered up with a crypto capital raising
        firm and we tried to build a solution to a common problem in the
        industry. Faster invoice payments, and less pay disputes via direct
        on-chain payments between crypto wallets. Built with React / Next.Js &
        TypeScript.
      </p>
      <div className="flex items-center justify-center gap-4 py-6">
        <Image
          src="/images/photos/web3pal5.png"
          alt=""
          width={1000}
          height={10}
          className="rounded-lg"
          unoptimized
        />
      </div>
    </SimpleLayout>
  )
}
