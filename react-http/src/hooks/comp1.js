
import react from "react";
import Comp2 from "./comp2";

export const co=react.createContext()

function Comp1(){

    return (
        <div>
            <co.Provider value={5}>
            <Comp2/>
            </co.Provider>
       
        </div>
    ) 
}
export default Comp1;