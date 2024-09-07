import React from "react";
import Listitem from "../list/Listitem";


const obj = [
    {
        title: "Appointment fot october",
        desc: "The patiant is rescheduled to october",
        isactive: false

    },
    {
        title: "Appointment fot november",
        desc: "The patiant is rescheduled to november",
        isactive: true

    },
    {
        title: "Appointment fot december",
        desc: "The patiant is rescheduled to december",
        isactive: false

    },
    {
        title: "Appointment fot january",
        desc: "The patiant is rescheduled to january",
        isactive: true

    }




]

function List() {
    return (
        <div className='list'>
            {
                obj.map((item) => {
                    return <Listitem key="title" title={item.title} desc={item.desc} isactive={item.isactive}></Listitem>

                })
            }
        </div>
    )
}


export default List;         