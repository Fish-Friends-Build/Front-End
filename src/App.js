import React, { useState } from 'react';
import {
  // Link,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

// import { Store } from './components/Store';
import { FishingSpotsContext } from './contexts/FishingSpotsContext';
import { JournalPostContext } from './contexts/JournalPostContext';

import Navigation from './components/Navigation';
//////////////////////////////////////////////////////
import Login from './utils/Login';
import SignUp from './utils/SignUp';
import PrivateRoute from './components/PrivateRoute';
import FishingSpotsAPI from './components/FishingSpotsAPI';
import UserJournalEntries from './components/UserJournalEntries';
import JournalPost from './components/JournalPost';

function App() {
  const [FishingSpotsData, setFishingSpotsData] = useState([]);
  const [JournalPostData, setJournalPostData] = useState([]);


  return (
    <FishingSpotsContext.Provider value={{ FishingSpotsData, setFishingSpotsData }}>
      <JournalPostContext.Provider value={{ JournalPostData, setJournalPostData }}>
        <div className="App">
          <Navigation />

          <Switch>
            <PrivateRoute exact path="/fishing-spots" component={FishingSpotsAPI} />
            <PrivateRoute
              exact
              path="/journal-entries"
              component={UserJournalEntries}
            />
            <PrivateRoute exact path="/journal-post" component={JournalPost} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route component={Login} />
          </Switch>
        </div>
      </JournalPostContext.Provider>
    </FishingSpotsContext.Provider>
  );
}

export default App;
