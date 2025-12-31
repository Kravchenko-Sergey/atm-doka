import { StateCreator } from 'zustand'
import { RootState } from '../root.store'

export interface UiSlice {
	bgHeader: string
	activeTags: string[]
	changeBgHeader: (color: string) => void
	toggleTag: (tagTitle: string) => void
	clearTags: () => void
	setActiveTags: (tags: string[]) => void
}

export const createUiSlice: StateCreator<RootState, [], [], UiSlice> = (
	set
) => ({
	bgHeader: '#fafafa',
	activeTags: [],

	changeBgHeader: (color: string) => {
		set({ bgHeader: color })
	},

	toggleTag: (tagTitle: string) => {
		set((state) => {
			const isActive = state.activeTags.includes(tagTitle)
			if (isActive) {
				return {
					activeTags: state.activeTags.filter((tag) => tag !== tagTitle)
				}
			} else {
				return {
					activeTags: [...state.activeTags, tagTitle]
				}
			}
		})
	},

	clearTags: () => {
		set({ activeTags: [] })
	},

	setActiveTags: (tags: string[]) => {
		set({ activeTags: tags })
	}
})
