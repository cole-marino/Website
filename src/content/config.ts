import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		current: z.boolean(),
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		languages: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),

		data: z.string(),
	})
});

export const collections = {
	'projects' : projects,
};