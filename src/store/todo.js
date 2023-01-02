import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];
  completedIsHidden = false;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  isComplete(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  hideTodo() {
    this.completedIsHidden = !this.completedIsHidden;
  }

  async fetchTodos() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=6"
    );
    const data = await response.json();
    this.todos = data;
  }

  get filteredTodos() {
    if (this.completedIsHidden) {
      return this.todos.filter((todo) => todo.completed === false);
    } else {
      return this.todos;
    }
  }
}

export default new Todo();
