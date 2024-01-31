let taskList = [];

const statusList = [
  "not_started",
  "in_progress",
  "complete",
  "cancelled",
  "expired",
];

class TaskTemplate {
  constructor(title, text, date, status) {
    this.title = title;
    this.text = text;
    this.date = date;
    this.status = status;
  }
}
function addTask(addTaskOne, addTaskText, addTaskDate, addTaskStatus) {
  taskList.push(
    new TaskTemplate(addTaskOne, addTaskText, addTaskDate, addTaskStatus)
  );
}

addTask("test", "test text", "2024-01-31", statusList[0]);
addTask("test2", "test text2", "2024-03-31", statusList[1]);

console.log(taskList);
