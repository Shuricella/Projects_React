import { useState } from "react";

import Button from "../UI/Button.js";
import styles from "./TodoForm.module.css"

function TodoForm({addTodo}) {
    const [text, setText] = useState('');

    // функция отправки текста при нажатии кнопки Submit
    const onSubmitHandler = (event) => {
        // делаем что-бы при нажатии на кнопку Submit на переходило на новую страницуa
        event.preventDefault();

        addTodo(text);

        // после отправки формы обнуляем поле ввода
        setText('');
    };
            
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input 
                    placeholder="Enter new todo" 
                    value={text} 
                    onChange={ (event) => {setText(event.target.value)} }
                />

                <Button 
                    type="submit"
                    title="Submit" 
                    onClick={onSubmitHandler}>

                    Submit

                </Button>
            </form>
        </div>
        
    );
};

export default TodoForm;