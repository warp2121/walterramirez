import { useEffect, useRef } from "react";
import { Layers, Monitor, Wrench, Globe, BookOpen, LayoutGrid } from "lucide-react";

const skills = [
  {
    icon: Layers,
    title: "Inteligencia Artificial",
    tags: [
      { label: "ChatGPT" }, { label: "Copilot" }, { label: "Gemini" }, { label: "Claude" },
      { label: "Lovable", featured: true }, { label: "Prompt Builder", featured: true },
      { label: "NoteBookLM" }, { label: "Flux" }, { label: "Make" }, { label: "Kimi" },
      { label: "Antigravity" }, { label: "Github" }, { label: "Grok" }, { label: "Cowork" }, { label: "Prompt Design" },
    ],
  },
  {
    icon: Monitor,
    title: "Diseño & CAD",
    tags: [{ label: "AutoCAD Expert" }, { label: "SolidWorks" }, { label: "Wix" }, { label: "UX Design" }],
  },
  {
    icon: Wrench,
    title: "Gestión Industrial",
    tags: [{ label: "U2 Software ERP" }, { label: "ISO 9000" }, { label: "CNC Software" }, { label: "Vectric" }],
  },
  {
    icon: Globe,
    title: "Comercio Internacional",
    tags: [{ label: "MFG.COM" }, { label: "Alibaba" }, { label: "Procurement" }, { label: "Logistics" }],
  },
  {
    icon: BookOpen,
    title: "Competencias Directivas",
    tags: [
      { label: "Articulación Universidad-Empresa" }, { label: "Innovación Productiva" },
      { label: "Evaluación de Contratos" }, { label: "Modernización con IA" },
    ],
  },
  {
    icon: LayoutGrid,
    title: "Software & Tools",
    tags: [{ label: "MS Office" }, { label: "CNC Center" }, { label: "GPT for Coding" }],
  },
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-5");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    ref.current.querySelectorAll(".skill-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" className="py-24 px-8 relative z-[1]" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--cyber-cyan) / 0.02) 50%, hsl(var(--background)) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">03 // COMPETENCIAS</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Habilidades Técnicas
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="skill-card cyber-card opacity-0 translate-y-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyber-cyan)), transparent)", opacity: 0.5 }} />
              
              <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, hsl(var(--cyber-cyan)), hsl(168, 100%, 33%))", boxShadow: "0 0 20px hsl(var(--cyber-cyan) / 0.4)" }}
              >
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="font-semibold mb-3 cyber-glow text-lg tracking-wide">{skill.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-3 py-1 rounded-md text-xs border transition-all cursor-default ${
                      (tag as { featured?: boolean }).featured
                        ? "font-semibold"
                        : ""
                    }`}
                    style={{
                      background: (tag as { featured?: boolean }).featured
                        ? "hsl(var(--cyber-cyan))"
                        : "hsl(var(--cyber-cyan) / 0.1)",
                      color: (tag as { featured?: boolean }).featured
                        ? "hsl(var(--background))"
                        : "hsl(var(--cyber-cyan))",
                      borderColor: (tag as { featured?: boolean }).featured
                        ? "hsl(var(--cyber-cyan))"
                        : "hsl(var(--cyber-cyan) / 0.4)",
                      textShadow: (tag as { featured?: boolean }).featured
                        ? "none"
                        : "0 0 8px hsl(var(--cyber-cyan) / 0.5)",
                      boxShadow: (tag as { featured?: boolean }).featured
                        ? "0 0 20px hsl(var(--cyber-cyan) / 0.5)"
                        : "none",
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
