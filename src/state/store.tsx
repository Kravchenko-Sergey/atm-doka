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

type ContentItem = {
	title: string
	children?: string[]
}

export type Device = {
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
	contentItems: ContentItem[]
	discussionId: string
	brand: string // Добавлено: бренд устройства
	model: string // Добавлено: модель устройства
	manufacturer?: string // Опционально: производитель
}

export type Document = {
	id: string
	title: string
	description: string
	fileUrl: string
	size: string
	format: string
	category: 'technical' | 'legal' | 'checklist' | 'report'
	updatedAt: string
	tags: string[]
	downloadCount: number
}

export type FileItem = {
	id: string
	title: string
	description: string
	fileUrl: string
	size: string
	type: 'firmware' | 'driver' | 'utility' | 'software' | 'manual'
	version?: string
	updatedAt: string
	deviceBrand?: string
	deviceModel?: string
	downloadCount: number
	checksum?: string
}

type Person = {
	id: string
	avatar: JSX.Element
	name: string
	description: string
}

type RootState = {
	devices: Device[]
	documents: Document[]
	files: FileItem[]
	people: Person[]
	bgHeader: string
	activeTags: string[]
	changeBgHeader: (color: string) => void
	toggleTag: (tagTitle: string) => void
	clearTags: () => void
	setActiveTags: (tags: string[]) => void
}

// Функция для нормализации строк для URL (создания slug)
const createSlug = (str: string): string => {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-') // заменяем пробелы на дефисы
		.replace(/[.,]/g, '') // убираем точки и запятые
		.replace('стац', 'stationary')
		.replace('моб', 'mobile')
		.replace('икр', 'ikr')
		.replace(/[^a-z0-9-]/g, '') // удаляем все не-буквенно-цифровые символы кроме дефисов
}

// Создаем устройства с правильными slug для URL
const createDevices = (): Device[] => {
	const baseDevices = [
		{
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
				}
			],
			discussionId: '4',
			brand: 'Evotor',
			model: '5i'
		},
		{
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
				}
			],
			discussionId: '6',
			brand: 'Эвотор',
			model: '7.2'
		},
		{
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
				}
			],
			discussionId: '7',
			brand: 'Эвотор',
			model: '7.3'
		},
		{
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
				}
			],
			discussionId: '8',
			brand: 'Эвотор',
			model: '10'
		},
		{
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
				}
			],
			discussionId: '9',
			brand: 'Эвотор',
			model: '6'
		},
		{
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
				}
			],
			discussionId: '10',
			brand: 'Kozen',
			model: 'P10'
		},
		{
			url: 'kozen-p12',
			author: 'Сергей Кравченко',
			title: 'Kozen P12',
			description: 'Руководство по прошивке и дефектовке',
			image: '/content/kozen-p12/image/p12.png',
			bgColor: '#DC2626',
			updatedAt: '14 декабря 2025',
			tags: ['Сбер', 'Kozen', 'Прошивка', 'Дефектовка'],
			content: KozenP12Content,
			contentItems: [
				{ title: 'Актуальные версии' },
				{
					title: 'Прошивка',
					children: ['Что понадобится?', 'Процесс прошивки', 'Видеоинструкция']
				},
				{
					title: 'Дефектовка',
					children: [
						'Меню тестовой программы',
						'Чиповый ридер',
						'Модуль CTLS',
						'PIN-pad',
						'Резервный элемент питания CR2320',
						'Подсветка экрана',
						'Отображение цветов',
						'Кнопки',
						'Фотокамера',
						'Воспроизведение звука',
						'Считывание касаний',
						'Касания экрана в двух точках',
						'Подключение к BT устройству',
						'Подключение к Wi-Fi сети',
						'Считывание SIM-карты'
					]
				}
			],
			discussionId: '11',
			brand: 'Kozen',
			model: 'P12'
		},
		{
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
				}
			],
			discussionId: '12',
			brand: 'Pax',
			model: 'S80'
		},
		{
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
				}
			],
			discussionId: '13',
			brand: 'Pax',
			model: 'S90'
		},
		{
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
				}
			],
			discussionId: '14',
			brand: 'Pax',
			model: 'SP30'
		},
		{
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
				}
			],
			discussionId: '15',
			brand: 'Pax',
			model: 'S300'
		},
		{
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
				}
			],
			discussionId: '16',
			brand: 'Pax',
			model: 'S200'
		},
		{
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
				}
			],
			discussionId: '17',
			brand: 'Pax',
			model: 'Q25'
		},
		{
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
				}
			],
			discussionId: '18',
			brand: 'Pax',
			model: 'D230'
		},
		{
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
				}
			],
			discussionId: '19',
			brand: 'Pax',
			model: 'D230 mob'
		},
		{
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
				}
			],
			discussionId: '20',
			brand: 'VeriFone',
			model: 'VX520'
		},
		{
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
				}
			],
			discussionId: '21',
			brand: 'VeriFone',
			model: 'VX820'
		},
		{
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
				}
			],
			discussionId: '22',
			brand: 'Ingenico',
			model: 'ICT220-ICT250'
		},
		{
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
				}
			],
			discussionId: '23',
			brand: 'Ingenico',
			model: 'IPP320-IPP350'
		},
		{
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
				}
			],
			discussionId: '24',
			brand: 'Ingenico',
			model: 'IWL220-IWL250'
		},
		{
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
				}
			],
			discussionId: '25',
			brand: 'Tactilion',
			model: 'T2'
		},
		{
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
				}
			],
			discussionId: '26',
			brand: 'Tactilion',
			model: 'G3'
		},
		{
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
				}
			],
			discussionId: '27',
			brand: 'Castles',
			model: 'Vega3000 стац'
		},
		{
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
				}
			],
			discussionId: '28',
			brand: 'Castles',
			model: 'Vega3000 моб'
		},
		{
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
				}
			],
			discussionId: '29',
			brand: 'Castles',
			model: 'Vega3000 ИКР'
		}
	]

	// Добавляем id к каждому устройству и нормализуем URL
	return baseDevices.map((device) => ({
		...device,
		id: v4(),
		// Создаем новый URL slug для нового формата URL
		url: createSlug(device.title) // Используем нормализованный slug
	}))
}

export const useRootStore = create<RootState>((set) => ({
	devices: createDevices(),
	documents: [
		{
			id: v4(),
			title: 'Акт принятия оказанных услуг',
			description: 'Документ подтверждающий прием выполненных работ и услуг',
			fileUrl: '/documents/installationCertificate.docx',
			size: '18.5 KB',
			format: 'docx',
			category: 'legal',
			updatedAt: '15 ноября 2025',
			tags: ['Акт', 'Приемка', 'Юридический'],
			downloadCount: 156
		},
		{
			id: v4(),
			title: 'Акт экспертизы оборудования и SIM-карт',
			description:
				'Заключение о проверке и оценке состояния оборудования и SIM-карт',
			fileUrl: '/documents/expertReport.docx',
			size: '23.2 KB',
			format: 'docx',
			category: 'report',
			updatedAt: '10 декабря 2025',
			tags: ['Экспертиза', 'Оборудование', 'SIM-карты'],
			downloadCount: 89
		},
		{
			id: v4(),
			title: 'Чек-лист X5',
			description: 'Пошаговый список проверок перед сдачей',
			fileUrl: '/documents/checklistX5.docx',
			size: '13.5 KB',
			format: 'docx',
			category: 'checklist',
			updatedAt: '20 ноября 2025',
			tags: ['Чек-лист', 'X5', 'Проверка'],
			downloadCount: 234
		},
		{
			id: v4(),
			title: 'Техническое задание на установку',
			description: 'Требования и спецификации для установки оборудования',
			fileUrl: '/documents/technicalSpec.docx',
			size: '45.7 KB',
			format: 'pdf',
			category: 'technical',
			updatedAt: '5 декабря 2025',
			tags: ['Технический', 'Установка', 'Спецификации'],
			downloadCount: 67
		},
		{
			id: v4(),
			title: 'Договор на обслуживание',
			description: 'Типовой договор на техническое обслуживание оборудования',
			fileUrl: '/documents/serviceContract.docx',
			size: '32.1 KB',
			format: 'docx',
			category: 'legal',
			updatedAt: '1 декабря 2025',
			tags: ['Договор', 'Обслуживание', 'Юридический'],
			downloadCount: 112
		},
		{
			id: v4(),
			title: 'Отчет о проделанной работе',
			description: 'Форма для отчетности о выполненных работах',
			fileUrl: '/documents/workReport.docx',
			size: '19.8 KB',
			format: 'docx',
			category: 'report',
			updatedAt: '25 ноября 2025',
			tags: ['Отчет', 'Работы', 'Форма'],
			downloadCount: 178
		}
	],
	files: [
		{
			id: v4(),
			title: 'Прошивка Эвотор 5i v2.1.5',
			description: 'Стабильная версия прошивки для терминала Эвотор 5i',
			fileUrl: '/files/firmware/evotor-5i-v2.1.5.zip',
			size: '156 MB',
			type: 'firmware',
			version: 'v2.1.5',
			updatedAt: '1 августа 2025',
			deviceBrand: 'Эвотор',
			deviceModel: '5i',
			downloadCount: 1245,
			checksum: 'sha256:abc123...'
		},
		{
			id: v4(),
			title: 'Драйвер USB для VeriFone VX520',
			description: 'Драйвер для подключения терминала через USB',
			fileUrl: '/files/drivers/verifone-vx520-usb-driver.exe',
			size: '45 MB',
			type: 'driver',
			updatedAt: '15 ноября 2025',
			deviceBrand: 'VeriFone',
			deviceModel: 'VX520',
			downloadCount: 892,
			checksum: 'sha256:def456...'
		},
		{
			id: v4(),
			title: 'Утилита конфигурации Pax Terminals',
			description: 'Программа для настройки терминалов Pax',
			fileUrl: '/files/utilities/pax-config-tool-v1.4.2.exe',
			size: '78 MB',
			type: 'utility',
			version: 'v1.4.2',
			updatedAt: '21 июня 2025',
			deviceBrand: 'Pax',
			downloadCount: 567,
			checksum: 'sha256:ghi789...'
		},
		{
			id: v4(),
			title: 'Программа-симулятор Ingenico',
			description: 'Симулятор для тестирования транзакций',
			fileUrl: '/files/software/ingenico-simulator-v3.0.1.zip',
			size: '210 MB',
			type: 'software',
			version: 'v3.0.1',
			updatedAt: '24 мая 2025',
			deviceBrand: 'Ingenico',
			downloadCount: 321,
			checksum: 'sha256:jkl012...'
		},
		{
			id: v4(),
			title: 'Руководство по эксплуатации Kozen P12',
			description: 'Полное руководство пользователя',
			fileUrl: '/files/manuals/kozen-p12-manual.pdf',
			size: '12.3 MB',
			type: 'manual',
			updatedAt: '14 декабря 2025',
			deviceBrand: 'Kozen',
			deviceModel: 'P12',
			downloadCount: 456,
			checksum: 'sha256:mno345...'
		},
		{
			id: v4(),
			title: 'Прошивка Pax S90 v5.3.0',
			description: 'Актуальная версия прошивки для терминала Pax S90',
			fileUrl: '/files/firmware/pax-s90-v5.3.0.zip',
			size: '142 MB',
			type: 'firmware',
			version: 'v5.3.0',
			updatedAt: '21 июня 2025',
			deviceBrand: 'Pax',
			deviceModel: 'S90',
			downloadCount: 789,
			checksum: 'sha256:pqr678...'
		},
		{
			id: v4(),
			title: 'Драйвер Ethernet для Castles Vega3000',
			description: 'Драйвер для сетевого подключения',
			fileUrl: '/files/drivers/castles-vega3000-ethernet-driver.exe',
			size: '32 MB',
			type: 'driver',
			updatedAt: '30 июня 2025',
			deviceBrand: 'Castles',
			deviceModel: 'Vega3000',
			downloadCount: 234,
			checksum: 'sha256:stu901...'
		},
		{
			id: v4(),
			title: 'Утилита диагностики Tactilion',
			description: 'Программа для диагностики терминалов Tactilion',
			fileUrl: '/files/utilities/tactilion-diagnostic-tool.exe',
			size: '65 MB',
			type: 'utility',
			version: 'v2.1.0',
			updatedAt: '21 июня 2025',
			deviceBrand: 'Tactilion',
			downloadCount: 189,
			checksum: 'sha256:vwx234...'
		}
	],
	people: [
		{
			id: v4(),
			avatar: <ScanFace className='w-16 h-16' />,
			name: 'Сергей Кравченко',
			description: 'Не знал где скачать прошивку. Поэтому создал доку'
		}
	],
	bgHeader: '#fafafa',
	activeTags: [],

	// Функции должны быть правильно объявлены
	changeBgHeader: (color: string) => {
		set({ bgHeader: color })
	},

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
