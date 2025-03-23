'use client'

import { Input } from '@/components/ui/input'

export default function Home() {
	const items = [
		{
			title: 'Эвотор 5i',
			url: 'evotor5i'
		},
		{
			title: 'Эвотор 7.2',
			url: 'evotor72'
		},
		{
			title: 'Эвотор 7.3',
			url: 'evotor73'
		},
		{
			title: 'Эвотор 10',
			url: 'evotor10'
		}
	]

	return (
		<div>
			<Input
				className='mt-8 h-12'
				style={{ fontSize: '18px' }}
				placeholder='Поиск'
			/>
			<div className='my-8 flex flex-col gap-4'>
				{items.map((item) => (
					<div key={item.title}>
						<div>
							<a href={item.url}>
								<span className='text-xl'>{item.title}</span>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className=' p-8 bg-gray-200 rounded-sm'>
				<div className='text-2xl'>Друг для друга</div>
				<div className='my-8 text-xl'>
					Дока — это документация для инженеров на понятном языке. Её пишет
					сообщество, чтобы помогать друг другу. Ваши знания и опыт важны.
					Делитесь ими, мы поможем.
				</div>
			</div>
		</div>
	)
}
