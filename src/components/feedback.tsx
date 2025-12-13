'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface FeedbackProps {
	postId?: string
	discussionId: string
	color: string
	className?: string
}

export function Feedback({ className, discussionId, color }: FeedbackProps) {
	const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null)
	const [showDislikeReasons, setShowDislikeReasons] = useState(false)
	const [selectedReason, setSelectedReason] = useState<string | null>(null)
	const [showCustomTextarea, setShowCustomTextarea] = useState(false)
	const [customFeedback, setCustomFeedback] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [voteSubmitted, setVoteSubmitted] = useState(false)
	const [customSubmitted, setCustomSubmitted] = useState(false)

	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const dislikeReasons = [
		'Слишком сложно',
		'Мало примеров',
		'Нет нужной информации',
		'Устаревшие данные',
		'Плохое оформление',
		'Другое'
	]

	const handleVote = (vote: 'like' | 'dislike') => {
		// Если уже проголосовали, ничего не делаем
		if (voteSubmitted) return

		if (userVote === vote) {
			// Отмена голоса - разрешено только если НЕ было отправки
			if (!voteSubmitted) {
				setUserVote(null)
				setShowDislikeReasons(false)
				setSelectedReason(null)
				setShowCustomTextarea(false)
				setCustomFeedback('')
				setCustomSubmitted(false)
			}
		} else {
			setUserVote(vote)
			if (vote === 'dislike') {
				setShowDislikeReasons(true)
			} else {
				setVoteSubmitted(true)
				setShowDislikeReasons(false)
				setSelectedReason(null)
			}
		}
	}

	const handleReasonSelect = (reason: string) => {
		// Если уже выбрали причину (кроме "Другое" без отправки), ничего не делаем
		if (selectedReason !== null) {
			// Если уже выбрали другую причину и не "Другое" с textarea
			if (selectedReason !== 'Другое' || customSubmitted) {
				return // Ничего не делаем
			}
			// Если выбрали "Другое" но textarea открыта, можно переключиться на другую причину?
			// Давайте тоже блокируем
			return
		}

		setSelectedReason(reason)

		if (reason === 'Другое') {
			setShowCustomTextarea(true)
		} else {
			setShowCustomTextarea(false)
			setVoteSubmitted(true)
			console.log(`Дизлайк по причине: ${reason}`)
		}
	}

	const handleSubmitCustomFeedback = () => {
		if (!customFeedback.trim() || customFeedback.trim().length < 10) return

		setIsSubmitting(true)

		// Имитация отправки на сервер
		setTimeout(() => {
			console.log('Кастомный фидбек:', customFeedback)
			setVoteSubmitted(true)
			setCustomSubmitted(true)
			setIsSubmitting(false)
		}, 500)
	}

	useEffect(() => {
		if (showCustomTextarea && textareaRef.current) {
			textareaRef.current.focus()
		}
	}, [showCustomTextarea])

	return (
		<div className={`border rounded-xl p-6 ${className}`}>
			<div className='space-y-6'>
				{/* Заголовок */}
				<div className='text-center'>
					<h3 className='text-2xl font-semibold mb-0'>Статья была полезной?</h3>
				</div>

				{/* Кнопки лайк/дизлайк */}
				<div className='flex justify-center gap-4'>
					<Button
						variant={userVote === 'like' ? 'default' : 'outline'}
						size='lg'
						onClick={() => handleVote('like')}
						disabled={voteSubmitted && userVote !== 'like'}
						className={`gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-200 ${userVote === 'like' ? 'bg-green-500 hover:bg-green-600 border-green-500' : voteSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:border-green-400 hover:text-green-600'}`}
					>
						<span className='flex flex-col items-start'>
							<span className='text-2xl font-normal opacity-80'>^‿^</span>
						</span>
					</Button>

					<Button
						variant={userVote === 'dislike' ? 'destructive' : 'outline'}
						size='lg'
						onClick={() => handleVote('dislike')}
						disabled={voteSubmitted && userVote !== 'dislike'}
						className={`gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-200 ${userVote === 'dislike' ? 'bg-red-500 hover:bg-red-600 border-red-500' : voteSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:border-red-400 hover:text-red-600'}`}
					>
						<span className='flex flex-col items-start'>
							<span className='text-2xl font-normal opacity-80'>ˇ⌒ˇ</span>
						</span>
					</Button>
				</div>

				{/* Блок причин для дизлайка */}
				{showDislikeReasons && (
					<div className='space-y-4 animate-in fade-in duration-300'>
						<div className='text-center'>
							<h4 className='text-lg font-medium mb-0 flex items-center justify-center gap-2'>
								Расскажите, что не понравилось?
							</h4>
						</div>

						{/* Варианты причин - ВСЕГДА показываем все варианты */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
							{dislikeReasons.map((reason) => (
								<button
									key={reason}
									onClick={() => handleReasonSelect(reason)}
									disabled={
										customSubmitted ||
										(selectedReason !== null && selectedReason !== reason)
									}
									className={`p-4 text-left border rounded-lg transition-all duration-200 ${selectedReason === reason ? 'bg-red-50 dark:bg-red-900/20 border-red-300' : customSubmitted || (selectedReason !== null && selectedReason !== reason) ? 'opacity-60 cursor-not-allowed' : 'hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-900/10'}`}
								>
									<div className='flex items-center gap-3'>
										<div className='h-6 w-6 flex items-center justify-center border rounded-full'>
											{reason === 'Другое' && '✏️'}
											{reason === 'Слишком сложно' && '🤔'}
											{reason === 'Мало примеров' && '📝'}
											{reason === 'Нет нужной информации' && '🔍'}
											{reason === 'Устаревшие данные' && '📅'}
											{reason === 'Плохое оформление' && '🎨'}
										</div>
										<span>{reason}</span>
									</div>
								</button>
							))}
						</div>

						{/* Textarea для "Другое" */}
						{selectedReason === 'Другое' && (
							<div
								className={`space-y-3 mt-4 transition-all duration-300 ${customSubmitted ? 'opacity-70' : ''}`}
							>
								<div className='relative'>
									<Textarea
										ref={textareaRef}
										placeholder='Опишите, что именно не понравилось в статье...'
										value={customFeedback}
										onChange={(e) =>
											!customSubmitted && setCustomFeedback(e.target.value)
										}
										className={`min-h-[120px] resize-none text-base transition-all duration-300 ${customSubmitted ? 'bg-gray-50 dark:bg-gray-800/50 cursor-not-allowed border-gray-300 dark:border-gray-700' : ''}`}
										disabled={customSubmitted || isSubmitting}
									/>
								</div>

								{!customSubmitted && (
									<div className='flex justify-between items-center'>
										<span className='text-sm text-gray-500 dark:text-gray-400'>
											Минимум 10 символов
										</span>
										<Button
											onClick={handleSubmitCustomFeedback}
											disabled={
												!customFeedback.trim() ||
												customFeedback.trim().length < 10 ||
												isSubmitting
											}
											className='gap-2'
										>
											{isSubmitting ? (
												<>
													<div className='h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
													Отправка...
												</>
											) : (
												<>
													<Send className='h-4 w-4' />
													Отправить
												</>
											)}
										</Button>
									</div>
								)}
							</div>
						)}
					</div>
				)}

				{/* Ссылка на группу */}
				<div className='mt-12 px-4 max-w-[1308px] mx-auto text-center'>
					<p className='text-gray-600 dark:text-gray-400 mb-4'>
						Есть вопросы или хотите поделиться опытом?
					</p>

					<div className='mt-12 flex justify-center'>
						<a
							href={`https://t.me/atm_doka_f0rum/${discussionId}`}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-101 active:scale-98'
							style={{
								color: color,
								border: `2px solid ${color}40`
							}}
						>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-1.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
							</svg>
							Обсудить в Telegram
						</a>
					</div>
				</div>

				{/* Сообщение после лайка */}
				{userVote === 'like' && voteSubmitted && (
					<div className='text-center animate-in fade-in duration-300'>
						<div className='inline-flex items-center gap-2 px-4 py-3 rounded-lg'>
							<span className='text-lg font-medium text-green-700 dark:text-green-300 mb-0'>
								Спасибо за оценку ❤️
							</span>
						</div>
					</div>
				)}

				{/* Сообщение после выбора причины (кроме "Другое") */}
				{selectedReason && selectedReason !== 'Другое' && voteSubmitted && (
					<div className='text-center animate-in fade-in duration-300'>
						<div className='inline-flex items-center gap-2 px-4 py-3 rounded-lg'>
							<span className='text-lg font-medium text-red-700 dark:text-red-300 mb-0'>
								Спасибо за оценку ❤️
							</span>
						</div>
					</div>
				)}

				{/* Сообщение после отправки кастомного фидбека */}
				{selectedReason === 'Другое' && customSubmitted && (
					<div className='text-center animate-in fade-in duration-300'>
						<div className='inline-flex items-center gap-2 py-3 rounded-lg whitespace-nowrap'>
							<span className='text-lg font-medium text-red-700 dark:text-red-300 mb-0'>
								Спасибо за развернутый отзыв ❤️
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
