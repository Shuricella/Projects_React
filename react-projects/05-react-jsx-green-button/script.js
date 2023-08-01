const App = ( {initalButtonText, initalClassesList}=props ) => {
    const [buttonText, setButtonText] = React.useState(initalButtonText);
    const [classesList, setClassesList] = React.useState(initalClassesList);

    const onButtonClick = () =>{ 
        setButtonText("Hello Anyta!");
        setClassesList("green-btn");
    };

    return (
        <div className="app">
            <button className={ classesList } onClick={ onButtonClick }>{ buttonText }</button>
        </div>
    )
}

const container = document.getElementById("app");
// создаем корневой компонент
const root = ReactDOM.createRoot(container);
// рендерим элемент в корневой компонент
root.render(<App initalButtonText="Click me please boy" initalClassesList="" />);