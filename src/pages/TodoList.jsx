import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import todoState from "../store/todo";
import Todo from "../components/Todo";

const TodoList = () => {
  useEffect(() => {
    todoState.fetchTodos();
  }, []);

  return (
    <div className="todos">
      <div className="todos__buttonContainer">
        <button className="todos__button" onClick={() => todoState.hideTodo()}>
          {todoState.completedIsHidden ? 'Show all todo' : 'Hide completed todo'}
        </button>
      </div>

      <ul className="todos_list">
        {todoState.todos.length > 0 &&
          todoState.filteredTodos.map((todo) => (
            <li key={todo.id}>
              <Todo
                todo={todo}
                onChangeComplete={() => todoState.isComplete(todo.id)}
                onClickRemove={() => todoState.removeTodo(todo.id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default observer(TodoList);