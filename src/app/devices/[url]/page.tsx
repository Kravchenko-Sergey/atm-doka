import { v4 } from 'uuid'
import { badgeVariants } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { JSX } from 'react'

type Device = {
	id: string
	title: string
	url: string
	content: JSX.Element
}

const devices: Device[] = [
	{
		id: v4(),
		title: 'Эвотор 5i',
		url: 'evotor5i',
		content: (
			<div>
				<Image src='/evo5i.jpg' width={500} height={500} alt='evo5i' />
				<h2 className='mt-4 mb-8 text-3xl'>Как прошить?</h2>
				<ul className='list-disc text-xl flex flex-col gap-4'>
					<li>Включите смарт-терминал и подключите его к интернету.</li>
					<li>
						Очистите файловую систему. Для этого перейдите в Обслуживание кассы
						→ Эквайринг или Эвотор.PAY → Файловая система → Форматировать.
						Нажмите Запрос на обновление.
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
						На данный момент актуальная версия для 520 и 521 - 1.8.2.1, для 522
						- 3.1.2.1
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
						Вставте флешку в кассу. Устройство автоматически начнёт прошивку. На
						экране появится окно &apos;Обновление системы&apos;.
					</li>
					<li>Нажмите на &apos;Проверить и установить.&apos;</li>
					<li>
						Касса начнет расшифровывать файл с обновлением, это займет некоторое
						время. После успешной установки касса сама перезагрузится. Подождите
						еще 1-2 минуты и вытащите флешку.
					</li>
				</ul>
			</div>
		)
	},
	{
		id: v4(),
		title: 'Эвотор 7.2',
		url: 'evotor72',
		content: (
			<div>
				<Image src='/evo72.jpg' width={500} height={500} alt='evo72' />
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
						Вставте флешку в кассу. Устройство автоматически начнёт прошивку. На
						экране появится окно &apos;Обновление системы&apos;
					</li>
					<li>Нажмите на &apos;Проверить и установить.&apos;</li>
					<li>
						Касса начнет расшифровывать файл с обновлением, это займет некоторое
						время. После успешной установки касса сама перезагрузится. Подождите
						еще 1-2 минуты и вытащите флешку.
					</li>
				</ul>
			</div>
		)
	},
	{
		id: v4(),
		title: 'Эвотор 7.3',
		url: 'evotor73',
		content: (
			<div>
				<Image src='/evo73.jpg' width={500} height={500} alt='evo73' />
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
						Вставте флешку в кассу. Устройство автоматически начнёт прошивку. На
						экране появится окно &apos;Обновление системы&apos;.
					</li>
					<li>Нажмите на &apos;Проверить и установить.&apos;</li>
					<li>
						Касса начнет расшифровывать файл с обновлением, это займет некоторое
						время. После успешной установки касса сама перезагрузится. Подождите
						еще 1-2 минуты и вытащите флешку.
					</li>
				</ul>
			</div>
		)
	},
	{
		id: v4(),
		title: 'Эвотор 10',
		url: 'evotor10',
		content: (
			<div>
				<Image src='/evo10.jpg' width={500} height={500} alt='evo10' />
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
						Вставте флешку в кассу. Устройство автоматически начнёт прошивку. На
						экране появится окно &apos;Обновление системы&apos;.
					</li>
					<li>Нажмите на &apos;Проверить и установить.&apos;</li>
					<li>
						Касса начнет расшифровывать файл с обновлением, это займет некоторое
						время. После успешной установки касса сама перезагрузится. Подождите
						еще 1-2 минуты и вытащите флешку.
					</li>
				</ul>
			</div>
		)
	}
]

export async function generateStaticParams() {
	return devices.map((device) => ({
		url: device.id
	}))
}

const DevicePage: NextPage<{ params: { url: string } }> = ({ params }) => {
	const device = devices.find((device) => device.url === params.url)
	return device?.content
}

export default DevicePage
