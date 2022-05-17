async function newTask(task) {
    try {
        return await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (error) {
        alert(`Verifique se o servidor está online! Erro: ${error.message}`);
    };
};

async function getTasks() {
    try {
        const tasksJSON = await fetch('http://localhost:3000/tasks');
        return await tasksJSON.json();
    } catch (error) {
        alert(`Verifique se o servidor está online! Erro: ${error.message}`);
    };
};

async function handleState(id, state) {
    try {
        return await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ done: !state }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (error) {
        alert(`Verifique se o servidor está online! Erro: ${error.message}`);
    };
};


async function deleteTask(id) {
    try {
        return await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        alert(`Verifique se o servidor está online! Erro: ${error.message}`);
    };
};

export const tasksService = {
    newTask,
    getTasks,
    handleState,
    deleteTask
}