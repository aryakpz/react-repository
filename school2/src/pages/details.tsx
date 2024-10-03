import React, { useEffect, useState } from "react";
import './details.css';
import ShowStudents from "../component/showname";
import ShowStudentId from "../component/showid";
import StudentDisplay from "../component/subject/display";
import StudentSelection from "../component/subject/showsubject";
import StudentmarkDisplay from "../component/subject/displaymark";
import Studentaverage from "../component/subject/avgmark";
import Studenttotal from "../component/subject/totalmark";
import SubjectSelection from "../component/rank/selectsubject";
import TopScorerDisplay from "../component/rank/topscore";
import LowScorerDisplay from "../component/rank/lowscore";
import TopScorerstudent from "../component/rank/topstudent";
import LowScorerstudent from "../component/rank/loweststudent";
import HighestAverageDisplay from "../component/rank/high_average_sub";
import LowestAverageDisplay from "../component/rank/low_avg_sub";
import Dispoverall from "../component/subject/overallavg";
import Displayoverallmark from "../component/subject/overallmark";

type ClassData = {
    name: string;
    teacherName: string;
    students: {
        name: string;
        id: number;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
};

export const Details: React.FC = () => {
    const [classObj, setClassObj] = useState<ClassData | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<JSX.Element | null>(null);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState<{ subject: string; mark: number }[]>([]);
    const [displayType, setDisplayType] = useState<'student' | 'marks' | 'average' | 'total' | 'top' | 'low'| null>(null);
    const [selectedSubject, setSelectedSubject] = useState<string>(''); 
    // const [actionLabel, setActionLabel] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data: ClassData = await response.json();
            setClassObj(data);
        };
        fetchData();
    }, []);


    const showClassName = () => classObj && setSelectedAnswer(<p><span>Class:</span> {classObj.name}</p>);
    const showTeacherName = () => classObj && setSelectedAnswer(<p><span>Teacher:</span> {classObj.teacherName}</p>);

    const showStudentsName = () => {
        if (classObj) {
            setSelectedAnswer(<ShowStudents students={classObj.students} />);
        }
    };

    const showStudentId = () => {
        if (classObj) {
            setSelectedAnswer(<ShowStudentId students={classObj.students} />);
        }
    };

    const handleStudentChange = (studentName: string, type: 'student' | 'marks' | 'average' | 'total', label: string) => {
        setSelectedStudent(studentName);
        setSelectedSubjects([]);
        setDisplayType(type);

        if (classObj) {
            const student = classObj.students.find(student => student.name === studentName);
            if (student) {
                setSelectedSubjects(student.marks);
            }
        }
        // setActionLabel(label);
    };



    const handleSubjectChange = (subject: string, action: string) => {
        setSelectedSubject(subject);
        if (action === 'top') {
            setDisplayType('top');
        } else if (action === 'low') {
            setDisplayType('low');
        }
    };

    const showtopper = () => {
        if (classObj) {
            setSelectedAnswer(<TopScorerstudent students={classObj.students} />);
        }
    };

    const showlower = () => {
        if (classObj)
            setSelectedAnswer(<LowScorerstudent students={classObj.students} />);

    };
    const showhighavg = () => {
        if (classObj)

            setSelectedAnswer(<HighestAverageDisplay students={classObj.students} />)
    }

    const showlowavg = () => {
        if (classObj)
            setSelectedAnswer(<LowestAverageDisplay students={classObj.students} />)
    }

    const showoverallavg = () => {
        if (classObj)
            setSelectedAnswer(<Dispoverall students={classObj.students} />)
    }

    const showoverallmark = () => {
        if (classObj)
            setSelectedAnswer(<Displayoverallmark students={classObj.students} />)
    }

//   const highpercentagemark =()=>{
//      setSelectedAnswer(<Highpercentagemark students={classObj.students} />)
//   }

    return (
        <div className="classsec">
            <div className="datasec">
                <div className="questionsec">

                    <p onClick={showClassName}>Class Name</p>
                    <p onClick={showTeacherName}>Teacher Name</p>
                    <p onClick={showStudentsName}>Students in the class</p>
                    <p onClick={showStudentId}>Students Id</p>

                    {classObj && (
                        <StudentSelection
                            students={classObj.students}
                            onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'student', label)}
                            label="Select Student for Subjects"
                        />
                    )}

                    {classObj && (
                        <StudentSelection
                            students={classObj.students}
                            onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'marks', label)}
                            label="Subject-wise marks of Students"
                        />
                    )}

                    {classObj && (
                        <StudentSelection
                            students={classObj.students}
                            onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'average', label)}
                            label="Average mark of student"
                        />
                    )}

                    {classObj && (
                        <StudentSelection
                            students={classObj.students}
                            onSelectStudent={(studentName, label) => handleStudentChange(studentName, 'total', label)}
                            label="Total mark of Student"
                        />
                    )}

                    {/* 9,10 */}
                    {classObj && (
                        <SubjectSelection
                            subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))} // Get unique subjects
                            onSelectSubject={(subject, label) => handleSubjectChange(subject, 'top')}
                            label="Highest mark scorer in subject"
                        />
                    )}
                  
                    {classObj && (
                        <SubjectSelection
                            subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
                            onSelectSubject={(subject, label) => handleSubjectChange(subject, 'low')}
                            label="Lowest mark scorer in subject vise"
                        />
                    )}
                    <p onClick={showtopper}>Student with high mark</p>
                    <p onClick={showlower}>Student with lowest mark</p>
                    <p onClick={showhighavg}>Subject with highest average</p>
                    <p onClick={showlowavg}>Subject with lowest average</p>
                    <p onClick={showoverallavg}>Overall average mark in the class</p>
                    <p onClick={showoverallmark}>Overall mark in the class</p>
                    {/* <p onClick={show}></p> */}  {/* 35 */}
                    {/* <p onClick={highpercentagemark}>Student with highest percentage</p> */}
                    {/* <p onClick={lowpercerntagemark}>Student with lowest percentage</p> */}
                    
                
                  

                </div>

                <div className="answersec">
                    <div>{selectedAnswer}</div>
                    {displayType === 'student' && (
                        <StudentDisplay
                            selectedStudent={selectedStudent}
                            selectedSubjects={selectedSubjects}
                        />
                    )}

                    {displayType === 'marks' && (
                        <StudentmarkDisplay
                            selectedStudent={selectedStudent}
                            selectedSubjects={selectedSubjects}
                        />
                    )}

                    {displayType === 'average' && classObj && selectedStudent && (
                        <Studentaverage
                            students={classObj.students}
                            selectedStudent={selectedStudent}
                        />
                    )}

                    {displayType === 'total' && classObj && selectedStudent && (
                        <Studenttotal
                            students={classObj.students}
                            selectedStudent={selectedStudent}

                        />
                    )}

                    {displayType === 'top' && classObj && selectedSubject && (
                        <TopScorerDisplay
                            students={classObj.students}
                            subject={selectedSubject}
                        />
                    )}

                    {displayType === 'low' && classObj && selectedSubject && (
                        <LowScorerDisplay
                            students={classObj?.students}
                            subject={selectedSubject}
                        />
                    )}

                </div>
            </div>
        </div>
    );
};


