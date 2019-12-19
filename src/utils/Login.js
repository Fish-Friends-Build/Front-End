import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    handleSubmitLogin = e => {
        e.preventDefault();
        axios
            .post("https://fish-friends-api.herokuapp.com/api/auth/login", credentials)
            .then(res => {
                console.log("handleSubmitLogin post results: ", res);
            })
            .catch(err => console.log("handleSubmitLogin Error", err));
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
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

                <button>Log In</button>
            </form>
                <button>Sign Up</button> {/* Need to make this button link to SignUp form */}

        </div>
    )
};

export default Login;