const button = document.querySelector('#add-task');
const tasksDiv = document.querySelector('#tasks');
let number = 1;

let taskList = [];


function addTask() {
    const para = document.createElement('p');
    const node = document.createTextNode(`This is number ${number}`);
    taskList.push(`This is number ${number}`);
    para.appendChild(node);
    tasksDiv.appendChild(para);
    number++;
    console.table(taskList);
}

button.addEventListener('click', addTask);