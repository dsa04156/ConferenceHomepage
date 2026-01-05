import { defineCollection, z } from 'astro:content';

const conferenceCollection = defineCollection({
    type: 'data',
    schema: z.object({
        lang: z.enum(['ko', 'en']),
        year: z.string(),
        meta: z.object({
            title: z.string(),
            description: z.string(),
            longDescription: z.string().optional(),
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
        posterImage: z.string().optional(),
        partners: z.array(
            z.object({
                name: z.string(),
                logo: z.string(),
                description: z.string().optional(),
                link: z.string().optional(),
            })
        ).optional(),
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
                content: z.string().optional(),
                image: z.string().optional(),
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
        programSchedule: z
            .array(
                z.object({
                    dateLabel: z.string(),
                    sessions: z.array(
                        z.object({
                            time: z.string(),
                            title: z.string(),
                            speaker: z.string().optional(),
                            location: z.string().optional(),
                            note: z.string().optional(),
                        })
                    ),
                })
            )
            .optional(),
        workshopSchedules: z
            .record(
                z.array(
                    z.object({
                        dateLabel: z.string(),
                        sessions: z.array(
                            z.object({
                                time: z.string(),
                                title: z.string(),
                                speaker: z.string().optional(),
                                location: z.string().optional(),
                                note: z.string().optional(),
                            })
                        ),
                    })
                )
            )
            .optional(),
        keynotes: z
            .array(
                z.object({
                    title: z.string(),
                    time: z.string().optional(),
                    date: z.string().optional(),
                    speaker: z.string(),
                    affiliation: z.string().optional(),
                    abstract: z.string().optional(),
                    biography: z.string().optional(),
                    image: z.string().optional(),
                })
            )
            .optional(),
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
