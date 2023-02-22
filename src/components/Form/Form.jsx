import React from 'react'
import { useState, useEffect } from 'react'
import './Form.css'
import { useTelegram } from '../Hooks/useTelegram'

const Form = () => {
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')
	const [subject, setSubject] = useState('physical')
	const { tg } = useTelegram()
	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные',
		})
	}, [])
	useEffect(() => {
		if (!country || !city) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [country, city])

	const onChangeCountry = (e) => setCountry(e.target.value)
	const onChangeCity = (e) => setCity(e.target.value)
	const onChangeSubject = (e) => setSubject(e.target.value)

	return (
		<div className={'form'}>
			<h3>Введите данные</h3>
			<input
				className="input"
				type="text"
				placeholder="Country"
				value={country}
				onChange={onChangeCountry}
			/>
			<input
				className="input"
				type="text"
				placeholder="City"
				value={city}
				onChange={onChangeCity}
			/>
			<select value={subject} className={'select'} onChange={onChangeSubject}>
				<option value={'physical'}>LLC</option>
				<option value={'legal'}>Person</option>
			</select>
		</div>
	)
}

export default Form