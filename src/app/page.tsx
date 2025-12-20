// app/page.tsx
import { Metadata } from 'next'
import HomeClient from './home-client'

// Оптимизированные метаданные для главной страницы
export const metadata: Metadata = {
	title:
		'АТМ Дока - Ремонт и настройка POS-терминалов | Руководства по Эвотор, Pax, Ingenico',
	description:
		'Бесплатные руководства по ремонту, настройке и прошивке POS-терминалов Эвотор, Pax, Ingenico, VeriFone, Kozen, Castles, Tactilion. Скачать драйверы, прошивки, инструкции.',
	keywords:
		'ремонт pos терминалов, настройка терминалов, прошивка эвотор, руководство pax, инструкция ingenico, документация verifone, мануалы kozen',
	openGraph: {
		title: 'АТМ Дока - Ремонт и настройка POS-терминалов',
		description: 'Полные руководства по ремонту терминалов всех брендов',
		type: 'website',
		url: 'https://atm-doka.vercel.app',
		siteName: 'АТМ Дока',
		images: [
			{
				url: '/opengraph-image.png', // Рекомендую создать отдельное OG изображение для главной
				width: 1200,
				height: 630,
				alt: 'АТМ Дока - Руководства по POS-терминалам'
			}
		],
		locale: 'ru_RU'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'АТМ Дока - Ремонт и настройка POS-терминалов',
		description: 'Полные руководства по ремонту терминалов всех брендов',
		images: ['/opengraph-image.png']
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	alternates: {
		canonical: 'https://atm-doka.vercel.app'
	}
}

// Структурированные данные для главной страницы
const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'АТМ Дока',
	alternateName: 'ATM Doka',
	url: 'https://atm-doka.vercel.app',
	description:
		'Бесплатные руководства по ремонту, настройке и прошивке POS-терминалов',
	potentialAction: {
		'@type': 'SearchAction',
		target: 'https://atm-doka.vercel.app/search?q={search_term_string}',
		'query-input': 'required name=search_term_string'
	}
}

export default function Home() {
	return (
		<>
			{/* Добавляем структурированные данные */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			{/* H1 для SEO (визуально скрыт) */}
			<h1 className='sr-only'>
				АТМ Дока - Руководства по ремонту и настройке POS-терминалов Эвотор,
				Pax, Ingenico, VeriFone, Kozen, Castles, Tactilion
			</h1>
			<HomeClient />
		</>
	)
}
