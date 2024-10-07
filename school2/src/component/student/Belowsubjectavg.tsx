import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type SubjectsBelowAverageProps = {
    students: Student[];
    selectedStudent: string; 
};

const SubjectsBelowAverage: React.FC<SubjectsBelowAverageProps> = ({ students, selectedStudent }) => {
    const [subjectsBelowAverage, setSubjectsBelowAverage] = useState<{ subject: string; average: number }[]>([]);

    useEffect(() => {
        if (students.length > 0 && selectedStudent) {
            findSubjectsBelowAverage();
        }
    }, [students, selectedStudent]);

    const findSubjectsBelowAverage = () => {
        // Step 1: Find the specific student by name
        const specificStudent = students.find(student => student.name === selectedStudent);
        if (!specificStudent) return;

        // Step 2: Calculate the average marks of the specific student
        const totalMarks = specificStudent.marks.reduce((sum, mark) => sum + mark.mark, 0);
        const averageMarks = totalMarks / specificStudent.marks.length;

        // Step 3: Calculate average marks for each subject across all students
        const subjectTotals: { [subject: string]: number[] } = {};
        students.forEach(student => {
            student.marks.forEach(mark => {
                if (!subjectTotals[mark.subject]) {
                    subjectTotals[mark.subject] = [];
                }
                subjectTotals[mark.subject].push(mark.mark);
            });
        });

        // Step 4: Calculate average marks for each subject
        const subjectAverages: { [subject: string]: number } = {};
        for (const subject in subjectTotals) {
            const totalSubjectMarks = subjectTotals[subject].reduce((sum, mark) => sum + mark, 0);
            subjectAverages[subject] = totalSubjectMarks / subjectTotals[subject].length;
        }

        // Step 5: Find subjects where average marks are below the specific student's average
        const belowAverageSubjects = Object.entries(subjectAverages)
            .filter(([_, average]) => average < averageMarks)
            .map(([subject, average]) => ({ subject, average }));

        setSubjectsBelowAverage(belowAverageSubjects);
    };

    return (
        <p>
            <span>Subjects with Average {selectedStudent}</span>
            {subjectsBelowAverage.length > 0 ? (
                <ul>
                    {subjectsBelowAverage.map(({ subject, average }) => (
                        <li key={subject}>
                            {subject}: {average.toFixed(2)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No subjects</p>
            )}
        </p>
    );
};

export default SubjectsBelowAverage;
