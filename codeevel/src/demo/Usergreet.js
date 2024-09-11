import React from "react";

class Usergreet extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            log: true
        }
    }

    render() {

        let msg
        // if (this.state.log == true) {
        //    msg= 
        // }
        // else {
        //   msg= 
        // }

        return (this.state.log ?<div>Wecome to react</div>: <div>Welcome guest</div>)
                            
        // return this.state.log && <div>Wecome to react</div>   
     
    }            
}   
export default Usergreet; 
          







