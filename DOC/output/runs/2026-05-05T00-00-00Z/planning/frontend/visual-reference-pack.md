# Visual Reference Pack — local-plumbing-marketing-site

This run does not declare screenshot-locked reference frames. The intent of this pack is to (a) document the trust-critical surfaces that require screenshot-based review during execution and (b) define the composition traits that must not drift.

## Trust-critical surfaces for screenshot review
- Shared header (desktop + mobile)
- Shared footer (desktop + mobile)
- Home hero block (desktop + mobile)
- Sticky mobile action bar (mobile)

## Composition traits to preserve
### Header
- Utility strip present on desktop/tablet: hours + click-to-call phone
- Primary CTA remains visible in the header (desktop/tablet)
- Mobile: brand + hamburger; drawer includes full nav + contact block

### Home hero
- Text-first clarity with trust badges visible above the fold
- CTA order: Call Now (primary) + Get Quote (secondary)
- Hero media: real photo panel (no illustration), with stable aspect ratio

### Footer
- Dense, locally-rooted information design
- Required trust slots: license, hours, service areas, review aggregate, primary phone
- Legal links grouped and visually separated

### Sticky mobile action bar
- Primary action: Call Now
- Secondary action: Get Quote
- Safe-area aware spacing; does not cover page CTAs

## Asset direction (real-photo posture)
- Favor real photos of staff/vehicles/work sites.
- Avoid “generic smiling call-center” imagery.
- Use consistent crops per archetype: 4:3 features, 1:1 staff portraits, 16:9 work site.

## Reduced-motion posture
Any reveal/transition effects used on these surfaces must have a reduced-motion fallback that preserves final visual state without layout shift.
