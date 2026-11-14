import { Analytics } from '@vercel/analytics/react'
import { Fragment, type ReactNode } from 'react'

import { DOMAINS, FACTS, IDENTITY, JOBS, type Job } from '@/lib/portfolio'

// Turns "plain **bold** plain" into text with <b> elements.
function rich(text: string): ReactNode {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) =>
      i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>,
    )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((b) => (
        <li key={b}>{rich(b)}</li>
      ))}
    </ul>
  )
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="stack">
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  )
}

function Crab() {
  return (
    <svg
      className="crab"
      viewBox="0 0 14 9"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect className="b" x="2" y="0" width="10" height="5" />
      <rect className="b" x="0" y="2" width="2" height="2" />
      <rect className="b" x="12" y="2" width="2" height="2" />
      <rect className="e" x="4" y="1" width="1" height="2" />
      <rect className="e" x="9" y="1" width="1" height="2" />
      <rect className="b" x="3" y="5" width="1" height="3" />
      <rect className="b" x="5" y="5" width="1" height="3" />
      <rect className="b" x="8" y="5" width="1" height="3" />
      <rect className="b" x="10" y="5" width="1" height="3" />
    </svg>
  )
}

function Sidebar() {
  const { name, role, avatar, email, github, linkedin, cv, location } =
    IDENTITY
  return (
    <aside className="sidebar">
      <div className="id">
        <img className="avatar" src={avatar} alt={name} width={96} height={96} />
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
      </div>

      <nav className="contact" aria-label="Contact">
        <a href={`mailto:${email}`}>
          Email <span>{email}</span>
        </a>
        <a href={github.url} target="_blank" rel="noreferrer">
          GitHub <span>{github.label}</span>
        </a>
        <a href={linkedin.url} target="_blank" rel="noreferrer">
          LinkedIn <span>{linkedin.label}</span>
        </a>
      </nav>

      <div className="cv-group">
        <a className="cv" href={cv.pdf} download="Alexandre-Imre-CV.pdf">
          Download CV <span aria-hidden="true">↓</span>
        </a>
        <p className="cv-alt">
          PDF · also as{' '}
          <a href={cv.docx} download="Alexandre-Imre-CV.docx">
            .docx
          </a>{' '}
          or{' '}
          <a href={cv.md} download="Alexandre-Imre-CV.md">
            .md
          </a>
        </p>
      </div>

      <div className="facts">
        {FACTS.map((f) => (
          <div key={f.label}>
            {f.label} <b>{f.value}</b>
          </div>
        ))}
        <p className="loc">{location}</p>
      </div>
    </aside>
  )
}

function JobRow({ job }: { job: Job }) {
  return (
    <article className="job">
      <div className="meta">
        {job.logo && (
          <img
            className={job.logoPlate ? 'logo plate' : 'logo'}
            src={job.logo}
            alt={job.org ?? ''}
            width={40}
            height={40}
          />
        )}
        <p className="when">{job.when}</p>
      </div>
      <div className="body">
        <h3>
          {job.title} {job.org && <span>· {job.org}</span>}
        </h3>
        {job.bullets && <Bullets items={job.bullets} />}
        {job.phases?.map((p) => (
          <Fragment key={p.title}>
            <h4 className="phase">
              {p.title} <span>{p.note}</span>
            </h4>
            <Bullets items={p.bullets} />
            <Stack items={p.stack} />
          </Fragment>
        ))}
      </div>
    </article>
  )
}

export function App() {
  return (
    <div className="page">
      <Sidebar />

      <main className="main">
        <p className="statement">
          I'm Alex, a full-stack developer in London. I build{' '}
          <em>trading and post-trade systems.</em>{' '}
          <span className="dim">
            Before that, seven years leading projects at Accenture within
            financial services.
          </span>
        </p>

        <div className="rail">
          <section className="ai" aria-labelledby="ai-h">
            <Crab />
            <div>
              <h2 id="ai-h">
                Software is <span className="glow">changing</span>
              </h2>
              <p>I stay on top of it. I love trying new ideas and seeing what works.</p>
              <p>
                Currently, I maintain a{' '}
                <b>
                  central repository of <code>/skills</code>
                </b>{' '}
                for my company. The team uses it in incident response, and it
                has made a big difference to how fast we find and fix problems.
              </p>
            </div>
          </section>
        </div>

        <section aria-labelledby="exp-h">
          <h2 className="label" id="exp-h">
            Experience
          </h2>
          <div className="jobs">
            {JOBS.map((job) => (
              <JobRow key={job.when} job={job} />
            ))}
          </div>
        </section>

        <section aria-labelledby="dom-h">
          <h2 className="label" id="dom-h">
            Domains
          </h2>
          <ul className="chips">
            {DOMAINS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
      </main>

      <Analytics />
    </div>
  )
}
