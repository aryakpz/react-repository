import React from "react";

const Hello=()=>{
    // return(
    //   <div className="demoxml">
    //         <h1> i am arya</h1>
    //   </div>
    // )

    return React.createElement('div',
    { id:'demo',className:'dmclz'},
        React.createElement('h1',null,'hey , i am arya')
    )
}
export default Hello     


// JSX:== class ->className,for ->Htmlfor,onclick ->onClick,tabindex->tabIndex  

// props are properties :<greet name="nk"/>
