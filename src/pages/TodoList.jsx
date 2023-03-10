import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import todoState from "../store/todo";
import Todo from "../components/Todo";
import Layout from "../components/Layout";

const TodoList = () => {
  useEffect(() => {
    todoState.fetchTodos();
  }, []);

  return (
    <Layout>
      {todoState.isLoading 
      ? <h2 className="todos__hint">
          Please wait data is loading
        </h2>

      : <div className="todos">
          <div className="todos__buttonContainer">
            <button
              className="todos__button button"
              onClick={() => todoState.hideTodo()}
            >
              {todoState.completedIsHidden
                ? "Show all todo"
                : "Hide completed todo"}
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
      }
    </Layout>
  );
};

export default observer(TodoList);
