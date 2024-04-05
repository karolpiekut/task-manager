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









