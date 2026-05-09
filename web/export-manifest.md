# Export Manifest

## Standard Export Bundle
- .github/
- DOC/
- web/

## Runtime Root Contract
- Frontend runtime root: web
- All install/dev/build commands must run from web
- Root-level script shims are optional and must proxy to web

## Post-Export Bootstrap
1. Open terminal in web
2. Run npm install
3. Prepare .env.local from ENV.example
4. Run npm run dev
5. Run smoke probes for key routes

## Validation Criteria
- Dev server starts from exported location
- Home route responds locally
- No missing-script, invalid JSON, or wrong-root errors

## Recovery Notes
- On Windows binary lock failures, stop node processes, clear node_modules + lockfile, reinstall, then retry
