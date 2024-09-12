
import React, { useState } from "react";

function Hook3 (){

  const [name,change]=useState({
    firstname :' ' ,
    lastname:' '
    })

    return(
      <div>
        <form>

            <input type="text" value={name.firstname} 
            onChange={e=>change({...name,firstname : e.target.value})}></input>

            <input type="text" value={name.lastname}
            onChange={e=>change({ ...name,lastname: e.target.value})}></input>
            
            <h2>your first name : {name.firstname}</h2>
            <h2>your last name : {name.lastname}</h2>

            <h2>{JSON.stringify(name)}</h2>

        </form>
      </div>
    )
}

export default Hook3;