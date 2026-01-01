import { StateCreator } from 'zustand'
import { brandsData, createDevices } from '../data'
import { people } from '@/lib/data/people' // Импортируем из JSON
import { RootState } from '../root.store'
import { PersonWithAvatar } from '@/lib/types'
import { ScanFace } from 'lucide-react'

export interface DataSlice {
	devices: ReturnType<typeof createDevices>
	brands: typeof brandsData
	people: PersonWithAvatar[]
}

export const createDataSlice: StateCreator<
	RootState,
	[],
	[],
	DataSlice
> = () => ({
	devices: createDevices(),
	brands: brandsData,
	people: people.map((person) => ({
		...person,
		avatar: <ScanFace className='w-16 h-16' />
	}))
})
