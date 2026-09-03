import { defineConfig, devices } from '@playwright/test'

/**
 * Tests run against a real production build served by `astro preview`,
 * never the dev server — the dev server is unbundled and transforms
 * images on demand, so it behaves nothing like what actually ships.
 */
const PORT = 4322
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
	testDir: './tests',

	// Fail the run if someone commits a stray test.only
	forbidOnly: !!process.env.CI,

	// Flaky-test insurance in CI only; locally a failure should just fail.
	retries: process.env.CI ? 2 : 0,

	fullyParallel: true,

	reporter:
		process.env.CI ?
			[['github'], ['html', { open: 'never' }]]
		:	[['list'], ['html', { open: 'never' }]],

	use: {
		baseURL,
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
	},

	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
		{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
		{ name: 'mobile-chrome', use: { ...devices['Pixel 10'] } },
	],

	webServer: {
		command: `npm run build && npm run preview -- --port ${PORT}`,
		url: baseURL,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
})
