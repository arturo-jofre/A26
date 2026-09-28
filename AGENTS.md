# AGENTS.md

## Commands

- **Package manager:** pnpm
- `pnpm dev` — dev server on `localhost:4321`
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview production build locally
- No lint, typecheck, test, or formatter commands are configured.

## Architecture

Astro 6 static site (portfolio) in Spanish. No JS framework — all `.astro` components.

- `src/pages/` — routes: `index.astro`, `sobre-mi.astro`, `proyectos/[...page].astro` (paginated listing), `proyectos/[slug].astro` (project detail)
- `src/content/proyectos/` — Markdown project entries loaded via Astro Content Collections
- `src/content.config.ts` — collection schema definition (uses `glob` loader from `astro/loaders`, **not** the old `src/content/config.ts` pattern)
- `src/layouts/Layout.astro` — root layout with `<ClientRouter />` (Astro 6 view transitions)
- `src/scripts/motion-system.ts` — the single source of truth for every reveal/scroll animation
- `src/styles/global.css` — Tailwind v4 (`@import "tailwindcss"`) + custom theme tokens and utility classes

## Key conventions

- **Tailwind v4** is configured via the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs`), not a `tailwind.config.js` file. Custom theme colors are defined in `global.css` using `@theme { }`.
- **Animations** use the `motion` library, but pages do **not** ship their own animation scripts. Everything goes through `src/scripts/motion-system.ts`, mounted once from `Layout.astro` on `astro:page-load` and torn down on `astro:after-swap`. Do not add per-page `astro:page-load` motion scripts: document-persistent listeners from earlier pages would leak onto later ones and re-animate their DOM. Mark up instead:
  - `[data-reveal-load]` — container whose `[data-reveal]` children reveal on load, staggered
  - `[data-reveal]` — the element reveals on its own as it scrolls in
  - `[data-reveal-list]` — every direct child reveals on its own as it scrolls in
  The hidden start state lives in `global.css` behind `html.js` **and** `@media (prefers-reduced-motion: no-preference)`, so no-JS and reduced-motion visitors always see content. Springs are critically damped (`bounce: 0`).
- **Page transitions:** the root uses a short `fade` (~0.16s) set on `<html>` in `Layout.astro`; the card→detail morph pairs `transition:name={morphName}` in `ProjectCard.astro` and `proyectos/[slug].astro`. `::view-transition-group(*)` in `global.css` gives the morph a spring (Motion `linear()` samples in `--ease-settle`/`--ease-snappy`). Don't hide morph targets with `[data-reveal]` — an invisible target breaks the morph.
- **Content collection slug:** project URLs use `project.id` (the Markdown filename without extension), not a separate slug field.
- **Draft projects:** frontmatter `draft: true` exists on some entries but is **not filtered out** in queries. If you add draft filtering, apply it in `getCollection` calls in `index.astro` and `[...page].astro`.
- **Images:** project thumbnails go in `public/assets/img/portafolio/thumbs/`; full images in `public/assets/img/portafolio/`. Note: several `image:` frontmatter paths point to files that do not exist (the detail hero then renders broken).

## Node version

Requires Node >= 22.12.0.