import css from "../mockup.css";
import { getProjectTitles, getProjectTasks, getSelected } from './app'

function renderUI() {
    const ctr = document.getElementById('ctr');
    console.log('Everything up and running!');

    // || HEADER 
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'todo list';
    // APPEND HEADER
    header.append(title);

    // || APP-CTR
    const appCtr = document.createElement('div');
    appCtr.id = 'app-ctr';

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    const sidebarHeading = document.createElement('h2');
    sidebarHeading.innerText = 'projects';
    const newProjectBtn = document.createElement('button');
    newProjectBtn.innerText = 'new project';
    newProjectBtn.classList.add('btn');
    newProjectBtn.id = 'new-project-btn';
    const projectsLsCtr = document.createElement('ul');
    projectsLsCtr.id = 'projects-ls-ctr';

    const projectCtr = document.createElement('div');
    projectCtr.id = 'project-ctr';
    const contentCtr = document.createElement('div');
    contentCtr.classList.add('content');
    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title')
    projectTitle.innerText = getSelected();
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('btn')
    newTaskBtn.id = 'new-task-btn';
    newTaskBtn.innerText = 'add';
    const todoList = document.createElement('div');
    todoList.classList.add('tasklist-ctr');
    // APPEND APP-CTR
    sidebar.append(sidebarHeading, newProjectBtn, projectsLsCtr);
    contentCtr.append(projectTitle, newTaskBtn, todoList);
    projectCtr.append(contentCtr);
    appCtr.append(sidebar, projectCtr);
    // APPEND CTR
    ctr.append(header, appCtr);
}

function renderTitle() {
    const projectTitle = document.querySelector('.project-title');
    projectTitle.innerText = getSelected();
}

function toggleModal() {
    const modal = document.querySelector('.modal-ctr');
    if (modal.style.display != 'flex') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}

function clearModal() {
    document.getElementById('task-title').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('priority-level').selectedIndex = [1];
    document.getElementById('due-date').value = '';
}

function renderProjectItem(projectTitle) {
    const li = document.createElement('li');
    li.innerText = projectTitle;
    li.classList.add('project')
    return li;
}

function refreshProjectList() {
    const projectsLsCtr = document.querySelector('#projects-ls-ctr');
    projectsLsCtr.innerHTML = '';
    const projectList = getProjectTitles();
    for (let i = 0; i < projectList.length; i++) {
        const item = renderProjectItem(projectList[i]);
        projectsLsCtr.appendChild(item);
    }
    /* get the todo object and create an array of just project names
        for the length of the array, renderProjectItem on each, appending
        each item to projects-ls-ctr
    */
}

function renderTaskCard(task, index) {
    const tasklistCtr = document.querySelector('.tasklist-ctr');
    const cardCtr = document.createElement('div');
    cardCtr.classList.add('card-ctr');
        const topbar = document.createElement('div');
        topbar.classList.add('topbar');
            const title = document.createElement('p');
            title.classList.add('title');
            title.dataset.index = index;

            title.innerText = task.title;
            const priority = document.createElement('p');
            if (task.priority === 'high') {
                cardCtr.classList.add('priority-high');
            } else if (task.priority === 'medium') {
                cardCtr.classList.add('priority-medium');
            } else if (task.priority === 'low') {
                cardCtr.classList.add('priority-low');
            }
            priority.innerText = task.priority;
            topbar.append(title, priority);
        const dueDate = document.createElement('div');
        dueDate.classList.add('due');
        dueDate.innerText = task.due;
        const notes = document.createElement('p');
        notes.classList.add('notes');
        notes.innerText = task.notes;
        cardCtr.append(topbar, dueDate, notes);
    tasklistCtr.append(cardCtr);
}

function renderTaskList() {
    const tasklistCtr = document.querySelector('.tasklist-ctr');
    tasklistCtr.innerHTML = '';
    const tasklist = getProjectTasks(getSelected());
    for (let i = 0; i < tasklist.length; i++) {
        renderTaskCard(tasklist[i], i);
    }
}



export { renderUI, renderTitle, toggleModal, clearModal, refreshProjectList, renderTaskList };