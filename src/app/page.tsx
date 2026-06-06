import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TransformacionesSection from "@/components/TransformacionesSection";
import ServiciosSection from "@/components/ServiciosSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
