import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

import styles from './TodosActions.module.css'
import Button from '../UI/Button.js';

function TodosActions({ resetTodos, deleteCompleteTodos, completedTodosExist }) {
    return (
        <div className={styles.todosActionsConteiner}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>

            <Button title="Clear Completed Todos" onClick={deleteCompleteTodos} disabled={!completedTodosExist} >
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions;