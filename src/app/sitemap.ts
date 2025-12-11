import { MetadataRoute } from 'next'

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
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'weekly',
			priority: 0.8
		}
	]
}
