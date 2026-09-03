import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const ROUTES = ['/', '/services', '/portfolio', '/about', '/contact']

for (const route of ROUTES) {
	test(`${route} has no accessibility violations`, async ({ page }) => {
		await page.goto(route)

		const results = await new AxeBuilder({ page })
			.withTags([
				'wcag2a',
				'wcag2aa',
				'wcag21a',
				'wcag21aa',
				'best-practice',
			])
			.analyze()

		expect(
			results.violations.map(
				(v) => `${v.id} (${v.nodes.length}): ${v.help}`,
			),
		).toEqual([])
	})
}
