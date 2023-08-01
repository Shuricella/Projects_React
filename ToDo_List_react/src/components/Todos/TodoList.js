import Todo from "./Todo.js";
import styles from "./TodoList.module.css";

function TodoList({todos, deleteTodo, toggleTodo}) {
    console.log("todos=",todos);
    return (
        <div className={styles.todoListConteiner}>

            {!todos.length && <h2>Todo list is empty</h2> }

            { todos.map( (todo)=>{ 
                return <Todo 
                            key={todo.id} 
                            todo={todo} 
                            deleteTodo={deleteTodo} 
                            toggleTodo={toggleTodo} 
                        />
            } ) }
            
        </div>
    );
};

export default TodoList;