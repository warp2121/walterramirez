import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavbarProps {
  onOpenLeyesTech: () => void;
}

const Navbar = ({ onOpenLeyesTech }: NavbarProps) => {
  const { lang, setLang, t } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#perfil", label: t("nav.perfil") },
    { href: "#experiencia", label: t("nav.experiencia") },
    { href: "#habilidades", label: t("nav.habilidades") },
    { href: "#websites", label: t("nav.websites") },
    { href: "#libros", label: t("nav.libros") },
    { href: "#formacion", label: t("nav.formacion") },
    { href: "#contacto", label: t("nav.contacto") },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const cur = window.scrollY;
      setHidden(cur > lastScrollY && cur > 100);
      lastScrollY = cur;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-8 py-4 backdrop-blur-xl border-b border-border transition-transform duration-300 ${hidden ? "-translate-y-full" : ""}`}
      style={{ background: "hsl(var(--background) / 0.8)" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="font-mono text-sm font-semibold cyber-glow">WR.</a>

        <button
          className="md:hidden bg-transparent border-none text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-6 absolute md:relative top-full left-0 right-0 md:top-auto bg-background md:bg-transparent border-b md:border-none border-border p-4 md:p-0 items-start md:items-center`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="nav-link-cyber bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onOpenLeyesTech}
            className="font-mono text-xs cyber-glow border px-3 py-1.5 rounded-md cursor-pointer bg-transparent transition-all hover:bg-[hsl(var(--cyber-cyan)/0.15)]"
            style={{
              borderColor: "hsl(var(--cyber-cyan))",
              boxShadow: "0 0 12px hsl(var(--cyber-cyan) / 0.3)",
            }}
          >
            Leyes Tech
          </button>

          {/* Language flags */}
          <div className="flex items-center gap-1.5 ml-0 md:ml-2">
            <button
              onClick={() => setLang("es")}
              className={`w-8 h-6 rounded overflow-hidden border-2 transition-all cursor-pointer ${lang === "es" ? "border-[hsl(var(--cyber-cyan))] shadow-[0_0_10px_hsl(var(--cyber-cyan)/0.5)]" : "border-transparent opacity-50 hover:opacity-80"}`}
              aria-label="Español"
              title="Español"
            >
              <svg viewBox="0 0 750 500" className="w-full h-full">
                <rect width="750" height="500" fill="#c60b1e"/>
                <rect width="750" height="250" y="125" fill="#ffc400"/>
              </svg>
            </button>
            <button
              onClick={() => setLang("en")}
              className={`w-8 h-6 rounded overflow-hidden border-2 transition-all cursor-pointer ${lang === "en" ? "border-[hsl(var(--cyber-cyan))] shadow-[0_0_10px_hsl(var(--cyber-cyan)/0.5)]" : "border-transparent opacity-50 hover:opacity-80"}`}
              aria-label="English"
              title="English"
            >
              <svg viewBox="0 0 60 30" className="w-full h-full">
                <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
