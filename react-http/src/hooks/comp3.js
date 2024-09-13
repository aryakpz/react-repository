

import react, { useContext } from "react";
import { cont } from "../App";
import Comp1, { co } from "./comp1";
import { channel } from "../App";

function Comp3() {

    const c=useContext(co)
    const p=useContext(channel)

    return (          
        <div>

            {c} & {p}

        </div>
    )
}

export default Comp3;                                                                                         
