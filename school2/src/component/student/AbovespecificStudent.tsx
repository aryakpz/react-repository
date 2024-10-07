import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type StudentsAboveAverageProps = {
    students: Student[];
    selectedStudent: string; 
};

const StudentsAboveAverage: React.FC<StudentsAboveAverageProps> = ({ students, selectedStudent }) => {
    const [studentsAboveAverage, setStudentsAboveAverage] = useState<string[]>([]);

    useEffect(() => {
        if (students.length > 0 && selectedStudent) {
            findStudentsAboveAverage();
        }
    }, [students, selectedStudent]);

    const findStudentsAboveAverage = () => {
        // Find the specific student by name
        const specificStudent = students.find(student => student.name === selectedStudent);
        if (!specificStudent) return;

        // Step 1: Calculate the average marks of the specific student
        const totalMarks = specificStudent.marks.reduce((sum, mark) => sum + mark.mark, 0);
        const averageMarks = totalMarks / specificStudent.marks.length;

        // Step 2: Find students who scored above average in all subjects
        const aboveAverageStudents = students.filter(student => {
            if (student.name === selectedStudent) return false; // Exclude the specific student
            return student.marks.every(mark => mark.mark > averageMarks);
        }).map(student => student.name); // Extract names of the students

        setStudentsAboveAverage(aboveAverageStudents);
    };

    return (
        <p>
            <span>Students score above {selectedStudent} </span>
            {studentsAboveAverage.length > 0 ? (
                <ul>
                    {studentsAboveAverage.map(studentName => (
                        <li key={studentName}>{studentName}</li>
                    ))}
                </ul>
            ) : (
                <p>No students scored above average in all subjects.</p>
            )}
        </p>
    );
};

export default StudentsAboveAverage;
