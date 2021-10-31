import './App.css';
import Person from './components/Person';


function App() {
  return (
    <div className="App">
      <Person name={"Doe, Jane"} age={"45"} hair={"Black"} />
      <Person name={"Smith, John"} age={"88"} hair={"Brown"} />
      <Person name={"Fillmore, Millard"} age={"45"} hair={"Brown"} />
      <Person name={"Smith, Marla"} age={"62"} hair={"Brown"} />
    </div>
  );
}

export default App;
