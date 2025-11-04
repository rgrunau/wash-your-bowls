/**
 * Substack RSS Feed Utilities
 *
 * Fetches and parses RSS feed from Substack.
 * Extracts post data and calculates reading time.
 */

import { slugify } from './slugify.js';

/**
 * Fetch and parse Substack RSS feed
 * @param {string} feedUrl - The RSS feed URL
 * @returns {Promise<Array>} Array of parsed blog posts
 */
export async function fetchSubstackPosts(feedUrl = 'https://rjgrunau.substack.com/feed') {
	try {
		const response = await fetch(feedUrl);
		if (!response.ok) {
			throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
		}

		const xmlText = await response.text();
		const posts = parseRSSFeed(xmlText);
		return posts;
	} catch (error) {
		console.error('Error fetching Substack feed:', error);
		return [];
	}
}

/**
 * Parse RSS XML and extract post data
 * @param {string} xmlText - Raw XML string
 * @returns {Array} Array of post objects
 */
function parseRSSFeed(xmlText) {
	// Simple XML parsing using regex (works for RSS feeds)
	// For production, consider using a proper XML parser library
	const itemRegex = /<item>([\s\S]*?)<\/item>/g;
	const items = [...xmlText.matchAll(itemRegex)];

	const posts = items.map((match) => {
		const itemContent = match[1];

		// Extract fields from each item
		const title = extractTag(itemContent, 'title');
		const link = extractTag(itemContent, 'link');
		const pubDate = extractTag(itemContent, 'pubDate');
		const guid = extractTag(itemContent, 'guid');
		const description = extractTag(itemContent, 'description');

		// Try to extract full content (content:encoded or description)
		let content = extractTag(itemContent, 'content:encoded') || extractTag(itemContent, 'description');

		// Clean up the content
		content = cleanHTMLContent(content);

		// Generate excerpt from description or content
		const excerpt = generateExcerpt(description || content);

		// Calculate reading time
		const readingTime = calculateReadingTime(content);

		// Generate slug from title
		const slug = slugify(title);

		// Parse and format date
		const date = new Date(pubDate).toISOString().split('T')[0];

		return {
			title,
			slug,
			date,
			pubDate,
			content,
			excerpt,
			readingTime,
			substackUrl: link || guid,
		};
	});

	// Sort by date (newest first)
	return posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}

/**
 * Extract content from XML tag
 * @param {string} xml - XML string
 * @param {string} tag - Tag name
 * @returns {string} Tag content
 */
function extractTag(xml, tag) {
	const regex = new RegExp(`<${tag}(?:[^>]*)>([\\s\\S]*?)<\\/${tag}>`, 'i');
	const match = xml.match(regex);
	if (!match) return '';

	// Decode HTML entities
	let content = match[1].trim();
	content = decodeHTMLEntities(content);

	// Remove CDATA wrapper if present
	content = content.replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, '$1');

	return content;
}

/**
 * Decode common HTML entities
 * @param {string} text - Text with HTML entities
 * @returns {string} Decoded text
 */
function decodeHTMLEntities(text) {
	const entities = {
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&#39;': "'",
		'&apos;': "'",
	};

	return text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity);
}

/**
 * Clean HTML content
 * @param {string} html - Raw HTML content
 * @returns {string} Cleaned HTML
 */
function cleanHTMLContent(html) {
	return html
		.trim()
		// Remove leading/trailing whitespace
		.replace(/^\s+|\s+$/g, '')
		// Normalize whitespace
		.replace(/\s+/g, ' ');
}

/**
 * Generate excerpt from content
 * @param {string} content - Full content (HTML or text)
 * @param {number} maxLength - Maximum excerpt length
 * @returns {string} Excerpt text
 */
function generateExcerpt(content, maxLength = 160) {
	// Strip HTML tags
	const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

	if (text.length <= maxLength) {
		return text;
	}

	// Truncate at word boundary
	const truncated = text.substring(0, maxLength);
	const lastSpace = truncated.lastIndexOf(' ');

	return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

/**
 * Calculate reading time based on word count
 * @param {string} content - Post content (HTML)
 * @returns {string} Reading time (e.g., "5 MIN READ")
 */
function calculateReadingTime(content) {
	// Strip HTML tags
	const text = content.replace(/<[^>]+>/g, ' ');

	// Count words
	const words = text.trim().split(/\s+/).length;

	// Calculate minutes (assume 225 words per minute average)
	const minutes = Math.ceil(words / 225);

	return `${minutes} MIN READ`;
}

/**
 * Get recent posts (for homepage)
 * @param {number} count - Number of posts to return
 * @returns {Promise<Array>} Array of recent posts
 */
export async function getRecentPosts(count = 3) {
	const posts = await fetchSubstackPosts();
	return posts.slice(0, count);
}

/**
 * Get all posts (for blog list page)
 * @returns {Promise<Array>} Array of all posts
 */
export async function getAllPosts() {
	return await fetchSubstackPosts();
}

/**
 * Get a single post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Post object or null if not found
 */
export async function getPostBySlug(slug) {
	const posts = await fetchSubstackPosts();
	return posts.find((post) => post.slug === slug) || null;
}
