/**
 * Single source of truth for About page + home about preview copy.
 */

export const aboutContent = {
  fullName: "Muhammad Ateeb Awan",
  roleLine: "Full-stack engineer · MERN & Next.js · TypeScript",

  /** Used on home preview + About "About me" section heading */
  headline: "Engineering partner for products that need to ship and stay maintainable",

  /** Pill strip under hero on About page */
  highlights: [
    "Product-minded delivery from discovery through launch",
    "MERN + Next.js systems built for long-term maintainability",
    "Milestones, demos, and written handoffs your team can run",
    "Security, performance, and accessibility as baseline requirements",
  ] as const,

  /** About page hero — primary + supporting */
  heroLead:
    "I build production-grade web applications for founders, agencies, and in-house product teams, turning roadmap goals into secure APIs, well-modeled data, and React / Next.js interfaces that stay responsive as traffic and feature depth grow. Core stack: MongoDB, Express, React, Next.js, and Node.js, with TypeScript where it reduces risk and speeds iteration.",

  heroSupporting:
    "I align engineering with business outcomes: scoped releases, transparent progress, and clear trade-offs when scope or deadlines shift, so stakeholders stay informed and the codebase stays shippable.",

  domainsLine: "SaaS · E-commerce · Admin & dashboards · Healthcare-style workflows · Realtime analytics · AI-assisted UIs",

  /** Long-form "About me" body (About page only) */
  bodyParagraphs: [
    "I'm Muhammad Ateeb Awan, a full-stack developer with a BSCS and 3+ years delivering software in fast-moving environments. I treat each engagement as shared ownership of the outcome: predictable releases, readable code, and written context (API notes, environment setup, deploy steps), so the first handoff does not stall your roadmap.",
    "Technically, my center of gravity is the MERN ecosystem plus Next.js and TypeScript. I'm comfortable owning the full vertical: authentication and role models, REST API design and validation, MongoDB schema evolution, React component architecture, and deployment on Vercel, Netlify, or Render. I have repeatedly shipped in e-commerce, SaaS admin surfaces, healthcare-style operational workflows, realtime dashboards, and AI-enabled experiences, with explicit attention to security boundaries, error handling, and front-end performance under real data volumes.",
    "How I work: I start from a clear problem statement and success criteria, break work into reviewable milestones, and keep progress visible through concise updates and demos. When constraints change, I surface options early (what we gain, what we defer, and what risk we accept) so product and engineering stay aligned.",
    "Whether you need a greenfield build, a hardening pass before launch, a refactor toward clearer boundaries, or ongoing delivery alongside your team, I aim to leave the codebase, documentation, and delivery process in a measurably stronger state than when we started.",
  ] as const,

  /** Home section — condensed (same narrative, shorter) */
  homeIntro: [
    "I build production-grade web applications for founders, agencies, and product teams: secure APIs, thoughtful data modeling, and React / Next.js front ends that stay fast as usage grows. Stack: MongoDB, Express, React, Next.js, and Node, with TypeScript where it reduces delivery risk.",
    "Scoped milestones, visible progress, and direct communication, so you get stable releases and handoff material your next engineer can run with.",
  ] as const,

  homeBullets: [
    "BSCS-backed, 3+ years shipping SaaS, e-commerce, admin tooling, healthcare-style workflows, realtime dashboards, and AI-assisted products.",
    "MERN + Next.js systems designed for maintainability, with security, performance, and accessibility treated as defaults, not afterthoughts.",
    "Documented milestones, demos, and handoffs: API notes, env setup, and deploy steps aligned with how I deliver on the full About page.",
  ] as const,

  homePillTags: ["Architecture-first planning", "Reviewable milestones", "QA before release", "Documented handoff"] as const,

  homeStatRow: [
    { label: "Response", value: "Within 24 hours" },
    { label: "Stack", value: "MERN + Next.js + TypeScript" },
    { label: "Handoff", value: "Code + API notes + deploy docs" },
  ] as const,

  engagementBlurb:
    "Discover → plan → build → review → QA → deploy → documented handoff. Concise written updates and demos keep stakeholders aligned while timelines stay realistic and quality stays consistent through launch.",

  /** Code card strings (About page) */
  profileCode: {
    mission:
      "Deliver maintainable MERN + Next.js products with explicit scope, QA discipline, and clean handoffs",
    specialization:
      '["SaaS & admin dashboards", "E-commerce", "Healthcare-style workflows", "Realtime analytics", "AI-enabled UIs", "RBAC & auth", "API & data modeling"]',
    toolkit: '["MongoDB", "Express", "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]',
    workflow: "Discover → Plan → Build → Review → QA → Deploy → Documented handoff",
    currentFocus: "Latency budgets, API contracts, scalable React architecture, stakeholder-ready updates",
    status: "Open to freelance, contract, and long-term product work",
  },
} as const;
