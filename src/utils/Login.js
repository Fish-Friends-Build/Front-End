import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import SignUp from './SignUp';
import style from 'styled-components';

const StyleForm = style.form`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 25%;
    margin: 0 auto;
    border: thin solid #8dba20;
    border-radius: 1px;
    background: rgba(255, 255, 255, .1);
    font-family: 'Abel', sans-serif;
    color: #eeeeee
    background: rgba(0,0,0,0.7);
  `;
  
      const StyleInput = style.input`
      border: 1px solid #a9a9a9;
      border-radius: 3px;
      padding: 10px;
      margin: 5px;
      width: 150px;
      box-sizing: border-box;
      margin-top: 10px;
    `;

const Login = (props) => {
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
                sessionStorage.setItem("user-id", res.data.id);
                sessionStorage.setItem("token", res.data.token);
                props.history.push("/fishing-spots");

            })
            .catch(err => console.log("handleSubmitLogin Error", err));
    }

    

    return (
        <div>
            <StyleForm onSubmit={handleSubmitLogin}>
                <StyleInput
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChanges}
                    required
                />
                <StyleInput
                    placeholder="Password"
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChanges}
                    required
                />

                <button type="submit">Log In</button>
            
            <div>
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
                <Route exact path="/signup" component={SignUp}/>
            </div>
            </StyleForm>
        </div>
    )
};

export default Login;

