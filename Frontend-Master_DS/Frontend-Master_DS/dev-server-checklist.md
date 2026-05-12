# Dev Server Checklist

## 1. Runtime Root Detection
- Confirm the active app root is `Frontend-Master_DS/Frontend-Master_DS`.
- Do not run `npm run dev` from `f:\PROJECTS\Agent`; run it from the app root only.

## 2. Dependency Preflight
- Verify `package.json` and `package-lock.json` exist in the app root.
- Verify `node_modules/` exists. If not, run `npm install`.
- If dependencies look stale after branch or lockfile changes, run a clean reinstall.

## 3. Environment Validation
- Check `ENV.example` for the expected frontend env shape.
- Current local runtime requires no mandatory `NEXT_PUBLIC_*` variables.
- If future integrations add public env vars, mirror them into `.env.local` before boot.

## 4. Port and Process Checks
- Default Next.js dev port is `3000` unless overridden.
- If the port is busy, stop the conflicting Node process or start with an explicit port.
- Do not leave orphaned `next dev` processes running between retries.

## 5. Windows Recovery SOP
- If install or boot fails with `EPERM`, `UNKNOWN`, `spawn`, `esbuild`, `swc`, or similar native-binary errors:
  1. Stop all active Node.js processes.
  2. Delete `.next/`.
  3. If the issue persists, remove `node_modules/` and `package-lock.json`.
  4. Run `npm install` once.
  5. Retry `npm run dev`.

## 6. Zero-Gate Preflight
- Run `npm run typecheck` and ensure it passes.
- Run `npm run lint` and ensure it passes with zero warnings.
- If either check fails, fix that failure before starting the dev server.

## 7. Smoke Verification After Boot
- Confirm the app serves successfully in the browser.
- Confirm there is no red runtime overlay.
- Confirm theme switching works.
- Confirm mobile bottom navigation renders on a narrow viewport.
- Confirm support dock actions render and respond.

## 8. Export Readiness
- Keep this file, `RUN.md`, and `export-manifest.md` in the app root before exporting the project.