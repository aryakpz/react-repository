import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const PercentageAboveAvg: React.FC<{ students: Student[] }> = ({ students }) => {
    const [percentages, setPercentages] = useState<{ subject: string; percentage: number }[]>([]);

    useEffect(() => {
        calculatePercentagesAboveAverage();
    }, [students]);

    const calculatePercentagesAboveAverage = () => {
        
        const subjectTotals: { [subject: string]: { total: number; count: number } } = {};
      
        students.forEach(student => {
            student.marks.forEach(({ subject, mark }) => {
                if (!subjectTotals[subject]) {
                    subjectTotals[subject] = { total: 0, count: 0 };
                }
                subjectTotals[subject].total += mark;
                subjectTotals[subject].count += 1;
            });
        });

     
        const subjectAverages: { [subject: string]: number } = {};
        Object.keys(subjectTotals).forEach(subject => {
            subjectAverages[subject] = subjectTotals[subject].total / subjectTotals[subject].count;
        });

        const aboveAveragePercentages: { subject: string; percentage: number }[] = [];

        Object.keys(subjectAverages).forEach(subject => {
            const aboveAverageCount = students.filter(student =>
                student.marks.some(mark => mark.subject === subject && mark.mark > subjectAverages[subject])
            ).length;

            const percentage = (aboveAverageCount / students.length) * 100;

            aboveAveragePercentages.push({ subject, percentage });
        });

        setPercentages(aboveAveragePercentages);
    };

    return (
        <p>
            <span>Percentage of Students above average</span>
            <ul>
                {percentages.map(({ subject, percentage }) => (
                    <li key={subject}>
                        {subject}: {percentage.toFixed(2)}%
                    </li>
                ))}
            </ul>
        </p>
    );
};

export default PercentageAboveAvg;
