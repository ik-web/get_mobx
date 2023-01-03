import { makeAutoObservable, runInAction } from "mobx";

class Todo {
  todos = [];
  completedIsHidden = false;
  isLoading = false;

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

  hideTodo() {
    this.completedIsHidden = !this.completedIsHidden;
  }

  async fetchTodos() {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=8"
      );

      const data = await response.json();

      runInAction(() => {
        this.todos = data;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async removeTodo(id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        runInAction(() => {
          this.todos = this.todos.filter((todo) => todo.id !== id);
        });
      }
    } catch (error) {
      console.error(error);
    }
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
