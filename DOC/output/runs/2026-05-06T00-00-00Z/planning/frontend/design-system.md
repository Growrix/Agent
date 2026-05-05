# Design System

Visual archetype: local-business-trust
Theme strategy: light-first with optional dark companion.

## Token Philosophy
- No ad hoc styling decisions.
- Brand expression comes from token families, not inline values.
- CTA priority is expressed by semantic intent tokens.

## Color Roles
- brand primary for trust surfaces.
- brand accent for conversion triggers.
- neutral surfaces for readability and hierarchy.
- semantic success, warning, danger, info roles for system feedback.

## Typography
- Display family for high-impact marketing headlines.
- Body family for long-form readability.
- Mono role for data labels and calculator output values.
- Fluid typographic scale mapped to token aliases.

## Spacing and Layout
- Section, block, and inline spacing all tokenized.
- Layout widths defined as shell tokens.
- Card and panel padding resolved by component density tokens.

## Radius, Borders, and Shadows
- Radius families support soft trust presentation.
- Border emphasis tiering for input states and card grouping.
- Elevation tokens define depth for modal, sticky rail, and hero overlays.

## Motion
- Duration and easing from trust-oriented motion band.
- Macro transitions prioritize readability over speed.
- Micro feedback used for controls and conversion cues only.
- Reduced-motion mappings are mandatory and documented in motion-system.md.

## Breakpoints
- mobile, tablet, desktop, wide-desktop defined as named tokens.
- Mobile dock behavior is required for primary conversion flows.

## Iconography and Imagery
- Rounded icon style with strong silhouette.
- Image direction is documentary and installation-realistic.
- Decorative vectors are secondary to real project photography.

## Accessibility Contracts
- Focus ring token required on all interactive controls.
- Contrast pairs in tokens satisfy AA for body and UI elements.
- Interaction color alone never carries meaning.
