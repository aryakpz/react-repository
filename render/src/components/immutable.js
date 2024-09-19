
import React from 'react';
import { useState } from 'react';

const ini={
    fname:'bruce',
    lname:'wyn'
}

export const Objectstate=()=>{
    const [person,setperson]=useState(ini)

    const changename =()=>{
        person.fname='arya';
        person.lname='santhosh';

        const newpe={...person}
        newpe.fname ='clark'
        newpe.lname='ddda'

        setperson(newpe)
    }

    console.log('object render')
    return(
        <div>
           <button onClick={changename}>{person.fname} {person.lname}</button>
        </div>
    ) 
}