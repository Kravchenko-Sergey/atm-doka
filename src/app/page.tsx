'use client'

import { Button } from '@/components/ui/button'
import { Post, useRootStore } from '@/state/store'
import { Frown, Send, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { v4 } from 'uuid'

type Tag = {
	id: string
	title: string
	isActive: boolean
	borderColor: string
}

export default function Home() {
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
		const shuffledPosts: Post[] = [...posts].sort(() => Math.random() - 0.5)
		setSortedPosts(shuffledPosts)
		changeBgHeader('white')
	}, [])

	return (
		<>
			<div className='px-4 pt-32 pb-21 max-w-[1580px] flex align-center justify-center md:py-21'>
				<img src='/logo_atm2x.png' alt='atm' />
			</div>
			<div className='px-4 max-w-[1580px] flex gap-4 flex-wrap lg:flex-nowrap'>
				<div className='p-4 w-[50%] bg-gray-300 rounded-xl flex-auto dark:bg-[#42454c]'>
					<div className='pb-8 text-2xl'>Вместе и для каждого</div>
					<div className='text-xl'>
						<p>Дока — это документация для POS-инженеров на понятном языке.</p>
						<p>Каждый участник сообщества — это ценный источник информации.</p>
						<p>Делитесь своими знаниями, помогайте коллегам.</p>
						<p>Ваш опыт важен, ваш вклад бесценен.</p>
					</div>
					<div>
						<Link href='/people' className='mt-8 text-xl flex gap-4'>
							<Users />
							<div>Участники</div>
						</Link>
					</div>
				</div>
				<div className='p-4 w-[50%] border rounded-xl flex flex-col flex-auto'>
					<div className='pb-8 text-2xl'>Дока ищет партнёров</div>
					<div className='text-xl flex-auto'>
						<p>
							Сотрудничество с Докой приносит пользу как компании, так и её
							сотрудникам.
						</p>
						<p>
							Поддерживая Доку, вы способствуете развитию русскоязычного
							сообщества POS-инженеров.
						</p>
					</div>
					<div>
						<Link
							href='https://t.me/+CznWcCGr6H03NjMy'
							className='mt-8 text-xl flex gap-4'
							target='_blank'
						>
							<Send />
							<p>Написать нам</p>
						</Link>
					</div>
				</div>
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
										className='relative p-4 min-w-[320px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition duration-300 ease-in-out sm:h-[480px] sm:min-w-[400px]'
										style={{ backgroundColor: post.bgColor }}
									>
										<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40 dark:opacity-20'></div>
										<p className='text-2xl self-start opacity-100 z-20'>
											{post.title}
										</p>
										<p className='text-xl self-center opacity-100 z-10'>
											{post.description}
										</p>
										<div className='flex gap-4 self-end'>
											{[...post.tags].map((tag) => (
												<p key={tag} className='opacity-100 z-10'>
													{tag}
												</p>
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
