import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Download } from "lucide-react";
import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
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
          <div className="section-number text-center mb-4">{t("contact.section")}</div>
          <h2 className="text-foreground font-semibold mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
            {t("contact.title")}
          </h2>
          <p className="text-foreground max-w-[500px] mx-auto">
            {t("contact.desc")}
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
                const experiences = [
                  { period: "2020 — 2025", title: "CEO – Ozonomach", company: "Lima, Perú | Cargo de Dirección Ejecutiva", functions: ["Dirección estratégica empresarial", "Gestión de innovación y desarrollo de producto", "Toma de decisiones financieras y operativas", "Implementación de automatización con IA", "Gestión de compras internacionales"] },
                  { period: "2018 — 2019", title: "Docente en Escuelas en China", company: "Younuvo Jilin Educational Experts – Changchun, China", functions: ["Profesor de inglés y cultura occidental en seis escuelas y universidad, con 25 horas de clases semanales para aproximadamente 1,000 alumnos durante 1 año"] },
                  { period: "2017 — 2018", title: "Consultor de Ingeniería", company: "Freelance, Nueva York, EE. UU.", functions: ["Asistencia en proyectos de invenciones domésticas", "Planos de ingeniería para fabricación en el mercado estadounidense y chino", "Apoyo en adquisiciones para encontrar proveedores a nivel mundial"] },
                  { period: "2014 — 2018", title: "Asistente de Ingeniería / Programador CNC", company: "Millwork NARVA – Springfield, NJ, EE. UU.", functions: ["Diseño de más de 100 paneles 3D para postprocesamiento en G-code con Biese Rover y Holzher Linx", "Desarrollo de nuevos productos como paneles de pared 3D, pantallas y esculturas en alto relieve utilizando Aspire", "Dibujo de gabinetes en formatos SolidWorks y AutoCAD para fabricación", "Elaboración de planos de taller (shop drawings)"] },
                  { period: "2012 — 2014", title: "Jefe de Planta", company: "MAJESTIC Industry – NJ, USA", functions: ["Dirección de planta industrial", "Gestión de personal", "Diseño de layout industrial", "Control de calidad y mejora de procesos"] },
                  { period: "2011 — 2012", title: "Project Manager – Contratos Gobierno", company: "Mechanical Factory O-AVIATION, New Jersey, USA", functions: ["Supervisión de cumplimiento contractual", "Coordinación de equipos técnicos", "Control de estándares ISO", "Gestión de calidad bajo especificaciones militares"] },
                  { period: "1999 — 2009", title: "Jefe CAD / ISO 9000 Auditor", company: "LAHMEYER WATER & ENERGY, Lima, Perú", functions: ["Coordinación multidisciplinaria en proyectos hidroenergéticos", "Gestión documental técnica", "Supervisión de estándares de calidad", "Implementación de base de datos técnica"] },
                ];
                const skillCategories = [
                  { title: "Inteligencia Artificial", tags: "ChatGPT, Copilot, Gemini, Claude, Lovable, Prompt Builder, NoteBookLM, Flux, Make, Kimi, Antigravity, Github, Grok, Cowork, Prompt Design" },
                  { title: "Diseño & CAD", tags: "AutoCAD Expert, SolidWorks, Wix, UX Design" },
                  { title: "Gestión Industrial", tags: "U2 Software ERP, ISO 9000, CNC Software, Vectric" },
                  { title: "Comercio Internacional", tags: "MFG.COM, Alibaba, Procurement, Logistics" },
                  { title: "Competencias Directivas", tags: "Articulación Universidad-Empresa, Innovación Productiva, Evaluación de Contratos, Modernización con IA" },
                  { title: "Software & Tools", tags: "MS Office, CNC Center, GPT for Coding" },
                ];
                const websites = [
                  { title: "Ozonomach", url: "www.ozonomach.com" },
                  { title: "Rank Peru", url: "www.rankperu.com" },
                  { title: "Macro Number", url: "www.macronumber.com" },
                  { title: "Gestión Proyectos", url: "www.gestionproyectos.com" },
                ];
                const books = [
                  { title: "Electicismo IA: la llave de un desarrollo postergado", subtitle: "Una visión transformadora para América Latina", description: "Explora cómo la inteligencia artificial puede ser el catalizador que América Latina necesita para cerrar brechas históricas de desarrollo, modernizar sus estructuras productivas y competir en la economía global del siglo XXI." },
                  { title: "China, el universo que está enseñando a Occidente", subtitle: "Lecciones de una civilización milenaria", description: "Un análisis profundo sobre las lecciones que el modelo de desarrollo chino ofrece a Occidente, desde su enfoque en la planificación estratégica de largo plazo hasta su integración de tecnología y tradición en la construcción de una superpotencia moderna." },
                ];
                const children: InstanceType<typeof Paragraph>[] = [];
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WALTER RAMÍREZ", bold: true, size: 36, font: "Arial" })] }));
                children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "MBA — Ingeniero Industrial", size: 24, color: "555555" })] }));
                children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "Transferencia Tecnológica & Modernización Productiva con IA", size: 20, color: "666666", italics: true })] }));
                children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [new TextRun({ text: "Lima, Perú | ramirezw2010@gmail.com | +51 958 188 762 | linkedin.com/in/walter-ramirez", size: 20, color: "666666" })] }));
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 }, children: [new TextRun({ text: "PERFIL PROFESIONAL", bold: true, size: 26 })] }));
                children.push(new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Ingeniero Industrial con más de 30 años de experiencia en dirección técnica, gestión industrial, control de calidad y ejecución de proyectos de infraestructura y manufactura, incluyendo contratos gubernamentales internacionales.", size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Parte del equipo de proyectos de energía e industria, evaluación técnica de contratos públicos, gestión ISO 9000, como CAD manager y también jefe de producción de planta industrial, innovación productiva para MYPES e implementación de inteligencia artificial en procesos administrativos.", size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Experiencia Internacional:", bold: true, size: 22 })] }));
                ["Proyectos hidroenergéticos en Perú", "Manufactura industrial en EE.UU.", "Gestión de producción y calidad", "Consultoría técnica internacional"].forEach(h => {
                  children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [new TextRun({ text: `• ${h}`, size: 22 })] }));
                });
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "EXPERIENCIA PROFESIONAL", bold: true, size: 26 })] }));
                experiences.forEach(exp => {
                  children.push(new Paragraph({ spacing: { before: 200, after: 60 }, children: [new TextRun({ text: exp.title, bold: true, size: 24 })] }));
                  children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: exp.company, size: 20, italics: true, color: "555555" })] }));
                  children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: exp.period, size: 20, color: "666666" })] }));
                  exp.functions.forEach(fn => {
                    children.push(new Paragraph({ spacing: { after: 40 }, indent: { left: 360 }, children: [new TextRun({ text: `• ${fn}`, size: 22 })] }));
                  });
                });
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "HABILIDADES TÉCNICAS", bold: true, size: 26 })] }));
                skillCategories.forEach(cat => {
                  children.push(new Paragraph({ spacing: { before: 100, after: 60 }, children: [new TextRun({ text: cat.title, bold: true, size: 22 })] }));
                  children.push(new Paragraph({ spacing: { after: 80 }, indent: { left: 360 }, children: [new TextRun({ text: cat.tags, size: 20, color: "444444" })] }));
                });
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "SITIOS WEB PROPIOS", bold: true, size: 26 })] }));
                websites.forEach(site => {
                  children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [new TextRun({ text: `• ${site.title} — ${site.url}`, size: 22 })] }));
                });
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "PROYECTOS DE LIBROS", bold: true, size: 26 })] }));
                books.forEach(book => {
                  children.push(new Paragraph({ spacing: { before: 100, after: 60 }, children: [new TextRun({ text: book.title, bold: true, size: 22 })] }));
                  children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: book.subtitle, size: 20, italics: true, color: "555555" })] }));
                  children.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: book.description, size: 20 })] }));
                });
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "EDUCACIÓN", bold: true, size: 26 })] }));
                children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "MBA — Master of Business Administration", bold: true, size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 120 }, indent: { left: 360 }, children: [new TextRun({ text: "Webber International University, Florida, USA", size: 20, color: "555555" })] }));
                children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Ingeniero Industrial", bold: true, size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 120 }, indent: { left: 360 }, children: [new TextRun({ text: "Universidad Inca Garcilaso de la Vega, Perú", size: 20, color: "555555" })] }));
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "IDIOMAS", bold: true, size: 26 })] }));
                [{ name: "Español", level: "Nativo" }, { name: "English", level: "Avanzado" }, { name: "Chinese", level: "En progreso" }, { name: "German", level: "En progreso" }].forEach(lang => {
                  children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [new TextRun({ text: `• ${lang.name} — ${lang.level}`, size: 22 })] }));
                });
                children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "CONTACTO", bold: true, size: 26 })] }));
                children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [new TextRun({ text: "• Email: ramirezw2010@gmail.com", size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [new TextRun({ text: "• Teléfono: +51 958 188 762", size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [new TextRun({ text: "• LinkedIn: linkedin.com/in/walter-ramirez", size: 22 })] }));
                children.push(new Paragraph({ spacing: { after: 200 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Lima, Perú — Disponible para proyectos remotos e internacionales", size: 20, italics: true, color: "666666" })] }));
                const doc = new Document({
                  styles: { default: { document: { run: { font: "Arial", size: 22 } } } },
                  sections: [{ children }],
                });
                const blob = await Packer.toBlob(doc);
                saveAs(blob, "Walter-Ramirez-CV.docx");
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-lg border transition-all hover:-translate-y-0.5 cursor-pointer bg-transparent"
              style={{ borderColor: "hsl(var(--cyber-pink))", color: "hsl(var(--cyber-pink))" }}
            >
              <Download className="w-5 h-5" /> {t("contact.cv")}
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-mono text-sm cyber-glow">{t("contact.footer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
