'use client'

import { useRootStore } from '@/state/store'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import Image from 'next/image'

const DevicePage: React.FC = () => {
	const params = useParams()
	const posts = useRootStore((state) => state.posts)
	const headerBGColor = useRootStore((state) => state.headerBGColor)
	const inc = useRootStore((state) => state.inc)

	const url = params?.url

	const post = posts.find((post) => post.url === url)

	const prevPost = posts[posts.findIndex((p) => p.id === post?.id) - 1] ?? post
	const nextPost = posts[posts.findIndex((p) => p.id === post?.id) + 1] ?? post

	console.log(post)

	useEffect(() => {
		inc(post?.bgColor)
	}, [])

	return (
		<>
			<header
				className={`px-4 py-6 w-full flex justify-center gap-8 whitespace-nowrap z-10 fixed -top-0 -left-0 bg-[${headerBGColor}]`}
			>
				<div className='w-[1710px] flex justify-center md:justify-start'>
					<Link
						href={'/'}
						className='px-8 py-2 text-3xl border rounded-xl z-10'
					>
						АТМ Дока
					</Link>
				</div>
			</header>
			<div
				className={`mt-[102px] bg-[${post?.bgColor}] flex items-center justify-center w-full h-[480px] z-0 md:h-[348px]`}
			>
				<div className='w-full px-4 max-w-[1120px] flex flex-col items-center md:flex-row'>
					<Image
						src={post!.image}
						width={320}
						height={320}
						priority
						alt={post!.url}
						style={{ width: 'auto', height: '320px' }}
					/>
					<div className='flex flex-col justify-between gap-4'>
						<div className='text-3xl'>{post?.title}</div>
						<div className='text-xl'>{post?.description}</div>
					</div>
				</div>
			</div>
			<div className='px-4 w-full max-w-[1120px]'>{post?.content}</div>
			<div className='px-4 w-full max-w-[1120px]'>
				<div id='3' className='pt-[142px] mt-[-102px] mb-4 text-3xl'>
					Читайте также
				</div>
				<div className='pt-8 flex gap-4 flex-wrap md:gap-4'>
					{[...posts]
						.filter((post) => post.url !== url)
						.slice(0, 3)
						.map((post) => (
							<Link
								href={`/posts/${post.url}`}
								key={post.id}
								className={`bg-[${headerBGColor}] relative p-4 min-w-[240px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition duration-300 ease-in-out sm:h-[380px] sm:min-w-[31%]`}
							>
								<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20'></div>
								<p className='text-2xl self-start'>{post.title}</p>
								<p className='text-xl self-center'>{post.description}</p>
								<div className='flex gap-4 self-end'>
									{post.tags.map((tag) => (
										<p key={tag}>{tag}</p>
									))}
								</div>
							</Link>
						))}
				</div>
				<div className='my-8 flex flex-col items-center gap-8 md:flex-row justify-between'>
					<Link href={prevPost.url} className='text-xl flex items-center gap-4'>
						<CircleArrowLeft
							className={`${post?.id === posts[0].id ? 'hidden' : ''}`}
						/>
						<p className={`${post?.id === posts[0].id ? 'hidden' : ''}`}>
							{prevPost.title}
						</p>
					</Link>
					<Link href={nextPost.url} className='text-xl flex items-center gap-4'>
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
			</div>
		</>
	)
}

export default DevicePage
