# Export Manifest

## Portable Bundle Contract
To move this frontend into another root and keep local development reproducible, export:
- `.github/`
- `DOC/`
- `Frontend-Master_DS/Frontend-Master_DS/` (the active app root)

## Post-Export Bootstrap
1. Open a terminal in the exported app root.
2. Run `npm install`.
3. Review `ENV.example` and create `.env.local` only if new public env vars are required.
4. Run `npm run typecheck`.
5. Run `npm run lint`.
6. Run `npm run dev`.

## Runtime Root Rule
- The app root remains the directory that contains `package.json`, `next.config.ts`, and `src/`.
- Do not assume the repo root is runnable unless a separate root command shim exists.

## Required Dev Docs
- `RUN.md`
- `dev-server-checklist.md`
- `ENV.example`
- `export-manifest.md`

## Verification Before Handoff
- Dependency install completes without native-binary errors.
- Typecheck passes.
- Lint passes with zero warnings.
- Dev server boots from the exported app root.