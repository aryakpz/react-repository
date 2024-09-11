
import React from "react";

function Person ({person,key}){
    console.log(person.name);
    return( 
        <h2 style={{color:'red'}}>
           {key} i am {person.name}
        </h2> 
    ) 
}       
         
export default Person; 