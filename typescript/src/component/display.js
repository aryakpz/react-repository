
import React from "react";
import "./calculator.css"

function Display({value})
{
   return(
    <div>
        <input type="text" value={value} className="display"></input>
    </div>
   )
}

export default Display