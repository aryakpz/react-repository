import React, { useEffect, useState } from "react";
import "./details.css";
import ShowStudents from "../component/showname";
import ShowStudentId from "../component/showid";
import StudentSelection from "../component/subject/showsubject";
import SubjectSelection from "../component/studentdetails/selectsubject";
import TopScorerstudent from "../component/studentdetails/topstudent";
import LowScorerstudent from "../component/studentdetails/loweststudent";
import HighestAverageDisplay from "../component/studentdetails/high_average_sub";
import LowestAverageDisplay from "../component/studentdetails/low_avg_sub";
import Dispoverall from "../component/subject/overallavg";
import Displayoverallmark from "../component/subject/overallmark";
import DisplayAvgAllSub from "../component/studentdetails/DisplayAvgAllSub";
import Displaytotalallsub from "../component/studentdetails/Dispaytotalallsub";
import Highsubjecttotal from "../component/studentdetails/highsubjectmrk";
import Lowsubjecttotal from "../component/studentdetails/lowsubjectmark";
import Studenthighavg from "../component/subject/StuHighAvg";
import Studentlowavg from "../component/subject/StuLowAvg";
import CountStudentsAboveMark from "../component/studentdetails/CountAbovemark";
import CountStudentsBelowMark from "../component/studentdetails/CountBelowmark";
import HighestPercentage from "../component/studentdetails/high_per_mark";
import LowestPercentage from "../component/studentdetails/low_per_mark";
import HighestSubjectPercentage from "../component/studentdetails/subject_high_per";
import LowestSubjectPercentage from "../component/studentdetails/subject_low_per";
import Highsubjectmark from "../component/subject/subject_highmark";
import Lowsubjectmark from "../component/subject/subejct_lowmark";
import ShowEachAvg from "../component/studentdetails/showeachavg";
import ShowEachResult from "../component/studentdetails/ShowEach";
import AboveAvgAllSub from "../component/studentdetails/Aboveavgall";
import BelowAvgAllSub from "../component/studentdetails/Belowavgall";
import BelowMajority from "../component/studentdetails/BelowMajority";
import AboveMajority from "../component/studentdetails/Abovemajority";
import AboveSubjectavg from "../component/subject/AboveSubjectavg";
import BelowSubjectavg from "../component/subject/BelowSubjectavg";
import BelowClassAverage from "../component/studentdetails/showbelowavgclass";
import ShowAboveAvgClass from "../component/studentdetails/Showaboveavgclass";
import AboveclassMajority from "../component/studentdetails/ShowAbovClass";
import BelowClassMajority from "../component/studentdetails/ShowBelowClass";
import SubjectAboveMajority from "../component/subject/Subjectbelowmajority";
import SubjectBelowMajority from "../component/subject/Subjectabovemajority";
import PercentageAboveAvg from "../component/studentdetails/PercentageAboveAvg";
import PercentageBelowAvg from "../component/studentdetails/PercentageBelowAvg";
import HighEachSubject from "../component/subject/HighEachSubject";
import LowEachSubject from "../component/subject/LowEachsubject";
import Studentaboveavg from "../component/studentdetails/Studentaboveavg";
import Studentbelowavg from "../component/studentdetails/Studentbelowavg";
import SubjectAboveClassAvg from "../component/subject/SubjectAboveClassAvg";
import SubjectBelowClassAvg from "../component/subject/SubjectBelowClassAvg";
import PercentageAboveEachSubject from "../component/studentdetails/PercentageAboveEachSubject";
import PercentageBelowEachSubject from "../component/studentdetails/PercentageBelowEachSubject";
import AboveAtleastOne from "../component/studentdetails/Aboveatleastone";
import BelowAtleastOne from "../component/studentdetails/Belowatleastone";
import PercentageAboveAverageInSubject from "../component/studentdetails/PercentageAboveAtleastone";
import PercentageBelowAverageInSubject from "../component/studentdetails/PercentageBelowatleastone";
import AnswerSection from "../component/AnswerSection";

type Mark = {
  subject: string;
  mark: number;
};
type ClassData = {
  name: string;
  teacherName: string;
  students: {
    name: string;
    id: number;
    marks: Mark[];
  }[];
};
type DisplayType =
  | "student"
  | "marks"
  | "average"
  | "total"
  | "top"
  | "low"
  | "highper"
  | "lowper"
  | "lowsub"
  | "highsub"
  | "avgmark"
  | "totalmark"
  | "abovemajor"
  | "belowmajority"
  | "specificabove"
  | "specificbelow"
  | "aboveone"
  | "belowone"
  | "abovestd"
  | "belowstd"
  | "abovesubject"
  | "belowsubject"
  | "abovehigh"
  | "belowhigh"
  | "abovelow"
  | "belowlow"
  | "mark"
  | "lowsub2"
  | "highsub2"
  | "abovemajor1"
  | "belowmajority1"
  | null;

// export const Details: React.FC = () => {
//   const [classObj, setClassObj] = useState<ClassData | null>(null);
//   const [selectedAnswer, setSelectedAnswer] = useState<JSX.Element | null>(
//     null
//   );
//   const [selectedStudent, setSelectedStudent] = useState("");
//   const [selectedSubjects, setSelectedSubjects] = useState<
//     { subject: string; mark: number }[]
//   >([]);
//   const [displayType, setDisplayType] = useState<DisplayType>(null);
//   const [selectedSubject, setSelectedSubject] = useState<string>("");
//   const [mark, setmark] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("/classdata.json");
//       setClassObj(await response.json());
//     };
//     fetchData();
//   }, []);

//   const clearDisplay = () => {
//     setSelectedAnswer(null);
//     setDisplayType(null);
//   };

//   const showClassName = () => {
//     clearDisplay();
//     classObj &&
//       setSelectedAnswer(
//         <p>
//           <span>Class:</span> {classObj.name}
//         </p>
//       );
//   };

//   const showTeacherName = () => {
//     clearDisplay();
//     classObj &&
//       setSelectedAnswer(
//         <p>
//           <span>Teacher:</span> {classObj.teacherName}
//         </p>
//       );
//   };

//   const showStudentsName = () => {
//     clearDisplay();
//     if (classObj) {
//       setSelectedAnswer(<ShowStudents students={classObj.students} />);
//     }
//   };

//   const showStudentId = () => {
//     clearDisplay();
//     if (classObj) {
//       setSelectedAnswer(<ShowStudentId students={classObj.students} />);
//     }
//   };

//   const handleStudentChange = (
//     studentName: string,
//     type: DisplayType,
//     label: string
//   ) => {
//     clearDisplay();
//     setSelectedStudent(studentName);
//     setSelectedSubjects([]);
//     setDisplayType(type);

//     if (classObj) {
//       const student = classObj.students.find(
//         (student) => student.name === studentName
//       );
//       if (student) {
//         setSelectedSubjects(student.marks);
//         setDisplayType(type);
//       }
//     }
//   };

//   const handleSubjectChange = (subject: string, action: DisplayType) => {
//     clearDisplay();
//     setSelectedSubject(subject);
//     if (action) {
//       setDisplayType(action);
//     }
//   };

//   const handlemarkchange = (mark: number, type: "mark") => {
//     setmark(mark);
//   };

//   const showtopper = () => {
//     clearDisplay();
//     if (classObj) {
//       setSelectedAnswer(<TopScorerstudent students={classObj.students} />);
//     }
//   };

//   const showlower = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<LowScorerstudent students={classObj.students} />);
//   };

//   const showhighavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<HighestAverageDisplay students={classObj.students} />);
//   };

//   const showlowavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<LowestAverageDisplay students={classObj.students} />);
//   };

//   const showoverallavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Dispoverall students={classObj.students} />);
//   };

//   const showoverallmark = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Displayoverallmark students={classObj.students} />);
//   };

//   const showavgallsub = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<DisplayAvgAllSub students={classObj.students} />);
//   };

//   const showtotalallsub = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Displaytotalallsub students={classObj.students} />);
//   };

//   const showhightotal = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Highsubjecttotal students={classObj.students} />);
//   };

//   const showlowtotal = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Lowsubjecttotal students={classObj.students} />);
//   };

//   const showstutopavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Studenthighavg students={classObj.students} />);
//   };

//   const showstulowavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Studentlowavg students={classObj.students} />);
//   };

//   const countAboveMark = (subject: string, cutoff: number) => {
//     clearDisplay();
//     if (classObj) {
//       const count = classObj.students.filter((student) => {
//         const markInSubject = student.marks.find(
//           (mark) => mark.subject === subject
//         );
//         return markInSubject && markInSubject.mark > cutoff;
//       }).length;

//       setSelectedAnswer(<p>{count} student.</p>);
//     }
//   };

//   const countcutoffall = (cutoffMark: number) => {
//     clearDisplay();
//     if (classObj) {
//       const Students = classObj.students.filter((student) => {
//         return student.marks.every((mark) => mark.mark < cutoffMark);
//       });

//       const count = Students.length;
//       setSelectedAnswer(<p>Number of students = {count}</p>);
//     }
//   };

//   const showhighpercentage = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<HighestPercentage students={classObj.students} />);
//   };

//   const showlowestpercentage = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<LowestPercentage students={classObj.students} />);
//   };

//   const showsubjecthighper = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(
//         <HighestSubjectPercentage students={classObj.students} />
//       );
//   };

//   const showsubjectlowper = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(
//         <LowestSubjectPercentage students={classObj.students} />
//       );
//   };

//   const highestmarksubject = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Highsubjectmark students={classObj.students} />);
//   };

//   const lowmarksubject = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Lowsubjectmark students={classObj.students} />);
//   };

//   const atlestonetop = () => {
//     if (classObj) console.log("d");
//     // setSelectedAnswer(<AtleastOneTOp  students={classObj.students} />)
//   };

//   //49
//   const showeachresult = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<ShowEachResult students={classObj.students} />);
//   };

//   const showeachavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<ShowEachAvg students={classObj.students} />);
//   };

//   const highestEachSubject = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<HighEachSubject students={classObj.students} />);
//   };

//   const lowestEachSubject = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<LowEachSubject students={classObj.students} />);
//   };

//   const studentaboveavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Studentaboveavg students={classObj.students} />);
//   };

//   const studentbelowavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<Studentbelowavg students={classObj.students} />);
//   };

//   const subjectaboveclassavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<SubjectAboveClassAvg students={classObj.students} />);
//   };

//   const subjectbelowclassavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<SubjectBelowClassAvg students={classObj.students} />);
//   };

//   const percentageAboveEachSubject = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(
//         <PercentageAboveEachSubject students={classObj.students} />
//       );
//   };

//   const percentageBelowEachSubject = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(
//         <PercentageBelowEachSubject students={classObj.students} />
//       );
//   };
//   const aboveatleastone = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<AboveAtleastOne students={classObj.students} />);
//   };
//   const belowatleastone = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<BelowAtleastOne students={classObj.students} />);
//   };

//   //67
//   const showAboveAvgClass = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<ShowAboveAvgClass students={classObj.students} />);
//   };

//   const showBelowAvgClass = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<BelowClassAverage students={classObj.students} />);
//   };

//   const showAboveClass = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<AboveclassMajority students={classObj.students} />);
//   };

//   const showBelowClass = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<BelowClassMajority students={classObj.students} />);
//   };

//   const subjectabovemajority = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<SubjectAboveMajority students={classObj.students} />);
//   };

//   const subjectbelowmajority = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<SubjectBelowMajority students={classObj.students} />);
//   };

//   const percentageaboveatleastone = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(
//         <PercentageAboveAverageInSubject students={classObj.students} />
//       );
//   };

//   const percetagebelowalteastone = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(
//         <PercentageBelowAverageInSubject students={classObj.students} />
//       );
//   };
//   const showallaboveavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<AboveAvgAllSub students={classObj.students} />);
//   };

//   const showallbelowavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<BelowAvgAllSub students={classObj.students} />);
//   };

//   const showallabovemajority = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<AboveMajority students={classObj.students} />);
//   };

//   const showallbelowmajority = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<BelowMajority students={classObj.students} />);
//   };

//   const showsubjectaboveavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<AboveSubjectavg students={classObj.students} />);
//   };

//   const showsubjectbelowavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<BelowSubjectavg students={classObj.students} />);
//   };
//   const percentageaboveavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<PercentageAboveAvg students={classObj.students} />);
//   };

//   const percentagebelowavg = () => {
//     clearDisplay();
//     if (classObj)
//       setSelectedAnswer(<PercentageBelowAvg students={classObj.students} />);
//   };

//   return (
//     <div className="classsec">
//       <div className="datasec">
//         <div className="questionsec">
//           <p onClick={showClassName}>Class Name</p>
//           <p onClick={showTeacherName}>Teacher Name</p>
//           <p onClick={showStudentsName}>Students in the class</p>
//           <p onClick={showStudentId}>Students Id</p>
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "student", label)
//               }
//               label="Select Student for Subjects"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "marks", label)
//               }
//               label="Subject-wise marks of Students"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "average", label)
//               }
//               label="Average mark of student"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "total", label)
//               }
//               label="Total mark of Student"
//             />
//           )}
//           {classObj && (
//             <SubjectSelection
//               subjects={Array.from(
//                 new Set(
//                   classObj.students.flatMap((student) =>
//                     student.marks.map((mark) => mark.subject)
//                   )
//                 )
//               )}
//               onSelectSubject={(subject, label) =>
//                 handleSubjectChange(subject, "avgmark")
//               }
//               label="Average of Mark in subject vise"
//             />
//           )}
//           {classObj && (
//             <SubjectSelection
//               subjects={Array.from(
//                 new Set(
//                   classObj.students.flatMap((student) =>
//                     student.marks.map((mark) => mark.subject)
//                   )
//                 )
//               )}
//               onSelectSubject={(subject, label) =>
//                 handleSubjectChange(subject, "totalmark")
//               }
//               label="Total Mark in subject vise"
//             />
//           )}
//           {classObj && (
//             <SubjectSelection
//               subjects={Array.from(
//                 new Set(
//                   classObj.students.flatMap((student) =>
//                     student.marks.map((mark) => mark.subject)
//                   )
//                 )
//               )}
//               onSelectSubject={(subject, label) =>
//                 handleSubjectChange(subject, "top")
//               }
//               label="Highest mark scorer in subject"
//             />
//           )}
//           {classObj && (
//             <SubjectSelection
//               subjects={Array.from(
//                 new Set(
//                   classObj.students.flatMap((student) =>
//                     student.marks.map((mark) => mark.subject)
//                   )
//                 )
//               )}
//               onSelectSubject={(subject, label) =>
//                 handleSubjectChange(subject, "low")
//               }
//               label="Lowest mark scorer in subject"
//             />
//           )}
//           <p onClick={showtopper}>Student with high mark</p>
//           <p onClick={showlower}>Student with lowest mark</p>
//           <p onClick={showhighavg}>Subject with highest average</p>
//           <p onClick={showlowavg}>Subject with lowest average</p>
//           <p onClick={showoverallavg}>Overall average mark in the class</p>
//           <p onClick={showoverallmark}>Overall mark in the class</p>
//           <p onClick={showavgallsub}>Average mark of each subject</p>
//           <p onClick={showtotalallsub}>Total mark of each subject</p>
//           <p onClick={showhightotal}> Subject with highest total mark</p>
//           <p onClick={showlowtotal}>Subject with lowest total mark</p>
//           <p onClick={showstutopavg}>Student with hihgest average mark</p>
//           <p onClick={showstulowavg}>Stduent with lowesrt average mark</p>
//           <p onClick={showtopper}>Highest mark scorer</p>
//           <p onClick={showlower}> Lowesr mark scorer</p>
//           {classObj && (
//             <CountStudentsAboveMark
//               students={classObj.students}
//               setSelectedAnswer={setSelectedAnswer}
//             />
//           )}
//           {classObj && (
//             <CountStudentsBelowMark
//               students={classObj.students}
//               setSelectedAnswer={setSelectedAnswer}
//             />
//           )}
//           <p onClick={showhighpercentage}>Student with highest percentage</p>
//           <p onClick={showlowestpercentage}>Student with lowest percentage</p>
//           <p onClick={showsubjecthighper}>Subject with high percerntage</p>
//           <p onClick={showsubjectlowper}>Subject with low percentage</p>
//           {classObj && (
//             <SubjectSelection
//               subjects={Array.from(
//                 new Set(
//                   classObj.students.flatMap((student) =>
//                     student.marks.map((mark) => mark.subject)
//                   )
//                 )
//               )}
//               onSelectSubject={(subject, label) =>
//                 handleSubjectChange(subject, "highper")
//               }
//               label="Highest percentage of mark in subject"
//             />
//           )}
//           {classObj && (
//             <SubjectSelection
//               subjects={Array.from(
//                 new Set(
//                   classObj.students.flatMap((student) =>
//                     student.marks.map((mark) => mark.subject)
//                   )
//                 )
//               )}
//               onSelectSubject={(subject, label) =>
//                 handleSubjectChange(subject, "lowper")
//               }
//               label="Lowest percentage of mark in subject"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "highsub", label)
//               }
//               label="Highest percentage of student"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "lowsub", label)
//               }
//               label="Lowest percentage of student"
//             />
//           )}
//           {/* 49 */}
//           <p onClick={showeachresult}>Student with total of each subject</p>
//           <p onClick={showeachavg}> Student with Average of Each subject</p>
//           <p onClick={highestEachSubject}>Topscore in Each subect</p>
//           <p onClick={lowestEachSubject}>LowScore in Each subject</p>
//           <p onClick={highestmarksubject}>Highest mark scored subject</p>
//           <p onClick={lowmarksubject}>Lowest mark scored subject</p>
//           <p onClick={studentaboveavg}>Students abvoe class average Marks</p>
//           <p onClick={studentbelowavg}>Students below class average Marks</p>
//           <p onClick={subjectaboveclassavg}>
//             Subjects in which the average marks are above the class average
//             marks
//           </p>
//           <p onClick={subjectbelowclassavg}>
//             Subjects in which the average marks are Below the class average
//             marks
//           </p>
//           {/* 63 */}
//           <p onClick={percentageAboveEachSubject}>
//             {" "}
//             percentage of students who scored above the class average marks in
//             each subject.
//           </p>
//           <p onClick={percentageBelowEachSubject}>
//             percentage of students who scored below the class average mae
//           </p>
//           <p onClick={aboveatleastone}>
//             {" "}
//             Percentage of Students who score above average atleast one subject
//           </p>
//           <p onClick={belowatleastone}>
//             Percentage of students who score below average atleast one subject
//           </p>
//           <p onClick={showAboveAvgClass}>Student above in class Average</p>
//           <p onClick={showBelowAvgClass}>Student Below in class Average</p>
//           <p onClick={showAboveClass}>
//             Above the class average marks in the majority of subjects.
//           </p>
//           <p onClick={showBelowClass}>
//             Below the class average marks in the majority of subjects.
//           </p>
//           <p onClick={subjectabovemajority}>
//             Majority of students scored above the class average marks
//           </p>
//           <p onClick={subjectbelowmajority}>
//             Majority of students scored below the class average marks
//           </p>
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "specificabove", label)
//               }
//               label="percentage of students who scored above the average marks of a specific student in each subject."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "specificbelow", label)
//               }
//               label="percentage of students who scored below the average marks of a specific student in each subject."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "aboveone", label)
//               }
//               label="percentage of students who scored above the average marks of a specific student in at least one subject"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowone", label)
//               }
//               label="percentage of students who scored below the average marks of a specific student in atleast one subject"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "abovestd", label)
//               }
//               label="student who scored above the average marks of a specific student in all subjects."
//             />
//           )}
//           this is not the right method for code
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowstd", label)
//               }
//               label="student who scored below the average marks of a specific student in all subjects"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "abovesubject", label)
//               }
//               label="subject in which the average marks are above the average marks of a specific student.."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowsubject", label)
//               }
//               label="subject in which the average marks are below the average marks of a specific student."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "abovehigh", label)
//               }
//               label=" subject highest percentage of students scored above the average marks of a specific student."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowhigh", label)
//               }
//               label="subject in which the highest percentage of students scored below the average marks of a specific student."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "abovelow", label)
//               }
//               label=" subject  in which lowest percentage of students scored above the average marks of a specific student."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowlow", label)
//               }
//               label="subject in which the lowest percentage of students scored below the average marks of a specific student."
//             />
//           )}
//           <p onClick={percentageaboveavg}>
//             Percentage of students above the averge
//           </p>
//           <p onClick={percentagebelowavg}>
//             Percetntage of stduents below the average
//           </p>
//           <p onClick={percentageaboveatleastone}>
//             {" "}
//             percentage of students who scored above the average marks of the
//             class in at least one subject.
//           </p>
//           <p onClick={percetagebelowalteastone}>
//             {" "}
//             percentage of students who scored below the average marks of the
//             class in at least one subject.
//           </p>
//           <p onClick={showallaboveavg}>Student above average in all Subject</p>
//           <p onClick={showallbelowavg}>Student below average in all Subject</p>
//           <p onClick={showallabovemajority}>
//             Above average in majority of subjects
//           </p>
//           <p onClick={showallbelowmajority}>
//             Below average in majority of subjects
//           </p>
//           <p onClick={showsubjectaboveavg}>Subject score above the average</p>
//           <p onClick={showsubjectbelowavg}>Subject score below the average</p>
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "abovemajor", label)
//               }
//               label=" percentage of students who scored above the average marks of a specific student in the majority of subjects."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowmajority", label)
//               }
//               label="Percentage of students who scored below the average marks of a specific student in the majority of subjects"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "abovemajor1", label)
//               }
//               label=" percentage of students who scored above the average marks of a specific student in the majority of subjects."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "belowmajority1", label)
//               }
//               label="Percentage of students who scored below the average marks of a specific student in the majority of subjects"
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "highsub", label)
//               }
//               label="subject in which the highest percentage of students scored above the average marks of student."
//             />
//           )}
//           {classObj && (
//             <StudentSelection
//               students={classObj.students}
//               onSelectStudent={(studentName, label) =>
//                 handleStudentChange(studentName, "lowsub", label)
//               }
//               label="subject in which the lowest percentage of students scored above the average marks of student."
//             />
//           )}
//         </div>

//         {/* ========================================================================================================================================================= */}
//         <div className="answersec">
//           <div>{selectedAnswer}</div>

//           <AnswerSection
//             displayType={displayType}
//             classObj={classObj}
//             selectedStudent={selectedStudent}
//             selectedSubjects={selectedSubjects}
//             selectedSubject={selectedSubject}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
