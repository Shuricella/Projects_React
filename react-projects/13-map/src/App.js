// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import Counter from './components/Counter.js';
import Button from './components/Botton.js';

const texts = ["Click me!", "Click me please!", "Hit me!", "Press me!", "Click me again", "Press me!"];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  }
  // здесь onClick - это название свойства
  return (
    <div className="App">
      <Counter count={count} />

      {texts.map((text, index) => {
        return <Button key={index} onClick={incrementCount} text={text} />
      })
      }
    </div>
  );
}

export default App;
