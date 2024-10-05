import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const SubjectBelowMajority: React.FC<{ students: Student[] }> = ({ students }) => {
    const [subjectsBelowAverage, setSubjectsBelowAverage] = useState<string[]>([]);

    useEffect(() => {
        findSubjectsBelowAverage();
    }, [students]);

    const findSubjectsBelowAverage = () => {
        
        const subjectTotals: { [subject: string]: { total: number; count: number } } = {};
        const subjectCount: { [subject: string]: number } = {};

        students.forEach(student => {
            student.marks.forEach(({ subject, mark }) => {
                if (!subjectTotals[subject]) {
                    subjectTotals[subject] = { total: 0, count: 0 };
                    subjectCount[subject] = 0; 
                }
                subjectTotals[subject].total += mark;
                subjectTotals[subject].count += 1;
            });
        });

        
        const subjectAverages: { [subject: string]: number } = {};
        Object.keys(subjectTotals).forEach(subject => {
            subjectAverages[subject] = subjectTotals[subject].total / subjectTotals[subject].count;
        });

  
        const belowAverageCounts: { [subject: string]: number } = {};
        Object.keys(subjectAverages).forEach(subject => {
            belowAverageCounts[subject] = students.filter(student =>
                student.marks.find(mark => mark.subject === subject && mark.mark < subjectAverages[subject])
            ).length;
        });
        const majorityThreshold = Math.ceil(students.length / 2);

        const subjectsWithMajorityBelowAverage = Object.keys(belowAverageCounts).filter(
            subject => belowAverageCounts[subject] >= majorityThreshold
        );

        setSubjectsBelowAverage(subjectsWithMajorityBelowAverage);
    };

    return (
        <p>
            <span>Subjects with  Above  Majority </span>
            {subjectsBelowAverage.length > 0 ? (
                <ul>
                    {subjectsBelowAverage.map(subject => (
                        <li key={subject}>{subject}</li>
                    ))}
                </ul>
            ) : (
                <p>No subjects </p>
            )}
        </p>
    );
};

export default SubjectBelowMajority;
