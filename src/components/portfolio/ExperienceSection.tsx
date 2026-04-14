import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const experiences = [
    { period: "2020 — 2025", title: t("exp.1.title"), company: t("exp.1.company"), functions: [t("exp.1.f1"), t("exp.1.f2"), t("exp.1.f3"), t("exp.1.f4"), t("exp.1.f5")] },
    { period: "2018 — 2019", title: t("exp.2.title"), company: t("exp.2.company"), functions: [t("exp.2.f1")] },
    { period: "2017 — 2018", title: t("exp.3.title"), company: t("exp.3.company"), functions: [t("exp.3.f1"), t("exp.3.f2"), t("exp.3.f3")] },
    { period: "2014 — 2018", title: t("exp.4.title"), company: t("exp.4.company"), functions: [t("exp.4.f1"), t("exp.4.f2"), t("exp.4.f3"), t("exp.4.f4")] },
    { period: "2012 — 2014", title: t("exp.5.title"), company: t("exp.5.company"), functions: [t("exp.5.f1"), t("exp.5.f2"), t("exp.5.f3"), t("exp.5.f4")] },
    { period: "2011 — 2012", title: t("exp.6.title"), company: t("exp.6.company"), functions: [t("exp.6.f1"), t("exp.6.f2"), t("exp.6.f3"), t("exp.6.f4")] },
    { period: "1999 — 2009", title: t("exp.7.title"), company: t("exp.7.company"), functions: [t("exp.7.f1"), t("exp.7.f2"), t("exp.7.f3"), t("exp.7.f4")] },
  ];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("opacity-100", "translate-y-0"), i * 100);
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    ref.current.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" className="py-24 px-8 relative z-[1] bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">{t("exp.section")}</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            {t("exp.title")}
          </h2>
        </div>

        <div ref={ref} className="relative pl-8">
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, hsl(var(--cyber-cyan)), hsl(var(--border)))" }}
          />

          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="timeline-item relative pb-12 opacity-0 translate-y-8 transition-all duration-600"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div
                className="absolute -left-8 top-2 w-3 h-3 rounded-full border-2 bg-background -translate-x-[5px] transition-all"
                style={{ borderColor: "hsl(var(--cyber-cyan))", boxShadow: "0 0 10px hsl(var(--cyber-cyan) / 0.5)" }}
              />

              <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:translate-x-2 hover:border-cyber-cyan group"
                style={{ ["--tw-border-opacity" as string]: 1 }}
              >
                <div className="font-mono text-xs cyber-glow mb-2">{exp.period}</div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                <div className="text-sm text-foreground mb-4">{exp.company}</div>
                <ul className="space-y-1">
                  {exp.functions.map((fn) => (
                    <li key={fn} className="relative pl-4 text-sm text-foreground">
                      <span className="absolute left-0 cyber-glow">→</span>
                      {fn}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
