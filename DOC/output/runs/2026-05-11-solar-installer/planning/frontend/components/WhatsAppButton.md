# Component Spec: WhatsAppButton

**Group:** Buttons  
**Type:** Atom  
**Route scope:** Contact page, FloatingActionButton (mobile)

---

## Purpose

WhatsApp-branded CTA button that opens a pre-filled WhatsApp chat. Opens `https://wa.me/[number]?text=[prefilledMessage]` in new tab.

---

## States

| State | Behavior |
|-------|----------|
| `default` | WhatsApp green fill + WhatsApp icon |
| `hover` | Slightly darker green + scale 1.02 |
| `focused` | Green outline |

---

## ARIA / Keyboard / Focus

- `<a href="https://wa.me/..." target="_blank" rel="noopener noreferrer" aria-label="Chat with SunEnergy Pro on WhatsApp (opens in new tab)">`

---

## Content Keys

- `contact.whatsapp.number`
- `contact.whatsapp.prefilled_message`
- `contact.whatsapp.aria_label`
- `contact.whatsapp.label`
