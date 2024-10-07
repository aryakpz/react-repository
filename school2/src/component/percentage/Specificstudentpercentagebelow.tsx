import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type BelowAveragePercentageProps = {
    students: Student[];
    selectedStudent: string; 
};

const Specificstudentpercentagebelow: React.FC<BelowAveragePercentageProps> = ({ students, selectedStudent }) => {
    const [belowAveragePercentages, setBelowAveragePercentages] = useState<{ subject: string; percentage: number }[]>([]);

    useEffect(() => {
        if (students.length > 0 && selectedStudent) {
            calculateBelowAveragePercentages();
        }
    }, [students, selectedStudent]);

    const calculateBelowAveragePercentages = () => {
        const specificStudent = students.find(student => student.name === selectedStudent);
        if (!specificStudent) return;

        // Step 1: Calculate total marks and counts for each subject
        const subjectTotals: { [subject: string]: { total: number; count: number } } = {};

        students.forEach(student => {
            student.marks.forEach(mark => {
                if (!subjectTotals[mark.subject]) {
                    subjectTotals[mark.subject] = { total: 0, count: 0 };
                }
                subjectTotals[mark.subject].total += mark.mark;
                subjectTotals[mark.subject].count++;
            });
        });

        // Step 2: Calculate average marks for the specific student
        const averages: { [subject: string]: number } = {};
        specificStudent.marks.forEach(mark => {
            if (subjectTotals[mark.subject]) {
                averages[mark.subject] = mark.mark; // average for the specific student
            }
        });

        // Step 3: Calculate the percentage of students scoring below the average marks
        const percentages: { subject: string; percentage: number }[] = [];

        for (const subject in averages) {
            const averageMark = averages[subject];
            let studentsBelowCount = 0;

            students.forEach(student => {
                const studentMark = student.marks.find(m => m.subject === subject);
                if (studentMark && studentMark.mark < averageMark) {
                    studentsBelowCount++;
                }
            });

            const percentage = (studentsBelowCount / students.length) * 100;
            percentages.push({ subject, percentage });
        }

        setBelowAveragePercentages(percentages);
    };

    return (
        <p>
            <span>Percentage r {selectedStudent}</span>
            <ul>
                {belowAveragePercentages.map(({ subject, percentage }) => (
                    <li key={subject}>
                        {subject}: {percentage.toFixed(2)}%
                    </li>
                ))}
            </ul>
        </p>
    );
};

export default Specificstudentpercentagebelow;
