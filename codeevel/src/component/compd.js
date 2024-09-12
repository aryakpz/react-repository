import React from "react";
import Compe from "./compe";
import { UserCon } from "./usercon";

class Compd extends React.Component {

    static contextType =UserCon
    render() {
        return (
            <div>
                compE {this.context}
                <Compe/>
            </div>

        )
    }
} 
 
// Compd.contextType = UserCon
export default Compd                                                                                                                             