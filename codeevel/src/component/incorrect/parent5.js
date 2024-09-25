
import React, { useState ,useMemo, useCallback} from "react";

import { Memochild5 } from "./child5";


export const Parent5 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('arya')

    const person ={
        fname:'arya',
        lname:'santhosh'
    }


    const memoperson =useMemo(()=>person,[])

    const handle =()=>{}


    const memoclick=useCallback(handle,[])

    console.log('parent 5 render')
    return (     
        <div>
            <button onClick={() => setCount((c) => c + 1)}> count -{count}</button>
            <button onClick={() => setName('codeevolution')}> change name</button>
            <Memochild5 name={name} handle={memoclick}></Memochild5>
            {/* <Memochild5 name={name} person ={memoperson}></Memochild5> */}
        </div>
    )
}                     

 