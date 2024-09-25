

import React from "react";
export const Child4 = ({ name }) => {

    const date = new Date()
    console.log('child four render')
    return (
        <div>
            Hello {name} current  date {date.getHours()}
        </div>
    )
}

export const Memochild4 = React.memo((Child4))