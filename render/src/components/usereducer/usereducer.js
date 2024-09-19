
import React, { useReducer } from 'react';

const ini = 0
const reducer = (state, action) => {
    switch (action) {
        case 'incr': return state + 1
        case 'dec': return state - 1
        case 'res': return ini
        default: return state
    }
}

export const Usereducer = () => {
    const [count, dispatch] = useReducer(reducer, ini)
    console.log('usereducer render')
    return (
        <div>
            <div>count - {count}</div>
            <button onClick={() => dispatch('incr')}>
                increment
            </button>
            <button onClick={() => dispatch('dec')}>
                derement
            </button>
            <button onClick={() => dispatch('res')}>
                reset
            </button>
        </div> 
    ) 
}  
         