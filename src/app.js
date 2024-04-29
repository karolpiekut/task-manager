const theApp = document.querySelector("#theApp");

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
    function createATask (){
    const plan = document.querySelector("#plan-board");
    let projectNameQuestion= prompt("Project name:", "new");
    let taskNameQuestion = prompt("Task name:", "new")
    let taskTextQuestion = prompt("Notes:", "new");
    let taskDateQuestion = prompt("Task due:", "1900-01-01");
    let taskStatusQuestion = prompt("Please enter task status", "new");


    let tempTask = Task(projectNameQuestion,
        taskNameQuestion,
        taskTextQuestion,
        taskDateQuestion,
        taskStatusQuestion)

        console.log(tempTask);
    tasks.push(tempTask);

        plan.appendChild(createATaskDiv(
            projectNameQuestion,
            taskNameQuestion,
            taskTextQuestion,
            taskDateQuestion,
            taskStatusQuestion));

    // plan.appendChild(createATaskDiv(projectName, taskName, text, date, status));
    // tasks.push(Task(projectName,taskName, text, date, status));
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


// function addTask() {
//     const tasksDiv = document.querySelector("#plan-board");
//     let addTaskOne = prompt("Please enter task name:", "new");
//     let addTaskText = prompt("Please enter task text:", "task text");
//     let addTaskDate = prompt("Please enter task due date:", "1900-01-01");
//     let addtaskstatus = prompt("Please enter task status", "new");
//     let tempTask = new TaskTemplate(
//         addTaskOne,
//         addTaskText,
//         addTaskDate,
//         addtaskstatus
//     );
//     taskList.push(tempTask);
//     const para = document.createElement('div');
//     const node = document.createTextNode(`This is number ${number}`);
//     taskList.push(`This is number ${number}`);
//     para.appendChild(node);
//     para.setAttribute('class', 'task');
//     tasksDiv.appendChild(para);
//     number++;
// }
//



// let app = [];
// let taskList = [];
// let number = 0;
// let projectNumber = 0;

//
// const statusList = {
//     not_started: 0,
//     in_progress: 1,
//     complete: 2,
//     cancelled: 3,
//     expired: 4,
// };
//
// //Object.setPrototypeOf(Player.prototype, Person.prototype)
//
// class ProjectTemplate {
//     constructor(title) {
//         this.title = title;
//     }
// }
//
// class TaskTemplate extends ProjectTemplate{
//     constructor(taskTitle, text, date, status) {
//         this.taskTitle = taskTitle;
//         this.text = text;
//         this.date = date;
//         this.status = status;
//     }
// }
//
// function addProject() {
//     const projectsDiv = document.querySelector('#project-list');
//     let addProjectName = prompt("Please enter project name:", "new");
//     let tempProject = new ProjectTemplate(
//         addProjectName
//     );
//     app.push(tempProject);
//
//     const paraProject = document.createElement('div');
//     const nodeProject = document.createTextNode(`${addProjectName}`)
//     paraProject.appendChild(nodeProject)
//     projectsDiv.appendChild(paraProject);
//     projectNumber++;
// }
//

//
//
//

export {createATaskDiv, Task, removeTask, removeProject, amendValues, createATask};




//amendValues(tasks, 1, "projectName", "task manager");
//amendValues(tasks, 1, "taskName", "Amend Tasks Function");

//console.table(tasks);