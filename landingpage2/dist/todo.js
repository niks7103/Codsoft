document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function () {
        if (todoInput.value.trim() !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';

            const taskText = document.createElement('span');
            taskText.innerText = todoInput.value;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerText = 'Delete';

            deleteBtn.addEventListener('click', function () {
                todoItem.remove();
            });

            todoItem.appendChild(taskText);
            todoItem.appendChild(deleteBtn);

            todoList.appendChild(todoItem);

            todoInput.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function () {
        if (todoInput.value.trim() !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';

            const taskText = document.createElement('span');
            taskText.innerText = todoInput.value;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerText = 'Delete';

            deleteBtn.addEventListener('click', function () {
                todoItem.remove();
            });

            todoItem.appendChild(taskText);
            todoItem.appendChild(deleteBtn);

            todoList.appendChild(todoItem);

            todoInput.value = '';
        }
    });
});
