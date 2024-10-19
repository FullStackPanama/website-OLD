// Un array de enlaces para la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Sobre Nosotros", url: "/nosotros" },
  { name: "Miembros", url: "/miembros" },
  // { name: "Eventos", url: "/eventos" },
  { name: "Únete", url: "/docs/guias/primeros-pasos" },
  { name: "Contáctanos", url: "/contacto" },
];

// Un array de enlaces para el pie de página
const footerLinks = [
  {
    section: "Comunidad",
    links: [
      { name: "Sobre Nosotros", url: "/nosotros" },
      { name: "Miembros", url: "/miembros" },
      { name: "Únete", url: "/docs/guias/primeros-pasos" },
      // { name: "Proyectos", url: "/proyectos" },
      // { name: "Eventos", url: "/eventos" },
      { name: "Contáctanos", url: "/contacto" },
    ],
  },
  {
    section: "Recursos",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "FAQ", url: "/faq" },
      { name: "Tutoriales", url: "/tutoriales" },
      { name: "Oportunidades Laborales", url: "/empleos" },
    ],
  },
];

// Un objeto de enlaces para iconos sociales
export const socialLinks = {
  // facebook: "https://www.facebook.com/fullstackpanama",
  // x: "https://twitter.com/fullstackpanama",
  github: "https://github.com/fullstackpanama",
  whatsapp: "https://chat.whatsapp.com/CTVgLYNu1sqGH4pkb5wLw0",
  // instagram: "https://www.instagram.com/fullstackpanama",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
