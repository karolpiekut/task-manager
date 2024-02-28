function component() {
    const element = document.createElement('div');
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = `<div id="projects">
    <div id="projects-list">
        <h2>projects</h2>
        <div id="each-project"></div>
    </div>
    <div id="plan" class="work-pane">
        <h2>plan</h2>
        <div class="board" id="plan-board"></div>
    </div>
    <div id="today" class="work-pane">
        <h2>today</h2>
        <div class="board"></div>
    </div>
    <div id="future" class="work-pane">
        <h2>future</h2>
        <div class="board"></div>
    </div>
    <div id="overdue" class="work-pane">
        <h2>overdue</h2>
        <div class="board"></div>
    </div>
    <div id="done" class="work-pane">
        <h2>done</h2>
        <div class="board"></div>
    </div>
</div>
<button id="add-task">add task</button>`
    return element;
}

export default component();