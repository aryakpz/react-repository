

import { useEffect } from "react";
// import Label from "./Label";
import Label2 from "./Label2";
import './Listitem.css'
       
function Listitem(props) {

    const {
        title,
        desc,
        isactive,
        ondelete,
        onlabelclick
    } = props

  useEffect(()=>{
    console.log("j")
  })
    
    return (<div className='item'>
        <div className='head'>
            <h4>{title}</h4>
            <label className="dlt" onClick={ondelete}>Delete</label>
        </div>
        <div className='desc'>
            {desc}
        </div>
        <div className='label'>
            <Label2 onAction={() => {
            }} isactive={isactive} />
 
        </div>
    </div>     
   )
} 
     
export default Listitem;  

         





