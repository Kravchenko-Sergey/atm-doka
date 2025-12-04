'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FeedbackProps {
	postId?: string
	className?: string
}

export function Feedback({ postId, className }: FeedbackProps) {
	const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null)
	const [showDislikeReasons, setShowDislikeReasons] = useState(false)
	const [selectedReason, setSelectedReason] = useState<string | null>(null)
	const [voteSubmitted, setVoteSubmitted] = useState(false)

	const dislikeReasons = [
		'Слишком сложно',
		'Мало примеров',
		'Нет нужной информации',
		'Устаревшие данные',
		'Плохое оформление',
		'Другое'
	]

	const handleVote = (vote: 'like' | 'dislike') => {
		if (voteSubmitted) return // Не позволяем изменить голос после отправки

		if (userVote === vote) {
			// Отмена голоса
			setUserVote(null)
			setShowDislikeReasons(false)
			setSelectedReason(null)
			setVoteSubmitted(false)
		} else {
			setUserVote(vote)
			if (vote === 'dislike') {
				setShowDislikeReasons(true)
			} else {
				// Лайк отправлен сразу
				setVoteSubmitted(true)
				setShowDislikeReasons(false)
				setSelectedReason(null)
			}
		}
	}

	const handleReasonSelect = (reason: string) => {
		setSelectedReason(reason)
		setVoteSubmitted(true)
		// Здесь можно добавить отправку фидбека на сервер
		console.log(`Дизлайк по причине: ${reason}`)
	}

	return (
		<div className={`border rounded-xl p-6 ${className}`}>
			<div className='space-y-6'>
				{/* Заголовок */}
				<div className='text-center'>
					<h3 className='text-2xl font-medium mb-2'>Статья была полезной?</h3>
				</div>

				{/* Кнопки лайк/дизлайк */}
				<div className='flex justify-center gap-4'>
					<Button
						variant={userVote === 'like' ? 'default' : 'outline'}
						size='lg'
						onClick={() => handleVote('like')}
						disabled={voteSubmitted && userVote !== 'like'}
						className={`gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-200 ${
							userVote === 'like'
								? 'bg-green-500 hover:bg-green-600 border-green-500'
								: voteSubmitted
									? 'opacity-50 cursor-not-allowed'
									: 'hover:border-green-400 hover:text-green-600'
						}`}
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
						className={`gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-200 ${
							userVote === 'dislike'
								? 'bg-red-500 hover:bg-red-600 border-red-500'
								: voteSubmitted
									? 'opacity-50 cursor-not-allowed'
									: 'hover:border-red-400 hover:text-red-600'
						}`}
					>
						<span className='flex flex-col items-start'>
							<span className='text-2xl font-normal opacity-80'>ˇ⌒ˇ</span>
						</span>
					</Button>
				</div>

				{/* Блок причин для дизлайка - теперь не исчезает после выбора */}
				{showDislikeReasons && (
					<div className='space-y-4 animate-in fade-in duration-300'>
						<div className='text-center'>
							<h4 className='text-lg font-medium mb-6 flex items-center justify-center gap-2'>
								Расскажите, что не понравилось?
							</h4>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
							{dislikeReasons.map((reason) => (
								<button
									key={reason}
									onClick={() => !selectedReason && handleReasonSelect(reason)}
									disabled={selectedReason !== null}
									className={`p-4 text-left border rounded-lg transition-all duration-200 ${
										selectedReason === reason
											? 'bg-red-50 dark:bg-red-900/20 border-red-300'
											: selectedReason
												? 'opacity-60 cursor-not-allowed'
												: 'hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-900/10'
									}`}
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
					</div>
				)}

				{/* Ссылка на группу */}
				<div className='text-center mb-2'>
					<p className='text-gray-600 dark:text-gray-400 mb-0'>
						Если вы нашли ошибку,{' '}
						<a
							href='https://t.me/+CznWcCGr6H03NjMy'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 dark:text-blue-400 hover:underline font-medium whitespace-nowrap'
						>
							напишите нам
						</a>
						!
					</p>
				</div>

				{/* Сообщение после лайка */}
				{userVote === 'like' && voteSubmitted && (
					<div className='text-center animate-in fade-in duration-300'>
						<div className='inline-flex items-center gap-2 px-4 pt-3 rounded-lg'>
							<span className='text-lg font-normal text-green-700 dark:text-green-300'>
								Спасибо за оценку ❤️
							</span>
						</div>
					</div>
				)}

				{/* Сообщение после выбора причины */}
				{selectedReason && voteSubmitted && (
					<div className='text-center animate-in fade-in duration-300'>
						<div className='inline-flex items-center gap-2 px-4 pt-3 pb-1 rounded-lg'>
							<span className='text-lg font-normal text-red-700 dark:text-red-300'>
								Спасибо за оценку ❤️
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
