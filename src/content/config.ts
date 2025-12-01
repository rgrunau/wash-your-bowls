/**
 * Content Collections Configuration
 *
 * Defines the schema for content collections used in the site.
 * This provides type safety and validation for markdown content.
 */

import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = {
	pages: pagesCollection,
};
