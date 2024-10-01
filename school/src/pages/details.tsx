            

import React, { useEffect, useState } from "react";
import './details.css';

type ClassData = {
    className: string;
    teacherName: string;
    students: {
        name: string;
        id: string;
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
    const [selectedSubject, setSelectedSubject] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data: ClassData = await response.json();
            setClassObj(data);
        };
        fetchData();
    }, []);

    const showClassName = () => classObj && setSelectedAnswer(<p><span>Class:</span> {classObj.className}</p>);

    const showTeacherName = () => classObj && setSelectedAnswer(<p><span>Teacher:</span> {classObj.teacherName}</p>);

    const showStudentsName = () => {
        if (classObj) {
            const students = classObj.students.map(student => <li key={student.id}>{student.name}</li>);
            setSelectedAnswer(<p><span>Students:</span> <ul>{students}</ul></p>);
        }
    };

    const showStudentIds = () => {
        if (classObj) {
            const ids = classObj.students.map(student => <li key={student.id}>{student.id} - {student.name}</li>);
            setSelectedAnswer(<p><span>IDs:</span> <ul>{ids}</ul></p>);
        }
    };

    const handleStudentChange = (studentName: string, displayFunction: (name: string) => void) => {
        setSelectedStudent(studentName);
        setSelectedSubject('');

        if (studentName) {
            displayFunction(studentName);
        } else {
            setSelectedAnswer(null);
        }
    };

    const namedis = (studentName: string) => {
        const student = classObj?.students.find(stu => stu.name.toLowerCase() === studentName.toLowerCase());
        if (student) {
            const subjectsList = student.marks.map(std => <li key={std.subject}>{std.subject}</li>);
            setSelectedAnswer(<p><span>Subjects of {studentName}:</span><ul>{subjectsList}</ul></p>);
        } else {
            setSelectedAnswer(<p>Student not found.</p>);
        }
    }

    const subjectdis = (studentName: string) => {
        const student = classObj?.students.find(stu => stu.name.toLowerCase() === studentName.toLowerCase());
        if (student) {
            const subjectsList = student.marks.map(std => <li key={std.subject}>{std.subject} {std.mark}</li>);
            setSelectedAnswer(<p><span>Subjects of {studentName}:</span><ul>{subjectsList}</ul></p>);
        } else {
            setSelectedAnswer(<p>Student not found.</p>);
        }
    }

    const avgdis = (studentName: string) => {
        const student = classObj?.students.find(stu => stu.name.toLowerCase() === studentName.toLowerCase());
        if (student) {
            const avg = student.marks.reduce((total, mark) => total + mark.mark, 0) / student.marks.length;
            setSelectedAnswer(
                <p>
                    Averagemark of {studentName}:<span>{avg} </span>
                </p>
            )
        }
        else {
            setSelectedAnswer(<p>Not found</p>)
        }
    }

    const totaldis = (studentName: string) => {
        const student = classObj?.students.find(stu => stu.name.toLowerCase() === studentName.toLowerCase());
        if (student) {
            const total = student.marks.reduce((total, mark) => total + mark.mark, 0);
            setSelectedAnswer(
                <p>
                    Total mark of {studentName} :<span>{total}</span>
                </p>
            )
        }
    }

    const showtop = (subject: string) => {
        if (classObj) {
            const highestScorer = classObj.students.reduce((max, student) => {
                const marks = student.marks.find(mark => mark.subject === subject);
                return (marks && marks.mark > (max.mark || 0)) ? { name: student.name, mark: marks.mark } : max;
            }, { name: '', mark: 0 });

            if (highestScorer.name) {
                setSelectedAnswer(<p> <span>Highest score in {subject}:</span> {highestScorer.name} - {highestScorer.mark}</p>);
            }
        }
    };


    const showlow = (subject: string) => {
        if (classObj) {
            const lowscore = classObj.students.reduce((min, student) => {
                const marks = student.marks.find(mark => mark.subject === subject);
                return (marks && (min.mark === 0 || marks.mark < min.mark)) ? { name: student.name, mark: marks.mark } : min;
            }, { name: '', mark: 0 });         
                                        
            if (lowscore.name) {
                setSelectedAnswer(<p><span>Low Scorer in {subject}:</span> {lowscore.name} - {lowscore.mark}</p>);
            } 
        }
    };         
    


    const handletop = (subject: string, displayFunction: (subject: string) => void) => {
        setSelectedSubject(subject) 
        if (subject) {
            displayFunction(subject);
        } else {
            setSelectedAnswer(null);
        }
    };



    const lowestdisp=()=>{
          
    }


    const topperdisp=()=>{
    
            if (classObj) {
                const highestTotal = classObj.students.reduce((max, student) => {
                    const total = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                    return total > max.total ? { name: student.name, total } : max;
                }, { name: '', total: 0 });
        
                if (highestTotal.name) {
                    setSelectedAnswer(
                        <p>
                            <span>Highest total marks:</span> {highestTotal.name} - {highestTotal.total}
                        </p>
                    );
                }
            }

        
    }


    return (
        <div className="classsec">
            <div className="datasec">
                <div className="questionsec">
                    <p onClick={showClassName}>Class Name</p>
                    <p onClick={showTeacherName}>Teacher Name</p>
                    <p onClick={showStudentsName}>Students Name</p>
                    <p onClick={showStudentIds}>ID of all Students</p>

                    <p> Subject of Student
                        <div>
                            <select onChange={(e) => handleStudentChange(e.target.value, namedis)}>
                                <option value="">Select Student</option>
                                {classObj?.students.map(student => (
                                    <option key={student.id} value={student.name}>{student.name}</option>
                                ))}
                            </select>
                        </div>
                    </p>
          
                    <p> Marks of Students in all Subjects
                        <div>
                            <select onChange={(e) => handleStudentChange(e.target.value, subjectdis)}>
                                <option value="">Select Student</option>
                                {classObj?.students.map(student => (
                                    <option key={student.id} value={student.name}>{student.name}</option>
                                ))}
                            </select>
                        </div>
                    </p>
                    <p> Average marks of student
                        <div>
                            <select onChange={(e) => handleStudentChange(e.target.value, avgdis)}>
                                <option value="">Select Student</option>
                                {classObj?.students.map(student => (
                                    <option key={student.id} value={student.name}>{student.name}</option>
                                ))}
                            </select>
                        </div>
                    </p>

                    <p>Total marks of student
                        <div>
                            <select onChange={(e) => handleStudentChange(e.target.value, totaldis)}>
                                <option value="">Select Student</option>
                                {classObj?.students.map(student => (
                                    <option key={student.id} value={student.name}>{student.name}</option>
                                ))}
                            </select>
                        </div>
                    </p>               
                 
                    <p>Highest scorer in subject vise
                        <div>
                            <select onChange={(e)=>handletop(e.target.value,showtop)}>
                                <option value="">Select Subject</option>
                             
                                {classObj?.students.flatMap(student => student.marks.map(mark => mark.subject))
                                    .filter((subject, index, self) => self.indexOf(subject) === index)
                                    .map(subject => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                            </select>
                        </div>
                    </p>


                    <p>
                        Lowest Mark Scorer in subject vise
                        <div>
                            <select onChange={(e)=>handletop(e.target.value,showlow)}>
                                <option value=""> Select Subject</option>

                                {classObj?.students.flatMap(student =>student.marks.map(mark =>mark.subject))
                                .filter((subject,index,self)=>self.indexOf(subject)===index)
                                .map(subject =>(
                                    <option key={subject} value={subject}>{subject}</option>
                                ))
                                  }
                            </select>
                        </div>
                    </p>

                   <p onClick={topperdisp}>
                       Top scorer in the class
                   </p>
                   <p onClick={lowestdisp}>Lowest mark scorer in the class</p>


                </div>
                <div className="answersec">
                    <div>{selectedAnswer}</div>
                </div>
            </div>
        </div>
    );
};
