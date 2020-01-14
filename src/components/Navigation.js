import React from 'react';
import { Link } from 'react-router-dom'
import Logout from '../utils/Logout';
import style from 'styled-components';
import logo from '../img/logo.png';

const NavBarShape = style.div`
    display: flex;
    justify-content: space-between;
    margin: 1.25% auto;
    width: 92%;
    
  `;

const NavBarBackground = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    margin-bottom: 7%;
    background-color: rgba(255, 255, 255, 0.1);
`;

const Button = style.button`
    display: flex;
    height: 100%;
    width: 88%;
    border: none;
    border-radius: 5px;
    background-color: rgba(255,255,255, 0);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    padding: 5% 2.5%;
    margin: 2% auto;
    color: #EEE;
    transition: all 0.15 ease-in-out;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #8dba20;
    }
`;


const Navigation = (props) => {
    return (
        <NavBarBackground>
            <NavBarShape>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <a style={{ textDecoration: "none", color: "black" }} href="https://fishfriendsapp.netlify.com/"><img src={logo} alt="Fish Friends Logo" style={{ width: "auto", height: "100px" }} /></a>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to='/fishing-spots' style={{ textDecoration: "none" }}><Button>Find Fishing Spots</Button></Link>
                    <Link to='/journal-entries' style={{ textDecoration: "none" }}><Button>My Journal Entries</Button></Link>
                    {/* <Link to='/login'><button>Login</button></Link> */}
                </div>
                <div style={{ display: "flex", alignItems: "center", width: "15%"}}>
                    <Logout />
                </div>
            </NavBarShape>
        </NavBarBackground>
    )
}

export default Navigation;