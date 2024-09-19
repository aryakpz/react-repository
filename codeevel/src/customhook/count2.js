
import React, { useEffect, useState } from "react";
import usecounter from "./countercustom";

function Countertwo() {
    const [count, increment, decrement, reset] = usecounter
    return (
        <div>
            <div>count = {count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}> reset </button>
        </div>
    )
}

export default Countertwo;   