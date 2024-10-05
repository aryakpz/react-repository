
import React from 'react';

type StudenttotalProps = {
    students: {
        name: string;
        id: number;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];

    selectedStudent: string;
};


const Studenttotal: React.FC<StudenttotalProps> = ({ students, selectedStudent }) => {
    const student = students.find(stu => stu.name.toLowerCase() === selectedStudent.toLowerCase());

    if (!student) {
        return <p>No student found.</p>; 
    }
    
    const total = student.marks.reduce((total, mark) => total + mark.mark, 0)

    return (
        <p>
            Totak mark of {selectedStudent}: <span>{total}</span>
        </p>
    );
};
     
export default Studenttotal;