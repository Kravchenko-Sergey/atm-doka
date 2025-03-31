'use client'

import { useRootStore } from '@/state/store'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const DevicePage: React.FC = () => {
	const params = useParams()
	const posts = useRootStore((state) => state.posts)

	const url = params?.url

	const post = posts.find((post) => post.url === url)

	const prevPost = posts[posts.findIndex((p) => p.id === post?.id) - 1] ?? post
	const nextPost = posts[posts.findIndex((p) => p.id === post?.id) + 1] ?? post

	return (
		<>
			{post?.content}
			<div>
				<div className='mt-10 mb-4 text-3xl'>Читайте также</div>
				<div className='py-8 flex gap-8 flex-wrap'>
					{[...posts]
						.filter((post) => post.url !== url)
						.slice(0, 3)
						.map((post) => (
							<Link
								href={`/posts/${post.url}`}
								key={post.id}
								className='p-8 h-[560px] flex flex-col items-center justify-between flex-auto rounded-xl'
								style={{
									backgroundImage: `url('${post.bgImage}')`,
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}
							>
								<p className='text-2xl self-start'>{post.title}</p>
								<p className='text-xl self-end'>{post.description}</p>
							</Link>
						))}
				</div>
				<div className='my-8 flex flex-col items-center gap-8 md:flex-row justify-between'>
					<Link href={prevPost.url} className='text-xl flex items-center gap-4'>
						<CircleArrowLeft
							className={` ${post?.id === posts[0].id ? 'hidden' : ''}`}
						/>
						<p className={` ${post?.id === posts[0].id ? 'hidden' : ''}`}>
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
