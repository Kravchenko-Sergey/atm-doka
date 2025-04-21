'use client'

import { useRootStore } from '@/state/store'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { marked as markdownParser } from 'marked'
import { Button } from '@/components/ui/button'

const DevicePage = () => {
	const params = useParams()
	const posts = useRootStore((state) => state.posts)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)
	const [content, setContent] = useState<string | Promise<string>>('')

	const url = params?.url

	const post = posts.find((post) => post.url === url)

	const prevPost = posts[posts.findIndex((p) => p.id === post?.id) - 1] ?? post
	const nextPost = posts[posts.findIndex((p) => p.id === post?.id) + 1] ?? post

	useEffect(() => {
		if (post?.bgColor) {
			changeBgHeader(post.bgColor)
		}
	}, [post?.bgColor])

	useEffect(() => {
		const fetchMarkdownContent = async () => {
			if (!url) return
			try {
				const response = await fetch(`/content/${url}/index.md`)
				if (!response.ok) {
					throw new Error('Не удалось загрузить контент')
				}
				const markdown = await response.text()
				const HTMLContent = markdownParser(markdown)
				setContent(HTMLContent)
			} catch (error) {
				console.error('Ошибка загрузки Markdown файла:', error)
			}
		}

		fetchMarkdownContent()
	}, [url])

	return (
		<div className='w-full flex flex-col'>
			<div className='flex flex-col items-center'>
				<header
					className='flex items-center justify-center w-full h-[480px] z-0 md:h-[348px]'
					style={{ backgroundColor: post?.bgColor }}
				>
					<div className='w-full px-4 max-w-[1308px] flex flex-col items-center md:flex-row'>
						<Image
							src={post!.image}
							width={320}
							height={320}
							priority
							alt={post!.url}
							style={{ width: 'auto', height: '320px' }}
						/>
						<div className='flex flex-col justify-between gap-4'>
							<h1 className='text-3xl'>{post?.title}</h1>
							<p className='text-xl'>{post?.description}</p>
						</div>
					</div>
				</header>
				<Accordion
					type='single'
					collapsible
					className='px-4 w-full border-b block md:hidden'
				>
					<AccordionItem value='item-1'>
						<AccordionTrigger className='text-xl font-normal'>
							Содержание
						</AccordionTrigger>
						<AccordionContent className='flex flex-col'>
							{post?.contentItems.map((item, index) => (
								<a
									href={`#${index + 1}`}
									key={item}
									className='min-w-[140px] text-lg hover:underline'
								>
									{item}
								</a>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className='flex'>
				<aside className='flex-col flex-auto justify-between min-w-[240px] hidden md:flex'>
					<ul className='p-6 flex flex-col sticky top-[102px] left-0 z-20'>
						{post?.contentItems.map((item, index) => (
							<li key={item} className='min-w-[140px] hover:underline'>
								<a href={`#${index + 1}`}>{item}</a>
							</li>
						))}
					</ul>
					<footer
						className='px-6 py-8 text-sm sticky bottom-0 z-10 flex flex-col'
						aria-label='Информация об обновлении'
					>
						<div className='flex flex-wrap gap-x-1'>
							<p>Авторы:</p>
							<p>команда АТМ</p>
						</div>
						<Button
							variant={'outline'}
							className='my-2 py-4 px-2 w-fit font-roboto font-normal text-md rounded-md'
						>
							<Link
								href={post?.linkToEdit ? new URL(post?.linkToEdit) : '#'}
								target='blank'
							>
								Редактировать на GitHub
							</Link>
						</Button>
						<div className='flex flex-wrap gap-x-1'>
							<p>Обновлено</p>
							<time dateTime='2025-04-13'>{post?.updatedAt}</time>
						</div>
					</footer>
				</aside>
				<div className='w-full max-w-[1540px] flex-auto'>
					<div
						className='px-4 w-full max-w-[1308px] markdown-content'
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					<div className='px-4 w-full max-w-[1308px]'>
						<h2
							id={String(post?.contentItems.length)}
							className='my-8 text-3xl'
						>
							Читайте также
						</h2>
						<div className='flex gap-4 flex-wrap md:gap-4'>
							{[...posts]
								.filter((post) => post.url !== url)
								.sort(() => Math.random() - 0.5)
								.slice(0, 3)
								.map((post) => (
									<Link
										href={`/posts/${post.url}`}
										key={post.id}
										className='relative p-4 min-w-[240px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition duration-300 ease-in-out sm:h-[380px] sm:min-w-[352px]'
										style={{ backgroundColor: post.bgColor }}
									>
										<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40 dark:opacity-20'></div>
										<p className='text-xl self-center opacity-100 z-20'>
											{post.description}
										</p>
										<ul className='flex gap-4 self-end flex-wrap'>
											{post.tags.map((tag) => (
												<li key={tag} className='opacity-100 z-20'>
													{tag}
												</li>
											))}
										</ul>
									</Link>
								))}
						</div>
						<div className='my-8 flex flex-col items-center gap-8 md:flex-row justify-between'>
							<Link
								href={prevPost.url}
								className='text-xl flex items-center gap-4 self-start'
							>
								<CircleArrowLeft
									className={`${post?.id === posts[0].id ? 'hidden' : ''}`}
								/>
								<p className={`${post?.id === posts[0].id ? 'hidden' : ''}`}>
									{prevPost.title}
								</p>
							</Link>
							<Link
								href={nextPost.url}
								className='text-xl flex items-center gap-4 self-end'
							>
								<p
									className={` ${post?.id === posts[posts.length - 1].id ? 'hidden' : ''}`}
								>
									{nextPost.title}
								</p>
								<CircleArrowRight
									className={` ${post?.id === posts[posts.length - 1].id ? 'hidden' : ''}`}
								/>
							</Link>
						</div>
						<div
							className='mb-8 px-6 py-12 text-lg border rounded-md flex flex-col items-center justify-center md:hidden'
							aria-label='Информация об обновлении'
						>
							<div className='flex flex-wrap gap-x-1'>
								<p>Авторы:</p>
								<p>команда АТМ</p>
							</div>
							<Button
								variant={'outline'}
								className='my-4 py-4 px-2 w-fit font-roboto font-normal text-md rounded-md'
							>
								<Link
									href={post?.linkToEdit ? new URL(post?.linkToEdit) : '#'}
									target='blank'
								>
									Редактировать на GitHub
								</Link>
							</Button>
							<div className='flex flex-wrap gap-x-1'>
								<p>Обновлено</p>
								<time dateTime='2025-04-13'>{post?.updatedAt}</time>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DevicePage
