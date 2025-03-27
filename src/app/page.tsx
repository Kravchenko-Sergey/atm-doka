'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useRootStore } from '@/state/store'

export default function Home() {
	const devices = useRootStore((state) => state.devices)
	const messages = useRootStore((state) => state.messages)
	const posts = useRootStore((state) => state.posts)
	console.log(devices)
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
				{messages.map((message) => message.content)}
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
