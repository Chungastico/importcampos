import { reparacionMeta, reparacionUrl } from "@/lib/reparacion";
import { siteConfig } from "@/lib/site";

export default function ReparacionJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: reparacionMeta.title,
            item: reparacionUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${reparacionUrl}/#service`,
        name: reparacionMeta.title,
        description: reparacionMeta.description,
        url: reparacionUrl,
        serviceType: "Reparación mecánica de vehículos",
        provider: {
          "@type": "AutoRepair",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: {
          "@type": "Country",
          name: "Paraguay",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
