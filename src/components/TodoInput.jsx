import React, { useState } from 'react';

const TodoInput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  // const [todoValue, setTodoValue] = useState('');

  return (
    <header>
      <input
        value={todoValue}
        placeholder='Enter todo...'
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue('');
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
