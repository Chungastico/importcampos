import { siteConfig } from "./site";

export const importacionesMeta = {
  title: "Importación de Vehículos",
  description:
    "Importamos vehículos a Paraguay con documentación completa, verificación técnica y trámites aduaneros. Asesoría integral desde la compra hasta la entrega en Asunción.",
  path: "/importaciones",
  keywords: [
    "importación de vehículos Paraguay",
    "importar auto Asunción",
    "trámites aduaneros vehículos",
    "importadora de autos",
    "comprar vehículo en el exterior",
    "documentación vehicular Paraguay",
    "Importcampos importaciones",
  ],
} as const;

export const importacionesUrl = `${siteConfig.url}${importacionesMeta.path}`;

export const procesoImportacion = [
  {
    step: "01",
    title: "Asesoría y selección",
    description:
      "Te ayudamos a elegir el vehículo ideal según tu presupuesto, uso y preferencias. Evaluamos opciones en el mercado internacional.",
  },
  {
    step: "02",
    title: "Compra y verificación",
    description:
      "Gestionamos la compra con verificación técnica del estado del vehículo, historial y condiciones reales antes de importar.",
  },
  {
    step: "03",
    title: "Trámites aduaneros",
    description:
      "Nos encargamos de la documentación, despacho aduanero, impuestos y todos los requisitos legales para ingresar el vehículo a Paraguay.",
  },
  {
    step: "04",
    title: "Entrega y restauración",
    description:
      "Recibes tu vehículo listo para circular o, si lo necesitas, lo transformamos con nuestros servicios de enderezado y pintura.",
  },
] as const;

export const incluyeImportacion = [
  {
    title: "Documentación completa",
    description: "Título, factura, certificados y toda la papelería necesaria para la legalización del vehículo.",
  },
  {
    title: "Verificación técnica",
    description: "Inspección del estado mecánico, estructural y documental antes de confirmar la importación.",
  },
  {
    title: "Gestión aduanera",
    description: "Tramitación de importación, aranceles e impuestos con seguimiento transparente en cada etapa.",
  },
  {
    title: "Asesoría personalizada",
    description: "Acompañamiento directo desde la cotización hasta que el vehículo esté en tus manos.",
  },
  {
    title: "Opciones de financiamiento",
    description: "Te orientamos sobre alternativas de pago y costos totales para que tomes la mejor decisión.",
  },
  {
    title: "Servicio integral",
    description: "Si el vehículo llega dañado, lo restauramos con enderezado, pintura y reparación mecánica en el mismo lugar.",
  },
] as const;
