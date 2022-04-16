import {renderUI, displayModal, refreshProjectList} from "./modules/render";
import {addTask, addProject} from './modules/events'

renderUI();
refreshProjectList();
// modal display
const newTaskBtn = document.getElementById('new-task-btn');
newTaskBtn.addEventListener('click', () => displayModal());

const modalCtr = document.querySelector('.modal-ctr');
window.addEventListener('click', e => {
    if (e.target == modalCtr) modalCtr.style.display = 'none';
})

const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', addProject);

const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', addTask)

