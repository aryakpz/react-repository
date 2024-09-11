import React from 'react';

// class Frinput extends React.Component
// {

//     render(){
//         return(
//             <div>
//                 <input type="text"></input>
//             </div>
//         )
//     }
// } 

const Frinput= React.forwardRef
(
    (props,ref)=>{
        return(
            <div>
                <input type='text' ref={ref}></input>
            </div>
        )
    }
) 

export default Frinput;
