export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a0305] to-[#0D0D0D]" />

      {/* Animated red accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BF1725]/40 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BF1725]/20 to-transparent" />
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #BF172520, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #BF173620, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
          Importación · Reparación · Transformación
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6 tracking-tight">
          <span className="text-[#F2F2F2]">De destrozado</span>
          <br />
          <span className="text-[#BF1725]">a perfecto.</span>
        </h1>

        <p className="text-[#F2F2F2]/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Importamos vehículos y los devolvemos a su mejor versión.
          Enderezado, pintura y reparación integral — visto en tiempo real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#transformaciones"
            className="px-8 py-4 bg-[#BF1725] text-[#F2F2F2] font-bold uppercase tracking-wider rounded hover:bg-[#BF1736] transition-colors text-sm"
          >
            Ver transformaciones
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 border border-[#F2F2F2]/20 text-[#F2F2F2]/70 font-bold uppercase tracking-wider rounded hover:border-[#BF1725] hover:text-[#BF1725] transition-colors text-sm"
          >
            Nuestros servicios
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F2F2F2]/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#BF1725]/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
