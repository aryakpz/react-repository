
import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const LowEachSubject: React.FC<{ students: Student[] }> = ({ students }) => {
    const [lowestScorers, setLowestScorers] = useState<{ subject: string; studentNames: string[]; mark: number }[]>([]);

    useEffect(() => {
        findLowestScorers();
    }, [students]);

    const findLowestScorers = () => {
        if (!students.length) return; 

        const subjectLowestScorers: { [subject: string]: { minMark: number; students: Set<string> } } = {};

        students.forEach(student => {
            student.marks.forEach(({ subject, mark }) => {
                if (!subjectLowestScorers[subject]) {
                   
                    subjectLowestScorers[subject] = { minMark: mark, students: new Set([student.name]) };
                } else {
                 
                    const subjectData = subjectLowestScorers[subject];
                    if (mark < subjectData.minMark) {
                        subjectData.minMark = mark;
                        subjectData.students = new Set([student.name]);
                    } else if (mark === subjectData.minMark) {
                        subjectData.students.add(student.name);
                    }
                }
            });
        });

    
        const lowestScorersArray = Object.keys(subjectLowestScorers).map(subject => ({
            subject,
            mark: subjectLowestScorers[subject].minMark,
            studentNames: Array.from(subjectLowestScorers[subject].students),
        }));

        setLowestScorers(lowestScorersArray);
    };

    return (
        <p>
            <span>Lowest Scorers</span>
            <ul>
                {lowestScorers.map(({ subject, studentNames, mark }) => (
                    <li key={subject}>
                        <span>{subject}:</span> {studentNames}-{mark} 
                    </li>
                ))}
            </ul>
        </p>
    );
};

export default LowEachSubject;