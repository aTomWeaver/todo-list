import todo from '../todo.json';

const local = window.localStorage;
local.setItem('todo', JSON.stringify(todo));

const setProject = projectTitle => {
    todo[projectTitle] = {
        name: projectTitle,
        tasklist: [],
    };
    local.setItem('todo', JSON.stringify(todo));
}

export { setProject }

