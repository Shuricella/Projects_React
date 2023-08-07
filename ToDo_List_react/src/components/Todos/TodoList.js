import Todo from "./Todo.js";
import styles from "./TodoList.module.css";

function TodoList({todos, deleteTodo, toggleTodo}) {
    
    const getTemplateEmpty = () => {
        return (
            <>
                <h2>Todo list is empty</h2>
                <h3>Make your day rich!!!</h3>
            </>
        );
    };

    return (
        <div className={styles.todoListConteiner}>

            {!todos.length && getTemplateEmpty() }

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