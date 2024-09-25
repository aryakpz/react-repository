// import React from "react"
// const  Studentlist=({student,onDelete})=>{
//     return(
//         <div>
//             <h2>
//                 student list
//             </h2>
//             <ul>
//                 {student.map((student)=>{
//                     return(
//                     <li key={student.id}>{student.name}{student.email}<button onClick={()=>onDelete(student.id)}>delete</button></li>
//                     )
//                     })}
//             </ul>   
//         </div>
//     )
// }  
// export default Studentlist;

import React from "react";

const Studentlist = ({ student, onDelete }) => {

    return (<div>
        <h2>student list</h2>
        <ul>
            {student.map((student) => {
                return (
                    <li key={student.id}>{student.name}{student.email}<button onClick={() => onDelete(student.id)}>delete</button></li>
                )
            })}
        </ul>
    </div>)
}

export default Studentlist