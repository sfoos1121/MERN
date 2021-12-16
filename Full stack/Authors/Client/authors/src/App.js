import './App.css';
import { useState } from 'react';
import { Router } from '@reach/router';
import Main from './Views/Main';
import New from './Views/New';
import Edit from './Views/Edit';

function App() {

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
      <Router>
        <Main loaded={loaded} setLoaded={setLoaded} path="/"/>
        <New loaded={loaded} setLoaded={setLoaded}path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;