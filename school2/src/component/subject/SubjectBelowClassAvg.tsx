import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const SubjectBelowClassAvg: React.FC<{ students: Student[] }> = ({ students }) => {
    const [subjectsBelowAverage, setSubjectsBelowAverage] = useState<string[]>([]);

    useEffect(() => {
        findSubjectsBelowClassAverage();
    }, [students]);

    const findSubjectsBelowClassAverage = () => {
        if (students.length === 0) return;

      
        let totalClassMarks = 0;
        let totalMarksCount = 0;

        students.forEach(student => {
            student.marks.forEach(mark => {
                totalClassMarks += mark.mark;
                totalMarksCount++;
            });
        });

        const classAverageMarks = totalClassMarks / totalMarksCount;

        const subjectMarks: { [subject: string]: { totalMarks: number; count: number } } = {};

        students.forEach(student => {
            student.marks.forEach(mark => {
                if (!subjectMarks[mark.subject]) {
                    subjectMarks[mark.subject] = { totalMarks: 0, count: 0 };
                }
                subjectMarks[mark.subject].totalMarks += mark.mark;
                subjectMarks[mark.subject].count += 1;
            });
        });

       
        const subjectsBelowAverage = Object.keys(subjectMarks).filter(subject => {
            const subjectAverage = subjectMarks[subject].totalMarks / subjectMarks[subject].count;
            return subjectAverage < classAverageMarks;
        });

        setSubjectsBelowAverage(subjectsBelowAverage);
    };

    return (
        <p>
            <span>Subjects With Below Average Marks</span>
            {subjectsBelowAverage.length > 0 ? (
                <ul>
                    {subjectsBelowAverage.map(subject => (
                        <li key={subject}>{subject}</li>
                    ))}
                </ul>
            ) : (
                <p>No subjects have average marks below the class average.</p>
            )}
        </p>
    );
};

export default SubjectBelowClassAvg;
