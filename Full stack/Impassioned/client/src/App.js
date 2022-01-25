import './App.css';
import { Router } from '@reach/router';
import Main from './Views/Main';
import New from './Views/New';
import Details from './Views/Details';
import LogReg from './Views/LogReg';
import Registration from './Views/Registration';
import Edit from './Views/Edit';
import { useState } from 'react';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  
  return (
    <div className="App">          
      <Router>
        <LogReg path="/" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Registration path="/registration" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Main path="/home" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />   
        <New path="/new" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Edit path="/edit/:id" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Details path="/:id" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
