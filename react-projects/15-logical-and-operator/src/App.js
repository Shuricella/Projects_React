// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import Counter from './components/Counter.js';
import Button from './components/Botton.js';
import ResetButton from './components/ResetButton.js';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  }
  
  // здесь onClick - это название свойства
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />

      <ResetButton count={count} setCount={setCount} />
    </div>
  );
}

export default App;
