"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#transformaciones", label: "Transformaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur border-b border-[#BF1725]/30">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#BF1725] font-bold text-xl tracking-tight">
            IMPORT<span className="text-[#F2F2F2]">CAMPOS</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-[#F2F2F2]/70 hover:text-[#BF1725] transition-colors duration-200 uppercase tracking-wider"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2 bg-[#BF1725] text-[#F2F2F2] text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#BF1736] transition-colors"
        >
          Cotizar
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F2F2F2] p-2"
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
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#BF1725]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[#F2F2F2]/70 hover:text-[#BF1725] transition-colors uppercase tracking-wider text-sm"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2 bg-[#BF1725] text-[#F2F2F2] text-sm font-semibold uppercase tracking-wider rounded"
          >
            Cotizar
          </Link>
        </div>
      )}
    </header>
  );
}
