# AI instructions for `coolPortfolio`

## Project snapshot
- React 19 + Vite 7 SPA wrapped in `BrowserRouter` (`src/main.jsx`) that currently serves a single `HomePage` route via `App.jsx`.
- Styling mixes Tailwind CSS v4 (`@import "tailwindcss"`) with DaisyUI utility classes and a handful of handcrafted rules in `src/styles/CustomStyles.css` plus custom fonts declared in `src/styles/Font.css` that load from `public/fonts`.
- Static assets (project thumbs + resume PDF) live under `src/assets`. Images are imported as ES modules; to add a new asset, drop it into `src/assets/...` and import it explicitly rather than referencing `/public` URLs.

## Build, run, and lint
- Use `npm install` once, then the scripts from `package.json`: `npm run dev` (Vite dev server), `npm run build` (production bundle to `dist`), `npm run preview`, and `npm run lint` (ESLint config in `eslint.config.js`).
- Netlify deploys via `netlify.toml` with `dist` as the publish dir; keep SPA routing working by mirroring `_redirects` (/* → /index.html) if you touch routing.

## Architecture & routing
- `App.jsx` stitches together `NavBar`, `Routes`, and page components. New pages should live in `src/pages`, be imported into `App.jsx`, and be wired into `<Routes>`; the SPA fallback already exists thanks to Netlify redirects.
- The navigation is scroll-driven on desktop/mobile: `NavBar.jsx` uses DOM helpers (`scrollToTop`, `scrollToProjects`) that rely on section IDs (e.g., `id="selected-projects"` in `ProjectsGrid`). When adding sections, expose stable IDs so the nav can jump smoothly.

## Component patterns
- Home content is composed in `src/pages/HomePage.jsx` (`Hero`, `ProjectsGrid`, `Footer`). Each component is self-contained and stateless except:
  - `ProjectsGrid.jsx` owns the hard-coded `projects` array and modal state. Move project data into this list (or a data module) and keep thumbnails imported at the top. `developedProjects` gates which cards open future detail routes; today all undeveloped cards trigger `ProjectNotReadyModal`.
  - `ProjectNotReadyModal.jsx` and `MobileHamburgerMenuModal.jsx` are DaisyUI-styled overlays. Both return `null` when closed and expect the parent to manage show/hide state; wire callbacks carefully so `document.body.style.overflow` resets when the mobile menu closes.
- Footer social links live in `Footer.jsx`; use the same `react-icons` pattern (import specific icons, render as inline components) when adding new icons.

## Styling system
- Tailwind is configured via `tailwind.config` and also through the Vite plugin (`@tailwindcss/vite`). Utility-first styling is the default; when something repeats, add a class in `CustomStyles.css` (e.g., `.custom-underline`, `.highlighted-text`).
- Fonts (`MilkyWalky`, `Flaviotte`) are registered globally in `Font.css` and pulled into components with `import "../styles/Font.css"`; keep the font-family names consistent and ensure new components import the stylesheet only once per bundle entry (commonly via `App.jsx`).

## Assets, data, and deployment extras
- Project media is organized in `src/assets/projects/<ProjectName>/`. Follow the existing casing and folder structure so import paths stay predictable.
- `src/assets/resume/genericResume.pdf` is opened via `window.open`; if you swap resumes, keep the path/filename stable or update both the import and the `openResume` helper.
- SPA hosting assumptions are duplicated in both `netlify.toml` and `public/_redirects`; edit both when changing deploy targets.

## Working agreements
- Keep components small and focused; if a new feature requires state or side effects, colocate them in the owning component (mirroring `ProjectsGrid`/`MobileHamburgerMenuModal`) instead of global stores.
- Favor Tailwind utilities and DaisyUI patterns before introducing new CSS, and document any new helper classes inside `CustomStyles.css`.
- When editing project cards or navigation, double-check that IDs, imports, and modal toggles stay in sync so clicks either route to a real page or gracefully fall back to the "not ready" modal.
