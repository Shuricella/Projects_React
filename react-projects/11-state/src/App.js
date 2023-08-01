// import logo from './logo.svg';
import './App.css';
import RundomNumber from './components/RundomNumber.js';

function App() {
  return (
    <div className="App">
      <RundomNumber maxNum={1000} />
    </div>
  );
}

export default App;
