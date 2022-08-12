import { Task } from './Task'
import { modalEvents } from './modalEvents'
import { createTask } from './taskEvents'
import { saveToLocalStorage, deleteFromLocalStorage } from './localStorage'
import { displayTasksInLocalStorage } from './localStorage'

displayTasksInLocalStorage()
/*
const myTask = new Task('Shop', 'Meat, Fish, Eggs', '2022-08-12', 'high')
const anotherTask = new Task('Homework', 'Math, English, History', '2022-08-14', 'medium')

myTask.displayTask()
anotherTask.displayTask()

saveToLocalStorage(myTask)
saveToLocalStorage(anotherTask)
*/
// Load from localStorage
// Create projects and tasks inside projects
// Maybe use date-fns
