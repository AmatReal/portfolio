# AGENTS.md — squalid-saturn

## Project overview

Personal portfolio website for **Mateo Zamora — Rigging Artist & Animator**.

The site showcases character/creature rigging and animation work for games,
film, and marketing. It is a static two-page site (home + projects archive)
built with **Astro**, ported 1:1 from the exported design prototypes.

## Tech stack

- **Framework:** Astro `^7.3.1` (static, no JS framework integration)
- **Runtime:** Node `>=22.12.0`
- **Styling:** Scoped CSS / global CSS (no Tailwind, no preprocessor configured)
- **Fonts:** Google Fonts — `Inter` (400–800) + `Instrument Serif` (400 / italic)
- **Icons:** Unicons v4.2.0 (iconscout CDN)
- **Package manager:** npm

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and
`astro dev logs`.

Common commands:

| Command                   | Action                                     |
| :------------------------ | :----------------------------------------- |
| `npm install`             | Install dependencies                       |
| `npm run dev`             | Start dev server at `localhost:4321`       |
| `npm run build`           | Build production site to `./dist/`         |
| `npm run preview`         | Preview the production build               |

## Source of truth (design handoff)

The exported design lives in `Web-PrototypeMat/`. Treat it as a **visual
contract** — match the exported pixels and behavior first, then refactor
internals. Do not do a loose reinterpretation.

- Primary entry: `Web-PrototypeMat/portfolio-mateo-zamora.html` (home)
- Secondary screen: `Web-PrototypeMat/projects.html` (projects archive)
- Machine-readable map: `Web-PrototypeMat/DESIGN-MANIFEST.json`
- Implementation notes: `Web-PrototypeMat/DESIGN-HANDOFF.md`

### Screen → route mapping

| Design file                  | Astro route                 | Notes                                  |
| :--------------------------- | :-------------------------- | :------------------------------------- |
| `portfolio-mateo-zamora.html` | `src/pages/index.astro`     | Home / about / featured / skills       |
| `projects.html`              | `src/pages/projects.astro`  | Project archives with category filter  |

Do not merge the two screens into one page. Each HTML screen is its own route.

## Design tokens

Extract these into reusable tokens (CSS variables) before writing components.
Freeze them so default theme colors/typography are never substituted.

### Color

| Token      | Value     | Usage                                  |
| :--------- | :-------- | :------------------------------------- |
| `--navy`   | `#0a0a23` | Navbar, hero, footer backgrounds, buttons |
| `--navy-2` | `#111133` | Dark surface variants                  |
| `--blue`   | `#1e90ff` | Accent, links, active states, badges   |
| `--blue-hover` | `#0d6efd` | Accent hover                           |
| `--blue-soft`  | `#eaf2ff` | Soft blue backgrounds                  |
| `--bg`     | `#f4f4f4` | Page background (also `#f5f5f5` on featured) |
| `--card`   | `#ffffff` | Cards, surfaces                        |
| `--text`   | `#1a1a2e` | Primary text                           |
| `--muted`  | `#6b6b7a` | Secondary text                         |
| `--muted-2`| `#9aa0b3` | Tertiary text                          |
| `--border` | `#e8e8ef` | Borders                                |

Brand constraint: do not introduce warm beige / cream / peach / pink /
orange-brown background washes. The palette is navy/blue/neutral.

### Typography

- **Display / headings:** `Instrument Serif`, weight 400 (used for `h1`,
  project titles, section titles). Tight letter-spacing (`-.03em`).
- **Body / UI:** `Inter`, weights 400–800.
- Scale reference: `h1` 42px → 32px mobile, project `h3` 30px, section titles
  38px → 30px mobile, body 13–14.5px, eyebrow 11px uppercase + `letter-spacing`.
- Eyebrows are uppercase, `letter-spacing:.14em`, `--blue`, with a 22×2px blue
  bar prefix.

### Radius, shadows, spacing, motion

- `--radius: 14px`, `--radius-lg: 18px` (cards use 16px, media 12–16px).
- Shadows: soft blue-tinted `rgba(10,10,35,…)`; hover lifts elements
  (`translateY(-4px)` to `-8px`) with stronger shadow.
- Motion: `~.2s` to `.35s ease` transitions; modal enter `dmIn .22s ease`
  (opacity + `translateY(8px) scale(.98)` → identity).
- Navbar hide-on-scroll: `.nav-hidden` `translateY(-100%)` with `.35s ease`.

## Layout & sections (home)

1. **Navbar** — sticky, navy, hide on scroll down past 120px; logo mark "MZ".
   Links: `#about`, `projects.html` (new tab), `#software`.
2. **Hero** (`#about`) — navy background; video preview left, profile info
   right; profile photo (rounded), name, title, bio, contact lines, social links.
3. **Featured projects** — alternating rows (`.project-row.reverse`);
   Dragon, Ant, Bear. Media blocks open the project modal.
4. **"View More" button** — violet `#7c3aed`, links to `projects.html`.
5. **Software / skills** (`#software`) — three skill groups: Software,
   Procedural Systems, Rigging & Logic. Cards with icon, name, level badge.
6. **Footer** — navy, contact email + phone, copyright.

## Layout & sections (projects)

1. Navbar (Home / Projects links).
2. Header with title, description, category `<select>` filter.
3. Sections grouped by category (Creature Rigs / Game Rigs / AR & Animation),
   each a 2-column card grid. Card → project modal.
4. Reuses the same project modal.

## Components & reusable modules

- **Project modal** (`<dialog>`): main media display (video/image), description
  and technologies column, thumbnail carousel with prev/next arrows, footer
  actions (Cerrar + "View breakdown" external link). Shared by every "open
  project" interaction on both pages.
- **Featured project row**: media + text, alternating order, "View in…" CTA.
- **Project card**: media (image or gradient placeholder), title, 2-line
  clamped description, tag chips.
- **Skill card**: icon tile, name, level badge (`lvl-pro` / `lvl-adv` / `lvl-int`).

## Interactions & states

Preserve these behaviors; do not flatten them into static elements:

- Navbar hide on scroll down / show on scroll up.
- Hero video overlay: hover reveals details on desktop; click toggles on
  mobile (≤768px).
- Project modal: open via `showModal()`, close on backdrop click / ✕ / Cerrar.
- Carousel: click thumbnail switches main display between video and image;
  active item gets `1px solid #1e90ff` + `0 0 0 1px #1e90ff` outline; prev/next
  arrows scroll and disable at bounds (`opacity:.35`).
- Category filter (projects): show/hide section heads + grids by `data-cat`.
- Scroll-spy: active nav link tracked via `IntersectionObserver`
  (`rootMargin:'-40% 0px -50% 0px'`).
- Hover/focus states: links, buttons, cards, social icons, media hover lift.
- All controls must stay keyboard/screen-reader accessible (real
  `<button>`/`<a>`/`<select>`/`<dialog>`, `aria-label`, `aria-haspopup`,
  `aria-controls`).

## Responsiveness

Asked breakpoints (adaptive single experience, no horizontal overflow):

`360×800`, `390×844`, `430×932`, `600×960`, `820×1180`, `1024×768`,
`1366×768`, `1440×900`, `1920×1080`.

Existing media queries to preserve:
- `@media (max-width:1024px)` — hero stacks (column), project rows stack, grids
  go 2 columns.
- `@media (max-width:768px)` — single-column project grid, mobile-specific hero
  (column-reverse), smaller type.
- `@media (max-width:480px)` — skills single column.

Use semantic layout thresholds, fluid `clamp()` type/spacing where possible,
and container queries where component width matters more than viewport width.

## Assets

Static assets live in `Web-PrototypeMat/`. Copy them into `public/` (or `src/`
and import) when porting:

- Render images: `AntRig_Render.png`, `AntRig.jpeg`, `Dragon_Rig_Render.png`,
  `Dragon_Rig_Render-1.png`, `Dragon_Rig_Render-2.png`, `image.png`
- Videos: `X9EXuuS7vrVchLr6.mp4`, `X9EXuuS7vrVchLr6-1.mp4`

Note: the modal carousel references video `X9EXuuS7vrVchLr6-1.mp4` as the
primary item.

## Content (copy must be preserved)

Real copy to preserve verbatim — do not replace with generic filler:

- Name: **Mateo Zamora**; title: **Rigging artist & Animator**
- Email: `originalamat@gmail.com`; phone: `+52 818 207 9917`
- Instagram: `https://www.instagram.com/amat.3d/?hl=en`
- LinkedIn: `https://mx.linkedin.com/in/mateo-zamora-474546261`
- Project descriptions (Dragon, Ant, Bear, Dream Sequence, Mechanical Arm,
  Wrecking Ball, Ant Model) are in the HTML files; preserve their wording.
- Placeholder "Lorem ipsum" text in the modal description is explicitly a
  placeholder — replace only with the target app's real data.

## Fidelity & implementation checklist

1. Open `portfolio-mateo-zamora.html` and `DESIGN-MANIFEST.json` first; map
   screens, modules, tokens, and interactions before coding.
2. Extract design tokens before writing components.
3. Implement each screen as its own Astro route.
4. Rebuild JS interactions (nav hide, modal, carousel, filter, scroll-spy).
5. Validate at the viewport matrix with no horizontal overflow.
6. Reject shortcuts that flatten modules into generic cards, gradients, or
   framework-default typography. If ambiguous, match the exported HTML/CSS/JS.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)