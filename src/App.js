import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp
function App() {
	useEffect(() => {
		tg.ready()
	}, [])
	const onClose = () => {
		tg.close()
	}
	return (
		<div className="App">
			привет!
			<br />
			<button className="body" onClick={onClose}> Push me! </button>
		</div>
	)
}

export default App
