
import { count } from "console";
import { useReducer } from "react";

type counterstate = {
    count: number;
}

type update={
    type:'increment' | 'decrement'
    payload:number
}

type resetaction ={
    type:'reset'
}

type counteraction = update |resetaction

// const initial ={count :0}
//  {
//     type: 'increment' | 'decrement' | 'reset',
//     payload?: number
// }

const initial = { count: 0 }

function reducer(state: counterstate, action: counteraction){
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + action.payload 
            }
        case 'decrement':
            return {
                count: state.count - action.payload 
            }
        case 'reset':
            return {
                count:0
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
            <div>
            </div>
            <button onClick={() => dispatch({type:"increment",payload:10})} >Increment.</button>
            <div>
            </div>
            <button onClick={() => dispatch({type:"decrement",payload:10})}>decrement</button>
            <div></div>
            <button onClick={() => dispatch({type:"reset"})}>reset</button>
        </div>
    )
}    