# Vercel Deployment Guide

## Overview

This guide covers deploying the "Wash Your Bowls" Astro site to Vercel with automatic rebuilds to fetch new Substack posts.

## Prerequisites

- Vercel account (free tier is fine)
- GitHub repository with your code
- Git installed locally

## Configuration

### Astro Vercel Adapter

The site is configured with the Vercel adapter:

**File**: [astro.config.mjs](astro.config.mjs)

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
```

**Features enabled:**
- Static site generation (SSG)
- Vercel Web Analytics (free)
- Optimized for Vercel's edge network

### Dependencies

**Package**: `@astrojs/vercel` v9.0.0 (installed as dev dependency)

## Initial Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Astro

3. **Configure Build Settings** (should be auto-detected)
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Node Version**: 18.x or higher

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? Yes
   - Which scope? (Choose your account)
   - Link to existing project? No (for first deploy)
   - Project name? wash-your-bowls
   - Directory? ./
   - Override settings? No

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Environment Variables (Optional)

If you need environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables (none required for this setup currently)

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `washyourbowls.com`)

2. **Update DNS**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`
   - Or use Vercel's nameservers for easier setup

3. **SSL Certificate**
   - Automatically provisioned by Vercel (Let's Encrypt)
   - HTTPS enabled by default

## Automatic Rebuilds for New Substack Posts

Since the site fetches Substack posts at build time, you need to rebuild to get new posts.

### Option 1: Deploy Hooks (Manual Trigger)

1. **Create Deploy Hook**
   - Go to Project Settings → Git → Deploy Hooks
   - Create a new hook: "Substack Update"
   - Copy the webhook URL

2. **Trigger Rebuild**
   - Manually trigger via webhook URL
   - Or use a service like IFTTT/Zapier to monitor RSS feed

### Option 2: Scheduled Rebuilds (Recommended)

Use GitHub Actions to rebuild daily:

**Create**: `.github/workflows/scheduled-rebuild.yml`

```yaml
name: Scheduled Rebuild
on:
  schedule:
    # Runs daily at 9 AM UTC (1 AM PST)
    - cron: '0 9 * * *'
  workflow_dispatch: # Manual trigger option

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel Deploy
        run: |
          curl -X POST "${{ secrets.VERCEL_DEPLOY_HOOK }}"
```

**Setup:**
1. Create deploy hook in Vercel (see Option 1)
2. Add webhook URL as GitHub secret: `VERCEL_DEPLOY_HOOK`
3. Commit workflow file
4. Site will rebuild daily automatically

### Option 3: Vercel Cron Jobs (Enterprise)

If you have Vercel Pro/Enterprise:
- Use Vercel Cron Jobs to trigger rebuilds
- Configure in `vercel.json`

## Build Output

After successful build, Vercel creates:

```
.vercel/output/
├── static/          # Your static site files
│   ├── index.html
│   ├── blog/
│   │   ├── index.html
│   │   └── [slug]/
│   └── _astro/      # CSS, JS, images
└── config.json      # Vercel configuration
```

## Performance Optimizations

Vercel automatically provides:

✅ **Edge Network**: CDN with 100+ global locations
✅ **Smart Caching**: Static assets cached at edge
✅ **Compression**: Brotli/gzip compression
✅ **Image Optimization**: Automatic (if using Astro Image)
✅ **HTTP/2 & HTTP/3**: Enabled by default
✅ **DDoS Protection**: Automatic mitigation
✅ **SSL/TLS**: Free HTTPS certificates

## Monitoring & Analytics

### Vercel Web Analytics (Enabled)

- View in Vercel Dashboard → Analytics
- Privacy-friendly (no cookies)
- Real-time visitor data
- Page views, unique visitors
- Top pages, referrers

### Build Logs

- View in Vercel Dashboard → Deployments
- Click any deployment to see build logs
- Check for RSS fetch errors or build failures

## Troubleshooting

### Build Fails

**Check build logs for:**
- RSS feed fetch errors (network timeout)
- Missing dependencies
- TypeScript errors

**Solution:**
```bash
# Test build locally first
npm run build

# Check RSS feed is accessible
curl https://rjgrunau.substack.com/feed
```

### Substack Posts Not Updating

**Issue**: New posts don't appear after rebuild

**Solutions:**
1. Verify RSS feed has new posts: https://rjgrunau.substack.com/feed
2. Clear Vercel cache: Redeploy with "Clear Cache and Deploy"
3. Check build logs for fetch errors
4. Manually trigger rebuild via deploy hook

### Build Timeout

**Issue**: Build takes too long (>45 seconds on free tier)

**Solutions:**
1. Optimize RSS fetching (current implementation is efficient)
2. Reduce number of posts fetched
3. Upgrade to Pro tier (15-minute build limit)

### 404 Errors

**Issue**: Blog post pages return 404

**Check:**
1. Build logs show all posts generated
2. Slugs are correct (lowercase, hyphens)
3. Dynamic route `[slug].astro` exists
4. `getStaticPaths()` is working

## CI/CD Workflow

### Automatic Deployments

Every push to `main` triggers deployment:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically deploys
```

### Preview Deployments

Every pull request gets a preview URL:
- Automatically created for each PR
- Unique URL: `wash-your-bowls-git-branch-name.vercel.app`
- Test before merging to production

## Project Structure

```
wash-your-bowls/
├── .vercel/              # Vercel build output (gitignored)
├── src/                  # Source files
├── dist/                 # Build output (gitignored)
├── astro.config.mjs      # Astro + Vercel config
├── package.json          # Dependencies
└── vercel.json           # Optional Vercel config
```

## Optional: vercel.json Configuration

Create `vercel.json` for advanced config:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "regions": ["sfo1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Cost Estimation

### Free Tier (Hobby)
- ✅ Bandwidth: 100 GB/month
- ✅ Build Time: 100 hours/month
- ✅ Deployments: Unlimited
- ✅ Custom Domain: 1 included
- ✅ SSL: Free
- ✅ Analytics: Basic

**Sufficient for most personal blogs**

### If You Need More
- **Pro**: $20/month (unlimited bandwidth, advanced analytics)
- **Enterprise**: Custom pricing

## Post-Deployment Checklist

After first deployment:

- ✅ Visit production URL
- ✅ Test homepage loads correctly
- ✅ Verify 3 recent posts display
- ✅ Click through to /blog page
- ✅ Open individual blog post
- ✅ Test Substack subscribe widget
- ✅ Verify embedded subscription forms styled correctly
- ✅ Check mobile responsiveness
- ✅ Test navigation links
- ✅ Verify custom domain (if configured)
- ✅ Set up scheduled rebuilds

## Useful Commands

```bash
# Local development
npm run dev

# Local production preview
npm run build && npm run preview

# Deploy to Vercel (via CLI)
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel remove
```

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Astro Vercel Adapter**: https://docs.astro.build/en/guides/deploy/vercel/
- **Vercel Support**: support@vercel.com
- **Vercel Discord**: discord.gg/vercel

## Maintenance

### Regular Tasks

1. **Monitor builds**: Check Vercel dashboard weekly
2. **Review analytics**: Track visitor trends
3. **Update dependencies**: Monthly `npm update`
4. **Test new posts**: Verify they appear after rebuild
5. **Check performance**: Use Vercel Speed Insights

### Emergency Rollback

If a deployment breaks:

1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "Promote to Production"
4. Instant rollback (no rebuild needed)

---

**Last Updated**: November 3, 2025
**Vercel Adapter Version**: @astrojs/vercel v9.0.0
**Status**: Production Ready
