import React from 'react';
import {Link
    // ,    Route, Switch
} from 'react-router-dom'
import Logout from '../utils/Logout';

const Navigation = (props) => {
    return (
        <div className="navbar">
            <Link to='/'><button>Fish Friends Home</button></Link>
            <Link to='/fishing-spots'><button>Fishing Spots</button></Link>
            <Link to='/journal-entries'><button>Journal Entries</button></Link>
            <Link to='/login'><button>Login/SignUp</button></Link>
            <Logout />

        </div>
    )
}

export default Navigation;