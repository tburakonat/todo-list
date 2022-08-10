import { Task } from './Task'
import { modalEvents } from './modalEvents'
import { createTask } from './taskEvents'
import { saveToLocalStorage, deleteFromLocalStorage } from './localStorage'

const myTask = new Task('Shop', 'Meat, Fish, Eggs', '2022-08-12', 'high')
const anotherTask = new Task('Homework', 'Math, English, History', '2022-08-14', 'medium')
myTask.displayTask()
anotherTask.displayTask()

// Load from localStorage
// Create projects and tasks inside projects
// Maybe use date-fns

saveToLocalStorage(myTask)
saveToLocalStorage(anotherTask)
deleteFromLocalStorage(anotherTask)
