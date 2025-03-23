'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Evotor72() {
	return (
		<div className='flex flex-col'>
			<Image src='/evo72.jpg' width={500} height={500} alt='evo5i' />
			<div className='my-4 text-2xl'>Прошивка терминала</div>
			<div className='text-xl text-gray-700 my-4'>
				Чтобы прошить терминал нужно взять и прошить его
			</div>
			<div className='flex items-center gap-4'>
				<div className='text-xl'>Актуальная версия прошивки: 4.9.11</div>
				<Button size={'lg'}>
					<Link
						href={
							'https://drive.google.com/uc?export=download&id=1n08SYgy72qF2susGP8Cnmw5tbupIaXX5'
						}
						target='_blank'
						download
					>
						Скачать
					</Link>
				</Button>
			</div>
		</div>
	)
}
