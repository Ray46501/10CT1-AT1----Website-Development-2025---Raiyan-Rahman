// Adds event listener to document to trigger when the content is full loaded
document.addEventListener("DOMContentLoaded", function() {
    // Displays tasks
    displayTasks();
});

// Adds event lsitener to add task form
document.getElementById('add-task-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gets values from the input fields 
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    // Creates object for the task
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Adds Task to tasks in local storage and resets form  
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('add-task-form').reset();
    window.location.href = 'tasks.html';
});

function displayTasks() {
    // Gets the tasks from local storage 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    const noTasksMessage = document.getElementById('no-tasks-message');
    
    taskList.innerHTML = '';
    
    // CHecks if there any tasks if not displays please add task message
    if (tasks.length === 0) {
        
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
        // Loops through each task and creates html list item element 
        tasks.forEach(task => {
            if (!task.completed) {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task-item');
                // Scaffold for dask display
                taskItem.innerHTML = `
                    <h4>${task.title}</h4>
                    <p>${task.description}</p>
                    <p>Due: ${task.dueDate}</p>
                    <p>Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</p>
                    <button class="btn btn-success" onclick="markAsCompletedAndDelete('${task.title}')">Mark as Completed</button>
                `;
                // Adds to the task list in my tasks html
                taskList.appendChild(taskItem);
            }
        });
    }
}

// Funtion to get rid of task 
function markAsCompletedAndDelete(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // FIlters out task with the title parsed to the function
    tasks = tasks.filter(task => task.title !== title);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Update Task Display
    displayTasks();     
}