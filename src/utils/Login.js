import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitLogin = e => {
        e.preventDefault();
        axios
            .post("https://fish-friends-api.herokuapp.com/api/auth/login", credentials)
            .then(res => {
                console.log("handleSubmitLogin post results: ", res);
                //// STILL NEED TO ROUTE TO PRIVATE ROUTE ////
            })
            .catch(err => console.log("handleSubmitLogin Error", err));
    }



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

                <button type="submit">Log In</button>
            </form>
            <div>
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
};

export default Login;