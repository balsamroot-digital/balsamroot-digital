import { TINY_GROVE_GITHUB_TOKEN } from 'astro:env/server'

/**
 * The Tiny Grove privacy policy, served at /tiny-grove/privacy.
 *
 * The text is NOT kept in this repo. Its one source is `privacyPolicy` in
 * `src/i18n/en.json` in the Tiny Grove app repo, which is what the app shows at
 * Settings → Your data → Privacy policy. The build fetches that file from the
 * app repo's main branch, and a GitHub Action there triggers a Netlify rebuild
 * whenever it changes. To edit the policy, edit en.json in the app repo and
 * nothing else.
 *
 * The page is deliberately unlinked: it's reachable by URL (the app stores
 * need that) but shouldn't show up in the nav, footer, or anywhere else.
 */

export const tinyGrove = {
	name: 'Tiny Grove',
	path: '/tiny-grove/privacy',
	repo: 'balsamroot-digital/tiny-grove',
	branch: 'main',
	stringsFile: 'src/i18n/en.json',
} as const

type Section = { heading: string; body: string }

export type PrivacyPolicy = {
	title: string
	updated: string
	intro: string
	promise: string
	sections: Section[]
	contact: { heading: string; body: string }
}

// Keys in `privacyPolicy` that aren't body sections. Everything else is a
// section, rendered in the JSON's key order, which matches the app's SECTIONS.
const NON_SECTION_KEYS = new Set(['title', 'updated', 'intro', 'contact'])

/**
 * Fills i18n-js style `{{name}}` placeholders, the same syntax the app's `t()`
 * uses. Throws on any placeholder it can't fill, so a new one added in the app
 * can't silently publish as literal braces.
 */
function interpolate(text: string, values: Record<string, string>): string {
	return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, name: string) => {
		const value = values[name]
		if (value === undefined) {
			throw new Error(`Tiny Grove privacy policy: no value for {{${name}}}`)
		}
		return value
	})
}

function requireString(value: unknown, path: string): string {
	if (typeof value !== 'string' || value.trim() === '') {
		throw new Error(`Tiny Grove privacy policy: ${path} is missing or not a string`)
	}
	return value
}

/** Turns the app's strings file into the page's policy, checking its shape. */
export function parsePolicy(strings: unknown, email: string): PrivacyPolicy {
	const root = strings as Record<string, any>
	const policy = root?.privacyPolicy
	if (typeof policy !== 'object' || policy === null) {
		throw new Error('Tiny Grove privacy policy: privacyPolicy not found in en.json')
	}

	const promise = requireString(root.privacy?.promise, 'privacy.promise')
	const values = { promise, email }
	const text = (value: unknown, path: string) =>
		interpolate(requireString(value, path), values)

	const sections = Object.keys(policy)
		.filter((key) => !NON_SECTION_KEYS.has(key))
		.map((key) => ({
			heading: text(policy[key]?.heading, `privacyPolicy.${key}.heading`),
			body: text(policy[key]?.body, `privacyPolicy.${key}.body`),
		}))

	return {
		title: text(policy.title, 'privacyPolicy.title'),
		updated: text(policy.updated, 'privacyPolicy.updated'),
		intro: text(policy.intro, 'privacyPolicy.intro'),
		promise,
		sections,
		contact: {
			heading: text(policy.contact?.heading, 'privacyPolicy.contact.heading'),
			body: text(policy.contact?.body, 'privacyPolicy.contact.body'),
		},
	}
}

async function fetchStrings(token: string): Promise<unknown> {
	const url = `https://api.github.com/repos/${tinyGrove.repo}/contents/${tinyGrove.stringsFile}?ref=${tinyGrove.branch}`
	const response = await fetch(url, {
		headers: {
			Accept: 'application/vnd.github.raw+json',
			Authorization: `Bearer ${token}`,
			'X-GitHub-Api-Version': '2022-11-28',
			'User-Agent': 'balsamroot-digital-site-build',
		},
	})
	if (!response.ok) {
		throw new Error(
			`Tiny Grove privacy policy: GitHub returned ${response.status} for ${tinyGrove.stringsFile}. Check that TINY_GROVE_GITHUB_TOKEN can read ${tinyGrove.repo}.`,
		)
	}
	return response.json()
}

/**
 * Where a build may go without the real policy: the dev server, and GitHub
 * Actions runs that can't see the token (Dependabot PRs). Those builds never
 * deploy. Everywhere else, including Netlify and any future host, a missing
 * token fails the build, which leaves the last good deploy live rather than
 * publishing a page without the policy on it.
 */
function mayBuildWithoutPolicy(): boolean {
	return import.meta.env.DEV || process.env.GITHUB_ACTIONS === 'true'
}

/**
 * Loads the policy at build time, or returns null when this build is allowed
 * to go without it (see `mayBuildWithoutPolicy`).
 */
export async function loadPrivacyPolicy(email: string): Promise<PrivacyPolicy | null> {
	if (!TINY_GROVE_GITHUB_TOKEN) {
		if (mayBuildWithoutPolicy()) {
			console.warn(
				`[tiny-grove] TINY_GROVE_GITHUB_TOKEN isn't set, so ${tinyGrove.path} is built with a placeholder.`,
			)
			return null
		}
		throw new Error(
			`TINY_GROVE_GITHUB_TOKEN isn't set, so ${tinyGrove.path} can't be built. Set it (a token with read access to ${tinyGrove.repo}) in Netlify's environment variables, or locally in .env.`,
		)
	}
	return parsePolicy(await fetchStrings(TINY_GROVE_GITHUB_TOKEN), email)
}
