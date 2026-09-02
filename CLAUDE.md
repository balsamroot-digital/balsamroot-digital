@AGENTS.md

# CLAUDE.md

Project context for Claude Code. Read this before making changes.

Shared, tool-agnostic instructions (dev server, Astro docs) live in `AGENTS.md`, imported above. Put Claude-specific direction here.

## Project

Marketing/portfolio website for **Balsamroot Digital**, a DBA operating under the parent LLC **Kettle Collective LLC**. Keep the name in one config/constants file, not hardcoded across components, so it's an easy change if it's ever renamed.

Solo web developer business based in the Columbia Gorge (Hood River, OR area), targeting wineries and breweries as clients for website builds, redesigns, and ongoing maintenance/SEO. This site's whole job is to convert a skeptical, non-technical small business owner into a client. See PROJECT-BRIEF.md in this repo for full context, sitemap, and pricing detail — treat that file as the source of truth for content and structure.

## Tech stack

- **Astro** with **TypeScript** — static-first, minimal JS shipped, strong Core Web Vitals (this matters: SEO is one of the services being sold, so the site itself should perform well)
- **Tailwind CSS** for styling
- Fully responsive — mobile and desktop both need to look intentional, not just "doesn't break"
- Deploy target: Netlify or Vercel (free tier), custom domain

## Structure conventions

- Content that will change often (services list, pricing, portfolio entries) should live in structured data files (e.g. `src/data/services.ts`, `src/data/portfolio.ts`), not hardcoded inline in page components — makes it easy to add a new client or adjust a price without touching layout code.
- Keep components small and single-purpose (`Hero.astro`, `ServiceCard.astro`, `PortfolioCard.astro`, etc.)
- One global site config file (`src/data/site-config.ts` or similar) for: company name, tagline, contact email, LinkedIn URL, phone (if used). Reference this everywhere rather than repeating strings.

## Pages

1. **Home** (`/`) — hero, services overview (cards linking to Services), portfolio highlights, short trust section, CTA to Contact
2. **Services** (`/services`) — full breakdown: New Builds, Redesigns, Maintenance Plans (tiered), One-off Updates, SEO, Add-ons. Pull from PROJECT-BRIEF.md for current pricing structure.
3. **Portfolio** (`/portfolio`) — Ridge of Wonders Wine and Crush Cider Cafe, each with description + live link. Structure this as a list so adding a third client later is trivial.
4. **About** (`/about`) — short, human bio
5. **Contact** (`/contact`) — contact form (or mailto fallback), email, LinkedIn link

## Key content facts (don't invent alternatives to these)

- Current clients / portfolio: **Ridge of Wonders Wine** (ridgeofwonderswine.com), **Crush Cider Cafe** (crushcider.com) — currently doing SEO work for Crush Cider specifically
- LinkedIn: https://www.linkedin.com/in/colter-garrison/
- GitHub: https://github.com/Colter-Garrison
- Business structure: **Balsamroot Digital** is a DBA operating under the parent LLC **Kettle Collective LLC**. Still a solo operator (no team page needed — don't imply an agency)
- Geographic focus: Columbia Gorge (Hood River, OR area) — this is a differentiator, keep it visible, don't write generic "we serve businesses everywhere" copy

## Design direction

- Avoid generic AI-site defaults: no cream-background/serif/terracotta combo, no dark-mode-plus-neon-gradient SaaS look, no hairline-rule broadsheet layout unless deliberately chosen.
- Should feel like it belongs next to a winery or brewery's own branding — warm, professional, locally-rooted. Pull visual/color cues from the Gorge (basalt, river, wildflower, orchard) rather than defaulting to generic corporate blue.
- Copy should sound like a real person talking to a business owner, not marketing-speak. Plain, direct, confident — not salesy.

## Non-goals for v1

- No blog/CMS
- No client login/portal
- No e-commerce on this site (that's a service offered to clients, not needed here)

## Before writing code

Confirm/finalize the design token system (colors, type pairing, layout concept) before building pages — don't default to a generic Tailwind starter look. This site is itself a portfolio piece for design taste, so it needs a real point of view, not a template feel.
