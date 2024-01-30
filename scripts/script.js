/*
const button = document.querySelector('#add-task');
const tasksDiv = document.querySelector('#tasks');
let number = 1;

let taskList = [];
*/
const statusList = {
    not_started: 0,
    in_progress: 1,
    complete: 2,
    cancelled: 3,
    expired: 4
}

function Task(title, text, date, status) {
    this.title = title;
    this.text = text;
    this.date = date;
    this.status = status;
}

const completeTutorial = new Task("complete tutorial", "work on the tutorial", "2024-30-01", "not-started");

console.log(completeTutorial);


console.log(statusList.in_progress);






/*
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
*/
