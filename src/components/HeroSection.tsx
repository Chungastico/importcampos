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
    <section ref={container} className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-image">
        <Image
          src="/hero-nissan.png"
          alt="Premium Restored Nissan Murano"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* Gradient overlays for depth in a light theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-6 flex items-center gap-4">
            <div className="reveal-line h-px w-12 bg-[#BF1725] origin-left" />
            <span className="reveal-text text-[#BF1725] text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
              El arte de la restauración
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 text-gray-900">
            <div className="overflow-hidden pb-2">
              <span className="reveal-text inline-block">De Cero</span>
            </div>
            <div className="overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#BF1725] to-[#ff3b4b] pb-2">
              <span className="reveal-text inline-block">a Perfecto.</span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12">
            <p className="reveal-text text-gray-600 text-lg md:text-2xl max-w-2xl leading-relaxed font-light">
              Importamos y transformamos vehículos destrozados en obras maestras absolutas. 
              <br className="hidden md:block" /> Vive la evolución en tiempo real.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#transformaciones" className="reveal-btn group relative px-10 py-5 bg-[#BF1725] text-white font-bold uppercase tracking-widest text-sm overflow-hidden rounded-sm transition-all hover:shadow-[0_0_40px_rgba(191,23,37,0.3)]">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Descubrir Magia</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </a>
            <a href="#servicios" className="reveal-btn group flex items-center gap-3 px-10 py-5 border border-gray-300 text-gray-900 font-bold uppercase tracking-widest text-sm transition-all hover:bg-gray-900 hover:text-white rounded-sm backdrop-blur-sm bg-white/50 hover:bg-gray-900/100">
              <span>Nuestros Servicios</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
