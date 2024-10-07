import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type StudentsBelowAverageProps = {
    students: Student[];
    selectedStudent: string; 
};

const StudentsBelowAverage: React.FC<StudentsBelowAverageProps> = ({ students, selectedStudent }) => {
    const [studentsBelowAverage, setStudentsBelowAverage] = useState<string[]>([]);

    useEffect(() => {
        if (students.length > 0 && selectedStudent) {
            findStudentsBelowAverage();
        }
    }, [students, selectedStudent]);

    const findStudentsBelowAverage = () => {
        // Find the specific student by name
        const specificStudent = students.find(student => student.name === selectedStudent);
        if (!specificStudent) return;

        // Step 1: Calculate the average marks of the specific student
        const totalMarks = specificStudent.marks.reduce((sum, mark) => sum + mark.mark, 0);
        const averageMarks = totalMarks / specificStudent.marks.length;

        // Step 2: Find students who scored below average in all subjects
        const belowAverageStudents = students.filter(student => {
            if (student.name === selectedStudent) return false; // Exclude the specific student
            return student.marks.every(mark => mark.mark < averageMarks);
        }).map(student => student.name); // Extract names of the students

        setStudentsBelowAverage(belowAverageStudents);
    };

    return (
        <div>
            <h2>Students Score below {selectedStudent} </h2>
            {studentsBelowAverage.length > 0 ? (
                <ul>
                    {studentsBelowAverage.map(studentName => (
                        <li key={studentName}>{studentName}</li>
                    ))}
                </ul>
            ) : (
                <p>No students scored below average in all subjects.</p>
            )}
        </div>
    );
};

export default StudentsBelowAverage;
