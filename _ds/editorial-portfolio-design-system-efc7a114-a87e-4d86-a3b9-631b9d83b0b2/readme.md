# Editorial Portfolio Design System

## Context

This design system is built from a single source: a `DESIGN.md` brief describing the intended look and feel of a **freelance product designer's portfolio site** — no attached codebase, Figma file, or existing brand. There is no company; the "brand" is a one-person design/dev practice presented as an editorial, magazine-like showcase rather than a typical freelancer site. Because no logo or company identity was supplied, no logo was created — the wordmark is set in plain type wherever a mark would go (see Iconography).

Source: the pasted `DESIGN.md` brief in this project's chat history. No external repos, Figma links, or decks were provided.

**Products represented:** one — the portfolio website itself, recreated as a UI kit in `ui_kits/portfolio/` (Homepage + Case Study page).

## Content fundamentals

- **Voice:** first person, confident, understated. "Helping startups and enterprises build premium mobile apps..." — declarative, not salesy.
- **Casing:** sentence case for body copy; short uppercase labels (tracked wide) for eyebrows/categories — e.g. "SELECTED WORK — 04".
- **Length:** short. One clear sentence per idea. No filler adjectives beyond what DESIGN.md itself specifies (premium, confident, minimal, editorial).
- **Structure:** every project reads as a case study — Project → Problem → Research → Design → Development → Results — never a feature list.
- **Punctuation:** minimal exclamation, no emoji, real em dashes and curly quotes for pull-quotes.
- **CTAs:** two-to-four words, verb-first — "View Projects", "Book a Call".
- **Numbers as narrative:** results are stated plainly ("+38% activation"), never hyped.

## Visual foundations

- **Color:** near-white background (`#FAFAF8`) with pure-white surfaces, rich-black (`#111111`) for text and inverse sections. Two accent-free semantic colors (success green, error red) used only for state, never decoration. No gradients, no bright palette.
- **Type:** two families only. Inter (sans) for everything structural — labels, body, UI. Instrument Serif italic as the single display face, reserved for headlines, pull-quotes, and hero copy. Never mixed with a third family.
- **Spacing:** strict token scale (4→160px). Section rhythm is 160px between major sections, 96px between related sub-blocks — large whitespace is the primary signal of "premium."
- **Backgrounds:** flat color only — no photography-heavy hero, no illustration, no pattern/texture. Dark sections are solid rich-black, used sparingly to break rhythm (About, testimonial, footer).
- **Imagery:** real screenshots inside device frames (phone/browser chrome) or plain rounded rectangles — never stretched, never stock photography, never stock video.
- **Animation:** subtle only — opacity, transform, blur, scale. 200/300/500ms durations, standard ease-out curve. No bounce, no width/height animation.
- **Hover states:** image zoom 2%, button/card lift 2px, arrow shift 4px, underline for active nav — never a color swap to a bright accent (there isn't one).
- **Press states:** not specified in the brief beyond "tactile"; treat as a slight opacity dip (0.9) on active, consistent with the no-bounce rule.
- **Borders:** 1px hairlines (`#EAEAEA`), used to separate list rows and cards — never a colored left-border accent.
- **Shadows:** one elevation only, very soft — `0 8px 30px rgba(0,0,0,0.05)`. No stacked/heavy shadows.
- **Corner radii:** 16px inputs, 20px cards/images, 24px dialogs, full pill for buttons/tags.
- **Transparency/blur:** the nav uses a translucent blurred background once scrolled — the only place blur is used.
- **Layout:** 12-column grid, 1280px desktop content width, 1440px max, 80/48/24px gutters desktop/tablet/mobile.

## Iconography

DESIGN.md specifies Lucide or Heroicons with consistent stroke width, but no icon files or codebase were supplied to copy from — so **no icon assets are bundled**. The components use plain Unicode glyphs (↗, →, ←, +) sparingly for arrows/affordances rather than a full icon set. **Ask:** if you'd like a specific icon library (Lucide, Heroicons, or another), attach it or its CDN link and it'll be wired in properly. No emoji is used anywhere, per the brief's tone.

No logo was supplied — the wordmark ("Ansel Reyes" in the UI kit is a placeholder person name for demo purposes) is set in Instrument Serif italic, plain type, wherever a mark appears.

## Fonts

Inter, Instrument Serif, and IBM Plex Mono are loaded from Google Fonts CDN (`tokens/fonts.css`) — these are exact matches to the brief's own recommendations, not substitutions. No local font binaries are bundled since none were supplied; if you'd like them self-hosted for offline/production use, provide the font files and they'll be added under `assets/fonts/`.

## Index

- `styles.css` — root stylesheet, imports every token file. Link this one file to get all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadow.css`, `motion.css`, `layout.css`, `fonts.css`.
- `guidelines/` — 10 foundation specimen cards (Colors, Type, Spacing groups in the Design System tab).
- `components/` — 22 components across 6 groups:
  - `core/` — Button
  - `feedback/` — Badge, Tag, LoadingSkeleton
  - `forms/` — Input, Textarea
  - `layout/` — Section, Container
  - `navigation/` — Navbar, Footer
  - `projects/` — ProjectCard, CaseStudyCard
  - `content/` — Timeline, Quote, Testimonial, Accordion, Gallery, ImageViewer, DeviceFrame, StatCard, CTABanner, Modal
- `ui_kits/portfolio/` — Homepage + Case Study page, interactive click-through (`index.html`).
- `SKILL.md` — portable skill file for use in Claude Code or another Agent Skills-compatible environment.

### Intentional additions

None beyond the component library DESIGN.md itself names — every component above traces to DESIGN.md's own "Component Library" list. Section/Container were named there too and are treated as layout primitives rather than visual components.

## Caveats — please help me iterate

1. **No logo, no icon set, no font files, no real photography** were provided — everything visual beyond color/type/spacing is a plain-type or placeholder stand-in. Attach any of these and I'll wire them in for real.
2. This system is built entirely from the text brief, not a live site or Figma file — if an actual portfolio site/Figma exists, attach it and I'll reconcile this system against the real thing (exact spacing, real copy, real imagery).
3. The UI kit uses invented placeholder project names/copy for demonstration only — swap in your real case studies.
