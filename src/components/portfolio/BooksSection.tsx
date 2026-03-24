import { useEffect, useRef } from "react";
import { Layers, Globe, BookOpen } from "lucide-react";

const books = [
  {
    icon: Layers,
    coverTitle: "Inteligencia Artificial",
    title: "IA: la llave de un desarrollo postergado",
    subtitle: "Una visión transformadora para América Latina",
    description: "Explora cómo la inteligencia artificial puede ser el catalizador que América Latina necesita para cerrar brechas históricas de desarrollo, modernizar sus estructuras productivas y competir en la economía global del siglo XXI.",
    tags: ["Inteligencia Artificial", "Desarrollo"],
  },
  {
    icon: Globe,
    coverTitle: "Geopolítica Global",
    title: "China, el universo que está enseñando a Occidente",
    subtitle: "Lecciones de una civilización milenaria",
    description: "Un análisis profundo sobre las lecciones que el modelo de desarrollo chino ofrece a Occidente, desde su enfoque en la planificación estratégica de largo plazo hasta su integración de tecnología y tradición en la construcción de una superpotencia moderna.",
    tags: ["China", "Occidente"],
  },
];

const BooksSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-8", "scale-95");
              entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            }, i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll(".book-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="libros" className="py-24 px-8 relative z-[1]" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--cyber-cyan) / 0.03) 50%, hsl(var(--background)) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">05 // PUBLICACIONES</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Proyectos de Libros
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="book-card cyber-card opacity-0 translate-y-8 scale-95 transition-all duration-600 hover:-translate-y-2.5 hover:scale-[1.02] rounded-2xl p-8 relative overflow-hidden"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyber-cyan)), transparent)", opacity: 0.7 }} />

              <div
                className="w-full h-[200px] rounded-xl flex flex-col items-center justify-center mb-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, hsl(var(--cyber-cyan) / 0.15) 0%, hsl(200, 50%, 30% / 0.2) 100%)", border: "1px solid hsl(var(--cyber-cyan) / 0.3)" }}
              >
                <div className="absolute top-0 left-[-100%] w-full h-full animate-shimmer" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyber-cyan) / 0.2), transparent)" }} />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative z-[1]"
                  style={{ background: "linear-gradient(135deg, hsl(var(--cyber-cyan)), hsl(168, 100%, 33%))", boxShadow: "0 0 30px hsl(var(--cyber-cyan) / 0.5)" }}
                >
                  <book.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="font-mono text-[0.7rem] cyber-glow uppercase tracking-[0.15em] mt-4 relative z-[1]">{book.coverTitle}</span>
              </div>

              <h3 className="text-[1.3rem] font-bold leading-tight mb-3 text-foreground">{book.title}</h3>
              <p className="text-sm cyber-glow opacity-90 mb-4">{book.subtitle}</p>
              <p className="text-sm text-fg-muted leading-relaxed">{book.description}</p>

              <div className="flex items-center gap-4 mt-6 pt-6" style={{ borderTop: "1px solid hsl(var(--cyber-cyan) / 0.15)" }}>
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.7rem] font-medium uppercase tracking-wider"
                    style={{ background: "hsl(var(--cyber-cyan) / 0.1)", border: "1px solid hsl(var(--cyber-cyan) / 0.25)", color: "hsl(var(--cyber-cyan))" }}
                  >
                    <BookOpen className="w-3 h-3" />
                    {tag}
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

export default BooksSection;
