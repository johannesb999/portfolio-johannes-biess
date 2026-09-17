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
- SCSS: keep page-specific styles in `assets/styles/<page>.scss`.
- Design tokens live in `:root` in `app.vue` and are named **BEM-style**: `--block__element--modifier`, e.g. `--font__size--lg`, `--font__weight--bold`, `--color--primary`, `--spacing--md`, `--radius--sm`, `--layout__inset--side`, `--z--high`. Responsive overrides go in `assets/styles/responsive.scss` (only values that actually differ from the base). Don't hardcode sizes, colors or spacings — add a token if none fits.
- Typography: one mixin, `type.text($size, $weight, $family, $line-height)` from `assets/styles/type.scss`, where the arguments are token modifiers (`@include type.text(big, bold)`). `type.family($name)` switches only the family. There is no `theme.token()` helper and no `L-*-Style` mixins any more.
- Theme: light/dark is a CSS concern — `:root` and `:root[data-theme="dark"]` in `app.vue`. `app.vue` only toggles `document.documentElement.dataset.theme`; an inline script in `nuxt.config.ts` restores the stored value before first paint. Never set colors from JS.
- Breakpoints: never write raw `@media` queries — use the mixins from `assets/styles/_breakpoints.scss` (`bp.mobile`, `bp.mobile-xs`, `bp.tablet`, `bp.laptop`, `bp.desktop`, `bp.desktop-up`, `bp.stacked`, `bp.side-by-side`, `bp.scaled-tokens`, ...). Media-query blocks contain only the *differences* from the base rules, never full copies.
- Responsive layouts use **CSS Grid with named `grid-template-areas`**; the breakpoint mixin re-declares the areas instead of repositioning single elements (see `about.scss`, `contact.scss`, `resume.scss`, `legal.vue`, `.project-content` in `_project-layout.scss`). Grid columns that hold split-flap text need `minmax(0, 1fr)` — the flap lines are `white-space: nowrap` and would otherwise blow the row past the viewport.
- Project/CV detail pages share `assets/styles/_project-layout.scss` (`@include layout.page`); page-specific values are set via CSS custom properties on `main` (`--hero__top`, `--hero__image-max`, `--details__offset`).
- **Don't touch the details button** (`components/detailsScroll.vue` / `.detailsLink-container`): it is positioned `absolute; bottom: 0` *without* a positioned ancestor, so it sits at the bottom edge of the first viewport, and it deliberately has no `z-index` so it slides behind the fixed top bar when scrolling. Making `main` positioned, or moving the link into the normal flow, breaks it.
- Project detail content uses the `ProjectAccordion` component (`components/ProjectAccordion.vue`): one data-driven accordion (`items: [{ title, body, images? }]`) instead of device-specific template copies. New/updated project pages should follow `pages/de/project/goEase.vue` as the reference structure.
- Images: the global `img` rule in `app.vue` already provides border and radius. Don't wrap images in extra framed containers — that produces a visible frame inside a frame.

## Components

Interactive elements are components, not CSS classes. Don't hand-roll an `<a class="…">` when one of these fits:

- **`AppLink.vue`** — every link and button. It picks its own element: `to` → `<NuxtLink>`, `href` → `<a>` (external URLs and `.pdf` automatically get `target="_blank" rel="noopener noreferrer"`), neither → `<button type="button">`, so a click handler alone already gives you a real button. Props: `label` (or the default slot), `size` / `weight` (design-token modifiers, e.g. `size="big"`), `underline`, `scale` (hover zoom, off for block-level content links), `pulse` (the one-shot attention animation a few seconds after load), `flip` (renders the label per character; `flipChars()` is exposed for the split-flap effect).
  - `size` / `weight` become an inline style and therefore beat every stylesheet rule. If the size has to change per breakpoint, leave the props out and set `--app-link__size` / `--app-link__weight` in your own CSS instead (see `ThemeSwitch.vue`).
  - The base rule is wrapped in `:where()` so it has zero specificity — a plain class on the call site always wins.
- **`EdgeLink.vue`** — a link pinned to a viewport edge. `position="top|bottom|left|right"` (left/right run vertically), `fixed` for detail pages where it must stay put while scrolling. Passes the AppLink props through. Replaces the old `#topLink` / `#bottomLink` / `#leftLink` / `#rightLink` / `#projectLinkNext` / `#projectLinkBefore` IDs — don't reintroduce those.
- **`ThemeSwitch.vue`** / **`LanguageSwitch.vue`** — own their state, their position and their responsive behaviour. `AppHeader.vue` just composes the home link and the language switch.
- **`SplitFlapText.vue`** — the flap display; **`ProjectAccordion.vue`** — project detail content.
- **`ProjectNav.vue`** — the two side links of a project page: `<ProjectNav current="goEase" />`. Which page sits next to which comes from `composables/projects.ts`, never from the page itself.
- **`ProjectTiles.vue`** — the preview tiles on the playground page; **`ProjectLinks.vue`** — the local-only list on the construction page.
- **`VideoEmbed.vue`** — a YouTube player from a bare video id, via `youtube-nocookie.com`. An `<iframe>` has no intrinsic content width, so inside the absolutely positioned hero (`.wrapper`) you must give the container an explicit `width` — otherwise it collapses to the iframe default of 300px (see `kai.vue`).
- **`DocumentReader.vue`** — reads a document pre-rendered to single images (`public/docs/<project>/pages/<locale>/NNN.webp`); a visitor loads only what they look at (~40 KB per page) instead of the whole file. The frame has a fixed height (`80vh`) and scrolls **inside itself** — the project page must never grow to the length of the document. Two modes, switched by text links, no button chrome:
  - `scroll` (default) — pages stacked inside the frame. Each sheet needs `aspect-ratio`, otherwise the un-loaded lazy images are 0px tall, the scroller collapses and the counter becomes meaningless.
  - `book` — `page-flip` with a page-turn animation. The page size is computed as `min(frameWidth / 2, frameHeight * ratio)` so the spread fits in **both** dimensions; without that, page-flip stretches the pages into whatever space is available and they look squashed.
  - **page-flip must get a container Vue does not own.** The library replaces and moves nodes inside its host; if that host sits in Vue's vnode tree, the renderer crashes on the next mode switch (`Cannot read properties of null (reading 'insertBefore')`) and the component silently stops updating. The host element is therefore created with `document.createElement` and removed by hand, and the two modes are toggled with `v-show`, never `v-if`.
  - The page counter is arithmetic from the frame's `scrollTop`, not an `IntersectionObserver` — cheaper with 129 pages and verifiable without a compositing browser.
  - `.project-doc` breaks out of the content column to `94vw` so the pages are actually readable, and needs `grid-template-columns: minmax(0, 1fr)` — otherwise the grid item's automatic minimum size pushes the reader past the viewport.
- **`ProjectNav.vue`** — the two side links of a project page: `<ProjectNav current="goEase" />`. Which page sits next to which comes from `composables/projects.ts`, never from the page itself.
- **`ProjectTiles.vue`** — the preview tiles on the playground page; **`ProjectLinks.vue`** — the local-only list on the construction page.
- **`VideoEmbed.vue`** — a YouTube player from a bare video id, via `youtube-nocookie.com`. An `<iframe>` has no intrinsic content width, so inside the absolutely positioned hero (`.wrapper`) you must give the container an explicit `width` — otherwise it collapses to the iframe default of 300px (see `kai.vue`).
- **`DocumentReader.vue`** — reads a document that was pre-rendered to single images (`public/docs/<project>/pages/<locale>/NNN.webp`). A visitor loads only what they look at (~40 KB per page) instead of the whole file (~90 MB). Two modes, switched by text links, no button chrome:
  - `scroll` (default) — every page stacked, `loading="lazy"`, scroll straight through. Each sheet needs `aspect-ratio` so it reserves its height; without it the un-loaded images are 0px tall, the scroller collapses and the page counter becomes meaningless.
  - `book` — `page-flip` (StPageFlip) with a real page-turn animation, rendered to canvas. `minWidth: 420` forces single-page below roughly 840px of container width — each sheet of these docs is already a spread, so two side by side only works on a large screen.
  - The page counter comes from one `getBoundingClientRect()` on the scroller plus arithmetic, not from an `IntersectionObserver` — cheaper with 135 pages and verifiable without a compositing browser.

A component owns its own responsive rules. `responsive.scss` is only for token overrides, not for restyling UI elements.

`.custom-link` still exists as a thin global base class, but only because `ScrollLink.vue` and `detailsScroll.vue` are deliberately left untouched. For anything new, use `AppLink`.

## Project Structure (pages/*/project/)

`composables/projects.ts` is the single source of truth and is read both by the app (auto-import) and by `nuxt.config.ts` (explicit import). Add or reorder projects **there**, not in the pages.

- `mainProjects` — the carousel, cycling: `beacon → kai → goEase → plantMonit → playground → beacon`.
- `playgroundProjects` — the smaller works. They are tiles on the playground page and form their own chain with `playground` at **both** ends, so you cannot fall out of it.
- `construction` is a standalone page: no `ProjectNav`, it deliberately leads nowhere. It is never redirected — it is the redirect target.
- Every "projects" link (start page, CV prose) uses `useProjectsEntry()`, which resolves to the first carousel project or to the construction page depending on `showProjects`.

`beacon.vue` and `kai.vue` are scaffolds — flap header plus an accordion carrying the question schema with placeholder bodies, and a commented-out hero image block. Fill in `body` per entry and add `images: [...]` where useful.

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

## AI / Text-and-Data-Mining Opt-Out

The project section must not end up in AI training data or AI answers; the person and their contact details must stay findable. Three layers, because a declaration alone is not enforcement:

1. `public/robots.txt` — a request. Search engines get `Allow: /`; a second group lists the AI crawler tokens and disallows `/de/project/`, `/en/project/`, `/img/` and `/docs/kai/`, with `Allow: /img/cv/` so the CV imagery stays indexable.
2. `public/.well-known/tdmrep.json` — the machine-readable reservation under the TDM Reservation Protocol, which is what EU DSM Directive Art. 4(3) / s. 44b(3) UrhG asks for. Paths use a leading slash, most specific match wins, `1` = reserved. The spec says to use only *one* TDM technique, so do **not** additionally set `tdm-reservation` headers or meta tags. The human-readable counterpart is the "Nutzungsvorbehalt" section in `pages/*/legal.vue`.
3. `server/plugins/ai-crawler-guard.ts` — enforcement: HTTP 403 for known AI user agents on the reserved paths, plus `X-Robots-Tag: noai, noimageai, noarchive` for everyone.

**This must stay a Nitro plugin on the `request` hook, not a `server/middleware/` file.** Nitro serves `public/` through a handler that runs *before* middleware, so a middleware version silently leaves every project image and every exported documentation page unprotected — the HTML routes look fine, which makes the gap easy to miss.

Two things to keep in mind when touching this:
- `Googlebot` sits in the blocked robots.txt group on purpose. It feeds both classic Google Search and AI Overviews, and those cannot be separated — so keeping projects out of AI answers also keeps them out of normal Google results. Person, contact, CV and imprint stay indexed. Removing `User-agent: Googlebot` from that group reverses the trade-off.
- Control tokens (`Google-Extended`, `Applebot-Extended`) belong in robots.txt only. They never appear as a real user agent, so they must not go into the plugin's blocklist.

The filter matches on user agent. A scraper that presents itself as a browser gets through; only not publishing content gives a hard guarantee.

## Security & Configuration Tips
- Base URL: set `NUXT_APP_BASE_URL` when deploying under a subpath (e.g., GitHub Pages).
- Project pages are hidden online, visible locally. `showProjects` in `nuxt.config.ts` defaults to `NODE_ENV === 'development'` and drives both the redirects (`routeRules`) and the link list on the construction page (`runtimeConfig.public.showProjects` → `components/ProjectLinks.vue`). Keep those two in sync — never redirect without hiding the list, or the page links into a 302 loop. Override with `SHOW_PROJECTS=true|false` to check the other state (`SHOW_PROJECTS=false npm run dev` reproduces the live site). Nuxt sets `NODE_ENV=production` for `nuxt build` itself, so the Docker build hides them without extra configuration.
- Static assets: place in `public/` and reference with absolute paths (e.g., `/img/tt/thumbnail.svg`).
- Avoid committing secrets; use environment variables via `.env` (supported by `dotenv`).
