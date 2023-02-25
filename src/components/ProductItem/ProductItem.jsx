import React from 'react'
import './ProductItem.css'
import Button from '../Button/Button'

const ProductItem = ({ product, className, onAdd }) => {
	return (
		<div className={'product' + className}>
			<div className={'img'} />
			<div className={'title'}>{product.title}</div>
			<div className={'descriptions'}>{product.descriptions}</div>
			<div className={'price'}>
				<span>
					Стоимость: <b> {product.price}</b>
				</span>
			</div>
			<Button className={'add-btn'} onClick={() => onAdd(product)}>
				{' '}
				Добавить в корзину
			</Button>
			MyProductItem
		</div>
	)
}

export default ProductItem
