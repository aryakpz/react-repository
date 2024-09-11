

import React from "react";

function Child(props){
    return(
        <div>
            <button onClick={props.greethand}>Greet parent</button>
        </div>
    )
}
             
export default Child;