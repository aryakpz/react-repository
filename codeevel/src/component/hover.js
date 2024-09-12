
import React from "react";

class Hover extends React.Component{

    render(){ 
        const {count,add}=this.props 
        return( 
            <div> 
                <button onMouseOver={add}>hover {count} times</button>
            </div> 
        ) 
    } 
}  
                  
export default Hover;                              