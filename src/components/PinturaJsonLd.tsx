import { pinturaMeta, pinturaUrl } from "@/lib/pintura";
import { siteConfig } from "@/lib/site";

export default function PinturaJsonLd() {
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
            name: pinturaMeta.title,
            item: pinturaUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pinturaUrl}/#service`,
        name: pinturaMeta.title,
        description: pinturaMeta.description,
        url: pinturaUrl,
        serviceType: "Pintura automotriz",
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
