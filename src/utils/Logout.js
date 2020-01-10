import React from 'react';


const Logout = (props) => {

    const handleLogout = e => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user-id");
        window.location.reload();
    }

    return (
        <div style={{ width: "145px", display:"flex", justifyContent:"flex-end" }}>
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default Logout;