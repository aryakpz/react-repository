
import react, { useContext } from "react";
import Comp3 from "./comp3";
// import {userContext} from 'react'
import { channel } from "../App";
import { co } from "./comp1";

function Comp2 (){

  const user=  useContext(co)
    const chan= useContext(channel)
    return (
        <div>
          <Comp3/>
          {user}-{chan}
        </div>
    )
}

export default Comp2;