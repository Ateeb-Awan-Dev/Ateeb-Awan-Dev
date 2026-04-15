import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ClientAvatar } from "@/components/ClientAvatar";

const HOME_SLUGS = [
  "shopease-ecommerce",
  "healthwire",
  "ai-to-web",
  "real-estate-hub",
  "pulsefit-mern",
  "teammind-rag",
] as const;

const items = HOME_SLUGS.map((slug) => {
  const p = projects.find((x) => x.slug === slug)!;
  return {
    name: p.client.name,
    role: `${p.client.role} · ${p.client.company}`,
    rating: p.client.rating,
    text: p.client.quote,
    avatarUrl: p.client.avatarUrl,
  };
});

const loopItems = [...items, ...items];

const TestimonialCard = ({ t, idx }: { t: (typeof items)[number]; idx: number }) => (
  <figure
    key={`${t.name}-${idx}`}
    className="glass relative w-[min(20rem,calc(100dvw-1.5rem))] max-w-[340px] shrink-0 rounded-xl p-4 text-left sm:p-6 md:w-[360px]"
  >
    <Quote size={18} className="absolute right-4 top-4 text-primary/15" />
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, si) => (
        <Star key={si} size={14} className={si < t.rating ? "fill-primary text-primary" : "text-muted-foreground/25"} />
      ))}
    </div>
    <blockquote className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">“{t.text}”</blockquote>
    <figcaption className="mt-4 flex items-center gap-3 border-t border-border/50 pt-3">
      <ClientAvatar
        name={t.name}
        src={t.avatarUrl}
        size={44}
        className="h-11 w-11 shrink-0 rounded-full border border-border/60 object-cover object-top"
      />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-foreground">{t.name}</div>
        <div className="truncate text-xs text-muted-foreground">{t.role}</div>
      </div>
    </figcaption>
  </figure>
);

const HomeTestimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="relative z-10 section-padding-compact border-t border-border/50 bg-muted/10">
      <div className="container mx-auto min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Testimonials</p>
          <h2 className="text-xl font-bold [text-wrap:balance] font-heading sm:text-2xl md:text-4xl">
            Trusted by <span className="gradient-text">product teams</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Feedback from founders and product leads after real launches, migrations, and performance-critical delivery.
          </p>
        </motion.div>
      </div>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-muted/10 to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-muted/10 to-transparent md:w-20" />
        <div className="overflow-hidden py-2">
          <div className="flex w-max gap-5 pl-4 animate-marquee-testimonials md:gap-6 md:pl-8">
            {loopItems.map((t, i) => (
              <TestimonialCard key={`marq-${i}`} t={t} idx={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto min-w-0">
        <p className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
            read more client feedback <ArrowRight size={16} />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeTestimonials;
