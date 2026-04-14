import { useState, useEffect, useRef } from "react";
import { FileText, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Paper {
  id: string;
  titleKey: string;
  sections: { headingKey: string; contentKey: string }[];
  tags: string[];
}

const papers: Paper[] = [
  {
    id: "circular-manufacturing",
    titleKey: "papers.1.title",
    sections: [
      { headingKey: "papers.1.s1.heading", contentKey: "papers.1.s1.content" },
      { headingKey: "papers.1.s2.heading", contentKey: "papers.1.s2.content" },
      { headingKey: "papers.1.s3.heading", contentKey: "papers.1.s3.content" },
      { headingKey: "papers.1.s4.heading", contentKey: "papers.1.s4.content" },
      { headingKey: "papers.1.s5.heading", contentKey: "papers.1.s5.content" },
      { headingKey: "papers.1.s6.heading", contentKey: "papers.1.s6.content" },
      { headingKey: "papers.1.s7.heading", contentKey: "papers.1.s7.content" },
    ],
    tags: ["AI", "Circular Economy", "Remanufacturing"],
  },
];

const PapersSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [selectedPaper, setSelectedPaper] = useState(papers[0].id);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const current = papers.find((p) => p.id === selectedPaper) || papers[0];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll(".paper-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedPaper]);

  return (
    <section
      id="papers"
      className="py-24 px-8 relative z-[1]"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--cyber-cyan) / 0.03) 50%, hsl(var(--background)) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">{t("papers.section")}</div>
          <h2
            className="text-foreground font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {t("papers.title")}
          </h2>
        </div>

        {/* Dropdown selector */}
        <div className="relative mb-10 max-w-md">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium text-foreground cursor-pointer bg-transparent transition-all"
            style={{
              border: "1px solid hsl(var(--cyber-cyan) / 0.3)",
              background: "hsl(var(--cyber-cyan) / 0.05)",
            }}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: "hsl(var(--cyber-cyan))" }} />
              {t(current.titleKey)}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              style={{ color: "hsl(var(--cyber-cyan))" }}
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-10 backdrop-blur-xl"
              style={{
                border: "1px solid hsl(var(--cyber-cyan) / 0.3)",
                background: "hsl(var(--background) / 0.95)",
                boxShadow: "0 8px 32px hsl(var(--cyber-cyan) / 0.15)",
              }}
            >
              {papers.map((paper) => (
                <button
                  key={paper.id}
                  onClick={() => {
                    setSelectedPaper(paper.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm cursor-pointer transition-all flex items-center gap-2 ${
                    selectedPaper === paper.id ? "cyber-glow" : "text-fg-muted hover:text-foreground"
                  }`}
                  style={{
                    background:
                      selectedPaper === paper.id ? "hsl(var(--cyber-cyan) / 0.1)" : "transparent",
                  }}
                >
                  <FileText className="w-3.5 h-3.5" />
                  {t(paper.titleKey)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Paper content */}
        <div ref={ref} className="space-y-6">
          <div
            className="paper-animate opacity-0 translate-y-8 transition-all duration-600 cyber-card rounded-2xl p-8 relative overflow-hidden"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--cyber-cyan)), transparent)",
                opacity: 0.7,
              }}
            />

            <h3 className="text-xl font-bold text-foreground mb-6 leading-tight">
              {t(current.titleKey)}
            </h3>

            {current.sections.map((section, i) => (
              <div key={i} className="mb-5">
                <h4
                  className="text-sm font-semibold uppercase tracking-wider mb-2 cyber-glow"
                >
                  {t(section.headingKey)}
                </h4>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {t(section.contentKey)}
                </p>
              </div>
            ))}

            <div
              className="flex flex-wrap items-center gap-3 mt-6 pt-6"
              style={{ borderTop: "1px solid hsl(var(--cyber-cyan) / 0.15)" }}
            >
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.7rem] font-medium uppercase tracking-wider"
                  style={{
                    background: "hsl(var(--cyber-cyan) / 0.1)",
                    border: "1px solid hsl(var(--cyber-cyan) / 0.25)",
                    color: "hsl(var(--cyber-cyan))",
                  }}
                >
                  <FileText className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PapersSection;
