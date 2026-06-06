import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TransformacionesSection from "@/components/TransformacionesSection";
import ServiciosSection from "@/components/ServiciosSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <TransformacionesSection />
        <ServiciosSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
