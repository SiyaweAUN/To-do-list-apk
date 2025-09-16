const input = document.getElementById("input");
const createBtn = document.getElementById("create");
const inputContainer = document.getElementById("inputContainer");
const tasksContainer = document.getElementById("tasksContainer");

const createTask =()=>{
    let value = input.value
    if(value===""){
alert("enter text into the input box")
return
    }
const newTask = document.createElement('div');
const newButton =document.createElement('button');
newTask.textContent = value;
newButton.innerText = 'Remove';
newButton.classList.add("buttonAdd");
newButton.onclick=()=>{
    newTask.remove();
}
newTask.appendChild(newButton);
tasksContainer.appendChild(newTask);
}
createBtn.addEventListener("click", createTask);