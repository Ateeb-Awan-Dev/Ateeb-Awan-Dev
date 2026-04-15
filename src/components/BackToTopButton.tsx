import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 380;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const button = (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={scrollTop}
          className="glow-button !fixed z-[60] flex h-11 w-11 items-center justify-center rounded-full shadow-[0_12px_32px_rgba(37,99,235,0.35)] touch-manipulation [bottom:max(1rem,env(safe-area-inset-bottom,0px))] [right:max(1rem,env(safe-area-inset-right,0px))] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(button, document.body);
}
