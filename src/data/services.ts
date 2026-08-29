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
	description: string
	features: string[]
}

export const services: Service[] = [
	{
		slug: 'redesign',
		name: 'Website Redesign',
		summary: 'Modernizing or rebuilding a site you already have.',
		priceLabel: 'Starting at $800',
		details: [
			"Keep what works, fix what doesn't",
			'Improved speed and mobile experience',
		],
	},
	{
		slug: 'new-build',
		name: 'New Website Build',
		summary: 'A custom site built from scratch, scoped to your business.',
		priceLabel: 'Starting at $1,200',
		details: [
			'Custom design, not a template',
			'Mobile-first and fast',
			'Scoped and quoted per project',
		],
	},
	{
		slug: 'one-off-updates',
		name: 'One-off Updates',
		summary:
			'For businesses without a maintenance plan who need something changed.',
		priceLabel: '$35-50/hr, 1-hour minimum',
	},
	{
		slug: 'seo',
		name: 'SEO',
		summary: 'Local search visibility for Google and Maps.',
		priceLabel: 'Quoted per project',
		details: [
			'Metadata and schema markup',
			'Google Search Console setup',
			'Local/Maps visibility',
		],
	},
]

export const maintenanceTiers: MaintenanceTier[] = [
	{
		name: 'Basic',
		priceLabel: '$50/mo',
		description:
			'Keep the site running and secure, with room for small changes.',
		features: [
			'Hosting & security monitoring',
			'Minor text/photo updates',
			'1 hour included per month',
		],
	},
	{
		name: 'Standard',
		priceLabel: '$100/mo',
		description:
			'Everything in Basic, with more frequent updates and faster turnaround.',
		features: [
			'Everything in Basic',
			'More frequent updates',
			'Small feature additions',
			'Faster turnaround',
		],
	},
	{
		name: 'Growth',
		priceLabel: 'Custom quote',
		description:
			'For sites with e-commerce, online ordering, or booking systems.',
		features: [
			'Everything in Standard',
			'E-commerce/online ordering support',
			'Booking system support',
		],
	},
]

export const addOns: string[] = [
	'Domain & hosting management',
	'Online ordering / e-commerce setup',
	'Tasting-room booking & reservation systems',
	'Copywriting support',
]
