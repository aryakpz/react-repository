
import React from 'react';
import './App.css';
import { Greet } from './component/greet';
// import { Person } from './component/person';
import { Status } from './component/status';
import { Heading } from './component/heading';
import { Oscar } from './component/oscar';
import { Button } from './component/button';
import Calclator from './component/calculator';
import { Container } from './component/style';
import Login from './appnew/login';
import Logintype from './appnew/typelogin';
// import { Counter } from './appnew/counter';
// import { Themecontext } from './appnew/themecontext';
// import { Box } from './appnew/box';
import { User } from './appnew/user';
import { UserContextProvider } from './appnew/authuser';
import { Themecontextprovider } from './usecontext/themecontext';
import { Box } from './usecontext/box';
import { User2 } from './usecontext/user2';
import { Counter2 } from './class/counter';
import { Private } from './auth/private';
import { Profile } from './auth/profile';
import { List } from './generic/list';
import { Random } from './restriction/random';
import { Toast } from './template/toast';
import { Custombutton } from './html/button';
import { Text } from './polymorphic/test';

function App() {
  const personname = {
    first: 'brukey',
    last: 'wayne'
  }

  const namelist = [
    {
      first: 'bruce',
      last: 'wayne'
    },
    {
      first: 'clark',
      last: 'kent '
    },
    {
      first: 'prince',
      last: 'john'
    }
  ]

  const name = "arya"
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name='arya' islogg={false}/> */}
        {/* <Person names={namelist}/> */}
        {/* <Status status='success'/> */}
        {/* <Heading>
        sum
        </Heading> */}
        {/* <Oscar>
        <Heading>oscar goes to leonardo
        </Heading>
        </Oscar> */}
        {/* <Button handleclick={(event)=>{
        console.log('clicked',event)      
        }}/> */}
        {/* <Calclator/> */}
        {/* <Container styles={{border :'1px solid white',padding:'1rem'}}  name='arya'/> */}
        {/*=========================================================================================== */}
        {/* <Login/> */}
        {/* <Logintype/> */}
        {/* <Counter/> */}
        {/* <Box /> */}
        {/* <Themecontextprovider>
          <Box/>
        </Themecontextprovider> */}
        {/* <UserContextProvider>
        <User2/>
        </UserContextProvider> */}
        {/* <Counter message="the count value is ="></Counter> */}
        {/* <Counter2 message='the count is ='/> */}
        {/* <Private islog={false} Component={Profile}/> */}
        {/* <List 
        items={['banana','orange','apple','cherry']}
        onClick={(item)=>console.log(item)}/> */}
        {/* <List items={[1,2,3]} onClick={(item)=>console.log(item)}/> */}
        {/* 
         <List items={[
              {
                id:1,
                first: 'bruce',    
                last: 'wayne'
              },
              {
                id:2,
                first: 'clark',
                last: 'kent '
              },
              {
                id:3,
                first: 'prince',
                last: 'john'
              }
         ]} onClick={(item) =>console.log(item)}/> */}
        {/* <Random value={10} isneg /> */}
        {/* <Toast position="left"></Toast> */}
        {/* <Custombutton variant="primary " onClick={() => console.log('clicked')}> 
        
        primary button
      
        </Custombutton> */}

            <Text as='h1' size='lg'> heading</Text>
            <Text as='p' size='sm' color='primary'>paragraph</Text>
        
      </header>
    </div>
  );
}

export default App; 
