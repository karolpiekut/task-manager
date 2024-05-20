let tasks = [];
let customTaskIndex = -1;

function createATaskDiv(projectName, taskName, text, date, status) {
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('id', `taskID_${customTaskIndex}`);
    taskDiv.setAttribute('class', 'task');

    const projectNameText = document.createElement('h3');
    projectNameText.setAttribute('class', 'projectName');
    projectNameText.innerText = projectName;

    const taskNameText = document.createElement('h2');
    taskNameText.setAttribute('class', 'taskName');
    taskNameText.innerText = taskName;

    const textName = document.createElement('p');
    textName.setAttribute('class', 'textName');
    textName.innerText = text;

    const dateNameText = document.createElement('p');
    dateNameText.setAttribute('class', 'dateName');
    dateNameText.innerText = date;

    const statusNameText = document.createElement('p');
    statusNameText.setAttribute('class', 'statusName');
    statusNameText.innerText = status;

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.setAttribute('class', 'deleteTaskBtn');
    deleteTaskBtn.setAttribute('id', `delButtonID_${customTaskIndex}`)
    deleteTaskBtn.innerText = 'delete';

    taskDiv.appendChild(projectNameText);
    taskDiv.appendChild(taskNameText);
    taskDiv.appendChild(textName);
    taskDiv.appendChild(dateNameText);

    taskDiv.appendChild(statusNameText);
    taskDiv.appendChild(deleteTaskBtn);

    return taskDiv;
}

function Task(projectName, taskName, text, date, status) {
    customTaskIndex++;
    return {
        customTaskIndex,
        projectName,
        taskName,
        text,
        date,
        status,
    }
}

function displayProjectList(projectNameText) {
    let projectListDiv = document.querySelector("#ulProjectList");
    let projectListItem = document.createElement('button');
    projectListItem.setAttribute('id', `btn_${projectNameText}`);
    projectListItem.setAttribute('class', 'projectListItem');
    projectListItem.innerText = projectNameText;
    projectListDiv.appendChild(projectListItem);
}

function testIfDisplayProjectName(name) {
    let check = [];
    const checkIfProjectExists = (obj, value) => Object.values(obj).includes(value);
    const isNotProject = (name) => name !== true;
    for (let i in tasks) {
        check.push(checkIfProjectExists(tasks[i], name));
        console.log(`check if all good: ${check.every(isNotProject)}`);
    }
    if (check.every(isNotProject)) {
        displayProjectList(name);
    }
}

//---------------------------------------------------------------------------------------------------------------------
function createATask() {
    const plan = document.querySelector("#plan-board");
    const today = document.querySelector("#today-board");
    const future = document.querySelector("#future-board");
    const overdue = document.querySelector("#overdue-board");
    const done = document.querySelector("#done-board");

    let projectNameQuestion = prompt("Project name:", "new");
    let taskNameQuestion = prompt("Task name:", "new")
    let taskTextQuestion = prompt("Notes:", "new");
    let taskDateQuestion = prompt("Task due:", "1900-01-01");
    let taskStatusQuestion = prompt("Please enter task status", "new");

    testIfDisplayProjectName(projectNameQuestion);

    tasks.push(Task(projectNameQuestion,
        taskNameQuestion,
        taskTextQuestion,
        taskDateQuestion,
        taskStatusQuestion));
    //-----------------------------------------------------------------------------------------------------------------
    if (taskStatusQuestion === "today") {
        today.appendChild(createATaskDiv(
            projectNameQuestion,
            taskNameQuestion,
            taskTextQuestion,
            taskDateQuestion,
            taskStatusQuestion));
    } else if (taskStatusQuestion === "future") {
        future.appendChild(createATaskDiv(
            projectNameQuestion,
            taskNameQuestion,
            taskTextQuestion,
            taskDateQuestion,
            taskStatusQuestion));
    } else if (taskStatusQuestion === "overdue") {
        overdue.appendChild(createATaskDiv(
            projectNameQuestion,
            taskNameQuestion,
            taskTextQuestion,
            taskDateQuestion,
            taskStatusQuestion));
    } else if (taskStatusQuestion === "done") {
        done.appendChild(createATaskDiv(
            projectNameQuestion,
            taskNameQuestion,
            taskTextQuestion,
            taskDateQuestion,
            taskStatusQuestion));
    } else {
        plan.appendChild(createATaskDiv(
            projectNameQuestion,
            taskNameQuestion,
            taskTextQuestion,
            taskDateQuestion,
            taskStatusQuestion));
    }
}

//display tasks

function deleteButton() {
    console.log('hi button');
    console.log(this);
}

/*

class Button {
constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button(“hello”);

setTimeout(button.click, 1000); // hello

The class field click = () => {…} is created on a per-object basis,
there’s a separate function for each Button object, with this inside it referencing that object.
We can pass button.click around anywhere, and the value of this will always be correct.

*/
//delete tasks
function removeTask(array, taskId) {
    return array.splice(taskId, 1);
}

//delete project
function removeProject(array, removeProjectName) {
    return array.filter((arrayItem) => {
        return arrayItem.projectName !== removeProjectName;
    });
}

//amend task or project
function amendValues(array, id, property, value) {
    if (property === "projectName") {
        for (let i in array) {
            if (array[i].projectName === array[id].projectName) {
                array[i].projectName = value;
            }
        }
    } else {
        array[id][property] = value;
    }
}

export {removeTask, removeProject, amendValues, createATask, displayProjectList, deleteButton};
