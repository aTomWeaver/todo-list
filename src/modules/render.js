import css from "../mockup.css";

function renderUI() {
    const ctr = document.getElementById('ctr');
    console.log('Everything up and running!');

    // || HEADER 
    const header = document.createElement('header');
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    const hamburgerIcon = document.createElement('img');
    hamburgerIcon.src = '/src/icons/menu.svg';
    const title = document.createElement('h1');
    title.innerText = 'todo';
    
    // APPEND HEADER
    hamburger.append(hamburgerIcon);
    header.append(hamburger, title);

    // || APP-CTR
    const appCtr = document.createElement('div');
    appCtr.id = 'app-ctr';

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    const sidebarHeading = document.createElement('h2');
    sidebarHeading.innerText = 'projects';
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
    sidebar.append(sidebarHeading, projectsLsCtr);

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



export {renderUI, displayModal};