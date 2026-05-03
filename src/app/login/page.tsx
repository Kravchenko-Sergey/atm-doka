'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ShieldX } from 'lucide-react'

// Массив разрешенных фамилий
const ALLOWED_LASTNAMES = [
	'Кравченко',
	'Луганский',
	'Колобовников',
	'Джуманьязов',
	'Иванов',
	'Бондарь'
]

// Общий пароль для всех
const COMMON_PASSWORD = 'atm2026'

export default function LoginPage() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const redirectTo = searchParams.get('redirectTo') || '/'

	const [lastname, setLastname] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')
		setIsLoading(true)

		// Триммируем и нормализуем фамилию
		const trimmedLastname = lastname.trim()
		const normalizedLastname =
			trimmedLastname.charAt(0).toUpperCase() +
			trimmedLastname.slice(1).toLowerCase()

		// Проверка фамилии в массиве (регистронезависимая)
		const isLastnameValid = ALLOWED_LASTNAMES.some(
			(name) => name.toLowerCase() === trimmedLastname.toLowerCase()
		)

		// Проверка пароля
		const isPasswordValid = password === COMMON_PASSWORD

		console.log('Login attempt:', {
			enteredLastname: trimmedLastname,
			isValidLastname: isLastnameValid,
			isValidPassword: isPasswordValid
		})

		if (isLastnameValid && isPasswordValid) {
			try {
				const response = await fetch('/api/auth', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ action: 'login' })
				})

				const data = await response.json()

				if (response.ok && data.success) {
					// Принудительно обновляем страницу, чтобы middleware сработал
					router.push(redirectTo)
					router.refresh() // Добавляем refresh для обновления cookie на клиенте
				} else {
					setError(
						'Ошибка авторизации: ' + (data.error || 'Неизвестная ошибка')
					)
				}
			} catch (error) {
				console.error('Fetch error:', error)
				setError('Ошибка соединения с сервером')
			}
		} else {
			setError('Неверная фамилия или пароль')
		}

		setIsLoading(false)
	}

	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
				<div className='bg-white rounded-lg shadow-xl max-w-md w-full transform transition-all'>
					<div className='p-6'>
						<div className='text-center mb-6'>
							<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-500 mb-4'>
								<ShieldX />
							</div>
							<h2 className='text-2xl font-bold text-gray-900'>
								Доступ ограничен
							</h2>
							<p className='mt-2 text-sm text-gray-600'>
								Введите логин и пароль для доступа к сайту
							</p>
						</div>

						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<label
									htmlFor='lastname'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Логин
								</label>
								<input
									id='lastname'
									type='text'
									value={lastname}
									onChange={(e) => setLastname(e.target.value)}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white'
									placeholder='Введите логин'
									required
									disabled={isLoading}
									autoComplete='off'
								/>
							</div>

							<div>
								<label
									htmlFor='password'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Пароль
								</label>
								<input
									id='password'
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white'
									placeholder='Введите пароль'
									required
									disabled={isLoading}
									autoComplete='off'
								/>
							</div>

							{error && (
								<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm'>
									{error}
								</div>
							)}

							<button
								type='submit'
								disabled={isLoading}
								className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
							>
								{isLoading ? (
									<span className='flex items-center justify-center'>
										<svg
											className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
										Вход...
									</span>
								) : (
									'Войти'
								)}
							</button>
						</form>

						<div className='mt-4 text-center text-xs text-gray-500'>
							<p>Доступ разрешен только авторизованным пользователям</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
