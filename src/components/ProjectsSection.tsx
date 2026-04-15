import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { projects, projectCategories } from "@/data/projects";
import { ClientAvatar } from "@/components/ClientAvatar";

const clientReviews = projects.map((project) => ({
  name: project.client.name,
  role: project.client.role,
  project: project.title,
  rating: project.client.rating,
  text: project.client.quote,
  avatarUrl: project.client.avatarUrl,
}));

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("All");
  const location = useLocation();

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div ref={ref}>
      <section id="projects" className="relative z-10 section-padding-compact">
        <div className="container mx-auto min-w-0">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Portfolio</p>
            <h2 className="mb-3 font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl md:text-4xl">
              MERN + Next.js <span className="gradient-text">projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Case studies across commerce, healthcare, AI workflows, and SaaS delivery, each with technical context, core decisions, and business impact.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`touch-manipulation rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                  filter === cat ? "glow-button text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid max-w-5xl mx-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                layout
                className="glass-hover group overflow-hidden rounded-xl transition duration-300"
              >
                <div className="relative h-32 overflow-hidden bg-muted/50">
                  <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 rounded-full bg-background/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-heading text-base font-semibold text-foreground">{project.title}</h3>
                  <p className="mb-2 line-clamp-2 text-xs text-muted-foreground">{project.shortDesc}</p>
                  <div className="mb-2 flex flex-wrap gap-1">
                    {project.features.map((f) => (
                      <span key={f} className="rounded-full border border-primary/30 px-1.5 py-0.5 font-mono text-[9px] text-primary/70">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-primary/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    state={{ backgroundLocation: location }}
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary underline-offset-4 hover:text-primary/80 hover:underline"
                  >
                    Case study <ArrowRight size={12} className="shrink-0" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-3">
            {[
              { label: "Project strategy", value: "Every build is planned around business goals and user behavior." },
              { label: "Engineering quality", value: "Clean architecture, modular code, and production reliability." },
              { label: "Post-launch readiness", value: "Maintainable handoff so your team can scale confidently." },
            ].map((item) => (
              <div key={item.label} className="glass-hover rounded-xl border border-border/50 px-4 py-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
                <div className="mt-1 text-sm text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section id="reviews" className="relative z-10 section-padding-compact">
        <div className="container mx-auto min-w-0">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Testimonials</p>
            <h2 className="mb-3 font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl md:text-4xl">
              Client <span className="gradient-text">reviews</span>
            </h2>
            <p className="text-sm text-muted-foreground">Verified client feedback tied to shipped work in this portfolio</p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${review.project}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass-hover rounded-xl p-6 relative"
              >
                <Quote size={18} className="text-primary/15 absolute top-4 right-4" />
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={12} className={si < review.rating ? "text-primary fill-primary" : "text-muted-foreground/30"} />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/50">{review.project}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3 border-t border-border/50 pt-3">
                  <ClientAvatar
                    name={review.name}
                    src={review.avatarUrl}
                    size={44}
                    className="h-11 w-11 shrink-0 rounded-full border border-border/60 object-cover object-top"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs font-mono text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
