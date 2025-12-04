import { v4 } from 'uuid'
import { create } from 'zustand'
import { JSX } from 'react'
import { ScanFace } from 'lucide-react'
import Evotor5iContent from '@/components/content/evotor5i/evotor5i'
import Evotor72Content from '@/components/content/evotor72/evotor72'
import Evotor73Content from '@/components/content/evotor73/evotor73'
import Evotor10Content from '@/components/content/evotor10/evotor10'
import Evotor6Content from '@/components/content/evotor6/evotor6'
import KozenP10Content from '@/components/content/kozen-p10/kozen-p10'
import KozenP12Content from '@/components/content/kozen-p12/kozen-p12'
import PaxS80Content from '@/components/content/pax-s80/pax-s80'
import PaxS90Content from '@/components/content/pax-s90/pax-s90'
import PaxSP30Content from '@/components/content/pax-sp30/pax-sp30'
import PaxS300Content from '@/components/content/pax-s300/pax-s300'
import PaxS200Content from '@/components/content/pax-s200/pax-s200'
import PaxQ25Content from '@/components/content/pax-q25/pax-q25'
import PaxD230Content from '@/components/content/pax-d230/pax-d230'
import PaxD230MobContent from '@/components/content/pax-d230-mob/pax-d230-mob'
import VerifoneVx520Content from '@/components/content/verifone-vx520/verifone-vx520'
import VerifoneVx820Content from '@/components/content/verifone-vx820/verifone-vx820'
import IngenicoICT220Content from '@/components/content/ingenico-ict220/ingenico-ict220'
import IngenicoIPP320Content from '@/components/content/ingenico-ipp320/ingenico-ipp320'
import IngenicoIWL220Content from '@/components/content/ingenico-iwl220/ingenico-iwl220'
import TactilionT2Content from '@/components/content/tactilion-t2/tactilion-t2'
import TactilionG3Content from '@/components/content/tactilion-g3/tactilion-g3'
import CastlesVega3000Content from '@/components/content/castles-vega3000-st/castles-vega3000-st'
import CastlesVega3000MobContent from '@/components/content/castles-vega3000-mob/castles-vega3000-mob'
import CastlesVega3000IkrContent from '@/components/content/castles-vega3000-ikr/castles-vega3000-ikr'
import Aqsi5fContent from '@/components/content/aqsi-5ф/aqsi-5ф'

type contentItem = {
	title: string
	children?: string[]
}

export type Post = {
	id: string
	url: string
	author: string
	title: string
	description: string
	image: string
	bgColor: string
	content: React.ComponentType<{ className?: string }>
	updatedAt: string
	tags: string[]
	contentItems: contentItem[]
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
	activeTags: string[]
	setActiveTags: (tags: string[]) => void
	toggleTag: (tagTitle: string) => void
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
			title: 'Эвотор 5i',
			description: 'Руководство по прошивке',
			image: '/content/evotor5i/image/evo5i.png',
			bgColor: '#f15024',
			updatedAt: '1 августа 2025',
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: Evotor5iContent,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'evotor72',
			author: 'Сергей Кравченко',
			title: 'Эвотор 7.2',
			description: 'Руководство по прошивке',
			image: '/content/evotor72/image/evo72.png',
			bgColor: '#f15024',

			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: Evotor72Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'evotor73',
			author: 'Сергей Кравченко',
			title: 'Эвотор 7.3',
			description: 'Руководство по прошивке',
			image: '/content/evotor73/image/evo73.png',
			bgColor: '#f15024',

			updatedAt: '23 июня 2025',
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: Evotor73Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{
					title: 'На практике',
					children: ['Как избежать ГЗ', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'evotor10',
			author: 'Сергей Кравченко',
			title: 'Эвотор 10',
			description: 'Руководство по прошивке',
			image: '/content/evotor10/image/evo10.png',
			bgColor: '#f15024',

			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: Evotor10Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'evotor6',
			author: 'Сергей Кравченко',
			title: 'Эвотор 6',
			description: 'Руководство по прошивке',
			image: '/content/evotor6/image/evo6.png',
			bgColor: '#f15024',

			updatedAt: '15 ноября 2025',
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: Evotor6Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: [
						'Что понадобится?',
						'Процесс прошивки',
						'Как добавить eSIM?'
					]
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'kozen-p10',
			author: 'Сергей Кравченко',
			title: 'Kozen P10',
			description: 'Руководство по прошивке',
			image: '/content/kozen-p10/image/p10.png',
			bgColor: '#DC2626',
			updatedAt: '15 ноября 2025',
			tags: ['Сбер', 'Kozen', 'Прошивка'],
			content: KozenP10Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'kozen-p12',
			author: 'Сергей Кравченко',
			title: 'Kozen P12',
			description: 'Руководство по прошивке',
			image: '/content/kozen-p12/image/p12.png',
			bgColor: '#DC2626',
			updatedAt: '15 ноября 2025',
			tags: ['Сбер', 'Kozen', 'Прошивка'],
			content: KozenP12Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-s80',
			author: 'Сергей Кравченко',
			title: 'Pax S80',
			description: 'Руководство по прошивке и дефектовке',
			image: '/content/pax-s80/image/s80.png',
			bgColor: '#08a4e1',
			updatedAt: '21 июня 2025',
			tags: ['Сбер', 'Pax', 'Прошивка', 'Дефектовка'],
			content: PaxS80Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{
					title: 'Дефектовка',
					children: [
						'Внешний вид',
						'Включение',
						'Магнитный ридер',
						'Чиповый ридер',
						'Бесконтактный ридер',
						'Клавиатура',
						'GPRS',
						'Ethernet'
					]
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-s90',
			author: 'Сергей Кравченко',
			title: 'Pax S90',
			description: 'Руководство по прошивке и дефектовке',
			image: '/content/pax-s90/image/s90.png',
			bgColor: '#08a4e1',
			updatedAt: '21 июня 2025',
			tags: ['Сбер', 'Pax', 'Прошивка', 'Дефектовка'],
			content: PaxS90Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{
					title: 'Дефектовка',
					children: [
						'Внешний вид',
						'Включение',
						'Магнитный ридер',
						'Чиповый ридер',
						'Бесконтактный ридер',
						'Клавиатура',
						'GPRS',
						'Ethernet'
					]
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-sp30',
			author: 'Сергей Кравченко',
			title: 'Pax SP30',
			description: 'Руководство по прошивке',
			image: '/content/pax-sp30/image/sp30.png',
			bgColor: '#08a4e1',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Pax', 'Прошивка'],
			content: PaxSP30Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-s300',
			author: 'Сергей Кравченко',
			title: 'Pax S300',
			description: 'Руководство по прошивке',
			image: '/content/pax-s300/image/s300.png',
			bgColor: '#08a4e1',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Pax', 'Прошивка'],
			content: PaxS300Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-s200',
			author: 'Сергей Кравченко',
			title: 'Pax S200',
			description: 'Руководство по прошивке',
			image: '/content/pax-s200/image/s200.png',
			bgColor: '#08a4e1',
			updatedAt: '29 июня 2025',
			tags: ['Сбер', 'Pax', 'Прошивка'],
			content: PaxS200Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-q25',
			author: 'Сергей Кравченко',
			title: 'Pax Q25',
			description: 'Руководство по прошивке',
			image: '/content/pax-q25/image/q25.png',
			bgColor: '#08a4e1',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Pax', 'Прошивка'],
			content: PaxQ25Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-d230',
			author: 'Сергей Кравченко',
			title: 'Pax D230',
			description: 'Руководство по прошивке',
			image: '/content/pax-d230/image/pax-d230.png',
			bgColor: '#08a4e1',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Pax', 'Прошивка'],
			content: PaxD230Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'pax-d230-mob',
			author: 'Сергей Кравченко',
			title: 'Pax D230 mob',
			description: 'Руководство по прошивке',
			image: '/content/pax-d230-mob/image/pax-d230-mob.png',
			bgColor: '#08a4e1',

			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Pax', 'Прошивка'],
			content: PaxD230MobContent,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'verifone-vx520',
			author: 'Сергей Кравченко',
			title: 'VeriFone VX520',
			description: 'Руководство по прошивке и дефектовке',
			image: '/content/verifone-vx520/image/vx520.png',
			bgColor: '#6effd2',
			updatedAt: '15 ноября 2025',
			tags: ['Сбер', 'VeriFone', 'Прошивка', 'Дефектовка'],
			content: VerifoneVx520Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{
					title: 'Дефектовка',
					children: [
						'Магнитный ридер',
						'Смарт-ридер',
						'Модуль STLS',
						'Клавиатура',
						'Принтер',
						'GPRS',
						'Ethernet'
					]
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'verifone-vx820',
			author: 'Сергей Кравченко',
			title: 'VeriFone VX820',
			description: 'Руководство по прошивке',
			image: '/content/verifone-vx820/image/vx820.png',
			bgColor: '#6effd2',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'VeriFone', 'Прошивка'],
			content: VerifoneVx820Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'ingenico-ict220-ict250',
			author: 'Сергей Кравченко',
			title: 'Ingenico ICT220-ICT250',
			description: 'Руководство по прошивке',
			image: '/content/ingenico-ict220-ict250/image/ict220.png',
			bgColor: '#41e747',
			updatedAt: '15 ноября 2025',
			tags: ['Сбер', 'Ingenico', 'Прошивка'],
			content: IngenicoICT220Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'ingenico-ipp320-ipp350',
			author: 'Сергей Кравченко',
			title: 'Ingenico IPP320-IPP350',
			description: 'Руководство по прошивке',
			image: '/content/ingenico-ipp320-ipp350/image/ipp320.png',
			bgColor: '#41e747',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Ingenico', 'Прошивка'],
			content: IngenicoIPP320Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'ingenico-iwl220-iwl250',
			author: 'Сергей Кравченко',
			title: 'Ingenico IWL220-IWL250',
			description: 'Руководство по прошивке',
			image: '/content/ingenico-iwl220-iwl250/image/iwl220.png',
			bgColor: '#41e747',
			updatedAt: '29 мая 2025',
			tags: ['Сбер', 'Ingenico', 'Прошивка'],
			content: IngenicoIWL220Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'tactilion-t2',
			author: 'Сергей Кравченко',
			title: 'Tactilion T2',
			description: 'Руководство по прошивке',
			image: '/content/tactilion-t2/image/t2.png',
			bgColor: '#ffd829',
			updatedAt: '15 ноября 2025',
			tags: ['Сбер', 'Tactilion', 'Прошивка'],
			content: TactilionT2Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'tactilion-g3',
			author: 'Сергей Кравченко',
			title: 'Tactilion G3',
			description: 'Руководство по прошивке',
			image: '/content/tactilion-g3/image/g3.png',
			bgColor: '#ffd829',
			updatedAt: '21 июня 2025',
			tags: ['Сбер', 'Tactilion', 'Прошивка'],
			content: TactilionG3Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'castles-vega3000',
			author: 'Сергей Кравченко',
			title: 'Castles Vega3000 стац',
			description: 'Руководство по прошивке',
			image: '/content/castles-vega3000/image/v3st.png',
			bgColor: '#704ecc',
			updatedAt: '30 июня 2025',
			tags: ['Сбер', 'Castles', 'Прошивка'],
			content: CastlesVega3000Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{
					title: 'Дефектовка',
					children: [
						'Внешний вид',
						'Включение',
						'Магнитный ридер',
						'Чиповый ридер',
						'Бесконтактный ридер',
						'Принтер',
						'Клавиатура и динамик',
						'LCD',
						'Светодиоды',
						'USB',
						'GPRS',
						'Чтение sim',
						'WI-FI',
						'Ethernet'
					]
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'castles-vega3000-mob',
			author: 'Сергей Кравченко',
			title: 'Castles Vega3000 моб',
			description: 'Руководство по прошивке',
			image: '/content/castles-vega3000-mob/image/v3mob.png',
			bgColor: '#704ecc',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Castles', 'Прошивка'],
			content: CastlesVega3000MobContent,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'castles-vega3000-ikr',
			author: 'Сергей Кравченко',
			title: 'Castles Vega3000 ИКР',
			description: 'Руководство по прошивке',
			image: '/content/castles-vega3000-ikr/image/v3ikr.png',
			bgColor: '#704ecc',
			updatedAt: '24 мая 2025',
			tags: ['Сбер', 'Castles', 'Прошивка'],
			content: CastlesVega3000IkrContent,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{ title: 'Читайте также' }
			]
		},
		{
			id: v4(),
			url: 'aqsi5-f',
			author: 'Сергей Кравченко',
			title: 'AQSI5-Ф',
			description: '',
			image: '/content/aqsi5-f/image/aqsi5f.png',
			bgColor: '#0dd72d',
			updatedAt: '29 ноября 2025',
			tags: ['Сбер', 'Aqsi'],
			content: Aqsi5fContent,
			contentItems: []
		}
	],
	bgHeader: '#fafafa',
	changeBgHeader: (bgHeader: string) => {
		set(() => ({ bgHeader }))
		return { bgHeader }
	},
	activeTags: [],

	toggleTag: (tagTitle: string) => {
		set((state) => {
			const isActive = state.activeTags.includes(tagTitle)
			if (isActive) {
				return {
					activeTags: state.activeTags.filter((tag) => tag !== tagTitle)
				}
			} else {
				return {
					activeTags: [...state.activeTags, tagTitle]
				}
			}
		})
	},

	clearTags: () => {
		set({ activeTags: [] })
	},

	setActiveTags: (tags: string[]) => {
		set({ activeTags: tags })
	}
}))
