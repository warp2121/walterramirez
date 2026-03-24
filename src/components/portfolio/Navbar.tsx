import { useState, useEffect } from "react";

const navItems = [
  { href: "#perfil", label: "Perfil" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#websites", label: "Websites" },
  { href: "#libros", label: "Libros" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

interface NavbarProps {
  onOpenLeyesTech: () => void;
}

const Navbar = ({ onOpenLeyesTech }: NavbarProps) => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
