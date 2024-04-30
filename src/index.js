import './styles.css';
import {removeTask, removeProject, amendValues, createATask, displayProjectList} from './app.js';
import appBody from './body.js';
document.body.appendChild(appBody);

const taskButton = document.querySelector('#add-task');
const projectButton = document.querySelector('#add-project');

taskButton.addEventListener('click', createATask);






