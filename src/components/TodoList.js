import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      {todos.map(todo => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          text={todo.text}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
