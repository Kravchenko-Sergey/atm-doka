'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Evotor5i() {
	return (
		<div className='flex flex-col'>
			<Image src='/evo5i.jpg' width={500} height={500} alt='evo5i' />
			<div className='my-4 text-2xl'>Прошивка терминала</div>
			<div className='text-xl text-gray-700 my-4'>
				Чтобы прошить терминал нужно взять и прошить его
			</div>
			<div className='flex items-center gap-4'>
				<div className='text-xl'>Актуальная версия прошивки: 4.9.11</div>
				<Button>
					<Link
						href={
							'https://drive.google.com/file/d/1zHNbojcHBEpuA6ZLaEWsBXmnnbTafb1g/view?usp=drive_link'
						}
						target='blank'
					>
						Скачать
					</Link>
				</Button>
			</div>
		</div>
	)
}
