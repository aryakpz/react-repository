
import React, { useCallback, useEffect, useState } from "react";
import useTitle from "./doctitle";

function Custom(){

   const [count,setcount]=useState(0)
   useTitle(count)

    return(
       <div>
          <button onClick={()=>{ setcount(count +1)}}>count -{count}</button>
       </div>
    )
}

export default Custom
