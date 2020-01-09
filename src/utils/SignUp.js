import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Login from './Login';
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
            .then(sessionStorage.setItem('token', 'user'))
            .then(props.history.push('/'))
            .catch(err => console.log("Something went wrong when submitting the SignUp form", err))
    };


            
        
    
    return (
    <div>
            <StyleForm onSubmit={handleSignUpSubmit} >
                <StyleInput
                placeholder="Username"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChanges}
                    required
                />
                <StyleInput
                    placeholder="Password"
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChanges}
                    required
                />

                <button type="submit">Sign Up</button>
            
            <div>
                <p>Already have an account?</p>
                <Link to="/login">Log In</Link>
                <Route exact path="/login" component={Login} />
            </div>
        </StyleForm>
</div>
    )

}

export default SignUp;