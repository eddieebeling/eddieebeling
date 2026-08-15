# Eddie Ebeling — Portfolio

The personal portfolio of Eddie Ebeling, a senior software engineer and front-end developer focused on thoughtful, accessible digital experiences.

The site presents Eddie’s experience, preferred technologies, design-system work, and a simple Netlify Forms contact flow. It is designed for static deployment on [eddieebeling.com](https://www.eddieebeling.com/).

## Built with

- [Nuxt 3](https://nuxt.com/) and [Vue 3](https://vuejs.org/)
- SCSS with semantic CSS custom properties
- [Style Dictionary](https://styledictionary.com/) for light and dark theme tokens
- [Vite](https://vite.dev/) for development and production tooling
- [Netlify](https://www.netlify.com/) for hosting and form handling

## Run locally

This project requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The development site is available at `http://localhost:3000` by default.

## Manage site content

Editable portfolio copy lives in [`content/portfolio.md`](./content/portfolio.md). Nuxt Content loads that Markdown document during the build and hydrates the Pinia content store for the site. Update the Markdown file and run `npm run generate` to verify the static output locally; Netlify uses the same command when deploying.

## Build and preview

Generate the static site locally:

```bash
npm run generate
```

This command builds the light and dark theme tokens, generates the Nuxt static output, and copies the result to `dist`.

To preview the generated production output:

```bash
npm run preview
```

## Theme tokens

Theme values live in JSON and are compiled into SCSS custom properties before the Nuxt build:

- `tokens/dark.json` — default dark theme
- `tokens/light.json` — light theme
- `build.js` — Style Dictionary build configuration
- `assets/css/_tokens-dark.scss` and `assets/css/_tokens-light.scss` — generated files

Run `npm run tokens` after changing the token source files. The generated files should not be edited directly.

## Netlify deployment

Netlify is configured through `netlify.toml`:

- Build command: `npm run generate`
- Publish directory: `dist`
- Node.js version: 22

The contact form uses Netlify Forms and submits to the site’s `/thank-you` page after a successful submission.

## Project structure

```text
pages/index.vue                  Portfolio content and theme toggle
pages/thank-you.vue              Netlify Forms confirmation page
assets/css/main.scss             Layout, responsive styles, and component styling
tokens/                          Light and dark design tokens
build.js                         Style Dictionary token generation
public/eddie-ebeling.jpg         Portfolio portrait
nuxt.config.js                   Nuxt configuration and site metadata
netlify.toml                     Netlify build and hosting settings
```

## Find me online

- [LinkedIn](https://www.linkedin.com/in/eddieebeling/)
- [GitHub](https://github.com/eddieebeling)
- [CodePen](https://codepen.io/eddieebeling)
- [Instagram](https://www.instagram.com/eddieebeling)
- [Facebook](https://www.facebook.com/eddieebeling)
