// parsing all DOM elements to be used 
let todoInput = document.querySelector('.todo-input')
const addBtn = document.getElementById('add');
let todoList = document.getElementsByClassName('todo-list')
let todoContainer = document.getElementById('todo-container')
let form = document.getElementById('form')

//add eventListeners
form.addEventListener('submit', function(event){
    event.preventDefault();
// const addlist = JSON.parse(todoInput.value)

    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    todoContainer.appendChild(newTodo)
    todoInput.value = ""
})




