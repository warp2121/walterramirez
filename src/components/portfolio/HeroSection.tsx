import { useEffect, useRef } from "react";

const stats = [
  { number: "30+", label: "Años de Experiencia" },
  { number: "8+", label: "Años Dirección" },
  { number: "3", label: "Países" },
  { number: "70+", label: "Proyectos" },
];

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const txt = el.textContent || "";
          const hasPlus = txt.includes("+");
          const num = parseInt(txt.replace(/\D/g, ""));
          if (isNaN(num)) return;
          let cur = 0;
          const step = num / (2000 / 16);
          const upd = () => {
            cur += step;
            if (cur < num) {
              el.textContent = Math.floor(cur) + (hasPlus ? "+" : "");
              requestAnimationFrame(upd);
            } else {
              el.textContent = txt;
            }
          };
          upd();
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statsRef.current.querySelectorAll(".stat-number").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-16 relative z-[1]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <div
              className="inline-flex items-center gap-2 bg-card border px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest cyber-glow"
              style={{ borderColor: "hsl(var(--cyber-cyan))", boxShadow: "0 0 20px hsl(var(--cyber-cyan) / 0.2)" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-dot"
                style={{ background: "hsl(var(--cyber-cyan))", boxShadow: "0 0 10px hsl(var(--cyber-cyan))" }}
              />
              Disponible para consultoría
            </div>

            <h1 className="mt-8 font-bold leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
              Walter<br />
              <span className="cyber-glow" style={{ textShadow: "0 0 30px hsl(var(--cyber-cyan) / 0.5)" }}>Ramírez</span>
            </h1>
            <p className="mt-4 text-fg-muted font-light" style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}>
              MBA - Ingeniero Industrial | Transferencia Tecnológica & Modernización con IA
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="relative w-[220px] h-[220px]">
              <div className="absolute -inset-[10px] rounded-full border-[1.5px] border-transparent border-t-[hsl(var(--cyber-cyan)/0.4)] border-r-[hsl(var(--cyber-cyan)/0.4)] animate-spin-slower" />
              <div className="absolute -inset-1 rounded-full border-2 border-transparent border-t-cyber-cyan border-l-cyber-cyan animate-spin-slow" />
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 40px hsl(var(--cyber-cyan) / 0.25), 0 0 80px hsl(var(--cyber-cyan) / 0.1)" }} />
              <div
                className="w-[220px] h-[220px] rounded-full border-[3px] flex items-center justify-center text-5xl font-bold cyber-glow bg-card relative z-[1]"
                style={{ borderColor: "hsl(var(--cyber-cyan))", boxShadow: "0 0 30px hsl(var(--cyber-cyan) / 0.5)" }}
              >
                WR
              </div>
            </div>
            <div className="font-mono text-[0.65rem] cyber-glow tracking-[0.2em]">// WR. MBA · ING. INDUSTRIAL</div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div
                className="stat-number text-[2.5rem] font-bold leading-none cyber-glow"
                style={{ textShadow: "0 0 20px hsl(var(--cyber-cyan) / 0.5)" }}
              >
                {stat.number}
              </div>
              <div className="text-xs text-foreground uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 cyber-glow text-xs tracking-widest animate-bounce-scroll">
        <span>SCROLL</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
