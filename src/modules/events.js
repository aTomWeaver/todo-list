import { taskFactory, appendTask } from "./app";

function addTask() {
    // break this part up
    const title = document.getElementById('task-title').value;
    const notes = document.getElementById('notes').value;
    const priorityDropdown = document.getElementById('priority-level');
    const priority = priorityDropdown.options[priorityDropdown.selectedIndex].value;
    // DUE DATE CURRENTLY ONLY RETURNS TEXT ; FIX LATER
    const dueDate = document.getElementById('due-date').value;
    const task = taskFactory(title, notes, priority, dueDate);
    appendTask(task);
}

export {addTask}