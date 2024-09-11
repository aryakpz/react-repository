
import React from "react";
import Listitem from "./Listitem";
function SimpleList(props){
    
    const
    {
        data,
        onAction,
        onlabelclick,
        // onlabelcheck
    }=props
                                      
    return(        

        <div className='list'>  
        {
            data.map((item) => {
                return <Listitem key={item.title}
                    title={item.title}
                    desc={item.desc}
                    isactive={item.isactive}
                    onlabelclick={onlabelclick}
                    ondelete= {() =>
                        {onAction (item)}
                        }>
                </Listitem>
            })
        } 
    </div>
    )
}

export default  SimpleList;        