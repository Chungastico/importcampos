import { siteConfig } from "./site";

export const reparacionMeta = {
  title: "Reparación de Vehículos",
  description:
    "Reparación mecánica profesional en Asunción, Paraguay. Diagnóstico computarizado, motor, transmisión, frenos y suspensión. Devolvemos la confianza a tu vehículo.",
  path: "/reparacion",
  keywords: [
    "reparación de vehículos Paraguay",
    "reparación mecánica Asunción",
    "taller mecánico autos",
    "diagnóstico computarizado vehículos",
    "reparación de motor",
    "reparación de frenos y suspensión",
    "Importcampos reparación",
  ],
} as const;

export const reparacionUrl = `${siteConfig.url}${reparacionMeta.path}`;

export const procesoReparacion = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Evaluamos tu vehículo con diagnóstico computarizado para identificar fallas en motor, transmisión, frenos y suspensión con precisión.",
  },
  {
    step: "02",
    title: "Cotización transparente",
    description:
      "Te entregamos un presupuesto detallado con repuestos, mano de obra y tiempos estimados antes de iniciar cualquier trabajo.",
  },
  {
    step: "03",
    title: "Reparación especializada",
    description:
      "Nuestros técnicos ejecutan la reparación con herramientas profesionales y repuestos de calidad para garantizar un resultado duradero.",
  },
  {
    step: "04",
    title: "Control de calidad",
    description:
      "Verificamos el funcionamiento del vehículo antes de la entrega para asegurar que todo opere correctamente y con seguridad.",
  },
] as const;

export const areasReparacion = [
  {
    icon: "⚙️",
    title: "Motor",
    description:
      "Reparación y mantenimiento de motor: fugas, sobrecalentamiento, pérdida de potencia y servicios preventivos.",
  },
  {
    icon: "🔩",
    title: "Transmisión",
    description:
      "Diagnóstico y reparación de cajas manuales y automáticas, embrague y sistema de tracción.",
  },
  {
    icon: "🛑",
    title: "Frenos",
    description:
      "Pastillas, discos, líquido de frenos y revisión completa del sistema para máxima seguridad en carretera.",
  },
  {
    icon: "🔧",
    title: "Suspensión",
    description:
      "Amortiguadores, bujes, rótulas y alineación para un manejo estable y confortable.",
  },
  {
    icon: "💻",
    title: "Diagnóstico computarizado",
    description:
      "Escaneo electrónico para detectar códigos de error y fallas ocultas en los sistemas del vehículo.",
  },
  {
    icon: "🔋",
    title: "Sistema eléctrico",
    description:
      "Batería, alternador, arranque e iluminación. Solucionamos fallas eléctricas con diagnóstico preciso.",
  },
] as const;
