import Wrapper from './components/Wrapper.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the vrapper</h2>
        <button>Click me!</button>
      </Wrapper>

      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type='text' placeholder='Input value' />
      </Wrapper>
    </div>
  );
};

export default App;
