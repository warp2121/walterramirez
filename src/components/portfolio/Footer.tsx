import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-8 text-center text-sm text-foreground border-t border-border relative z-[1]">
      <p>{t("footer.line1")}</p>
      <p className="mt-2 font-mono text-xs cyber-glow">{t("footer.line2")}</p>
    </footer>
  );
};

export default Footer;
