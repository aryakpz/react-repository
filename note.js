
//  use effect ill return statementntre ullil kodukkunnath cleanup function aanu, similear to 
//  'componentwillunmount method

//  by using usecontext is simplify the code -  assign the context  into a variable then apply in the position where it needs'

//      useReducer
// ====================

//  * useReducer is a hook that is used for state management.
//  * it is an alternate to usestate.
//  * usestate is build using usereducer.
//  * it contians 2 values useReducer(reducer,initialState)
//  * useReducers is a hook that is used for state management in React
//  * useReducers is related to reducer function
//  * useReducer(reducer,initialstate)
//  * reducer(currentstate,action)
//  check reducercounter.js file for more details about the reducer method
                                                                                                                
                                    
//  useReducer with usecontext
// ===========================
// usereducer -local state management
// share state b/w component -global state management
// userreducer + usecontect
//                  

const a=[2,3,2,10,5,1]

const sum=a.reduce((total,item)=>
{
    return total+item;
},0)   
                 



console.log(sum)    