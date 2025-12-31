import { StateCreator } from 'zustand'
import { brandsData, createDevices, peopleData } from '../data'
import { RootState } from '../root.store'

export interface DataSlice {
	devices: ReturnType<typeof createDevices>
	brands: typeof brandsData
	people: typeof peopleData
}

export const createDataSlice: StateCreator<
	RootState,
	[],
	[],
	DataSlice
> = () => ({
	devices: createDevices(),
	brands: brandsData,
	people: peopleData
})
