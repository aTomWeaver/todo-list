import { taskFactory, appendTask, newProject } from "./app";
import { refreshProjectList } from './render';

function addTask() {
    // make sure it doesn't accept null values!
    const title = document.getElementById('task-title').value;
    const notes = document.getElementById('notes').value;
    const priorityDropdown = document.getElementById('priority-level');
    const priority = priorityDropdown.options[priorityDropdown.selectedIndex].value;
    const dueDate = document.getElementById('due-date').value;
    const task = taskFactory(title, notes, priority, dueDate);
    appendTask(task);
}

function addProject() {
    const name = prompt('new project name: ');
    newProject(name);
    refreshProjectList();
}

export {addTask, addProject}