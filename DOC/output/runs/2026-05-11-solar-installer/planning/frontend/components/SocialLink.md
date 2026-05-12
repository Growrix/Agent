# Component Spec: SocialLink

**Group:** Trust  
**Type:** Atom  
**Route scope:** Used inside SocialIconRow everywhere

---

## Purpose

Individual social network icon link atom. Renders a lucide-react or SVG icon as an accessible anchor link. Always opens in a new tab.

---

## States

| State | Behavior |
|-------|----------|
| `default` | Icon at `var(--color-neutral-400)` |
| `hover` | Icon shifts to platform color or `var(--color-primary-400)` |
| `focused` | Visible focus ring |

---

## ARIA / Keyboard / Focus

- `<a href="[href]" target="_blank" rel="noopener noreferrer" aria-label="Follow SunEnergy Pro on [Platform]">`
- Icon SVG: `aria-hidden="true"`
- Minimum tap target: 44×44px (invisible padding)

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Hover | icon | `opacity 0.6→1.0` + color shift | 150ms | Color only |

---

## Content Keys

- `social.[platform].href`
- `social.[platform].aria` — full accessible label
