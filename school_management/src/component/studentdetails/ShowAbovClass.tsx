import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const AboveclassMajority: React.FC<{ students: Student[] }> = ({ students }) => {
    const [belowAverageStudents, setBelowAverageStudents] = useState<Student[]>([]);

    useEffect(() => {
        findBelowAverageStudents();
    }, [students]);

    const findBelowAverageStudents = () => {
    
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

       
        const majorityCount = Math.ceil(Object.keys(subjectAverages).length / 2);
        const studentsBelowAverage = students.filter(student => {
            const belowAverageSubjectCount = student.marks.filter(({ subject, mark }) => mark < subjectAverages[subject]).length;
            return belowAverageSubjectCount >= majorityCount;
        });

        setBelowAverageStudents(studentsBelowAverage);
    };

    return (
        <p>
           
           <span>Above majority</span>
            <ul>
                {belowAverageStudents.length > 0 ? (
                    belowAverageStudents.map(student => (
                        <li key={student.id}>{student.name}</li>
                    ))
                ) : (
                    <li>No students </li>
                )}
            </ul>
        </p>
    );
}; 

export default AboveclassMajority;
