import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		gitHub: z.string(),
		projType: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		languages: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	})
});

const referencesCollection = defineCollection({
	schema: z.object({
		name: z.string(),
		business: z.string(),		// what I did for them
		tags: z.array(z.string()),
		body: z.string(), 			// main recommendation text
		img: z.string(),
		img_alt: z.string().optional(),
	})
});

export const collections = {
	projects : projectsCollection,
	references: referencesCollection,
};