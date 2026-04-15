import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYouPage = () => {
  return (
    <div className="relative flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="min-w-0 flex-1 pt-16">
        <section className="relative z-10 section-padding-compact">
          <div className="container mx-auto min-w-0">
            <div className="relative mx-auto min-w-0 max-w-3xl overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.09] via-background to-background p-5 text-center shadow-[0_22px_60px_rgba(37,99,235,0.14)] sm:p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 left-1/2 h-48 w-48 -translate-x-[65%] rounded-full bg-cyan-400/10 blur-3xl animate-pulse [animation-delay:220ms]" />
                <div className="absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl animate-pulse [animation-delay:520ms]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 shadow-[0_12px_34px_rgba(37,99,235,0.18)]"
                >
                  <CheckCircle2 className="text-primary" size={30} />
                </motion.div>
                <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.14em] text-primary/90">
                  THANK YOU
                </p>
              </motion.div>
              <h1 className="mb-3 font-heading text-xl font-bold [text-wrap:balance] sm:text-2xl md:text-4xl">
                Message received. <span className="gradient-text">I&apos;ll reply soon.</span>
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Your message has been delivered successfully. I typically respond within 24 hours with a clear next step and a
                practical delivery plan.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Response time", value: "Within 24 hours" },
                  { label: "Next step", value: "Scope + milestones" },
                  { label: "Delivery", value: "Clean handoff docs" },
                ].map((x) => (
                  <div key={x.label} className="glass-hover rounded-xl border border-border/50 px-4 py-3 text-left">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{x.label}</div>
                    <div className="mt-1 text-sm font-semibold text-foreground">{x.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/"
                  className="glow-button inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 sm:w-auto sm:max-w-none sm:px-8"
                >
                  Back to home <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;

