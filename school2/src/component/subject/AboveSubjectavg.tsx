import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type ClassData = {
    students: Student[];
};

const AboveSubjectavg: React.FC<{ students: Student[] }> = ({ students }) => {
    const [majorityAboveSubjects, setMajorityAboveSubjects] = useState<string[]>([]);

    useEffect(() => {
        const calculateSubjectAverages = () => {
            const totals: { [subject: string]: number } = {};
            const counts: { [subject: string]: number } = {};

            students.forEach(student =>
                student.marks.forEach(mark => {
                    totals[mark.subject] = (totals[mark.subject] || 0) + mark.mark;
                    counts[mark.subject] = (counts[mark.subject] || 0) + 1;
                })
            );

            const subjectsAboveAvg: { [subject: string]: number } = {};
            students.forEach(student =>
                student.marks.forEach(mark => {
                    const avg = totals[mark.subject] / counts[mark.subject];
                    if (mark.mark > avg) {
                        subjectsAboveAvg[mark.subject] = (subjectsAboveAvg[mark.subject] || 0) + 1;
                    }
                })
            );

            const majoritySubjects = Object.keys(subjectsAboveAvg).filter(subject => subjectsAboveAvg[subject] > students.length / 2);

            setMajorityAboveSubjects(majoritySubjects);
        };

        calculateSubjectAverages();
    }, [students]);

    return (
        <p>
            <span>Above Average:</span>
          {majorityAboveSubjects.length > 0 ? (
                <ul>
                    {majorityAboveSubjects.map(subject => (
                        <li key={subject}>{subject}</li>
                    ))}
                </ul>
            ) : (
                <p>No subjects found where the majority scored above average.</p>
            )}
        </p>
    );
};

export default AboveSubjectavg;
