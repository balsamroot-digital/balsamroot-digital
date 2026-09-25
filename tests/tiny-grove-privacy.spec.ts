import { expect, test } from '@playwright/test'
import { siteConfig } from '../src/data/site-config'

// Kept in step with src/data/tiny-grove-privacy.ts by hand: importing that
// file here would pull in astro:env, which only exists inside an Astro build.
const PRIVACY_PATH = '/tiny-grove/privacy'
const PUBLIC_ROUTES = ['/', '/services', '/portfolio', '/about', '/contact']

test('the Tiny Grove privacy policy is publicly reachable', async ({ page }) => {
	const response = await page.goto(PRIVACY_PATH)
	expect(response?.status()).toBe(200)

	await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
	await expect(
		page.locator(`a[href="mailto:${siteConfig.email}"]`).first(),
	).toBeVisible()
})

// The app stores need the URL to work, but the page shouldn't be something a
// visitor browsing the site stumbles onto.
test('nothing on the public site links to the privacy policy', async ({
	page,
}) => {
	for (const route of PUBLIC_ROUTES) {
		await page.goto(route)
		const links = page.locator('a[href*="tiny-grove"]')
		await expect(links, `${route} links to the Tiny Grove policy`).toHaveCount(0)
	}
})

test('the privacy policy page loads no third-party scripts', async ({
	page,
}) => {
	const outside: string[] = []
	page.on('request', (request) => {
		const url = new URL(request.url())
		if (url.hostname !== 'localhost') outside.push(request.url())
	})
	await page.goto(PRIVACY_PATH, { waitUntil: 'networkidle' })
	expect(outside).toEqual([])
})
