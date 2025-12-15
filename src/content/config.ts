import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        author: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()),
        coverImage: z.string(),
    }),
});

const servicesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        hero: z.string(),
        gallery: z.array(z.string()),
        intro: z.string(),
        features: z.array(z.string()),
        process: z.array(z.object({
            title: z.string(),
            description: z.string()
        })),
        faqs: z.array(z.object({
            question: z.string(),
            answer: z.string()
        }))
    }),
});

export const collections = {
    blog: blogCollection,
    services: servicesCollection,
};
