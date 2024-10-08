'use client'

import { DateValue, getLocalTimeZone } from '@internationalized/date'
import { Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'

import DateField from '@/components/fields/dateField'

import { SelectProduct } from '@/types/product.types'

import useProductsForSelect from '@/hooks/useProductsForSelect'

import Orders from './orders'
import SalesTabs from './tabs'

export default function Sales() {
	const { data: products, isLoading, isError } = useProductsForSelect()
	const [selectedTab, setSelectedTab] = useState('orders')
	const [fromDate, setFromDate] = useState<DateValue | null>(null)
	const [toDate, setToDate] = useState<DateValue | null>(null)

	const handleFromDateChange = (date: string | DateValue | null) => {
		if (typeof date === 'string') {
			console.log('Дата от изменена на (ISO):', date)
		} else {
			setFromDate(date)
			console.log('Дата от изменена на:', date ? date.toString() : 'null')
		}
	}

	const handleToDateChange = (date: string | DateValue | null) => {
		if (typeof date === 'string') {
			console.log('Дата до изменена на (ISO):', date)
		} else {
			setToDate(date)
			console.log('Дата до изменена на:', date ? date.toString() : 'null')
		}
	}

	const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
	const handleDelete = () => {
		setSelectedProduct(null)
	}

	const renderTabContent = () => {
		switch (selectedTab) {
			case 'orders':
				return <Orders />
			default:
				return <></>
		}
	}

	return (
		<div className='flex flex-col space-y-4 grow'>
			<h2 className='text-3xl'>Анализ продаж</h2>
			<div className='flex flex-row gap-4 w-full'>
				<DateField
					size='lg'
					variant='bordered'
					isoDate={
						fromDate ? fromDate.toDate(getLocalTimeZone()).toISOString() : null
					}
					onChange={handleFromDateChange}
					label='Дата от'
					useISO={false}
				/>
				<DateField
					size='lg'
					variant='bordered'
					isoDate={
						toDate ? toDate.toDate(getLocalTimeZone()).toISOString() : null
					}
					onChange={handleToDateChange}
					label='Дата до'
					useISO={false}
				/>
				<div className='w-80'>
					<Select
						size='lg'
						variant='bordered'
						label='Выберите продукт'
						placeholder='Все'
						className='grow'
					>
						{products?.map((product: SelectProduct) => (
							<SelectItem
								key={product.id}
								value={product.id.toString()}
							>
								{product.name}
							</SelectItem>
						))}
					</Select>
				</div>
			</div>
			<SalesTabs
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
			/>
			<div>{renderTabContent()}</div>
		</div>
	)
}
