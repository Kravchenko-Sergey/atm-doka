import { v4 } from 'uuid'
import { create } from 'zustand'
import { JSX } from 'react'
import { ScanFace } from 'lucide-react'

export type Post = {
	id: string
	url: string
	author: string
	title: string
	description: string
	image: string
	bgColor: string
	linkToEdit: string
	updatedAt: string
	tags: string[]
	contentItems: string[]
}

type Person = {
	id: string
	avatar: JSX.Element
	name: string
	description: string
}

type RootState = {
	posts: Post[]
	people: Person[]
	bgHeader: string
	changeBgHeader: (bgHeader: string) => { bgHeader: string }
}

export const useRootStore = create<RootState>((set) => ({
	people: [
		{
			id: v4(),
			avatar: <ScanFace className='w-16 h-16' />,
			name: 'Сергей Кравченко',
			description: 'Не знал где скачать прошивку. Поэтому создал доку'
		}
	],
	posts: [
		{
			id: v4(),
			url: 'evotor5i',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 5i?',
			description: 'Руководство по прошивке Evotor 5i',
			image: '/evo5i.png',
			bgColor: '#f15024',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/evotor5i/index.md',
			updatedAt: '19 июня 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'evotor72',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 7.2?',
			description: 'Руководство по прошивке Evotor 7.2',
			image: '/evo72.png',
			bgColor: '#f15024',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/evotor72/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'evotor73',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 7.3?',
			description: 'Руководство по прошивке Evotor 7.3',
			image: '/evo73.png',
			bgColor: '#f15024',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/evotor73/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'evotor10',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 10?',
			description: 'Руководство по прошивке Evotor 10',
			image: '/evo10.png',
			bgColor: '#f15024',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/evotor10/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'evotor6',
			author: 'Сергей Кравченко',
			title: 'Эвотор 6',
			description: 'Руководство по прошивке, настройке и эксплуатации',
			image: '/evo6.png',
			bgColor: '#f15024',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/evotor6/index.md',
			updatedAt: '19 июня 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Как добавить eSIM?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'kozen-p10',
			author: 'Сергей Кравченко',
			title: 'Как прошить Kozen P10?',
			description: 'Руководство по прошивке Kozen P10',
			image: '/p10.png',
			bgColor: '#C0C0C0',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/kozen-p10/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Kozen', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'kozen-p12',
			author: 'Сергей Кравченко',
			title: 'Как прошить Kozen P12?',
			description: 'Руководство по прошивке Kozen P12',
			image: '/p12.png',
			bgColor: '#C0C0C0',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/kozen-p12/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Kozen', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-s80',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S80?',
			description: 'Руководство по прошивке Pax S80',
			image: '/s80.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-s80/index.md',
			updatedAt: '25 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка', '#Дефектовка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Дефектовка',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-s90',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S90?',
			description: 'Руководство по прошивке Pax S90',
			image: '/s90.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-s90/index.md',
			updatedAt: '25 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка', '#Дефектовка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Дефектовка',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-sp30',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax SP30?',
			description: 'Руководство по прошивке Pax SP30',
			image: '/sp30.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-sp30/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-s300',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S300?',
			description: 'Руководство по прошивке Pax S300',
			image: '/s300.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-s300/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-s200',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S200?',
			description: 'Руководство по прошивке Pax S200',
			image: '/s200.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-s200/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-q25',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax Q25?',
			description: 'Руководство по прошивке Pax Q25',
			image: '/q25.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-q25/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-d230',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax D230?',
			description: 'Руководство по прошивке Pax D230',
			image: '/pax-d230.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-d230/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'pax-d230-mob',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax D230 mob?',
			description: 'Руководство по прошивке Pax D230 mob',
			image: '/pax-d230-mob.png',
			bgColor: '#08a4e1',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/pax-d230-mob/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'verifone-vx520',
			author: 'Сергей Кравченко',
			title: 'Как прошить VeriFone VX520?',
			description: 'Руководство по прошивке VeriFone VX520',
			image: '/vx520.png',
			bgColor: '#6effd2',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/verifone-vx520/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#VeriFone', '#Прошивка', '#Дефектовка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Дефектовка',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'verifone-vx820',
			author: 'Сергей Кравченко',
			title: 'Как прошить VeriFone VX820?',
			description: 'Руководство по прошивке VeriFone VX820',
			image: '/vx820.png',
			bgColor: '#6effd2',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/verifone-vx820/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#VeriFone', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'ingenico-ict220-ict250',
			author: 'Сергей Кравченко',
			title: 'Как прошить Ingenico ICT220-ICT250?',
			description: 'Руководство по прошивке Ingenico ICT220-ICT250',
			image: '/ict220.png',
			bgColor: '#41e747',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/ingenico-ict220-ict250/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'ingenico-ipp320-ipp350',
			author: 'Сергей Кравченко',
			title: 'Как прошить Ingenico IPP320-IPP350?',
			description: 'Руководство по прошивке Ingenico IPP320-IPP350',
			image: '/ipp320.png',
			bgColor: '#41e747',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/ingenico-ipp320-ipp350/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'ingenico-iwl320-iwl350',
			author: 'Сергей Кравченко',
			title: 'Как прошить Ingenico IWL220-IWL250?',
			description: 'Руководство по прошивке Ingenico IWL220-IWL250',
			image: '/iwl220.png',
			bgColor: '#41e747',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/ingenico-iwl320-iwl350/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'tactilion-t2',
			author: 'Сергей Кравченко',
			title: 'Как прошить Tactilion T2?',
			description: 'Руководство по прошивке Tactilion T2',
			image: '/t2.png',
			bgColor: '#ffd829',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/tactilion-t2/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Tactilion', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'tactilion-g3',
			author: 'Сергей Кравченко',
			title: 'Как прошить Tactilion G3?',
			description: 'Руководство по прошивке Tactilion G3',
			image: '/g3.png',
			bgColor: '#ffd829',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/tactilion-g3/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Tactilion', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'castles-vega3000',
			author: 'Сергей Кравченко',
			title: 'Как прошить Castles Vega3000 стац?',
			description: 'Руководство по прошивке Castles Vega3000 стац',
			image: '/v3st.png',
			bgColor: '#704ecc',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/castles-vega3000/index.md',
			updatedAt: '29 мая 2025',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'castles-vega3000-mob',
			author: 'Сергей Кравченко',
			title: 'Как прошить Castles Vega3000 моб?',
			description: 'Руководство по прошивке Castles Vega3000 моб',
			image: '/v3mob.png',
			bgColor: '#704ecc',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/castles-vega3000-mob/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		},
		{
			id: v4(),
			url: 'castles-vega3000-ikr',
			author: 'Сергей Кравченко',
			title: 'Как прошить Castles Vega3000 ИКР?',
			description: 'Руководство по прошивке Castles Vega3000 ИКР',
			image: '/v3ikr.png',
			bgColor: '#704ecc',
			linkToEdit:
				'https://github.com/Kravchenko-Sergey/atm-doka/blob/main/public/content/castles-vega3000-ikr/index.md',
			updatedAt: '24 мая 2025',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Актуальные версии',
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		}
	],
	bgHeader: 'white',
	changeBgHeader: (bgHeader: string) => {
		set(() => ({ bgHeader }))
		return { bgHeader }
	}
}))
