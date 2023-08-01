import { useState } from 'react';

import TodoForm from './components/Todos/TodoForm.js';
import TodoList from './components/Todos/TodoList.js';
import './App.css';

// По двойному клику по todo удаляется задача

function App() {
  const [todos, setTodos] = useState( [] );

  const addTodoHandler = (text) => {
    // делаем проверку на отправку пустой формы пр нажатии кнопки
    if(text === '') { return };
    //добавляем существующие todos и к ним добаляем новое значение text
    setTodos( [...todos, text] );
  }

  const deleteTodoHandler = (index) => {
    setTodos( todos.filter( (_, idx) => {return idx !== index} ) );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
