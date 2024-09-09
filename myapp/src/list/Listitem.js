
import React from "react"
import Label from "./Label";
import './Listitem.css'

function Listitem(props) {

    const {
        title,
        desc,
        isactive,
        ondelete,
        onlabelclick
    } = props
    
    return (<div className='item'>
        <div className='head'>
            <h4>{title}</h4>
            <label className="dlt" onClick={ondelete}>Delete</label>
        </div>
        <div className='desc'>
            {desc}
        </div>
        <div className='label'>
            <Label onAction={() => {
            }} isactive={isactive} />
 
        </div>
    </div>     
    )
}
    
export default Listitem;