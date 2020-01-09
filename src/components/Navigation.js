import React from 'react';
import {Link
    // ,    Route, Switch
} from 'react-router-dom'
import Logout from '../utils/Logout';

const Navigation = (props) => {
    return (
        <div className="navbar">
            <button><a style={{textDecoration:"none", color:"black"}} href="https://fishfriendsapp.netlify.com/">Fish Friends Home</a></button>
            <Link to='/fishing-spots'><button>Fishing Spots</button></Link>
            <Link to='/journal-entries'><button>Journal Entries</button></Link>
            <Link to='/login'><button>Login/SignUp</button></Link>
            <Logout />

        </div>
    )
}

export default Navigation;