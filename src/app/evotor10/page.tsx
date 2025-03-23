'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Evotor10() {
	return (
		<div className='flex flex-col'>
			<Image src='/evo10.jpg' width={500} height={500} alt='evo5i' />
			<div className='my-4 text-2xl'>Прошивка терминала</div>
			<div className='text-xl text-gray-700 my-4'>
				Чтобы прошить терминал нужно взять и прошить его
			</div>
			<div className='flex items-center gap-4'>
				<div className='text-xl'>Актуальная версия прошивки: 4.9.11</div>
				<Button>
					<Link
						href={
							'https://drive.google.com/uc?export=download&id=1BO5nAbUB9ob3fGe2XGn954FrJZLoIVe2'
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
