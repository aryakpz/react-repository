import React from "react";

class Regular extends React.Component{
    render(){
        console.log("regular component")
        return(
            <div>regular component{this.props.name}</div>
        )
    }
}

export default Regular