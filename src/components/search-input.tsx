'use client'

import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import Link from 'next/link'
import { Post, useRootStore } from '@/state/store'

type SearchInputProps = {
	className?: string
}

export const SearchInput = ({ className }: SearchInputProps) => {
	const [focused, setFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const posts = useRootStore((state) => state.posts)
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
	const ref = useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
	}

	useEffect(() => {
		setFilteredPosts(posts)
	}, [posts])

	useEffect(() => {
		if (searchQuery) {
			const lowerCaseQuery = searchQuery.toLowerCase()
			const filtered = posts.filter((post) =>
				post.title.toLowerCase().includes(lowerCaseQuery)
			)
			setFilteredPosts(filtered)
		} else {
			setFilteredPosts(posts)
		}
	}, [searchQuery, posts])

	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>
			)}
			<div
				className={cn(
					'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
					className
				)}
				ref={ref}
			>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
				<input
					className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
					type='text'
					placeholder='Найти статью...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				{filteredPosts.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-16'
						)}
					>
						{filteredPosts
							.map((post) => {
								return (
									<Link
										key={post.id}
										href={`/posts/${post.url}`}
										className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'
										onClick={onClickItem}
									>
										<span>{post.title}</span>
									</Link>
								)
							})
							.sort(() => Math.random() - 0.5)
							.slice(0, 5)}
					</div>
				)}
			</div>
		</>
	)
}
