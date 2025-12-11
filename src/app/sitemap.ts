// app/sitemap.ts
import { MetadataRoute } from 'next'

// Копируем массив posts (временно, для sitemap)
// В будущем: вынести в отдельный файл, например: `/data/posts.ts`
const posts = [
	{ url: 'evotor5i', updatedAt: '2025-08-01' },
	{ url: 'evotor72', updatedAt: '2025-05-24' },
	{ url: 'evotor73', updatedAt: '2025-06-23' },
	{ url: 'evotor10', updatedAt: '2025-05-24' },
	{ url: 'evotor6', updatedAt: '2025-11-15' },
	{ url: 'kozen-p10', updatedAt: '2025-11-15' },
	{ url: 'kozen-p12', updatedAt: '2025-11-15' },
	{ url: 'pax-s80', updatedAt: '2025-06-21' },
	{ url: 'pax-s90', updatedAt: '2025-06-21' },
	{ url: 'pax-sp30', updatedAt: '2025-05-24' },
	{ url: 'pax-s300', updatedAt: '2025-05-24' },
	{ url: 'pax-s200', updatedAt: '2025-06-29' },
	{ url: 'pax-q25', updatedAt: '2025-05-24' },
	{ url: 'pax-d230', updatedAt: '2025-05-24' },
	{ url: 'pax-d230-mob', updatedAt: '2025-05-24' },
	{ url: 'verifone-vx520', updatedAt: '2025-11-15' },
	{ url: 'verifone-vx820', updatedAt: '2025-05-24' },
	{ url: 'ingenico-ict220-ict250', updatedAt: '2025-11-15' },
	{ url: 'ingenico-ipp320-ipp350', updatedAt: '2025-05-24' },
	{ url: 'ingenico-iwl220-iwl250', updatedAt: '2025-05-29' },
	{ url: 'tactilion-t2', updatedAt: '2025-11-15' },
	{ url: 'tactilion-g3', updatedAt: '2025-06-21' },
	{ url: 'castles-vega3000', updatedAt: '2025-06-30' },
	{ url: 'castles-vega3000-mob', updatedAt: '2025-05-24' },
	{ url: 'castles-vega3000-ikr', updatedAt: '2025-05-24' },
	{ url: 'aqsi5-f', updatedAt: '2025-11-29' }
] as const

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://atm-doka.vercel.app',
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'weekly',
			priority: 1.0
		},
		{
			url: 'https://atm-doka.vercel.app/about',
			lastModified: '2025-05-24',
			changeFrequency: 'weekly',
			priority: 0.8
		},
		...posts.map((post) => ({
			url: `https://atm-doka.vercel.app/posts/${post.url}`,
			lastModified: post.updatedAt,
			changeFrequency: 'weekly' as const,
			priority: 0.9
		}))
	]
}
