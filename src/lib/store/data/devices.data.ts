import { v4 } from 'uuid'
import { Device } from '@/lib/types'

import Evotor5iContent from '@/components/content/evotor/5i'
import Evotor72Content from '@/components/content/evotor/72'
import Evotor73Content from '@/components/content/evotor/73'
import Evotor10Content from '@/components/content/evotor/10'
import Evotor6Content from '@/components/content/evotor/6'
import KozenP10Content from '@/components/content/kozen/p10'
import KozenP12Content from '@/components/content/kozen/p12'
import PaxS80Content from '@/components/content/pax/s80'
import PaxS90Content from '@/components/content/pax/s90'
import PaxSP30Content from '@/components/content/pax/sp30'
import PaxS300Content from '@/components/content/pax/s300'
import PaxS200Content from '@/components/content/pax/s200'
import PaxQ25Content from '@/components/content/pax/q25'
import PaxD230Content from '@/components/content/pax/d230'
import PaxD230MobContent from '@/components/content/pax/d230m'
import VerifoneVx520Content from '@/components/content/verifone/vx520'
import VerifoneVx820Content from '@/components/content/verifone/vx820'
import IngenicoICT220Content from '@/components/content/ingenico/ict220'
import IngenicoIPP320Content from '@/components/content/ingenico/ipp320'
import IngenicoIWL220Content from '@/components/content/ingenico/iwl220'
import TactilionT2Content from '@/components/content/tactilion/t2'
import TactilionG3Content from '@/components/content/tactilion/g3'
import CastlesVega3000Content from '@/components/content/castles/vega3000'
import CastlesVega3000MobContent from '@/components/content/castles/vega3000m'
import CastlesVega3000IkrContent from '@/components/content/castles/vega3000p'

export const baseDevicesData: Omit<Device, 'id'>[] = [
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
				children: ['Что понадобится?', 'Процесс прошивки', 'Как добавить eSIM?']
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
		bgColor: '#7fe6c9',
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
		bgColor: '#7fe6c9',
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

export const createDevices = (): Device[] => {
	return baseDevicesData.map((device) => ({
		...device,
		id: v4()
	}))
}
