const button = document.querySelector("#add-task");
//const projects = document.querySelector("#projects");
const planBoard = document.querySelector("#plan-board");
let taskList = [];

console.log(planBoard);

/*
const statusList = {
  not_started: 0,
  in_progress: 1,
  complete: 2,
  cancelled: 3,
  expired: 4
}
*/

class TaskTemplate {
  constructor(title, text, date, status) {
    //this.title = title;
    //this.text = text;
    //this.date = date;
    //this.status = status;
  }
}

function addTask() {
  let addTaskOne = prompt("Please enter task name:", "new");
  let addTaskText = prompt("Please enter task text:", "task text");
  let addTaskDate = prompt("Please enter task due date:", "1900-01-01");
  let addTaskStatus = prompt("Please enter task status", "new");
  let tempTask = new TaskTemplate(
    addTaskOne,
    addTaskText,
    addTaskDate,
    addTaskStatus
  );

  taskList.push(tempTask);

  const element = document.createElement("div");
  element.classList.add("task");
  const testNode = document.createTextNode(`This is number ${taskList[0]}`);
  element.appendChild(testNode);
  planBoard.appendChild(element);
  //const para = document.createElement('p');
  //const node = document.createTextNode(`This is number ${number}`);
  //taskList.push(`This is number ${number}`);
  //para.appendChild(node);
  //tasksDiv.appendChild(para);
  //number++;
  //console.table(taskList);
}

button.addEventListener("click", addTask);

