import { tasksService } from "./tasks-service.js";

export default function taskTemplate(task) {
    return `
        <div class="bg-slate-700 p-3 rounded mb-1 flex justify-between items-center flex-wrap">
            <div>
                <p class="text-white">${task.title}</p>
                <p class="text-white">${task.description}</p>
            </div>
            <div class="flex justify-between flex-wrap">
                <button
                    onclick="editTask(${task.id}, ${task.done})"
                    class="m-1"
                    type="reset"
                    ${task.done ? `title='Marcar como "não feito"'` : `title='Marcar como "feito"'`}
                >
                    ${task.done ? ('<img src="./images/uncheck.png" class="w-8"/>') : ('<img src="./images/check.png" class="w-8"/>')}
                </button>
                <button
                    onclick="deleteTask(${task.id})"
                    class="m-1"
                    title="Excluir essa tarefa"
                >
                <img src="./images/delete.png" class="w-8"/>
                </button>
            </div>
        </div>
    `;
};

window.editTask = (id, state) => {
    tasksService.handleState(id, state);
};

window.deleteTask = (id) => {
    if (window.confirm('Deseja mesmo excluir essa tarefa da lista? Essa ação é irreverssível!')) {
        tasksService.deleteTask(id);
    };
};