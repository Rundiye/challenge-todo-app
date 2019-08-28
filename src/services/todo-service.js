import axios from 'axios';

class TodoService {
  constructor() {
    this.todoRoute = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true,
    })
  }
  getAllTodos() {
    return this.todoRoute.get('/todos')
    .then(response => response)
  }

  getTodo(id) {
    return this.todoRoute.get(`/todos/${id}`)
    .then(response => response)
  }

  createTodo(newTodo) {
    return this.todoRoute.post('/todos', newTodo)
    .then(response => response)
  }

  updateTodo(id, updatedTodo) {
    return this.todoRoute.put(`/todos/${id}`, updatedTodo)
    .then(response => response)
  }

  deleteTodo(id) {
    return this.todoRoute.delete(`/todos/${id}`)
    .then(response => response)
  }

}

const todoService = new TodoService();
export default todoService;