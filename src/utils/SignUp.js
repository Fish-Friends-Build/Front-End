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
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChanges}
                    required
                />

                <Button type="submit" style={size}>Sign Up</Button>
            
            <div>
                <h5>Already have an account?</h5>
                <Link to="/login" ><Button style={color}>Log In</Button></Link>
                <Route exact path="/login" component={Login} />
            </div>
        </StyleForm>
</div>
    )

}

export default SignUp;