# Azaman Design System

DECISION | id=DS-3 | owner=Sara | status=locked | date=2026-06-16 | brief=wt/pm@1575198

DS-3 extends DS-2 for Iteration 3. The brief is "controlled magic": autonomous expert crews produce the site, but the human gate stays visible, auditable, and in control. The system keeps the DS-2 neutral base and cranberry accent, then adds the anti-generic layer Karim locked: display serif headlines, mono crew labels, governed expressive motion, tonal hero mesh depth, and asymmetric editorial section shapes.

## Direction

- Thesis: describe the outcome, then show the crew assembling, building, reviewing, and shipping it. This site is the proof.
- Archetype: The Magician tempered by The Architect. It should feel art-directed and technical, never mystical for its own sake.
- Anti-generic moves: Fraunces display type, Inter body, Space Mono labels, one cranberry accent, crafted generative hero, orchestration scroll moment, manifesto band, and asymmetry.
- Build rule: extend master@733b825 and DS-2. Do not restart the page or add a second accent.

## Core Tokens

### Color

Use one accent family only. Cranberry is the action and orchestration signal; mesh colors are tonal depth for the hero and dark transition surfaces.

| Token | Hex | Use | AA-approved surface(s) |
| --- | --- | --- | --- |
| `ink` | `#101214` | Primary text, dark footer background | Text on `surface-raised` 18.77:1, `surface` 16.93:1, `surface-muted` 15.33:1 |
| `ink-muted` | `#4a5563` | Secondary text | Text on `surface-raised` 7.58:1, `surface` 6.83:1, `surface-muted` 6.19:1 |
| `ink-soft` | `#5f6871` | Captions and metadata | Text on `surface-raised` 5.67:1, `surface` 5.11:1, `surface-muted` 4.63:1 |
| `surface` | `#f5f3ee` | Page background | Approved behind `ink`, `ink-muted`, `ink-soft`, `accent`, `accent-text` |
| `surface-raised` | `#ffffff` | Cards, nav, FAQ rows | Approved behind `ink`, `ink-muted`, `ink-soft`, `accent`, `accent-text` |
| `surface-muted` | `#e7e9e2` | Alternating bands, sequence rails, quiet panels | Approved behind `ink`, `ink-muted`, `ink-soft`, `accent` |
| `border` | `#d5d8cf` | Default borders | Non-text divider on light surfaces |
| `border-strong` | `#b8beb2` | Dense UI dividers and hover borders | Non-text divider on light surfaces |
| `accent` | `#bc2a64` | Primary actions, active path, focus rings, gate pills, sequence markers, Pro tier | Text/icon on `accent-on` 5.75:1; text on `surface` 5.18:1, `surface-raised` 5.75:1, `surface-muted` 4.69:1; non-text focus on `ink` 3.27:1 and `mesh-ink` 3.03:1 |
| `accent-text` | `#861347` | Small accent text on light surfaces | Text on `surface` 8.62:1, `surface-raised` 9.56:1, `accent-soft` 8.11:1 |
| `accent-soft` | `#fce7ef` | Accent tint backgrounds | Approved behind `ink`, `ink-muted`, `accent-text` |
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

### Type

Three roles are locked:

| Role | Face | File(s) | Weight range | Use |
| --- | --- | --- | --- | --- |
| Display | Fraunces Latin standard variable normal | `public/fonts/fraunces-latin-standard-normal.woff2` | Use 620-840 only | Hero, display, h1, h2, h3, manifesto pull quote |
| Body/UI | Inter variable normal | `public/fonts/inter-var.woff2` | Use 500-760 | Body, nav, buttons, captions, UI labels that need speed |
| Mono | Space Mono Latin normal | `public/fonts/space-mono-latin-400-normal.woff2`, `public/fonts/space-mono-latin-700-normal.woff2` | 400 and 700 | Crew names, terminal labels, eyebrows, sequence markers, commit/proof chips |

Font-loading rules:
- All `@font-face` URLs use relative `url("../fonts/...")` from `src/styles/global.css`; never absolute `/fonts/...`, because Pages runs under `/azmn/`.
- Use normal style only. No italics in DS-3.
- Fraunces is Latin-only, normal-only, and axis-capped to the standard variable file. It preserves the display personality while dropping the heavier full-axis file.
- Space Mono is Latin-only, 400/700 normal. It supplies character without adding JetBrains-sized breadth.
- Font display is `swap` for all faces.

Type scale:

| Token | Size | Line height | Weight | Family | Use |
| --- | ---: | ---: | ---: | --- | --- |
| `eyebrow` | 12px | 16px | 700 | Space Mono | Section labels, crew/terminal tags, sequence markers |
| `caption` | 12px | 18px | 500 | Inter | Metadata, helper text |
| `body-sm` | 14px | 22px | 500 | Inter | Dense card text, nav |
| `body` | 16px | 26px | 500 | Inter | Default paragraph text |
| `body-lg` | 18px | 30px | 500 | Inter | Hero support copy, section intros |
| `h4` | 20px | 28px | 700 | Inter or Fraunces by context | Card titles; use Inter in dense UI, Fraunces in editorial callouts |
| `h3` | 26px | 34px | 760 | Fraunces | Subsection headings, feature sequence titles |
| `h2` | 44px | 50px | 790 | Fraunces | Section headings |
| `h1` | 64px | 68px | 820 | Fraunces | Desktop hero |
| `display` | 88px | 90px | 840 | Fraunces | Wide hero emphasis only |

Responsive type rules:
- Mobile hero starts at `h2` scale or a clamped implementation that bottoms at 44px.
- Desktop hero uses `h1`; wide desktop may use `display` if line length stays controlled.
- Letter spacing stays `0`.
- Support copy stays Inter at `body-lg` max.
- Display serif AA approval comes from the foreground color, not the face: use `ink` on light surfaces or `accent-on` on dark mesh surfaces.

### Spacing

DS-2 spacing remains the base.

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
| `manifesto` | 96px | Editorial manifesto band vertical padding |
| `hero-gap` | 144px | Desktop hero/visual gap when layout permits |
| `rail` | 88px | Feature sequence rail spacing |

### Motion

Motion character: expressive but governed. Expressive means richer easing, deliberate stagger, and one or two signature moments. It does not mean everything moves.

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

Implementation contract for Leila:
- GSAP/ScrollTrigger/SplitText consume the same values. Avoid ad hoc easings.
- Signature moment #1 is the orchestration sequence: brief -> crew assembles -> you gate -> ship.
- Standard reveals should vary by intent and layout, not become a uniform fade applied everywhere.
- `prefers-reduced-motion: reduce` must render the complete page statically: no hidden reveal state, no motion-only content, no layout shift.

### Section Shapes

| Token/Class | Use |
| --- | --- |
| `hero-mesh` / `bg-hero-mesh` | Full-bleed dark generative hero background with plum, magenta, and ink depth |
| `section-arc-dark` / `bg-soft-arc-dark` | Asymmetric dark transition into hero or orchestration zones |
| `section-arc-light` / `bg-soft-arc-light` | Asymmetric light return from dark to page surface |
| `manifesto-band` | Editorial pull-quote band with generous negative space |
| `panel` | DS-2 card/panel shell retained for bento and proof modules |

Rules:
- Arcs should feel like section composition, not decorative blobs. Use them as band transitions.
- Bento remains, but rhythm can stagger card heights and offsets.
- Manifesto band should use Fraunces and off-center composition.

## Components

### Sticky Nav

- Height: 72px desktop, 64px mobile.
- Surface: `surface-raised/90` with blur and a `border` bottom rule.
- Links use Inter `body-sm`, `ink-muted`, hover to `ink`.
- Keep one visible CTA using cranberry.

### Buttons

Primary:
- Background `accent`, text `accent-on`, border `accent`.
- Hover with slight lift and shadow; no hue shift.
- Focus: 2px `accent` outline, 2px offset.

Secondary:
- Background `surface-raised`, text `ink`, border `border`.
- Hover: `surface-muted` and `border-strong`.

Motion:
- Control transitions use `motion-control` + `ease-expressive`.

### Hero Stage

Iteration 3 requires a crafted generative hero, not the DS-2 product-stage placeholder.

Required treatment:
- Full-bleed dark `hero-mesh` surface.
- Layered crew-room artifact with depth, not a flat screenshot.
- Split-text or masked hero reveal using `motion-signature` and `ease-signature`.
- One focal CTA.
- Active path/gate uses cranberry sparingly.

Accessibility:
- Text over dark zones uses `accent-on` or footer-muted.
- If text crosses `mesh-magenta`, use large text/icons only or move the text onto a plum/ink panel.

### Orchestration Signature Moment

- Visualizes brief -> crew -> gate -> ship.
- Uses Space Mono for sequence labels and Fraunces for the narrative heading.
- Route draw/gate lock uses `ease-gate`; panels use `motion-panel`.
- Reduced-motion fallback shows the complete sequence as a static proof ledger.

### Manifesto Band

- One editorial band, not a card.
- Fraunces pull quote, Inter support copy, Space Mono proof tag.
- Off-center composition with negative space.

### Cards And Panels

- Background `surface-raised`.
- Border `1px solid border`.
- Radius `8px`.
- Padding 24px mobile, 32px desktop.
- Hover lift only for interactive cards.

## Tailwind Mapping

The companion `tailwind.config.mjs` exposes:

- `colors.ink`, `colors.surface`, `colors.border`, `colors.accent`, `colors.mesh`, `colors.success`, `colors.warning`.
- `fontFamily.display`, `fontFamily.sans`, `fontFamily.mono`.
- `fontSize` entries matching the type scale.
- `spacing.section`, `spacing.section-tight`, `spacing.section-lg`, `spacing.section-xl`, `spacing.manifesto`, `spacing.rail`, `spacing.gutter`, `spacing.container`.
- `borderRadius.card`, `borderRadius.control`, `borderRadius.arc`.
- `boxShadow.nav`, `boxShadow.card`, `boxShadow.lift`, `boxShadow.mesh`.
- `transitionDuration.control`, `panel`, `reveal`, `signature`.
- `transitionTimingFunction.expressive`, `signature`, `gate`.
- `transitionDelay.stagger-1` through `stagger-4`.
- `backgroundImage.hero-mesh`, `soft-arc-light`, `soft-arc-dark`.

Implementation should use named tokens rather than raw hex values except inside the generative hero shader/SVG/canvas where the mesh stop values are the token itself.
