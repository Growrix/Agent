---
document_type: page-plan
page_id: 404
route: /404
scope: utility
build_stage: 6-trust-and-utility
depends_on:
  - 00-master-ui-architecture.md
  - 01-design-system.md
  - 02-component-system.md
---

# 404 Page

## Page Definition
- Purpose: recover lost visitors and route them into useful plumbing actions instead of dead-ending.
- Target audience: any visitor who lands on a broken or outdated route.
- Primary CTA: Go Home.
- Secondary CTA: Call Now or Open Chat.

## Sections In Visual Order

### 1. Error Hero
- Content: short, reassuring error copy and a direct path back into the site.
- Components: hero, CTA pair, subtle visual motif.

### 2. Fast Recovery Links
- Content: services, areas, reviews, quote, booking, and FAQ.
- Components: utility cards, icon links.

### 3. Help Actions
- Content: call, WhatsApp, and AI assistant access.
- Components: action cluster, prompt chips.

## State Requirements
- Error messaging must remain accessible and not depend on animation.

## SEO and Metadata
- Title: Page Not Found.
- Description: The page could not be found. Continue to services, quote, booking, reviews, or support.
