# Substack Integration Guide

## Overview

The Wash Your Bowls website is now integrated with your Substack blog at [rjgrunau.substack.com](https://rjgrunau.substack.com). Blog posts are fetched from the Substack RSS feed at build time and displayed throughout the site.

## Features Implemented

### 1. Homepage Blog Section
- Displays the **3 most recent posts** from your Substack feed
- Uses the existing BlogCard component with hover states
- Each card links to the full post at `/blog/[post-slug]`
- Shows: date, reading time, title, excerpt, "READ →" link

### 2. Blog List Page (`/blog`)
- Displays **all posts** from Substack feed
- Sorted by newest first (descending publish date)
- Currently showing 9 posts from your feed
- Same BlogCard styling as homepage
- Future-ready for pagination if needed

### 3. Individual Blog Post Pages (`/blog/[slug]`)
- Dynamic routes generated for each post
- Full post content with proper typography and styling
- Post metadata: date, reading time
- Substack subscription widget at bottom
- "READ ON SUBSTACK →" button linking to original post
- Maintains site design: cream background, brutalist borders, consistent spacing

## Technical Implementation

### File Structure

```
src/
├── utils/
│   ├── substack.js          # RSS feed fetching and parsing
│   └── slugify.js           # URL slug generation
├── components/
│   ├── BlogCard.astro       # Blog post card (updated)
│   ├── BlogList.astro       # Blog section (updated)
│   └── SubstackSubscribe.astro  # Subscription widget
├── layouts/
│   └── BlogPostLayout.astro # Individual post wrapper
├── pages/
│   ├── index.astro          # Homepage (updated)
│   └── blog/
│       ├── index.astro      # All posts list
│       └── [slug].astro     # Dynamic post pages
```

### How It Works

1. **Build Time Fetch**: RSS feed is fetched from `https://rjgrunau.substack.com/feed` at build time
2. **Parsing**: XML is parsed to extract post data (title, content, date, excerpt, etc.)
3. **Slug Generation**: Post titles are converted to URL-safe slugs (e.g., "Considering Strength" → "considering-strength")
4. **Static Generation**: Astro generates static HTML pages for each post
5. **Reading Time**: Calculated based on word count (225 words per minute average)

### RSS Feed Data Extracted

For each post, the following data is extracted:
- `title` - Post title
- `content` - Full HTML content
- `pubDate` - Publication date
- `link` - Original Substack URL
- `description` - Post excerpt/summary
- `readingTime` - Calculated from word count

## Deployment & Rebuilding

### Manual Rebuild (Current Setup)

When you publish a new post on Substack, rebuild your site to fetch the latest posts:

```bash
npm run build
```

Then deploy the new build to your hosting platform.

### Automated Rebuild Options

#### Option 1: Webhook-Based (Recommended for Vercel/Netlify)

**For Vercel:**
1. Go to your Vercel project settings
2. Navigate to "Deploy Hooks"
3. Create a new deploy hook (e.g., "Substack Posts Update")
4. Copy the webhook URL
5. In Substack settings, add the webhook URL to trigger on new posts

**For Netlify:**
1. Go to Site Settings > Build & Deploy > Build Hooks
2. Create a new build hook
3. Use the webhook URL in Substack settings

Note: Substack's webhook support may be limited. Consider scheduled rebuilds instead.

#### Option 2: Scheduled Rebuilds

Set up scheduled rebuilds to automatically fetch new posts:

**Vercel (with GitHub Actions):**
Create `.github/workflows/scheduled-rebuild.yml`:

```yaml
name: Scheduled Rebuild
on:
  schedule:
    # Runs daily at 9 AM UTC
    - cron: '0 9 * * *'
  workflow_dispatch: # Manual trigger

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel Deploy
        run: |
          curl -X POST ${{ secrets.VERCEL_DEPLOY_HOOK }}
```

**Netlify:**
Use Netlify's built-in scheduled builds or Zapier integration.

#### Option 3: RSS Change Detection

Use a service like:
- [IFTTT](https://ifttt.com) - Monitor RSS feed for changes
- [Zapier](https://zapier.com) - Trigger rebuild on new RSS items
- [RSS to Webhook](https://rss-to-webhook.com) - Convert RSS updates to webhook calls

### Recommended Approach

For most use cases:
1. **During initial launch**: Manual rebuilds when you publish
2. **After launch**: Set up scheduled daily rebuilds (Option 2) to ensure new posts appear within 24 hours
3. **For urgent posts**: Manual rebuild via `npm run build` and deploy

## Development Workflow

### Local Development

```bash
# Start dev server
npm run dev

# Access at http://localhost:4321 (or next available port)
```

**Note**: The dev server will fetch the RSS feed on each page load during development. Subsequent requests may be cached by your browser.

### Testing New Posts

1. Publish a post on Substack
2. Wait a few minutes for RSS feed to update
3. Run `npm run build` locally to test
4. Verify the new post appears on homepage and /blog
5. Check the individual post page renders correctly

## Customization

### Adjusting Number of Homepage Posts

Edit [src/pages/index.astro](src/pages/index.astro):

```javascript
// Change from 3 to any number
const recentPosts = await getRecentPosts(3);
```

### Modifying Post Layout

Edit [src/layouts/BlogPostLayout.astro](src/layouts/BlogPostLayout.astro) to adjust:
- Typography sizes
- Content max-width
- Spacing
- Border styles

### Customizing Subscription Widget

Edit [src/components/SubstackSubscribe.astro](src/components/SubstackSubscribe.astro) to change:
- Widget text
- Iframe styling
- Border thickness
- Padding/margins

### Reading Time Calculation

Edit [src/utils/substack.js](src/utils/substack.js), `calculateReadingTime()` function:

```javascript
// Change from 225 to adjust reading speed
const minutes = Math.ceil(words / 225);
```

## SEO & Metadata

Each blog post page includes:
- Page title: "[Post Title] | Wash Your Bowls"
- Meta description: Uses post excerpt from Substack
- Proper semantic HTML structure

**Note**: Currently, canonical URLs point to your site. If you prefer to indicate the original Substack post as canonical, edit [BlogPostLayout.astro](src/layouts/BlogPostLayout.astro) and add:

```html
<link rel="canonical" href={substackUrl} />
```

## Troubleshooting

### Posts Not Appearing

1. Check RSS feed is accessible: Visit https://rjgrunau.substack.com/feed
2. Verify posts are published (not drafts)
3. Clear browser cache
4. Rebuild the site: `npm run build`

### Build Errors

If you encounter errors during `npm run build`:

1. Check network connectivity (RSS feed must be accessible)
2. Verify RSS feed structure hasn't changed
3. Check console logs for specific error messages
4. Test locally with `npm run dev`

### Slug Conflicts

If two posts have the same title, the slug generation will create unique slugs by prepending the date. This is handled automatically in [src/utils/slugify.js](src/utils/slugify.js).

### Reading Time Inaccurate

Adjust the words-per-minute calculation in [src/utils/substack.js](src/utils/substack.js):
- Default: 225 WPM (average reading speed)
- Slower readers: 200 WPM
- Faster readers: 250 WPM

## Current Live Posts

As of the last build, the following posts are live:

1. Considering Strength
2. Untitled: 01
3. Discipline Doesn't Just Transfer
4. Digital Hermit
5. Begin Again
6. Unadorned Links #1
7. Waxing Moon
8. Some Guidelines for Living Life From This Day Forward
9. Introductions

## Next Steps

1. **Deploy to production** - Push to your hosting platform
2. **Test all pages** - Verify homepage, /blog, and individual posts
3. **Set up automated rebuilds** - Choose one of the options above
4. **Monitor RSS feed** - Ensure new posts appear after rebuild
5. **Consider adding**:
   - Previous/Next post navigation
   - Blog post categories/tags (if Substack supports)
   - Search functionality (future enhancement)
   - Comments section (Substack embed or Disqus)

## Support

For questions or issues with the integration:
- Review this documentation
- Check [Astro documentation](https://docs.astro.build)
- Review [Substack RSS feed format](https://support.substack.com/hc/en-us/articles/360037466012-How-do-I-set-up-an-RSS-feed-for-my-publication-)

---

**Last Updated**: November 3, 2025
**Substack Feed**: https://rjgrunau.substack.com/feed
**Substack Embed**: https://rjgrunau.substack.com/embed
