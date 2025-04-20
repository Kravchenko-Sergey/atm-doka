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

type Tag = {
	id: string
	title: string
	isActive: boolean
}

type RootState = {
	posts: Post[]
	people: Person[]
	tags: Tag[]
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также']
		},
		{
			id: v4(),
			url: 'evotor72',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 7.2?',
			description: 'Руководство по прошивке Evotor 7.2',
			image: '/evo72.png',
			bgColor: '#f15024',
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также']
		},
		{
			id: v4(),
			url: 'evotor73',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 7.3?',
			description: 'Руководство по прошивке Evotor 7.3',
			image: '/evo73.png',
			bgColor: '#f15024',
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также']
		},
		{
			id: v4(),
			url: 'evotor10',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 10?',
			description: 'Руководство по прошивке Evotor 10',
			image: '/evo10.png',
			bgColor: '#f15024',
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также']
		},
		{
			id: v4(),
			url: 'evotor6',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 6?',
			description: 'Руководство по прошивке Evotor 6',
			image: '/evo6.png',
			bgColor: '#f15024',
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Kozen', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Kozen', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#VeriFone', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#VeriFone', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Tactilion', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
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
			linkToEdit: '',
			updatedAt: '13 апреля 2025',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			]
		}
	],
	tags: [
		{ id: v4(), title: '#Сбер', isActive: false },
		{ id: v4(), title: '#Эвотор', isActive: false },
		{ id: v4(), title: '#Прошивка', isActive: false },
		{ id: v4(), title: '#Pax', isActive: false }
	],
	bgHeader: 'white',
	changeBgHeader: (bgHeader: string) => {
		set(() => ({ bgHeader }))
		return { bgHeader }
	}
}))
