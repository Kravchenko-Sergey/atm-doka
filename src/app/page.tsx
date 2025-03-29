'use client'

import { useRootStore } from '@/state/store'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { v4 } from 'uuid'

export default function Home() {
	const messages = useRootStore((state) => state.messages)
	const posts = useRootStore((state) => state.posts)

	const [tags, setTags] = useState([
		{ id: v4(), title: '#Сбер', isActive: false },
		{ id: v4(), title: '#Эвотор', isActive: false },
		{ id: v4(), title: '#Прошивка', isActive: false },
		{ id: v4(), title: '#Pax', isActive: false }
	])

	const toggleActive = (id: string) => {
		setTags((prevTags) =>
			prevTags.map((tag) =>
				tag.id === id ? { ...tag, isActive: !tag.isActive } : tag
			)
		)
	}

	const handleClickTag = (id: string) => {
		toggleActive(id)
	}

	const activeTags = tags
		.filter((tag) => tag.isActive)
		.map((tag) => ({
			key: tag.id,
			title: tag.title
		}))

	const filteredPosts =
		activeTags.length > 0
			? posts.filter((post) =>
					activeTags.every((activeTag) => post.tags.includes(activeTag.title))
				)
			: posts

	return (
		<>
			<div className='flex gap-8 flex-wrap lg:flex-nowrap'>
				{messages.map((message) => (
					<Fragment key={message.id}>{message.content}</Fragment>
				))}
			</div>
			<div className='pt-8 text-xl flex flex-wrap items-center gap-4'>
				{tags.map((tag) => (
					<div
						key={tag.id} // Добавлен ключ для каждого тега
						onClick={() => handleClickTag(tag.id)}
						className={`p-4 text-xl flex items-center justify-center transition duration-300 ease-in-out cursor-pointer
						${tag.isActive ? 'border rounded-xl' : ''}`}
					>
						{tag.title}
					</div>
				))}
			</div>
			<div className='py-8 flex gap-8 flex-wrap'>
				{filteredPosts.map((post) => (
					<Link
						href={`/posts/${post.url}`}
						key={post.id}
						className='relative p-8 h-[560px] flex flex-col items-center justify-between flex-auto rounded-xl overflow-hidden transition duration-300 ease-in-out'
						style={{
							backgroundImage: `url('${post.bgImage}')`,
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
					>
						<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20'></div>
						<p className='text-2xl self-start'>{post.title}</p>
						<p className='text-xl self-end'>{post.description}</p>
					</Link>
				))}
			</div>
		</>
	)
}
