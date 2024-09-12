
// import React from "react";

// class Use extends React.Component{

//     constructor(props)
//     {
//         super(props)
//         this.state={
//             x:0,
//             y:0
//         }
//     }

//     logmouse=e=>{
//         this.setState({x:e.clientX,y:e.clientY})
//     }

//     componentDidMount(){
//         window.addEventListener('mousemove',this.logmouse)
//     }

//     render(){
//         return(
//             <div >
//                 x-{this.state.x} y-{this.state.y}
                
//             </div>
//         )
//     }
// }

// export default Use



import React, { useEffect, useState } from "react";

function Use()
{
    const [x,setx]=useState(0)
    const [y,sety]=useState(0)     
    const logmouse=(e)=>{

        setx(e.clientX)
        sety(e.clientY)
   
    }    

    useEffect(
        ()=>{
        window.addEventListener('mousemove',logmouse)
        }
    )
    return(
        <div>
               x-{x}  y -{y}   
        </div>
    )
}

export default Use; 