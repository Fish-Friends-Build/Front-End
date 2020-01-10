import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../utils/Logout';
import style from 'styled-components';
import logo from '../img/logo.png';

const NavBarStyle = style.div`
    display: flex;
    justify-content: space-between;
    margin: 1.25% auto;
    width: 80%;

  `;

const Navigation = props => {
  return (
    <NavBarStyle>
      <div>
        <a
          style={{ textDecoration: 'none', color: 'black' }}
          href="https://fishfriendsapp.netlify.com/"
        >
          <img
            src={logo}
            alt="fishPinDrop"
            style={{ width: 'auto', height: '100px' }}
          />
        </a>
      </div>
      <div>
        <Link to="/fishing-spots">
          <button>Fishing Spots</button>
        </Link>
        <Link to="/journal-entries">
          <button>Journal Entries</button>
        </Link>
        {/* <Link to='/login'><button>Login</button></Link> */}
      </div>
      <Logout />
    </NavBarStyle>
  );
};

export default Navigation;
