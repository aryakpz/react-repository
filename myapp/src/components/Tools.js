
import React, { Children } from "react";
import './Tools.css'
import AddNew from "./AddNew";

class Tools extends React.Component {

    render() {
        const {
            children,
            onAction,
            labelvalue,
            refresh,
            back
        } = this.props

        // const only=React.Children.only(Children)

        const count = React.Children.count(children.props.children)
        return (
            <div className="subbody">                       
                <div className="listhead">
                    <select value={labelvalue} onChange={onAction} name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="nonactive">Non active</option>
                    </select> 

                    <AddNew> </AddNew>       
                </div>


            <div><button className="refresh"  onClick={refresh}>Refresh</button></div>

            <button className="refresh" onClick={back}>Back</button>
                                  
                {children}
                              
                <div className="listfooter">           
                    Total {count} times 
                </div>
            </div>)   
    }    
}    
export default Tools;  