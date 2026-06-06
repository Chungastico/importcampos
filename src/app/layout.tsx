import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Importcampos — Importación, Enderezado y Pintura",
  description:
    "Importadora de vehículos especializada en reparación, enderezado y pintura. Transformamos tu vehículo de cero.",
  openGraph: {
    title: "Importcampos",
    description: "Importación, reparación, enderezado y pintura de vehículos.",
    siteName: "Importcampos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F2F2F2]">
        {children}
      </body>
    </html>
  );
}
