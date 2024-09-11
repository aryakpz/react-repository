
import React, { memo } from "react";

function Memo({name}){
    console.log("memo====")
        return(
             <div>{name}</div>
        )
    }

export default React.memo(Memo)