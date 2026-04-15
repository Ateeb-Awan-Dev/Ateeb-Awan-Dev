import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileImageFrame from "@/components/ProfileImageFrame";

const titles = ["MERN + Next.js Full Stack Developer", "Full Stack Engineer", "React/Next.js & Node Builder", "Product-Focused Developer"];
const stars = [
  { l: "10%", t: "15%", s: 3, d: 2.8, dl: 0 },
  { l: "85%", t: "9%", s: 2.5, d: 3.5, dl: 1 },
  { l: "42%", t: "6%", s: 3.5, d: 2.2, dl: 2 },
  { l: "68%", t: "20%", s: 2.5, d: 4, dl: 0.6 },
  { l: "22%", t: "38%", s: 3, d: 3.2, dl: 2.8 },
  { l: "90%", t: "52%", s: 2.5, d: 4.2, dl: 1.6 },
  { l: "52%", t: "65%", s: 3, d: 2.8, dl: 0.4 },
  { l: "6%", t: "68%", s: 2.5, d: 5.5, dl: 2 },
  { l: "35%", t: "85%", s: 3, d: 3.8, dl: 3.8 },
  { l: "76%", t: "80%", s: 2.5, d: 3.2, dl: 1.4 },
] as const;

const risingParticles = [
  { l: "8%", s: 7, c: "rgba(54,159,250,.65)", d: 8, dl: 0 },
  { l: "18%", s: 5, c: "rgba(40,145,245,.52)", d: 11, dl: 2 },
  { l: "28%", s: 8, c: "rgba(54,159,250,.68)", d: 9, dl: 4 },
  { l: "38%", s: 5, c: "rgba(60,165,255,.54)", d: 13, dl: 1 },
  { l: "48%", s: 6, c: "rgba(54,159,250,.6)", d: 10, dl: 5 },
  { l: "58%", s: 9, c: "rgba(40,145,245,.64)", d: 8, dl: 3 },
  { l: "68%", s: 5, c: "rgba(54,159,250,.5)", d: 12, dl: 6 },
  { l: "78%", s: 7, c: "rgba(60,165,255,.6)", d: 9, dl: 1.5 },
  { l: "88%", s: 6, c: "rgba(54,159,250,.55)", d: 11, dl: 4.5 },
  { l: "13%", s: 4, c: "rgba(40,145,245,.46)", d: 14, dl: 7 },
] as const;

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const t1Ref = useRef<HTMLDivElement | null>(null);
  const t2Ref = useRef<HTMLDivElement | null>(null);
  const t3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  useEffect(() => {
    const bg = heroRef.current;
    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    const t3 = t3Ref.current;
    if (!bg || !t1 || !t2 || !t3) return;

    let mx = 0;
    let my = 0;
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    let x3 = 0;
    let y3 = 0;
    let inside = false;
    let raf = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onEnter = () => {
      inside = true;
      [t1, t2, t3].forEach((el) => (el.style.opacity = "1"));
    };
    const onLeave = () => {
      inside = false;
      [t1, t2, t3].forEach((el) => (el.style.opacity = "0"));
    };
    const onMove = (e: MouseEvent) => {
      const r = bg.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };

    const loop = () => {
      if (inside) {
        x1 = lerp(x1, mx, 0.28);
        y1 = lerp(y1, my, 0.28);
        x2 = lerp(x2, mx, 0.14);
        y2 = lerp(y2, my, 0.14);
        x3 = lerp(x3, mx, 0.07);
        y3 = lerp(y3, my, 0.07);
        t1.style.left = `${x1}px`;
        t1.style.top = `${y1}px`;
        t2.style.left = `${x2}px`;
        t2.style.top = `${y2}px`;
        t3.style.left = `${x3}px`;
        t3.style.top = `${y3}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    bg.addEventListener("mouseenter", onEnter);
    bg.addEventListener("mouseleave", onLeave);
    bg.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      bg.removeEventListener("mouseenter", onEnter);
      bg.removeEventListener("mouseleave", onLeave);
      bg.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-bg relative z-0 flex min-h-0 min-w-0 max-w-full flex-col overflow-x-clip overflow-y-hidden pb-8 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] pt-[max(6rem,calc(env(safe-area-inset-top,0px)+5.25rem))] sm:pl-4 sm:pr-4 sm:pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4.75rem))] md:pb-12 md:pl-8 md:pr-8 md:pt-24"
    >
      <div className="hb-cglow hb-cg1" />
      <div className="hb-cglow hb-cg2" />
      <div className="hb-cglow hb-cg3" />
      <div className="hb-cglow hb-cg4" />
      <div className="hb-au hb-au1" />
      <div className="hb-au hb-au2" />
      <div className="hb-au hb-au3" />
      <div className="hb-au hb-au4" />
      <div className="hb-grid" />
      <div className="hb-diag" />
      <div className="hb-wtop">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" height="90">
          <path d="M0,45 C180,80 360,10 540,45 C720,80 900,10 1080,45 C1260,80 1440,10 1620,45 C1800,80 1980,10 2160,45 L2160,0 L0,0Z" fill="rgba(54,159,250,0.08)" />
          <path d="M0,60 C220,35 420,75 620,55 C820,35 1020,68 1220,52 C1420,36 1620,62 1820,52 C2020,40 2160,58 2160,58 L2160,0 L0,0Z" fill="rgba(54,159,250,0.05)" />
        </svg>
      </div>
      <div className="hb-pr hb-pr1" /><div className="hb-pr hb-pr2" /><div className="hb-pr hb-pr3" /><div className="hb-pr hb-pr4" />
      <div className="hb-pr hb-pr5" /><div className="hb-pr hb-pr6" /><div className="hb-pr hb-pr7" /><div className="hb-pr hb-pr8" />
      <div className="hb-pr hb-pr9" /><div className="hb-pr hb-pr10" />
      <div className="hb-shim">
        <div className="hb-sh hb-sh1" /><div className="hb-sh hb-sh2" /><div className="hb-sh hb-sh3" />
        <div className="hb-sh hb-sh4" /><div className="hb-sh hb-sh5" /><div className="hb-sh hb-sh6" />
      </div>
      <div className="hb-scan" />
      <div className="hb-fsh" style={{ top: "7%", left: "7%", animationDuration: "5.5s" }}>
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
          <polygon points="37,4 71,21 71,54 37,71 3,54 3,21" stroke="rgba(54,159,250,0.45)" strokeWidth="1.5" fill="rgba(54,159,250,0.06)" />
          <circle cx="37" cy="37" r="5" fill="rgba(54,159,250,0.65)" />
        </svg>
      </div>
      <div className="hb-fsh" style={{ bottom: "10%", right: "8%", animationDuration: "7s", animationDelay: "-3s" }}>
        <svg width="85" height="85" viewBox="0 0 85 85" fill="none">
          <rect x="8" y="8" width="69" height="69" rx="7" stroke="rgba(54,159,250,0.4)" strokeWidth="1.5" fill="rgba(54,159,250,0.05)" transform="rotate(15 42 42)" />
          <circle cx="42" cy="42" r="5" fill="rgba(54,159,250,0.6)" />
        </svg>
      </div>
      <div className="hb-dna" style={{ top: "22%", left: 0, right: 0 }}>
        <svg width="100%" height="44" viewBox="0 0 900 44" preserveAspectRatio="none">
          <path d="M0,22 Q112,4 225,22 Q337,40 450,22 Q562,4 675,22 Q787,40 900,22" stroke="rgba(54,159,250,0.7)" strokeWidth="1.5" fill="none" strokeDasharray="7 4" />
        </svg>
      </div>
      <div className="hb-dna" style={{ top: "68%", left: 0, right: 0 }}>
        <svg width="100%" height="44" viewBox="0 0 900 44" preserveAspectRatio="none">
          <path d="M0,22 Q112,40 225,22 Q337,4 450,22 Q562,40 675,22 Q787,4 900,22" stroke="rgba(54,159,250,0.52)" strokeWidth="1.2" fill="none" strokeDasharray="5 5" />
        </svg>
      </div>
      <div className="hb-dna" style={{ top: "45%", left: 0, right: 0 }}>
        <svg width="100%" height="44" viewBox="0 0 900 44" preserveAspectRatio="none">
          <path d="M0,22 Q150,8 300,22 Q450,36 600,22 Q750,8 900,22" stroke="rgba(54,159,250,0.3)" strokeWidth="1" fill="none" strokeDasharray="3 6" />
        </svg>
      </div>
      <div className="hb-stars">
        {stars.map((s, i) => (
          <span key={i} className="hb-star" style={{ left: s.l, top: s.t, width: s.s, height: s.s, animationDuration: `${s.d}s`, animationDelay: `-${s.dl}s` }} />
        ))}
      </div>
      <div className="hb-parts">
        {risingParticles.map((p, i) => (
          <span key={i} className="hb-pt" style={{ left: p.l, bottom: 0, width: p.s, height: p.s, background: p.c, animationDuration: `${p.d}s`, animationDelay: `-${p.dl}s` }} />
        ))}
      </div>
      <div className="hb-ca" style={{ top: 0, left: 0 }} />
      <div className="hb-ca" style={{ top: 0, right: 0 }} />
      <div className="hb-ca" style={{ bottom: 0, left: 0 }} />
      <div className="hb-ca" style={{ bottom: 0, right: 0 }} />
      <div className="hb-wbtm">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" height="90">
          <path d="M0,45 C180,10 360,80 540,45 C720,10 900,80 1080,45 C1260,10 1440,80 1620,45 C1800,10 1980,80 2160,45 L2160,90 L0,90Z" fill="rgba(54,159,250,0.08)" />
          <path d="M0,60 C200,80 400,38 600,58 C800,78 1000,38 1200,58 C1400,78 1600,42 1800,58 C2000,74 2160,48 2160,58 L2160,90 L0,90Z" fill="rgba(54,159,250,0.05)" />
        </svg>
      </div>
      <div ref={t1Ref} className="hb-trail hb-t1" />
      <div ref={t2Ref} className="hb-trail hb-t2" />
      <div ref={t3Ref} className="hb-trail hb-t3" />
      <div className="container relative z-10 mx-auto flex min-w-0 max-w-full flex-col">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex justify-center lg:justify-start">
          <span className="inline-flex max-w-[min(100%,22rem)] items-center gap-2 rounded-full glass px-3 py-1.5 text-center text-xs text-primary sm:max-w-none sm:px-4 sm:text-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
            Available for high-impact web product builds
          </span>
        </motion.div>

        <div className="flex min-w-0 max-w-full flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="min-w-0 flex-1 text-center lg:text-left">
            <h1 className="mb-3 font-heading text-[1.35rem] font-bold leading-tight min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Crafting digital products with
              <br />
              <span className="gradient-text">MERN + Next.js</span> precision
            </h1>
            <div className="mb-4 min-h-[2.5rem] sm:h-9 md:h-10">
              <span className="font-heading text-base text-primary sm:text-lg md:text-2xl">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
              I design and ship production-grade web products with MongoDB, Express, React/Next.js, and Node.js. Expect clean architecture,
              measurable performance, and maintainable code your team can confidently scale after handoff.
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link to="/projects" className="glow-button inline-flex items-center gap-2 rounded-lg px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-95">
                Explore projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="rounded-lg border border-primary/45 px-7 py-3 font-semibold text-primary transition hover:bg-primary/10">
                Start a conversation
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:justify-start">
              {[
                { value: "3+", label: "Years delivering" },
                { value: "35+", label: "Projects & modules" },
                { value: "MERN + Next.js", label: "Core expertise" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text md:text-3xl">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }} className="flex w-full min-w-0 max-w-sm shrink-0 justify-center lg:max-w-md lg:justify-end">
            <div className="relative w-full max-w-[17rem] sm:max-w-xs lg:-mt-24">
              <ProfileImageFrame className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
