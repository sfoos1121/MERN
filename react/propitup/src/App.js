import './App.css';
import Person from './components/Person';


function App() {
  return (
    <div className="App">
      <Person name={"Doe, Jane"} lastName={"Doe"} firstName={"Jane"} age={45} hair={"Black"} />
      <Person name={"Smith, John"}lastName={"Smith"} firstName={"John"} age={88} hair={"Brown"} />
      <Person name={"Fillmore, Millard"} lastName={"Fillmore"} firstName={"Millard"} age={45} hair={"Brown"} />
      <Person name={"Smith, Marla"} lastName={"Smith"} firstName={"Marla"} age={62} hair={"Brown"} />
    </div>
  );
}

export default App;
