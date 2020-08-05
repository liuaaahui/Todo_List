import axios from 'axios'
const URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos';

export const postTodo = (todo)=>{
    return axios.post(URL,todo)
}

export const getTodo = ()=>{
    return axios.get(URL)
}

export const delTodo = (id)=>{
    return axios.delete(URL + '/' + id)
}

export const updateTodo = (todo)=>{
    return axios.put(URL + '/' + todo.id,todo)
}