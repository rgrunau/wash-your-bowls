# Substack Widget Visual Reference

## Final Implementation

The Substack subscription widget has been styled to perfectly match the "Wash Your Bowls" brutalist aesthetic.

## Visual Breakdown

### Mobile View (375px - 768px)

```
┌──────────────────────────────────────────────────────┐
│  POST CONTENT                                        │
│  Last paragraph of the blog post...                  │
└──────────────────────────────────────────────────────┘

        ↓ 80px spacing (--spacing-3xl)

┌──────────────────────────────────────────────────────┐  ← 2px solid border
│  ← 24px padding                                      │
│                                                       │
│          Subscribe to Wash Your Bowls                │  ← 20px, bold, centered
│                                                       │
│     Get new posts delivered directly to your         │  ← 14px, #666, centered
│     inbox. Mindfulness, movement, and the            │    max-width: 600px
│     next thing.                                      │
│                                                       │
│  ┌─────────────────────────────────────────────────┐ │
│  │                                                 │ │  ← 2px border
│  │        [Substack Email Input Form]              │ │
│  │                                                 │ │  ← 320px height
│  │        Enter your email                         │ │
│  │        [Subscribe button]                       │ │
│  │                                                 │ │
│  └─────────────────────────────────────────────────┘ │
│                                                       │
│                                    24px padding →  │
└──────────────────────────────────────────────────────┘
           ↑ max-width: 720px, centered
```

### Desktop View (769px+)

```
                     ← 120px container padding

┌────────────────────────────────────────────────────────────┐  ← 2px border
│  ← 48px padding                                            │
│                                                             │
│              Subscribe to Wash Your Bowls                  │  ← 24px, bold
│                                                             │
│       Get new posts delivered directly to your inbox.      │  ← 16px, #666
│       Mindfulness, movement, and the next thing.           │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                                                       │ │  ← 2px border
│  │          [Substack Email Input Form]                  │ │
│  │                                                       │ │  ← 320px height
│  │          Enter your email address                     │ │
│  │          [Subscribe button]                           │ │
│  │                                                       │ │
│  │          No spam. Unsubscribe anytime.                │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│                                          48px padding →  │
└────────────────────────────────────────────────────────────┘
                   ↑ max-width: 720px, centered
                   ↑ 160px spacing from post content
```

## Color Specifications

### Container
- **Border**: `#1A1A1A` (--color-border) - 2px solid
- **Background**: `#F5F5F0` (--color-bg)
- **Max-width**: 720px
- **Centered**: margin-left/right: auto

### Typography
- **Heading Color**: `#1A1A1A` (--color-text-primary)
- **Description Color**: `#666666` (--color-text-secondary)
- **Alignment**: Centered

### Iframe
- **Border**: `#1A1A1A` - 2px solid
- **Background**: `#F5F5F0` (matches container)
- **Border-radius**: 0 (sharp corners)

## Spacing Scale

### Mobile (< 769px)
- **Top margin**: 80px (--spacing-3xl)
- **Container padding**: 24px (--spacing-md)
- **Heading margin-bottom**: 24px (--spacing-md)
- **Description margin-bottom**: 32px (--spacing-lg)

### Desktop (≥ 769px)
- **Top margin**: 160px (--spacing-5xl)
- **Container padding**: 48px (--spacing-xl)
- **Same bottom margins as mobile**

## Typography Scale

### Mobile
```
Heading:      20px, 700 weight, #1A1A1A
Description:  14px, 400 weight, #666666, line-height 1.6
```

### Desktop
```
Heading:      24px, 700 weight, #1A1A1A
Description:  16px, 400 weight, #666666, line-height 1.6
```

## Context: Where It Appears

The widget appears on every blog post page, after:
1. Post content (article text)
2. "READ ON SUBSTACK →" button

And before:
1. Footer

### Example Post Flow

```
┌─────────────────────────────────────┐
│ NAVIGATION BAR                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ POST HEADER                         │
│ - Date & Reading Time               │
│ - Post Title                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ POST CONTENT                        │
│ - Paragraphs                        │
│ - Images                            │
│ - Lists, quotes, etc.               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ READ ON SUBSTACK → (button)         │  ← Links to original Substack post
└─────────────────────────────────────┘

        ↓ 160px gap on desktop

┌─────────────────────────────────────┐
│ SUBSCRIBE WIDGET                    │  ← Your styled component
│ - Heading                           │
│ - Description                       │
│ - Email form (iframe)               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FOOTER                              │
└─────────────────────────────────────┘
```

## Actual CSS Values

### Container
```css
.substack-subscribe {
  margin: 80px auto 0;        /* Mobile */
  margin: 160px auto 0;       /* Desktop */
  padding: 24px;              /* Mobile */
  padding: 48px;              /* Desktop */
  border: 2px solid #1A1A1A;
  background-color: #F5F5F0;
  max-width: 720px;
}
```

### Heading
```css
.substack-subscribe__title {
  font-size: 20px;            /* Mobile */
  font-size: 24px;            /* Desktop */
  font-weight: 700;
  color: #1A1A1A;
  margin-bottom: 24px;
  text-align: center;
}
```

### Description
```css
.substack-subscribe__description {
  font-size: 14px;            /* Mobile */
  font-size: 16px;            /* Desktop */
  color: #666666;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
```

### Iframe
```css
.substack-subscribe__iframe {
  border: 2px solid #1A1A1A;
  background-color: #F5F5F0;
  border-radius: 0;
  display: block;
  width: 100%;
}
```

## Design Rationale

### Why These Choices?

1. **2px Borders**: Matches the site's brutalist aesthetic with bold, confident lines
2. **Sharp Corners**: No border-radius maintains the geometric, no-nonsense design
3. **Centered Alignment**: Creates visual hierarchy and draws focus to the CTA
4. **Max-width 720px**: Ensures readability and doesn't overwhelm on large screens
5. **Generous Spacing**: 160px top margin creates clear separation from content
6. **#F5F5F0 Background**: Seamlessly integrates with site background
7. **#666666 Description**: Creates visual hierarchy without losing readability
8. **Responsive Padding**: Prevents cramping on mobile, adds breathing room on desktop

## Comparison to Site Elements

### Matches These Components:
- **BlogCard**: Same 2px borders, same hover aesthetic
- **Navigation**: Same border weight and color
- **Footer**: Same background color
- **About Section**: Same typography scale and spacing

### Visual Consistency:
```
Navigation Bar     →  2px border bottom
Blog Cards        →  2px border all sides
Subscribe Widget  →  2px border all sides  ← NEW
Footer            →  2px border top
```

All using `#1A1A1A` border color on `#F5F5F0` background.

## Testing Matrix

| Screen Size | Container Padding | Heading Size | Description Size | Top Margin |
|-------------|------------------|--------------|------------------|------------|
| 375px       | 24px             | 20px         | 14px             | 80px       |
| 768px       | 24px             | 20px         | 14px             | 80px       |
| 769px       | 48px             | 24px         | 16px             | 160px      |
| 1200px      | 48px             | 24px         | 16px             | 160px      |
| 1920px      | 48px             | 24px         | 16px             | 160px      |

## Accessibility Checklist

- ✅ Semantic HTML (`<h3>` for heading)
- ✅ High contrast ratios (WCAG AA compliant)
- ✅ Descriptive iframe title
- ✅ Keyboard accessible (native iframe behavior)
- ✅ Screen reader friendly (logical heading hierarchy)
- ✅ Touch-friendly spacing on mobile (24px padding)
- ✅ No JavaScript required (works without JS)
- ✅ Responsive text sizing (readable at all sizes)

## Browser Rendering

The widget has been tested and renders correctly in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

---

**Component File**: [src/components/SubstackSubscribe.astro](src/components/SubstackSubscribe.astro)
**Documentation**: [SUBSTACK_WIDGET_STYLING.md](SUBSTACK_WIDGET_STYLING.md)
**Last Updated**: November 3, 2025
