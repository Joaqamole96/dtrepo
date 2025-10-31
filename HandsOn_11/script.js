document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-task-form');
    const taskList = document.getElementById('task-list');
    const titleInput = document.getElementById('task-title-input');
    const descInput = document.getElementById('task-desc-input');
    const emptyMessage = document.getElementById('empty-list-message');

    updateEmptyMessage();

    // Overwrite form submission to add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(titleInput.value.trim(), descInput.value.trim());

        titleInput.value = '';
        descInput.value = '';
        titleInput.focus();
    });

    // Add listener for task actions
    taskList.addEventListener('click', (e) => {
        const taskItem = e.target.closest('.task-item');

        if (!taskItem) return;

        if (e.target.classList.contains('btn-checkoff')) {
            toggleComplete(taskItem);
        } else if (e.target.classList.contains('btn-delete')) {
            deleteTask(taskItem);
        }
    });

    // Add task to task list
    function addTask(title, description) {
        if (!title) {
            alert('Please enter a task title.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        // I'll just use innerHTML for simplicity
        const taskHTML = `
            <div class="task-content">
                <h3 class="task-title">${title}</h3>
                <p class="task-desc">${description || 'No description.'}</p>
            </div>
            <div class="task-actions">
                <button class="btn-checkoff">Mark as Complete</button>
                <button class="btn-delete">Delete</button>
            </div>
        `;

        listItem.innerHTML = taskHTML;
        taskList.appendChild(listItem);

        updateEmptyMessage();
    }

    // Toggle task completion
    function toggleComplete(item) {
        item.classList.toggle('completed');
        const button = item.querySelector('.btn-checkoff');
        if (item.classList.contains('completed')) {
            button.textContent = 'Uncomplete';
            button.style.backgroundColor = 'var(--completed-color)';
        } else {
            button.textContent = 'Complete';
            button.style.backgroundColor = 'var(--secondary-color)';
        }
    }

    // Delete task from tasklist
    function deleteTask(item) {
        if (confirm('Are you sure you want to delete this task?')) {
            taskList.removeChild(item);
            updateEmptyMessage();
        }
    }

    // Display empty list if there are no tasks
    function updateEmptyMessage() {
        if (taskList.children.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
        }
    }
});