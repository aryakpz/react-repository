

import React from "react";

function Justinfo(props){
 const{
    showlabel
 }=props

    
    console.log("render info",{showlabel})
    return(
        <div>JUST INFO{showlabel}</div>
    )
}
    
export default React.memo(Justinfo);
