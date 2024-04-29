let tasks = [];
let customTaskIndex = -1;

function createATaskDiv(projectName, taskName, text, date, status) {
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('id', 'taskDiv');
    taskDiv.setAttribute('class', 'task');

    const projectNameText = document.createElement('h3');
    projectNameText.setAttribute('class', 'projectName');
    projectNameText.textContent = projectName;

    const taskNameText = document.createElement('h2');
    taskNameText.setAttribute('class', 'taskName');
    taskNameText.textContent = taskName;

    const textName = document.createElement('p');
    textName.setAttribute('class', 'textName');
    textName.textContent = text;

    const dateNameText = document.createElement('p');
    dateNameText.setAttribute('class', 'dateName');
    dateNameText.textContent = date;

    const statusNameText = document.createElement('p');
    statusNameText.setAttribute('class', 'statusName');
    statusNameText.textContent = status;

    taskDiv.appendChild(projectNameText);
    taskDiv.appendChild(taskNameText);
    taskDiv.appendChild(textName);
    taskDiv.appendChild(dateNameText);
    taskDiv.appendChild(statusNameText);

    return taskDiv;
}

//create tasks
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

// function createATask (projectName, taskName, text, date, status){
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

    let tempTask = Task(projectNameQuestion,
        taskNameQuestion,
        taskTextQuestion,
        taskDateQuestion,
        taskStatusQuestion)

    tasks.push(tempTask);

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

    console.table(tasks);
}

//delete tasks
function removeTask(array, taskId) {
    return array.splice(taskId, 1)
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

export {createATaskDiv, Task, removeTask, removeProject, amendValues, createATask};
