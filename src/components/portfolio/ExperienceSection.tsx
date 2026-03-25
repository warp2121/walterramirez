import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2020 — 2025",
    title: "CEO – Ozonomach",
    company: "Lima, Perú | Cargo de Dirección Ejecutiva",
    functions: [
      "Dirección estratégica empresarial",
      "Gestión de innovación y desarrollo de producto",
      "Toma de decisiones financieras y operativas",
      "Implementación de automatización con IA",
      "Gestión de compras internacionales",
    ],
  },
  {
    period: "EE.UU.",
    title: "Project Manager – Contratos Gobierno",
    company: "Mechanical Factory O-AVIATION, New Jersey, USA",
    functions: [
      "Supervisión de cumplimiento contractual",
      "Coordinación de equipos técnicos",
      "Control de estándares ISO",
      "Gestión de calidad bajo especificaciones militares",
    ],
  },
  {
    period: "USA",
    title: "Director de Operaciones",
    company: "MAJESTIC Industry – NJ, USA",
    functions: [
      "Dirección de planta industrial",
      "Gestión de personal",
      "Diseño de layout industrial",
      "Control de calidad y mejora de procesos",
    ],
  },
  {
    period: "1999 — 2009",
    title: "Jefe de Producción / Director Técnico",
    company: "LAHMEYER WATER & ENERGY, Lima, Perú",
    functions: [
      "Coordinación multidisciplinaria en proyectos hidroenergéticos",
      "Gestión documental técnica",
      "Supervisión de estándares de calidad",
      "Implementación de base de datos técnica",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);

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
          <div className="section-number mb-2">02 // EXPERIENCIA</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Trayectoria Profesional
          </h2>
        </div>

        <div ref={ref} className="relative pl-8">
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, hsl(var(--cyber-cyan)), hsl(var(--border)))" }}
          />

          {experiences.map((exp) => (
            <div
              key={exp.title}
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
