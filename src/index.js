import './styles.css';
import addTask from "./tasks.js";
import component from "./body.js";

document.body.appendChild(component);
const button = document.querySelector("#add-task");
button.addEventListener("click", addTask);