# Site platform layer (project-owned)

This folder is where you define **global site settings**, **content**, and **wireframe presets**.

The Design System provides the UI and platform contracts in `src/ds/platform/*`.

## How to switch a site

- Edit `src/site/index.ts` and change `ACTIVE_SITE_PRESET`.
- The public routes under `src/app/(marketing)/*` render from that preset (no hardcoded page UI).

## Add a new preset

1. Create a new file under `src/site/presets/`.
2. Export a `PublicSitePreset` object.
3. Select it in `src/site/index.ts`.
