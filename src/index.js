import {renderUI, displayModal} from "./modules/render";
import {addTask} from './modules/events'

renderUI();

// modal display
const newTaskBtn = document.getElementById('new-task-btn');
newTaskBtn.addEventListener('click', () => displayModal());

const modalCtr = document.querySelector('.modal-ctr');
window.addEventListener('click', e => {
    if (e.target == modalCtr) modalCtr.style.display = 'none';
})

const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', addTask)

