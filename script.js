// Selectors
const todoInputEl = document.querySelector('.todo-input');
const todoButtonEl = document.querySelector('.todo-button');
const todoListEl = document.querySelector('.todo-item');

//Event Listners
todoButtonEl.addEventListener('click', addTodo)
todoListEl.addEventListener('click', deleteCheck)
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
    console.log(todoListEl);
    // Clear Todo Input VALUE
    todoInputEl.value = ""
    console.log(todoListEl);
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
