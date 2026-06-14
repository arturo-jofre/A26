# Product

## Register

brand

## Users

The site serves three audiences from a single information architecture. No separate "/for-recruiters" surface, no "hire me" header band. Each persona has a primary action and a time budget.

**Primary — Marta. Founder or design lead evaluating Arturo for a UX, product, or design-systems engagement.** She scans for relevance to her problem (industry, project type, scope of work), checks credibility through the case studies, and books a call when something resonates. She is willing to spend up to two minutes if the work holds her; she is gone in 30 seconds if it doesn't. **Primary action:** `https://calendar.app.google/ZE6YQWLGgc8WUZSDA` → scheduled meeting.

**Secondary — Daniel. Hiring manager or design recruiter evaluating Arturo for a senior in-house role.** He scans for seniority signals (career trajectory, scope of work, industries) and looks for a clearly presented CV. He is on a 90-second clock and does not care about case-study depth. **Primary action:** reach the CV in under a minute (Sobre mí page), download or share it, and initiate contact via LinkedIn or email.

**Tertiary — Sam. Design peer or community member.** He arrives for the work and the craft, not for a transaction. Recognition is a long-tail signal that compounds the primary outcomes. **Primary action:** stay, read a case study, share a link, or post the work to a community surface.

## Product Purpose

This is a personal portfolio. The product being sold is Arturo Jofré López as a senior product designer with 14+ years of experience across government, startups, health, finance, retail, logistics, and HR — most recently as a senior UX designer at Cleverit and previously as co-founder of the design consultancy Pávlov (2015). There is no other product to buy.

The site exists to convert qualified visitors into a direct conversation. For Marta, the conversion is a calendar booking. For Daniel, the conversion is a CV review backed by clearly presented experience. For Sam, the site is a public artifact that builds credibility and recognition over time.

**Seniority positioning:** Senior Product Designer, individual contributor. The portfolio is not pitched at Staff/Lead/Principal; the work, the trajectory, and the case studies evidence a senior IC with cross-team range, not an org-level design director. Promotion beyond this level requires the work to evidence systems leadership and org-level influence, neither of which the current case-study set carries.

**Career span (verified from `sobre-mi.astro` and `content/proyectos/*.md`):** 2011 — present (mid-2026). The portfolio should report "14+ años" as a conservative lower bound; the actual figure is closer to 15. Numbers on the site must be defensible against `sobre-mi.astro` and the CV, not aspirational.

## Success Signals

In priority order. The site is a funnel, and the funnel is measured by the action at the bottom, not the impressions at the top.

1. **Calendar bookings** (primary, weighted 5x). The single most important action on the site. For Marta, the conversion is the booking. For Daniel, the booking is a strong proxy for "I want to talk" even when the actual conversation happens over LinkedIn. Everything on the site is in service of this action, even when it does not advertise it.
2. **Sobre mí page reach** (secondary). Daniel's path to the CV. Track visits to `/sobre-mi` and time-on-page as the "recruiter engaged" signal.
3. **Case-study depth** (secondary). Time on `/proyectos/[slug]` and scroll depth on case studies indicate fit for an engagement. Track by project; the 4 most-visited case studies define Arturo's perceived specialization.
4. **Peer share / recognition** (long-tail, weighted as a brand signal, not a conversion). Sam's outbound action: a link shared in a Slack, a post on a community surface, a designer-to-designer recommendation. This is not tracked in analytics; it is felt in the calendar bookings it eventually produces.

The site is not optimized for newsletter signups, social follows, or "follow my work" engagement. Those would dilute the funnel. If a section does not move a visitor toward the calendar, it is not earning its place.

## Aesthetic Direction

The site sits in a deliberately narrow lane: **a senior designer's terminal — the kind of console an EVA pilot or a Sidonia mech operator would read at a glance.** Restrained industrial, not literal cosplay. The discipline of the system is the reference; the chrome is the system.

**The reference set, in priority order:**

1. **Neon Genesis Evangelion (1995–).** NERV interface panels: the way a status is labeled `STATUS: NORMAL` in restrained mono, the way the MAGI console uses thin orange rules to separate readouts, the way a single piece of information is given room to breathe. The 1px frame corner, the mono kicker, the labeled HUD readout — these are Evangelion devices, used as a named brand system. Not the red warning greebles, not the LCL hex overlay, not the literal "AT FIELD ACTIVE" copy.

2. **Knights of Sidonia (Sidonia no Kishi, 2014).** Tsutomu Nihei's industrial restraint: high contrast, lots of negative space, mono labels that name what's on screen without commentary. The discipline of a Nihei panel is the discipline of the layout: a single piece of information, a thin rule, breathing room, the next piece of information.

3. **Vercel, OpenDesign, Tailwind.com (engineering-grade product UI).** The precision of the engineering is the real reference: the way a 1px border does real work, the way a button's focus state is committed, the way the grid is allowed to be the design. **The chrome is not borrowed; the discipline is.** When the brand uses a corner bracket, it is the disciplined version; when it uses a vertical rail, it carries information. The difference between this site and a Tailwind.com template is the discipline, not the absence of the device.

4. **Terminal interfaces (cathode-era and modern).** Boot sequences, status readouts, monospace column alignment, the discipline of `PROJECTS  35+` over `35+ projects`. The mono kicker and the mono microcopy come from the terminal grammar.

**What this lane is NOT:**

- It is **not literal anime cosplay.** No full hex-frame overlay, no scan-line texture, no ASCII-art decorations, no glow-bombing. The restraint is the voice; the cosplay is the failure. If a device could be removed and the information would still be clear, the device is decoration and gets cut.
- It is **not the 2024–2026 Tailwind.com template.** The chrome is a named brand system, not a default scaffold. The kicker carries information; the corner bracket frames a section that earns it; the vertical rail does structural work. The template mimic is the one that applies these devices as empty grammar on every section.
- It is **not warm-cream / sand / parchment / bone / linen.** The dark surface is the canvas. Warmth comes from the orange and from the typography, not from the body background.

**The device vocabulary (named and disciplined):**

- **1px L-marks at section corners.** Use on the hero, the CV panel, and at most one other section per page. They frame a section that earns the frame; they never appear as decoration.
- **1px vertical / horizontal rails as layout grammar.** Use as the divider between adjacent cards in a grid (the existing `gap-px bg-foreground/10` grid frame in the project listing is correct), as the bottom rule under a section heading, and as the column rule between paired meta rows.
- **Mono kicker (uppercase, tracked).** A single sentence in mono per section: a date stamp for the Sobre mí section, a count for the Portafolio (`35+ PROYECTOS — 8 INDUSTRIAS`), a discipline tag for the process section. The kicker **carries information; it is never empty**.
- **Mono microcopy (terminal status).** A `STATUS: AVAILABLE` line near the calendar CTA, a `// BOOT SEQUENCE COMPLETE` line at the foot of the hero, a `[SECTION_ID: PROJECTS]` marker at the head of a list. Two or three per page, never more.
- **HUD-style readouts for the seniority signal.** The 14+ / 50+ / 8+ / 2015 numbers are a HUD readout, not a SaaS stat tile. Mono, no gradient, no tile background, no icon. The set as a single column or a single line, not a 4-up grid.
- **Lined buttons.** Buttons with a visible 1px frame, mono uppercase label, optional leading/trailing bracket or pipe (`[ AGENDA ]`, `| VER PROYECTOS |`). The line is part of the affordance, not decoration.

## Brand Personality

**Three words:** Confident. Precise. Technical.

**Voice:** Direct, present-tense, first-person, restrained. No "passionate", no "creative ninja", no "I help ambitious companies". Sentences carry weight. The designer speaks as a practitioner, not as a brand.

**Tone:** Dry-warm. Not corporate. Not quippy. Dry in the sense of under-decorated copy; warm in the sense of human, with room for opinion and craft.

**Strategic translation (posture, not prescription):**
- *Confident* — committed choices, no hedging. The brand color is used as a load-bearing element, not sprinkled. The hierarchy is decisive; the chrome does not announce itself.
- *Precise* — typographic discipline, calibrated spacing, motion timing tuned to the eye, monospace reserved for actual labels (dates, versions, file types, role metadata, status indicators) rather than decoration.
- *Technical* — references the engineering of design systems, not the costume. No dev-aesthetic surface-level cues; the technical quality is visible in the discipline of the build, not in a "developer-style" font and grid chrome.

### Voice contract (enforceable)

The voice rule is strict, and the current site violates it in three known places. The next copy pass must satisfy all of the following; the design system enforces the rest.

- **Banned phrases.** No "I help ambitious companies", no "passionate about", no "creative ninja", no "designs that delight", no "memorable experiences", no "transformo la complejidad", no "que impactan". The hero subtitle and the "Sobre mí" bio currently use template phrasing (`...simples, intuitivas y memorables`; `Creo que el diseño de productos digitales es un viaje colaborativo...`) and must be rewritten in the practitioner's voice.
- **Banned patterns.** No sentence that names an abstract concept and then layers an ironic or corrective modifier. No "it's not X, it's Y" scaffolding. The specific claim is always stronger than the meta-criticism.
- **Sentence length.** Body prose averages 12–18 words. Headings are 3–6 words. No heading longer than 9 words without being split.
- **Tense and person.** Present tense for current work ("Diseño productos digitales para empresas y startups en sectores como..."). Past tense only for completed engagements or specific dated events. First-person, singular.
- **Position over mission.** No "I believe design is..." paragraphs. The work demonstrates the position; the copy points to it.
- **Numbers must be defensible.** "14+ años", "50+ proyectos", "8+ industrias" must be cross-checkable against `sobre-mi.astro` and the project frontmatter. Round numbers are fine; inflated numbers are not.
- **Industry list is curated, not exhaustive.** The list reads in priority order for the primary action: government, startups, health, finance, retail, logistics, HR. The list is not "all the sectors I have ever touched"; it is the sectors Arturo wants the next conversation to be about.
- **Microcopy register.** When the copy is a terminal-style status or readout, it is in mono, in uppercase, and it names a real state (`STATUS: AVAILABLE`, `PROJECTS: 35+`, `// BOOT SEQUENCE COMPLETE`). No decorative terminal microcopy that doesn't correspond to a real piece of information.

## Anti-references

The portfolio must not be mistaken for any of the following:

- **The SaaS landing-page default.** No gradient-text hero, no centered value-prop hero, no "Book a demo" SaaS frame. A product designer is not a SaaS company. The hero subtitle in particular must not read like a SaaS value prop; it must read like a practitioner's positioning statement.
- **Literal anime cosplay.** No full hex-frame overlay, no `repeating-linear-gradient` scan-line texture across the page, no ASCII-art decorations, no glow-bombing, no fictional status strings (`AT FIELD ACTIVE`, `LCL O2 78%`) that don't correspond to anything the visitor is supposed to read. The restraint is the voice; the cosplay is the failure. The line is crossed when a device could be removed and the information would still be clear — that's decoration, and it gets cut.
- **The warm-cream template portfolio.** No sand / bone / parchment body background. No "I help ambitious companies" intro. No Behance / Dribbble default card grid with rounded-2xl corners and soft shadows. The dark surface with a single committed accent is the right temperature; do not retreat to the warm-neutral default.
- **The over-decorated 3D portfolio.** The WebGL orbital scene (UX / DEV / BUSINESS satellites) is permitted once, with a meaningful reduced-motion fallback. The work leads; the 3D does not.
- **Identical service-tile cards.** "Experiencia de usuario / Desarrollo web / Identidad de marca" as a 3-up icon + heading + paragraph grid is the most common template in the category. The services section must not collapse into it.
- **Default Tailwind.com scaffold.** This is **not** an anti-reference for the chrome itself (the brand uses the chrome as a named system), but it is an anti-reference for the *default* application of the chrome. A corner bracket on every section, a kicker on every section, a vertical rail on every section, all with no information — that's the template. The discipline is the difference.

## Design Principles

1. **Engineering is the brand.** The site demonstrates the designer's capability through the craft of the details — typographic discipline, spacing rhythm, motion timing, micro-interaction tuning — not through chrome borrowed from Linear / Vercel / Tailwind. The precision of those products is the real reference; the visual language should be its own.

2. **Work first, chrome last.** The case studies (35+ projects across 8+ industries) and the career trajectory are the assets. The site architecture defers to them. No "I help" hero. No section that exists only to set up the next section. A visitor should be inside the work within one scroll.

3. **Two audiences, one hierarchy.** Both Marta and Daniel must be served from the same information architecture. The navigation, the home page, and the project pages must surface the case studies for Marta and the experience / CV for Daniel with equal weight — without a separate "/for-recruiters" surface or a "hire me" header band. The Sobre mí page is the recruiter destination; the home is the bridge.

4. **Commit, do not hedge.** The brand color is a load-bearing identity element. It carries the status indicator, the active navigation state, the primary CTA, the project year markers, the signature orbital satellites, and the mono microcopy highlights. It is not scattered as decoration. Surface, ink, and the rest of the system are the supporting cast; the accent is the lead. The accent appears on ≤ 15% of any given screen; its rarity is the point.

5. **Signature, not spectacle.** The 3D orbital scene is a personal signature (UX / DEV / BUSINESS as orbiting forces around a center of craft). It is allowed to exist because it means something. It must remain a contained signature with a full reduced-motion fallback and not overshadow the work. A portfolio is not a tech demo. Sam, arriving for the work, should not be forced to load 200KB of WebGL to reach a case study.

6. **The frame is the system.** The corner brackets, 1px rails, mono kickers, mono microcopy, line-grid cards, and HUD readouts are a **named brand system**, not chrome. Each device earns its place by carrying information: a date, a count, a section ID, a status, a label. A corner bracket on a section that doesn't earn it is decoration; a corner bracket on the hero, the CV panel, or the project detail is voice. The discipline is the difference between this site and a 2024–2026 Tailwind.com template that uses the same devices as empty grammar.

## Accessibility & Inclusion

- **Target:** WCAG 2.1 AA across the site.
- **Text contrast:** ≥4.5:1 on body text, ≥3:1 on large display text. Orange (`#F04000`) is used as accent only, never as body or large heading text on a low-contrast surface; when orange is used as text, it sits on a sufficiently dark surface or is paired with a darker tone. Mono microcopy in orange is permitted only on Workbench Black or Scribe; never on Chalk or any near-white surface.
- **Keyboard navigation:** every interactive element reachable and operable via keyboard, with visible focus rings (2px focus ring on accent, 2px offset, contrast-safe). The first focusable element on every page is a "Saltar al contenido" link, visually hidden until focused.
- **Screen readers:** semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`); ARIA on the mobile menu toggle, the orbital canvas (`role="img"` with descriptive label), and any decorative SVG marked `aria-hidden="true"`. Mono microcopy is real text content; it is not replaced by an image.
- **Motion:** full `prefers-reduced-motion: reduce` support is a release blocker, not a polish item. The 3D orbital scene falls back to a static labeled grid. Scroll-driven entrance animations become crossfade or instant. Hover transforms are removed. The status badge `animate-ping` halo becomes a static dot. Every motion script subscribes to `astro:page-load` (init) and `astro:after-swap` (teardown) per `AGENTS.md`.
- **Color independence:** the "Disponible para proyectos" status indicator and any state-based color must also be communicated by text, position, or icon. Mono microcopy (`STATUS: AVAILABLE`) is text, not color — it carries the same information to a screen reader.
- **Language:** the site is in Spanish (es-CL by default); no i18n surface is required at this stage, but content is written for clarity at an 8th-grade reading level to be inclusive of non-native readers.

## Known P1 Backlog (reclassified)

The visual system in `DESIGN.md` is the spec. The previous critique snapshot (`.impeccable/critique/2026-06-13T00-43-34Z__src-pages-index-astro.md`) over-applied the "default Tailwind chrome = bad" reflex; the chrome is now a named brand system. The backlog below reclassifies each item against the new direction.

**On-brand, needs discipline (not removal):**

- **The 14+ / 50+ / 8+ / 2015 stat-tile grid.** The numbers and the count are valuable for Daniel. The shape is the hero-metric template; the fix is to restyle as a **HUD readout** — mono, no gradient, no tile background, no icon, single column or single line, and the whole set framed by 1px L-marks as a HUD panel. Restyle, don't remove.
- **The "01 / 02 / 03" / "PORTAFOLIO / ESPECIALIDADES / SOBRE MÍ / CURRICULUM" kicker.** On-brand as a named mono kicker system. The fix is per-section meaning: `35+ PROYECTOS — 8 INDUSTRIAS` for the portafolio section, `SEP 2011 — PRESENTE` for the Sobre mí section, `DISCIPLINAS // UX — RESEARCH — WEB — BRAND` for the process section. Never empty; always carrying a number, a date, or a discipline.
- **Corner brackets and vertical rails.** On-brand as the hero / CV / project detail frame. Discipline: they appear on at most one section per page, and only on a section that earns the frame.
- **The mono nav, mono microcopy, mono footer.** On-brand. Footer should move to mono uppercase tracked, matching the nav.

**Still defects, fix in the next pass:**

- **Hero h1 "Product Designer" uses gradient text.** Codex absolute ban, no lane reclassifies it. Replace with solid Bench Orange on Workbench Black, or with Chalk and let the orange carry the status badge, primary CTA, and year markers only.
- **The "Servicios" section is an identical 3-up icon + heading + paragraph grid.** Codex absolute ban, lane-independent. Replace with a single-typography statement of practice: a mono-set discipline list, or a 3-paragraph process narrative, or fold the disciplines into the Sobre mí page.
- **`prefers-reduced-motion: reduce` is not implemented.** WCAG 2.1 AA violation, release blocker. Implement across all entrance animations, the status badge halo, the card hover scale, and the orbital scene fallback. Lane-independent.
- **Ghost-card pattern on the primary button** (`shadow-lg shadow-accent/20` paired with the solid Bench Orange background). Codex "ghost-card" defect, lane-independent. Replace with the design-system ambient CTA shadow (1px solid + 2px blur max) or remove the shadow and lean on the solid Bench Orange + the focus ring alone.
- **`rounded-2xl` (16px) on the CV card and the project hero image.** Exceeds the design-system cap of 12px. Drop to `rounded-xl` (12px) or `rounded-lg` (8px).
- **Side-stripe `border-left: 3px` on the blockquote.** Codex absolute ban. The current `›` mono prefix is the right affordance; drop the 3px accent stripe.
- **3D canvas missing `role="img"` and `aria-label"`.** A11y miss. Add `role="img"` and `aria-label="Three practice areas orbiting a center of craft: UX, DEV, BUSINESS."` to the orbital container.

**Items from the prior critique that are now on-brand (do not fix):**

- The 3D orbital as a centerpiece: no, the site already has it as a contained signature, not a centerpiece. The signature is on-brand.
- The mono kicker grammar: on-brand as a named system (see Principle 6).
- The dark + warm-off-white + committed orange temperature: on-brand, the core palette.
- The 1px frame chrome on cards (the `gap-px bg-foreground/10` grid frame in the project listing): on-brand, the line-grid card.

The next pass (`polish` scoped to the home) closes the still-defects list and restyles the on-brand-but-needs-discipline items. PRODUCT.md is the *why*; DESIGN.md is the *what*; the next pass is the *how*.
