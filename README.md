# Afonso Ferrer - Portfolio

Personal portfolio and design system built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** with TypeScript 5.8
- **Vite 6** for dev server and builds
- **Styled Components 6** for theming and CSS-in-JS
- **React Router 7** for client-side routing
- **Radix UI** for accessible primitives (Select)
- **pnpm** as the package manager

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `pnpm dev`     | Start Vite dev server with HMR       |
| `pnpm build`   | Type-check with `tsc` then build     |
| `pnpm preview` | Preview the production build locally  |
| `pnpm lint`    | Run ESLint with zero warnings policy |

## Routes

| Path             | Page                                              |
|------------------|---------------------------------------------------|
| `/`              | Home page with animated Mingo logo and experience |
| `/design-system` | Full design system showcase                       |
| `/typography`    | Typography scale reference                        |
| `/logos`         | All animated Mingo logo variants                  |

In production the app is served under `/portfolio/` (GitHub Pages subdirectory).

## Project Structure

```
src/
  components/
    AnimatedMingoLogo/    # 5 animated SVG logo variants + shared styles
    Experience/           # Expandable work-history cards
  context/
    theme-context-provider.tsx   # Light/dark theme context
  pages/                  # Route-level components
  theme/
    global-style.ts       # CSS reset and base styles
    media.ts              # Responsive breakpoint helpers
  ui/
    colors.ts             # Light and dark color palettes
    typography.ts         # Styled text components (H0-H6, P, Code)
    micro-interactions.ts # Reusable animation mixins
    Badge/                # Badge component
    Toggle/               # Theme toggle component
```

## Design System

The `/design-system` route showcases the full system: colors, typography, buttons, form inputs, links, badges, toggles, animations, shadows, breakpoints, and spacing. All sections support light and dark themes and use scroll-reveal animations.

### Theme

Two color modes controlled via `ThemeContextProvider`:

- **Light:** burgundy primary (#733347), red accent (#F04E45), warm background (#F9E9E4)
- **Dark:** cyan primary (#A3F6FC), blue accent (#00C7F2), deep background (#1C1D35)

### Typography

- Display: Playfair Display (headings H0 through H6)
- Body/UI: Inter (paragraphs, buttons)
- Monospace: Noto Sans Mono (code blocks)

### Breakpoints

| Name    | Min-width |
|---------|-----------|
| Mobile  | 480px     |
| Tablet  | 768px     |
| Desktop | 1024px    |
| Wide    | 1440px    |

## Animated Mingo Logo

Five SVG variants with a shared animation system:

1. **Full** - complete logo with optional wave, leaf sway, and blink loops
2. **Simplified** - core logo without wave overlays
3. **Monochrome** - single-color variant
4. **Small** - compact variant
5. **Emblem** - square icon format

All variants use IntersectionObserver to trigger entrance animations on scroll and respect `prefers-reduced-motion`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds with pnpm and deploys to GitHub Pages. The workflow copies `index.html` to `404.html` for SPA fallback routing.
