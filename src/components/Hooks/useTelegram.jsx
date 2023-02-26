const tg = window.Telegram.WebApp
export function useTelegram() {
	const onClose = () => {
		tg.close()
	}
	const onToggleButton = () =>
		tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show()
	return {
		onToggleButton,
		onClose,
		tg,
		user: tg.initDataUnsafe?.user?.username,
		queriId: tg.initDataUnsafe?.queri_Id
	}
}
