---
name: A26 Portafolio
description: Senior product designer portfolio. The Senior Designer's Terminal — restrained industrial: dark surface, committed Bench Orange, mono labels, named HUD system. Engineering is the brand.
colors:
  bench-orange: "#F04000"
  accent-hover: "#D63800"
  workbench-black: "#181818"
  chalk: "#D6D3CE"
  iron: "#8A847C"
  scribe: "#3A3734"
  border-quiet: "rgba(214, 211, 206, 0.10)"
  border-strong: "rgba(214, 211, 206, 0.18)"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-large:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
    textTransform: "uppercase"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.bench-orange}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "16px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.sm}"
  button-lined:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  card-project:
    backgroundColor: "{colors.workbench-black}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "0"
  status-badge:
    backgroundColor: "transparent"
    textColor: "{colors.bench-orange}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  kicker:
    textColor: "{colors.bench-orange}"
    typography: "{typography.label}"
    padding: "0 0 8px 0"
  hud-readout:
    textColor: "{colors.iron}"
    typography: "{typography.label}"
    padding: "0"
---

# Design System: A26 Portafolio

## 1. Overview

**Creative North Star: "The Senior Designer's Terminal"**

The system reads as a working interface a 14-year senior would actually use: NERV-style labeled readouts, Nihei restraint, terminal grammar, Vercel-engineering discipline. The orange is the work light. The dark surface is the bench. The mono labels are the labels on the instruments. The 1px lines are the layout grammar, not the decoration. The chrome is the system; the discipline is what keeps it from being a costume.

The reference set, in priority order: NERV interface panels (Evangelion, 1995–) for the way a status is labeled and given room to breathe; Tsutomu Nihei's industrial restraint (Knights of Sidonia, 2014) for the way a single piece of information gets a thin rule and breathing room; Vercel / OpenDesign / Tailwind for the engineering-grade precision of the 1px border, the focus ring, and the grid; cathode-era and modern terminal interfaces for the `PROJECTS  35+` column discipline. The site is **not** a literal anime prop and **not** a 2024–2026 Tailwind.com template — it is the disciplined intersection.

The aesthetic philosophy is calibration over performance. We do not decorate; we set values. We do not announce; we commit. A visitor should leave thinking "this person has been doing this for a long time and is still paying attention", not "look at this portfolio template". The system serves two audiences from one hierarchy: founders and design leads evaluating Arturo for a UX or product engagement, and hiring managers and recruiters evaluating him for a senior in-house role. The case studies prove fit for the first; the case studies plus the experience trajectory prove fit for the second. The site does not split into a "for clients" version and a "for recruiters" version.

**Key Characteristics:**

- **The frame is the system.** Corner brackets, 1px rails, mono kickers, line-grid cards, and HUD readouts are a named brand system, not chrome. Each device earns its place by carrying information: a date, a count, a section ID, a status, a label. The discipline is the difference between this site and a template that uses the same devices as empty grammar.
- **Committed accent.** Bench Orange carries status, the active navigation state, the primary CTA, the project year markers, the kicker, and the signature orbital satellites. It is not scattered. It appears on ≤ 15% of any given screen; its rarity is the point.
- **Mono for labels, not for voice.** Geist Mono appears on dates, file types, version strings, role metadata, status indicators, the kicker, the HUD readout, the nav, the microcopy, and the footer. It is never used for body copy, never used for "I help ambitious companies" prose, never used as decoration.
- **Tactile state response.** Buttons press, cards lift on hover (a 2% Chalk overlay, not a shadow), focus rings are crisp and committed. The interaction is part of the brand.
- **Flat surfaces, state-only elevation.** Depth is conveyed exclusively as a state response or as the single permitted focal shadow on the primary CTA. No decorative shadows, no ghost cards.
- **Signature, not spectacle.** The 3D orbital is a contained signature (UX / DEV / BUSINESS as orbiting forces around a center of craft) with a full reduced-motion fallback, not the centerpiece of the page.

## 2. Colors

The palette is a workbench: a dark bench, a chalk-on-ink read, one committed orange work light, and two quiet utility greys for structural information. The orange is the only hue; everything else is the bench.

### Primary
- **Bench Orange** (`#F04000`): The brand's load-bearing accent. Status indicators (the "Disponible para proyectos" pulse), the active navigation state, the primary CTA, project year markers, the orbital satellites, the kicker on every section, the focus ring. **The One Voice Rule** below defines its discipline.
- **Accent Hover** (`#D63800`): A 1.5-step darker orange for the primary CTA hover state. The hover tonal shift is the only "depth" the primary button carries outside its ambient shadow.

### Neutral
- **Workbench Black** (`#181818`): The calm surface. The body background, the dominant tone of the page, the canvas against which every other element reads.
- **Chalk** (`#D6D3CE`): The primary ink. Body text, headings, primary UI text, and the lined-button label sit on this. A true off-white with a slight warmth — not a clinical white, not a cream.
- **Iron** (`#8A847C`): Secondary metadata. Subtitles, captions, dates in mono, support text, placeholders, the HUD-readout number set. The supporting voice.
- **Scribe** (`#3A3734`): Quiet structural dividers, low-emphasis card backgrounds, tertiary borders, the `:hover` background for inline job rows. The ink that marks but does not announce.
- **Border Quiet** (`rgba(214, 211, 206, 0.10)`): The default 1px border. Sits on every bordered cell, divider, and grid frame.
- **Border Strong** (`rgba(214, 211, 206, 0.18)`): The emphasis 1px border. Lined-button frames, section corner brackets, focus rings, signature section dividers.

### Named Rules
**The One Voice Rule.** Bench Orange appears on ≤ 15% of any given screen. Its rarity is the point. Where it carries text, it sits on a sufficiently dark surface (Workbench Black or Scribe); orange text on Chalk is forbidden.

**The Tonal Rule.** Iron, Scribe, and the border tokens are all in the same warm-neutral hue family as Chalk and Workbench Black — slightly warm, slightly desaturated. They never diverge into pure grey, pure blue, or pure warm. The orange is the only saturated hue; everything else is the bench.

## 3. Typography

**Display & Body Font:** Geist (Geist Sans) with `system-ui, -apple-system` fallbacks
**Label & Mono Font:** Geist Mono with `ui-monospace` fallback

**Character:** Geist is a quiet, technical grotesque. It carries the confidence of a tool, not a display face. Pairing it with its mono sibling for labels (and for the kicker, HUD readout, nav, microcopy, and footer) keeps the system disciplined — there is no display face to perform, only a work face to do the work. The pairing honors engineering over voice.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 6.5vw, 4.5rem)`, line-height 0.95, letter-spacing `-0.03em`): Hero h1 only. Two lines max. Never on body surfaces. The hero h1 is set in a single solid color — Bench Orange on Workbench Black, or Chalk with the orange reserved for the kicker / CTA / status badge.
- **Headline** (700, `clamp(1.875rem, 3.5vw, 2.5rem)`, line-height 1.1, letter-spacing `-0.03em`): Section h2. Carries weight without shouting.
- **Title** (700, 1rem, line-height 1.3, letter-spacing `-0.01em`): Card h3, list headings, content titles. The workhorse of the system.
- **Body** (400, 1rem, line-height 1.65): Default copy. Max line length 65–75ch.
- **Body Large** (400, 1.125rem, line-height 1.6): Hero subtitle, lead paragraph.
- **Label** (400, 0.75rem, letter-spacing `0.12em`, uppercase): Geist Mono. **Carries five jobs** in this system: (1) the kicker above a section heading; (2) the HUD readout for the seniority signal; (3) the terminal microcopy near a status or CTA; (4) the nav and footer treatment; (5) role metadata and date stamps. Never on body copy. Never decorative.

### Named Rules
**The Mono Label Rule.** Geist Mono is reserved for actual labels: dates, file types, version, role metadata, status, kicker values, HUD readouts, microcopy. The mono earns its place by labelling something real. A kicker that says `PORTFOLIO` and nothing else is decoration; a kicker that says `35+ PROYECTOS — 8 INDUSTRIAS` is voice.

**The Negative Space Rule.** Display and Headline use tight line-heights (0.95, 1.1) and tight letter-spacing (`-0.03em`). Body and Body Large use generous line-heights (1.6+). The contrast is part of the engineering: large type breathes by being tight; body type breathes by being open.

**The Wrap Rule.** Display and Headline (h1–h3) use `text-wrap: balance` for even line lengths. Long prose uses `text-wrap: pretty` to reduce orphans. Test hero H1s at every breakpoint with the actual copy — long Spanish words plus large clamp scales plus narrow grids cause overflow on tablet/mobile.

**The Kicker Content Rule.** The kicker is not a section name; it is information that earns the section. `35+ PROYECTOS — 8 INDUSTRIAS`, `SEP 2011 — PRESENTE`, `DISCIPLINAS // UX — RESEARCH — WEB — BRAND`. Empty kickers (`PORTFOLIO`, `SERVICES`, `ABOUT`) are the template; valued kickers are the brand.

## 4. Elevation

The system is **flat by default**. Surfaces do not carry shadows. Depth is conveyed exclusively through state response (hover lifts to a 2% Chalk overlay, focus reveals a 2px Bench Orange ring, active depresses the button) or on the one permitted focal element: the primary CTA.

### Shadow Vocabulary
- **Ambient CTA** (`box-shadow: 0 0 0 1px rgba(240, 64, 0, 0.40), 0 1px 2px rgba(0, 0, 0, 0.50)`): The only permitted shadow. Used on the primary CTA at rest to lift it from the bench. Forbidden on cards, forbidden on inputs, forbidden as a hover treatment. Removed on `:active`.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a state response (hover, focus, active) or on the one permitted focal element (the primary CTA).

**The No-Soft-Glow Rule.** The forbidden pattern is `border: 1px solid X` plus a soft wide drop shadow on the same element. Pick one: a single solid border at the brand color, OR a defined shadow at no more than 8px blur, never both as decoration. The "ghost-card" pattern is prohibited.

**The Frame-Shadow Divorce.** The lined-button and section-frame devices use a 1px Border Strong frame, no shadow. The primary CTA uses the ambient CTA shadow, no extra frame. The two are mutually exclusive. A button that has both a 1px border and a `shadow-lg` is the codex tell; refuse and rewrite.

## 5. Components

For each component, character line first, then shape, color assignment, states, and any distinctive behavior.

### Buttons
- **Shape:** Small radius (`2px`) for solid buttons; squared (`0px`) for the lined variant. The tool, not the chip.
- **Primary:** Bench Orange background, white text, ambient CTA shadow. Hover: tonal shift to `#D63800`. Active: scale `0.97` + shadow removed. Focus: 2px Bench Orange ring, 2px offset.
- **Outline:** Transparent background, 1px Border Strong border, Chalk text. Hover: border and text shift to Bench Orange.
- **Ghost:** Transparent background, no border, Chalk text. Hover: `bg-white/[0.05]` surface, text shifts to Bench Orange.
- **Lined (new, the brand device):** Transparent background, 1px Border Strong frame, squared corners (`0px`), Geist Mono uppercase tracked label, optional leading/trailing bracket or pipe (`[ AGENDA ]`, `| VER PROYECTOS |`). Hover: border and label shift to Bench Orange. Active: scale `0.97`. The lined button is the signature button for the secondary / tertiary actions and is the only place a 1px frame on a button is permitted.
- **Sizes:** `sm` (8px 16px, text 0.875rem), `md` (12px 24px, text 1rem), `lg` (16px 32px, text 1.125rem). All ratios stay roughly 1:2.

### Section Frame (the corner bracket)
- **Device:** 1px L-marks at the four corners of a section. Two 12–16px segments per corner, drawn in Border Strong (or Bench Orange for the hero). The frame is structural, not decorative.
- **Where it appears:** The hero, the CV panel, and at most one other section per page. A corner bracket on a section that doesn't earn the frame is decoration; a corner bracket on the hero, the CV, or the project detail is voice. Never on every section.
- **Pairing:** Pairs with the hero glow (the radial gradient at the top) — the frame is the chassis, the glow is the signature atmosphere. Forbidden on the same element as a soft drop shadow.

### Kicker (the section label)
- **Style:** Geist Mono, 0.75rem, uppercase, letter-spacing `0.12em`. Color: Bench Orange by default; Iron for the HUD-readout variant; Chalk for the inverted (on dark-with-orange elements) variant.
- **Position:** Above the section h2, with 8px gap (`mb-2`).
- **Content rule:** The kicker carries information. `35+ PROYECTOS — 8 INDUSTRIAS`, `SEP 2011 — PRESENTE`, `DISCIPLINAS // UX — RESEARCH — WEB — BRAND`. Never an empty section name. See The Kicker Content Rule.

### HUD Readout (the seniority signal)
- **Style:** Geist Mono, 0.75rem, uppercase, letter-spacing `0.12em`. Color: Iron. Set as a single column or a single line; the values and the labels share a single mono rhythm.
- **Format:** `14+ AÑOS DE EXPERIENCIA` / `50+ PROYECTOS ENTREGADOS` / `8+ INDUSTRIAS` / `2015 — CO-FUNDADOR PÁVLOV`. Mono column alignment, no icon, no tile background, no gradient on the numbers.
- **Container:** Optional 1px L-mark frame (Section Frame device). Sits at the foot of the "Sobre mí" teaser or the hero, framed by the section corner brackets.
- **Anti-pattern:** The hero-metric template (4-up gradient-numbers-on-tiles) is forbidden. The HUD readout is the disciplined version of the same information; it is voice where the template is chrome.

### Mono Microcopy (the terminal status line)
- **Style:** Geist Mono, 0.625rem–0.75rem, uppercase, letter-spacing `0.12em`. Color: Iron or Bench Orange depending on whether the microcopy is a status (Iron) or a call to action (Bench Orange).
- **Where it appears:** Two or three per page, never more. Near the calendar CTA: `STATUS: AVAILABLE // REPLY < 24H`. At the foot of the hero: `// BOOT SEQUENCE COMPLETE`. At the head of the project listing: `[ SECTION_ID: PROJECTS ]`.
- **Content rule:** Microcopy names a real state. A microcopy that doesn't correspond to a real piece of information is decoration and gets cut. The restraint is the voice.

### Status Indicator (the pulse badge)
- **Style:** Border Quiet border, `rounded-full`, `px-4 py-1.5`. Mono label, Bench Orange text. The label is "Disponible para proyectos".
- **Active pulse:** A 1.5px Bench Orange dot with a Tailwind `animate-ping` halo. The dot pairs with the text — the badge is a status, not an animation.
- **Reduced motion:** The pulse animation is replaced with a static Bench Orange dot. The label still carries the meaning.

### Cards / Containers
- **Corner Style:** `rounded-lg` (8px) for project cards; `rounded-xl` (12px) for the CV card. **Never** `rounded-2xl` (16px) or larger. (The 16px+ rounded-card with a soft shadow is the codex tell; cap at 12px.)
- **Background:** Workbench Black, no tonal lift at rest.
- **Shadow Strategy:** None. State-only elevation: hover lifts to `bg-white/[0.025]` (a 2% Chalk overlay).
- **Border:** 1px Border Quiet as the default frame; Border Strong on focus.
- **Line-grid frame (new, the brand device):** In the project listing, the grid uses `gap-px bg-foreground/10` so the Border Quiet color shows through as a 1px line between cards. The line is the layout grammar; the card is the unit. No rounded background between cells.

### Project Card (signature)
- **Shape:** `rounded-lg` (8px) on the outer card. No rounded corners on the image — it bleeds to the card edge.
- **Structure:** 3:2 image on top (with a `bg-white/5` fallback for missing thumbnails), then a 24px padding block below with the title (Title, 700), the year (Label, Iron, mono), an optional lock icon for private projects, and a 2-line clamped description (Body, Iron).
- **Hover:** The image scales `1.05` over 700ms ease-out; the card background shifts to `bg-white/[0.025]`; the title shifts to Bench Orange.
- **Private projects:** A 12×12 lock icon next to the year; the icon is Iron, never Bench Orange.

### Navigation
- **Desktop:** Fixed top, `bg-background/90 backdrop-blur-md`, 1px bottom border in Border Quiet, max-width 6xl centered. Logo (32×32 SVG) on the left, mono-uppercase nav links in the middle, Bench Orange "Trabajemos juntos" CTA on the right.
- **Active state:** Chalk text for current route, Iron for inactive. On hover, link text shifts to Chalk.
- **Mobile:** Same shell; nav collapses into a drawer triggered by a 40×40 icon button. The button is a 2-state icon (hamburger ↔ X) with `aria-expanded` and `aria-controls` properly set.

### Footer
- **Style:** 1px top border in Border Quiet; horizontal mono-uppercase tracked row, Iron text. Two columns at desktop, stacked at mobile: the copyright on the left, the social links (LinkedIn, GitHub) on the right. The footer mirrors the nav's mono treatment — it is part of the system, not an afterthought.
- **Microcopy line (optional):** A single mono microcopy line above the copyright, e.g. `// A26.SYS // PRODUCT DESIGNER PORTFOLIO`. One line per site, never per page.

### Job Position Row
- **Shape:** No card around the row; 1px Border Quiet bottom rule separates rows in the CV list. Last row drops the rule.
- **Structure:** 48×48 company chip (Border Quiet, `rounded-full`, company initial in mono or logo) on the left; title (Title, 700), company (Body, Iron), and period (Label, Iron, mono, uppercase) on the right.
- **Hover:** Title shifts to Bench Orange; company chip border shifts to `border-accent/50`.

### Orbital Signature (the 3D centerpiece)
- **Status:** Contained signature, not centerpiece. A single section on the home page; the case studies lead, the orbital supports.
- **Scene:** A central node (planet) with three orbital rings at different inclinations. Each ring carries a mono-uppercase satellite: UX, DEV, BUSINESS.
- **Interaction:** Auto-rotate at rest. OrbitControls on engage; auto-rotate resumes 3 seconds after release.
- **Reduced motion:** The WebGL scene is replaced with a static labeled grid (the same three satellites, the same labels, drawn in HTML/CSS) at the same height. The narrative of the signature is preserved; the motion is not.
- **Accessibility:** `role="img"` with `aria-label="Three practice areas orbiting a center of craft: UX, DEV, BUSINESS."` on the orbital container.

### Hero Glow (the only atmospheric decoration)
- **Device:** A radial gradient (ellipse 80% × 50% at 50% −10%) of Bench Orange at 18% opacity, fading to transparent, with a secondary softer glow (60% × 40% at 50% 0%, 8% opacity). Positioned absolute inset 0, `pointer-events: none`, `z-index: 0`.
- **Where it appears:** The hero only. The glow is the signature atmosphere of the site — one element, one section, one screen. Forbidden as a global background.

## 6. Do's and Don'ts

Concrete, forceful guardrails. Every anti-reference in PRODUCT.md carries through here.

### Do:
- **Do** keep Bench Orange on ≤ 15% of any given screen. The One Voice Rule.
- **Do** use Geist Mono for actual labels only — dates, file types, version, role metadata, status, kicker values, HUD readouts, microcopy, nav, footer. The Mono Label Rule.
- **Do** give the kicker information to carry. `35+ PROYECTOS — 8 INDUSTRIAS` is voice; `PORTFOLIO` is template. The Kicker Content Rule.
- **Do** use the Section Frame device on the hero, the CV, and at most one other section per page. The frame earns its place by the section that carries it.
- **Do** use the HUD Readout for the seniority signal — mono, no gradient, no tile background, no icon. The disciplined version of the stat tile.
- **Do** use the Lined Button (1px frame, squared, mono label) as the brand button for secondary / tertiary actions.
- **Do** test hero H1s at every breakpoint with the actual copy. Long Spanish words + large clamp scales + narrow grids cause overflow on tablet/mobile.
- **Do** use `text-wrap: balance` on h1–h3 and `text-wrap: pretty` on long prose.
- **Do** give every interactive element a visible focus ring (2px Bench Orange, 2px offset, contrast-safe).
- **Do** keep the 3D orbital to one contained section with a full reduced-motion fallback. The work leads; the 3D does not.
- **Do** pair color with text, position, or icon for any status indicator. Color is never the only carrier of meaning.
- **Do** subscribe every motion script to `astro:page-load` (init) and `astro:after-swap` (teardown). Teardown disposes geometries, materials, controls, and label renderers.

### Don't:
- **Don't** use gradient text (`background-clip: text` on a gradient). Decorative, never meaningful. Use a single solid color; emphasis through weight or size.
- **Don't** use empty kickers. A kicker that says only `PORTFOLIO`, `SERVICES`, or `ABOUT` is the 2024–2026 template; the kicker must carry information.
- **Don't** apply the Section Frame device to every section. The corner bracket is voice on the hero / CV / project detail; it is chrome on the Sobre mí teaser and the contact section.
- **Don't** use the hero-metric template (4-up stat tile grid with gradient numbers, big-number / small-label / supporting-stats / gradient accent). The HUD Readout is the disciplined version of the same information; use that.
- **Don't** use identical 3-up service-tile cards (icon + heading + paragraph) under a `SERVICES` heading. The most common 2024–2026 template. Replace with a single-typography discipline list, a 3-paragraph process narrative, or fold the disciplines into the Sobre mí page.
- **Don't** use `border: 1px solid X` + a soft wide drop shadow on the same element. The "ghost-card" pattern; the Frame-Shadow Divorce rule.
- **Don't** use `rounded-2xl` (16px) or larger on cards or sections. Cards top out at 12px (`rounded-xl`). The No-3D-Card Rule.
- **Don't** use `repeating-linear-gradient` stripe patterns as background decoration — not on `body:before`, not in section margins, not as a "scan-line" texture across the page. The stripes are the literal-cosplay anti-pattern; the discipline of the system is the voice. A single restrained scan-line on the hero orbital frame is permitted if it earns its place; the page background is not.
- **Don't** use glassmorphism as the default surface. A single contained glass card for the CV panel is permitted; glass on every other element is decorative, not meaningful.
- **Don't** use literal anime cosplay — full hex-frame overlays, ASCII-art decorations, fictional status strings (`AT FIELD ACTIVE`, `LCL O2 78%`) that don't correspond to a real piece of information. The restraint is the voice; the cosplay is the failure.
- **Don't** animate CSS layout properties (height, width, padding) for state transitions. Animate transform and opacity only.
- **Don't** rely on the 3D orbital as the centerpiece of the page. A portfolio is not a tech demo.
- **Don't** use placeholder Lorem Ipsum or "I help ambitious companies" copy. The voice is direct, present-tense, first-person, restrained. The Voice Contract in PRODUCT.md is the enforcement.
- **Don't** use the warm-cream / sand / bone / parchment body background. The dark surface is the bench; the warmth is the orange and the typography, not the body bg.
