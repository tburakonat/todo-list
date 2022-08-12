# Todo-list

You can create Tasks, which are instances of the Task class.

Every Task has a title, description, priority, status, due date and id.

The ids come from the uuid npm package and allow me to keep the tasks in the DOM and localstorage in sync.

You can change the status of each task or remove it completely.

Tasks are saved in localstorage and a changes or deletion will update localstorage.

On the initial load the Tasks from localstorage will be displayed.

---

Webpack was very new for me so I was unsure how to split my code the best way and use functions from different files.

I tried to minimize the responsibilites every module has. So my can be very easy to debug or understand.
