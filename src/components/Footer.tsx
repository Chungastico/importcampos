import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/LogoImportcampos.svg"
          alt="Importcampos Logo"
          width={150}
          height={30}
          className="w-auto h-8"
        />
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Importcampos. Importación, enderezado y pintura de vehículos.
        </p>
        <div className="flex gap-6">
          {["Instagram", "Facebook", "WhatsApp"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-gray-500 hover:text-[#BF1725] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
