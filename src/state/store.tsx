import { v4 } from 'uuid'
import { badgeVariants } from '@/components/ui/badge'
import { create } from 'zustand'
import Link from 'next/link'
import { JSX } from 'react'
import { ScanFace, Send, Users } from 'lucide-react'

type Message = {
	id: string
	title: string
	content: JSX.Element
}

export type Post = {
	id: string
	url: string
	author: string
	title: string
	description: string
	image: string
	bgColor: string
	bgImage: string
	tags: string[]
	content: JSX.Element
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
	messages: Message[]
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
	messages: [
		{
			id: v4(),
			title: 'Вместе и для каждого',
			content: (
				<div className='p-4 w-[50%] bg-gray-300 rounded-xl flex-auto dark:bg-[#42454c]'>
					<div className='pb-8 text-2xl'>Вместе и для каждого</div>
					<div className='text-xl'>
						<p>Дока — это документация для POS-инженеров на понятном языке.</p>
						<p>Каждый участник сообщества — это ценный источник информации.</p>
						<p>Делитесь своими знаниями, помогайте коллегам.</p>
						<p>Ваш опыт важен, ваш вклад бесценен.</p>
					</div>
					<div>
						<Link href='/people' className='mt-8 text-xl flex gap-4'>
							<Users />
							<div>Участники</div>
						</Link>
					</div>
				</div>
			)
		},
		{
			id: v4(),
			title: 'Дока ищет партнёров',
			content: (
				<div className='p-4 w-[50%] border rounded-xl flex flex-col flex-auto'>
					<div className='pb-8 text-2xl'>Дока ищет партнёров</div>
					<div className='text-xl flex-auto'>
						<p>
							Сотрудничество с Докой приносит пользу как компании, так и её
							сотрудникам.
						</p>
						<p>
							Поддерживая Доку, вы способствуете развитию русскоязычного
							сообщества POS-инженеров.
						</p>
					</div>
					<div>
						<Link
							href='https://t.me/+CznWcCGr6H03NjMy'
							className='mt-8 text-xl flex gap-4'
							target='_blank'
						>
							<Send />
							<p>Написать нам</p>
						</Link>
					</div>
				</div>
			)
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
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<>
					<h2 id='1' className='my-8 text-3xl pt-[142px] mt-[-102px]'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/eB9BL5llaTbtcw'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} bg-[#f15024] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Включите смарт-терминал и подключите его к интернету
						</li>
						<li className='ml-[20px]'>
							Очистите файловую систему. Перейдите в
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обслуживание кассы
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Эквайринг
							</span>
							или
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Эвотор.PAY
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Файловая система
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Форматировать
							</span>
						</li>
						<li className='ml-[20px]'>
							Загрузите обновления платёжного модуля. Перейдите в
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обслуживание кассы
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Эквайринг
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Прошивка
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Запрос на обновление
							</span>
						</li>
						<li className='ml-[20px]'>
							После обновления проверьте какая версия прошивки установлена.
							Зайдите в раздел
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Настройки
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обслуживание кассы
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Эквайринг
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Общая информация
							</span>
						</li>
						<li className='ml-[20px]'>
							На данный момент актуальная версия эквайринга для 520 и 521 -
							<span
								className={`${badgeVariants({ variant: 'outline' })} ml-2 bg-[#f15024] text-white`}
							>
								1.8.2.1
							</span>
							, для 522 -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#f15024] text-white`}
							>
								3.1.2.1
							</span>
						</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/eB9BL5llaTbtcw'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								Скачайте
							</Link>
							файл прошивки. На данный момент актуальная версия прошивки
							<span
								className={`${badgeVariants({ variant: 'outline' })}  bg-[#f15024] text-white`}
							>
								4.9.11
							</span>
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обновление системы
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажмите на
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Проверить и установить
							</span>
						</li>
						<li className='ml-[20px]'>
							Касса начнет расшифровывать файл с обновлением, это займет
							некоторое время. После успешной установки касса сама
							перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.
						</li>
					</ul>
				</>
			)
		},
		{
			id: v4(),
			url: 'evotor72',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 7.2?',
			description: 'Руководство по прошивке Evotor 7.2',
			image: '/evo72.png',
			bgColor: '#f15024',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/Zwk1HO1llawQwQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/Zwk1HO1llawQwQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								Скачайте
							</Link>
							файл прошивки. На данный момент актуальная версия прошивки
							<span
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								4.9.11
							</span>
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обновление системы
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажмите на
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Проверить и установить
							</span>
						</li>
						<li className='ml-[20px]'>
							Касса начнет расшифровывать файл с обновлением, это займет
							некоторое время. После успешной установки касса сама
							перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.
						</li>
					</ul>
				</div>
			)
		},
		{
			id: v4(),
			url: 'evotor73',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 7.3?',
			description: 'Руководство по прошивке Evotor 7.3',
			image: '/evo73.png',
			bgColor: '#f15024',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/6wPk2ywVHz_BpA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} bg-[#f15024] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/6wPk2ywVHz_BpA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								Скачайте
							</Link>
							файл прошивки. На данный момент актуальная версия прошивки
							<span
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								4.9.11
							</span>
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обновление системы
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажмите на
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Проверить и установить
							</span>
						</li>
						<li className='ml-[20px]'>
							Касса начнет расшифровывать файл с обновлением, это займет
							некоторое время. После успешной установки касса сама
							перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.
						</li>
					</ul>
				</div>
			)
		},
		{
			id: v4(),
			url: 'evotor10',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 10?',
			description: 'Руководство по прошивке Evotor 10',
			image: '/evo10.png',
			bgColor: '#f15024',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/wQphqGBH5Eh7Hg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Скачайте
							<Link
								href={'https://disk.yandex.ru/d/wQphqGBH5Eh7Hg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#f15024] text-white`}
							>
								файл прошивки.
							</Link>
							На данный момент актуальная версия прошивки
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#f15024] text-white`}
							>
								4.9.11
							</span>
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Обновление системы
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажмите на
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Проверить и установить
							</span>
						</li>
						<li className='ml-[20px]'>
							Касса начнет расшифровывать файл с обновлением, это займет
							некоторое время. После успешной установки касса сама
							перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.
						</li>
					</ul>
				</div>
			)
		},
		{
			id: v4(),
			url: 'evotor6',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 6?',
			description: 'Руководство по прошивке Evotor 6',
			image: '/evo6.png',
			bgColor: '#f15024',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Как добавить eSIM?',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>Переходник USB мама - Type-C папа</li>
						<li className='ml-[20px]'>
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5'
								}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#f15024] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Скачайте
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5'
								}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#f15024] text-white`}
							>
								файл прошивки.
							</Link>
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							С помощью переходника подключите флешку к кассе и немного
							подождите. Устройство найдёт нужный файл и предложит его
							установить.
						</li>
						<li className='ml-[20px]'>
							Нажмите на
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Проверить и установить
							</span>
						</li>
						<li className='ml-[20px]'>
							Касса начнет расшифровывать файл с обновлением, это займет
							некоторое время. После успешной установки касса сама
							перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.
						</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как добавить eSIM?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Заходим в настройки устройства. Для этого жмем три раза на логотип
							Сбера.
						</li>
						<li className='ml-[20px]'>Подключаемся к Wi-Fi.</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Мобильная сеть
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Добавить eSIM
							</span>
						</li>
						<li className='ml-[20px]'>
							Заходим в Telegram бота
							<Link
								href={'https://t.me/WERGIT_bot'}
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#f15024] text-white`}
								target='_blank'
							>
								@WERGIT_bot
							</Link>
						</li>
						<li className='ml-[20px]'>
							При первом использовании бота необходимо пройти регистрацию.
						</li>
						<li className='ml-[20px]'>
							Вводим команду
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								getqr 111222333
							</span>
							. Где 111222333 - серийный номер устройства
						</li>
						<li className='ml-[20px]'>
							После того как бот распознает терминал вам станут доступна кнопка
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								получить QR
							</span>
							. Нажимаем на неё.
						</li>
						<li className='ml-[20px]'>
							Нажимаем на{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								оранжевую кнопку
							</span>
							на левой стороне устройства и сканируем полученный QR.
						</li>
						<li className='ml-[20px]'>
							При необходимости повторяем два предыдущих шага для добавления
							eSIM других операторов.
						</li>
					</ul>
				</div>
			)
		},
		{
			id: v4(),
			url: 'kozen-p10',
			author: 'Сергей Кравченко',
			title: 'Как прошить Kozen P10?',
			description: 'Руководство по прошивке Kozen P10',
			image: '/p10.png',
			bgColor: '#C0C0C0',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Kozen', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Программа
							<Link
								href={'https://disk.yandex.ru/d/5bzYR63BWdppGg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#C0C0C0] text-white`}
							>
								Flash Tool
							</Link>
						</li>
						<li className='ml-[20px]'>
							<Link
								href={
									'https://drive.google.com/drive/folders/1Ms1kETV6WVh9RfCiG3X-9h1naujG0LRq?usp=drive_link'
								}
								target='_blank'
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#C0C0C0] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Заходим в программу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Flash Tool
							</span>
						</li>
						<li className='ml-[20px]'>
							В поле
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download-Agent
							</span>
							указываем путь к файлу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								?
							</span>
						</li>
						<li className='ml-[20px]'>
							В поле
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Scatter-loading File
							</span>
							указываем путь к файлу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								?
							</span>
						</li>
						<li className='ml-[20px]'>
							Чуть ниже выбираем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Firmware Upgrade
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем кнопку
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download
							</span>
						</li>
						<li className='ml-[20px]'>Подключаем терминал к компьютеру</li>
						<li className='ml-[20px]'>Дожидаемся окончания прошивки</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/KOZEN.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'kozen-p12',
			author: 'Сергей Кравченко',
			title: 'Как прошить Kozen P12?',
			description: 'Руководство по прошивке Kozen P12',
			image: '/p12.png',
			bgColor: '#C0C0C0',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Kozen', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Программа
							<Link
								href={'https://disk.yandex.ru/d/5bzYR63BWdppGg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#C0C0C0] text-white`}
							>
								Flash Tool
							</Link>
						</li>
						<li className='ml-[20px]'>
							<Link
								href={
									'https://drive.google.com/drive/folders/18Qq54wZnPj76NNwvfG4oqvMOVumyOtyR?usp=drive_link'
								}
								target='_blank'
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#C0C0C0] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Заходим в программу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Flash Tool
							</span>
						</li>
						<li className='ml-[20px]'>
							В поле
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download-Agent
							</span>
							указываем путь к файлу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								?
							</span>
						</li>
						<li className='ml-[20px]'>
							В поле
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Scatter-loading File
							</span>
							указываем путь к файлу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								?
							</span>
						</li>
						<li className='ml-[20px]'>
							Чуть ниже выбираем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Firmware Upgrade
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем кнопку
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download
							</span>
						</li>
						<li className='ml-[20px]'>Подключаем терминал к компьютеру</li>
						<li className='ml-[20px]'>Дожидаемся окончания прошивки</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/KOZEN.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'pax-s80',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S80?',
			description: 'Руководство по прошивке Pax S80',
			image: '/s80.png',
			bgColor: '#08a4e1',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>Переходник USB мама - mini USB папа</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/1Ei0svpswKnAOQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Подсоединяем флешку с помощью переходника
						</li>
						<li className='ml-[20px]'>Включаем терминал</li>
						<li className='ml-[20px]'>
							Выбираем нужный файл прошивки -
							<Link
								href={'https://disk.yandex.ru/d/1Ei0svpswKnAOQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#08a4e1] text-white`}
							>
								!SB_S80_33.33
							</Link>
						</li>
						<li className='ml-[20px]'>Подтверждаем выбор</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем первый пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								DELETE APP
							</span>
						</li>
						<li className='ml-[20px]'>
							Затем выбираем первый пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Delete all app
							</span>
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится выбираем второй пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								DOWNLOAD ALL
							</span>
						</li>
						<li className='ml-[20px]'>
							После окончания прошивки дважды нажимаем красную кнопку и
							вытаскиваем флешку. Терминал перезапустится
						</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/PAX S80.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'pax-s90',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S90?',
			description: 'Руководство по прошивке Pax S90',
			image: '/s90.png',
			bgColor: '#08a4e1',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>Переходник USB мама - mini USB папа</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/GQPfUmSopiLFyA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Подсоединяем флешку с помощью переходника
						</li>
						<li className='ml-[20px]'>Включаем терминал</li>
						<li className='ml-[20px]'>
							Выбираем нужный файл прошивки -
							<Link
								href={'https://disk.yandex.ru/d/GQPfUmSopiLFyA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#08a4e1] text-white`}
							>
								!SB_S90C_33.33
							</Link>
						</li>
						<li className='ml-[20px]'>Подтверждаем выбор</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем первый пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								DELETE APP
							</span>
						</li>
						<li className='ml-[20px]'>
							Затем выбираем первый пункт -{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Delete all app
							</span>
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится выбираем второй пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								DOWNLOAD ALL
							</span>
						</li>
						<li className='ml-[20px]'>
							После окончания прошивки дважды нажимаем красную кнопку и
							вытаскиваем флешку. Терминал перезапустится
						</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/PAX S90.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'pax-sp30',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax SP30?',
			description: 'Руководство по прошивке Pax SP30',
			image: '/sp30.png',
			bgColor: '#08a4e1',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Комплектный провод</li>
						<li className='ml-[20px]'>Блок питания micro-usb</li>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							Переходник USB 2.0 мама - USB 2.0 мама
						</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Присоединяем флешку через переходник к проводу подключения пинпада
							к компьютеру.
						</li>
						<li className='ml-[20px]'>
							Подключаем питание к сети. Должна появиться запись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								U-DISC_DOWNLOAD
							</span>
							. Это означает что терминал начал сканировать флешку.
						</li>
						<li className='ml-[20px]'>
							Из появившегося списка выбираем нужный нам файл с прошивкой -
							<Link
								href={'https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} ml-2 bg-[#08a4e1] text-white`}
							>
								!SB_SP30_33.33
							</Link>
							. Терминал начнет чтение файла.
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								DELETE APP
							</span>
							→
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Delete all app
							</span>
						</li>
						<li className='ml-[20px]'>
							Далее выбираем
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								DOWNLOAD ALL
							</span>
							. Начнется загрузка файла.
						</li>
						<li className='ml-[20px]'>
							Нажимаем красную кнопку. Появится надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								DOWNLOAD OVER
							</span>
						</li>
						<li className='ml-[20px]'>
							Ещё раз нажимаем красную кнопку. Терминал перезагрузится
						</li>
						<li className='ml-[20px]'>
							В момент перезагрузки отсоединяем флешку
						</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/PAX SP30.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'pax-s300',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S300?',
			description: 'Руководство по прошивке Pax S300',
			image: '/s300.png',
			bgColor: '#08a4e1',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Компьютер</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/7w6GizD53EmiGA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Папка для компьютера
							</Link>
						</li>
						<li className='ml-[20px]'>Комплектный провод</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/RbEz-ll2kQgtzA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Драйвер
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Проверяем установлен ли драйвер на компьютере. Заходим в диспетчер
							устройств. Если терминал не присвоил себе порт то устанавливаем
							драйвер
						</li>
						<li className='ml-[20px]'>
							Подключаем терминал к порту USB компьютера
						</li>
						<li className='ml-[20px]'>
							Многократно нажимаем на двойку до появления системного меню
						</li>
						<li className='ml-[20px]'>
							В Выбираем первый пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								System Config
							</span>
						</li>
						<li className='ml-[20px]'>
							Вводим пароль -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#08a4e1] text-white`}
							>
								123456
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем 4 чтобы включить
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								XCB Service
							</span>
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 3 -{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB
							</span>
						</li>
						<li className='ml-[20px]'>
							В скачанной на компьютер папке запуcкаем программу{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Starter
							</span>
						</li>
						<li className='ml-[20px]'>
							Вводим номер порта на котором подключен наш терминал. Номер порта
							можно посмотреть в диспетчере устройств
						</li>
						<li className='ml-[20px]'>Выбираем нужную нам прошивку</li>
						<li className='ml-[20px]'>Дожидаемся окончания загрузки</li>
						<li className='ml-[20px]'>
							На терминале выбираем 4 пункт -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								XCB Service
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем на единицу -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								Close Service
							</span>
						</li>
						<li className='ml-[20px]'>
							Несколько раз нажимаем на красную кнопку и выключаем терминал
						</li>
						<li className='ml-[20px]'>
							После перезагрузки терминала остаётся дождаться загрузки UPOS
						</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/S300.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'pax-s200',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax S200?',
			description: 'Руководство по прошивке Pax S200',
			image: '/s200.png',
			bgColor: '#08a4e1',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Программа
							<Link
								href={'https://disk.yandex.ru/d/3RhZrYWn5tC1og'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#08a4e1] text-white`}
							>
								PC Loader
							</Link>
						</li>
						<li className='ml-[20px]'>Переходник</li>
						<li className='ml-[20px]'>
							<Link
								href={'#'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Файл прошивки
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Подключаем терминал</li>
						<li className='ml-[20px]'>
							При включении многократно нажимаем кнопку
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								F1
							</span>
						</li>
						<li className='ml-[20px]'>
							После того как на экране появится меню нажимаем красную кнопку
						</li>
						<li className='ml-[20px]'>
							На компьютере запускаем программу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								PC Loader
							</span>
						</li>
						<li className='ml-[20px]'>
							Заходим в
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Setting
							</span>
						</li>
						<li className='ml-[20px]'>
							В поле
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Serial Port
							</span>
							выбираем порт на котором подключен наш терминал. Номер порта можно
							посмотреть в диспетчере устройств
						</li>
						<li className='ml-[20px]'>
							Заходим в
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Application
							</span>
						</li>
						<li className='ml-[20px]'>Указываем путь до файла прошивки</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								APP Info
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Refresh
							</span>
						</li>
						<li className='ml-[20px]'>
							Все найденные файлы удаляем. Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Delete
							</span>
						</li>
						<li className='ml-[20px]'>
							После того как файлы удалятся нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download
							</span>
						</li>
						<li className='ml-[20px]'>Дожидаемся окончания прошивки</li>
						<li className='ml-[20px]'>Нажимаем красную кнопку</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/PAX S200.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'pax-q25',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax Q25?',
			description: 'Руководство по прошивке Pax Q25',
			image: '/q25.png',
			bgColor: '#08a4e1',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/7w6GizD53EmiGA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/RbEz-ll2kQgtzA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#08a4e1] text-white`}
							>
								Драйвер
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Проверяем установлен ли драйвер на компьютере. Заходим в диспетчер
							устройств. Если терминал не присвоил себе порт то устанавливаем
							драйвер
						</li>
						<li className='ml-[20px]'>
							Подключаем терминал к порту USB компьютера
						</li>
						<li className='ml-[20px]'>
							Многократно нажимаем на двойку до появления системного меню
						</li>
						<li className='ml-[20px]'>
							В Выбираем первый пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mr-2`}>
								System Config
							</span>
						</li>
						<li className='ml-[20px]'>
							Вводим пароль -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#08a4e1] text-white`}
							>
								123456
							</span>
						</li>

						<li className='ml-[20px]'>
							Нажимаем 4 чтобы включить
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								XCB Service
							</span>
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 3 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB
							</span>
						</li>
						<li className='ml-[20px]'>
							В скачанной на компьютер
							<Link
								href={'https://disk.yandex.ru/d/7w6GizD53EmiGA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#08a4e1] text-white`}
							>
								папке
							</Link>
							запуcкаем программу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Starter
							</span>
						</li>
						<li className='ml-[20px]'>
							Вводим номер порта на котором подключен наш терминал. Номер порта
							можно посмотреть в диспетчере устройств
						</li>
						<li className='ml-[20px]'>Выбираем нужную нам прошивку</li>
						<li className='ml-[20px]'>Дожидаемся окончания загрузки</li>
						<li className='ml-[20px]'>
							На терминале выбираем 4 пункт -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								XCB Service
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем на единицу -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								Close Service
							</span>
						</li>
						<li className='ml-[20px]'>
							Несколько раз нажимаем на красную кнопку и выключаем терминал
						</li>
						<li className='ml-[20px]'>
							После перезагрузки терминала остаётся дождаться загрузки UPOS
						</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/PAX Q25.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'verifone-vx520',
			author: 'Сергей Кравченко',
			title: 'Как прошить VeriFone VX520?',
			description: 'Руководство по прошивке VeriFone VX520',
			image: '/vx520.png',
			bgColor: '#6effd2',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#VeriFone', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							Папка
							<Link
								href={'https://disk.yandex.ru/d/LxnfSoRsagunFg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#6effd2]`}
							>
								verifone
							</Link>
							с необходимыми файлами
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Включаем терминал</li>
						<li className='ml-[20px]'>Присоединяем флешку</li>
						<li className='ml-[20px]'>
							Для входа в системное меню одновременно зажимаем зелёную кнопку и
							цифру 7
						</li>
						<li className='ml-[20px]'>
							Вводим пароль -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#6effd2]`}
							>
								1 alpha alpha 6 6 8 3 1
							</span>
						</li>
						<li className='ml-[20px]'>
							В меню выбираем пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Memory Function
							</span>
						</li>
						<li className='ml-[20px]'>
							выбираем пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Clear Mem
							</span>
						</li>
						<li className='ml-[20px]'>Повторяем пароль</li>
						<li className='ml-[20px]'>
							Выбираем 4 пункт -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Clear all Groups
							</span>
						</li>
						<li className='ml-[20px]'>
							Подтверждаем нажатием кнопки 2 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Confirm
							</span>
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится нажимаем красную кнопку
						</li>
						<li className='ml-[20px]'>
							Выбираем 1 -
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								Restart
							</span>
							. Устройство перезапустится
						</li>
						<li className='ml-[20px]'>
							Терминал предложит загрузить все файлы - выбираем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								NO
							</span>
						</li>
						<li className='ml-[20px]'>
							Далее по очереди будут предлагаться файлы прошивок. Выбираем
							нужную нам прошивку и нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								YES
							</span>
						</li>
						<li className='ml-[20px]'>
							Все остальные шаги нам не нужны. Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								NO
							</span>
						</li>
						<li className='ml-[20px]'>
							Извлекаем флешку после того как терминал предложит это сделать
						</li>
						<li className='ml-[20px]'>Нажимаем зелёную кнопку</li>
						<li className='ml-[20px]'>
							Осталось дождаться окончания прошивки и загрузки UPOS
						</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/VX520.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'verifone-vx820',
			author: 'Сергей Кравченко',
			title: 'Как прошить VeriFone VX820?',
			description: 'Руководство по прошивке VeriFone VX820',
			image: '/vx820.png',
			bgColor: '#6effd2',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#VeriFone', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Комплектный провод</li>
						<li className='ml-[20px]'>Блок питания micro-USB</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/o4SZOhqtAKcMMg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#6effd2]`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Сначала нужно войти в режим прошивки. Для этого одновременно
							зажимаем зелёную кнопку и цифру 7
						</li>
						<li className='ml-[20px]'>
							Вводим пароль -{' '}
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#6effd2]`}
							>
								166831
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем 6 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Clear Memory
							</span>
						</li>
						<li className='ml-[20px]'>Повторяем пароль</li>
						<li className='ml-[20px]'>
							Выбираем 4 пункт -{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Clear all Groups
							</span>
						</li>
						<li className='ml-[20px]'>
							Подтверждаем нажатием кнопки 2 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Confirm
							</span>
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится нажимаем красную кнопку
						</li>
						<li className='ml-[20px]'>
							Выбираем 1 -
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								Restart
							</span>
							. Терминал перезапустится. На экране должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								GO FILE NOT FOUND
							</span>
						</li>
						<li className='ml-[20px]'>
							Открываем на компьютере заранее скачанную папку и выбираем файл с
							моделью нашего терминала
						</li>
						<li className='ml-[20px]'>
							Откроется командная строка. Следуем инструкциям на экране.
							Нажимаем кнопку
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								1
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждем пока терминал очистится. На экране должна появится надпись{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								No *GO variable
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем кнопку
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								2
							</span>
						</li>
						<li className='ml-[20px]'>
							Осталось дождаться окончания прошивки и загрузки UPOS
						</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/VX820.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'ingenico-ict220-ict250',
			author: 'Сергей Кравченко',
			title: 'Как прошить Ingenico ICT220-ICT250?',
			description: 'Руководство по прошивке Ingenico ICT220-ICT250',
			image: '/ict220.png',
			bgColor: '#41e747',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/ZP3VLrmw0CnZAw'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#41e747]`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Включаем терминал</li>
						<li className='ml-[20px]'>Присоединяем флешку</li>
						<li className='ml-[20px]'>
							Одновременно нажимаем желтую кнопку и точку. Держим до
							перезагрузки
						</li>
						<li className='ml-[20px]'>
							Зажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								F4
							</span>
							. На экране терминала должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB MASS STORAGE
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждём появления меню. Выбираем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								FLASHCLEAN
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждём. На экране должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								Software Activate OK
							</span>
							. Терминал перезагрузится. После перезагрузки на экране должна
							появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								LLT
							</span>
						</li>
						<li className='ml-[20px]'>
							Одновременно нажимаем желтую кнопку и точку. Держим до
							перезагрузки
						</li>
						<li className='ml-[20px]'>
							Зажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								F4
							</span>
							. На экране терминала должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB MASS STORAGE
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждём появления меню. Выбираем файл ОС -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#41e747]`}
							>
								9_32_3V
							</span>
						</li>
						<li className='ml-[20px]'>Дожидаемся загрузки файлов</li>
						<li className='ml-[20px]'>
							Ждём. На экране должна появиться надпись{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								Software Activate OK
							</span>
							. Терминал перезагрузится
						</li>
						<li className='ml-[20px]'>
							Одновременно нажимаем желтую кнопку и точку. Держим до
							перезагрузки
						</li>
						<li className='ml-[20px]'>
							Зажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								F4
							</span>
							. На экране терминала должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB MASS STORAGE
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждём появления меню. Выбираем файл
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Stempel
							</span>
						</li>
						<li className='ml-[20px]'>Дожидаемся загрузки файлов</li>
						<li className='ml-[20px]'>
							Ждём. На экране должна появиться надпись{' '}
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								Software Activate OK
							</span>
							. Терминал перезагрузится
						</li>
						<li className='ml-[20px]'>
							Зажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								F4
							</span>
							. На экране терминала должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB MASS STORAGE
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждём появления меню. Выбираем файл с моделью нашего терминала
						</li>
						<li className='ml-[20px]'>
							Ждём. На экране должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Software Activate OK
							</span>
							. Терминал перезагрузится
						</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/ICT220-ICT250.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'ingenico-ipp320-ipp350',
			author: 'Сергей Кравченко',
			title: 'Как прошить Ingenico IPP320-IPP350?',
			description: 'Руководство по прошивке Ingenico IPP320-IPP350',
			image: '/ipp320.png',
			bgColor: '#41e747',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Программа
							<Link
								href={'https://disk.yandex.ru/d/GuKO1lZnITNtEA'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#41e747] text-white`}
							>
								LLT
							</Link>
						</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/ZP3VLrmw0CnZAw'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#41e747] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Запускаем программу
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								LLT
							</span>
						</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								New Catalogue
							</span>
						</li>
						<li className='ml-[20px]'>
							Если в нижней правой части экрана не отображается порт на котором
							висит терминал, то нужно установить драйвер
						</li>
						<li className='ml-[20px]'>
							Для того чтобы перейти в режим LLT одновременно зажимаем жёлтую
							кнопку и точку. Когда терминал начнёт перезагрузку отпускаем эти
							кнопки и зажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								F1
							</span>
							и держим. После того как на экране появится
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								*
							</span>
							отпускаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								F1
							</span>
							и быстро поочерёдно нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								F2
							</span>
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								F3
							</span>
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								F4
							</span>
							. На экране должна появиться надпись LLT
						</li>
						<li className='ml-[20px]'>
							В нижней правой части экрана дважды нажимаем на значок терминала.
							Выше должны появиться папки
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								HOST
							</span>
							и
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								SWAP
							</span>
							. Удаляем папку
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								HOST
							</span>
						</li>
						<li className='ml-[20px]'>
							В левой части экрана в папке
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								FLASHCLEAN
							</span>
							кликаем правой кнопкой мыши по файлу
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								IPP3XX_CLEAN
							</span>
							. Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								download
							</span>
						</li>
						<li className='ml-[20px]'>
							После загрузки файлов в нижней правой части экрана дважды нажимаем
							на значок терминала и ждём. Термина сам должен перезагрузиться.
							Дожидаемся появления надписи LLT на экране терминала
						</li>
						<li className='ml-[20px]'>
							На компьютере снова подключаем наше устройство двойным нажатием на
							значок терминала
						</li>
						<li className='ml-[20px]'>
							В правой части экрана выбираем файл ОС -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#41e747]`}
							>
								9_32_3V
							</span>
						</li>
						<li className='ml-[20px]'>
							После окончания загрузки в нижней правой части экрана снова дважды
							нажимаем на значок терминала чтобы отконнектиться. Ждём
							перезагрузки терминала
						</li>
						<li className='ml-[20px]'>
							На терминале принимаем все пункты меню. Нажимаем зеленую кнопку до
							появления надписи
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								CHARGER UNE APPLICATION
							</span>
						</li>
						<li className='ml-[20px]'>
							Перезагружаем терминал одновременным нажатием желтой кнопки и
							точки
						</li>
						<li className='ml-[20px]'>
							После того как начнется перезагрузка многократно нажимаем кнопку
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								F
							</span>
							пока не появится системное меню
						</li>
						<li className='ml-[20px]'>
							Выбираем пункт -
							<span
								className={`${badgeVariants({ variant: 'outline' })} ml-2 `}
							>
								Local Download
							</span>
							. Терминал снова войдёт в режим LLT
						</li>
						<li className='ml-[20px]'>
							На компьютере снова приконнекчиваем терминал. Дважды нажимаем на
							значок терминала
						</li>
						<li className='ml-[20px]'>
							В Левой части экрана выбираем файл
							<span
								className={`${badgeVariants({ variant: 'outline' })} ml-2 `}
							>
								STEMPEL
							</span>
						</li>
						<li className='ml-[20px]'>
							После загрузки файла отконнекчиваем терминал двойным нажатием на
							значок.
						</li>
						<li className='ml-[20px]'>Ждём пока терминал перезапустится</li>
						<li className='ml-[20px]'>
							Перезагружаем терминал вручную одновременным нажатием желтой
							кнопки и точки
						</li>
						<li className='ml-[20px]'>
							После того как начнется перезагрузка многократно нажимаем кнопку
							<span
								className={`${badgeVariants({ variant: 'outline' })} ml-2 `}
							>
								F
							</span>
							пока не появится системное меню
						</li>
						<li className='ml-[20px]'>
							Выбираем пункт -
							<span
								className={`${badgeVariants({ variant: 'outline' })} ml-2 `}
							>
								Local Download
							</span>
							. Терминал снова войдёт в режим LLT
						</li>
						<li className='ml-[20px]'>
							Снова приконнекчиваем терминал. Дважды нажимаем на значок
							терминала
						</li>
						<li className='ml-[20px]'>
							В Левой части экрана находим папку с названием нашего терминала и
							выбираем нужную прошивку
						</li>
						<li className='ml-[20px]'>
							После окончания прошивки дважды нажимаем на значок. Ждём
							перезагрузки терминала
						</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/IPP320-350.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'ingenico-iwl320-iwl350',
			author: 'Сергей Кравченко',
			title: 'Как прошить Ingenico IWL220-IWL250?',
			description: 'Руководство по прошивке Ingenico IWL220-IWL250',
			image: '/iwl220.png',
			bgColor: '#41e747',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Переходник USB мама - mini USB папа</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/ZP3VLrmw0CnZAw'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#41e747]`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Подключаем флешку с помощью переходника
						</li>
						<li className='ml-[20px]'>
							Включаем терминал нажатием на зелёную кнопку и сразу же зажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								F4
							</span>
							. Должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB MASS STORAGE
							</span>
						</li>
						<li className='ml-[20px]'>Дожидаемся появления меню</li>
						<li className='ml-[20px]'>
							Выбираем пункт
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								FLASHCLEAN
							</span>
						</li>
						<li className='ml-[20px]'>Ждём очистки и перезагрузки терминала</li>
						<li className='ml-[20px]'>
							После того как на экране появится надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								LLT
							</span>
							одновременно зажимаем жёлтую кнопку и точку. Терминал выключится
						</li>
						<li className='ml-[20px]'>
							Включаем терминал нажатием на зелёную кнопку
						</li>
						<li className='ml-[20px]'>
							В меню выбираем пункт -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#41e747]`}
							>
								9_32_3V
							</span>
						</li>
						<li className='ml-[20px]'>
							Ждём установки файлов и перезагрузки терминала
						</li>
						<li className='ml-[20px]'>
							После перезагрузки терминала одновременно зажимаем жёлтую кнопку и
							точку. Терминал выключится
						</li>
						<li className='ml-[20px]'>
							Включаем терминал нажатием на зелёную кнопку и сразу же зажимаем
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								F4
							</span>
						</li>
						<li className='ml-[20px]'>
							В меню выбираем файл -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								Stempel
							</span>
						</li>
						<li className='ml-[20px]'>
							После перезагрузки терминала одновременно зажимаем жёлтую кнопку и
							точку. Терминал выключится
						</li>
						<li className='ml-[20px]'>
							Включаем терминал нажатием на зелёную кнопку и сразу же зажимаем
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 `}
							>
								F4
							</span>
						</li>
						<li className='ml-[20px]'>
							В меню выбираем файл с названием модели нашего устройства
						</li>
						<li className='ml-[20px]'>
							После того как терминал перезагрузится останется дождаться
							загрузки UPOS
						</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/IWL220-IWL250.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'tactilion-t2',
			author: 'Сергей Кравченко',
			title: 'Как прошить Tactilion T2?',
			description: 'Руководство по прошивке Tactilion T2',
			image: '/t2.png',
			bgColor: '#ffd829',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Tactilion', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/KfbfXY0nfsmAEg'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#ffd829] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Подключаем флешку к терминалу</li>
						<li className='ml-[20px]'>Нажимаем на кнопку включения</li>
						<li className='ml-[20px]'>
							После того как терминал издаст звуковой сигнал быстро зажимаем
							клавиши
							<span className={`${badgeVariants({ variant: 'outline' })} mr-2`}>
								F
							</span>
							и
							<span className={`${badgeVariants({ variant: 'outline' })} ml-2`}>
								1
							</span>
							. Держим пока не появится системное меню
						</li>
						<li className='ml-[20px]'>
							Для начала очищаем терминал. Выбираем пункт 4 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Clear APPs
							</span>
						</li>
						<li className='ml-[20px]'>
							Вводим пароль -
							<span
								className={`${badgeVariants({ variant: 'outline' })} mx-2 bg-[#ffd829] text-white`}
							>
								83890345
							</span>
						</li>
						<li className='ml-[20px]'>
							Подтверждаем нажатием на зелёную кнопку
						</li>
						<li className='ml-[20px]'>
							В меню выбираем пункт 3 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								U disk download
							</span>
						</li>
						<li className='ml-[20px]'>
							После завершения прошивки дважды нажимаем кнопку назад и один раз
							зеленую кнопку
						</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/TACTILION T2.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'castles-vega3000',
			author: 'Сергей Кравченко',
			title: 'Как прошить Castles Vega3000 стац?',
			description: 'Руководство по прошивке Castles Vega3000 стац',
			image: '/v3st.png',
			bgColor: '#704ecc',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>Переходник USB мама - mini USB папа</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/YWXEkFPT6dtvnQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#704ecc] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Подключаем флешку с помощью переходника к порту
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB1
							</span>
							на задней стороне терминала
						</li>
						<li className='ml-[20px]'>
							Включаем терминал и многократно нажимаем на красную кнопку пока не
							появится системное меню
						</li>
						<li className='ml-[20px]'>
							Удаляем старый UPOS - кнопка
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								2
							</span>
						</li>
						<li className='ml-[20px]'>Подтверждаем удаление</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								0
							</span>
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 1 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download AP
							</span>
						</li>
						<li className='ml-[20px]'>
							Далее выбираем пункт 2 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB Disk
							</span>
						</li>
						<li className='ml-[20px]'>
							После завершения прошивки нажимаем любую кнопку
						</li>
						<li className='ml-[20px]'>Дважды нажимаем красную кнопку</li>
						<li className='ml-[20px]'>
							На экране должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								[Default Select]
							</span>
						</li>
						<li className='ml-[20px]'>
							Если её нет нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								1
							</span>
						</li>
						<li className='ml-[20px]'>Нажимаем зелёную кнопку</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/Vega3000 GPRS-ETH.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'castles-vega3000-mob',
			author: 'Сергей Кравченко',
			title: 'Как прошить Castles Vega3000 моб?',
			description: 'Руководство по прошивке Castles Vega3000 моб',
			image: '/v3mob.png',
			bgColor: '#704ecc',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>Переходник USB мама - mini USB папа</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/YWXEkFPT6dtvnQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#704ecc] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Включаем терминал</li>
						<li className='ml-[20px]'>
							Подключаем флешку с помощью переходника
						</li>
						<li className='ml-[20px]'>Перезагружаем терминал</li>
						<li className='ml-[20px]'>
							Многократно нажимаем красную кнопку до появления системного меню
						</li>
						<li className='ml-[20px]'>
							Удаляем старый UPOS - кнопка
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								2
							</span>
						</li>
						<li className='ml-[20px]'>Подтверждаем удаление</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								0
							</span>
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 1 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download AP
							</span>
						</li>
						<li className='ml-[20px]'>
							Далее выбираем пункт 2 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB Disk
							</span>
						</li>
						<li className='ml-[20px]'>
							После завершения прошивки нажимаем любую кнопку
						</li>
						<li className='ml-[20px]'>Дважды нажимаем красную кнопку</li>
						<li className='ml-[20px]'>
							На экране должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								[Default Select]
							</span>
						</li>
						<li className='ml-[20px]'>
							Если её нет нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								1
							</span>
						</li>
						<li className='ml-[20px]'>Нажимаем зелёную кнопку</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/Castles vega 3000 GPRS.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
		},
		{
			id: v4(),
			url: 'castles-vega3000-ikr',
			author: 'Сергей Кравченко',
			title: 'Как прошить Castles Vega3000 ИКР?',
			description: 'Руководство по прошивке Castles Vega3000 ИКР',
			image: '/v3ikr.png',
			bgColor: '#704ecc',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			contentItems: [
				'Что понадобится?',
				'Как прошить?',
				'Видео',
				'Читайте также'
			],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Флешка в формате FAT32</li>
						<li className='ml-[20px]'>Комплектный провод</li>
						<li className='ml-[20px]'>Переходник USB мама - mini USB папа</li>
						<li className='ml-[20px]'>
							<Link
								href={'https://disk.yandex.ru/d/YWXEkFPT6dtvnQ'}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2 bg-[#704ecc] text-white`}
							>
								Папка с файлами
							</Link>
						</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>
							Подключить питание терминала к компьютеру
						</li>
						<li className='ml-[20px]'>
							Подключить флешку с помощью переходника
						</li>
						<li className='ml-[20px]'>
							Отключаем питание от компьютера и включаем стова чтобы
							перезагрузить терминал
						</li>
						<li className='ml-[20px]'>
							При включении многократно нажимаем красную кнопку до появления
							системного меню
						</li>
						<li className='ml-[20px]'>
							Удаляем старый UPOS - кнопка
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								2
							</span>
						</li>
						<li className='ml-[20px]'>Подтверждаем удаление</li>
						<li className='ml-[20px]'>
							Нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								0
							</span>
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 1 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								Download AP
							</span>
						</li>
						<li className='ml-[20px]'>
							Далее выбираем пункт 2 -
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								USB Disk
							</span>
						</li>
						<li className='ml-[20px]'>
							После завершения прошивки нажимаем любую кнопку
						</li>
						<li className='ml-[20px]'>Дважды нажимаем красную кнопку</li>
						<li className='ml-[20px]'>
							На экране должна появиться надпись
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								[Default Select]
							</span>
						</li>
						<li className='ml-[20px]'>
							Если её нет нажимаем
							<span className={`${badgeVariants({ variant: 'outline' })} mx-2`}>
								1
							</span>
						</li>
						<li className='ml-[20px]'>Нажимаем зелёную кнопку</li>
						<li className='ml-[20px]'>Осталось дождаться загрузки UPOS</li>
					</ul>
					<h2 id='3' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Видео
					</h2>
					<video width='320' height='180' controls>
						<source src='/Vega3000 ИКР.mp4' type='video/mp4' />
						Ваш браузер не поддерживает видео тег.
					</video>
				</div>
			)
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
