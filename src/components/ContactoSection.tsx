export default function ContactoSection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-tight">
            Cotiza tu vehículo
          </h2>
          <div className="w-16 h-1 bg-[#BF1725] mx-auto mt-6" />
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-widest">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#BF1725] focus:ring-1 focus:ring-[#BF1725] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-widest">Teléfono / WhatsApp</label>
            <input
              type="tel"
              placeholder="+595 9XX XXX XXX"
              className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#BF1725] focus:ring-1 focus:ring-[#BF1725] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-widest">Servicio</label>
            <select className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-[#BF1725] focus:ring-1 focus:ring-[#BF1725] transition-all appearance-none">
              <option value="">Seleccionar...</option>
              <option value="importacion">Importación de vehículo</option>
              <option value="reparacion">Reparación mecánica</option>
              <option value="enderezado">Enderezado y chapa</option>
              <option value="pintura">Pintura</option>
              <option value="completo">Servicio completo</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-widest">Vehículo (Marca/Modelo/Año)</label>
            <input
              type="text"
              placeholder="Ej: Toyota Hilux 2020"
              className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#BF1725] focus:ring-1 focus:ring-[#BF1725] transition-all"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-widest">Descripción del trabajo</label>
            <textarea
              rows={4}
              placeholder="Describe el estado del vehículo o el trabajo requerido..."
              className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#BF1725] focus:ring-1 focus:ring-[#BF1725] transition-all resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-4 bg-[#BF1725] text-white font-bold uppercase tracking-widest rounded-sm hover:bg-[#a0131e] transition-colors shadow-sm"
            >
              Enviar cotización
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-12 text-center">
          {[
            { label: "WhatsApp", value: "+595 9XX XXX XXX", icon: "💬" },
            { label: "Email", value: "info@importcampos.com", icon: "✉️" },
            { label: "Ubicación", value: "Asunción, Paraguay", icon: "📍" },
          ].map((c) => (
            <div key={c.label}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{c.label}</p>
              <p className="text-gray-900 text-sm font-medium">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
