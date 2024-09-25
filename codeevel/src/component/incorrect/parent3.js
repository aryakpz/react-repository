
import React, { useState } from "react";
import { Memochild3 } from "./child3";
import { Memochild4 } from "./child4";


export const Parent3 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('arya')


    console.log('parent 3 render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}> count -{count}</button>
            <button onClick={() => setName('codeevolution')}> change name</button>
{/* 
            <Memochild3 name={name} >
                <strong> hello memo..</strong>
            </Memochild3> */}

            <Memochild4 name={name}></Memochild4>
        </div>
    )
}
