'use client'

import { useRootStore } from '@/state/store'
import { Frown } from 'lucide-react'
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
		{ id: v4(), title: '#Pax', isActive: false },
		{ id: v4(), title: '#Ingenico', isActive: false },
		{ id: v4(), title: '#Tactilion', isActive: false },
		{ id: v4(), title: '#Kozen', isActive: false },
		{ id: v4(), title: '#VeriFone', isActive: false },
		{ id: v4(), title: '#Castles', isActive: false }
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
			<div className='pt-8 text-xl flex flex-wrap items-center gap-2'>
				{tags.map((tag) => (
					<div
						key={tag.id}
						onClick={() => handleClickTag(tag.id)}
						className={`w-32 h-12 px-4 py-2 text-xl flex items-center justify-center transition duration-300 ease-in-out cursor-pointer
						${tag.isActive ? 'border rounded-xl' : ''}`}
					>
						{tag.title}
					</div>
				))}
			</div>
			<div className='py-8 flex gap-8 flex-wrap'>
				{filteredPosts.length > 0 ? (
					filteredPosts.map((post) => (
						<Link
							href={`/posts/${post.url}`}
							key={post.id}
							className='relative p-4 min-w-[240px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition duration-300 ease-in-out sm:h-[560px] sm:min-w-[508px]'
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
					))
				) : (
					<div className='w-full h-[560px] flex items-center justify-center'>
						<div className='flex flex-col items-center gap-4 sm:flex-row'>
							<p className='text-2xl text-center'>
								Нет статей с выбранной комбинацией тегов
							</p>
							<Frown />
						</div>
					</div>
				)}
			</div>
		</>
	)
}
