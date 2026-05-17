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
- `src/styles/global.css` — Tailwind v4 (`@import "tailwindcss"`) + custom theme tokens and utility classes

## Key conventions

- **Tailwind v4** is configured via the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs`), not a `tailwind.config.js` file. Custom theme colors are defined in `global.css` using `@theme { }`.
- **Animations** use the `motion` library. All animation scripts must subscribe to `astro:page-load` (init) and `astro:after-swap` (teardown) to avoid broken state on client-side navigations.
- **Content collection slug:** project URLs use `project.id` (the Markdown filename without extension), not a separate slug field.
- **Draft projects:** frontmatter `draft: true` exists on some entries but is **not filtered out** in queries. If you add draft filtering, apply it in `getCollection` calls in `index.astro` and `[...page].astro`.
- **Images:** project thumbnails go in `public/assets/img/portafolio/thumbs/`; full images in `public/assets/img/portafolio/`.

## Node version

Requires Node >= 22.12.0.