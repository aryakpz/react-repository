
import React from "react";
function Title({text}){
    console.log("render title")
    return(
        <div>
            <h1>{text}</h1>
        </div>
    )
}
export default React.memo(Title)   