import React from 'react'
import Greet from './demo/Greet'
import Function from './demo/Function'
import Parent from './demo/Parent'
import List from './demo/List'
import Usergreet from './demo/Usergreet'
import Form from './demo/Form'
import Fragment from './demo/Fragment'


function Home(){
    const name="arya"
    const age=23

    return(
        <div>
            {/* <Greet pname={name} age={age}></Greet>
            <Function></Function> */}

            {/* <Parent></Parent> */}
            {/* <Usergreet></Usergreet> */}
            {/* <List></List> */}
            {/* <Form></Form> */}
            <Fragment></Fragment>

            
        </div>
    )
}          

export default Home 