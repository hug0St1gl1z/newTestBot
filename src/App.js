import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './components/Hooks/useTelegram'

function App() {
	const { onToggleButton } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])
	
	return (
		<div className="App">
			привет!
			<br />
			<button onClick={onToggleButton}>toggle</button>
		</div>
	)
}

export default App
