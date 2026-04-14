import { useRef } from "react";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeyesTechModalProps {
  open: boolean;
  onClose: () => void;
}

const LeyesTechModal = ({ open, onClose }: LeyesTechModalProps) => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;
    const canvas = await html2canvas(contentRef.current, { backgroundColor: "#06090f", scale: 2 });
    const link = document.createElement("a");
    link.download = "Leyes-Tech-Agenda.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleDownloadDoc = async () => {
    const doc = new Document({
      styles: {
        default: { document: { run: { font: "Arial", size: 24, color: "FFFFFF" } } },
        paragraphStyles: [
          { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
            run: { size: 36, bold: true, font: "Arial", color: "00E5FF" },
            paragraph: { spacing: { before: 240, after: 240 }, alignment: AlignmentType.CENTER } },
          { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
            run: { size: 28, bold: true, font: "Arial", color: "FFFFFF" },
            paragraph: { spacing: { before: 200, after: 120 } } },
        ]
      },
      sections: [{
        properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
        children: [
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "// Documento Ejecutivo", font: "Courier New", size: 18, color: "FFB300", allCaps: true })] }),
          new Paragraph({ spacing: { after: 200 }, alignment: AlignmentType.CENTER, children: [
            new TextRun({ text: "Resumen Ejecutivo:", size: 36, bold: true, color: "FFFFFF", font: "Arial" }),
            new TextRun({ text: "\nAgenda de Modernización del Perú", size: 36, bold: true, color: "00E5FF", font: "Arial", break: 1 }),
          ]}),
          new Paragraph({ spacing: { before: 300, after: 120 }, children: [new TextRun({ text: "1. ", bold: true, color: "00E5FF", size: 28 }), new TextRun({ text: "Perfil del Consultor Técnico", bold: true, size: 28, color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Ing. Ind. Walter Ramírez, ", bold: true, color: "FFFFFF" }), new TextRun({ text: "MBA (Florida, USA)", bold: true, color: "FFB300" }), new TextRun({ text: ".", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Más de ", color: "CCCCCC" }), new TextRun({ text: "30 años de experiencia internacional", bold: true, color: "00E5FF" }), new TextRun({ text: " dividido en proyectos de infraestructura, diseño, manufactura y gestión de contratos, compras, docencia en Perú, EE.UU. y China.", color: "CCCCCC" })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Experto en auditoría ", color: "CCCCCC" }), new TextRun({ text: "ISO 9000", bold: true, color: "00E5FF" }), new TextRun({ text: " y aplicación de ", color: "CCCCCC" }), new TextRun({ text: "CAD e IA", bold: true, color: "00E5FF" }), new TextRun({ text: " para la eficiencia gubernamental.", color: "CCCCCC" })] }),
          new Paragraph({ spacing: { before: 300, after: 120 }, children: [new TextRun({ text: "2. ", bold: true, color: "FF4D6A", size: 28 }), new TextRun({ text: "Diagnóstico Crítico", bold: true, size: 28, color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Pérdida por Corrupción: ", bold: true, color: "FF4D6A" }), new TextRun({ text: "~10%", bold: true, color: "FFFFFF" }), new TextRun({ text: " del presupuesto anual.", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Ineficiencia en Obras: ", bold: true, color: "FFB300" }), new TextRun({ text: "~30%", bold: true, color: "FFFFFF" }), new TextRun({ text: " con sobrecostos y baja durabilidad.", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Baja Competitividad: ", bold: true, color: "00E5FF" }), new TextRun({ text: "Escasa integración con mercados masivos (China/India).", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { before: 300, after: 120 }, children: [new TextRun({ text: "3. ", bold: true, color: "FFB300", size: 28 }), new TextRun({ text: "Propuestas de Ley — 1er Año de Legislatura", bold: true, size: 28, color: "FFFFFF" })] }),
          ...[
            { color: "00E5FF", title: "Ley de Trazabilidad Blockchain", desc: "Registro inmutable de contratos y auditoría en tiempo real para eliminar la manipulación." },
            { color: "FFB300", title: "Ley de Estándares de Construcción", desc: "Garantizar una vida útil mínima de 20–30 años mediante supervisión digital obligatoria." },
            { color: "00E676", title: "Ley de Movilidad Sostenible", desc: "Infraestructura segregada para transporte eléctrico y bicicletas para reducir el tráfico." },
            { color: "00E5FF", title: "Ley Marketplace Perú Global", desc: "Plataforma estatal para exportación directa, facilitando el acceso a mercados globales." },
          ].flatMap(law => [
            new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: `▸ ${law.title}`, bold: true, color: law.color })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: law.desc, color: "FFFFFF" })] }),
          ]),
          new Paragraph({ spacing: { before: 300, after: 120 }, children: [new TextRun({ text: "4. ", bold: true, color: "00E676", size: 28 }), new TextRun({ text: "Recomendaciones Estratégicas — Primeros 6–12 meses", bold: true, size: 28, color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "● ", color: "00E5FF" }), new TextRun({ text: "Implementar pilotos regionales de bajo costo para demostrar resultados rápidos en transparencia.", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "● ", color: "FFB300" }), new TextRun({ text: "Priorizar la participación en comisiones de Fiscalización o Transportes para liderar la agenda técnica.", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "● ", color: "00E676" }), new TextRun({ text: "Fomentar Alianzas Público-Privadas para el financiamiento de la modernización tecnológica.", color: "FFFFFF" })] }),
          new Paragraph({ spacing: { before: 400 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "// AGENDA DE MODERNIZACIÓN DEL PERÚ", font: "Courier New", size: 18, color: "888888" })] }),
        ]
      }]
    });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Leyes-Tech-Agenda.docx");
  };

  if (!open) return null;

  const laws = [
    { color: "hsl(var(--cyber-cyan))", title: t("leyes.card3.law1"), desc: t("leyes.card3.law1.desc") },
    { color: "#ffb300", title: t("leyes.card3.law2"), desc: t("leyes.card3.law2.desc") },
    { color: "#00e676", title: t("leyes.card3.law3"), desc: t("leyes.card3.law3.desc") },
    { color: "hsl(var(--cyber-cyan))", title: t("leyes.card3.law4"), desc: t("leyes.card3.law4.desc") },
  ];

  return (
    <div
      className="fixed inset-0 z-[999] overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="max-w-[820px] mx-auto py-8 px-4">
        <div className="flex justify-end gap-3 mb-4">
          <button onClick={handleDownload} className="bg-transparent border px-5 py-2 rounded-md cursor-pointer font-mono text-xs tracking-widest transition-all hover:bg-[hsl(var(--cyber-cyan)/0.15)]" style={{ borderColor: "hsl(var(--cyber-cyan))", color: "hsl(var(--cyber-cyan))" }}>
            {t("leyes.download.png")}
          </button>
          <button onClick={handleDownloadDoc} className="bg-transparent border px-5 py-2 rounded-md cursor-pointer font-mono text-xs tracking-widest transition-all hover:bg-[hsl(var(--cyber-cyan)/0.15)]" style={{ borderColor: "hsl(var(--cyber-cyan))", color: "hsl(var(--cyber-cyan))" }}>
            {t("leyes.download.doc")}
          </button>
          <button onClick={onClose} className="bg-transparent border px-5 py-2 rounded-md cursor-pointer font-mono text-xs tracking-widest transition-all hover:bg-[hsl(var(--cyber-cyan)/0.15)]" style={{ borderColor: "hsl(var(--cyber-cyan))", color: "hsl(var(--cyber-cyan))" }}>
            {t("leyes.close")}
          </button>
        </div>

        <div ref={contentRef} className="rounded-2xl p-10 relative overflow-hidden" style={{ background: "#06090f", border: "1px solid hsl(var(--cyber-cyan) / 0.2)" }}>
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyber-cyan)), transparent)", opacity: 0.8 }} />

          <div className="text-center mb-9">
            <p className="text-[11px] uppercase tracking-[0.4em] font-mono" style={{ color: "#ffb300" }}>{t("leyes.executive")}</p>
            <h1 className="mt-2.5 font-bold leading-tight text-foreground" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              {t("leyes.heading1")}<br />
              <span className="cyber-glow">{t("leyes.heading2")}</span>
            </h1>
          </div>

          {/* Card 1 */}
          <div className="rounded-xl p-6 mb-5" style={{ background: "#0a1019", border: "1px solid hsl(var(--cyber-cyan) / 0.15)" }}>
            <div className="flex items-start gap-3 mb-3.5">
              <div className="min-w-8 w-8 h-8 rounded-md flex items-center justify-center font-bold font-mono" style={{ background: "hsl(var(--cyber-cyan))", color: "#06090f" }}>1</div>
              <h2 className="text-base font-bold text-foreground pt-1">{t("leyes.card1.title")}</h2>
            </div>
            <div className="pl-2.5 ml-5.5" style={{ borderLeft: "1px solid hsl(var(--cyber-cyan) / 0.2)" }}>
              <p className="font-semibold text-foreground mb-2.5">{t("leyes.card1.p1")}<span style={{ color: "#ffb300" }}>{t("leyes.card1.p1b")}</span>.</p>
              <p className="text-muted-foreground mb-2.5">{t("leyes.card1.p2a")}<span className="cyber-glow font-semibold">{t("leyes.card1.p2b")}</span>{t("leyes.card1.p2c")}</p>
              <p className="text-muted-foreground">{t("leyes.card1.p3a")}<span className="cyber-glow">{t("leyes.card1.p3b")}</span>{t("leyes.card1.p3c")}<span className="cyber-glow">{t("leyes.card1.p3d")}</span>{t("leyes.card1.p3e")}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-6 mb-5" style={{ background: "#0a1019", border: "1px solid rgba(255,77,106,0.2)" }}>
            <div className="flex items-start gap-3 mb-3.5">
              <div className="min-w-8 w-8 h-8 rounded-md flex items-center justify-center font-bold font-mono" style={{ background: "#ff4d6a", color: "#fff" }}>2</div>
              <h2 className="text-base font-bold text-foreground pt-1">{t("leyes.card2.title")}</h2>
            </div>
            <div className="pl-2.5 ml-5.5 flex flex-col gap-2.5" style={{ borderLeft: "1px solid rgba(255,77,106,0.3)" }}>
              <div><span className="font-semibold" style={{ color: "#ff4d6a" }}>{t("leyes.card2.l1a")}</span> <span className="font-bold">{t("leyes.card2.l1b")}</span>{t("leyes.card2.l1c")}</div>
              <div><span className="font-semibold" style={{ color: "#ffb300" }}>{t("leyes.card2.l2a")}</span> <span className="font-bold">{t("leyes.card2.l2b")}</span>{t("leyes.card2.l2c")}</div>
              <div><span className="font-semibold cyber-glow">{t("leyes.card2.l3a")}</span>{t("leyes.card2.l3b")}</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-6 mb-5" style={{ background: "#0a1019", border: "1px solid rgba(255,179,0,0.2)" }}>
            <div className="flex items-start gap-3 mb-3.5">
              <div className="min-w-8 w-8 h-8 rounded-md flex items-center justify-center font-bold font-mono" style={{ background: "#ffb300", color: "#06090f" }}>3</div>
              <h2 className="text-base font-bold text-foreground pt-1">{t("leyes.card3.title")}</h2>
            </div>
            <div className="pl-2.5 ml-5.5 flex flex-col gap-2.5" style={{ borderLeft: "1px solid rgba(255,179,0,0.3)" }}>
              {laws.map((law) => (
                <div key={law.title} className="p-2.5 rounded" style={{ background: `${law.color}10`, borderLeft: `2px solid ${law.color}` }}>
                  <p className="font-semibold mb-1" style={{ color: law.color }}>{law.title}</p>
                  <p className="text-foreground text-sm">{law.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl p-6 mb-7" style={{ background: "#0a1019", border: "1px solid rgba(0,230,118,0.2)" }}>
            <div className="flex items-start gap-3 mb-3.5">
              <div className="min-w-8 w-8 h-8 rounded-md flex items-center justify-center font-bold font-mono" style={{ background: "#00e676", color: "#06090f" }}>4</div>
              <h2 className="text-base font-bold text-foreground pt-1">{t("leyes.card4.title")}</h2>
            </div>
            <div className="pl-2.5 ml-5.5 flex flex-col gap-2.5" style={{ borderLeft: "1px solid rgba(0,230,118,0.3)" }}>
              <div><span className="mr-2 cyber-glow">●</span>{t("leyes.card4.r1")}</div>
              <div><span className="mr-2" style={{ color: "#ffb300" }}>●</span>{t("leyes.card4.r2")}</div>
              <div><span className="mr-2" style={{ color: "#00e676" }}>●</span>{t("leyes.card4.r3")}</div>
            </div>
          </div>

          <div className="text-center pt-5" style={{ borderTop: "1px solid hsl(var(--cyber-cyan) / 0.1)" }}>
            <p className="text-[11px] text-muted-foreground font-mono tracking-[0.15em]">{t("leyes.footer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeyesTechModal;
