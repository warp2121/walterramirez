import { useLanguage } from "@/contexts/LanguageContext";

const ProfileSection = () => {
  const { t } = useLanguage();

  const highlights = [t("profile.h1"), t("profile.h2"), t("profile.h3"), t("profile.h4")];

  return (
    <section id="perfil" className="py-24 px-8 relative z-[1]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-number mb-2">{t("profile.section")}</div>
          <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            {t("profile.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 md:col-span-1">
            <p className="text-lg text-foreground">{t("profile.p1")}</p>
            <p className="text-foreground">{t("profile.p2")}</p>
          </div>

          <div className="space-y-4 md:col-span-1">
            <h3 className="font-semibold mb-4 cyber-glow">{t("profile.intl")}</h3>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "hsl(var(--cyber-cyan))", boxShadow: "0 0 10px hsl(var(--cyber-cyan))" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
