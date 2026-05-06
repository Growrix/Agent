---
document_type: component-spec
component: StatBlock
component_class: molecule
file_path: src/components/shared/StatBlock.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# StatBlock

## 1. Purpose
Compact metric tile used to display proof counts (years in business, response time, review count).

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  labelKey?: string,
  labelFromData?: string,
  valueFromData: string,
  tone: 'default' | 'primary',
  countUp?: boolean,
}
```

## 4. States
Required states: `default`, `count-up-running`, `count-up-complete`.

- default: static value shown
- count-up-running: value animates from 0→target
- count-up-complete: settles to exact value

## 5. Accessibility
- If animated, keep the final value readable and do not rely on motion to convey meaning.

## 6. Responsive Behavior
- mobile: stat row becomes a 2x2 grid or horizontal scroll rail.
- desktop: inline row.

## 7. Motion
- Micro: count-up (purpose: hierarchy) only for non-critical proof and only when `prefers-reduced-motion` is not requested.
- Reduced-motion: render static final value.

## 8. Composition examples
- Home proof strip: years, response time, reviews.

## 9. Forbidden uses
- Do not animate critical numbers that must be read instantly (like phone).

## 10. Test plan
- Unit: reduced-motion renders static value.

## 11. Related
- [HeroSection](HeroSection.md)
- Pages: `pages/home.md`
