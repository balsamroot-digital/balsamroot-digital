import type { ImageMetadata } from 'astro'

export type CaseStudyPage = {
	/** Tab label. Keep it to one word so tabs don't wrap on mobile. */
	label: string
	/** Capture both shots at the same crop and zoom, or the toggle visibly
	 * jumps when it swaps. */
	before: ImageMetadata
	after: ImageMetadata
	beforeAlt: string
	afterAlt: string
}

export type CaseStudyMetric = {
	/** What was measured, e.g. 'Organic search clicks'. */
	label: string
	before: string
	after: string
}

export type CaseStudy = {
	/** The single stat shown on the collapsed card, e.g. '+65% organic clicks'.
	 * Keep it to one — it has to sell before anyone interacts. */
	headlineStat: string
	/** One entry per page captured. The first is treated as the primary page
	 * and its "after" shot is what the collapsed card shows. A single entry
	 * renders without tabs. */
	pages: CaseStudyPage[]
	/** Two or three rows. More than three reads as a spreadsheet, not a pitch. */
	metrics: CaseStudyMetric[]
	/** One sentence on what was actually done. */
	summary: string
}

export type PortfolioEntry = {
	slug: string
	name: string
	url: string
	description: string
	tags: string[]
	/** Optional. Entries without one render as a plain card. */
	caseStudy?: CaseStudy
}

// To add a case study, import the screenshots at the top of this file:
//
//   import crushHomeBefore from '../assets/crush-home-before.png'
//   import crushHomeAfter from '../assets/crush-home-after.png'
//   import crushMenuBefore from '../assets/crush-menu-before.png'
//   import crushMenuAfter from '../assets/crush-menu-after.png'
//
// then attach a `caseStudy` block to the entry. List one page per screenshot
// pair — the first is the one shown on the collapsed card:
//
//   caseStudy: {
//     headlineStat: '+65% organic clicks',
//     pages: [
//       {
//         label: 'Home',
//         before: crushHomeBefore,
//         after: crushHomeAfter,
//         beforeAlt: 'Crush Cider Cafe homepage before the rebuild',
//         afterAlt: 'Crush Cider Cafe homepage after the rebuild',
//       },
//       {
//         label: 'Menu',
//         before: crushMenuBefore,
//         after: crushMenuAfter,
//         beforeAlt: 'Crush Cider Cafe menu page before the rebuild',
//         afterAlt: 'Crush Cider Cafe menu page after the rebuild',
//       },
//     ],
//     metrics: [
//       { label: 'Organic search clicks', before: '120/mo', after: '198/mo' },
//       { label: 'Largest Contentful Paint', before: '4.1s', after: '1.2s' },
//       { label: 'Google ranking, "hood river cider"', before: '#14', after: '#3' },
//     ],
//     summary:
//       'Added local business schema, rewrote page titles and descriptions, and set up Search Console tracking.',
//   },
//
// With only one page in `pages`, the tabs are skipped automatically.

export const portfolio: PortfolioEntry[] = [
	// {
	// 	slug: 'ridge-of-wonders-wine',
	// 	name: 'Ridge of Wonders Wine',
	// 	url: 'https://ridgeofwonderswine.com',
	// 	description: 'Website design and build for a Columbia Gorge winery.',
	// 	tags: ['New Build'],
	// },
	{
		slug: 'crush-cider-cafe',
		name: 'Crush Cider Cafe',
		url: 'https://crushcider.com',
		description:
			'Monthly maintenance and ongoing local SEO for a Gorge cidery.',
		tags: ['Standard Maintenance Plan', 'SEO'],
	},
]
