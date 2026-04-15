import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Database, Server, Globe, MapPin, Briefcase, Calendar } from "lucide-react";
import TechStackSection from "@/components/TechStackSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProfileImageFrame from "@/components/ProfileImageFrame";
import { aboutContent } from "@/content/aboutContent";

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "35+", label: "Projects shipped" },
  { value: "BSCS", label: "Computer Science" },
  { value: "100%", label: "Delivery focus" },
];

const expertise = [
  { icon: Code2, title: "Frontend", desc: "React & Next.js, TypeScript, Tailwind, accessible UI patterns, and performance-conscious UX." },
  { icon: Server, title: "Backend", desc: "Node.js & Express, REST APIs, auth, validation, and integrations that stay predictable under load." },
  { icon: Database, title: "Data layer", desc: "MongoDB, Mongoose, schema design, and pragmatic modeling for real product growth." },
  { icon: Globe, title: "Delivery", desc: "Vercel, Netlify, Render, Git-based workflows, and deploy notes your team can run with." },
];

const infoCards = [
  { icon: MapPin, label: "Location", value: "Pakistan" },
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: GraduationCap, label: "Degree", value: "BSCS" },
  { icon: Calendar, label: "Available", value: "Freelance & Full-time" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      {/* Hero Banner with Name — horizontal from sm; image column fixed width so text does not squeeze */}
      <section className="relative z-10 px-4 pb-8 pt-14 md:px-8 md:pb-10 md:pt-16">
        <div className="container mx-auto min-w-0 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-6 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-8 lg:gap-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55 }}
              className="w-full max-w-[12.5rem] shrink-0 sm:w-[13.5rem] sm:max-w-none md:w-[15rem]"
            >
              <ProfileImageFrame className="w-full" showFloatingBadge={false} />
            </motion.div>
            <div className="w-full min-w-0 flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold font-heading sm:text-3xl md:text-4xl mb-2 text-balance">
                Muhammad Ateeb <span className="gradient-text">Awan</span>
              </h1>
              <p className="mb-2 text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-primary/90 sm:text-xs md:text-sm">
                {aboutContent.roleLine}
              </p>
              <p className="mx-auto mb-3 max-w-none text-sm font-medium leading-relaxed text-muted-foreground text-pretty sm:mx-0 md:text-base">
                {aboutContent.heroLead}
              </p>
              <p className="mx-auto mb-3 max-w-none text-sm leading-relaxed text-muted-foreground/95 text-pretty sm:mx-0 md:text-base">
                {aboutContent.heroSupporting}
              </p>
              <p className="mx-auto mb-4 max-w-xl text-pretty font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-primary sm:mx-0 sm:max-w-none md:text-[11px] md:tracking-[0.14em]">
                {aboutContent.domainsLine}
              </p>
              <div className="mx-auto grid max-w-md grid-cols-2 gap-2 sm:mx-0 sm:flex sm:max-w-none sm:flex-wrap sm:justify-start sm:gap-3">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground glass rounded-full px-3 py-2 sm:justify-start sm:py-1.5"
                  >
                    <card.icon size={12} className="shrink-0 text-primary" />
                    <span className="text-center leading-tight sm:text-left">{card.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compact highlight strip — single horizontal row with scroll on narrow viewports */}
      <section className="relative z-10 px-4 py-4 md:px-8 md:py-6">
        <div className="container mx-auto min-w-0 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="flex flex-nowrap items-stretch gap-2 overflow-x-auto rounded-xl border border-primary/30 bg-primary/[0.12] p-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] sm:flex-wrap sm:justify-center"
          >
            {aboutContent.highlights.map((item) => (
              <span
                key={item}
                className="shrink-0 rounded-full border border-primary/30 bg-background/90 px-3 py-2 text-left text-xs font-normal leading-snug text-foreground/80 sm:py-1.5 sm:text-center"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Me — same width rhythm as hero / rest of site (max-w-6xl) */}
      <section className="relative z-10 section-padding-compact">
        <div className="container relative mx-auto min-w-0 max-w-6xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-10 text-center md:mb-12"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">About me</p>
            <h2 className="mx-auto w-full max-w-6xl font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl [text-wrap:balance]">
              {aboutContent.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
            className="w-full text-pretty"
          >
            <div className="mb-8 space-y-5 text-left">
              {aboutContent.bodyParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-base font-medium leading-relaxed text-foreground/90"
                      : "leading-relaxed text-muted-foreground"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Coding style profile card — wrap lines, no horizontal scrollbar */}
            <div className="mb-7 w-full overflow-hidden rounded-xl border border-[#253a67] bg-[#07122a] shadow-[0_12px_36px_rgba(2,8,23,0.45)]">
              <div className="border-b border-[#253a67] bg-[#0a1b3d] px-4 py-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#8bb8ff]">
                AboutProfile.ts
              </div>
              <pre className="max-w-full whitespace-pre-wrap break-words bg-gradient-to-br from-[#07122a] via-[#0a1530] to-[#081a33] px-3 py-4 font-mono text-[10px] leading-6 [overflow-wrap:anywhere] sm:px-4 sm:text-xs sm:leading-7 md:text-sm">
                <code className="block min-w-0">
                    <span className="text-[#ff7aa2]">const</span> <span className="text-[#7dd3fc]">developerProfile</span> <span className="text-[#c7d5f6]">=</span> <span className="text-[#c7d5f6]">{"{"}</span>{"\n"}
                    {"  "}<span className="text-[#c084fc]">name</span><span className="text-[#c7d5f6]">:</span> <span className="text-[#86efac]">"Muhammad Ateeb Awan"</span><span className="text-[#c7d5f6]">,</span>{"\n"}
                    {"  "}<span className="text-[#c084fc]">mission</span><span className="text-[#c7d5f6]">:</span>{" "}
                    <span className="text-[#86efac]">&quot;{aboutContent.profileCode.mission}&quot;</span>
                    <span className="text-[#c7d5f6]">,</span>
                    {"\n"}
                    {"  "}<span className="text-[#c084fc]">specialization</span><span className="text-[#c7d5f6]">:</span>{" "}
                    <span className="text-[#86efac] [overflow-wrap:anywhere]">{aboutContent.profileCode.specialization}</span>
                    <span className="text-[#c7d5f6]">,</span>
                    {"\n"}
                    {"  "}<span className="text-[#c084fc]">toolkit</span><span className="text-[#c7d5f6]">:</span>{" "}
                    <span className="text-[#86efac] [overflow-wrap:anywhere]">{aboutContent.profileCode.toolkit}</span>
                    <span className="text-[#c7d5f6]">,</span>
                    {"\n"}
                    {"  "}<span className="text-[#c084fc]">workflow</span><span className="text-[#c7d5f6]">:</span>{" "}
                    <span className="text-[#86efac]">&quot;{aboutContent.profileCode.workflow}&quot;</span>
                    <span className="text-[#c7d5f6]">,</span>
                    {"\n"}
                    {"  "}<span className="text-[#c084fc]">currentFocus</span><span className="text-[#c7d5f6]">:</span>{" "}
                    <span className="text-[#86efac]">&quot;{aboutContent.profileCode.currentFocus}&quot;</span>
                    <span className="text-[#c7d5f6]">,</span>
                    {"\n"}
                    {"  "}<span className="text-[#c084fc]">status</span><span className="text-[#c7d5f6]">:</span>{" "}
                    <span className="text-[#86efac]">&quot;{aboutContent.profileCode.status}&quot;</span>
                    {"\n"}
                    <span className="text-[#c7d5f6]">{"};"}</span>
                </code>
              </pre>
            </div>

            {/* Education Card */}
            <div className="glass-hover mb-7 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold font-heading text-foreground mb-1">
                    Bachelor of Science in Computer Science (BSCS)
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Formal training in software engineering, algorithms, data structures, databases, and systems thinking, applied daily in how I
                    structure APIs, model data, and reason about edge cases before they reach users.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-hover flex items-start gap-2 rounded-lg p-3"
                >
                  <item.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats — full section width */}
          <div className="mt-12 grid w-full grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-hover rounded-xl p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection inView={inView} />

      <TechStackSection />
    </div>
  );
};

export default AboutSection;
