import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Login from './Login';

const SignUp = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSignUpSubmit = e => {
        e.preventDefault();
        console.log("handleSignUpSubmit user to post with axios", user);
        axios  
            .post("https://fish-friends-api.herokuapp.com/api/auth/register", user)
            .then(localStorage.setItem('token', 'user'))
            .then(props.history.push('/'))
            .catch(err => console.log("Something went wrong when submitting the SignUp form", err))
    };

    return (
        <div>
            <form onClick={handleSignUpSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChanges}
                />
                <input
                    placeholder="Password"
                    type="text"
                    name="username"
                    value={user.password}
                    onChange={handleChanges}
                />

                <button type="submit">Sign Up</button>
            </form>
            <div>
                <p>Already have an account?</p>
                <Link to="/login">Log In</Link>
                <Route exact path="/login" component={Login} />
            </div>
        </div>

    )

}

export default SignUp;