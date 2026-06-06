import { importacionesMeta, importacionesUrl } from "@/lib/importaciones";
import { siteConfig } from "@/lib/site";

export default function ImportacionesJsonLd() {
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
            name: importacionesMeta.title,
            item: importacionesUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${importacionesUrl}/#service`,
        name: importacionesMeta.title,
        description: importacionesMeta.description,
        url: importacionesUrl,
        serviceType: "Importación de vehículos",
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
