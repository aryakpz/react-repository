import React from "react";

// function Greet(){
//     return<h1>Hello viswas</h1>
// }


export const Greet = (props) => {
    console.log(props)

      return  (
     <div>
        <h1> hello {props.name}  is {props.hero}</h1>  
        {props.children}
     </div>
)
                 
}

// export default Greet; 