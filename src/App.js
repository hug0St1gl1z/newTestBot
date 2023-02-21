import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './components/Hooks/useTelegram'

function App() {
	const { onToggleButton, tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className="App">
			hi
			<br />
			<button onClick={onToggleButton}>toggle</button>
		</div>
	)
}

export default App
