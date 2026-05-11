import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    image: z.string().optional(),
    thumb: z.string().optional(),
    description: z.string(),
    intro: z.string().optional(),
    date: z.date(),
    year: z.number(),
    duration: z.string().optional(),
    url: z.string().optional(),
    rol: z.string().optional(),
    type: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'proyectos': proyectosCollection,
};
