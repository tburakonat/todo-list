import { v4 as uuidv4 } from 'uuid'
import { allTasks } from './allTasks'

export class Task {
	constructor(title, description, dueDate, priority, isDone = false) {
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.isDone = false
		this.id = uuidv4()
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
		doneButton.textContent = 'Mark as done'
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
		console.log(`isDone after The Click:`, allTasks[0].isDone)
		/*  
		Why don't I need to update the allTasks array? For example something like this?
		Why is the isDone property of the Task instance that I changed, automatically updated in allTasks
			let temp = allTasks.map(task => {
			const { title, description, dueDate, priority } = task
				return task.id === this.id ? new Task(title, description, dueDate, priority, !this.isDone) : task
			})
			console.log(temp)
		*/
	}
}
