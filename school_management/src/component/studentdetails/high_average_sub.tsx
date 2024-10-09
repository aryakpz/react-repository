import React from 'react';

type HighestAverageDisplayProps= {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
}

const HighestAverageDisplay: React.FC<HighestAverageDisplayProps> = ({ students }) => {
    const subjectTotals: { [key: string]: { totalMarks: number; count: number } } = {};

    students.forEach(student => {
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

    return (
        <p>
            <span>Highest Average:</span> {highestAvgSubject} (Average: {highestAvg.toFixed(2)})
        </p>
    );
};

export default HighestAverageDisplay;
