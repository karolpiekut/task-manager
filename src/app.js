let tasks = [];
let customTaskIndex = -1;

console.log("git test");

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

amendValues(tasks, 1, "projectName", "task manager");
amendValues(tasks, 1, "taskName", "Amend Tasks Function");

console.table(tasks);

// let app = [];
// let taskList = [];
// let number = 0;
// let projectNumber = 0;

//
// const statusList = {
//     notStarted: 0,
//     inProgress: 1,
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

tasks.push(Task("task-manager", "name", "random text", "2024-04-10", 'new'));
tasks.push(Task("task-manager", "name2", "random text2", "2024-04-11", 'done'));
tasks.push(Task("food menu", "project scope", "create a project scope", "2024-04-10", 'overdue'));
tasks.push(Task("food menu", "create recipes", "get food recipes from granny", "2024-04-20", 'new'));
// tasks.push(Task("odin-project", "name3", "test tekstu", "2024-04-14", 'overdue'));
// tasks.push(Task("odin-project", "name4", "test tekstu", "2024-04-14", 'overdue'));
// tasks.push(Task("task-manager", "name3", "test tekstu", "2024-04-14", 'overdue'));
// tasks.push(Task("task-manager", "name5", "random tekst", "2024-04-19", 'done'));
// tasks.push(Task("odin-project", "name8", "ogarnij", "2024-04-14", 'overdue'));


export {addTask, addProject};
