import './App.css';
import { useState } from 'react';
import { Router } from '@reach/router';
import Detail from './Views/Detail';
import Main from './Views/Main';
import EditProduct from './Components/EditProduct';

function App() {

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
      <Router>
        <Main loaded={loaded} setLoaded={setLoaded} path="/"/>
        <Detail path="/:id" />
        <EditProduct path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;


