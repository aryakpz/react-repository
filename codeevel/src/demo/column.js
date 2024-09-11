

import React from "react";

function Column(){
    const item=[]
    return(
        <React.Fragment>
            {
                   item.map(i=>(
                    <React.Fragment key={i.id}>
                        <h1>title</h1>
                        <p>{i.title}</p>
                
                        </React.Fragment>
                   ))
            }
            <td>react</td>
            <td>codevolution</td>
        </React.Fragment>
    )
}

export default Column
