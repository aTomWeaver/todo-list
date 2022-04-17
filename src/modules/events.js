import { taskFactory, appendTask, removeTask, newProject, removeProject } from "./app";
import { refreshProjectList, renderTaskList, toggleModal, clearModal } from './render';

function addTask() {
    // make sure it doesn't accept null values!
    const title = document.getElementById('task-title').value;
    const notes = document.getElementById('notes').value;
    const priorityDropdown = document.getElementById('priority-level');
    const priority = priorityDropdown.options[priorityDropdown.selectedIndex].value;
    const dueDate = document.getElementById('due-date').value;
    if (title != '') {
        const task = taskFactory(title, notes, priority, dueDate);
        appendTask(task);
        renderTaskList();
        toggleModal();
        clearModal();
    } else alert('Your task must have a name.');
}

function deleteTask(taskIndex) {
    removeTask(taskIndex);
    renderTaskList();
}

function addProject() {
    const name = prompt('new project name: ');
    newProject(name);
    refreshProjectList();
}

function deleteProject(project) {
    removeProject(project);
    refreshProjectList();
}


export {addTask, deleteTask, addProject, deleteProject}