import React,{useState} from 'react';
import './App.css';
import Add from './components/add';
import Studentlist from './components/studentlist';

function App() {

  const [student,setstudent]=useState([]);


  const handleadd =({name,email})=>{
    const newstudent ={id:Date.now(),name,email}
    setstudent((prevStudent) =>[...prevStudent,newstudent])
  }       

  const handledelete=(id)=>{
    setstudent ((prevStudent) =>prevStudent.filter((student)=>student.id !== id))
  }
  return (
    <div className="App">

         <h1>school management system</h1>
         <Add onAdd={handleadd}/>
         <Studentlist student={student} onDelete={handledelete}/>
    </div>
  );
}

export default App;
