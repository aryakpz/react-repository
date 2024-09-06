
import React from "react"
import Label from "./Label";

function Listitem() {
    return (<div className='item'>
        <hr />
        <div className='head'>
            <h4>My littile one</h4>
        </div>
        <div className='desc'>
            This is very big description
        </div>
        <div className='label'>
            <Label />
            <Label />
            <Label />
        </div>
        <hr></hr>
    </div>
)}

export default Listitem;