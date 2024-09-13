
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
//         console.log("mouse event")
//         this.setState({x:e.clientX,y:e.clientY})
//     }

//     componentDidMount(){
//         console.log(" move ")
//         window.addEventListener('mousemove',this.logmouse)
//     }
     

//     componentWillUnmount(){
//         console.log("unmount")
//         window.removeEventListener('mousemove',this.logmouse)
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
         console.log("mos")
        setx(e.clientX)
        sety(e.clientY)
    }     
       
    useEffect(
        ()=>{
            console.log("mouse event")
        window.addEventListener('mousemove',logmouse)

        return()=>{
            console.log('component unmount in this situation')
            window.removeEventListener('mousemove',logmouse)
        } },[] )  
    return(
        <div>
               x-{x}  y -{y}    
        </div>
    )
}   
    
export default Use;   