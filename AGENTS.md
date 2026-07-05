# Repository Guidelines

## Project Structure & Module Organization
- `pages/`: Route pages (English under `pages/en/`, German under `pages/de/`, root index under `pages/index.vue`).
- `components/`: Reusable Vue components (PascalCase, e.g., `AppHeader.vue`).
- `assets/`: SCSS and utilities; global styles in `assets/styles/` with responsive subfolders; composables in `assets/composables/`.
- `public/`: Static assets (images, fonts, PDFs). Served at the site root.
- `server/`: Nuxt server routes (e.g., `server/api/images.get.ts`).
- `middleware/`: Route middleware (e.g., `middleware/page.global.ts` for transitions).
- Root config: `nuxt.config.ts`, `tsconfig.json`, `Dockerfile`, `README.md`.

## Build, Test, and Development Commands
- `npm run dev` — Start local dev at `http://localhost:3000`.
- `npm run build` — Build production output to `.output/`.
- `npm run preview` — Run the built server locally.
- `npm run generate` — Generate static output when applicable.
- Docker: `docker build -t portfolio .` then `docker run -p 3000:3000 portfolio`.

## Coding Style & Naming Conventions
- Vue 3 + Nuxt 3 with `<script setup lang="ts">`; SCSS for styling.
- Indentation 2 spaces; single quotes; concise imports; prefer TypeScript types.
- Components: PascalCase (`CustomCursor.vue`); pages follow existing naming (e.g., `jumpStar.vue`).
- SCSS: keep page-specific styles in `assets/styles/<page>.scss`; use shared mixins from `assets/styles/type.scss`.
- Breakpoints: never write raw `@media` queries — use the mixins from `assets/styles/_breakpoints.scss` (`bp.mobile`, `bp.tablet`, `bp.laptop`, `bp.desktop`, `bp.stacked`, `bp.side-by-side`, ...). Media-query blocks contain only the *differences* from the base rules, never full copies.
- Project/CV detail pages share `assets/styles/_project-layout.scss` (`@include layout.page`); page-specific values are set via CSS custom properties on `main` (`--hero-top`, `--hero-image-max`, `--details-offset`).
- Project detail content uses the `ProjectAccordion` component (`components/ProjectAccordion.vue`): one data-driven accordion (`items: [{ title, body, images? }]`) instead of device-specific template copies. New/updated project pages should follow `pages/de/project/goEase.vue` as the reference structure.
- Design tokens live in `:root` in `app.vue`; responsive token overrides in `assets/styles/responsive.scss` (only values that actually differ from the base).

## Testing Guidelines
- No formal unit tests in repo. Verify manually:
  - Navigate key routes under `/en` and `/de`.
  - Check page transitions (middleware) and responsive styles.
  - Validate static assets load from `public/` and API at `/api/images`.

## Commit & Pull Request Guidelines
- Commits: short, imperative subject (e.g., "Update contact copy", "Improve font preload").
- Scope changes logically; one topic per commit when possible.
- PRs: include summary, linked issue (if any), and screenshots/GIFs for UI changes.
- Ensure `npm run build` succeeds and local preview matches expectations.

## Security & Configuration Tips
- Base URL: set `NUXT_APP_BASE_URL` when deploying under a subpath (e.g., GitHub Pages).
- Static assets: place in `public/` and reference with absolute paths (e.g., `/img/tt/thumbnail.svg`).
- Avoid committing secrets; use environment variables via `.env` (supported by `dotenv`).
