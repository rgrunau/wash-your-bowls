# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Wash Your Bowls" is a mindfulness and movement blog built with Astro 5. The project is inspired by the Zen koan "wash your bowls" and focuses on presence, mindfulness, movement, and intentional action.

## Commands

### Development
```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production to ./dist/
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
```

### Astro CLI
```bash
npm run astro check  # Type-check the project
npm run astro add    # Add integrations
```

## Architecture

### Technology Stack
- **Framework**: Astro 5.15.3 (static site generator)
- **TypeScript**: Using strict configuration (`astro/tsconfigs/strict`)
- **Styling**: Component-scoped CSS in Astro files + global styles (no CSS framework)
- **No client-side frameworks**: Pure static HTML/CSS approach

### Project Structure
```
src/
├── components/          # Reusable Astro components
│   ├── Navigation.astro # Fixed navigation bar with logo and menu
│   ├── Hero.astro       # Large typographic hero section
│   ├── About.astro      # Two-column about section with quote
│   ├── BlogCard.astro   # Individual blog post card (reusable)
│   ├── BlogList.astro   # Blog section container with cards
│   └── Footer.astro     # Site footer with branding and social links
├── layouts/
│   └── BaseLayout.astro # Base HTML structure, metadata, global styles
├── pages/
│   └── index.astro      # Home page (composes all components)
├── styles/
│   └── global.css       # Global styles, CSS variables, reset
├── data/
│   └── blog-posts.js    # Blog posts, nav items, social links, site config
└── assets/              # Images and static assets
```

### Component-Based Architecture

The site follows a clean component-based architecture:

**Layout System:**
- [BaseLayout.astro](src/layouts/BaseLayout.astro) provides the HTML boilerplate, imports global styles, and handles page metadata
- Page components compose layouts with components via Astro's slot system

**Component Hierarchy:**
- [index.astro](src/pages/index.astro) is the composition root
- Each section (Navigation, Hero, About, BlogList, Footer) is a separate component
- [BlogCard.astro](src/components/BlogCard.astro) is a reusable child component of BlogList
- Components use TypeScript interfaces for prop validation

**Data Management:**
- Content is separated from presentation in [blog-posts.js](src/data/blog-posts.js)
- Centralized configuration for nav items, social links, site config, and blog posts
- Components import and consume data from this single source of truth

**Styling Strategy:**
- Global styles and CSS variables defined in [global.css](src/styles/global.css)
- Component-specific styles use Astro's scoped `<style>` tags
- BEM-style naming convention for CSS classes
- Mobile-first responsive design with `@media` queries in each component

### Design System

All design tokens are defined in [global.css](src/styles/global.css):

**Colors:**
- `--color-bg`: #f5f5f0 (warm beige background)
- `--color-accent`: #a84032 (rust red for highlights)
- `--color-text-primary`: #1a1a1a (primary text)
- `--color-text-secondary`: #666666 (secondary text)
- `--color-border`: #1a1a1a (borders)

**Spacing Scale:**
- `--spacing-xs` through `--spacing-5xl` (8px to 160px)
- Consistent spacing throughout all components

**Typography:**
- System font stack with fallbacks
- Three line-height values: base (1.6), tight (1.2), relaxed (1.7)
- `--nav-height`: 80px (used for fixed nav spacing)

**Responsive Design:**
- Mobile-first approach with progressive enhancement
- Breakpoints:
  - Very Small: 320-374px
  - Mobile: 375-480px (default/primary target)
  - Large Mobile/Tablet: 481-768px
  - Desktop: 769px+
  - Large Desktop: 1200px+
- Each component handles its own responsive styles
- Fluid typography using `clamp()` and CSS custom properties
- Touch-optimized with 44px minimum touch targets

## Mobile Responsive Design

### Mobile-First Philosophy
The site is built mobile-first, meaning:
1. Default styles target mobile devices (320-768px)
2. Desktop styles are progressive enhancements via `@media (min-width: 769px)`
3. Fluid typography scales smoothly across all screen sizes
4. Touch targets meet accessibility guidelines (44px minimum)

### Key Responsive Features
- **Navigation:** Compact on mobile (64px height, 40px logo), expands on desktop (80px height, 48px logo)
- **Hero:** Typography scales from 48-64px on mobile to 80-140px on desktop; tagline stacks vertically on mobile
- **About:** Single-column on mobile with border-separated quote, two-column grid on desktop
- **Blog Cards:** 32px padding on mobile, 48px on desktop; touch-optimized active states
- **Footer:** Vertical social links stack on mobile (no separators), horizontal on desktop

### CSS Custom Properties for Responsive Design
```css
/* Mobile defaults */
--section-padding-vertical: 80px
--container-padding: 24px
--nav-height: 64px
--font-size-hero: clamp(48px, 15vw, 64px)

/* Desktop (769px+) */
--section-padding-vertical: 160px
--container-padding: 120px
--nav-height: 80px
--font-size-hero: clamp(80px, 12vw, 140px)
```

### Testing Mobile Design
- Primary target: 375px width (iPhone SE, standard smartphone)
- Test at: 375px, 768px (tablet), and 1200px (desktop)
- Use browser DevTools device emulation
- Verify touch targets are adequate (44px minimum)

See [MOBILE_RESPONSIVE_GUIDE.md](MOBILE_RESPONSIVE_GUIDE.md) for comprehensive mobile design documentation.
See [MOBILE_375PX_MOCKUP.md](MOBILE_375PX_MOCKUP.md) for detailed 375px layout specifications.

## Development Patterns

### Adding New Components
1. Create component file in `src/components/`
2. Define TypeScript interface for props if needed
3. Import data from `src/data/blog-posts.js` if applicable
4. Add component-specific styles in scoped `<style>` tag
5. Use CSS variables from global.css for consistency
6. Include mobile-first responsive styles:
   - Default styles for mobile (no media query)
   - Add `@media (min-width: 769px)` for desktop overrides
   - Use fluid typography with `clamp()` or CSS custom properties
   - Ensure touch targets are ≥ 44px on mobile

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. Import and use `BaseLayout` from `src/layouts/`
3. Compose page with existing components
4. Override title/description via BaseLayout props

### Modifying Content
- Edit [blog-posts.js](src/data/blog-posts.js) to update:
  - Blog posts
  - Navigation menu items
  - Social links
  - Site configuration text

### Styling Guidelines
- Use CSS variables for colors, spacing, and common values
- Follow BEM naming: `.block__element--modifier`
- Keep component styles scoped within each component
- Add responsive styles at component level, not globally

## Future Development Considerations

### Blog Implementation
The site currently uses placeholder blog data. To implement a full blog:
- Migrate from [blog-posts.js](src/data/blog-posts.js) to Astro Content Collections
- Create `src/content/blog/` directory
- Define collection schema with frontmatter
- Create individual blog post pages using dynamic routing (`[slug].astro`)
- Support markdown/MDX format for posts

### Potential Enhancements
- Add smooth scroll behavior for anchor links
- Implement actual logo SVG in Navigation component
- Create individual blog post template page
- Add meta tags for social sharing (Open Graph, Twitter Cards)
- Consider adding a newsletter signup form
