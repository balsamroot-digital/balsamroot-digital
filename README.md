# Balsamroot Digital

Marketing/portfolio site for Balsamroot Digital (a DBA of Kettle Collective LLC) — a solo web developer business based in Hood River, OR, building and maintaining sites for wineries, breweries, and similar hospitality businesses in the Columbia Gorge.

See [PROJECT-BRIEF.md](./PROJECT-BRIEF.md) for the source of truth on content, sitemap, and pricing. See [CLAUDE.md](./CLAUDE.md) for project conventions.

## Stack

- [Astro](https://astro.build) + TypeScript
- Tailwind CSS

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the build locally before deploying  |

## Tiny Grove privacy policy

`/tiny-grove/privacy` hosts the privacy policy for the Tiny Grove app, and its text is **not** in this repo. The build fetches `privacyPolicy` from `src/i18n/en.json` on the `main` branch of the private [tiny-grove](https://github.com/balsamroot-digital/tiny-grove) repo (see `src/data/tiny-grove-privacy.ts`), and a GitHub Action in that repo triggers a Netlify rebuild whenever the file changes. To change the policy, edit `en.json` in the app repo and nothing else.

- The build needs `TINY_GROVE_GITHUB_TOKEN`, a token with read-only access to that repo's contents. It's set in Netlify; locally, put it in `.env` or run `TINY_GROVE_GITHUB_TOKEN=$(gh auth token) npm run build`.
- Without the token, the build fails, so Netlify keeps the last good deploy live. The only exceptions are `astro dev` and GitHub Actions, which build a placeholder page and never deploy.
- The page is deliberately unlinked: it isn't in the nav or footer, and a test fails if any public page links to it. Don't add `noindex` or put it behind anything; the app stores need it public.
