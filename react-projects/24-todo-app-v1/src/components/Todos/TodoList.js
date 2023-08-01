import Todo from "./Todo.js";
import styles from "./TodoList.module.css";

function TodoList({todos, deleteTodo}) {
    return (
        <div className={styles.todoListConteiner}>
            {!todos.length && <h2>Todo list is empty</h2> }

            { todos.map( (todo, index)=>{ 
                return <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
            } ) }
        </div>
    );
};

export default TodoList;