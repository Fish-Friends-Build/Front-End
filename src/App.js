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
import { JournalEntriesContext } from './contexts/JournalEntriesContext';

import Navigation from './components/Navigation';
//////////////////////////////////////////////////////
import Login from './utils/Login';
import SignUp from './utils/SignUp';
import PrivateRoute from './components/PrivateRoute';
import FishingSpotsAPI from './components/FishingSpotsAPI';
import JournalEntries from './components/JournalEntries';
import JournalPost from './components/JournalPost';
import LocationJournals from './components/LocationJournals';
import EditEntryForm from './components/EditEntryForm';

function App() {
  const [FishingSpotsData, setFishingSpotsData] = useState([]);
  const [JournalPostData, setJournalPostData] = useState([]);
  const [JournalEntriesData, setJournalEntriesData] = useState([]);

  return (
    <FishingSpotsContext.Provider
      value={{ FishingSpotsData, setFishingSpotsData }}
    >
      <JournalPostContext.Provider
        value={{ JournalPostData, setJournalPostData }}
      >
        <JournalEntriesContext.Provider
          value={{ JournalEntriesData, setJournalEntriesData }}
        >
          <div className="App">
            <Navigation />

            <Switch>
              <PrivateRoute
                exact
                path="/edit-entry-form/:id"
                component={EditEntryForm}
              />
              <PrivateRoute
                exact
                path="/fishing-spots"
                component={FishingSpotsAPI}
              />
              <PrivateRoute
                exact
                path="/location-journals/:name"
                component={LocationJournals}
              />

              <PrivateRoute
                exact
                path="/journal-entries"
                component={JournalEntries}
              />
              <PrivateRoute
                exact
                path="/journal-post/:name"
                component={JournalPost}
              />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route component={Login} />
            </Switch>
          </div>
        </JournalEntriesContext.Provider>
      </JournalPostContext.Provider>
    </FishingSpotsContext.Provider>
  );
}

export default App;
