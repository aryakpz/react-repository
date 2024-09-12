
import React from "react";

class Clickounter extends React.Component {

    render() {
        const {count,add}=this.props
        return (
            <button onClick={add}> clicked {count}  times</button>
        )
    }
}

export default Clickounter;      