// All page content lives here. Edit this file to change the copy.

export const IDENTITY = {
  name: 'Alexandre Imre',
  role: 'Full-stack Developer',
  location: 'London, UK',
  avatar: '/images/avatar.jpg',
  email: 'alexandre.imre@gmail.com',
  github: { url: 'https://github.com/AlexImre', label: 'AlexImre' },
  linkedin: {
    url: 'https://www.linkedin.com/in/alexandre-imre-87b1b071/',
    label: 'alexandre-imre',
  },
  cv: { pdf: '/CV.pdf', docx: '/CV.docx', md: '/CV.md' },
}

export const FACTS = [
  { label: 'Engineering', value: '3 yrs' },
  { label: 'Consulting', value: '7 yrs' },
  { label: 'Degree', value: 'BSc Physics' },
]

export const DOMAINS = [
  'Financial Services',
  'Commodities Risk Management',
  'Banking',
  'Insurance',
  'Asset Management',
  'FX',
  'Regulatory Reporting',
]

// A bullet is plain text, with **double asterisks** around the bold part.
export interface Phase {
  title: string
  note: string
  bullets: string[]
  stack: string[]
}

export interface Job {
  when: string
  title: string
  org?: string
  logo?: string
  // Set for logos with a white background, so they sit on a bordered white tile.
  logoPlate?: boolean
  bullets?: string[]
  phases?: Phase[]
}

export const JOBS: Job[] = [
  {
    when: 'Jul 2023 – now',
    title: 'Software Developer',
    org: 'Amius',
    logo: '/images/logos/amius.svg',
    phases: [
      {
        title: 'Backend',
        note: 'now',
        bullets: [
          'Own transaction reporting (EMIR, MiFID, CFTC). Built a self-service dashboard and controls. **Support time went from 2 days a week to a few minutes a day.**',
          'Moved client statements from a 4am batch job to an event-driven system. Clients now get **statements up to 12 hours earlier.**',
          'Built a mock execution environment, so testing and client demos no longer depend on unreliable third-party UAT systems.',
          'Took over SaaS releases and replaced large, unplanned releases with a release every two weeks.',
        ],
        stack: ['C#', '.NET', 'SQL', 'Azure', 'DevOps'],
      },
      {
        title: 'Frontend',
        note: 'first 2 years',
        bullets: [
          'Trade execution: a multi-step, WebSocket-based flow for **placing, pausing and cancelling orders.**',
          'Trade management grid for **thousands of trades**, to manage the core trade lifecycle, including option expiry.',
          'Pricing tool: led feature development and gathered requirements from the sales team. Sales can now save & share combinations of financial products, which makes **client quotes faster.**',
        ],
        stack: ['TypeScript', 'React', 'Redux', 'RTK Query', 'AG Grid'],
      },
    ],
  },
  {
    when: '2022 – 2023',
    title: 'Career change',
    bullets: ['Self-study and an internship.'],
  },
  {
    when: '2015 – 2022',
    title: 'Manager',
    org: 'Accenture',
    logo: '/images/logos/accenture.jpg',
    logoPlate: true,
    bullets: [
      'Led regulatory change projects in financial services on time and within budget.',
      'Presented to boards and executive committees. Worked with UK regulators on new rules.',
      'Line-managed and mentored junior consultants.',
    ],
  },
  {
    when: '2011 – 2014',
    title: 'BSc Physics',
    org: 'Royal Holloway',
    logo: '/images/logos/royal-holloway.jpg',
  },
]
