
import React from "react";

class User extends React.Component

{
    render(){
        return(
         <p>{this.props.name(true)}</p>
        )
    }
}

export default User;