import React from "react";
import './header.css'


function Header(){
    return(
        <div >
    <span className='title' > REACT CODE</span>
    <span className="d">Home</span>
    <span  className="d">Usage</span>
    <span  className="d">Setting</span>
    <span  className="d">Logout</span>
    </div>
    )
}

export default Header;