import {renderUI, displayModal} from "./modules/render";
import {setProject} from "./modules/events";

renderUI();

// modal display
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', () => displayModal());
const modalCtr = document.querySelector('.modal-ctr');
window.addEventListener('click', e => {
    if (e.target == modalCtr) modalCtr.style.display = 'none';
})


