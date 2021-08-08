const toDoForm = document.querySelector('.todo-form');
const toDoList = document.querySelector('.todo-list');
const toDo = toDoForm.querySelector('.todo-form input');

let toDos = [];

const TODOS_KEY = "todos";

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(e){
    const $ele = e.target.parentElement;
    $ele.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt($ele.id));
    saveToDo();
}

function writeToDo(newTodo){
    const $li = document.createElement("li");
    $li.id=newTodo.id;
    const $btn = document.createElement("button");
    $btn.classList.add("todo__btn")
    $btn.innerText= "❌";
    $btn.addEventListener("click",deleteToDo);
    $li.appendChild($btn);
    const $span = document.createElement("span");
    $span.classList.add("todo__text")
    $span.innerText=newTodo.text;
    $li.appendChild($span);
    // const newLi = 
    toDoList.appendChild($li);
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = toDo.value;
    toDo.value = "";
    const newToDoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newToDoObj);
    writeToDo(newToDoObj);
    // localStorage.setItem("todos",toDos);
    saveToDo();
}

toDoForm.addEventListener('submit',handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(writeToDo)
}