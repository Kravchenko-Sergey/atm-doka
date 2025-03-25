'use client'

import { badgeVariants } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

export default function evotor10() {
	return (
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
					экране появится окно "Обновление системы".
				</li>
				<li>Нажмите на "Проверить и установить"</li>
				<li>
					Касса начнет расшифровывать файл с обновлением, это займет некоторое
					время. После успешной установки касса сама перезагрузится. Подождите
					еще 1-2 минуты и вытащите флешку.
				</li>
			</ul>
		</div>
	)
}
