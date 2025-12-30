'use client'

import { useState, useEffect } from 'react'

export function ThemeProvider() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		const savedTheme = localStorage.getItem('theme')
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light'
		setTheme(initialTheme)
	}, [])

	useEffect(() => {
		if (!isMounted) return

		document.documentElement.classList.remove('light', 'dark')
		document.documentElement.classList.add(theme)
		localStorage.setItem('theme', theme)
	}, [theme, isMounted])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	return { theme, toggleTheme, isMounted }
}
