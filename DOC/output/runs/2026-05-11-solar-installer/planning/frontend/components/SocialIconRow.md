# Component Spec: SocialIconRow

**Group:** Trust  
**Type:** Organism  
**Route scope:** Header topbar (left slot), Footer, Hero side rail (optional)

---

## Purpose

Horizontal row of social icon links. Delegates individual link rendering to `SocialLink`. Supports three canonical deployment zones: topbar, footer, and hero side rail.

---

## Variants

| Variant | Description |
|---------|-------------|
| `topbar` | 14px icons, horizontal, icon-only, left of topbar |
| `footer` | 20px icons, horizontal centered or left-aligned under logo |
| `hero-rail` | 18–20px icons, vertical rail, fixed left or right edge |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Icons at rest |
| `dark-theme` | Icon color adapts to theme token |

---

## ARIA / Keyboard / Focus

- `<nav aria-label="SunEnergy Pro on social media">`
- Each icon: `<SocialLink>` with individual aria-labels
- Tab order: left-to-right (horizontal), top-to-bottom (vertical)

---

## Responsive Declarations

| Breakpoint | Topbar behavior |
|------------|-----------------|
| `< md` | Hidden in topbar; visible in footer + mobile menu |
| `md+` | Visible in topbar |

---

## Content Keys

- `social.facebook.href`, `social.facebook.aria`
- `social.instagram.href`, `social.instagram.aria`
- `social.youtube.href`, `social.youtube.aria`
- `social.linkedin.href`, `social.linkedin.aria`
