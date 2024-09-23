

import React,{createContext} from "react";
import { theme } from "./theme";

type Themecontextprops={
    children:React.ReactNode
}

const Theme=createContext(theme)

export const Themecontext=({children}:Themecontextprops)=>{
    return(
         <Theme.Provider value={theme}>
            {children}
         </Theme.Provider>
    )
}   