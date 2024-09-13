document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('tarefa');
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const taskList = document.getElementById('task-list');
        const newTaskItem = document.createElement('li');
        newTaskItem.className = 'task-item';
        newTaskItem.innerHTML = `
            <span class="task-text">${taskValue}</span>
            <button type="button" class="delete-task-button">Excluir</button>
        `;
        taskList.appendChild(newTaskItem);
        taskInput.value = ''; // Limpa o input
        newTaskItem.classList.add('fade-in'); // Adiciona uma classe para animação
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-task-button')) {
        event.target.closest('li').remove();
    }
    if (event.target.classList.contains('task-text')) {
        const taskItem = event.target.closest('li');
        taskItem.classList.toggle('checked');
    }
});
