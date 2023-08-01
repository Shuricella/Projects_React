import React, {Component} from 'react'

class App extends Component{
    state = {
                data: [],
            };

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState(
                    {data: result},
                )

                console.log(result)
            });
            

        // способ через async-await. Перед названием метода поставить await
        // const response = await fetch(url);
        // const result = await response.json();
        // this.setState(
        //     {data: result},
        // )
    }

    render() {
        const {data} = this.state;

        const result = data.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        })

        return (
            <ul>{result}</ul>
        )
    }
}

export default App;