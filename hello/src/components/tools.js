import React from "react";

class Tools extends React.Component {
    render() {
        const {
            children,
            onAction

        } = this.props


        const only=React.Children.only(children);
        // console.log(only)
        const co = React.Children.count(only.props.children)

        return (

            <div>
                <div className="listhead" href="">
                    <select onChange={onAction} className="status">
                        <option value="all"> All</option>
                        <option value="active"> Active</option>
                        <option value="nonactive"> Non Active</option>
                    </select></div>

                {children}

                <div className="listfooter" href="">
                 Total {co} items
                </div>
            </div>
        )
    }
}  
    
                         


// function Tools(props){
//     // console.log(props)
//     return (
//     <div>  props.children</div>

//     )
// }
export default Tools                                                   