export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#F2F2F2]/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[#BF1725] font-bold text-lg tracking-tight">
          IMPORT<span className="text-[#F2F2F2]/40">CAMPOS</span>
        </span>
        <p className="text-[#F2F2F2]/20 text-xs text-center">
          © {new Date().getFullYear()} Importcampos. Importación, enderezado y pintura de vehículos.
        </p>
        <div className="flex gap-6">
          {["Instagram", "Facebook", "WhatsApp"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-[#F2F2F2]/30 hover:text-[#BF1725] text-xs uppercase tracking-wider transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
