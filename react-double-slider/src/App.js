import logo from './logo.svg';
// import './App.css';

// Адресс Проекта GitHub
// https://github.com/developergovindgupta/multi-range-slider-react/blob/main/README.md

// Ссылка на сайт с разными слайдерами
// https://reactscript.com/best-range-slider/

import { useState } from 'react';
import MultiRangeSlider from './components/MultiRangeSlider';


function App() {
  const [minValue, set_minValue] = useState(0);
const [maxValue, set_maxValue] = useState(20);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);

  // console.log("minValue=", minValue, "maxValue=", maxValue);
};
console.log("minValue=", minValue, "maxValue=", maxValue);
  return (
    <div className="App">
      <header className="App-header">
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          ruler={false}
          label={true}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
          baseClassName={'multi-range-slider'}
          nameItem={'UAN'}
          />

        <h1>Hello Pcela!</h1>
      </header>
    </div>
  );
}

export default App;
