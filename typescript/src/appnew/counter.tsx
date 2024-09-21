
import { count } from "console";
import { useReducer } from "react";

type counterstate={
    count:number;
}

type counteraction={
    type:'increment' |'decrement',
    payload:number
}

const initial = { count: 0 }

function reducer(state:counterstate, action:counteraction) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + action.payload
            }
        case 'decrement':
            return {
                count: state.count - action.payload
            }
        default:
            return state
    }

}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initial)
    return (
        <div>
            Count :{state.count}
            <button onClick={() => dispatch({
                type: 'increment', payload: 1
            })} >click</button>
        </div>
    )
}  



