// app/sitemap.ts
import { MetadataRoute } from 'next'

// Конфигурация брендов
const BRAND_CONFIG = {
	evotor: {
		name: 'Evotor',
		displayName: 'Эвотор',
		color: '#f15024'
	},
	pax: {
		name: 'Pax',
		displayName: 'Pax',
		color: '#08a4e1'
	},
	ingenico: {
		name: 'Ingenico',
		displayName: 'Ingenico',
		color: '#41e747'
	},
	verifone: {
		name: 'VeriFone',
		displayName: 'VeriFone',
		color: '#6effd2'
	},
	kozen: {
		name: 'Kozen',
		displayName: 'Kozen',
		color: '#DC2626'
	},
	castles: {
		name: 'Castles',
		displayName: 'Castles',
		color: '#704ecc'
	},
	tactilion: {
		name: 'Tactilion',
		displayName: 'Tactilion',
		color: '#ffd829'
	}
} as const

// Массив устройств с их URL slug'ами
const devices = [
	{ brand: 'evotor', modelSlug: 'evotor5i', updatedAt: '2025-08-01' },
	{ brand: 'evotor', modelSlug: 'evotor72', updatedAt: '2025-05-24' },
	{ brand: 'evotor', modelSlug: 'evotor73', updatedAt: '2025-06-23' },
	{ brand: 'evotor', modelSlug: 'evotor10', updatedAt: '2025-05-24' },
	{ brand: 'evotor', modelSlug: 'evotor6', updatedAt: '2025-11-15' },
	{ brand: 'kozen', modelSlug: 'kozen-p10', updatedAt: '2025-11-15' },
	{ brand: 'kozen', modelSlug: 'kozen-p12', updatedAt: '2025-11-15' },
	{ brand: 'pax', modelSlug: 'pax-s80', updatedAt: '2025-06-21' },
	{ brand: 'pax', modelSlug: 'pax-s90', updatedAt: '2025-06-21' },
	{ brand: 'pax', modelSlug: 'pax-sp30', updatedAt: '2025-05-24' },
	{ brand: 'pax', modelSlug: 'pax-s300', updatedAt: '2025-05-24' },
	{ brand: 'pax', modelSlug: 'pax-s200', updatedAt: '2025-06-29' },
	{ brand: 'pax', modelSlug: 'pax-q25', updatedAt: '2025-05-24' },
	{ brand: 'pax', modelSlug: 'pax-d230', updatedAt: '2025-05-24' },
	{ brand: 'pax', modelSlug: 'pax-d230-mob', updatedAt: '2025-05-24' },
	{ brand: 'verifone', modelSlug: 'verifone-vx520', updatedAt: '2025-11-15' },
	{ brand: 'verifone', modelSlug: 'verifone-vx820', updatedAt: '2025-05-24' },
	{
		brand: 'ingenico',
		modelSlug: 'ingenico-ict220-ict250',
		updatedAt: '2025-11-15'
	},
	{
		brand: 'ingenico',
		modelSlug: 'ingenico-ipp320-ipp350',
		updatedAt: '2025-05-24'
	},
	{
		brand: 'ingenico',
		modelSlug: 'ingenico-iwl220-iwl250',
		updatedAt: '2025-05-29'
	},
	{ brand: 'tactilion', modelSlug: 'tactilion-t2', updatedAt: '2025-11-15' },
	{ brand: 'tactilion', modelSlug: 'tactilion-g3', updatedAt: '2025-06-21' },
	{ brand: 'castles', modelSlug: 'castles-vega3000', updatedAt: '2025-06-30' },
	{
		brand: 'castles',
		modelSlug: 'castles-vega3000-mob',
		updatedAt: '2025-05-24'
	},
	{
		brand: 'castles',
		modelSlug: 'castles-vega3000-ikr',
		updatedAt: '2025-05-24'
	},
	{ brand: 'aqsi5-f', modelSlug: 'aqsi5-f', updatedAt: '2025-11-29' }
] as const

// Получаем уникальные бренды из устройств
const uniqueBrands = Array.from(
	new Set(devices.map((device) => device.brand))
).filter((brand) => brand in BRAND_CONFIG) // Фильтруем только существующие бренды

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://atm-doka.vercel.app'
	const currentDate = new Date().toISOString().split('T')[0]

	// Основные статические страницы
	const staticPages = [
		{
			url: `${baseUrl}/`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 1.0
		},
		{
			url: `${baseUrl}/about`,
			lastModified: '2025-05-24',
			changeFrequency: 'weekly' as const,
			priority: 0.8
		}
	]

	// Страницы брендов
	const brandPages = uniqueBrands.map((brand) => ({
		url: `${baseUrl}/devices/${brand}`,
		lastModified: currentDate,
		changeFrequency: 'weekly' as const,
		priority: 0.9
	}))

	// Страницы устройств
	const devicePages = devices.map((device) => ({
		url: `${baseUrl}/devices/${device.brand}/${device.modelSlug}`,
		lastModified: device.updatedAt,
		changeFrequency: 'weekly' as const,
		priority: 0.8
	}))

	// Объединяем все страницы
	return [...staticPages, ...brandPages, ...devicePages]
}
