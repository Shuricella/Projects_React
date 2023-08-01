import React, {Component} from "react";
import Table from "./Table.js";
import Form  from "./Form.js";

// загружаем Component как свойство React
class App extends Component{

  constructor(props) {
    super(props);
    
    this.state = {
      characters: [],
    }
  }
    
    
    render() {
      const {characters} = this.state;

      return (
        <div className='container'>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      )
    }

    // удаление записей характеристик
    removeCharacter = (index) => {
      const {characters} = this.state;
  
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index;
        }),
      })
    }

    // обработчик отправлений
    handleSubmit = (character) => {
      // будет обновлять состояние, беря существующий this.state.characters и добавляя новый character параметр
      this.setState ({characters: [...this.state.characters, character]})
    }
  }

  export default App;

  // {name: 'Charlie', job: 'Janitor',},
  // {name: 'Mac', job: 'Bouncer',},
  // {name: 'Dee', job: 'Aspring actress',},
  // {name: 'Dennis', job: 'Bartender',},