import type { ImageMetadata } from 'astro'
import { tinyGroveApp } from './tiny-grove'
import tinyGroveCover from '../assets/tiny-grove/feature-graphic.png'

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
	/** A live site, or a path on this site (starting with '/') for work that
	 * has its own page here. Internal links open in the same tab. */
	url: string
	/** Defaults to 'Visit site'. */
	linkLabel?: string
	description: string
	tags: string[]
	/** Optional image for a card without a case study. Shown at 16:10, cropped
	 * from the center. */
	cover?: { image: ImageMetadata; alt: string }
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
	{
		slug: 'crush-cider-cafe',
		name: 'Crush Cider Cafe',
		url: 'https://crushcider.com',
		description:
			'Monthly maintenance and ongoing local SEO for a Gorge cidery.',
		tags: ['Standard Maintenance Plan', 'SEO'],
	},
]

// Apps get their own section on the portfolio page, below the websites. They
// stay off the homepage, which is only about websites for local businesses.
export const apps: PortfolioEntry[] = [
	{
		slug: 'tiny-grove',
		name: tinyGroveApp.name,
		url: tinyGroveApp.path,
		linkLabel: 'See the app',
		description: tinyGroveApp.launched
			? 'A gentle medication tracker for iPhone and Android, designed and built start to finish. Every dose grows a watercolor garden, and your records stay on your phone.'
			: 'A gentle medication tracker for iPhone and Android, designed and built start to finish and coming soon to both app stores. Every dose grows a watercolor garden, and your records stay on your phone.',
		tags: ['iPhone', 'Android', 'Design and development'],
		cover: {
			image: tinyGroveCover,
			alt: 'The Tiny Grove app icon and name over a watercolor garden',
		},
	},
]
