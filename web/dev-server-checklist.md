# Dev Server Checklist

## Purpose
Use this checklist before running local development commands.

## 1. Runtime Root Verification
- Runtime app root for this project: web
- Run install/dev/build commands from web
- Root-level script shims (if used) must proxy to web

## 2. Dependency Preflight
- Confirm web/package.json exists
- Install dependencies from web
- If install fails, capture exact package, error code, and syscall

## 3. Environment Variables
- Confirm web/ENV.example exists
- Create or update web/.env.local from ENV.example
- Confirm required NEXT_PUBLIC_* values are present

## 4. Port and Process Checks
- Confirm desired port is free (default 3000)
- Stop stale node/npm processes before reinstall or restart

## 5. Windows Lock Recovery
- Stop node/npm/npx processes
- Delete node_modules and package-lock.json in web
- Reinstall dependencies in web
- Retry npm run dev
- If failure persists, record exact binary/package error (for example esbuild or lightningcss)

## 6. Start Dev Server
- Run: npm run dev (from web)
- Confirm local URL is printed

## 7. Smoke Verification
- Check home route responds
- Check core routes compile without startup blockers
- Confirm no missing module or invalid package errors

## 8. Export Portability Check
- After copying project to a new root, repeat this same checklist
- Confirm runtime-root behavior is unchanged
