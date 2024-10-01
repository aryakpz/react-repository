
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './classa.css';

export const ClassA = () => {
    const classObj = {
        "name": "Class A",
        "teacherName": "Mary",
        "students": [
            {
                "name": "Ravi",
                "id": "101",
                "marks": [
                    { "subject": "English", "mark": 25 },
                    { "subject": "Maths", "mark": 48 },
                    { "subject": "Physics", "mark": 40 },
                    { "subject": "Chemistry", "mark": 30 },
                    { "subject": "Computer", "mark": 20 }
                ]
            },
            {
                "name": "Aju",
                "id": "102",
                "marks": [
                    { "subject": "English", "mark": 35 },
                    { "subject": "Maths", "mark": 38 },
                    { "subject": "Physics", "mark": 33 },
                    { "subject": "Chemistry", "mark": 34 },
                    { "subject": "Computer", "mark": 30 }
                ]
            },
            {
                "name": "Mini SS",
                "id": "103",
                "marks": [
                    { "subject": "English", "mark": 12 },
                    { "subject": "Maths", "mark": 49 },
                    { "subject": "Physics", "mark": 18 },
                    { "subject": "Chemistry", "mark": 30 },
                    { "subject": "Computer", "mark": 40 }
                ]
            },
            {
                "name": "Binu",
                "id": "104",
                "marks": [
                    { "subject": "English", "mark": 49 },
                    { "subject": "Maths", "mark": 49 },
                    { "subject": "Physics", "mark": 47 },
                    { "subject": "Chemistry", "mark": 46 },
                    { "subject": "Computer", "mark": 50 }
                ]
            }
        ]
    };

    const navback = useNavigate();

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const showClassName = () => {
        setSelectedAnswer(<p><span>Class:</span> {classObj.name}</p>);
    };

    const showTeacherName = () => {
        setSelectedAnswer(<p><span>Teacher:</span> {classObj.teacherName}</p>);
    };


    const showStudentsName = () => {
        const students = classObj.students.map(student => (
            <li> {student.name}</li>

        ));
        setSelectedAnswer(<p><span>Students:</span> {students}</p>);
    };


    const showStudentIds = () => {
        const ids = classObj.students.map(student => (
            <li>{student.id} - {student.name}</li>
        ));
        setSelectedAnswer(<p><span>IDs:</span> {ids}</p>);
    };


    const [name, setnamechange] = useState('')
    const readsec = (fn1, fn2) => {
        return (
            setSelectedAnswer(
                <div className="inputread">
                    <input type="text"
                        placeholder="Enter Student/Subject Name :"
                        onChange={(e) => {
                            fn1(e);
                        }}>
                    </input>
                    <button onClick={() => {
                        fn2();
                    }}>View Result</button>
                </div>)
        );
    };


    const getname = (e) => {
        return (
            setnamechange(e.target.value)
        )
    }


    const changename = () => {
        const student = classObj.students.find(stu => stu.name.toLowerCase() === name.toLowerCase());
        const val = student ? (
            student.marks.map((std) => (
                <li>
                    {std.subject}
                </li>
            ))
        ) : (
            <>Student not found.</>
        );

        setSelectedAnswer(<p><span>Subject of {name}</span>{val}</p>);
    };

    const printmarkname = () => {
        const student = classObj.students.find(stu => stu.name.toLowerCase() === name.toLowerCase());
        const val = student ? (
            student.marks.map(std => (
                <li>
                    {std.subject}  = {std.mark}
                </li>
            ))
        ) : <>Student not found.</>;

        setSelectedAnswer(<p><span>Marks of {name}</span>{val}</p>);
    };

    const printavgmark = () => {
        const student = classObj.students.find(stu => stu.name.toLowerCase() === name.toLowerCase())
        // const val=student ?(
        // )
    }


    return (
        <div className="classsec">
            <div className="datasec">
                <div className="questionsec">
                    <p onClick={showClassName}>Class Name</p>
                    <p onClick={showTeacherName}>Teacher Name</p>
                    <p onClick={showStudentsName}>Students Name</p>
                    <p onClick={showStudentIds}>ID of all Students</p>
                    <p onClick={() => readsec(getname, changename)}>Subjects of Students</p>
                    <p onClick={() => readsec(getname, printmarkname)}>Marks of Student</p>
                    <p onClick={() => readsec(getname, printavgmark)}>Average mark of Student</p>
                    <p onClick={readsec}>Total mark of Student in all subject</p>
                    <p onClick={readsec}>Subject wise average mark of Student</p>
                    <p onClick={readsec}></p>
                </div>

                <div className="answersec">
                    <div>
                        {/* {readsec} */}
                        {selectedAnswer}

                    </div>
                </div>
            </div>
        </div>
    );
};



