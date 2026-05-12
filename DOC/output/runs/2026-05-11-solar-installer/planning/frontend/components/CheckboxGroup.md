# Component Spec: CheckboxGroup

**Group:** Forms  
**Type:** Atom  
**Route scope:** ContactForm (consent), Free Assessment (multi-select options)

---

## Purpose

Single checkbox or group of checkboxes with labels, support for required consent items, and validation state.

---

## States

| State | Behavior |
|-------|----------|
| `unchecked` | Empty box |
| `checked` | Filled amber box + checkmark icon |
| `indeterminate` | Dash icon (for group select-all) |
| `invalid` | Red border around group + error message |
| `disabled` | Grayed; not interactable |
| `dark-theme` | Border and check icon adapt |

---

## ARIA / Keyboard / Focus

- Single: `<input type="checkbox">` with explicit `<label>`
- Group: `<fieldset>` + `<legend>` + individual `<input>`/`<label>` pairs
- Required consent: `aria-required="true"`
- Error: `aria-describedby` linking to error message

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| All | Full width; stacked vertically for groups |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Check | checkmark icon | Draw-in (path animation) | 150ms | Instant |

---

## Content Keys

- Label text passed via props; consent language via `forms.consent_label`
