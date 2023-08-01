// import logo from './logo.svg';
import './App.css';
import PetInfo from './components/PetInfo.js';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={5} />
      <PetInfo animal="cat" age={3} />
    </div>
  );
}

export default App;
