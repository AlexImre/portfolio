// Content + circuit geometry for the portfolio hero.
// Coordinates are in the design's fixed 1140×480 canvas space.

export const CANVAS = { width: 1140, height: 480 }
export const ACCENT = '#3ecf8e'
export const PULSE_SPEED = 2.8 // seconds

export const IDENTITY = {
  name: 'Alexandre Imre',
  role: 'Software Developer',
  location: 'London',
  headline: 'From the first idea to shipped code, I bring impact at every stage.',
  intro:
    "Ten years across the delivery lifecycle. 7 as a management consultant in financial services and 3 as a software engineer building an OTC risk platform in agricultural commodities, with a physicist's habit of thinking from first principles.",
  email: 'alexandre.imre@gmail.com',
  github: 'https://github.com/AlexImre',
  linkedin: 'https://www.linkedin.com/in/alexandre-imre-87b1b071/',
  cv: '/CV.pdf',
}

export const DOMAINS = [
  'Financial Services',
  'Commodities Risk Management',
  'Insurance & Asset Management',
  'Regulation',
]

// The five lifecycle stages — the primary nodes on the circuit.
export interface Stage {
  n: string
  label: string
  tag: string
  body: string
  meta?: string
  techs?: string[]
}

export const STAGES: Stage[] = [
  {
    n: '01',
    label: 'Idea',
    tag: 'PHYSICS DEGREE',
    meta: 'Physics · first-principles thinking',
    body: 'A physics background trained me to strip a problem to first principles and frame the real question before a line of code is written.',
  },
  {
    n: '02',
    label: 'Requirements',
    tag: '7Y CONSULTING · FINANCIAL SERVICES',
    meta: 'Stakeholder management · Business analysis · Communication',
    body: 'Seven years of management consulting: reading the room, managing stakeholders, and turning fuzzy business asks into specifications people actually agree on.',
  },
  {
    n: '03',
    label: 'Design + Build',
    tag: '3Y ENGINEERING · 2 FE / 1 BE',
    techs: ['C#', '.NET', 'TypeScript', 'React', 'SQL'],
    body: 'Three years shipping an OTC risk-management platform in agricultural commodities — two on the frontend, one on the backend, owning both the interface and the logic beneath it.',
  },
  {
    n: '04',
    label: 'QA / Test',
    tag: 'DOMAIN-DRIVEN TESTING',
    meta: 'Technical skills · domain-driven testing loop',
    body: 'Tight feedback loops, validated against real trading and risk scenarios rather than toy cases — because in commodities risk, edge cases are the whole point.',
  },
  {
    n: '05',
    label: 'Delivery',
    tag: 'PROJECT MANAGEMENT',
    meta: 'Project management · stakeholder alignment · DevOps · CI/CD',
    body: 'Consulting-grade delivery discipline: keeping stakeholders aligned and expectations honest all the way through to release.',
  },
]

// ── Circuit geometry (orthogonal / routed variation) ─────────────────────
export interface CircuitNode {
  n: string
  label: string
  x: number
  y: number
}
export interface SupportNode {
  label: string
  x: number
  y: number
  techs?: string[]
}
export interface Trace {
  d: string
  main: boolean
  delay: number
}

export const PRIMARY_NODES: CircuitNode[] = [
  { n: '01', label: 'Idea', x: 110, y: 250 },
  { n: '02', label: 'Requirements', x: 350, y: 250 },
  { n: '03', label: 'Design + Build', x: 600, y: 250 },
  { n: '04', label: 'QA / Test', x: 830, y: 250 },
  { n: '05', label: 'Delivery', x: 1040, y: 250 },
]

export const SUPPORT_NODES: SupportNode[] = [
  { label: 'Physics · first principles', x: 110, y: 92 },
  { label: 'Stakeholder mgmt', x: 300, y: 84 },
  { label: 'Business analysis', x: 250, y: 412 },
  { label: 'Communication skills', x: 470, y: 108 },
  { label: 'Technical skills', x: 620, y: 400, techs: ['C#', '.NET', 'TypeScript', 'React', 'SQL'] },
  { label: 'Project management', x: 980, y: 90 },
  { label: 'DevOps · CI/CD', x: 1040, y: 405 },
]

export const TRACES: Trace[] = [
  { d: 'M 110 250 L 350 250', main: true, delay: 0.0 },
  { d: 'M 350 250 L 600 250', main: true, delay: 0.35 },
  { d: 'M 600 250 L 830 250', main: true, delay: 0.7 },
  { d: 'M 830 250 L 1040 250', main: true, delay: 1.05 },
  { d: 'M 110 92 L 110 232', main: false, delay: 0.2 },
  { d: 'M 300 84 L 300 178 L 350 178 L 350 232', main: false, delay: 0.5 },
  { d: 'M 470 108 L 470 192 L 350 192 L 350 232', main: false, delay: 0.62 },
  { d: 'M 250 412 L 250 320 L 350 320 L 350 268', main: false, delay: 0.75 },
  { d: 'M 620 400 L 620 320 L 600 320 L 600 268', main: false, delay: 0.9 },
  { d: 'M 620 400 L 830 400 L 830 268', main: false, delay: 0.98 },
  { d: 'M 980 90 L 980 178 L 1040 178 L 1040 232', main: false, delay: 1.15 },
  { d: 'M 1040 405 L 1040 268', main: false, delay: 1.25 },
  { d: 'M 830 232 L 830 148 L 600 148 L 600 232', main: true, delay: 1.3 },
]

export function traceStyle(t: Trace): React.CSSProperties {
  const dur = t.main ? PULSE_SPEED : PULSE_SPEED * 0.85
  return {
    animation: `trace-flow ${dur}s linear infinite`,
    animationDelay: `${-t.delay}s`,
  }
}
export function traceDash(t: Trace): string {
  return t.main ? '72 928' : '48 952'
}
