
import React, { useEffect, useState } from "react";

// import './details.css';
// import ShowStudents from "../component/showname";
// import ShowStudentId from "../component/showid";
// import StudentDisplay from "../component/subject/display";
// import StudentSelection from "../component/subject/showsubject";
// import StudentmarkDisplay from "../component/subject/displaymark";
// import Studentaverage from "../component/subject/avgmark";
// import Studenttotal from "../component/subject/totalmark";
// import SubjectSelection from "../component/rank/selectsubject";
// import TopScorerDisplay from "../component/rank/topscore";
// import LowScorerDisplay from "../component/rank/lowscore";
// import TopScorerstudent from "../component/rank/topstudent";
// import LowScorerstudent from "../component/rank/loweststudent";
// import HighestAverageDisplay from "../component/rank/high_average_sub";
// import LowestAverageDisplay from "../component/rank/low_avg_sub";
// import Dispoverall from "../component/subject/overallavg";
// import Displayoverallmark from "../component/subject/overallmark";
// import DisplayAvgAllSub from "../component/rank/DisplayAvgAllSub";
// import Displaytotalallsub from "../component/rank/Dispaytotalallsub";
// import Highsubjecttotal from "../component/rank/highsubjectmrk";
// import Lowsubjecttotal from "../component/rank/lowsubjectmark";
// import Studenthighavg from "../component/subject/StuHighAvg";
// import Studentlowavg from "../component/subject/StuLowAvg";
// import CountStudentsAboveMark from "../component/cutoff/CountAbovemark";
// import CountStudentsBelowMark from "../component/cutoff/CountBelowmark";
// import HighestPercentage from "../component/percentage/high_per_mark";
// import LowestPercentage from "../component/percentage/low_per_mark";
// import HighestSubjectPercentage from "../component/percentage/subject_high_per";
// import LowestSubjectPercentage from "../component/percentage/subject_low_per";
// import Toppercentagestudent from "../component/rank/toppercentage";
// import Lowpercentagestudent from "../component/rank/lowpercentage";
// import Studentsubjecthigh from "../component/subject/StudentSubjecthigh";
// import SubAverageMarks from "../component/subject/Subjectavgmark";
// import SubTotalMarks from "../component/subject/Subtotalmark";
// import CutoffInAll from "../component/cutoff/cutoffinall";
// import Highsubjectmark from "../component/subject/subject_highmark";
// import Lowsubjectmark from "../component/subject/subejct_lowmark";

// type ClassData = {
//     name: string;
//     teacherName: string;
//     students: {
//         name: string;
//         id: number;
//         marks: {
//             subject: string;
//             mark: number;
//         }[];
//     }[];
// };

// export const Details: React.FC = () => {
//     const [classObj, setClassObj] = useState<ClassData | null>(null);
//     const [selectedAnswer, setSelectedAnswer] = useState<JSX.Element | null>(null);
//     const [selectedStudent, setSelectedStudent] = useState('');
//     const [selectedSubjects, setSelectedSubjects] = useState<{ subject: string; mark: number }[]>([]);
//     const [displayType, setDisplayType] = useState<'student' | 'marks' | 'average' | 'total' | 'top' | 'low' | 'highper' | 'lowper' | 'lowsub' | 'highsub' | 'avgmark' | 'totalmark' | null>(null);
//     const [selectedSubject, setSelectedSubject] = useState<string>('');

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('/classdata.json');
//             setClassObj(await response.json());
//         };
//         fetchData();
//     }, []);
    

//     const clearDisplay = () => {
//         setSelectedAnswer(null);
//         setDisplayType(null);
//     };

//     const handleStudentChange = (studentName: string, type: 'student' | 'marks' | 'average' | 'total' | 'highsub' | 'lowsub', label: string) => {
//         clearDisplay();
//         setSelectedStudent(studentName);
//         setSelectedSubjects([]);
//         setDisplayType(type);

//         if (classObj) {
//             const student = classObj.students.find(student => student.name === studentName);
//             if (student) {
//                 setSelectedSubjects(student.marks);
//             }
//         }
//     };

//     const handleSubjectChange = (subject: string, action: string) => {
//         clearDisplay();
//         setSelectedSubject(subject);
//         if (action === 'top') {
//             setDisplayType('top');
//         } else if (action === 'low') {
//             setDisplayType('low');
//         }
//         else if (action === 'highper') {
//             setDisplayType('highper')
//         }
//         else if (action === 'lowper') {
//             setDisplayType('lowper')
//         }
//         else if (action === 'avgmark') {
//             setDisplayType('avgmark')
//         }
//         else if (action === 'totalmark') {
//             setDisplayType('totalmark')
//         }

//     };

//     const showtopper = () => {
//         clearDisplay();
//         if (classObj) {
//             setSelectedAnswer(<TopScorerstudent students={classObj.students} />);
//         }
//     };

//     const showlower = () => {
//         clearDisplay();
//         if (classObj)
//             setSelectedAnswer(<LowScorerstudent students={classObj.students} />);
//     };

//     const showhighavg = () => {
//         clearDisplay();
//         if (classObj)
//             setSelectedAnswer(<HighestAverageDisplay students={classObj.students} />);
//     };

//     const showlowavg = () => {
//         clearDisplay();
//         if (classObj)
//             setSelectedAnswer(<LowestAverageDisplay students={classObj.students} />);
//     };

//     const showoverallavg = () => {
//         clearDisplay();
//         if (classObj)
//             setSelectedAnswer(<Dispoverall students={classObj.students} />);
//     };

//     const showoverallmark = () => {
//         clearDisplay();
//         if (classObj)
//             setSelectedAnswer(<Displayoverallmark students={classObj.students} />);
//     };

//     const showavgallsub = () => {
//         clearDisplay();
//         if (classObj)
//             setSelectedAnswer(<DisplayAvgAllSub students={classObj.students} />);
//     };

//     const showtotalallsub = () => {
//         if (classObj)
//             setSelectedAnswer(<Displaytotalallsub students={classObj.students} />)
//     }

//     const showhightotal = () => {
//         if (classObj)
//             setSelectedAnswer(<Highsubjecttotal students={classObj.students} />)

//     }
//     const showlowtotal = () => {
//         if (classObj)
//             setSelectedAnswer(<Lowsubjecttotal students={classObj.students} />)
//     }


//     const showstutopavg = () => {
//         if (classObj)
//             setSelectedAnswer(<Studenthighavg students={classObj.students} />)
//     }


//     const showstulowavg = () => {
//         if (classObj)
//             setSelectedAnswer(<Studentlowavg students={classObj.students} />)
//     }



//     const countAboveMark = (subject: string, cutoff: number) => {
//         if (classObj) {

//             const count = classObj.students.filter(student => {

//                 const markInSubject = student.marks.find(mark => mark.subject === subject);
//                 return markInSubject && markInSubject.mark > cutoff;
//             }).length;


//             setSelectedAnswer(
//                 <p>
//                     {count} student.
//                 </p>
//             );
//         }
//     };


//     const countcutoffall = (cutoffMark: number) => {
//         if (classObj) {
//             const Students = classObj.students.filter(student => {

//                 return student.marks.every(mark => mark.mark < cutoffMark);
//             });


//             const count = Students.length;
//             setSelectedAnswer(
//                 <p>
//                     Number of students = {count}
//                 </p>
//             );
//         }
//     };


//     const showhighpercentage = () => {
//         if (classObj)
//             setSelectedAnswer(<HighestPercentage students={classObj.students} />)
//     }

//     const showlowestpercentage = () => {
//         if (classObj)
//             setSelectedAnswer(<LowestPercentage students={classObj.students} />)
//     }

//     const showsubjecthighper = () => {
//         if (classObj)
//             setSelectedAnswer(<HighestSubjectPercentage students={classObj.students} />)
//     }

//     const showsubjectlowper = () => {
//         if (classObj)
//             setSelectedAnswer(<LowestSubjectPercentage students={classObj.students} />)
//     }

//     const highestmarksubject = () => {
//         if (classObj)
//             setSelectedAnswer(<Highsubjectmark students={classObj.students} />)
//     }

//     const lowmarksubject = () => {
//         if (classObj)
//             setSelectedAnswer(<Lowsubjectmark students={classObj.students} />)
//     }

//     const atlestonetop=()=>{
//         if(classObj)
//             console.log('d')
//             // setSelectedAnswer(<AtleastOneTOp  students={classObj.students} />)
//     }


//     return (
//         <div className="classsec">
//             <div className="datasec">
//                 <div className="questionsec">
//                     <p onClick={showClassName}>Class Name</p>
//                     <p onClick={showTeacherName}>Teacher Name</p>
//                     <p onClick={showStudentsName}>Students in the class</p>
//                     <p onClick={showStudentId}>Students Id</p>

//                     {classObj && (
//                         <StudentSelection
//                             students={classObj.students}
//                             onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'student', label)}
//                             label="Select Student for Subjects"
//                         />
//                     )}

//                     {classObj && (
//                         <StudentSelection
//                             students={classObj.students}
//                             onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'marks', label)}
//                             label="Subject-wise marks of Students"
//                         />
//                     )}

//                     {classObj && (
//                         <StudentSelection
//                             students={classObj.students}
//                             onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'average', label)}
//                             label="Average mark of student"
//                         />
//                     )}

//                     {classObj && (
//                         <StudentSelection
//                             students={classObj.students}
//                             onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'total', label)}
//                             label="Total mark of Student"
//                         />
//                     )}

//                     {classObj && (
//                         <SubjectSelection
//                             subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
//                             onSelectSubject={(subject, label) => handleSubjectChange(subject, 'avgmark')}
//                             label="Average of Mark in subject vise"
//                         />
//                     )}
//                     {classObj && (
//                         <SubjectSelection
//                             subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
//                             onSelectSubject={(subject, label) => handleSubjectChange(subject, 'totalmark')}
//                             label="Total Mark in subject vise"
//                         />
//                     )}

//                     {classObj && (
//                         <SubjectSelection
//                             subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
//                             onSelectSubject={(subject, label) => handleSubjectChange(subject, 'top')}
//                             label="Highest mark scorer in subject"
//                         /> 
//                     )}

//                     {classObj && (
//                         <SubjectSelection
//                             subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
//                             onSelectSubject={(subject, label) => handleSubjectChange(subject, 'low')}
//                             label="Lowest mark scorer in subject"
//                         />
//                     )}

//                     <p onClick={showtopper}>Student with high mark</p>
//                     <p onClick={showlower}>Student with lowest mark</p>
//                     <p onClick={showhighavg}>Subject with highest average</p>
//                     <p onClick={showlowavg}>Subject with lowest average</p>
//                     <p onClick={showoverallavg}>Overall average mark in the class</p>
//                     <p onClick={showoverallmark}>Overall mark in the class</p>
//                     <p onClick={showavgallsub}>Average mark of each subject</p>
//                     <p onClick={showtotalallsub}>Total mark of each subject</p>
//                     <p onClick={showhightotal}> Subject with highest total mark</p>
//                     <p onClick={showlowtotal}>Subject with lowest total mark</p>
//                     <p onClick={showstutopavg}>Student with hihgest average mark</p>
//                     <p onClick={showstulowavg}>Stduent with lowesrt average mark</p>
//                     <p onClick={showtopper}>Highest mark scorer</p>
//                     <p onClick={showlower}> Lowesr mark scorer</p>

//                     {classObj &&
//                         <CountStudentsAboveMark students={
//                             classObj.students} setSelectedAnswer={setSelectedAnswer} />
//                     }

//                     {classObj &&
//                         <CountStudentsBelowMark students={
//                             classObj.students} setSelectedAnswer={setSelectedAnswer}
//                         />
//                     }
//                     {/*  {
//                         classObj &&
//                         <CutoffInAll
//                            students={classObj.students} setSelectedAnswer={setSelectedAnswer}/>
//                     } */}

//                     <p onClick={showhighpercentage}>Student with highest percentage</p>
//                     <p onClick={showlowestpercentage}>Student with lowesr percentage</p>
//                     <p onClick={showsubjecthighper}>Subject with high percerntage</p>
//                     <p onClick={showsubjectlowper}>Subject with low percentage</p>


//                     {classObj && (
//                         <SubjectSelection
//                             subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
//                             onSelectSubject={(subject, label) => handleSubjectChange(subject, 'highper')}
//                             label="Highest percentage of mark in subject"
//                         />
//                     )}

//                     {classObj && (
//                         <SubjectSelection
//                             subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
//                             onSelectSubject={(subject, label) => handleSubjectChange(subject, 'lowper')}
//                             label="Lowest percentage of mark in subject"
//                         />
//                     )}

//                     {classObj && (
//                         <StudentSelection
//                             students={classObj.students}
//                             onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'highsub', label)}
//                             label="Highest percentage of student"
//                         />
//                     )}

//                     {classObj && (
//                         <StudentSelection
//                             students={classObj.students}
//                             onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'lowsub', label)}
//                             label="Lowest percentage of student"
//                         />
//                     )}

//                     <p onClick={highestmarksubject}>Highest mark scored subject</p>
//                     <p onClick={lowmarksubject}>Lowest mark scored subject</p>
//                     <p onClick={atlestonetop}>Students toppers in subject</p>

//                 </div>
                              
// {/* ========================================================================================================================================================= */}
//                 <div className="answersec">
//                     <div>{selectedAnswer}</div>

//                     {displayType === 'student' && classObj && (
//                         <StudentDisplay
//                             selectedStudent={selectedStudent}
//                             selectedSubjects={selectedSubjects}
//                         />
//                     )}

//                     {displayType === 'marks' && (
//                         <StudentmarkDisplay
//                             selectedStudent={selectedStudent}
//                             selectedSubjects={selectedSubjects}
//                         />
//                     )}

//                     {displayType === 'average' && classObj && (
//                         <Studentaverage
//                             students={classObj.students}
//                             selectedStudent={selectedStudent}
//                         />
//                     )}

//                     {displayType === 'total' && classObj && (
//                         <Studenttotal
//                             students={classObj.students}
//                             selectedStudent={selectedStudent}
//                         />
//                     )}

//                     {displayType === 'avgmark' && classObj && (
//                         <SubAverageMarks
//                             students={classObj.students}
//                             subject={selectedSubject}
//                         />
//                     )}

//                     {/* {displayType === 'totalmark' && classObj &&(
//                         <SubTotalMarks
//                         students={classObj.students}
//                         subject={selectedSubjects}
//                         />
//                      )} */}

//                     {displayType === 'top' && classObj && (
//                         <TopScorerDisplay
//                             students={classObj.students}
//                             subject={selectedSubject}
//                         />
//                     )}

//                     {displayType === 'low' && classObj && (
//                         <LowScorerDisplay
//                             students={classObj?.students}
//                             subject={selectedSubject}
//                         />

//                     )}

//                     {displayType === 'highper' && classObj && (
//                         <Toppercentagestudent
//                             students={classObj.students}
//                             subject={selectedSubject}
//                         />
//                     )}

//                     {displayType === 'lowper' && classObj && (
//                         <Lowpercentagestudent
//                             students={classObj?.students}
//                             subject={selectedSubject}
//                         />
//                     )}

//                  {displayType === 'highsub' && classObj && (
//                         <Studentsubjecthigh
//                             selectedStudent={selectedStudent}
//                             selectedSubjects={selectedSubjects}
//                         />
//                      )} 

//                 </div>
//             </div>
//         </div>
//     );
// }; 