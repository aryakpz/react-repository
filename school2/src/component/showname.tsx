import React from 'react';

type Student = {
    name: string;
    id: number;
};

type ShowStudentsProps = {
    students: Student[];
};

const ShowStudents: React.FC<ShowStudentsProps> = ({ students }) => {
    return (
        <p>
            <span>Students:</span>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </p>
    );
};

export default ShowStudents;
