import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

type ProfileImageFrameProps = {
  className?: string;
  /** Match home hero: animated border + optional floating stack pill */
  showFloatingBadge?: boolean;
};

const ProfileImageFrame = ({ className = "", showFloatingBadge = true }: ProfileImageFrameProps) => {
  return (
    <div className={`relative ${className}`.trim()}>
      <div className="hero-image-frame animate-pulse-glow rounded-2xl p-[6px]">
        <div className="relative overflow-hidden rounded-[14px] bg-background">
          <img
            src="/profile.png"
            alt="Muhammad Ateeb Awan"
            className="aspect-[4/5] w-full object-cover object-top"
            style={{ filter: "saturate(0.95) brightness(1.02)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-primary/10" />
        </div>
      </div>
      {showFloatingBadge ? (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="glass absolute -bottom-2 -right-1 flex max-w-[calc(100%-0.5rem)] items-center gap-1.5 rounded-xl px-2.5 py-1.5 md:-bottom-3 md:-right-2 md:gap-2 md:px-4 md:py-2"
        >
          <Code2 className="h-3.5 w-3.5 shrink-0 text-primary md:h-4 md:w-4" strokeWidth={2.25} />
          <span className="truncate text-[10px] font-medium text-foreground sm:text-xs md:text-sm">MERN + Next.js · TypeScript</span>
        </motion.div>
      ) : null}
      <div className="absolute -inset-2 -z-10 rounded-2xl border border-primary/15" />
    </div>
  );
};

export default ProfileImageFrame;
