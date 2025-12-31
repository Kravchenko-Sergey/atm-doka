import { v4 } from 'uuid'
import { Brand } from '@/lib/types'

export const brandsData: Brand[] = [
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
	// ... Остальные бренды (весь массив из createBrands)
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
