# Hosting the Tiny Grove privacy policy

Both app stores require a publicly reachable privacy policy URL before submission. This is the last blocker on the Play listing that's within our control.

**The site:** Astro, on GitHub, deployed by Netlify, at `www.balsamrootdigital.com` (the bare domain redirects there).

**The URL:** `https://www.balsamrootdigital.com/tiny-grove/privacy/`. Keep the `www` and the trailing slash: without either, Netlify redirects to this address, and the store listings should point straight at the page.

---

## The requirement that shapes everything else

**The hosted page and the in-app policy must never drift apart.** They are the same document, shown in two places. If they ever disagree, one of them is lying about what the app does, and the app's entire positioning rests on those claims being verifiable.

So **the policy text has exactly one source**, and the website derives from it. Nobody should ever be editing two copies.

The source is `privacyPolicy` in `src/i18n/en.json` in the Tiny Grove repo, which is already what the app renders at Settings → Your data → Privacy policy.

### How to connect them

**These are two separate repos**, and keeping them in step takes two pieces of wiring, one in each. Neither works properly alone, and they'll likely be built in separate sessions, so build both.

**Piece one, in the site repo: fetch at build time.** Astro can read remote content during the build, so the page pulls `en.json` from the Tiny Grove repo (its raw URL if the repo is public, or the GitHub API with a token stored as a Netlify environment variable if not), extracts the `privacyPolicy` string, and renders it. The site now derives from the app instead of duplicating it.

On its own, though, this only picks up changes whenever the site happens to rebuild for some other reason. A policy edit could sit unpublished for weeks.

**Piece two, in the Tiny Grove repo: push a rebuild.** Create a build hook in Netlify's site settings, which gives you a URL that triggers a deploy when anything POSTs to it. Then add a GitHub Action in the **app** repo that fires it when `src/i18n/en.json` changes on the main branch. Store the hook URL as a repository secret; it's not sensitive enough to guard closely, but it doesn't belong in committed source either.

With both in place, editing the policy in the app repo publishes to the website on its own, with no manual step and no second copy to remember.

**Fallback if cross-repo fetching is genuinely awkward:** a small script in the Tiny Grove repo reads the string and writes a content file that gets copied into the site repo, with a "generated, do not edit" header and a note in both repos. Worse, because it depends on someone remembering to run it, but acceptable if documented.

**Not acceptable:** pasting the text into an Astro page and maintaining it by hand.

---

## Routing: linked from the app's page, nowhere else

**One link, from `/tiny-grove`.** The app's landing page links to the policy, because the privacy story is the app's main selling point and someone reading about it should be one tap from the proof. (This changed on 2026-09-30; before the landing page existed the policy was unlinked everywhere.)

**No other link.** The page must not appear in the site's header, footer, nav menu, or anywhere else a visitor browsing `balsamrootdigital.com` for web services would encounter it. `tests/tiny-grove-privacy.spec.ts` checks both halves of this.

**Do not password-protect it, gate it, or put it behind any form.** Both stores require the URL to be publicly accessible and not editable by users. A protected page fails review.

**Do not add `noindex`.** It's permitted, but it works against the point. Someone who wants to verify the privacy claims should be able to find them, and a privacy policy that's deliberately hard to find quietly contradicts the thing it exists to prove. Keeping it off the nav and footer is enough separation from the rest of the site.

---

## The page itself

Keep it plain. This is a legal document someone may be reading because they're deciding whether to trust the app with medication data.

- Readable line length, real headings, legible at any width
- **Every section heading a real heading element**, so a screen reader's headings rotor can move through it, matching what the in-app version already does
- A last-updated date
- The contact email, `colter@balsamrootdigital.com`, as a working `mailto:` link
- No tracking, no analytics, no embedded third-party anything on this page in particular. A privacy policy page that loads a tracker would be an unforced error.

Styling should match the rest of the site. It doesn't need to look like the app.

---

## Before handing over the URL

- Open it in a private window, signed out, and confirm it loads.
- Confirm it's on the custom domain, not a `*.netlify.app` or branch-deploy address. This URL sits in two store listings for years; it should be on a domain that survives changing hosts.
- Confirm the text matches the app's version word for word, including the privacy promise sentence (`privacy.promise`), which is also quoted in the store listings and must not vary anywhere.
- Confirm only `/tiny-grove` links to it.
- **Test the loop end to end:** change a word in `privacyPolicy` in the app repo, push to main, and confirm the site rebuilds on its own and shows the change. If it doesn't, the wiring is decorative. Change the word back afterward.

---

## Docs

- `docs/store-listing.md`: record the final URL and that both consoles need it.
- Note in both repos how the text is sourced, so the next person to edit the policy knows to change `en.json` and nothing else. If the fallback approach is used, say plainly which file is generated.

---

## One thing to flag, not to solve

The policy is still a draft pending legal review, and `docs/store-listing.md` lists the specific facts a lawyer should confirm, including Sentry's retention period and region, which the policy currently doesn't state. Hosting it doesn't change that. It's fine to publish the draft to unblock the listing, but the review still needs to happen before launch.
