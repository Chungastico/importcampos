const servicios = [
  {
    icon: "🚗",
    title: "Importación",
    description:
      "Importamos vehículos directamente con documentación completa, verificación técnica y trámites aduaneros incluidos.",
  },
  {
    icon: "🔧",
    title: "Reparación Mecánica",
    description:
      "Diagnóstico computarizado, reparación de motor, transmisión, sistema de frenos y suspensión.",
  },
  {
    icon: "🏗️",
    title: "Enderezado",
    description:
      "Corrección de chasis y estructura con equipos de última tecnología. Medición laser para garantizar alineación perfecta.",
  },
  {
    icon: "🎨",
    title: "Pintura",
    description:
      "Cabina de pintura profesional, mezclas computarizadas para coincidir exactamente con el color original del fabricante.",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Lo que hacemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#0D0D0D] leading-tight">
            Servicios
          </h2>
          <div className="w-16 h-1 bg-[#BF1725] mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-lg p-8 border border-[#0D0D0D]/10 hover:border-[#BF1725] transition-colors duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-[#0D0D0D] font-black text-lg uppercase tracking-wide mb-3 group-hover:text-[#BF1725] transition-colors">
                {s.title}
              </h3>
              <p className="text-[#0D0D0D]/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#0D0D0D]/10 pt-16">
          {[
            { value: "200+", label: "Vehículos importados" },
            { value: "500+", label: "Reparaciones realizadas" },
            { value: "100%", label: "Garantía de trabajo" },
            { value: "24h", label: "Respuesta a cotizaciones" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-black text-[#BF1725]">{stat.value}</div>
              <div className="text-[#0D0D0D]/60 text-sm mt-2 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
