import React from 'react'

const Button = (props) => (
	<button {...props} className={'button' + props.className} />
)

export default Button
