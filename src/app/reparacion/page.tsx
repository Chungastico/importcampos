import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReparacionJsonLd from "@/components/ReparacionJsonLd";
import {
  areasReparacion,
  procesoReparacion,
  reparacionMeta,
  reparacionUrl,
} from "@/lib/reparacion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: reparacionMeta.title,
  description: reparacionMeta.description,
  keywords: [...reparacionMeta.keywords],
  alternates: {
    canonical: reparacionUrl,
  },
  openGraph: {
    title: `${reparacionMeta.title} | ${siteConfig.name}`,
    description: reparacionMeta.description,
    url: reparacionUrl,
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${reparacionMeta.title} | ${siteConfig.name}`,
    description: reparacionMeta.description,
  },
};

export default function ReparacionPage() {
  return (
    <>
      <ReparacionJsonLd />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F2F2F2] py-28 px-6">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#BF1725]" />
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C8C8C]">
                <li>
                  <Link href="/" className="hover:text-[#BF1725] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#BF1725] font-bold">Reparación</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-[#BF1725]" />
                <p className="text-[#BF1725] text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
                  Precisión y confianza
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-[#0D0D0D] mb-8">
                Reparación
                <span className="block text-[#BF1725]">de Vehículos</span>
              </h1>

              <p className="text-[#8C8C8C] text-lg md:text-xl leading-relaxed font-light mb-10">
                Diagnóstico computarizado y reparación mecánica profesional. Trabajamos
                motor, transmisión, frenos y suspensión para devolverle la confianza a tu
                vehículo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#BF1725] text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all hover:shadow-[0_8px_30px_rgba(191,23,37,0.35)]"
                >
                  Cotizar reparación
                </Link>
                <Link
                  href="/importaciones"
                  className="inline-flex items-center justify-center px-10 py-4 border border-[#0D0D0D]/20 text-[#0D0D0D] font-bold uppercase tracking-widest text-sm rounded-sm transition-all hover:border-[#BF1725] hover:text-[#BF1725]"
                >
                  Ver importaciones
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#BF1725]/40 via-[#BF1725]/10 to-transparent" />
        </section>

        {/* Áreas de reparación */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                Especialidades
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-tight">
                Áreas de reparación
              </h2>
              <div className="w-16 h-1 bg-[#BF1725] mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {areasReparacion.map((area) => (
                <article
                  key={area.title}
                  className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-[#BF1725] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-4xl mb-6">{area.icon}</div>
                  <h3 className="text-gray-900 font-black text-lg uppercase tracking-wide mb-3 group-hover:text-[#BF1725] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                Cómo trabajamos
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-tight">
                Proceso de reparación
              </h2>
              <div className="w-16 h-1 bg-[#BF1725] mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {procesoReparacion.map((paso) => (
                <article
                  key={paso.step}
                  className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-[#BF1725] transition-all duration-300 hover:shadow-lg"
                >
                  <span className="text-[#BF1725] text-3xl font-black">{paso.step}</span>
                  <h3 className="text-gray-900 font-black text-lg uppercase tracking-wide mt-4 mb-3 group-hover:text-[#BF1725] transition-colors">
                    {paso.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{paso.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats + CTA */}
        <section className="py-24 px-6 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#BF1725] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Experiencia comprobada
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#F2F2F2] leading-tight mb-12">
              Más de 500 reparaciones realizadas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
              {[
                { value: "500+", label: "Reparaciones realizadas" },
                { value: "100%", label: "Garantía de trabajo" },
                { value: "24h", label: "Respuesta a cotizaciones" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-black text-[#BF1725]">{stat.value}</div>
                  <div className="text-[#8C8C8C] text-sm font-bold mt-2 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#8C8C8C] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              ¿Tu vehículo presenta fallas mecánicas? Contáctanos y recibe un diagnóstico
              profesional con cotización detallada.
            </p>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#BF1725] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#BF1736] transition-colors text-sm shadow-sm"
            >
              Solicitar cotización
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
