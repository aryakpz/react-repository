
//  use effect ill return statementntre ullil kodukkunnath cleanup function aanu, similear to 
//  'componentwillunmount method

//  by using usecontext is simplify the code -  assign the context  into a variable then apply in the position where it needs'

//      useReducer
// ====================

//  * useReducer is a hook that is used for state man
//  * it is an alternate to usestate.
//  * usestate is build using usereducer.
//  * it contians 2 values useReducer(reducer,initialState)
//  * useReducers is a hook that is used for state management in React
//  * useReducers is related to reducer function
//  * useReducer(reducer,initialstate)
//  * reducer(currentstate,action)
// check reducercounter.js file for more details about the reducer method
// reducer(currentstate,action)
// useReducer(reducer,initialstate)
                                                                                                                
                                    
//  useReducer with usecontext
// ===========================
// usereducer -local state management
// share state b/w component -global state management
// userreducer + usecontect
            

// usestate vs usereducer
// ======================
// number,string,boolean - usestate is the better choice
// object or array - usereducer is the better choice
// number of state transition is one or two in usestate
// number of state is toomany in usereducer
// no business logic in usestate
// complex business logic in the usereducer
// usestate is for local 
// usereducer is for global


// react.memo
// ==========
// its a higherorder component  to prevent a fun component from being rerenderd if its props or state do not change
// performance optimisaton

// usecall back
// ============
// it is a hook that will return a memoized version of the callback fn that only changes if one of the dependancies has changed.\
// it is usefull when passing callbacks to optimized child components that rely on reference equalityto prevent unnecessary renders.
                     


// custom hooks
// ============
// this hook is basically a javascript function whose name starts with "use"
// this hook can also call other hooks if required
// share logic -alternative to hocs and render props


const a=[2,5,3,5] 
          
const sum=a.reduce((t,i)=>{
    return t+i             
},0)       

alert (sum)
