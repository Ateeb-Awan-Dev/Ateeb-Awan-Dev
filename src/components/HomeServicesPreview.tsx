import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fullMernIntro, mernPillars } from "@/data/mernServices";

const HomeServicesPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services-preview" ref={ref} className="relative z-10 section-padding-compact border-y border-border/50 bg-muted/15">
      <div className="container mx-auto min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Services</p>
          <h2 className="text-xl font-bold [text-wrap:balance] font-heading sm:text-2xl md:text-4xl">
            End-to-end <span className="gradient-text">MERN + Next.js</span> delivery
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{fullMernIntro.subtitle}</p>
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
            {["Scope → build → launch", "Stakeholder-ready communication", "Clean handoff documentation"].map((x) => (
              <span key={x} className="rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1 text-[11px] font-medium text-primary/90">
                {x}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mernPillars.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i }}
              className="glass-hover rounded-xl p-5 transition duration-300"
            >
              <div className={`mb-3 inline-flex items-center justify-center rounded-xl border px-2.5 py-2 ${p.accent.bg} ${p.accent.ring}`}>
                <p.icon size={22} className={p.accent.fg} />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-primary/80">{p.techLine}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.outcome}</p>
            </motion.article>
          ))}
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Planning", value: "Clear scope before coding starts" },
            { label: "Execution", value: "Weekly progress with visible milestones" },
            { label: "Quality", value: "Production-ready delivery standards" },
          ].map((item) => (
            <div key={item.label} className="glass-hover rounded-xl border border-border/50 px-4 py-3 text-left">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{item.value}</div>
            </div>
          ))}
        </div>

        <p className="text-center">
          <Link
            to="/#services-preview"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            View all services & pillars <ArrowRight size={16} />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeServicesPreview;
