import todoJSON from "../todo.json";

/* 
local.todo is how the object is stored in local storage
todoJSON is the imported object from todo.JSON
userTodo is the object that is modified and used to save over local.todo when updating
*/

/* INIT */
const local = window.localStorage;
let userTodo;

const updateLocal = () => {
    local.setItem("todo", JSON.stringify(userTodo));
};

const loadTodoObject = () => {
    if (!local.todo) {
        userTodo = todoJSON;
    } else {
        userTodo = JSON.parse(local.todo);
    }
    updateLocal();
};
loadTodoObject();

/* TASKS */
function taskFactory(title, notes, priority, due) {
    return { title, notes, priority, due };
}

const appendTask = (task) => {
    userTodo.projects[userTodo.selected].tasklist.push(task);
    updateLocal();
};

const removeTask = (taskIndex) => {
    const project = userTodo.projects[userTodo.selected];
    project.tasklist.splice(taskIndex, 1);
    updateLocal();
};

/* PROJECTS */
const newProject = (projectTitle) => {
    if (projectTitle) {
        userTodo.projects[projectTitle] = {
            name: projectTitle.trim(),
            tasklist: [],
        };
        updateLocal();
    }
};

const removeProject = (projectTitle) => {
    delete userTodo.projects[projectTitle];
    updateLocal();
};

const selectProject = (projectTitle) => {
    userTodo.selected = projectTitle;
    updateLocal();
};

// GETTERS
const getProjectTitles = () => Object.keys(userTodo.projects);
const getProjectTasks = (projectTitle) =>
    userTodo.projects[projectTitle].tasklist;
const getSelected = () => userTodo.selected;

export {
    newProject,
    removeProject,
    selectProject,
    taskFactory,
    appendTask,
    removeTask,
    getProjectTitles,
    getProjectTasks,
    getSelected,
};


