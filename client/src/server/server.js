import axios, {  } from "axios";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

axios.interceptors.response.use(async (response) => {
    await sleep();
    return response
}, (error) => {
    console.log(error)
})

const requests = {
    get: (url) => axios.get(url).then(responseBody), 
    post: (url, body) => axios.post(url, body).then(responseBody), 
    put: (url, body) => axios.put(url, body).then(responseBody), 
    delete: (url) => axios.delete(url).then(responseBody), 
}

const todo = {
    list: () => requests.get('/todo'),
    update: (todo) => requests.put(`/todo/${todo.id}`, todo),
    add: (todo) => requests.post(`/todo`, todo),
    delete: (id) => requests.post(`/todo/${id}`)
}

const server = {
    todo
}

export default server;