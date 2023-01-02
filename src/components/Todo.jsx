import React from "react";

const Todo = ({ todo, onChangeComplete, onClickRemove }) => {
  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          name="complete"
          checked={todo.completed}
          className="todo__checkbox"
          onChange={onChangeComplete}
        />
      </div>

      <h4 className="todo__title">{todo.title}</h4>

      <div>
        <button className="todo__button" onClick={onClickRemove}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
