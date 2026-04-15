import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fullMernIntro, mernPillars, nicheServices } from "@/data/mernServices";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative z-10 section-padding">
      <div className="container mx-auto min-w-0" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Services</p>
          <h2 className="text-2xl font-bold [text-wrap:balance] font-heading sm:text-3xl md:text-4xl">
            <span className="gradient-text">Full MERN + Next.js</span> development
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {fullMernIntro.subtitle} I focus on shipping reliable releases with clear milestones, transparent communication, and scalable foundations.
          </p>
          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              { label: "Build style", value: "Architecture-first · typed flows" },
              { label: "Visibility", value: "Weekly checkpoints + progress notes" },
              { label: "Handoff", value: "Docs + deploy notes + support guide" },
            ].map((x) => (
              <div key={x.label} className="glass-hover rounded-xl border border-border/50 px-4 py-3 text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{x.label}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{x.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-6">
          <h3 className="mb-6 text-center font-heading text-lg font-semibold text-foreground md:text-xl">
            How I break down a <span className="gradient-text">full MERN + Next.js</span> engagement
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mernPillars.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.06 * i }}
                className="glass-hover group rounded-xl p-6 transition duration-300"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                  <span className={`inline-flex items-center justify-center rounded-xl border px-3 py-2 ${p.accent.bg} ${p.accent.ring}`}>
                    <p.icon size={26} className={p.accent.fg} />
                  </span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">{p.title}</h4>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-primary/85">{p.techLine}</p>
                <p className="mt-3 text-xs font-medium text-foreground/90">The problem</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>
                <p className="mt-3 text-xs font-medium text-foreground/90">What you get</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.outcome}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-8 mt-16 text-center font-heading text-xl font-semibold md:text-2xl"
        >
          Also <span className="gradient-text">industry-focused</span> builds
        </motion.h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nicheServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.08 }}
              className="glass-hover rounded-xl p-6 transition duration-300"
            >
              <div className="mb-3">
                <span className={`inline-flex items-center justify-center rounded-xl border px-3 py-2 ${service.accent.bg} ${service.accent.ring}`}>
                  <service.icon size={26} className={service.accent.fg} />
                </span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">{service.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
