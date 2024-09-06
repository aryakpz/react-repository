import React from "react"
import './style.css'






class  Label extends React.Component{
    render(){

        const props= this.props;
        const style = props.active ? {backgroundColor: 'green'} : {backgroundColor: 'darkorange'};
        return<span onClick={props.onAction}
            // console.log()
         className="ite" style={style}>{props.active ? 'Active':'Not-Active'} </span>        
    }
}

  
// function Label()
// return(<div>
//         <span>li</span>
//     </div>)
// }
       
export default Label;      