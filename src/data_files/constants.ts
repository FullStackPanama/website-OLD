import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Full Stack Panamá",
  tagline: "Juntos, Codificamos el Futuro de Panamá",
  description: "Somos una comunidad vibrante de desarrolladores panameños unidos para impulsar la innovación tecnológica en nuestro país. Únete a nosotros para aprender, colaborar y crecer profesionalmente.",
  description_short: "Comunidad de desarrolladores panameños impulsando la innovación tecnológica y el crecimiento profesional en Panamá.",
  url: "https://fullstackpanama.com", // Asegúrate de actualizar esto con tu URL real
  author: "Full Stack Panamá",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-PA",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_PA",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: ${SITE.tagline}`,
  description: SITE.description,
  image: ogImageSrc,
};
