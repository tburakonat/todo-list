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
