
// import React, { useEffect, useState } from "react";
// import axios from'axios'
// function Data(){

//   const[loading,setloading]=useState(true)
//   const[error,seterror]=useState('')
//   const[post,setpost]=useState({})

//    useEffect(()=>{
//       axios.get('https://jsonplaceholder.typicode.com/posts/6')
//       .then(res=>{
//          setloading(false)
//          setpost(res.data)
//       })

//       .catch(error =>{
//          setloading(false)
//          setpost({})
//          seterror('something went wrong!')
//       })

//    },[])

//    return(     
//       <div>
 
//        {loading ?'loading':post.title}
//        {error? error :null}

//       </div>
//    )
// }

// export default Data;
import React, { act, useEffect, useReducer } from "react";
import axios from 'axios'

const initialState={
   loading:true,
   error:'',
   post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
      case 'fetch_success':return{
         loading:false,
         post:action.payload,
         error:''
      }
      case 'fetch_error':
         return{
            loading:false,
            post:{},
            error:'something went wrong'

         }
         default:return state
    }
}

function Data(){

  const[state,dispatch]= useReducer(reducer,initialState)
  useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/posts/6')
   .then(res=>{
      dispatch({type:'fetch_success',payload:res.data})

   })
   .catch(error=>{
      dispatch({type:'fetch_error'})

   })
  })

   return(
      <div>
       {state.loading ? 'loading' : state.post.title}
       {state.error ? state.error : null}
      </div>
   )
}

export default Data;          