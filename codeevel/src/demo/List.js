
import React from "react";
import Person from "./Person";

function List() {

    const persons = [
        {
            id: 1,  
            name: "dina"
        },
        {
            id: 2,
            name: "mogho"
        },
        {
            id: 3,
            name: "charls" 
        }
    ]

    const names = ['bruce', 'clark', 'don', 'marco','bruce']
    const newname = names.map((name, index) => <h3 key={index} style={{color:'red'}} > {name} </h3>)

    return ( 
        <div>  
            {newname}
        </div>
        )      

    // const personlist =persons.map(person => <Person key ={persons.id} person={persons}/>)
    // return (
    //     <div>   
    //         { personlist }
    //     </div> 
    // )     
}           

export default List; 
