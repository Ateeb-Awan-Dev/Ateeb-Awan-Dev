import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import { ClientAvatar } from "@/components/ClientAvatar";

/** Home highlights: healthcare, commerce, real-estate, restaurant delivery */
const FEATURED_SLUGS = ["healthwire", "shopease-ecommerce", "real-estate-hub", "restaurant-food-delivery"] as const;
const featured: Project[] = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p): p is Project => p != null
);

const HomeFeaturedProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const location = useLocation();

  return (
    <section id="projects-preview" ref={ref} className="relative z-10 section-padding-compact">
      <div className="container mx-auto min-w-0">
        <div className="relative left-1/2 mb-10 h-px w-screen -translate-x-1/2 bg-border/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Portfolio</p>
            <h2 className="text-xl font-bold [text-wrap:balance] font-heading sm:text-2xl md:text-4xl">
              Selected <span className="gradient-text">case studies</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Selected work across commerce, healthcare, and SaaS, focused on measurable outcomes, maintainable architecture, and polished user experience.
            </p>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
            All projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.07 * i }}
              className="glass-hover flex flex-col overflow-hidden rounded-xl transition duration-300"
            >
              <div className="relative h-28 overflow-hidden bg-muted/30">
                <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                <span className="absolute bottom-2 left-3 rounded-full bg-background/85 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground">{project.title}</h3>
                <div className="mt-1.5 flex items-center gap-2">
                  <ClientAvatar
                    name={project.client.name}
                    src={project.client.avatarUrl}
                    size={28}
                    className="h-7 w-7 shrink-0 rounded-full border border-border/50 object-cover object-top"
                  />
                  <span className="truncate text-[10px] font-medium text-muted-foreground">{project.client.name}</span>
                </div>
                <p className="mt-1.5 line-clamp-2 flex-1 text-[11px] leading-relaxed text-muted-foreground">{project.shortDesc}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[9px] text-primary/85">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 border-t border-border/50 pt-2.5">
                  <Link
                    to={`/projects/${project.slug}`}
                    state={{ backgroundLocation: location }}
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-primary underline-offset-4 hover:underline"
                  >
                    Case study <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Business-first builds", value: "Features mapped to real user flows and outcomes" },
            { label: "Technical depth", value: "Scalable APIs, clean frontend architecture, and maintainable code" },
            { label: "Delivery quality", value: "Structured handoff with stable release-ready implementation" },
          ].map((x) => (
            <div key={x.label} className="glass-hover rounded-xl border border-border/50 px-4 py-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{x.label}</div>
              <div className="mt-1 text-sm text-foreground">{x.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
