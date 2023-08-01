const Login = () => {

    const handleFormSubmit = (event) => {
        // console.log("event=", event.target.username.value);
        // console.log("event=", event.target.password.value);
        
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        // преобразуем объект в строку и выведим в модальное окно
        alert(JSON.stringify(userData));

        // preventDefault() отменяет отправку формы, в нашем случае кнопкой buttom
        event.preventDefault();
    };

    return (
        <>
            <h1>Login form!</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input type="text" name="username" />
                </label>

                <label>Password:
                    <input type="password" name="password" />
                </label>

                <button type="submit">Login!</button>
            </form>
        </>
    );
};

export default Login;