import './styles.css';
import {createATaskDiv, Task, removeTask, removeProject, amendValues} from './app.js';
import appBody from './body.js';

document.body.appendChild(appBody);

const taskButton = document.querySelector('#add-task');
const projectButton = document.querySelector('#add-project');

//taskButton.addEventListener('click', addTask);
//projectButton.addEventListener('click', addProject);