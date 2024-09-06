import React from "react";
import List from "./list";
import Tools from "../components/tools";

const arr = [{
    title: "Appoinment",
    des: "Rescheduled to october",
    active: false
},
{
    title: "Appoinment",
    des: "Rescheduled to November",
    active: true
},
{
    title: "Appoinment",
    des: "Rescheduled to December",
    active: false
},

{
    title: "Appoinment",
    des: "Rescheduled  to you date",
    active: true
}
]
// function Mainlist() {
class Mainlist extends React.Component {
    change(e) {
        console.log(e.target.value)
        const value = e.target.value
        const newl = arr.filter((item) => {
            if (value === 'all') {
                return true
            }
             if (value == 'active') {
                return item.active === true
            }
             if (value == 'nonactive') {
                return item.active === false
            }
        
                return false;
            
        })
        console.log(newl)  
    }

    render() {    

        return (
            <Tools onAction={this.change}>
                <div className="mainitem">

                    {
                        arr.map((obj) => {
                            return <List key={obj.des} title={obj.title} desc={obj.des} active={obj.active} />
                        })
                    }

                </div>
            </Tools>

        )
    }
}

export default Mainlist;       