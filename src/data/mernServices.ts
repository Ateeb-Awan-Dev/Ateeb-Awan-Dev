import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Monitor,
  Database,
  PlugZap,
  Zap,
  ShoppingCart,
  HeartPulse,
  Bot,
  Building2,
  Sparkles,
  Layers,
  LayoutDashboard,
  Palette,
} from "lucide-react";

/** Full MERN offering — client-focused copy, reused on home + About */
export type MernPillar = {
  id: string;
  title: string;
  techLine: string;
  problem: string;
  outcome: string;
  icon: LucideIcon;
  accent: {
    fg: string;
    bg: string;
    ring: string;
  };
};

export const fullMernIntro = {
  title: "Full MERN + Next.js development",
  subtitle:
    "End-to-end product delivery: I align your business goals with a maintainable MongoDB + Express + React/Next.js + Node architecture, so your app scales with your team, not against it.",
};

export const mernPillars: MernPillar[] = [
  {
    id: "frontend",
    title: "Frontend development",
    techLine: "React · Next.js · TypeScript",
    problem: "Users bounce when interfaces feel slow, inconsistent, or impossible to use on mobile.",
    outcome:
      "Component-driven UIs with predictable state, accessible patterns, and performance budgets (SSR or SPA where it fits).",
    icon: Atom,
    accent: { fg: "text-cyan-500", bg: "bg-cyan-500/10", ring: "border-cyan-500/20" },
  },
  {
    id: "backend",
    title: "Backend development",
    techLine: "Node.js · Express",
    problem: "Fragile APIs and unclear boundaries slow releases and make integrations painful.",
    outcome:
      "Structured REST services, validation at the edge, JWT/session flows, and logging you can trace when something breaks.",
    icon: Monitor,
    accent: { fg: "text-blue-600", bg: "bg-blue-600/10", ring: "border-blue-600/20" },
  },
  {
    id: "database",
    title: "Database · MongoDB",
    techLine: "MongoDB · Mongoose · indexing",
    problem: "Unmodelled data turns into slow queries and inconsistent reports as usage grows.",
    outcome:
      "Thoughtful schemas, indexes for real access patterns, and migrations that won’t surprise production.",
    icon: Database,
    accent: { fg: "text-emerald-600", bg: "bg-emerald-600/10", ring: "border-emerald-600/20" },
  },
  {
    id: "api",
    title: "API integration",
    techLine: "REST · webhooks · third-party SDKs",
    problem: "Payments, auth, CRMs, and AI providers only deliver value when wired reliably and securely.",
    outcome:
      "Idempotent webhooks, retries, secrets in env (not in git), and clear error surfaces for your team.",
    icon: PlugZap,
    accent: { fg: "text-violet-600", bg: "bg-violet-600/10", ring: "border-violet-600/20" },
  },
  {
    id: "performance",
    title: "Performance optimization",
    techLine: "Core Web Vitals · bundles · caching",
    problem: "Slow pages cost conversions; heavy bundles cost mobile users.",
    outcome:
      "Measured improvements: code-splitting, lazy routes, sensible caching, and Mongo query tuning where it matters.",
    icon: Zap,
    accent: { fg: "text-amber-600", bg: "bg-amber-600/10", ring: "border-amber-600/20" },
  },
  {
    id: "ai-automation",
    title: "AI automation & workflows",
    techLine: "OpenAI · APIs · orchestration",
    problem:
      "Teams lose hours to repetitive work when AI is only used as a chat box, not wired into real business processes.",
    outcome:
      "End-to-end automations: validated prompts, secure API usage, retries, logging, and human-in-the-loop steps so outputs stay reliable at scale.",
    icon: Sparkles,
    accent: { fg: "text-fuchsia-600", bg: "bg-fuchsia-600/10", ring: "border-fuchsia-600/20" },
  },
  {
    id: "saas-product",
    title: "SaaS product engineering",
    techLine: "Multi-tenant · billing · RBAC",
    problem:
      "SaaS breaks when tenancy, permissions, and billing are patched in late, leading to security gaps and messy refactors.",
    outcome:
      "Organization workspaces, role-based access, usage-aware billing hooks, and audit-friendly patterns built for long-term product growth.",
    icon: Layers,
    accent: { fg: "text-sky-600", bg: "bg-sky-600/10", ring: "border-sky-600/20" },
  },
  {
    id: "admin-dashboard",
    title: "Admin dashboards & internal tools",
    techLine: "React · Next.js · analytics",
    problem:
      "Operations teams stall when dashboards are slow, inconsistent, or missing the KPIs that actually drive decisions.",
    outcome:
      "Fast, role-aware consoles with filters, exports, and data visibility aligned to real workflows, so teams ship decisions, not spreadsheets.",
    icon: LayoutDashboard,
    accent: { fg: "text-indigo-600", bg: "bg-indigo-600/10", ring: "border-indigo-600/20" },
  },
  {
    id: "ui-ux-design",
    title: "UI/UX design & product polish",
    techLine: "Design systems · responsive · accessibility",
    problem:
      "Strong engineering still fails when navigation is unclear, layouts break on mobile, or the product feels inconsistent.",
    outcome:
      "Clear hierarchy, modern responsive layouts, and reusable UI patterns, so the experience feels intentional and easy to maintain.",
    icon: Palette,
    accent: { fg: "text-orange-500", bg: "bg-orange-500/10", ring: "border-orange-500/20" },
  },
];

export type NicheService = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: {
    fg: string;
    bg: string;
    ring: string;
  };
};

export const nicheServices: NicheService[] = [
  {
    icon: ShoppingCart,
    title: "E-commerce & payments",
    desc: "Storefronts with cart, checkout, Stripe-ready flows, and admin tooling your ops team can rely on.",
    accent: { fg: "text-sky-600", bg: "bg-sky-600/10", ring: "border-sky-600/20" },
  },
  {
    icon: HeartPulse,
    title: "Healthcare & scheduling",
    desc: "Appointment flows, role-based access, and audit-friendly patterns for clinics and service businesses.",
    accent: { fg: "text-rose-600", bg: "bg-rose-600/10", ring: "border-rose-600/20" },
  },
  {
    icon: Bot,
    title: "AI-assisted products",
    desc: "OpenAI and similar APIs behind validated UX, so prompts become features, not experiments on users.",
    accent: { fg: "text-fuchsia-600", bg: "bg-fuchsia-600/10", ring: "border-fuchsia-600/20" },
  },
  {
    icon: Building2,
    title: "Real estate & marketplaces",
    desc: "Listings, search, and agent tools with maps and lead capture tuned to your funnel.",
    accent: { fg: "text-indigo-600", bg: "bg-indigo-600/10", ring: "border-indigo-600/20" },
  },
];
