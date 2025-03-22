'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function evotor73() {
	return (
		<div>
			<Image src='/evo73.jpg' width={500} height={500} alt='evo73' />
			<div className='my-4 text-4xl'>Прошивка терминала</div>
			<div className='text-xl text-gray-700 my-4'>
				Чтобы прошить терминал нужно взять и прошить его
			</div>
			<div className='flex items-center gap-4'>
				<div className='text-xl'>Актуальная версия прошивки: 4.9.11</div>
				<Button>
					<Link
						href={
							'https://drive.google.com/file/d/1GfdNdQIm04HbXzrNA0fyVDik_z3q98Xk/view?usp=sharing'
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
