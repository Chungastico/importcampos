import { siteConfig } from "./site";

export const pinturaMeta = {
  title: "Pintura Automotriz",
  description:
    "Pintura automotriz profesional en Asunción, Paraguay. Cabina de pintura, mezclas computarizadas y acabado de fábrica. Repintado total, parcial y corrección de color original.",
  path: "/pintura",
  keywords: [
    "pintura automotriz Paraguay",
    "pintura de autos Asunción",
    "repintado de vehículos",
    "cabina de pintura automotriz",
    "mezcla de color automotriz",
    "pintura carrocería",
    "Importcampos pintura",
  ],
} as const;

export const pinturaUrl = `${siteConfig.url}${pinturaMeta.path}`;

export const procesoPintura = [
  {
    step: "01",
    title: "Preparación de superficie",
    description:
      "Lijado, masillado y limpieza profunda de la carrocería para garantizar una base perfecta antes de aplicar la pintura.",
  },
  {
    step: "02",
    title: "Igualación de color",
    description:
      "Mezcla computarizada del tono exacto del fabricante para que el acabado sea invisible y coincida con el color original.",
  },
  {
    step: "03",
    title: "Aplicación en cabina",
    description:
      "Pintura en cabina profesional con control de polvo y humedad para un acabado uniforme, brillante y duradero.",
  },
  {
    step: "04",
    title: "Pulido y entrega",
    description:
      "Acabado final con pulido y verificación de calidad para entregarte un vehículo con aspecto de fábrica.",
  },
] as const;

export const serviciosPintura = [
  {
    icon: "🎨",
    title: "Repintado total",
    description:
      "Renovación completa de la carrocería con preparación profesional y acabado de alta durabilidad.",
  },
  {
    icon: "✨",
    title: "Repintado parcial",
    description:
      "Reparación de paneles, puertas, capó y paragolpes con integración perfecta del color original.",
  },
  {
    icon: "🔬",
    title: "Mezcla computarizada",
    description:
      "Tecnología de precisión para replicar el código de color del fabricante al milímetro.",
  },
  {
    icon: "🏭",
    title: "Cabina profesional",
    description:
      "Entorno controlado libre de impurezas para un acabado liso, sin partículas ni imperfecciones.",
  },
  {
    icon: "💎",
    title: "Pulido y brillo",
    description:
      "Tratamiento final que realza el brillo y protege la pintura para un resultado impecable.",
  },
  {
    icon: "🛡️",
    title: "Protección anticorrosiva",
    description:
      "Aplicación de imprimación y selladores que prolongan la vida útil de la pintura y la carrocería.",
  },
] as const;
