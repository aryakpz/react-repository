import React from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const ShowEachAvg: React.FC<{ students: Student[] }> = ({ students }) => {
    const calculateAverageMarks = (marks: { subject: string; mark: number }[]) => {
        const totalMarks = marks.reduce((total, current) => total + current.mark, 0);
        return marks.length > 0 ? totalMarks / marks.length : 0;
    };

    return (
        <p>
          <span>Average Marks</span>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name}{calculateAverageMarks(student.marks)}
                    </li>
                ))}
            </ul>    
        </p>
    );
};

export default ShowEachAvg;
