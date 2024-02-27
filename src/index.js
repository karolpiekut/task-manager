import _ from 'lodash';
import './styles.css';

function component() {
    const element = document.createElement('div');
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = `<div id="projects">
    <div id="projects-list">
        <h2>projects</h2>
        <div id="each-project"></div>
    </div>
    <div id="plan" class="work-pane">
        <h2>plan</h2>
        <div class="board" id="plan-board">
            <div class="task">task name</div>
        </div>
    </div>
    <div id="today" class="work-pane">
        <h2>today</h2>
        <div class="board">
            <div class="task">task name</div>
            <div class="task"></div>
            <div class="task"></div>
            <div class="task"></div>
            <div class="task"></div>
            <div class="task"></div>
        </div>
    </div>
    <div id="future" class="work-pane">
        <h2>future</h2>
        <div class="board">
            <div class="task">task name</div>
            <div class="task"></div>
            <div class="task"></div>
            <div class="task"></div>
            <div class="task"></div>
            <div class="task"></div>
        </div>
    </div>
    <div id="overdue" class="work-pane">
        <h2>overdue</h2>
        <div class="board">
            <div class="task">task name</div>
            <div class="task"></div>
            <div class="task"></div>
        </div>
    </div>
    <div id="done" class="work-pane">
        <h2>done</h2>
        <div class="board">
            <div class="task">task name</div>
        </div>
    </div>
</div>
<button id="add-task">add task</button>`

    return element;
}


document.body.appendChild(component());


const button = document.querySelector("#add-task");
const tasksDiv = document.querySelector("#plan-board");

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

button.addEventListener("click", addTask);

