
import { useEffect } from "react";
import React from "react";

function useTitle(count){
    useEffect((count)=>{
        document.title=`count ${count}`
       },[count])
}
                  
export default useTitle;
                  