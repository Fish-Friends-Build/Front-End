import React from 'react';
import style from 'styled-components';

// const Button = style.button`
//     display: flex;
//     border: thin solid #f11212;
//     border-radius: 5px;
//     background: #333333
//     font-weight: 700;
//     text-align: center;
//     margin: auto 10% auto 0;
//     padding: .69541% 4.172462%;
//     line-height: 2.5;
//     color: #eee;
//     transition: all 0.15s ease-in-out;
//     &:hover {
//         background: rgba(255, 255, 255, 0.2);
//     }
// `;
const Button = style.button`
    display: flex;
    height: 100%;
    width: 100%;
    border: none;
    background-color: rgba(255,255,255, 0);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    padding: 5% 2.5%;
    color: #EEE;
    transition: all 0.15 ease-in-out;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #8dba20;
    }
`;

const Logout = () => {

    const handleLogout = e => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user-id");
        window.location.reload();
    }

    return (
        <Button onClick={handleLogout} >Logout</Button>
    )
}

export default Logout;