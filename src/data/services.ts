export type Service = {
	slug: string
	name: string
	summary: string
	priceLabel: string
	details?: string[]
}

export type MaintenanceTier = {
	name: string
	priceLabel: string
	/** One line naming who the tier suits, so people can self-select quickly. */
	bestFor: string
	description: string
	features: string[]
}

export const services: Service[] = [
	{
		slug: 'starter-site',
		name: 'Starter Site',
		summary:
			'A single page with everything someone needs to find you and trust you.',
		priceLabel: '$450 flat',
		details: [
			'One page, built to load fast on phones',
			'Hours, contact details, and a map',
			'Google Business Profile set up',
			'Usually live within a week',
		],
	},
	{
		slug: 'redesign',
		name: 'Website Redesign',
		summary: 'Modernizing or rebuilding a site you already have.',
		priceLabel: 'Starting at $650',
		details: [
			"Keep what works, fix what doesn't",
			'Improved speed and mobile experience',
		],
	},
	{
		slug: 'new-build',
		name: 'New Website Build',
		summary: 'A custom site built from scratch, scoped to your business.',
		priceLabel: 'Starting at $900',
		details: [
			'Custom design, not a template',
			'Mobile-first and fast',
			'Scoped and quoted per project',
		],
	},
	{
		slug: 'seo',
		name: 'SEO',
		summary: 'Showing up when people search for you on Google and Apple Maps.',
		priceLabel: 'Starting at $250',
		details: [
			'Page titles and descriptions that read well in search',
			'Business details Google can actually read',
			'Search Console set up so you can see what is working',
		],
	},
	{
		slug: 'one-off-updates',
		name: 'One-off Updates',
		summary:
			'For businesses without a maintenance plan that need a quick change.',
		priceLabel: '$40/hr, 30-minute minimum',
	},
]

export const maintenanceTiers: MaintenanceTier[] = [
	{
		name: 'Essentials',
		priceLabel: '$10/mo',
		bestFor: 'A site that rarely changes',
		description:
			'The basics, handled. Your site stays online, secure, and backed up, and you never think about it.',
		features: [
			'Hosting and SSL certificate',
			'Security patches and uptime monitoring',
			'Monthly backups',
			'Changes billed at $40/hr',
		],
	},
	{
		name: 'Basic',
		priceLabel: '$25/mo',
		bestFor: 'Occasional changes to hours or photos',
		description:
			'Everything in Essentials, plus a couple of small updates each month without reaching for your wallet.',
		features: [
			'Everything in Essentials',
			'Up to 2 small updates per month',
			'30 minutes of changes included',
			'A reply within one business day',
		],
	},
	{
		name: 'Standard',
		priceLabel: '$50/mo',
		bestFor: 'Details that change week to week',
		description:
			'Everything in Basic, with weekly updates and faster turnaround. This is the one most businesses land on.',
		features: [
			'Everything in Basic',
			'Weekly updates: hours, events, menus, specials',
			'1 hour of changes included per month',
			'Same-day replies on weekdays',
		],
	},
	{
		name: 'Growth',
		priceLabel: 'Custom quote',
		bestFor: 'Selling or taking bookings online',
		description:
			'Everything in Standard, plus the moving parts that come with taking orders and reservations.',
		features: [
			'Everything in Standard',
			'Online ordering and e-commerce support',
			'Booking and reservation systems',
			'Included hours scoped to fit',
		],
	},
]

export const addOns: string[] = [
	'Domain & hosting management',
	'Online ordering / e-commerce setup',
	'Booking & reservation systems',
	'Copywriting support',
]
