import { Task } from './Task'
import { modalEvents } from './modalEvents'
import { createTask } from './taskEvents'
import { allTasks } from './allTasks'

const myTask = new Task('Shop', 'Meat, Fish, Eggs', '2022-08-12', 'high')
const anotherTask = new Task('Homework', 'Math, English, History', '2022-08-14', 'medium')
myTask.displayTask()
anotherTask.displayTask()

allTasks.push(myTask)
allTasks.push(anotherTask)

console.log(myTask)
console.log(anotherTask)

console.log(`isDone before the Click:`, allTasks[0].isDone)
