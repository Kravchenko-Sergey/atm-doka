'use client'

import { useRootStore } from '@/state/store'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useMemo } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'

const DevicePage = () => {
	const params = useParams()
	const router = useRouter()
	const posts = useRootStore((state) => state.posts)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)

	const url = params?.url as string
	const post = useMemo(
		() => posts.find((post) => post.url === url),
		[posts, url]
	)

	const postIndex = useMemo(
		() => posts.findIndex((p) => p.id === post?.id),
		[posts, post?.id]
	)

	const prevPost = useMemo(
		() => posts[postIndex - 1] ?? null,
		[posts, postIndex]
	)

	const nextPost = useMemo(
		() => posts[postIndex + 1] ?? null,
		[posts, postIndex]
	)

	const randomPosts = useMemo(
		() =>
			[...posts]
				.filter((p) => p.url !== url)
				.sort(() => Math.random() - 0.5)
				.slice(0, 3),
		[posts, url]
	)

	const Content = post?.content

	useEffect(() => {
		if (!post) {
			router.push('/not-found')
			return
		}

		if (post?.bgColor) {
			changeBgHeader(post.bgColor)
		}
	}, [post, changeBgHeader, router])

	if (!post) {
		return null
	}

	return (
		<div className='w-full flex flex-col'>
			{/* Header Section */}
			<div className='flex flex-col items-center'>
				<header
					className='flex items-center justify-center w-screen h-[480px] z-0 md:h-[348px]'
					style={{ backgroundColor: post.bgColor }}
				>
					<div className='w-full px-4 max-w-[1308px] flex flex-col items-center gap-6 md:flex-row md:gap-8'>
						<Image
							src={post.image}
							width={320}
							height={320}
							priority
							alt={post.title}
							className='w-auto h-[320px] object-contain'
						/>
						<div className='flex flex-col gap-4 text-center md:text-left'>
							<h1 className='text-3xl font-semibold'>{post.title}</h1>
							<p className='text-xl text-gray-700 dark:text-gray-300'>
								{post.description}
							</p>
						</div>
					</div>
				</header>

				{/* Mobile Table of Contents */}
				<Accordion
					type='single'
					collapsible
					className='w-full border-b border-gray-200 dark:border-gray-700 block md:hidden'
				>
					<AccordionItem value='table-of-contents'>
						<AccordionTrigger className='text-xl font-normal px-4 hover:no-underline'>
							Содержание
						</AccordionTrigger>
						<AccordionContent>
							<nav className='flex flex-col p-4'>
								{post.contentItems.map((item, itemIndex) => (
									<div key={itemIndex} className='mb-3'>
										<a
											href={`#${itemIndex + 1}`}
											className='min-w-[140px] text-lg hover:underline transition-colors'
										>
											{item.title}
										</a>
										{item.children && (
											<div className='pl-6 flex flex-col mt-2 space-y-2'>
												{item.children.map((child, childIndex) => (
													<a
														key={childIndex}
														href={`#${itemIndex + 1}.${childIndex + 1}`}
														className='min-w-[140px] text-lg hover:underline transition-colors text-gray-600 dark:text-gray-400'
													>
														{child}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</nav>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>

			{/* Main Content */}
			<div className='flex flex-col lg:flex-row'>
				{/* Desktop Sidebar */}
				<aside className='hidden lg:flex flex-col min-w-[280px] bg-white dark:bg-[#292a2e]'>
					<div className='p-6 sticky top-[102px]'>
						<ScrollArea className='h-[calc(100vh-200px)]'>
							<nav className='space-y-4'>
								{post.contentItems.map((item, itemIndex) => (
									<div key={itemIndex}>
										<a
											href={`#${itemIndex + 1}`}
											className='block min-w-[140px] text-md hover:underline transition-colors font-medium'
										>
											{item.title}
										</a>
										{item.children && (
											<div className='pl-4 flex flex-col mt-2 space-y-2'>
												{item.children.map((child, childIndex) => (
													<a
														key={childIndex}
														href={`#${itemIndex + 1}.${childIndex + 1}`}
														className='block min-w-[140px] text-md hover:underline transition-colors text-gray-600 dark:text-gray-400'
													>
														{child}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</nav>
						</ScrollArea>
					</div>

					<footer
						className='p-6 mt-auto bg-white dark:bg-[#292a2e] sticky bottom-0'
						aria-label='Информация об обновлении'
					>
						<div className='flex flex-wrap gap-1 text-sm text-gray-600 dark:text-gray-400'>
							<span>Обновлено</span>
							<time dateTime={post.updatedAt}>{post.updatedAt}</time>
						</div>
					</footer>
				</aside>

				{/* Content Area */}
				<main className='flex-1 max-w-full lg:max-w-[calc(100%-280px)]'>
					<div className='px-4 max-w-[1308px] mx-auto'>
						{Content ? (
							<Content />
						) : (
							<div className='text-center py-12 text-xl'>
								Контент недоступен
							</div>
						)}
					</div>

					{/* Related Posts */}
					<div className='px-4 max-w-[1308px] mx-auto'>
						<h2
							className='my-12 text-3xl font-semibold'
							id={String(post.contentItems.length)}
						>
							Читайте также
						</h2>
						<div className='flex gap-6 flex-wrap'>
							{randomPosts.map((post) => (
								<Link
									href={`/posts/${post.url}`}
									key={post.id}
									className={`relative p-6 h-[380px] flex flex-col items-center justify-between rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-101 flex-1 min-w-[280px] ${'max-w-full'}`}
									style={{ backgroundColor: post.bgColor }}
								>
									<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40' />
									<h3 className='text-xl font-semibold self-start z-10 line-clamp-2'>
										{post.title}
									</h3>
									<p className='text-lg text-center self-center z-10 line-clamp-3'>
										{post.description}
									</p>
									<ul className='flex gap-3 flex-wrap self-end z-10'>
										{post.tags.map((tag) => (
											<li
												key={tag}
												className='px-3 py-1 text-sm bg-black/10 rounded-md backdrop-blur-sm'
											>
												{tag}
											</li>
										))}
									</ul>
								</Link>
							))}
						</div>

						{/* Navigation */}
						<div className='my-12 flex flex-col gap-6 md:flex-row justify-between items-center'>
							{prevPost && (
								<Link
									href={`/posts/${prevPost.url}`}
									className='flex items-center gap-3 text-lg hover:underline transition-all hover:scale-101 group'
								>
									<CircleArrowLeft className='transition-transform group-hover:-translate-x-1' />
									<span className='max-w-[200px] line-clamp-2 md:max-w-[300px]'>
										{prevPost.title}
									</span>
								</Link>
							)}

							{nextPost && (
								<Link
									href={`/posts/${nextPost.url}`}
									className='flex items-center gap-3 text-lg hover:underline transition-all hover:scale-101 group ml-auto'
								>
									<span className='max-w-[200px] line-clamp-2 md:max-w-[300px] text-right'>
										{nextPost.title}
									</span>
									<CircleArrowRight className='transition-transform group-hover:translate-x-1' />
								</Link>
							)}
						</div>

						{/* Mobile Footer */}
						<div className='mb-8 px-6 py-8 text-lg border rounded-lg flex items-center justify-center lg:hidden'>
							<div className='flex flex-wrap gap-1 text-gray-600 dark:text-gray-400'>
								<span>Обновлено</span>
								<time dateTime={post.updatedAt}>{post.updatedAt}</time>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default DevicePage
