import { Task } from './Task'

export const saveToLocalStorage = taskToSave => {
	console.log('Saving to LocalStorage')
	const oldTasks = JSON.parse(localStorage.getItem('tasks'))
	if (!oldTasks) {
		console.log('There is no old array')
		let tasks = []
		tasks.push(taskToSave)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		console.log('Saved to Local Storage')
	} else {
		oldTasks.push(taskToSave)
		localStorage.setItem('tasks', JSON.stringify(oldTasks))
		console.log('Saved to Local Storage')
	}
}

export const deleteFromLocalStorage = taskToDelete => {
	console.log('Deleting from localstorage')
	const oldTasks = JSON.parse(localStorage.getItem('tasks'))
	const newTasks = oldTasks.filter(task => task.id !== taskToDelete.id)
	localStorage.setItem('tasks', JSON.stringify(newTasks))
	console.log('Deleted from localstorage')
}

export const editTaskInLocalStorage = editedTask => {
	console.log('Editing from localstorage')
	const oldTasks = JSON.parse(localStorage.getItem('tasks'))
	const newTasks = oldTasks.map(task => (task.id === editedTask.id ? editedTask : task))
	localStorage.setItem('tasks', JSON.stringify(newTasks))
	console.log('Edited from localstorage')
}

export const displayTasksInLocalStorage = () => {
	// Take the object from localStorage and make a new Task with it
	console.log('Displaying Tasks')
	window.addEventListener(
		'DOMContentLoaded',
		() => {
			const tasks = JSON.parse(localStorage.getItem('tasks'))
			if (!tasks || tasks.length == 0) {
				console.log('There is no array in localStorage')
			} else {
				console.log('There is an array in localStorage')
				console.log(tasks)
				tasks.forEach(task => {
					const t = new Task(task.title, task.description, task.dueDate, task.priority, task.isDone, task.id)
					t.displayTask()
					console.log(t)
				})
			}
		},
		{ once: true }
	)
}
