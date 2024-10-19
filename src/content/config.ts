// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { getCountryCodes } from '@/utils/countries';

const productsCollection = defineCollection({
  type: 'content',
    schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(
      z.object({
        id: z.string(),
        dataTab: z.string(),
        title: z.string(),
      })
    ),
    longDescription: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }),
    descriptionList: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsLeft: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsRight: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ).optional(),
    tableData: z.array(
      z.object({
        feature: z.array(z.string()),
        description: z.array(z.array(z.string())),
      })
    ).optional(),
    blueprints: z.object({
      first: image().optional(),
      second: image().optional(),
    }),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  author: z.string(),
  role: z.string().optional(),
  authorImage: image(),
  authorImageAlt: z.string(),
  pubDate: z.date(),
  cardImage: image(),
  cardImageAlt: z.string(),
  readTime: z.number(),
  tags: z.array(z.string()).optional(),
  }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  // contents: z.array(z.string()),
  cardImage: image(),
  cardImageAlt: z.string(),
  }),
});

// Red Profesional de Programadores
const membersCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    // Información Personal
    nombre: z.string(),
    imagen: image(),
    idiomas: z.array(z.string()).optional(),

    // Información Profesional
    biografia: z.string(),
    tecnologias: z.array(z.string()).optional(),
    disponibleParaTrabajar: z.boolean().default(false),
    disponibleParaMentoria: z.boolean().default(false),

    // Información de Contacto
    redesSociales: z.object({
      github: z.string().optional(),
      linkedIn: z.string().optional(),
      twitter: z.string().optional(),
      website: z.string().optional(),
    }).optional(),

    // Información de la Empresa
    empresa: z.object({
      nombre: z.string(),
      cargo: z.string(),
      departamento: z.string(),
      ciudad: z.string(),
      pais: z.enum(['', ...getCountryCodes()]),
      companyUrl: z.string(),
      companyLogo: z.string(),
    }).optional(),

    // Información de Membresía
    fechaIngreso: z.date().default(new Date()),
    rol: z.enum(['miembro', 'administrador']).default('miembro'),
    activo: z.boolean().default(true),
  }),
});

export const collections = {
  members: membersCollection,
  docs: defineCollection({ schema: docsSchema() }),
  'products': productsCollection,
  'blog': blogCollection,
  'insights': insightsCollection,
};
