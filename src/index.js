import {
    renderUI,
    renderTitle,
    toggleModal,
    refreshProjectList,
    renderTaskList,
} from './modules/render';
import { addTask, deleteTask, addProject } from './modules/events';
import { selectProject } from './modules/app';

renderUI();
refreshProjectList();
bindProjectEvents();
renderTaskList();
bindTaskEvents();

// modal display
const newTaskBtn = document.getElementById('new-task-btn');
newTaskBtn.addEventListener('click', () => toggleModal());

const modalCtr = document.querySelector('.modal-ctr');
window.addEventListener('click', (e) => {
    if (e.target == modalCtr) modalCtr.style.display = 'none';
});

function bindProjectEvents() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        project.addEventListener('click', (e) => {
            selectProject(e.target.innerText);
            renderTitle();
            renderTaskList();
            bindTaskEvents();
        });
    });
}

function bindTaskEvents() {
    const taskTitle = document.querySelectorAll('.title');
    taskTitle.forEach((title) => {
        title.addEventListener('click', (e) => {
            deleteTask(e.target.dataset.index);
            bindTaskEvents();
        });
    });
}

const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () => {
    addProject();
    bindProjectEvents();
});

const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', () => {
    addTask();
    bindTaskEvents();
});
