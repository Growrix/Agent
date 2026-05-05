---
document_type: component-spec
component: DetailSection
component_class: organism
file_path: src/components/sections/DetailSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - errors.not_found.title
  - errors.not_found.body
  - errors.network.title
  - errors.network.body
  - errors.network.retry
---

# DetailSection

## 1. Purpose
Structured detail content section used on service detail and area detail pages (overview, pricing guidance, expectations, process).

## 2. Variants
- service-detail
- area-detail

## 3. Props (zod-style schema)
```ts
{
  variant: 'service-detail' | 'area-detail',
  headingKey?: string,
  headingFromData?: string,
  bodyKey?: string,
  bodyFromData?: string,
  bulletsFromData?: string[],
  loading?: boolean,
  notFound?: boolean,
  error?: boolean,
}
```

## 4. States
Required states: `default`, `loading`, `not-found`, `error`.

- loading: skeleton text blocks
- not-found: friendly copy + CTA back to listing
- error: AlertMessage + retry

## 5. Accessibility
- Uses semantic headings and lists.

## 6. Responsive Behavior
- mobile: single-column.
- desktop: optional side-by-side blocks.

## 7. Motion
- Macro: reveal (purpose: hierarchy) optional.
- Reduced-motion: instant.

## 8. Composition examples
- Service detail body: what it is, common causes, what we check, what to expect.

## 9. Forbidden uses
- Do not embed raw HTML from CMS.

## 10. Test plan
- Unit: notFound/error branches.

## 11. Related
- [AlertMessage](AlertMessage.md)
- Pages: `pages/services-[slug].md`, `pages/areas-[slug].md`
