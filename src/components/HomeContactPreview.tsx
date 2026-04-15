import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const HomeContactPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact-preview" ref={ref} className="relative z-10 section-padding-compact">
      <div className="container mx-auto min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="glass overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-background to-background p-5 sm:p-8 md:p-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Contact</p>
            <h2 className="text-xl font-bold [text-wrap:balance] font-heading sm:text-2xl md:text-3xl">
              Ready to launch your <span className="gradient-text">next product</span>?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Share your goals, timeline, and scope. You will get a focused response with practical next steps, delivery phases, and technical direction.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact#contact"
                className="glow-button inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 sm:w-auto sm:max-w-none sm:px-8"
              >
                <MessageSquare size={18} /> Start conversation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContactPreview;
