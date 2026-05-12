# Component Spec: TeamCard

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Team page, About team preview section

---

## Purpose

Displays a team member with circular headshot, name, title, 1-line expertise, certification badges, and expand toggle for full bio.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Circular photo + name + title + expand toggle |
| `featured` | Larger founder card (used for CEO/Founder, full-section) |
| `compact` | Name + title + role only (for About page preview) |

---

## States

| State | Behavior |
|-------|----------|
| `collapsed` | Default; shows photo + name + title + "View Bio" button |
| `expanded` | Bio text reveals below with smooth height animation |
| `hover` | Subtle lift on card; "View Bio" text color → amber |
| `loading` | Circular skeleton + 2 text line skeletons |
| `dark-theme` | `background: var(--color-surface-dark-800)` |

---

## ARIA / Keyboard / Focus

- `<article aria-labelledby="team-[id]-name">`
- Expand button: `aria-expanded="false"`, `aria-controls="team-[id]-bio"`, `aria-label="View bio for [name]"`
- Bio section: `id="team-[id]-bio"`
- LinkedIn link (if present): `aria-label="[Name] on LinkedIn (opens in new tab)"`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | 2-column grid (compact photo + name only); expand on tap |
| `sm–lg` | 3-column |
| `lg+` | 4-column; featured card spans 2 |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Bio expand | bio content | `height 0→auto` via `AnimatePresence` | 300ms | `ease-out` | Instant |
| Scroll enter | card | `opacity 0→1` + stagger 80ms | 280ms | `ease-out` | Instant |

---

## Content Keys

- `team.members.[id].name`
- `team.members.[id].title`
- `team.members.[id].expertise`
- `team.members.[id].bio`
- `team.members.[id].photo_src`
- `team.members.[id].photo_alt`
- `team.members.[id].linkedin_url`
- `team.members.[id].certifications[]`
