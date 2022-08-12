import { v4 as uuidv4 } from 'uuid'
import { deleteFromLocalStorage, editTaskInLocalStorage } from './localStorage'

export class Task {
	constructor(title, description, dueDate, priority, isDone = false, id = uuidv4()) {
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.isDone = isDone
		this.id = id
	}

	displayTask() {
		const tasksDiv = document.getElementById('tasks')
		const task = document.createElement('div')
		const title = document.createElement('p')
		const description = document.createElement('p')
		const dueDate = document.createElement('p')
		const priority = document.createElement('p')

		// TODO: Create buttons to delete task and to mark as done
		const buttonsDiv = document.createElement('div')
		const doneButton = document.createElement('button')
		const removeButton = document.createElement('button')

		title.textContent = this.title
		description.textContent = this.description
		dueDate.textContent = this.dueDate
		priority.textContent = this.priority
		if (this.isDone) {
			doneButton.textContent = 'Mark as not done'
			doneButton.classList.add('done')
			doneButton.classList.remove('not-done')
		} else {
			doneButton.textContent = 'Mark as done'
			doneButton.classList.add('not-done')
			doneButton.classList.remove('done')
		}
		removeButton.textContent = 'Remove Task'

		task.classList.add('task-card')
		title.classList.add('task-title')
		description.classList.add('task-description')
		dueDate.classList.add('task-due-date')
		priority.classList.add('task-priority')
		buttonsDiv.classList.add('task-buttons')
		doneButton.classList.add('done-button', 'not-done')
		removeButton.classList.add('remove-button')

		doneButton.onclick = this.changeStatus
		removeButton.addEventListener('click', e => {
			const btn = e.target
			const taskCard = btn.closest('.task-card')
			taskCard.remove()
			deleteFromLocalStorage(this)
		})

		task.appendChild(title)
		task.appendChild(description)
		task.appendChild(dueDate)
		task.appendChild(priority)
		buttonsDiv.appendChild(doneButton)
		buttonsDiv.appendChild(removeButton)
		task.appendChild(buttonsDiv)

		tasksDiv.appendChild(task)
	}

	changeStatus = e => {
		this.isDone = !this.isDone
		editTaskInLocalStorage(this)
		const button = e.target
		if (this.isDone) {
			button.textContent = 'Mark as not done'
			button.classList.add('done')
			button.classList.remove('not-done')
		} else {
			button.textContent = 'Mark as done'
			button.classList.add('not-done')
			button.classList.remove('done')
		}
	}
}
