import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, handleDeleteToDo, handleEditToDo }) => {
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            index={todoIndex}
            handleDeleteToDo={handleDeleteToDo}
            handleEditToDo={handleEditToDo}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
