import { useParams, Navigate, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Star, X } from "lucide-react";
import { motion } from "framer-motion";
import { ClientAvatar } from "@/components/ClientAvatar";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const { title, longDesc, imageUrl, category, tech, features, client, details } = project;

  return (
    <main className="fixed inset-0 z-[70] flex min-w-0 items-end justify-center overflow-hidden bg-black/15 p-0 sm:items-center sm:p-3 md:p-6">
      <div className="mx-auto max-h-[min(92dvh,100svh)] w-full min-w-0 max-w-[min(100%,36rem)] overflow-y-auto rounded-t-2xl border border-border/60 border-b-0 bg-background p-3 shadow-2xl [scrollbar-width:none] sm:max-h-[84vh] sm:max-w-4xl sm:rounded-2xl sm:border-b sm:p-4 md:p-5 [&::-webkit-scrollbar]:hidden">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground sm:gap-3">
          <span className="px-3 py-1 rounded-full glass text-primary text-[11px] uppercase tracking-wide">
            {category}
          </span>
          <span className="px-3 py-1 rounded-full bg-muted/60">{details.industry}</span>
          <button
            onClick={() => navigate(-1)}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-foreground/10 text-foreground transition hover:bg-foreground/20"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <h1 className="text-2xl font-heading font-bold [text-wrap:balance] sm:text-3xl md:text-4xl">{title}</h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{longDesc}</p>
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold mb-1">Project Overview</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This project was designed to solve real business problems with a strong focus on performance,
                scalability, and a clean user experience. The features below highlight the core value it delivers
                to end users.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-heading font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-primary/90">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-heading font-semibold mb-2">Key Features</h3>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {features.map((feature) => (
                  <li key={feature} className="glass rounded-lg px-3 py-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/40">
              <img src={imageUrl} alt={title} className="h-40 w-full object-cover md:h-48" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="glass rounded-xl p-3">
                <div className="text-muted-foreground/80">Client</div>
                <div className="font-medium text-foreground">{details.client}</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="text-muted-foreground/80">Role</div>
                <div className="font-medium text-foreground">{client.role}</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-6 space-y-4"
            >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <ClientAvatar
                  name={client.name}
                  src={client.avatarUrl}
                  size={48}
                  className="h-12 w-12 shrink-0 rounded-full border border-border/60 object-cover object-top"
                />
                <div className="min-w-0">
                  <div className="mb-1 font-mono text-xs uppercase tracking-wide text-primary/80">Client Feedback</div>
                  <div className="text-sm font-semibold text-foreground">{client.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {client.role} · {client.company}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < client.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">“{client.quote}”</p>
            </motion.div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProjectDetail;

