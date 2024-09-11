
import React from "react"

// function Function(){

//     function clickevent(){
//        console.log("cli")
//     }     

// return(
//     <div>
//         <button onClick={clickevent}>Click</button>
//     </div>
// )} 

class Function extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hello"
        }
    }

    clickevent = () => {
        // console.log("jj")         
        this.setState({
            message: "good bye"
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.message}</span>
                <button onClick={this.clickevent}>Click</button>
            </div>
        )
    }
}

export default Function;