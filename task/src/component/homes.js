// import React, { useState } from 'react';

// const ClassDetails = () => {
//     let classObj = {
//         "name": "class A",
//         "teacherName": "Mary",
//         "students": [
//             {
//                 "name": "Ravi",
//                 "id": "101",
//                 "marks": [
//                     { "subject": "English", "mark": 25 },
//                     { "subject": "Maths", "mark": 48 },
//                     { "subject": "Physics", "mark": 40 },
//                     { "subject": "Chemistry", "mark": 30 },
//                     { "subject": "Computer", "mark": 20 }
//                 ]
//             },
//             {
//                 "name": "Aju",
//                 "id": "102",
//                 "marks": [
//                     { "subject": "English", "mark": 35 },
//                     { "subject": "Maths", "mark": 38 },
//                     { "subject": "Physics", "mark": 33 },
//                     { "subject": "Chemistry", "mark": 34 },
//                     { "subject": "Computer", "mark": 30 }
//                 ]
//             },
//             {
//                 "name": "Mini SS",
//                 "id": "103",
//                 "marks": [
//                     { "subject": "English", "mark": 12 },
//                     { "subject": "Maths", "mark": 49 },
//                     { "subject": "Physics", "mark": 18 },
//                     { "subject": "Chemistry", "mark": 30 },
//                     { "subject": "Computer", "mark": 40 }
//                 ]
//             },
//             {
//                 "name": "Binu",
//                 "id": "104",
//                 "marks": [
//                     { "subject": "English", "mark": 49 },
//                     { "subject": "Maths", "mark": 49 },
//                     { "subject": "Physics", "mark": 47 },
//                     { "subject": "Chemistry", "mark": 46 },
//                     { "subject": "Computer", "mark": 50 }
//                 ]
//             }
//         ]
//     }

//     const className = () => classObj.name;

//     const Teacher = () => classObj.teacherName;

//     const studnetname = () => {
//         return (
//             <>
//                 {classObj.students.map((student, index) => (
//                     <li key={index}>{student.name}</li>
//                 ))}
//             </>
//         );
//     };

//     const studentid = () => {
//         return (
//             <>
//                 {classObj.students.map((student) => (
//                     <tr key={student.id}>
//                         <td>{student.id}</td>
//                         <td>{student.name}</td>
//                     </tr>
//                 ))} 
//             </> 
//         );
//     };
 
//     const [name, setName] = useState('');
//     const [studentName, setStudentName] = useState(''); 
//     const [studentForMarks, setStudentForMarks] = useState('');
//     const [studentForAvg, setStudentForAvg] = useState('');
//     const [studentForTotal, setStudentForTotal] = useState('');

//     const getname = (e) =>{
//      setStudentName(e.target.value)
//     };
//     const getAvgName = (e) => {
//         setStudentForAvg(e.target.value);
//     }
//     const getTotalName = (e) => {
//         setStudentForTotal(e.target.value);
//     }

//     const sendname = () => setName(studentName);

//     const student = classObj.students.find(stu => stu.name === name);
//     const studentMarks = classObj.students.find(stu => stu.name === studentForMarks);
//     const studentAvg = classObj.students.find(stu => stu.name === studentForAvg);
//     const studentTotal = classObj.students.find(stu => stu.name === studentForTotal);

//     const displayAvg = () => {
//         if (studentAvg) {
//             const totalMarks = studentAvg.marks.reduce((total, mark) => total + mark.mark, 0);

//             const avg=totalMarks / studentAvg.marks.length;
//             return avg
//         }
//         return null;
//     };

//     const displayTotal = () => {
//         if (studentTotal) {
//             return studentTotal.marks.reduce((total, mark) => total + mark.mark, 0);
//         }
//         return null;
//     };


//     const displayAvgMarksBySubject = (subject) => {
//         const totalMarks = classObj.students.reduce((total, student) => {

//             const mark = student.marks.find(m => m.subject === subject);
//             return mark ? total + mark.mark : total;
//         }, 0);             
        
//         const studentCount = classObj.students.filter(student => 
//             student.marks.some(m => m.subject === subject)
//         ).length;
    
//         return studentCount > 0 ? (totalMarks / studentCount) : 0;
//     };

                        
//     return (
//         <div>
//             {/* Class Name */}
//             <h2>1. Class Name : {className()}</h2>

//             {/* Teacher Name */}
//             <h2>2. Teacher Name : {Teacher()}</h2>

//             {/* Student Names */}
//             <h3><u>Name of the Students</u></h3>
//             <ul>
//                 {studnetname()}
//             </ul>
  
//             {/* Student IDs */}
//             <h3>ID & Name of the Students</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {studentid()}
//                 </tbody>
//             </table>

//             {/* Subjects of a Student */}
//             <h3>Subjects of Student</h3>
//             <input
//                 type="text"
//                 placeholder="Enter student name"
//                 onChange={getname}
//             />
//             <button onClick={sendname}>Submit</button>
//             <h3>Subjects of {name}</h3>
//             <ul>
//                 {student ? (
//                     student.marks.map((mark) => (
//                         <li>
//                             {mark.subject}: {mark.mark}
//                         </li>
//                     ))  
//                 ) : (
//                     <>Student not found.</>
//                 )}
//             </ul> 
                                            
//             {/* Average Marks */}                  
                           
//             <h3>Average Mark of Student</h3>
//             <input type='text' placeholder='Enter student name' onChange={getAvgName}></input>

//             <div>
//                 Average mark: {displayAvg()}
//             </div>

//             {/* Total Marks */}

//             <h3>Total Mark of Student</h3>
//             <input type='text' placeholder='Enter student name' onChange={getTotalName}></input>
        
//             <div>
//                 Total mark: {displayTotal()}
//             </div>
  
//             {/* average mark in a specific subject */}
            
//             <div>
//                 {displayAvgMarksBySubject("English")}
//             </div>

//         </div>                    
//     );                       
// }; 
               
// export default ClassDetails;                             