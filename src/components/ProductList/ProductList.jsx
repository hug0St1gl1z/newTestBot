import React, { useState } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useTelegram } from '../Hooks/useTelegram'

const products = [
	{
		id: '1',
		title: 'Джинсы',
		price: 5000,
		description: 'Синего цвета, прямые',
	},
	{
		id: '2',
		title: 'Куртка',
		price: 12000,
		description: 'Зеленого цвета, теплая',
	},
	{
		id: '3',
		title: 'Джинсы 2',
		price: 5000,
		description: 'Синего цвета, прямые',
	},
	{
		id: '4',
		title: 'Куртка 8',
		price: 122,
		description: 'Зеленого цвета, теплая',
	},
	{
		id: '5',
		title: 'Джинсы 3',
		price: 5000,
		description: 'Синего цвета, прямые',
	},
	{
		id: '6',
		title: 'Куртка 7',
		price: 600,
		description: 'Зеленого цвета, теплая',
	},
	{
		id: '7',
		title: 'Джинсы 4',
		price: 5500,
		description: 'Синего цвета, прямые',
	},
	{
		id: '8',
		title: 'Куртка 5',
		price: 12000,
		description: 'Зеленого цвета, теплая',
	},
]
const getTotalPrice = (items = []) => {
	return items.reduce((acc, item) => acc + item.price, 0)
}
const ProductList = () => {
	const [addItems, setAddedItems] = React.useState([])
	const { tg } = useTelegram()

	const onAdd = (product) => {
		const alreadyAdded = addItems.find((item) => item.id === product.id)
		let newItems = []
		alreadyAdded
			? (newItems = addItems.filter((item) => item.id !== product.id))
			: (newItems = [...addItems, product])
		setAddedItems(newItems)
		newItems.length === 0
			? tg.MainButton.hide()
			: (tg.MainButton.show(),
			  tg.MainButton.setParams({ text: `Купить товар: ${getTotalPrice(newItems)}` }))
	}
	return (
		<div className={'list'}>
			{products.map((item) => (
				<ProductItem product={item} onAdd={onAdd} className={'item'} />
			))}
		</div>
	)
}

export default ProductList
