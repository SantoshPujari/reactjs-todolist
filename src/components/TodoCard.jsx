import React from 'react';

const TodoCard = (props) => {
  const { children, index, handleDeleteToDo, handleEditToDo } = props;
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button
          onClick={() => {
            handleEditToDo(index);
          }}
        >
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button
          onClick={() => {
            handleDeleteToDo(index);
          }}
        >
          <i className='fa-regular fa-trash-can'></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
