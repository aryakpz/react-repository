
import React from "react";
import ReactDOM from 'react-dom'

function Portaldemo(){
    return ReactDOM.createPortal(
        <h1>
         portal demo
        </h1>,

        document.getElementById('portalroot')
    )
}

export default Portaldemo; 