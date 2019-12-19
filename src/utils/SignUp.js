import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

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
        console.log("handleSignUpSubmit users to post with axios", users);
        axios  
            .post("https://fish-friends-api.herokuapp.com/api/auth/register", user)
            .then(localStorage.setItem('token', 'users'))
            .then(props.history.push('/'))
            .catch(console.log("Something went wrong when submitting the SignUp form", err))
    };

    return (
        <div>
            <form onClick={handleSubmitLogin}>
                <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <input
                    placeholder="Password"
                    type="text"
                    name="username"
                    value={credentials.password}
                    onChange={handleChanges}
                />

                <button type="submit">Sign Up</button>
            </form>
            <div>
                <p>Already have an account?</p>
                <Link to="/login">Log In</Link>
            </div>
        </div>

    )

}