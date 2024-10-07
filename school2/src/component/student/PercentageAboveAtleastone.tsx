import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type AboveAverageInSubjectProps = {
    students: Student[];
};

const PercentageAboveAverageInSubject: React.FC<AboveAverageInSubjectProps> = ({ students }) => {
    const [percentageAboveAverage, setPercentageAboveAverage] = useState<number | null>(null);

    useEffect(() => {
        if (students.length > 0) {
            calculatePercentageAboveAverage();
        }
    }, [students]);

    const calculatePercentageAboveAverage = () => {
        const subjectTotals: { [subject: string]: number } = {};
        const subjectCounts: { [subject: string]: number } = {};

        // Step 1: Calculate total marks and count for each subject
        students.forEach(student => {
            student.marks.forEach(mark => {
                subjectTotals[mark.subject] = (subjectTotals[mark.subject] || 0) + mark.mark;
                subjectCounts[mark.subject] = (subjectCounts[mark.subject] || 0) + 1;
            });
        });

        // Step 2: Calculate the average marks for each subject
        const subjectAverages: { [subject: string]: number } = {};
        for (const subject in subjectTotals) {
            subjectAverages[subject] = subjectTotals[subject] / subjectCounts[subject];
        }

        // Step 3: Check each student to see if they scored above the average in at least one subject
        let studentsAboveAverageCount = 0;

        students.forEach(student => {
            const scoredAboveInAtLeastOne = student.marks.some(mark => mark.mark > subjectAverages[mark.subject]);
            if (scoredAboveInAtLeastOne) {
                studentsAboveAverageCount++;
            }
        });

        // Step 4: Calculate the percentage of students who scored above the average in at least one subject
        const percentage = (studentsAboveAverageCount / students.length) * 100;
        setPercentageAboveAverage(percentage);
    };

    return (
        <p>
            <span>Percentage of Students </span>
            {percentageAboveAverage !== null ? (
                <p>{percentageAboveAverage.toFixed(2)}%</p>
            ) : (
                <p>No data available.</p>
            )}
        </p>
    );
};

export default PercentageAboveAverageInSubject;
