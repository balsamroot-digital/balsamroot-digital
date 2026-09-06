@AGENTS.md

# CLAUDE.md

Project context for Claude Code. Read this before making changes.

Shared, tool-agnostic instructions (dev server, Astro docs) live in `AGENTS.md`, imported above. Put Claude-specific direction here.

## Project

Marketing/portfolio website for **Balsamroot Digital**, a DBA operating under the parent LLC **Kettle Collective LLC**. Keep the name in one config/constants file, not hardcoded across components, so it's an easy change if it's ever renamed.

Solo web developer business based in the Columbia Gorge (Hood River, OR area), targeting **local small businesses in general** for website builds, redesigns, and ongoing maintenance/SEO. Wineries and breweries were the original focus and remain welcome, but the site should not read as winery/brewery-only: shops, restaurants, trades, services, and any other local business should see themselves in the copy. Keep examples concrete and varied rather than naming one industry throughout.

A specific audience worth speaking to directly: owners already paying a monthly subscription to a site builder (Squarespace, Wix, GoDaddy) who are frustrated by the cost, the limits, or both. Name that situation plainly somewhere on the site and offer to help, in the same "reach out anyway" spirit as the pricing note. This site's whole job is to convert a skeptical, non-technical small business owner into a client. See PROJECT-BRIEF.md in this repo for full context, sitemap, and pricing detail — treat that file as the source of truth for content and structure.

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
3. **Portfolio** (`/portfolio`) — Crush Cider Cafe, with it's description + live link. Structure this as a list so adding a second and third client later is trivial. See "Portfolio case study card" below for the specific component pattern to use here.
4. **About** (`/about`) — short, human bio
5. **Contact** (`/contact`) — contact form (or mailto fallback), email, LinkedIn link

## Key content facts (don't invent alternatives to these)

- Current clients / portfolio: **Ridge of Wonders Wine** (ridgeofwonderswine.com), **Crush Cider Cafe** (crushcider.com) — currently doing SEO work for Crush Cider specifically
- LinkedIn: https://www.linkedin.com/in/colter-garrison/
- GitHub: https://github.com/Colter-Garrison
- Business structure: sole proprietor, solo operator (no team page needed — don't imply an agency)
- Geographic focus: Columbia Gorge (Hood River, OR area) — this is a differentiator, keep it visible, don't write generic "we serve businesses everywhere" copy

## Portfolio case study card

Each portfolio entry should prove results, not just show a screenshot. Prototyped and approved pattern — build to this spec:

- **Collapsed state**: one polished "after" screenshot, plus a single bold stat badge overlaid or adjacent (e.g. "+65% organic clicks") — the stat sells before anyone interacts. Cap it to one headline stat in the collapsed view.
- **Before/After toggle**: two small buttons ("Before" / "After") that swap a single image in place. Do NOT use a draggable comparison slider or a scrollable strip of thumbnails — both are fussier to use on mobile (small touch targets, drag gestures don't always register cleanly) and add complexity for little benefit. A tap-to-swap toggle is simpler to build and easier to use on touch.
- **Expandable "View case study" section**: tapping expands a details panel below the card containing:
    - A small metrics table, 2–3 rows max (e.g. page load time, organic search clicks, Google ranking movement) — more than 3 stats starts to look like a spreadsheet instead of a pitch
    - One short sentence describing what was actually done (e.g. "Added local business schema, rewrote page titles and descriptions, set up Search Console tracking")
- Use real before/after screenshots captured at the same crop/zoom so the toggle swap doesn't jump around visually.
- Data for each case study (before/after image paths, headline stat, metrics table rows, description sentence) should live in `src/data/portfolio.ts` alongside the rest of the portfolio entries — not hardcoded per-page.

## Voice and tone

The whole site — every page, every button label, every error message — should sound **professional but friendly, like a helpful neighbor, not a vendor.** This is a deliberate, consistent voice, not just a rule for the copy on one page. Concretely:

- **Warm, not stiff**: write like you're talking to someone across their own counter, not filing a proposal. Contractions are fine ("I'll," "you're," "let's"). Avoid corporate throat-clearing ("We pride ourselves on delivering...").
- **Helpful first, salesy never**: default to offering to help before asking for anything. If pricing or scope might not fit someone, say so and invite them to reach out anyway rather than letting them quietly bounce off the page. (See the pricing page's "reach out anyway" note as the reference example for this tone.)
- **Plain language over jargon**: explain technical things (SEO, headless CMS, hosting) the way you'd explain them to a business owner who's never heard the term, not the way you'd explain them to another developer.
- **Confident, not hedgy** — say what you do and how it helps, without over-qualifying every sentence. Friendly doesn't mean unsure of yourself.
- **Locally-minded**: "neighbor," not "customer" or "lead," in how the copy frames the relationship. This should show up especially on About, Contact, and anywhere pricing/affordability comes up.
- Every page should read like it was written by the same person. Check new copy against existing pages (especially the About bio and the pricing note) for consistency of voice before finalizing.
- **No em-dashes.** Use periods, commas, colons, or semicolons instead to break up or connect thoughts. This applies to all site copy, including anything generated or rewritten later — check for em-dashes before finalizing any page's text.

## Design direction

- Avoid generic AI-site defaults: no cream-background/serif/terracotta combo, no dark-mode-plus-neon-gradient SaaS look, no hairline-rule broadsheet layout unless deliberately chosen.
- Should feel like it belongs next to a local business's own branding, warm, professional, locally-rooted. Pull visual/color cues from the Gorge (basalt, river, wildflower, orchard) rather than defaulting to generic corporate blue.
- Copy should sound like a real person talking to a business owner, not marketing-speak. Plain, direct, confident — not salesy. See "Voice and tone" above for the full standard this applies across the whole site.

## Non-goals for v1

- No blog/CMS
- No client login/portal
- No e-commerce on this site (that's a service offered to clients, not needed here)

## Before writing code

Confirm/finalize the design token system (colors, type pairing, layout concept) before building pages — don't default to a generic Tailwind starter look. This site is itself a portfolio piece for design taste, so it needs a real point of view, not a template feel.
