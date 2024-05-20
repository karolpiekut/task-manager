function appBody() {
    const theApp = document.createElement('div');
    theApp.setAttribute('id','theApp');

    //--------------------------------------------------------------------------

    const sidebar = document.createElement('div');
    sidebar.setAttribute('id','sidebar');
    theApp.appendChild(sidebar);

    //--------------------------------------------------------------------------

    const projectsDiv = document.createElement('div');
    projectsDiv.setAttribute('id', 'projects');
    sidebar.appendChild(projectsDiv);

    const projectsHeader = document.createElement('h2');
    projectsHeader.innerText = "projects";
    projectsDiv.appendChild(projectsHeader);

    const projectsList  = document.createElement('div');
    projectsList.setAttribute('id','project-list');
    projectsDiv.appendChild(projectsList);

    const listItems = document.createElement("ul");
    listItems.setAttribute('id', 'ulProjectList');
    projectsList.appendChild(listItems);
    //--------------------------------------------------------------------------

    const buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('id', 'buttonsDiv');
    sidebar.appendChild(buttonsDiv);

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id', 'add-task');
    addTaskButton.innerText = '+';
    buttonsDiv.appendChild(addTaskButton);

    //--------------------------------------------------------------------------

    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------

    const tasksDiv = document.createElement('div');
    tasksDiv.setAttribute('id', 'all-tasks-board');
    theApp.appendChild(tasksDiv);

    //--------------------------------------------------------------------------

    const planColumn = document.createElement('div')
    planColumn.setAttribute('id', 'plan');
    planColumn.setAttribute('class', 'work-pane');
    tasksDiv.appendChild(planColumn);

    const planHeader = document.createElement('h2');
    planHeader.innerText = 'plan';
    planColumn.appendChild(planHeader);

    const planBoard = document.createElement('div');
    planBoard.setAttribute('class', 'board');
    planBoard.setAttribute('id', 'plan-board');
    planColumn.appendChild(planBoard);

    //--------------------------------------------------------------------------

    const todayColumn = document.createElement('div')
    todayColumn.setAttribute('id', 'today');
    todayColumn.setAttribute('class', 'work-pane');
    tasksDiv.appendChild(todayColumn);

    const todayHeader = document.createElement('h2');
    todayHeader.innerText = 'today';
    todayColumn.appendChild(todayHeader);

    const todayBoard = document.createElement('div');
    todayBoard.setAttribute('class', 'board');
    todayBoard.setAttribute('id', 'today-board' );
    todayColumn.appendChild(todayBoard);

    //--------------------------------------------------------------------------

    const futureColumn = document.createElement('div')
    futureColumn.setAttribute('id', 'future');
    futureColumn.setAttribute('class', 'work-pane');
    tasksDiv.appendChild(futureColumn);

    const futureHeader = document.createElement('h2');
    futureHeader.innerText = 'future';
    futureColumn.appendChild(futureHeader);
    
    const futureBoard = document.createElement('div');
    futureBoard.setAttribute('class', 'board');
    futureBoard.setAttribute('id', 'future-board');
    futureColumn.appendChild(futureBoard)

    //--------------------------------------------------------------------------

    const overdueColumn = document.createElement('div')
    overdueColumn.setAttribute('id', 'overdue');
    overdueColumn.setAttribute('class', 'work-pane');
    tasksDiv.appendChild(overdueColumn);

    const overdueHeader = document.createElement('h2');
    overdueHeader.innerText = 'overdue';
    overdueColumn.appendChild(overdueHeader);

    const overdueBoard = document.createElement('div');
    overdueBoard.setAttribute('class', 'board')
    overdueBoard.setAttribute('id', 'overdue-board');
    overdueColumn.appendChild(overdueBoard);

    //--------------------------------------------------------------------------

    const doneColumn = document.createElement('div')
    doneColumn.setAttribute('id', 'done');
    doneColumn.setAttribute('class', 'work-pane');
    tasksDiv.appendChild(doneColumn);

    const doneHeader = document.createElement('h2');
    doneHeader.innerText = 'done';
    doneColumn.appendChild(doneHeader);

    const doneBoard = document.createElement('div');
    doneBoard.setAttribute('class', 'board');
    doneBoard.setAttribute('id', 'done-board');
    doneColumn.appendChild(doneBoard);

    //--------------------------------------------------------------------------

    return theApp;
}


export default appBody();
