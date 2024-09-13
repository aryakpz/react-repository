
// import React from "react";

// class Increment extends React.Component{

//     constructor(props)
//     {
//         super(props)
//         this.state={
//            interval:0,
//             count:0
//         }
//     }

//     componentDidMount()
//     {
//         console.log("mount");
//         this.interval=setInterval(this.tick,1000)
//     }
//     componentWillUnmount(){
//         console.log("unmount")
//         clearInterval(this.interval)
//     }

//     tick=()=>{
//         this.setState({
//             count:this.state.count +1
//         })
//     }

//     render(){
//         return(

//             <div>
//                   <h1> count :{this.state.count}</h1>
//             </div>
//         )
//     }
// }

// export default Increment



import React, { useEffect, useState } from "react";

function Increment() {
    const [count, setcount] = useState(0)

    const tick=()=>{
        setcount(count +1)
    }

    useEffect(() => {
        // setInterval(() => {
        //     return (setcount(count +1 ))
        // }, 1000)

        const interval=setInterval(tick,1000)

        return()=>{
            clearInterval(interval)
        }
    },[count])


return (
    <div>
{count}
    </div>
)
}

export default Increment; 