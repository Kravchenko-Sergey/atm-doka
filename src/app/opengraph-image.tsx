// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				backgroundColor: '#fafafa',
				fontFamily: 'Roboto, sans-serif',
				color: '#2C2C2C',
				textAlign: 'center',
				padding: '60px',
				position: 'relative'
			}}
		>
			{/* Верхняя полоса с цветами устройств */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '120px',
					background:
						'linear-gradient(90deg, #f15024, #DC2626, #08a4e1, #6effd2, #41e747, #704ecc)',
					opacity: 0.2
				}}
			/>

			{/* Логотип */}
			<div
				style={{
					fontSize: '72px',
					fontWeight: '700',
					color: '#f15024',
					marginBottom: '16px',
					textShadow: '0 2px 4px rgba(0,0,0,0.1)'
				}}
			>
				АТМ Дока
			</div>

			{/* Подзаголовок */}
			<div
				style={{
					fontSize: '36px',
					fontWeight: '400',
					color: '#2C2C2C',
					maxWidth: '90%',
					lineHeight: 1.4
				}}
			>
				Документация для POS-инженеров
			</div>

			{/* Иконки устройств (декоративно) */}
			<div
				style={{
					display: 'flex',
					gap: '20px',
					marginTop: '40px',
					opacity: 0.7
				}}
			>
				{['📱', '🖨️', '🔒', '🔧', '📡', '💳'].map((icon, i) => (
					<span
						key={i}
						style={{
							fontSize: '48px'
						}}
					>
						{icon}
					</span>
				))}
			</div>
		</div>,
		{
			width: 1200,
			height: 630
			// Убираем стандартные шрифты, если не используется кастомный
		}
	)
}
