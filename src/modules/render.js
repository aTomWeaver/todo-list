import css from "../mockup.css";
import { getProjectList } from './app'

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
    projectTitle.innerText = 'today';
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('btn')
    newTaskBtn.id = 'new-task-btn';
    newTaskBtn.innerText = 'add';
    const todoList = document.createElement('ul');
    todoList.classList.add('todo-list');
    // APPEND APP-CTR
    sidebar.append(sidebarHeading, newProjectBtn, projectsLsCtr);
    contentCtr.append(projectTitle, newTaskBtn, todoList);
    projectCtr.append(contentCtr);
    appCtr.append(sidebar, projectCtr);
    // APPEND CTR
    ctr.append(header, appCtr);
}

function displayModal() {
    const modal = document.querySelector('.modal-ctr');
    modal.style.display = 'flex';
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
    const projectList = getProjectList();
    for (let i = 0; i < projectList.length; i++) {
        const item = renderProjectItem(projectList[i]);
        projectsLsCtr.appendChild(item);
    }
    /* get the todo object and create an array of just project names
        for the length of the array, renderProjectItem on each, appending
        each item to projects-ls-ctr
    */
}

function renderTaskList() {
    // get tasklist for current project
    /* for each task (element of tasklist) 
        fun the renderCard function, passing the task object
        append all of this to the tasklist area*/
}



export { renderUI, displayModal, refreshProjectList };