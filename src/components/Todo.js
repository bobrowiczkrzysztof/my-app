import React from 'react';

const Todo = ({ setTodos, todos, text, todo }) => {
  const removeTask = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };
  return (
    <div className="todo-container task">
      <span className="task-text">
        <input type="text" defaultValue={text} />
      </span>

      <div className="buttons">
        <i className="far fa-trash-alt remove" onClick={removeTask}></i>
      </div>
    </div>
  );
};

export default Todo;
