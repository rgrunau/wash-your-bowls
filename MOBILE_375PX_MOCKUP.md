# Mobile Mockup at 375px Width

## Visual Design Description
This document describes the mobile layout at 375px width (iPhone SE, standard smartphone size).

---

## 🔝 Navigation Bar (Height: 64px)

```
┌────────────────────────────────────────────┐
│  24px  ●   HOME / BLOG / ABOUT  24px      │
│      Logo      12px text                   │
│  40px dia                                   │
└────────────────────────────────────────────┘
         2px solid black border
```

**Details:**
- Fixed position at top
- 40px circular logo placeholder (left)
- Compact menu: HOME / BLOG / ABOUT (right)
- 12px uppercase font
- "/" separators with tight spacing
- Background: #F5F5F0 (warm beige)
- Border: 2px solid #1A1A1A

---

## 🎯 Hero Section (90vh)

```
┌────────────────────────────────────────────┐
│        24px padding left & right           │
│                                             │
│   64px from nav                             │
│                                             │
│   Wash                                      │
│   (48-64px, left-aligned)                   │
│                                             │
│        YOUR                                 │
│   (48-64px, center, #A84032)                │
│                                             │
│                        BOWLS                │
│   (48-64px, right-aligned)                  │
│                                             │
│   48px gap                                  │
│                                             │
│          MINDFULNESS                        │
│           MOVEMENT                          │
│        THE NEXT THING                       │
│   (12px, vertical stack, centered)          │
│                                             │
└────────────────────────────────────────────┘
```

**Typography Details:**
- **Main Title:** 48-64px (fluid), font-weight: 800
- **Line 1 "Wash":** Left-aligned
- **Line 2 "YOUR":** Center-aligned, brick red (#A84032)
- **Line 3 "BOWLS":** Right-aligned
- Tight line-height (0.95) for density
- Negative letter-spacing (-0.02em)

**Tagline:**
- Vertical stack (column layout)
- 12px uppercase
- Letter-spacing: 0.15em
- Color: #666666 (secondary)
- 8px gap between words

---

## 📖 About Section (Padding: 80px vertical / 24px horizontal)

```
┌────────────────────────────────────────────┐
│  24px                              24px    │
│                                             │
│  ABOUT                                      │
│  (14px, uppercase, #A84032)                 │
│                                             │
│  Doing the next thing                       │
│  (32-48px, fluid)                           │
│                                             │
│  A practice of presence through             │
│  mindfulness, movement, and                 │
│  intentional action. Inspired by            │
│  the Zen koan "wash your bowls,"            │
│  this is about showing up fully             │
│  for what's in front of you.                │
│  (16px, line-height: 1.7, #666666)          │
│                                             │
│  Read more →                                │
│  (16px, underline on hover)                 │
│                                             │
│  ─────────────────────────────              │
│  2px border separator                       │
│                                             │
│  "When you've finished eating,              │
│   wash your bowls."                         │
│  (24px italic, line-height: 1.5)            │
│                                             │
└────────────────────────────────────────────┘
```

**Layout:**
- Single column (stacked vertically)
- Description and quote separated by 2px border
- Quote visually separated but still cohesive
- 24px margin on sides
- 64px gap between description and quote

---

## 📝 Blog Section (Padding: 80px vertical / 24px horizontal)

```
┌────────────────────────────────────────────┐
│                                             │
│              BLOG                           │
│           (48-64px, fluid)                  │
│                                             │
│  64px gap                                   │
│  ┌────────────────────────────────────┐   │
│  │  32px padding all around           │   │
│  │                                     │   │
│  │  NOV 02, 2025 · 5 MIN READ        │   │
│  │  (12px, #666666)                   │   │
│  │                                     │   │
│  │  The Practice of Washing           │   │
│  │  Your Bowls                        │   │
│  │  (24px, bold)                      │   │
│  │                                     │   │
│  │  In Zen practice, the simple act   │   │
│  │  of washing bowls after a meal...  │   │
│  │  (16px, 2 lines max, ellipsis)     │   │
│  │                                     │   │
│  │                      READ →        │   │
│  │  (14px, uppercase, right-aligned)  │   │
│  └────────────────────────────────────┘   │
│  2px solid black border                    │
│                                             │
│  32px gap                                   │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │  [Blog Card 2]                     │   │
│  └────────────────────────────────────┘   │
│                                             │
│  32px gap                                   │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │  [Blog Card 3]                     │   │
│  └────────────────────────────────────┘   │
│                                             │
└────────────────────────────────────────────┘
```

**Blog Card Details:**
- Full width with 24px side margins
- 32px internal padding
- 2px solid border (#1A1A1A)
- 32px gap between cards
- Title: 24px, bold
- Excerpt: 16px, 2-line clamp with ellipsis
- Touch feedback: border changes to #A84032 on tap

---

## 👣 Footer (Padding: 64px vertical / 24px horizontal)

```
┌────────────────────────────────────────────┐
         2px solid black border (top)
│                                             │
│         WASH YOUR BOWLS                     │
│         (16px, bold, centered)              │
│                                             │
│      © 2025 · All rights reserved           │
│         (14px, #666666, centered)           │
│                                             │
│  32px gap                                   │
│                                             │
│            SUBSTACK                         │
│                                             │
│            TWITTER                          │
│                                             │
│             EMAIL                           │
│  (12px, vertical stack, centered)           │
│  (No "/" separators on mobile)              │
│  (16px spacing between items)               │
│  (44px touch targets)                       │
│                                             │
└────────────────────────────────────────────┘
```

**Footer Details:**
- Social links in vertical stack
- No "/" separators (hidden on mobile)
- Each link has 44px minimum touch target
- 12px uppercase font
- Hover/tap changes color to #A84032

---

## 🎨 Color Palette

```css
Background:     #F5F5F0  (warm beige)
Text Primary:   #1A1A1A  (near black)
Text Secondary: #666666  (medium gray)
Accent:         #A84032  (brick red)
Border:         #1A1A1A  (near black, 2px)
Hover BG:       #EEEEEA  (slightly darker beige)
```

---

## 📏 Key Measurements

### Spacing Scale
- XS: 8px
- SM: 16px
- MD: 24px ← Mobile margins
- LG: 32px ← Section spacing
- XL: 48px
- 2XL: 64px
- 3XL: 80px ← Vertical section padding
- 4XL: 120px (Desktop only)
- 5XL: 160px (Desktop only)

### Typography Scale
- Hero: 48-64px (fluid)
- H1: 48-64px (fluid)
- H2: 32-48px (fluid)
- H3: 24-32px (fluid)
- Body: 16px
- Small: 14px
- Meta: 12px

### Layout
- Nav Height: 64px
- Container Max Width: 375px (on this screen size)
- Side Padding: 24px (consistent throughout)
- Touch Target: 44px minimum

---

## 💫 Interactions & Animations

### Tap/Touch States
```css
/* Blog Cards */
Tap → Background: #EEEEEA
Tap → Border: #A84032

/* Links */
Tap → Color: #A84032

/* All transitions */
Duration: 200ms
Easing: ease-in-out
```

### Scroll Behavior
- Fixed navigation stays at top
- Smooth native scroll
- No parallax (performance)
- No JavaScript scroll listeners

---

## 🔍 Visual Hierarchy

### Level 1: Hero Title
- Largest element (48-64px)
- Staggered layout creates visual interest
- Accent color on "YOUR" draws attention

### Level 2: Section Titles
- "BLOG" at 48-64px
- "About" section title at 32-48px
- Clear section breaks

### Level 3: Blog Card Titles
- 24px, creates clear content hierarchy
- Bold weight for scannability

### Level 4: Body Text
- 16px, optimal mobile reading size
- 1.7 line-height for readability
- Secondary color (#666666) reduces visual weight

### Level 5: Metadata
- 12-14px for date, read time, labels
- Uppercase for distinction
- Secondary color

---

## 📱 Actual Device Rendering

### On iPhone SE (375px × 667px)
```
Viewport Height: 667px
- Navigation: 64px
- Hero: ~600px (90vh)
- About: ~400px
- Blog: ~900px (3 cards × ~300px)
- Footer: ~250px
─────────────────
Total: ~2214px
```

### Scroll Experience
1. **Initial View (Above fold):**
   - Navigation
   - Full hero title
   - Tagline visible

2. **First Scroll:**
   - About section enters
   - Hero exits

3. **Second Scroll:**
   - Blog section title enters
   - First blog card

4. **Third Scroll:**
   - Remaining blog cards
   - Footer enters

---

## ✨ Brutalist Design Elements Preserved

### Strong Borders
- 2px thick throughout
- Pure black (#1A1A1A)
- No rounded corners (except logo circle)
- Clear visual separation

### Generous Whitespace
- 24px side margins create breathing room
- 32px gaps between cards
- 80px section padding vertically
- Never cramped despite small screen

### Bold Typography
- Heavy font weights (700-800)
- Strong hierarchy
- Uppercase for emphasis
- Tight leading for impact

### Minimal Color Palette
- Only 5 colors used
- Beige, black, gray, red
- No gradients
- No shadows
- Flat design

### Direct Communication
- "READ →" call-to-action
- Clear section labels
- No decorative elements
- Function over form

---

## 🎯 Mobile-Specific Optimizations

### Touch Optimization
- All interactive elements ≥ 44px
- Adequate spacing between tap targets
- Active states for immediate feedback
- No hover-only interactions

### Performance
- No images (SVG only)
- Minimal CSS
- No JavaScript required
- Fast paint times

### Readability
- 16px body text (not smaller)
- 1.7 line-height for comfort
- High contrast ratios
- Sufficient margins

### Intentional Layout
- Vertical flow feels natural
- Staggered hero creates interest
- Single column reduces cognitive load
- Clear section breaks

---

## Summary

The 375px mobile design successfully translates the brutalist desktop experience to mobile by:

- ✅ Maintaining strong visual identity
- ✅ Preserving generous spacing
- ✅ Adapting layouts intelligently (not just shrinking)
- ✅ Ensuring touch-friendly interactions
- ✅ Keeping text readable and comfortable
- ✅ Creating visual interest within constraints
- ✅ Feeling intentional and well-designed

**The mobile experience stands on its own as a well-crafted design, not a compromise.**
