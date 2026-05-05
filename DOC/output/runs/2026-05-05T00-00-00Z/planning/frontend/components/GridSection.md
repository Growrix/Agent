---
document_type: component-spec
component: GridSection
component_class: organism
file_path: src/components/sections/GridSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - errors.network.title
  - errors.network.body
  - errors.network.retry
---

# GridSection

## 1. Purpose
Reusable listing/grid section with skeleton loading and error/empty handling. Used for services, areas, reviews, and blog listings.

## 2. Variants
- services-grid
- areas-grid
- testimonials-grid
- blog-grid

## 3. Props (zod-style schema)
```ts
{
  variant: 'services-grid' | 'areas-grid' | 'testimonials-grid' | 'blog-grid',
  headingKey?: string,
  headingFromData?: string,
  items: Array<unknown>,
  loading?: boolean,
  error?: boolean,
  empty?: boolean,
  filteredEmpty?: boolean,
}
```

## 4. States
Required states: `default`, `loading` (skeleton), `populated`, `empty`, `filtered-empty`, `error`.

- loading: skeleton cards matching final layout
- error: AlertMessage with recovery action
- empty/filtered-empty: shows next action to recover (navigate to /services or call)

## 5. Accessibility
- Maintains heading outline; grid uses list semantics.

## 6. Responsive Behavior
- mobile: 1-column.
- tablet: 2-column.
- desktop: 3-column for services/areas; testimonials may be 2–3.

## 7. Motion
- Macro: section reveal (purpose: hierarchy) optional.
- Reduced-motion: instant.

## 8. Composition examples
- Services page: GridSection(services-grid) of Card(service-card).

## 9. Forbidden uses
- Do not show spinners for list loading.

## 10. Test plan
- Unit: loading/error/empty branches.

## 11. Related
- [Card](Card.md)
- [AlertMessage](AlertMessage.md)
- Pages: list pages
