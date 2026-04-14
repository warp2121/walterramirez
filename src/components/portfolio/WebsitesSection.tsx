import { useEffect, useRef } from "react";
import { Globe, BarChart3, Cpu, FolderPlus, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WebsitesSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const websites = [
    { icon: Globe, title: "Ozonomach", url: "www.ozonomach.com", href: "https://www.ozonomach.com" },
    { icon: BarChart3, title: "Rank Peru", url: "www.rankperu.com", href: "https://www.rankperu.com" },
    { icon: Cpu, title: "Macro Number", url: "www.macronumber.com", href: "https://www.macronumber.com" },
    { icon: FolderPlus, title: t("web.gestion"), url: "www.gestionproyectos.com", href: "https://www.gestionproyectos.com" },
  ];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-5", "scale-95");
              entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll(".website-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="websites" className="py-24 px-8 relative z-[1] bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">{t("web.section")}</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            {t("web.title")}
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {websites.map((site) => (
            <a
              key={site.title}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="website-card cyber-card opacity-0 translate-y-5 scale-95 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] block no-underline relative overflow-hidden group"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyber-cyan)), transparent)", opacity: 0.6 }} />
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-[1]"
                style={{ background: "linear-gradient(135deg, hsl(var(--cyber-cyan)), hsl(168, 100%, 33%))", boxShadow: "0 0 25px hsl(var(--cyber-cyan) / 0.5)" }}
              >
                <site.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 cyber-glow text-xl tracking-wide relative z-[1]">{site.title}</h3>
              <div className="font-mono text-sm text-foreground opacity-90 flex items-center gap-2 relative z-[1]">
                {site.url}
                <ArrowRight className="w-3.5 h-3.5 cyber-glow transition-transform group-hover:translate-x-1" />
              </div>
              <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full text-[0.7rem] font-medium uppercase tracking-wider relative z-[1]"
                style={{ background: "hsl(var(--cyber-cyan) / 0.15)", border: "1px solid hsl(var(--cyber-cyan) / 0.3)", color: "hsl(var(--cyber-cyan))" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: "hsl(var(--cyber-cyan))", boxShadow: "0 0 8px hsl(var(--cyber-cyan))" }} />
                Online
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
