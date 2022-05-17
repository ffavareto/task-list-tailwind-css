import Task from "./Task.js";
import { tasksService } from "./tasks-service.js";
import taskTemplate from "./taskTemplate.js";

const form_task = document.forms.namedItem('task');
const tasks_container = document.querySelector('#tasks');

form_task.addEventListener('submit', (e) => {
    e.preventDefault();

    const { title, description } = form_task;
    const task = new Task(title.value, description.value);

    tasksService.newTask(task).then(() => alert('Tarefa cadastrada!'));
});

function reloadTasks() {
    tasksService.getTasks().then(tasks => {
        tasks.forEach(task => {
            tasks_container.innerHTML += taskTemplate(task);
        });
    });
};

window.onload = reloadTasks;