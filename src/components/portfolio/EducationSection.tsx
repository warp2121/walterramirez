import { useEffect, useRef } from "react";

const education = [
  { tag: "MBA", degree: "Master of Business Administration", school: "Webber International University, Florida, USA" },
  { tag: "INGENIERÍA", degree: "Ingeniero Industrial", school: "Universidad Inca Garcilaso de la Vega, Perú" },
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "English", level: "Avanzado" },
  { name: "Chinese", level: "En progreso" },
  { name: "German", level: "En progreso" },
];

const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-5");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="formacion" className="py-24 px-8 relative z-[1] bg-bg-secondary">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">06 // FORMACIÓN</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Educación & Idiomas
          </h2>
        </div>

        <div
          data-reveal
          className="opacity-0 translate-y-5 transition-all duration-600 rounded-2xl p-8 flex flex-col md:flex-row gap-8 md:items-center"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card)), hsl(var(--bg-secondary)))",
            border: "1px solid hsl(var(--border))",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {education.map((edu) => (
            <div key={edu.tag} className="flex-1">
              <div className="font-mono text-sm mb-2 cyber-glow">{edu.tag}</div>
              <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-sm text-foreground">{edu.school}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {languages.map((lang) => (
            <div key={lang.name} className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
              <span className="font-medium text-foreground">{lang.name}</span>
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: "hsl(var(--background))", color: "hsl(var(--cyber-cyan))", border: "1px solid hsl(var(--cyber-cyan))" }}
              >
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
