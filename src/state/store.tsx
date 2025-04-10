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
				<div className='p-4 w-[50%] bg-gray-300 rounded-xl flex-auto'>
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
								href={
									'https://drive.google.com/uc?export=download&id=1zHNbojcHBEpuA6ZLaEWsBXmnnbTafb1g'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
							Включите смарт-терминал и подключите его к интернету.
						</li>
						<li className='ml-[20px]'>
							Очистите файловую систему. Для этого перейдите в Обслуживание
							кассы → Эквайринг или Эвотор.PAY → Файловая система →
							Форматировать. Нажмите Запрос на обновление.
						</li>
						<li className='ml-[20px]'>
							Загрузите обновления платёжного модуля. Для этого перейдите в
							Обслуживание кассы → Эквайринг или Эвотор.PAY → Прошивка. Нажмите
							Запрос на обновление.
						</li>
						<li className='ml-[20px]'>
							После обновления проверьте какая версия прошивки установлена, для
							этого зайдите в раздел Настройки → Обслуживание кассы → Эквайринг
							или Эвотор.PAY → Общая информация.
						</li>
						<li className='ml-[20px]'>
							На данный момент актуальная версия для 520 и 521 - 1.8.2.1, для
							522 - 3.1.2.1
						</li>
						<li className='ml-[20px]'>
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1zHNbojcHBEpuA6ZLaEWsBXmnnbTafb1g'
								}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2`}
							>
								Скачайте
							</Link>
							файл прошивки. На данный момент актуальная версия прошивки 4.9.11
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;.
						</li>
						<li className='ml-[20px]'>
							Нажмите на &apos;Проверить и установить.&apos;
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
								href={
									'https://drive.google.com/uc?export=download&id=1n08SYgy72qF2susGP8Cnmw5tbupIaXX5'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
								href={
									'https://drive.google.com/uc?export=download&id=1n08SYgy72qF2susGP8Cnmw5tbupIaXX5'
								}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2`}
							>
								Скачайте
							</Link>
							файл прошивки. На данный момент актуальная версия прошивки 4.9.11
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;
						</li>
						<li className='ml-[20px]'>
							Нажмите на &apos;Проверить и установить.&apos;
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
								href={
									'https://drive.google.com/uc?export=download&id=1GfdNdQIm04HbXzrNA0fyVDik_z3q98Xk'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
								href={
									'https://drive.google.com/uc?export=download&id=1GfdNdQIm04HbXzrNA0fyVDik_z3q98Xk'
								}
								target='_blank'
								download
								className={`${badgeVariants({ variant: 'outline' })} mr-2`}
							>
								Скачайте
							</Link>
							файл прошивки. На данный момент актуальная версия прошивки 4.9.11
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;.
						</li>
						<li className='ml-[20px]'>
							Нажмите на &apos;Проверить и установить.&apos;
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
								href={
									'https://drive.google.com/uc?export=download&id=1BO5nAbUB9ob3fGe2XGn954FrJZLoIVe2'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
									'https://drive.google.com/uc?export=download&id=1BO5nAbUB9ob3fGe2XGn954FrJZLoIVe2'
								}
								target='_blank'
								download
								className='px-2 underline hover:no-underline'
							>
								файл прошивки.
							</Link>
							На данный момент актуальная версия прошивки 4.9.11
						</li>
						<li className='ml-[20px]'>Подготовте флешку в формате FAT32</li>
						<li className='ml-[20px]'>
							Поместите файл прошивки в корень флешки
						</li>
						<li className='ml-[20px]'>Включите кассу</li>
						<li className='ml-[20px]'>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;.
						</li>
						<li className='ml-[20px]'>
							Нажмите на &apos;Проверить и установить.&apos;
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
						<li className='ml-[20px]'>
							Переходник USB &apos;мама&apos; - Type C &apos;папа&apos;
						</li>
						<li className='ml-[20px]'>
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
								className='px-2 underline hover:no-underline'
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
							Нажмите на &apos;Проверить и установить&apos;
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
							Нажимаем &apos;Мобильная сеть&apos; → &apos;Добавить eSIM&apos;.
						</li>
						<li className='ml-[20px]'>
							Заходим в Telegram бота
							<Link
								href={'https://t.me/WERGIT_bot'}
								className='px-2 underline hover:no-underline'
								target='_blank'
							>
								@WERGIT_bot.
							</Link>
						</li>
						<li className='ml-[20px]'>
							При первом использовании бота необходимо пройти регистрацию.
						</li>
						<li className='ml-[20px]'>
							Вводим команду &apos;getqr 111222333&apos;. Где
							&apos;111222333&apos; - серийный номер устройства
						</li>
						<li className='ml-[20px]'>
							После того как бот распознает терминал вам станут доступна кнопка
							&apos;получить QR&apos;. Нажимаем на неё.
						</li>
						<li className='ml-[20px]'>
							Нажимаем на оранжевую кнопку на левой стороне устройства и
							сканируем полученный QR.
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
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
					</ul>
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
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
						<li className='ml-[20px]'></li>
					</ul>
					<h2 className='my-8 text-3xl'>Видео</h2>
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
								href={
									'https://drive.google.com/uc?export=download&id=1A2_GfAb4UBjCabcKft7sIl-V-HV9Gkx9'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
						<li className='ml-[20px]'>Выбираем нужный файл прошивки</li>
						<li className='ml-[20px]'>Подтверждаем выбор</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем первый пункт - DELETE APP
						</li>
						<li className='ml-[20px]'>
							Затем также выбираем первый пункт - Delete all app
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится выбираем второй пункт - DOWNLOAD
							ALL
						</li>
						<li className='ml-[20px]'>
							После окончания прошивки дважды нажимаем красную кнопку и
							вытаскиваем флешку. Терминал перезапустится и начнётся загрузка
							UPOS
						</li>
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
								href={
									'https://drive.google.com/uc?export=download&id=1A2_GfAb4UBjCabcKft7sIl-V-HV9Gkx9'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
						<li className='ml-[20px]'>Выбираем нужный файл прошивки</li>
						<li className='ml-[20px]'>Подтверждаем выбор</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем первый пункт - DELETE APP
						</li>
						<li className='ml-[20px]'>
							Затем также выбираем первый пункт - Delete all app
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится выбираем второй пункт - DOWNLOAD
							ALL
						</li>
						<li className='ml-[20px]'>
							После окончания прошивки дважды нажимаем красную кнопку и
							вытаскиваем флешку. Терминал перезапустится и начнётся загрузка
							UPOS
						</li>
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
							Переходник USB 2.0 &apos;мама&apos; - USB 2.0 &apos;мама&apos;
						</li>
						<li className='ml-[20px]'>
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1mKleqimtFMRrpdWusaRaMERIbtrI872C'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
							Помещаем{' '}
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1mKleqimtFMRrpdWusaRaMERIbtrI872C'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
							>
								Файл прошивки
							</Link>{' '}
							в корень флешки.
						</li>
						<li className='ml-[20px]'>
							Присоединяем флешку через переходник к проводу подключения пинпада
							к компьютеру.
						</li>
						<li className='ml-[20px]'>
							Подключаем питание к сети. Должна появиться запись
							&apos;U-DISC_DOWNLOAD&apos;. Это означает что терминал начал
							сканировать флешку.
						</li>
						<li className='ml-[20px]'>
							Из появившегося списка выбираем нужный нам файл с прошивкой.
							Терминал начнет чтение файла.
						</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем &apos;DELETE APP&apos; - &apos;Delete
							all app&apos;
						</li>
						<li className='ml-[20px]'>
							Далее выбираем &apos;DOWNLOAD ALL&apos;. Начнется загрузка файла.
						</li>
						<li className='ml-[20px]'>
							Нажимаем красную кнопку. Появится надпись &apos;DOWNLOAD
							OVER&apos;
						</li>
						<li className='ml-[20px]'>
							Ещё раз нажимаем красную кнопку. Терминал перезагрузится.
						</li>
						<li className='ml-[20px]'>
							В момент перезагрузки отсоединяем флешку. После перезагрузки
							начнётся загрузка UPOS.
						</li>
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
						<li className='ml-[20px]'>Комплектный провод</li>
						<li className='ml-[20px]'>Программа TermAssist</li>
						<li className='ml-[20px]'>Файл с прошивкой</li>
						<li className='ml-[20px]'>Драйвер</li>
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
							В Выбираем первый пункт - System Config
						</li>
						<li className='ml-[20px]'>Вводим пароль - 123456</li>
						<li className='ml-[20px]'>Нажимаем 4 чтобы включить XCB Service</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 3 - USB
						</li>
						<li className='ml-[20px]'>
							В скачанной на компьютер папке запуcкаем программу Starter
						</li>
						<li className='ml-[20px]'>
							Вводим номер порта на котором подключен наш терминал. Номер порта
							можно посмотреть в диспетчере устройств
						</li>
						<li className='ml-[20px]'>Выбираем нужную нам прошивку</li>
						<li className='ml-[20px]'>Дожидаемся окончания загрузки</li>
						<li className='ml-[20px]'>
							На терминале выбираем 4 пункт - XCB Service
						</li>
						<li className='ml-[20px]'>Нажимаем на единицу - Close Service</li>
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
						<li className='ml-[20px]'>Программа PC Loader</li>
						<li className='ml-[20px]'>Переходник</li>
					</ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li className='ml-[20px]'>Подключаем терминал</li>
						<li className='ml-[20px]'>
							При включении многократно нажимаем кнопку F1
						</li>
						<li className='ml-[20px]'>
							После того как на экране появится меню нажимаем красную кнопку
						</li>
						<li className='ml-[20px]'>
							На компьютере запускаем программу PC Loader
						</li>
						<li className='ml-[20px]'>Заходим в Setting</li>
						<li className='ml-[20px]'>
							В поле Serial Port выбираем порт на котором подключен наш
							терминал. Номер порта можно посмотреть в диспетчере устройств
						</li>
						<li className='ml-[20px]'>Заходим в Application</li>
						<li className='ml-[20px]'>Указать путь до файла прошивки</li>
						<li className='ml-[20px]'>Нажимаем APP Info</li>
						<li className='ml-[20px]'>Нажимаем Refresh</li>
						<li className='ml-[20px]'>
							Все найденные файлы удаляем. Нажимаем Delete
						</li>
						<li className='ml-[20px]'>
							После того как файлы удалятся нажимаем Download
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
						<li className='ml-[20px]'>Папка с файлами</li>
						<li className='ml-[20px]'>Драйвер</li>
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
							В Выбираем первый пункт - System Config
						</li>
						<li className='ml-[20px]'>Вводим пароль - 123456</li>
						<li className='ml-[20px]'>Нажимаем 4 чтобы включить XCB Service</li>
						<li className='ml-[20px]'>
							В появившемся меню выбираем пункт 3 - USB
						</li>
						<li className='ml-[20px]'>
							В скачанной на компьютер папке запуcкаем программу Starter
						</li>
						<li className='ml-[20px]'>
							Вводим номер порта на котором подключен наш терминал. Номер порта
							можно посмотреть в диспетчере устройств
						</li>
						<li className='ml-[20px]'>Выбираем нужную нам прошивку</li>
						<li className='ml-[20px]'>Дожидаемся окончания загрузки</li>
						<li className='ml-[20px]'>
							На терминале выбираем 4 пункт - XCB Service
						</li>
						<li className='ml-[20px]'>Нажимаем на единицу - Close Service</li>
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
							Папка{' '}
							<Link
								href={
									'https://drive.google.com/drive/folders/1cZYY60KgnU85nJDpRdDTStk1XVw6BLb6?usp=drive_link'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
							>
								verifone
							</Link>{' '}
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
							Вводим пароль - 1 alpha alpha 6 6 8 3 1
						</li>
						<li className='ml-[20px]'>
							В меню выбираем пункт - Memory Function
						</li>
						<li className='ml-[20px]'>выбираем пункт - Clear Mem</li>
						<li className='ml-[20px]'>Повторяем пароль</li>
						<li className='ml-[20px]'>Выбираем 4 пункт - Clear all Groups</li>
						<li className='ml-[20px]'>
							Подтверждаем нажатием кнопки 2 - Confirm
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится нажимаем красную кнопку
						</li>
						<li className='ml-[20px]'>
							Выбираем 1 - Restart. Устройство перезапустится
						</li>
						<li className='ml-[20px]'>
							Терминал предложит загрузить все файлы - выбираем NO
						</li>
						<li className='ml-[20px]'>
							Далее по очереди будут предлагаться файлы прошивок. Выбираем
							нужную нам прошивку и нажимаем Yes
						</li>
						<li className='ml-[20px]'>
							Все остальные шаги нам не нужны. Нажимаем NO
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
								href={
									'https://drive.google.com/drive/folders/19MO7THGTlL8OWdVknxXMB5i0YUGxmcZr?usp=drive_link'
								}
								target='_blank'
								download
								className='underline hover:no-underline'
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
						<li className='ml-[20px]'>Вводим пароль - 166831</li>
						<li className='ml-[20px]'>Нажимаем 6 - Clear Memory</li>
						<li className='ml-[20px]'>Повторяем пароль</li>
						<li className='ml-[20px]'>Выбираем 4 пункт - Clear all Groups</li>
						<li className='ml-[20px]'>
							Подтверждаем нажатием кнопки 2 - Confirm
						</li>
						<li className='ml-[20px]'>
							После того как терминал очистится нажимаем красную кнопку
						</li>
						<li className='ml-[20px]'>
							Выбираем 1 - Restart. Терминал перезапустится. На экране должна
							появиться надпись GO FILE NOT FOUND
						</li>
						<li className='ml-[20px]'>
							Открываем на компьютере заранее скачанную папку и выбираем файл с
							моделью нашего терминала
						</li>
						<li className='ml-[20px]'>
							Откроется командная строка. Следуем инструкциям на экране.
							Нажимаем кнопку 1
						</li>
						<li className='ml-[20px]'>
							Ждем пока терминал очистится. На экране должна появится надпись No
							*GO variable
						</li>
						<li className='ml-[20px]'>Нажимаем кнопку 2</li>
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
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
			contentItems: ['Что понадобится?', 'Как прошить?', 'Читайте также'],
			content: (
				<div>
					<h2 id='1' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Что понадобится?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 id='2' className='my-8 pt-[142px] mt-[-102px] text-3xl'>
						Как прошить?
					</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
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
