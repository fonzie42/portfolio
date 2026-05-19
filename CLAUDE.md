# Portfolio - Claude Code Guide

## Quick Reference

- **Dev server:** `pnpm dev` (Vite, port 5173)
- **Build:** `pnpm build` (tsc + vite build)
- **Lint:** `pnpm lint` (zero warnings policy)
- **Package manager:** pnpm
- **Deploy:** automatic via GitHub Actions on push to `main`, to GitHub Pages

## Architecture

React 19 + TypeScript 5.8 SPA with Vite 6. Styled Components 6 for all styling. React Router 7 for routing with a conditional base path (`/` in dev, `/portfolio/` in production).

Path aliases are configured via `tsconfig.json` (`baseUrl: "src"`) and resolved by `vite-tsconfig-paths`. Imports use bare paths from `src/`, e.g. `import { Home } from "pages/home"`.

## Project Layout

- `src/components/` - reusable components (AnimatedMingoLogo, Experience)
- `src/pages/` - route-level page components
- `src/ui/` - design primitives: colors, typography, micro-interactions, Badge, Toggle
- `src/theme/` - global styles and responsive media query helpers
- `src/context/` - ThemeContextProvider (light/dark mode)
- `src/constants.ts` - work experience data

## Conventions

- Styled Components files use `.styled.ts` suffix alongside the component
- Component folders use barrel exports via `index.ts`
- Types go in a `types.ts` file within the component folder
- Color palettes are defined in `src/ui/colors.ts` (COLORS for light, COLORS_DARK_MODE for dark)
- Breakpoints are in `src/theme/media.ts` (mobile 480, tablet 768, desktop 1024, wide 1440)
- All animations must respect `prefers-reduced-motion: reduce`

## Animation System

The AnimatedMingoLogo uses a staggered entrance sequence defined in `animated-mingo-logo.styled.ts` with three styled-component props:

- `$animate` - triggers the entrance sequence (~0.75s total)
- `$wave` - adds continuous wave pulse, leaf sway, and eye blink loops after entrance
- `$bodyFirst` - adjusts body-fill and wave overlay timing to show the body earlier

Animation is triggered by IntersectionObserver (`use-logo-animation.ts`) at 30% visibility threshold.

## Theme System

`ThemeContextProvider` wraps the app and provides `theme` ("light" | "dark"), `toggleThemeCallback`, `setDarkTheme`, and `setLightTheme`. Styled Components' `ThemeProvider` passes the active color palette to all styled components via `props.theme`.
