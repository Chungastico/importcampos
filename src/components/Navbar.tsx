"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/importaciones", label: "Importaciones" },
  { href: "/reparacion", label: "Reparación" },
  { href: "/pintura", label: "Pintura" },
  { href: "/#transformaciones", label: "Transformaciones" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/LogoImportcampos.svg"
            alt="Importcampos Logo"
            width={200}
            height={40}
            className="w-auto h-10"
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-gray-600 hover:text-[#BF1725] transition-colors duration-200 uppercase tracking-wider font-semibold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contacto"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#BF1725] text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#a0131e] transition-colors shadow-sm"
        >
          Cotizar
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#BF1725] transition-colors uppercase tracking-wider text-sm font-semibold py-2"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-[#BF1725] text-white text-sm font-bold uppercase tracking-wider rounded-sm mt-2"
          >
            Cotizar
          </Link>
        </div>
      )}
    </header>
  );
}
