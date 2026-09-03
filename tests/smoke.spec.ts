import { expect, test } from '@playwright/test'

test('homepage loads with the correct title and headline', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Balsamroot Digital/)

	const heading = page.getByRole('heading', { level: 1 })
	await expect(heading).toHaveText(/Websites for Gorge wineries/)
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
