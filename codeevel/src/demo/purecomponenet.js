import React from "react";
import { PureComponent } from "react";

class Pure extends PureComponent{
    render(){
        console.log("pure component")
        return(
<div>purecomponent{this.props.name}</div>
        )
    }
}

export default Pure