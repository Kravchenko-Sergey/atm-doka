import { ComponentType } from 'react'

export type ContentItem = {
	title: string
	children?: string[]
}

export type Device = {
	id: string
	url: string
	author: string
	title: string
	description: string
	image: string
	bgColor: string
	content: ComponentType<{ className?: string }>
	updatedAt: string
	tags: string[]
	contentItems: ContentItem[]
	discussionId: string
	brand: string
	brandSlug: string
	model: string
	modelSlug: string
	manufacturer?: string
}
