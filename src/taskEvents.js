import { Task } from './Task'
import { saveToLocalStorage } from './localStorage'

export const createTask = (() => {
	const taskForm = document.querySelector('.task-form')

	function getFormData(e) {
		const form = e.target
		const title = form[0].value
		const description = form[1].value
		const dueDate = form[2].value
		const priority = form[3].value
		return { title, description, dueDate, priority }
	}

	taskForm.addEventListener('submit', e => {
		e.preventDefault()
		const formData = getFormData(e)
		const task = new Task(formData.title, formData.description, formData.dueDate, formData.priority)
		task.displayTask()
		saveToLocalStorage(task)
		document.querySelector('[data-close-modal]').click()
		taskForm.reset()
	})
})()
