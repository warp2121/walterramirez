import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Download } from "lucide-react";
import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

const ContactSection = () => {
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
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" className="py-24 px-8 relative z-[1]">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-5 transition-all duration-600 rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card)), hsl(var(--bg-secondary)))",
            border: "1px solid hsl(var(--cyber-cyan))",
            boxShadow: "0 0 40px hsl(var(--cyber-cyan) / 0.1)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="section-number text-center mb-4">07 // CONTACTO</div>
          <h2 className="text-foreground font-semibold mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
            Construyamos el futuro juntos
          </h2>
          <p className="text-foreground max-w-[500px] mx-auto">
            Especializado en transferencia tecnológica, modernización productiva con IA y gestión de proyectos internacionales.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:ramirezw2010@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-lg transition-all hover:-translate-y-0.5"
              style={{ background: "hsl(var(--cyber-cyan))", color: "hsl(var(--background))", boxShadow: "0 0 20px hsl(var(--cyber-cyan) / 0.3)" }}
            >
              <Mail className="w-5 h-5" /> Email
            </a>
            <a
              href="tel:+51958188762"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-lg border transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--cyber-cyan)/0.1)]"
              style={{ borderColor: "hsl(var(--cyber-cyan))", color: "hsl(var(--cyber-cyan))" }}
            >
              <Phone className="w-5 h-5" /> +51 958 188 762
            </a>
            <a
              href="https://www.linkedin.com/in/walter-ramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-lg border transition-all hover:-translate-y-0.5 hover:bg-[rgba(0,119,181,0.1)]"
              style={{ borderColor: "#0077b5", color: "#0077b5" }}
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <button
              onClick={async () => {
                const doc = new Document({
                  styles: {
                    default: { document: { run: { font: "Arial", size: 22 } } },
                  },
                  sections: [{
                    children: [
                      new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WALTER RAMÍREZ", bold: true, size: 36, font: "Arial" })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "MBA — Ingeniero Industrial", size: 24, color: "555555" })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [
                        new TextRun({ text: "Lima, Perú | ramirezw2010@gmail.com | +51 958 188 762 | linkedin.com/in/walter-ramirez", size: 20, color: "666666" }),
                      ]}),
                      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 }, children: [new TextRun({ text: "PERFIL PROFESIONAL", bold: true, size: 26 })] }),
                      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "Más de 30 años de experiencia internacional en proyectos de infraestructura, diseño, manufactura, gestión de contratos, compras y docencia (Perú, EE.UU. y China). Especializado en auditoría ISO 9000, transferencia tecnológica, modernización productiva con IA y gestión de proyectos internacionales.", size: 22 })] }),
                      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 }, children: [new TextRun({ text: "EXPERIENCIA PROFESIONAL", bold: true, size: 26 })] }),
                      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Consultor en Transferencia Tecnológica & Modernización Productiva con IA", bold: true, size: 22 })] }),
                      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Diseñador Mecánico — Proyectos de infraestructura en EE.UU.", bold: true, size: 22 })] }),
                      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Auditor ISO 9000 — Control de calidad y procesos", bold: true, size: 22 })] }),
                      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Docente en Escuelas en China — Enseñanza internacional", bold: true, size: 22 })] }),
                      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "Gestión de Contratos y Compras — Proyectos internacionales", bold: true, size: 22 })] }),
                      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 }, children: [new TextRun({ text: "EDUCACIÓN", bold: true, size: 26 })] }),
                      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "MBA — Maestría en Administración de Empresas", size: 22 })] }),
                      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "Ingeniería Industrial — Universidad Nacional", size: 22 })] }),
                      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 }, children: [new TextRun({ text: "HABILIDADES CLAVE", bold: true, size: 26 })] }),
                      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "• Transferencia Tecnológica  • CAD/Diseño Mecánico  • Auditoría ISO 9000  • Inteligencia Artificial  • Gestión de Proyectos  • Idiomas: Español, Inglés, Mandarín", size: 22 })] }),
                    ]
                  }]
                });
                const blob = await Packer.toBlob(doc);
                saveAs(blob, "Walter-Ramirez-CV.docx");
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-lg border transition-all hover:-translate-y-0.5 cursor-pointer bg-transparent"
              style={{ borderColor: "hsl(var(--cyber-pink))", color: "hsl(var(--cyber-pink))" }}
            >
              <Download className="w-5 h-5" /> Descargar CV
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-mono text-sm cyber-glow">Lima, Perú — Disponible para proyectos remotos e internacionales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
