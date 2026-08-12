# Eddie Ebeling portfolio

Personal portfolio site built with Nuxt 3 and Vue 3, designed for static deployment on Netlify.

## Quick start

```bash
npm install
npm run dev
```

## Production build

```bash
npm run generate
```

The generated static site is written to `.output/public`. The included `netlify.toml` configures Netlify to run `npm run generate` and publish that directory.

## Main source files

- `pages/index.vue` — portfolio page and content
- `assets/css/main.css` — visual design and responsive layout
- `public/eddie-ebeling.jpg` — portrait image
- `nuxt.config.ts` — Nuxt configuration and metadata
- `netlify.toml` — Netlify build settings
