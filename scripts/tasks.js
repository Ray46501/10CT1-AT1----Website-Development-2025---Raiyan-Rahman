document.addEventListener("DOMContentLoaded", function() {
    displayTasks();
});

document.getElementById('add-task-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('add-task-form').reset();
    window.location.href = 'tasks.html';
});

function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    const noTasksMessage = document.getElementById('no-tasks-message');
    
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
        tasks.forEach(task => {
            if (!task.completed) {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task-item');
                taskItem.innerHTML = `
                    <h4>${task.title}</h4>
                    <p>${task.description}</p>
                    <p>Due: ${task.dueDate}</p>
                    <p>Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</p>
                    <button class="btn btn-success" onclick="markAsCompletedAndDelete('${task.title}')">Mark as Completed</button>
                `;
                taskList.appendChild(taskItem);
            }
        });
    }
}

function markAsCompletedAndDelete(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.title !== title);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();     
}