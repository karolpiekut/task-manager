import './styles.css';
import {addTask, addProject} from './app.js';
import appBody from './body.js';

document.body.appendChild(appBody);

const taskButton = document.querySelector('#add-task');
const projectButton = document.querySelector('#add-project');

taskButton.addEventListener('click', addTask);
projectButton.addEventListener('click', addProject);