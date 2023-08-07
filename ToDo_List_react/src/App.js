import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/Todos/TodoForm.js';
import TodoList from './components/Todos/TodoList.js';
import TodosActions from './components/Todos/TodosActions.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState( [] );

  const addTodoHandler = (text) => {
    // проверка на отправку пустой формы при нажатии кнопки
    if(text === '') { return };

    // uuidv4() генерирует случайный код для реализации id
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    
    //переонс существующих todos и к ним добаляем новое значение text
    setTodos( [...todos, newTodo] );
  }

  const deleteTodoHandler = (id) => {
    setTodos( todos.filter( (todo) => {return todo.id !== id} ) );
  };

  // функция выделения завершенной задачи (выделяется серым цветом весь блок)
  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => {
      return ( todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo} );
    } ));
  }

  // функция стирает весь список todos
  const resetTodosHandler = () => {
    setTodos([]);
  }

  // функция удаления завершенных дел
  const deleteCompleteTodosHandler = () => {
    setTodos( todos.filter( (todo) => {return todo.isCompleted === false} ) );
  }

  // счетчик завершенных задач todos
  const completedTodosCount = todos.filter( (todo) => todo.isCompleted ).length;

  return (
    <div className="wrapper">
      
        <div className="left-block">
          <TodoForm addTodo={addTodoHandler} />

          {!!todos.length && <TodosActions
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompleteTodos={deleteCompleteTodosHandler}
          />}
          
          <TodoList 
            todos={todos} 
            deleteTodo={deleteTodoHandler} 
            toggleTodo={toggleTodoHandler} 
          />

          {completedTodosCount > 0 
            && <h2>{`You have completed ${completedTodosCount} ${
              completedTodosCount > 1 ? "todos" : "todo"
            }`}</h2> 
          }
        </div>

        <div className="right-block">
          <h1>TO DO LIST</h1> 
          <h2>using REACT</h2>
        </div>
          
    </div>
  );
}

export default App;
