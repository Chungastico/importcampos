import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "es-PY",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "AutoRepair",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/LogoImportcampos.svg`,
        image: `${siteConfig.url}/opengraph-image`,
        description: siteConfig.description,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Asunción",
          addressCountry: "PY",
        },
        areaServed: {
          "@type": "Country",
          name: "Paraguay",
        },
        knowsAbout: siteConfig.services,
        slogan: siteConfig.tagline,
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
