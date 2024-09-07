
import React from "react"
import Label from "./Label";
import './Listitem.css'

function Listitem(props) {
    return (<div className='item'>
        <div className='head'>
            <h4>{props.title}</h4>
        </div>
        <div className='desc'>
            {props.desc}
        </div>
        <div className='label'>
            <Label isactive={props.isactive}/>
         
        </div>
    </div>
)}

export default Listitem;