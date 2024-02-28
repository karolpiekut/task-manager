let taskList = [];

let number = 0;

const statusList = {
    not_started: 0,
    in_progress: 1,
    complete: 2,
    cancelled: 3,
    expired: 4,
};

class TaskTemplate {
    constructor(title, text, date, status) {
        this.title = title;
        this.text = text;
        this.date = date;
        this.status = status;
    }
}
function addTask() {
    const tasksDiv = document.querySelector("#plan-board");
    let addTaskOne = prompt("Please enter task name:", "new");
    let addTaskText = prompt("Please enter task text:", "task text");
    let addTaskDate = prompt("Please enter task due date:", "1900-01-01");
    let addTaskStatus = prompt("Please enter task status", "new");
    let tempTask = new TaskTemplate(
        addTaskOne,
        addTaskText,
        addTaskDate,
        addTaskStatus
    );

    taskList.push(tempTask);

    const para = document.createElement('div');
    const node = document.createTextNode(`This is number ${number}`);
    taskList.push(`This is number ${number}`);
    para.appendChild(node);
    para.setAttribute('class', 'task');
    tasksDiv.appendChild(para);
    number++;
    console.table(taskList);
}

export default addTask;


