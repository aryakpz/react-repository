
import React from 'react'
import Greet from './demo/Greet'
import Function from './demo/Function'
import Parent from './demo/Parent'
import List from './demo/List'
import Usergreet from './demo/Usergreet'
import Form from './demo/Form'
import Fragment from './demo/Fragment'
import Pure from './demo/purecomponenet'
import Parentcomp from './demo/parentcomp'
import Refsdemo from './demo/Refsdemo'
import Input from './demo/input'
import Focusinput from './demo/focus'
import Frparent from './demo/frparent'
import Portaldemo from './demo/portal'
 
function Home(){
    const name="arya" 
    const age=23 
 
    return( 
        <div>
             
            {/* <Greet pname={name} age={age}></Greet> 
            <Function></Function> */}  
            {/* <Parent></Parent>  */} 
            {/* <Usergreet></Usergreet> */} 
            {/* <List></List>  */} 
            {/* <Form></Form> */} 
            {/* <Fragment></Fragment> */} 
            {/* <Pure></Pure> */}
            {/* <Parentcomp></Parentcomp> */}
            {/* <Refsdemo></Refsdemo> */}
            {/* <Input></Input> */}
            {/* <Focusinput></Focusinput> */}
            {/* <Frparent></Frparent> */}
            <Portaldemo/>
            
           
        </div>
    )   
}             

export default Home;        