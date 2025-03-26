'use client'

import { v4 } from 'uuid'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
	const devices = [
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

	const messages = [
		{
			id: v4(),
			title: 'Друг для друга',
			description:
				'Дока — это документация для POS-инженеров на понятном языке. Её пишет сообщество, чтобы помогать друг другу. Ваши знания и опыт важны. Делитесь ими, мы поможем.'
		},
		{
			id: v4(),
			title: 'Дока ищет партнёров',
			description:
				'Партнёрство с Докой полезно компании и сотрудникам. Поддерживая Доку, вы помогаете развивать русскоязычное сообщество POS-инженеров.'
		}
	]

	const posts = [
		{
			id: v4(),
			title: 'Здесь может быть ваша статья'
		},
		{
			id: v4(),
			title: 'Здесь может быть ваша статья'
		},
		{
			id: v4(),
			title: 'Здесь может быть ваша статья'
		},
		{
			id: v4(),
			title: 'Здесь может быть ваша статья'
		},
		{
			id: v4(),
			title: 'Здесь может быть ваша статья'
		},
		{
			id: v4(),
			title: 'Здесь может быть ваша статья'
		}
	]

	return (
		<>
			<div className='mb-8 flex flex-col gap-4'>
				{devices.map((device) => (
					<div key={device?.id}>
						<div>
							<a href={`/devices/${device.url}`} className='hover:underline'>
								<span className='text-xl'>{device?.title}</span>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='flex gap-8 flex-wrap lg:flex-nowrap'>
				{messages.map((message) => (
					<div
						key={message.id}
						className='p-8 w-[50%] bg-gray-200 rounded-sm flex-auto'
					>
						<div className='text-2xl'>{message.title}</div>
						<div className='my-8 text-xl'>{message.description}</div>
					</div>
				))}
			</div>
			<div className='py-8 flex gap-8 flex-wrap'>
				{posts.map((post) => (
					<Card
						key={post.id}
						className='h-[560px] flex items-center justify-center flex-auto border-[#2e9aff]'
					>
						<CardContent>
							<p className='text-xl'>{post.title}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	)
}
