import { motion } from "framer-motion";
import { Award, Clock3, ShieldCheck, Users, TrendingUp, BadgeCheck } from "lucide-react";

const trustCards = [
  {
    icon: Award,
    title: "Results-driven execution",
    desc: "Each sprint targets measurable outcomes: faster load times, cleaner UX, and fewer release blockers.",
  },
  {
    icon: Clock3,
    title: "Predictable delivery",
    desc: "Clear milestones, weekly checkpoints, and transparent progress so you always know what ships next.",
  },
  {
    icon: ShieldCheck,
    title: "No-shortcuts engineering",
    desc: "Secure auth flows, robust validation, and production-friendly decisions that reduce long-term risk.",
  },
  {
    icon: Users,
    title: "Founder-friendly communication",
    desc: "Direct collaboration, practical trade-offs, and decisions explained in business language, not jargon.",
  },
  {
    icon: TrendingUp,
    title: "Scalable architecture",
    desc: "Modular APIs and maintainable frontend patterns that support growth without rewrite pressure.",
  },
  {
    icon: BadgeCheck,
    title: "Clean handoff quality",
    desc: "Readable codebase, docs, and deployment notes so your next developer can continue confidently.",
  },
] as const;

const trustMetrics = [
  { value: "35+", label: "Projects delivered" },
  { value: "100%", label: "Delivery commitment" },
  { value: "3+", label: "Years with MERN + Next.js" },
  { value: "10+", label: "Production modules" },
] as const;

type WhyChooseSectionProps = {
  inView?: boolean;
  className?: string;
};

const WhyChooseSection = ({ inView = true, className = "" }: WhyChooseSectionProps) => {
  return (
    <section
      id="why-choose-me"
      className={`relative z-10 overflow-hidden border-y border-border/50 bg-background py-14 md:py-20 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(221_83%_53%_/_0.08),transparent)]" />
      <div className="container relative mx-auto min-w-0">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Why me</p>
          <h2 className="font-heading text-xl font-bold [text-wrap:balance] text-foreground sm:text-2xl md:text-4xl">
            Why <span className="gradient-text">Choose Me?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">
            I combine product thinking with solid MERN + Next.js engineering so your app ships faster, scales cleaner, and remains easy to
            maintain.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i }}
              className="glass-hover rounded-xl border border-border/50 bg-card/80 p-5 transition duration-300"
            >
              <div className="mb-3 inline-flex rounded-lg border border-primary/20 bg-primary/10 p-2">
                <card.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.08 }}
              className="glass-hover rounded-xl border border-border/50 bg-muted/30 p-4 text-center"
            >
              <div className="text-2xl font-bold gradient-text md:text-3xl">{m.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
