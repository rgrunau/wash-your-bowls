# Substack Subscribe Widget Styling Guide

## Overview

The Substack subscription widget has been styled to match the "Wash Your Bowls" brutalist aesthetic with bold borders, clean typography, and a minimal design approach.

## Component Location

**File**: [src/components/SubstackSubscribe.astro](src/components/SubstackSubscribe.astro)

## Design Specifications

### Container Styling

```css
/* Mobile (default) */
- Border: 2px solid #1A1A1A
- Background: #F5F5F0
- Padding: 24px
- Margin-top: 80px (from post content)
- Max-width: 720px
- Centered with margin: auto

/* Desktop (769px+) */
- Padding: 48px
- Margin-top: 160px
```

### Typography

**Heading ("Subscribe to Wash Your Bowls")**
```css
/* Mobile */
- Font-size: 20px
- Font-weight: 700 (bold)
- Color: #1A1A1A
- Text-align: center
- Margin-bottom: 24px

/* Desktop */
- Font-size: 24px
```

**Description Text**
```
"Get new posts delivered directly to your inbox. Mindfulness, movement, and the next thing."
```

```css
/* Mobile */
- Font-size: 14px
- Color: #666666
- Line-height: 1.6
- Text-align: center
- Max-width: 600px (centered)
- Margin-bottom: 32px

/* Desktop */
- Font-size: 16px
```

### Iframe Styling

```css
- Width: 100%
- Height: 320px
- Border: 2px solid #1A1A1A
- Background: #F5F5F0
- Border-radius: 0 (sharp corners)
- Frameborder: 0
- Scrolling: no
```

## Integration

The SubstackSubscribe component is automatically included in all blog posts via the BlogPostLayout:

**File**: [src/layouts/BlogPostLayout.astro](src/layouts/BlogPostLayout.astro)

```astro
<article class="blog-post">
  <!-- Post header -->
  <!-- Post content -->

  <div class="blog-post__actions">
    <a href={substackUrl} class="blog-post__read-on-substack">
      READ ON SUBSTACK →
    </a>
  </div>

  <SubstackSubscribe />
</article>
```

## Component Structure

### HTML

```astro
<div class="substack-subscribe">
  <h3 class="substack-subscribe__title">Subscribe to Wash Your Bowls</h3>
  <p class="substack-subscribe__description">
    Get new posts delivered directly to your inbox. Mindfulness, movement, and the next thing.
  </p>
  <iframe
    src="https://rjgrunau.substack.com/embed"
    width="100%"
    height="320"
    class="substack-subscribe__iframe"
    frameborder="0"
    scrolling="no"
    title="Subscribe to Wash Your Bowls newsletter"
  ></iframe>
</div>
```

### CSS (Scoped)

```css
/* Mobile First Approach */
.substack-subscribe {
  margin: var(--spacing-3xl) auto 0;
  padding: var(--spacing-md);
  border: 2px solid var(--color-border);
  background-color: var(--color-bg);
  max-width: 720px;
}

/* Desktop Enhancement */
@media (min-width: 769px) {
  .substack-subscribe {
    margin-top: var(--spacing-5xl);
    padding: var(--spacing-xl);
  }
}
```

## Design Principles Applied

1. **Brutalist Aesthetic**
   - Sharp corners (border-radius: 0)
   - Bold 2px borders
   - High contrast (#1A1A1A on #F5F5F0)
   - Minimal decoration

2. **Typography Hierarchy**
   - Bold heading for clear call-to-action
   - Secondary color for descriptive text
   - Centered alignment for symmetry

3. **Responsive Design**
   - Mobile-first approach
   - Smaller padding/margins on mobile
   - Proportional typography scaling
   - Max-width constraint for readability

4. **Spacing System**
   - Uses 8px-based spacing scale
   - Consistent with site-wide spacing
   - Proper vertical rhythm

5. **Accessibility**
   - Semantic HTML (h3 heading)
   - Descriptive iframe title
   - High contrast ratios
   - Proper heading hierarchy

## Visual Hierarchy

```
┌─────────────────────────────────────────────┐
│                                             │
│    Subscribe to Wash Your Bowls            │  <- Bold heading (24px)
│                                             │
│  Get new posts delivered directly to your   │  <- Description (16px, secondary color)
│  inbox. Mindfulness, movement, and the      │
│  next thing.                                │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │                                       │ │
│  │      [Substack Embed Form]            │ │  <- Iframe with 2px border
│  │                                       │ │
│  │      [Email input]                    │ │
│  │      [Subscribe button]               │ │
│  │                                       │ │
│  └───────────────────────────────────────┘ │
│                                             │
└─────────────────────────────────────────────┘
  <- Container with 2px border, 48px padding (desktop)
```

## Customization Options

### Change Container Width

Edit [SubstackSubscribe.astro](src/components/SubstackSubscribe.astro):

```css
.substack-subscribe {
  max-width: 720px; /* Change to 600px, 800px, etc. */
}
```

### Adjust Spacing

```css
.substack-subscribe {
  margin-top: var(--spacing-5xl); /* Change to --spacing-4xl, etc. */
  padding: var(--spacing-xl);     /* Change to --spacing-2xl, etc. */
}
```

### Modify Typography

```css
.substack-subscribe__title {
  font-size: 24px; /* Adjust size */
  text-transform: uppercase; /* Make all caps (optional) */
}
```

### Change Border Style

```css
.substack-subscribe {
  border: 3px solid var(--color-accent); /* Thicker or colored border */
}

.substack-subscribe__iframe {
  border: 3px solid var(--color-accent); /* Match iframe border */
}
```

### Update Description Text

Edit the component HTML:

```astro
<p class="substack-subscribe__description">
  Your custom description text here.
</p>
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with fallbacks)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Iframe loads asynchronously
- No JavaScript required for styling
- Minimal CSS (scoped to component)
- No external dependencies

## Testing Checklist

- ✅ Displays correctly on mobile (375px width)
- ✅ Displays correctly on tablet (768px width)
- ✅ Displays correctly on desktop (1200px+ width)
- ✅ Borders are 2px solid #1A1A1A
- ✅ Background matches site (#F5F5F0)
- ✅ Text is centered and readable
- ✅ Iframe loads Substack embed correctly
- ✅ Spacing is consistent with site design
- ✅ Sharp corners (no border-radius)
- ✅ High contrast for accessibility

## Live Pages

The SubstackSubscribe widget appears on all blog post pages:

- `/blog/considering-strength`
- `/blog/untitled-01`
- `/blog/discipline-doesnt-just-transfer`
- `/blog/digital-hermit`
- `/blog/begin-again`
- And all other blog posts...

## Future Enhancements (Optional)

1. **Hover State**: Add subtle border color change on container hover
2. **Success Message**: Display confirmation after subscription
3. **Subscriber Count**: Show current subscriber count if available via API
4. **Social Proof**: Add testimonial or sample post preview
5. **Animation**: Subtle fade-in or slide-in on scroll
6. **A/B Testing**: Test different copy variations

## Related Files

- [src/components/SubstackSubscribe.astro](src/components/SubstackSubscribe.astro) - Main component
- [src/layouts/BlogPostLayout.astro](src/layouts/BlogPostLayout.astro) - Integration point
- [src/styles/global.css](src/styles/global.css) - CSS variables
- [SUBSTACK_INTEGRATION.md](SUBSTACK_INTEGRATION.md) - Full integration docs

---

**Last Updated**: November 3, 2025
**Status**: Production Ready
**Design System**: Brutalist Aesthetic
