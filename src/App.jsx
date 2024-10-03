import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newToDos = [...todos, newTodo];
    persistData(newToDos);
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

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localToDos = localStorage.getItem('todos');
    if (!localToDos) {
      return;
    }
    localToDos = JSON.parse(localToDos).todos;
    setTodos(localToDos);
  }, []);

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
