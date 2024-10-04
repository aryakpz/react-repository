
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
import DisplayAvgAllSub from "../component/rank/DisplayAvgAllSub";
import Displaytotalallsub from "../component/rank/Dispaytotalallsub";
import Highsubjecttotal from "../component/rank/highsubjectmrk";
import Lowsubjecttotal from "../component/rank/lowsubjectmark";
import Studenthighavg from "../component/subject/StuHighAvg";
import Studentlowavg from "../component/subject/StuLowAvg";

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
    const [displayType, setDisplayType] = useState<'student' | 'marks' | 'average' | 'total' | 'top' | 'low' | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data: ClassData = await response.json();
            setClassObj(data);
        };
        fetchData();
    }, []);

    const clearDisplay = () => {
        setSelectedAnswer(null);
        setDisplayType(null);
    };

    const showClassName = () => {
        clearDisplay();
        classObj && setSelectedAnswer(<p><span>Class:</span> {classObj.name}</p>);
    };

    const showTeacherName = () => {
        clearDisplay();
        classObj && setSelectedAnswer(<p><span>Teacher:</span> {classObj.teacherName}</p>);
    };

    const showStudentsName = () => {
        clearDisplay();
        if (classObj) {
            setSelectedAnswer(<ShowStudents students={classObj.students} />);
        }
    };

    const showStudentId = () => {
        clearDisplay();
        if (classObj) {
            setSelectedAnswer(<ShowStudentId students={classObj.students} />);
        }
    };

    const handleStudentChange = (studentName: string, type: 'student' | 'marks' | 'average' | 'total', label: string) => {
        clearDisplay();
        setSelectedStudent(studentName);
        setSelectedSubjects([]);
        setDisplayType(type);

        if (classObj) {
            const student = classObj.students.find(student => student.name === studentName);
            if (student) {
                setSelectedSubjects(student.marks);
            }
        }
    };

    const handleSubjectChange = (subject: string, action: string) => {
        clearDisplay();
        setSelectedSubject(subject);
        if (action === 'top') {
            setDisplayType('top');
        } else if (action === 'low') {
            setDisplayType('low');
        }

    };

    const showtopper = () => {
        clearDisplay();
        if (classObj) {
            setSelectedAnswer(<TopScorerstudent students={classObj.students} />);
        }
    };

    const showlower = () => {
        clearDisplay();
        if (classObj)
            setSelectedAnswer(<LowScorerstudent students={classObj.students} />);
    };

    const showhighavg = () => {
        clearDisplay();
        if (classObj)
            setSelectedAnswer(<HighestAverageDisplay students={classObj.students} />);
    };

    const showlowavg = () => {
        clearDisplay();
        if (classObj)
            setSelectedAnswer(<LowestAverageDisplay students={classObj.students} />);
    };

    const showoverallavg = () => {
        clearDisplay();
        if (classObj)
            setSelectedAnswer(<Dispoverall students={classObj.students} />);
    };

    const showoverallmark = () => {
        clearDisplay();
        if (classObj)
            setSelectedAnswer(<Displayoverallmark students={classObj.students} />);
    };

    const showavgallsub = () => {
        clearDisplay();
        if (classObj)
            setSelectedAnswer(<DisplayAvgAllSub students={classObj.students} />);
    };

    const showtotalallsub = () => {
        if (classObj)
            setSelectedAnswer(<Displaytotalallsub students={classObj.students} />)
    }

    const showhightotal = () => {
        if (classObj)
            setSelectedAnswer(<Highsubjecttotal students={classObj.students} />)

    }
    const showlowtotal = () => {
        if (classObj)
            setSelectedAnswer(<Lowsubjecttotal students={classObj.students} />)
    }


    const showstutopavg =()=>{
       if(classObj)
        setSelectedAnswer(<Studenthighavg students={classObj.students}/>)
    }


    const showstulowavg =()=>{
     if(classObj)
        setSelectedAnswer(<Studentlowavg students={classObj.students}/>)
    }




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

                    {classObj && (
                        <SubjectSelection
                            subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
                            onSelectSubject={(subject, label) => handleSubjectChange(subject, 'top')}
                            label="Highest mark scorer in subject"
                        />
                    )}

                    {classObj && (
                        <SubjectSelection
                            subjects={Array.from(new Set(classObj.students.flatMap(student => student.marks.map(mark => mark.subject))))}
                            onSelectSubject={(subject, label) => handleSubjectChange(subject, 'low')}
                            label="Lowest mark scorer in subject"
                        />
                    )}

                    <p onClick={showtopper}>Student with high mark</p>
                    <p onClick={showlower}>Student with lowest mark</p>
                    <p onClick={showhighavg}>Subject with highest average</p>
                    <p onClick={showlowavg}>Subject with lowest average</p>
                    <p onClick={showoverallavg}>Overall average mark in the class</p>
                    <p onClick={showoverallmark}>Overall mark in the class</p>
                    <p onClick={showavgallsub}>Average mark of each subject</p>
                    <p onClick={showtotalallsub}>Total mark of each subject</p>

                    <p onClick={showhightotal}> Subject with highest total mark</p>
                    <p onClick={showlowtotal}>Subject with lowest total mark</p>
                    <p onClick={showstutopavg}>Student with hihgest average mark</p>
                    <p onClick={showstulowavg}>Stduent with lowesrt average mark</p>
                    <p onClick={showtopper}>Highest mark scorer</p>
                    <p onClick={showlower}> Lowesr mark scorer</p>


                </div>

                <div className="answersec">
                    <div>{selectedAnswer}</div>

                    {displayType === 'student' && classObj && (
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

                    {displayType === 'average' && classObj && (
                        <Studentaverage
                            students={classObj.students}
                            selectedStudent={selectedStudent}
                        />
                    )}

                    {displayType === 'total' && classObj && (
                        <Studenttotal
                            students={classObj.students}
                            selectedStudent={selectedStudent}
                        />
                    )}

                    {displayType === 'top' && classObj && (
                        <TopScorerDisplay
                            students={classObj.students}
                            subject={selectedSubject}
                        />
                    )}

                    {displayType === 'low' && classObj && (
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

