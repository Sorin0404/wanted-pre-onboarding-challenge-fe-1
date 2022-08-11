export const BASE_URL = 'http://localhost:8080/';

export const API = {
  login: `${BASE_URL}users/login`,
  signUp: `${BASE_URL}users/create`,
  getTodos: `${BASE_URL}todos`,
  getTodoById: `${BASE_URL}todos/:id`,
  createTodo: `${BASE_URL}todos`,
  updateTodo: `${BASE_URL}todos`,
  deleteTodo: `${BASE_URL}todos`,
};
