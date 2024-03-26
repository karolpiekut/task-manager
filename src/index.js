import './styles.css';
import addTask from "./tasks.js";
import appBody from "./body.js";

document.body.appendChild(appBody);
const button = document.querySelector("#add-task");
button.addEventListener("click", addTask);