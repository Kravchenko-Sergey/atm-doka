import { Person } from '../types'

// Импорт данных из JSON файла
import peopleData from './people.json'

// Экспортируем переменную
export const people: Person[] = peopleData

// Имитация задержки для демонстрации скелетона
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getPeopleData(): Promise<Person[]> {
	try {
		// Добавляем задержку для демонстрации скелетона (уберите в проде)
		await delay(2000)
		return people
	} catch (error) {
		console.error('Error loading people data:', error)
		return []
	}
}
