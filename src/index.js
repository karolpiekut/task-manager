import './styles.css';
import {createATaskDiv, Task, removeTask, removeProject, amendValues, createATask} from './app.js';
import appBody from './body.js';
document.body.appendChild(appBody);

const taskButton = document.querySelector('#add-task');
const projectButton = document.querySelector('#add-project');

taskButton.addEventListener('click', createATask);
//projectButton.addEventListener('click', addProject);



// createATask("task-manager", "name", "random text", "2024-04-10", 'new');
// createATask("task-manager", "name2", "random text2", "2024-04-11", 'done');
// createATask("food menu", "project scope", "create a project scope", "2024-04-10", 'overdue');
// createATask("food menu", "create recipes", "get food recipes from granny", "2024-04-20", 'new');
// createATask("odin-project", "name3", "test tekstu", "2024-04-14", 'overdue');
// createATask("odin-project", "name4", "test tekstu", "2024-04-14", 'overdue');
// createATask("task-manager", "name3", "test tekstu", "2024-04-14", 'overdue');
// createATask("task-manager", "name5", "random tekst", "2024-04-19", 'done');
// createATask("odin-project", "name8", "ogarnij", "2024-04-14", 'overdue');