import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Hello from './Components/Hello';
import Display from './Components/Display';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
            <Home path="/home"/>
            <Display path="/:word"/>
            <Display path="/:word/:fontColor/:backgroundColor"/>
        </Router>
    </div>
  );
}

export default App;
