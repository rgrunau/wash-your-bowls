/**
 * Slugify Utility
 *
 * Converts a string into a URL-friendly slug.
 * Example: "The Practice of Washing Your Bowls" → "the-practice-of-washing-your-bowls"
 */

/**
 * Convert a string to a URL-safe slug
 * @param {string} text - The text to slugify
 * @returns {string} URL-safe slug
 */
export function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.trim()
		// Remove apostrophes
		.replace(/'/g, '')
		// Replace spaces and underscores with hyphens
		.replace(/[\s_]+/g, '-')
		// Remove all non-word chars except hyphens
		.replace(/[^\w-]+/g, '')
		// Replace multiple hyphens with single hyphen
		.replace(/--+/g, '-')
		// Remove leading/trailing hyphens
		.replace(/^-+|-+$/g, '');
}

/**
 * Generate a unique slug by appending date prefix if needed
 * @param {string} title - Post title
 * @param {string} date - Post date (ISO format)
 * @param {Array} existingSlugs - Array of existing slugs to check against
 * @returns {string} Unique slug
 */
export function generateUniqueSlug(title, date, existingSlugs = []) {
	const baseSlug = slugify(title);

	// If slug is unique, return it
	if (!existingSlugs.includes(baseSlug)) {
		return baseSlug;
	}

	// Otherwise, append date prefix
	const dateObj = new Date(date);
	const year = dateObj.getFullYear();
	const month = String(dateObj.getMonth() + 1).padStart(2, '0');
	const day = String(dateObj.getDate()).padStart(2, '0');
	const datePrefix = `${year}-${month}-${day}`;

	return `${datePrefix}-${baseSlug}`;
}
