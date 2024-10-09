import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const SubjectAboveClassAvg: React.FC<{ students: Student[] }> = ({ students }) => {
    const [subjectsAboveAverage, setSubjectsAboveAverage] = useState<string[]>([]);

    useEffect(() => {
        findSubjectsAboveClassAverage();
    }, [students]);

    const findSubjectsAboveClassAverage = () => {
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

          const subjectsAboveAverage = Object.keys(subjectMarks).filter(subject => {
            const subjectAverage = subjectMarks[subject].totalMarks / subjectMarks[subject].count;
            return subjectAverage > classAverageMarks;
        });

        setSubjectsAboveAverage(subjectsAboveAverage);
    };

    return (
        <p>
            <span>Subjects Above Average </span>
            {subjectsAboveAverage.length > 0 ? (
                <ul>
                    {subjectsAboveAverage.map(subject => (
                        <li key={subject}>{subject}</li>
                    ))}
                </ul>
            ) : (
                <p>No subjects .</p>
            )}
        </p>
    );
};

export default SubjectAboveClassAvg;
