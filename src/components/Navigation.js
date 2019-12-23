import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'


import Login from '../utils/Login';
import SignUp from '../utils/SignUp';
import PrivateRoute from './PrivateRoute';
import FishingSpotsAPI from './FishingSpotsAPI';
import UserJournalEntries from './UserJournalEntries';

const Navigation = (props) => {
    return (
        <div className="navbar">
            <Link to='/'><button>Fish Friends Home</button></Link>
            <Link to='/fishing-spots'><button>Fishing Spots</button></Link>
            <Link to='/journal-entries'><button>Journal Entries</button></Link>
            <Link to='/login'><button>Login/SignUp</button></Link>


        </div>
    )
}

export default Navigation;