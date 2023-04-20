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

// stop empty todo

if (!todoInput.value){
    return alert('Please enter a task')
}

// Create a new li

    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    todoContainer.appendChild(newTodo)
    todoInput.value = ""

    const actionBtns = document.createElement('span');
    newTodo.appendChild(actionBtns)

    // Create to complete
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    actionBtns.appendChild(completeBtn)

    // create the delete btn 
    const deletebtn = document.createElement('button')
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i></i>'
    actionBtns.appendChild(deletebtn)

    // completed todo funtion
    completeBtn.addEventListener('click' , function(){
        todoContainer[0]=newTodo.style.textDecoration="line-through"
    })

        // delete todo funtion
        deletebtn.addEventListener('click', function(){
            newTodo.remove()
        })



})









