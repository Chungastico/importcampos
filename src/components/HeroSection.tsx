"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reveal the background
    tl.fromTo(
      ".bg-image",
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    );

    // Reveal text elements
    tl.fromTo(
      ".reveal-text",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
      "-=1.4"
    );

    // Reveal line
    tl.fromTo(
      ".reveal-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power3.inOut" },
      "-=1"
    );

    // Fade in buttons
    tl.fromTo(
      ".reveal-btn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.8"
    );

  }, { scope: container });

  return (
    <section
      id="inicio"
      ref={container}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#F2F2F2]"
    >
      {/* Subtle red accent top-left */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#BF1725]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32 lg:py-0">

        {/* — LEFT: text — */}
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="reveal-line h-px w-12 bg-[#BF1725] origin-left" />
            <span className="reveal-text text-[#BF1725] text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
              El arte de la restauración
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-[#0D0D0D]">
            <div className="overflow-hidden pb-2">
              <span className="reveal-text inline-block">De Cero</span>
            </div>
            <div className="overflow-hidden text-[#BF1725] pb-2">
              <span className="reveal-text inline-block">a Perfecto.</span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12">
            <p className="reveal-text text-[#8C8C8C] text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Importamos y transformamos vehículos destrozados en obras maestras absolutas.
              Vive la evolución en tiempo real.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#transformaciones"
              className="reveal-btn group relative px-10 py-4 bg-[#BF1725] text-white font-bold uppercase tracking-widest text-sm overflow-hidden rounded-sm transition-all hover:shadow-[0_8px_30px_rgba(191,23,37,0.35)]"
            >
              <span className="relative z-10">Descubrir Magia</span>
              <div className="absolute inset-0 h-full w-0 bg-white/15 transition-all duration-300 ease-out group-hover:w-full z-0" />
            </a>
            <a
              href="#servicios"
              className="reveal-btn px-10 py-4 border border-[#0D0D0D]/20 text-[#0D0D0D] font-bold uppercase tracking-widest text-sm transition-all hover:border-[#BF1725] hover:text-[#BF1725] rounded-sm"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>

        {/* — RIGHT: car image — */}
        <div className="bg-image relative flex items-center justify-center">
          <Image
            src="/hero-nissan.png"
            alt="Vehículo restaurado por Importcampos"
            width={900}
            height={600}
            className="w-full h-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#BF1725]/40 via-[#BF1725]/10 to-transparent" />
    </section>
  );
}
