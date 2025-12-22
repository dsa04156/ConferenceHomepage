import { defineCollection, z } from 'astro:content';

const conferenceCollection = defineCollection({
    type: 'data',
    schema: z.object({
        lang: z.enum(['ko', 'en']),
        year: z.string(),
        meta: z.object({
            title: z.string(),
            description: z.string(),
        }),
        menu: z.record(z.string()),
        hero: z.object({
            title: z.string(),
            subtitle: z.string(),
            date: z.string(),
            location: z.string(),
            cta: z.string(),
            ctaLink: z.string(),
            bgImage: z.string().optional(),
        }),
        importantDates: z.array(
            z.object({
                label: z.string(),
                date: z.string(),
                note: z.string().optional(),
            })
        ),
        notice: z.array(
            z.object({
                date: z.string(),
                title: z.string(),
                link: z.string().optional(),
                isNew: z.boolean().optional(),
            })
        ).optional(),
        committee: z.array(
            z.object({
                name: z.string(),
                role: z.string(),
                affiliation: z.string().optional(),
                image: z.string().optional(),
            })
        ),
        pages: z.record(
            z.object({
                title: z.string(),
                content: z.string(),
            })
        ).optional(),
        footer: z.object({
            copyright: z.string(),
            contact: z.string(),
        }),
    }),
});

export const collections = {
    'conference': conferenceCollection,
};
