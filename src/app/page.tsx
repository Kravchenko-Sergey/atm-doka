'use client'

import { Button } from '@/components/ui/button'
import { Post, useRootStore } from '@/state/store'
import { Frown } from 'lucide-react'
import Link from 'next/link'
import { Fragment, JSX, useEffect, useState } from 'react'
import { v4 } from 'uuid'

type Tag = {
	id: string
	title: string
	isActive: boolean
	borderColor: string
}

export default function Home() {
	const messages = useRootStore((state) => state.messages)
	const posts = useRootStore((state) => state.posts)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)

	const [sortedPosts, setSortedPosts] = useState<Post[]>([])

	const [tags, setTags] = useState([
		{ id: v4(), title: '#Сбер', isActive: false, borderColor: '#0dd72d' },
		{ id: v4(), title: '#Прошивка', isActive: false, borderColor: '#e5e5e5' },
		{ id: v4(), title: '#Эвотор', isActive: false, borderColor: '#f15024' },
		{ id: v4(), title: '#Pax', isActive: false, borderColor: '#08a4e1' },
		{ id: v4(), title: '#Ingenico', isActive: false, borderColor: '#41e747' },
		{ id: v4(), title: '#Tactilion', isActive: false, borderColor: '#ffd829' },
		{ id: v4(), title: '#Kozen', isActive: false, borderColor: '#C0C0C0' },
		{ id: v4(), title: '#VeriFone', isActive: false, borderColor: '#6effd2' },
		{ id: v4(), title: '#Castles', isActive: false, borderColor: '#704ecc' }
	])

	const [count, setCount] = useState(6)

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

	const activeTags: Tag[] = tags
		.filter((tag) => tag.isActive)
		.map((tag) => ({
			id: tag.id,
			title: tag.title,
			isActive: tag.isActive,
			borderColor: tag.borderColor
		}))

	const filteredPosts =
		activeTags.length > 0
			? sortedPosts.filter((post) =>
					activeTags.every((activeTag) => post.tags.includes(activeTag.title))
				)
			: sortedPosts

	useEffect(() => {
		const shuffledPosts: any = [...posts].sort(() => Math.random() - 0.5)
		setSortedPosts(shuffledPosts)
		changeBgHeader('white')
	}, [])

	return (
		<>
			<div className='px-4 py-21 max-w-[1580px] flex align-center justify-center'>
				<img src='/logo_atm2x.png' alt='atm' />
			</div>
			<div className='px-4 max-w-[1580px] flex gap-4 flex-wrap lg:flex-nowrap'>
				{messages.map((message) => (
					<Fragment key={message.id}>{message.content}</Fragment>
				))}
			</div>
			<div className='px-2 pt-8 max-w-[1580px] text-xl flex flex-wrap items-center justify-between gap-2'>
				{tags.map((tag) => (
					<div
						key={tag.id}
						onClick={() => handleClickTag(tag.id)}
						className='w-32 h-12 px-4 py-2 text-xl flex items-center justify-center transition duration-300 ease-in-out cursor-pointer
						'
						style={{
							border: tag.isActive ? `2px solid ${tag.borderColor}` : '',
							borderRadius: tag.isActive ? '0.75rem' : ''
						}}
					>
						{tag.title}
					</div>
				))}
			</div>
			<div className='px-4 py-8 max-w-[1566px]'>
				{filteredPosts.length > 0 ? (
					<div className='flex flex-col items-center gap-8'>
						<div className='flex justify-center gap-4 flex-wrap'>
							{filteredPosts
								.map((post) => (
									<Link
										href={`/posts/${post.url}`}
										key={post.id}
										className='relative p-4 min-w-[240px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition duration-300 ease-in-out sm:h-[480px] sm:min-w-[31%]'
										style={{ backgroundColor: post.bgColor }}
									>
										<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20'></div>
										<p className='text-2xl self-start'>{post.title}</p>
										<p className='text-xl self-center'>{post.description}</p>
										<div className='flex gap-4 self-end'>
											{[...post.tags].map((tag) => (
												<p key={tag}>{tag}</p>
											))}
										</div>
									</Link>
								))
								.slice(0, count)}
						</div>
						{filteredPosts.length > count && (
							<Button
								onClick={() => setCount(count + 6)}
								variant={'outline'}
								className='p-8 w-fit font-roboto font-normal text-xl rounded-xl'
							>
								Показать ещё
							</Button>
						)}
					</div>
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
