import './App.css';
import MyComponent from './components/MyComponents.js';
import OtherComponent from './components/OtherComponent.js';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
      <MyComponent />
    </div>
  );
}

export default App;
