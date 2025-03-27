'use client'

import { useRootStore } from '@/state/store'
import { useParams } from 'next/navigation'
import React from 'react'

const DevicePage: React.FC = () => {
	const params = useParams()
	const devices = useRootStore((state) => state.devices)

	const url = params?.url

	const device = devices.find((device) => device.url === url)

	return device?.content || null
}

export default DevicePage
