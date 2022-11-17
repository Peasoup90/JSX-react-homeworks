import logo from './logo.svg';
import './App.css';

function App() {
  const animals = ["Dog", "Frog", "Ant", "elephant"];
  return (
<div>
  <h1>Animal map</h1>
  <ul>
    {
      animals.map((animal, idx) => {
        return <li key={idx}>{animal}</li>;
      })
    }
  </ul>
</div>
  );
}

export default App;
