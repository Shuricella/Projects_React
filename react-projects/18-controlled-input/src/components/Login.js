import {useState} from "react";

const Login = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // dat будет содержать объект {username:"", password:""}
    // через метод setData можем изменять один из свойств объекта
    const [data, setData] = useState( {username:"", password:""} );

    const handleFormSubmit = (event) => {
                
        const userData = {
            username: data.username,
            password: data.password,
        };

        // преобразуем объект в строку и выведим в модальное окно
        alert(JSON.stringify(userData));

        // preventDefault() отменяет отправку формы, в нашем случае кнопкой buttom
        event.preventDefault();
    };

    const handliInputChange = (event, name) => {
        setData( {...data, [name]:event.target.value} );
    }

    return (
        <>
            <h1>Login form!</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input 
                        type="text" 
                        value={data.username} 
                    onChange={ (event)=>{ handliInputChange(event, "username") } } 
                    />
                </label>

                <label>Password:
                    <input 
                    type="password" 
                    value={data.password}
                    onChange={ (event)=>{ handliInputChange(event, "password") } }  
                    />
                </label>

                <button type="submit">Login!</button>
            </form>
        </>
    );
};

export default Login;