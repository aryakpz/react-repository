
// import React, { useState } from "react";

// function Hook4() {

//     const [name, setname] = useState([])
//     const additem = () => {
//         setname([...name, { id: name.length, value: Math.floor(Math.random() * 10) + 2 }])
//     }

//     return (
//         <div>
//             <button onClick={additem}>Add a number</button>
//             <ul>
//                 {
//                     name.map(name => <li key={name.id}>
//                         {name.value}
//                     </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Hook4;

// import React from "react";

// class Hook4 extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={
//             count:0,
//             name:''
//         }
//     }

// componentDidMount(){
//     document.title=`clicked ${this.state.count} times`
// }
// componentDidUpdate(prevprops,prestate){
//     if(prestate.count != this.state.count)
//         {
//     console.log('updating document title')
//     document.title=`clicked ${this.state.count} times`
// }
// }

//     render(){
//         return(
//             <div>
//                 <input type="text" value={this.state.name} onChange={e=>{this.setState({name :e.target.value})}}></input>
//                 <button onClick={ ()=>this.setState({count :this.state.count +1})}>
//                     click { this.state.count} times</button>

//             </div>
//         )
//     }
// }

// export default Hook4


import React, { useEffect } from "react";
import { useState } from "react";
 
function Hook4() 
{
   
 const [name,setname]=useState('')
 const [count,setcount]=useState(0)

 useEffect(()=>{
    console.log("vimv")
    document.title =`you clicked ${count} times`
},[count,name])
    return(
        <div>
            <input type="text" value={name} onChange={e=>setname(e.target.value)}></input>
            <button onClick={()=>setcount(count+1 )}>click {count} times</button>
        </div>
    )
}     

export default Hook4;                 