
import React from "react";

class Bothcount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState(preState => {
            // count:this.state.count +1
            return {
                count: preState.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.add)}
            </div>

        )
    }
}
export default Bothcount