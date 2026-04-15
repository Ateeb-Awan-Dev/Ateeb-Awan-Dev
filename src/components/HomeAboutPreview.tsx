import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutContent } from "@/content/aboutContent";

const HomeAboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about-preview" ref={ref} className="relative z-10 section-padding-compact">
      <div className="container mx-auto min-w-0 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-5xl"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">About</p>
          <h2 className="font-heading text-2xl font-bold md:text-4xl">{aboutContent.headline}</h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85 md:text-sm">
            {aboutContent.fullName} · {aboutContent.roleLine}
          </p>
          {aboutContent.homeIntro.map((p, i) => (
            <p
              key={`home-about-intro-${i}`}
              className={`text-sm leading-relaxed text-muted-foreground md:text-base ${i === 0 ? "mt-4" : "mt-3"}`}
            >
              {p}
            </p>
          ))}
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {aboutContent.homeBullets.map((text, i) => (
              <li key={`home-about-bullet-${i}`} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {aboutContent.homePillTags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1 text-[11px] font-medium text-primary/90"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {aboutContent.homeStatRow.map((x) => (
              <div key={x.label} className="glass-hover rounded-xl border border-border/50 px-4 py-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{x.label}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{x.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.06] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Engagement Style</p>
            <p className="mt-1 text-sm text-muted-foreground">{aboutContent.engagementBlurb}</p>
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/45 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              View full about <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;
