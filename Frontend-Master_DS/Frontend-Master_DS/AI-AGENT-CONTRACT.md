# AI Agent Contract — Frontend Master DS

> **Read this file before doing anything in this repo.**
> The machine-readable counterpart is [`.ai-scope.json`](./.ai-scope.json).
> The runtime contract is [`generated/ds.contract.json`](./generated/ds.contract.json) (re-emitted by `npm run ds:contract`).

---

## 0. What this repo IS

This is a **design system factory**. We build per-client sites by:

1. Cloning this repo (or its DS surface) as a starting point.
2. Adding a `<industry>.ts` preset under `src/site/presets/` describing the client's content.
3. (Optional) Adding new section variants under `src/ds/composition/sections/variants/<kind>/`.
4. Building + exporting the project from `src/app/`.
5. Resetting the DS to its locked state for the next client.

The **DS itself is not a deliverable**. Per-project work happens in additive, scoped areas. Editing the DS core breaks every other project that consumes it.

---

## 1. What you MUST NOT touch

The following paths are **LOCKED**. Agents must not edit existing files in these paths. (Adding files in some of them is allowed only where explicitly noted in section 3.)

- `src/ds/foundation/**` — tokens, themes, motion presets, archetype registry, a11y
- `src/ds/primitives/**` — Button, Input, Stack, Grid, etc.
- `src/ds/components/**` — Card, Modal, DataTable, Marketing, etc.
- `src/ds/composition/sections/_schema.ts` — variant schema contract
- `src/ds/composition/sections/_helpers.ts`
- `src/ds/composition/patterns/**` — SectionPattern, PageTemplate
- `src/ds/composition/templates/**`
- `src/ds/composition/blocks/**`
- `src/ds/layouts/**` — DashboardShell, PublicShell, DocsShell, CenteredShell
- `src/ds/platform/**` (including `PublicPresetPage.tsx`, `PublicSiteShell.tsx`, `publicSitePreset.ts`, etc.)
- `src/ds/runtime/**` — multi-device runtime
- `src/ds/visuals/**` — BackgroundFX, Glow, NoiseOverlay
- `src/ds/widgets/**`
- `src/ds/styles/**` — the 10-layer CSS architecture
- `src/ds/preview/**`
- `src/ds/icons.ts`
- `src/ds/patterns/**`
- `src/ds/utils/**`
- `src/ds/index.ts` — public DS export barrel
- `src/ds/__codegen__/**` — DS contract generator
- `DOC/**` — handbook chapters (human-curated)
- `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `jest.config.js`, `jest.setup.ts`
- `scripts/**`
- `AI-AGENT-CONTRACT.md`, `.ai-scope.json`

Adding new third-party dependencies is **forbidden** without explicit human approval.

---

## 2. What you MAY ADD (extension paths)

Two paths accept **new files** (never edits to existing files inside them):

### 2.a `src/ds/composition/sections/variants/<kind>/<variant-id>.tsx`

To add a new section variant:

1. Pick a `kind` (one of: `hero` / `features` / `testimonials` / `faq` / `blogList` / `cta` / `newsletter` / `stats-band` / `process-steps` / `logo-cloud` / `case-studies`).
2. Create the file `src/ds/composition/sections/variants/<kind>/<variant-id>.tsx`.
3. The file MUST export two symbols:
   - A constant `<VARIANT_ID_UPPERCASE>_META` conforming to `SectionVariantMeta` (see `src/ds/composition/sections/_schema.ts`).
   - A React component `<VariantIdPascalCase>` accepting the matching section model shape from `src/ds/platform/publicSitePreset.ts`.
4. The component MUST:
   - Use only design tokens for styling (no raw hex / rgb / px / ms).
   - Honor `prefers-reduced-motion: reduce` for every animation (most motion is handled by the shared classes in `ds.section-variants.css`).
   - Render gracefully when optional content fields are absent.
   - Stamp `data-variant="<id>"` and `data-archetype="<archetype>"` on its root element.
5. Add ONE import line + ONE entry to the `SECTION_REGISTRY` map in `src/ds/composition/sections/_registry.ts`. **This is the ONLY edit allowed to a locked file** — and only this surgical, additive edit.
6. Run `npm run ds:contract`. The contract emitter validates that every effect your variant declares is permitted by its archetype's permission window (see `archetypeRegistry.ts`). Permission violations fail the build.

CSS for the new variant lives in `src/ds/styles/ds.section-variants.css`. Adding a CSS class block there IS allowed when registering a new variant, but only at the bottom of the file (append-only) and only scoped to the new variant's class names (`.sv-<id>__*`).

### 2.b `src/site/presets/<industry>.ts`

To add a new industry preset:

1. Create `src/site/presets/<industry>.ts`.
2. Export a constant `<INDUSTRY_UPPERCASE>_PRESET` conforming to `PublicSitePreset` (see `src/ds/platform/publicSitePreset.ts`).
3. The preset MAY declare a top-level `archetype` and per-page `archetype`. It MAY opt sections into variants by setting `variant: "<variant-id>"`.
4. Add ONE import + ONE entry to the `SITE_PRESETS` map in `src/site/index.ts`.
5. Run `npm run ds:contract` to refresh the contract.

---

## 3. What you can freely edit (project-content paths)

These paths are the **per-project surface**. Agents may edit freely here for a given project; the DS itself is unaffected.

- `src/app/**` — Next.js route content
- `src/features/**` — per-project feature modules
- `src/flows/**` — per-project flows

When a project ships, these paths capture the project's surface; the DS resets to its locked state for the next project.

---

## 4. Variant selection rules (for agents using the DS)

Given a brief, an agent picks variants by reading `generated/ds.contract.json` (or `SECTION_VARIANT_META_LIST` in the registry directly). Selection should respect:

1. **Kind match.** A `kind: "hero"` section can ONLY use a variant whose meta declares `kind: "hero"`.
2. **Archetype alignment.** Prefer variants whose `archetype` matches the preset's site/page archetype. Other archetypes are allowed but flagged.
3. **Theme support.** Variants that declare `supportsThemes: ["dark"]` only must NOT be selected when the project is light-only.
4. **Effect permissions.** Variants declare which advanced effects they use. The contract emitter enforces that effects ⊆ archetype permissions at build time.
5. **Default fallback.** If a section omits `variant`, the renderer uses the default variant for the kind (the entry with `isDefault: true`). If none exists, the renderer uses the built-in legacy fallback.

---

## 5. Verification gate (mandatory)

Before claiming an extension is complete, run:

```bash
npm run verify
```

This chains:
1. `typecheck` — TypeScript across the repo
2. `lint` — ESLint with `--max-warnings 0`
3. `test` — full Jest suite
4. `build` — Next.js production build
5. `ds:audit` — token discipline scan (no raw hex/rgb)
6. `ds:a11y` — focused a11y tests on critical components
7. `ds:contract` — regenerate + validate `generated/ds.contract.json`

Any non-zero exit means the extension is incomplete. Investigate; do not bypass.

---

## 6. Forbidden actions (summary)

- Editing files matching `fileScopes.locked.globs` in `.ai-scope.json`
- Adding top-level dependencies without explicit human approval
- Removing or renaming registered variant ids (they are a public contract)
- Introducing raw hex / rgb / px / ms values outside `ds.tokens.css` (caught by `ds:audit`)
- Editing the `SECTION_REGISTRY` map for any reason other than ADDING one entry
- Editing `SITE_PRESETS` for any reason other than ADDING one entry
- Editing files inside `DOC/` (handbook is human-curated)
- Introducing motion not declared as a motion preset in `motion/presets.ts`
- Declaring a variant effect outside its archetype's permission window
- Disabling `prefers-reduced-motion` fallbacks

---

## 7. If you get stuck

If a brief asks for something the DS does not support:

- DO NOT invent ad-hoc CSS or one-off components inside `src/app/`.
- DO NOT edit DS internals.
- DO ASK the human: "this requires a new variant — propose the variant id + archetype + effects, get approval, then add it via the extension flow in section 2."

The DS is locked on purpose. The lock is what makes 10 different projects all look intentional rather than incoherent.

---

## 8. Why this contract exists

Without this contract, AI agents (Copilot, Replit, Claude Code, custom orchestrators) reliably:

- Edit token files mid-project and silently shift every other project's palette
- Add new components in random locations that duplicate existing primitives
- Smuggle Tailwind / framer-motion / shadcn into a system that deliberately avoids them
- Rename or remove variants other projects depend on
- Add `style={{ color: '#abc123' }}` after the audit told them not to
- "Refactor" `_registry.ts` and break the entire dispatch system

This contract makes the boundary explicit. Agents that respect it ship faster (fewer review cycles). Agents that ignore it fail `npm run verify` and stop themselves.
