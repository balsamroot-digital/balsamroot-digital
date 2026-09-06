import { expect, test } from '@playwright/test'
import { siteConfig } from '../src/data/site-config'

test('homepage loads with the correct title and headline', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Balsamroot Digital/)

	// Assert against the config rather than a copied string, so rewording the
	// tagline doesn't break the test. What's being checked is that the hero is
	// actually wired to site-config, not the specific words.
	const heading = page.getByRole('heading', { level: 1 })
	await expect(heading).toHaveText(siteConfig.tagline)
})

test('the hero photo appears on the homepage', async ({ page }) => {
	await page.goto('/')

	const heroPhoto = page.getByRole('img', { name: /balsamroot flowers/i })
	await expect(heroPhoto).toBeVisible()

	// A broken image is still 'visible' to the DOM, naturalWidth is how you prove the bytes decoded
	const width = await heroPhoto.evaluate(
		(img: HTMLImageElement) => img.naturalWidth,
	)
	expect(width).toBeGreaterThan(0)
})

test('every internal page responds successfully', async ({ request }) => {
	for (const path of ['/', '/services', '/portfolio', '/about', '/contact']) {
		const response = await request.get(path)
		expect(response.status(), `${path} should be reachable`).toBe(200)
	}
})
