
import React, { useContext } from "react"
import './Label.css';

import { Mycontext, Mynew } from "../pages/Home";


class Label2 extends React.Component {

    render() {
        console.log("render label")
        const pr = this.props;

        const style = pr.isactive ? { background: 'green' } : { background: 'darkOrange' }

        return (
        
                         
                    <Mycontext>
                    {
                        (val)=>{
                        console.log(val);
    
                        if(val== false){
                            return null
                        }
                        else{
                               return(
                                <span onClick={() => {
    
                                    pr.onAction(pr.isactive ? 'active' : 'nonactive')
                
                                }}
                                    className="sp" style={style}>
                                    {pr.isactive ? 'Active' : 'Non active'}
                                </span>
                               )
                        }
                    } 
                    }
                     
    
                </Mycontext>
                    
                    
         
        )
    }
}

   
export default Label2





  



// Typing     : [31wpm][94%]
// Focus      : [9hr 30min]
// CT         : [8hr 54min][663hr 30min]
// ACT        : [8hr 7min][624hr 21min]
// HTML       : [125][13281]
// CSS        : [140][22489]
// JS         : [139][10618]
// JSON       : [0][4424]
// Total      : [424][48928]
// days       : #30


// 0543076139
// musthakhir@gammaholdings.ae