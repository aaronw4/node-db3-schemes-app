import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import AddScheme from './Components/addScheme';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/addScheme'>
        <AddScheme/>
      </Route>
    </div>
  );
}

export default App;
