import React from "react"

type oscar={
    children:React.ReactNode
}
export const Oscar = (props:oscar) => {
    return (
        <div>
            {/* oscar goes to leonardo */}
            {
                props.children
            }
        </div>
    )
}