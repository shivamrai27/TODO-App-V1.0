// Selectors
const todoInputEl = document.querySelector('.todo-input');
const todoButtonEl = document.querySelector('.todo-button');
const todoListEl = document.querySelector('.todo-item');
const filterOptionEl = document.querySelector('.filter-todo');

//Event Listners
todoButtonEl.addEventListener('click', addTodo)
todoListEl.addEventListener('click', deleteCheck)
filterOptionEl.addEventListener('click', filterTodo)
//functions
function addTodo(event) {
    event.preventDefault();
    // Todo List
    const todoDiv = document.createElement('div'); // created a div
    todoDiv.classList.add('todo'); // now give class todod to that div
    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInputEl.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND LIST
    todoListEl.appendChild(todoDiv)
    // Clear Todo Input VALUE
    todoInputEl.value = ""
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //TODO ANIMATION
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }
    //COMPLETE TODO
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoListEl.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "incomplete":
                if (!todo.classList.contains('completed'))
                    todo.style.display = 'flex';
                else
                    todo.style.display = 'none';
                break;
        }
    });
}
