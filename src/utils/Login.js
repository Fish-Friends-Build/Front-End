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
  color: #eee
  background: rgba(0,0,0,0.7);
`;

    const StyleInput = style.input`
    border: 1px solid #a9a9a9;
    border-radius: 4%;
    padding: 1%;
    margin: 2%;
    width: 40%;
    box-sizing: border-box;
    margin-top: 1%;
  `

const Button = style.button`
display: block;
border: thin solid #12a0f1
border-radius: 4%;
background: #333333
font-weight: 900;
text-align: center;
margin: 2% auto;
color: #eee;
transition: all 0.15s ease-in-out;
&:hover {
    background: rgba(255, 255, 255, 0.2);
}
`
const color = {
    border: 'thin solid #eee',
}

const size ={
    fontSize: '20px'
}

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

                <Button type="submit" style={size}>Log In</Button>
            
            <div>
                <h5>Don't have an account?</h5>
                <Link to="/signup"><Button style={color}>Sign Up</Button></Link>
                <Route exact path="/signup" component={SignUp}/>
            </div>
            </StyleForm>
        </div>
    )
};

export default Login;

