import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const PercentageBelowEachSubject: React.FC<{ students: Student[] }> = ({ students }) => {
    const [subjectPercentages, setSubjectPercentages] = useState<{ [subject: string]: number }>({});

    useEffect(() => {
        if (students.length > 0) {
            calculatePercentageBelowAverage();
        }
    }, [students]);

    const calculatePercentageBelowAverage = () => {
        const subjectMarks: { [subject: string]: { totalMarks: number; count: number } } = {};
        const studentCount = students.length;

        students.forEach(student => {
            student.marks.forEach(mark => {
                if (!subjectMarks[mark.subject]) {
                    subjectMarks[mark.subject] = { totalMarks: 0, count: 0 };
                }
                subjectMarks[mark.subject].totalMarks += mark.mark;
                subjectMarks[mark.subject].count++;
            });
        });

        const subjectAverages: { [subject: string]: number } = {};
        Object.keys(subjectMarks).forEach(subject => {
            subjectAverages[subject] = subjectMarks[subject].totalMarks / subjectMarks[subject].count;
        });

        const percentages: { [subject: string]: number } = {};
        Object.keys(subjectAverages).forEach(subject => {
            let belowAverageCount = 0;

            students.forEach(student => {
                const studentMark = student.marks.find(mark => mark.subject === subject)?.mark;
                if (studentMark && studentMark < subjectAverages[subject]) {
                    belowAverageCount++;
                }
            });

            percentages[subject] = (belowAverageCount / studentCount) * 100;
        });

        setSubjectPercentages(percentages);
    };

    return (
        <p>
            <span>Percentage of Students Scoring Below Class Average in Each Subject</span>
            {Object.keys(subjectPercentages).length > 0 ? (
                <ul>
                    {Object.entries(subjectPercentages).map(([subject, percentage]) => (
                        <li key={subject}>
                            {subject}: {percentage.toFixed(2)}%
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}
        </p>
    );
};

export default PercentageBelowEachSubject;
