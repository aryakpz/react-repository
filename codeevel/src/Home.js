
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
import Hero from './demo/Hero'
import Clickounter from './component/count'
import User from './component/user'
import Hover from './component/hover'
import Bothcount from './component/bothcounter'
import Compc from './component/compc'
import { Userpro } from './component/usercon'

function Home() {
    const name = "arya"
    const age = 23

    return (
        <div>

            {/* <Greet pname={name} age={age}></Greet> 
            <Function></Function> */}
            {/* <Parent></Parent>  */}
            {/* <Usergreet></Usergreet> */}
            {/* <List></List>  */}
            {/* <Form></Form> */}
            {/* <Fragment></Fragment> */}
            {/* <Pure></Pure> */}
            {/* <Parentcomp></Parentcomp> * /}
            {/* <Refsdemo></Refsdemo> */}
            {/* <Input></Input> */}
            {/* <Focusinput></Focusinput> */}
            {/* <Frparent></Frparent> */}
            {/* <Portaldemo/> */}

            {/* <Hero heroname="superman"></Hero>
            <Hero heroname="batman"></Hero>
            <Hero heroname="joker"></Hero> */}

            {/* <Clickounter></Clickounter> */}
            {/* <Hover/> */}
            {/* <User name={(islogged)=>islogged ? 'viswas':'arya'}></User> */}

            {/* <Bothcount 
                render={(count, add) => 
                <Clickounter count={count} add={add}></Clickounter>} />
  
            <Bothcount 
                render={(count, add) => 
                <Hover count={count} add={add}></Hover>} /> */}

            <Userpro value="arya santhosh" ag="23">
                <Compc />
            </Userpro>

        </div>
    )
} 

export default Home;          