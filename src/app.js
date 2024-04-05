let tasks = [];
let taskIndex = 0;

//create tasks
function Task(projectName, taskName, text, date, status) {
    this.index = taskIndex;
    this.projectName = projectName;
    this.taskTitle = taskName;
    this.text = text;
    this.date = date;
    this.status = status;
    taskIndex++;
}
//delete tasks




//amend task



tasks.push(new Task("task-manager", "name", "random text", "2024-04-10", 'new'));
tasks.push(new Task("task-manager", "name2", "random text2", "2024-04-11", 'done'));
tasks.push(new Task("food menu", "project scope", "create a project scope", "2024-04-10", 'overdue'));
tasks.push(new Task("food menu", "create recipes", "get food recipes from granny", "2024-04-20", 'new'));
console.table(tasks);


//console.table(projectOne);


















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
// function addTask() {
//     const tasksDiv = document.querySelector("#plan-board");
//     let addTaskOne = prompt("Please enter task name:", "new");
//     let addTaskText = prompt("Please enter task text:", "task text");
//     let addTaskDate = prompt("Please enter task due date:", "1900-01-01");
//     let addTaskStatus = prompt("Please enter task status", "new");
//     let tempTask = new TaskTemplate(
//         addTaskOne,
//         addTaskText,
//         addTaskDate,
//         addTaskStatus
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
//
//
//
// export {addTask, addProject};