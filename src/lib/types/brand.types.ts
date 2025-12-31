export type Firmware = {
	model: string
	version: string
	url: string
}

export type Driver = {
	title: string
	url: string
}

export type Software = {
	title: string
	url: string
}

export type BrandModel = {
	name: string
	displayName: string
	slug: string
}

export type Brand = {
	id: string
	brand: string
	displayBrand: string
	color: string
	gradient: string
	lightGradient: string
	description: string
	firmwares: Firmware[]
	drivers: Driver[]
	soft: Software[]
	models: BrandModel[]
}
