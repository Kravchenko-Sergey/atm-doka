import { v4 } from 'uuid'
import { badgeVariants } from '@/components/ui/badge'
import { create } from 'zustand'
import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import { ScanFace, Send, Users } from 'lucide-react'
import { Avatar } from 'avataaars'

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
	tags: string[]
	content: JSX.Element
}

type Person = {
	id: string
	avatar: JSX.Element
	name: string
	description: string
}

type RootState = {
	messages: Message[]
	posts: Post[]
	people: Person[]
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
				<div className='p-8 w-[50%] bg-gray-200 rounded-xl flex-auto'>
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
				<div className='p-8 w-[50%] border rounded-xl flex-auto'>
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
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: (
				<div className='bg-amber-600'>
					<Image
						src='/evo5i.jpg'
						width={500}
						height={500}
						priority
						alt='evo5i'
						style={{
							width: 'auto',
							height: 'auto'
						}}
					/>
					<h2 className='mt-4 mb-8 text-3xl'>Как прошить?</h2>
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
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: (
				<div>
					<Image
						src='/evo72.jpg'
						width={500}
						height={500}
						priority
						alt='evo72'
						style={{
							width: 'auto',
							height: 'auto'
						}}
					/>
					<h2 className='mt-4 mb-8 text-3xl'>Как прошить?</h2>
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
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: (
				<div>
					<Image
						src='/evo73.jpg'
						width={500}
						height={500}
						priority
						alt='evo73'
						style={{
							width: 'auto',
							height: 'auto'
						}}
					/>
					<h2 className='mt-4 mb-8 text-3xl'>Как прошить?</h2>
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
			tags: ['Сбер', 'Эвотор', 'Прошивка'],
			content: (
				<div>
					<Image
						src='/evo10.jpg'
						width={500}
						height={500}
						priority
						alt='evo10'
						style={{
							width: 'auto',
							height: 'auto'
						}}
					/>
					<h2 className='mt-4 mb-8 text-3xl'>Как прошить?</h2>
					<ul className='list-disc text-xl flex flex-col gap-4'>
						<li>
							<Link
								href={
									'https://drive.google.com/uc?export=download&id=1BO5nAbUB9ob3fGe2XGn954FrJZLoIVe2'
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
		}
	]
}))
