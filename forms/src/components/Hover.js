
import React, { Component } from "react";
import Updatedcomp from "./withcounter";
import Withcounter from "./withcounter";

class Hovercounter extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }
    // }
    // increment = () => {
    //     this.setState(prev => {
    //         return { count:prev.count + 1}     
    //     })
    // }

    render() {
        // const{ count  }=this.state
        const {count,increment}=this.props

        return (
            <div>
                <button onMouseOver={increment}>
                    {/* {this.props.first} - */}
                      clicked - {count}
                </button>
            </div>
        )
    }
}

export default Withcounter(Hovercounter,10) 