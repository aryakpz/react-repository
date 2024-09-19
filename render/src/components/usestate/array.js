
// import React, { useState } from 'react';

// const ini = ['arya', 'santhosh']
// export const Arraystate = () => {
//     const [person, setperson] = useState(ini)
//     const handleclick = () => {
//         const newpr = [...person]
//         newpr.push('smitha')
//         newpr.push('santhosh')
//         setperson(newpr)
//     }

//     return (
//         <div>
//         <button onClick={handleclick}>click</button>
//         {
//           person.map(person =>(
//           <div key={person}>
//             {person}
//           </div>
//           ))
//         }
//         </div> 
//     )
// }   






import React,{useState} from 'react';

const ini = ['arya','santhosh']
export const Arraystate=()=>{
    const [person,setperson]=useState(ini)
    const handle=()=>{
        const newp=[...person]
        newp.push='smitha'
        newp.push='santhosh'
        setperson(newp)
    }
    
    return(
        <div>
          <button onClick={handle}>click</button>
          {
            person.map=(person=>(
                <div key={person}>
                    {person}
                </div>
            ))
          }
        </div>
    )
}