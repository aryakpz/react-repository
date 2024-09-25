import React from "react";
import { Greet } from "../component/greet";
export const Customcomponent =(props:React.ComponentProps<typeof Greet>)=>{
    return(
        <div>
          {props.name}
        </div>
    )
}