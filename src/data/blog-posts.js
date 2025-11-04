/**
 * Blog Posts Data
 *
 * This file contains the blog post data for the site.
 * In the future, this could be replaced with Astro Content Collections
 * for better type safety and markdown support.
 */

export const blogPosts = [
	{
		id: 1,
		title: "The Practice of Washing Your Bowls",
		excerpt:
			"In Zen practice, the simple act of washing bowls after a meal becomes a meditation. It's not about the bowls—it's about being fully present with what needs to be done next.",
		date: "2025-11-02",
		readTime: "5 MIN READ",
		slug: "practice-of-washing-bowls",
	},
	{
		id: 2,
		title: "Movement as Meditation",
		excerpt:
			"Physical movement isn't separate from mindfulness—it's one of its most powerful forms. How we move our bodies shapes how we experience the present moment.",
		date: "2025-10-28",
		readTime: "7 MIN READ",
		slug: "movement-as-meditation",
	},
	{
		id: 3,
		title: "The Next Thing",
		excerpt:
			"We often complicate our lives by looking too far ahead. What if the answer is simpler? What if we just do the next thing that needs doing?",
		date: "2025-10-21",
		readTime: "4 MIN READ",
		slug: "the-next-thing",
	},
];

/**
 * Navigation Menu Items
 */
export const navItems = [
	{ label: "HOME", href: "#home" },
	{ label: "BLOG", href: "#blog" },
	{ label: "ABOUT", href: "#about" },
];

/**
 * Footer Social Links
 */
export const socialLinks = [
	{ label: "SUBSTACK", href: "#" },
	{ label: "TWITTER", href: "#" },
	{ label: "EMAIL", href: "#" },
];

/**
 * Site Configuration
 */
export const siteConfig = {
	title: "Wash Your Bowls",
	description: "Mindfulness. Movement. The next thing.",
	tagline: ["MINDFULNESS", "MOVEMENT", "THE NEXT THING"],
	about: {
		label: "About",
		title: "Doing the next thing",
		description:
			"Wash Your Bowls is my attempt to figure out what it means to live mindfully and explore the overlap between movement, living an examinded life, and finding agency in the world",
		quote: '“...Have you eaten your rice gruel?” The monk answered, “Yes, I have.”Joshu said, “Wash your bowl.”At that moment, the monk was enlightened."',
	},
};
