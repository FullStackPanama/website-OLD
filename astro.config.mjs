import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://fullstackpanama.pages.dev',
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es", // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
        locales: {
          es: "es", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    starlight({
      title: 'FullStack Panama Docs',
      editLink: {
        baseUrl: 'https://github.com/fullstackpanama/website/edit/develop/',
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Guías de Inicio Rápido",
          // translations: {
          //   de: "Schnellstartanleitungen",
          //   es: "Guías de Inicio Rápido",
          //   fa: "راهنمای شروع سریع",
          //   fr: "Guides de Démarrage Rapide",
          //   ja: "クイックスタートガイド",
          //   "zh-cn": "快速入门指南",
          // },
          autogenerate: { directory: "docs/guias" },
        },
        {
          label: "Recursos",
          autogenerate: { directory: "docs/recursos" },
        },
      ],
      social: {
        github: "https://github.com/fullstackpanama",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://fullstackpanama.pages.dev" + "/docs-social.webp"
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://fullstackpanama.pages.dev" + "/docs-social.webp"
          },
        },
      ],
      plugins: [
        starlightImageZoom(),
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
