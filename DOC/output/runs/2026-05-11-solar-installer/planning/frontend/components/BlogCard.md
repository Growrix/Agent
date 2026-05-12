# Component Spec: BlogCard

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Blog index, Home blog teaser, Resources page

---

## Purpose

Displays a single blog post with thumbnail, category tag, title, excerpt, author, date, and read time. Used in blog grid and homepage teaser grid.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Vertical card: thumbnail + tag + title + excerpt + meta |
| `featured` | Large horizontal card for featured blog post (full-width) |
| `compact` | Title + meta + tag only (for sidebar or list view) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static card |
| `hover` | Title underlines; thumbnail scales 1.03; card lifts 3px |
| `loading` | Skeleton: thumbnail rect + 2 text lines |
| `dark-theme` | `background: var(--color-surface-dark-800)` |

---

## ARIA / Keyboard / Focus

- `<article>` wrapper
- Card heading: `<h3>`
- Entire card is a link wrapper: `<a href="/blog/[slug]" aria-label="Read: [post title]">`
- Focus ring on card wrapper

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | 1-column full width |
| `sm–lg` | 2-column |
| `lg+` | 3-column; featured card spans full width |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | card | `opacity 0→1` + stagger 80ms | 280ms | `ease-out` | Instant |
| Hover | thumbnail | `scale(1.03)` (inside overflow:hidden) | 350ms | `ease-out` | No scale |
| Hover | card | `translateY(-3px)` | 200ms | `ease-out` | Shadow only |

---

## Content Keys

- `blog.[slug].title`
- `blog.[slug].excerpt`
- `blog.[slug].category`
- `blog.[slug].author`
- `blog.[slug].date`
- `blog.[slug].read_time`
- `blog.[slug].thumbnail_src`
- `blog.[slug].thumbnail_alt`
