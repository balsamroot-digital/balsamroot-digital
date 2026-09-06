# Balsamroot Digital — Company Website Project Brief

## What this is

A professional marketing/portfolio site for Balsamroot Digital, a DBA operating under the parent LLC Kettle Collective LLC. The site's job is to convince a local business owner in the Columbia Gorge that hiring a local, responsive web developer is a better call than an agency quote or a DIY builder.

Business structure: Balsamroot Digital is a DBA of Kettle Collective LLC — still a one-person operation, so nothing on the site should imply a team or an agency.

## Goals

1. Look professional enough that a business owner trusts you with something as visible as their website.
2. Show proof of work — Ridge of Wonders Wine and Crush Cider Cafe are real, live sites you can point to.
3. Make services and rough pricing easy to understand at a glance, so unqualified leads self-select out and interested ones know what to expect before they email you.
4. Make it dead simple to get in touch.
5. Be fast and clean on mobile — plenty of your prospective clients will look you up on their phone.

## Target audience

Local small business owners in the Columbia Gorge: shops, restaurants, trades, services, and hospitality alike. Wineries and breweries were the original focus and are still very welcome, but the site should not read as serving only them. Not technical. Care about: looking legitimate online, being findable on Google/Maps, low hassle, and a fair price. Skeptical of anything that sounds like a big agency sales pitch.

## Sitemap / pages

### 1. Home

- Hero: who you are, what you do, who you do it for (one clear sentence, currently "Websites for Gorge businesses, built and maintained by someone local.")
- Quick services overview (3–4 cards, links down to full Services page)
- Portfolio highlight — Ridge of Wonders + Crush Cider, with a screenshot/link to each
- Short trust-building bit: local, responsive, honest pricing
- CTA to Contact

### 2. Services

Lay out real offerings so prospects can self-qualify. Suggested structure and starting-point pricing (adjust as you like before publishing — these are meant to be _directionally_ accurate, not locked in stone):

- **Starter Site** — a single page with hours, contact details, a map, and Google Business Profile setup. $450 flat. This is the door-opener for a business that currently has a Facebook page and nothing else.
- **Website Redesign** — modernizing/rebuilding an existing site (this is what you're doing for Crush Cider). Starting at $650.
- **New Website Build** — custom multi-page site from scratch. Starting at $900, scoped per project.
- **Maintenance Plans** (recurring, monthly) — this is the page that should sell hardest, since it's your best recurring revenue. Four tiers so people can self-select on how often their details change:
    - _Essentials — $10/mo_: hosting, SSL, security patches, uptime monitoring, monthly backups. Changes billed hourly. Nets roughly $108/yr, so treat it as a relationship-starter that grows into a paid tier, not as revenue.
    - _Basic — $25/mo_: everything in Essentials + up to 2 small updates/month, 30 minutes of changes included, reply within one business day
    - _Standard — $50/mo_: everything in Basic + weekly updates (hours, events, menus, specials), 1 hour included, same-day weekday replies
    - _Growth — custom quote_: everything in Standard + e-commerce/online ordering and booking system support, hours scoped to fit
- **One-off Updates** — $40/hr, 30-minute minimum, for businesses without a maintenance plan.
- **SEO** — call this out specifically since you're already doing it for Crush Cider. Starting at $250. Local SEO for Google/Apple Maps visibility, page titles and descriptions, structured business details, Search Console setup.
- **Add-ons** (list as available, price case-by-case): domain/hosting management, online ordering/e-commerce setup, booking/reservation systems, copywriting support.

Pricing principle: keep project work at or above roughly $40/hr of real effort, and win entry-level customers with the Starter Site and the $10/mo tier rather than by discounting builds. Low anchors are hard to raise later.

### 3. Portfolio

- Ridge of Wonders Wine (ridgeofwonderswine.com) — brief description of what you did/do for them
- Crush Cider Cafe (crushcider.com) — brief description, mention the SEO work specifically since it's a differentiator
- Leave room to add more as you land clients

### 4. About

- Short bio: local to Hood River/the Gorge, why that matters for this work, background as a developer
- Keep it human and short — this page exists to build trust, not to be a resume

### 5. Contact

- Simple contact form (name, business, email, message) or a mailto link if you don't want to wire up a form backend yet
- Direct email address
- LinkedIn link (yes, worth including — https://www.linkedin.com/in/colter-garrison/. It's a low-cost trust signal for a solo operator; a prospect can quickly verify you're a real working developer)
- Consider a phone number only if you're comfortable being reachable that way

## Tech stack recommendation

- **Astro + TypeScript** — this is a mostly-static, content-driven marketing site, not an app. Astro ships very little JavaScript by default, which means fast load times and strong Core Web Vitals — genuinely useful given SEO is one of your own services; your own site should demonstrate the thing you sell.
- **Tailwind CSS** for styling — fast to build with, easy to keep the responsive breakpoints consistent between mobile and desktop without hand-writing a lot of custom CSS.
- **Deployment**: Netlify or Vercel, free tier. Both support a custom domain on the free plan and auto-deploy from a GitHub repo on every push.
- **Domain**: buy through Namecheap or Cloudflare (cheaper than GoDaddy, ~$10-15/yr for a .com).

## Design direction (starting point — refine in Claude Code)

- Professional but warm — this isn't a SaaS product, it's a local craftsperson's business. Avoid generic "tech startup" look (dark mode + neon gradient, or the cream/serif/terracotta combo that's become an AI-generated-site cliché).
- Pull visual cues from the Gorge itself: basalt, water, wildflower color, or the "Digital" branding direction you landed on — lean into that identity rather than defaulting to generic blue-and-white corporate styling.
- Should feel at home sitting next to a local business's own site aesthetically, since that's the audience judging it.

## Out of scope for v1

- Blog/CMS — add later if you want to publish SEO case studies
- Client portal / login — not needed for a marketing site
- E-commerce on your _own_ site — not relevant, that's a service you offer to clients, not something your site needs
