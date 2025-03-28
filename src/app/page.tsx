'use client'

import { useRootStore } from '@/state/store'
import Link from 'next/link'
import { Fragment } from 'react'

const getRandomColor = () => {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

export default function Home() {
	const messages = useRootStore((state) => state.messages)
	const posts = useRootStore((state) => state.posts)
	return (
		<>
			<div className='flex gap-8 flex-wrap lg:flex-nowrap'>
				{messages.map((message) => (
					<Fragment key={message.id}>{message.content}</Fragment>
				))}
			</div>
			<div className='py-8 flex gap-8 flex-wrap'>
				{posts.map((post) => (
					<Link
						href={`/posts/${post.url}`}
						key={post.id}
						className='p-8 h-[560px] flex flex-col items-center justify-between flex-auto rounded-xl'
						style={{ backgroundColor: `${getRandomColor()}` }}
					>
						<p className='text-2xl self-start'>{post.title}</p>
						<p className='text-xl self-end'>{post.description}</p>
					</Link>
				))}
			</div>
		</>
	)
}
