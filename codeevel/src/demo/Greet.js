
import React from "react";
function Greet(props) {

    const {                
        pname,
        age
    } = props
           
    return (
        <div>i am {pname}, age {age}</div>
    )
}            
        
export default Greet;                                   