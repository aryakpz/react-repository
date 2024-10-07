import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type LowestPercentageSubjectProps = {
    students: Student[];
    selectedStudent: string; 
};

const StudentPercentageLow: React.FC<LowestPercentageSubjectProps> = ({ students, selectedStudent }) => {
    const [lowestPercentageSubjects, setLowestPercentageSubjects] = useState<{ subject: string, percentage: number }[]>([]);

    useEffect(() => {
        if (students.length > 0 && selectedStudent) {
            calculateLowestPercentageSubjects();
        }
    }, [students, selectedStudent]);

    const calculateLowestPercentageSubjects = () => {
        // Find the specific student by name
        const specificStudent = students.find(student => student.name === selectedStudent);
        if (!specificStudent) return;

        const subjectPercentages: { [subject: string]: number } = {};

        // Step 1: Loop through each subject in the specific student's marks
        specificStudent.marks.forEach(mark => {
            let studentsAboveCount = 0;

            // Step 2: Count how many students scored above the specific student's mark in that subject
            students.forEach(student => {
                const studentMarkForSubject = student.marks.find(m => m.subject === mark.subject);
                if (studentMarkForSubject && studentMarkForSubject.mark > mark.mark) {
                    studentsAboveCount++;
                }
            });

            // Step 3: Calculate the percentage for this subject
            const percentage = (studentsAboveCount / students.length) * 100;
            subjectPercentages[mark.subject] = percentage;
        });

        // Step 4: Find the subject(s) with the lowest percentage
        const lowestPercentage = Math.min(...Object.values(subjectPercentages));
        const subjectsWithLowestPercentage = Object.entries(subjectPercentages)
            .filter(([_, percentage]) => percentage === lowestPercentage)
            .map(([subject, percentage]) => ({ subject, percentage }));

        setLowestPercentageSubjects(subjectsWithLowestPercentage);
    };

    return (
        <p>
            <span>Subjects & percentage {selectedStudent}</span>
            <ul>
                {lowestPercentageSubjects.map(({ subject, percentage }) => (
                    <li key={subject}>
                        {subject}: {percentage.toFixed(2)}%
                    </li>
                ))}
            </ul>
        </p>
    );
};

export default StudentPercentageLow;
