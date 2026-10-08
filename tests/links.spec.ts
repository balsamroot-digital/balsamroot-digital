import { expect, test } from '@playwright/test'

const ROUTES = [
	'/',
	'/services',
	'/portfolio',
	'/about',
	'/contact',
	'/tiny-grove',
]

test('no broken internal links anywhere on the site', async ({
	page,
	request,
}) => {
	const found = new Map<string, string[]>()

	for (const route of ROUTES) {
		await page.goto(route)
		const hrefs = await page
			.locator('a[href]')
			.evaluateAll((as) =>
				(as as HTMLAnchorElement[]).map(
					(a) => a.getAttribute('href') ?? '',
				),
			)

		for (const href of hrefs) {
			if (!href.startsWith('/')) continue // skip external, mailto:, tel:, #anchors
			const clean = href.split('#')[0] || '/'
			if (!found.has(clean)) found.set(clean, [])
			found.get(clean)!.push(route)
		}
	}

	expect(found.size, 'should have discovered interal links').toBeGreaterThan(
		0,
	)

	const broken: string[] = []
	for (const [href, pages] of found) {
		const res = await request.get(href)
		if (res.status() !== 200) {
			broken.push(
				`${href} -> ${res.status()} (lined from ${[...new Set(pages)].join(', ')})`,
			)
		}
	}

	expect(broken, `Broken internal links:\n${broken.join('\n')}`).toHaveLength(
		0,
	)

	// Netlify 301s "/services" to "/services/", and search engines report every
	// link that lands on a redirect, so page links must use the final address.
	const redirecting = [...found.keys()].filter(
		(href) => !href.endsWith('/') && !/\.[a-z0-9]+$/i.test(href),
	)
	expect(
		redirecting,
		`Internal links missing a trailing slash:\n${redirecting.join('\n')}`,
	).toHaveLength(0)
})
