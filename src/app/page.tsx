'use client'

import { Button } from '@/components/ui/button'
import { Post, useRootStore } from '@/state/store'
import { Send, Users } from 'lucide-react'
import { useEffect, useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { v4 } from 'uuid'

type Tag = {
	id: string
	title: string
	isActive: boolean
	borderColor: string
}

const TAGS_CONFIG = [
	{ title: 'Эвотор', borderColor: '#f15024' },
	{ title: 'Kozen', borderColor: '#DC2626' },
	{ title: 'Pax', borderColor: '#08a4e1' },
	{ title: 'Tactilion', borderColor: '#ffd829' },
	{ title: 'Ingenico', borderColor: '#41e747' },
	{ title: 'VeriFone', borderColor: '#6effd2' },
	{ title: 'Castles', borderColor: '#704ecc' },
	{ title: 'Aqsi', borderColor: '#0dd72d' }
] as const

export default function Home() {
	const posts = useRootStore((state) => state.posts)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)
	const activeTags = useRootStore((state) => state.activeTags)
	const toggleTag = useRootStore((state) => state.toggleTag)

	const [sortedPosts, setSortedPosts] = useState<Post[]>([])
	const [visibleCount, setVisibleCount] = useState(6)

	// Инициализируем теги с учетом активных тегов из store
	const [tags, setTags] = useState<Tag[]>(() =>
		TAGS_CONFIG.map((tag) => ({
			...tag,
			id: v4(),
			isActive: activeTags.includes(tag.title)
		}))
	)

	// Синхронизируем локальное состояние тегов с store
	useEffect(() => {
		setTags((prevTags) =>
			prevTags.map((tag) => ({
				...tag,
				isActive: activeTags.includes(tag.title)
			}))
		)
	}, [activeTags])

	const toggleActive = useCallback(
		(title: string) => {
			toggleTag(title)
		},
		[toggleTag]
	)

	const filteredPosts = useMemo(() => {
		if (activeTags.length === 0) return sortedPosts

		return sortedPosts.filter((post) =>
			activeTags.some((activeTag) => post.tags.includes(activeTag))
		)
	}, [sortedPosts, activeTags])

	const displayedPosts = useMemo(
		() => filteredPosts.slice(0, visibleCount),
		[filteredPosts, visibleCount]
	)

	const handleLoadMore = useCallback(() => {
		setVisibleCount((prev) => prev + 6)
	}, [])

	useEffect(() => {
		const shuffledPosts = [...posts].sort(() => Math.random() - 0.5)
		setSortedPosts(shuffledPosts)
		changeBgHeader('#fafafa')
	}, [posts, changeBgHeader])

	return (
		<>
			{/* Tags Grid */}
			<div className='pt-20 md:pt-4 px-4 max-w-[1572px] text-xl flex flex-wrap gap-4 pb-10'>
				{tags.map((tag) => (
					<button
						key={tag.id}
						onClick={() => toggleActive(tag.title)}
						className={`h-12 p-8 text-xl flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer
				border border-[1px] rounded-xl select-none flex-1 min-w-[calc(50%-8px)] md:min-w-[calc(25%-12px)] hover:scale-101
				${tag.isActive ? '' : 'border-gray-300 dark:border-gray-600'}`}
						style={{
							borderColor: tag.isActive ? tag.borderColor : undefined,
							borderRadius: '0.5rem',
							backgroundColor: tag.isActive
								? `${tag.borderColor}20`
								: 'transparent'
						}}
					>
						{tag.title}
					</button>
				))}
			</div>

			{/* Info Cards */}
			<div className='px-4 max-w-[1572px] flex gap-4 flex-col lg:flex-row'>
				<div className='p-6 bg-gray-200 rounded-xl flex-1 dark:bg-[#42454c]'>
					<h2 className='pb-6 text-2xl font-semibold'>Вместе и для каждого</h2>
					<div className='text-xl space-y-3'>
						<p>Дока — это документация для POS-инженеров на понятном языке.</p>
						<p>Каждый участник сообщества — это ценный источник информации.</p>
						<p>Делитесь своими знаниями, помогайте коллегам.</p>
						<p>Ваш опыт важен, ваш вклад бесценен.</p>
					</div>
					<Link
						href='#'
						className='mt-6 text-xl flex items-center gap-3 hover:underline'
					>
						<Users size={20} />
						<span>Участники</span>
					</Link>
				</div>

				<div className='p-6 border border-[1px] border-gray-300 dark:border-gray-600 rounded-xl flex flex-col flex-1'>
					<h2 className='pb-6 text-2xl font-semibold'>Станьте автором Доки</h2>
					<div className='text-xl space-y-3 flex-1'>
						<p>Дополните документацию реальными кейсами из практики.</p>
						<p>Предложите идею для новой статьи.</p>
						<p>Исправьте неточность в материалах.</p>
						<p>Ваши правки экономят время и решают проблемы коллег.</p>
					</div>
					<Link
						href='https://t.me/+CznWcCGr6H03NjMy'
						className='mt-6 text-xl flex items-center gap-3 hover:underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Send size={20} />
						<span>Написать нам</span>
					</Link>
				</div>
			</div>

			{/* Posts Grid */}
			<div className='px-4 py-8 max-w-[1572px]'>
				<div className='flex flex-col gap-8'>
					<div className='flex justify-center gap-6 flex-wrap'>
						{displayedPosts.map((post) => (
							<Link
								href={`/posts/${post.url}`}
								key={post.id}
								className='relative p-6 min-w-[320px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition-all duration-300 ease-in-out sm:h-[480px] sm:min-w-[400px] hover:shadow-lg hover:scale-101'
								style={{ backgroundColor: post.bgColor }}
							>
								<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40' />
								<h3 className='text-2xl font-semibold self-start z-10'>
									{post.title}
								</h3>
								<p className='text-xl text-center self-center z-10 line-clamp-3'>
									{post.description}
								</p>
								<div className='flex gap-3 flex-wrap self-end justify-end z-10'>
									{post.tags.map((tag) => (
										<span
											key={tag}
											className='px-2 py-1 text-sm bg-black/10 rounded-lg'
										>
											{tag}
										</span>
									))}
								</div>
							</Link>
						))}
					</div>

					{filteredPosts.length > visibleCount && (
						<div className='flex justify-center'>
							<Button
								onClick={handleLoadMore}
								variant='outline'
								className='p-6 text-xl rounded-xl font-normal min-w-[200px] hover:scale-105 transition-transform'
							>
								Показать ещё
							</Button>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
