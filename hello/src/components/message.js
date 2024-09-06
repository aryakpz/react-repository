import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {

            message: "welcome visitor"
        }
    }

    changemessage() {
        this.setState({
            message: 'thank you'
        })

        // setstate:=alter the data in the current class,dont modify the state directly,use the setstate method 
    }
    render() {

   
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemessage()}> subscribe</button>

            </div>
        )
    }
}

export default Message;