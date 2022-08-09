import { Task } from './Task'

const contentDiv = document.getElementById('content')
const h1 = document.createElement('h1')
h1.textContent = 'Hello World'
contentDiv.appendChild(h1)

const myTask = new Task('Einkaufen', 'Fleisch, Fisch, Eier', '12.08.2022', 'hoch')
console.log(myTask)
