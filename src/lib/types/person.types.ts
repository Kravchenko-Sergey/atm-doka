import { ReactNode } from 'react'

export type Person = {
	id: string
	name: string
	description: string
}

export interface PersonWithAvatar extends Person {
	avatar: ReactNode
}
