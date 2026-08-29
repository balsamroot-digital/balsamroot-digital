# Columbia Gorge Web Works — Company Website Project Brief

## What this is
A professional marketing/portfolio site for Columbia Gorge Web Works. The site's job is to convince a winery or brewery owner in the Columbia Gorge that hiring a local, responsive web developer is a better call than an agency quote or a DIY builder.

## Goals
1. Look professional enough that a business owner trusts you with something as visible as their website.
2. Show proof of work — Ridge of Wonders Wine and Crush Cider Cafe are real, live sites you can point to.
3. Make services and rough pricing easy to understand at a glance, so unqualified leads self-select out and interested ones know what to expect before they email you.
4. Make it dead simple to get in touch.
5. Be fast and clean on mobile — plenty of your prospective clients will look you up on their phone.

## Target audience
Small business owners (wineries, breweries, cideries, and similar hospitality/agritourism businesses) in the Columbia Gorge. Not technical. Care about: looking legitimate online, being findable on Google/Maps, low hassle, and a fair price. Skeptical of anything that sounds like a big agency sales pitch.

## Sitemap / pages

### 1. Home
- Hero: who you are, what you do, who you do it for (one clear sentence — "Websites for Gorge wineries and breweries, built and maintained by someone local.")
- Quick services overview (3–4 cards, links down to full Services page)
- Portfolio highlight — Ridge of Wonders + Crush Cider, with a screenshot/link to each
- Short trust-building bit: local, responsive, honest pricing
- CTA to Contact

### 2. Services
Lay out real offerings so prospects can self-qualify. Suggested structure and starting-point pricing (adjust as you like before publishing — these are meant to be *directionally* accurate, not locked in stone):

- **New Website Build** — custom site from scratch. Starting at $1,200 (flat fee), scoped per project.
- **Website Redesign** — modernizing/rebuilding an existing site (this is what you're doing for Crush Cider). Starting at $800.
- **Maintenance Plans** (recurring, monthly) — this is the page that should sell hardest, since it's your best recurring revenue:
  - *Basic — $50/mo*: hosting & security monitoring, minor text/photo updates, 1 hour included
  - *Standard — $100/mo*: everything in Basic + more frequent updates, small feature additions, faster turnaround
  - *Growth — custom quote*: e-commerce/online ordering or booking system support included
- **One-off Updates** — hourly, $35–50/hr, 1-hour minimum, for businesses without a maintenance plan.
- **SEO** — call this out specifically since you're already doing it for Crush Cider. Local SEO for Google/Maps visibility, metadata, schema markup, Search Console setup.
- **Add-ons** (list as available, price case-by-case): domain/hosting management, online ordering/e-commerce setup, tasting-room booking/reservation systems, copywriting support.

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
- Should feel at home sitting next to a winery or brewery's own site aesthetically, since that's the audience judging it.

## Out of scope for v1
- Blog/CMS — add later if you want to publish SEO case studies
- Client portal / login — not needed for a marketing site
- E-commerce on your *own* site — not relevant, that's a service you offer to clients, not something your site needs
