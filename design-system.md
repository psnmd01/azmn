# Azaman Design System

DECISION | id=DS-4 | owner=Sara | status=locked | date=2026-06-17 | brief=wt/pm@ef0f7b3 | supersedes=DS-3 (wt/designer@f7a1e81)

DS-4 extends DS-3 for Iteration 4. The CEO mandate is to **elevate, not restart**: tighten the existing foundation, sharpen one signature non-hero section to portfolio-grade, add tokens for the new marketing/conversion layer (CTAs at three placements, trust strip, use-cases, pricing teaser, FAQ, lead capture), and add ONE restrained signature interaction. All within the DS-3 type system + cranberry accent + expressive-but-governed motion. No new families, no new accent, no new motion character.

## DS-4 deltas at a glance

What DS-4 ADDS on top of DS-3:

- **Type rhythm tightening** — letter-spacing tokens for Fraunces display sizes; +tracking on Space Mono eyebrows; tighter line-height on `body-lg`; a new `lead` editorial sub-step between `body-lg` and `h4`; fluid clamp variants for hero (`display-fluid`, `h1-fluid`); a `section-rhythm` spacing token to formalize the inter-section gap.
- **Marketing-section components** — `button-ghost` (true outline secondary), CTA `active`/`disabled` states, `trust-strip`, `panel-tier` (pricing teaser), `faq-disclosure`, `input-lead` + `form-lead` (single-email capture), `tile-usecase` (brief → crew → shipped row).
- **Signature detail (ONE interaction)** — `tile-usecase:hover` reveals the crew that built it. Plus restrained texture: a `noise-overlay` for the dark hero (perf-cheap, very low opacity). Plus a `gate-glyph` SVG mark that punctuates the orchestration sequence (used inside the signature section, not page-wide).
- **Signature section spec** — how-it-works orchestration scroll moment is the picked portfolio-grade pass (default per brief; co-decide point with Leila — flag a delta if use-cases reads stronger after first BUILD-4 pass).

What DS-4 KEEPS unchanged from DS-3:

- All color tokens (ink ladder, surface ladder, border, accent family, mesh stops, success, warning).
- All three font families (Fraunces standard-axis variable, Inter, Space Mono 400/700) and font-loading rules.
- All type-scale sizes and weights from `eyebrow` through `display` (DS-4 only adjusts tracking on the Fraunces sizes and tightens `body-lg` line-height).
- All spacing tokens (gutter ladder, container, section/section-tight/section-lg/section-xl, hero-gap, manifesto, rail).
- All motion tokens (control/panel/reveal/signature durations, expressive/signature/gate easings, stagger-step).
- Section-shape tokens (hero-mesh, section-arc-dark, section-arc-light, manifesto-band, panel).
- The reduced-motion DoD (complete static fallback, non-negotiable).

## Direction

- Thesis: describe the outcome, then show the crew assembling, building, reviewing, and shipping it. This site is the proof.
- Archetype: The Magician tempered by The Architect. It should feel art-directed and technical, never mystical for its own sense.
- Anti-generic moves: Fraunces display type, Inter body, Space Mono labels, one cranberry accent, crafted generative hero, orchestration scroll moment, manifesto band, asymmetry, and now the marketing layer (use-cases, pricing teaser, FAQ, lead capture) art-directed to feel of-a-piece — never SaaS-standard card grids with stock icons.
- Build rule: extend master and the `wt/frontend@b534944` perf foundation (radial-gradient mesh, offscreen-pause, mobile-no-backdrop). Do not restart, do not add a second accent.

## Core Tokens

### Color

Use one accent family only. Cranberry is the action and orchestration signal; mesh colors are tonal depth for the hero and dark transition surfaces.

| Token | Hex | Use | AA-approved surface(s) |
| --- | --- | --- | --- |
| `ink` | `#101214` | Primary text, dark footer background | Text on `surface-raised` 18.77:1, `surface` 16.93:1, `surface-muted` 15.33:1 |
| `ink-muted` | `#4a5563` | Secondary text | Text on `surface-raised` 7.58:1, `surface` 6.83:1, `surface-muted` 6.19:1 |
| `ink-soft` | `#5f6871` | Captions and metadata | Text on `surface-raised` 5.67:1, `surface` 5.11:1, `surface-muted` 4.63:1 |
| `surface` | `#f5f3ee` | Page background | Approved behind `ink`, `ink-muted`, `ink-soft`, `accent`, `accent-text` |
| `surface-raised` | `#ffffff` | Cards, nav, FAQ rows, pricing teaser body, lead-capture surface | Approved behind `ink`, `ink-muted`, `ink-soft`, `accent`, `accent-text` |
| `surface-muted` | `#e7e9e2` | Alternating bands, sequence rails, trust-strip background, quiet panels | Approved behind `ink`, `ink-muted`, `ink-soft`, `accent` |
| `border` | `#d5d8cf` | Default borders | Non-text divider on light surfaces |
| `border-strong` | `#b8beb2` | Dense UI dividers, hover borders, FAQ active row | Non-text divider on light surfaces |
| `accent` | `#bc2a64` | Primary actions, active path, focus rings, gate pills, sequence markers, Pro tier | Text/icon on `accent-on` 5.75:1; text on `surface` 5.18:1, `surface-raised` 5.75:1, `surface-muted` 4.69:1; non-text focus on `ink` 3.27:1 and `mesh-ink` 3.03:1 |
| `accent-text` | `#861347` | Small accent text on light surfaces; eyebrow mono labels | Text on `surface` 8.62:1, `surface-raised` 9.56:1, `accent-soft` 8.11:1 |
| `accent-soft` | `#fce7ef` | Accent tint backgrounds, pricing-teaser top band, focus glow | Approved behind `ink`, `ink-muted`, `accent-text` |
| `accent-on` | `#ffffff` | Text/icons on accent-filled controls and dark mesh | Text on `accent` 5.75:1, `mesh-plum` 16.49:1, `mesh-ink` 17.39:1; large text/icons only on `mesh-magenta` 3.96:1 |
| `mesh-plum` | `#3a0f24` | Hero mesh depth, dark editorial arcs | Approved behind `accent-on` and footer-muted text; do not place cranberry text/rings directly on this stop |
| `mesh-magenta` | `#e0457b` | Hero mesh highlight only | Tonal highlight; use `ink` for small text if text crosses it (4.74:1), `accent-on` only for large text/icons |
| `mesh-ink` | `#0d1b2a` | Hero mesh shadow, dark arc depth | Approved behind `accent-on` and footer-muted text; cranberry non-text UI clears 3.03:1 |
| `success` | `#177245` | Verified or shipped proof points | Use on light surfaces only |
| `warning` | `#8a5a12` | Non-blocking caution states | Use on light surfaces only |

Rules:
- No SaaS blue and no second brand accent. Mesh colors are not CTA colors.
- Any text over the generative hero should land on `mesh-plum` or `mesh-ink` zones with `accent-on` or footer-muted. Avoid body text directly over `mesh-magenta`.
- Cranberry on dark is for strokes, glows, markers, and non-text state. Do not use it as small text on dark plum.
- Marketing sections (trust strip, use-cases, pricing teaser, FAQ, lead capture) use the same ink-ladder + accent + surface tokens as the iter-3 sections. No new color slots.

### Type

Three roles are locked at DS-3 and unchanged in DS-4:

| Role | Face | File(s) | Weight range | Use |
| --- | --- | --- | --- | --- |
| Display | Fraunces Latin standard variable normal | `public/fonts/fraunces-latin-standard-normal.woff2` | Use 620-840 only | Hero, display, h1, h2, h3, manifesto pull quote |
| Body/UI | Inter variable normal | `public/fonts/inter-var.woff2` (subset to ~56KB in BUILD pipeline) | Use 500-760 | Body, nav, buttons, captions, UI labels that need speed |
| Mono | Space Mono Latin normal | `public/fonts/space-mono-latin-400-normal.woff2`, `public/fonts/space-mono-latin-700-normal.woff2` | 400 and 700 | Crew names, terminal labels, eyebrows, sequence markers, commit/proof chips |

Font-loading rules (unchanged from DS-3):
- All `@font-face` URLs use relative `url("../fonts/...")` from `src/styles/global.css`; never absolute `/fonts/...`, because Pages runs under `/azmn/`.
- Use normal style only. No italics in DS-4.
- Fraunces is Latin-only, normal-only, axis-capped to the standard variable file.
- Space Mono is Latin-only, 400/700 normal.
- Inter is subset for production (BUILD owns the subset; DS references the logical token).
- Font display is `swap` for all faces.

Type scale (sizes and weights unchanged from DS-3; **DS-4 adjusts tracking and one line-height** — see "DS-4 type rhythm tightening" below):

| Token | Size | Line height | Weight | Tracking (DS-4) | Family | Use |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| `eyebrow` | 12px | 16px | 700 | `+0.06em` | Space Mono | Section labels, crew/terminal tags, sequence markers |
| `caption` | 12px | 18px | 500 | `0` | Inter | Metadata, helper text |
| `body-sm` | 14px | 22px | 500 | `0` | Inter | Dense card text, nav |
| `body` | 16px | 26px | 500 | `0` | Inter | Default paragraph text |
| `body-lg` | 18px | **28px** (was 30px) | 500 | `0` | Inter | Hero support copy, section intros |
| `lead` | 20px | 30px | 500 | `0` | **Fraunces** | Editorial sub-leads, value-prop subhead, use-case briefs |
| `h4` | 20px | 28px | 700 | `0` | Inter or Fraunces by context | Card titles; Inter in dense UI, Fraunces in editorial callouts |
| `h3` | 26px | 34px | 760 | `0` | Fraunces | Subsection headings, feature sequence titles, FAQ questions |
| `h2` | 44px | 50px | 790 | `-0.01em` | Fraunces | Section headings |
| `h1` | 64px | 68px | 820 | `-0.015em` | Fraunces | Desktop hero |
| `display` | 88px | 90px | 840 | `-0.02em` | Fraunces | Wide hero emphasis only |
| `display-fluid` | clamp(2.75rem, 6vw + 1.5rem, 5.5rem) | 1.05 | 840 | `-0.02em` | Fraunces | Hero mobile→desktop bridge |
| `h1-fluid` | clamp(2.25rem, 4vw + 1.25rem, 4rem) | 1.06 | 820 | `-0.015em` | Fraunces | Hero secondary / sub-display |

Responsive type rules (unchanged from DS-3 except clamp tokens):
- Mobile hero uses `display-fluid` or `h1-fluid` clamp; never drops below 36px on h1, 44px on display.
- Desktop hero uses `h1` or `display`.
- Support copy stays Inter at `body-lg` max; the new `lead` token (Fraunces 20px) is for editorial sub-leads where Inter feels too utilitarian.
- Display serif AA approval comes from the foreground color, not the face.

#### DS-4 type rhythm tightening

The brief calls for tightening, not restructuring. The deltas are:

- **Fraunces letter-spacing** — `h2 -0.01em`, `h1 -0.015em`, `display -0.02em`. Optical tightening only; legibility at WCAG sizes is preserved (verify on first BUILD-4 screenshot pass).
- **Mono eyebrow letter-spacing** — `+0.06em`. Space Mono at 12px uppercase reads crisper with a small positive track; aligns with editorial mono usage.
- **`body-lg` line-height** — `30px → 28px` (ratio 1.555). Hero support copy and section intros gain authority without becoming cramped. AA contrast unchanged (drives by color, not metric).
- **New `lead` size** — 20px / 30px / Fraunces 500. Slots between `body-lg` and `h4` for editorial sub-leads (value-prop subhead, use-case briefs) where Inter feels too utilitarian. Used sparingly — at most one `lead` block per section.
- **Fluid clamps** — `display-fluid` and `h1-fluid` formalize the mobile↔desktop bridge so the hero never hops awkwardly at a single breakpoint.

What this is NOT:
- No weight changes (Fraunces still 620–840, Inter still 500–760, Space Mono still 400/700).
- No size changes on the existing scale (only line-height on `body-lg` and the two new tokens).
- No italics. No new families.
- No type recoloring (color tokens unchanged).

### Spacing

DS-3 spacing remains the base. DS-4 adds one rhythm token:

| Token | Value | Use |
| --- | ---: | --- |
| `gutter` | 20px | Mobile page gutter |
| `gutter-md` | 32px | Tablet gutter |
| `gutter-lg` | 48px | Desktop gutter |
| `container` | 1220px | Page max width |
| `section-tight` | 56px | Compact internal bands |
| `section` | 80px | Mobile section padding |
| `section-lg` | 128px | Desktop section padding |
| `section-xl` | 160px | Major narrative breaks |
| `section-rhythm` | **96px (NEW DS-4)** | Default inter-section gap when two adjacent sections share a surface; tightens the marketing rhythm without re-spacing the existing iter-3 sections |
| `manifesto` | 96px | Editorial manifesto band vertical padding |
| `hero-gap` | 144px | Desktop hero/visual gap when layout permits |
| `rail` | 88px | Feature sequence rail spacing |

Rules:
- Major narrative breaks (e.g. between How-It-Works and Use-Cases) keep `section-lg` or `section-xl`.
- Marketing-cluster sections (use-cases → trust strip → pricing teaser → FAQ → lead capture) use `section-rhythm` between sibling marketing bands to read as a coordinated cluster, then `section-lg` to re-enter editorial.

### Motion

Motion character: expressive but governed. DS-3 motion tokens are locked.

| Token | Value | Use |
| --- | --- | --- |
| `motion-control` | 160ms | Buttons, nav, focus affordances |
| `motion-panel` | 220ms | Cards, chips, hero-stage panels |
| `motion-reveal` | 420ms | Standard section reveals; opacity + max 12px translate |
| `motion-signature` | 900ms | Hero masked/split reveal and orchestration scroll moment |
| `ease-expressive` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default UI and reveal easing |
| `ease-signature` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero reveal and signature entry |
| `ease-gate` | `cubic-bezier(0.65, 0, 0.35, 1)` | Gate lock/unlock, route draw, review checkpoint |
| `stagger-step` | 70ms | GSAP/SplitText child stagger; max 4 visible steps before it feels slow |

Implementation contract for Leila (unchanged + DS-4 reinforcements):
- GSAP/ScrollTrigger/SplitText consume the same values. Avoid ad hoc easings.
- Signature moment #1 is the orchestration sequence: brief → crew assembles → you gate → ship.
- Marketing-section reveals reuse `motion-reveal` + `ease-expressive`. Do NOT introduce a fourth motion character.
- The new "use-case tile crew-reveal" signature interaction uses `motion-panel` + `ease-expressive` on hover, with a static reveal on `:focus-visible` for keyboard and a static always-revealed state on touch (no hover).
- `prefers-reduced-motion: reduce` MUST render the complete page statically including all marketing sections: lead-capture is fully usable, FAQ disclosures default to closed but expand without animation, use-case crew-reveal is always-visible.

### Section Shapes

| Token/Class | Use |
| --- | --- |
| `hero-mesh` / `bg-hero-mesh` | Full-bleed dark generative hero background with plum, magenta, and ink depth |
| `section-arc-dark` / `bg-soft-arc-dark` | Asymmetric dark transition into hero or orchestration zones |
| `section-arc-light` / `bg-soft-arc-light` | Asymmetric light return from dark to page surface |
| `manifesto-band` | Editorial pull-quote band with generous negative space |
| `panel` | DS-2 card/panel shell retained for bento and proof modules |
| `panel-tier` | **DS-4 NEW.** Pricing-teaser variant of `panel`; accent-soft top band + Fraunces tier name |
| `trust-strip` | **DS-4 NEW.** Single-row honest-claim strip on `surface-muted`; mono labels + divider dots |
| `tile-usecase` | **DS-4 NEW.** brief → crew → shipped row pattern; hover reveals crew |
| `faq-disclosure` | **DS-4 NEW.** Editorial Q/A row on `surface-raised`; Fraunces question + Inter answer + chevron |
| `form-lead` | **DS-4 NEW.** Single-email + submit composition |

Rules:
- Arcs should feel like section composition, not decorative blobs.
- Bento remains; rhythm can stagger card heights and offsets.
- Manifesto band uses Fraunces and off-center composition.
- Marketing sections must respect the dark↔light arc transition rhythm; do not flatten transitions into rectangles.

## Components

### Sticky Nav

- Height: 72px desktop, 64px mobile.
- Surface: `surface-raised/90` with blur and a `border` bottom rule.
- Links use Inter `body-sm`, `ink-muted`, hover to `ink`.
- Keep one visible primary CTA using cranberry; **DS-4 adds an inline secondary CTA in nav on desktop** (ghost variant) per brief.

### Buttons

DS-4 expands the button family from two variants to three, and explicitly states all interaction states.

Primary (`.button-primary`):
- Background `accent`, text `accent-on`, border `accent`.
- Rest: solid cranberry fill.
- Hover: `-translate-y-px` lift, `shadow-card`; no hue shift.
- Focus-visible: 2px `accent` outline, 2px offset.
- Active: `translate-y-0`, shadow flattens; subtle press.
- Disabled: 50% opacity, `cursor: not-allowed`, no hover lift.
- Cursor-glow signature hook (`data-cta-glow`): primary CTA on the hero only — see "Signature Detail" below.

Secondary filled (`.button-secondary`):
- Background `surface-raised`, text `ink`, border `border`.
- Hover: `surface-muted` and `border-strong`.
- Focus, active, disabled as primary (with `accent` focus ring).

**Ghost / outline (`.button-ghost`, DS-4 NEW)**:
- Background `transparent`, text `ink-muted`, border `border`.
- Hover: text `ink`, border `border-strong`.
- Focus-visible: 2px `accent` outline, 2px offset.
- Active: text `ink`, very subtle 4% black tint.
- Disabled: 50% opacity, `cursor: not-allowed`.
- Use: secondary CTA next to a primary CTA (hero, nav, mid-page, footer), where a filled secondary would compete visually.

Tone rule (from brief): all CTAs are specific and action-led. No "Learn more". Same primary copy at hero, mid, footer.

Motion: control transitions use `motion-control` + `ease-expressive`.

### Hero Stage

Unchanged spec from DS-3 with two DS-4 additions:

Required treatment:
- Full-bleed dark `hero-mesh` surface (radial-gradient mesh, b534944 perf foundation carries).
- Layered crew-room artifact with depth.
- Split-text or masked hero reveal using `motion-signature` and `ease-signature`.
- ONE focal primary CTA (`.button-primary` with `data-cta-glow`).
- **DS-4: secondary CTA in ghost variant placed alongside the primary** (per brief.positioning.primary_conversion.secondary_cta_text).
- **DS-4: subtle `.noise-overlay` texture across the mesh** (perf-cheap data-URL SVG, 4–6% opacity max).
- Active path/gate uses cranberry sparingly.

Accessibility:
- Text over dark zones uses `accent-on` or footer-muted.
- If text crosses `mesh-magenta`, use large text/icons only or move the text onto a plum/ink panel.
- Noise overlay must NOT compromise AA contrast (test at first BUILD-4 screenshot pass; reduce opacity if it visually flattens contrast).

### Orchestration Signature Moment

See "Signature Section Spec" below for the DS-4 portfolio-grade pass.

Carry-forward from DS-3:
- Visualizes brief → crew → gate → ship.
- Uses Space Mono for sequence labels and Fraunces for the narrative heading.
- Route draw/gate lock uses `ease-gate`; panels use `motion-panel`.
- Reduced-motion fallback shows the complete sequence as a static proof ledger.

DS-4 adds:
- A small repeating `gate-glyph` SVG mark punctuates each step.
- The ledger rail (right side) progressively assembles artifact stubs.
- See spec for full composition.

### Manifesto Band

- One editorial band, not a card.
- Fraunces pull quote, Inter support copy, Space Mono proof tag.
- Off-center composition with negative space.

### Cards And Panels

- Background `surface-raised`.
- Border `1px solid border`.
- Radius `8px` (`rounded-card`).
- Padding 24px mobile, 32px desktop.
- Hover lift only for interactive cards.

## Marketing-Section Components (DS-4 NEW)

These compose existing tokens (color, type, spacing, motion). No new color slots, no new motion character.

### Trust Strip (`.trust-strip`)

Honest-claim row per brief.marketing_layer.trust_strip.

- Surface: `surface-muted`.
- Vertical padding: `section-tight` (56px) desktop, `section` × 0.5 mobile.
- Composition: single horizontal row on desktop, vertical stack on ≤640px.
- Each claim: Space Mono `eyebrow` (uppercase, `+0.06em` tracking, `accent-text` color) + Inter `body-sm` description on the line below.
- Dividers: between claims, a 1px × 16px vertical `border-strong` on desktop; on mobile, claims separate by 16px vertical gap (no divider).
- Tone: claims must be from `brief.marketing_layer.trust_strip.what_we_CAN_say`. Never fabricated logos, testimonials, or metrics. If a claim cites a source, the source is inline (Space Mono micro-link).
- AA: `ink-muted` body-sm on `surface-muted` = 6.19:1 ✓; `accent-text` eyebrow on `surface-muted` = 8.11:1 ✓.

### Use-Case Tile (`.tile-usecase`)

3–4 brief → crew → shipped tiles per brief.marketing_layer.use_cases.

- Layout: three-column grid on ≥1024px, two on ≥640px, single column below.
- Each tile is a `.panel` (surface-raised, border, radius-card, shadow-card) with internal regions:
  1. **Brief** — Space Mono eyebrow "BRIEF →" + Fraunces `lead` (one-sentence brief in human voice).
  2. **Crew** — Space Mono crew chips (one per agent), small accent dot before each. Use a single horizontal row with wrap.
  3. **Shipped** — Inter `body-sm` outcome line, accent dot prefix, optional artifact image cap.
- Hover state — **the DS-4 signature interaction.** On `:hover` and `:focus-within`, the crew chip row reveals a one-line "BUILT BY" sub-caption naming the harness (e.g. "BUILT BY codex+claude+deepseek under PM"), animated as `motion-panel` + `ease-expressive`. Reduced-motion: sub-caption is always visible (no transition).
- Touch: same as `:focus-within` — always-revealed below 768px (no hover state on touch).
- Honesty: THIS SITE leads as meta-proof. Other tiles must be clearly framed as illustrative if not yet shipped (per brief).

### Pricing Teaser (`.panel-tier`)

Confident teaser per brief.marketing_layer.pricing_teaser.

- Layout: a single editorial card (not a comparison grid). Three tier names in a row inside one panel, OR three side-by-side `.panel-tier` panels on desktop — Leila picks based on copy length; default to side-by-side three-up.
- Each `.panel-tier`:
  - Base: `.panel` (surface-raised, border, radius-card).
  - Top band (4px tall) in `accent-soft`.
  - Space Mono eyebrow tier name (e.g. "SOLO", "TEAM", "AGENCY") in `accent-text`.
  - Fraunces `h3` headline (e.g. "For makers shipping fast").
  - Inter `body` teaser line.
  - Primary CTA (`.button-primary`) anchored at the bottom — drives to waitlist.
  - No `$` amounts unless CEO has set tiers (per brief.out_of_scope).
- If CEO unset: use "Pricing at launch — join the waitlist for early-access rates" as the teaser line on each card.

### FAQ Disclosure (`.faq-disclosure`)

Per brief.marketing_layer.faq. Editorial-grade, not a generic accordion.

- Each row:
  - Surface: `surface-raised` with `border` bottom rule (no full card outline — feels editorial, not formfield).
  - Padding: 24px vertical × 0 horizontal (text aligns to container left/right gutters).
  - Question: Fraunces `h3` (26px, weight 760), `ink` color.
  - Answer: Inter `body` (16px / 26px / 500), `ink-muted` color.
  - Chevron: 16px square SVG on the right; rotates 180° on open using `motion-control` + `ease-expressive`.
- Open state: bottom border becomes `border-strong`; answer slides in via `motion-panel`. Reduced-motion: answer toggles visibility instantly, no transition.
- Default state: all closed; opening one does NOT close others (multi-open allowed for skimmers).
- Keyboard: `<button>` (semantic, native focus ring inherits `accent`).

### Lead Capture (`.input-lead`, `.form-lead`)

Single email field + primary CTA, mid-page AND final-CTA placements.

- `.form-lead`: `display: flex` row on ≥640px; column on mobile.
- `.input-lead`:
  - Surface: `surface-raised`.
  - Border: 1px `border`.
  - Radius: `rounded-control` (pill-shape).
  - Height: 48px (min-h-12).
  - Padding: 0 20px.
  - Type: Inter `body`, `ink` color; placeholder in `ink-muted`.
  - Focus: 2px `accent` outline, 2px offset; border to `border-strong`.
  - Error state: border `accent` (cranberry doubles as error border — same accent, no new color), helper text in `accent-text` below input.
- Submit: `.button-primary` with full hero CTA copy ("Get early access") — same wording at all placements.
- Trust note: one line of Inter `caption` below the form: "No spam. We email you when you're in." (Layla owns the exact wording.)
- No popups, no chat widgets, no exit-intent overlays (per brief.out_of_scope).

## Signature Detail (DS-4 NEW)

The brief allows ONE distinctive signature interaction plus restrained texture/depth. DS-4 picks:

**Signature interaction: use-case tile crew-reveal.**
- Why: directly performs the brief's self-referential thesis ("the page IS the artifact a crew built"). Hovering a use-case tile reveals which agents/models built it.
- Where: only on `.tile-usecase`. Not page-wide.
- Cost: zero JS for the reveal (CSS `:hover` + `:focus-within`); negligible paint.
- Reduced-motion / touch: always-revealed (no transition).

**Restrained texture: hero noise overlay (`.noise-overlay`).**
- A static SVG noise data-URL at 4–6% opacity, positioned absolute over the `hero-mesh` surface, `pointer-events: none`, `mix-blend-mode: overlay`.
- Perf budget: <1KB inline data-URL, no GPU cost (raster overlay only).
- Must not compromise hero text AA contrast — verify on first BUILD-4 screenshot pass.

**Restrained depth detail: gate-glyph (`.gate-glyph`).**
- A small SVG mark (12 × 12px) representing a "gate" — a square with a checkmark notch.
- Inline SVG, single path, currentColor.
- Used as a punctuation mark inside the orchestration signature section (between each step) and inside the manifesto pull quote. NOT used as a page-wide decoration.

**Cursor-CTA glow (`.cta-glow` / `data-cta-glow`).**
- DOCUMENTED as an OPTIONAL hook for future enhancement only — DS-4 does NOT mandate it. The hero primary CTA may carry a `data-cta-glow` attribute as a JS-free hook for an optional cursor-tracking glow that BUILD-4 may implement if Mehdi's "does it sell?" read flags the primary CTA as under-emphasized.
- Reason for option-not-mandate: the "use-case tile crew-reveal" is already DS-4's ONE signature interaction. Adding cursor-glow would push to two and break the brief's "NOT a parallax festival" rule. Reserved.

## Signature Section Spec — How-It-Works (Portfolio-Grade Pass) (DS-4 NEW)

The brief defaults the ONE portfolio-grade non-hero section to the how-it-works orchestration scroll moment, with use-cases as an alternate (Sara + Leila co-decide). **DS-4 picks: how-it-works.**

Rationale:
- DS-3 already named the orchestration sequence as signature moment #1; DS-4 elevation extends that lineage.
- It carries the product meaning (brief → crew → gate → ship) — motion that performs the thesis, not decoration.
- Use-cases is now carrying the new signature INTERACTION (crew-reveal); putting the signature SECTION on use-cases too would over-concentrate weight.

**Composition (desktop ≥1024px):**

- Section surface: `surface` (page) with a `section-arc-dark` transitioning into a contained `orchestration-stage` panel for the four-step sequence, then a `section-arc-light` transitioning out.
- Two-column layout, 60/40 narrative-to-ledger split.
  - **Left column (60%):** four vertical steps. Each step:
    - Space Mono sequence label `01` `02` `03` `04` (eyebrow size, `+0.06em` tracking, `accent` color).
    - A `gate-glyph` to the right of the label (subtle, current-color).
    - Fraunces `h3` narrative heading (per Layla COPY-4).
    - Inter `body` outcome sentence below.
    - Vertical spacing between steps: `rail` (88px).
  - **Right column (40%):** a sticky ledger rail (`position: sticky; top: 96px`) that progressively assembles artifact stubs as the left column scrolls:
    - Step 01 (BRIEF): a small monospace card showing a `brief.json` snippet (Space Mono, 2–3 lines).
    - Step 02 (CREW): crew-room avatars dropping in (5 chips: PM, Design, Frontend, Brand, Review). Each chip = Space Mono name + accent dot.
    - Step 03 (GATE): a gate pill with the gate-glyph; "GATE LOCKED" → "GATE OPENED" transition using `ease-gate`.
    - Step 04 (SHIP): an artifact thumbnail (final site mark) appearing with a check-mark; "SHIPPED" stamp in Space Mono.

**Motion contract:**

- Section entry: `motion-signature` + `ease-signature` for the first reveal of the orchestration title + step 01.
- Each subsequent step locks in as it enters the viewport using ScrollTrigger; gate-glyph uses `ease-gate` for its lock animation, body content uses `motion-panel` for opacity + 8px translate.
- Stagger: `stagger-step` (70ms) across the gate-glyph + label + heading + body per step.
- Ledger rail artifact stubs animate on the ScrollTrigger of their corresponding step using `motion-panel` + `ease-expressive`.
- Reduced-motion: the complete sequence renders statically as a four-step proof ledger; ALL four steps + ALL four ledger stubs are visible immediately, no transitions, no hidden state.

**Composition (mobile ≤768px):**

- Single column, ledger rail collapses into in-step artifact stubs (step 01's brief snippet sits BELOW step 01's outcome line, etc.).
- Steps stack with `section-tight` (56px) between them.
- gate-glyph stays inline with each step's mono label.

**AA:**

- All step text on the `surface-arc-dark` → `orchestration-stage` (dark) transition uses `accent-on` (white) or `footer-muted` (#d8d2c7).
- Gate-glyph stroke/fill is `accent` on dark (3.27:1 non-text passes) or `ink` on light.
- Step number labels in `accent` on dark mesh: 3.27:1 non-text passes; use large-mono-text minimum 14px if labels are sized smaller than eyebrow.

## Tailwind Mapping

The companion `tailwind.config.mjs` exposes the DS-3 token set plus DS-4 additions:

- `colors.ink`, `colors.surface`, `colors.border`, `colors.accent`, `colors.mesh`, `colors.success`, `colors.warning` (unchanged).
- `fontFamily.display`, `fontFamily.sans`, `fontFamily.mono` (unchanged).
- `fontSize` entries:
  - DS-3 sizes (`eyebrow`, `caption`, `body-sm`, `body`, `body-lg`, `h4`, `h3`, `h2`, `h1`, `display`) with DS-4 tracking + tightened `body-lg` line-height.
  - DS-4 NEW: `lead`, `display-fluid`, `h1-fluid`.
- `letterSpacing` entries (DS-4 NEW): `display: -0.02em`, `headline: -0.015em`, `headline-tight: -0.01em`, `mono-wide: 0.06em`.
- `spacing` (unchanged + `section-rhythm`).
- `borderRadius.card`, `borderRadius.control`, `borderRadius.arc` (unchanged).
- `boxShadow.nav`, `boxShadow.card`, `boxShadow.lift`, `boxShadow.mesh` (unchanged).
- `transitionDuration.control`, `panel`, `reveal`, `signature` (unchanged).
- `transitionTimingFunction.expressive`, `signature`, `gate` (unchanged).
- `transitionDelay.stagger-1` through `stagger-4` (unchanged).
- `backgroundImage.hero-mesh`, `soft-arc-light`, `soft-arc-dark` (unchanged).

Implementation should use named tokens rather than raw hex values except inside the generative hero shader/SVG/canvas where the mesh stop values are the token itself.

## Build alignment for Leila (BUILD-4)

- Base branch: `wt/frontend@b534944` (keep the radial-gradient perf foundation).
- Import DS-4 tokens from `wt/designer@<DS-4 SHA>` — rebase or cherry-pick `design-system.md`, `tailwind.config.mjs`, `src/styles/global.css`.
- Inter must remain subset (~56KB) — DS-4 does not regress the perf foundation.
- Marketing sections use existing tokens only. If a component genuinely needs a new token, raise it as a BLOCKER + DM Sara before inventing one.
- Reduced-motion DoD is non-negotiable for ALL marketing sections, including FAQ disclosures and lead capture.
- Signature section co-decision: DS-4 picks how-it-works. If after first BUILD-4 pass you read use-cases as a stronger portfolio target, flag the delta in #general and Sara will amend.
