# Visual Reference Pack — Roofing MVP

**Status:** PLANNED | **Timestamp:** 2026-05-07

---

## Purpose

Provide concrete direction for hero compositions, mobile adaptations, and asset requirements. Developers and designers reference this for layout intent and photography direction.

---

## Hero Compositions

### Home Hero

**Desktop (≥ lg):**
- Layout: Full-bleed background image (100vw, min-height: 100svh)
- Text stack (left-aligned or centered, 48–56px top padding):
  - Headline (display 2, 48px, navy navy): "Trusted Roofing Solutions for Your Home"
  - Subheading (body large, 18px, navy text-secondary, 24px below headline): "Fast inspections, transparent pricing, backed by warranty. Your roof matters to us."
  - CTA button (48px height, accent background, 32px below subheading)
- Trust badges (4 pills: licensed, insured, 25+ years, "Answers in <10 minutes") — positioned bottom-left or right of text, 32px from edge, staggered entrance animation (240ms per badge)
- Gradient overlay: 0–50% opacity dark navy (rgba(0, 0, 0, 0.4)) covering right 60% of image to ensure text contrast
- Image: real worksite or roof scene; clear sky or appropriate weather; shot from ground level or vehicle perspective; 16:9 aspect ratio

**Tablet (md–lg):**
- Background: same image
- Text: 40px headline, 16px subheading
- Badges: 2-row layout (2 badges per row)
- Min-height: 80svh

**Mobile (< md):**
- Background: same image (may focus on lower portion for mobile framing)
- Text: 32px headline (may break to 2 lines), 14px subheading
- Badges: vertical stack (2px gap) or single-row wrap
- Min-height: 60svh
- Text positioned: 24px top padding, 20px horizontal padding, max-width 90vw
- Gradient overlay: may be stronger (0–60% opacity) for mobile readability

**Key visual intention:** Professional, calm, trustworthy. Headline commands attention; subheading qualifies urgency. Badges provide social proof before CTA. Gradient ensures readability without obscuring background.

### Storm Damage Hero

**Desktop:**
- Layout: Full-bleed background image (storm clouds, hail damage, or torn roofing)
- Text stack (center-aligned, urgent tone):
  - Headline (display 1, 56px, warm accent or red): "Storm Damage?"
  - Subheading (body large, 18px, text-primary): "Same-day inspections available. Call now to document your damage for insurance."
  - CTA button (large, accent background, 48px height): "Emergency Contact"
  - Phone number (link, large, accent color, clickable tel:)
- Badges: minimal (only critical trust signal: "Same-Day" or "Licensed")
- Gradient overlay: warm amber or red gradient (50%+ opacity) to create urgency and ensure text contrast
- Image: dramatic storm photo or visible roof damage; urgency conveyed via imagery

**Tablet/Mobile:**
- Same intent, adjusted sizing (40px headline, 56px CTA button height for touch)
- Phone number: larger, more prominent (primary affordance)

**Key visual intention:** Urgent but reassuring. Warm accent dominance signals emergency path. Large CTA and phone number above fold. No secondary information competing for attention.

### Materials Page Hero

**Desktop:**
- Layout: Simple hero with subtle background (light gradient primary-50 to background)
- Text (centered):
  - Headline (h1/display 2, 48px, navy): "Compare Roofing Materials"
  - Subheading (body large, 16px, text-secondary): "Understand your options: asphalt, metal, tile. Each with pros, cons, and ideal use cases."
- Optional: Material icons or samples floating in background (3 icons at 20% opacity representing each material)
- Image: optional; if present, small comparison photo (1:1 or 4:3) on right side, 25% of hero width
- Min-height: 60svh

**Key intention:** Educational, not urgent. Neutral background. Clear headline establishing comparison intent.

---

## Mobile Compositions (Responsive Adaptations)

### Mobile Hero Pattern

**Viewport:** xs (320–640px)
**Key changes:**
- Text: center-aligned (unless explicitly left-aligned)
- Headline: 32–40px (breaks naturally into 1–2 lines)
- Subheading: 14–16px, max-width 90vw
- Gradient overlay: stronger (60%–80% opacity) for contrast on small screens
- CTA button: 100% width, 48px height, 20px horizontal padding (touch-friendly)
- Badges: vertical stack or wrapped 2-per-row (never overlapping text)
- Safe-area-inset-bottom: accounted for on notched devices (iPhone X+)
- Padding: 24px top, 20px horizontal, 24px bottom (above next section)

### Mobile Content Section Pattern

**Padding:** 20px horizontal, 40px vertical (vs. 24px/80px desktop)
**Typography:** Slightly larger body font (16px) for readability on small screens
**Cards:** 1-column stack, full-width, 20px margin-bottom
**Buttons:** 100% width or CTA link only (no outline button on mobile; too small)

---

## Asset Brief

### Photography Requirements

**Hero backgrounds (all pages):**
- Real photos only (no stock-photo aesthetics, no AI mockups)
- Minimum resolution: 1920×1080 (desktop); 1280×1280 (mobile optimized)
- Formats: WebP (primary), JPEG (fallback)
- Lazy loading: defer load until IntersectionObserver triggers (above-fold hero: eager)
- Responsive images: `srcset` for 1x and 2x pixel densities

**Before/after project photos:**
- Pairs: minimum 10 before/after pairs for gallery
- Aspect ratio: 3:2 (landscape) or 16:9
- Real worksite photos; authentic documentation of customer work
- Permission: ensure client/customer consent for image use
- Labels: job type, location, date completed, warranty info

**Team member portraits:**
- Headshots: 1:1 aspect ratio, 400×400px minimum
- Professional lighting; authentic workplace photos (not studio only)
- Permission: explicit signed model release required
- Fallback: if portrait unavailable, use placeholder avatar (navy circle + initials)

**Service/material icons:**
- Custom SVG icons (20–24px, 2px stroke)
- Color: navy primary or text-secondary (inherit from component)
- Filled icons: checkmark, checkmark-circle, shield, bolt (for badges)

### Forbidden Media Sources

❌ Generic stock photo sites (Unsplash, Pexels, Pixabay style)  
❌ "Happy team" or "smiling customers" stock photos  
❌ AI-generated mockup UIs or lifestyle renders  
❌ Photoshopped product-on-lifestyle composites  
❌ Low-resolution or heavily compressed imagery  
❌ Brand competitor photos (never use competitor worksite images)  

### Fallback & Reliability

**Broken images:**
- Placeholder: gradient background (primary-50 to primary-100) + loading icon (center)
- Error state: remains 2 seconds, then fades; link to "Report broken image"
- LCP (Largest Contentful Paint): never rely on remote image; preload or inline critical hero

**Image CDN strategy:**
- Vercel Image Optimization (if hosted on Vercel)
- OR Cloudinary (external CDN with responsive image delivery)
- Automatic format conversion (WebP for modern browsers, JPEG fallback)
- Automatic responsive sizing (srcset generation)

---

## Aspect Ratio Specifications

| Use case | Ratio | Notes |
|---|---|---|
| Hero background | 16:9 or panorama (32:9) | Cinematic feel; responsive height |
| Service card image | 4:3 | Wide enough for icon overlay; standard |
| Project before/after | 3:2 or 16:9 | Landscape orientation; suitable for grid |
| Team portrait | 1:1 | Circular crop on mobile; square on desktop |
| Material icon | 1:1 | SVG, no image necessary |
| Testimonial avatar | 1:1 (32×32px) | Tiny circular; can be initials instead of photo |
| Social media preview | 1.91:1 (OG:image) | Required for link sharing |

---

## Layout Principles per Screen Size

### Desktop Hero (≥ lg)
```
┌─────────────────────────────────────────────┐
│ [Background Image - Full Bleed]             │
│                                             │
│   [Headline – 48px Navy]                   │
│   [Subheading – 18px]                      │
│   [CTA Button – 48px]                      │
│                                             │
│                        [Badge 1] [Badge 2] │
│                        [Badge 3] [Badge 4] │
│                                             │
│ [Gradient Overlay – 50% opacity]          │
└─────────────────────────────────────────────┘
```

### Mobile Hero (< md)
```
┌──────────────────┐
│ [Background]     │
│   (taller,       │
│   60svh)         │
│                  │
│ [Gradient]       │
│                  │
│ [Headline]       │
│ [Subheading]     │
│ [CTA Button]     │
│ [Badges Stack]   │
│                  │
└──────────────────┘
```

---

## Color & Contrast Notes for Photography

**When selecting images:**
- Prefer images with clear sky or positive weather (not storm clouds, except storm page)
- Ensure background supports navy text (at least 50% dark area or gradient overlay)
- Team photos: prefer neutral backgrounds (office setting, outdoor daylight, not studio white)
- Material images: clear, well-lit photos of actual materials (not marketing renders)

**Contrast verification:**
- Run all hero backgrounds through WCAG contrast checker with proposed text color
- Headline (navy, 48px) must achieve ≥ 3:1 against background (AAA for large text)
- If below 3:1, increase gradient overlay opacity or adjust text color

---

## Digital Asset Delivery

**Repository structure:**
```
public/
├── images/
│   ├── hero/
│   │   ├── home-hero.webp (1920×1080)
│   │   ├── home-hero-mobile.webp (1080×1440)
│   │   ├── storm-hero.webp
│   │   └── ...
│   ├── projects/
│   │   ├── project-1-before.webp
│   │   ├── project-1-after.webp
│   │   └── ...
│   ├── team/
│   │   ├── john-smith.webp (400×400)
│   │   └── ...
│   └── icons/
│       ├── service-inspection.svg
│       └── ...
```

**Image optimization (Next.js Image component):**
```typescript
<Image
  src="/images/hero/home-hero.webp"
  alt="Roofing contractor team on worksite"
  width={1920}
  height={1080}
  priority // for hero (LCP)
  sizes="(max-width: 640px) 100vw, 100vw"
  quality={85}
/>
```

---

## Animation Notes for Imagery

**Hero text:**
- Staggered reveal per word/line on page load
- 200ms per element, ease-out
- Reduced-motion: instant

**Project gallery:**
- Before/after toggle: crossfade 200ms ease-out
- Gallery grid: lazy-load + fade-in 280ms on scroll-into-view

**Testimonial carousel:**
- Image fade + crossfade with quote text
- 240ms ease-out per slide

---

**Final note:** All imagery must pass brand review before deployment. Assets are final deliverables; re-optimize post-approval per CDN strategy above.
