import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Code2,
  Database,
  Server,
  Globe,
  Layout,
  Smartphone,
  ShieldCheck,
  Cloud,
  TestTube2,
  Boxes,
  Layers,
  Github,
} from "lucide-react";

const tools = [
  { name: "MongoDB", icon: Database, color: "text-[#47A248]", detail: "Schema design" },
  { name: "Express", icon: Server, color: "text-slate-600", detail: "Robust APIs" },
  { name: "React", icon: Code2, color: "text-cyan-400", detail: "Interactive UI" },
  { name: "Next.js", icon: Layout, color: "text-slate-700", detail: "SSR and routing" },
  { name: "Node.js", icon: Globe, color: "text-green-600", detail: "Backend runtime" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500", detail: "Type-safe apps" },
  { name: "Tailwind", icon: Layout, color: "text-sky-400", detail: "Fast styling" },
  { name: "JWT Auth", icon: ShieldCheck, color: "text-indigo-500", detail: "Secure access" },
  { name: "REST APIs", icon: Smartphone, color: "text-emerald-500", detail: "System integrations" },
  { name: "Redux Toolkit", icon: Layers, color: "text-violet-500", detail: "State management" },
  { name: "Socket.io", icon: Boxes, color: "text-orange-500", detail: "Realtime updates" },
  { name: "Postman", icon: TestTube2, color: "text-amber-500", detail: "API testing" },
  { name: "Vercel/Render", icon: Cloud, color: "text-blue-600", detail: "Smooth deploys" },
  { name: "Git", icon: Code2, color: "text-orange-500", detail: "Version control" },
  { name: "GitHub", icon: Github, color: "text-slate-700", detail: "Collaboration" },
] as const;

const containerVariants = {
  hidden: {},
  show: (reduce: boolean) => ({
    transition: {
      staggerChildren: reduce ? 0 : 0.055,
      delayChildren: reduce ? 0 : 0.06,
    },
  }),
};

const cardVariants = {
  hidden: (reduce: boolean) =>
    reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.92, rotateX: -8 },
  show: (reduce: boolean) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: { type: "spring" as const, stiffness: 380, damping: 26, mass: 0.85 },
        },
};

const HomeTechStackPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills-preview" ref={ref} className="relative z-10 section-padding-compact">
      <style>{`
        @keyframes tech-stack-card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .tech-stack-card-float {
          animation-name: tech-stack-card-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-stack-card-float { animation: none !important; will-change: auto; }
        }
      `}</style>
      <div className="container mx-auto min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={
            reduceMotion
              ? { duration: 0.25 }
              : { type: "spring", stiffness: 320, damping: 28, mass: 0.9 }
          }
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Tech stack</p>
            <h2 className="font-heading text-xl font-bold [text-wrap:balance] sm:text-2xl md:text-4xl">
              Tools I use to <span className="gradient-text">build and scale</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              A practical stack for fast delivery and stable growth: MERN + Next.js, TypeScript, testing-friendly
              patterns, and production-ready deployment workflows.
            </p>
          </div>
          <a
            href="#tech-stack"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary transition hover:text-primary/80"
          >
            view tech stack <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={!!reduceMotion}
        >
          {tools.map((tool, i) => {
            const dur = 4.2 + (i % 4) * 0.45;
            const delay = (i * 0.09) % 2.4;
            return (
              <div
                key={tool.name}
                className="tech-stack-card-float perspective-[900px]"
                style={
                  reduceMotion
                    ? undefined
                    : {
                        animationDuration: `${dur}s`,
                        animationDelay: `-${delay}s`,
                      }
                }
              >
                <motion.div
                  custom={!!reduceMotion}
                  variants={cardVariants}
                  whileHover={
                    reduceMotion
                      ? { y: -2, transition: { duration: 0.2 } }
                      : {
                          rotateY: 180,
                          transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
                        }
                  }
                  whileTap={{ scale: 0.97 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative h-24 origin-center rounded-xl shadow-sm transition-shadow duration-300 [transform-style:preserve-3d] hover:shadow-[0_14px_40px_-8px_rgba(37,99,235,0.2)] lg:h-[6.5rem]"
                >
                  <div
                    className="glass-hover absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl px-2 text-center"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  >
                    <motion.span
                      className="inline-flex"
                      animate={
                        inView && !reduceMotion
                          ? { y: [0, -2, 0] }
                          : false
                      }
                      transition={{
                        duration: 2.4 + (i % 3) * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.07,
                      }}
                    >
                      <tool.icon size={26} className={tool.color} />
                    </motion.span>
                    <span className="text-xs font-medium text-foreground">{tool.name}</span>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-xl border border-primary/35 bg-gradient-to-br from-primary/[0.12] via-primary/[0.06] to-background px-2 text-center shadow-inner shadow-primary/5"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">Use Case</span>
                    <span className="text-xs text-foreground">{tool.detail}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="relative left-1/2 mt-20 h-px w-screen -translate-x-1/2 bg-border/40" />
    </section>
  );
};

export default HomeTechStackPreview;
