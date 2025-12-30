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
	brand: string
	brandSlug: string // Добавлено: slug бренда
	model: string
	modelSlug: string // Добавлено: slug модели
	manufacturer?: string
}

export type Brand = {
	id: string
	brand: string // brand slug (evotor, pax, etc.)
	displayBrand: string // Отображаемое имя (Эвотор, Pax, etc.)
	color: string
	gradient: string
	lightGradient: string
	description: string
	firmwares: Array<{
		model: string
		version: string
		url: string
	}>
	drivers: Array<{
		title: string
		url: string
	}>
	soft: Array<{
		title: string
		url: string
	}>
	models: Array<{
		name: string // Модель для URL (5i, s80, etc.)
		displayName: string // Отображаемое имя модели
		slug: string // slug модели
	}>
}

type Person = {
	id: string
	avatar: JSX.Element
	name: string
	description: string
}

type RootState = {
	devices: Device[]
	brands: Brand[]
	people: Person[]
	bgHeader: string
	activeTags: string[]
	changeBgHeader: (color: string) => void
	toggleTag: (tagTitle: string) => void
	clearTags: () => void
	setActiveTags: (tags: string[]) => void
}

// Создаем бренды с полной информацией
const createBrands = (): Brand[] => [
	{
		id: v4(),
		brand: 'evotor',
		displayBrand: 'Эвотор',
		color: '#f15024',
		gradient: 'from-orange-500 to-red-500',
		lightGradient: 'from-orange-50 to-orange-100',
		description:
			'Ведущий российский производитель интеллектуальных POS-терминалов и экосистемы программного обеспечения для торговли. Компания была основана в 2014 году, быстро заняла лидирующие позиции на российском рынке. Специализируется на создании смарт-терминалов для автоматизации малого и среднего бизнеса, предлагая комплексные решения для розничной торговли, общественного питания и сферы услуг',
		firmwares: [
			{
				model: 'Эвотор 5i',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/2c2/81jjeqjozr2tvc2giymyttknr6n1fyy3/evotor_st3si_4.9.11.20241107143357.77e95644_5380_4bf8_80f6_8161b24fa612.aef'
			},
			{
				model: 'Эвотор 7.2',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/bc0/2bbmp0jvgiwqp6yefzve38adzenwzg7j/evotor_st2_4.9.11.20241107143140.b24b2d50_6245_4b18_87b8_115bd9c62d84.aef'
			},
			{
				model: 'Эвотор 7.3',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/c6e/ch46qjmajbpheq2dz7u8afl8m1p94twh/evotor_st3_4.9.11.20241107143150.73ea5ec7_8738_4a94_829a_5d2e52dc1ca9.aef'
			},
			{
				model: 'Эвотор 10',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/917/7032gor2oiwtw4t0cw6mszj0zui6cx49/evotor_st3xl_4.9.11.20241107143322.6c56f433_f0af_4a68_9e06_2c5f7b852e94.aef'
			},
			{
				model: 'Эвотор 6',
				version: '6.0.16',
				url: 'https://drive.google.com/uc?export=download&id=1f0PLsnjJLSsyf8BjNS7pERTeJYn48JLp'
			}
		],
		drivers: [],
		soft: [],
		models: [
			{ name: '5i', displayName: 'Эвотор 5i', slug: '5i' },
			{ name: '6', displayName: 'Эвотор 6', slug: '6' },
			{ name: '7.2', displayName: 'Эвотор 7.2', slug: '7-2' },
			{ name: '7.3', displayName: 'Эвотор 7.3', slug: '7-3' },
			{ name: '10', displayName: 'Эвотор 10', slug: '10' }
		]
	},
	{
		id: v4(),
		brand: 'pax',
		displayBrand: 'Pax',
		color: '#08a4e1',
		gradient: 'from-blue-500 to-cyan-500',
		lightGradient: 'from-blue-50 to-cyan-100',
		description:
			'Международная компания PAX Technology (PAX Global Technology) — мировой лидер в производстве инновационных решений для электронных платежей. Основана в 2000 году, штаб-квартира расположена в Шэньчжэне, Китай. Производит широкий спектр POS-терминалов, включая стационарные, мобильные и беспроводные модели, поставляя оборудование в более чем 120 стран мира',
		firmwares: [
			{
				model: '',
				version: '!SB_S80_33.33',
				url: 'https://disk.yandex.ru/d/1Ei0svpswKnAOQ'
			},
			{
				model: '',
				version: '!SB_S90C_33.33',
				url: 'https://disk.yandex.ru/d/GQPfUmSopiLFyA'
			},
			{
				model: '',
				version: '!SB_SP30_33.33',
				url: 'https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'
			},
			{
				model: '',
				version: '33.33_PAX_Prolin_Bat',
				url: 'https://disk.yandex.ru/d/jt5WS_fWPZHaUg'
			}
		],
		drivers: [
			{
				title: 'PaxUSBDriver_2.28',
				url: 'https://disk.yandex.ru/d/0XtlL9aZeqnAHA'
			}
		],
		soft: [],
		models: [
			{ name: 'S80', displayName: 'Pax S80', slug: 's80' },
			{ name: 'S90', displayName: 'Pax S90', slug: 's90' },
			{ name: 'S200', displayName: 'Pax S200', slug: 's200' },
			{ name: 'S300', displayName: 'Pax S300', slug: 's300' },
			{ name: 'SP30', displayName: 'Pax SP30', slug: 'sp30' },
			{ name: 'Q25', displayName: 'Pax Q25', slug: 'q25' },
			{ name: 'D230', displayName: 'Pax D230', slug: 'd230' },
			{ name: 'D230M', displayName: 'Pax D230M', slug: 'd230m' }
		]
	},
	{
		id: v4(),
		brand: 'ingenico',
		displayBrand: 'Ingenico',
		color: '#41e747',
		gradient: 'from-green-500 to-emerald-500',
		lightGradient: 'from-green-50 to-emerald-100',
		description:
			'Французская компания, один из мировых лидеров в области терминальных решений и платежных услуг. Основана в 1980 году, имеет представительства в более чем 170 странах. Компания предлагает полный спектр продуктов и услуг для безопасных электронных транзакций, включая POS-терминалы, решения для электронной коммерции и мобильных платежей',
		firmwares: [
			{
				model: '',
				version: 'telium',
				url: 'https://disk.yandex.ru/d/-L6rGWh_bGYcog'
			}
		],
		drivers: [],
		soft: [{ title: 'LLT', url: 'https://disk.yandex.ru/d/BbiiXdxjEfw_PA' }],
		models: [
			{
				name: 'ICT220-ICT250',
				displayName: 'Ingenico ICT220-ICT250',
				slug: 'ict220-ict250'
			},
			{
				name: 'IPP320-IPP350',
				displayName: 'Ingenico IPP320-IPP350',
				slug: 'ipp320-ipp350'
			},
			{
				name: 'IWL220-IWL250',
				displayName: 'Ingenico IWL220-IWL250',
				slug: 'iwl220-iwl250'
			}
		]
	},
	{
		id: v4(),
		brand: 'verifone',
		displayBrand: 'VeriFone',
		color: '#6effd2',
		gradient: 'from-teal-500 to-green-400',
		lightGradient: 'from-teal-50 to-green-100',
		description:
			'Американская компания (ныне часть индийской группы Catalyst), один из крупнейших в мире производителей терминалов для электронных платежей. Основана в 1981 году. Специализируется на разработке и производстве безопасных платежных решений для розничной торговли, финансовых учреждений и поставщиков услуг по всему миру',
		firmwares: [
			{
				model: 'VX520',
				version: 'verifone',
				url: 'https://disk.yandex.ru/d/Ym5ZizF5xbCEHQ'
			},
			{
				model: 'VX820',
				version: 'vx820-33.33.07',
				url: 'https://disk.yandex.ru/d/XjC6g_QSFhr6Jw'
			}
		],
		drivers: [],
		soft: [],
		models: [
			{ name: 'VX520', displayName: 'VeriFone VX520', slug: 'vx520' },
			{ name: 'VX820', displayName: 'VeriFone VX820', slug: 'vx820' }
		]
	},
	{
		id: v4(),
		brand: 'kozen',
		displayBrand: 'Kozen',
		color: '#DC2626',
		gradient: 'from-red-600 to-rose-600',
		lightGradient: 'from-red-50 to-rose-100',
		description:
			'Российский производитель POS-терминалов, основанный в 2016 году. Специализируется на создании надежных и современных решений для розничной торговли, адаптированных под специфику российского рынка. Компания предлагает как стационарные, так и мобильные терминалы, ориентированные на потребности малого и среднего бизнеса в России и странах СНГ',
		firmwares: [
			{
				model: 'Kozen P10',
				version: '1.5.24',
				url: 'https://drive.google.com/uc?export=download&id=1MpQ1YbGuHUT9na83AT5qO6h6hvL-1-dw'
			},
			{
				model: 'Kozen P12',
				version: '1.4.5',
				url: 'https://drive.google.com/uc?export=download&id=1vdlPr4kLPkLk7Jg3EbBnmJ-DhHh1pNZ7'
			}
		],
		drivers: [
			{
				title: 'Драйверы для Kozen P12',
				url: 'https://disk.yandex.ru/d/b-x-jmu7iA3swg'
			}
		],
		soft: [
			{ title: 'Flash Tool', url: 'https://disk.yandex.ru/d/rd08ougjIKg4Lg' },
			{ title: 'SN Writter', url: 'https://disk.yandex.ru/d/jWk5EXCjMpsN8g' }
		],
		models: [
			{ name: 'P10', displayName: 'Kozen P10', slug: 'p10' },
			{ name: 'P12', displayName: 'Kozen P12', slug: 'p12' }
		]
	},
	{
		id: v4(),
		brand: 'castles',
		displayBrand: 'Castles',
		color: '#704ecc',
		gradient: 'from-purple-600 to-violet-600',
		lightGradient: 'from-purple-50 to-violet-100',
		description:
			'Тайваньская компания Castles Technology, основанная в 1996 году. Специализируется на разработке и производстве инновационных решений для электронных платежей. Известна своими надежными и производительными терминалами, которые используются по всему миру. Компания имеет сертификаты безопасности PCI, EMV и других международных стандартов',
		firmwares: [
			{
				model: '',
				version: 'vxupdate',
				url: 'https://disk.yandex.ru/d/MS548Ff0grXoUw'
			}
		],
		drivers: [],
		soft: [],
		models: [
			{ name: 'Vega3000', displayName: 'Castles Vega3000', slug: 'vega3000' },
			{
				name: 'Vega3000M',
				displayName: 'Castles Vega3000M',
				slug: 'vega3000m'
			},
			{ name: 'Vega3000P', displayName: 'Castles Vega3000P', slug: 'vega3000p' }
		]
	},
	{
		id: v4(),
		brand: 'tactilion',
		displayBrand: 'Tactilion',
		color: '#ffd829',
		gradient: 'from-yellow-500 to-amber-500',
		lightGradient: 'from-yellow-50 to-amber-100',
		description:
			'Производитель мобильных POS-терминалов, предлагающий современные решения для безналичных платежей. Специализируется на создании компактных, беспроводных устройств для мобильной торговли. Продукция компании ориентирована на курьеров, торговых представителей, водителей такси и другие профессии, требующие мобильных платежных решений',
		firmwares: [
			{
				model: '',
				version: 'T2',
				url: 'https://disk.yandex.ru/d/wlh2zYSls2s77g'
			},
			{
				model: '',
				version: 'G3',
				url: 'https://disk.yandex.ru/d/Zo_BfaeJxsk8oA'
			}
		],
		drivers: [],
		soft: [
			{
				title: 'Nexgo TMU Tools',
				url: 'https://disk.yandex.ru/d/ntxPwIVh8dASHg'
			}
		],
		models: [
			{ name: 'T2', displayName: 'Tactilion T2', slug: 't2' },
			{ name: 'G3', displayName: 'Tactilion G3', slug: 'g3' }
		]
	}
]

// Создаем устройства с правильными slug
const createDevices = (): Device[] => {
	// Сначала получаем бренды для ссылок
	const brands = createBrands()

	const baseDevices = [
		// Evotor
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
			brand: 'Эвотор',
			brandSlug: 'evotor',
			model: '5i',
			modelSlug: '5i'
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
			brandSlug: 'evotor',
			model: '7.2',
			modelSlug: '7-2'
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
			brandSlug: 'evotor',
			model: '7.3',
			modelSlug: '7-3'
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
			brandSlug: 'evotor',
			model: '10',
			modelSlug: '10'
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
			brandSlug: 'evotor',
			model: '6',
			modelSlug: '6'
		},
		// Kozen
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
			brandSlug: 'kozen',
			model: 'P10',
			modelSlug: 'p10'
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
			brandSlug: 'kozen',
			model: 'P12',
			modelSlug: 'p12'
		},
		// Pax
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
			brandSlug: 'pax',
			model: 'S80',
			modelSlug: 's80'
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
			brandSlug: 'pax',
			model: 'S90',
			modelSlug: 's90'
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
			brandSlug: 'pax',
			model: 'SP30',
			modelSlug: 'sp30'
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
			brandSlug: 'pax',
			model: 'S300',
			modelSlug: 's300'
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
			brandSlug: 'pax',
			model: 'S200',
			modelSlug: 's200'
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
			brandSlug: 'pax',
			model: 'Q25',
			modelSlug: 'q25'
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
			brandSlug: 'pax',
			model: 'D230',
			modelSlug: 'd230'
		},
		{
			url: 'pax-d230-mob',
			author: 'Сергей Кравченко',
			title: 'Pax D230M',
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
			brandSlug: 'pax',
			model: 'D230M',
			modelSlug: 'd230m'
		},
		// Verifone
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
			brandSlug: 'verifone',
			model: 'VX520',
			modelSlug: 'vx520'
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
			brandSlug: 'verifone',
			model: 'VX820',
			modelSlug: 'vx820'
		},
		// Ingenico
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
			brandSlug: 'ingenico',
			model: 'ICT220-ICT250',
			modelSlug: 'ict220-ict250'
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
			brandSlug: 'ingenico',
			model: 'IPP320-IPP350',
			modelSlug: 'ipp320-ipp350'
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
			brandSlug: 'ingenico',
			model: 'IWL220-IWL250',
			modelSlug: 'iwl220-iwl250'
		},
		// Tactilion
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
			brandSlug: 'tactilion',
			model: 'T2',
			modelSlug: 't2'
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
			brandSlug: 'tactilion',
			model: 'G3',
			modelSlug: 'g3'
		},
		// Castles
		{
			url: 'castles-vega3000',
			author: 'Сергей Кравченко',
			title: 'Castles Vega3000',
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
			brandSlug: 'castles',
			model: 'Vega3000',
			modelSlug: 'vega3000'
		},
		{
			url: 'castles-vega3000-mob',
			author: 'Сергей Кравченко',
			title: 'Castles Vega3000M',
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
			brandSlug: 'castles',
			model: 'Vega3000M',
			modelSlug: 'vega3000m'
		},
		{
			url: 'castles-vega3000-ikr',
			author: 'Сергей Кравченко',
			title: 'Castles Vega3000P',
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
			brandSlug: 'castles',
			model: 'Vega3000P',
			modelSlug: 'vega3000p'
		}
	]

	return baseDevices.map((device) => ({
		...device,
		id: v4()
	}))
}

export const useRootStore = create<RootState>((set) => ({
	devices: createDevices(),
	brands: createBrands(),
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
