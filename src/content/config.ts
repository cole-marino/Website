import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		languages: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	})
});

export const collections = {
	projects : projectsCollection,
};