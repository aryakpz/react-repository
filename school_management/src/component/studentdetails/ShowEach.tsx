import React from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const ShowEachResult: React.FC<{ students: Student[] }> = ({ students }) => {
    const calculateTotalMarks = (marks: { subject: string; mark: number }[]) => {
        return marks.reduce((total, current) => total + current.mark, 0);
    };

    return (
        <p>
            <span>Total Marks</span>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name}: {calculateTotalMarks(student.marks)}
                    </li>
                ))}
            </ul>
        </p>
    );
};

export default ShowEachResult;
