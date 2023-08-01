// import logo from './logo.svg';
import './App.css';
import PetInfo from './components/PetInfo.js';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={7} hasPet={true} />
      <PetInfo animal="cat" age={5} hasPet={false} />
      <PetInfo animal="bird" age={2} hasPet={true} />
    </div>
  );
}

export default App;
