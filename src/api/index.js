const baseUrl = 'https://api4test.herokuapp.com/api/v1/todos';

export function fetchTodoList(callback) {
    return axios.get(baseUrl)
                .then(response => callback(response))
                .catch(error => error);
}

export function createTodo(param, callback) {
    return axios.post(baseUrl, {name: param.name, completed: param.completed})
                .then(response => callback(response))
                .catch(error => error);
}

export function updateTodo(param, callback) {
    return axios.put(`${baseUrl}/${param.id}`, {completed: param.completed})
                .then(response => callback(response))
                .catch(error => error);
}

export function deleteTodo(id, callback) {
    return axios.delete(`${baseUrl}/${id}`)
                .then(response => callback(response))
                .catch(error => error);
}

export default {
    fetchTodoList,
    createTodo,
    updateTodo,
    deleteTodo
}
