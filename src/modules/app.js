import todoJSON from '../todo.json';

const local = window.localStorage;
let userTodo


/* 
local.todo is how the object is stored in local storage
todoJSON is the imported object from todo.JSON
userTodo is the object that is modified and used to save over local.todo when updating
*/

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


function taskFactory(title, notes, priority, due) {
    return {title, notes, priority, due};
}


const newProject = projectTitle => {
    userTodo.projects[projectTitle] = {
        tasklist: [],
    };
    updateLocal();
    console.log('local.todo: ' + local.todo +'\n');
    // to create a new project, set 'selected' to current project name and then addTask() like normal
}

const removeProject = projectTitle => {
    
}

const getProjectList = () => {
    return Object.keys(userTodo.projects);
}



const appendTask = task => {
    userTodo.projects[userTodo.selected].tasklist.push(task);
    updateLocal();
}

export { newProject, taskFactory, appendTask, getProjectList }

