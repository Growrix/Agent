---
document_type: interaction-matrix
project_name: plumbing-service-website
build_stage: 3-component-foundation
depends_on:
  - master-ui-architecture.md
  - component-system.md
  - motion-system.md
---

# Interaction Matrix

## Global Interactions
| Surface | Trigger | Response | Analytics | Accessibility |
|---|---|---|---|---|
| Header CTA | click / tap | initiate tel: action | cta_call_clicked | button semantics, focus ring |
| Sticky dock quote | click / tap | route to /quote | sticky_quote_clicked | visible label, tap parity |
| Drawer menu | tap menu button | open right drawer | mobile_nav_opened | focus trap, ESC close |
| Cookie banner accept | click | persist consent choice | cookie_consent_updated | keyboard reachable |

## Hero Interactions
| Element | Trigger | Response | Analytics |
|---|---|---|---|
| Primary hero CTA | click | tel: action | home_hero_call_clicked |
| Secondary hero CTA | click | route to /quote | home_hero_quote_clicked |
| Trust badges | hover / focus | no hidden content, only emphasis | none |

## Form Interactions
| Form | Trigger | Response | Error Recovery |
|---|---|---|---|
| Quote form | submit | POST /api/leads after Turnstile verification | inline errors, preserve values |
| Contact form | submit | POST /api/leads with source=contact | toast + inline fallback |

## Listing Interactions
| Surface | Trigger | Response | Analytics |
|---|---|---|---|
| Service card | click | route to /services/[slug] | service_card_clicked |
| Area card | click | route to /areas/[slug] | area_card_clicked |
| FAQ accordion | click / enter / space | expand item | faq_item_opened |

## Mobile-Only Interactions
| Surface | Trigger | Response |
|---|---|---|
| Sticky dock call | tap | tel: action |
| Sticky dock quote | tap | route to /quote |
| Sticky dock contact | tap | route to /contact |

## Feedback States
- Buttons: hover, focus-visible, active, disabled, loading.
- Inputs: default, focus, filled, validation-error, success.
- Quote form: submitting, success banner, server-error with retry path.
- Accordion: collapsed, expanded, keyboard-focused.