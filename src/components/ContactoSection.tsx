export default function ContactoSection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#F2F2F2] leading-tight">
            Cotiza tu vehículo
          </h2>
          <div className="w-16 h-1 bg-[#BF1725] mx-auto mt-6" />
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#F2F2F2]/50 text-xs uppercase tracking-widest">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-[#F2F2F2]/5 border border-[#F2F2F2]/10 rounded px-4 py-3 text-[#F2F2F2] placeholder:text-[#F2F2F2]/20 focus:outline-none focus:border-[#BF1725] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#F2F2F2]/50 text-xs uppercase tracking-widest">Teléfono / WhatsApp</label>
            <input
              type="tel"
              placeholder="+595 9XX XXX XXX"
              className="bg-[#F2F2F2]/5 border border-[#F2F2F2]/10 rounded px-4 py-3 text-[#F2F2F2] placeholder:text-[#F2F2F2]/20 focus:outline-none focus:border-[#BF1725] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#F2F2F2]/50 text-xs uppercase tracking-widest">Servicio</label>
            <select className="bg-[#F2F2F2]/5 border border-[#F2F2F2]/10 rounded px-4 py-3 text-[#F2F2F2] focus:outline-none focus:border-[#BF1725] transition-colors appearance-none">
              <option value="" className="bg-[#0D0D0D]">Seleccionar...</option>
              <option value="importacion" className="bg-[#0D0D0D]">Importación de vehículo</option>
              <option value="reparacion" className="bg-[#0D0D0D]">Reparación mecánica</option>
              <option value="enderezado" className="bg-[#0D0D0D]">Enderezado y chapa</option>
              <option value="pintura" className="bg-[#0D0D0D]">Pintura</option>
              <option value="completo" className="bg-[#0D0D0D]">Servicio completo</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#F2F2F2]/50 text-xs uppercase tracking-widest">Vehículo (Marca / Modelo / Año)</label>
            <input
              type="text"
              placeholder="Ej: Toyota Hilux 2020"
              className="bg-[#F2F2F2]/5 border border-[#F2F2F2]/10 rounded px-4 py-3 text-[#F2F2F2] placeholder:text-[#F2F2F2]/20 focus:outline-none focus:border-[#BF1725] transition-colors"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[#F2F2F2]/50 text-xs uppercase tracking-widest">Descripción del trabajo</label>
            <textarea
              rows={4}
              placeholder="Describe el estado del vehículo o el trabajo requerido..."
              className="bg-[#F2F2F2]/5 border border-[#F2F2F2]/10 rounded px-4 py-3 text-[#F2F2F2] placeholder:text-[#F2F2F2]/20 focus:outline-none focus:border-[#BF1725] transition-colors resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-4 bg-[#BF1725] text-[#F2F2F2] font-bold uppercase tracking-widest rounded hover:bg-[#BF1736] transition-colors"
            >
              Enviar cotización
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#F2F2F2]/10 pt-12 text-center">
          {[
            { label: "WhatsApp", value: "+595 9XX XXX XXX", icon: "💬" },
            { label: "Email", value: "info@importcampos.com", icon: "✉️" },
            { label: "Ubicación", value: "Asunción, Paraguay", icon: "📍" },
          ].map((c) => (
            <div key={c.label}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <p className="text-[#F2F2F2]/40 text-xs uppercase tracking-widest mb-1">{c.label}</p>
              <p className="text-[#F2F2F2] text-sm">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
