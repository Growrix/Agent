# Component Spec — SiteHeader

**Path:** `web/src/components/global/SiteHeader.tsx`  
**Type:** Global shell — server + client (scroll state is client)

---

## Purpose
The site header is the primary navigation and trust-first contact surface. On every page it must answer in under 3 seconds: "what is this business, can I call them, and where do I go next?"

## Variants
- `transparent` — used on routes with cinematic heroes (home, service detail); nav text `--color-text-on-dark`
- `opaque` — used on interior pages without hero media; nav text `--color-text`

## Structure

### Topbar (desktop only, `≥ 1024px`, hidden after scroll)
- Left: address/tagline (`body-sm`, `--color-text-muted`) — content key `nav.topbar.address`
- Center: hours (`body-sm`) — content key `nav.topbar.hours`
- Right: phone number (`--font-weight-semibold`, `--color-accent`, `body-lg`, click-to-call `href="tel:..."`) — content key `nav.topbar.phone`

### Main Nav
- Logo (left): SVG logo, white variant on transparent, default on opaque. 40px height.
- Nav links (center-left): Services ▾ | Areas | Reviews | About | Contact — `font-weight-medium`, `body`
- Services link triggers `ServiceDropdown` on hover (desktop) + click
- Right: ThemeSwitcher (icon button) + "Get Free Quote" Pressable (accent, `--radius-md`, padding `--space-3 --space-6`)

### Scroll Condensed State
- Trigger: scroll > 80px
- Topbar hides (`height: 0`, `overflow: hidden`, duration `--motion-duration-base`)
- Main nav height: 64px
- Background: `backdrop-blur-md` + `bg-background/90` (light) or `bg-dark-bg/90` (dark section routes)
- Border-bottom: `--color-border`
- Logo: shifts to standard variant
- Phone number added to right side (condensed)

## States
| State | Behavior |
|-------|---------|
| `at-top / transparent` | No background, white text, white logo |
| `at-top / opaque` | `--color-background` bg, dark text |
| `scrolled-down` | Condensed 64px, backdrop-blur, border-b |
| `mobile-nav-open` | Hamburger becomes X, overlay active |

## ARIA
- `<header role="banner">`
- `<nav aria-label="Main navigation">`
- Skip link: first child of `<body>` — visually hidden, shown on focus
- Phone link: `aria-label={nav.topbar.phone_aria_label}`

## Responsive
- `< 1024px`: Topbar hidden entirely. Logo + hamburger + phone icon only. After hamburger tap: full-screen `Surface(modal)` slide-over.
- `≥ 1024px`: Full topbar + main nav.

## Motion
- Topbar hide: `height: 0`, `opacity: 0`, `--motion-duration-base`, `--motion-easing-out`
- Nav condense: padding transition, `--motion-duration-base`
- Dropdown open: `opacity: 0 → 1`, `translateY: -8px → 0`, `--motion-duration-base`, `--motion-easing-out`
- Reduced-motion: all transitions instant

## Content Keys Used
- `nav.topbar.address`
- `nav.topbar.hours`
- `nav.topbar.phone`
- `nav.topbar.phone_aria_label`
- `nav.links.services`
- `nav.links.areas`
- `nav.links.reviews`
- `nav.links.about`
- `nav.links.contact`
- `nav.cta.get_quote`
- `brand.logo_alt`
