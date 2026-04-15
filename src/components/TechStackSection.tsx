import { useEffect, useRef } from "react";

/** Site gradient blues: hsl(204 100% 60%) → hsl(221 83% 53%) → hsl(234 85% 56%) */
const CATS = [
  {
    name: "Frontend",
    color: "#33B5FF",
    bg: "linear-gradient(135deg, hsl(204 100% 58% / 0.95), hsl(221 83% 52% / 0.9))",
    r: 170,
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Redux Toolkit",
      "Framer Motion",
      "ShadCN UI",
      "TanStack Query",
      "React Hook Form",
      "Material UI",
      "EmailJS",
      "Payment APIs",
      "SumSub",
    ],
  },
  {
    name: "Backend",
    color: "#2563EB",
    bg: "linear-gradient(135deg, hsl(221 83% 52% / 0.95), hsl(234 85% 54% / 0.9))",
    r: 210,
    tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Redis", "Webhooks", "NodeMailer"],
  },
  {
    name: "Database",
    color: "#1D4ED8",
    bg: "linear-gradient(135deg, hsl(221 78% 48% / 0.95), hsl(234 82% 50% / 0.9))",
    r: 185,
    tags: ["MongoDB", "PostgreSQL", "MySQL", "SQL"],
  },
  {
    name: "Tools",
    color: "#2B4FEF",
    bg: "linear-gradient(135deg, hsl(214 95% 55% / 0.95), hsl(221 83% 50% / 0.9))",
    r: 220,
    tags: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
  {
    name: "Deploy",
    color: "#3B82F6",
    bg: "linear-gradient(135deg, hsl(234 85% 56% / 0.92), hsl(221 83% 48% / 0.92))",
    r: 195,
    tags: ["Vercel", "Netlify", "Render"],
  },
] as const;

type Cat = (typeof CATS)[number];

export default function TechStackSection() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const W = () => stage.offsetWidth;
    const H = () => stage.offsetHeight;
    const CX = () => W() / 2;
    const CY = () => (H() - 60) / 2;

    type PillData = {
      el: HTMLDivElement;
      cat: Cat;
      phase: number;
      speed: number;
    };
    const pills: PillData[] = [];

    CATS.forEach((cat, i) => {
      const div = document.createElement("div");
      div.setAttribute("data-pill", "true");
      const w0 = Math.max(W(), 300);
      const fs = w0 < 380 ? ".62rem" : w0 < 420 ? ".68rem" : ".72rem";
      const pad = w0 < 380 ? "6px 12px" : "7px 16px";
      div.style.cssText = `
        position:absolute;padding:${pad};border-radius:100px;
        font-family:Unbounded,sans-serif;font-size:${fs};font-weight:700;
        letter-spacing:.06em;white-space:nowrap;cursor:pointer;
        background:${cat.bg};color:#fff;
        border:1px solid rgba(255,255,255,.5);
        box-shadow:0 4px 16px ${cat.color}55;
        transform:translate(-50%,-50%);
        transition:box-shadow .2s;z-index:20;
      `;
      div.textContent = cat.name;
      stage.appendChild(div);
      pills.push({
        el: div,
        cat,
        phase: (i / CATS.length) * Math.PI * 2,
        speed: 0.0007 * (i % 2 === 0 ? 1 : -1) * (1 + i * 0.12),
      });

      div.addEventListener("mouseenter", () => {
        const blobName = stage.querySelector<HTMLElement>("#blobName");
        const blobCount = stage.querySelector<HTMLElement>("#blobCount");
        const tooltip = stage.querySelector<HTMLElement>("#tooltip");
        const ttHead = stage.querySelector<HTMLElement>("#ttHead");
        const ttTags = stage.querySelector<HTMLElement>("#ttTags");
        if (!blobName || !blobCount || !tooltip || !ttHead || !ttTags) return;

        blobName.textContent = cat.name;
        blobCount.textContent = `${cat.tags.length} tools`;
        ttHead.textContent = cat.name;
        ttHead.style.color = cat.color;
        ttTags.innerHTML = cat.tags
          .map(
            (t) =>
              `<span style="font-family:'DM Mono',monospace;font-size:.62rem;padding:3px 8px;border-radius:6px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.1);display:inline-block">${t}</span>`
          )
          .join(" ");
        tooltip.style.opacity = "1";
        div.style.transform = "translate(-50%,-50%) scale(1.12)";
        stage.querySelectorAll<HTMLElement>("[data-cat]").forEach((el) => {
          el.style.opacity = el.dataset.cat === cat.name ? "1" : ".12";
          el.style.color = el.dataset.cat === cat.name ? cat.color : "rgba(37, 99, 235, 0.28)";
          el.style.fontWeight = el.dataset.cat === cat.name ? "700" : "400";
        });
      });

      div.addEventListener("mouseleave", () => {
        const blobName = stage.querySelector<HTMLElement>("#blobName");
        const blobCount = stage.querySelector<HTMLElement>("#blobCount");
        const tooltip = stage.querySelector<HTMLElement>("#tooltip");
        if (!blobName || !blobCount || !tooltip) return;

        blobName.textContent = "Developer";
        blobCount.textContent = "40+ tools";
        tooltip.style.opacity = "0";
        div.style.transform = "translate(-50%,-50%)";
        stage.querySelectorAll<HTMLElement>("[data-cat]").forEach((el) => {
          el.style.opacity = ".55";
          el.style.color = "rgba(37, 99, 235, 0.28)";
          el.style.fontWeight = "400";
        });
      });
    });

    /** Fewer, more spaced background labels so the stage feels less crowded */
    const TAGS_PER_CAT = 3;
    CATS.forEach((cat) => {
      const picks = [...cat.tags].sort(() => Math.random() - 0.5).slice(0, TAGS_PER_CAT);
      picks.forEach((tag, ti) => {
        const el = document.createElement("div");
        const w = W();
        const h = H();
        const padX = Math.max(16, Math.min(32, w * 0.08));
        const padY = Math.max(36, Math.min(64, h * 0.14));
        const tagSlotW = Math.min(88, Math.max(52, w * 0.18));
        const tagSlotH = 18;
        const bandW = Math.max(8, w - padX * 2 - tagSlotW);
        const bandH = Math.max(8, h - padY * 2 - tagSlotH);
        const x = padX + ((ti + 0.35) / TAGS_PER_CAT) * bandW * 0.85 + Math.random() * bandW * 0.12;
        const y = padY + Math.random() * bandH;
        const fs = w < 360 ? ".5rem" : ".54rem";
        el.dataset.cat = cat.name;
        el.textContent = tag;
        el.style.cssText = `
          position:absolute;left:${x}px;top:${y}px;max-width:${tagSlotW}px;
          font-family:'DM Mono',monospace;font-size:${fs};font-weight:400;
          color:rgba(37, 99, 235, 0.28);letter-spacing:.06em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
          pointer-events:none;opacity:.55;transition:color .3s,opacity .3s,font-weight .3s;
          animation:floatTag ${7 + Math.random() * 5}s ease-in-out ${-Math.random() * 8}s infinite;
        `;
        stage.appendChild(el);
      });
    });

    let raf = 0;
    const maxCatR = Math.max(...CATS.map((c) => c.r));
    const loop = () => {
      const cx = CX();
      const cy = CY();
      const w = W();
      const h = H();
      const edge = 12;
      const pillR = Math.min(72, Math.max(44, w * 0.19));
      const maxByWidth = Math.max(26, w * 0.5 - edge - pillR);
      const maxByHeight = Math.max(26, h * 0.4 - pillR);
      let maxFit = Math.min(maxByWidth, maxByHeight);
      if (w < 420) maxFit *= 0.88;
      const orbitScale = Math.min(1, maxFit / maxCatR);
      const tooltip = stage.querySelector<HTMLElement>("#tooltip");
      pills.forEach((p) => {
        p.phase += p.speed;
        const r = p.cat.r * orbitScale;
        const x = cx + r * Math.cos(p.phase);
        const y = cy + r * Math.sin(p.phase);
        p.el.style.left = `${x}px`;
        p.el.style.top = `${y}px`;
        if (tooltip && p.el.style.transform.includes("scale(1.12)")) {
          tooltip.style.left = `${x}px`;
          tooltip.style.top = `${y}px`;
        }
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      stage.querySelectorAll("[data-cat], [data-pill]").forEach((el) => el.remove());
    };
  }, []);

  return (
    <section id="tech-stack" className="relative z-10 section-padding-compact bg-background">
      <style>{`
        @keyframes morphBlob {
          0%,100%{border-radius:60% 40% 55% 45%/45% 55% 40% 60%}
          25%{border-radius:50% 50% 40% 60%/60% 40% 55% 45%}
          50%{border-radius:40% 60% 60% 40%/50% 50% 45% 55%}
          75%{border-radius:55% 45% 50% 50%/40% 60% 55% 45%}
        }
        @keyframes spinR{to{transform:rotate(360deg)}}
        @keyframes spinL{to{transform:rotate(-360deg)}}
        @keyframes floatTag{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,.45)}70%{box-shadow:0 0 0 6px transparent}}
      `}</style>

      <div className="mx-auto mb-8 max-w-6xl px-4 text-center md:mb-10 md:px-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-primary md:mb-4 md:text-xs">Skills & tools</p>
        <h2 className="font-heading text-[clamp(1.35rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.03em] text-foreground [text-wrap:balance]">
          Technical <span className="text-primary">Expertise</span>
        </h2>
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto h-[min(400px,68dvh)] min-h-[260px] w-full min-w-0 max-w-6xl overflow-hidden px-3 sm:h-[520px] sm:min-h-0 sm:px-4 md:h-[620px] md:px-6"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(221 83% 53% / 0.09) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 20% 50%, hsl(204 100% 60% / 0.08) 0%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 80% 40%, hsl(234 85% 56% / 0.06) 0%, transparent 70%)
            `,
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-[calc(50%-14px)] z-10 aspect-square w-[min(148px,42vw)] max-w-[200px] -translate-x-1/2 -translate-y-1/2 sm:top-[calc(50%-24px)] sm:w-[min(200px,48vw)] sm:max-w-[220px] md:top-[calc(50%-30px)] md:w-[220px]">
          <div
            className="absolute -inset-[8%] rounded-full border border-dashed border-primary/25 sm:-inset-6"
            style={{ animation: "spinR 18s linear infinite" }}
          />
          <div
            className="absolute -inset-[3%] rounded-full border border-primary/10 sm:-inset-2"
            style={{ animation: "spinL 10s linear infinite" }}
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-0.5"
            style={{
              background:
                "linear-gradient(135deg, hsl(221 70% 42%) 0%, hsl(221 83% 53%) 45%, hsl(234 85% 56%) 100%)",
              borderRadius: "60% 40% 55% 45%/45% 55% 40% 60%",
              animation: "morphBlob 8s ease-in-out infinite",
              boxShadow:
                "0 0 0 12px hsl(204 100% 60% / 0.12), 0 0 0 24px hsl(221 83% 53% / 0.08), 0 20px 60px hsl(234 85% 56% / 0.22)",
            }}
          >
            <span className="text-[.65rem] font-bold uppercase tracking-[.18em] text-white/50">Full-Stack</span>
            <span id="blobName" className="text-[1.05rem] font-extrabold tracking-tight text-white">
              Developer
            </span>
            <span id="blobCount" className="mt-1 font-mono text-[.62rem] tracking-[.06em] text-white/40">
              40+ tools
            </span>
          </div>
        </div>

        <div
          id="tooltip"
          className="pointer-events-none absolute z-40 min-w-[180px] rounded-xl border border-primary/25 bg-[hsl(221_45%_18%)] p-3.5 shadow-2xl shadow-primary/20"
          style={{ opacity: 0, transform: "translate(-50%,-115%)", transition: "opacity .2s" }}
        >
          <div id="ttHead" className="mb-2.5 text-[8px] font-bold uppercase tracking-[.18em]" />
          <div id="ttTags" className="flex flex-wrap gap-1.5" />
        </div>

        <div className="absolute bottom-2 left-1/2 z-30 w-[min(calc(100%-1.25rem),18rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-[#0F172A]/10 p-px shadow-[0_4px_24px_rgba(15,23,42,.07)] backdrop-blur-xl sm:bottom-3 sm:w-[min(calc(100%-2rem),22rem)] md:bottom-4 md:w-[min(calc(100%-2.5rem),28rem)] lg:w-[min(calc(100%-3rem),34rem)] xl:w-[min(calc(100%-3rem),38rem)]">
          <div className="flex flex-col gap-px">
            <div className="flex min-w-0 flex-nowrap divide-x divide-[#0F172A]/10">
              {[
                ["40+", "Tools"],
                ["5", "Domains"],
                ["3+", "Years"],
                ["35+", "Projects"],
              ].map(([n, l]) => (
                <div key={l} className="min-w-0 flex-1 bg-white/90 px-1 py-2 text-center sm:px-2.5 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3.5">
                  <div className="font-heading text-[0.78rem] font-extrabold leading-none tracking-tight text-foreground sm:text-[0.88rem] md:text-[1rem] lg:text-[1.08rem] xl:text-[1.15rem]">
                    {n}
                  </div>
                  <div className="mt-0.5 truncate text-[6px] font-bold uppercase tracking-[.12em] text-muted-foreground sm:text-[6.5px] md:text-[7px] lg:text-[7.5px]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 border-t border-[#0F172A]/10 bg-white/90 px-2 py-1.5 sm:gap-2 sm:py-2 md:py-2.5">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" style={{ animation: "glow 2s infinite" }} />
              <span className="text-center text-[.55rem] font-bold tracking-[.04em] text-muted-foreground sm:text-[.62rem] md:text-[.68rem] lg:text-[.72rem]">
                Available now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
