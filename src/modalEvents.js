export const modalEvents = (() => {
	const modal = document.querySelector('.modal')
	const overlay = document.getElementById('overlay')
	const openModalButton = document.querySelector('[data-open-modal]')
	const closeModalButton = document.querySelector('[data-close-modal]')

	openModalButton.addEventListener('click', () => {
		modal.classList.add('active')
		overlay.classList.add('active')
	})

	closeModalButton.addEventListener('click', () => {
		modal.classList.remove('active')
		overlay.classList.remove('active')
	})

	overlay.addEventListener('click', () => {
		modal.classList.remove('active')
		overlay.classList.remove('active')
	})
})()
