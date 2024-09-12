
import React from "react";
import ReactDOM from 'react-dom'
       
function Portaldemo(){
    return ReactDOM.createPortal(
        <h1 style={{fontFamily:'cursive'}}> portal demo </h1>,
        document.getElementById('portalroot')
    )  
} 
                                                                         
export default Portaldemo;