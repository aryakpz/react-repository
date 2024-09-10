
import React from "react";

class Dummy extends React.Component{

 componentDidMount(){
    console.log("did mount",this.props.name)
 }


componentDidUpdate(){
    console.log("update",this.props.name)
}

componentWillUnmount(){ 
    console.log("unmount",this.props.name)
}
    render()
    {

        console.log('render dummy')
        return (
            <div>
                {this.props.name}
            </div>
        )
    }     
}    

export default Dummy      