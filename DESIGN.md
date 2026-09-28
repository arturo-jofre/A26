---
name: A26 Portafolio
description: Senior product designer portfolio. Workbench + NERV — Vercel-engineering skeleton with NERV accent borders, lightweight outline buttons, mono labels, named HUD system, bracketed list markers. Engineering is the brand. Live visual reference at /ui-kit.
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
  sm: "0px"
  md: "0px"
  lg: "0px"
  xl: "0px"
  full: "9999px"
  note: "Surfaces are sharp. The rounded scale (none–xl) is 0. The status indicator container is a sharp rectangle; the 1.5px dot and its pulse halo use `full` (9999px) as indicator shapes — not as a surface corner."
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
    backgroundColor: "transparent"
    textColor: "{colors.bench-orange}"
    border: "1px solid {colors.bench-orange}"
    rounded: "{rounded.sm}"
    padding: "10px 24px"
    hover:
      backgroundColor: "{colors.bench-orange}"
      textColor: "{colors.workbench-black}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    border: "1px solid {colors.border-strong}"
    rounded: "{rounded.sm}"
    padding: "10px 24px"
    hover:
      backgroundColor: "rgba(255, 255, 255, 0.05)"
      textColor: "{colors.bench-orange}"
      border: "1px solid {colors.bench-orange}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    border: "none"
    rounded: "{rounded.none}"
    padding: "0"
    hover:
      textColor: "{colors.bench-orange}"
  button-disabled:
    backgroundColor: "transparent"
    textColor: "rgba(138, 132, 124, 0.5)"
    border: "1px dashed {colors.border-quiet}"
    cursor: "not-allowed"
  section-frame:
    tones:
      quiet: "{colors.border-quiet}"
      strong: "{colors.border-strong}"
      accent: "{colors.bench-orange}"
      foreground: "{colors.chalk}"
      muted: "{colors.iron}"
    note: "Component renders only the four corner L-marks; the surrounding border and padding are supplied by the consumer via the `class` prop."
  kicker:
    textColor: "{colors.bench-orange}"
    typography: "{typography.label}"
    padding: "0 0 8px 0"
    brackets: "true"
    tones:
      accent: "{colors.bench-orange}"
      muted: "{colors.iron}"
      foreground: "{colors.chalk}"
  badge:
    typography: "{typography.label}"
    variants:
      status:
        border: "1px solid {colors.border-quiet}"
        textColor: "{colors.iron}"
        dotColor: "{colors.bench-orange}"
        pulse: "true"
      online:
        border: "1px solid rgba(240, 64, 0, 0.50)"
        textColor: "{colors.bench-orange}"
        dotColor: "{colors.bench-orange}"
        pulse: "true"
      tag:
        border: "1px solid {colors.border-quiet}"
        textColor: "{colors.iron}"
      count:
        padding: "4px 8px"
        backgroundColor: "transparent"
        note: "Background and color are supplied by the consumer (e.g. `bg-accent text-white` for a filled count, `border border-border text-muted` for a quiet one)."
  alert:
    typography: "{typography.label}"
    padding: "16px"
    variants:
      info:
        border: "1px solid rgba(240, 64, 0, 0.40)"
        labelColor: "{colors.bench-orange}"
        label: "[ INFO ]"
      note:
        border: "1px solid {colors.border-quiet}"
        labelColor: "{colors.iron}"
        label: "[ NOTA ]"
      error:
        border: "1px solid rgba(248, 113, 113, 0.40)"
        labelColor: "rgb(248, 113, 113)"
        label: "[ ERROR ]"
  mono-microcopy:
    typography:
      fontFamily: "Geist Mono, ui-monospace, monospace"
      fontSize: "0.6875rem"
      letterSpacing: "0.12em"
      textTransform: "uppercase"
    tones:
      muted: "{colors.iron}"
      accent: "{colors.bench-orange}"
  hud-readout:
    textColor: "{colors.iron}"
    typography: "{typography.label}"
    padding: "0"
  card:
    border: "1px solid {colors.border-quiet}"
    backgroundColor: "{colors.workbench-black}"
    rounded: "{rounded.none}"
    hover:
      border: "1px solid {colors.bench-orange}"
  line-background:
    angle: "45deg"
    lineWidth: "1px"
    spacing: "16px"
    utilityClasses:
      foreground: ".line-bg-foreground"
      accent: ".line-bg-accent"
      muted: ".line-bg-muted"
    tones:
      foreground: "rgba(214, 211, 206, 0.08)"
      accent: "rgba(240, 64, 0, 0.14)"
      muted: "rgba(138, 132, 124, 0.14)"
  section-divider:
    wrapper: "mx-auto max-w-6xl px-4 sm:px-8 lg:px-12"
    hairline:
      height: "1px"
      backgroundColor: "rgba(214, 211, 206, 0.10)"
    signature:
      height: "1px"
      backgroundColor: "rgba(240, 64, 0, 0.40)"
      use: "Once per page, between the Sobre mí and the Orbital sections"
  ui-kit:
    path: "/ui-kit"
    version: "v0.5.0"
    sections:
      - "01 · Buttons"
      - "02 · Typography"
      - "03 · Form controls"
      - "04 · Badges & status"
      - "05 · Cards"
      - "06 · Data readouts"
      - "07 · Navigation"
      - "08 · Feedback"
      - "09 · Frames & dividers"
      - "10 · Composition (interactive contact form)"
      - "11 · Lists (bracketed markers)"
    note: "Each section renders the real Astro component from src/components/. Section 10 validates composition by wiring Button + Alert + Badge + Kicker + MonoMicrocopy + SectionFrame into a working form with client-side validation. Section 11 documents the bracketed list markers that apply to all prose content. Visual source of truth for the entire system."
  lists:
    markers:
      ordered:
        content: "[NN]"
        counter: "decimal-leading-zero"
        scope: "ol"
        auto: ".prose-custom ol"
        manual: "ol.list-bracket"
      unordered:
        content: "[•]"
        scope: "ul"
        auto: ".prose-custom ul"
        manual: "ul.list-bracket"
      checklist:
        content: "[✓]"
        scope: "ul"
        auto: ".prose-custom ul.list-check / [data-marker=\"check\"]"
        manual: "ul.list-check / [data-marker=\"check\"]"
    markerStyle:
      fontFamily: "Geist Mono, ui-monospace, monospace"
      fontSize: "0.75rem"
      letterSpacing: "0.12em"
      color: "{colors.bench-orange}"
      position: "absolute"
      align: "top"
      indent: "2.5rem"
    nested:
      counterReset: "per-level"
      note: "The CSS counter `bracket-ol` resets on each new <ol>, so nested ordered lists restart at [01] instead of continuing the parent count."
    antiPattern: "Never pair bracketed list markers with default Tailwind list utilities (`list-disc`, `list-decimal`) — the system uses custom counters, not browser defaults."
---

# Design System: A26 Portafolio

## 1. Overview

**Creative North Star: "Workbench + NERV"**

The system is the disciplined intersection of two reference sets. The **skeleton is engineering-grade product UI** (Vercel / OpenDesign / Tailwind): the grid is the design, 1px borders do real work, focus rings are committed, numbers are tabular, version strings and build IDs are the signature of a working interface. The **accents are NERV** (Evangelion, 1995–): labeled readouts given room to breathe, a single orange work light on the dark bench, brackets as the frame, colored borders that mark where something matters. Tsutomu Nihei's restraint (Knights of Sidonia, 2014) informs the negative space and the thin rules that separate a single piece of information from the next. The site is **not** literal anime cosplay and **not** a 2024–2026 Tailwind.com template — it is the disciplined intersection, where every device earns its place by carrying information.

The aesthetic philosophy is calibration over performance. We do not decorate; we set values. We do not announce; we commit. A visitor should leave thinking "this person has been doing this for a long time and is still paying attention", not "look at this portfolio template". The system serves two audiences from one hierarchy: founders and design leads evaluating Arturo for a UX or product engagement, and hiring managers and recruiters evaluating him for a senior in-house role. The case studies prove fit for the first; the case studies plus the experience trajectory prove fit for the second. The site does not split into a "for clients" version and a "for recruiters" version.

**Key Characteristics:**

- **The frame is the system.** Corner brackets, 1px rails, mono kickers, line-grid cards, and HUD readouts are a named brand system, not chrome. Each device earns its place by carrying information: a date, a count, a section ID, a status, a label. The discipline is the difference between this site and a template that uses the same devices as empty grammar.
- **Brackets frame the labels.** The kicker wears brackets (`[ 35+ PROYECTOS // 8 INDUSTRIAS ]`) as the terminal grammar of the brand. Brackets mark labels and frames; buttons do not wear brackets.
- **Lightweight buttons.** Buttons are outline at rest — a 1px border, no fill. The primary carries a Bench Orange border and Bench Orange text; hover fills the button (primary with Bench Orange and the text turns the bench color; secondary with a 5% white lift). Weight is a state response, not a resting default.
- **Committed accent.** Bench Orange carries status, the active navigation state, the primary CTA border and text, the project year markers, the kicker, and the signature orbital satellites. It is not scattered. It appears on ≤ 15% of any given screen; its rarity is the point.
- **Mono for labels, not for voice.** Geist Mono appears on dates, file types, version strings, role metadata, status indicators, the kicker, the HUD readout, the nav, the microcopy, and the footer. It is never used for body copy, never used for "I help ambitious companies" prose, never used as decoration.
- **Tactile state response.** Buttons fill on hover, cards shift their border to Bench Orange on hover, focus rings are crisp and committed. The interaction is part of the brand.
- **Flat surfaces, state-only elevation.** No decorative shadows, no ghost cards, no ambient CTA shadow. Depth is conveyed exclusively as a state response.
- **Signature, not spectacle.** The 3D orbital is a contained signature (UX / DEV / BUSINESS as orbiting forces around a center of craft) with a full reduced-motion fallback, not the centerpiece of the page.

## 2. Colors

The palette is a workbench: a dark bench, a chalk-on-ink read, one committed orange work light, and two quiet utility greys for structural information. The orange is the only hue; everything else is the bench.

### Primary
- **Bench Orange** (`#F04000`): The brand's load-bearing accent. Status indicators (the "Disponible para proyectos" pulse), the active navigation state, the primary CTA border and text, project year markers, the orbital satellites, the kicker on every section, the focus ring. **The One Voice Rule** below defines its discipline.
- **Accent Hover** (`#D63800`): A 1.5-step darker orange for filled states (the primary button on hover).

### Neutral
- **Workbench Black** (`#181818`): The calm surface. The body background, the dominant tone of the page, the canvas against which every other element reads.
- **Chalk** (`#D6D3CE`): The primary ink. Body text, headings, primary UI text. A true off-white with a slight warmth — not a clinical white, not a cream.
- **Iron** (`#8A847C`): Secondary metadata. Subtitles, captions, dates in mono, support text, placeholders, the HUD-readout number set. The supporting voice.
- **Scribe** (`#3A3734`): Quiet structural dividers, low-emphasis card backgrounds, tertiary borders, the `:hover` background for inline job rows. The ink that marks but does not announce.
- **Border Quiet** (`rgba(214, 211, 206, 0.10)`): The default 1px border. Sits on every bordered cell, divider, and grid frame.
- **Border Strong** (`rgba(214, 211, 206, 0.18)`): The emphasis 1px border. Secondary-button frames, section corner brackets, focus rings, signature section dividers.

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
**The Mono Label Rule.** Geist Mono is reserved for actual labels: dates, file types, version, role metadata, status, kicker values, HUD readouts, microcopy. The mono earns its place by labelling something real. A kicker that says `PORTFOLIO` and nothing else is decoration; a kicker that says `[ 35+ PROYECTOS // 8 INDUSTRIAS ]` is voice.

**The Kicker Content Rule.** The kicker is not a section name; it is information that earns the section. It always wears brackets: `[ 35+ PROYECTOS // 8 INDUSTRIAS ]`, `[ SEP 2011 — PRESENTE ]`, `[ DISCIPLINAS // UX — RESEARCH — WEB — BRAND ]`. Empty kickers (`PORTFOLIO`, `SERVICES`, `ABOUT`) are the template; valued bracketed kickers are the brand.

**The Negative Space Rule.** Display and Headline use tight line-heights (0.95, 1.1) and tight letter-spacing (`-0.03em`). Body and Body Large use generous line-heights (1.6+). The contrast is part of the engineering: large type breathes by being tight; body type breathes by being open.

**The Wrap Rule.** Display and Headline (h1–h3) use `text-wrap: balance` for even line lengths. Long prose uses `text-wrap: pretty` to reduce orphans. Test hero H1s at every breakpoint with the actual copy — long Spanish words plus large clamp scales plus narrow grids cause overflow on tablet/mobile.

## 4. Elevation

The system is **flat by default**. Surfaces do not carry shadows. Depth is conveyed exclusively through state response: buttons fill on hover, cards shift their border to Bench Orange, focus reveals a 2px Bench Orange ring, active depresses the button. There is no permitted resting shadow anywhere in the system.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows never appear — not as a resting treatment, not as a hover treatment. Depth is color and border, never shadow.

**The No-Soft-Glow Rule.** The forbidden pattern is `border: 1px solid X` plus a soft wide drop shadow on the same element. Pick one: a single solid border at the brand color, or nothing. The "ghost-card" pattern is prohibited.

**The Fill-Is-The-Hover Rule.** Button weight is a state response, never a resting default. Primary and secondary are outline at rest; hover fills them. A filled button at rest is out of system.

## 5. Components

For each component, character line first, then shape, color assignment, states, and any distinctive behavior.

> **Visual source of truth: [`/ui-kit`](/ui-kit) (v0.5.0).** Each component documented below is rendered live on that page as the real Astro component from `src/components/`. Section 10 of the UI Kit wires Button + Alert + Badge + Kicker + MonoMicrocopy + SectionFrame into a working contact form with client-side validation — that is the canonical reference for component composition. Section 11 documents the bracketed list markers. When this document and the UI Kit disagree, the UI Kit wins.

### Buttons
- **Component:** `src/components/Button.astro` · props: `href?`, `variant: "primary" | "secondary" | "link"`, `size: "sm" | "md" | "lg"`, `type: "button" | "submit" | "reset"` (default `"button"`), `disabled?`.
- **Shape:** No radius (sharp). The 1px border is the whole weight. No fill at rest. No brackets in button labels (brackets belong to the kicker and the frames).
- **Primary:** 1px Bench Orange border, Bench Orange text, transparent background. Hover: background fills Bench Orange, text turns the bench color (`#181818`) — the stamp effect. Focus: 2px Bench Orange ring, 2px offset. This is the main action on the page.
- **Secondary:** 1px Border Strong border, Chalk text, transparent background. Hover: border and text shift to Bench Orange, background lifts to `bg-white/[0.05]`. Focus: 2px Bench Orange ring, 2px offset.
- **Link:** Text with a trailing arrow (`→`), Chalk at rest. Hover: text shifts to Bench Orange, arrow stays Bench Orange. No border, no padding. Used for tertiary actions and in-context navigation.
- **Disabled:** 1px dashed Border Quiet border, `text-muted/50`, `cursor: not-allowed`, transparent background. Identifiable at a glance — the dashed border signals non-interactive. Same treatment across primary and secondary; a disabled link is `text-muted/50`.
- **Sizes (consistent scale):** `sm` = `px-4 py-2`, `text-xs`; `md` = `px-6 py-2.5`, `text-sm`; `lg` = `px-8 py-3.5`, `text-base`. The horizontal padding scales 4 → 6 → 8. Vertical scales 2 → 2.5 → 3.5.
- **Inside a form:** Pass `type="submit"` or `type="reset"` explicitly. The component defaults to `type="button"` to prevent accidental form submission when used as a regular button.

### Section Frame (the corner bracket)
- **Component:** `src/components/SectionFrame.astro` · props: `tone: "quiet" | "strong" | "accent" | "foreground" | "muted"` (default `"strong"`), `size: "sm" | "md" | "lg"` (default `"md"`), `class?`. **The component renders only the four corner L-marks**; the surrounding border, padding, and any background are supplied by the consumer via the `class` prop. This decoupling lets a single frame tone serve as the visual signature on different border treatments.
- **Device:** 1px L-marks at the four corners of a section. Two 12–16px segments per corner.
- **Tones:** `accent` (Bench Orange — hero / CV / project detail), `strong` (Border Strong — default structural), `quiet` (Border Quiet), `foreground` (Chalk — clear definition without color), `muted` (Iron — the most discreet). The `accent` tone is the NERV mark; the `foreground` and `muted` tones are the alternatives when a frame needs to define without color.
- **Dashed variant:** A dashed border (Chalk at 30%) signals transient zones — drop zones, empty containers, sections under construction. Never on finished sections. The dashed look is built by hand (border-dashed on the consumer-supplied border + dashed corner marks) — there is no `tone="dashed"` because dashed is a border treatment, not a tone.
- **Where it appears:** The hero, the CV panel, and at most one other section per page. A corner bracket on a section that doesn't earn the frame is decoration; a corner bracket on the hero, the CV, or the project detail is voice. Never on every section.

### Kicker (the section label)
- **Component:** `src/components/Kicker.astro` · props: `tone: "accent" | "muted" | "foreground"` (default `"accent"`), `class?`.
- **Style:** Geist Mono, 0.75rem, uppercase, letter-spacing `0.12em`, wrapped in brackets (`[ … ]`). The component renders the brackets itself — pass only the label text as slot content.
- **Tones:** Bench Orange (`accent`, default), Iron (`muted`, used inside HUD readouts and HUD-toned contexts), Chalk (`foreground`, used when the kicker sits inside a Bench Orange container and the orange would clash).
- **Position:** Above the section h2, with 8px gap (`mb-2`).
- **Content rule:** The kicker carries information. `[ 35+ PROYECTOS // 8 INDUSTRIAS ]`, `[ SEP 2011 — PRESENTE ]`, `[ DISCIPLINAS // UX — RESEARCH — WEB — BRAND ]`. Never an empty section name. See The Kicker Content Rule.

### HUD Readout (the seniority signal)
- **Component:** `src/components/HudReadout.astro` · props: `rows: { key, value, href?, external? }[]`, `label?`, `framed?: boolean` (default `false`).
- **Style:** Geist Mono, 0.75rem, uppercase, letter-spacing `0.12em`. Color: Iron labels, Chalk values. Set as a single column or a single line; the values and the labels share a single mono rhythm.
- **Format:** `[ TELEMETRY ]` header (only when `framed`), then `EXPERIENCIA / 14+ AÑOS`, `PROYECTOS / 50+`, `INDUSTRIAS / 8+`, `PÁVLOV / 2015`. Mono column alignment, no icon, no tile background, no gradient on the numbers.
- **Container:** When `framed={true}`, the readout wraps itself in a `SectionFrame tone="strong"` with `border border-border-strong p-5` and a `[ TELEMETRY ]` kicker — use this for the "Sobre mí" CV side panel. When `framed={false}`, it renders bare — use this when embedding inside another layout.
- **Anti-pattern:** The hero-metric template (4-up gradient-numbers-on-tiles) is forbidden. The HUD readout is the disciplined version of the same information; it is voice where the template is chrome.

### Mono Microcopy (the terminal status line)
- **Component:** `src/components/MonoMicrocopy.astro` · props: `tone: "muted" | "accent"` (default `"muted"`), `class?`.
- **Style:** Geist Mono, 0.6875rem, uppercase, letter-spacing `0.12em`. Color: Iron (default, status readouts) or Bench Orange (CTA-adjacent).
- **Where it appears:** Two or three per page, never more. Near the calendar CTA: `// STATUS: AVAILABLE · REPLY < 24H`. Inside the orbital HUD panels. At the foot of in-form microcopy (char counters, validation hints).
- **Content rule:** Microcopy names a real state. A microcopy that doesn't correspond to a real piece of information is decoration and gets cut. The restraint is the voice.

### Status Indicator / Badge
- **Component:** `src/components/Badge.astro` · props: `variant: "status" | "online" | "tag" | "count"` (default `"status"`), `class?`. The slot is the label.
- **`status`:** Border Quiet border, `px-4 py-1.5` (sharp rectangle, no pill). Mono label, Iron text, Bench Orange dot with `animate-ping` halo. The default availability signal. Use `role="status"` + `aria-live="polite"` on the consumer's wrapper so screen readers announce state changes.
- **`online`:** Bench Orange-tinted border (`border-accent/50`), Bench Orange text, Bench Orange dot with `animate-ping`. A louder presence than `status` for confirmed-active states.
- **`tag`:** Border Quiet border, Iron text, no dot. For metadata labels (sectors, disciplines, project types).
- **`count`:** No border, no dot. The base provides padding (`px-2 py-1`) and mono typography only; the consumer supplies the visual treatment via `class` — `bg-accent text-white` for a filled count, `border border-border text-muted` for a quiet one.
- **Reduced motion:** The pulse animation on `status` is replaced with a static Bench Orange dot via `motion-reduce:animate-none`. The `online` variant keeps the animation (it's an always-on signal).

### Alert (the feedback block)
- **Component:** `src/components/Alert.astro` · props: `variant: "info" | "note" | "error"` (default `"info"`), `label?`, `class?`. The slot is the body copy.
- **`info`:** 1px `rgba(240, 64, 0, 0.40)` border (Bench Orange at 40%), Bench Orange label `[ INFO ]`. The default positive/neutral feedback tone. Used for availability notices and form success.
- **`note`:** 1px Border Quiet border, Iron label `[ NOTA ]`. Quiet context — supplementary information that doesn't require a tone shift.
- **`error`:** 1px `rgba(248, 113, 113, 0.40)` border (red-400 at 40%), `red-400` label `[ ERROR ]`. The only red in the system; reserved for validation failure and load errors.
- **Shape:** 1px border, `p-4`, sharp corners. The body is Body (`text-sm text-foreground leading-relaxed`); the label is the system Label type.
- **Usage:** One per surface at a time, never stacked. When wired into a form (see §10 of the UI Kit), alerts are pre-rendered with `hidden` and toggled by client-side validation; the consumer passes validation copy as the slot.

### Dividers
- **Section divider (between page sections):** A wrapper `<div class="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12" aria-hidden="true">` containing `<div class="h-px bg-foreground/10"></div>`. The wrapper matches the page's outer content gutter so the divider sits flush with the section edges. Use between every adjacent top-level section.
- **Signature section break:** Same wrapper, `<div class="h-px bg-accent/40"></div>`. Use once per page — typically between the "Sobre mí" / CV section and the Orbital signature. The accent is the one-voice rule honored: it marks the single visual punctuation of the page.
- **Solid hairline (inline):** `h-px bg-foreground/10`. For in-flow content separation inside a single section.
- **Solid centered:** A hairline on each side of a mono dot (`·`). For paired blocks (key / value rows, list pairs).
- **Dashed hairline / dashed centered:** `border-t border-dashed border-foreground/25`. For transient zones, in-progress sections, or to visually separate pending content.

### Line Background (diagonal)
- **Utility classes:** `.line-bg-foreground`, `.line-bg-accent`, `.line-bg-muted` (defined in `global.css`). These replace the old inline `repeating-linear-gradient` declarations — always reach for the utility class, never inline the gradient.
- **Device:** `repeating-linear-gradient(45deg, color 0, color 1px, transparent 1px, transparent 16px)`. 1px diagonal lines at 45°, spaced 16px. Static — no motion, so `prefers-reduced-motion` needs no exception.
- **Tones:** foreground (Chalk at 0.08), accent (Bench Orange at 0.14), muted (Iron at 0.14). Same colors as the border tokens.
- **Where it appears:** As a backdrop for a hero or a data zone, behind content with sufficient contrast. The hero on `index.astro` uses `.line-bg-foreground` masked with `[mask-image:linear-gradient(to_bottom,black,transparent_90%)]` so the lines fade toward the fold. Never over text, never as a body-wide texture, never animated.
- **Anti-pattern:** random scan-line textures across the whole page, `body:before` stripes, or diagonal lines used as decoration without a section that earns them. The device is a named tool, not a texture.

### Lists (bracketed markers)
- **Location:** All list styles live in `global.css` (`@layer utilities`). No Astro component — the styles are CSS-only, applied to the native `<ol>` and `<ul>` elements so markdown content picks them up automatically through `.prose-custom`.
- **Ordered (`<ol>`):** Counter marker in `decimal-leading-zero`, wrapped in brackets → `[01] [02] [03] …`. The CSS counter `bracket-ol` is `counter-reset` on each `<ol>`, so nested lists restart at `[01]` instead of continuing the parent count. The counter is named and scoped to a single property so it never collides with custom counters.
- **Unordered (`<ul>`):** Default marker is the bracketed bullet `[•]`. A `list-style: none` reset removes the browser default before the pseudo-element takes over.
- **Checklist (`<ul>` with `.list-check` or `data-marker="check"`):** Marker is the bracketed checkmark `[✓]`. Same visual weight as `[•]`, but the symbol signals completion / presence rather than membership.
- **Marker shape:** `::before` pseudo-element, `position: absolute; left: 0; top: 0;`. Indent: `padding-left: 2.5rem` on the `<li>`. Font: Geist Mono, 0.75rem, letter-spacing 0.12em, color Bench Orange. The `font-feature-settings: "tnum"` keeps the bracketed numbers column-aligned when the list wraps.
- **Where it applies:**
  - **Auto:** All `<ol>` and `<ul>` inside `.prose-custom` (every markdown content surface — project case studies, sobre-mi, etc.). One mental model: if it's coming from a `.md` file, it gets the brackets.
  - **Manual:** Outside markdown, opt in with `ol.list-bracket` (numbered), `ul.list-bracket` (default bullet), or `ul.list-check` / `ul[data-marker="check"]` (checklist). The utility classes are exposed in `@layer utilities` so they can be combined with Tailwind utilities.
- **Anti-pattern:** Never pair bracketed list markers with Tailwind's `list-disc` / `list-decimal` — the system uses custom counters, not browser defaults. Never use a `[#]` marker on a list of fewer than 10 items; the zero-pad is a commitment to the bracketed rhythm. Never use `[✓]` on a list that mixes complete and pending items — `[✓]` is for lists where every item is true, not for to-do progress.

### Cards / Containers
- **Component:** `src/components/ProjectCard.astro` is the only first-class card component (used in the project listing). The cards rendered in the UI Kit (§05) and elsewhere on the site use plain `<a>` or `<div>` elements with the same visual contract below.
- **Corner Style:** No radius. Surfaces are sharp; the 1px border is the only frame. The only `rounded-full` in the system is the 1.5px status indicator dot/halo, used as an indicator shape, not a surface corner.
- **Background:** Workbench Black, no tonal lift at rest.
- **Shadow Strategy:** None. State-only elevation: the card border shifts to Bench Orange on hover.
- **Border:** 1px Border Quiet as the default frame; Border Strong on focus.

### Project Card (signature)
- **Shape:** No radius on the outer card. The image bleeds to the card edge.
- **Structure:** 3:2 image on top (with a `bg-white/5` fallback for missing thumbnails), then a 16px padding block below with the title (Title, 700), the year (Label, Iron, mono), an optional lock icon for private projects, and a 2-line clamped description (Body, Iron, `line-clamp-2`).
- **Hover:** The image scales `1.05` over 700ms ease-out; the card border shifts to Bench Orange; the title shifts to Bench Orange.
- **Private projects:** A 12×12 lock icon next to the year; the icon is Iron, never Bench Orange.

### Navigation
- **Desktop:** Fixed top, `bg-background/90 backdrop-blur-md`, 1px bottom border in Border Quiet, max-width 6xl centered. Logo (32×32 SVG) on the left, mono-uppercase nav links in the middle, Bench Orange "Trabajemos juntos" CTA on the right. The CTA is the primary button treatment (outline, fills on hover).
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

## 6. Do's and Don'ts

Concrete, forceful guardrails. Every anti-reference in PRODUCT.md carries through here.

### Do:
- **Do** keep Bench Orange on ≤ 15% of any given screen. The One Voice Rule.
- **Do** use Geist Mono for actual labels only — dates, file types, version, role metadata, status, kicker values, HUD readouts, microcopy, nav, footer. The Mono Label Rule.
- **Do** give the kicker information to carry, wrapped in brackets. `[ 35+ PROYECTOS // 8 INDUSTRIAS ]` is voice; `PORTFOLIO` is template. The Kicker Content Rule.
- **Do** keep buttons outline at rest and fill on hover. The Fill-Is-The-Hover Rule. Primary fills Bench Orange and its text turns the bench color.
- **Do** use the Section Frame device on the hero, the CV, and at most one other section per page. The frame earns its place by the section that carries it. Choose the tone that fits: accent for the hero/CV, foreground or muted for definition without color, dashed for transient zones.
- **Do** use the HUD Readout for the seniority signal — mono, no gradient, no tile background, no icon. The disciplined version of the stat tile.
- **Do** test hero H1s at every breakpoint with the actual copy. Long Spanish words + large clamp scales + narrow grids cause overflow on tablet/mobile.
- **Do** use `text-wrap: balance` on h1–h3 and `text-wrap: pretty` on long prose.
- **Do** give every interactive element a visible focus ring (2px Bench Orange, 2px offset, contrast-safe).
- **Do** keep the 3D orbital to one contained section with a full reduced-motion fallback. The work leads; the 3D does not.
- **Do** pair color with text, position, or icon for any status indicator. Color is never the only carrier of meaning.
- **Do** subscribe every motion script to `astro:page-load` (init) and `astro:after-swap` (teardown). Teardown disposes geometries, materials, controls, and label renderers.
- **Do** use the Line Background (45° diagonal, 1px, spaced 16px) as a named backdrop for heroes and data zones in its three tones. Reach for the `.line-bg-*` utility classes in `global.css`, never inline the gradient.
- **Do** validate composition in `/ui-kit` §10 before shipping a new combination. If a new pattern uses more than one component, prototype it there first and then port to the production surface.

### Don't:
- **Don't** use gradient text (`background-clip: text` on a gradient). Decorative, never meaningful. Use a single solid color; emphasis through weight or size.
- **Don't** use empty kickers. A kicker that says only `PORTFOLIO`, `SERVICES`, or `ABOUT` is the 2024–2026 template; the kicker must carry information and wear brackets.
- **Don't** put brackets on buttons. Brackets belong to kickers and frames; a button label is plain text.
- **Don't** fill a button at rest. Primary and secondary are outline at rest; fill is the hover state. The Fill-Is-The-Hover Rule.
- **Don't** apply the Section Frame device to every section. The corner bracket is voice on the hero / CV / project detail; it is chrome on the Sobre mí teaser and the contact section.
- **Don't** use the hero-metric template (4-up stat tile grid with gradient numbers, big-number / small-label / supporting-stats / gradient accent). The HUD Readout is the disciplined version of the same information; use that.
- **Don't** use identical 3-up service-tile cards (icon + heading + paragraph) under a `SERVICES` heading. The most common 2024–2026 template. Replace with a single-typography discipline list, a 3-paragraph process narrative, or fold the disciplines into the Sobre mí page.
- **Don't** use `border: 1px solid X` + a soft wide drop shadow on the same element. The "ghost-card" pattern; the Frame-Shadow Divorce rule.
- **Don't** use rounded corners on cards, sections, buttons, or interactive surfaces. The system is sharp; the 1px border is the only frame. The Sharp-Edge Rule.
- **Don't** use random scan-line or stripe textures across the whole page, `body:before` stripes, or the Line Background as decoration without a section that earns it. The named device is a tool, not a texture.
- **Don't** use glassmorphism as the default surface. A single contained glass card for the CV panel is permitted; glass on every other element is decorative, not meaningful.
- **Don't** use literal anime cosplay — full hex-frame overlays, ASCII-art decorations, fictional status strings (`AT FIELD ACTIVE`, `LCL O2 78%`) that don't correspond to a real piece of information. The restraint is the voice; the cosplay is the failure.
- **Don't** animate CSS layout properties (height, width, padding) for state transitions. Animate transform and opacity only.
- **Don't** rely on the 3D orbital as the centerpiece of the page. A portfolio is not a tech demo.
- **Don't** use placeholder Lorem Ipsum or "I help ambitious companies" copy. The voice is direct, present-tense, first-person, restrained. The Voice Contract in PRODUCT.md is the enforcement.
- **Don't** use the warm-cream / sand / bone / parchment body background. The dark surface is the bench; the warmth is the orange and the typography, not the body bg.
