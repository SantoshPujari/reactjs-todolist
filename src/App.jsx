import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodos(newTodo) {
    const newToDos = [...todos, newTodo];
    setTodos(newToDos);
  }

  function handleDeleteToDo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });

    setTodos(newTodoList);
  }

  function handleEditToDo(index) {
    const valueTobeEdit = todos[index];
    setTodoValue(valueTobeEdit);
    handleDeleteToDo(index);
  }

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleDeleteToDo={handleDeleteToDo}
        handleEditToDo={handleEditToDo}
        todos={todos}
      />
    </>
  );
}

export default App;
