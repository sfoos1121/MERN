import './App.css';
import React from 'react';
import { Router } from '@reach/router'
import Detail from './Views/Detail';
import Main from './Views/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;


