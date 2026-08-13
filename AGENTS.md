# AGENTS.md

## Project overview

This repository contains Eddie Ebeling's personal portfolio website. It is a static Nuxt 3 site built with Vue 3 and JavaScript, intended for deployment to Netlify at `eddieebeling.com`.

The site showcases Eddie's experience, preferred technologies, and professional background. Keep the overall voice clear, thoughtful, polished, and practical. The visual direction is inspired by Eddie's portrait: dark, editorial, high-contrast, with blue, violet, and electric accent colors.

## Technology and architecture

- Nuxt 3 with Vue 3.
- Use JavaScript and Vue SFCs. Do not introduce TypeScript.
- Page routes live in `pages/`.
- Global styling lives in `assets/css/main.scss`.
- Static assets live in `public/`.
- Nuxt configuration lives in `nuxt.config.js`.
- The site is statically generated for Netlify.
- The contact form uses Netlify Forms and submits to `/thank-you`.

## Source of truth

When making changes, inspect the current files first and preserve existing user changes. Do not replace the project structure or migrate frameworks unless explicitly requested.

Content is primarily maintained in `pages/index.vue`, including the experience list, technologies list, social links, and theme toggle. Keep professional details accurate and use Mount Sterling, IL when referring to Dot Foods. Eddie lives in Scottsdale, AZ; do not substitute one location for the other.

## Styling conventions

- Use semantic CSS custom properties prefixed with `--ee-theme-`.
- Keep theme values in `tokens/dark.json` and `tokens/light.json`.
- Use semantic token names such as `primary`, `secondary`, `contrast`, `surface`, `border`, `accent`, and `text`; do not name tokens after literal colors.
- Use the SCSS `size($value)` helper in `main.scss` for padding, margin, gaps, and max-width values. One unit equals `0.5rem`, so `size(2)` equals `1rem`.
- Use `rem`-based font-size tokens. Avoid odd, arbitrary font-size values.
- Keep the light and dark themes accessible and verify contrast when changing colors.
- Preserve the responsive layout, especially the mobile hero, portrait, orbit decorations, forms, and technology grid.
- Avoid adding border radii to the portrait frame unless explicitly requested.
- Prefer CSS layout, typography, existing assets, and CSS shapes over adding unnecessary imagery or dependencies.

## Design tokens

Token source files:

- `tokens/dark.json` — default dark theme.
- `tokens/light.json` — light theme.
- `build.js` — Style Dictionary configuration.

Generated files:

- `assets/css/_tokens-dark.scss`
- `assets/css/_tokens-light.scss`

Never edit generated token files directly. After changing a token source file, run:

```bash
npm run tokens
```

## Commands

Install dependencies:

```bash
npm install
```

Start local development on the default port:

```bash
npm run dev
```

Start local development on another port:

```bash
npm run dev -- --port 3001
```

Generate the static production site:

```bash
npm run generate
```

The generate command builds the Style Dictionary tokens, runs `nuxt generate`, and copies the result to `dist`.

Preview the generated site:

```bash
npm run preview
```

## Netlify

Netlify settings are defined in `netlify.toml`:

- Build command: `npm run generate`
- Publish directory: `dist`
- Node.js version: 22

Do not change the publish directory to `.output/public` unless the copy-to-dist workflow is intentionally removed and the deployment configuration is updated consistently.

## Validation

For changes to site code, styles, tokens, or build configuration:

1. Run `git diff --check`.
2. Run `npm run generate`.
3. Inspect the resulting diff and confirm that generated token files are consistent with the token source changes.

For styling changes, check both dark and light themes and test narrow mobile widths when possible. Pay particular attention to horizontal overflow, long headings, form controls, orbit decorations, and navigation.

## Git and change scope

- Keep changes focused on the user's request.
- Do not remove or overwrite unrelated work.
- Do not commit, push, or modify remote history unless explicitly requested.
- Do not add secrets, API keys, private contact data, or environment files to the repository.
- Keep generated output such as `dist/` and Nuxt build artifacts out of source changes unless the repository already tracks them intentionally.
