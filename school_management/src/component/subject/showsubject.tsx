
import React from 'react';

type Student = {
    name: string;
    id: string;
};

type StudentSelectionProps = {
    students: Student[];
    onSelectStudent: (studentName: string, label: string) => void;
    label: string; 
};

const StudentSelection: React.FC<StudentSelectionProps> = ({ students, onSelectStudent, label }) => {
    return (
        <p>
             <label>{label}</label>
             <div>
                 <select onChange={(e) => onSelectStudent(e.target.value, label)} defaultValue="">
                     <option value="" disabled>Select Student</option>
                     {students.map(student => ( 
                         <option key={student.id} value={student.name}>
                             {student.name}
                         </option>
                     ))}
                 </select>
             </div>
        </p>
    );
};

export default StudentSelection;
