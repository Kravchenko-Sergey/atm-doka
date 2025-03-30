import { v4 } from 'uuid'
import { badgeVariants } from '@/components/ui/badge'
import { create } from 'zustand'
import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import { ScanFace, Send, Users } from 'lucide-react'

type Message = {
	id: string
	title: string
	content: JSX.Element
}

type Post = {
	id: string
	url: string
	author: string
	title: string
	description: string
	bgImage: string
	tags: string[]
	content: JSX.Element
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
}

export const useRootStore = create<RootState>(() => ({
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
				<div className='p-4 w-[50%] bg-gray-200 rounded-xl flex-auto'>
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
				<div className='p-4 w-[50%] border rounded-xl flex-auto'>
					<div className='pb-8 text-2xl'>Дока ищет партнёров</div>
					<div className='text-xl'>
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
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/evo5i.jpg'
						width={500}
						height={500}
						priority
						alt='evo5i'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>Флешка в формате FAT32</li>
						<li>
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
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>Включите смарт-терминал и подключите его к интернету.</li>
						<li>
							Очистите файловую систему. Для этого перейдите в Обслуживание
							кассы → Эквайринг или Эвотор.PAY → Файловая система →
							Форматировать. Нажмите Запрос на обновление.
						</li>
						<li>
							Загрузите обновления платёжного модуля. Для этого перейдите в
							Обслуживание кассы → Эквайринг или Эвотор.PAY → Прошивка. Нажмите
							Запрос на обновление.
						</li>
						<li>
							После обновления проверьте какая версия прошивки установлена, для
							этого зайдите в раздел Настройки → Обслуживание кассы → Эквайринг
							или Эвотор.PAY → Общая информация.
						</li>
						<li>
							На данный момент актуальная версия для 520 и 521 - 1.8.2.1, для
							522 - 3.1.2.1
						</li>
						<li>
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
						<li>Подготовте флешку в формате FAT32</li>
						<li>Поместите файл прошивки в корень флешки</li>
						<li>Включите кассу</li>
						<li>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;.
						</li>
						<li>Нажмите на &apos;Проверить и установить.&apos;</li>
						<li>
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
			url: 'evotor72',
			author: 'Сергей Кравченко',
			title: 'Как прошить Evotor 72?',
			description: 'Руководство по прошивке Evotor 7.2',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/evo72.jpg'
						width={500}
						height={500}
						priority
						alt='evo72'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>Флешка в формате FAT32</li>
						<li>
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
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>
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
						<li>Подготовте флешку в формате FAT32</li>
						<li>Поместите файл прошивки в корень флешки</li>
						<li>Включите кассу</li>
						<li>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;
						</li>
						<li>Нажмите на &apos;Проверить и установить.&apos;</li>
						<li>
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
			title: 'Как прошить Evotor 73?',
			description: 'Руководство по прошивке Evotor 7.3',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/evo73.jpg'
						width={500}
						height={500}
						priority
						alt='evo73'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>Флешка в формате FAT32</li>
						<li>
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
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>
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
						<li>Подготовте флешку в формате FAT32</li>
						<li>Поместите файл прошивки в корень флешки</li>
						<li>Включите кассу</li>
						<li>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;.
						</li>
						<li>Нажмите на &apos;Проверить и установить.&apos;</li>
						<li>
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
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Эвотор', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/evo10.jpg'
						width={500}
						height={500}
						priority
						alt='evo10'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>Флешка в формате FAT32</li>
						<li>
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
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>
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
						<li>Подготовте флешку в формате FAT32</li>
						<li>Поместите файл прошивки в корень флешки</li>
						<li>Включите кассу</li>
						<li>
							Вставте флешку в кассу. Устройство автоматически начнёт прошивку.
							На экране появится окно &apos;Обновление системы&apos;.
						</li>
						<li>Нажмите на &apos;Проверить и установить.&apos;</li>
						<li>
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
			url: 'pax-sp30',
			author: 'Сергей Кравченко',
			title: 'Как прошить Pax SP30?',
			description: 'Руководство по прошивке Pax SP30',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Pax', '#Прошивка'],
			content: (
				<div>
					<Image src='/sp30.jpg' width={500} height={500} priority alt='sp30' />
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>Комплектный провод</li>
						<li>Блок питания micro-usb</li>
						<li>Флешка в формате FAT32</li>
						<li>
							Переходник USB 2.0 &apos;мама&apos; - USB 2.0 &apos;мама&apos;
						</li>
						<li>
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
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>
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
						<li>
							Присоединяем флешку через переходник к проводу подключения пинпада
							к компьютеру.
						</li>
						<li>
							Подключаем питание к сети. Должна появиться запись
							&apos;U-DISC_DOWNLOAD&apos;. Это означает что терминал начал
							сканировать флешку.
						</li>
						<li>
							Из появившегося списка выбираем нужный нам файл с прошивкой.
							Терминал начнет чтение файла.
						</li>
						<li>
							В появившемся меню выбираем &apos;DELETE APP&apos; - &apos;Delete
							all app&apos;
						</li>
						<li>
							Далее выбираем &apos;DOWNLOAD ALL&apos;. Начнется загрузка файла.
						</li>
						<li>
							Нажимаем красную кнопку. Появится надпись &apos;DOWNLOAD
							OVER&apos;
						</li>
						<li>Ещё раз нажимаем красную кнопку. Терминал перезагрузится.</li>
						<li>
							В момент перезагрузки отсоединяем флешку. После перезагрузки
							начнётся загрузка UPOS.
						</li>
					</ul>
					<h2 className='my-8 text-3xl'>Видео</h2>
					<video width='320' height='180' controls>
						<source src='/PAX SP30.mp4' type='video/mp4' />
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
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#VeriFone', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/vx520.webp'
						width={500}
						height={500}
						priority
						alt='vx520'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Видео</h2>
					<video width='320' height='180' controls>
						<source src='/VX520.mp4' type='video/mp4' />
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
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Ingenico', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/ict220.jpg'
						width={500}
						height={500}
						priority
						alt='ict220'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Видео</h2>
					<video width='320' height='180' controls>
						<source src='/ICT220-ICT250.mp4' type='video/mp4' />
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
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Tactilion', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/tactilion-t2.jpg'
						width={500}
						height={500}
						priority
						alt='Tactilion T2'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Видео</h2>
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
			title: 'Как прошить Castles Vega3000?',
			description: 'Руководство по прошивке Castles Vega3000',
			bgImage: '/sberbg.jpg',
			tags: ['#Сбер', '#Castles', '#Прошивка'],
			content: (
				<div>
					<Image
						src='/castles-vega3000.jpg'
						width={500}
						height={500}
						priority
						alt='Castles Vega3000'
					/>
					<h2 className='my-8 text-3xl'>Что понадобится?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'></ul>
					<h2 className='my-8 text-3xl'>Видео</h2>
					<video width='320' height='180' controls>
						<source src='/Vega3000 GPRS-ETH.mp4' type='video/mp4' />
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
	]
}))
