# Azaman Design System

DECISION | id=DS-2 | owner=Sara | status=locked | date=2026-06-16

Azaman should feel like the site that built itself: a live, human-gated product artifact assembled by a high-trust AI crew. DS-2 moves the visual language away from generic cobalt SaaS into a more editorial, studio-grade system: quieter technical neutrals, one cranberry signal accent, larger display type, deeper hero staging, asymmetric section rhythm, and motion that clarifies state without becoming decoration.

## Direction

- Concept: orchestration made visible. The hero should feel like active work moving through agents, review gates, and a final ship state.
- Tone: precise, technical, premium, and warm enough to feel human-gated.
- Avoid: grey placeholder boxes, generic blue gradients, identical card rows, decorative blobs/orbs, and literal flowchart diagrams.
- Build on master. Elevate the existing copy and section sequence rather than restarting the site.

## Core Tokens

### Color

Use one accent family only. Cranberry is the action and orchestration signal; neutrals carry hierarchy, depth, and readability.

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#101214` | Primary text, dark footer background |
| `ink-muted` | `#4a5563` | Secondary text |
| `ink-soft` | `#5f6871` | Captions and metadata |
| `surface` | `#f5f3ee` | Page background |
| `surface-raised` | `#ffffff` | Cards, nav, FAQ rows |
| `surface-muted` | `#e7e9e2` | Alternating bands, sequence rails, quiet panels |
| `border` | `#d5d8cf` | Default borders |
| `border-strong` | `#b8beb2` | Dividers on dense UI and hover states |
| `accent` | `#bc2a64` | Primary actions, active path, focus rings, key highlights |
| `accent-text` | `#861347` | Small accent text on light surfaces |
| `accent-soft` | `#fce7ef` | Accent tint backgrounds |
| `accent-on` | `#ffffff` | Text/icons on accent-filled controls |
| `success` | `#177245` | Verified or shipped proof points |
| `warning` | `#8a5a12` | Non-blocking caution states |

Accessibility notes:
- `ink` on `surface-raised` is 18.77:1, on `surface` is 16.93:1, and on `surface-muted` is 15.33:1.
- `ink-muted` on `surface-raised` is 7.58:1, on `surface` is 6.83:1, and on `surface-muted` is 6.19:1.
- `ink-soft` on `surface-raised` is 5.67:1, on `surface` is 5.11:1, and on `surface-muted` is 4.63:1.
- `accent` on `accent-on` is 5.75:1.
- `accent-text` on `surface` is 8.62:1.
- `accent` on `surface` is 5.18:1, so it is safe for small text, links, and focus states.
- `accent` on `surface-raised` is 5.75:1.
- `accent` on `surface-muted` is 4.69:1.
- `accent` on `ink` is 3.27:1, so the same 2px focus ring clears the dark footer background for UI indication.
- Body text should use `ink` or `ink-muted` on `surface` or `surface-raised`.
- Do not introduce a second brand accent for section variety. Use scale, spacing, surface contrast, and composition instead.

### Type

Font stack: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

| Token | Size | Line height | Weight | Use |
| --- | ---: | ---: | ---: | --- |
| `eyebrow` | 12px | 16px | 700 | Section labels, uppercase sparingly |
| `caption` | 12px | 18px | 500 | Metadata, helper text |
| `body-sm` | 14px | 22px | 500 | Dense card text, nav |
| `body` | 16px | 26px | 500 | Default paragraph text |
| `body-lg` | 18px | 30px | 500 | Hero support copy, section intros |
| `h4` | 20px | 28px | 700 | Card titles |
| `h3` | 26px | 34px | 760 | Subsection headings, feature sequence titles |
| `h2` | 44px | 50px | 790 | Section headings |
| `h1` | 64px | 68px | 820 | Desktop hero |
| `display` | 88px | 90px | 840 | Wide hero emphasis only |

Responsive type rules:
- Mobile hero starts at `h2` scale or a clamped implementation that bottoms at 44px.
- Desktop hero uses `h1`; wide desktop may use `display` if the line length stays controlled.
- Letter spacing stays `0`; use weight, line breaks, and layout for drama.
- Keep support copy at `body-lg` max. Do not make dense panel text oversized.

### Spacing

Base grid is 4px. DS-2 increases breathing room and gives the page a more deliberate rhythm.

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
| `hero-gap` | 144px | Desktop hero/visual gap when layout permits |
| `rail` | 88px | Feature sequence rail spacing |

Layout rules:
- Make the first viewport unmistakably Azaman: headline, proof artifact, and one primary CTA.
- Keep a hint of the next section visible on common desktop and mobile viewports.
- Use fewer but larger section ideas. Avoid repeating a three-card grid back to back.
- Cards stay at `8px` radius. Hero/product stages may use `8px` or nested squared panels; avoid pill-shaped cards.

## Components

### Sticky Nav

- Height: 72px desktop, 64px mobile.
- Surface: `surface-raised/90` with blur and a `border` bottom rule.
- Brand mark may use `accent` fill with `accent-on`, but the nav should remain quiet.
- Links use `body-sm`, `ink-muted`, hover to `ink`.
- Keep one visible CTA. Do not add multiple competing nav actions.

### Buttons

Primary:
- Background `accent`, text `accent-on`, border `accent`.
- Hover with slight lift and shadow, not a new hue.
- Focus: 2px `accent` outline, 2px offset.

Secondary:
- Background `surface-raised`, text `ink`, border `border`.
- Hover: `surface-muted` and `border-strong`.

Sizes:
- Small: 36px height, 14px text, 14px horizontal padding.
- Default: 44px height, 16px text, 20px horizontal padding.
- Large: 52px height, 16px text, 24px horizontal padding.

### Hero Stage

The hero visual is the main DS-2 upgrade. It should be a composed product artifact, not a placeholder.

Recommended treatment:
- Layered orchestration workbench with a dark or raised base, agent lanes, active task cards, human gate checkpoint, and ship status.
- Use `accent` as the active path only: one run line, one active gate, one primary status chip.
- Add depth through overlapping panels, fine grid lines, shadows, and scale, not blur blobs.
- Mobile version should compress to a strong artifact preview, not disappear into three tiny pills.

Constraints:
- Must remain legible at 375px.
- Must avoid decorative orbs/blobs and generic gradients.
- Must show behavior: brief -> crew work -> human gate -> ship.

### Feature Sequence

At least one feature section should become a sequence rather than another equal-card grid.

Recommended pattern:
- One large narrative panel on the left or top.
- A vertical or diagonal run rail with 3 to 4 steps.
- Smaller proof cards offset around it.
- Use `accent-soft` for active states and `surface-muted` for inactive states.

### Cards And Panels

- Background `surface-raised`.
- Border `1px solid border`.
- Radius `8px`.
- Padding `24px` mobile, `32px` desktop.
- Hover lift only for interactive cards.
- Avoid more than one consecutive section of identical cards.

### Trust And Pricing

- Trust can become a proof ledger: merged commit, reviewer gate, design-system lock, copy deck, visual sign-off.
- Pricing should be a focused conversion panel with one featured path, not a dense table.
- Use `success` only for verified/shipped signals.

### FAQ And Footer

- Keep native `details`/`summary` for FAQ.
- Summary focus state must be visible.
- Footer background remains `ink`; muted text uses `#d8d2c7`.
- Footer links should point only to real anchors until real pages exist.

## Section Rhythm

1. Sticky nav.
2. Hero: oversized editorial headline plus a layered orchestration stage. One focal CTA.
3. How it works: compact sequence, not three detached cards if space allows.
4. Features: break the grid. Use one feature as a run sequence with asymmetric support cards.
5. Recipes/use cases: denser comparison or split layout.
6. Trust: proof ledger / shipped-by-this-crew strip.
7. Pricing: single conversion band or one featured tier with restrained secondary tiers.
8. FAQ: compact disclosures.
9. Footer: dark close with CTA and live provenance.

## Motion

- Controls: 160ms.
- Cards/stage panels: 220ms.
- Section reveals: 420ms max, opacity plus 12px translate only.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Motion should clarify hierarchy, active state, or scroll entry.
- Respect `prefers-reduced-motion`; no always-on background animation.

## Tailwind Mapping

The companion `tailwind.config.mjs` exports DS-2 tokens under:
- `colors.ink`, `colors.surface`, `colors.border`, `colors.accent`, `colors.success`, `colors.warning`.
- `fontFamily.sans`.
- `fontSize` entries matching the type table.
- `spacing.section`, `spacing.section-tight`, `spacing.section-lg`, `spacing.section-xl`, `spacing.rail`, `spacing.gutter`, `spacing.container`.
- `borderRadius.card` and `borderRadius.control`.
- `boxShadow.nav`, `boxShadow.card`, `boxShadow.lift`.

Implementation should use named tokens rather than raw hex values except for rare media-specific details.
