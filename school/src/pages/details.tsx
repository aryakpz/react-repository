
import React, { useEffect, useState } from "react";
import './details.css';
import { json } from "stream/consumers";

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

// export const Details=(props ,ClassData)
export const Details: React.FC = () => {
    const [classObj, setClassObj] = useState<ClassData | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<JSX.Element | null>(null);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedCutoff, setSelectedCutoff] = useState<number | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data: ClassData = await response.json();
            setClassObj(data);
        };
        fetchData();
    }, []);

    const showClassName = () =>
        classObj && setSelectedAnswer(
            <p><span>Class:</span> {classObj.className}</p>
        );

    const showTeacherName = () =>
        classObj && setSelectedAnswer
            (<p><span>Teacher:</span> {classObj.teacherName}</p>

            );

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

    const lowestdisp = () => {

        if (classObj) {
            const lowScorer = classObj.students.reduce((lowStudent, student) => {

                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);

                return totalMarks < lowStudent.total || lowStudent.total === 0
                    ? { name: student.name, total: totalMarks }
                    : lowStudent;
            }, { name: '', total: 0 });

            setSelectedAnswer(
                <p>
                    <span> Lowest Scorer:</span>   {lowScorer.name} - {lowScorer.total}
                </p>
            );
        }
    }

    const topperdisp = () => {
        if (classObj) {
            const topScorer = classObj.students.reduce((topStudent, student) => {

                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);

                return totalMarks > topStudent.total
                    ? { name: student.name, total: totalMarks }
                    : topStudent;

            }, { name: '', total: 0 })


            setSelectedAnswer(
                <p>
                    <span>Top Scorer: </span> {topScorer.name} - {topScorer.total} Marks
                </p>
            );
        }
    }

    const disphighavg = () => {

        if (classObj) {
            const subjectTotals: { [key: string]: { totalMarks: number; count: number } } = {};

            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = { totalMarks: 0, count: 0 };
                    }
                    subjectTotals[mark.subject].totalMarks += mark.mark;
                    subjectTotals[mark.subject].count++;
                });
            });

            let highestAvgSubject = '';
            let highestAvg = 0;

            for (const subject in subjectTotals) {
                const avg = subjectTotals[subject].totalMarks / subjectTotals[subject].count;
                if (avg > highestAvg) {
                    highestAvg = avg;
                    highestAvgSubject = subject;
                }
            }
            setSelectedAnswer(
                <p>
                    <span>Highest Average:</span>  {highestAvgSubject} (Average: {highestAvg})
                </p>
            );
        }
    };

    const displowavg = () => {

        if (classObj) {
            const subjectTotals: { [key: string]: { totalMarks: number; count: number } } = {};

            classObj.students.forEach(student => {

                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = { totalMarks: 0, count: 0 };
                    }
                    subjectTotals[mark.subject].totalMarks += mark.mark;
                    subjectTotals[mark.subject].count++;
                });
            });

            let lowestAvgSubject = '';
            let lowestAvg = 0;

            for (const subject in subjectTotals) {
                const avg = subjectTotals[subject].totalMarks / subjectTotals[subject].count;
                if (avg < lowestAvg) {
                    lowestAvg = avg;
                    lowestAvgSubject = subject;
                }
            }

            setSelectedAnswer(
                <p>
                    <span>Lowest Average: </span>{lowestAvgSubject} (Average: {lowestAvg})
                </p>
            );
        }
    };

    const dispoverall = () => {

        if (classObj) {
            let totalMarks = 0;
            let totalCount = 0;

            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    totalMarks += mark.mark;
                    totalCount++;
                });
            });

            const overallAverage = totalCount > 0 ? totalMarks / totalCount : 0;

            setSelectedAnswer(
                <p>
                    <span>
                        Overall average marks :
                    </span>
                    {overallAverage}
                </p>
            );
        }
    }

    const dispoverallmark = () => {
        if (classObj) {
            let totalmark = 0
            let count = 0

            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    totalmark += mark.mark;
                    count++;
                })
            })

            setSelectedAnswer(
                <p>
                    <span>
                        Overall total mark :
                    </span>{totalmark}
                </p>
            )

        }
    }

    const dispavgmark = () => {

        if (classObj) {
            const subjectTotals: { [key: string]: { totalMarks: number; count: number } } = {};

            // Sum up marks for each subject
            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    const subject = mark.subject;

                    if (!subjectTotals[subject]) {
                        subjectTotals[subject] = { totalMarks: 0, count: 0 };
                    }

                    subjectTotals[subject].totalMarks += mark.mark; // Add to total marks
                    subjectTotals[subject].count += 1; // Increment the count
                });
            });

            // Prepare the average result for each subject
            const averages = Object.keys(subjectTotals).map(subject => {
                const { totalMarks, count } = subjectTotals[subject];
                const average = count > 0 ? totalMarks / count : 0; // Calculate average

                return `${subject}: ${average.toFixed(2)}`; // Format average to 2 decimal places
            });

            // Display the results              
            setSelectedAnswer(
                <p>
                    Average Marks:<br />
                    {averages.join(',')}
                </p>
            );
        }
    };

    const disptotalmark = () => {
        if (classObj) {
            const subjects: { [key: string]: { totalmarks: number; count: number } } = {}

            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    const subject = mark.subject;
                    if (!subjects[subject]) {
                        subjects[subject] = { totalmarks: 0, count: 0 }
                    }
                    subjects[subject].totalmarks += mark.mark;
                    subjects[subject].count += 1
                })
            })

            const total = Object.keys(subjects).map(subject => {
                const { totalmarks, count } = subjects[subject];
                const total = count > 0 ? totalmarks : 0;
                return `${subject} : ${total}`;

            });

            setSelectedAnswer(
                <p> Total Mark {total.join('')}</p>

            )
        }
    }

    const hightotalsub = () => {
        if (classObj) {
            const subjectTotals: { [key: string]: number } = {};

            // Sum up total marks for each subject
            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    const subject = mark.subject;

                    if (!subjectTotals[subject]) {
                        subjectTotals[subject] = 0;
                    }

                    subjectTotals[subject] += mark.mark; // Add to total marks for the subject
                });
            });

            // Find the subject with the highest total marks
            let highestSubject: string = '';
            let highestTotal: number = 0;

            for (const subject in subjectTotals) {
                if (subjectTotals[subject] > highestTotal) {
                    highestTotal = subjectTotals[subject];
                    highestSubject = subject;
                }
            }

            // Display the result
            if (highestSubject) {
                setSelectedAnswer(
                    <p>
                        Highest Mark : {highestSubject} : {highestTotal}
                    </p>
                );
            }
        }
    }

    const lowtotalsub = () => {

        if (classObj) {
            const subjecttotal: { [key: string]: number } = {};

            // Sum up total marks for each subject
            classObj.students.forEach(student => {
                student.marks.forEach(mark => {
                    const subject = mark.subject;

                    if (!subjecttotal[subject]) {
                        subjecttotal[subject] = 0;
                    }
                    subjecttotal[subject] += mark.mark;
                });
            });

            let lowestSubject: string = '';
            let lowestTotal: number = Infinity; // Initialize to Infinity

            // Find the subject with the lowest total marks
            for (const subject in subjecttotal) {
                if (subjecttotal[subject] < lowestTotal) {
                    lowestTotal = subjecttotal[subject];
                    lowestSubject = subject;
                }
            }

            // Display the result if a lowest subject is found
            if (lowestSubject) {
                setSelectedAnswer(
                    <p>
                        Lowest Mark: {lowestSubject}: {lowestTotal}
                    </p>
                );
            }
        }
    }

    const stuhighavg = () => {

        if (classObj) {
            const studentAverages: { name: string; average: number }[] =
                classObj.students.map(student => {
                    const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                    const average = totalMarks / student.marks.length; // Calculate average marks
                    return { name: student.name, average };
                });

            // Find the maximum average marks
            const maxAverage = Math.max(...studentAverages.map(student => student.average));

            // Filter out students with the maximum average marks
            const topScorers = studentAverages.filter(student => student.average === maxAverage);

            // Display the result
            if (topScorers.length > 0) {
                const names = topScorers.map(student => student.name).join(", ");
                setSelectedAnswer(
                    <p>
                        Highest Average: {names} - {maxAverage.toFixed(2)}
                    </p>
                );
            }
        }
    }

    const lowmarksub = () => {


        const lowestInEachSubject = () => {
            if (classObj) {
                const lowestScoresBySubject: { [key: string]: { name: string; mark: number }[] } = {};

                // Loop through each student and their marks
                classObj.students.forEach(student => {
                    student.marks.forEach(mark => {
                        const subject = mark.subject;
                        const studentName = student.name;

                        // If the subject is not yet added to lowestScoresBySubject, initialize it
                        if (!lowestScoresBySubject[subject]) {
                            lowestScoresBySubject[subject] = [{ name: studentName, mark: mark.mark }];
                        } else {
                            const currentLowest = lowestScoresBySubject[subject][0].mark;

                            // If current student's mark is lower than the current lowest, replace the lowest
                            if (mark.mark < currentLowest) {
                                lowestScoresBySubject[subject] = [{ name: studentName, mark: mark.mark }];
                            }
                            // If the current student's mark is equal to the lowest, add them to the list
                            else if (mark.mark === currentLowest) {
                                lowestScoresBySubject[subject].push({ name: studentName, mark: mark.mark });
                            }
                        }
                    });
                });

                // Display the result
                setSelectedAnswer(
                    <div>
                        {Object.entries(lowestScoresBySubject).map(([subject, students]) => (
                            <p key={subject}>
                                <strong>{subject}:</strong> {students.map(s => s.name).join(', ')} with {students[0].mark} marks
                            </p>
                        ))}
                    </div>
                );
            }
        };

    }

    const stulowavg = () => {

        if (classObj) {
            // Calculate average marks for each student
            const studentAverages: { name: string; average: number }[] = classObj.students.map(student => {
                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                const average = totalMarks / student.marks.length; // Calculate average marks
                return { name: student.name, average };
            });

            // Find the minimum average marks
            const minAverage = Math.min(...studentAverages.map(student => student.average));

            // Filter out students with the minimum average marks
            const lowScorers = studentAverages.filter(student => student.average === minAverage);

            // Display the result
            if (lowScorers.length > 0) {
                const names = lowScorers.map(student => student.name).join(", ");
                setSelectedAnswer(
                    <p>
                        Lowest Average: {names} - {minAverage.toFixed(2)}
                    </p>
                );
            }
        }


    }


    const stuhightotal = () => {
        if (classObj) {
            const studentTotals: { name: string; total: number }[] = classObj.students.map(student => {
                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                return { name: student.name, total: totalMarks };
            });

            // Find the maximum total marks
            const maxTotal = Math.max(...studentTotals.map(student => student.total));

            // Filter out students with the maximum total marks
            const topScorers = studentTotals.filter(student => student.total === maxTotal);

            // Display the result
            if (topScorers.length > 0) {
                const names = topScorers.map(student => student.name).join(", ");
                setSelectedAnswer(
                    <p>
                        Top Scorer: {names} - {maxTotal}
                    </p>
                );
            }
        }

    };

    const stulowtotal = () => {

        if (classObj) {
            const studentTotals: { name: string; total: number }[] = classObj.students.map(student => {
                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                return { name: student.name, total: totalMarks };
            });

            // Find the maximum total marks
            const minTotal = Math.min(...studentTotals.map(student => student.total));

            // Filter out students with the maximum total marks
            const topScorers = studentTotals.filter(student => student.total === minTotal);

            // Display the result
            if (topScorers.length > 0) {
                const names = topScorers.map(student => student.name).join(", ");
                setSelectedAnswer(
                    <p>
                        lowesr Scorer: {names} - {minTotal}
                    </p>
                );
            }
        }
    }


    const countAboveMark = (subject: string, cutoff: number) => {
        if (classObj) {

            const count = classObj.students.filter(student => {

                const markInSubject = student.marks.find(mark => mark.subject === subject);
                return markInSubject && markInSubject.mark > cutoff;
            }).length;


            setSelectedAnswer(
                <p>
                    {count} student.
                </p>
            );
        }
    };


    const countbelowMark = (subject: string, cutoff: number) => {
        if (classObj) {

            const count = classObj.students.filter(student => {

                const markInSubject = student.marks.find(mark => mark.subject === subject);
                return markInSubject && markInSubject.mark < cutoff;
            }).length;

            setSelectedAnswer(
                <p>
                    {count} students.
                </p>
            );
        }
    };


    const handleCutoffSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const mark = Number(e.target.value);
        countStudentsAboveMarkInAllSubjects(mark);
    };

    const countStudentsAboveMarkInAllSubjects = (cutoffMark: number) => {
        if (classObj) {
            const Students = classObj.students.filter(student => {
                // Check if the student scored above the cutoff mark in all subjects
                return student.marks.every(mark => mark.mark > cutoffMark);
            });

            // Display the result
            const count = Students.length;
            setSelectedAnswer(
                <p>
                    Number of students = {count}
                </p>
            );
        }
    };

    const handleCutoffSelection2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const mark = Number(e.target.value);
        countStudentsbelowMarkInAllSubjects(mark);
    };

    const countStudentsbelowMarkInAllSubjects = (cutoffMark: number) => {
        if (classObj) {
            const Students = classObj.students.filter(student => {
                // Check if the student scored above the cutoff mark in all subjects
                return student.marks.every(mark => mark.mark < cutoffMark);
            });

            // Display the result
            const count = Students.length;
            setSelectedAnswer(
                <p>
                    Number of students = {count}
                </p>
            );
        }
    };


    const percentageabove = (subject: string, cutoff: number) => {

        if (classObj && cutoff !== undefined) {

            const studentsBelowCutoff = classObj.students.filter(student => {
                return student.marks.every(mark => mark.mark < cutoff);
            });

            const count = studentsBelowCutoff.length;
        }

    };


    const percentagebelow = (subject: string, cutoff: number) => {
        if (classObj) {

            const count = classObj.students.filter(student => {

                const markInSubject = student.marks.find(mark => mark.subject === subject);
                return markInSubject && markInSubject.mark > cutoff;
            }).length;


            setSelectedAnswer(
                <p>
                    {count} student.
                </p>
            );
        }
    };



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
                            <select onChange={(e) => handletop(e.target.value, showtop)}>
                                <option value="">Select Subject</option>

                                {classObj?.students.flatMap(student => student.marks.map(mark => mark.subject))
                                    .filter((subject, index, self) => self.indexOf(subject) === index)
                                    .map(subject => (
                                        <option value={subject}>{subject}</option>
                                    ))}
                            </select>
                        </div>
                    </p>

                    <p> Lowest Mark Scorer in subject vise
                        <div>
                            <select onChange={(e) => handletop(e.target.value, showlow)}>
                                <option value=""> Select Subject</option>

                                {classObj?.students.flatMap(student => student.marks.map(mark => mark.subject))
                                    .filter((subject, index, self) => self.indexOf(subject) === index)
                                    .map(subject => (
                                        <option value={subject}>{subject}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </p>

                    <p onClick={topperdisp}>
                        Top scorer in the class
                    </p>

                    <p onClick={lowestdisp}>
                        Lowest mark scorer in the class
                    </p>

                    <p onClick={disphighavg}>
                        Subject with highest Average Mark
                    </p>

                    <p onClick={displowavg}>
                        Subject with lowest Average Mark
                    </p>

                    <p onClick={dispoverall}>
                        Overall average Mark in the class
                    </p>

                    <p onClick={dispoverallmark}>
                        Overall Total mark in the class
                    </p>

                    <p onClick={dispavgmark}>
                        Average mark of each subject
                    </p>

                    <p onClick={disptotalmark}>
                        Total mark of each subject
                    </p>

                    <p onClick={hightotalsub}>
                        Subject with the highest total marks.
                    </p>

                    <p onClick={lowtotalsub}>
                        Subject with lowest total mark
                    </p>

                    <p onClick={stuhighavg}>
                        Student with highest average mark
                    </p>

                    <p onClick={stulowavg}>
                        Student with lowest average mark
                    </p>

                    <p onClick={stuhightotal}>
                        Student with highest total mark
                    </p>

                    <p onClick={stulowtotal}>
                        Student with lowest total mark
                    </p>

                    <p>
                        Display the count of students above the Cutoff Mark:
                        <div>
                            <select onChange={(e) => setSelectedSubject(e.target.value)}>
                                <option value="">Select Subject</option>
                                {
                                    classObj?.students
                                        .flatMap(student => student.marks.map(mark => mark.subject)) // Flatten the subjects
                                        .filter((subject, index, self) => self.indexOf(subject) === index) // Filter for unique subjects
                                        .map((subject, index) => (
                                            <option key={index} value={subject}>{subject}</option>
                                        ))
                                }
                            </select>

                            <select onChange={(e) => setSelectedCutoff(Number(e.target.value))}>
                                <option value="">Select Cutoff Mark</option>
                                {Array.from({ length: 101 }, (_, index) => index).map(mark => (
                                    <option key={mark} value={mark}>{mark}</option>
                                ))}
                            </select>


                            <button
                                onClick={() => {
                                    if (selectedSubject && selectedCutoff !== null) {
                                        countAboveMark(selectedSubject, selectedCutoff);
                                    } else {
                                        setSelectedAnswer(<p>Please select both subject and cutoff mark</p>);
                                    }
                                }} >
                                Get Count
                            </button>
                        </div>
                    </p>

                    <p>
                        Display the count of students below the cutoff mark:
                        <div>
                            <select onChange={(e) => setSelectedSubject(e.target.value)}>
                                <option value="">Select Subject</option>
                                {
                                    classObj?.students
                                        .flatMap(student => student.marks.map(mark => mark.subject)) // Flatten the subjects
                                        .filter((subject, index, self) => self.indexOf(subject) === index) // Filter for unique subjects
                                        .map((subject, index) => (
                                            <option key={index} value={subject}>{subject}</option>
                                        ))
                                }
                            </select>

                            <select onChange={(e) => setSelectedCutoff(Number(e.target.value))}>
                                <option value="">Select Cutoff Mark</option>
                                {Array.from({ length: 101 }, (_, index) => index).map(mark => (
                                    <option key={mark} value={mark}>{mark}</option>
                                ))}
                            </select>


                            <button
                                onClick={() => {
                                    if (selectedSubject && selectedCutoff !== null) {
                                        countbelowMark(selectedSubject, selectedCutoff);
                                    } else {
                                        setSelectedAnswer(<p>Please select both subject and cutoff mark</p>);
                                    }
                                }} >
                                Get Count
                            </button>
                        </div>
                    </p>

                    <p> Students who scores above the cutoff in all subject
                        <select onChange={handleCutoffSelection}>
                            <option value="">Select Cutoff Mark</option>
                            {Array.from({ length: 101 }, (_, index) => index).map(mark => (
                                <option key={mark} value={mark}>{mark}</option>
                            ))}
                        </select>
                    </p>

                    <p> Students who score below the cutoff in all subject
                        <select onChange={handleCutoffSelection2}>
                            <option value="">Select Cutoff Mark</option>
                            {Array.from({ length: 101 }, (_, index) => index).map(mark => (
                                <option key={mark} value={mark}>{mark}</option>
                            ))}
                        </select>
                    </p>
                    <p>
                        Percentage of students who score above the cutoff
                        <div>
                            <select onChange={(e) => setSelectedSubject(e.target.value)}>
                                <option value="">Select Subject</option>
                                {
                                    classObj?.students
                                        .flatMap(student => student.marks.map(mark => mark.subject))
                                        .filter((subject, index, self) => self.indexOf(subject) === index)
                                        .map((subject, index) => (
                                            <option key={index} value={subject}>
                                                {subject}
                                            </option>
                                        ))
                                }
                            </select>
                            <select onChange={(e) => setSelectedSubject(e.target.value)}>
                                <option value="">Select cuttoff</option>
                                { }
                            </select>
                        </div>
                    </p>


                </div>
                <div className="answersec">
                    <div>{selectedAnswer}</div>
                </div>
            </div>
        </div>
    );
};                    