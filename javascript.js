const listElement = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const clearAll = document.getElementById('clear-all');
let todos = [];


function updateToDosUI() {
    listElement.innerHTML = '';

    for (let todo of todos) {
        const span = document.createElement('span');
        span.innerText = todo.text;
        
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = todo.isCompleted;
        checkbox.dataset.todoId = todo.id;
        checkbox.classList.add('checkbox');

        const todoLiElement = document.createElement('li');
        if (todo.isCompleted) {
            todoLiElement.classList.add('checked');
        }

        todoLiElement.append(checkbox);
        todoLiElement.append(span);
        listElement.append(todoLiElement);
    }
}

listElement.addEventListener('click', (event) => {
    if(event.target.matches('input.checkbox')) {
        console.log();
        const todoIndex = todos.findIndex(todo => todo.id == event.target.dataset.todoId);
        console.log(todoIndex);
        todos[todoIndex] = {...todos[todoIndex], isCompleted: event.target.checked }
        event.target.parentElement.classList.toggle('checked');
    }
});

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoInput = document.getElementById('todo-text');
    
    if (!todoInput.value) {
        alert('You tryed to add empty TODO!');
        return;
    }

    todos.push({ id: Date.now(), text: todoInput.value, isCompleted:false });
    todoInput.value = '';
    
    updateToDosUI()
})

clearAll.addEventListener('click', (event) => {
    event.preventDefault();
    listElement.innerHTML = '';
    todos = [];
})



