import BeforeAfterSlider from "./BeforeAfterSlider";

const transformaciones = [
  {
    id: 1,
    title: "Toyota Hilux — Impacto frontal",
    description: "Reconstrucción completa de chasis, capó y paragolpes. Pintura metálica original.",
    beforeSrc: "/placeholder-before-1.jpg",
    afterSrc: "/placeholder-after-1.jpg",
  },
  {
    id: 2,
    title: "Nissan Frontier — Volcamiento",
    description: "Enderezado de cabina, techo, puertas laterales y repintura integral.",
    beforeSrc: "/placeholder-before-2.jpg",
    afterSrc: "/placeholder-after-2.jpg",
  },
  {
    id: 3,
    title: "Ford Ranger — Lateral derecho",
    description: "Reposición de paneles laterales, guardafangos y espejo. Trabajo de pintura invisible.",
    beforeSrc: "/placeholder-before-3.jpg",
    afterSrc: "/placeholder-after-3.jpg",
  },
];

export default function TransformacionesSection() {
  return (
    <section id="transformaciones" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Resultados reales
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-tight">
            Transformaciones
          </h2>
          <div className="w-16 h-1 bg-[#BF1725] mx-auto mt-6" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Arrastra el divisor para comparar el estado inicial y el resultado final de cada vehículo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {transformaciones.map((t) => (
            <BeforeAfterSlider
              key={t.id}
              title={t.title}
              description={t.description}
              beforeSrc={t.beforeSrc}
              afterSrc={t.afterSrc}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#BF1725] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#a0131e] transition-colors text-sm shadow-sm"
          >
            ¿Tienes un vehículo dañado? Escríbenos
          </a>
        </div>
      </div>
    </section>
  );
}
