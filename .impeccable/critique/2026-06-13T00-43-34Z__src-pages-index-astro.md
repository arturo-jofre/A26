---
target: src/pages/index.astro
total_score: 27
p0_count: 0
p1_count: 7
timestamp: 2026-06-13T00-43-34Z
slug: src-pages-index-astro
---
# Critique: `src/pages/index.astro` (Home)

**Target:** `/` (the home page) — `src/pages/index.astro`
**Slug:** `src-pages-index-astro`
**Date:** 2026-06-12
**Spec context:** `PRODUCT.md` (brand register, two-audience: clients + recruiters, "confident / precise / technical"), `DESIGN.md` (Instrument Bench, Bench color set, flat-by-default elevation, tactile components, WCAG 2.1 AA target).

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Status badge "Disponible para proyectos" is clear. No page-level breadcrumb. |
| 2 | Match Between System and Real World | 3 | Spanish, plain, appropriate industry terms. |
| 3 | User Control and Freedom | 3 | Back button works; no trapped states. No "skip to content" or "back to top" though. |
| 4 | Consistency and Standards | 2 | Border treatments mix `border-foreground/10`, `border-border`, `border-border-strong` with slight visual drift. Hover tints differ between card variants (`bg-white/[0.025]` vs `bg-white/[0.02]`). |
| 5 | Error Prevention | 3 | No error-prone flows on the home. (Forms, etc. are elsewhere.) |
| 6 | Recognition Rather than Recall | 3 | Nav is clear; project cards are self-explanatory. Mobile hamburger is universal. |
| 7 | Flexibility and Efficiency of Use | 2 | No keyboard shortcuts, no section jump, no "skip to content" link. |
| 8 | Aesthetic and Minimalist Design | 2 | Hero is cluttered: status badge + h1 + subtitle + 2 buttons + corner brackets + vertical rails + glow + bottom gradient line. Multiple decorative elements compete with the work. |
| 9 | Help Users Recognize / Diagnose / Recover from Errors | 3 | No error states to recover from on a portfolio home. |
| 10 | Help and Documentation | 1 | No help / FAQ. The `/sobre-mi` page is the closest thing to "documentation" of the designer's experience. |
| **Total** | | **27 / 40** | **Acceptable band (20–27).** Significant improvements needed before the home reads as a confident, precise, technical portfolio rather than a 2024-era Tailwind template. |

---

## Anti-Patterns Verdict

**Does this look AI-generated?** **Yes — and that's the diagnosis.** The current home is a textbook instance of the saturated 2024–2026 "Tailwind.com / Linear / Vercel chrome" portfolio: vertical rails framing the hero, corner brackets at the section corners, monospace dot-grid micro-typography, "01 / 02 / 03" uppercase tracked kickers on every section, gradient text on the hero h1, gradient numbers in a hero-metric stat-tile grid, identical 3-up service cards, diagonal stripes in the margin, and a soft wide drop shadow on the primary button. PRODUCT.md explicitly rejects this aesthetic family; the current implementation is a literal instantiation of the family PRODUCT.md asks you not to ship.

**Deterministic scan (bundled detector):** 8 findings across 5 distinct patterns.

- `gradient-text` × 1 (true positive). `src/styles/global.css:133` — the `.text-gradient` utility. Used in 2 places on the home: the hero h1 "Product Designer" and the 14+ / 50+ / 8+ / 2015 stat numbers. **Codex absolute ban.**
- `side-tab` × 1 (true positive). `src/styles/global.css:234` — `.prose-custom blockquote { border-left: 3px solid var(--color-accent) }`. **Codex absolute ban.**
- `overused-font` × 5 (false positive in this context). `Geist` flagged in `OrbitalSection.astro:32`, `global.css:19`, `global.css:37`, `global.css:242`, `Layout.astro:27`. The detector is right that Geist has become the Vercel/Linear/SaaS-default; the user has explicitly committed to Geist as a brand choice (matching the Linear / Vercel / Tailwind reference set). The differentiation has to come from how Geist is used (mono for labels only, not body), not from the face itself.
- `single-font` × 1 (false positive). Detector sees only `Geist Mono` referenced in `Layout.astro:1`; the layout actually loads both Geist Sans and Geist Mono via Google Fonts. Detector snippet was misleading.

**Patterns the detector did not catch (manual review):**

- **Diagonal stripes** in the margin (`.stripe-l::before`, `.stripe-r::before`) use `repeating-linear-gradient` at 4% opacity. **Codex absolute ban.**
- **Hero-metric template** with 4-up stat tile grid (14+ / 50+ / 8+ / 2015) and gradient numbers. **Codex absolute ban.**
- **Identical 3-up service-tile cards** (icon + heading + paragraph) under "Servicios". **Codex absolute ban.**
- **Tiny uppercase tracked kicker on every section** ("PORTAFOLIO" / "ESPECIALIDADES" / "SOBRE MÍ" / "CURRICULUM"). **Brand.md ban** (the 2023-era kicker is now the saturated AI scaffold).
- **Ghost-card pattern on the primary button** (`shadow-lg shadow-accent/20` paired with a solid color). **Codex-specific defect.**
- **`rounded-2xl` on the CV card and project hero image** — exceeds the design-system cap of 12px on cards. **Codex-specific defect.**
- **Vertical rails + corner brackets** framing the hero (the Tailwind.com mimicry). **PRODUCT.md anti-reference.**
- **No `prefers-reduced-motion: reduce` support** in the motion scripts. **WCAG 2.1 AA target violation.**
- **3D orbital has no `role="img"` or `aria-label`** on the canvas. **A11y miss.**

**Browser visualization:** Not run in this session. No browser tool was exposed (Codex Browser skill is not part of this harness). The dev server at `localhost:4321` is running and was sampled via plain `webfetch` for the static content tree (the response above confirms the textual surface, including the kicker pattern, gradient text labels, and stat-tile numbers — but the 3D scene and motion are JS-only and don't appear in a static fetch).

---

## Overall Impression

The site is committing to the right family (dark, orange, mono, restrained) but inheriting the wrong chrome from the very products the brand is meant to reference. The current home reads as a Tailwind.com template with a designer-portfolio paint job, not as the work of a 14-year senior practitioner. There is a substantial backlog of concrete, addressable changes before the home earns the "confident, precise, technical" position the brand is asking for. The work itself (the project cards, the case studies, the 3D orbital concept) is sound — the chrome is what's standing in the way.

The single biggest opportunity: **strip the Tailwind.com chrome (corner brackets, vertical rails, diagonal stripes, kickers on every section, gradient text, stat-tile grid, identical service cards) and let the case studies and experience trajectory do the work the chrome is currently doing for them.** The design system (`DESIGN.md`) already defines the disciplined version of each of these. The job is to make the code match the design.

---

## What's Working

1. **Mono usage is mostly correct.** Geist Mono appears on dates (`SEP 2022 — ACTUALIDAD`), the status indicator, and section kickers (where the kicker exists as a system device). The Mono Label Rule from the design system is mostly honored. The exception is the over-application of the kicker — that's a frequency problem, not a usage problem.
2. **The 3D orbital concept is a real signature.** UX / DEV / BUSINESS as orbiting forces around a center of craft is a personal, memorable element. It just needs to be repositioned (later in the page, not as the second section) and given a full reduced-motion fallback to honor the "signature, not spectacle" principle.
3. **The case-study cards are clean.** `ProjectCard.astro` does the work: image, title, year (mono), optional lock icon for private projects, 2-line clamped description, image-bleeds-to-card-edge treatment. Restrained, content-led.
4. **The dark + warm-off-white + committed orange temperature is right.** The combination reads as a senior practitioner's bench, not a template. The fix isn't to change the palette — it's to remove the decoration that the palette is currently being asked to carry.

---

## Priority Issues

### P1 — Major (fix before next release)

**1. Hero h1 "Product Designer" is set in gradient text.**
- **Why it matters:** Gradient text is the codex absolute ban. It screams "AI made this" louder than almost any other single element. The h1 is the first thing a visitor reads; it sets the tone for everything that follows.
- **Fix:** Replace the gradient with a single solid color. The current h1 sits on Workbench Black; a solid Bench Orange on Workbench is the disciplined lead. Or keep "Product Designer" in Chalk and let the orange carry the status badge, primary CTA, and year markers only.
- **Suggested command:** `$impeccable polish home-hero` or `$impeccable quieter home-hero`.

**2. The 14+ / 50+ / 8+ / 2015 stat-tile grid uses gradient numbers and is the hero-metric template.**
- **Why it matters:** The hero-metric template (big number / small label / supporting stats / gradient accent) is the SaaS-landing default and the codex absolute ban. The numbers themselves (14+ years, 50+ projects, 8+ industries, 2015 co-founder) are valuable — but the tile grid is the wrong shape for them. A recruiter scanning the home in 90 seconds actually benefits from these numbers; a client doesn't need them at all.
- **Fix:** Two paths. (a) Replace the tile grid with a more typographic expression of seniority — a single line of mono-set metadata at the foot of the "Sobre mí" section, e.g. `14+ AÑOS · 50+ PROYECTOS · 8+ INDUSTRIAS · 2015 PÁVLOV` set as a horizontal mono ribbon. (b) Remove the numbers from the home entirely and let the case studies + Sobre mí experience carry the seniority signal; the Sobre mí page already has the full CV. Choose (a) for the home (it serves recruiters) and keep Sobre mí as the recruiter destination.
- **Suggested command:** `$impeccable quieter home-stats` or `$impeccable layout home-about`.

**3. The "Servicios" section is an identical 3-up icon + heading + paragraph grid.**
- **Why it matters:** This is the most common 2024–2026 portfolio template (UX / Web / Brand, icon + heading + paragraph). PRODUCT.md explicitly rejects it. The section currently takes up a full page fold and adds no information that the case studies and Sobre mí don't already carry.
- **Fix:** Replace with a typographic statement of practice, e.g. a one-line mono-set list of disciplines without the icon deck, or fold the discipline list into the Sobre mí page. Alternatively, make the section a "How I work" narrative (3 paragraphs of process, not 3 cards).
- **Suggested command:** `$impeccable distill home-services` or `$impeccable quieter home-services`.

**4. Uppercase tracked kicker on every section ("PORTAFOLIO" / "ESPECIALIDADES" / "SOBRE MÍ" / "CURRICULUM").**
- **Why it matters:** The kicker-as-section-grammar is the saturated AI scaffold. PRODUCT.md allows it at most once per page, deliberately, as part of a named brand system — not on every section.
- **Fix:** Pick one section to keep the kicker on (the most editorial, the one where the kicker earns its place), and remove it from the others. Or commit to a kicker system that varies per section (a date stamp for the Sobre mí, a count for the Portafolio, a discipline for the Servicios) so the kicker carries different information each time, not the same template twice.
- **Suggested command:** `$impeccable quieter home` (broader quiet pass) or `$impeccable typeset home`.

**5. Tailwind.com chrome mimicry: corner brackets, vertical rails, diagonal stripes.**
- **Why it matters:** The corner brackets at the hero corners, the vertical `border-x border-foreground/10` rails on the hero, and the diagonal `repeating-linear-gradient` stripes in the margin (`.stripe-l`, `.stripe-r`) are the most recognizable tells of a "designer used the Tailwind.com template". PRODUCT.md rejects this explicitly. The engineering of those products is the real reference; the chrome is not.
- **Fix:** Remove the `.grid-frame::before/after` rails on the hero, the `absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/60` corner marks, and the `.stripe-l` / `.stripe-r` `repeating-linear-gradient` margin stripes. The page will gain a half-second of breath. The hero glow (`hero-glow`) is allowed because it carries the radial accent signature, not the chrome.
- **Suggested command:** `$impeccable quieter home` or `$impeccable layout home`.

**6. `prefers-reduced-motion: reduce` is not implemented anywhere.**
- **Why it matters:** WCAG 2.1 AA target. Every section has a motion entrance (opacity + y translate via the `motion` library), the status badge has a `animate-ping` halo, the project card has a 1.05 image scale on hover, and the 3D orbital has continuous WebGL rotation. None of these respect `prefers-reduced-motion: reduce`. This is a blocking accessibility miss against the user's stated target.
- **Fix:** Wrap the entrance animations in a `prefers-reduced-motion: reduce` check (crossfade to opacity-only, or instant). Replace the `animate-ping` halo with a static dot. Skip the image scale on hover. For the orbital, swap the WebGL scene for the static labeled grid (the same satellites, the same labels, in HTML/CSS) at the same height. AGENTS.md already establishes the `astro:page-load` / `astro:after-swap` lifecycle — the reduced-motion check just needs to be added inside.
- **Suggested command:** `$impeccable audit /` (full a11y pass) or `$impeccable harden home`.

### P2 — Minor (fix in next pass)

**7. Side-stripe border on `.prose-custom blockquote`.** The blockquote style is `border-left: 3px solid var(--color-accent); padding-left: 1.25rem`. Codex absolute ban. Fix: drop the border-left; keep the italic + use a small leading icon (a chevron or quote mark) for the affordance, or use a tonal background (Scribe overlay).

**8. `rounded-2xl` (16px) on the CV card (`sobre-mi.astro:62`) and the project hero image (`[slug].astro:40`).** The design system caps cards at `rounded-xl` (12px). The CV card and the project hero image should both drop to `rounded-xl` (12px) or `rounded-lg` (8px).

**9. Ghost-card pattern on the primary button.** `Button.astro:21` uses `shadow-lg shadow-accent/20` paired with the solid Bench Orange background. The design system permits a single, focused CTA shadow (`box-shadow: 0 0 0 1px rgba(240, 64, 0, 0.40), 0 1px 2px rgba(0, 0, 0, 0.50)`); the current `shadow-lg` is a soft wide drop shadow that's the codex "ghost-card" tell. Fix: swap to the design-system ambient CTA shadow, or remove the shadow and lean on the solid Bench Orange + the focus ring alone.

**10. The 3D canvas has no `role="img"` or `aria-label`.** `OrbitalSection.astro:20` is `<div id="orbital-canvas" class="w-full h-full">` with no semantic role or accessible name. Add `role="img" aria-label="Three practice areas orbiting a center of craft: UX, DEV, BUSINESS."`.

**11. Uniform entrance animation on every section.** Every `<section>` runs the same `opacity: [0, 1], y: [16, 0]` stagger at 0.55s. The skill flags this as the "uniform reflex". Each section should earn its own entrance — some sections can fade in, some can slide a single element, some can stay at rest. The hero already has a different cadence (`y: [12, 0]` at 0.6s); the rest of the page should vary.

### P3 — Polish (nice-to-fix)

**12. No "skip to content" link.** The fixed navbar is at the top of every page; keyboard users tab through 4 nav links + 1 CTA before reaching the main content. Add a visually-hidden "Saltar al contenido" link as the first focusable element.

**13. `aspect-3/2` is non-standard Tailwind v4 syntax** in `ProjectCard.astro:18`. Tailwind v4 expects arbitrary aspect ratios as `aspect-[3/2]`. The current class may not resolve in v4. Verify and fix.

**14. `JobPosition.astro:22` has `<span class="hidden sm:inline text-border">&bull;</span>`** — `text-border` is the border color token (rgba 214,211,206,0.10), which is functionally transparent on a dark surface. The bullet will be nearly invisible. Use `text-muted` (Iron) or `text-foreground/40` instead.

**15. Hero copy "Diseño productos digitales que impactan" is on the generic side.** "Que impactan" is filler — every designer portfolio says it. The lead should land on something concrete about Arturo's practice (industries, kinds of problems, what he does that other designers don't). This is a copy/clarity pass, not a visual one.

**16. `index.astro:19` has the comment `// Special case: section border line` followed by `bg-gradient-to-r from-transparent via-foreground/15 to-transparent` for the section dividers.** This is fine in isolation but combined with the vertical rails, corner brackets, glow, and stripes, it adds another decorative element. Once the chrome mimicry is stripped, decide whether the gradient dividers earn their place; if not, replace with a single 1px Border Quiet rule.

---

## Persona Red Flags

**Marta (Founder / Design Lead client — project-specific).** Primary action: scan the home in 60–120 seconds for relevant case studies, then decide whether to book a call.
- The hero gradient + stat tile grid + chrome (corner brackets, vertical rails, diagonal stripes) makes the first impression read as a template, not a 14-year senior's work. A founder who has seen 200 portfolios this year will scroll past the hero in 2 seconds.
- The 3D orbital, sitting as the second section, breaks the scroll rhythm. Marta is looking for case studies; the orbital delays them by a viewport.
- The services section is information Marta already has from the Sobre mí page. It costs a fold without adding value.
- **Net:** Marta reaches the case studies, but she's already neutralized by the template impression. The "Agenda una reunión" CTA has to do too much work to recover.

**Daniel (Recruiter — project-specific).** Primary action: scan the home in 90 seconds for seniority signals, then look for the CV.
- The stat tile grid (14+ / 50+ / 8+ / 2015) actually helps Daniel, but the gradient numbers make the data look decorative rather than credible. The numbers should be set in mono, not in a gradient.
- The "Sobre mí" section is a teaser; Daniel will click through to the full CV. The full CV (Sobre mí page) is well-structured and uses the mono date format correctly. Good.
- The Sobre mí page's `JobPosition` component is a clean list of roles, but the company logo box uses `rounded-full` for the company initial — fine for a 40×40 chip, but the surrounding card has `rounded-2xl` (16px) which exceeds the design-system cap.
- **Net:** Daniel gets what he needs, but with a "is this serious?" hesitation on the first impression.

**Sam (Accessibility-Dependent User).** Primary action: tab through the page, find the calendar link, reach the CV.
- The fixed navbar traps the first 4 tab stops on the logo + nav links + CTA. No "skip to content" link.
- The 3D canvas is announced as a `<div>` with no `role="img"` — Sam's screen reader will skip it silently, which is the right outcome, but a brief announcement of the signature (UX / DEV / BUSINESS orbiting) would be more respectful.
- The status badge's `animate-ping` halo is a CSS animation; for users with vestibular sensitivities it's a problem. No reduced-motion fallback.
- Section entrance animations are 0.55s with stagger 0.05 — fine for a single viewport, but if Sam scrolls quickly through 5 sections, the cumulative motion is significant. No reduced-motion fallback.
- **Net:** Sam reaches the calendar link, but the motion load is hostile to vestibular-sensitive users. WCAG 2.1 AA target is not met on motion.

---

## Minor Observations

- The `motion` script in `index.astro:351` is good practice for `astro:page-load` + `astro:after-swap` teardown. The same pattern is in `sobre-mi.astro`, `[...page].astro`, and `[slug].astro`. Consistent. Good.
- The `OrbitalSection.astro` script also has the same teardown pattern, including `THREE.Mesh` and `THREE.LineLoop` geometry/material disposal. Solid.
- The mobile menu's `aria-expanded` toggle is correct.
- The footer is minimal and disciplined (mono-uppercase would be off-brand here; small Iron is right).
- The `[slug].astro` meta-info block (Rol / Tipo / Duración / Enlace) is a clean 4-up grid with mono labels. Good component, on-brand.

---

## Questions to Consider

- **What would a confident version of the home look like?** The current home is hedging: it decorates because it doesn't trust the work to carry the page. The confident version strips the chrome and lets the case studies be the hero. The 3D orbital becomes a single contained signature further down the page, not a centerpiece.
- **Does the home need the servicios section at all?** The Sobre mí page already lists disciplines. The home may be better served by a typographic statement of practice, a longer list of industries served, or a single mono-set line of meta — not a 3-up service-tile grid.
- **Should the "Disponible para proyectos" status be on every page, or just the home?** On the home it acts as a conversion signal; on the case-study pages it's noise. Consider moving it to the navbar (which already has the "Trabajemos juntos" CTA) or restricting it to the home hero.
- **What's the right "for recruiters" surface?** The Sobre mí page is well-structured for that. Could the home link to it more directly, e.g. with a "Read the CV →" link in the "Sobre mí" section, rather than relying on the nav?
- **Is the 3D orbital doing enough work to justify the weight?** On a 5-year-old MacBook Air on hotel Wi-Fi, the WebGL scene costs 1–2 seconds of first-paint and drains battery. The signature is meaningful; the WebGL cost is not free. A static labeled grid is the right reduced-motion fallback and would be acceptable as a permanent option for low-power devices.

---

*Run notes (final-chat only — excluded from snapshot body):* Target slug `src-pages-index-astro`. No `ignore.md`. Assessment independence: sequential in main thread (no parallel sub-agents; detector ran isolated, manual review synthesized in main thread). CLI detector: 8 findings (2 true positives, 1 misleading false positive, 5 overused-font warnings treated as brand-committed false positives). Browser visibility: unavailable (no browser tool exposed in this session; static dev-server content sampled via `webfetch` confirms the textual surface). Overlay injection: skipped (no browser). Live server cleanup: not started (running detector only). Temp-file cleanup: handled after persistence.
