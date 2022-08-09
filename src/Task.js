export class Task {
	constructor(title, description, dueDate, priority) {
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
	}

	displayTask() {
		const tasksDiv = document.getElementById('tasks')
		const task = document.createElement('div')
		const title = document.createElement('p')
		const description = document.createElement('p')
		const dueDate = document.createElement('p')
		const priority = document.createElement('p')

		// TODO: Create buttons to delete task and to mark as done

		title.textContent = this.title
		description.textContent = this.description
		dueDate.textContent = this.dueDate
		priority.textContent = this.priority

		task.classList.add('task-card')
		title.classList.add('task-title')
		description.classList.add('task-description')
		dueDate.classList.add('task-due-date')
		priority.classList.add('task-priority')

		task.appendChild(title)
		task.appendChild(description)
		task.appendChild(dueDate)
		task.appendChild(priority)

		tasksDiv.appendChild(task)
	}
}
