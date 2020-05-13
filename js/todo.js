const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDOS';

let toDos = [];


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintDoto(text) {
    const li = document.createElement("li");
    //const delBtn = document.createElement("button");
    const delBtn = document.createElement("span");
    const label = document.createElement("label");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.className="toDo_button";
    delBtn.addEventListener("click", deleteToDo);
    label.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(label);
    li.id = newId;
    li.className = "toDo";
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintDoto(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToTos = JSON.parse(loadedToDos);
        parsedToTos.forEach(function(toDo) {
            paintDoto(toDo.text);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();