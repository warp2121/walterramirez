const highlights = [
  "Proyectos hidroenergéticos en Perú",
  "Manufactura industrial en EE.UU.",
  "Gestión de producción y calidad",
  "Consultoría técnica internacional",
];

const ProfileSection = () => (
  <section id="perfil" className="py-24 px-8 relative z-[1]">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="section-number mb-2">01 // PERFIL</div>
        <h2 className="text-foreground font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
          Perfil Profesional
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4 md:col-span-1">
          <p className="text-lg text-foreground">
            Ingeniero Industrial con más de 30 años de experiencia en dirección técnica, gestión industrial, control de calidad y ejecución de proyectos de infraestructura y manufactura, incluyendo contratos gubernamentales internacionales.
          </p>
          <p className="text-foreground">
            Especialista en transferencia tecnológica en proyectos de energía e industria, evaluación técnica de contratos públicos, gestión ISO 9000, dirección de planta industrial, innovación productiva para MYPES e implementación de inteligencia artificial en procesos administrativos.
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col items-center gap-4">
          <div className="relative w-[200px] h-[200px]">
            <div className="absolute -inset-[6px] rounded-full border-2 border-transparent border-t-cyber-cyan border-r-cyber-cyan animate-spin-slow" />
            <div className="absolute -inset-3 rounded-full border border-transparent border-b-[hsl(var(--cyber-cyan)/0.3)] border-l-[hsl(var(--cyber-cyan)/0.3)] animate-spin-slower" />
            <div
              className="w-[200px] h-[200px] rounded-full border-[3px] flex items-center justify-center text-4xl font-bold cyber-glow bg-card"
              style={{ borderColor: "hsl(var(--cyber-cyan))", boxShadow: "0 0 30px hsl(var(--cyber-cyan) / 0.4), 0 0 60px hsl(var(--cyber-cyan) / 0.15)" }}
            >
              WR
            </div>
          </div>
          <div className="font-mono text-[0.7rem] cyber-glow tracking-[0.15em] text-center">// Walter Ramírez</div>
        </div>

        <div className="space-y-4 md:col-span-1">
          <h3 className="font-semibold mb-4 cyber-glow">Experiencia Internacional</h3>
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

export default ProfileSection;
