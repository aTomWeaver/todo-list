import todo from '../todo.json';

const local = window.localStorage;
local.setItem('todo', JSON.stringify(todo));

const setProject = projectTitle => {
    // todo[projectTitle] = {
    //     name: projectTitle,
    //     tasklist: [],
    // };
    // local.setItem('todo', JSON.stringify(todo));
}

function taskFactory(title, notes, priority, due) {
    return {title, notes, priority, due};
}

function appendTask(task) {
    todo[todo.selected].tasklist.push(task);
    local.setItem('todo', JSON.stringify(todo));
}




export { setProject, taskFactory, appendTask }
