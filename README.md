# Portfolio site

A fast, static portfolio built with [Astro](https://astro.build). It has a home page and one case-study page per project.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Make it yours

Everything you need to edit is in `src/data/site.ts`:

1. Replace the `TODO` links (GitHub, LinkedIn, email).
2. Add `resume.pdf` to `public/` and set `links.resume` to `'/resume.pdf'`.
3. For each project, add the `repo` and `demo` URLs when they exist.
4. After each eval run or load test, replace the "Not yet measured" cells with real numbers, expand the decisions, fill in "What I would improve", and set `status` to `'Shipped'` (this also removes the draft note).
5. Edit the `about` paragraphs and `skills` list so they describe you accurately.

To add a project, copy one entry in the `projects` array. The page and its URL are generated from it.

## Deploy

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel or Netlify (framework: Astro, build command `npm run build`, output `dist`).
3. Add a custom domain, then uncomment and set `site` in `astro.config.mjs`.

## Before sharing the link

- Run a Lighthouse check and test on your phone.
- Add an Open Graph image (`og:image`) in `src/layouts/Base.astro` so LinkedIn previews look good.
