import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    console.log(todos);
    setInputText('');
  };
  return (
    <form onSubmit={submitTodoHandler}>
      <div id="addtask">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Please add your todos."
        />
        <button id="push">+</button>
      </div>
    </form>
  );
};

export default Form;
