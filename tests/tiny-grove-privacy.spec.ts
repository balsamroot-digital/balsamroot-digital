import { expect, test } from '@playwright/test'
import { siteConfig } from '../src/data/site-config'

// Kept in step with src/data/tiny-grove-privacy.ts by hand: importing that
// file here would pull in astro:env, which only exists inside an Astro build.
const PRIVACY_PATH = '/tiny-grove/privacy'
const LANDING_PATH = '/tiny-grove'
const PUBLIC_ROUTES = ['/', '/services', '/portfolio', '/about', '/contact']

test('the Tiny Grove privacy policy is publicly reachable', async ({ page }) => {
	const response = await page.goto(PRIVACY_PATH)
	expect(response?.status()).toBe(200)

	await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
	await expect(
		page.locator(`a[href="mailto:${siteConfig.email}"]`).first(),
	).toBeVisible()
})

// The app stores need the URL to work, and the app's own page links to it so
// anyone checking the privacy claims can find them. The rest of the site
// doesn't, so a visitor browsing for web services never stumbles onto it.
test('only the Tiny Grove page links to the privacy policy', async ({
	page,
}) => {
	for (const route of PUBLIC_ROUTES) {
		await page.goto(route)
		const links = page.locator(`a[href^="${PRIVACY_PATH}"]`)
		await expect(links, `${route} links to the Tiny Grove policy`).toHaveCount(0)
	}

	await page.goto(LANDING_PATH)
	await expect(page.locator(`main a[href^="${PRIVACY_PATH}"]`)).not.toHaveCount(0)
})

test('the site nav and footer never link to Tiny Grove', async ({ page }) => {
	await page.goto(LANDING_PATH)
	await expect(page.locator('header a[href*="tiny-grove"]')).toHaveCount(0)
	await expect(page.locator('footer a[href*="tiny-grove"]')).toHaveCount(0)
})

// A privacy-first app's own pages shouldn't phone anywhere either.
for (const path of [PRIVACY_PATH, LANDING_PATH]) {
	test(`${path} loads nothing from third parties`, async ({ page }) => {
		const outside: string[] = []
		page.on('request', (request) => {
			const url = new URL(request.url())
			if (url.hostname !== 'localhost') outside.push(request.url())
		})
		await page.goto(path, { waitUntil: 'networkidle' })
		expect(outside).toEqual([])
	})
}

test('the Tiny Grove page has its name, screenshots, and support email', async ({
	page,
}) => {
	await page.goto(LANDING_PATH)
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Tiny Grove')
	await expect(page.getByRole('region', { name: /screenshots/i }).getByRole('img')).toHaveCount(10)
	await expect(
		page.locator(`main a[href="mailto:${siteConfig.email}"]`).first(),
	).toBeVisible()
})
