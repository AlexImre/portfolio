# Alex Imre

Software Engineer · London
alexandre.imre@gmail.com · [LinkedIn](https://www.linkedin.com/in/alexandre-imre-87b1b071/) · [GitHub](https://github.com/AlexImre)

Software engineer building trading and post-trade systems for OTC agricultural commodity and FX products. Now in the C# / .NET backend team, after 2 years on the React frontend. Working knowledge of the full trade lifecycle: order management, pricing and execution, client statements and regulatory reporting. Previously 7 years in management consulting, leading financial regulatory change.

## Key skills

- **Backend:** C#, .NET, SQL, Microservices, Azure, Azure Service Bus, MassTransit, Docker
- **Frontend:** TypeScript, React, Redux, RTK Query, AG Grid, MUI
- **Tools:** Git, GitLab CI/CD, Claude Code
- **Domain:** OTC derivatives, FX, agricultural commodities, trade lifecycle, EMIR, MiFID, CFTC reporting
- **Professional:** Business analysis, project management, stakeholder management

## Development experience

### Amius (Fintech) · Jul 2023 – Present

#### Backend Developer (C#, .NET, SQL, Azure)

- **Transaction reporting, domain owner (UK EMIR / EMIR, MiFID, CFTC):** extended the reporting process to more accurately classify trades, adding a self-service dashboard and controls allowing the business to more easily manage its daily regulatory submissions. Cut support time from 2 days a week to a few minutes a day.
- **Client statements:** moved the daily statement process from a 4am overnight batch job to an event-driven architecture (Azure Service Bus, MassTransit). Exchange settlement prices arrive at market close, valuations run, and statements are ready to go straight away. Clients receive statements up to 12 hours earlier. Automated statement re-issue checks ready for review early morning.
- **Mock execution environment:** built for the demo and staging environments, because third-party UAT execution environments were unreliable and regularly blocked testing. The mock gives stable testing of new execution features and reliable client demos.
- **SaaS platform releases:** took ownership of releases for our SaaS platform. Replaced large, ad-hoc releases with a fortnightly release cadence and drove a new QA process supported by the desk.

#### Frontend Developer (React, TypeScript)

- **Trade execution UI:** designed & built the UI for a portfolio management tool with a multi-step, WebSocket-based trade execution flow with real-time updates. State management with Redux, query and caching with RTK Query.
- **Trade management tool:** designed & built a reusable grid for 1000s of trades with real-time updates via WebSockets, large interdependent forms, and simpler UI/UX for common trade lifecycle events, which made trade management faster for traders and operations.
- **Pricing tool:** led feature development and gathered requirements from the sales team. Sales can now save & share combinations of financial products, which makes client quotes faster.

#### Team contributions

- Improved frontend developer velocity with incremental upgrades to the frontend repo architecture:
  - Modularised apps, packages, shared library code and a reusable React component library in TypeScript.
  - Built out the mono-repo and moved microservice API code generation into it.
  - Improved TypeScript performance: analysed trace files and fixed hot spots, which significantly reduced type-check time.
- Set up user profiles with the correct permissions & roles in the staging environment, so testing is part of the release cycle and the frontend team no longer acts as a pseudo-QA team.
- Set up CI/CD with GitLab pipelines, deploying microservices on Docker so the frontend picks up backend API changes automatically.

### Career change · 2022 – 2023

Self-study to learn software engineering, including an internship at a SaaS company (Leadsie).

### Personal projects

Helping entrepreneurs build MVPs, tinkering with side projects and self-teaching fundamentals. Additional skills picked up along the way include: Python, MongoDB, PostgreSQL, Next.js, Tailwind CSS, TanStack Query.

## Consulting experience

### Manager, Accenture (Financial services) · 2015 – 2022

- Led the delivery of complex regulatory change projects on target and within budget, and became a company lead/SME on financial regulation. Managed senior stakeholders and presented at Board and executive-level committees.
- Worked with cross-industry collaboration groups and regulators to define the approach to new UK regulations.
- Line-managed and mentored junior consultants, and set and reviewed their performance objectives.

## Education

### Physics BSc (Hons) 2:1, University of London – Royal Holloway · 2011 – 2014

- Relevant to programming: built a ray tracer using C++ and Python for lab and data related work.
