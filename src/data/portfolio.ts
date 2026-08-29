export type PortfolioEntry = {
	slug: string
	name: string
	url: string
	description: string
	tags: string[]
}

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
