import React from 'react';
import {
  // Link,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import { Store } from './components/Store';

import Navigation from './components/Navigation';
//////////////////////////////////////////////////////
import Login from './utils/Login';
import SignUp from './utils/SignUp';
import PrivateRoute from './components/PrivateRoute';
import FishingSpotsAPI from './components/FishingSpotsAPI';
import UserJournalEntries from './components/UserJournalEntries';
import JournalPost from './components/JournalPost';

// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <Link to='/'><button>Home</button></Link>
//         <Link to='/fishing-spots'><button>Fishing Spots</button></Link>
//       </nav>
//       <Route exact path='/'/>
//       <Route path='/fishing-spots' component={FishingSpotsAPI}/>
//     </div>
//   );
// }

function App() {
  const { state, dispatch } = useContext(Store);

  //are we fetching data at App.js? Or at journal entries?
  // useEffect(()=>{fetchDataAction()})
  // const fetchDataAction = Axios.get().then().catch(error)
  //return dispatch({type: 'FETCH_DATA', payload: ''})

  return (
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
  );
}

export default App;
