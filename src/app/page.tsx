'use client'

import { v4 } from 'uuid'
import { Card, CardContent } from '@/components/ui/card'

//import { Input } from '@/components/ui/input'

export default function Home() {
	const items = [
		{
			id: v4(),
			title: 'Эвотор 5i',
			url: 'evotor5i'
		},
		{
			id: v4(),
			title: 'Эвотор 7.2',
			url: 'evotor72'
		},
		{
			id: v4(),
			title: 'Эвотор 7.3',
			url: 'evotor73'
		},
		{
			id: v4(),
			title: 'Эвотор 10',
			url: 'evotor10'
		}
	]

	return (
		<>
			<div className='mb-8 flex flex-col gap-4'>
				{items.map((item) => (
					<div key={item?.title}>
						<div>
							<a href={item?.url} className='hover:underline'>
								<span className='text-xl'>{item?.title}</span>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='flex gap-8 flex-wrap lg:flex-nowrap'>
				<div className='p-8 w-[50%] bg-gray-200 rounded-sm flex-auto'>
					<div className='text-2xl'>Друг для друга</div>
					<div className='my-8 text-xl'>
						Дока — это документация для POS-инженеров на понятном языке. Её
						пишет сообщество, чтобы помогать друг другу. Ваши знания и опыт
						важны. Делитесь ими, мы поможем.
					</div>
				</div>
				<div className='p-8 w-[50%] border rounded-sm flex-auto'>
					<div className='text-2xl'>Дока ищет партнёров</div>
					<div className='my-8 text-xl'>
						Партнёрство с Докой полезно компании и сотрудникам. Поддерживая
						Доку, вы помогаете развивать русскоязычное сообщество POS-инженеров.
					</div>
				</div>
			</div>
			<div className='py-8 flex gap-8 flex-wrap'>
				<Card className='h-[560px] flex items-center justify-center flex-auto border-[#2e9aff]'>
					<CardContent>
						<p className='text-xl'>Здесь может быть ваша статья</p>
					</CardContent>
				</Card>
				<Card className='h-[560px] flex items-center justify-center flex-auto border-[#41e747]'>
					<CardContent>
						<p className='text-xl'>Здесь может быть ваша статья</p>
					</CardContent>
				</Card>
				<Card className='h-[560px] flex items-center justify-center flex-auto border-[#ff852f]'>
					<CardContent>
						<p className='text-xl'>Здесь может быть ваша статья</p>
					</CardContent>
				</Card>
				<Card className='h-[560px] flex items-center justify-center flex-auto border-[#ffd829]'>
					<CardContent>
						<p className='text-xl'>Здесь может быть ваша статья</p>
					</CardContent>
				</Card>
				<Card className='h-[560px] flex items-center justify-center flex-auto border-[#2e9aff]'>
					<CardContent>
						<p className='text-xl'>Здесь может быть ваша статья</p>
					</CardContent>
				</Card>
				<Card className='h-[560px] flex items-center justify-center flex-auto border-[#12f3af]'>
					<CardContent>
						<p className='text-xl'>Здесь может быть ваша статья</p>
					</CardContent>
				</Card>
			</div>
		</>
	)
}
