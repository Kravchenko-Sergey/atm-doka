import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/'
		},
		sitemap: 'https://atm-doka.vercel.app/sitemap.xml',
		host: 'https://atm-doka.vercel.app'
	}
}
