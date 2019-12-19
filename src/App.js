import React from 'react';
import FishingSpotsAPI from './components/FishingSpotsAPI';
import {Link, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'><button>Home</button></Link>
        <Link to='/fishing-spots'><button>Fishing Spots</button></Link>
      </nav>
      <Route exact path='/'/>
      <Route path='/fishing-spots' component={FishingSpotsAPI}/>
    </div>
  );
}

export default App;
