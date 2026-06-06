export const siteConfig = {
  name: "Importcampos",
  title: "Importcampos — Importación, Enderezado y Pintura de Vehículos",
  tagline: "De Cero a Perfecto.",
  description:
    "Importadora de vehículos en Asunción, Paraguay. Especialistas en importación, reparación mecánica, enderezado con medición láser y pintura profesional. Transformamos vehículos dañados en obras maestras.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://importcampos.com",
  locale: "es_PY",
  email: "info@importcampos.com",
  location: "Asunción, Paraguay",
  keywords: [
    "importación de vehículos",
    "enderezado de carrocería",
    "pintura automotriz",
    "reparación de vehículos",
    "restauración de autos",
    "chapa y pintura",
    "Importcampos",
    "Paraguay",
    "Asunción",
  ],
  services: [
    "Importación de vehículos",
    "Reparación mecánica",
    "Enderezado y chapa",
    "Pintura automotriz",
  ],
} as const;
