
import React, { useMemo, useState } from "react";

function Memos() {
    const [counterone, setcounterone] = useState(0)
    const [countertwo, setcountertwo] = useState(0)

    const incrementone = () => {
        setcounterone(counterone + 1)
    }
    const incrementtwo = () => {
        setcountertwo(countertwo + 1)
    }

    const iseven = useMemo(() => {
        let i = 0
        while (i < 8000000) {
            i++
        }
        return counterone % 2 == 0
    }, [counterone])


    return (
        <div>
            <div>
                <button onClick={incrementone}>Count one - {counterone}</button>
                <span >{iseven ? 'even' : 'odd '}</span>
            </div>
            <div>
                <button onClick={incrementtwo}>Count two - {countertwo}</button>
                {/* <span >{iseven ? 'even' : 'odd '}</span> */}
            </div>
        </div>
    )
    
}

export default Memos;