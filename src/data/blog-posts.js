/**
 * Blog Posts Data
 *
 * This file contains the blog post data for the site.
 * In the future, this could be replaced with Astro Content Collections
 * for better type safety and markdown support.
 */

/**
 * Navigation Menu Items
 */
export const navItems = [
	{ label: "HOME", href: "/" },
	{ label: "BLOG", href: "/blog" },
	{ label: "ABOUT", href: "/about" },
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
	title: "Askesis",
	description: "A practice of physical philosophy",
	tagline: "ah-SKEE-sis",
	definition: "Ancient Greek: physical & mental training",
	about: {
		label: "About",
		title: "Physical philosophy in practice",
		description:
			"The Askesis Project is my attempt to integrate physical training, philosophy, and non-dual awareness into a single, coherent way of living.",
		quote:
			"“Thoughts and emotions can dictate our actions, or we can choose to let our actions shape our thoughts and emotions.”",
	},
};
