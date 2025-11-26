document.addEventListener('DOMContentLoaded', () => {
   const todoInput = document.getElementById('todo-input');
   const addTodoButton = document.getElementById('add-todo');
   const todoList = document.getElementById('todo-list');

   addTodoButton.addEventListener('click', () => {
       const todoText = todoInput.value.trim();
       if (todoText) {
           const li = document.createElement('li');
           li.textContent = todoText;
           const deleteButton = document.createElement('button');
           deleteButton.textContent = 'Удалить';
           deleteButton.addEventListener('click', () => {
               todoList.removeChild(li);
           });
           li.appendChild(deleteButton);
           todoList.appendChild(li);
           todoInput.value = '';
       }
   });
});