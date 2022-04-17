import todoJSON from '../todo.json';

/* 
local.todo is how the object is stored in local storage
todoJSON is the imported object from todo.JSON
userTodo is the object that is modified and used to save over local.todo when updating
*/


/* INIT */ 
const local = window.localStorage;
let userTodo;

const updateLocal = () => {
    local.setItem('todo', JSON.stringify(userTodo))
};

const loadTodoObject = (() => {
    if (!local.todo) {
        userTodo = todoJSON;
    } else {
        userTodo = JSON.parse(local.todo);
    }
    updateLocal();
})();



/* TASKS */
function taskFactory(title, notes, priority, due) {
    return {title, notes, priority, due};
}

const appendTask = task => {
    userTodo.projects[userTodo.selected].tasklist.push(task);
    updateLocal();
}

const removeTask = taskIndex => {
    const project = userTodo.projects[userTodo.selected];
    project.tasklist.splice(taskIndex, 1); 
    // I won't lie, I don't know why adding one to the index above is necessary but it works for some reason
    updateLocal();
}



/* PROJECTS */
const newProject = projectTitle => {
    if (projectTitle) {
        userTodo.projects[projectTitle] = {
            name: projectTitle.trim(),
            tasklist: [],
        };
        updateLocal();
    }
    console.log('local.todo: ' + local.todo +'\n');
    // to create a new project, set 'selected' to current project name and then addTask() like normal
}

const removeProject = projectTitle => {
    // search userTodo object for project title (userTodo.projects[projectTitle])
    // delete userTodo.projects[projectTitle];
    // updateLocal
    delete userTodo.projects[projectTitle];
    updateLocal();
}

const selectProject = projectTitle => {
    userTodo.selected = projectTitle;
    updateLocal();
}



// GETTERS
const getProjectTitles = () => Object.keys(userTodo.projects);
const getProjectTasks = projectTitle => userTodo.projects[projectTitle].tasklist;
const getSelected = () => userTodo.selected;

export { newProject, removeProject, selectProject, taskFactory, appendTask, removeTask, getProjectTitles, getProjectTasks, getSelected }

