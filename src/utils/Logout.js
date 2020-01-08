import React from 'react';


const Logout = (props) => {

    const handleLogout = e => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user-id");
        window.location.reload();
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout;