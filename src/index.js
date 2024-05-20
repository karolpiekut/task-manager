import './styles.css';
import {removeTask, removeProject, amendValues, createATask, deleteButton} from './app.js';
import appBody from './body.js';
document.body.appendChild(appBody);

const taskButton = document.querySelector('#add-task');
const tasksDeleteButton = document.querySelectorAll('.deleteTaskBtn');

console.log(tasksDeleteButton);

//dynamic query selector!!!!

tasksDeleteButton.forEach(button => {
    button.addEventListener('click', deleteButton)
})

taskButton.addEventListener('click', createATask);






