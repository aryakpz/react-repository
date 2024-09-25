import React, { createContext } from "react";
import { theme } from "./theme";


type Themecontextprops = {
    children: React.ReactNode
}
export const ThemeContext = createContext(theme)
console.log(theme)



export const Themecontextprovider = ({children,}: Themecontextprops) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}