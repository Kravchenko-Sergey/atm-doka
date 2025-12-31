import { create } from 'zustand'
import { UiSlice, createUiSlice } from './slices/ui.slice'
import { DataSlice, createDataSlice } from './slices/data.slice'

export type RootState = UiSlice & DataSlice

export const useRootStore = create<RootState>((...args) => ({
	...createUiSlice(...args),
	...createDataSlice(...args)
}))
