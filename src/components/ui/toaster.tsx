// components/ui/toaster.tsx
'use client'

import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
	return (
		<SonnerToaster
			position='bottom-right'
			toastOptions={{
				className: 'bg-white dark:bg-gray-800',
				style: {
					border: '1px solid #e5e7eb'
				},
				duration: 3000
			}}
			theme='system' // автоматически определяет тему
			expand={false}
			closeButton
			richColors={false}
			visibleToasts={3}
		/>
	)
}
