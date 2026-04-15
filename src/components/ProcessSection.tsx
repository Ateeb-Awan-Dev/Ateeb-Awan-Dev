import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    n: "01",
    title: "Discovery & goals",
    desc: "We clarify your users, success metrics, constraints, and scope so the build starts with the right assumptions.",
  },
  {
    n: "02",
    title: "Plan & milestones",
    desc: "I translate requirements into a delivery plan: milestones, timelines, and risk items with clear ownership.",
  },
  {
    n: "03",
    title: "Design direction",
    desc: "Wireframes and UI direction that prioritize conversion, accessibility, and clean component structure.",
  },
  {
    n: "04",
    title: "Build (MERN + Next.js)",
    desc: "Implement the product with scalable APIs, predictable frontend patterns, and performance-focused decisions.",
  },
  {
    n: "05",
    title: "QA & hardening",
    desc: "Edge cases, validation, and cross-device checks, so releases feel stable, not rushed.",
  },
  {
    n: "06",
    title: "Launch & support",
    desc: "Deployment, monitoring basics, and handoff docs. Optional iteration support after launch based on feedback.",
  },
] as const;

type ProcessSectionProps = {
  className?: string;
  showCta?: boolean;
};

export default function ProcessSection({ className = "", showCta = true }: ProcessSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section
      id="process"
      ref={ref}
      className={`relative z-10 overflow-hidden border-y border-white/10 bg-[#050b1a] ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.35]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:220px_220px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.18), transparent 45%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.14), transparent 40%), linear-gradient(180deg, #07122a, #050b1a)",
        }}
      />

      <div className="relative section-padding-compact">
        <div className="container mx-auto min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mx-auto mb-10 max-w-3xl text-center"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-200/80">Process</p>
            <h2 className="font-heading text-xl font-bold [text-wrap:balance] text-white sm:text-2xl md:text-4xl">
              How I take a build from discovery to <span className="gradient-text">launch</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100/70 md:text-base">
              A clear, step-by-step workflow that keeps quality high and timelines predictable without losing speed.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i }}
                className="relative border-white/10 p-6 sm:border-r sm:border-b lg:p-7 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0 [&:nth-last-child(-n+3)]:lg:border-b-0"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="gradient-text text-3xl font-extrabold tracking-tight">{s.n}</div>
                  <div className="h-px flex-1 bg-white/10 mx-4" />
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/60">
                    Step
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-blue-100/70">{s.desc}</p>
              </motion.article>
            ))}
          </div>

          {showCta && (
            <div className="mt-10 text-center">
              <Link
                to="/contact#contact"
                className="glow-button inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

