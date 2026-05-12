# Component Spec: PortfolioCard

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Portfolio page, Home portfolio preview

---

## Purpose

Displays a single portfolio project with thumbnail image, project type badge, location, system size, and a "View Project" CTA that opens the Lightbox or detail modal.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Square/landscape thumbnail + overlay on hover |
| `featured` | Larger aspect ratio (16:9) for featured grid positions |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Thumbnail shown; overlay hidden |
| `hover` | Overlay fades in with project details + "View Project" button |
| `focused` | Outline on card wrapper; overlay reveals for keyboard users |
| `loading` | Skeleton rectangle at thumbnail dimensions |
| `dark-theme` | Overlay adapts; background neutral-900 |

---

## ARIA / Keyboard / Focus

- `<article>` wrapper
- `<button aria-label="View [project name] project details">`
- `aria-haspopup="dialog"` (opens Lightbox)
- Keyboard: Enter opens Lightbox

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | 1-column full width |
| `sm–md` | 2-column |
| `lg+` | 3-column; featured spans 2 columns |

---

## Overlay Content

- Project type badge (e.g., "Residential", "Commercial") — amber pill
- System size
- Location
- "View Project →" button

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | card | `opacity 0→1` + scale `0.97→1` | 300ms | `ease-out` | Instant |
| Hover | overlay | `opacity 0→1` | 200ms | `ease-out` | Persistent overlay (always visible) |
| Hover | thumbnail | scale `1→1.05` (inside clip) | 400ms | `ease-out` | No scale |

---

## Content Keys

- `portfolio.[project_id].title`
- `portfolio.[project_id].type`
- `portfolio.[project_id].location`
- `portfolio.[project_id].system_size`
- `portfolio.[project_id].thumbnail_src`
- `portfolio.[project_id].alt`
